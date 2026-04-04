import { __decorate } from 'tslib';
import { EventEmitter, Output, Directive, ContentChild, Injectable, ElementRef, Input, Component, NgModule } from '@angular/core';

var ChartPointComponent = /** @class */ (function () {
    function ChartPointComponent() {
        this.click = new EventEmitter();
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.update = new EventEmitter();
    }
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
    return ChartPointComponent;
}());

var ChartSeriesComponent = /** @class */ (function () {
    function ChartSeriesComponent() {
        this.click = new EventEmitter();
        this.afterAnimate = new EventEmitter();
        this.checkboxClick = new EventEmitter();
        this.hide = new EventEmitter();
        this.legendItemClick = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.show = new EventEmitter();
    }
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
    return ChartSeriesComponent;
}());

var ChartXAxisComponent = /** @class */ (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
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
    return ChartXAxisComponent;
}());

var ChartYAxisComponent = /** @class */ (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
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
    return ChartYAxisComponent;
}());

var ChartZAxisComponent = /** @class */ (function () {
    function ChartZAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
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
    return ChartZAxisComponent;
}());

var ChartColorAxisComponent = /** @class */ (function () {
    function ChartColorAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
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
    return ChartColorAxisComponent;
}());

var HighchartsStatic = /** @class */ (function () {
    function HighchartsStatic() {
    }
    HighchartsStatic = __decorate([
        Injectable()
    ], HighchartsStatic);
    return HighchartsStatic;
}());
var HighchartsService = /** @class */ (function () {
    function HighchartsService(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    HighchartsService.prototype.getHighchartsStatic = function () {
        return this._highchartsStatice;
    };
    HighchartsService.ctorParameters = function () { return [
        { type: HighchartsStatic }
    ]; };
    HighchartsService = __decorate([
        Injectable()
    ], HighchartsService);
    return HighchartsService;
}());

var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var ɵ0 = isObj;
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
function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}

function initChart(highchartsService, userOpts, baseOpts, type) {
    var Highcharts = highchartsService.getHighchartsStatic();
    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.forRoot');
    }
    if (!Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
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
    var opts = deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}

var ChartEvent = /** @class */ (function () {
    function ChartEvent(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
    return ChartEvent;
}());

var chartEvents = [
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
var seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
var xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var zAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var colorAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, zAxisCmp, colorAxisCmp, element) {
    var opts = {
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

var ChartComponent = /** @class */ (function () {
    function ChartComponent(element, highchartsService) {
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
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HighchartsService }
    ]; };
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
    return ChartComponent;
}());

var CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule_1 = ChartModule;
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        // Plug highcharts modules
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsStatic, useFactory: function () { return highchartsStatic; } }
            ]
        };
    };
    var ChartModule_1;
    ChartModule = ChartModule_1 = __decorate([
        NgModule({
            declarations: CHART_DIRECTIVES,
            exports: CHART_DIRECTIVES
        })
    ], ChartModule);
    return ChartModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ChartColorAxisComponent, ChartComponent, ChartModule, ChartPointComponent, ChartSeriesComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, HighchartsStatic as ɵa, HighchartsService as ɵb };
//# sourceMappingURL=revivejs-angular2-highcharts.js.map
