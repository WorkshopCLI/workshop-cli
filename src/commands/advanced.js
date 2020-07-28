// const fs = require('fs')
const {Command, flags} = require('@oclif/command')
// const copyFiles = require('../internal/copy-files')

const parseName = input => input.toLowerCase()

class AdvancedCommand extends Command {
  async run() {
    console.log('advanced command is not yet implemented')
    // const {flags} = this.parse(AdvancedCommand)
    // const dir = `${process.cwd()}/${flags.name}`

    // if (fs.existsSync(dir)) {
    //   throw new Error('Directory with that name already exists')
    // }

    // fs.mkdirSync(dir)
    // copyFiles('advanced', dir)
  }
}

AdvancedCommand.description = 'Generates a advanced new workflow.'

AdvancedCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'Project name',
    default: 'workshop-advanced-workfow',
    required: true,
    parse: parseName,
  }),
}

module.exports = AdvancedCommand
