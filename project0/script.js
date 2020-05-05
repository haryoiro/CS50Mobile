const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const buttonCentor = document.querySelector(".button")

// すべてのTODOオブジェクトを格納する配列
let todoContainer = []

function newTodo() {
  updateCounts(todoContainer)
    const buttonCentor = document.querySelector(".button")
    if (!containTextField()) {
      insertTodoTextFieldElement(buttonCentor);
      buttonCentor.remove()
      document.querySelector(".todo-textfield").focus()
      newTodo()
    }
    else {
      // 新しいTODOを追加するためのテキストボックスとボタン
      let textBox = document.querySelector(".todo-textfield")
      let submitButton = document.querySelector(".todo-textsubmit")
      let todoForm = document.querySelector("#appendTodoForm")

      // テキストフィールドをサブミット
      submitButton.addEventListener("click", e => addTextFieldContents(e, todoForm))
      textBox.addEventListener("change", e => addTextFieldContents(e, todoForm))
    }
}

function insertTodoTextFieldElement(Element) {
  if(!containTextField()) {
    // 新しいTODO要素追加するためのためのテキストフィールド要素
    let divide = document.createElement("div")
    let textBox = document.createElement("input")
    let submitButton = document.createElement("button")

    // 新たなテキストフィールド
    textBox.setAttribute("type", "text")
    textBox.setAttribute("placeholder", "NEW TODO")
    textBox.setAttribute("class", `todo-textfield`)
    textBox.setAttribute("name", "todoContent")
    textBox.setAttribute("autocomplete", "off")

    // テキストを確定するためのボタン
    submitButton.setAttribute("type", "button")
    submitButton.setAttribute("value", "ENTER")
    submitButton.setAttribute("class", "todo-textsubmit")
    submitButton.innerText = "ENTER"

    // テキストフィールドをまとめる
    divide.appendChild(textBox)
    divide.appendChild(submitButton)
    divide.setAttribute("id", "appendTodoForm")
    list.insertAdjacentElement("beforebegin",divide)
  }
}

// テキストフィールドがサブミットされるとTODO一覧の配列に対しコンテンツを挿入する
function addTextFieldContents(e, todoForm){
  if(e.target.value != "ENTER"){
    todoContainer.push({'id': todoContainer.length+1,'content': e.target.value, 'checked': false})
    updateCounts(todoContainer)
    newMainButton()
    todoForm.remove()
    displayTodoList(todoContainer[todoContainer.length-1])
  }
}

// テキストフィールドが一つだけかどうか確認する。
function containTextField(){
  let inputElementList = document.querySelector(".todo-textfield")
  return inputElementList ? true : false
}

function displayTodoList(obj){
  // 新しいTODO欄をくくる要素
  let divide = document.createElement("div")
  // 新しいTODOの内容
  let content = document.createElement("li")
  // 新しいTODOが達成されたときチェックするチェックボックス
  let checkbox = document.createElement("input")

  // テキストフィールドを識別するためのlabel
  let label = document.createElement("label")

  // 内容をLISTエレメントにつなげる
  let textContent = document.createTextNode(obj.content)
  content.appendChild(textContent)
  content.setAttribute("class", classNames.TODO_TEXT)

  // チェックボックスに対して設定を追加
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX)

  label.setAttribute("class", "checkbox-decoration")
  label.appendChild(checkbox)

  // 内容とチェックボックスをまとめる
  divide.appendChild(content)
  divide.appendChild(label)

  // まとめた要素を識別するためのCLASSを設定
  divide.setAttribute("class", classNames.TODO_ITEM)
  divide.setAttribute("style", "opacity:0; text-decoration: none")

  // DOM上に展開
  list.insertAdjacentElement("afterbegin", divide)

  // チェックボックスがチェックされたとき用のイベントリスナー
  checkbox.addEventListener("change", (e) => {
    label.style.background = "black"
    divide.style.textDecoration = "line-through"
    // 要素に対応するオブジェクトにchecked
    obj.checked = e.target.checked
    divide.style.opacity = 0
    divide.style.margin = "-30px"
    // カウンターを更新
    updateCounts(todoContainer)
    // アニメーションが終了したら要素を削除
    setTimeout(() => {
    divide.remove()
    }, 500)
  })
  // 徐々に透明度が上がるアニメーション
  setTimeout(() => {
    divide.style.opacity = 1
  }, 100)
}

// テキストフィールドを出現させるためのボタンを出現させる
function newMainButton(){
  let button = document.createElement("button")
  button.setAttribute("class", "button center")
  button.setAttribute("onClick", "newTodo()")
  button.innerText ="NEW TODO"

  list.insertAdjacentElement("beforebegin", button)
}

function updateCounts(obj) {
  let uncheckedCount = obj.filter(filterUnchekedContents).length
  let count = obj.length
  uncheckedCountSpan.innerText = uncheckedCount
  itemCountSpan.innerText = count
}

function filterUnchekedContents(item) {
  return item.checked ? false : true
}
