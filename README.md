# angular2-highcharts

> Highcharts chart components for **Angular 4** applications, with wrapper outputs for chart events, native chart instance access, and support for Highcharts modules through `ChartModule.forRoot(...)`.

[![npm version](https://img.shields.io/npm/v/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/angular2-highcharts)
[![npm downloads](https://img.shields.io/npm/dt/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/angular2-highcharts)
[![npm monthly](https://img.shields.io/npm/dm/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/angular2-highcharts)
[![license](https://img.shields.io/npm/l/angular2-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular2-highcharts/blob/master/LICENSE)
[![Angular 4](https://img.shields.io/badge/Angular-4-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular2-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular2-highcharts/stargazers)

**[npm](https://www.npmjs.com/package/angular2-highcharts)** | **[Changelog / Repository History](https://github.com/alexandroit/angular2-highcharts/commits/master/)** | **[Issues](https://github.com/alexandroit/angular2-highcharts/issues)**

---

> **Credits:** Original library by [Eugene Gluhotorenko](https://github.com/gevgeny/angular2-highcharts). Current maintenance, Angular 4 compatibility update, and package metadata refresh by [Alexandro Paixao Marques](https://github.com/alexandroit/angular2-highcharts).

---

## Why this library?

The original `angular2-highcharts` package targeted early Angular releases and had fallen behind. This fork keeps the wrapper usable for the Angular 4 support line while preserving the familiar API: `<chart>`, `<series>`, `<point>`, `<xAxis>`, and `<yAxis>`.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 4 release line | ✅ |
| Standard Highcharts charts | ✅ |
| `StockChart` wrapper support | ✅ |
| Highcharts module registration via `forRoot` | ✅ |
| Chart event outputs | ✅ |
| Series event outputs | ✅ |
| Point event outputs | ✅ |
| X/Y axis event outputs | ✅ |
| Native chart instance access | ✅ |
| Interactive local docs app in repository | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Events](#events)
6. [Dynamic Chart Access](#dynamic-chart-access)
7. [Highstock](#highstock)
8. [Highmaps](#highmaps)
9. [Highcharts Modules](#highcharts-modules)
10. [Static Highcharts API](#static-highcharts-api)
11. [Run Locally](#run-locally)
12. [FAQ](#faq)
13. [License](#license)

## Angular Version Compatibility

| angular2-highcharts | Angular | TypeScript | Node.js |
| :---: | :---: | :---: | :---: |
| **4.0.x** | **4.4.x** | **2.4.x** | build verified on modern Node, legacy tooling origin |
| 0.5.x | 2.4.x | 2.1.x | historical release line |

## Installation

```bash
npm install angular2-highcharts highcharts
```

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';

declare var require: any;

@NgModule({
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts'))
  ]
})
export class AppModule {}
```

### 2. Webpack and Angular CLI usage

No extra wrapper configuration is required for Angular CLI or other webpack-based applications beyond installing `highcharts` and passing the Highcharts factory to `ChartModule.forRoot(...)`.

### 3. SystemJS usage

If your application still uses SystemJS, add both `angular2-highcharts` and `highcharts` to the map and packages configuration:

```js
map: {
  'angular2-highcharts': 'node_modules/angular2-highcharts',
  'highcharts': 'node_modules/highcharts'
},
packages: {
  highcharts: {
    main: './highcharts.js',
    defaultExtension: 'js'
  },
  'angular2-highcharts': {
    main: './index.js',
    defaultExtension: 'js'
  }
}
```

## Basic Usage

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'simple-chart-example',
  template: `
    <chart [options]="options"></chart>
  `
})
export class AppComponent {
  options: Object;

  constructor() {
    this.options = {
      title: { text: 'Simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2]
      }]
    };
  }
}
```

## Events

The wrapper exposes Angular `EventEmitter<ChartEvent>` outputs for several Highcharts event families.

### Chart events

```html
<chart [options]="options" (selection)="onChartSelection($event)"></chart>
```

```ts
onChartSelection(e: any): void {
  this.from = e.originalEvent.xAxis[0].min.toFixed(2);
  this.to = e.originalEvent.xAxis[0].max.toFixed(2);
}
```

### Series events

```html
<chart [options]="options">
  <series (mouseOver)="onSeriesMouseOver($event)"></series>
</chart>
```

```ts
onSeriesMouseOver(e: any): void {
  this.seriesName = e.context.name;
}
```

### Point events

```html
<chart [options]="options">
  <series>
    <point (select)="onPointSelect($event)"></point>
  </series>
</chart>
```

### Axis events

```html
<chart [options]="options">
  <xAxis (afterSetExtremes)="onAfterSetExtremesX($event)"></xAxis>
  <yAxis (afterSetExtremes)="onAfterSetExtremesY($event)"></yAxis>
</chart>
```

```ts
onAfterSetExtremesX(e: any): void {
  this.minX = e.context.min;
  this.maxX = e.context.max;
}

onAfterSetExtremesY(e: any): void {
  this.minY = e.context.min;
  this.maxY = e.context.max;
}
```

## Dynamic Chart Access

Use the `load` output to capture the native chart instance and perform runtime mutations directly through the Highcharts API.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-chart-example',
  template: `
    <chart [options]="options" (load)="saveInstance($event.context)"></chart>
  `
})
export class DynamicChartExample {
  chart: any;
  options: any;

  constructor() {
    this.options = {
      chart: { type: 'spline' },
      title: { text: 'Dynamic data example' },
      series: [{ data: [2, 3, 5, 8, 13] }]
    };
  }

  saveInstance(chartInstance: any): void {
    this.chart = chartInstance;
  }

  addPoint(): void {
    this.chart.series[0].addPoint(Math.random() * 10);
  }
}
```

## Highstock

```html
<chart type="StockChart" [options]="options"></chart>
```

Use the Highstock entry when configuring the module:

```ts
ChartModule.forRoot(require('highcharts/highstock'))
```

## Highmaps

```html
<chart type="Map" [options]="options"></chart>
```

Use the Highmaps entry when configuring the module:

```ts
ChartModule.forRoot(require('highcharts/highmaps'))
```

## Highcharts Modules

Additional Highcharts modules can be registered through `forRoot(...)` after the base Highcharts factory.

```ts
ChartModule.forRoot(
  require('highcharts/highstock'),
  require('highcharts/highcharts-3d')
)
```

This is the same mechanism used by the repository’s local docs application for the 3D chart example.

## Static Highcharts API

You can still configure the global Highcharts object before bootstrapping your Angular module.

```ts
declare var require: any;

const Highcharts = require('highcharts/highstock');

Highcharts.setOptions({
  colors: ['#058DC7', '#50B432', '#ED561B']
});

ChartModule.forRoot(Highcharts)
```

## Run Locally

Install dependencies:

```bash
npm install
```

Build the library:

```bash
npm run build
```

Run the unit tests:

```bash
npm test
```

Build the repository-local static docs app:

```bash
npm run build:docs
```

Preview the docs app locally:

```bash
npm run serve:docs
```

## FAQ

### Why do my series, title, or axes not redraw when I mutate the original options object?

This wrapper is intentionally thin. It uses the initial `options` object to create the chart, but it does not continuously diff every nested Highcharts option after the chart exists. For dynamic updates, capture the native chart instance from the `load` event and use the Highcharts API directly.

## License

MIT © Eugene Gluhotorenko
