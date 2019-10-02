const PORT = process.env.triBrainPort || 8080

const cors = require('cors')
const chalk = require('chalk')
const express = require('express')

const isBadword = require('./brains/isBadword')

const app = express()
app.use(cors())

app.get('/isBadword/:word', (req, res) => {
  res.send(isBadword.run(decodeURI(req.params.word)))
})

app.get('/isBadword/', (_req, res) => {
  res.send(isBadword.view())
})

app.listen(PORT, () => {
  console.log(chalk.green('TriBrain Server is running on http://localhost:') + chalk.green.bold(PORT))
  isBadword.startTrain()
})
