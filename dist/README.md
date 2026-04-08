# @stackline/angular-highcharts

> A maintained **Angular 21 wrapper for Highcharts** with support for standard charts, `StockChart`, `Highmaps`, wrapper event outputs, native chart instance access, and Angular directives for `xAxis`, `yAxis`, `zAxis`, and `colorAxis`.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-highcharts)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/angular-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-highcharts)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-highcharts)
[![license](https://img.shields.io/npm/l/@stackline/angular-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular-highcharts/blob/master/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/angular-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular-highcharts/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/angular-highcharts/)** | **[npm](https://www.npmjs.com/package/@stackline/angular-highcharts)** | **[Issues](https://github.com/alexandroit/angular-highcharts/issues)** | **[Repository](https://github.com/alexandroit/angular-highcharts)**

**Latest version:** `21.0.1`

---

> **Credits:** Original library by [Eugene Gluhotorenko](https://github.com/gevgeny/angular2-highcharts). Current maintenance, Angular 4 compatibility work, package publishing, and repository stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-highcharts).

---

## Why this library?

The original `angular2-highcharts` package targeted early Angular releases and stopped evolving. This fork keeps the wrapper API backward-compatible, updates the maintained publication metadata, and expands the wrapper surface for more Highcharts features such as `zAxis`, `colorAxis`, and optional module-driven chart types.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular 21 wrapper release line | ✅ |
| Backward-compatible with Angular 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, and 20 apps | ✅ |
| Highcharts 12 maintained major line | ✅ |
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

Each package family only installs on its matching Angular family. Framework major and package major are not always the same package number, so use the package family column below.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **21.x** | **Angular 21 only** | **`>=21.0.0 <22.0.0`** | **21.0.0 -> 21.2.8** | [Angular 21 family docs](https://alexandroit.github.io/angular-highcharts/angular-21/) |
| **20.x** | **Angular 20 only** | **`>=20.0.0 <21.0.0`** | **20.0.0 -> 20.3.18** | [Angular 20 family docs](https://alexandroit.github.io/angular-highcharts/angular-20/) |
| **19.x** | **Angular 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.0 -> 19.2.20** | [Angular 19 family docs](https://alexandroit.github.io/angular-highcharts/angular-19/) |
| **18.x** | **Angular 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.0 -> 18.2.14** | [Angular 18 family docs](https://alexandroit.github.io/angular-highcharts/angular-18/) |
| **17.x** | **Angular 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.0 -> 17.3.12** | [Angular 17 family docs](https://alexandroit.github.io/angular-highcharts/angular-17/) |
| **16.x** | **Angular 16 only** | **`>=16.0.0 <17.0.0`** | **16.0.0 -> 16.2.12** | [Angular 16 family docs](https://alexandroit.github.io/angular-highcharts/angular-16/) |
| **15.x** | **Angular 15 only** | **`>=15.0.0 <16.0.0`** | **15.0.0 -> 15.2.10** | [Angular 15 family docs](https://alexandroit.github.io/angular-highcharts/angular-15/) |
| **14.x** | **Angular 14 only** | **`>=14.0.0 <15.0.0`** | **14.0.0 -> 14.3.0** | [Angular 14 family docs](https://alexandroit.github.io/angular-highcharts/angular-14/) |
| **13.x** | **Angular 13 only** | **`>=13.0.0 <14.0.0`** | **13.0.0 -> 13.4.0** | [Angular 13 family docs](https://alexandroit.github.io/angular-highcharts/angular-13/) |
| **12.x** | **Angular 12 only** | **`>=12.0.0 <13.0.0`** | **12.0.0 -> 12.2.17** | [Angular 12 family docs](https://alexandroit.github.io/angular-highcharts/angular-12/) |
| **11.x** | **Angular 11 only** | **`>=11.0.0 <12.0.0`** | **11.0.0 -> 11.2.14** | [Angular 11 family docs](https://alexandroit.github.io/angular-highcharts/angular-11/) |
| **10.x** | **Angular 10 only** | **`>=10.0.0 <11.0.0`** | **10.0.0 -> 10.2.5** | [Angular 10 family docs](https://alexandroit.github.io/angular-highcharts/angular-10/) |
| **9.x** | **Angular 9 only** | **`>=9.0.0 <10.0.0`** | **9.0.0 -> 9.1.13** | [Angular 9 family docs](https://alexandroit.github.io/angular-highcharts/angular-9/) |
| **8.x** | **Angular 8 only** | **`>=8.0.0 <9.0.0`** | **8.0.0 -> 8.2.14** | [Angular 8 family docs](https://alexandroit.github.io/angular-highcharts/angular-8/) |
| **7.x** | **Angular 7 only** | **`>=7.0.0 <8.0.0`** | **7.0.0 -> 7.2.16** | [Angular 7 family docs](https://alexandroit.github.io/angular-highcharts/angular-7/) |
| **6.x** | **Angular 6 only** | **`>=6.0.0 <7.0.0`** | **6.0.0 -> 6.1.10** | [Angular 6 family docs](https://alexandroit.github.io/angular-highcharts/angular-6/) |
| **5.x** | **Angular 5 only** | **`>=5.0.0 <6.0.0`** | **5.0.0 -> 5.2.11** | [Angular 5 family docs](https://alexandroit.github.io/angular-highcharts/angular-5/) |
| **4.x** | **Angular 4 only** | **`>=4.0.0 <5.0.0`** | **4.0.0 -> 4.4.7** | [Angular 4 family docs](https://alexandroit.github.io/angular-highcharts/angular-4/) |


## Installation

```bash
npm install @stackline/angular-highcharts highcharts
```

Choose the package family from the compatibility table above. Each published family is locked to one framework major only.

## Setup

### 1. Import the module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@stackline/angular-highcharts';

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
  '@stackline/angular-highcharts': 'node_modules/@stackline/angular-highcharts',
  'highcharts': 'node_modules/highcharts'
},
packages: {
  highcharts: {
    main: './highcharts.js',
    defaultExtension: 'js'
  },
  '@stackline/angular-highcharts': {
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

For Highcharts 12 optional modules loaded through `require(...)`, assign the imported Highcharts instance to the global scope before registering the modules:

```ts
declare var require: any;

const Highcharts = require('highcharts/highstock');
const globalScope: any = typeof window !== 'undefined' ? window : globalThis;

globalScope._Highcharts = Highcharts;
globalScope.Highcharts = Highcharts;

ChartModule.forRoot(
  Highcharts,
  require('highcharts/modules/heatmap'),
  require('highcharts/modules/pointandfigure'),
  require('highcharts/modules/renko')
)
```

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

### 21.0.1 (Angular 21)
- Bumped package version to 21.0.1
- Backfilled the renamed npm package history so `@stackline/angular-highcharts` now mirrors the historical release tree from `4.0.0` through `21.0.0`
- Kept `21.0.1` as the current latest release for the renamed package line

### 21.0.0 (Angular 21)
- Bumped package version to 21.0.0
- Updated peerDependencies to `@angular/core >=21.0.0 <22.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^21.2.7`, Angular CLI `21.2.6`, TypeScript `~5.9.3`, zone.js `~0.16.1`, and ng-packagr `^21.2.2`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the explicit `standalone: false` metadata on wrapper directives/components to keep the frozen NgModule-based API intact under Angular 21
- Preserved the NgModule installation pattern for backward compatibility while Angular 21 keeps signals available and standalone APIs optional

### 20.0.0 (Angular 20)
- Bumped package version to 20.0.0
- Updated peerDependencies to `@angular/core >=20.0.0 <21.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^20.3.18`, Angular CLI `20.3.22`, TypeScript `~5.9.3`, and ng-packagr `^20.3.2`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the explicit `standalone: false` metadata on wrapper directives/components to keep the frozen NgModule-based API intact under Angular 20
- Preserved the NgModule installation pattern for backward compatibility while Angular 20 keeps signals available and standalone APIs optional

### 19.0.0 (Angular 19)
- Bumped package version to 19.0.0
- Updated peerDependencies to `@angular/core >=19.0.0 <20.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^19.2.20`, Angular CLI `19.2.23`, TypeScript `~5.8.3`, and ng-packagr `^19.2.2`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Added explicit `standalone: false` on the wrapper directives/components to preserve the frozen NgModule-based API under Angular 19
- Preserved the NgModule installation pattern for backward compatibility while Angular 19 keeps signals available and standalone APIs optional

### 18.0.0 (Angular 18)
- Bumped package version to 18.0.0
- Updated peerDependencies to `@angular/core >=18.0.0 <19.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^18.2.14`, Angular CLI `18.2.21`, TypeScript `~5.5.4`, and ng-packagr `^18.2.1`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the NgModule installation pattern for backward compatibility while Angular 18 keeps signals available and standalone APIs optional

### 17.0.0 (Angular 17)
- Bumped package version to 17.0.0
- Updated peerDependencies to `@angular/core >=17.0.0 <18.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^17.3.12`, Angular CLI `17.3.17`, TypeScript `~5.4.5`, and ng-packagr `^17.3.0`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the NgModule installation pattern for backward compatibility while Angular 17 adds signals by default and keeps standalone APIs optional

### 16.0.0 (Angular 16)
- Bumped package version to 16.0.0
- Updated peerDependencies to `@angular/core >=16.0.0 <17.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^16.2.12`, Angular CLI `16.2.16`, TypeScript `~5.1.6`, and ng-packagr `^16.2.3`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the NgModule installation pattern for backward compatibility while Angular 16 adds optional signals and standalone APIs

### 15.0.0 (Angular 15)
- Bumped package version to 15.0.0
- Updated peerDependencies to `@angular/core >=15.0.0 <16.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^15.2.10`, Angular CLI `15.2.11`, TypeScript `~4.9.5`, and ng-packagr `^15.2.2`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the NgModule installation pattern for backward compatibility while Angular 15 further promotes optional standalone APIs

### 14.0.0 (Angular 14)
- Bumped package version to 14.0.0
- Updated peerDependencies to `@angular/core >=14.0.0 <15.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^14.3.0`, Angular CLI `14.2.13`, TypeScript `~4.8.4`, and ng-packagr `^14.2.2`
- Kept Highcharts at `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Carried forward the Highcharts 12 demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Preserved the NgModule installation pattern for backward compatibility while Angular 14 adds optional standalone APIs

### 13.0.0 (Angular 13)
- Bumped package version to 13.0.0
- Updated peerDependencies to `@angular/core >=13.0.0 <14.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^13.4.0`, Angular CLI `13.3.11`, TypeScript `~4.6.4`, and ng-packagr `^13.3.1`
- Upgraded Highcharts to `^12.5.0`, the latest supportable line for the frozen `ChartModule.forRoot(Highcharts, ...modules)` contract
- Added demos for `point-and-figure`, `renko`, `locale-aware-formatting`, and `human-friendly-dates`
- Updated the package build baseline to Angular Package Format v13 with ES2020 output settings

### 12.0.0 (Angular 12)
- Bumped package version to 12.0.0
- Updated peerDependencies to `@angular/core >=12.0.0 <13.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^12.2.17`, Angular CLI `12.2.18`, TypeScript `~4.3.5`, and ng-packagr `^12.2.7`
- Upgraded Highcharts to `^11.4.8`, the latest supportable line that keeps the frozen `ChartModule.forRoot(Highcharts, ...modules)` module-factory contract intact
- Added demos for `breadcrumbs`, `align-thresholds`, `organization-layout`, `arc-diagram`, `treegraph`, and `minor-ticks-per-major`
- Hardened module registration to accept both direct factories and `default`-exported factories without changing the public API

### 11.0.0 (Angular 11)
- Bumped package version to 11.0.0
- Updated peerDependencies to `@angular/core >=11.0.0 <12.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular `^11.2.14`, Angular CLI `11.2.19`, TypeScript `~4.1.6`, and ng-packagr `^11.2.4`
- Upgraded Highcharts to `^9.3.3` and added demos for `3d-area`, `single-touch-zoom`, `hlc`, `node-offsets`, and `annotations-crop`
- Kept the wrapper public API unchanged for Angular 11 and Ivy consumers

### 10.0.1 (Angular 10)
- Bumped package version to 10.0.1
- Fixed the npm README compatibility table to publish the Angular 10 demo link in the same format as the previous releases

### 10.0.0 (Angular 10)
- Bumped package version to 10.0.0
- Updated peerDependencies to `@angular/core >=10.0.0 <11.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^10.2.5 and TypeScript ~3.9.7
- Kept the library on Highcharts ^8.2.2 because it remains the latest supportable Highcharts line for this Angular 10 cycle
- No wrapper API changes were required; the frozen selectors, inputs, outputs, and `ChartModule.forRoot(...)` signature remain unchanged

### 9.0.0 (Angular 9)
- Bumped package version to 9.0.0
- Updated peerDependencies to `@angular/core >=9.0.0 <10.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^9.1.13 and TypeScript ~3.8.3
- Added Angular 9 Ivy compatibility by typing `ModuleWithProviders<ChartModule>`
- Kept the library on Highcharts ^8.2.2 because it remains the latest supportable Highcharts line for this Angular 9 cycle
- No new Highcharts major features were added in this step because the supported Highcharts major stays on 8.x

### 8.0.0 (Angular 8)
- Bumped package version to 8.0.0
- Updated peerDependencies to `@angular/core >=8.0.0 <9.0.0` and `highcharts >=5.0.0`
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
- Updated peerDependencies to `@angular/core >=7.0.0 <8.0.0` and `highcharts >=5.0.0`
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
- Updated peerDependencies to `@angular/core >=6.0.0 <7.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^6.1.10 and TypeScript ~2.7.2
- Migrated the library build to `ng-packagr` for Angular Package Format output
- Added Highcharts 6 demos for **bullet chart** and **x-range chart**
- Added Angular 6 docs app at `docs-src/angular-6/` and compiled output at `docs/angular-6/`
- Updated `docs/index.html` to redirect to Angular 6 and keep Angular 5 and Angular 4 as previous versions

### 5.0.2 (Angular 5)
- Bumped package version to 5.0.2
- Updated peerDependencies to `@angular/core >=5.0.0 <6.0.0` and `highcharts >=5.0.0`
- Updated devDependencies to Angular ^5.2.11, TypeScript ~2.6.2, Highcharts ^6.0.0
- Added `@angular/cli 1.7.4` for demo app builds
- Added Highcharts 6 new feature demos: **bullet chart**, **x-range chart**
- Added keywords: `angular5`, `gantt`, `xrange`, `bullet-chart`, `windbarb`, `streamgraph`, `accessibility`
- Added `docs-src/angular-5/` demo app (compiled to `docs/angular-5/`)
- Updated `docs/index.html` to redirect to Angular 5 and list Angular 4 as previous version

### 4.0.0 (Angular 4)
- Initial release under `@stackline` scope
- Angular 4 + Highcharts 5 support
- Components: `<chart>`, `<series>`, `<point>`, `<xAxis>`, `<yAxis>`, `<zAxis>`, `<colorAxis>`
- `ChartModule.forRoot(Highcharts, ...modules)` API

## License

MIT © Eugene Gluhotorenko
