import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
let ChartPointComponent = class ChartPointComponent {
    constructor() {
        this.click = new EventEmitter();
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.update = new EventEmitter();
    }
};
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
export { ChartPointComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRQb2ludENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsiQ2hhcnRQb2ludENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSGhDO1FBSWMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDdEQsQ0FBQztDQUFBLENBQUE7QUFQYTtJQUFULE1BQU0sRUFBRTtrREFBd0M7QUFDdkM7SUFBVCxNQUFNLEVBQUU7bURBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFO21EQUF5QztBQUN4QztJQUFULE1BQU0sRUFBRTtxREFBMkM7QUFDMUM7SUFBVCxNQUFNLEVBQUU7c0RBQTRDO0FBQzNDO0lBQVQsTUFBTSxFQUFFO3FEQUEyQztBQUMxQztJQUFULE1BQU0sRUFBRTttREFBeUM7QUFQekMsbUJBQW1CO0lBSC9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0I7U0FSWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdwb2ludCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRQb2ludENvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn0iXX0=