
# Contributor's Guide

## Prerequisites

### Installing NPM

[Install NVM](https://github.com/nvm-sh/nvm#install--update-script).

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Configure NVM by placing the following code in the zsh profile if it doesn't for you:

```sh
# NVM CONFIG
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Use NVM to install latest stable version of [NPM](https://nodejs.org/en/):

```sh
nvm ls-remote  # checks for available versions
nvm install 12.18.3 # installs a specific version, and automatically starts using it
```

## Setup

Installing package dependencies:

```sh
cd impeachment-web-prototype-react/
npm install
```

Create a new file called ".env" in the root directory, and place inside the following contents:

```sh
REACT_APP_API_URL="https://your-api.herokuapp.com"

REACT_APP_GA_TRACKER_ID='UA-XXXXXX-01'
```

> NOTE: env vars prefixed with "REACT_APP_" are [NOT SECURE](https://create-react-app.dev/docs/adding-custom-environment-variables/), so if you need to set a secret value, don't use that prefix

## Usage

```sh
npm start
```
