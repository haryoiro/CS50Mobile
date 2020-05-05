# CS50M -Lecture1 JavaScript

## JavaScript
 - Cなどの言語はコンパイラ言語である
 - JavaScriptはインタプリタ言語
 - JavaSCriptはブラウザ上で実行される
 - Node.jsというランタイム環境を使用することでブラウザ外でも使用できる
 - Node.js, Chromeなどで動いている- - JavaScriptはV8エンジンという環境の上で動いている
 - ECMAという団体によって標準化されている。

## Syntax
変数宣言
``` JavaScript
const firstname = "Iro";
const lastname = "Haryo";

const val = 50;
```

配列
```JavaScript
cosnt arr = [
  'string',
  50,
  function () {console.log("hi!")}
]
```
配列の中にある関数へアクセスし実行することもできる
```
arr[2]()
```


## FIrst-Class function
>>
>第一級関数（だいいっきゅうかんすう、英: first-class function、ファーストクラスファンクション）[1]とは、関数を第一級オブジェクトとして扱うことのできるプログラミング言語の性質、またはそのような関数のことである。
> -- https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E9%96%A2%E6%95%B0
- #### Map
- #### Filter
- #### Reduce

### Map
- Mapはセットしたオブジェクトのすべての要素に対し処理を実行する。
- ```JavaScript
  function addOne(num) {return num + 1}
  const x = [1, 2, 3, 4, 5, 6]
  x.map(addOne)

  // ちゃんと書くと
  x.map(num => num + 1)
  ```
- => [2, 3, 4, 5, ,6 7]

### Filter
- Filterはセットしたオブジェクトまたは配列のすべての要素に対し真偽判定をし，真の値のみの配列を返す。
- ```JavaScript
  function grateThenTwo(num) {return num > 2}
  const x = [1, 2, 3, 4, 5, 6]
  x.filter(grateThenTwo);

  // ちゃんと書くと
  x.filter(num => num > 2)
  ```
- => [3, 4, 5, 6]

#### Reduce
- Reduceはセットしたオブジェクトまたは配列から２つの要素を取り，その要素に対し特定の処理をすることができる。
- ```JavaScript
  function add(x, y) {return x + y}
  const x = [1, 2, 3, 4, 5, 6]
  x.reduce(add)
  ```
- => 21

## Synchronous? Async? Single-Threaded?
- JavaScriptはシングルスレッドで動作する同期処理の言語です。
- 同期処理をすると前の処理が終わらなければ次の処理を始めることができず，処理にとても時間がかかってしまいます。
- JavaScriptはWebページで動作する言語なので，重い処理をJavaScriptで処理したらWebページが止まってしまって使い物にならない！なんてことが頻発するかもしれません。


## Execution Stack

スタックはデータ構造の一種で，先入れ先出しFIFOとして知られるものです。
JavaScriptでは，呼び出された関数順にスタック領域にスタックされ，処理が終わったところからメモリを開放します。

この動きを実際に見てみましょう。
```JavaScript
function addOne (num) {
  throw new Error('oh no, an error !');
}

function getNum () {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum());
}

c()
```

このようなコードを実行してみると，エラーが表示されます。
throw errorは現在の関数のメモリからスタックをたどり，それをすべてコンソールにダンプします。

```
/Users/dev/cs50m-haryo/stack.js:2
  throw new Error('oh no, an error !');
  ^

Error: oh no, an error !
    at addOne (/Users/dev/cs50m-haryo/stack.js:2:9)
    at getNum (/Users/dev/cs50m-haryo/stack.js:6:10)
    at c (/Users/dev/cs50m-haryo/stack.js:10:15)
    at Object.<anonymous> (/Users/dev/cs50m-haryo/stack.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
```

Error: oh no, an error!
のあと，
throw Errorが記述された`addOne`
`addOne`を呼び出した`getNum`
`getNum`を呼び出した`c`
そして，`c`は`Object`に呼び出されています。
そこから先はNode.jsランタイムの内部処理のスタックが表示されています。

Execution Stackというものが少しわかったと思います。