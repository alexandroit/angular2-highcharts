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
  // Highcharts 9 new features
  area3dOptions: Object;
  touchZoomOptions: Object;
  hlcOptions: Object;
  nodeOffsetsOptions: Object;
  annotationCropOptions: Object;
  // Highcharts 10 and 11 new features
  drilldownBreadcrumbsOptions: Object;
  alignThresholdsOptions: Object;
  organizationLayoutOptions: Object;
  arcDiagramOptions: Object;
  treegraphOptions: Object;
  minorTicksOptions: Object;
  // Highcharts 12 new features
  pointAndFigureOptions: Object;
  renkoOptions: Object;
  localeOptions: Object;
  humanDatesOptions: Object;

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
    this.area3dOptions = this.makeArea3dOptions();
    this.touchZoomOptions = this.makeTouchZoomOptions();
    this.hlcOptions = this.makeHlcOptions();
    this.nodeOffsetsOptions = this.makeNodeOffsetsOptions();
    this.annotationCropOptions = this.makeAnnotationCropOptions();
    this.drilldownBreadcrumbsOptions = this.makeDrilldownBreadcrumbsOptions();
    this.alignThresholdsOptions = this.makeAlignThresholdsOptions();
    this.organizationLayoutOptions = this.makeOrganizationLayoutOptions();
    this.arcDiagramOptions = this.makeArcDiagramOptions();
    this.treegraphOptions = this.makeTreegraphOptions();
    this.minorTicksOptions = this.makeMinorTicksOptions();
    this.pointAndFigureOptions = this.makePointAndFigureOptions();
    this.renkoOptions = this.makeRenkoOptions();
    this.localeOptions = this.makeLocaleOptions();
    this.humanDatesOptions = this.makeHumanDatesOptions();

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
      subtitle: { text: 'Minimal usage through the options input.' },
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

  // Highcharts 9: Area series in 3D charts
  private makeArea3dOptions() {
    return {
      chart: {
        type: 'area',
        margin: 70,
        options3d: { enabled: true, alpha: 18, beta: 28, depth: 120, viewDistance: 24 }
      },
      title: { text: '3D area chart — Highcharts 9' },
      subtitle: { text: 'Highcharts 9 added support for area series inside 3D charts.' },
      xAxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
      yAxis: { title: { text: 'Adoption score' } },
      plotOptions: {
        area: {
          depth: 36,
          marker: { enabled: false }
        }
      },
      series: [
        { type: 'area', name: 'Platform', data: [34, 52, 71, 86] },
        { type: 'area', name: 'API', data: [22, 38, 56, 74] }
      ]
    };
  }

  // Highcharts 9: Single-touch zoom
  private makeTouchZoomOptions() {
    return {
      chart: {
        zoomType: 'x',
        zoomBySingleTouch: true
      },
      title: { text: 'Single-touch zoom — Highcharts 9' },
      subtitle: { text: 'Touch users can zoom the X axis with one finger instead of a two-finger gesture.' },
      xAxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
      },
      yAxis: { title: { text: 'Requests per minute' } },
      series: [{
        type: 'line',
        name: 'Traffic',
        data: [14, 18, 27, 33, 45, 42, 55, 61]
      }]
    };
  }

  // Highcharts 9: HLC stock series
  private makeHlcOptions() {
    return {
      rangeSelector: { selected: 1 },
      title: { text: 'HLC series — Highcharts 9' },
      subtitle: { text: 'The Highstock bundle now includes the hlc series type.' },
      yAxis: { title: { text: 'Price' } },
      series: [{
        type: 'hlc',
        name: 'Service index',
        data: [
          [Date.UTC(2024, 0, 2), 128, 119, 124],
          [Date.UTC(2024, 0, 3), 131, 121, 127],
          [Date.UTC(2024, 0, 4), 133, 125, 129],
          [Date.UTC(2024, 0, 5), 136, 127, 130],
          [Date.UTC(2024, 0, 8), 134, 126, 132],
          [Date.UTC(2024, 0, 9), 138, 129, 136],
          [Date.UTC(2024, 0, 10), 141, 133, 138],
          [Date.UTC(2024, 0, 11), 143, 136, 140]
        ],
        tooltip: { valueDecimals: 2 }
      }]
    };
  }

  // Highcharts 9: Node offsets for organization charts
  private makeNodeOffsetsOptions() {
    return {
      title: { text: 'Node offsets — Highcharts 9' },
      subtitle: { text: 'Organization chart nodes can be nudged with offsetHorizontal and offsetVertical.' },
      series: [{
        type: 'organization',
        name: 'Delivery pod',
        keys: ['from', 'to'],
        data: [
          ['Platform lead', 'Product ops'],
          ['Platform lead', 'Frontend'],
          ['Platform lead', 'Backend'],
          ['Platform lead', 'Data'],
          ['Product ops', 'Research']
        ],
        nodes: [
          { id: 'Platform lead', title: 'Lead', name: 'Jordan Hale' },
          { id: 'Product ops', title: 'Ops', name: 'Sam Rivera', offsetHorizontal: 26 },
          { id: 'Frontend', title: 'Frontend', name: 'Alex Morgan', offsetVertical: -18 },
          { id: 'Backend', title: 'Backend', name: 'Taylor Cruz', offsetVertical: 14 },
          { id: 'Data', title: 'Data', name: 'Quinn Patel', offsetHorizontal: -12 },
          { id: 'Research', title: 'Research', name: 'Riley Chen', offsetHorizontal: 18, offsetVertical: 12 }
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

  // Highcharts 9: Annotation crop control
  private makeAnnotationCropOptions() {
    return {
      title: { text: 'Annotations crop — Highcharts 9' },
      subtitle: { text: 'Annotations can deliberately render outside the plot area when crop is disabled.' },
      xAxis: {
        min: 0,
        max: 4,
        tickInterval: 1
      },
      yAxis: {
        min: 0,
        max: 80,
        title: { text: 'Requests per minute' }
      },
      annotations: [{
        crop: false,
        labelOptions: {
          backgroundColor: 'rgba(15, 33, 55, 0.92)',
          borderColor: '#0d5c9e',
          style: { color: '#ffffff' }
        },
        labels: [{
          point: { xAxis: 0, yAxis: 0, x: 4.45, y: 74 },
          text: 'Outside the plot area'
        }]
      }],
      series: [{
        type: 'line',
        name: 'Capacity',
        data: [18, 29, 41, 57, 69]
      }]
    };
  }

  // Highcharts 10: Drilldown breadcrumbs
  private makeDrilldownBreadcrumbsOptions() {
    return {
      chart: { type: 'column' },
      title: { text: 'Drilldown breadcrumbs — Highcharts 10' },
      subtitle: { text: 'Drilldown charts can keep hierarchical breadcrumbs visible while navigating.' },
      xAxis: { type: 'category' },
      legend: { enabled: false },
      plotOptions: {
        series: {
          borderRadius: 4
        }
      },
      series: [{
        type: 'column',
        name: 'Capabilities',
        colorByPoint: true,
        data: [
          { name: 'Platform', y: 14, drilldown: 'platform' },
          { name: 'Delivery', y: 11, drilldown: 'delivery' },
          { name: 'Insights', y: 9, drilldown: 'insights' }
        ]
      }],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            id: 'platform',
            type: 'column',
            name: 'Platform',
            data: [
              ['Auth', 5],
              ['Search', 4],
              ['Billing', 5]
            ]
          },
          {
            id: 'delivery',
            type: 'column',
            name: 'Delivery',
            data: [
              ['CI', 4],
              ['QA', 3],
              ['Releases', 4]
            ]
          },
          {
            id: 'insights',
            type: 'column',
            name: 'Insights',
            data: [
              ['Dashboards', 4],
              ['Alerts', 2],
              ['Forecasting', 3]
            ]
          }
        ]
      }
    };
  }

  // Highcharts 10: Align thresholds across multiple axes
  private makeAlignThresholdsOptions() {
    return {
      chart: {
        alignThresholds: true
      },
      title: { text: 'Align thresholds — Highcharts 10' },
      subtitle: { text: 'Separate Y axes can align around their own threshold values for clearer comparison.' },
      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      },
      yAxis: [
        {
          title: { text: 'Margin delta' },
          min: -20,
          max: 40,
          tickInterval: 10
        },
        {
          title: { text: 'Revenue target' },
          opposite: true,
          min: 80,
          max: 200,
          tickInterval: 20
        }
      ],
      series: [
        {
          type: 'column',
          name: 'Margin delta',
          threshold: 0,
          data: [-8, 6, 14, 19, 11]
        },
        {
          type: 'spline',
          name: 'Revenue target',
          yAxis: 1,
          threshold: 120,
          data: [106, 124, 138, 151, 167]
        }
      ]
    };
  }

  // Highcharts 10: Organization layout controls
  private makeOrganizationLayoutOptions() {
    return {
      title: { text: 'Organization layout controls — Highcharts 10' },
      subtitle: { text: 'Deep organization charts gained hangingIndentTranslation and minNodeLength controls.' },
      series: [{
        type: 'organization',
        name: 'Support model',
        keys: ['from', 'to'],
        hangingIndent: 24,
        hangingIndentTranslation: 'cumulative',
        minNodeLength: 20,
        data: [
          ['VP Support', 'Support lead'],
          ['Support lead', 'EMEA'],
          ['Support lead', 'Americas'],
          ['EMEA', 'Tier 1'],
          ['EMEA', 'Tier 2'],
          ['Americas', 'Tier 1'],
          ['Americas', 'Tier 2'],
          ['Tier 2', 'Escalations']
        ],
        nodes: [
          { id: 'VP Support', title: 'Director', name: 'Casey Hall' },
          { id: 'Support lead', title: 'Lead', name: 'Morgan Diaz' },
          { id: 'EMEA', title: 'Region', name: 'EMEA' },
          { id: 'Americas', title: 'Region', name: 'Americas' },
          { id: 'Tier 1', title: 'Level', name: 'Tier 1' },
          { id: 'Tier 2', title: 'Level', name: 'Tier 2' },
          { id: 'Escalations', title: 'Path', name: 'Escalations' }
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

  // Highcharts 10: Arc diagram
  private makeArcDiagramOptions() {
    return {
      title: { text: 'Arc diagram — Highcharts 10' },
      subtitle: { text: 'Compact relationship flows can now render as arcs across a single axis.' },
      series: [{
        type: 'arcdiagram',
        name: 'Flow',
        keys: ['from', 'to', 'weight'],
        linkWeight: 1,
        centeredLinks: true,
        dataLabels: {
          color: '#102033'
        },
        data: [
          ['Discover', 'Plan', 2],
          ['Plan', 'Build', 5],
          ['Build', 'Validate', 4],
          ['Validate', 'Launch', 3],
          ['Build', 'Launch', 2]
        ]
      }]
    };
  }

  // Highcharts 11: Treegraph series
  private makeTreegraphOptions() {
    return {
      title: { text: 'Treegraph — Highcharts 11' },
      subtitle: { text: 'Tree structures can render natively with collapsible, connector-based hierarchy charts.' },
      series: [{
        type: 'treegraph',
        marker: {
          symbol: 'circle',
          radius: 14
        },
        dataLabels: {
          style: {
            textOutline: 'none',
            fontWeight: '600'
          }
        },
        data: [
          { id: 'platform', name: 'Platform' },
          { id: 'api', parent: 'platform', name: 'API' },
          { id: 'web', parent: 'platform', name: 'Web' },
          { id: 'mobile', parent: 'platform', name: 'Mobile' },
          { id: 'auth', parent: 'api', name: 'Auth' },
          { id: 'search', parent: 'api', name: 'Search' },
          { id: 'design-system', parent: 'web', name: 'Design system' },
          { id: 'checkout', parent: 'web', name: 'Checkout' },
          { id: 'ios', parent: 'mobile', name: 'iOS' },
          { id: 'android', parent: 'mobile', name: 'Android' }
        ]
      }]
    };
  }

  // Highcharts 11: minorTicksPerMajor on axes
  private makeMinorTicksOptions() {
    return {
      title: { text: 'Minor ticks per major — Highcharts 11' },
      subtitle: { text: 'Axes can subdivide each major interval to improve reading precision.' },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        min: 0,
        max: 100,
        tickInterval: 20,
        minorTicksPerMajor: 4,
        title: { text: 'Utilization' }
      },
      series: [{
        type: 'line',
        name: 'Utilization',
        data: [18, 33, 47, 58, 74, 83]
      }]
    };
  }

  // Highcharts 12: Point and Figure stock series
  private makePointAndFigureOptions() {
    return {
      rangeSelector: { selected: 1 },
      title: { text: 'Point and figure — Highcharts 12' },
      subtitle: { text: 'Point and figure transforms closing prices into trend columns without changing the wrapper API.' },
      series: [{
        type: 'pointandfigure',
        name: 'PnF close',
        data: this.generateTimeSeries(),
        boxSize: '2%',
        reversalAmount: 3
      }]
    };
  }

  // Highcharts 12: Renko stock series
  private makeRenkoOptions() {
    return {
      rangeSelector: { selected: 1 },
      title: { text: 'Renko — Highcharts 12' },
      subtitle: { text: 'Renko bricks focus on price movement size instead of drawing every time interval.' },
      series: [{
        type: 'renko',
        name: 'Renko close',
        data: this.generateTimeSeries(),
        boxSize: 3
      }]
    };
  }

  // Highcharts 12: locale-aware number and date formatting
  private makeLocaleOptions() {
    return {
      lang: {
        locale: 'de-DE'
      },
      title: { text: 'Locale-aware formatting — Highcharts 12' },
      subtitle: { text: 'Dates and numbers can follow the selected locale without custom formatter functions.' },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%[eb]}'
        }
      },
      yAxis: {
        title: { text: 'Revenue' },
        labels: {
          format: '{value:,.0f} €'
        }
      },
      tooltip: {
        xDateFormat: '%[AebY]',
        valueDecimals: 2,
        valueSuffix: ' €'
      },
      series: [{
        type: 'line',
        name: 'Revenue',
        data: this.generateTimeSeries().slice(0, 12).map(([x, y]) => [x, Math.round(y * 1250)])
      }]
    };
  }

  // Highcharts 12: ISO-style string dates
  private makeHumanDatesOptions() {
    return {
      title: { text: 'Human-friendly dates — Highcharts 12' },
      subtitle: { text: 'Series data can use readable ISO date strings instead of manual Date.UTC calls.' },
      xAxis: {
        type: 'datetime'
      },
      tooltip: {
        xDateFormat: '%Y-%m-%d'
      },
      series: [{
        type: 'line',
        name: 'Deployments',
        data: [
          ['2025-01-06', 3],
          ['2025-01-13', 5],
          ['2025-01-20', 4],
          ['2025-01-27', 6],
          ['2025-02-03', 7],
          ['2025-02-10', 6],
          ['2025-02-17', 8]
        ]
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
