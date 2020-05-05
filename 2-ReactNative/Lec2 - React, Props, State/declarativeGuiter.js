
// ギターを宣言的に説明する擬似コード

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guiter() {
  return (
    <Guiter>
      {strings.map(note => <String node={note} />)}
    </Guiter>
  )
}