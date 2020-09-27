# References

## Prototype Gauge w/ Dial

Implementations w/ d3.js:

  + https://bl.ocks.org/Niekes/8cd08393cfd8a070a93c2b9f63a5acc1
  + https://bl.ocks.org/pjsier/0cd4e2eb3819e50cffea7b70a8c2cd24
  + http://bl.ocks.org/ameyms/9184728
  + https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe
  + https://codepen.io/jaketrent/pen/eloGk
  + https://codepen.io/oildexUX/pen/LZVLEo
  + https://codepen.io/geekingreen/pen/NGgEmj


Ideal dial is Jake Trent version using different color sections (red, grey, blue):

```css
.chart-color1
  fill: steelblue

.chart-color2
  fill: #ccc

.chart-color3
  fill: #D62021
```

Ideal needle is ameyms version.

Implementations w/ react.js:

  + ...


## Heroku

  + https://devcenter.heroku.com/articles/buildpacks
  + https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack
  + https://blog.heroku.com/deploying-react-with-zero-configuration
  + https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-procfile

## Create React App

  + https://create-react-app.dev/docs/adding-a-stylesheet/

Initializing the app:

```sh
npx create-react-app impeachment-web-prototype-react
```

## React

  + https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  + https://reactjs.org/docs/conditional-rendering.html

## React Bootstrap

  + https://react-bootstrap.github.io/getting-started/introduction
  + https://react-bootstrap.github.io/layout/grid/
  + https://react-bootstrap.github.io/components/
  + https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md
  + https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic
  + https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-react-router

```sh
npm install react-bootstrap bootstrap --save
```

Flexbox:

  + https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background
  + https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

## React Router Bootstrap

  + https://github.com/react-bootstrap/react-router-bootstrap

```sh
npm install react-router-bootstrap react-router-dom --save
```

## React Router

  + https://github.com/ReactTraining/react-router
  + https://reactrouter.com/web/guides/quick-start

## Bootstrap

  + https://getbootstrap.com/docs/4.0/components/navbar/
  + https://getbootstrap.com/docs/4.0/utilities/colors/

## Tools

  + https://awsm-tools.com/code/coffee2js


## Plotly for React

  + https://github.com/plotly/plotly.js
  + https://plotly.com/javascript/react/

```sh
npm install react-plotly.js plotly.js --save
```

  + https://plotly.com/javascript/horizontal-bar-charts/

## Dotenv

   + https://github.com/motdotla/dotenv

## Chrome Debugger for VS Code


If you're using VS code, also install this extension (`msjsdiag.debugger-for-chrome`) to enable interactive breakpoints.

  + https://elijahmanor.com/blog/cra-debug-vscode
  + https://code.visualstudio.com/docs/editor/debugging
  + https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
  + https://medium.com/better-programming/take-your-create-react-app-debugging-workflow-to-the-next-level-9c40cd1904bd
  + https://github.com/facebook/create-react-app/blob/e2585329bc8411bb0bb8fad68fcea77c73b7248a/docusaurus/docs/setting-up-your-editor.md#debugging-in-the-editor

Then setup ".vscode/launch.json" for the first time in this repo, following that last link.

It works to show you the variable values. To interact with them, must set a `debugger;` and then run the app and "View" the "Debug Console".

## JavaScript Language

  + https://github.com/prof-rossetti/intro-to-web-dev/blob/master/notes/javascript/notes.md

## Lodash

  + https://lodash.com/docs/4.17.15#sortBy
  + https://lodash.com/docs/4.17.15#orderBy


```sh
npm install lodash --save
```
