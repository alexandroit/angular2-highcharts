import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartModule } from '@revivejs/angular-highcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule.forRoot(
        require('highcharts/highstock'),
        require('highcharts/modules/exporting')
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
