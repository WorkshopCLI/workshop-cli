const ncp = require('ncp').ncp
const fs = require('fs')
const workflows = {
  basic: require('@workshop-cli/workshop-basic'),
  advancedGulp: require('@workshop-cli/workshop-advanced-gulp'),
}

ncp.limit = 16

const run = (type, destination) => {
  const source = workflows[type].path
  ncp(source, destination, err => {
    if (err) {
      return console.error(err)
    }

    fs.renameSync(`${destination}/gitignore`, `${destination}/.gitignore`)
    console.log('done!')
  })
}

module.exports = run
