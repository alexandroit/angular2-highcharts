(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@revivejs/angular2-highcharts', ['exports', '@angular/core'], factory) :
    (factory((global.revivejs = global.revivejs || {}, global.revivejs['angular2-highcharts'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartPointComponent = /** @class */ (function () {
        function ChartPointComponent() {
            this.click = new core.EventEmitter();
            this.remove = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.unselect = new core.EventEmitter();
            this.mouseOver = new core.EventEmitter();
            this.mouseOut = new core.EventEmitter();
            this.update = new core.EventEmitter();
        }
        ChartPointComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'point'
                    },] }
        ];
        ChartPointComponent.propDecorators = {
            click: [{ type: core.Output }],
            remove: [{ type: core.Output }],
            select: [{ type: core.Output }],
            unselect: [{ type: core.Output }],
            mouseOver: [{ type: core.Output }],
            mouseOut: [{ type: core.Output }],
            update: [{ type: core.Output }]
        };
        return ChartPointComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartSeriesComponent = /** @class */ (function () {
        function ChartSeriesComponent() {
            this.click = new core.EventEmitter();
            this.afterAnimate = new core.EventEmitter();
            this.checkboxClick = new core.EventEmitter();
            this.hide = new core.EventEmitter();
            this.legendItemClick = new core.EventEmitter();
            this.mouseOver = new core.EventEmitter();
            this.mouseOut = new core.EventEmitter();
            this.show = new core.EventEmitter();
        }
        ChartSeriesComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'series'
                    },] }
        ];
        ChartSeriesComponent.propDecorators = {
            point: [{ type: core.ContentChild, args: [ChartPointComponent,] }],
            click: [{ type: core.Output }],
            afterAnimate: [{ type: core.Output }],
            checkboxClick: [{ type: core.Output }],
            hide: [{ type: core.Output }],
            legendItemClick: [{ type: core.Output }],
            mouseOver: [{ type: core.Output }],
            mouseOut: [{ type: core.Output }],
            show: [{ type: core.Output }]
        };
        return ChartSeriesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartXAxisComponent = /** @class */ (function () {
        function ChartXAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        ChartXAxisComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'xAxis'
                    },] }
        ];
        ChartXAxisComponent.propDecorators = {
            afterBreaks: [{ type: core.Output }],
            afterSetExtremes: [{ type: core.Output }],
            pointBreak: [{ type: core.Output }],
            pointInBreak: [{ type: core.Output }],
            setExtremes: [{ type: core.Output }]
        };
        return ChartXAxisComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartYAxisComponent = /** @class */ (function () {
        function ChartYAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        ChartYAxisComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'yAxis'
                    },] }
        ];
        ChartYAxisComponent.propDecorators = {
            afterBreaks: [{ type: core.Output }],
            afterSetExtremes: [{ type: core.Output }],
            pointBreak: [{ type: core.Output }],
            pointInBreak: [{ type: core.Output }],
            setExtremes: [{ type: core.Output }]
        };
        return ChartYAxisComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartZAxisComponent = /** @class */ (function () {
        function ChartZAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        ChartZAxisComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'zAxis'
                    },] }
        ];
        ChartZAxisComponent.propDecorators = {
            afterBreaks: [{ type: core.Output }],
            afterSetExtremes: [{ type: core.Output }],
            pointBreak: [{ type: core.Output }],
            pointInBreak: [{ type: core.Output }],
            setExtremes: [{ type: core.Output }]
        };
        return ChartZAxisComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartColorAxisComponent = /** @class */ (function () {
        function ChartColorAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        ChartColorAxisComponent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'colorAxis'
                    },] }
        ];
        ChartColorAxisComponent.propDecorators = {
            afterBreaks: [{ type: core.Output }],
            afterSetExtremes: [{ type: core.Output }],
            pointBreak: [{ type: core.Output }],
            pointInBreak: [{ type: core.Output }],
            setExtremes: [{ type: core.Output }]
        };
        return ChartColorAxisComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighchartsStatic = /** @class */ (function () {
        function HighchartsStatic() {
        }
        HighchartsStatic.decorators = [
            { type: core.Injectable }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HighchartsService.ctorParameters = function () {
            return [
                { type: HighchartsStatic }
            ];
        };
        return HighchartsService;
    }());

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
        /** @type {?} */
        var opts = deepAssign({}, baseOpts, userOpts);
        return new Highcharts[type](opts);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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
    /** @type {?} */
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
    /** @type {?} */
    var pointEvents = [
        'click',
        'remove',
        'select',
        'unselect',
        'mouseOut',
        'mouseOver',
        'update'
    ];
    /** @type {?} */
    var xAxisEvents = [
        'afterBreaks',
        'afterSetExtremes',
        'pointBreak',
        'pointInBreak',
        'setExtremes'
    ];
    /** @type {?} */
    var yAxisEvents = [
        'afterBreaks',
        'afterSetExtremes',
        'pointBreak',
        'pointInBreak',
        'setExtremes'
    ];
    /** @type {?} */
    var zAxisEvents = [
        'afterBreaks',
        'afterSetExtremes',
        'pointBreak',
        'pointInBreak',
        'setExtremes'
    ];
    /** @type {?} */
    var colorAxisEvents = [
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartComponent = /** @class */ (function () {
        function ChartComponent(element, highchartsService) {
            this.create = new core.EventEmitter();
            this.click = new core.EventEmitter();
            this.addSeries = new core.EventEmitter();
            this.afterPrint = new core.EventEmitter();
            this.beforePrint = new core.EventEmitter();
            this.drilldown = new core.EventEmitter();
            this.drillup = new core.EventEmitter();
            this.load = new core.EventEmitter();
            this.redraw = new core.EventEmitter();
            this.selection = new core.EventEmitter();
            this.type = 'Chart';
            this.element = element;
            this.highchartsService = highchartsService;
        }
        Object.defineProperty(ChartComponent.prototype, "options", {
            set: /**
             * @param {?} opts
             * @return {?}
             */ function (opts) {
                this.userOpts = opts;
                this.init();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ChartComponent.prototype.init = /**
         * @private
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
            { type: core.Component, args: [{
                        selector: 'chart',
                        template: '&nbsp;',
                        providers: [HighchartsService]
                    }] }
        ];
        /** @nocollapse */
        ChartComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: HighchartsService }
            ];
        };
        ChartComponent.propDecorators = {
            series: [{ type: core.ContentChild, args: [ChartSeriesComponent,] }],
            xAxis: [{ type: core.ContentChild, args: [ChartXAxisComponent,] }],
            yAxis: [{ type: core.ContentChild, args: [ChartYAxisComponent,] }],
            zAxis: [{ type: core.ContentChild, args: [ChartZAxisComponent,] }],
            colorAxis: [{ type: core.ContentChild, args: [ChartColorAxisComponent,] }],
            create: [{ type: core.Output }],
            click: [{ type: core.Output }],
            addSeries: [{ type: core.Output }],
            afterPrint: [{ type: core.Output }],
            beforePrint: [{ type: core.Output }],
            drilldown: [{ type: core.Output }],
            drillup: [{ type: core.Output }],
            load: [{ type: core.Output }],
            redraw: [{ type: core.Output }],
            selection: [{ type: core.Output }],
            type: [{ type: core.Input }],
            options: [{ type: core.Input }]
        };
        return ChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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
            { type: core.NgModule, args: [{
                        declarations: CHART_DIRECTIVES,
                        exports: CHART_DIRECTIVES
                    },] }
        ];
        return ChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ChartModule = ChartModule;
    exports.ChartComponent = ChartComponent;
    exports.ChartSeriesComponent = ChartSeriesComponent;
    exports.ChartPointComponent = ChartPointComponent;
    exports.ChartXAxisComponent = ChartXAxisComponent;
    exports.ChartYAxisComponent = ChartYAxisComponent;
    exports.ChartZAxisComponent = ChartZAxisComponent;
    exports.ChartColorAxisComponent = ChartColorAxisComponent;
    exports.ɵb = HighchartsService;
    exports.ɵa = HighchartsStatic;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=revivejs-angular2-highcharts.umd.js.map