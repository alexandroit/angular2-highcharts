import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
var ChartZAxisComponent = /** @class */ (function () {
    function ChartZAxisComponent() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
    tslib_1.__decorate([
        Output()
    ], ChartZAxisComponent.prototype, "afterBreaks", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartZAxisComponent.prototype, "afterSetExtremes", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartZAxisComponent.prototype, "pointBreak", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartZAxisComponent.prototype, "pointInBreak", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartZAxisComponent.prototype, "setExtremes", void 0);
    ChartZAxisComponent = tslib_1.__decorate([
        Directive({
            selector: 'zAxis'
        })
    ], ChartZAxisComponent);
    return ChartZAxisComponent;
}());
export { ChartZAxisComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRaQXhpc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRaQXhpc0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFO0lBSEE7UUFJYyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzNELENBQUM7SUFMYTtRQUFULE1BQU0sRUFBRTs0REFBOEM7SUFDN0M7UUFBVCxNQUFNLEVBQUU7aUVBQW1EO0lBQ2xEO1FBQVQsTUFBTSxFQUFFOzJEQUE2QztJQUM1QztRQUFULE1BQU0sRUFBRTs2REFBK0M7SUFDOUM7UUFBVCxNQUFNLEVBQUU7NERBQThDO0lBTDlDLG1CQUFtQjtRQUgvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztTQUNwQixDQUFDO09BQ1csbUJBQW1CLENBTS9CO0lBQUQsMEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd6QXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRaQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufVxuIl19