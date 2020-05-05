
// ギターを命令的に説明する擬似コード
// HTMLドキュメントと同様の機能のcreateElement関数があると仮定する

// pseudo-code
createElement()

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guiter() {
  // create head and add pegs
  const head = createElement('head')
  for (let i = 0; i < 6; ++i) {
    const peg = createElement('peg')
    head.append(peg)
  }

  // create neck and frets
  const neck = createElement('neck')
  for (let i = 0; i < 19; ++i) {
    const fret = createElement('fret')
    head.append(fret)
  }

  // create body and add strings
  const bdoy = createElement('body')
  strings.forEach(tone => {
    const string = createElement('string')
    string.tune(tone)
    body.append(string)
  })

  return body
}