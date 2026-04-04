import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
let ChartXAxisComponent = class ChartXAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
};
tslib_1.__decorate([
    Output()
], ChartXAxisComponent.prototype, "afterBreaks", void 0);
tslib_1.__decorate([
    Output()
], ChartXAxisComponent.prototype, "afterSetExtremes", void 0);
tslib_1.__decorate([
    Output()
], ChartXAxisComponent.prototype, "pointBreak", void 0);
tslib_1.__decorate([
    Output()
], ChartXAxisComponent.prototype, "pointInBreak", void 0);
tslib_1.__decorate([
    Output()
], ChartXAxisComponent.prototype, "setExtremes", void 0);
ChartXAxisComponent = tslib_1.__decorate([
    Directive({
        selector: 'xAxis'
    })
], ChartXAxisComponent);
export { ChartXAxisComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRYQXhpc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRYQXhpc0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSGhDO1FBSWMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUMzRCxDQUFDO0NBQUEsQ0FBQTtBQUxhO0lBQVQsTUFBTSxFQUFFO3dEQUE4QztBQUM3QztJQUFULE1BQU0sRUFBRTs2REFBbUQ7QUFDbEQ7SUFBVCxNQUFNLEVBQUU7dURBQTZDO0FBQzVDO0lBQVQsTUFBTSxFQUFFO3lEQUErQztBQUM5QztJQUFULE1BQU0sRUFBRTt3REFBOEM7QUFMOUMsbUJBQW1CO0lBSC9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLENBQUM7R0FDVyxtQkFBbUIsQ0FNL0I7U0FOWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd4QXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRYQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSJdfQ==