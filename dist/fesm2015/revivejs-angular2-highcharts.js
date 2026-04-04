import { Directive, Output, EventEmitter, ContentChild, Injectable, Input, ElementRef, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
ChartPointComponent.decorators = [
    { type: Directive, args: [{
                selector: 'point'
            },] }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
ChartSeriesComponent.decorators = [
    { type: Directive, args: [{
                selector: 'series'
            },] }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartXAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartXAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'xAxis'
            },] }
];
ChartXAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartYAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartYAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'yAxis'
            },] }
];
ChartYAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartZAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartZAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'zAxis'
            },] }
];
ChartZAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartColorAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartColorAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'colorAxis'
            },] }
];
ChartColorAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighchartsStatic {
}
HighchartsStatic.decorators = [
    { type: Injectable }
];
class HighchartsService {
    /**
     * @param {?} highchartsStatic
     */
    constructor(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    /**
     * @return {?}
     */
    getHighchartsStatic() {
        return this._highchartsStatice;
    }
}
HighchartsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HighchartsService.ctorParameters = () => [
    { type: HighchartsStatic }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isObj = function (x) {
    /** @type {?} */
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
/** @type {?} */
var hasOwnProperty = Object.prototype.hasOwnProperty;
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
    /** @type {?} */
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
/**
 * @param {?} target
 * @param {...?} args
 * @return {?}
 */
function deepAssign(target, ...args) {
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} highchartsService
 * @param {?} userOpts
 * @param {?} baseOpts
 * @param {?} type
 * @return {?}
 */
function initChart(highchartsService, userOpts, baseOpts, type) {
    /** @type {?} */
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
    /** @type {?} */
    const opts = deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartEvent {
    /**
     * @param {?} event
     * @param {?} context
     */
    constructor(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
/** @type {?} */
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
/** @type {?} */
const pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
/** @type {?} */
const xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
/** @type {?} */
const yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
/** @type {?} */
const zAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
/** @type {?} */
const colorAxisEvents = [
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
    /** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    /**
     * @param {?} element
     * @param {?} highchartsService
     */
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
    /**
     * @param {?} opts
     * @return {?}
     */
    set options(opts) {
        this.userOpts = opts;
        this.init();
    }
    ;
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'chart',
                template: '&nbsp;',
                providers: [HighchartsService]
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HighchartsService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
    /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    static forRoot(highchartsStatic, ...highchartsModules) {
        // Plug highcharts modules
        highchartsModules.forEach((module) => {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: CHART_DIRECTIVES,
                exports: CHART_DIRECTIVES
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChartModule, ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, HighchartsService as ɵb, HighchartsStatic as ɵa };

//# sourceMappingURL=revivejs-angular2-highcharts.js.map