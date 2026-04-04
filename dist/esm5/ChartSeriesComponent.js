import * as tslib_1 from "tslib";
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
    tslib_1.__decorate([
        ContentChild(ChartPointComponent, { static: false })
    ], ChartSeriesComponent.prototype, "point", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "click", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "afterAnimate", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "checkboxClick", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "hide", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "legendItemClick", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "mouseOver", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "mouseOut", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartSeriesComponent.prototype, "show", void 0);
    ChartSeriesComponent = tslib_1.__decorate([
        Directive({
            selector: 'series'
        })
    ], ChartSeriesComponent);
    return ChartSeriesComponent;
}());
export { ChartSeriesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0U2VyaWVzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTVEO0lBSEE7UUFLYyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUNwRCxDQUFDO0lBVHlEO1FBQXJELFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt1REFBNEI7SUFDdkU7UUFBVCxNQUFNLEVBQUU7dURBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzhEQUErQztJQUM5QztRQUFULE1BQU0sRUFBRTsrREFBZ0Q7SUFDL0M7UUFBVCxNQUFNLEVBQUU7c0RBQXVDO0lBQ3RDO1FBQVQsTUFBTSxFQUFFO2lFQUFrRDtJQUNqRDtRQUFULE1BQU0sRUFBRTsyREFBNEM7SUFDM0M7UUFBVCxNQUFNLEVBQUU7MERBQTJDO0lBQzFDO1FBQVQsTUFBTSxFQUFFO3NEQUF1QztJQVR2QyxvQkFBb0I7UUFIaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQztPQUNXLG9CQUFvQixDQVVoQztJQUFELDJCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3Nlcmllcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJpZXNDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRQb2ludENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHBvaW50OiBDaGFydFBvaW50Q29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJBbmltYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBjaGVja2JveENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59XG4iXX0=