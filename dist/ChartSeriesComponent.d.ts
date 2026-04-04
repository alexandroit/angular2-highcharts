import { EventEmitter } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartEvent } from './ChartEvent';
import * as i0 from "@angular/core";
export declare class ChartSeriesComponent {
    point: ChartPointComponent;
    click: EventEmitter<ChartEvent>;
    afterAnimate: EventEmitter<ChartEvent>;
    checkboxClick: EventEmitter<ChartEvent>;
    hide: EventEmitter<ChartEvent>;
    legendItemClick: EventEmitter<ChartEvent>;
    mouseOver: EventEmitter<ChartEvent>;
    mouseOut: EventEmitter<ChartEvent>;
    show: EventEmitter<ChartEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartSeriesComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartSeriesComponent, "series", never, {}, { "click": "click"; "afterAnimate": "afterAnimate"; "checkboxClick": "checkboxClick"; "hide": "hide"; "legendItemClick": "legendItemClick"; "mouseOver": "mouseOver"; "mouseOut": "mouseOut"; "show": "show"; }, ["point"]>;
}
