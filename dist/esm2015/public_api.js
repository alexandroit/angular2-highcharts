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
const CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
export class ChartModule {
    /**
     * @param {?} highchartsStatic
     * @param {...?} highchartsModules
     * @return {?}
     */
    static forRoot(highchartsStatic, ...highchartsModules) {
        // Plug highcharts modules
        highchartsModules.forEach((module) => {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: CHART_DIRECTIVES,
                exports: CHART_DIRECTIVES
            },] }
];
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBOztNQUVoRCxnQkFBZ0IsR0FBVTtJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7QUFNRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWtDLEVBQUUsR0FBRyxpQkFBa0M7UUFDcEYsMEJBQTBCO1FBQzFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7YUFDcEU7U0FDSixDQUFDO0lBQ04sQ0FBQzs7O1lBakJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsZ0JBQWdCO2dCQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzVCOztBQWlCRCxPQUFPLEVBQ0gsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsdUJBQXVCLEdBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0UG9pbnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRYQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFlBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WkF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WkF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hjaGFydHNTdGF0aWMgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJ1xuXG5jb25zdCBDSEFSVF9ESVJFQ1RJVkVTOiBhbnlbXSA9IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogQ0hBUlRfRElSRUNUSVZFUyxcbiAgICBleHBvcnRzOiBDSEFSVF9ESVJFQ1RJVkVTXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChoaWdoY2hhcnRzU3RhdGljOiBIaWdoY2hhcnRzU3RhdGljLCAuLi5oaWdoY2hhcnRzTW9kdWxlczogQXJyYXk8RnVuY3Rpb24+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIC8vIFBsdWcgaGlnaGNoYXJ0cyBtb2R1bGVzXG4gICAgICAgIGhpZ2hjaGFydHNNb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgbW9kdWxlKGhpZ2hjaGFydHNTdGF0aWMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ2hhcnRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEhpZ2hjaGFydHNTdGF0aWMsIHVzZUZhY3Rvcnk6ICgpID0+IGhpZ2hjaGFydHNTdGF0aWMgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LFxufTtcbiJdfQ==