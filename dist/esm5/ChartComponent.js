import * as tslib_1 from "tslib";
import { Input, ElementRef, Component, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsService } from './HighchartsService';
import { initChart } from './initChart';
import { createBaseOpts } from './createBaseOpts';
var ChartComponent = /** @class */ (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new EventEmitter();
        this.click = new EventEmitter();
        this.addSeries = new EventEmitter();
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.drilldown = new EventEmitter();
        this.drillup = new EventEmitter();
        this.load = new EventEmitter();
        this.redraw = new EventEmitter();
        this.selection = new EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HighchartsService }
    ]; };
    tslib_1.__decorate([
        ContentChild(ChartSeriesComponent, { static: false })
    ], ChartComponent.prototype, "series", void 0);
    tslib_1.__decorate([
        ContentChild(ChartXAxisComponent, { static: false })
    ], ChartComponent.prototype, "xAxis", void 0);
    tslib_1.__decorate([
        ContentChild(ChartYAxisComponent, { static: false })
    ], ChartComponent.prototype, "yAxis", void 0);
    tslib_1.__decorate([
        ContentChild(ChartZAxisComponent, { static: false })
    ], ChartComponent.prototype, "zAxis", void 0);
    tslib_1.__decorate([
        ContentChild(ChartColorAxisComponent, { static: false })
    ], ChartComponent.prototype, "colorAxis", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "click", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "addSeries", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "afterPrint", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "beforePrint", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "drilldown", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "drillup", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "load", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "redraw", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartComponent.prototype, "selection", void 0);
    tslib_1.__decorate([
        Input()
    ], ChartComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input()
    ], ChartComponent.prototype, "options", null);
    ChartComponent = tslib_1.__decorate([
        Component({
            selector: 'chart',
            template: '&nbsp;',
            providers: [HighchartsService]
        })
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPbEQ7SUFnREksd0JBQVksT0FBbUIsRUFBRSxpQkFBcUM7UUExQzVELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzVDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxTQUFJLEdBQUcsSUFB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QWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1NlcnZpY2UgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuaW1wb3J0IHsgaW5pdENoYXJ0IH0gZnJvbSAnLi9pbml0Q2hhcnQnO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9wdHMgfSBmcm9tICcuL2NyZWF0ZUJhc2VPcHRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHByb3ZpZGVyczogW0hpZ2hjaGFydHNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRTZXJpZXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXJpZXM6IENoYXJ0U2VyaWVzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRYQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHhBeGlzOiBDaGFydFhBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRZQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHlBeGlzOiBDaGFydFlBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRaQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHpBeGlzOiBDaGFydFpBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRDb2xvckF4aXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBjb2xvckF4aXM6IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFkZFNlcmllcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGx1cCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgY2hhcnQ6IGFueTtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyT3B0czogYW55O1xuICAgIHByaXZhdGUgYmFzZU9wdHM6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnQ2hhcnQnO1xuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdHMgOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJPcHRzICYmIHRoaXMuYmFzZU9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBpbml0Q2hhcnQodGhpcy5oaWdoY2hhcnRzU2VydmljZSwgdGhpcy51c2VyT3B0cywgdGhpcy5iYXNlT3B0cywgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9wdHMgPSBjcmVhdGVCYXNlT3B0cyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzID8gdGhpcy5zZXJpZXMucG9pbnQgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICB0aGlzLnpBeGlzLFxuICAgICAgICAgICAgdGhpcy5jb2xvckF4aXMsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UgPSBoaWdoY2hhcnRzU2VydmljZTtcbiAgICB9XG59XG4iXX0=