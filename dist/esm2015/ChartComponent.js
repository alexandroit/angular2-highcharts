import { Input, ElementRef, Component, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsService } from './HighchartsService';
import { initChart } from './initChart';
import { createBaseOpts } from './createBaseOpts';
export class ChartComponent {
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
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'chart',
                template: '&nbsp;',
                providers: [HighchartsService]
            },] }
];
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HighchartsService }
];
ChartComponent.propDecorators = {
    series: [{ type: ContentChild, args: [ChartSeriesComponent, { static: false },] }],
    xAxis: [{ type: ContentChild, args: [ChartXAxisComponent, { static: false },] }],
    yAxis: [{ type: ContentChild, args: [ChartYAxisComponent, { static: false },] }],
    zAxis: [{ type: ContentChild, args: [ChartZAxisComponent, { static: false },] }],
    colorAxis: [{ type: ContentChild, args: [ChartColorAxisComponent, { static: false },] }],
    create: [{ type: Output }],
    click: [{ type: Output }],
    addSeries: [{ type: Output }],
    afterPrint: [{ type: Output }],
    beforePrint: [{ type: Output }],
    drilldown: [{ type: Output }],
    drillup: [{ type: Output }],
    load: [{ type: Output }],
    redraw: [{ type: Output }],
    selection: [{ type: Output }],
    type: [{ type: Input }],
    options: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT2xELE1BQU0sT0FBTyxjQUFjO0lBZ0R2QixZQUFZLE9BQW1CLEVBQUUsaUJBQXFDO1FBMUM1RCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDekMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFNNUMsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQTRCNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7SUE3QkQsSUFBYSxPQUFPLENBQUMsSUFBVTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFFTSxJQUFJO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FDMUIsSUFBSSxFQUNKLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7WUFuREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDakM7OztZQWhCZSxVQUFVO1lBT2pCLGlCQUFpQjs7O3FCQVdyQixZQUFZLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNwRCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNuRCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNuRCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUNuRCxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3FCQUN2RCxNQUFNO29CQUNOLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkFDTixNQUFNO21CQUNOLE1BQU07cUJBQ04sTUFBTTt3QkFDTixNQUFNO21CQU1OLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5pbXBvcnQgeyBpbml0Q2hhcnQgfSBmcm9tICcuL2luaXRDaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVCYXNlT3B0cyB9IGZyb20gJy4vY3JlYXRlQmFzZU9wdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgcHJvdmlkZXJzOiBbSGlnaGNoYXJ0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFNlcmllc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHNlcmllczogQ2hhcnRTZXJpZXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFhBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgeEF4aXM6IENoYXJ0WEF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFlBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgeUF4aXM6IENoYXJ0WUF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFpBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgekF4aXM6IENoYXJ0WkF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydENvbG9yQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbG9yQXhpczogQ2hhcnRDb2xvckF4aXNDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWRkU2VyaWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGxkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBkcmlsbHVwID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSByZWRyYXcgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBjaGFydDogYW55O1xuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZTtcbiAgICBwcml2YXRlIHVzZXJPcHRzOiBhbnk7XG4gICAgcHJpdmF0ZSBiYXNlT3B0czogYW55O1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdDaGFydCc7XG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0cyA6IGFueSkge1xuICAgICAgICB0aGlzLnVzZXJPcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlck9wdHMgJiYgdGhpcy5iYXNlT3B0cykge1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IGluaXRDaGFydCh0aGlzLmhpZ2hjaGFydHNTZXJ2aWNlLCB0aGlzLnVzZXJPcHRzLCB0aGlzLmJhc2VPcHRzLCB0aGlzLnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT3B0cyA9IGNyZWF0ZUJhc2VPcHRzKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzLFxuICAgICAgICAgICAgdGhpcy5zZXJpZXMgPyB0aGlzLnNlcmllcy5wb2ludCA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnhBeGlzLFxuICAgICAgICAgICAgdGhpcy55QXhpcyxcbiAgICAgICAgICAgIHRoaXMuekF4aXMsXG4gICAgICAgICAgICB0aGlzLmNvbG9yQXhpcyxcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5oaWdoY2hhcnRzU2VydmljZSA9IGhpZ2hjaGFydHNTZXJ2aWNlO1xuICAgIH1cbn1cbiJdfQ==