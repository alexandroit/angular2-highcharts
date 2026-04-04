import { Input, Component, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsService } from './HighchartsService';
import { initChart } from './initChart';
import { createBaseOpts } from './createBaseOpts';
import * as i0 from "@angular/core";
import * as i1 from "./HighchartsService";
export class ChartComponent {
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
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ChartComponent, deps: [{ token: i0.ElementRef }, { token: i1.HighchartsService }], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ChartComponent, selector: "chart", inputs: { type: "type", options: "options" }, outputs: { create: "create", click: "click", addSeries: "addSeries", afterPrint: "afterPrint", beforePrint: "beforePrint", drilldown: "drilldown", drillup: "drillup", load: "load", redraw: "redraw", selection: "selection" }, providers: [HighchartsService], queries: [{ propertyName: "series", first: true, predicate: ChartSeriesComponent, descendants: true }, { propertyName: "xAxis", first: true, predicate: ChartXAxisComponent, descendants: true }, { propertyName: "yAxis", first: true, predicate: ChartYAxisComponent, descendants: true }, { propertyName: "zAxis", first: true, predicate: ChartZAxisComponent, descendants: true }, { propertyName: "colorAxis", first: true, predicate: ChartColorAxisComponent, descendants: true }], ngImport: i0, template: '&nbsp;', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'chart',
                    template: '&nbsp;',
                    providers: [HighchartsService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HighchartsService }]; }, propDecorators: { series: [{
                type: ContentChild,
                args: [ChartSeriesComponent, { static: false }]
            }], xAxis: [{
                type: ContentChild,
                args: [ChartXAxisComponent, { static: false }]
            }], yAxis: [{
                type: ContentChild,
                args: [ChartYAxisComponent, { static: false }]
            }], zAxis: [{
                type: ContentChild,
                args: [ChartZAxisComponent, { static: false }]
            }], colorAxis: [{
                type: ContentChild,
                args: [ChartColorAxisComponent, { static: false }]
            }], create: [{
                type: Output
            }], click: [{
                type: Output
            }], addSeries: [{
                type: Output
            }], afterPrint: [{
                type: Output
            }], beforePrint: [{
                type: Output
            }], drilldown: [{
                type: Output
            }], drillup: [{
                type: Output
            }], load: [{
                type: Output
            }], redraw: [{
                type: Output
            }], selection: [{
                type: Output
            }], type: [{
                type: Input
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBYyxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQU9sRCxNQUFNLE9BQU8sY0FBYztJQXNCdkIsSUFBYSxPQUFPLENBQUMsSUFBVTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFFTSxJQUFJO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FDMUIsSUFBSSxFQUNKLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsWUFBWSxPQUFtQixFQUFFLGlCQUFxQztRQTFDNUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDNUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBTTVDLFNBQUksR0FBVyxPQUFPLENBQUM7UUE0QjVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDOzs0R0FuRFEsY0FBYztnR0FBZCxjQUFjLCtTQUZaLENBQUMsaUJBQWlCLENBQUMsOERBR2hCLG9CQUFvQix3RUFDcEIsbUJBQW1CLHdFQUNuQixtQkFBbUIsd0VBQ25CLG1CQUFtQiw0RUFDbkIsdUJBQXVCLGdEQVIzQixRQUFROzRGQUdULGNBQWM7a0JBTDFCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDakM7aUlBRTBELE1BQU07c0JBQTVELFlBQVk7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNDLEtBQUs7c0JBQTFELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNFLEtBQUs7c0JBQTFELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNFLEtBQUs7c0JBQTFELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNNLFNBQVM7c0JBQWxFLFlBQVk7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUM5QyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBTUUsSUFBSTtzQkFBWixLQUFLO2dCQUNPLE9BQU87c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1NlcnZpY2UgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuaW1wb3J0IHsgaW5pdENoYXJ0IH0gZnJvbSAnLi9pbml0Q2hhcnQnO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9wdHMgfSBmcm9tICcuL2NyZWF0ZUJhc2VPcHRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHByb3ZpZGVyczogW0hpZ2hjaGFydHNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRTZXJpZXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXJpZXM6IENoYXJ0U2VyaWVzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRYQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHhBeGlzOiBDaGFydFhBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRZQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHlBeGlzOiBDaGFydFlBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRaQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHpBeGlzOiBDaGFydFpBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRDb2xvckF4aXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBjb2xvckF4aXM6IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFkZFNlcmllcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGx1cCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgY2hhcnQ6IGFueTtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyT3B0czogYW55O1xuICAgIHByaXZhdGUgYmFzZU9wdHM6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnQ2hhcnQnO1xuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdHMgOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJPcHRzICYmIHRoaXMuYmFzZU9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBpbml0Q2hhcnQodGhpcy5oaWdoY2hhcnRzU2VydmljZSwgdGhpcy51c2VyT3B0cywgdGhpcy5iYXNlT3B0cywgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9wdHMgPSBjcmVhdGVCYXNlT3B0cyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzID8gdGhpcy5zZXJpZXMucG9pbnQgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICB0aGlzLnpBeGlzLFxuICAgICAgICAgICAgdGhpcy5jb2xvckF4aXMsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UgPSBoaWdoY2hhcnRzU2VydmljZTtcbiAgICB9XG59XG4iXX0=