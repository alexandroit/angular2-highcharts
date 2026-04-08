import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Step 1: import ChartModule from the installed npm package
import { ChartModule } from '@stackline/angular-highcharts';

// Step 2: import Highcharts (highstock bundle includes Chart + StockChart)
import * as Highcharts from 'highcharts/highstock';

// Step 3: load optional modules via require (UMD format)
declare var require: any;
const Highcharts3d: any = require('highcharts/highcharts-3d');
const HighchartsHeatmap: any = require('highcharts/modules/heatmap');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Step 4: register ChartModule with forRoot, passing Highcharts and any extra modules
    ChartModule.forRoot(
      Highcharts,
      Highcharts3d,
      HighchartsHeatmap
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
