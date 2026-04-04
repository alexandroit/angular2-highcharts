/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return ChartSeriesComponent;
}());
export { ChartSeriesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0U2VyaWVzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzVEO0lBQUE7UUFLYyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUNwRCxDQUFDOztnQkFiQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzs7d0JBRUksWUFBWSxTQUFDLG1CQUFtQjt3QkFDaEMsTUFBTTsrQkFDTixNQUFNO2dDQUNOLE1BQU07dUJBQ04sTUFBTTtrQ0FDTixNQUFNOzRCQUNOLE1BQU07MkJBQ04sTUFBTTt1QkFDTixNQUFNOztJQUNYLDJCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksb0JBQW9COzs7SUFDN0IscUNBQThEOztJQUM5RCxxQ0FBaUQ7O0lBQ2pELDRDQUF3RDs7SUFDeEQsNkNBQXlEOztJQUN6RCxvQ0FBZ0Q7O0lBQ2hELCtDQUEyRDs7SUFDM0QseUNBQXFEOztJQUNyRCx3Q0FBb0Q7O0lBQ3BELG9DQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRQb2ludENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRQb2ludENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdzZXJpZXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0U2VyaWVzQ29tcG9uZW50IHtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0UG9pbnRDb21wb25lbnQpIHBvaW50OiBDaGFydFBvaW50Q29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJBbmltYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBjaGVja2JveENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59Il19