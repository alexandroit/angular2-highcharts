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
        set: /**
         * @param {?} opts
         * @return {?}
         */
        function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @private
     * @return {?}
     */
    ChartComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'chart',
                    template: '&nbsp;',
                    providers: [HighchartsService]
                }] }
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HighchartsService }
    ]; };
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
    return ChartComponent;
}());
export { ChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFxREksd0JBQVksT0FBbUIsRUFBRSxpQkFBcUM7UUExQzVELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzVDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN0QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQU01QyxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBNEI1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDL0MsQ0FBQztJQTdCRCxzQkFBYSxtQ0FBTzs7Ozs7UUFBcEIsVUFBcUIsSUFBVTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOzs7OztJQUVNLDZCQUFJOzs7O0lBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQzFCLElBQUksRUFDSixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBbkRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUNqQzs7OztnQkFoQmUsVUFBVTtnQkFPakIsaUJBQWlCOzs7eUJBV3JCLFlBQVksU0FBQyxvQkFBb0I7d0JBQ2pDLFlBQVksU0FBQyxtQkFBbUI7d0JBQ2hDLFlBQVksU0FBQyxtQkFBbUI7d0JBQ2hDLFlBQVksU0FBQyxtQkFBbUI7NEJBQ2hDLFlBQVksU0FBQyx1QkFBdUI7eUJBQ3BDLE1BQU07d0JBQ04sTUFBTTs0QkFDTixNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTs0QkFDTixNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTt5QkFDTixNQUFNOzRCQUNOLE1BQU07dUJBTU4sS0FBSzswQkFDTCxLQUFLOztJQThCVixxQkFBQztDQUFBLEFBekRELElBeURDO1NBcERZLGNBQWM7OztJQUN2QixnQ0FBaUU7O0lBQ2pFLCtCQUE4RDs7SUFDOUQsK0JBQThEOztJQUM5RCwrQkFBOEQ7O0lBQzlELG1DQUEwRTs7SUFDMUUsZ0NBQTJDOztJQUMzQywrQkFBaUQ7O0lBQ2pELG1DQUFxRDs7SUFDckQsb0NBQXNEOztJQUN0RCxxQ0FBdUQ7O0lBQ3ZELG1DQUFxRDs7SUFDckQsaUNBQW1EOztJQUNuRCw4QkFBZ0Q7O0lBQ2hELGdDQUFrRDs7SUFDbEQsbUNBQXFEOztJQUNyRCwrQkFBVzs7SUFDWCxpQ0FBb0I7O0lBQ3BCLDJDQUFzQzs7Ozs7SUFDdEMsa0NBQXNCOzs7OztJQUN0QixrQ0FBc0I7O0lBQ3RCLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5pbXBvcnQgeyBpbml0Q2hhcnQgfSBmcm9tICcuL2luaXRDaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVCYXNlT3B0cyB9IGZyb20gJy4vY3JlYXRlQmFzZU9wdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgcHJvdmlkZXJzOiBbSGlnaGNoYXJ0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFNlcmllc0NvbXBvbmVudCkgc2VyaWVzOiBDaGFydFNlcmllc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0WEF4aXNDb21wb25lbnQpIHhBeGlzOiBDaGFydFhBeGlzQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoQ2hhcnRZQXhpc0NvbXBvbmVudCkgeUF4aXM6IENoYXJ0WUF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFpBeGlzQ29tcG9uZW50KSB6QXhpczogQ2hhcnRaQXhpc0NvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50KSBjb2xvckF4aXM6IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50O1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGFkZFNlcmllcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGRyaWxsZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGx1cCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcmVkcmF3ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgY2hhcnQ6IGFueTtcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyT3B0czogYW55O1xuICAgIHByaXZhdGUgYmFzZU9wdHM6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnQ2hhcnQnO1xuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdHMgOiBhbnkpIHtcbiAgICAgICAgdGhpcy51c2VyT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJPcHRzICYmIHRoaXMuYmFzZU9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBpbml0Q2hhcnQodGhpcy5oaWdoY2hhcnRzU2VydmljZSwgdGhpcy51c2VyT3B0cywgdGhpcy5iYXNlT3B0cywgdGhpcy50eXBlKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5jaGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9wdHMgPSBjcmVhdGVCYXNlT3B0cyhcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzID8gdGhpcy5zZXJpZXMucG9pbnQgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy54QXhpcyxcbiAgICAgICAgICAgIHRoaXMueUF4aXMsXG4gICAgICAgICAgICB0aGlzLnpBeGlzLFxuICAgICAgICAgICAgdGhpcy5jb2xvckF4aXMsXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBoaWdoY2hhcnRzU2VydmljZSA6IEhpZ2hjaGFydHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGlnaGNoYXJ0c1NlcnZpY2UgPSBoaWdoY2hhcnRzU2VydmljZTtcbiAgICB9XG59XG4iXX0=