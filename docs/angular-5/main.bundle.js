webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-height: 100vh;\n}\n\n/* ── Shell ─────────────────────────────────────────────────────────────── */\n\n.shell {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n}\n\n/* ── Hero ──────────────────────────────────────────────────────────────── */\n\n.hero {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(0, 1.8fr) minmax(320px, 1fr);\n      grid-template-columns: minmax(0, 1.8fr) minmax(320px, 1fr);\n  gap: 24px;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  margin-bottom: 28px;\n}\n\n.hero-card {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 28px;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-box-shadow: 0 16px 48px rgba(27, 66, 110, 0.11);\n          box-shadow: 0 16px 48px rgba(27, 66, 110, 0.11);\n}\n\n.badge {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #102033;\n  color: #fff;\n  font-size: 11px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\nh1 {\n  margin: 14px 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\nh2 {\n  margin: 0 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 26px;\n  font-weight: 700;\n}\n\nh3 {\n  margin: 0 0 8px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nh4 {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #0d5c9e;\n}\n\np {\n  margin: 0;\n  line-height: 1.65;\n  color: #364b63;\n}\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 0.9em;\n  background: rgba(13, 92, 158, 0.08);\n  padding: 1px 5px;\n  border-radius: 4px;\n}\n\npre {\n  margin: 10px 0;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #0f2137;\n  color: #dfeaf6;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 12.5px;\n  line-height: 1.6;\n  overflow-x: auto;\n  white-space: pre;\n}\n\npre.code {\n  background: #f0f5fa;\n  color: #1a2f47;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.feature-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(0, 1fr))[2];\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 16px;\n}\n\n.feature {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f2f7fb));\n  background: linear-gradient(180deg, #fff 0%, #f2f7fb 100%);\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  font-size: 13.5px;\n  line-height: 1.5;\n  color: #364b63;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 3px;\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n/* ── Steps (hero sidebar) ──────────────────────────────────────────────── */\n\n.hero-setup {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto auto 1fr auto;\n      grid-template-rows: auto auto 1fr auto;\n  gap: 16px;\n}\n\n.step {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 12px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.step > div {\n  min-width: 0;\n}\n\n.step-num {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #0d5c9e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.step strong {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 6px;\n  color: #102033;\n}\n\n.hero-setup pre {\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  font-size: 11.5px;\n  line-height: 1.55;\n}\n\n/* ── CTA ───────────────────────────────────────────────────────────────── */\n\n.cta-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 10px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 18px;\n}\n\n.btn {\n  display: inline-block;\n  padding: 10px 18px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 14px;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn.secondary {\n  background: #edf4fa;\n  color: #14324f;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\n/* ── Layout principal ──────────────────────────────────────────────────── */\n\n.layout {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(0, 1fr) 280px;\n      grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 24px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n}\n\n.panels {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 24px;\n}\n\n/* ── Panel ─────────────────────────────────────────────────────────────── */\n\n.panel {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 24px;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n          box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n}\n\n.panel-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n\n.demo-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  gap: 18px;\n}\n\n.demo-card {\n  min-width: 0;\n  padding: 18px;\n  border-radius: 18px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f7fafc));\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  overflow: hidden;\n}\n\n.demo-card.full {\n  grid-column: 1 / -1;\n}\n\n/* ── Chart frame ───────────────────────────────────────────────────────── */\n\n.chart-frame {\n  margin-top: 14px;\n  padding: 8px;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  min-height: 300px;\n  min-width: 0;\n  overflow: hidden;\n}\n\n/* ── Controls ──────────────────────────────────────────────────────────── */\n\n.controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 999px;\n  padding: 9px 15px;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  cursor: pointer;\n}\n\nbutton.secondary {\n  color: #14324f;\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\nbutton.ghost {\n  color: #14324f;\n  background: transparent;\n  border: 1px dashed rgba(20, 50, 79, 0.22);\n}\n\nbutton.small {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n\n/* ── Note ──────────────────────────────────────────────────────────────── */\n\n.note {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: #fff6e8;\n  color: #6f4a16;\n  border: 1px solid rgba(210, 128, 31, 0.16);\n  font-size: 13px;\n}\n\n/* ── Ref table panel ───────────────────────────────────────────────────── */\n\n.ref-panel .ref-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 18px;\n}\n\n.ref-card {\n  padding: 16px;\n  border-radius: 14px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f7fafc));\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.api-table th {\n  text-align: left;\n  padding: 6px 10px;\n  background: rgba(13, 92, 158, 0.06);\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.api-table td {\n  padding: 6px 10px;\n  border-top: 1px solid rgba(16, 32, 51, 0.06);\n  color: #364b63;\n  vertical-align: top;\n}\n\n.api-table td:first-child {\n  white-space: nowrap;\n}\n\n/* ── Log panel ─────────────────────────────────────────────────────────── */\n\n.log-panel {\n  position: sticky;\n  top: 20px;\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n          box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 10px;\n}\n\n.log-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.log-list {\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 6px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.log-entry {\n  padding: 9px 12px;\n  border-radius: 12px;\n  background: #f6f9fc;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  color: #27425f;\n  font-size: 12.5px;\n  line-height: 1.45;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  word-break: break-all;\n}\n\n/* ── Footer ────────────────────────────────────────────────────────────── */\n\n.footer {\n  margin-top: 28px;\n  padding: 20px 24px;\n  border-radius: 18px;\n  background: rgba(16, 32, 51, 0.92);\n  color: #c8d8ea;\n}\n\n/* ── Responsive ────────────────────────────────────────────────────────── */\n\n@media (max-width: 1100px) {\n  .hero,\n  .layout {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .log-panel {\n    position: static;\n    max-height: 360px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .layout {\n    -ms-grid-columns: minmax(0, 1fr) 260px;\n        grid-template-columns: minmax(0, 1fr) 260px;\n  }\n\n  .demo-card.full {\n    grid-column: auto;\n  }\n}\n\n@media (max-width: 760px) {\n  .demo-grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: auto;\n  }\n\n  h1 { font-size: 34px; }\n\n  .feature-grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 500px) {\n  .shell {\n    padding: 18px 12px 40px;\n  }\n\n  .hero-card, .panel, .log-panel {\n    padding: 16px;\n    border-radius: 16px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\">\n\n  <!-- ═══ HERO ═══════════════════════════════════════════════════════════════ -->\n  <section class=\"hero\">\n    <div class=\"hero-card hero-main\">\n      <span class=\"badge\">Angular 5 · Highcharts 6</span>\n      <h1>@revivejs/angular2-highcharts</h1>\n      <p>\n        A thin, unopinionated Angular wrapper for Highcharts, StockChart, 3D charts and heatmaps.\n        Install the package, register the module, and drop <code>&lt;chart&gt;</code> straight into your template.\n      </p>\n      <div class=\"feature-grid\">\n        <div class=\"feature\">\n          <strong>Zero config</strong>\n          Thin wrapper — the full Highcharts API remains directly accessible.\n        </div>\n        <div class=\"feature\">\n          <strong>Event bridge</strong>\n          Highcharts events become Angular <code>@Output()</code> emitters automatically.\n        </div>\n        <div class=\"feature\">\n          <strong>Native instance</strong>\n          Capture the <code>Highcharts.Chart</code> object via <code>(load)</code>.\n        </div>\n        <div class=\"feature\">\n          <strong>Optional modules</strong>\n          3D, heatmap, stock — register only what you need.\n        </div>\n      </div>\n      <div class=\"cta-row\">\n        <a class=\"btn\" href=\"#demos\">See demos</a>\n        <a class=\"btn secondary\" href=\"https://github.com/alexandroit/angular2-highcharts#readme\" target=\"_blank\">README</a>\n      </div>\n    </div>\n\n    <div class=\"hero-card hero-setup\">\n      <h2>Setup in 3 steps</h2>\n\n      <div class=\"step\">\n        <span class=\"step-num\">1</span>\n        <div>\n          <strong>Install</strong>\n          <pre>npm install @revivejs/angular2-highcharts highcharts</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">2</span>\n        <div>\n          <strong>Register in your NgModule</strong>\n<pre>import &#123; ChartModule &#125; from '@revivejs/angular2-highcharts';\nimport * as Highcharts from 'highcharts/highstock';\ndeclare var require: any;\nconst HC3d   = require('highcharts/highcharts-3d');\nconst HCHeat = require('highcharts/modules/heatmap');\n\n&#64;NgModule(&#123;\n  imports: [\n    ChartModule.forRoot(Highcharts, HC3d, HCHeat)\n  ]\n&#125;)</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">3</span>\n        <div>\n          <strong>Use in your template</strong>\n          <pre>&lt;chart [options]=\"myOptions\"&gt;&lt;/chart&gt;</pre>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ═══ DEMOS ══════════════════════════════════════════════════════════════ -->\n  <section class=\"layout\" id=\"demos\">\n    <div class=\"panels\">\n\n      <!-- ── BLOCK 1: Core ──────────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Core — basic usage</h2>\n          <p>These two demos cover 90 % of everyday use cases.</p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Basic chart -->\n          <section class=\"demo-card\">\n            <h3>Basic chart</h3>\n            <p>Pass a standard Highcharts options object to the <code>[options]</code> input.</p>\n            <pre class=\"code\">// component.ts\noptions = &#123;\n  title: &#123; text: 'My chart' &#125;,\n  series: [&#123; type: 'line', data: [...] &#125;]\n&#125;;</pre>\n            <pre class=\"code\">&lt;!-- template.html --&gt;\n&lt;chart [options]=\"options\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"basicOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- StockChart -->\n          <section class=\"demo-card\">\n            <h3>StockChart</h3>\n            <p>Set <code>type=\"StockChart\"</code> to use the Highstock constructor.</p>\n            <pre class=\"code\">&lt;chart type=\"StockChart\"\n      [options]=\"stockOptions\"&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart type=\"StockChart\" [options]=\"stockOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 2: Event bridge ──────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Event bridge</h2>\n          <p>\n            Highcharts events are exposed as <code>@Output()</code> on the child components\n            <code>&lt;series&gt;</code>, <code>&lt;point&gt;</code>, <code>&lt;xAxis&gt;</code> and <code>&lt;yAxis&gt;</code>.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Chart, series and point events</h3>\n            <p>\n              The <code>(load)</code> output on <code>&lt;chart&gt;</code> delivers the native instance.\n              <code>(selection)</code> fires when the user drags a zoom area.\n              <code>&lt;series&gt;</code> and <code>&lt;point&gt;</code> forward hover and select events into Angular.\n            </p>\n<pre class=\"code\">&lt;chart [options]=\"eventOptions\"\n       (load)=\"onEventLoad($event)\"\n       (selection)=\"onSelection($event)\"&gt;\n\n  &lt;series (mouseOver)=\"onSeriesHover($event)\"&gt;\n    &lt;point (select)=\"onPointSelect($event)\"&gt;&lt;/point&gt;\n  &lt;/series&gt;\n\n  &lt;xAxis (afterSetExtremes)=\"onXExtremes($event)\"&gt;&lt;/xAxis&gt;\n  &lt;yAxis (afterSetExtremes)=\"onYExtremes($event)\"&gt;&lt;/yAxis&gt;\n\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"zoomEventX()\">Zoom X</button>\n              <button class=\"secondary\" (click)=\"zoomEventY()\">Zoom Y</button>\n              <button class=\"ghost\" (click)=\"resetEventAxes()\">Reset axes</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"eventOptions\"\n                     (load)=\"onEventLoad($event)\"\n                     (selection)=\"onSelection($event)\">\n                <series (mouseOver)=\"onSeriesHover($event)\">\n                  <point (select)=\"onPointSelect($event)\"></point>\n                </series>\n                <xAxis (afterSetExtremes)=\"onXExtremes($event)\"></xAxis>\n                <yAxis (afterSetExtremes)=\"onYExtremes($event)\"></yAxis>\n              </chart>\n            </div>\n            <p class=\"note\">\n              Drag over the chart to select a range, hover over a bar, or click a column.\n              Every event appears in the <strong>Event Log</strong> on the right.\n            </p>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 3: Dynamic instance ─────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Native instance access</h2>\n          <p>\n            The wrapper is intentionally thin. For imperative mutations, capture the\n            <code>Highcharts.Chart</code> object from <code>(load)</code> and call the native API directly.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Imperative mutations via the Highcharts API</h3>\n<pre class=\"code\">// component.ts\nonDynamicLoad(e: any) &#123;\n  this.chart = e.context; // native Highcharts.Chart object\n&#125;\n\naddPoint() &#123;\n  this.chart.series[0].addPoint(Math.random() * 20, true, false);\n&#125;\n\nrandomize() &#123;\n  this.chart.series[0].setData([...newData], true);\n&#125;\n\nrenameChart() &#123;\n  this.chart.setTitle(&#123; text: 'New title' &#125;);\n&#125;</pre>\n<pre class=\"code\">&lt;chart [options]=\"dynamicOptions\"\n       (load)=\"onDynamicLoad($event)\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"addPoint()\">Add point</button>\n              <button class=\"secondary\" (click)=\"randomize()\">Randomise series</button>\n              <button class=\"secondary\" (click)=\"renameChart()\">Rename chart</button>\n              <button class=\"ghost\" (click)=\"removePoint()\">Remove 1st point</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"dynamicOptions\" (load)=\"onDynamicLoad($event)\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 4: Axis wrappers ─────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Extra axis wrappers</h2>\n          <p>\n            <code>&lt;zAxis&gt;</code> and <code>&lt;colorAxis&gt;</code> work the same way as the standard axes:\n            <code>(afterSetExtremes)</code> events and programmatic control via the native instance.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n\n          <!-- zAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;zAxis&gt; wrapper</h3>\n            <p>3D scatter chart — requires <code>highcharts-3d</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"zAxisOptions\"\n       (load)=\"onZAxisLoad($event)\"&gt;\n  &lt;zAxis (afterSetExtremes)=\"onZExtremes($event)\"&gt;\n  &lt;/zAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomZ()\">Clamp Z</button>\n              <button class=\"ghost\" (click)=\"resetZ()\">Reset Z</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"zAxisOptions\" (load)=\"onZAxisLoad($event)\">\n                <zAxis (afterSetExtremes)=\"onZExtremes($event)\"></zAxis>\n              </chart>\n            </div>\n          </section>\n\n          <!-- colorAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;colorAxis&gt; wrapper</h3>\n            <p>Heatmap — requires <code>highcharts/modules/heatmap</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"colorAxisOptions\"\n       (load)=\"onColorAxisLoad($event)\"&gt;\n  &lt;colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"&gt;\n  &lt;/colorAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomColor()\">Narrow range</button>\n              <button class=\"ghost\" (click)=\"resetColor()\">Reset colour</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"colorAxisOptions\" (load)=\"onColorAxisLoad($event)\">\n                <colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"></colorAxis>\n              </chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 5: Modules ───────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Optional modules</h2>\n          <p>\n            Pass the modules you need to <code>forRoot</code>. They are applied once at startup.\n            To toggle features at runtime, reassign the options object in your component.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Toggle 3D at runtime</h3>\n<pre class=\"code\">toggle3d() &#123;\n  this.enabled = !this.enabled;\n  // Reassign the reference so Angular detects the change\n  this.moduleOptions = this.makeModuleOptions(this.enabled);\n&#125;</pre>\n            <div class=\"controls\">\n              <button (click)=\"toggle3d()\">{{ module3dEnabled ? 'Disable 3D' : 'Enable 3D' }}</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"moduleOptions\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 6: Highcharts 6 new features ───────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 6 — new chart types</h2>\n          <p>\n            Angular 5 ships with Highcharts 6, which introduced the <strong>bullet</strong>\n            and <strong>x-range</strong> chart types. Register the modules in <code>forRoot</code>\n            and pass options as usual — no API changes required.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Bullet chart -->\n          <section class=\"demo-card\">\n            <h3>Bullet chart</h3>\n            <p>Compares an actual value to a target and shows qualitative performance bands. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsBullet = require('highcharts/modules/bullet');\nChartModule.forRoot(Highcharts, ..., HighchartsBullet)</pre>\n<pre class=\"code\">// component.ts\nbulletOptions = &#123;\n  chart: &#123; type: 'bullet', inverted: true &#125;,\n  series: [&#123; type: 'bullet',\n    data: [&#123; y: 194, target: 200 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"bulletOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"bulletOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- X-Range chart -->\n          <section class=\"demo-card\">\n            <h3>X-Range chart</h3>\n            <p>Horizontal bars spanning a date range — perfect for project timelines. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsXRange = require('highcharts/modules/xrange');\nChartModule.forRoot(Highcharts, ..., HighchartsXRange)</pre>\n<pre class=\"code\">// component.ts\nxrangeOptions = &#123;\n  chart: &#123; type: 'xrange' &#125;,\n  xAxis: &#123; type: 'datetime' &#125;,\n  series: [&#123; type: 'xrange',\n    data: [&#123; x: ..., x2: ..., y: 0 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"xrangeOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"xrangeOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 7: API reference ─────────────────────────────────────── -->\n      <article class=\"panel ref-panel\">\n        <div class=\"panel-header\">\n          <h2>Quick API reference</h2>\n        </div>\n        <div class=\"ref-grid\">\n          <div class=\"ref-card\">\n            <h4>&lt;chart&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Input / Output</th><th>Type</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>[options]</code></td><td>Object</td><td>Highcharts options object (required)</td></tr>\n                <tr><td><code>[type]</code></td><td>string</td><td><code>\"Chart\"</code> (default) or <code>\"StockChart\"</code></td></tr>\n                <tr><td><code>(load)</code></td><td>ChartEvent</td><td>Native instance available in <code>$event.context</code></td></tr>\n                <tr><td><code>(selection)</code></td><td>ChartEvent</td><td>Range selection / zoom drag</td></tr>\n                <tr><td><code>(click)</code></td><td>ChartEvent</td><td>Click on the chart area</td></tr>\n                <tr><td><code>(redraw)</code></td><td>ChartEvent</td><td>After the chart redraws</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;series&gt; / &lt;point&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(mouseOver)</code></td><td>Cursor enters the series</td></tr>\n                <tr><td><code>(mouseOut)</code></td><td>Cursor leaves the series</td></tr>\n                <tr><td><code>(click)</code></td><td>Click on a series / point</td></tr>\n                <tr><td><code>(select)</code></td><td>Point selected</td></tr>\n                <tr><td><code>(hide) / (show)</code></td><td>Series hidden or shown</td></tr>\n                <tr><td><code>(legendItemClick)</code></td><td>Legend item clicked</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;xAxis&gt; / &lt;yAxis&gt; / &lt;zAxis&gt; / &lt;colorAxis&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(afterSetExtremes)</code></td><td>Extremes changed (zoom / reset)</td></tr>\n                <tr><td><code>(setExtremes)</code></td><td>Before extremes are applied</td></tr>\n                <tr><td><code>(afterBreaks)</code></td><td>After axis breaks are applied</td></tr>\n                <tr><td><code>(pointBreak)</code></td><td>Point falls in a break interval</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </article>\n\n    </div>\n\n    <!-- ═══ EVENT LOG (sticky) ══════════════════════════════════════════════ -->\n    <aside class=\"log-panel\">\n      <h2>Event Log</h2>\n      <p>Interact with the demos to see Angular events appear here.</p>\n      <div class=\"log-controls\">\n        <button class=\"ghost small\" (click)=\"clearLog()\">Clear</button>\n      </div>\n      <div class=\"log-list\">\n        <div class=\"log-entry\" *ngFor=\"let e of logs\">{{ e }}</div>\n      </div>\n    </aside>\n  </section>\n\n  <footer class=\"footer\">\n    <p>\n      <strong>@revivejs/angular2-highcharts</strong> — maintained by Alexandro Paixão Marques.\n      Original wrapper by Eugene Gluhotorenko.\n    </p>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__ = __webpack_require__("./node_modules/highcharts/highstock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // ── Internal state ────────────────────────────────────────────────────────
        this.logs = [];
        this.module3dEnabled = true;
        // Set a global colour palette before building any chart options
        __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__["setOptions"]({
            colors: ['#0d5c9e', '#30a46c', '#d26a2a', '#b43f3f', '#6d52b5']
        });
        this.basicOptions = this.makeBasicOptions();
        this.stockOptions = this.makeStockOptions();
        this.eventOptions = this.makeEventOptions();
        this.dynamicOptions = this.makeDynamicOptions();
        this.zAxisOptions = this.makeZAxisOptions();
        this.colorAxisOptions = this.makeColorAxisOptions();
        this.moduleOptions = this.makeModuleOptions(true);
        this.bulletOptions = this.makeBulletOptions();
        this.xrangeOptions = this.makeXRangeOptions();
        this.log('Demo loaded successfully.');
    }
    // ── Instance capture handlers ─────────────────────────────────────────────
    AppComponent.prototype.onEventLoad = function (e) { this.eventChart = e.context; this.log('Event-chart instance ready.'); };
    AppComponent.prototype.onDynamicLoad = function (e) { this.dynamicChart = e.context; this.log('Dynamic-chart instance ready.'); };
    AppComponent.prototype.onZAxisLoad = function (e) { this.zAxisChart = e.context; this.log('zAxis-chart instance ready.'); };
    AppComponent.prototype.onColorAxisLoad = function (e) { this.colorAxisChart = e.context; this.log('colorAxis-chart instance ready.'); };
    // ── Wrapper event handlers ────────────────────────────────────────────────
    AppComponent.prototype.onSelection = function (e) {
        if (e.originalEvent && e.originalEvent.xAxis && e.originalEvent.xAxis.length) {
            var ax = e.originalEvent.xAxis[0];
            this.log('Selection: ' + ax.min.toFixed(2) + ' to ' + ax.max.toFixed(2));
        }
    };
    AppComponent.prototype.onSeriesHover = function (e) { this.log('Series hover: ' + e.context.name); };
    AppComponent.prototype.onPointSelect = function (e) { this.log('Point selected: ' + e.context.category + ' = ' + e.context.y); };
    AppComponent.prototype.onXExtremes = function (e) { this._logExtremes('X', e.context); };
    AppComponent.prototype.onYExtremes = function (e) { this._logExtremes('Y', e.context); };
    AppComponent.prototype.onZExtremes = function (e) { this._logExtremes('Z', e.context); };
    AppComponent.prototype.onColorExtremes = function (e) { this._logExtremes('Color', e.context); };
    // ── User actions ──────────────────────────────────────────────────────────
    AppComponent.prototype.zoomEventX = function () { if (this.eventChart) {
        this.eventChart.xAxis[0].setExtremes(1, 4);
    } };
    AppComponent.prototype.zoomEventY = function () { if (this.eventChart) {
        this.eventChart.yAxis[0].setExtremes(20, 90);
    } };
    AppComponent.prototype.resetEventAxes = function () {
        if (this.eventChart) {
            this.eventChart.xAxis[0].setExtremes(null, null);
            this.eventChart.yAxis[0].setExtremes(null, null);
        }
        this.log('Axes reset.');
    };
    AppComponent.prototype.addPoint = function () {
        if (!this.dynamicChart) {
            return;
        }
        var val = Math.round((Math.random() * 14 + 4) * 10) / 10;
        this.dynamicChart.series[0].addPoint(val, true, false);
        this.log('Point added: ' + val);
    };
    AppComponent.prototype.removePoint = function () {
        if (!this.dynamicChart || !this.dynamicChart.series[0].data.length) {
            return;
        }
        this.dynamicChart.series[0].data[0].remove(false);
        this.dynamicChart.redraw();
        this.log('First point removed.');
    };
    AppComponent.prototype.randomize = function () {
        if (!this.dynamicChart) {
            return;
        }
        var next = [];
        for (var i = 0; i < 6; i++) {
            next.push(Math.round((Math.random() * 18 + 2) * 10) / 10);
        }
        this.dynamicChart.series[0].setData(next, true);
        this.log('Series randomised: ' + next.join(', '));
    };
    AppComponent.prototype.renameChart = function () {
        if (!this.dynamicChart) {
            return;
        }
        var label = 'Updated at ' + this.clock();
        this.dynamicChart.setTitle({ text: label });
        this.log('Title set to "' + label + '".');
    };
    AppComponent.prototype.zoomZ = function () { if (this.zAxisChart) {
        this.zAxisChart.zAxis[0].setExtremes(2, 8);
    } };
    AppComponent.prototype.resetZ = function () { if (this.zAxisChart) {
        this.zAxisChart.zAxis[0].setExtremes(null, null);
    } this.log('zAxis reset.'); };
    AppComponent.prototype.zoomColor = function () { if (this.colorAxisChart) {
        this.colorAxisChart.colorAxis[0].setExtremes(2, 7);
    } };
    AppComponent.prototype.resetColor = function () { if (this.colorAxisChart) {
        this.colorAxisChart.colorAxis[0].setExtremes(null, null);
    } this.log('colorAxis reset.'); };
    AppComponent.prototype.toggle3d = function () {
        this.module3dEnabled = !this.module3dEnabled;
        this.moduleOptions = this.makeModuleOptions(this.module3dEnabled);
        this.log('3D ' + (this.module3dEnabled ? 'enabled' : 'disabled') + '.');
    };
    AppComponent.prototype.clearLog = function () { this.logs = []; this.log('Log cleared.'); };
    // ── Options factories ─────────────────────────────────────────────────────
    AppComponent.prototype.makeBasicOptions = function () {
        return {
            title: { text: 'Basic chart' },
            subtitle: { text: 'Minimal usage: <chart [options]="opts"></chart>' },
            xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
            yAxis: { title: { text: 'Score' } },
            series: [
                { name: 'Alpha', type: 'line', data: [29.9, 41.2, 51.8, 63.4, 72.1, 84.6] },
                { name: 'Beta', type: 'line', data: [18.2, 24.5, 39.1, 44.4, 60.3, 67.9] }
            ]
        };
    };
    AppComponent.prototype.makeStockOptions = function () {
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
    };
    AppComponent.prototype.makeEventOptions = function () {
        return {
            chart: { zoomType: 'xy' },
            title: { text: 'Event bridge' },
            subtitle: { text: 'Drag to select, hover a series, or click a point' },
            xAxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { title: { text: 'Visits' } },
            plotOptions: { series: { allowPointSelect: true } },
            series: [{ name: 'Visits', type: 'column', data: [13, 18, 42, 68, 81, 55, 39] }]
        };
    };
    AppComponent.prototype.makeDynamicOptions = function () {
        return {
            title: { text: 'Native instance access' },
            subtitle: { text: 'Use (load) to capture the Highcharts object' },
            series: [{ type: 'spline', data: [2, 3, 5, 8, 13, 21] }]
        };
    };
    AppComponent.prototype.makeZAxisOptions = function () {
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
                    data: [[1, 6, 2], [2, 4, 5], [3, 8, 3], [5, 3, 7], [7, 2, 9], [8, 7, 6], [9, 5, 1]]
                }]
        };
    };
    AppComponent.prototype.makeColorAxisOptions = function () {
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
                        [0, 0, 2], [1, 0, 4], [2, 0, 5], [3, 0, 7], [4, 0, 8],
                        [0, 1, 1], [1, 1, 3], [2, 1, 6], [3, 1, 8], [4, 1, 9],
                        [0, 2, 0], [1, 2, 2], [2, 2, 5], [3, 2, 7], [4, 2, 6],
                        [0, 3, 1], [1, 3, 2], [2, 3, 4], [3, 3, 5], [4, 3, 7]
                    ]
                }]
        };
    };
    AppComponent.prototype.makeModuleOptions = function (enabled) {
        return {
            title: { text: enabled ? '3D column — module active' : '2D column — module inactive' },
            subtitle: { text: 'Reassign this.moduleOptions to trigger Angular change detection' },
            chart: { type: 'column', margin: 70, options3d: { enabled: enabled, alpha: 12, beta: 18, depth: 48 } },
            plotOptions: { column: { depth: enabled ? 24 : 0 } },
            xAxis: { categories: ['North', 'South', 'East', 'West'] },
            series: [{ name: 'Orders', type: 'column', data: [29.9, 71.5, 46.4, 58.2] }]
        };
    };
    // ── Highcharts 6: Bullet chart ────────────────────────────────────────────
    AppComponent.prototype.makeBulletOptions = function () {
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
                    { from: 0, to: 150, color: '#d9eaf7' },
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
                        { y: 83, target: 75 },
                        { y: 72, target: 68 },
                        { y: 31, target: 40 }
                    ]
                }]
        };
    };
    // ── Highcharts 6: X-Range chart ───────────────────────────────────────────
    AppComponent.prototype.makeXRangeOptions = function () {
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
                        { x: Date.UTC(2024, 11, 8), x2: Date.UTC(2024, 11, 18), y: 2 },
                        { x: Date.UTC(2024, 11, 16), x2: Date.UTC(2024, 11, 24), y: 3 }
                    ]
                }]
        };
    };
    AppComponent.prototype.generateTimeSeries = function () {
        var pts = [];
        var v = 96;
        var start = Date.UTC(2024, 0, 1);
        for (var i = 0; i < 90; i++) {
            v += Math.sin(i / 7) * 1.8 + (i % 5 === 0 ? 2.2 : -0.4);
            pts.push([start + i * 86400000, Math.round(v * 100) / 100]);
        }
        return pts;
    };
    // ── Helpers ───────────────────────────────────────────────────────────────
    AppComponent.prototype._logExtremes = function (axis, ctx) {
        if (typeof ctx.min === 'number' && typeof ctx.max === 'number') {
            this.log(axis + ' extremes: ' + ctx.min.toFixed(2) + ' to ' + ctx.max.toFixed(2));
        }
    };
    AppComponent.prototype.log = function (msg) {
        this.logs.unshift(this.clock() + '  ' + msg);
        this.logs = this.logs.slice(0, 16);
    };
    AppComponent.prototype.clock = function () {
        var n = new Date();
        var p = function (v) { return v < 10 ? '0' + v : '' + v; };
        return p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revivejs_angular2_highcharts__ = __webpack_require__("./node_modules/@revivejs/angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revivejs_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__revivejs_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highstock__ = __webpack_require__("./node_modules/highcharts/highstock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highstock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Step 1: import ChartModule from the installed npm package

// Step 2: import Highcharts (highstock bundle includes Chart + StockChart)

var Highcharts3d = __webpack_require__("./node_modules/highcharts/highcharts-3d.js");
var HighchartsHeatmap = __webpack_require__("./node_modules/highcharts/modules/heatmap.js");
// Highcharts 6 new modules
var HighchartsBullet = __webpack_require__("./node_modules/highcharts/modules/bullet.js");
var HighchartsXRange = __webpack_require__("./node_modules/highcharts/modules/xrange.js");

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // Step 4: register ChartModule with forRoot, passing Highcharts and any extra modules
                __WEBPACK_IMPORTED_MODULE_2__revivejs_angular2_highcharts__["ChartModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3_highcharts_highstock__, Highcharts3d, HighchartsHeatmap, HighchartsBullet, HighchartsXRange)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map