import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ── Chart options for each demo ───────────────────────────────────────────
  basicOptions: Object;
  stockOptions: Object;
  eventOptions: Object;
  dynamicOptions: Object;
  zAxisOptions: Object;
  colorAxisOptions: Object;
  moduleOptions: Object;
  // Highcharts 6 new features
  bulletOptions: Object;
  xrangeOptions: Object;
  // Highcharts 7 new features
  timelineOptions: Object;
  vennOptions: Object;
  organizationOptions: Object;
  dependencyWheelOptions: Object;
  // Highcharts 8 new features
  radialBarOptions: Object;
  sortedBarOptions: Object;
  markerClusterOptions: Object;

  // ── Internal state ────────────────────────────────────────────────────────
  logs: string[] = [];
  private eventChart: any;
  private dynamicChart: any;
  private zAxisChart: any;
  private colorAxisChart: any;
  private module3dEnabled: boolean = true;

  constructor() {
    // Set a global colour palette before building any chart options
    Highcharts.setOptions({
      colors: ['#0d5c9e', '#30a46c', '#d26a2a', '#b43f3f', '#6d52b5']
    });

    this.basicOptions     = this.makeBasicOptions();
    this.stockOptions     = this.makeStockOptions();
    this.eventOptions     = this.makeEventOptions();
    this.dynamicOptions   = this.makeDynamicOptions();
    this.zAxisOptions     = this.makeZAxisOptions();
    this.colorAxisOptions = this.makeColorAxisOptions();
    this.moduleOptions    = this.makeModuleOptions(true);
    this.bulletOptions    = this.makeBulletOptions();
    this.xrangeOptions    = this.makeXRangeOptions();
    this.timelineOptions  = this.makeTimelineOptions();
    this.vennOptions      = this.makeVennOptions();
    this.organizationOptions = this.makeOrganizationOptions();
    this.dependencyWheelOptions = this.makeDependencyWheelOptions();
    this.radialBarOptions = this.makeRadialBarOptions();
    this.sortedBarOptions = this.makeSortedBarOptions();
    this.markerClusterOptions = this.makeMarkerClusterOptions();

    this.log('Demo loaded successfully.');
  }

  // ── Instance capture handlers ─────────────────────────────────────────────
  onEventLoad(e: any)     { this.eventChart    = e.context; this.log('Event-chart instance ready.'); }
  onDynamicLoad(e: any)   { this.dynamicChart  = e.context; this.log('Dynamic-chart instance ready.'); }
  onZAxisLoad(e: any)     { this.zAxisChart    = e.context; this.log('zAxis-chart instance ready.'); }
  onColorAxisLoad(e: any) { this.colorAxisChart = e.context; this.log('colorAxis-chart instance ready.'); }

  // ── Wrapper event handlers ────────────────────────────────────────────────
  onSelection(e: any) {
    if (e.originalEvent && e.originalEvent.xAxis && e.originalEvent.xAxis.length) {
      const ax = e.originalEvent.xAxis[0];
      this.log('Selection: ' + ax.min.toFixed(2) + ' to ' + ax.max.toFixed(2));
    }
  }
  onSeriesHover(e: any)  { this.log('Series hover: ' + e.context.name); }
  onPointSelect(e: any)  { this.log('Point selected: ' + e.context.category + ' = ' + e.context.y); }
  onXExtremes(e: any)    { this._logExtremes('X', e.context); }
  onYExtremes(e: any)    { this._logExtremes('Y', e.context); }
  onZExtremes(e: any)    { this._logExtremes('Z', e.context); }
  onColorExtremes(e: any) { this._logExtremes('Color', e.context); }

  // ── User actions ──────────────────────────────────────────────────────────
  zoomEventX() { if (this.eventChart) { this.eventChart.xAxis[0].setExtremes(1, 4); } }
  zoomEventY() { if (this.eventChart) { this.eventChart.yAxis[0].setExtremes(20, 90); } }
  resetEventAxes() {
    if (this.eventChart) {
      this.eventChart.xAxis[0].setExtremes(null, null);
      this.eventChart.yAxis[0].setExtremes(null, null);
    }
    this.log('Axes reset.');
  }

  addPoint() {
    if (!this.dynamicChart) { return; }
    const val = Math.round((Math.random() * 14 + 4) * 10) / 10;
    this.dynamicChart.series[0].addPoint(val, true, false);
    this.log('Point added: ' + val);
  }
  removePoint() {
    if (!this.dynamicChart || !this.dynamicChart.series[0].data.length) { return; }
    this.dynamicChart.series[0].data[0].remove(false);
    this.dynamicChart.redraw();
    this.log('First point removed.');
  }
  randomize() {
    if (!this.dynamicChart) { return; }
    const next: number[] = [];
    for (let i = 0; i < 6; i++) { next.push(Math.round((Math.random() * 18 + 2) * 10) / 10); }
    this.dynamicChart.series[0].setData(next, true);
    this.log('Series randomised: ' + next.join(', '));
  }
  renameChart() {
    if (!this.dynamicChart) { return; }
    const label = 'Updated at ' + this.clock();
    this.dynamicChart.setTitle({ text: label });
    this.log('Title set to "' + label + '".');
  }

  zoomZ()    { if (this.zAxisChart) { this.zAxisChart.zAxis[0].setExtremes(2, 8); } }
  resetZ()   { if (this.zAxisChart) { this.zAxisChart.zAxis[0].setExtremes(null, null); } this.log('zAxis reset.'); }

  zoomColor()  { if (this.colorAxisChart) { this.colorAxisChart.colorAxis[0].setExtremes(2, 7); } }
  resetColor() { if (this.colorAxisChart) { this.colorAxisChart.colorAxis[0].setExtremes(null, null); } this.log('colorAxis reset.'); }

  toggle3d() {
    this.module3dEnabled = !this.module3dEnabled;
    this.moduleOptions = this.makeModuleOptions(this.module3dEnabled);
    this.log('3D ' + (this.module3dEnabled ? 'enabled' : 'disabled') + '.');
  }

  clearLog() { this.logs = []; this.log('Log cleared.'); }

  // ── Options factories ─────────────────────────────────────────────────────
  private makeBasicOptions() {
    return {
      title: { text: 'Basic chart' },
      subtitle: { text: 'Minimal usage: <chart [options]="opts"></chart>' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { title: { text: 'Score' } },
      series: [
        { name: 'Alpha', type: 'line', data: [29.9, 41.2, 51.8, 63.4, 72.1, 84.6] },
        { name: 'Beta',  type: 'line', data: [18.2, 24.5, 39.1, 44.4, 60.3, 67.9] }
      ]
    };
  }

  private makeStockOptions() {
    return {
      rangeSelector: { selected: 1 },
      title: { text: 'StockChart — time series' },
      series: [{
        name: 'Asset',
        type: 'line',
        data: this.generateTimeSeries(),
        tooltip: { valueDecimals: 2 }
      }]
    };
  }

  private makeEventOptions() {
    return {
      chart: { zoomType: 'xy' },
      title: { text: 'Event bridge' },
      subtitle: { text: 'Drag to select, hover a series, or click a point' },
      xAxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { title: { text: 'Visits' } },
      plotOptions: { series: { allowPointSelect: true } },
      series: [{ name: 'Visits', type: 'column', data: [13, 18, 42, 68, 81, 55, 39] }]
    };
  }

  private makeDynamicOptions() {
    return {
      title: { text: 'Native instance access' },
      subtitle: { text: 'Use (load) to capture the Highcharts object' },
      series: [{ type: 'spline', data: [2, 3, 5, 8, 13, 21] }]
    };
  }

  private makeZAxisOptions() {
    return {
      chart: {
        type: 'scatter',
        margin: 70,
        options3d: { enabled: true, alpha: 10, beta: 28, depth: 280, viewDistance: 5 }
      },
      title: { text: '<zAxis> wrapper' },
      subtitle: { text: 'Requires highcharts-3d registered in forRoot' },
      xAxis: { min: 0, max: 10 },
      yAxis: { min: 0, max: 10 },
      zAxis: { min: 0, max: 10, title: { text: 'Depth' } },
      plotOptions: { scatter: { width: 10, height: 10, depth: 10 } },
      series: [{
        name: '3D points', type: 'scatter',
        data: [[1,6,2],[2,4,5],[3,8,3],[5,3,7],[7,2,9],[8,7,6],[9,5,1]]
      }]
    };
  }

  private makeColorAxisOptions() {
    return {
      chart: { type: 'heatmap' },
      title: { text: '<colorAxis> wrapper' },
      subtitle: { text: 'Requires heatmap module registered in forRoot' },
      xAxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      yAxis: { categories: ['Morning', 'Noon', 'Evening', 'Night'], title: null },
      colorAxis: { min: 0, minColor: '#f3f7fb', maxColor: '#1f5ba7' },
      legend: { align: 'right', layout: 'vertical', margin: 0, verticalAlign: 'top', y: 25, symbolHeight: 200 },
      series: [{
        borderWidth: 1, type: 'heatmap',
        data: [
          [0,0,2],[1,0,4],[2,0,5],[3,0,7],[4,0,8],
          [0,1,1],[1,1,3],[2,1,6],[3,1,8],[4,1,9],
          [0,2,0],[1,2,2],[2,2,5],[3,2,7],[4,2,6],
          [0,3,1],[1,3,2],[2,3,4],[3,3,5],[4,3,7]
        ]
      }]
    };
  }

  private makeModuleOptions(enabled: boolean) {
    return {
      title: { text: enabled ? '3D column — module active' : '2D column — module inactive' },
      subtitle: { text: 'Reassign this.moduleOptions to trigger Angular change detection' },
      chart: { type: 'column', margin: 70, options3d: { enabled: enabled, alpha: 12, beta: 18, depth: 48 } },
      plotOptions: { column: { depth: enabled ? 24 : 0 } },
      xAxis: { categories: ['North', 'South', 'East', 'West'] },
      series: [{ name: 'Orders', type: 'column', data: [29.9, 71.5, 46.4, 58.2] }]
    };
  }

  // ── Highcharts 6: Bullet chart ────────────────────────────────────────────
  private makeBulletOptions() {
    return {
      chart: { type: 'bullet', inverted: true, marginLeft: 135 },
      title: { text: 'Bullet chart — Highcharts 6' },
      subtitle: { text: 'Actual vs target vs qualitative ranges. Requires highcharts/modules/bullet.' },
      legend: { enabled: false },
      xAxis: {
        categories: ['Revenue', 'Profit', 'Customer sat.', 'New accounts']
      },
      yAxis: {
        gridLineWidth: 0,
        plotBands: [
          { from: 0,   to: 150, color: '#d9eaf7' },
          { from: 150, to: 225, color: '#b8d4ed' },
          { from: 225, to: 300, color: '#7fb0db' }
        ],
        title: null
      },
      plotOptions: {
        series: {
          pointPadding: 0.25,
          borderWidth: 0,
          targetOptions: { width: '200%' }
        }
      },
      series: [{
        type: 'bullet',
        data: [
          { y: 194, target: 200 },
          { y: 83,  target: 75  },
          { y: 72,  target: 68  },
          { y: 31,  target: 40  }
        ]
      }]
    };
  }

  // ── Highcharts 6: X-Range chart ───────────────────────────────────────────
  private makeXRangeOptions() {
    return {
      chart: { type: 'xrange' },
      title: { text: 'X-Range chart — Highcharts 6' },
      subtitle: { text: 'Horizontal bars spanning a range on the X axis. Requires highcharts/modules/xrange.' },
      xAxis: {
        type: 'datetime',
        min: Date.UTC(2024, 10, 20),
        max: Date.UTC(2024, 11, 31)
      },
      yAxis: {
        title: { text: '' },
        categories: ['Design', 'Development', 'Testing', 'Deployment'],
        reversed: true
      },
      series: [{
        name: 'Project plan',
        type: 'xrange',
        pointWidth: 20,
        data: [
          { x: Date.UTC(2024, 10, 21), x2: Date.UTC(2024, 10, 28), y: 0 },
          { x: Date.UTC(2024, 10, 25), x2: Date.UTC(2024, 11, 10), y: 1 },
          { x: Date.UTC(2024, 11,  8), x2: Date.UTC(2024, 11, 18), y: 2 },
          { x: Date.UTC(2024, 11, 16), x2: Date.UTC(2024, 11, 24), y: 3 }
        ]
      }]
    };
  }

  // Highcharts 7: Timeline chart
  private makeTimelineOptions() {
    return {
      chart: { type: 'timeline' },
      title: { text: 'Timeline chart — Highcharts 7' },
      subtitle: { text: 'Chronological milestones using highcharts/modules/timeline.' },
      xAxis: { visible: false },
      yAxis: { visible: false },
      legend: { enabled: false },
      series: [{
        type: 'timeline',
        data: [
          { x: Date.UTC(2024, 0, 15), name: 'Discovery', label: 'Research and concept approval' },
          { x: Date.UTC(2024, 1, 12), name: 'Prototype', label: 'Interactive prototype reviewed' },
          { x: Date.UTC(2024, 2, 18), name: 'Launch', label: 'Feature released to customers' },
          { x: Date.UTC(2024, 3, 9),  name: 'Scale', label: 'Second rollout phase started' }
        ]
      }]
    };
  }

  // Highcharts 7: Venn diagram
  private makeVennOptions() {
    return {
      title: { text: 'Venn diagram — Highcharts 7' },
      subtitle: { text: 'Overlap between product capabilities. Requires highcharts/modules/venn.' },
      series: [{
        type: 'venn',
        data: [
          { sets: ['Angular'], value: 8 },
          { sets: ['Highcharts'], value: 8 },
          { sets: ['TypeScript'], value: 7 },
          { sets: ['Angular', 'Highcharts'], value: 4 },
          { sets: ['Angular', 'TypeScript'], value: 5 },
          { sets: ['Highcharts', 'TypeScript'], value: 3 },
          { sets: ['Angular', 'Highcharts', 'TypeScript'], value: 2 }
        ]
      }]
    };
  }

  // Highcharts 7: Organization chart
  private makeOrganizationOptions() {
    return {
      title: { text: 'Organization chart — Highcharts 7' },
      subtitle: { text: 'Hierarchical relationships built on the sankey engine.' },
      series: [{
        type: 'organization',
        name: 'Delivery team',
        keys: ['from', 'to'],
        data: [
          ['Project lead', 'Product owner'],
          ['Project lead', 'Engineering lead'],
          ['Engineering lead', 'Frontend engineer'],
          ['Engineering lead', 'Backend engineer'],
          ['Product owner', 'UX designer']
        ],
        nodes: [
          { id: 'Project lead', title: 'Lead', name: 'Morgan Lee' },
          { id: 'Product owner', title: 'Product', name: 'Riley Chen' },
          { id: 'Engineering lead', title: 'Engineering', name: 'Jordan Patel' },
          { id: 'Frontend engineer', title: 'Frontend', name: 'Taylor Kim' },
          { id: 'Backend engineer', title: 'Backend', name: 'Avery Cruz' },
          { id: 'UX designer', title: 'Design', name: 'Quinn Brooks' }
        ],
        colorByPoint: false,
        color: '#4f8fba',
        borderColor: '#1f5ba7',
        dataLabels: {
          color: '#ffffff'
        }
      }]
    };
  }

  // Highcharts 7: Dependency wheel
  private makeDependencyWheelOptions() {
    return {
      title: { text: 'Dependency wheel — Highcharts 7' },
      subtitle: { text: 'Flow relationships between application layers.' },
      series: [{
        type: 'dependencywheel',
        name: 'Dependencies',
        keys: ['from', 'to', 'weight'],
        data: [
          ['UI', 'API', 3],
          ['API', 'Database', 5],
          ['API', 'Auth', 2],
          ['Auth', 'Database', 1],
          ['Workers', 'API', 2],
          ['Workers', 'Database', 2]
        ],
        dataLabels: {
          color: '#102033'
        }
      }]
    };
  }

  // Highcharts 8: Radial bar chart
  private makeRadialBarOptions() {
    return {
      chart: { polar: true, inverted: true, type: 'column' },
      title: { text: 'Radial bar chart — Highcharts 8' },
      subtitle: { text: 'A radial presentation built with an inverted polar column chart.' },
      pane: { endAngle: 270, size: '85%', innerSize: '25%' },
      legend: { enabled: false },
      xAxis: {
        categories: ['Availability', 'Throughput', 'Quality', 'Automation'],
        lineWidth: 0,
        tickLength: 0
      },
      yAxis: {
        min: 0,
        max: 100,
        gridLineInterpolation: 'polygon',
        title: { text: '' }
      },
      plotOptions: {
        column: {
          pointPadding: 0.04,
          groupPadding: 0.05
        }
      },
      series: [{
        type: 'column',
        name: 'Score',
        data: [88, 74, 93, 67]
      }]
    };
  }

  // Highcharts 8: Data sorting
  private makeSortedBarOptions() {
    return {
      chart: { type: 'bar' },
      title: { text: 'Data sorting — Highcharts 8' },
      subtitle: { text: 'Series can sort category points automatically while preserving animation.' },
      xAxis: { type: 'category' },
      yAxis: { title: { text: 'Story points closed' } },
      legend: { enabled: false },
      series: [{
        type: 'bar',
        name: 'Completed',
        dataSorting: { enabled: true },
        data: [
          { name: 'Search', y: 12 },
          { name: 'Checkout', y: 31 },
          { name: 'Analytics', y: 18 },
          { name: 'Accounts', y: 26 },
          { name: 'Notifications', y: 9 }
        ]
      }]
    };
  }

  // Highcharts 8: Marker clusters
  private makeMarkerClusterOptions() {
    const data: Array<[number, number]> = [];
    for (let i = 0; i < 120; i++) {
      const x = (i % 12) * 8 + (i % 3);
      const y = Math.floor(i / 12) * 7 + (i % 5);
      data.push([x, y]);
    }

    return {
      chart: { type: 'scatter', zoomType: 'xy' },
      title: { text: 'Marker clusters — Highcharts 8' },
      subtitle: { text: 'Scatter points can be grouped visually with the marker-clusters module.' },
      xAxis: { title: { text: 'Longitude bucket' } },
      yAxis: { title: { text: 'Latitude bucket' } },
      legend: { enabled: false },
      plotOptions: {
        scatter: {
          cluster: {
            enabled: true,
            allowOverlap: false,
            layoutAlgorithm: {
              type: 'grid',
              gridSize: 40
            }
          }
        }
      },
      series: [{
        type: 'scatter',
        name: 'Events',
        data
      }]
    };
  }

  private generateTimeSeries() {
    const pts: Array<[number, number]> = [];
    let v = 96;
    const start = Date.UTC(2024, 0, 1);
    for (let i = 0; i < 90; i++) {
      v += Math.sin(i / 7) * 1.8 + (i % 5 === 0 ? 2.2 : -0.4);
      pts.push([start + i * 86400000, Math.round(v * 100) / 100]);
    }
    return pts;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  private _logExtremes(axis: string, ctx: any) {
    if (typeof ctx.min === 'number' && typeof ctx.max === 'number') {
      this.log(axis + ' extremes: ' + ctx.min.toFixed(2) + ' to ' + ctx.max.toFixed(2));
    }
  }

  private log(msg: string) {
    this.logs.unshift(this.clock() + '  ' + msg);
    this.logs = this.logs.slice(0, 16);
  }

  private clock() {
    const n = new Date();
    const p = (v: number) => v < 10 ? '0' + v : '' + v;
    return p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds());
  }
}
