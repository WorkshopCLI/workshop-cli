// const fs = require('fs')
const {Command, flags} = require('@oclif/command')
// const copyFiles = require('../internal/copy-files')

const parseName = input => input.toLowerCase()

class VueCommand extends Command {
  async run() {
    console.log('vue command is not yet implemented')
    // const {flags} = this.parse(VueCommand)
    // const dir = `${process.cwd()}/${flags.name}`

    // if (fs.existsSync(dir)) {
    //   throw new Error('Directory with that name already exists')
    // }

    // fs.mkdirSync(dir)
    // copyFiles('vue', dir)
  }
}

VueCommand.description = 'Generates a vue new workflow.'

VueCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'Project name',
    default: 'workshop-vue-workfow',
    required: true,
    parse: parseName,
  }),
}

module.exports = VueCommand
