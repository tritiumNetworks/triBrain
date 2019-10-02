const fs = require('fs')
const fineword = require('./lib/fineword.json')
const badword = require('./lib/badword.json')

let conv = []

fineword.forEach((fine) => {
  conv[conv.length] = {
    input: fine.data[0].text,
    output: '고운말'
  }
})

badword.forEach((bad) => {
  conv[conv.length] = {
    input: bad.data[0].text,
    output: '나쁜말'
  }
})

fs.writeFileSync('./converted/conv.json', JSON.stringify(conv))
