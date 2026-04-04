import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Step 1: import ChartModule from the installed npm package
import { ChartModule } from '@revivejs/angular2-highcharts';

// Step 2: import Highcharts (highstock bundle includes Chart + StockChart)
import * as Highcharts from 'highcharts/highstock';

// Step 3: load optional modules via require (UMD format)
declare var require: any;
const Highcharts3d: any      = require('highcharts/highcharts-3d');
const HighchartsHeatmap: any = require('highcharts/modules/heatmap');
// Highcharts 6 new modules
const HighchartsBullet: any  = require('highcharts/modules/bullet');
const HighchartsXRange: any  = require('highcharts/modules/xrange');
// Highcharts 7 modules
const HighchartsSankey: any  = require('highcharts/modules/sankey');
const HighchartsOrganization: any = require('highcharts/modules/organization');
const HighchartsDependencyWheel: any = require('highcharts/modules/dependency-wheel');
const HighchartsVenn: any = require('highcharts/modules/venn');
const HighchartsTimeline: any = require('highcharts/modules/timeline');
// Highcharts 8 modules
const HighchartsMarkerClusters: any = require('highcharts/modules/marker-clusters');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Step 4: register ChartModule with forRoot, passing Highcharts and any extra modules
    ChartModule.forRoot(
      Highcharts,
      Highcharts3d,
      HighchartsHeatmap,
      HighchartsBullet,
      HighchartsXRange,
      HighchartsSankey,
      HighchartsOrganization,
      HighchartsDependencyWheel,
      HighchartsVenn,
      HighchartsTimeline,
      HighchartsMarkerClusters
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
