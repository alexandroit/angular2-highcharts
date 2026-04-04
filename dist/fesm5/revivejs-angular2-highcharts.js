import { Directive, Output, EventEmitter, ContentChild, Injectable, Input, ElementRef, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    ChartPointComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'point'
                },] },
    ];
    ChartPointComponent.propDecorators = {
        click: [{ type: Output }],
        remove: [{ type: Output }],
        select: [{ type: Output }],
        unselect: [{ type: Output }],
        mouseOver: [{ type: Output }],
        mouseOut: [{ type: Output }],
        update: [{ type: Output }]
    };
    return ChartPointComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    ChartSeriesComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'series'
                },] },
    ];
    ChartSeriesComponent.propDecorators = {
        point: [{ type: ContentChild, args: [ChartPointComponent,] }],
        click: [{ type: Output }],
        afterAnimate: [{ type: Output }],
        checkboxClick: [{ type: Output }],
        hide: [{ type: Output }],
        legendItemClick: [{ type: Output }],
        mouseOver: [{ type: Output }],
        mouseOut: [{ type: Output }],
        show: [{ type: Output }]
    };
    return ChartSeriesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartXAxisComponent = /** @class */ (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    ChartXAxisComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'xAxis'
                },] },
    ];
    ChartXAxisComponent.propDecorators = {
        afterBreaks: [{ type: Output }],
        afterSetExtremes: [{ type: Output }],
        pointBreak: [{ type: Output }],
        pointInBreak: [{ type: Output }],
        setExtremes: [{ type: Output }]
    };
    return ChartXAxisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartYAxisComponent = /** @class */ (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    ChartYAxisComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'yAxis'
                },] },
    ];
    ChartYAxisComponent.propDecorators = {
        afterBreaks: [{ type: Output }],
        afterSetExtremes: [{ type: Output }],
        pointBreak: [{ type: Output }],
        pointInBreak: [{ type: Output }],
        setExtremes: [{ type: Output }]
    };
    return ChartYAxisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartZAxisComponent = /** @class */ (function () {
    function ChartZAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    ChartZAxisComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'zAxis'
                },] },
    ];
    ChartZAxisComponent.propDecorators = {
        afterBreaks: [{ type: Output }],
        afterSetExtremes: [{ type: Output }],
        pointBreak: [{ type: Output }],
        pointInBreak: [{ type: Output }],
        setExtremes: [{ type: Output }]
    };
    return ChartZAxisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartColorAxisComponent = /** @class */ (function () {
    function ChartColorAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    ChartColorAxisComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'colorAxis'
                },] },
    ];
    ChartColorAxisComponent.propDecorators = {
        afterBreaks: [{ type: Output }],
        afterSetExtremes: [{ type: Output }],
        pointBreak: [{ type: Output }],
        pointInBreak: [{ type: Output }],
        setExtremes: [{ type: Output }]
    };
    return ChartColorAxisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighchartsStatic = /** @class */ (function () {
    function HighchartsStatic() {
    }
    HighchartsStatic.decorators = [
        { type: Injectable },
    ];
    return HighchartsStatic;
}());
var HighchartsService = /** @class */ (function () {
    function HighchartsService(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    /**
     * @return {?}
     */
    HighchartsService.prototype.getHighchartsStatic = /**
     * @return {?}
     */
    function () {
        return this._highchartsStatice;
    };
    HighchartsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HighchartsService.ctorParameters = function () { return [
        { type: HighchartsStatic }
    ]; };
    return HighchartsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ isObj = function (x) {
    var /** @type {?} */ type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @param {?} val
 * @return {?}
 */
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
/**
 * @param {?} to
 * @param {?} from
 * @param {?} key
 * @return {?}
 */
function assignKey(to, from, key) {
    var /** @type {?} */ val = from[key];
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
/**
 * @param {?} to
 * @param {?} from
 * @return {?}
 */
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var /** @type {?} */ key in from) {
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
/**
 * @param {?} target
 * @param {...?} args
 * @return {?}
 */
function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var /** @type {?} */ s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} highchartsService
 * @param {?} userOpts
 * @param {?} baseOpts
 * @param {?} type
 * @return {?}
 */
function initChart(highchartsService, userOpts, baseOpts, type) {
    var /** @type {?} */ Highcharts = highchartsService.getHighchartsStatic();
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
    var /** @type {?} */ opts = deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartEvent = /** @class */ (function () {
    function ChartEvent(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
    return ChartEvent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ chartEvents = [
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
var /** @type {?} */ seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var /** @type {?} */ pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
var /** @type {?} */ xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var /** @type {?} */ yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var /** @type {?} */ zAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var /** @type {?} */ colorAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
/**
 * @param {?} chartCmp
 * @param {?} seriesCmp
 * @param {?} pointCmp
 * @param {?} xAxisCmp
 * @param {?} yAxisCmp
 * @param {?} zAxisCmp
 * @param {?} colorAxisCmp
 * @param {?} element
 * @return {?}
 */
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, zAxisCmp, colorAxisCmp, element) {
    var /** @type {?} */ opts = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        set: /**
         * @param {?} opts
         * @return {?}
         */
        function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChartComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'chart',
                    template: '&nbsp;',
                    providers: [HighchartsService],
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HighchartsService }
    ]; };
    ChartComponent.propDecorators = {
        series: [{ type: ContentChild, args: [ChartSeriesComponent,] }],
        xAxis: [{ type: ContentChild, args: [ChartXAxisComponent,] }],
        yAxis: [{ type: ContentChild, args: [ChartYAxisComponent,] }],
        zAxis: [{ type: ContentChild, args: [ChartZAxisComponent,] }],
        colorAxis: [{ type: ContentChild, args: [ChartColorAxisComponent,] }],
        create: [{ type: Output }],
        click: [{ type: Output }],
        addSeries: [{ type: Output }],
        afterPrint: [{ type: Output }],
        beforePrint: [{ type: Output }],
        drilldown: [{ type: Output }],
        drillup: [{ type: Output }],
        load: [{ type: Output }],
        redraw: [{ type: Output }],
        selection: [{ type: Output }],
        type: [{ type: Input }],
        options: [{ type: Input }]
    };
    return ChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CHART_DIRECTIVES = [
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
    /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    ChartModule.forRoot = /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        // Plug highcharts modules
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    ChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                },] },
    ];
    return ChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ChartModule, ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, HighchartsService as ɵb, HighchartsStatic as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aXZlanMtYW5ndWxhcjItaGlnaGNoYXJ0cy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvQ2hhcnRQb2ludENvbXBvbmVudC50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvQ2hhcnRTZXJpZXNDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0WEF4aXNDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0WUF4aXNDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0WkF4aXNDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9IaWdoY2hhcnRzU2VydmljZS50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvZGVlcEFzc2lnbi50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvaW5pdENoYXJ0LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9DaGFydEV2ZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9jcmVhdGVCYXNlT3B0cy50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvQ2hhcnRDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL3B1YmxpY19hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAncG9pbnQnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0UG9pbnRDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3Nlcmllcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJpZXNDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRQb2ludENvbXBvbmVudCkgcG9pbnQ6IENoYXJ0UG9pbnRDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlckFuaW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGNoZWNrYm94Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxlZ2VuZEl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd4QXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRYQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3lBeGlzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFlBeGlzQ29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJCcmVha3MgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50QnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50SW5CcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnekF4aXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0WkF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2NvbG9yQXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNTdGF0aWMge1xuXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzU2VydmljZSB7XG4gICAgX2hpZ2hjaGFydHNTdGF0aWNlOiBIaWdoY2hhcnRzU3RhdGljXG5cbiAgICBjb25zdHJ1Y3RvcihoaWdoY2hhcnRzU3RhdGljOiBIaWdoY2hhcnRzU3RhdGljKSB7XG4gICAgICAgIHRoaXMuX2hpZ2hjaGFydHNTdGF0aWNlID0gaGlnaGNoYXJ0c1N0YXRpYztcbiAgICB9XG5cbiAgICBnZXRIaWdoY2hhcnRzU3RhdGljKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlnaGNoYXJ0c1N0YXRpY2U7XG4gICAgfVxufVxuIiwidmFyIGlzT2JqID0gZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB4O1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn07XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NvdXJjZXMgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25LZXkodG8sIGZyb20sIGtleSkge1xuICAgIHZhciB2YWwgPSBmcm9tW2tleV07XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh0bywga2V5KSkge1xuICAgICAgICBpZiAodG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHRvW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCAoJyArIGtleSArICcpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwodG8sIGtleSkgfHwgIWlzT2JqKHZhbCkpIHtcbiAgICAgICAgdG9ba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b1trZXldID0gYXNzaWduKE9iamVjdCh0b1trZXldKSwgZnJvbVtrZXldKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0bywgZnJvbSkge1xuICAgIGlmICh0byA9PT0gZnJvbSkge1xuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuXG4gICAgZnJvbSA9IE9iamVjdChmcm9tKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgICAgIGFzc2lnbktleSh0bywgZnJvbSwga2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAvLyAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gICAgLy9cbiAgICAvLyAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgaWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuICAgIC8vICAgICAgICAgICAgYXNzaWduS2V5KHRvLCBmcm9tLCBzeW1ib2xzW2ldKTtcbiAgICAvLyAgICAgICAgfVxuICAgIC8vICAgIH1cbiAgICAvL31cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBBc3NpZ24odGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgdGFyZ2V0ID0gdG9PYmplY3QodGFyZ2V0KTtcblxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYXJncy5sZW5ndGg7IHMrKykge1xuICAgICAgICBhc3NpZ24odGFyZ2V0LCBhcmdzW3NdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCB7IEhpZ2hjaGFydHNTZXJ2aWNlIH0gZnJvbSAnLi9IaWdoY2hhcnRzU2VydmljZSc7XG5pbXBvcnQgeyBkZWVwQXNzaWduIH0gZnJvbSAnLi9kZWVwQXNzaWduJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDaGFydChoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlLCB1c2VyT3B0cywgYmFzZU9wdHMsIHR5cGUgOiBzdHJpbmcpIHtcbiAgICBjb25zdCBIaWdoY2hhcnRzID0gaGlnaGNoYXJ0c1NlcnZpY2UuZ2V0SGlnaGNoYXJ0c1N0YXRpYygpO1xuXG4gICAgaWYgKCFIaWdoY2hhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQmFzZSBIaWdoY2hhcnRzIG1vZHVsZSBzaG91bGQgYmUgc2V0IHZpYSBDaGFydE1vZHVsZS5mb3JSb290Jyk7XG4gICAgfVxuICAgIGlmICghSGlnaGNoYXJ0c1t0eXBlXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZX0gaXMgdW5rbm93biBjaGFydCB0eXBlLmApO1xuICAgIH1cblxuICAgIC8vIEFkanVzdCBheGlzIHR5cGUgdG8gdXNlciBvbmUgKCM1NilcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyT3B0cy54QXhpcykgKSB7XG4gICAgICAgIGJhc2VPcHRzLnhBeGlzID0gW2Jhc2VPcHRzLnhBeGlzXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlck9wdHMueUF4aXMpICkge1xuICAgICAgICBiYXNlT3B0cy55QXhpcyA9IFtiYXNlT3B0cy55QXhpc107XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJPcHRzLnpBeGlzKSApIHtcbiAgICAgICAgYmFzZU9wdHMuekF4aXMgPSBbYmFzZU9wdHMuekF4aXNdO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyT3B0cy5jb2xvckF4aXMpICkge1xuICAgICAgICBiYXNlT3B0cy5jb2xvckF4aXMgPSBbYmFzZU9wdHMuY29sb3JBeGlzXTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0gZGVlcEFzc2lnbih7fSwgYmFzZU9wdHMsIHVzZXJPcHRzKTtcblxuICAgIHJldHVybiBuZXcgSGlnaGNoYXJ0c1t0eXBlXShvcHRzKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDaGFydEV2ZW50IHtcbiAgICBvcmlnaW5hbEV2ZW50IDogRXZlbnQ7XG4gICAgY29udGV4dCA6IGFueTtcbiAgICBjb25zdHJ1Y3RvciAoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbmNvbnN0IGNoYXJ0RXZlbnRzID0gW1xuICAgIC8vJ2NsaWNrJywgd29ya3MgYnkgZGVmYXVsdCBhcyBhIG5hdGl2ZSBET00gY2xpY2tcbiAgICAnYWRkU2VyaWVzJyxcbiAgICAnYWZ0ZXJQcmludCcsXG4gICAgJ2JlZm9yZVByaW50JyxcbiAgICAnZHJpbGxkb3duJyxcbiAgICAnZHJpbGx1cCcsXG4gICAgJ2xvYWQnLFxuICAgICdyZWRyYXcnLFxuICAgICdzZWxlY3Rpb24nXG5dO1xuXG5jb25zdCBzZXJpZXNFdmVudHMgPSBbXG4gICAgJ2NsaWNrJyxcbiAgICAnYWZ0ZXJBbmltYXRlJyxcbiAgICAnY2hlY2tib3hDbGljaycsXG4gICAgJ2hpZGUnLFxuICAgICdsZWdlbmRJdGVtQ2xpY2snLFxuICAgICdtb3VzZU91dCcsXG4gICAgJ21vdXNlT3ZlcicsXG4gICAgJ3Nob3cnXG5dO1xuXG5jb25zdCBwb2ludEV2ZW50cyA9IFtcbiAgICAnY2xpY2snLFxuICAgICdyZW1vdmUnLFxuICAgICdzZWxlY3QnLFxuICAgICd1bnNlbGVjdCcsXG4gICAgJ21vdXNlT3V0JyxcbiAgICAnbW91c2VPdmVyJyxcbiAgICAndXBkYXRlJ1xuXTtcblxuY29uc3QgeEF4aXNFdmVudHMgPSBbXG4gICAgJ2FmdGVyQnJlYWtzJyxcbiAgICAnYWZ0ZXJTZXRFeHRyZW1lcycsXG4gICAgJ3BvaW50QnJlYWsnLFxuICAgICdwb2ludEluQnJlYWsnLFxuICAgICdzZXRFeHRyZW1lcydcbl07XG5cbmNvbnN0IHlBeGlzRXZlbnRzID0gW1xuICAgICdhZnRlckJyZWFrcycsXG4gICAgJ2FmdGVyU2V0RXh0cmVtZXMnLFxuICAgICdwb2ludEJyZWFrJyxcbiAgICAncG9pbnRJbkJyZWFrJyxcbiAgICAnc2V0RXh0cmVtZXMnXG5dO1xuXG5jb25zdCB6QXhpc0V2ZW50cyA9IFtcbiAgICAnYWZ0ZXJCcmVha3MnLFxuICAgICdhZnRlclNldEV4dHJlbWVzJyxcbiAgICAncG9pbnRCcmVhaycsXG4gICAgJ3BvaW50SW5CcmVhaycsXG4gICAgJ3NldEV4dHJlbWVzJ1xuXTtcblxuY29uc3QgY29sb3JBeGlzRXZlbnRzID0gW1xuICAgICdhZnRlckJyZWFrcycsXG4gICAgJ2FmdGVyU2V0RXh0cmVtZXMnLFxuICAgICdwb2ludEJyZWFrJyxcbiAgICAncG9pbnRJbkJyZWFrJyxcbiAgICAnc2V0RXh0cmVtZXMnXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFzZU9wdHMoY2hhcnRDbXAsIHNlcmllc0NtcCwgcG9pbnRDbXAsIHhBeGlzQ21wLCB5QXhpc0NtcCwgekF4aXNDbXAsIGNvbG9yQXhpc0NtcCwgZWxlbWVudCkge1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgICBjaGFydCA6IHtcbiAgICAgICAgICAgIHJlbmRlclRvIDogZWxlbWVudCxcbiAgICAgICAgICAgIGV2ZW50cyA6e31cbiAgICAgICAgfSxcbiAgICAgICAgcGxvdE9wdGlvbnMgOiB7XG4gICAgICAgICAgICBzZXJpZXMgOiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzIDogeyB9LFxuICAgICAgICAgICAgICAgIHBvaW50IDoge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMgOiB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzIDoge1xuICAgICAgICAgICAgZXZlbnRzIDogeyB9XG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzIDoge1xuICAgICAgICAgICAgZXZlbnRzIDogeyB9XG4gICAgICAgIH0sXG4gICAgICAgIHpBeGlzIDoge1xuICAgICAgICAgICAgZXZlbnRzIDogeyB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yQXhpcyA6IHtcbiAgICAgICAgICAgIGV2ZW50cyA6IHsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgb3B0cy5jaGFydC5ldmVudHNbZXZlbnROYW1lXSA9IG9wdHMuY2hhcnQuZXZlbnRzW2V2ZW50TmFtZV0gfHwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgIGNoYXJ0Q21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNlcmllc0NtcCkge1xuICAgICAgICBzZXJpZXNFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBvcHRzLnBsb3RPcHRpb25zLnNlcmllcy5ldmVudHNbZXZlbnROYW1lXSA9IG9wdHMucGxvdE9wdGlvbnMuc2VyaWVzLmV2ZW50c1tldmVudE5hbWVdIHx8IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzQ21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBvaW50Q21wKSB7XG4gICAgICAgIHBvaW50RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgb3B0cy5wbG90T3B0aW9ucy5zZXJpZXMucG9pbnQuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLnBsb3RPcHRpb25zLnNlcmllcy5wb2ludC5ldmVudHNbZXZlbnROYW1lXSB8fCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIHBvaW50Q21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHhBeGlzQ21wKSB7XG4gICAgICAgIHhBeGlzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgb3B0cy54QXhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG9wdHMueEF4aXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICB4QXhpc0NtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh5QXhpc0NtcCkge1xuICAgICAgICB5QXhpc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIG9wdHMueUF4aXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLnlBeGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgeUF4aXNDbXBbZXZlbnROYW1lXS5lbWl0KG5ldyBDaGFydEV2ZW50KGV2ZW50LCB0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoekF4aXNDbXApIHtcbiAgICAgICAgekF4aXNFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBvcHRzLnpBeGlzLmV2ZW50c1tldmVudE5hbWVdID0gb3B0cy56QXhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIHpBeGlzQ21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbG9yQXhpc0NtcCkge1xuICAgICAgICBjb2xvckF4aXNFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBvcHRzLmNvbG9yQXhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG9wdHMuY29sb3JBeGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgY29sb3JBeGlzQ21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0cztcbn1cbiIsImltcG9ydCB7IElucHV0LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5pbXBvcnQgeyBpbml0Q2hhcnQgfSBmcm9tICcuL2luaXRDaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVCYXNlT3B0cyB9IGZyb20gJy4vY3JlYXRlQmFzZU9wdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgcHJvdmlkZXJzOiBbSGlnaGNoYXJ0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFNlcmllc0NvbXBvbmVudCkgc2VyaWVzOiBDaGFydFNlcmllc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WEF4aXNDb21wb25lbnQpIHhBeGlzOiBDaGFydFhBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRZQXhpc0NvbXBvbmVudCkgeUF4aXM6IENoYXJ0WUF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFpBeGlzQ29tcG9uZW50KSB6QXhpczogQ2hhcnRaQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50KSBjb2xvckF4aXM6IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFkZFNlcmllcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGx1cCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgY2hhcnQ6IGFueTtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyT3B0czogYW55O1xuICAgIHByaXZhdGUgYmFzZU9wdHM6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnQ2hhcnQnO1xuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdHMgOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJPcHRzICYmIHRoaXMuYmFzZU9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBpbml0Q2hhcnQodGhpcy5oaWdoY2hhcnRzU2VydmljZSwgdGhpcy51c2VyT3B0cywgdGhpcy5iYXNlT3B0cywgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9wdHMgPSBjcmVhdGVCYXNlT3B0cyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzID8gdGhpcy5zZXJpZXMucG9pbnQgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICB0aGlzLnpBeGlzLFxuICAgICAgICAgICAgdGhpcy5jb2xvckF4aXMsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UgPSBoaWdoY2hhcnRzU2VydmljZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0UG9pbnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRYQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFlBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WkF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WkF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hjaGFydHNTdGF0aWMgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJ1xuXG5jb25zdCBDSEFSVF9ESVJFQ1RJVkVTOiBhbnlbXSA9IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogQ0hBUlRfRElSRUNUSVZFUyxcbiAgICBleHBvcnRzOiBDSEFSVF9ESVJFQ1RJVkVTXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChoaWdoY2hhcnRzU3RhdGljOiBIaWdoY2hhcnRzU3RhdGljLCAuLi5oaWdoY2hhcnRzTW9kdWxlczogQXJyYXk8RnVuY3Rpb24+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIC8vIFBsdWcgaGlnaGNoYXJ0cyBtb2R1bGVzXG4gICAgICAgIGhpZ2hjaGFydHNNb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgbW9kdWxlKGhpZ2hjaGFydHNTdGF0aWMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ2hhcnRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEhpZ2hjaGFydHNTdGF0aWMsIHVzZVZhbHVlOiBoaWdoY2hhcnRzU3RhdGljIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRTZXJpZXNDb21wb25lbnQsXG4gICAgQ2hhcnRQb2ludENvbXBvbmVudCxcbiAgICBDaGFydFhBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WUF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRaQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydENvbG9yQXhpc0NvbXBvbmVudCxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O3FCQU9zQixJQUFJLFlBQVksRUFBYztzQkFDN0IsSUFBSSxZQUFZLEVBQWM7c0JBQzlCLElBQUksWUFBWSxFQUFjO3dCQUM1QixJQUFJLFlBQVksRUFBYzt5QkFDN0IsSUFBSSxZQUFZLEVBQWM7d0JBQy9CLElBQUksWUFBWSxFQUFjO3NCQUNoQyxJQUFJLFlBQVksRUFBYzs7O2dCQVZwRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87aUJBQ3BCOzs7d0JBRUksTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTs7OEJBYlg7Ozs7Ozs7QUNBQTs7cUJBU3NCLElBQUksWUFBWSxFQUFjOzRCQUN2QixJQUFJLFlBQVksRUFBYzs2QkFDN0IsSUFBSSxZQUFZLEVBQWM7b0JBQ3ZDLElBQUksWUFBWSxFQUFjOytCQUNuQixJQUFJLFlBQVksRUFBYzt5QkFDcEMsSUFBSSxZQUFZLEVBQWM7d0JBQy9CLElBQUksWUFBWSxFQUFjO29CQUNsQyxJQUFJLFlBQVksRUFBYzs7O2dC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