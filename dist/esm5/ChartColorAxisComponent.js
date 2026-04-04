import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
var ChartColorAxisComponent = /** @class */ (function () {
    function ChartColorAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    tslib_1.__decorate([
        Output()
    ], ChartColorAxisComponent.prototype, "afterBreaks", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartColorAxisComponent.prototype, "afterSetExtremes", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartColorAxisComponent.prototype, "pointBreak", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartColorAxisComponent.prototype, "pointInBreak", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartColorAxisComponent.prototype, "setExtremes", void 0);
    ChartColorAxisComponent = tslib_1.__decorate([
        Directive({
            selector: 'colorAxis'
        })
    ], ChartColorAxisComponent);
    return ChartColorAxisComponent;
}());
export { ChartColorAxisComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb2xvckF4aXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNaEU7SUFIQTtRQUljLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2xELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0QsQ0FBQztJQUxhO1FBQVQsTUFBTSxFQUFFO2dFQUE4QztJQUM3QztRQUFULE1BQU0sRUFBRTtxRUFBbUQ7SUFDbEQ7UUFBVCxNQUFNLEVBQUU7K0RBQTZDO0lBQzVDO1FBQVQsTUFBTSxFQUFFO2lFQUErQztJQUM5QztRQUFULE1BQU0sRUFBRTtnRUFBOEM7SUFMOUMsdUJBQXVCO1FBSG5DLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1NBQ3hCLENBQUM7T0FDVyx1QkFBdUIsQ0FNbkM7SUFBRCw4QkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2NvbG9yQXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiJdfQ==