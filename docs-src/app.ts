import 'zone.js';
import 'reflect-metadata';

import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ChartModule } from '../index';

declare var require: any;

const Highcharts = require('highcharts/highstock');
const Highcharts3d = require('highcharts/highcharts-3d');

enableProdMode();

@Component({
    selector: 'docs-app',
    styles: [`
        :host {
            display: block;
            min-height: 100vh;
            color: #102033;
            font-family: "Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif;
            background:
                radial-gradient(circle at top right, rgba(254, 228, 179, 0.6), transparent 34%),
                radial-gradient(circle at left 20%, rgba(170, 219, 255, 0.45), transparent 28%),
                linear-gradient(180deg, #fff8ef 0%, #f6fbff 52%, #eef5fb 100%);
        }

        .shell {
            max-width: 1240px;
            margin: 0 auto;
            padding: 32px 20px 56px;
        }

        .hero {
            display: grid;
            grid-template-columns: minmax(0, 1.9fr) minmax(280px, 0.9fr);
            gap: 24px;
            align-items: stretch;
            margin-bottom: 28px;
        }

        .hero-card,
        .panel,
        .log-card {
            border: 1px solid rgba(16, 32, 51, 0.1);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.82);
            box-shadow: 0 18px 50px rgba(27, 66, 110, 0.12);
            backdrop-filter: blur(10px);
        }

        .hero-card {
            padding: 28px;
        }

        .eyebrow {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 999px;
            background: #102033;
            color: #fff;
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        h1, h2, h3 {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 700;
            line-height: 1.1;
        }

        h1 {
            margin-top: 16px;
            font-size: 48px;
        }

        h2 {
            font-size: 30px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 20px;
            margin-bottom: 8px;
        }

        p {
            margin: 0;
            line-height: 1.65;
            color: #364b63;
        }

        .hero-copy {
            display: grid;
            gap: 16px;
        }

        .quick-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 8px;
        }

        .quick-item {
            padding: 14px 16px;
            border-radius: 16px;
            background: linear-gradient(180deg, #fefefe 0%, #f2f7fb 100%);
            border: 1px solid rgba(16, 32, 51, 0.08);
        }

        .quick-item strong,
        .spec strong {
            display: block;
            margin-bottom: 4px;
            color: #102033;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .hero-side {
            padding: 24px;
            display: grid;
            gap: 16px;
        }

        .spec-list {
            display: grid;
            gap: 12px;
        }

        .spec {
            padding: 14px 16px;
            border-radius: 16px;
            background: #f8fbfd;
            border: 1px solid rgba(16, 32, 51, 0.08);
        }

        .cta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 8px;
        }

        .button,
        button {
            appearance: none;
            border: 0;
            border-radius: 999px;
            padding: 11px 16px;
            font: inherit;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(135deg, #d24b2a 0%, #224f90 100%);
            cursor: pointer;
            box-shadow: 0 10px 24px rgba(34, 79, 144, 0.18);
        }

        .button.secondary,
        button.secondary {
            color: #14324f;
            background: #edf4fa;
            box-shadow: none;
            border: 1px solid rgba(20, 50, 79, 0.12);
        }

        .button.ghost,
        button.ghost {
            color: #14324f;
            background: transparent;
            box-shadow: none;
            border: 1px dashed rgba(20, 50, 79, 0.22);
        }

        .layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 320px;
            gap: 24px;
        }

        .stack {
            display: grid;
            gap: 22px;
        }

        .panel {
            padding: 24px;
        }

        .panel-head {
            display: grid;
            gap: 10px;
            margin-bottom: 18px;
        }

        .demo-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
        }

        .demo-card {
            padding: 18px;
            border-radius: 18px;
            background: linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
            border: 1px solid rgba(16, 32, 51, 0.08);
        }

        .chart-frame {
            margin-top: 14px;
            padding: 10px;
            border-radius: 16px;
            background: #fff;
            border: 1px solid rgba(16, 32, 51, 0.08);
            min-height: 320px;
        }

        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
        }

        .inline-code,
        pre {
            font-family: "IBM Plex Mono", "Fira Code", Consolas, monospace;
        }

        pre {
            margin: 14px 0 0;
            padding: 14px 16px;
            border-radius: 14px;
            overflow: auto;
            background: #0f2137;
            color: #dfeaf6;
            font-size: 13px;
            line-height: 1.55;
        }

        .note {
            margin-top: 12px;
            padding: 12px 14px;
            border-radius: 14px;
            background: #fff6e8;
            color: #6f4a16;
            border: 1px solid rgba(210, 128, 31, 0.16);
        }

        .log-card {
            position: sticky;
            top: 20px;
            padding: 20px;
            height: fit-content;
        }

        .log-list {
            display: grid;
            gap: 10px;
            margin-top: 16px;
        }

        .log-item {
            padding: 12px 14px;
            border-radius: 14px;
            background: #f6f9fc;
            border: 1px solid rgba(16, 32, 51, 0.07);
            color: #27425f;
            font-size: 14px;
            line-height: 1.45;
        }

        .footer {
            margin-top: 26px;
            padding: 22px 24px;
            border-radius: 20px;
            background: rgba(16, 32, 51, 0.92);
            color: #e8f0f8;
        }

        .footer p {
            color: #c8d8ea;
        }

        a {
            color: #1f5ba7;
        }

        @media (max-width: 1024px) {
            .hero,
            .layout,
            .demo-grid {
                grid-template-columns: 1fr;
            }

            .log-card {
                position: static;
            }
        }

        @media (max-width: 680px) {
            .shell {
                padding: 20px 14px 40px;
            }

            h1 {
                font-size: 36px;
            }

            .hero-card,
            .panel,
            .log-card,
            .footer {
                padding: 18px;
                border-radius: 18px;
            }

            .quick-grid {
                grid-template-columns: 1fr;
            }
        }
    `],
    template: `
        <div class="shell">
            <section class="hero">
                <div class="hero-card hero-copy">
                    <span class="eyebrow">Interactive Documentation</span>
                    <h1>angular2-highcharts</h1>
                    <p>
                        A live documentation page for the Angular 4 wrapper, built from this repository and compiled into <span class="inline-code">docs/</span>.
                        Every section below is executable and demonstrates the real wrapper API instead of screenshots.
                    </p>
                    <div class="quick-grid">
                        <div class="quick-item">
                            <strong>Wrapper API</strong>
                            Regular charts, StockChart, event emitters, and dynamic chart access.
                        </div>
                        <div class="quick-item">
                            <strong>Highcharts Modules</strong>
                            Demonstrates <span class="inline-code">ChartModule.forRoot(Highcharts, Highcharts3d)</span>.
                        </div>
                        <div class="quick-item">
                            <strong>Static API</strong>
                            Rebuild demos after changing the global Highcharts palette.
                        </div>
                        <div class="quick-item">
                            <strong>Repository Pattern</strong>
                            Mirrors the checked-in <span class="inline-code">docs/</span> workflow used in the reference project.
                        </div>
                    </div>
                    <div class="cta-row">
                        <a class="button" href="#demos">Jump to demos</a>
                        <a class="button secondary" href="../README.md">Read the package README</a>
                    </div>
                </div>

                <div class="hero-card hero-side">
                    <h2>Quick Start</h2>
                    <div class="spec-list">
                        <div class="spec">
                            <strong>Install</strong>
                            <span class="inline-code">npm install angular2-highcharts highcharts</span>
                        </div>
                        <div class="spec">
                            <strong>Import</strong>
                            <span class="inline-code">ChartModule.forRoot(Highcharts, Highcharts3d)</span>
                        </div>
                        <div class="spec">
                            <strong>Docs Build</strong>
                            <span class="inline-code">npm run build:docs</span>
                        </div>
                        <div class="spec">
                            <strong>Docs Preview</strong>
                            <span class="inline-code">npm run serve:docs</span>
                        </div>
                    </div>
                    <pre>import { ChartModule } from 'angular2-highcharts';
const Highcharts = require('highcharts/highstock');
const Highcharts3d = require('highcharts/highcharts-3d');

@NgModule({
  imports: [ChartModule.forRoot(Highcharts, Highcharts3d)]
})</pre>
                </div>
            </section>

            <section class="layout" id="demos">
                <div class="stack">
                    <article class="panel">
                        <div class="panel-head">
                            <h2>Core Demos</h2>
                            <p>
                                These examples cover the library capabilities that matter most in practice: regular chart rendering, event bridges,
                                dynamic access to the native chart instance, StockChart support, 3D module registration, and the Highcharts static API.
                            </p>
                        </div>

                        <div class="demo-grid">
                            <section class="demo-card">
                                <h3>Basic Chart</h3>
                                <p>A clean baseline chart using the wrapper with standard Highcharts options.</p>
                                <div class="chart-frame">
                                    <chart [options]="basicOptions"></chart>
                                </div>
                            </section>

                            <section class="demo-card">
                                <h3>Event Bridge Explorer</h3>
                                <p>Selection, series hover, point select, and axis extremes all flow through Angular outputs.</p>
                                <div class="controls">
                                    <button type="button" class="secondary" (click)="zoomEventXAxis()">Zoom X axis</button>
                                    <button type="button" class="secondary" (click)="zoomEventYAxis()">Zoom Y axis</button>
                                    <button type="button" class="ghost" (click)="resetEventAxes()">Reset axes</button>
                                </div>
                                <div class="chart-frame">
                                    <chart [options]="eventChartOptions"
                                           (load)="saveEventChart($event.context)"
                                           (selection)="onChartSelection($event)">
                                        <series (mouseOver)="onSeriesMouseOver($event)">
                                            <point (select)="onPointSelect($event)"></point>
                                        </series>
                                        <xAxis (afterSetExtremes)="onXAxisExtremes($event)"></xAxis>
                                        <yAxis (afterSetExtremes)="onYAxisExtremes($event)"></yAxis>
                                    </chart>
                                </div>
                            </section>

                            <section class="demo-card">
                                <h3>Dynamic Chart Access</h3>
                                <p>The wrapper exposes the native Highcharts instance so consumers can mutate series, titles, and axes.</p>
                                <div class="controls">
                                    <button type="button" (click)="addDynamicPoint()">Add point</button>
                                    <button type="button" class="secondary" (click)="shuffleDynamicSeries()">Randomize series</button>
                                    <button type="button" class="secondary" (click)="renameDynamicChart()">Rename chart</button>
                                    <button type="button" class="ghost" (click)="removeDynamicPoint()">Remove first point</button>
                                </div>
                                <div class="chart-frame">
                                    <chart [options]="dynamicOptions" (load)="saveDynamicChart($event.context)"></chart>
                                </div>
                                <div class="note">
                                    This section intentionally uses the native chart object because the wrapper does not diff your initial options after creation.
                                </div>
                            </section>

                            <section class="demo-card">
                                <h3>StockChart</h3>
                                <p>Uses the wrapper <span class="inline-code">type</span> input with local time-series data, no remote request required.</p>
                                <div class="chart-frame">
                                    <chart type="StockChart" [options]="stockOptions"></chart>
                                </div>
                            </section>
                        </div>
                    </article>

                    <article class="panel">
                        <div class="panel-head">
                            <h2>Modules and Static API</h2>
                            <p>
                                These demos focus on the two advanced integration points this library exposes: Highcharts modules registered through
                                <span class="inline-code">forRoot</span> and direct access to the global Highcharts object.
                            </p>
                        </div>

                        <div class="demo-grid">
                            <section class="demo-card">
                                <h3>3D Module Demo</h3>
                                <p>
                                    The 3D column chart only works because the docs app passes <span class="inline-code">highcharts-3d</span> into
                                    <span class="inline-code">ChartModule.forRoot</span>.
                                </p>
                                <div class="controls">
                                    <button type="button" (click)="toggle3d()">Toggle 3D</button>
                                </div>
                                <div class="chart-frame">
                                    <chart [options]="moduleOptions"></chart>
                                </div>
                            </section>

                            <section class="demo-card">
                                <h3>Static Highcharts API</h3>
                                <p>Rebuild the examples after changing the global color palette with <span class="inline-code">Highcharts.setOptions</span>.</p>
                                <div class="controls">
                                    <button type="button" (click)="useClassicPalette()">Classic palette</button>
                                    <button type="button" class="secondary" (click)="useSunsetPalette()">Sunset palette</button>
                                </div>
                                <div class="chart-frame">
                                    <chart [options]="staticApiOptions"></chart>
                                </div>
                            </section>
                        </div>
                    </article>

                    <article class="panel">
                        <div class="panel-head">
                            <h2>Usage Notes</h2>
                            <p>The HTML above is meant to replace broken or scattered demo links with a repository-local documentation surface.</p>
                        </div>
                        <pre>&lt;chart [options]="options"
       (selection)="onChartSelection($event)"&gt;
  &lt;series (mouseOver)="onSeriesMouseOver($event)"&gt;
    &lt;point (select)="onPointSelect($event)"&gt;&lt;/point&gt;
  &lt;/series&gt;
  &lt;xAxis (afterSetExtremes)="onXAxisExtremes($event)"&gt;&lt;/xAxis&gt;
  &lt;yAxis (afterSetExtremes)="onYAxisExtremes($event)"&gt;&lt;/yAxis&gt;
&lt;/chart&gt;</pre>
                        <div class="note">
                            If you update chart data after initialization, use the native Highcharts instance from the <span class="inline-code">load</span> event.
                            That behavior is deliberate and matches the original wrapper contract.
                        </div>
                    </article>
                </div>

                <aside class="log-card">
                    <h2>Live Event Log</h2>
                    <p>Use the demos and watch the wrapper emitters and chart instance interactions show up here.</p>
                    <div class="controls">
                        <button type="button" class="ghost" (click)="clearLogs()">Clear log</button>
                    </div>
                    <div class="log-list">
                        <div class="log-item" *ngFor="let entry of logs">{{ entry }}</div>
                    </div>
                </aside>
            </section>

            <footer class="footer">
                <h3>Credits</h3>
                <p>
                    Original library by Eugene Gluhotorenko. This documentation build keeps the forked repository usable by shipping a checked-in
                    static demo in <span class="inline-code">docs/</span>, following the same maintenance pattern used by the reference project.
                </p>
            </footer>
        </div>
    `
})
class DocsAppComponent {
    basicOptions: Object;
    eventChartOptions: Object;
    dynamicOptions: Object;
    stockOptions: Object;
    moduleOptions: Object;
    staticApiOptions: Object;
    logs: string[] = [];

    private eventChart: any;
    private dynamicChart: any;
    private module3dEnabled: boolean = true;
    private paletteName: string = 'Classic revive';

    constructor() {
        this.usePalette([
            '#0d5c9e',
            '#30a46c',
            '#d26a2a',
            '#b43f3f',
            '#6d52b5'
        ], this.paletteName, false);

        this.basicOptions = this.createBasicOptions();
        this.eventChartOptions = this.createEventChartOptions();
        this.dynamicOptions = this.createDynamicOptions();
        this.stockOptions = this.createStockOptions();
        this.moduleOptions = this.createModuleOptions(this.module3dEnabled);
        this.staticApiOptions = this.createStaticApiOptions();
        this.log('Documentation demo loaded.');
    }

    clearLogs() {
        this.logs = [];
        this.log('Log cleared.');
    }

    saveEventChart(chart: any) {
        this.eventChart = chart;
        this.log('Event explorer chart instance is ready.');
    }

    saveDynamicChart(chart: any) {
        this.dynamicChart = chart;
        this.log('Dynamic chart instance is ready.');
    }

    onChartSelection(e: any) {
        if (e.originalEvent && e.originalEvent.xAxis && e.originalEvent.xAxis.length) {
            this.log('Selection range: ' + e.originalEvent.xAxis[0].min.toFixed(2) + ' to ' + e.originalEvent.xAxis[0].max.toFixed(2));
            return;
        }
        this.log('Selection event fired.');
    }

    onSeriesMouseOver(e: any) {
        this.log('Series hover: ' + e.context.name);
    }

    onPointSelect(e: any) {
        this.log('Point selected: ' + e.context.category + ' = ' + e.context.y);
    }

    onXAxisExtremes(e: any) {
        if (typeof e.context.min === 'number' && typeof e.context.max === 'number') {
            this.log('X axis extremes: ' + e.context.min.toFixed(2) + ' to ' + e.context.max.toFixed(2));
        }
    }

    onYAxisExtremes(e: any) {
        if (typeof e.context.min === 'number' && typeof e.context.max === 'number') {
            this.log('Y axis extremes: ' + e.context.min.toFixed(2) + ' to ' + e.context.max.toFixed(2));
        }
    }

    zoomEventXAxis() {
        if (!this.eventChart) {
            return;
        }
        this.eventChart.xAxis[0].setExtremes(1, 4);
    }

    zoomEventYAxis() {
        if (!this.eventChart) {
            return;
        }
        this.eventChart.yAxis[0].setExtremes(20, 95);
    }

    resetEventAxes() {
        if (!this.eventChart) {
            return;
        }
        this.eventChart.xAxis[0].setExtremes(null, null);
        this.eventChart.yAxis[0].setExtremes(null, null);
        this.log('Axes reset to automatic extremes.');
    }

    addDynamicPoint() {
        if (!this.dynamicChart) {
            return;
        }
        var nextValue = Math.round((Math.random() * 14 + 4) * 10) / 10;
        this.dynamicChart.series[0].addPoint(nextValue, true, false);
        this.log('Added point: ' + nextValue);
    }

    removeDynamicPoint() {
        if (!this.dynamicChart || !this.dynamicChart.series[0].data.length) {
            return;
        }
        var removedPoint = this.dynamicChart.series[0].data[0];
        removedPoint.remove(false);
        this.dynamicChart.redraw();
        this.log('Removed the first point from the dynamic chart.');
    }

    shuffleDynamicSeries() {
        if (!this.dynamicChart) {
            return;
        }
        var next = [];
        for (var i = 0; i < 6; i++) {
            next.push(Math.round((Math.random() * 18 + 2) * 10) / 10);
        }
        this.dynamicChart.series[0].setData(next, true);
        this.log('Dynamic series replaced with ' + next.join(', '));
    }

    renameDynamicChart() {
        if (!this.dynamicChart) {
            return;
        }
        var label = 'Updated at ' + this.getClock();
        this.dynamicChart.setTitle({ text: label });
        this.log('Dynamic chart renamed to "' + label + '".');
    }

    toggle3d() {
        this.module3dEnabled = !this.module3dEnabled;
        this.moduleOptions = this.createModuleOptions(this.module3dEnabled);
        this.log('3D mode ' + (this.module3dEnabled ? 'enabled' : 'disabled') + '.');
    }

    useClassicPalette() {
        this.paletteName = 'Classic revive';
        this.usePalette([
            '#0d5c9e',
            '#30a46c',
            '#d26a2a',
            '#b43f3f',
            '#6d52b5'
        ], this.paletteName, true);
    }

    useSunsetPalette() {
        this.paletteName = 'Sunset contrast';
        this.usePalette([
            '#6b2d5c',
            '#f08c24',
            '#0f8c79',
            '#3c4ca0',
            '#d64545'
        ], this.paletteName, true);
    }

    private usePalette(colors: string[], paletteName: string, rebuildDemos: boolean) {
        Highcharts.setOptions({
            colors: colors
        });

        if (rebuildDemos) {
            this.basicOptions = this.createBasicOptions();
            this.stockOptions = this.createStockOptions();
            this.moduleOptions = this.createModuleOptions(this.module3dEnabled);
            this.staticApiOptions = this.createStaticApiOptions();
            this.log('Highcharts global palette switched to "' + paletteName + '".');
        }
    }

    private createBasicOptions() {
        return {
            title: { text: 'Monthly performance snapshot' },
            subtitle: { text: 'Simple wrapper usage with a standard chart constructor' },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                title: { text: 'Score' }
            },
            series: [{
                name: 'Alpha',
                type: 'line',
                data: [29.9, 41.2, 51.8, 63.4, 72.1, 84.6]
            }, {
                name: 'Beta',
                type: 'line',
                data: [18.2, 24.5, 39.1, 44.4, 60.3, 67.9]
            }]
        };
    }

    private createEventChartOptions() {
        return {
            chart: {
                zoomType: 'xy'
            },
            title: { text: 'Event-aware chart' },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                title: { text: 'Value' }
            },
            plotOptions: {
                series: {
                    allowPointSelect: true
                }
            },
            series: [{
                name: 'Visitors',
                type: 'column',
                data: [13, 18, 42, 68, 81, 55, 39]
            }]
        };
    }

    private createDynamicOptions() {
        return {
            title: { text: 'Live mutation example' },
            subtitle: { text: 'Use buttons to interact with the native chart object' },
            series: [{
                type: 'spline',
                data: [2, 3, 5, 8, 13, 21]
            }]
        };
    }

    private createStockOptions() {
        return {
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'Sample StockChart data'
            },
            series: [{
                name: 'Demo asset',
                type: 'line',
                data: this.createStockSeriesData(),
                tooltip: {
                    valueDecimals: 2
                }
            }]
        };
    }

    private createModuleOptions(enabled: boolean) {
        return {
            title: {
                text: enabled ? '3D module enabled' : '3D module disabled'
            },
            subtitle: {
                text: 'Rebuilt from Angular after toggling the module-backed options'
            },
            chart: {
                type: 'column',
                margin: 70,
                options3d: {
                    enabled: enabled,
                    alpha: 12,
                    beta: 18,
                    depth: 48
                }
            },
            plotOptions: {
                column: {
                    depth: enabled ? 24 : 0
                }
            },
            xAxis: {
                categories: ['North', 'South', 'East', 'West']
            },
            series: [{
                name: 'Orders',
                type: 'column',
                data: [29.9, 71.5, 46.4, 58.2]
            }]
        };
    }

    private createStaticApiOptions() {
        return {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Static API palette: ' + this.paletteName
            },
            subtitle: {
                text: 'This chart is rebuilt after calling Highcharts.setOptions'
            },
            xAxis: {
                categories: ['Docs', 'API', 'Events', 'Stock', '3D']
            },
            series: [{
                name: 'Coverage',
                type: 'column',
                data: [8, 9, 7, 8, 6]
            }, {
                name: 'Hands-on value',
                type: 'column',
                data: [9, 8, 9, 7, 8]
            }]
        };
    }

    private createStockSeriesData() {
        var points = [];
        var start = Date.UTC(2024, 0, 1);
        var value = 96;
        var i;

        for (i = 0; i < 90; i++) {
            value += Math.sin(i / 7) * 1.8 + (i % 5 === 0 ? 2.2 : -0.4);
            points.push([start + i * 24 * 3600 * 1000, Math.round(value * 100) / 100]);
        }

        return points;
    }

    private log(message: string) {
        this.logs.unshift(this.getClock() + '  ' + message);
        this.logs = this.logs.slice(0, 14);
    }

    private getClock() {
        var now = new Date();
        return this.pad(now.getHours()) + ':' + this.pad(now.getMinutes()) + ':' + this.pad(now.getSeconds());
    }

    private pad(value: number) {
        return value < 10 ? '0' + value : '' + value;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        ChartModule.forRoot(Highcharts, Highcharts3d)
    ],
    declarations: [DocsAppComponent],
    bootstrap: [DocsAppComponent]
})
class DocsAppModule {}

platformBrowserDynamic().bootstrapModule(DocsAppModule);
