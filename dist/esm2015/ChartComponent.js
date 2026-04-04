/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    /**
     * @param {?} element
     * @param {?} highchartsService
     */
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
    /**
     * @param {?} opts
     * @return {?}
     */
    set options(opts) {
        this.userOpts = opts;
        this.init();
    }
    ;
    /**
     * @return {?}
     */
    init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'chart',
                template: '&nbsp;',
                providers: [HighchartsService],
            },] },
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HighchartsService }
];
ChartComponent.propDecorators = {
    series: [{ type: ContentChild, args: [ChartSeriesComponent,] }],
    xAxis: [{ type: ContentChild, args: [ChartXAxisComponent,] }],
    yAxis: [{ type: ContentChild, args: [ChartYAxisComponent,] }],
    zAxis: [{ type: ContentChild, args: [ChartZAxisComponent,] }],
    colorAxis: [{ type: ContentChild, args: [ChartColorAxisComponent,] }],
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
function ChartComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ChartComponent.prototype.series;
    /** @type {?} */
    ChartComponent.prototype.xAxis;
    /** @type {?} */
    ChartComponent.prototype.yAxis;
    /** @type {?} */
    ChartComponent.prototype.zAxis;
    /** @type {?} */
    ChartComponent.prototype.colorAxis;
    /** @type {?} */
    ChartComponent.prototype.create;
    /** @type {?} */
    ChartComponent.prototype.click;
    /** @type {?} */
    ChartComponent.prototype.addSeries;
    /** @type {?} */
    ChartComponent.prototype.afterPrint;
    /** @type {?} */
    ChartComponent.prototype.beforePrint;
    /** @type {?} */
    ChartComponent.prototype.drilldown;
    /** @type {?} */
    ChartComponent.prototype.drillup;
    /** @type {?} */
    ChartComponent.prototype.load;
    /** @type {?} */
    ChartComponent.prototype.redraw;
    /** @type {?} */
    ChartComponent.prototype.selection;
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.element;
    /** @type {?} */
    ChartComponent.prototype.highchartsService;
    /** @type {?} */
    ChartComponent.prototype.userOpts;
    /** @type {?} */
    ChartComponent.prototype.baseOpts;
    /** @type {?} */
    ChartComponent.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPbEQsTUFBTTs7Ozs7SUFnREYsWUFBWSxPQUFtQixFQUFFLGlCQUFxQztzQkExQ25ELElBQUksWUFBWSxFQUFPO3FCQUN4QixJQUFJLFlBQVksRUFBYzt5QkFDMUIsSUFBSSxZQUFZLEVBQWM7MEJBQzdCLElBQUksWUFBWSxFQUFjOzJCQUM3QixJQUFJLFlBQVksRUFBYzt5QkFDaEMsSUFBSSxZQUFZLEVBQWM7dUJBQ2hDLElBQUksWUFBWSxFQUFjO29CQUNqQyxJQUFJLFlBQVksRUFBYztzQkFDNUIsSUFBSSxZQUFZLEVBQWM7eUJBQzNCLElBQUksWUFBWSxFQUFjO29CQU01QixPQUFPO1FBNEIzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7S0FDOUM7Ozs7O0lBN0JELElBQWEsT0FBTyxDQUFDLElBQVU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2Y7SUFBQSxDQUFDOzs7O0lBRU0sSUFBSTtRQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDOzs7OztJQUdMLGVBQWU7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FDMUIsSUFBSSxFQUNKLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDN0IsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNmOzs7WUFuREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDakM7Ozs7WUFoQmUsVUFBVTtZQU9qQixpQkFBaUI7OztxQkFXckIsWUFBWSxTQUFDLG9CQUFvQjtvQkFDakMsWUFBWSxTQUFDLG1CQUFtQjtvQkFDaEMsWUFBWSxTQUFDLG1CQUFtQjtvQkFDaEMsWUFBWSxTQUFDLG1CQUFtQjt3QkFDaEMsWUFBWSxTQUFDLHVCQUF1QjtxQkFDcEMsTUFBTTtvQkFDTixNQUFNO3dCQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNO3dCQUNOLE1BQU07c0JBQ04sTUFBTTttQkFDTixNQUFNO3FCQUNOLE1BQU07d0JBQ04sTUFBTTttQkFNTixLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1NlcnZpY2UgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0RXZlbnQgfSBmcm9tICcuL0NoYXJ0RXZlbnQnO1xuaW1wb3J0IHsgaW5pdENoYXJ0IH0gZnJvbSAnLi9pbml0Q2hhcnQnO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9wdHMgfSBmcm9tICcuL2NyZWF0ZUJhc2VPcHRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIHByb3ZpZGVyczogW0hpZ2hjaGFydHNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRTZXJpZXNDb21wb25lbnQpIHNlcmllczogQ2hhcnRTZXJpZXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFhBeGlzQ29tcG9uZW50KSB4QXhpczogQ2hhcnRYQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WUF4aXNDb21wb25lbnQpIHlBeGlzOiBDaGFydFlBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRaQXhpc0NvbXBvbmVudCkgekF4aXM6IENoYXJ0WkF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydENvbG9yQXhpc0NvbXBvbmVudCkgY29sb3JBeGlzOiBDaGFydENvbG9yQXhpc0NvbXBvbmVudDtcbiAgICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZGRTZXJpZXMgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBkcmlsbGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsdXAgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHJlZHJhdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIGNoYXJ0OiBhbnk7XG4gICAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXNlck9wdHM6IGFueTtcbiAgICBwcml2YXRlIGJhc2VPcHRzOiBhbnk7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ0NoYXJ0JztcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRzIDogYW55KSB7XG4gICAgICAgIHRoaXMudXNlck9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyT3B0cyAmJiB0aGlzLmJhc2VPcHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gaW5pdENoYXJ0KHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UsIHRoaXMudXNlck9wdHMsIHRoaXMuYmFzZU9wdHMsIHRoaXMudHlwZSk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPcHRzID0gY3JlYXRlQmFzZU9wdHMoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zZXJpZXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyA/IHRoaXMuc2VyaWVzLnBvaW50IDogbnVsbCxcbiAgICAgICAgICAgIHRoaXMueEF4aXMsXG4gICAgICAgICAgICB0aGlzLnlBeGlzLFxuICAgICAgICAgICAgdGhpcy56QXhpcyxcbiAgICAgICAgICAgIHRoaXMuY29sb3JBeGlzLFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmhpZ2hjaGFydHNTZXJ2aWNlID0gaGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgfVxufVxuIl19