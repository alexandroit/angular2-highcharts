import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, ContentChild, Injectable, Component, Input, NgModule } from '@angular/core';

class ChartPointComponent {
    constructor() {
        this.click = new EventEmitter();
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.update = new EventEmitter();
    }
}
ChartPointComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartPointComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartPointComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartPointComponent, selector: "point", outputs: { click: "click", remove: "remove", select: "select", unselect: "unselect", mouseOver: "mouseOver", mouseOut: "mouseOut", update: "update" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartPointComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'point'
                }]
        }], propDecorators: { click: [{
                type: Output
            }], remove: [{
                type: Output
            }], select: [{
                type: Output
            }], unselect: [{
                type: Output
            }], mouseOver: [{
                type: Output
            }], mouseOut: [{
                type: Output
            }], update: [{
                type: Output
            }] } });

class ChartSeriesComponent {
    constructor() {
        this.click = new EventEmitter();
        this.afterAnimate = new EventEmitter();
        this.checkboxClick = new EventEmitter();
        this.hide = new EventEmitter();
        this.legendItemClick = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.show = new EventEmitter();
    }
}
ChartSeriesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartSeriesComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartSeriesComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartSeriesComponent, selector: "series", outputs: { click: "click", afterAnimate: "afterAnimate", checkboxClick: "checkboxClick", hide: "hide", legendItemClick: "legendItemClick", mouseOver: "mouseOver", mouseOut: "mouseOut", show: "show" }, queries: [{ propertyName: "point", first: true, predicate: ChartPointComponent, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartSeriesComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'series'
                }]
        }], propDecorators: { point: [{
                type: ContentChild,
                args: [ChartPointComponent, { static: false }]
            }], click: [{
                type: Output
            }], afterAnimate: [{
                type: Output
            }], checkboxClick: [{
                type: Output
            }], hide: [{
                type: Output
            }], legendItemClick: [{
                type: Output
            }], mouseOver: [{
                type: Output
            }], mouseOut: [{
                type: Output
            }], show: [{
                type: Output
            }] } });

class ChartXAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartXAxisComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartXAxisComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartXAxisComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartXAxisComponent, selector: "xAxis", outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartXAxisComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'xAxis'
                }]
        }], propDecorators: { afterBreaks: [{
                type: Output
            }], afterSetExtremes: [{
                type: Output
            }], pointBreak: [{
                type: Output
            }], pointInBreak: [{
                type: Output
            }], setExtremes: [{
                type: Output
            }] } });

class ChartYAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartYAxisComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartYAxisComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartYAxisComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartYAxisComponent, selector: "yAxis", outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartYAxisComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'yAxis'
                }]
        }], propDecorators: { afterBreaks: [{
                type: Output
            }], afterSetExtremes: [{
                type: Output
            }], pointBreak: [{
                type: Output
            }], pointInBreak: [{
                type: Output
            }], setExtremes: [{
                type: Output
            }] } });

class ChartZAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartZAxisComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartZAxisComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartZAxisComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartZAxisComponent, selector: "zAxis", outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartZAxisComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'zAxis'
                }]
        }], propDecorators: { afterBreaks: [{
                type: Output
            }], afterSetExtremes: [{
                type: Output
            }], pointBreak: [{
                type: Output
            }], pointInBreak: [{
                type: Output
            }], setExtremes: [{
                type: Output
            }] } });

class ChartColorAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartColorAxisComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartColorAxisComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartColorAxisComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ChartColorAxisComponent, selector: "colorAxis", outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartColorAxisComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'colorAxis'
                }]
        }], propDecorators: { afterBreaks: [{
                type: Output
            }], afterSetExtremes: [{
                type: Output
            }], pointBreak: [{
                type: Output
            }], pointInBreak: [{
                type: Output
            }], setExtremes: [{
                type: Output
            }] } });

class HighchartsStatic {
}
HighchartsStatic.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsStatic, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HighchartsStatic.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsStatic });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsStatic, decorators: [{
            type: Injectable
        }] });
class HighchartsService {
    constructor(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    getHighchartsStatic() {
        return this._highchartsStatice;
    }
}
HighchartsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsService, deps: [{ token: HighchartsStatic }], target: i0.ɵɵFactoryTarget.Injectable });
HighchartsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighchartsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HighchartsStatic }]; } });

var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
function assignKey(to, from, key) {
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    }
    else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    //if (Object.getOwnPropertySymbols) {
    //    var symbols = Object.getOwnPropertySymbols(from);
    //
    //    for (var i = 0; i < symbols.length; i++) {
    //        if (propIsEnumerable.call(from, symbols[i])) {
    //            assignKey(to, from, symbols[i]);
    //        }
    //    }
    //}
    return to;
}
function deepAssign(target, ...args) {
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}

function initChart(highchartsService, userOpts, baseOpts, type) {
    const Highcharts = highchartsService.getHighchartsStatic();
    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.forRoot');
    }
    if (!Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }
    // Adjust axis type to user one (#56)
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    if (Array.isArray(userOpts.zAxis)) {
        baseOpts.zAxis = [baseOpts.zAxis];
    }
    if (Array.isArray(userOpts.colorAxis)) {
        baseOpts.colorAxis = [baseOpts.colorAxis];
    }
    const opts = deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}

class ChartEvent {
    constructor(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
}

const chartEvents = [
    //'click', works by default as a native DOM click
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
const seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
const pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
const xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
const yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
const zAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
const colorAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, zAxisCmp, colorAxisCmp, element) {
    let opts = {
        chart: {
            renderTo: element,
            events: {}
        },
        plotOptions: {
            series: {
                events: {},
                point: {
                    events: {}
                }
            }
        },
        xAxis: {
            events: {}
        },
        yAxis: {
            events: {}
        },
        zAxis: {
            events: {}
        },
        colorAxis: {
            events: {}
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event) {
            chartCmp[eventName].emit(new ChartEvent(event, this));
        };
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event) {
                seriesCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event) {
                pointCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    if (xAxisCmp) {
        xAxisEvents.forEach(function (eventName) {
            opts.xAxis.events[eventName] = opts.xAxis.events[eventName] || function (event) {
                xAxisCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    if (yAxisCmp) {
        yAxisEvents.forEach(function (eventName) {
            opts.yAxis.events[eventName] = opts.yAxis.events[eventName] || function (event) {
                yAxisCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    if (zAxisCmp) {
        zAxisEvents.forEach(function (eventName) {
            opts.zAxis.events[eventName] = opts.zAxis.events[eventName] || function (event) {
                zAxisCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    if (colorAxisCmp) {
        colorAxisEvents.forEach(function (eventName) {
            opts.colorAxis.events[eventName] = opts.colorAxis.events[eventName] || function (event) {
                colorAxisCmp[eventName].emit(new ChartEvent(event, this));
            };
        });
    }
    return opts;
}

class ChartComponent {
    constructor(element, highchartsService) {
        this.create = new EventEmitter();
        this.click = new EventEmitter();
        this.addSeries = new EventEmitter();
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.drilldown = new EventEmitter();
        this.drillup = new EventEmitter();
        this.load = new EventEmitter();
        this.redraw = new EventEmitter();
        this.selection = new EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    set options(opts) {
        this.userOpts = opts;
        this.init();
    }
    ;
    init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }
    ngAfterViewInit() {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    }
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartComponent, deps: [{ token: i0.ElementRef }, { token: HighchartsService }], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ChartComponent, selector: "chart", inputs: { type: "type", options: "options" }, outputs: { create: "create", click: "click", addSeries: "addSeries", afterPrint: "afterPrint", beforePrint: "beforePrint", drilldown: "drilldown", drillup: "drillup", load: "load", redraw: "redraw", selection: "selection" }, providers: [HighchartsService], queries: [{ propertyName: "series", first: true, predicate: ChartSeriesComponent, descendants: true }, { propertyName: "xAxis", first: true, predicate: ChartXAxisComponent, descendants: true }, { propertyName: "yAxis", first: true, predicate: ChartYAxisComponent, descendants: true }, { propertyName: "zAxis", first: true, predicate: ChartZAxisComponent, descendants: true }, { propertyName: "colorAxis", first: true, predicate: ChartColorAxisComponent, descendants: true }], ngImport: i0, template: '&nbsp;', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'chart',
                    template: '&nbsp;',
                    providers: [HighchartsService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: HighchartsService }]; }, propDecorators: { series: [{
                type: ContentChild,
                args: [ChartSeriesComponent, { static: false }]
            }], xAxis: [{
                type: ContentChild,
                args: [ChartXAxisComponent, { static: false }]
            }], yAxis: [{
                type: ContentChild,
                args: [ChartYAxisComponent, { static: false }]
            }], zAxis: [{
                type: ContentChild,
                args: [ChartZAxisComponent, { static: false }]
            }], colorAxis: [{
                type: ContentChild,
                args: [ChartColorAxisComponent, { static: false }]
            }], create: [{
                type: Output
            }], click: [{
                type: Output
            }], addSeries: [{
                type: Output
            }], afterPrint: [{
                type: Output
            }], beforePrint: [{
                type: Output
            }], drilldown: [{
                type: Output
            }], drillup: [{
                type: Output
            }], load: [{
                type: Output
            }], redraw: [{
                type: Output
            }], selection: [{
                type: Output
            }], type: [{
                type: Input
            }], options: [{
                type: Input
            }] } });

const CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
class ChartModule {
    static forRoot(highchartsStatic, ...highchartsModules) {
        // Plug highcharts modules
        highchartsModules.forEach((loadedModule) => {
            const highchartsModule = loadedModule && loadedModule.default ? loadedModule.default : loadedModule;
            if (typeof highchartsModule === 'function') {
                highchartsModule(highchartsStatic);
            }
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, declarations: [ChartComponent,
        ChartSeriesComponent,
        ChartPointComponent,
        ChartXAxisComponent,
        ChartYAxisComponent,
        ChartZAxisComponent,
        ChartColorAxisComponent], exports: [ChartComponent,
        ChartSeriesComponent,
        ChartPointComponent,
        ChartXAxisComponent,
        ChartYAxisComponent,
        ChartZAxisComponent,
        ChartColorAxisComponent] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChartColorAxisComponent, ChartComponent, ChartModule, ChartPointComponent, ChartSeriesComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent };
//# sourceMappingURL=revivejs-angular2-highcharts.mjs.map
