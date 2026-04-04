import { __decorate } from 'tslib';
import { EventEmitter, Output, Directive, ContentChild, Injectable, ElementRef, Input, Component, NgModule } from '@angular/core';

let ChartPointComponent = class ChartPointComponent {
    constructor() {
        this.click = new EventEmitter();
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.update = new EventEmitter();
    }
};
__decorate([
    Output()
], ChartPointComponent.prototype, "click", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "remove", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "select", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "unselect", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "mouseOver", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "mouseOut", void 0);
__decorate([
    Output()
], ChartPointComponent.prototype, "update", void 0);
ChartPointComponent = __decorate([
    Directive({
        selector: 'point'
    })
], ChartPointComponent);

let ChartSeriesComponent = class ChartSeriesComponent {
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
};
__decorate([
    ContentChild(ChartPointComponent, { static: false })
], ChartSeriesComponent.prototype, "point", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "click", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "afterAnimate", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "checkboxClick", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "hide", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "legendItemClick", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "mouseOver", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "mouseOut", void 0);
__decorate([
    Output()
], ChartSeriesComponent.prototype, "show", void 0);
ChartSeriesComponent = __decorate([
    Directive({
        selector: 'series'
    })
], ChartSeriesComponent);

let ChartXAxisComponent = class ChartXAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
};
__decorate([
    Output()
], ChartXAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    Output()
], ChartXAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    Output()
], ChartXAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    Output()
], ChartXAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    Output()
], ChartXAxisComponent.prototype, "setExtremes", void 0);
ChartXAxisComponent = __decorate([
    Directive({
        selector: 'xAxis'
    })
], ChartXAxisComponent);

let ChartYAxisComponent = class ChartYAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
};
__decorate([
    Output()
], ChartYAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    Output()
], ChartYAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    Output()
], ChartYAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    Output()
], ChartYAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    Output()
], ChartYAxisComponent.prototype, "setExtremes", void 0);
ChartYAxisComponent = __decorate([
    Directive({
        selector: 'yAxis'
    })
], ChartYAxisComponent);

let ChartZAxisComponent = class ChartZAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
};
__decorate([
    Output()
], ChartZAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    Output()
], ChartZAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    Output()
], ChartZAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    Output()
], ChartZAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    Output()
], ChartZAxisComponent.prototype, "setExtremes", void 0);
ChartZAxisComponent = __decorate([
    Directive({
        selector: 'zAxis'
    })
], ChartZAxisComponent);

let ChartColorAxisComponent = class ChartColorAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
};
__decorate([
    Output()
], ChartColorAxisComponent.prototype, "afterBreaks", void 0);
__decorate([
    Output()
], ChartColorAxisComponent.prototype, "afterSetExtremes", void 0);
__decorate([
    Output()
], ChartColorAxisComponent.prototype, "pointBreak", void 0);
__decorate([
    Output()
], ChartColorAxisComponent.prototype, "pointInBreak", void 0);
__decorate([
    Output()
], ChartColorAxisComponent.prototype, "setExtremes", void 0);
ChartColorAxisComponent = __decorate([
    Directive({
        selector: 'colorAxis'
    })
], ChartColorAxisComponent);

let HighchartsStatic = class HighchartsStatic {
};
HighchartsStatic = __decorate([
    Injectable()
], HighchartsStatic);
let HighchartsService = class HighchartsService {
    constructor(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    getHighchartsStatic() {
        return this._highchartsStatice;
    }
};
HighchartsService.ctorParameters = () => [
    { type: HighchartsStatic }
];
HighchartsService = __decorate([
    Injectable()
], HighchartsService);

var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
const ɵ0 = isObj;
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

let ChartComponent = class ChartComponent {
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
};
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HighchartsService }
];
__decorate([
    ContentChild(ChartSeriesComponent, { static: false })
], ChartComponent.prototype, "series", void 0);
__decorate([
    ContentChild(ChartXAxisComponent, { static: false })
], ChartComponent.prototype, "xAxis", void 0);
__decorate([
    ContentChild(ChartYAxisComponent, { static: false })
], ChartComponent.prototype, "yAxis", void 0);
__decorate([
    ContentChild(ChartZAxisComponent, { static: false })
], ChartComponent.prototype, "zAxis", void 0);
__decorate([
    ContentChild(ChartColorAxisComponent, { static: false })
], ChartComponent.prototype, "colorAxis", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "create", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "click", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "addSeries", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "afterPrint", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "beforePrint", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "drilldown", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "drillup", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "load", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "redraw", void 0);
__decorate([
    Output()
], ChartComponent.prototype, "selection", void 0);
__decorate([
    Input()
], ChartComponent.prototype, "type", void 0);
__decorate([
    Input()
], ChartComponent.prototype, "options", null);
ChartComponent = __decorate([
    Component({
        selector: 'chart',
        template: '&nbsp;',
        providers: [HighchartsService]
    })
], ChartComponent);

var ChartModule_1;
const CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
let ChartModule = ChartModule_1 = class ChartModule {
    static forRoot(highchartsStatic, ...highchartsModules) {
        // Plug highcharts modules
        highchartsModules.forEach((module) => {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
};
ChartModule = ChartModule_1 = __decorate([
    NgModule({
        declarations: CHART_DIRECTIVES,
        exports: CHART_DIRECTIVES
    })
], ChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ChartColorAxisComponent, ChartComponent, ChartModule, ChartPointComponent, ChartSeriesComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, HighchartsStatic as ɵa, HighchartsService as ɵb };
//# sourceMappingURL=revivejs-angular2-highcharts.js.map
