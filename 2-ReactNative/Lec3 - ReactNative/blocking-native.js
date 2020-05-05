import * as React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  // ブロッキングな処理
  blockJS(){
    console.log('blocking');
    const done = Date.now() + 5000
    //　ずっと終わらない処理
    while(Date.now() < done){

    }
    console.log("unblocked");
  }
  render () {
    // ボタンをタップするとブロッキング処理が始まります。
    return (
      <ScrollView style={styles.container}>
        <Button title="block js" onPress={() => this.blockJS()} />
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});