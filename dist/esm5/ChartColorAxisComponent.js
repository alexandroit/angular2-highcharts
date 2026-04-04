/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter } from '@angular/core';
var ChartColorAxisComponent = /** @class */ (function () {
    function ChartColorAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    ChartColorAxisComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'colorAxis'
                },] }
    ];
    ChartColorAxisComponent.propDecorators = {
        afterBreaks: [{ type: Output }],
        afterSetExtremes: [{ type: Output }],
        pointBreak: [{ type: Output }],
        pointInBreak: [{ type: Output }],
        setExtremes: [{ type: Output }]
    };
    return ChartColorAxisComponent;
}());
export { ChartColorAxisComponent };
if (false) {
    /** @type {?} */
    ChartColorAxisComponent.prototype.afterBreaks;
    /** @type {?} */
    ChartColorAxisComponent.prototype.afterSetExtremes;
    /** @type {?} */
    ChartColorAxisComponent.prototype.pointBreak;
    /** @type {?} */
    ChartColorAxisComponent.prototype.pointInBreak;
    /** @type {?} */
    ChartColorAxisComponent.prototype.setExtremes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb2xvckF4aXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmV2aXZlanMvYW5ndWxhcjItaGlnaGNoYXJ0cy8iLCJzb3VyY2VzIjpbIkNoYXJ0Q29sb3JBeGlzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEU7SUFBQTtRQUljLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2xELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0QsQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO2lCQUN4Qjs7OzhCQUVJLE1BQU07bUNBQ04sTUFBTTs2QkFDTixNQUFNOytCQUNOLE1BQU07OEJBQ04sTUFBTTs7SUFDWCw4QkFBQztDQUFBLEFBVEQsSUFTQztTQU5ZLHVCQUF1Qjs7O0lBQ2hDLDhDQUF1RDs7SUFDdkQsbURBQTREOztJQUM1RCw2Q0FBc0Q7O0lBQ3RELCtDQUF3RDs7SUFDeEQsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnY29sb3JBeGlzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbG9yQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufVxuIl19