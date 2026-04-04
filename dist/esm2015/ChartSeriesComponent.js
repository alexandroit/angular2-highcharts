/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
export class ChartSeriesComponent {
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
if (false) {
    /** @type {?} */
    ChartSeriesComponent.prototype.point;
    /** @type {?} */
    ChartSeriesComponent.prototype.click;
    /** @type {?} */
    ChartSeriesComponent.prototype.afterAnimate;
    /** @type {?} */
    ChartSeriesComponent.prototype.checkboxClick;
    /** @type {?} */
    ChartSeriesComponent.prototype.hide;
    /** @type {?} */
    ChartSeriesComponent.prototype.legendItemClick;
    /** @type {?} */
    ChartSeriesComponent.prototype.mouseOver;
    /** @type {?} */
    ChartSeriesComponent.prototype.mouseOut;
    /** @type {?} */
    ChartSeriesComponent.prototype.show;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0U2VyaWVzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTVELE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFLYyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUNwRCxDQUFDOzs7WUFiQSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7YUFDckI7OztvQkFFSSxZQUFZLFNBQUMsbUJBQW1CO29CQUNoQyxNQUFNOzJCQUNOLE1BQU07NEJBQ04sTUFBTTttQkFDTixNQUFNOzhCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO21CQUNOLE1BQU07Ozs7SUFSUCxxQ0FBOEQ7O0lBQzlELHFDQUFpRDs7SUFDakQsNENBQXdEOztJQUN4RCw2Q0FBeUQ7O0lBQ3pELG9DQUFnRDs7SUFDaEQsK0NBQTJEOztJQUMzRCx5Q0FBcUQ7O0lBQ3JELHdDQUFvRDs7SUFDcEQsb0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3Nlcmllcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJpZXNDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRQb2ludENvbXBvbmVudCkgcG9pbnQ6IENoYXJ0UG9pbnRDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlckFuaW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGNoZWNrYm94Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxlZ2VuZEl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iXX0=