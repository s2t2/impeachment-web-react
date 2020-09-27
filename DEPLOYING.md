
# Deployer's Guide

## Setup

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

Configuring env vars:

```sh
heroku config:set REACT_APP_API_URL="https://your-api.herokuapp.com"
```

## Deploying

Deploying:

```sh
git push heroku master
#git push heroku mybranch:master
```

Deploying will run "scripts/build" from "package.json".
