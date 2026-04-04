/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsStatic } from './HighchartsService';
var /** @type {?} */ CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    ChartModule.forRoot = /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        // Plug highcharts modules
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    ChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                },] },
    ];
    return ChartModule;
}());
export { ChartModule };
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRXRELHFCQUFNLGdCQUFnQixHQUFVO0lBQzVCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQixDQUFDOzs7Ozs7Ozs7SUFPUyxtQkFBTzs7Ozs7SUFBZCxVQUFlLGdCQUFrQztRQUFFLDJCQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMsMENBQXFDOzs7UUFFcEYsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtTQUMzQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQzVEO1NBQ0osQ0FBQztLQUNMOztnQkFqQkosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxnQkFBZ0I7b0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzVCOztzQkF4QkQ7O1NBeUJhLFdBQVc7QUFnQnhCLE9BQU8sRUFDSCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsR0FDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRTZXJpZXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRQb2ludENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRQb2ludENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1N0YXRpYyB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnXG5cbmNvbnN0IENIQVJUX0RJUkVDVElWRVM6IGFueVtdID0gW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0U2VyaWVzQ29tcG9uZW50LFxuICAgIENoYXJ0UG9pbnRDb21wb25lbnQsXG4gICAgQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFlBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WkF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xvckF4aXNDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBDSEFSVF9ESVJFQ1RJVkVTLFxuICAgIGV4cG9ydHM6IENIQVJUX0RJUkVDVElWRVNcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGhpZ2hjaGFydHNTdGF0aWM6IEhpZ2hjaGFydHNTdGF0aWMsIC4uLmhpZ2hjaGFydHNNb2R1bGVzOiBBcnJheTxGdW5jdGlvbj4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgLy8gUGx1ZyBoaWdoY2hhcnRzIG1vZHVsZXNcbiAgICAgICAgaGlnaGNoYXJ0c01vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICBtb2R1bGUoaGlnaGNoYXJ0c1N0YXRpYylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBDaGFydE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSGlnaGNoYXJ0c1N0YXRpYywgdXNlVmFsdWU6IGhpZ2hjaGFydHNTdGF0aWMgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LFxufTtcbiJdfQ==