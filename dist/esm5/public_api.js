/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @type {?} */
var CHART_DIRECTIVES = [
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
                },] }
    ];
    return ChartModule;
}());
export { ChartModule };
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBOztJQUVoRCxnQkFBZ0IsR0FBVTtJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7QUFFRDtJQUFBO0lBa0JBLENBQUM7Ozs7OztJQWJVLG1CQUFPOzs7OztJQUFkLFVBQWUsZ0JBQWtDO1FBQUUsMkJBQXFDO2FBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztZQUFyQywwQ0FBcUM7O1FBQ3BGLDBCQUEwQjtRQUMxQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7YUFDNUQ7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Z0JBakJKLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsZ0JBQWdCO29CQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2lCQUM1Qjs7SUFlRCxrQkFBQztDQUFBLEFBbEJELElBa0JDO1NBZFksV0FBVztBQWdCeEIsT0FBTyxFQUNILGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHVCQUF1QixHQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0U2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFNlcmllc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFBvaW50Q29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU3RhdGljIH0gZnJvbSAnLi9IaWdoY2hhcnRzU2VydmljZSdcblxuY29uc3QgQ0hBUlRfRElSRUNUSVZFUzogYW55W10gPSBbXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRTZXJpZXNDb21wb25lbnQsXG4gICAgQ2hhcnRQb2ludENvbXBvbmVudCxcbiAgICBDaGFydFhBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WUF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRaQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydENvbG9yQXhpc0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IENIQVJUX0RJUkVDVElWRVMsXG4gICAgZXhwb3J0czogQ0hBUlRfRElSRUNUSVZFU1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoaGlnaGNoYXJ0c1N0YXRpYzogSGlnaGNoYXJ0c1N0YXRpYywgLi4uaGlnaGNoYXJ0c01vZHVsZXM6IEFycmF5PEZ1bmN0aW9uPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICAvLyBQbHVnIGhpZ2hjaGFydHMgbW9kdWxlc1xuICAgICAgICBoaWdoY2hhcnRzTW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgIG1vZHVsZShoaWdoY2hhcnRzU3RhdGljKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IENoYXJ0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIaWdoY2hhcnRzU3RhdGljLCB1c2VWYWx1ZTogaGlnaGNoYXJ0c1N0YXRpYyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0U2VyaWVzQ29tcG9uZW50LFxuICAgIENoYXJ0UG9pbnRDb21wb25lbnQsXG4gICAgQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFlBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WkF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQsXG59O1xuIl19