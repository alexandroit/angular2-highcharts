/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
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
                providers: [HighchartsService]
            }] }
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
if (false) {
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
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.userOpts;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.baseOpts;
    /** @type {?} */
    ChartComponent.prototype.type;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPbEQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBZ0R2QixZQUFZLE9BQW1CLEVBQUUsaUJBQXFDO1FBMUM1RCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDekMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFNNUMsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQTRCNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7Ozs7O0lBN0JELElBQWEsT0FBTyxDQUFDLElBQVU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDOzs7OztJQUVNLElBQUk7UUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUMxQixJQUFJLEVBQ0osSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN0QyxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQW5ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNqQzs7OztZQWhCZSxVQUFVO1lBT2pCLGlCQUFpQjs7O3FCQVdyQixZQUFZLFNBQUMsb0JBQW9CO29CQUNqQyxZQUFZLFNBQUMsbUJBQW1CO29CQUNoQyxZQUFZLFNBQUMsbUJBQW1CO29CQUNoQyxZQUFZLFNBQUMsbUJBQW1CO3dCQUNoQyxZQUFZLFNBQUMsdUJBQXVCO3FCQUNwQyxNQUFNO29CQUNOLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkFDTixNQUFNO21CQUNOLE1BQU07cUJBQ04sTUFBTTt3QkFDTixNQUFNO21CQU1OLEtBQUs7c0JBQ0wsS0FBSzs7OztJQXJCTixnQ0FBaUU7O0lBQ2pFLCtCQUE4RDs7SUFDOUQsK0JBQThEOztJQUM5RCwrQkFBOEQ7O0lBQzlELG1DQUEwRTs7SUFDMUUsZ0NBQTJDOztJQUMzQywrQkFBaUQ7O0lBQ2pELG1DQUFxRDs7SUFDckQsb0NBQXNEOztJQUN0RCxxQ0FBdUQ7O0lBQ3ZELG1DQUFxRDs7SUFDckQsaUNBQW1EOztJQUNuRCw4QkFBZ0Q7O0lBQ2hELGdDQUFrRDs7SUFDbEQsbUNBQXFEOztJQUNyRCwrQkFBVzs7SUFDWCxpQ0FBb0I7O0lBQ3BCLDJDQUFzQzs7Ozs7SUFDdEMsa0NBQXNCOzs7OztJQUN0QixrQ0FBc0I7O0lBQ3RCLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5pbXBvcnQgeyBpbml0Q2hhcnQgfSBmcm9tICcuL2luaXRDaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVCYXNlT3B0cyB9IGZyb20gJy4vY3JlYXRlQmFzZU9wdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgcHJvdmlkZXJzOiBbSGlnaGNoYXJ0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFNlcmllc0NvbXBvbmVudCkgc2VyaWVzOiBDaGFydFNlcmllc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WEF4aXNDb21wb25lbnQpIHhBeGlzOiBDaGFydFhBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRZQXhpc0NvbXBvbmVudCkgeUF4aXM6IENoYXJ0WUF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFpBeGlzQ29tcG9uZW50KSB6QXhpczogQ2hhcnRaQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50KSBjb2xvckF4aXM6IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFkZFNlcmllcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGx1cCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgY2hhcnQ6IGFueTtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyT3B0czogYW55O1xuICAgIHByaXZhdGUgYmFzZU9wdHM6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnQ2hhcnQnO1xuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdHMgOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJPcHRzICYmIHRoaXMuYmFzZU9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBpbml0Q2hhcnQodGhpcy5oaWdoY2hhcnRzU2VydmljZSwgdGhpcy51c2VyT3B0cywgdGhpcy5iYXNlT3B0cywgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9wdHMgPSBjcmVhdGVCYXNlT3B0cyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzID8gdGhpcy5zZXJpZXMucG9pbnQgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICB0aGlzLnpBeGlzLFxuICAgICAgICAgICAgdGhpcy5jb2xvckF4aXMsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UgPSBoaWdoY2hhcnRzU2VydmljZTtcbiAgICB9XG59XG4iXX0=