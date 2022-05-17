const express = require('express')
const proxy = require('express-http-proxy')
const app = express()
const port = 3000

app.use(express.static('dist')) // VUE 빌드파일 설정
app.use('/', proxy('http://localhost:18080')) // 프록시 설정
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})