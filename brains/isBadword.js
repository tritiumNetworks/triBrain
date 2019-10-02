const chalk = require('chalk')
const brainjs = require('brain.js')
const toSVG = require('brain.js/src/utilities/to-svg')
const network = new brainjs.recurrent.LSTM()
const conv = require('../converted/conv.json')

let count = 0

exports.run = (sentence) => {
  return network.run(sentence)
}

exports.view = () => {
  return toSVG(network)
}

exports.startTrain = () => {
  network.train(conv, {
    iterations: process.env.training,
    logPeriod: 1,
    callback: () => {
      console.log(chalk.blue('triBrain/') + chalk.blue.bold('isBadword') + ' | ' + chalk.red('Generation: ') + chalk.red.bold(count) + ' | ' + chalk.yellow('Training: ') + chalk.yellow.bold(count * 10))
      count++
    }
  })
}
