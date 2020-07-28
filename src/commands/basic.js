const fs = require('fs')
const {Command, flags} = require('@oclif/command')
const copyFiles = require('../internal/copy-files')

const parseName = input => input.toLowerCase()

class BasicCommand extends Command {
  async run() {
    const {flags} = this.parse(BasicCommand)
    const dir = `${process.cwd()}/${flags.name}`

    if (fs.existsSync(dir)) {
      throw new Error('Directory with that name already exists')
    }

    fs.mkdirSync(dir)
    copyFiles('basic', dir)
  }
}

BasicCommand.description = 'Generates a basic new workflow.'

BasicCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'Project name',
    default: 'workshop-basic-workfow',
    required: true,
    parse: parseName,
  }),
}

module.exports = BasicCommand
