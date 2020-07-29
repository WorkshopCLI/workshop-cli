const ncp = require('ncp').ncp
const workflows = {
  basic: require('@workshop-cli/workshop-basic'),
}

ncp.limit = 16

const run = (type, destination) => {
  const source = workflows[type].path
  ncp(source, destination, err => {
    if (err) {
      return console.error(err)
    }

    console.log('done!')
  })
}

module.exports = run
