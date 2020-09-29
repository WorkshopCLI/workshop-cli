const fs = require("fs")
const { Command, flags } = require("@oclif/command")
const copyFiles = require("../internal/copy-files")

const parseName = (input) => input.toLowerCase()

class AdvancedGulpCommand extends Command {
  async run() {
    const { flags } = this.parse(AdvancedGulpCommand)
    const dir = `${process.cwd()}/${flags.name}`

    if (fs.existsSync(dir)) {
      throw new Error("Directory with that name already exists")
    }

    fs.mkdirSync(dir);
    copyFiles("advancedGulp", dir)
  }
}

AdvancedGulpCommand.description = "Generates a new advanced gulp workflow."

AdvancedGulpCommand.flags = {
  name: flags.string({
    char: "n",
    description: "Project name",
    default: "workshop-advanced-gulp-workflow",
    required: true,
    parse: parseName,
  }),
}

module.exports = AdvancedGulpCommand
