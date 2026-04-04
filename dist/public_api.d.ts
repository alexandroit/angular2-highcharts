import { ModuleWithProviders } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsStatic } from './HighchartsService';
export declare class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic, ...highchartsModules: Array<Function>): ModuleWithProviders;
}
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent };
