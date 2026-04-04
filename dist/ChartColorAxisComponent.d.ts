import { EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';
import * as i0 from "@angular/core";
export declare class ChartColorAxisComponent {
    afterBreaks: EventEmitter<ChartEvent>;
    afterSetExtremes: EventEmitter<ChartEvent>;
    pointBreak: EventEmitter<ChartEvent>;
    pointInBreak: EventEmitter<ChartEvent>;
    setExtremes: EventEmitter<ChartEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartColorAxisComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChartColorAxisComponent, "colorAxis", never, {}, { "afterBreaks": "afterBreaks"; "afterSetExtremes": "afterSetExtremes"; "pointBreak": "pointBreak"; "pointInBreak": "pointInBreak"; "setExtremes": "setExtremes"; }, never, never, false>;
}
