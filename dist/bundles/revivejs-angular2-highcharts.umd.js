(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@revivejs/angular2-highcharts', ['exports', '@angular/core'], factory) :
    (factory((global.revivejs = global.revivejs || {}, global.revivejs['angular2-highcharts'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChartPointComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChartSeriesComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChartXAxisComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChartYAxisComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChartZAxisComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChartColorAxisComponent = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var HighchartsStatic = (function () {
        function HighchartsStatic() {
        }
        HighchartsStatic.decorators = [
            { type: core.Injectable },
        ];
        return HighchartsStatic;
    }());
    var HighchartsService = (function () {
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
            { type: core.Injectable },
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
    var ChartEvent = (function () {
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
    var ChartComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'chart',
                        template: '&nbsp;',
                        providers: [HighchartsService],
                    },] },
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
    var ChartModule = (function () {
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
                    },] },
        ];
        return ChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aXZlanMtYW5ndWxhcjItaGlnaGNoYXJ0cy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0UG9pbnRDb21wb25lbnQudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0U2VyaWVzQ29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9DaGFydFhBeGlzQ29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9DaGFydFlBeGlzQ29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9DaGFydFpBeGlzQ29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9DaGFydENvbG9yQXhpc0NvbXBvbmVudC50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvSGlnaGNoYXJ0c1NlcnZpY2UudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL2RlZXBBc3NpZ24udHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL2luaXRDaGFydC50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvQ2hhcnRFdmVudC50cyIsIm5nOi8vQHJldml2ZWpzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvY3JlYXRlQmFzZU9wdHMudHMiLCJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL0NoYXJ0Q29tcG9uZW50LnRzIiwibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy9wdWJsaWNfYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3BvaW50J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFBvaW50Q29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSB1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRQb2ludENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRQb2ludENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdzZXJpZXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0U2VyaWVzQ29tcG9uZW50IHtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0UG9pbnRDb21wb25lbnQpIHBvaW50OiBDaGFydFBvaW50Q29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJBbmltYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBjaGVja2JveENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAneEF4aXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0WEF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd5QXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRZQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3pBeGlzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFpBeGlzQ29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJCcmVha3MgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50QnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50SW5CcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdjb2xvckF4aXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJCcmVha3MgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50QnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50SW5CcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzU3RhdGljIHtcblxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c1NlcnZpY2Uge1xuICAgIF9oaWdoY2hhcnRzU3RhdGljZTogSGlnaGNoYXJ0c1N0YXRpY1xuXG4gICAgY29uc3RydWN0b3IoaGlnaGNoYXJ0c1N0YXRpYzogSGlnaGNoYXJ0c1N0YXRpYykge1xuICAgICAgICB0aGlzLl9oaWdoY2hhcnRzU3RhdGljZSA9IGhpZ2hjaGFydHNTdGF0aWM7XG4gICAgfVxuXG4gICAgZ2V0SGlnaGNoYXJ0c1N0YXRpYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZ2hjaGFydHNTdGF0aWNlO1xuICAgIH1cbn1cbiIsInZhciBpc09iaiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgeDtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTb3VyY2VzIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduS2V5KHRvLCBmcm9tLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gZnJvbVtrZXldO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodG8sIGtleSkpIHtcbiAgICAgICAgaWYgKHRvW2tleV0gPT09IHVuZGVmaW5lZCB8fCB0b1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QgKCcgKyBrZXkgKyAnKScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpIHx8ICFpc09iaih2YWwpKSB7XG4gICAgICAgIHRvW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9ba2V5XSA9IGFzc2lnbihPYmplY3QodG9ba2V5XSksIGZyb21ba2V5XSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ24odG8sIGZyb20pIHtcbiAgICBpZiAodG8gPT09IGZyb20pIHtcbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIGZyb20gPSBPYmplY3QoZnJvbSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICBhc3NpZ25LZXkodG8sIGZyb20sIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2lmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgLy8gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuICAgIC8vXG4gICAgLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgIGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcbiAgICAvLyAgICAgICAgICAgIGFzc2lnbktleSh0bywgZnJvbSwgc3ltYm9sc1tpXSk7XG4gICAgLy8gICAgICAgIH1cbiAgICAvLyAgICB9XG4gICAgLy99XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQXNzaWduKHRhcmdldCwgLi4uYXJncykge1xuICAgIHRhcmdldCA9IHRvT2JqZWN0KHRhcmdldCk7XG5cbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IGFyZ3MubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgYXNzaWduKHRhcmdldCwgYXJnc1tzXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgZGVlcEFzc2lnbiB9IGZyb20gJy4vZGVlcEFzc2lnbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2hhcnQoaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZSwgdXNlck9wdHMsIGJhc2VPcHRzLCB0eXBlIDogc3RyaW5nKSB7XG4gICAgY29uc3QgSGlnaGNoYXJ0cyA9IGhpZ2hjaGFydHNTZXJ2aWNlLmdldEhpZ2hjaGFydHNTdGF0aWMoKTtcblxuICAgIGlmICghSGlnaGNoYXJ0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jhc2UgSGlnaGNoYXJ0cyBtb2R1bGUgc2hvdWxkIGJlIHNldCB2aWEgQ2hhcnRNb2R1bGUuZm9yUm9vdCcpO1xuICAgIH1cbiAgICBpZiAoIUhpZ2hjaGFydHNbdHlwZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGV9IGlzIHVua25vd24gY2hhcnQgdHlwZS5gKTtcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgYXhpcyB0eXBlIHRvIHVzZXIgb25lICgjNTYpXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlck9wdHMueEF4aXMpICkge1xuICAgICAgICBiYXNlT3B0cy54QXhpcyA9IFtiYXNlT3B0cy54QXhpc107XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJPcHRzLnlBeGlzKSApIHtcbiAgICAgICAgYmFzZU9wdHMueUF4aXMgPSBbYmFzZU9wdHMueUF4aXNdO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyT3B0cy56QXhpcykgKSB7XG4gICAgICAgIGJhc2VPcHRzLnpBeGlzID0gW2Jhc2VPcHRzLnpBeGlzXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlck9wdHMuY29sb3JBeGlzKSApIHtcbiAgICAgICAgYmFzZU9wdHMuY29sb3JBeGlzID0gW2Jhc2VPcHRzLmNvbG9yQXhpc107XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IGRlZXBBc3NpZ24oe30sIGJhc2VPcHRzLCB1c2VyT3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IEhpZ2hjaGFydHNbdHlwZV0ob3B0cyk7XG59XG4iLCJleHBvcnQgY2xhc3MgQ2hhcnRFdmVudCB7XG4gICAgb3JpZ2luYWxFdmVudCA6IEV2ZW50O1xuICAgIGNvbnRleHQgOiBhbnk7XG4gICAgY29uc3RydWN0b3IgKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5jb25zdCBjaGFydEV2ZW50cyA9IFtcbiAgICAvLydjbGljaycsIHdvcmtzIGJ5IGRlZmF1bHQgYXMgYSBuYXRpdmUgRE9NIGNsaWNrXG4gICAgJ2FkZFNlcmllcycsXG4gICAgJ2FmdGVyUHJpbnQnLFxuICAgICdiZWZvcmVQcmludCcsXG4gICAgJ2RyaWxsZG93bicsXG4gICAgJ2RyaWxsdXAnLFxuICAgICdsb2FkJyxcbiAgICAncmVkcmF3JyxcbiAgICAnc2VsZWN0aW9uJ1xuXTtcblxuY29uc3Qgc2VyaWVzRXZlbnRzID0gW1xuICAgICdjbGljaycsXG4gICAgJ2FmdGVyQW5pbWF0ZScsXG4gICAgJ2NoZWNrYm94Q2xpY2snLFxuICAgICdoaWRlJyxcbiAgICAnbGVnZW5kSXRlbUNsaWNrJyxcbiAgICAnbW91c2VPdXQnLFxuICAgICdtb3VzZU92ZXInLFxuICAgICdzaG93J1xuXTtcblxuY29uc3QgcG9pbnRFdmVudHMgPSBbXG4gICAgJ2NsaWNrJyxcbiAgICAncmVtb3ZlJyxcbiAgICAnc2VsZWN0JyxcbiAgICAndW5zZWxlY3QnLFxuICAgICdtb3VzZU91dCcsXG4gICAgJ21vdXNlT3ZlcicsXG4gICAgJ3VwZGF0ZSdcbl07XG5cbmNvbnN0IHhBeGlzRXZlbnRzID0gW1xuICAgICdhZnRlckJyZWFrcycsXG4gICAgJ2FmdGVyU2V0RXh0cmVtZXMnLFxuICAgICdwb2ludEJyZWFrJyxcbiAgICAncG9pbnRJbkJyZWFrJyxcbiAgICAnc2V0RXh0cmVtZXMnXG5dO1xuXG5jb25zdCB5QXhpc0V2ZW50cyA9IFtcbiAgICAnYWZ0ZXJCcmVha3MnLFxuICAgICdhZnRlclNldEV4dHJlbWVzJyxcbiAgICAncG9pbnRCcmVhaycsXG4gICAgJ3BvaW50SW5CcmVhaycsXG4gICAgJ3NldEV4dHJlbWVzJ1xuXTtcblxuY29uc3QgekF4aXNFdmVudHMgPSBbXG4gICAgJ2FmdGVyQnJlYWtzJyxcbiAgICAnYWZ0ZXJTZXRFeHRyZW1lcycsXG4gICAgJ3BvaW50QnJlYWsnLFxuICAgICdwb2ludEluQnJlYWsnLFxuICAgICdzZXRFeHRyZW1lcydcbl07XG5cbmNvbnN0IGNvbG9yQXhpc0V2ZW50cyA9IFtcbiAgICAnYWZ0ZXJCcmVha3MnLFxuICAgICdhZnRlclNldEV4dHJlbWVzJyxcbiAgICAncG9pbnRCcmVhaycsXG4gICAgJ3BvaW50SW5CcmVhaycsXG4gICAgJ3NldEV4dHJlbWVzJ1xuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhc2VPcHRzKGNoYXJ0Q21wLCBzZXJpZXNDbXAsIHBvaW50Q21wLCB4QXhpc0NtcCwgeUF4aXNDbXAsIHpBeGlzQ21wLCBjb2xvckF4aXNDbXAsIGVsZW1lbnQpIHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgY2hhcnQgOiB7XG4gICAgICAgICAgICByZW5kZXJUbyA6IGVsZW1lbnQsXG4gICAgICAgICAgICBldmVudHMgOnt9XG4gICAgICAgIH0sXG4gICAgICAgIHBsb3RPcHRpb25zIDoge1xuICAgICAgICAgICAgc2VyaWVzIDoge1xuICAgICAgICAgICAgICAgIGV2ZW50cyA6IHsgfSxcbiAgICAgICAgICAgICAgICBwb2ludCA6IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzIDogeyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB4QXhpcyA6IHtcbiAgICAgICAgICAgIGV2ZW50cyA6IHsgfVxuICAgICAgICB9LFxuICAgICAgICB5QXhpcyA6IHtcbiAgICAgICAgICAgIGV2ZW50cyA6IHsgfVxuICAgICAgICB9LFxuICAgICAgICB6QXhpcyA6IHtcbiAgICAgICAgICAgIGV2ZW50cyA6IHsgfVxuICAgICAgICB9LFxuICAgICAgICBjb2xvckF4aXMgOiB7XG4gICAgICAgICAgICBldmVudHMgOiB7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIG9wdHMuY2hhcnQuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLmNoYXJ0LmV2ZW50c1tldmVudE5hbWVdIHx8IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICBjaGFydENtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzZXJpZXNDbXApIHtcbiAgICAgICAgc2VyaWVzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgb3B0cy5wbG90T3B0aW9ucy5zZXJpZXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLnBsb3RPcHRpb25zLnNlcmllcy5ldmVudHNbZXZlbnROYW1lXSB8fCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIHNlcmllc0NtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb2ludENtcCkge1xuICAgICAgICBwb2ludEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIG9wdHMucGxvdE9wdGlvbnMuc2VyaWVzLnBvaW50LmV2ZW50c1tldmVudE5hbWVdID0gb3B0cy5wbG90T3B0aW9ucy5zZXJpZXMucG9pbnQuZXZlbnRzW2V2ZW50TmFtZV0gfHwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBwb2ludENtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh4QXhpc0NtcCkge1xuICAgICAgICB4QXhpc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIG9wdHMueEF4aXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLnhBeGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgeEF4aXNDbXBbZXZlbnROYW1lXS5lbWl0KG5ldyBDaGFydEV2ZW50KGV2ZW50LCB0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoeUF4aXNDbXApIHtcbiAgICAgICAgeUF4aXNFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBvcHRzLnlBeGlzLmV2ZW50c1tldmVudE5hbWVdID0gb3B0cy55QXhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIHlBeGlzQ21wW2V2ZW50TmFtZV0uZW1pdChuZXcgQ2hhcnRFdmVudChldmVudCwgdGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHpBeGlzQ21wKSB7XG4gICAgICAgIHpBeGlzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgb3B0cy56QXhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG9wdHMuekF4aXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICB6QXhpc0NtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb2xvckF4aXNDbXApIHtcbiAgICAgICAgY29sb3JBeGlzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgb3B0cy5jb2xvckF4aXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBvcHRzLmNvbG9yQXhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbG9yQXhpc0NtcFtldmVudE5hbWVdLmVtaXQobmV3IENoYXJ0RXZlbnQoZXZlbnQsIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdHM7XG59XG4iLCJpbXBvcnQgeyBJbnB1dCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1NlcnZpY2UgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuaW1wb3J0IHsgaW5pdENoYXJ0IH0gZnJvbSAnLi9pbml0Q2hhcnQnO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9wdHMgfSBmcm9tICcuL2NyZWF0ZUJhc2VPcHRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHByb3ZpZGVyczogW0hpZ2hjaGFydHNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRTZXJpZXNDb21wb25lbnQpIHNlcmllczogQ2hhcnRTZXJpZXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFhBeGlzQ29tcG9uZW50KSB4QXhpczogQ2hhcnRYQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WUF4aXNDb21wb25lbnQpIHlBeGlzOiBDaGFydFlBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRaQXhpc0NvbXBvbmVudCkgekF4aXM6IENoYXJ0WkF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydENvbG9yQXhpc0NvbXBvbmVudCkgY29sb3JBeGlzOiBDaGFydENvbG9yQXhpc0NvbXBvbmVudDtcbiAgICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZGRTZXJpZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBkcmlsbGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsdXAgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHJlZHJhdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIGNoYXJ0OiBhbnk7XG4gICAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlck9wdHM6IGFueTtcbiAgICBwcml2YXRlIGJhc2VPcHRzOiBhbnk7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ0NoYXJ0JztcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRzIDogYW55KSB7XG4gICAgICAgIHRoaXMudXNlck9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyT3B0cyAmJiB0aGlzLmJhc2VPcHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gaW5pdENoYXJ0KHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UsIHRoaXMudXNlck9wdHMsIHRoaXMuYmFzZU9wdHMsIHRoaXMudHlwZSk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPcHRzID0gY3JlYXRlQmFzZU9wdHMoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zZXJpZXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyA/IHRoaXMuc2VyaWVzLnBvaW50IDogbnVsbCxcbiAgICAgICAgICAgIHRoaXMueEF4aXMsXG4gICAgICAgICAgICB0aGlzLnlBeGlzLFxuICAgICAgICAgICAgdGhpcy56QXhpcyxcbiAgICAgICAgICAgIHRoaXMuY29sb3JBeGlzLFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmhpZ2hjaGFydHNTZXJ2aWNlID0gaGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU3RhdGljIH0gZnJvbSAnLi9IaWdoY2hhcnRzU2VydmljZSdcblxuY29uc3QgQ0hBUlRfRElSRUNUSVZFUzogYW55W10gPSBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRTZXJpZXNDb21wb25lbnQsXG4gICAgQ2hhcnRQb2ludENvbXBvbmVudCxcbiAgICBDaGFydFhBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WUF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRaQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydENvbG9yQXhpc0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IENIQVJUX0RJUkVDVElWRVMsXG4gICAgZXhwb3J0czogQ0hBUlRfRElSRUNUSVZFU1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoaGlnaGNoYXJ0c1N0YXRpYzogSGlnaGNoYXJ0c1N0YXRpYywgLi4uaGlnaGNoYXJ0c01vZHVsZXM6IEFycmF5PEZ1bmN0aW9uPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICAvLyBQbHVnIGhpZ2hjaGFydHMgbW9kdWxlc1xuICAgICAgICBoaWdoY2hhcnRzTW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgIG1vZHVsZShoaWdoY2hhcnRzU3RhdGljKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IENoYXJ0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIaWdoY2hhcnRzU3RhdGljLCB1c2VWYWx1ZTogaGlnaGNoYXJ0c1N0YXRpYyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0U2VyaWVzQ29tcG9uZW50LFxuICAgIENoYXJ0UG9pbnRDb21wb25lbnQsXG4gICAgQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFlBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WkF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQsXG59O1xuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZCIsIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt5QkFPc0IsSUFBSUEsaUJBQVksRUFBYzswQkFDN0IsSUFBSUEsaUJBQVksRUFBYzswQkFDOUIsSUFBSUEsaUJBQVksRUFBYzs0QkFDNUIsSUFBSUEsaUJBQVksRUFBYzs2QkFDN0IsSUFBSUEsaUJBQVksRUFBYzs0QkFDL0IsSUFBSUEsaUJBQVksRUFBYzswQkFDaEMsSUFBSUEsaUJBQVksRUFBYzs7O29CQVZwREMsY0FBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3FCQUNwQjs7OzRCQUVJQyxXQUFNOzZCQUNOQSxXQUFNOzZCQUNOQSxXQUFNOytCQUNOQSxXQUFNO2dDQUNOQSxXQUFNOytCQUNOQSxXQUFNOzZCQUNOQSxXQUFNOztrQ0FiWDs7Ozs7OztBQ0FBOzt5QkFTc0IsSUFBSUYsaUJBQVksRUFBYztnQ0FDdkIsSUFBSUEsaUJBQVks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