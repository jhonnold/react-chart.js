# react-chart-js

[![NPM](https://img.shields.io/npm/v/@jhonnold/react-chart-js.svg)](https://www.npmjs.com/package/@jhonnold/react-chart-js)
[![downloads](https://img.shields.io/npm/dm/@jhonnold/react-chart-js.svg)](https://npm-stat.com/charts.html?package=@jhonnold/react-chart-js&from=2020-01-01)
[![build status](https://img.shields.io/travis/jhonnold/react-chart-js.svg?branch=master)](https://travis-ci.org/jhonnold/react-chart-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](http://opensource.org/licenses/MIT)

> React Components for the popular [Chart.JS](https://github.com/chartjs/Chart.js) libary

## Install

```bash
npm install --save @jhonnold/react-chart-js
```

## Getting Started

```tsx
import { BarChart } from '@jhonnold/react-chart-js';

<BarChart data={...} />
```

## General

Direct examples of each chart type can be found in `examples`.

Live Examples: [Github Pages](https://jhonnold.github.io/react-chart-js/)

### Components
```tsx
import ChartComponent, {
    LineChart,
    BarChart,
    HorizontalBarChart,
    RadarChart,
    DoughnutChart,
    PolarAreaChart,
    BubbleChart,
    PieChart,
    ScatterChart,
} from '@jhonnold/react-chart-js';
```

## Configure

### Props
```tsx
const {
    id,         // string
    height,     // number
    width,      // number
    redraw,     // boolean
    type,       // string (required only on ChartComponent)
    data,       // chart.js dataObj or fn that returns dataObj (required)
    options,    // chart.js options
    plugins,    // chart.js plugins
} = props;
```

#### id
Type: `string`
Default: `undefined`

ID attribute applied to the rendered canvas

#### height
Type: `number`
Default: `150`

Height attribute applied to the rendered canvas

#### width
Type: `number`
Default: `300`

Width attribute applied to the rendered canvas

#### redraw
Type: `boolean`
Default: `false`

If true, will tear down and redraw chart on all updates

#### type
Type: `'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'`

Chart.JS chart type (required only on ChartComponent)

#### data (required)
Type: `((canvas: HTMLCanvasElement | null): Chart.ChartData) | Chart.ChartData`

The data object that is passed into the Chart.JS chart ([more info](https://www.chartjs.org/docs/latest/getting-started/)).

This can also be a function, that receives a canvas element and returns the data object.
```tsx
const data = canvas => {
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(...);

    // ...

    return {
        datasets: [{
            backgroundColor: g,
            //. ..
        }],
        // ...
    };
}
```


#### options
Type: `Chart.ChartOptions`

The options object that is passed into the Chart.JS chart ([more info](https://www.chartjs.org/docs/latest/general/options.html))


#### plugins
Type: `Chart.PluginServiceRegistrationOptions[]`

The plugins array that is passed into the Chart.JS chart ([more info](https://www.chartjs.org/docs/latest/developers/plugins.html))


## License

MIT © [jhonnold](https://github.com/jhonnold)
