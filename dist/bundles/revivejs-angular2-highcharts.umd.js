(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@revivejs/angular2-highcharts', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.revivejs = global.revivejs || {}, global.revivejs['angular2-highcharts'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "click", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "remove", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "select", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "unselect", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "mouseOver", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "mouseOut", void 0);
        __decorate([
            core.Output()
        ], ChartPointComponent.prototype, "update", void 0);
        ChartPointComponent = __decorate([
            core.Directive({
                selector: 'point'
            })
        ], ChartPointComponent);
        return ChartPointComponent;
    }());

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
        __decorate([
            core.ContentChild(ChartPointComponent, { static: false })
        ], ChartSeriesComponent.prototype, "point", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "click", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "afterAnimate", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "checkboxClick", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "hide", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "legendItemClick", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "mouseOver", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "mouseOut", void 0);
        __decorate([
            core.Output()
        ], ChartSeriesComponent.prototype, "show", void 0);
        ChartSeriesComponent = __decorate([
            core.Directive({
                selector: 'series'
            })
        ], ChartSeriesComponent);
        return ChartSeriesComponent;
    }());

    var ChartXAxisComponent = /** @class */ (function () {
        function ChartXAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        __decorate([
            core.Output()
        ], ChartXAxisComponent.prototype, "afterBreaks", void 0);
        __decorate([
            core.Output()
        ], ChartXAxisComponent.prototype, "afterSetExtremes", void 0);
        __decorate([
            core.Output()
        ], ChartXAxisComponent.prototype, "pointBreak", void 0);
        __decorate([
            core.Output()
        ], ChartXAxisComponent.prototype, "pointInBreak", void 0);
        __decorate([
            core.Output()
        ], ChartXAxisComponent.prototype, "setExtremes", void 0);
        ChartXAxisComponent = __decorate([
            core.Directive({
                selector: 'xAxis'
            })
        ], ChartXAxisComponent);
        return ChartXAxisComponent;
    }());

    var ChartYAxisComponent = /** @class */ (function () {
        function ChartYAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        __decorate([
            core.Output()
        ], ChartYAxisComponent.prototype, "afterBreaks", void 0);
        __decorate([
            core.Output()
        ], ChartYAxisComponent.prototype, "afterSetExtremes", void 0);
        __decorate([
            core.Output()
        ], ChartYAxisComponent.prototype, "pointBreak", void 0);
        __decorate([
            core.Output()
        ], ChartYAxisComponent.prototype, "pointInBreak", void 0);
        __decorate([
            core.Output()
        ], ChartYAxisComponent.prototype, "setExtremes", void 0);
        ChartYAxisComponent = __decorate([
            core.Directive({
                selector: 'yAxis'
            })
        ], ChartYAxisComponent);
        return ChartYAxisComponent;
    }());

    var ChartZAxisComponent = /** @class */ (function () {
        function ChartZAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        __decorate([
            core.Output()
        ], ChartZAxisComponent.prototype, "afterBreaks", void 0);
        __decorate([
            core.Output()
        ], ChartZAxisComponent.prototype, "afterSetExtremes", void 0);
        __decorate([
            core.Output()
        ], ChartZAxisComponent.prototype, "pointBreak", void 0);
        __decorate([
            core.Output()
        ], ChartZAxisComponent.prototype, "pointInBreak", void 0);
        __decorate([
            core.Output()
        ], ChartZAxisComponent.prototype, "setExtremes", void 0);
        ChartZAxisComponent = __decorate([
            core.Directive({
                selector: 'zAxis'
            })
        ], ChartZAxisComponent);
        return ChartZAxisComponent;
    }());

    var ChartColorAxisComponent = /** @class */ (function () {
        function ChartColorAxisComponent() {
            this.afterBreaks = new core.EventEmitter();
            this.afterSetExtremes = new core.EventEmitter();
            this.pointBreak = new core.EventEmitter();
            this.pointInBreak = new core.EventEmitter();
            this.setExtremes = new core.EventEmitter();
        }
        __decorate([
            core.Output()
        ], ChartColorAxisComponent.prototype, "afterBreaks", void 0);
        __decorate([
            core.Output()
        ], ChartColorAxisComponent.prototype, "afterSetExtremes", void 0);
        __decorate([
            core.Output()
        ], ChartColorAxisComponent.prototype, "pointBreak", void 0);
        __decorate([
            core.Output()
        ], ChartColorAxisComponent.prototype, "pointInBreak", void 0);
        __decorate([
            core.Output()
        ], ChartColorAxisComponent.prototype, "setExtremes", void 0);
        ChartColorAxisComponent = __decorate([
            core.Directive({
                selector: 'colorAxis'
            })
        ], ChartColorAxisComponent);
        return ChartColorAxisComponent;
    }());

    var HighchartsStatic = /** @class */ (function () {
        function HighchartsStatic() {
        }
        HighchartsStatic = __decorate([
            core.Injectable()
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
            core.Injectable()
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
            { type: core.ElementRef },
            { type: HighchartsService }
        ]; };
        __decorate([
            core.ContentChild(ChartSeriesComponent, { static: false })
        ], ChartComponent.prototype, "series", void 0);
        __decorate([
            core.ContentChild(ChartXAxisComponent, { static: false })
        ], ChartComponent.prototype, "xAxis", void 0);
        __decorate([
            core.ContentChild(ChartYAxisComponent, { static: false })
        ], ChartComponent.prototype, "yAxis", void 0);
        __decorate([
            core.ContentChild(ChartZAxisComponent, { static: false })
        ], ChartComponent.prototype, "zAxis", void 0);
        __decorate([
            core.ContentChild(ChartColorAxisComponent, { static: false })
        ], ChartComponent.prototype, "colorAxis", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "create", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "click", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "addSeries", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "afterPrint", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "beforePrint", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "drilldown", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "drillup", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "load", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "redraw", void 0);
        __decorate([
            core.Output()
        ], ChartComponent.prototype, "selection", void 0);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], ChartComponent.prototype, "options", null);
        ChartComponent = __decorate([
            core.Component({
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
            core.NgModule({
                declarations: CHART_DIRECTIVES,
                exports: CHART_DIRECTIVES
            })
        ], ChartModule);
        return ChartModule;
    }());

    exports.ChartColorAxisComponent = ChartColorAxisComponent;
    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;
    exports.ChartPointComponent = ChartPointComponent;
    exports.ChartSeriesComponent = ChartSeriesComponent;
    exports.ChartXAxisComponent = ChartXAxisComponent;
    exports.ChartYAxisComponent = ChartYAxisComponent;
    exports.ChartZAxisComponent = ChartZAxisComponent;
    exports.ɵa = HighchartsStatic;
    exports.ɵb = HighchartsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=revivejs-angular2-highcharts.umd.js.map
