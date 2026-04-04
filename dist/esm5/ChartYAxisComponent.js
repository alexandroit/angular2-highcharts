/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter } from '@angular/core';
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
                },] }
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
export { ChartYAxisComponent };
if (false) {
    /** @type {?} */
    ChartYAxisComponent.prototype.afterBreaks;
    /** @type {?} */
    ChartYAxisComponent.prototype.afterSetExtremes;
    /** @type {?} */
    ChartYAxisComponent.prototype.pointBreak;
    /** @type {?} */
    ChartYAxisComponent.prototype.pointInBreak;
    /** @type {?} */
    ChartYAxisComponent.prototype.setExtremes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRZQXhpc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRZQXhpc0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hFO0lBQUE7UUFJYyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzNELENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztpQkFDcEI7Ozs4QkFFSSxNQUFNO21DQUNOLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzhCQUNOLE1BQU07O0lBQ1gsMEJBQUM7Q0FBQSxBQVRELElBU0M7U0FOWSxtQkFBbUI7OztJQUM1QiwwQ0FBdUQ7O0lBQ3ZELCtDQUE0RDs7SUFDNUQseUNBQXNEOztJQUN0RCwyQ0FBd0Q7O0lBQ3hELDBDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3lBeGlzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFlBeGlzQ29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJCcmVha3MgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50QnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHBvaW50SW5CcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2V0RXh0cmVtZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59Il19