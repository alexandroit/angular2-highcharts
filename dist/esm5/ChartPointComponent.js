import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
var ChartPointComponent = /** @class */ (function () {
    function ChartPointComponent() {
        this.click = new EventEmitter();
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.update = new EventEmitter();
    }
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "click", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "remove", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "select", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "unselect", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "mouseOver", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "mouseOut", void 0);
    tslib_1.__decorate([
        Output()
    ], ChartPointComponent.prototype, "update", void 0);
    ChartPointComponent = tslib_1.__decorate([
        Directive({
            selector: 'point'
        })
    ], ChartPointComponent);
    return ChartPointComponent;
}());
export { ChartPointComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRQb2ludENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRQb2ludENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFO0lBSEE7UUFJYyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN2QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMxQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN0RCxDQUFDO0lBUGE7UUFBVCxNQUFNLEVBQUU7c0RBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFO3VEQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTt1REFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7eURBQTJDO0lBQzFDO1FBQVQsTUFBTSxFQUFFOzBEQUE0QztJQUMzQztRQUFULE1BQU0sRUFBRTt5REFBMkM7SUFDMUM7UUFBVCxNQUFNLEVBQUU7dURBQXlDO0lBUHpDLG1CQUFtQjtRQUgvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztTQUNwQixDQUFDO09BQ1csbUJBQW1CLENBUS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdwb2ludCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRQb2ludENvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iXX0=