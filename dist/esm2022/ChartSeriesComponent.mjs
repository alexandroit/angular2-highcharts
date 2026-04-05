import { Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
import * as i0 from "@angular/core";
export class ChartSeriesComponent {
    point;
    click = new EventEmitter();
    afterAnimate = new EventEmitter();
    checkboxClick = new EventEmitter();
    hide = new EventEmitter();
    legendItemClick = new EventEmitter();
    mouseOver = new EventEmitter();
    mouseOut = new EventEmitter();
    show = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartSeriesComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: ChartSeriesComponent, selector: "series", outputs: { click: "click", afterAnimate: "afterAnimate", checkboxClick: "checkboxClick", hide: "hide", legendItemClick: "legendItemClick", mouseOver: "mouseOver", mouseOut: "mouseOut", show: "show" }, queries: [{ propertyName: "point", first: true, predicate: ChartPointComponent, descendants: true }], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartSeriesComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'series'
                }]
        }], propDecorators: { point: [{
                type: ContentChild,
                args: [ChartPointComponent, { static: false }]
            }], click: [{
                type: Output
            }], afterAnimate: [{
                type: Output
            }], checkboxClick: [{
                type: Output
            }], hide: [{
                type: Output
            }], legendItemClick: [{
                type: Output
            }], mouseOver: [{
                type: Output
            }], mouseOut: [{
                type: Output
            }], show: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRTZXJpZXNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUN5QixLQUFLLENBQXNCO0lBQ3ZFLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ3ZDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzlDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQy9DLElBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ3RDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ2pELFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzNDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzFDLElBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO3dHQVR2QyxvQkFBb0I7NEZBQXBCLG9CQUFvQiwwUkFDZixtQkFBbUI7OzRGQUR4QixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzhCQUV5RCxLQUFLO3NCQUExRCxZQUFZO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDMUMsS0FBSztzQkFBZCxNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxTQUFTO3NCQUFsQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3Nlcmllcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTZXJpZXNDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRQb2ludENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHBvaW50OiBDaGFydFBvaW50Q29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJBbmltYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBjaGVja2JveENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG59XG4iXX0=