// const fs = require('fs')
const {Command, flags} = require('@oclif/command')
// const copyFiles = require('../internal/copy-files')

const parseName = input => input.toLowerCase()

class StandardCommand extends Command {
  async run() {
    console.log('standard command is not yet implemented')
    // const {flags} = this.parse(StandardCommand)
    // const dir = `${process.cwd()}/${flags.name}`

    // if (fs.existsSync(dir)) {
    //   throw new Error('Directory with that name already exists')
    // }

    // fs.mkdirSync(dir)
    // copyFiles('standard', dir)
  }
}

StandardCommand.description = 'Generates a standard new workflow.'

StandardCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'Project name',
    default: 'workshop-standard-workfow',
    required: true,
    parse: parseName,
  }),
}

module.exports = StandardCommand
