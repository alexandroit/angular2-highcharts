(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-height: 100vh;\n}\n\n/* ── Shell ─────────────────────────────────────────────────────────────── */\n\n.shell {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n}\n\n/* ── Hero ──────────────────────────────────────────────────────────────── */\n\n.hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 1fr);\n  gap: 24px;\n  align-items: stretch;\n  margin-bottom: 28px;\n}\n\n.hero-card {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 28px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.11);\n}\n\n.badge {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #102033;\n  color: #fff;\n  font-size: 11px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\nh1 {\n  margin: 14px 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\nh2 {\n  margin: 0 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 26px;\n  font-weight: 700;\n}\n\nh3 {\n  margin: 0 0 8px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nh4 {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #0d5c9e;\n}\n\np {\n  margin: 0;\n  line-height: 1.65;\n  color: #364b63;\n}\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 0.9em;\n  background: rgba(13, 92, 158, 0.08);\n  padding: 1px 5px;\n  border-radius: 4px;\n}\n\npre {\n  margin: 10px 0;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #0f2137;\n  color: #dfeaf6;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 12.5px;\n  line-height: 1.6;\n  overflow-x: auto;\n  white-space: pre;\n}\n\npre.code {\n  background: #f0f5fa;\n  color: #1a2f47;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 16px;\n}\n\n.feature {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: linear-gradient(180deg, #fff 0%, #f2f7fb 100%);\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  font-size: 13.5px;\n  line-height: 1.5;\n  color: #364b63;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 3px;\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n/* ── Steps (hero sidebar) ──────────────────────────────────────────────── */\n\n.hero-setup {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.step {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.step-num {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #0d5c9e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.step strong {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 6px;\n  color: #102033;\n}\n\n/* ── CTA ───────────────────────────────────────────────────────────────── */\n\n.cta-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n}\n\n.btn {\n  display: inline-block;\n  padding: 10px 18px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 14px;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn.secondary {\n  background: #edf4fa;\n  color: #14324f;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\n/* ── Layout principal ──────────────────────────────────────────────────── */\n\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  gap: 24px;\n  align-items: start;\n}\n\n.panels {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n/* ── Panel ─────────────────────────────────────────────────────────────── */\n\n.panel {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 24px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n}\n\n.panel-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n\n.demo-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.demo-card {\n  padding: 18px;\n  border-radius: 18px;\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.demo-card.full {\n  grid-column: 1 / -1;\n}\n\n/* ── Chart frame ───────────────────────────────────────────────────────── */\n\n.chart-frame {\n  margin-top: 14px;\n  padding: 8px;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  min-height: 300px;\n}\n\n/* ── Controls ──────────────────────────────────────────────────────────── */\n\n.controls {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 999px;\n  padding: 9px 15px;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  cursor: pointer;\n}\n\nbutton.secondary {\n  color: #14324f;\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\nbutton.ghost {\n  color: #14324f;\n  background: transparent;\n  border: 1px dashed rgba(20, 50, 79, 0.22);\n}\n\nbutton.small {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n\n/* ── Note ──────────────────────────────────────────────────────────────── */\n\n.note {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: #fff6e8;\n  color: #6f4a16;\n  border: 1px solid rgba(210, 128, 31, 0.16);\n  font-size: 13px;\n}\n\n/* ── Ref table panel ───────────────────────────────────────────────────── */\n\n.ref-panel .ref-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.ref-card {\n  padding: 16px;\n  border-radius: 14px;\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.api-table th {\n  text-align: left;\n  padding: 6px 10px;\n  background: rgba(13, 92, 158, 0.06);\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.api-table td {\n  padding: 6px 10px;\n  border-top: 1px solid rgba(16, 32, 51, 0.06);\n  color: #364b63;\n  vertical-align: top;\n}\n\n.api-table td:first-child {\n  white-space: nowrap;\n}\n\n/* ── Log panel ─────────────────────────────────────────────────────────── */\n\n.log-panel {\n  position: sticky;\n  top: 20px;\n  padding: 20px;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.log-controls {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.log-list {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n\n.log-entry {\n  padding: 9px 12px;\n  border-radius: 12px;\n  background: #f6f9fc;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  color: #27425f;\n  font-size: 12.5px;\n  line-height: 1.45;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  word-break: break-all;\n}\n\n/* ── Footer ────────────────────────────────────────────────────────────── */\n\n.footer {\n  margin-top: 28px;\n  padding: 20px 24px;\n  border-radius: 18px;\n  background: rgba(16, 32, 51, 0.92);\n  color: #c8d8ea;\n}\n\n/* ── Responsive ────────────────────────────────────────────────────────── */\n\n@media (max-width: 1100px) {\n  .hero,\n  .layout {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel {\n    position: static;\n    max-height: 360px;\n  }\n}\n\n@media (max-width: 760px) {\n  .demo-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: auto;\n  }\n\n  h1 { font-size: 34px; }\n\n  .feature-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 500px) {\n  .shell {\n    padding: 18px 12px 40px;\n  }\n\n  .hero-card, .panel, .log-panel {\n    padding: 16px;\n    border-radius: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0UsYUFBYTtFQUNiLDBEQUEwRDtFQUMxRCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNk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QTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLEtBQUssZUFBZSxFQUFFOztFQUV0QjtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiDilIDilIAgU2hlbGwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uc2hlbGwge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweCA2MHB4O1xufVxuXG4vKiDilIDilIAgSGVybyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS44ZnIpIG1pbm1heCgzMjBweCwgMWZyKTtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmhlcm8tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQ4cHggcmdiYSgyNywgNjYsIDExMCwgMC4xMSk7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMTAyMDMzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMTRweCAwIDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzBkNWM5ZTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGNvbG9yOiAjMzY0YjYzO1xufVxuXG5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDkyLCAxNTgsIDAuMDgpO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnByZSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwZjIxMzc7XG4gIGNvbG9yOiAjZGZlYWY2O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbnByZS5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgY29sb3I6ICMxYTJmNDc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wOCk7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmZlYXR1cmUge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmMmY3ZmIgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNyk7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzM2NGI2Mztcbn1cblxuLmZlYXR1cmUgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyog4pSA4pSAIFN0ZXBzIChoZXJvIHNpZGViYXIpIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmhlcm8tc2V0dXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnN0ZXAtbnVtIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzBkNWM5ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGVwIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMxMDIwMzM7XG59XG5cbi8qIOKUgOKUgCBDVEEg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkMjRiMmEgMCUsICMxZjViYTcgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjZWRmNGZhO1xuICBjb2xvcjogIzE0MzI0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMCwgNTAsIDc5LCAwLjEyKTtcbn1cblxuLyog4pSA4pSAIExheW91dCBwcmluY2lwYWwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4ubGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAzMDBweDtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wYW5lbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi8qIOKUgOKUgCBQYW5lbCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5wYW5lbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQ4cHggcmdiYSgyNywgNjYsIDExMCwgMC4xKTtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uZGVtby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDE4cHg7XG59XG5cbi5kZW1vLWNhcmQge1xuICBwYWRkaW5nOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmIDAlLCAjZjdmYWZjIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMDgpO1xufVxuXG4uZGVtby1jYXJkLmZ1bGwge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4vKiDilIDilIAgQ2hhcnQgZnJhbWUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uY2hhcnQtZnJhbWUge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNyk7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4vKiDilIDilIAgQ29udHJvbHMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QyNGIyYSAwJSwgIzFmNWJhNyAxMDAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMxNDMyNGY7XG4gIGJhY2tncm91bmQ6ICNlZGY0ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAsIDUwLCA3OSwgMC4xMik7XG59XG5cbmJ1dHRvbi5naG9zdCB7XG4gIGNvbG9yOiAjMTQzMjRmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMjAsIDUwLCA3OSwgMC4yMik7XG59XG5cbmJ1dHRvbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIOKUgOKUgCBOb3RlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLm5vdGUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY2ZTg7XG4gIGNvbG9yOiAjNmY0YTE2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMCwgMTI4LCAzMSwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyog4pSA4pSAIFJlZiB0YWJsZSBwYW5lbCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5yZWYtcGFuZWwgLnJlZi1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxOHB4O1xufVxuXG4ucmVmLWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmIDAlLCAjZjdmYWZjIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMDgpO1xufVxuXG4uYXBpLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmFwaS10YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCA5MiwgMTU4LCAwLjA2KTtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxuLmFwaS10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjA2KTtcbiAgY29sb3I6ICMzNjRiNjM7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcGktdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiDilIDilIAgTG9nIHBhbmVsIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmxvZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBib3gtc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDI3LCA2NiwgMTEwLCAwLjEpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLmxvZy1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5sb2ctbGlzdCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBmbGV4OiAxO1xufVxuXG4ubG9nLWVudHJ5IHtcbiAgcGFkZGluZzogOXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmNmY5ZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNyk7XG4gIGNvbG9yOiAjMjc0MjVmO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgbW9ub3NwYWNlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi8qIOKUgOKUgCBGb290ZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAzMiwgNTEsIDAuOTIpO1xuICBjb2xvcjogI2M4ZDhlYTtcbn1cblxuLyog4pSA4pSAIFJlc3BvbnNpdmUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5sb2ctcGFuZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWF4LWhlaWdodDogMzYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5kZW1vLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmRlbW8tY2FyZC5mdWxsIHtcbiAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgfVxuXG4gIGgxIHsgZm9udC1zaXplOiAzNHB4OyB9XG5cbiAgLmZlYXR1cmUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zaGVsbCB7XG4gICAgcGFkZGluZzogMThweCAxMnB4IDQwcHg7XG4gIH1cblxuICAuaGVyby1jYXJkLCAucGFuZWwsIC5sb2ctcGFuZWwge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\">\n\n  <!-- ═══ HERO ═══════════════════════════════════════════════════════════════ -->\n  <section class=\"hero\">\n    <div class=\"hero-card hero-main\">\n      <span class=\"badge\">Angular 7.2 · Highcharts 7</span>\n      <h1>@revivejs/angular2-highcharts</h1>\n      <p>\n        A thin, unopinionated Angular wrapper for Highcharts, StockChart, 3D charts and heatmaps.\n        Install the package, register the module, and drop <code>&lt;chart&gt;</code> straight into your template.\n      </p>\n      <div class=\"feature-grid\">\n        <div class=\"feature\">\n          <strong>Zero config</strong>\n          Thin wrapper — the full Highcharts API remains directly accessible.\n        </div>\n        <div class=\"feature\">\n          <strong>Event bridge</strong>\n          Highcharts events become Angular <code>@Output()</code> emitters automatically.\n        </div>\n        <div class=\"feature\">\n          <strong>Native instance</strong>\n          Capture the <code>Highcharts.Chart</code> object via <code>(load)</code>.\n        </div>\n        <div class=\"feature\">\n          <strong>Optional modules</strong>\n          3D, heatmap, stock — register only what you need.\n        </div>\n      </div>\n      <div class=\"cta-row\">\n        <a class=\"btn\" href=\"#demos\">See demos</a>\n        <a class=\"btn secondary\" href=\"https://github.com/alexandroit/angular2-highcharts#readme\" target=\"_blank\">README</a>\n      </div>\n    </div>\n\n    <div class=\"hero-card hero-setup\">\n      <h2>Setup in 3 steps</h2>\n\n      <div class=\"step\">\n        <span class=\"step-num\">1</span>\n        <div>\n          <strong>Install</strong>\n          <pre>npm install @revivejs/angular2-highcharts highcharts</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">2</span>\n        <div>\n          <strong>Register in your NgModule</strong>\n<pre>import &#123; ChartModule &#125; from '@revivejs/angular2-highcharts';\nimport * as Highcharts from 'highcharts/highstock';\ndeclare var require: any;\nconst HC3d   = require('highcharts/highcharts-3d');\nconst HCHeat = require('highcharts/modules/heatmap');\n\n&#64;NgModule(&#123;\n  imports: [\n    ChartModule.forRoot(Highcharts, HC3d, HCHeat)\n  ]\n&#125;)</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">3</span>\n        <div>\n          <strong>Use in your template</strong>\n          <pre>&lt;chart [options]=\"myOptions\"&gt;&lt;/chart&gt;</pre>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ═══ DEMOS ══════════════════════════════════════════════════════════════ -->\n  <section class=\"layout\" id=\"demos\">\n    <div class=\"panels\">\n\n      <!-- ── BLOCK 1: Core ──────────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Core — basic usage</h2>\n          <p>These two demos cover 90 % of everyday use cases.</p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Basic chart -->\n          <section class=\"demo-card\">\n            <h3>Basic chart</h3>\n            <p>Pass a standard Highcharts options object to the <code>[options]</code> input.</p>\n            <pre class=\"code\">// component.ts\noptions = &#123;\n  title: &#123; text: 'My chart' &#125;,\n  series: [&#123; type: 'line', data: [...] &#125;]\n&#125;;</pre>\n            <pre class=\"code\">&lt;!-- template.html --&gt;\n&lt;chart [options]=\"options\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"basicOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- StockChart -->\n          <section class=\"demo-card\">\n            <h3>StockChart</h3>\n            <p>Set <code>type=\"StockChart\"</code> to use the Highstock constructor.</p>\n            <pre class=\"code\">&lt;chart type=\"StockChart\"\n      [options]=\"stockOptions\"&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart type=\"StockChart\" [options]=\"stockOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 2: Event bridge ──────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Event bridge</h2>\n          <p>\n            Highcharts events are exposed as <code>@Output()</code> on the child components\n            <code>&lt;series&gt;</code>, <code>&lt;point&gt;</code>, <code>&lt;xAxis&gt;</code> and <code>&lt;yAxis&gt;</code>.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Chart, series and point events</h3>\n            <p>\n              The <code>(load)</code> output on <code>&lt;chart&gt;</code> delivers the native instance.\n              <code>(selection)</code> fires when the user drags a zoom area.\n              <code>&lt;series&gt;</code> and <code>&lt;point&gt;</code> forward hover and select events into Angular.\n            </p>\n<pre class=\"code\">&lt;chart [options]=\"eventOptions\"\n       (load)=\"onEventLoad($event)\"\n       (selection)=\"onSelection($event)\"&gt;\n\n  &lt;series (mouseOver)=\"onSeriesHover($event)\"&gt;\n    &lt;point (select)=\"onPointSelect($event)\"&gt;&lt;/point&gt;\n  &lt;/series&gt;\n\n  &lt;xAxis (afterSetExtremes)=\"onXExtremes($event)\"&gt;&lt;/xAxis&gt;\n  &lt;yAxis (afterSetExtremes)=\"onYExtremes($event)\"&gt;&lt;/yAxis&gt;\n\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"zoomEventX()\">Zoom X</button>\n              <button class=\"secondary\" (click)=\"zoomEventY()\">Zoom Y</button>\n              <button class=\"ghost\" (click)=\"resetEventAxes()\">Reset axes</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"eventOptions\"\n                     (load)=\"onEventLoad($event)\"\n                     (selection)=\"onSelection($event)\">\n                <series (mouseOver)=\"onSeriesHover($event)\">\n                  <point (select)=\"onPointSelect($event)\"></point>\n                </series>\n                <xAxis (afterSetExtremes)=\"onXExtremes($event)\"></xAxis>\n                <yAxis (afterSetExtremes)=\"onYExtremes($event)\"></yAxis>\n              </chart>\n            </div>\n            <p class=\"note\">\n              Drag over the chart to select a range, hover over a bar, or click a column.\n              Every event appears in the <strong>Event Log</strong> on the right.\n            </p>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 3: Dynamic instance ─────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Native instance access</h2>\n          <p>\n            The wrapper is intentionally thin. For imperative mutations, capture the\n            <code>Highcharts.Chart</code> object from <code>(load)</code> and call the native API directly.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Imperative mutations via the Highcharts API</h3>\n<pre class=\"code\">// component.ts\nonDynamicLoad(e: any) &#123;\n  this.chart = e.context; // native Highcharts.Chart object\n&#125;\n\naddPoint() &#123;\n  this.chart.series[0].addPoint(Math.random() * 20, true, false);\n&#125;\n\nrandomize() &#123;\n  this.chart.series[0].setData([...newData], true);\n&#125;\n\nrenameChart() &#123;\n  this.chart.setTitle(&#123; text: 'New title' &#125;);\n&#125;</pre>\n<pre class=\"code\">&lt;chart [options]=\"dynamicOptions\"\n       (load)=\"onDynamicLoad($event)\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"addPoint()\">Add point</button>\n              <button class=\"secondary\" (click)=\"randomize()\">Randomise series</button>\n              <button class=\"secondary\" (click)=\"renameChart()\">Rename chart</button>\n              <button class=\"ghost\" (click)=\"removePoint()\">Remove 1st point</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"dynamicOptions\" (load)=\"onDynamicLoad($event)\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 4: Axis wrappers ─────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Extra axis wrappers</h2>\n          <p>\n            <code>&lt;zAxis&gt;</code> and <code>&lt;colorAxis&gt;</code> work the same way as the standard axes:\n            <code>(afterSetExtremes)</code> events and programmatic control via the native instance.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n\n          <!-- zAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;zAxis&gt; wrapper</h3>\n            <p>3D scatter chart — requires <code>highcharts-3d</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"zAxisOptions\"\n       (load)=\"onZAxisLoad($event)\"&gt;\n  &lt;zAxis (afterSetExtremes)=\"onZExtremes($event)\"&gt;\n  &lt;/zAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomZ()\">Clamp Z</button>\n              <button class=\"ghost\" (click)=\"resetZ()\">Reset Z</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"zAxisOptions\" (load)=\"onZAxisLoad($event)\">\n                <zAxis (afterSetExtremes)=\"onZExtremes($event)\"></zAxis>\n              </chart>\n            </div>\n          </section>\n\n          <!-- colorAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;colorAxis&gt; wrapper</h3>\n            <p>Heatmap — requires <code>highcharts/modules/heatmap</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"colorAxisOptions\"\n       (load)=\"onColorAxisLoad($event)\"&gt;\n  &lt;colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"&gt;\n  &lt;/colorAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomColor()\">Narrow range</button>\n              <button class=\"ghost\" (click)=\"resetColor()\">Reset colour</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"colorAxisOptions\" (load)=\"onColorAxisLoad($event)\">\n                <colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"></colorAxis>\n              </chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 5: Modules ───────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Optional modules</h2>\n          <p>\n            Pass the modules you need to <code>forRoot</code>. They are applied once at startup.\n            To toggle features at runtime, reassign the options object in your component.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Toggle 3D at runtime</h3>\n<pre class=\"code\">toggle3d() &#123;\n  this.enabled = !this.enabled;\n  // Reassign the reference so Angular detects the change\n  this.moduleOptions = this.makeModuleOptions(this.enabled);\n&#125;</pre>\n            <div class=\"controls\">\n              <button (click)=\"toggle3d()\">{{ module3dEnabled ? 'Disable 3D' : 'Enable 3D' }}</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"moduleOptions\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 6: Highcharts 6 new features ───────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 6 — new chart types</h2>\n          <p>\n            Angular 7 keeps full support for the Highcharts 6 modules introduced in the previous release line, including <strong>bullet</strong>\n            and <strong>x-range</strong> chart types. Register the modules in <code>forRoot</code>\n            and pass options as usual — no API changes required.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Bullet chart -->\n          <section class=\"demo-card\">\n            <h3>Bullet chart</h3>\n            <p>Compares an actual value to a target and shows qualitative performance bands. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsBullet = require('highcharts/modules/bullet');\nChartModule.forRoot(Highcharts, ..., HighchartsBullet)</pre>\n<pre class=\"code\">// component.ts\nbulletOptions = &#123;\n  chart: &#123; type: 'bullet', inverted: true &#125;,\n  series: [&#123; type: 'bullet',\n    data: [&#123; y: 194, target: 200 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"bulletOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"bulletOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- X-Range chart -->\n          <section class=\"demo-card\">\n            <h3>X-Range chart</h3>\n            <p>Horizontal bars spanning a date range — perfect for project timelines. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsXRange = require('highcharts/modules/xrange');\nChartModule.forRoot(Highcharts, ..., HighchartsXRange)</pre>\n<pre class=\"code\">// component.ts\nxrangeOptions = &#123;\n  chart: &#123; type: 'xrange' &#125;,\n  xAxis: &#123; type: 'datetime' &#125;,\n  series: [&#123; type: 'xrange',\n    data: [&#123; x: ..., x2: ..., y: 0 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"xrangeOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"xrangeOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 7: Highcharts 7 new features ───────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 7 — new modules and chart types</h2>\n          <p>\n            Angular 7.2 uses Highcharts 7.2, which added new relationship and storytelling charts\n            such as <strong>timeline</strong>, <strong>venn</strong>, <strong>organization</strong>,\n            and <strong>dependency wheel</strong>.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <section class=\"demo-card\">\n            <h3>Timeline chart</h3>\n            <p>Event milestones on a chronological track. Requires <code>highcharts/modules/timeline</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsTimeline = require('highcharts/modules/timeline');\nChartModule.forRoot(Highcharts, ..., HighchartsTimeline)</pre>\n<pre class=\"code\">// component.ts\ntimelineOptions = &#123;\n  chart: &#123; type: 'timeline' &#125;,\n  series: [&#123; type: 'timeline', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"timelineOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"timelineOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Venn diagram</h3>\n            <p>Visualises overlap between sets. Requires <code>highcharts/modules/venn</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsVenn = require('highcharts/modules/venn');\nChartModule.forRoot(Highcharts, ..., HighchartsVenn)</pre>\n<pre class=\"code\">// component.ts\nvennOptions = &#123;\n  series: [&#123; type: 'venn', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"vennOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"vennOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Organization chart</h3>\n            <p>Hierarchy charts powered by the sankey engine. Requires <code>sankey</code> and <code>organization</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsSankey = require('highcharts/modules/sankey');\nconst HighchartsOrganization = require('highcharts/modules/organization');</pre>\n<pre class=\"code\">// component.ts\norganizationOptions = &#123;\n  series: [&#123; type: 'organization', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"organizationOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"organizationOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Dependency wheel</h3>\n            <p>Relationship flows arranged in a circular layout. Requires <code>sankey</code> and <code>dependency-wheel</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsDependencyWheel = require('highcharts/modules/dependency-wheel');\nChartModule.forRoot(Highcharts, ..., HighchartsSankey, HighchartsDependencyWheel)</pre>\n<pre class=\"code\">// component.ts\ndependencyWheelOptions = &#123;\n  series: [&#123; type: 'dependencywheel', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"dependencyWheelOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"dependencyWheelOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 8: API reference ─────────────────────────────────────── -->\n      <article class=\"panel ref-panel\">\n        <div class=\"panel-header\">\n          <h2>Quick API reference</h2>\n        </div>\n        <div class=\"ref-grid\">\n          <div class=\"ref-card\">\n            <h4>&lt;chart&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Input / Output</th><th>Type</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>[options]</code></td><td>Object</td><td>Highcharts options object (required)</td></tr>\n                <tr><td><code>[type]</code></td><td>string</td><td><code>\"Chart\"</code> (default) or <code>\"StockChart\"</code></td></tr>\n                <tr><td><code>(load)</code></td><td>ChartEvent</td><td>Native instance available in <code>$event.context</code></td></tr>\n                <tr><td><code>(selection)</code></td><td>ChartEvent</td><td>Range selection / zoom drag</td></tr>\n                <tr><td><code>(click)</code></td><td>ChartEvent</td><td>Click on the chart area</td></tr>\n                <tr><td><code>(redraw)</code></td><td>ChartEvent</td><td>After the chart redraws</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;series&gt; / &lt;point&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(mouseOver)</code></td><td>Cursor enters the series</td></tr>\n                <tr><td><code>(mouseOut)</code></td><td>Cursor leaves the series</td></tr>\n                <tr><td><code>(click)</code></td><td>Click on a series / point</td></tr>\n                <tr><td><code>(select)</code></td><td>Point selected</td></tr>\n                <tr><td><code>(hide) / (show)</code></td><td>Series hidden or shown</td></tr>\n                <tr><td><code>(legendItemClick)</code></td><td>Legend item clicked</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;xAxis&gt; / &lt;yAxis&gt; / &lt;zAxis&gt; / &lt;colorAxis&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(afterSetExtremes)</code></td><td>Extremes changed (zoom / reset)</td></tr>\n                <tr><td><code>(setExtremes)</code></td><td>Before extremes are applied</td></tr>\n                <tr><td><code>(afterBreaks)</code></td><td>After axis breaks are applied</td></tr>\n                <tr><td><code>(pointBreak)</code></td><td>Point falls in a break interval</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </article>\n\n    </div>\n\n    <!-- ═══ EVENT LOG (sticky) ══════════════════════════════════════════════ -->\n    <aside class=\"log-panel\">\n      <h2>Event Log</h2>\n      <p>Interact with the demos to see Angular events appear here.</p>\n      <div class=\"log-controls\">\n        <button class=\"ghost small\" (click)=\"clearLog()\">Clear</button>\n      </div>\n      <div class=\"log-list\">\n        <div class=\"log-entry\" *ngFor=\"let e of logs\">{{ e }}</div>\n      </div>\n    </aside>\n  </section>\n\n  <footer class=\"footer\">\n    <p>\n      <strong>@revivejs/angular2-highcharts</strong> — maintained by Alexandro Paixão Marques.\n      Original wrapper by Eugene Gluhotorenko.\n    </p>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor() {
        // ── Internal state ────────────────────────────────────────────────────────
        this.logs = [];
        this.module3dEnabled = true;
        // Set a global colour palette before building any chart options
        highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
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
        this.timelineOptions = this.makeTimelineOptions();
        this.vennOptions = this.makeVennOptions();
        this.organizationOptions = this.makeOrganizationOptions();
        this.dependencyWheelOptions = this.makeDependencyWheelOptions();
        this.log('Demo loaded successfully.');
    }
    // ── Instance capture handlers ─────────────────────────────────────────────
    onEventLoad(e) { this.eventChart = e.context; this.log('Event-chart instance ready.'); }
    onDynamicLoad(e) { this.dynamicChart = e.context; this.log('Dynamic-chart instance ready.'); }
    onZAxisLoad(e) { this.zAxisChart = e.context; this.log('zAxis-chart instance ready.'); }
    onColorAxisLoad(e) { this.colorAxisChart = e.context; this.log('colorAxis-chart instance ready.'); }
    // ── Wrapper event handlers ────────────────────────────────────────────────
    onSelection(e) {
        if (e.originalEvent && e.originalEvent.xAxis && e.originalEvent.xAxis.length) {
            const ax = e.originalEvent.xAxis[0];
            this.log('Selection: ' + ax.min.toFixed(2) + ' to ' + ax.max.toFixed(2));
        }
    }
    onSeriesHover(e) { this.log('Series hover: ' + e.context.name); }
    onPointSelect(e) { this.log('Point selected: ' + e.context.category + ' = ' + e.context.y); }
    onXExtremes(e) { this._logExtremes('X', e.context); }
    onYExtremes(e) { this._logExtremes('Y', e.context); }
    onZExtremes(e) { this._logExtremes('Z', e.context); }
    onColorExtremes(e) { this._logExtremes('Color', e.context); }
    // ── User actions ──────────────────────────────────────────────────────────
    zoomEventX() { if (this.eventChart) {
        this.eventChart.xAxis[0].setExtremes(1, 4);
    } }
    zoomEventY() { if (this.eventChart) {
        this.eventChart.yAxis[0].setExtremes(20, 90);
    } }
    resetEventAxes() {
        if (this.eventChart) {
            this.eventChart.xAxis[0].setExtremes(null, null);
            this.eventChart.yAxis[0].setExtremes(null, null);
        }
        this.log('Axes reset.');
    }
    addPoint() {
        if (!this.dynamicChart) {
            return;
        }
        const val = Math.round((Math.random() * 14 + 4) * 10) / 10;
        this.dynamicChart.series[0].addPoint(val, true, false);
        this.log('Point added: ' + val);
    }
    removePoint() {
        if (!this.dynamicChart || !this.dynamicChart.series[0].data.length) {
            return;
        }
        this.dynamicChart.series[0].data[0].remove(false);
        this.dynamicChart.redraw();
        this.log('First point removed.');
    }
    randomize() {
        if (!this.dynamicChart) {
            return;
        }
        const next = [];
        for (let i = 0; i < 6; i++) {
            next.push(Math.round((Math.random() * 18 + 2) * 10) / 10);
        }
        this.dynamicChart.series[0].setData(next, true);
        this.log('Series randomised: ' + next.join(', '));
    }
    renameChart() {
        if (!this.dynamicChart) {
            return;
        }
        const label = 'Updated at ' + this.clock();
        this.dynamicChart.setTitle({ text: label });
        this.log('Title set to "' + label + '".');
    }
    zoomZ() { if (this.zAxisChart) {
        this.zAxisChart.zAxis[0].setExtremes(2, 8);
    } }
    resetZ() { if (this.zAxisChart) {
        this.zAxisChart.zAxis[0].setExtremes(null, null);
    } this.log('zAxis reset.'); }
    zoomColor() { if (this.colorAxisChart) {
        this.colorAxisChart.colorAxis[0].setExtremes(2, 7);
    } }
    resetColor() { if (this.colorAxisChart) {
        this.colorAxisChart.colorAxis[0].setExtremes(null, null);
    } this.log('colorAxis reset.'); }
    toggle3d() {
        this.module3dEnabled = !this.module3dEnabled;
        this.moduleOptions = this.makeModuleOptions(this.module3dEnabled);
        this.log('3D ' + (this.module3dEnabled ? 'enabled' : 'disabled') + '.');
    }
    clearLog() { this.logs = []; this.log('Log cleared.'); }
    // ── Options factories ─────────────────────────────────────────────────────
    makeBasicOptions() {
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
    }
    makeStockOptions() {
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
    makeEventOptions() {
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
    makeDynamicOptions() {
        return {
            title: { text: 'Native instance access' },
            subtitle: { text: 'Use (load) to capture the Highcharts object' },
            series: [{ type: 'spline', data: [2, 3, 5, 8, 13, 21] }]
        };
    }
    makeZAxisOptions() {
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
    }
    makeColorAxisOptions() {
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
    }
    makeModuleOptions(enabled) {
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
    makeBulletOptions() {
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
    }
    // ── Highcharts 6: X-Range chart ───────────────────────────────────────────
    makeXRangeOptions() {
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
    }
    // Highcharts 7: Timeline chart
    makeTimelineOptions() {
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
                        { x: Date.UTC(2024, 3, 9), name: 'Scale', label: 'Second rollout phase started' }
                    ]
                }]
        };
    }
    // Highcharts 7: Venn diagram
    makeVennOptions() {
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
    makeOrganizationOptions() {
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
    makeDependencyWheelOptions() {
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
    generateTimeSeries() {
        const pts = [];
        let v = 96;
        const start = Date.UTC(2024, 0, 1);
        for (let i = 0; i < 90; i++) {
            v += Math.sin(i / 7) * 1.8 + (i % 5 === 0 ? 2.2 : -0.4);
            pts.push([start + i * 86400000, Math.round(v * 100) / 100]);
        }
        return pts;
    }
    // ── Helpers ───────────────────────────────────────────────────────────────
    _logExtremes(axis, ctx) {
        if (typeof ctx.min === 'number' && typeof ctx.max === 'number') {
            this.log(axis + ' extremes: ' + ctx.min.toFixed(2) + ' to ' + ctx.max.toFixed(2));
        }
    }
    log(msg) {
        this.logs.unshift(this.clock() + '  ' + msg);
        this.logs = this.logs.slice(0, 16);
    }
    clock() {
        const n = new Date();
        const p = (v) => v < 10 ? '0' + v : '' + v;
        return p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds());
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _revivejs_angular2_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @revivejs/angular2-highcharts */ "./node_modules/@revivejs/angular2-highcharts/dist/fesm2015/revivejs-angular2-highcharts.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Step 1: import ChartModule from the installed npm package

// Step 2: import Highcharts (highstock bundle includes Chart + StockChart)

const Highcharts3d = __webpack_require__(/*! highcharts/highcharts-3d */ "./node_modules/highcharts/highcharts-3d.js");
const HighchartsHeatmap = __webpack_require__(/*! highcharts/modules/heatmap */ "./node_modules/highcharts/modules/heatmap.js");
// Highcharts 6 new modules
const HighchartsBullet = __webpack_require__(/*! highcharts/modules/bullet */ "./node_modules/highcharts/modules/bullet.js");
const HighchartsXRange = __webpack_require__(/*! highcharts/modules/xrange */ "./node_modules/highcharts/modules/xrange.js");
// Highcharts 7 modules
const HighchartsSankey = __webpack_require__(/*! highcharts/modules/sankey */ "./node_modules/highcharts/modules/sankey.js");
const HighchartsOrganization = __webpack_require__(/*! highcharts/modules/organization */ "./node_modules/highcharts/modules/organization.js");
const HighchartsDependencyWheel = __webpack_require__(/*! highcharts/modules/dependency-wheel */ "./node_modules/highcharts/modules/dependency-wheel.js");
const HighchartsVenn = __webpack_require__(/*! highcharts/modules/venn */ "./node_modules/highcharts/modules/venn.js");
const HighchartsTimeline = __webpack_require__(/*! highcharts/modules/timeline */ "./node_modules/highcharts/modules/timeline.js");

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            // Step 4: register ChartModule with forRoot, passing Highcharts and any extra modules
            _revivejs_angular2_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"].forRoot(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__, Highcharts3d, HighchartsHeatmap, HighchartsBullet, HighchartsXRange, HighchartsSankey, HighchartsOrganization, HighchartsDependencyWheel, HighchartsVenn, HighchartsTimeline)
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /storage/data/github/revivejs/angular2-highcharts/angular2-highcharts/docs-src/angular-7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map