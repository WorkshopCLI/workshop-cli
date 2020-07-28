workshop-cli
============

Workflow generator for Shopify.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@workshop-cli/workshop-cli.svg)](https://npmjs.org/package/workshop-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@workshop-cli/workshop-cli.svg)](https://npmjs.org/package/workshop-cli)
[![License](https://img.shields.io/npm/l/@workshop-cli/workshop-cli.svg)](https://github.com/salexzee/workshop-cli/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Install
<!-- install -->
Install with Yarn:
```
yarn global add @workshop-cli/workshop-cli
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g workshop-cli
$ workshop COMMAND
running command...
$ workshop (-v|--version|version)
workshop-cli/0.0.0 darwin-x64 node-v14.5.0
$ workshop --help [COMMAND]
USAGE
  $ workshop COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`workshop basic`](#workshop-basic)
* [`workshop help [COMMAND]`](#workshop-help-command)

## `workshop basic`

Installs the [workshop basic](https://github.com/WorkshopCLI/workshop-basic) theme in your current working directory.

```
USAGE
  $ workshop basic

OPTIONS
  -n, --name=name  The name of the project that will be created. Default: workshop-basic-workfow

DESCRIPTION
  Installs the workshop basic theme in your current working directory.
  ...
  When using the `name` option if you want to use spaces or unsupported special characters wrap your name in quotes. Ex. `workshop basic --name "New Project"`
```

_See code: [src/commands/basic.js](https://github.com/WorkshopCLI/workshop-cli/blob/v0.0.0/src/commands/basic.js)_

## `workshop standard`

(Not yet implemented) Installs the workshop standard theme in your current working directory.

```
USAGE
  $ workshop standard

OPTIONS
  -n, --name=name  The name of the project that will be created. Default: workshop-standard-workfow

DESCRIPTION
  Installs the workshop standard theme in your current working directory.
  ...
  When using the `name` option if you want to use spaces or unsupported special characters wrap your name in quotes. Ex. `workshop standard --name "New Project"`
```

_See code: [src/commands/standard.js](https://github.com/WorkshopCLI/workshop-cli/blob/v0.0.0/src/commands/standard.js)_

## `workshop advanced`

(Not yet implemented) Installs the workshop advanced theme in your current working directory.

```
USAGE
  $ workshop advanced

OPTIONS
  -n, --name=name  The name of the project that will be created. Default: workshop-advanced-workfow

DESCRIPTION
  Installs the workshop advanced theme in your current working directory.
  ...
  When using the `name` option if you want to use spaces or unsupported special characters wrap your name in quotes. Ex. `workshop advanced --name "New Project"`
```

_See code: [src/commands/advanced.js](https://github.com/WorkshopCLI/workshop-cli/blob/v0.0.0/src/commands/advanced.js)_

## `workshop help [COMMAND]`

display help for workshop

```
USAGE
  $ workshop help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
