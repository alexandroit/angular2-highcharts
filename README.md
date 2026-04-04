# @revivejs/angular2-highcharts

> A maintained **Angular 8 wrapper for Highcharts** with support for standard charts, `StockChart`, `Highmaps`, wrapper event outputs, native chart instance access, and Angular directives for `xAxis`, `yAxis`, `zAxis`, and `colorAxis`.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-highcharts)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-highcharts)
[![npm monthly](https://img.shields.io/npm/dm/@revivejs/angular2-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular2-highcharts)
[![license](https://img.shields.io/npm/l/@revivejs/angular2-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular2-highcharts/blob/master/LICENSE)
[![Angular 8](https://img.shields.io/badge/Angular-8-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular2-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular2-highcharts/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular2-highcharts/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular2-highcharts)** | **[Issues](https://github.com/alexandroit/angular2-highcharts/issues)** | **[Repository](https://github.com/alexandroit/angular2-highcharts)**

**Latest version:** `8.0.0`

---

> **Credits:** Original library by [Eugene Gluhotorenko](https://github.com/gevgeny/angular2-highcharts). Current maintenance, Angular 4 compatibility work, package publishing, and repository stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit/angular2-highcharts).

---

## Why this library?

The original `angular2-highcharts` package targeted early Angular releases and stopped evolving. This fork keeps the wrapper API backward-compatible, updates the maintained publication metadata, and expands the wrapper surface for more Highcharts features such as `zAxis`, `colorAxis`, and optional module-driven chart types.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 8 wrapper release line | ✅ |
| Backward-compatible with Angular 4, 5, 6, and 7 apps | ✅ |
| Highcharts 8 maintained major line | ✅ |
| Standard Highcharts charts | ✅ |
| `StockChart` wrapper support | ✅ |
| `Highmaps` module support | ✅ |
| Highcharts module registration via `forRoot` | ✅ |
| Chart event outputs | ✅ |
| Series event outputs | ✅ |
| Point event outputs | ✅ |
| `xAxis` / `yAxis` wrapper directives | ✅ |
| `zAxis` / `colorAxis` wrapper directives | ✅ |
| Native chart instance access | ✅ |
| GitHub Pages docs app | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Events](#events)
6. [Extended Axis Wrappers](#extended-axis-wrappers)
7. [Dynamic Chart Access](#dynamic-chart-access)
8. [Highstock](#highstock)
9. [Highmaps](#highmaps)
10. [Highcharts Modules](#highcharts-modules)
11. [Static Highcharts API](#static-highcharts-api)
12. [Run Locally](#run-locally)
13. [FAQ](#faq)
14. [License](#license)

## Angular Version Compatibility

| Package version | Angular version | Highcharts version | TypeScript version | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **8.0.0** | **8.2.x** | **8.2.x** | **3.5.x** | [Angular 8 demo](https://alexandroit.github.io/angular2-highcharts/angular-8/) |
| 7.0.x | 7.2.x | 7.2.x | 3.2.x | [Angular 7 demo](https://alexandroit.github.io/angular2-highcharts/angular-7/) |
| 6.0.x | 6.1.x | 6.x | 2.7.x | [Angular 6 demo](https://alexandroit.github.io/angular2-highcharts/angular-6/) |
| 5.0.x | 5.x | 6.x | 2.6.x | [Angular 5 demo](https://alexandroit.github.io/angular2-highcharts/angular-5/) |
| 4.0.x | 4.4.x | 5.0.15 | 2.4.x | [Angular 4 demo](https://alexandroit.github.io/angular2-highcharts/angular-4/) |
| 0.5.x | 2.4.x | 5.0.7 | 2.1.x | historical release line |

## Installation

```bash
npm install @revivejs/angular2-highcharts highcharts
```

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@revivejs/angular2-highcharts';

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

If your application still uses SystemJS, add both packages to the map and packages configuration:

```js
map: {
  '@revivejs/angular2-highcharts': 'node_modules/@revivejs/angular2-highcharts',
  'highcharts': 'node_modules/highcharts'
},
packages: {
  highcharts: {
    main: './highcharts.js',
    defaultExtension: 'js'
  },
  '@revivejs/angular2-highcharts': {
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

### Series events

```html
<chart [options]="options">
  <series (mouseOver)="onSeriesMouseOver($event)"></series>
</chart>
```

### Point events

```html
<chart [options]="options">
  <series>
    <point (select)="onPointSelect($event)"></point>
  </series>
</chart>
```

## Extended Axis Wrappers

This maintained line adds Angular wrapper directives for `zAxis` and `colorAxis` alongside the existing `xAxis` and `yAxis`.

### X and Y axis events

```html
<chart [options]="options">
  <xAxis (afterSetExtremes)="onAfterSetExtremesX($event)"></xAxis>
  <yAxis (afterSetExtremes)="onAfterSetExtremesY($event)"></yAxis>
</chart>
```

### Z axis events

Useful for 3D charts and other configurations that expose a `zAxis`.

```html
<chart [options]="options">
  <zAxis (afterSetExtremes)="onAfterSetExtremesZ($event)"></zAxis>
</chart>
```

### Color axis events

Useful for heatmaps, maps, and gradient-based color scale interactions.

```html
<chart [options]="options">
  <colorAxis (afterSetExtremes)="onColorAxisChange($event)"></colorAxis>
</chart>
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

This is the same mechanism used by the repository docs app for the 3D examples.

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

Build the GitHub Pages docs app:

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

### Why do newer package majors keep the same wrapper API?

The package major follows Angular major compatibility, but the wrapper API is intentionally frozen. Existing selectors such as `<chart>`, `<series>`, `<point>`, `<xAxis>`, `<yAxis>`, `<zAxis>`, `<colorAxis>`, the `[options]` input, and `ChartModule.forRoot(Highcharts, ...modules)` remain stable so older Angular applications can keep the same integration code while newer releases adopt updated Angular tooling and newer Highcharts modules.

## CHANGELOG

### 8.0.0 (Angular 8)
- Bumped package version to 8.0.0
- Updated peerDependencies to `@angular/core >=4.0.0 <9.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^8.2.14 and TypeScript ~3.5.3
- Updated the library to use Highcharts ^8.2.2 with bundled TypeScript definitions
- Added Angular 8 compatibility by marking `@ContentChild(...)` queries with `{ static: false }`
- Added Highcharts 8 feature keywords including arc diagram, pictorial chart, marker clusters, and data sorting
- Added Angular 8 demo coverage for radial bar, data sorting, and marker clusters

### 7.0.1 (Angular 7)
- Bumped package version to 7.0.1
- Switched `ChartModule.forRoot(...)` to provide the Highcharts factory via `useFactory`, fixing Angular 7 JIT bootstrap recursion with Highcharts 7

### 7.0.0 (Angular 7)
- Bumped package version to 7.0.0
- Updated peerDependencies to `@angular/core >=4.0.0 <8.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^7.2.16 and TypeScript ~3.2.4
- Updated the library to use Highcharts ^7.2.2 with bundled typings
- Removed `@types/highcharts` because Highcharts 7 ships its own TypeScript definitions
- Added Highcharts 7 feature keywords including organization chart, dependency wheel, item chart, venn diagram, timeline chart, and packed bubble
- Added `docs-src/angular-7/` and compiled output at `docs/angular-7/`
- Updated `docs/index.html` to redirect to Angular 7 and keep Angular 6, 5, and 4 as previous versions

### 6.0.4 (Angular 6)
- Bumped package version to 6.0.4
- Switched the Angular Package Format entry file to `public_api.ts` for Angular 6 ViewEngine compatibility
- Preserved the frozen wrapper API while fixing metadata resolution for the published package

### 6.0.3 (Angular 6)
- Bumped package version to 6.0.3
- Published the Angular Package Format entrypoint fix
- Kept Angular 6 on the latest stable 6.1.x line and Highcharts 6 as the latest supportable major

### 6.0.2 (Angular 6)
- Bumped package version to 6.0.2
- Kept Angular 6 on the latest stable 6.1.x line in devDependencies
- Fixed the published npm package entrypoints for Angular Package Format output
- Added root package metadata fields (`main`, `module`, `es2015`, `esm5`, `esm2015`, `fesm5`, `fesm2015`, `typings`, `metadata`)
- Restricted the published tarball to `dist/`, `README.md`, and `LICENSE` so legacy root `index.js` shims are not shipped

### 6.0.1 (Angular 6)
- Bumped package version to 6.0.1
- Updated peerDependencies to `@angular/core >=4.0.0 <7.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^6.1.10 and TypeScript ~2.7.2
- Migrated the library build to `ng-packagr` for Angular Package Format output
- Added Highcharts 6 demos for **bullet chart** and **x-range chart**
- Added Angular 6 docs app at `docs-src/angular-6/` and compiled output at `docs/angular-6/`
- Updated `docs/index.html` to redirect to Angular 6 and keep Angular 5 and Angular 4 as previous versions

### 5.0.2 (Angular 5)
- Bumped package version to 5.0.2
- Updated peerDependencies to `@angular/core >=4.0.0 <6.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^5.2.11, TypeScript ~2.6.2, Highcharts ^6.0.0
- Added `@angular/cli 1.7.4` for demo app builds
- Added Highcharts 6 new feature demos: **bullet chart**, **x-range chart**
- Added keywords: `angular5`, `gantt`, `xrange`, `bullet-chart`, `windbarb`, `streamgraph`, `accessibility`
- Added `docs-src/angular-5/` demo app (compiled to `docs/angular-5/`)
- Updated `docs/index.html` to redirect to Angular 5 and list Angular 4 as previous version

### 4.0.0 (Angular 4)
- Initial release under `@revivejs` scope
- Angular 4 + Highcharts 5 support
- Components: `<chart>`, `<series>`, `<point>`, `<xAxis>`, `<yAxis>`, `<zAxis>`, `<colorAxis>`
- `ChartModule.forRoot(Highcharts, ...modules)` API

## License

MIT © Eugene Gluhotorenko
