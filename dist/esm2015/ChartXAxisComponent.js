import { Directive, Output, EventEmitter } from '@angular/core';
export class ChartXAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartXAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'xAxis'
            },] }
];
ChartXAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRYQXhpc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGFydFhBeGlzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1oRSxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBSWMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUMzRCxDQUFDOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87YUFDcEI7OzswQkFFSSxNQUFNOytCQUNOLE1BQU07eUJBQ04sTUFBTTsyQkFDTixNQUFNOzBCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEV2ZW50IH0gZnJvbSAnLi9DaGFydEV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd4QXhpcydcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRYQXhpc0NvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIGFmdGVyQnJlYWtzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBwb2ludEluQnJlYWsgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNldEV4dHJlbWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xufSJdfQ==