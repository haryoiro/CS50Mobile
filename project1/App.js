import React, { Component }from 'react';
import { Text, Button, View, StyleSheet, Vibration, TextInput, TouchableHighlight, Platform, PlatformIOSStatic } from 'react-native';

import styles from './styles/style'

const appColors = {
  fWhite: "#FFFFFF",
  kentPaper: "#ECF0F1",
  pomodoro: "#C42C28"
}


const SettingInput = (props) => (
  <View style={styles.buttonContainer}>
    <Text style={styles.settingInputText}> {props.text} </Text>
    <TextInput style={styles.textInputStyle}
      underlayColor={appColors.fWhite}
      keyboardType={'number-pad'}
      onChangeText={props.onChangeNumber}
      defaultValue={(props.value / 60).toString()}
      maxLength={2}/>
    <TouchableHighlight onPress={props.onSet}>
      <Text style={styles.settingInputText}> SET </Text>
    </TouchableHighlight>
  </View>
)

const ActionInput = (props) => (
  <View >
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={appColors.fWhite}
      onPress={props.onSet}>
      <Text style={styles.mainButton}> {props.text} </Text>
    </TouchableHighlight>
  </View>
)

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      startTime: 1500, // default: 1500seconds 25minute
      timer: 1500, // default: 1500seconds 25minute
      breakTime: 300,
      isPaused: true,
      isBreakTime: false,
      duration: [10],
      background: appColors.kentPaper
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.timdeclement(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  defaultTime() {
    return this.setState({ timer: this.state.startTime, isPaused: true })
  }

  notificationColor = () => {
    //  + (Math.random() * 0xFFFFFF << 0).toString(16)
    return this.setState({ background: appColors.pomodoro })
  }

  defaultColor = () => {
    return this.setState({ background: appColors.kentPaper })
  }

  timdeclement = () => {
    if (!this.state.isPaused && this.state.timer >= 1) {
      this.setState({ timer: this.state.timer - 1, background: appColors.kentPaper })
    }
    else if (!this.state.isPaused && this.state.timer <= 0) {
      Vibration.vibrate(this.state.duration)
      this.notificationColor()
      setTimeout(() => {
        Vibration.cancel()
        this.setState({ isBreakTime: !this.state.isBreakTime, timer: this.state.breakTime })
        this.defaultColor()
      }, 1000)
    }
  }

  togglePause() {
    this.setState({ isPaused: !this.state.isPaused })
  }

  buttonMessage() {
    return this.state.isPaused ? "Start" : "Stop"
  }
  /*
  * zerroPadding
  * @param num 桁揃えしたい整数を入力
  * @param length 何桁に揃えるかを入力
  * @return strings 桁揃えされた数が文字列型で出力
  */
  zeroPadding = (num, length) => {
    return ('0' + num).slice(length)
  }
  // 整数の秒数から分単位を除き秒数のみ抽出。二桁揃えで出力
  calcSecToRoundSec = (timer) => {
    return this.zeroPadding(timer % 60, -2)
  }
  // 整数の秒数から分単位のみ抽出し，2桁揃えで出力
  calcSecToRoundMin = (timer) => {
    return this.zeroPadding(Math.floor(timer / 60), -2)
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.background }]}>
        <Text style={styles.title}>END LESS POMODORO</Text>
        <Text style={styles.paragraph}>{this.calcSecToRoundMin(this.state.timer)} : {this.calcSecToRoundSec(this.state.timer)}</Text>
        <View style={styles.buttonContainer}>
          <ActionInput text={this.buttonMessage()} onSet={() => this.togglePause()} />
          <ActionInput text="Reset" onSet={() => this.defaultTime()} />
        </View>
        <View style={styles.verticalSlice}>
          <SettingInput
            onChangeNumber={value => this.setState({ startTime: value * 60, isPaused: true })}
            onSet={() => this.defaultTime()} value={this.state.startTime} text="Work " />
          <SettingInput
            onChangeNumber={value => this.setState({ breakTime: value * 60, isPaused: true })}
            onSet={() => this.defaultTime()} value={this.state.breakTime} text="Break" />
        </View>
      </View>
    )
  }
}