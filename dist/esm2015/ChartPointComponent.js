/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Output, EventEmitter } from '@angular/core';
export class ChartPointComponent {
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
function ChartPointComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRQb2ludENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRQb2ludENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFLE1BQU07O3FCQUNnQixJQUFJLFlBQVksRUFBYztzQkFDN0IsSUFBSSxZQUFZLEVBQWM7c0JBQzlCLElBQUksWUFBWSxFQUFjO3dCQUM1QixJQUFJLFlBQVksRUFBYzt5QkFDN0IsSUFBSSxZQUFZLEVBQWM7d0JBQy9CLElBQUksWUFBWSxFQUFjO3NCQUNoQyxJQUFJLFlBQVksRUFBYzs7OztZQVZwRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87YUFDcEI7OztvQkFFSSxNQUFNO3FCQUNOLE1BQU07cUJBQ04sTUFBTTt1QkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAncG9pbnQnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0UG9pbnRDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59Il19