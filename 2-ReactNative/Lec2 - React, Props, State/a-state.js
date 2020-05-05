import React from "react";
import { render } from "react-dom";

const style = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

// 関数表記でのコンポーネント
const App = (props) => (
  <div className="App">
    <h2>{props.count}</h2>
  </div>
);
// クラス表記でのコンポーネント
// stateを使用するにはconstructor(props) ~ this.stateまでを書かなければならない。
class App2 extends React.Component {
  constructor(props) {
    // React.Componentのpropsを継承し、内部のstateを使用できるようにする。
    super(props)
    this.state = {
      count: 0
    }
  }
  // レンダー内でstateに対し適用する関数
  increaseCount() {
    // state内のcountプロパティに対して状態を変更し渡している。
    // this.setState({count: this.state.count + 1}) <- オブジェクトをマージしている
    // this.setState({count: this.state.count + 1})
    // -> {count: 0} ,{this.state.count + 1}, {this.state.count + 1}
    // それぞれのオブジェクトをマージしているだけなので同じ値をマージしても一度しかかさんされていない。

    // 関数を使用して、前回の処理の結果を引数としてとりそこに＋１をしてみると、重複した処理がかのうになる。
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
    // -> 2
    console.log(this.state.count)
  }
  render() {
    return (
      <div style={style}>
        <div>
          {/* 通常、thisで関数を渡す場合はthisをバインドしなければならない */}
          {/* <button onClick={this.increaseCount.bind(this)}>Increase</button> */}
          {/* アロー表記を使用するとthisが暗黙の返り値として自動的にバインドされる。 */}
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  rootElement
)