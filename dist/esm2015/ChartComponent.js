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
let ChartComponent = class ChartComponent {
    constructor(element, highchartsService) {
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
    set options(opts) {
        this.userOpts = opts;
        this.init();
    }
    ;
    init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }
    ngAfterViewInit() {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    }
};
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HighchartsService }
];
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
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPbEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQWdEdkIsWUFBWSxPQUFtQixFQUFFLGlCQUFxQztRQTFDNUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDNUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFB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OlsiaW1wb3J0IHsgSW5wdXQsIEVsZW1lbnRSZWYsIENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFydFNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRTZXJpZXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRYQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFlBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WkF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WkF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hjaGFydHNTZXJ2aWNlIH0gZnJvbSAnLi9IaWdoY2hhcnRzU2VydmljZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcbmltcG9ydCB7IGluaXRDaGFydCB9IGZyb20gJy4vaW5pdENoYXJ0JztcbmltcG9ydCB7IGNyZWF0ZUJhc2VPcHRzIH0gZnJvbSAnLi9jcmVhdGVCYXNlT3B0cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2hhcnQnLFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBwcm92aWRlcnM6IFtIaWdoY2hhcnRzU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IHtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0U2VyaWVzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgc2VyaWVzOiBDaGFydFNlcmllc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WEF4aXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB4QXhpczogQ2hhcnRYQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WUF4aXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB5QXhpczogQ2hhcnRZQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WkF4aXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB6QXhpczogQ2hhcnRaQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgY29sb3JBeGlzOiBDaGFydENvbG9yQXhpc0NvbXBvbmVudDtcbiAgICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZGRTZXJpZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBkcmlsbGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsdXAgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHJlZHJhdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIGNoYXJ0OiBhbnk7XG4gICAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlck9wdHM6IGFueTtcbiAgICBwcml2YXRlIGJhc2VPcHRzOiBhbnk7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ0NoYXJ0JztcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRzIDogYW55KSB7XG4gICAgICAgIHRoaXMudXNlck9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyT3B0cyAmJiB0aGlzLmJhc2VPcHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gaW5pdENoYXJ0KHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UsIHRoaXMudXNlck9wdHMsIHRoaXMuYmFzZU9wdHMsIHRoaXMudHlwZSk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPcHRzID0gY3JlYXRlQmFzZU9wdHMoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zZXJpZXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyA/IHRoaXMuc2VyaWVzLnBvaW50IDogbnVsbCxcbiAgICAgICAgICAgIHRoaXMueEF4aXMsXG4gICAgICAgICAgICB0aGlzLnlBeGlzLFxuICAgICAgICAgICAgdGhpcy56QXhpcyxcbiAgICAgICAgICAgIHRoaXMuY29sb3JBeGlzLFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmhpZ2hjaGFydHNTZXJ2aWNlID0gaGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgfVxufVxuIl19