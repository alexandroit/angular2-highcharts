import { Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartPointComponent } from './ChartPointComponent';
import * as i0 from "@angular/core";
export class ChartSeriesComponent {
    constructor() {
        this.click = new EventEmitter();
        this.afterAnimate = new EventEmitter();
        this.checkboxClick = new EventEmitter();
        this.hide = new EventEmitter();
        this.legendItemClick = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.show = new EventEmitter();
    }
}
ChartSeriesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ChartSeriesComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ChartSeriesComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: ChartSeriesComponent, selector: "series", outputs: { click: "click", afterAnimate: "afterAnimate", checkboxClick: "checkboxClick", hide: "hide", legendItemClick: "legendItemClick", mouseOver: "mouseOver", mouseOut: "mouseOut", show: "show" }, queries: [{ propertyName: "point", first: true, predicate: ChartPointComponent, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ChartSeriesComponent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'series'
                }]
        }], propDecorators: { point: [{
                type: ContentChild,
                args: [ChartPointComponent, { static: false }]
            }], click: [{
                type: Output
            }], afterAnimate: [{
                type: Output
            }], checkboxClick: [{
                type: Output
            }], hide: [{
                type: Output
            }], legendItemClick: [{
                type: Output
            }], mouseOver: [{
                type: Output
            }], mouseOut: [{
                type: Output
            }], show: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRTZXJpZXNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRTZXJpZXNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUtjLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM5QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2pELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzFDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0tBQ25EOztrSEFWWSxvQkFBb0I7c0dBQXBCLG9CQUFvQiwwUkFDZixtQkFBbUI7NEZBRHhCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtpQkFDckI7OEJBRXlELEtBQUs7c0JBQTFELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUMxQyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLFNBQVM7c0JBQWxCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0UG9pbnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnc2VyaWVzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFNlcmllc0NvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFBvaW50Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgcG9pbnQ6IENoYXJ0UG9pbnRDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlckFuaW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGNoZWNrYm94Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGxlZ2VuZEl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgbW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBtb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgc2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiJdfQ==