const url = ''

fetch(url)
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    return ({
      importantData: json.importantData,
    })
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
  })
