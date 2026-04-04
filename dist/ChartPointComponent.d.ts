import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
import * as i0 from "@angular/core";
export declare class ChartPointComponent {
    click: EventEmitter<ChartEvent>;
    remove: EventEmitter<ChartEvent>;
    select: EventEmitter<ChartEvent>;
    unselect: EventEmitter<ChartEvent>;
    mouseOver: EventEmitter<ChartEvent>;
    mouseOut: EventEmitter<ChartEvent>;
    update: EventEmitter<ChartEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartPointComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartPointComponent, "point", never, {}, { "click": "click"; "remove": "remove"; "select": "select"; "unselect": "unselect"; "mouseOver": "mouseOver"; "mouseOut": "mouseOut"; "update": "update"; }, never>;
}
