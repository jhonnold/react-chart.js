# react-chart-js

> React Components for Chart.JS

[![NPM](https://img.shields.io/npm/v/react-chart-js.svg)](https://www.npmjs.com/package/react-chart-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-chart-js
```

## Usage

```tsx
import React from 'react';

import { BarChart } from 'react-chart-js';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
        },
    ],
};

const Example = () => <BarChart data={data} />;
```

## License

MIT © [jhonnold](https://github.com/jhonnold)
