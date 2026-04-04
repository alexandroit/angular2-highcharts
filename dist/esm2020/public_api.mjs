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
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, declarations: [ChartComponent,
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
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                }]
        }] });
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTs7QUFFdEQsTUFBTSxnQkFBZ0IsR0FBVTtJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIsQ0FBQztBQU1GLE1BQU0sT0FBTyxXQUFXO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWtDLEVBQUUsR0FBRyxpQkFBa0M7UUFDcEYsMEJBQTBCO1FBQzFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtZQUM1QyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDcEcsSUFBSSxPQUFPLGdCQUFnQixLQUFLLFVBQVUsRUFBRTtnQkFDeEMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN0QztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7YUFDcEU7U0FDSixDQUFDO0lBQ04sQ0FBQzs7d0dBaEJRLFdBQVc7eUdBQVgsV0FBVyxpQkFicEIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCLGFBTnZCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1Qjt5R0FPZCxXQUFXOzJGQUFYLFdBQVc7a0JBSnZCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLGdCQUFnQjtvQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDNUI7O0FBb0JELE9BQU8sRUFDSCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsR0FDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRTZXJpZXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRQb2ludENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRQb2ludENvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFhBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WUF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRaQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRaQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb2xvckF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGNoYXJ0c1N0YXRpYyB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnXG5cbmNvbnN0IENIQVJUX0RJUkVDVElWRVM6IGFueVtdID0gW1xuICAgIENoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0U2VyaWVzQ29tcG9uZW50LFxuICAgIENoYXJ0UG9pbnRDb21wb25lbnQsXG4gICAgQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFlBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WkF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xvckF4aXNDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBDSEFSVF9ESVJFQ1RJVkVTLFxuICAgIGV4cG9ydHM6IENIQVJUX0RJUkVDVElWRVNcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGhpZ2hjaGFydHNTdGF0aWM6IEhpZ2hjaGFydHNTdGF0aWMsIC4uLmhpZ2hjaGFydHNNb2R1bGVzOiBBcnJheTxGdW5jdGlvbj4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENoYXJ0TW9kdWxlPiB7XG4gICAgICAgIC8vIFBsdWcgaGlnaGNoYXJ0cyBtb2R1bGVzXG4gICAgICAgIGhpZ2hjaGFydHNNb2R1bGVzLmZvckVhY2goKGxvYWRlZE1vZHVsZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaWdoY2hhcnRzTW9kdWxlID0gbG9hZGVkTW9kdWxlICYmIGxvYWRlZE1vZHVsZS5kZWZhdWx0ID8gbG9hZGVkTW9kdWxlLmRlZmF1bHQgOiBsb2FkZWRNb2R1bGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhpZ2hjaGFydHNNb2R1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBoaWdoY2hhcnRzTW9kdWxlKGhpZ2hjaGFydHNTdGF0aWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IENoYXJ0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIaWdoY2hhcnRzU3RhdGljLCB1c2VGYWN0b3J5OiAoKSA9PiBoaWdoY2hhcnRzU3RhdGljIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRTZXJpZXNDb21wb25lbnQsXG4gICAgQ2hhcnRQb2ludENvbXBvbmVudCxcbiAgICBDaGFydFhBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WUF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRaQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydENvbG9yQXhpc0NvbXBvbmVudCxcbn07XG4iXX0=