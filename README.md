WorkshopCLI
============

Workflow generator for Shopify.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g @workshop-cli/workshop-cli
$ workshop COMMAND
running command...
$ workshop (-v|--version|version)
@workshop-cli/workshop-cli/0.0.11 darwin-x64 node-v14.15.0
$ workshop --help [COMMAND]
USAGE
  $ workshop COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`workshop advanced-gulp`](#workshop-advanced-gulp)
* [`workshop basic`](#workshop-basic)
* [`workshop help [COMMAND]`](#workshop-help-command)

## `workshop advanced-gulp`

```
Generates a new advanced gulp workflow.

USAGE
  $ workshop advanced-gulp

OPTIONS
  -n, --name=name  (required) [default: workshop-advanced-gulp-workflow] Project name
```

_See code: [src/commands/advanced-gulp.js](https://github.com/WorkshopCLI/workshop-cli/blob/v0.0.11/src/commands/advanced-gulp.js)_

## `workshop basic`

```
Generates a basic new workflow.

USAGE
  $ workshop basic

OPTIONS
  -n, --name=name  (required) [default: workshop-basic-workflow] Project name
```

_See code: [src/commands/basic.js](https://github.com/WorkshopCLI/workshop-cli/blob/v0.0.11/src/commands/basic.js)_

## `workshop help [COMMAND]`

```
display help for <%= config.bin %>

USAGE
  $ workshop help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
