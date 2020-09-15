
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

Initializing an app for the first time (if you were starting from scratch):

```sh
npx create-react-app impeachment-web-prototype-react
```

Installing package dependencies:

```sh
cd impeachment-web-prototype-react/
npm install
```

## Usage

```sh
npm start
```

## Deploying

Creating server:

```sh
heroku create -n impeachment-tweet-analysis-web

# or connecting to existing server:
# heroku git:remote -a impeachment-tweet-analysis-web
```

Customizing buildpacks:

```sh
heroku buildpacks:remove heroku/nodejs
heroku buildpacks:add mars/create-react-app
```

Deploying:

```sh
git push heroku deploy:master
```

Deploying will run scripts/build.
