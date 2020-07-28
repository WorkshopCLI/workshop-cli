const ncp = require('ncp').ncp
const workflowLocations = require('./workflow-locations');

ncp.limit = 16

const run = (type, destination) => {
  const source = workflowLocations[type]
  ncp(source, destination, err => {
    if (err) {
      return console.error(err)
    }

    console.log('done!')
  })
}

module.exports = run
