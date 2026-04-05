import { NgModule } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsStatic } from './HighchartsService';
import * as i0 from "@angular/core";
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
    static forRoot(highchartsStatic, ...highchartsModules) {
        // Plug highcharts modules
        highchartsModules.forEach((loadedModule) => {
            const highchartsModule = loadedModule && loadedModule.default ? loadedModule.default : loadedModule;
            if (typeof highchartsModule === 'function') {
                highchartsModule(highchartsStatic);
            }
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: ChartModule, declarations: [ChartComponent,
            ChartSeriesComponent,
            ChartPointComponent,
            ChartXAxisComponent,
            ChartYAxisComponent,
            ChartZAxisComponent,
            ChartColorAxisComponent], exports: [ChartComponent,
            ChartSeriesComponent,
            ChartPointComponent,
            ChartXAxisComponent,
            ChartYAxisComponent,
            ChartZAxisComponent,
            ChartColorAxisComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                }]
        }] });
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTs7QUFFdEQsTUFBTSxnQkFBZ0IsR0FBVTtJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIsQ0FBQztBQU1GLE1BQU0sT0FBTyxXQUFXO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWtDLEVBQUUsR0FBRyxpQkFBa0M7UUFDcEYsMEJBQTBCO1FBQzFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtZQUM1QyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDcEcsSUFBSSxPQUFPLGdCQUFnQixLQUFLLFVBQVUsRUFBRSxDQUFDO2dCQUN6QyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDSCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFO2FBQ3BFO1NBQ0osQ0FBQztJQUNOLENBQUM7d0dBaEJRLFdBQVc7eUdBQVgsV0FBVyxpQkFicEIsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsdUJBQXVCLGFBTnZCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLHVCQUF1Qjt5R0FPZCxXQUFXOzs0RkFBWCxXQUFXO2tCQUp2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxnQkFBZ0I7b0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzVCOztBQW9CRCxPQUFPLEVBQ0gsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsdUJBQXVCLEdBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0UG9pbnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRYQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFlBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WkF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WkF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hjaGFydHNTdGF0aWMgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJ1xuXG5jb25zdCBDSEFSVF9ESVJFQ1RJVkVTOiBhbnlbXSA9IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogQ0hBUlRfRElSRUNUSVZFUyxcbiAgICBleHBvcnRzOiBDSEFSVF9ESVJFQ1RJVkVTXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChoaWdoY2hhcnRzU3RhdGljOiBIaWdoY2hhcnRzU3RhdGljLCAuLi5oaWdoY2hhcnRzTW9kdWxlczogQXJyYXk8RnVuY3Rpb24+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDaGFydE1vZHVsZT4ge1xuICAgICAgICAvLyBQbHVnIGhpZ2hjaGFydHMgbW9kdWxlc1xuICAgICAgICBoaWdoY2hhcnRzTW9kdWxlcy5mb3JFYWNoKChsb2FkZWRNb2R1bGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGlnaGNoYXJ0c01vZHVsZSA9IGxvYWRlZE1vZHVsZSAmJiBsb2FkZWRNb2R1bGUuZGVmYXVsdCA/IGxvYWRlZE1vZHVsZS5kZWZhdWx0IDogbG9hZGVkTW9kdWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoaWdoY2hhcnRzTW9kdWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaGlnaGNoYXJ0c01vZHVsZShoaWdoY2hhcnRzU3RhdGljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBDaGFydE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSGlnaGNoYXJ0c1N0YXRpYywgdXNlRmFjdG9yeTogKCkgPT4gaGlnaGNoYXJ0c1N0YXRpYyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0U2VyaWVzQ29tcG9uZW50LFxuICAgIENoYXJ0UG9pbnRDb21wb25lbnQsXG4gICAgQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFlBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WkF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQsXG59O1xuIl19