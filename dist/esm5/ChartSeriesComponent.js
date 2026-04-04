/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
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
export { ChartSeriesComponent };
function ChartSeriesComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0U2VyaWVzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7cUJBUXRDLElBQUksWUFBWSxFQUFjOzRCQUN2QixJQUFJLFlBQVksRUFBYzs2QkFDN0IsSUFBSSxZQUFZLEVBQWM7b0JBQ3ZDLElBQUksWUFBWSxFQUFjOytCQUNuQixJQUFJLFlBQVksRUFBYzt5QkFDcEMsSUFBSSxZQUFZLEVBQWM7d0JBQy9CLElBQUksWUFBWSxFQUFjO29CQUNsQyxJQUFJLFlBQVksRUFBYzs7O2dCQVpsRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzs7d0JBRUksWUFBWSxTQUFDLG1CQUFtQjt3QkFDaEMsTUFBTTsrQkFDTixNQUFNO2dDQUNOLE1BQU07dUJBQ04sTUFBTTtrQ0FDTixNQUFNOzRCQUNOLE1BQU07MkJBQ04sTUFBTTt1QkFDTixNQUFNOzsrQkFoQlg7O1NBT2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3Nlcmllcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJpZXNDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRQb2ludENvbXBvbmVudCkgcG9pbnQ6IENoYXJ0UG9pbnRDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlckFuaW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGNoZWNrYm94Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxlZ2VuZEl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iXX0=