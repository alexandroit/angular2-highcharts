import { Directive, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ChartColorAxisComponent {
    afterBreaks = new EventEmitter();
    afterSetExtremes = new EventEmitter();
    pointBreak = new EventEmitter();
    pointInBreak = new EventEmitter();
    setExtremes = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartColorAxisComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: ChartColorAxisComponent, selector: "colorAxis", outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartColorAxisComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'colorAxis'
                }]
        }], propDecorators: { afterBreaks: [{
                type: Output
            }], afterSetExtremes: [{
                type: Output
            }], pointBreak: [{
                type: Output
            }], pointInBreak: [{
                type: Output
            }], setExtremes: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb2xvckF4aXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRDb2xvckF4aXNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1oRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ3RCLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzdDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDbEQsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDNUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDOUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7d0dBTDlDLHVCQUF1Qjs0RkFBdkIsdUJBQXVCOzs0RkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO2lCQUN4Qjs4QkFFYSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2NvbG9yQXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiJdfQ==