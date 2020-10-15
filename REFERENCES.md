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
  + https://github.com/mars/create-react-app-buildpack#user-content-environment-variables


## Create React App

  + https://create-react-app.dev/docs/adding-a-stylesheet/

Initializing the app:

```sh
npx create-react-app impeachment-web-prototype-react
```

  + https://create-react-app.dev/docs/adding-images-fonts-and-files/

## React

  + https://reactjs.org/docs/react-component.html
  + https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  + https://reactjs.org/docs/conditional-rendering.html
  + https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes/48434525#48434525

## React Bootstrap

```sh
npm install react-bootstrap bootstrap --save
```

  + https://react-bootstrap.github.io/getting-started/introduction
  + https://react-bootstrap.github.io/layout/grid/
  + https://react-bootstrap.github.io/components/
  + https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md
  + https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic
  + https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-react-router
  + https://react-bootstrap.github.io/components/tabs/
  + https://react-bootstrap.github.io/components/table/

Form controls:

  + https://reactjs.org/docs/forms.html
  + https://react-bootstrap.netlify.app/components/forms/
  + https://stackoverflow.com/questions/60917459/react-bootstrap-how-to-get-value-of-form-control


## Flexbox

  + https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background
  + https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox



## React Router Bootstrap

  + https://github.com/react-bootstrap/react-router-bootstrap

```sh
npm install react-router-bootstrap react-router-dom --save
```

  + https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

## React Router

  + https://github.com/ReactTraining/react-router
  + https://reactrouter.com/web/guides/quick-start

## Bootstrap

  + https://getbootstrap.com/docs/4.0/components/navbar/
  + https://getbootstrap.com/docs/4.0/utilities/colors/

## Tools

  + https://awsm-tools.com/code/coffee2js
  + https://jsonlint.com/


## Plotly React

  + https://github.com/plotly/plotly.js
  + https://github.com/plotly/react-plotly.js
  + https://plotly.com/javascript/react/

```sh
npm install react-plotly.js plotly.js --save
```

  + https://plotly.com/javascript/horizontal-bar-charts/
  + https://plotly.com/javascript/configuration-options/

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
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  + https://stackoverflow.com/questions/42308976/how-to-slice-string-from-the-end-in-javascript/42309034

### JavaScript Dates

  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
  + https://github.com/date-fns/date-fns
  + https://date-fns.org/v2.16.1/docs/format

## Node.js

  + https://stackoverflow.com/questions/39282253/how-can-i-alias-a-default-import-in-javascript

## Lodash

  + https://lodash.com/docs/4.17.15#sortBy
  + https://lodash.com/docs/4.17.15#orderBy


```sh
npm install lodash --save
```

## Gauge Dials

  + http://bl.ocks.org/ameyms/9184728
  + https://github.com/PolymerEl/d3-gauge-chart/blob/master/d3-gauge-chart.html
  + https://codepen.io/jaketrent/pen/eloGk
  + https://bl.ocks.org/Niekes/8cd08393cfd8a070a93c2b9f63a5acc1
  + https://github.com/Martin36/react-gauge-chart


```sh
npm install react-gauge-chart
```

## Victory Charts

FTW

  + https://github.com/FormidableLabs/victory
  + https://formidable.com/open-source/victory/gallery/
  + https://formidable.com/open-source/victory/docs/victory-bar
  + https://codesandbox.io/s/laughing-resonance-772ee?file=/src/index.js:297-303
  + https://formidable.com/open-source/victory/docs/faq#containers-and-behaviors

## Color Scales


  + https://github.com/d3/d3-scale#linear-scales
  + https://github.com/d3/d3-scale#sequential-scales
  + https://github.com/d3/d3-scale#diverging-scales
  + https://github.com/d3/d3-scale-chromatic
  + https://observablehq.com/@d3/color-schemes?collection=@d3/d3-scale-chromatic
  + https://bl.ocks.org/john-guerra/17fe498351a3e70929e2e36d081e1067
  + https://colorbrewer2.org/#type=diverging&scheme=RdBu&n=7

```sh
npm install d3 --save
```

## Sliders

Bootstrap Slider

```sh
npm install react-bootstrap-range-slider
```

  + https://jaywilz.github.io/react-bootstrap-range-slider/

RC Slider:

  + https://github.com/react-component/slider
  + http://react-component.github.io/slider/?path=/story/rc-slider--range

### URL Params

```sh
npm install query-string --save
```

  + https://github.com/sindresorhus/query-string
