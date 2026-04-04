/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter } from '@angular/core';
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
    return ChartPointComponent;
}());
export { ChartPointComponent };
if (false) {
    /** @type {?} */
    ChartPointComponent.prototype.click;
    /** @type {?} */
    ChartPointComponent.prototype.remove;
    /** @type {?} */
    ChartPointComponent.prototype.select;
    /** @type {?} */
    ChartPointComponent.prototype.unselect;
    /** @type {?} */
    ChartPointComponent.prototype.mouseOver;
    /** @type {?} */
    ChartPointComponent.prototype.mouseOut;
    /** @type {?} */
    ChartPointComponent.prototype.update;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRQb2ludENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRQb2ludENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hFO0lBQUE7UUFJYyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN0RCxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87aUJBQ3BCOzs7d0JBRUksTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTs7SUFDWCwwQkFBQztDQUFBLEFBWEQsSUFXQztTQVJZLG1CQUFtQjs7O0lBQzVCLG9DQUFpRDs7SUFDakQscUNBQWtEOztJQUNsRCxxQ0FBa0Q7O0lBQ2xELHVDQUFvRDs7SUFDcEQsd0NBQXFEOztJQUNyRCx1Q0FBb0Q7O0lBQ3BELHFDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3BvaW50J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFBvaW50Q29tcG9uZW50IHtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSB1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSJdfQ==