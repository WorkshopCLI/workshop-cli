workshop-cli
============

Workflow generator for Shopify.

[![Version](https://img.shields.io/npm/v/@workshop-cli/workshop-cli.svg)](https://npmjs.org/package/@workshop-cli/workshop-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@workshop-cli/workshop-cli.svg)](https://npmjs.org/package/@workshop-cli/workshop-cli)
[![License](https://img.shields.io/npm/l/@workshop-cli/workshop-cli.svg)](https://github.com/WorkshopCLI/workshop-cli/blob/master/LICENSE)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Install
<!-- install -->
Install with Yarn (suggested):
```
yarn global add @workshop-cli/workshop-cli
```

Install with NPM:
```
npm i -g @workshop-cli/workshop-cli
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g @workshop-cli/workshop-cli
$ workshop COMMAND
running command...
$ workshop (-v|--version|version)
@workshop-cli/workshop-cli/0.0.1 darwin-x64 node-v14.5.0
$ workshop --help [COMMAND]
USAGE
  $ workshop COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`workshop advanced`](#workshop-advanced)
* [`workshop basic`](#workshop-basic)
* [`workshop help [COMMAND]`](#workshop-help-command)
* [`workshop standard`](#workshop-standard)
* [`workshop vue`](#workshop-vue)

## `workshop advanced`

(Not yet implemented) Generates a advanced new workflow.

```
USAGE
  $ workshop advanced

OPTIONS
  -n, --name=name  (required) [default: workshop-advanced-workfow] Project name
```

_See code: [src/commands/advanced.js](https://github.com/salexzee/workshop-cli/blob/v0.0.1/src/commands/advanced.js)_

## `workshop basic`

Generates a basic new workflow.

```
USAGE
  $ workshop basic

OPTIONS
  -n, --name=name  (required) [default: workshop-basic-workfow] Project name
```

_See code: [src/commands/basic.js](https://github.com/salexzee/workshop-cli/blob/v0.0.1/src/commands/basic.js)_

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

## `workshop standard`

(Not yet implemented) Generates a standard new workflow.

```
USAGE
  $ workshop standard

OPTIONS
  -n, --name=name  (required) [default: workshop-standard-workfow] Project name
```

_See code: [src/commands/standard.js](https://github.com/salexzee/workshop-cli/blob/v0.0.1/src/commands/standard.js)_

## `workshop vue`

(Not yet implemented) Generates a vue new workflow.

```
USAGE
  $ workshop vue

OPTIONS
  -n, --name=name  (required) [default: workshop-vue-workfow] Project name
```

_See code: [src/commands/vue.js](https://github.com/salexzee/workshop-cli/blob/v0.0.1/src/commands/vue.js)_
<!-- commandsstop -->
