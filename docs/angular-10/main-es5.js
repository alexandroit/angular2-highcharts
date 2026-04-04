(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /storage/data/github/revivejs/angular2-highcharts/angular2-highcharts/docs-src/angular-10/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  min-height: 100vh;\n}\n\n/* ── Shell ─────────────────────────────────────────────────────────────── */\n\n.shell {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n}\n\n/* ── Hero ──────────────────────────────────────────────────────────────── */\n\n.hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 1fr);\n  gap: 24px;\n  align-items: stretch;\n  margin-bottom: 28px;\n}\n\n.hero-card {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 28px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.11);\n}\n\n.badge {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #102033;\n  color: #fff;\n  font-size: 11px;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\nh1 {\n  margin: 14px 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\nh2 {\n  margin: 0 0 10px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 26px;\n  font-weight: 700;\n}\n\nh3 {\n  margin: 0 0 8px;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 18px;\n  font-weight: 700;\n}\n\nh4 {\n  margin: 0 0 10px;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #0d5c9e;\n}\n\np {\n  margin: 0;\n  line-height: 1.65;\n  color: #364b63;\n}\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 0.9em;\n  background: rgba(13, 92, 158, 0.08);\n  padding: 1px 5px;\n  border-radius: 4px;\n}\n\npre {\n  margin: 10px 0;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #0f2137;\n  color: #dfeaf6;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  font-size: 12.5px;\n  line-height: 1.6;\n  overflow-x: auto;\n  white-space: pre;\n}\n\npre.code {\n  background: #f0f5fa;\n  color: #1a2f47;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 16px;\n}\n\n.feature {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: linear-gradient(180deg, #fff 0%, #f2f7fb 100%);\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  font-size: 13.5px;\n  line-height: 1.5;\n  color: #364b63;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 3px;\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n/* ── Steps (hero sidebar) ──────────────────────────────────────────────── */\n\n.hero-setup {\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  gap: 16px;\n}\n\n.step {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.step-num {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #0d5c9e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.step strong {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 6px;\n  color: #102033;\n}\n\n/* ── CTA ───────────────────────────────────────────────────────────────── */\n\n.cta-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n}\n\n.btn {\n  display: inline-block;\n  padding: 10px 18px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 14px;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn.secondary {\n  background: #edf4fa;\n  color: #14324f;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\n/* ── Layout principal ──────────────────────────────────────────────────── */\n\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: 24px;\n  align-items: start;\n}\n\n.panels {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n/* ── Panel ─────────────────────────────────────────────────────────────── */\n\n.panel {\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  padding: 24px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n}\n\n.panel-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n\n.demo-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n}\n\n.demo-card {\n  min-width: 0;\n  padding: 18px;\n  border-radius: 18px;\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  overflow: hidden;\n}\n\n.demo-card.full {\n  grid-column: 1 / -1;\n}\n\n/* ── Chart frame ───────────────────────────────────────────────────────── */\n\n.chart-frame {\n  margin-top: 14px;\n  padding: 8px;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  min-height: 300px;\n  min-width: 0;\n  overflow: hidden;\n}\n\n/* ── Controls ──────────────────────────────────────────────────────────── */\n\n.controls {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 999px;\n  padding: 9px 15px;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background: linear-gradient(135deg, #d24b2a 0%, #1f5ba7 100%);\n  cursor: pointer;\n}\n\nbutton.secondary {\n  color: #14324f;\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.12);\n}\n\nbutton.ghost {\n  color: #14324f;\n  background: transparent;\n  border: 1px dashed rgba(20, 50, 79, 0.22);\n}\n\nbutton.small {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n\n/* ── Note ──────────────────────────────────────────────────────────────── */\n\n.note {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: #fff6e8;\n  color: #6f4a16;\n  border: 1px solid rgba(210, 128, 31, 0.16);\n  font-size: 13px;\n}\n\n/* ── Ref table panel ───────────────────────────────────────────────────── */\n\n.ref-panel .ref-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.ref-card {\n  padding: 16px;\n  border-radius: 14px;\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n}\n\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.api-table th {\n  text-align: left;\n  padding: 6px 10px;\n  background: rgba(13, 92, 158, 0.06);\n  color: #102033;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.api-table td {\n  padding: 6px 10px;\n  border-top: 1px solid rgba(16, 32, 51, 0.06);\n  color: #364b63;\n  vertical-align: top;\n}\n\n.api-table td:first-child {\n  white-space: nowrap;\n}\n\n/* ── Log panel ─────────────────────────────────────────────────────────── */\n\n.log-panel {\n  position: sticky;\n  top: 20px;\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 16px 48px rgba(27, 66, 110, 0.1);\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.log-controls {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.log-list {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n\n.log-entry {\n  padding: 9px 12px;\n  border-radius: 12px;\n  background: #f6f9fc;\n  border: 1px solid rgba(16, 32, 51, 0.07);\n  color: #27425f;\n  font-size: 12.5px;\n  line-height: 1.45;\n  font-family: Consolas, \"Liberation Mono\", monospace;\n  word-break: break-all;\n}\n\n/* ── Footer ────────────────────────────────────────────────────────────── */\n\n.footer {\n  margin-top: 28px;\n  padding: 20px 24px;\n  border-radius: 18px;\n  background: rgba(16, 32, 51, 0.92);\n  color: #c8d8ea;\n}\n\n/* ── Responsive ────────────────────────────────────────────────────────── */\n\n@media (max-width: 1100px) {\n  .hero,\n  .layout {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel {\n    position: static;\n    max-height: 360px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .layout {\n    grid-template-columns: minmax(0, 1fr) 260px;\n  }\n\n  .demo-card.full {\n    grid-column: auto;\n  }\n}\n\n@media (max-width: 760px) {\n  .demo-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: auto;\n  }\n\n  h1 { font-size: 34px; }\n\n  .feature-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 500px) {\n  .shell {\n    padding: 18px 12px 40px;\n  }\n\n  .hero-card, .panel, .log-panel {\n    padding: 16px;\n    border-radius: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0UsYUFBYTtFQUNiLDBEQUEwRDtFQUMxRCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZEQUE2RDtFQUM3RCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0UsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBEQUEwRDtFQUMxRCx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNkRBQTZEO0VBQzdELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLGVBQWU7QUFDakI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwREFBMEQ7RUFDMUQsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOENBQThDO0VBQzlDLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtREFBbUQ7RUFDbkQscUJBQXFCO0FBQ3ZCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0U7O0lBRUUsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLEtBQUssZUFBZSxFQUFFOztFQUV0QjtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiDilIDilIAgU2hlbGwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uc2hlbGwge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweCA2MHB4O1xufVxuXG4vKiDilIDilIAgSGVybyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS44ZnIpIG1pbm1heCgzMjBweCwgMWZyKTtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmhlcm8tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQ4cHggcmdiYSgyNywgNjYsIDExMCwgMC4xMSk7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMTAyMDMzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMTRweCAwIDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzBkNWM5ZTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIGNvbG9yOiAjMzY0YjYzO1xufVxuXG5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDkyLCAxNTgsIDAuMDgpO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnByZSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwZjIxMzc7XG4gIGNvbG9yOiAjZGZlYWY2O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbnByZS5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgY29sb3I6ICMxYTJmNDc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wOCk7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmZlYXR1cmUge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmMmY3ZmIgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNyk7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzM2NGI2Mztcbn1cblxuLmZlYXR1cmUgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyog4pSA4pSAIFN0ZXBzIChoZXJvIHNpZGViYXIpIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmhlcm8tc2V0dXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zdGVwLW51bSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwZDVjOWU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RlcCBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjMTAyMDMzO1xufVxuXG4vKiDilIDilIAgQ1RBIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmN0YS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDI0YjJhIDAlLCAjMWY1YmE3IDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4uc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI2VkZjRmYTtcbiAgY29sb3I6ICMxNDMyNGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAsIDUwLCA3OSwgMC4xMik7XG59XG5cbi8qIOKUgOKUgCBMYXlvdXQgcHJpbmNpcGFsIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMjgwcHg7XG4gIGdhcDogMjRweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4ucGFuZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4vKiDilIDilIAgUGFuZWwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4ucGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGJveC1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMjcsIDY2LCAxMTAsIDAuMSk7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmRlbW8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDE4cHg7XG59XG5cbi5kZW1vLWNhcmQge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmN2ZhZmMgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZW1vLWNhcmQuZnVsbCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi8qIOKUgOKUgCBDaGFydCBmcmFtZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5jaGFydC1mcmFtZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjA3KTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyog4pSA4pSAIENvbnRyb2xzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkMjRiMmEgMCUsICMxZjViYTcgMTAwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLnNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMTQzMjRmO1xuICBiYWNrZ3JvdW5kOiAjZWRmNGZhO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwLCA1MCwgNzksIDAuMTIpO1xufVxuXG5idXR0b24uZ2hvc3Qge1xuICBjb2xvcjogIzE0MzI0ZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDIwLCA1MCwgNzksIDAuMjIpO1xufVxuXG5idXR0b24uc21hbGwge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiDilIDilIAgTm90ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5ub3RlIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmNmU4O1xuICBjb2xvcjogIzZmNGExNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTAsIDEyOCwgMzEsIDAuMTYpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIOKUgOKUgCBSZWYgdGFibGUgcGFuZWwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4ucmVmLXBhbmVsIC5yZWYtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMThweDtcbn1cblxuLnJlZi1jYXJkIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2Y3ZmFmYyAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjA4KTtcbn1cblxuLmFwaS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5hcGktdGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgOTIsIDE1OCwgMC4wNik7XG4gIGNvbG9yOiAjMTAyMDMzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5hcGktdGFibGUgdGQge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNik7XG4gIGNvbG9yOiAjMzY0YjYzO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYXBpLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyog4pSA4pSAIExvZyBwYW5lbCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbi5sb2ctcGFuZWwge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBib3gtc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDI3LCA2NiwgMTEwLCAwLjEpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLmxvZy1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5sb2ctbGlzdCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBmbGV4OiAxO1xufVxuXG4ubG9nLWVudHJ5IHtcbiAgcGFkZGluZzogOXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmNmY5ZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wNyk7XG4gIGNvbG9yOiAjMjc0MjVmO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgbW9ub3NwYWNlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi8qIOKUgOKUgCBGb290ZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAzMiwgNTEsIDAuOTIpO1xuICBjb2xvcjogI2M4ZDhlYTtcbn1cblxuLyog4pSA4pSAIFJlc3BvbnNpdmUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5sb2ctcGFuZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWF4LWhlaWdodDogMzYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDI2MHB4O1xuICB9XG5cbiAgLmRlbW8tY2FyZC5mdWxsIHtcbiAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLmRlbW8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZGVtby1jYXJkLmZ1bGwge1xuICAgIGdyaWQtY29sdW1uOiBhdXRvO1xuICB9XG5cbiAgaDEgeyBmb250LXNpemU6IDM0cHg7IH1cblxuICAuZmVhdHVyZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxOHB4IDEycHggNDBweDtcbiAgfVxuXG4gIC5oZXJvLWNhcmQsIC5wYW5lbCwgLmxvZy1wYW5lbCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! highcharts/highstock */
      "5ZEx");
      /* harmony import */


      var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          // ── Internal state ────────────────────────────────────────────────────────
          this.logs = [];
          this.module3dEnabled = true; // Set a global colour palette before building any chart options

          highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__["setOptions"]({
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
          this.radialBarOptions = this.makeRadialBarOptions();
          this.sortedBarOptions = this.makeSortedBarOptions();
          this.markerClusterOptions = this.makeMarkerClusterOptions();
          this.log('Demo loaded successfully.');
        } // ── Instance capture handlers ─────────────────────────────────────────────


        return _createClass(AppComponent, [{
          key: "onEventLoad",
          value: function onEventLoad(e) {
            this.eventChart = e.context;
            this.log('Event-chart instance ready.');
          }
        }, {
          key: "onDynamicLoad",
          value: function onDynamicLoad(e) {
            this.dynamicChart = e.context;
            this.log('Dynamic-chart instance ready.');
          }
        }, {
          key: "onZAxisLoad",
          value: function onZAxisLoad(e) {
            this.zAxisChart = e.context;
            this.log('zAxis-chart instance ready.');
          }
        }, {
          key: "onColorAxisLoad",
          value: function onColorAxisLoad(e) {
            this.colorAxisChart = e.context;
            this.log('colorAxis-chart instance ready.');
          } // ── Wrapper event handlers ────────────────────────────────────────────────

        }, {
          key: "onSelection",
          value: function onSelection(e) {
            if (e.originalEvent && e.originalEvent.xAxis && e.originalEvent.xAxis.length) {
              var ax = e.originalEvent.xAxis[0];
              this.log('Selection: ' + ax.min.toFixed(2) + ' to ' + ax.max.toFixed(2));
            }
          }
        }, {
          key: "onSeriesHover",
          value: function onSeriesHover(e) {
            this.log('Series hover: ' + e.context.name);
          }
        }, {
          key: "onPointSelect",
          value: function onPointSelect(e) {
            this.log('Point selected: ' + e.context.category + ' = ' + e.context.y);
          }
        }, {
          key: "onXExtremes",
          value: function onXExtremes(e) {
            this._logExtremes('X', e.context);
          }
        }, {
          key: "onYExtremes",
          value: function onYExtremes(e) {
            this._logExtremes('Y', e.context);
          }
        }, {
          key: "onZExtremes",
          value: function onZExtremes(e) {
            this._logExtremes('Z', e.context);
          }
        }, {
          key: "onColorExtremes",
          value: function onColorExtremes(e) {
            this._logExtremes('Color', e.context);
          } // ── User actions ──────────────────────────────────────────────────────────

        }, {
          key: "zoomEventX",
          value: function zoomEventX() {
            if (this.eventChart) {
              this.eventChart.xAxis[0].setExtremes(1, 4);
            }
          }
        }, {
          key: "zoomEventY",
          value: function zoomEventY() {
            if (this.eventChart) {
              this.eventChart.yAxis[0].setExtremes(20, 90);
            }
          }
        }, {
          key: "resetEventAxes",
          value: function resetEventAxes() {
            if (this.eventChart) {
              this.eventChart.xAxis[0].setExtremes(null, null);
              this.eventChart.yAxis[0].setExtremes(null, null);
            }

            this.log('Axes reset.');
          }
        }, {
          key: "addPoint",
          value: function addPoint() {
            if (!this.dynamicChart) {
              return;
            }

            var val = Math.round((Math.random() * 14 + 4) * 10) / 10;
            this.dynamicChart.series[0].addPoint(val, true, false);
            this.log('Point added: ' + val);
          }
        }, {
          key: "removePoint",
          value: function removePoint() {
            if (!this.dynamicChart || !this.dynamicChart.series[0].data.length) {
              return;
            }

            this.dynamicChart.series[0].data[0].remove(false);
            this.dynamicChart.redraw();
            this.log('First point removed.');
          }
        }, {
          key: "randomize",
          value: function randomize() {
            if (!this.dynamicChart) {
              return;
            }

            var next = [];

            for (var i = 0; i < 6; i++) {
              next.push(Math.round((Math.random() * 18 + 2) * 10) / 10);
            }

            this.dynamicChart.series[0].setData(next, true);
            this.log('Series randomised: ' + next.join(', '));
          }
        }, {
          key: "renameChart",
          value: function renameChart() {
            if (!this.dynamicChart) {
              return;
            }

            var label = 'Updated at ' + this.clock();
            this.dynamicChart.setTitle({
              text: label
            });
            this.log('Title set to "' + label + '".');
          }
        }, {
          key: "zoomZ",
          value: function zoomZ() {
            if (this.zAxisChart) {
              this.zAxisChart.zAxis[0].setExtremes(2, 8);
            }
          }
        }, {
          key: "resetZ",
          value: function resetZ() {
            if (this.zAxisChart) {
              this.zAxisChart.zAxis[0].setExtremes(null, null);
            }

            this.log('zAxis reset.');
          }
        }, {
          key: "zoomColor",
          value: function zoomColor() {
            if (this.colorAxisChart) {
              this.colorAxisChart.colorAxis[0].setExtremes(2, 7);
            }
          }
        }, {
          key: "resetColor",
          value: function resetColor() {
            if (this.colorAxisChart) {
              this.colorAxisChart.colorAxis[0].setExtremes(null, null);
            }

            this.log('colorAxis reset.');
          }
        }, {
          key: "toggle3d",
          value: function toggle3d() {
            this.module3dEnabled = !this.module3dEnabled;
            this.moduleOptions = this.makeModuleOptions(this.module3dEnabled);
            this.log('3D ' + (this.module3dEnabled ? 'enabled' : 'disabled') + '.');
          }
        }, {
          key: "clearLog",
          value: function clearLog() {
            this.logs = [];
            this.log('Log cleared.');
          } // ── Options factories ─────────────────────────────────────────────────────

        }, {
          key: "makeBasicOptions",
          value: function makeBasicOptions() {
            return {
              title: {
                text: 'Basic chart'
              },
              subtitle: {
                text: 'Minimal usage: <chart [options]="opts"></chart>'
              },
              xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
              },
              yAxis: {
                title: {
                  text: 'Score'
                }
              },
              series: [{
                name: 'Alpha',
                type: 'line',
                data: [29.9, 41.2, 51.8, 63.4, 72.1, 84.6]
              }, {
                name: 'Beta',
                type: 'line',
                data: [18.2, 24.5, 39.1, 44.4, 60.3, 67.9]
              }]
            };
          }
        }, {
          key: "makeStockOptions",
          value: function makeStockOptions() {
            return {
              rangeSelector: {
                selected: 1
              },
              title: {
                text: 'StockChart — time series'
              },
              series: [{
                name: 'Asset',
                type: 'line',
                data: this.generateTimeSeries(),
                tooltip: {
                  valueDecimals: 2
                }
              }]
            };
          }
        }, {
          key: "makeEventOptions",
          value: function makeEventOptions() {
            return {
              chart: {
                zoomType: 'xy'
              },
              title: {
                text: 'Event bridge'
              },
              subtitle: {
                text: 'Drag to select, hover a series, or click a point'
              },
              xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                title: {
                  text: 'Visits'
                }
              },
              plotOptions: {
                series: {
                  allowPointSelect: true
                }
              },
              series: [{
                name: 'Visits',
                type: 'column',
                data: [13, 18, 42, 68, 81, 55, 39]
              }]
            };
          }
        }, {
          key: "makeDynamicOptions",
          value: function makeDynamicOptions() {
            return {
              title: {
                text: 'Native instance access'
              },
              subtitle: {
                text: 'Use (load) to capture the Highcharts object'
              },
              series: [{
                type: 'spline',
                data: [2, 3, 5, 8, 13, 21]
              }]
            };
          }
        }, {
          key: "makeZAxisOptions",
          value: function makeZAxisOptions() {
            return {
              chart: {
                type: 'scatter',
                margin: 70,
                options3d: {
                  enabled: true,
                  alpha: 10,
                  beta: 28,
                  depth: 280,
                  viewDistance: 5
                }
              },
              title: {
                text: '<zAxis> wrapper'
              },
              subtitle: {
                text: 'Requires highcharts-3d registered in forRoot'
              },
              xAxis: {
                min: 0,
                max: 10
              },
              yAxis: {
                min: 0,
                max: 10
              },
              zAxis: {
                min: 0,
                max: 10,
                title: {
                  text: 'Depth'
                }
              },
              plotOptions: {
                scatter: {
                  width: 10,
                  height: 10,
                  depth: 10
                }
              },
              series: [{
                name: '3D points',
                type: 'scatter',
                data: [[1, 6, 2], [2, 4, 5], [3, 8, 3], [5, 3, 7], [7, 2, 9], [8, 7, 6], [9, 5, 1]]
              }]
            };
          }
        }, {
          key: "makeColorAxisOptions",
          value: function makeColorAxisOptions() {
            return {
              chart: {
                type: 'heatmap'
              },
              title: {
                text: '<colorAxis> wrapper'
              },
              subtitle: {
                text: 'Requires heatmap module registered in forRoot'
              },
              xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
              },
              yAxis: {
                categories: ['Morning', 'Noon', 'Evening', 'Night'],
                title: null
              },
              colorAxis: {
                min: 0,
                minColor: '#f3f7fb',
                maxColor: '#1f5ba7'
              },
              legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 200
              },
              series: [{
                borderWidth: 1,
                type: 'heatmap',
                data: [[0, 0, 2], [1, 0, 4], [2, 0, 5], [3, 0, 7], [4, 0, 8], [0, 1, 1], [1, 1, 3], [2, 1, 6], [3, 1, 8], [4, 1, 9], [0, 2, 0], [1, 2, 2], [2, 2, 5], [3, 2, 7], [4, 2, 6], [0, 3, 1], [1, 3, 2], [2, 3, 4], [3, 3, 5], [4, 3, 7]]
              }]
            };
          }
        }, {
          key: "makeModuleOptions",
          value: function makeModuleOptions(enabled) {
            return {
              title: {
                text: enabled ? '3D column — module active' : '2D column — module inactive'
              },
              subtitle: {
                text: 'Reassign this.moduleOptions to trigger Angular change detection'
              },
              chart: {
                type: 'column',
                margin: 70,
                options3d: {
                  enabled: enabled,
                  alpha: 12,
                  beta: 18,
                  depth: 48
                }
              },
              plotOptions: {
                column: {
                  depth: enabled ? 24 : 0
                }
              },
              xAxis: {
                categories: ['North', 'South', 'East', 'West']
              },
              series: [{
                name: 'Orders',
                type: 'column',
                data: [29.9, 71.5, 46.4, 58.2]
              }]
            };
          } // ── Highcharts 6: Bullet chart ────────────────────────────────────────────

        }, {
          key: "makeBulletOptions",
          value: function makeBulletOptions() {
            return {
              chart: {
                type: 'bullet',
                inverted: true,
                marginLeft: 135
              },
              title: {
                text: 'Bullet chart — Highcharts 6'
              },
              subtitle: {
                text: 'Actual vs target vs qualitative ranges. Requires highcharts/modules/bullet.'
              },
              legend: {
                enabled: false
              },
              xAxis: {
                categories: ['Revenue', 'Profit', 'Customer sat.', 'New accounts']
              },
              yAxis: {
                gridLineWidth: 0,
                plotBands: [{
                  from: 0,
                  to: 150,
                  color: '#d9eaf7'
                }, {
                  from: 150,
                  to: 225,
                  color: '#b8d4ed'
                }, {
                  from: 225,
                  to: 300,
                  color: '#7fb0db'
                }],
                title: null
              },
              plotOptions: {
                series: {
                  pointPadding: 0.25,
                  borderWidth: 0,
                  targetOptions: {
                    width: '200%'
                  }
                }
              },
              series: [{
                type: 'bullet',
                data: [{
                  y: 194,
                  target: 200
                }, {
                  y: 83,
                  target: 75
                }, {
                  y: 72,
                  target: 68
                }, {
                  y: 31,
                  target: 40
                }]
              }]
            };
          } // ── Highcharts 6: X-Range chart ───────────────────────────────────────────

        }, {
          key: "makeXRangeOptions",
          value: function makeXRangeOptions() {
            return {
              chart: {
                type: 'xrange'
              },
              title: {
                text: 'X-Range chart — Highcharts 6'
              },
              subtitle: {
                text: 'Horizontal bars spanning a range on the X axis. Requires highcharts/modules/xrange.'
              },
              xAxis: {
                type: 'datetime',
                min: Date.UTC(2024, 10, 20),
                max: Date.UTC(2024, 11, 31)
              },
              yAxis: {
                title: {
                  text: ''
                },
                categories: ['Design', 'Development', 'Testing', 'Deployment'],
                reversed: true
              },
              series: [{
                name: 'Project plan',
                type: 'xrange',
                pointWidth: 20,
                data: [{
                  x: Date.UTC(2024, 10, 21),
                  x2: Date.UTC(2024, 10, 28),
                  y: 0
                }, {
                  x: Date.UTC(2024, 10, 25),
                  x2: Date.UTC(2024, 11, 10),
                  y: 1
                }, {
                  x: Date.UTC(2024, 11, 8),
                  x2: Date.UTC(2024, 11, 18),
                  y: 2
                }, {
                  x: Date.UTC(2024, 11, 16),
                  x2: Date.UTC(2024, 11, 24),
                  y: 3
                }]
              }]
            };
          } // Highcharts 7: Timeline chart

        }, {
          key: "makeTimelineOptions",
          value: function makeTimelineOptions() {
            return {
              chart: {
                type: 'timeline'
              },
              title: {
                text: 'Timeline chart — Highcharts 7'
              },
              subtitle: {
                text: 'Chronological milestones using highcharts/modules/timeline.'
              },
              xAxis: {
                visible: false
              },
              yAxis: {
                visible: false
              },
              legend: {
                enabled: false
              },
              series: [{
                type: 'timeline',
                data: [{
                  x: Date.UTC(2024, 0, 15),
                  name: 'Discovery',
                  label: 'Research and concept approval'
                }, {
                  x: Date.UTC(2024, 1, 12),
                  name: 'Prototype',
                  label: 'Interactive prototype reviewed'
                }, {
                  x: Date.UTC(2024, 2, 18),
                  name: 'Launch',
                  label: 'Feature released to customers'
                }, {
                  x: Date.UTC(2024, 3, 9),
                  name: 'Scale',
                  label: 'Second rollout phase started'
                }]
              }]
            };
          } // Highcharts 7: Venn diagram

        }, {
          key: "makeVennOptions",
          value: function makeVennOptions() {
            return {
              title: {
                text: 'Venn diagram — Highcharts 7'
              },
              subtitle: {
                text: 'Overlap between product capabilities. Requires highcharts/modules/venn.'
              },
              series: [{
                type: 'venn',
                data: [{
                  sets: ['Angular'],
                  value: 8
                }, {
                  sets: ['Highcharts'],
                  value: 8
                }, {
                  sets: ['TypeScript'],
                  value: 7
                }, {
                  sets: ['Angular', 'Highcharts'],
                  value: 4
                }, {
                  sets: ['Angular', 'TypeScript'],
                  value: 5
                }, {
                  sets: ['Highcharts', 'TypeScript'],
                  value: 3
                }, {
                  sets: ['Angular', 'Highcharts', 'TypeScript'],
                  value: 2
                }]
              }]
            };
          } // Highcharts 7: Organization chart

        }, {
          key: "makeOrganizationOptions",
          value: function makeOrganizationOptions() {
            return {
              title: {
                text: 'Organization chart — Highcharts 7'
              },
              subtitle: {
                text: 'Hierarchical relationships built on the sankey engine.'
              },
              series: [{
                type: 'organization',
                name: 'Delivery team',
                keys: ['from', 'to'],
                data: [['Project lead', 'Product owner'], ['Project lead', 'Engineering lead'], ['Engineering lead', 'Frontend engineer'], ['Engineering lead', 'Backend engineer'], ['Product owner', 'UX designer']],
                nodes: [{
                  id: 'Project lead',
                  title: 'Lead',
                  name: 'Morgan Lee'
                }, {
                  id: 'Product owner',
                  title: 'Product',
                  name: 'Riley Chen'
                }, {
                  id: 'Engineering lead',
                  title: 'Engineering',
                  name: 'Jordan Patel'
                }, {
                  id: 'Frontend engineer',
                  title: 'Frontend',
                  name: 'Taylor Kim'
                }, {
                  id: 'Backend engineer',
                  title: 'Backend',
                  name: 'Avery Cruz'
                }, {
                  id: 'UX designer',
                  title: 'Design',
                  name: 'Quinn Brooks'
                }],
                colorByPoint: false,
                color: '#4f8fba',
                borderColor: '#1f5ba7',
                dataLabels: {
                  color: '#ffffff'
                }
              }]
            };
          } // Highcharts 7: Dependency wheel

        }, {
          key: "makeDependencyWheelOptions",
          value: function makeDependencyWheelOptions() {
            return {
              title: {
                text: 'Dependency wheel — Highcharts 7'
              },
              subtitle: {
                text: 'Flow relationships between application layers.'
              },
              series: [{
                type: 'dependencywheel',
                name: 'Dependencies',
                keys: ['from', 'to', 'weight'],
                data: [['UI', 'API', 3], ['API', 'Database', 5], ['API', 'Auth', 2], ['Auth', 'Database', 1], ['Workers', 'API', 2], ['Workers', 'Database', 2]],
                dataLabels: {
                  color: '#102033'
                }
              }]
            };
          } // Highcharts 8: Radial bar chart

        }, {
          key: "makeRadialBarOptions",
          value: function makeRadialBarOptions() {
            return {
              chart: {
                polar: true,
                inverted: true,
                type: 'column'
              },
              title: {
                text: 'Radial bar chart — Highcharts 8'
              },
              subtitle: {
                text: 'A radial presentation built with an inverted polar column chart.'
              },
              pane: {
                endAngle: 270,
                size: '85%',
                innerSize: '25%'
              },
              legend: {
                enabled: false
              },
              xAxis: {
                categories: ['Availability', 'Throughput', 'Quality', 'Automation'],
                lineWidth: 0,
                tickLength: 0
              },
              yAxis: {
                min: 0,
                max: 100,
                gridLineInterpolation: 'polygon',
                title: {
                  text: ''
                }
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
          } // Highcharts 8: Data sorting

        }, {
          key: "makeSortedBarOptions",
          value: function makeSortedBarOptions() {
            return {
              chart: {
                type: 'bar'
              },
              title: {
                text: 'Data sorting — Highcharts 8'
              },
              subtitle: {
                text: 'Series can sort category points automatically while preserving animation.'
              },
              xAxis: {
                type: 'category'
              },
              yAxis: {
                title: {
                  text: 'Story points closed'
                }
              },
              legend: {
                enabled: false
              },
              series: [{
                type: 'bar',
                name: 'Completed',
                dataSorting: {
                  enabled: true
                },
                data: [{
                  name: 'Search',
                  y: 12
                }, {
                  name: 'Checkout',
                  y: 31
                }, {
                  name: 'Analytics',
                  y: 18
                }, {
                  name: 'Accounts',
                  y: 26
                }, {
                  name: 'Notifications',
                  y: 9
                }]
              }]
            };
          } // Highcharts 8: Marker clusters

        }, {
          key: "makeMarkerClusterOptions",
          value: function makeMarkerClusterOptions() {
            var data = [];

            for (var i = 0; i < 120; i++) {
              var x = i % 12 * 8 + i % 3;
              var y = Math.floor(i / 12) * 7 + i % 5;
              data.push([x, y]);
            }

            return {
              chart: {
                type: 'scatter',
                zoomType: 'xy'
              },
              title: {
                text: 'Marker clusters — Highcharts 8'
              },
              subtitle: {
                text: 'Scatter points can be grouped visually with the marker-clusters module.'
              },
              xAxis: {
                title: {
                  text: 'Longitude bucket'
                }
              },
              yAxis: {
                title: {
                  text: 'Latitude bucket'
                }
              },
              legend: {
                enabled: false
              },
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
                data: data
              }]
            };
          }
        }, {
          key: "generateTimeSeries",
          value: function generateTimeSeries() {
            var pts = [];
            var v = 96;
            var start = Date.UTC(2024, 0, 1);

            for (var i = 0; i < 90; i++) {
              v += Math.sin(i / 7) * 1.8 + (i % 5 === 0 ? 2.2 : -0.4);
              pts.push([start + i * 86400000, Math.round(v * 100) / 100]);
            }

            return pts;
          } // ── Helpers ───────────────────────────────────────────────────────────────

        }, {
          key: "_logExtremes",
          value: function _logExtremes(axis, ctx) {
            if (typeof ctx.min === 'number' && typeof ctx.max === 'number') {
              this.log(axis + ' extremes: ' + ctx.min.toFixed(2) + ' to ' + ctx.max.toFixed(2));
            }
          }
        }, {
          key: "log",
          value: function log(msg) {
            this.logs.unshift(this.clock() + '  ' + msg);
            this.logs = this.logs.slice(0, 16);
          }
        }, {
          key: "clock",
          value: function clock() {
            var n = new Date();

            var p = function p(v) {
              return v < 10 ? '0' + v : '' + v;
            };

            return p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds());
          }
        }]);
      }();

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"shell\">\n\n  <!-- ═══ HERO ═══════════════════════════════════════════════════════════════ -->\n  <section class=\"hero\">\n    <div class=\"hero-card hero-main\">\n      <span class=\"badge\">Angular 10.2 · Highcharts 8</span>\n      <h1>@revivejs/angular2-highcharts</h1>\n      <p>\n        A thin, unopinionated Angular wrapper for Highcharts, StockChart, 3D charts and heatmaps.\n        Install the package, register the module, and drop <code>&lt;chart&gt;</code> straight into your template.\n      </p>\n      <div class=\"feature-grid\">\n        <div class=\"feature\">\n          <strong>Zero config</strong>\n          Thin wrapper — the full Highcharts API remains directly accessible.\n        </div>\n        <div class=\"feature\">\n          <strong>Event bridge</strong>\n          Highcharts events become Angular <code>@Output()</code> emitters automatically.\n        </div>\n        <div class=\"feature\">\n          <strong>Native instance</strong>\n          Capture the <code>Highcharts.Chart</code> object via <code>(load)</code>.\n        </div>\n        <div class=\"feature\">\n          <strong>Optional modules</strong>\n          3D, heatmap, stock — register only what you need.\n        </div>\n      </div>\n      <div class=\"cta-row\">\n        <a class=\"btn\" href=\"#demos\">See demos</a>\n        <a class=\"btn secondary\" href=\"https://github.com/alexandroit/angular2-highcharts#readme\" target=\"_blank\">README</a>\n      </div>\n    </div>\n\n    <div class=\"hero-card hero-setup\">\n      <h2>Setup in 3 steps</h2>\n\n      <div class=\"step\">\n        <span class=\"step-num\">1</span>\n        <div>\n          <strong>Install</strong>\n          <pre>npm install @revivejs/angular2-highcharts highcharts</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">2</span>\n        <div>\n          <strong>Register in your NgModule</strong>\n<pre>import &#123; ChartModule &#125; from '@revivejs/angular2-highcharts';\nimport * as Highcharts from 'highcharts/highstock';\ndeclare var require: any;\nconst HC3d   = require('highcharts/highcharts-3d');\nconst HCHeat = require('highcharts/modules/heatmap');\n\n&#64;NgModule(&#123;\n  imports: [\n    ChartModule.forRoot(Highcharts, HC3d, HCHeat)\n  ]\n&#125;)</pre>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">3</span>\n        <div>\n          <strong>Use in your template</strong>\n          <pre>&lt;chart [options]=\"myOptions\"&gt;&lt;/chart&gt;</pre>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ═══ DEMOS ══════════════════════════════════════════════════════════════ -->\n  <section class=\"layout\" id=\"demos\">\n    <div class=\"panels\">\n\n      <!-- ── BLOCK 1: Core ──────────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Core — basic usage</h2>\n          <p>These two demos cover 90 % of everyday use cases.</p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Basic chart -->\n          <section class=\"demo-card\">\n            <h3>Basic chart</h3>\n            <p>Pass a standard Highcharts options object to the <code>[options]</code> input.</p>\n            <pre class=\"code\">// component.ts\noptions = &#123;\n  title: &#123; text: 'My chart' &#125;,\n  series: [&#123; type: 'line', data: [...] &#125;]\n&#125;;</pre>\n            <pre class=\"code\">&lt;!-- template.html --&gt;\n&lt;chart [options]=\"options\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"basicOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- StockChart -->\n          <section class=\"demo-card\">\n            <h3>StockChart</h3>\n            <p>Set <code>type=\"StockChart\"</code> to use the Highstock constructor.</p>\n            <pre class=\"code\">&lt;chart type=\"StockChart\"\n      [options]=\"stockOptions\"&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart type=\"StockChart\" [options]=\"stockOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 2: Event bridge ──────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Event bridge</h2>\n          <p>\n            Highcharts events are exposed as <code>@Output()</code> on the child components\n            <code>&lt;series&gt;</code>, <code>&lt;point&gt;</code>, <code>&lt;xAxis&gt;</code> and <code>&lt;yAxis&gt;</code>.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Chart, series and point events</h3>\n            <p>\n              The <code>(load)</code> output on <code>&lt;chart&gt;</code> delivers the native instance.\n              <code>(selection)</code> fires when the user drags a zoom area.\n              <code>&lt;series&gt;</code> and <code>&lt;point&gt;</code> forward hover and select events into Angular.\n            </p>\n<pre class=\"code\">&lt;chart [options]=\"eventOptions\"\n       (load)=\"onEventLoad($event)\"\n       (selection)=\"onSelection($event)\"&gt;\n\n  &lt;series (mouseOver)=\"onSeriesHover($event)\"&gt;\n    &lt;point (select)=\"onPointSelect($event)\"&gt;&lt;/point&gt;\n  &lt;/series&gt;\n\n  &lt;xAxis (afterSetExtremes)=\"onXExtremes($event)\"&gt;&lt;/xAxis&gt;\n  &lt;yAxis (afterSetExtremes)=\"onYExtremes($event)\"&gt;&lt;/yAxis&gt;\n\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"zoomEventX()\">Zoom X</button>\n              <button class=\"secondary\" (click)=\"zoomEventY()\">Zoom Y</button>\n              <button class=\"ghost\" (click)=\"resetEventAxes()\">Reset axes</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"eventOptions\"\n                     (load)=\"onEventLoad($event)\"\n                     (selection)=\"onSelection($event)\">\n                <series (mouseOver)=\"onSeriesHover($event)\">\n                  <point (select)=\"onPointSelect($event)\"></point>\n                </series>\n                <xAxis (afterSetExtremes)=\"onXExtremes($event)\"></xAxis>\n                <yAxis (afterSetExtremes)=\"onYExtremes($event)\"></yAxis>\n              </chart>\n            </div>\n            <p class=\"note\">\n              Drag over the chart to select a range, hover over a bar, or click a column.\n              Every event appears in the <strong>Event Log</strong> on the right.\n            </p>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 3: Dynamic instance ─────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Native instance access</h2>\n          <p>\n            The wrapper is intentionally thin. For imperative mutations, capture the\n            <code>Highcharts.Chart</code> object from <code>(load)</code> and call the native API directly.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Imperative mutations via the Highcharts API</h3>\n<pre class=\"code\">// component.ts\nonDynamicLoad(e: any) &#123;\n  this.chart = e.context; // native Highcharts.Chart object\n&#125;\n\naddPoint() &#123;\n  this.chart.series[0].addPoint(Math.random() * 20, true, false);\n&#125;\n\nrandomize() &#123;\n  this.chart.series[0].setData([...newData], true);\n&#125;\n\nrenameChart() &#123;\n  this.chart.setTitle(&#123; text: 'New title' &#125;);\n&#125;</pre>\n<pre class=\"code\">&lt;chart [options]=\"dynamicOptions\"\n       (load)=\"onDynamicLoad($event)\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button (click)=\"addPoint()\">Add point</button>\n              <button class=\"secondary\" (click)=\"randomize()\">Randomise series</button>\n              <button class=\"secondary\" (click)=\"renameChart()\">Rename chart</button>\n              <button class=\"ghost\" (click)=\"removePoint()\">Remove 1st point</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"dynamicOptions\" (load)=\"onDynamicLoad($event)\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 4: Axis wrappers ─────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Extra axis wrappers</h2>\n          <p>\n            <code>&lt;zAxis&gt;</code> and <code>&lt;colorAxis&gt;</code> work the same way as the standard axes:\n            <code>(afterSetExtremes)</code> events and programmatic control via the native instance.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n\n          <!-- zAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;zAxis&gt; wrapper</h3>\n            <p>3D scatter chart — requires <code>highcharts-3d</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"zAxisOptions\"\n       (load)=\"onZAxisLoad($event)\"&gt;\n  &lt;zAxis (afterSetExtremes)=\"onZExtremes($event)\"&gt;\n  &lt;/zAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomZ()\">Clamp Z</button>\n              <button class=\"ghost\" (click)=\"resetZ()\">Reset Z</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"zAxisOptions\" (load)=\"onZAxisLoad($event)\">\n                <zAxis (afterSetExtremes)=\"onZExtremes($event)\"></zAxis>\n              </chart>\n            </div>\n          </section>\n\n          <!-- colorAxis -->\n          <section class=\"demo-card\">\n            <h3>&lt;colorAxis&gt; wrapper</h3>\n            <p>Heatmap — requires <code>highcharts/modules/heatmap</code> in <code>forRoot</code>.</p>\n<pre class=\"code\">&lt;chart [options]=\"colorAxisOptions\"\n       (load)=\"onColorAxisLoad($event)\"&gt;\n  &lt;colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"&gt;\n  &lt;/colorAxis&gt;\n&lt;/chart&gt;</pre>\n            <div class=\"controls\">\n              <button class=\"secondary\" (click)=\"zoomColor()\">Narrow range</button>\n              <button class=\"ghost\" (click)=\"resetColor()\">Reset colour</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"colorAxisOptions\" (load)=\"onColorAxisLoad($event)\">\n                <colorAxis (afterSetExtremes)=\"onColorExtremes($event)\"></colorAxis>\n              </chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 5: Modules ───────────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Optional modules</h2>\n          <p>\n            Pass the modules you need to <code>forRoot</code>. They are applied once at startup.\n            To toggle features at runtime, reassign the options object in your component.\n          </p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card full\">\n            <h3>Toggle 3D at runtime</h3>\n<pre class=\"code\">toggle3d() &#123;\n  this.enabled = !this.enabled;\n  // Reassign the reference so Angular detects the change\n  this.moduleOptions = this.makeModuleOptions(this.enabled);\n&#125;</pre>\n            <div class=\"controls\">\n              <button (click)=\"toggle3d()\">{{ module3dEnabled ? 'Disable 3D' : 'Enable 3D' }}</button>\n            </div>\n            <div class=\"chart-frame\">\n              <chart [options]=\"moduleOptions\"></chart>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <!-- ── BLOCK 6: Highcharts 6 new features ───────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 6 — new chart types</h2>\n          <p>\n            Angular 10 keeps full support for the Highcharts 6 modules introduced in the previous release lines, including <strong>bullet</strong>\n            and <strong>x-range</strong> chart types. Register the modules in <code>forRoot</code>\n            and pass options as usual — no API changes required.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <!-- Bullet chart -->\n          <section class=\"demo-card\">\n            <h3>Bullet chart</h3>\n            <p>Compares an actual value to a target and shows qualitative performance bands. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsBullet = require('highcharts/modules/bullet');\nChartModule.forRoot(Highcharts, ..., HighchartsBullet)</pre>\n<pre class=\"code\">// component.ts\nbulletOptions = &#123;\n  chart: &#123; type: 'bullet', inverted: true &#125;,\n  series: [&#123; type: 'bullet',\n    data: [&#123; y: 194, target: 200 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"bulletOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"bulletOptions\"></chart>\n            </div>\n          </section>\n\n          <!-- X-Range chart -->\n          <section class=\"demo-card\">\n            <h3>X-Range chart</h3>\n            <p>Horizontal bars spanning a date range — perfect for project timelines. New in Highcharts 6.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsXRange = require('highcharts/modules/xrange');\nChartModule.forRoot(Highcharts, ..., HighchartsXRange)</pre>\n<pre class=\"code\">// component.ts\nxrangeOptions = &#123;\n  chart: &#123; type: 'xrange' &#125;,\n  xAxis: &#123; type: 'datetime' &#125;,\n  series: [&#123; type: 'xrange',\n    data: [&#123; x: ..., x2: ..., y: 0 &#125;, ...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"xrangeOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"xrangeOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 7: Highcharts 7 new features ───────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 7 — new modules and chart types</h2>\n          <p>\n            Angular 10 still supports the Highcharts 7 modules, which added relationship and storytelling charts\n            such as <strong>timeline</strong>, <strong>venn</strong>, <strong>organization</strong>,\n            and <strong>dependency wheel</strong>.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <section class=\"demo-card\">\n            <h3>Timeline chart</h3>\n            <p>Event milestones on a chronological track. Requires <code>highcharts/modules/timeline</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsTimeline = require('highcharts/modules/timeline');\nChartModule.forRoot(Highcharts, ..., HighchartsTimeline)</pre>\n<pre class=\"code\">// component.ts\ntimelineOptions = &#123;\n  chart: &#123; type: 'timeline' &#125;,\n  series: [&#123; type: 'timeline', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"timelineOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"timelineOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Venn diagram</h3>\n            <p>Visualises overlap between sets. Requires <code>highcharts/modules/venn</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsVenn = require('highcharts/modules/venn');\nChartModule.forRoot(Highcharts, ..., HighchartsVenn)</pre>\n<pre class=\"code\">// component.ts\nvennOptions = &#123;\n  series: [&#123; type: 'venn', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"vennOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"vennOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Organization chart</h3>\n            <p>Hierarchy charts powered by the sankey engine. Requires <code>sankey</code> and <code>organization</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsSankey = require('highcharts/modules/sankey');\nconst HighchartsOrganization = require('highcharts/modules/organization');</pre>\n<pre class=\"code\">// component.ts\norganizationOptions = &#123;\n  series: [&#123; type: 'organization', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"organizationOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"organizationOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Dependency wheel</h3>\n            <p>Relationship flows arranged in a circular layout. Requires <code>sankey</code> and <code>dependency-wheel</code>.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsDependencyWheel = require('highcharts/modules/dependency-wheel');\nChartModule.forRoot(Highcharts, ..., HighchartsSankey, HighchartsDependencyWheel)</pre>\n<pre class=\"code\">// component.ts\ndependencyWheelOptions = &#123;\n  series: [&#123; type: 'dependencywheel', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"dependencyWheelOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"dependencyWheelOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 8: API reference ─────────────────────────────────────── -->\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Highcharts 8 — new capabilities</h2>\n          <p>\n            Angular 10.2 keeps the Highcharts 8.2 line, bringing newer data interaction patterns such as\n            <strong>radial bar</strong>, <strong>data sorting</strong>, and <strong>marker clusters</strong>.\n          </p>\n        </div>\n        <div class=\"demo-grid\">\n\n          <section class=\"demo-card\">\n            <h3>Radial bar chart</h3>\n            <p>A circular bar layout for compact KPI comparisons. New in the Highcharts 8 line.</p>\n<pre class=\"code\">// component.ts\nradialBarOptions = &#123;\n  chart: &#123; polar: true, inverted: true, type: 'column' &#125;,\n  series: [&#123; type: 'column', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"radialBarOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"radialBarOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Data sorting</h3>\n            <p>Category series can sort themselves declaratively with animated transitions.</p>\n<pre class=\"code\">// component.ts\nsortedBarOptions = &#123;\n  chart: &#123; type: 'bar' &#125;,\n  series: [&#123; type: 'bar', dataSorting: &#123; enabled: true &#125;, data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"sortedBarOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"sortedBarOptions\"></chart>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Marker clusters</h3>\n            <p>Dense scatter data can be grouped visually with the marker-clusters module.</p>\n<pre class=\"code\">// app.module.ts\nconst HighchartsMarkerClusters = require('highcharts/modules/marker-clusters');\nChartModule.forRoot(Highcharts, ..., HighchartsMarkerClusters)</pre>\n<pre class=\"code\">// component.ts\nmarkerClusterOptions = &#123;\n  chart: &#123; type: 'scatter' &#125;,\n  plotOptions: &#123; scatter: &#123; cluster: &#123; enabled: true &#125; &#125; &#125;,\n  series: [&#123; type: 'scatter', data: [...] &#125;]\n&#125;;</pre>\n<pre class=\"code\">&lt;chart [options]=\"markerClusterOptions\"&gt;&lt;/chart&gt;</pre>\n            <div class=\"chart-frame\">\n              <chart [options]=\"markerClusterOptions\"></chart>\n            </div>\n          </section>\n\n        </div>\n      </article>\n\n      <!-- ── BLOCK 9: API reference ─────────────────────────────────────── -->\n      <article class=\"panel ref-panel\">\n        <div class=\"panel-header\">\n          <h2>Quick API reference</h2>\n        </div>\n        <div class=\"ref-grid\">\n          <div class=\"ref-card\">\n            <h4>&lt;chart&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Input / Output</th><th>Type</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>[options]</code></td><td>Object</td><td>Highcharts options object (required)</td></tr>\n                <tr><td><code>[type]</code></td><td>string</td><td><code>\"Chart\"</code> (default) or <code>\"StockChart\"</code></td></tr>\n                <tr><td><code>(load)</code></td><td>ChartEvent</td><td>Native instance available in <code>$event.context</code></td></tr>\n                <tr><td><code>(selection)</code></td><td>ChartEvent</td><td>Range selection / zoom drag</td></tr>\n                <tr><td><code>(click)</code></td><td>ChartEvent</td><td>Click on the chart area</td></tr>\n                <tr><td><code>(redraw)</code></td><td>ChartEvent</td><td>After the chart redraws</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;series&gt; / &lt;point&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(mouseOver)</code></td><td>Cursor enters the series</td></tr>\n                <tr><td><code>(mouseOut)</code></td><td>Cursor leaves the series</td></tr>\n                <tr><td><code>(click)</code></td><td>Click on a series / point</td></tr>\n                <tr><td><code>(select)</code></td><td>Point selected</td></tr>\n                <tr><td><code>(hide) / (show)</code></td><td>Series hidden or shown</td></tr>\n                <tr><td><code>(legendItemClick)</code></td><td>Legend item clicked</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"ref-card\">\n            <h4>&lt;xAxis&gt; / &lt;yAxis&gt; / &lt;zAxis&gt; / &lt;colorAxis&gt;</h4>\n            <table class=\"api-table\">\n              <thead><tr><th>Output</th><th>Description</th></tr></thead>\n              <tbody>\n                <tr><td><code>(afterSetExtremes)</code></td><td>Extremes changed (zoom / reset)</td></tr>\n                <tr><td><code>(setExtremes)</code></td><td>Before extremes are applied</td></tr>\n                <tr><td><code>(afterBreaks)</code></td><td>After axis breaks are applied</td></tr>\n                <tr><td><code>(pointBreak)</code></td><td>Point falls in a break interval</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </article>\n\n    </div>\n\n    <!-- ═══ EVENT LOG (sticky) ══════════════════════════════════════════════ -->\n    <aside class=\"log-panel\">\n      <h2>Event Log</h2>\n      <p>Interact with the demos to see Angular events appear here.</p>\n      <div class=\"log-controls\">\n        <button class=\"ghost small\" (click)=\"clearLog()\">Clear</button>\n      </div>\n      <div class=\"log-list\">\n        <div class=\"log-entry\" *ngFor=\"let e of logs\">{{ e }}</div>\n      </div>\n    </aside>\n  </section>\n\n  <footer class=\"footer\">\n    <p>\n      <strong>@revivejs/angular2-highcharts</strong> — maintained by Alexandro Paixão Marques.\n      Original wrapper by Eugene Gluhotorenko.\n    </p>\n  </footer>\n\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _revivejs_angular2_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @revivejs/angular2-highcharts */
      "CMaO");
      /* harmony import */


      var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! highcharts/highstock */
      "5ZEx");
      /* harmony import */


      var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // Step 1: import ChartModule from the installed npm package
      // Step 2: import Highcharts (highstock bundle includes Chart + StockChart)


      var Highcharts3d = __webpack_require__(
      /*! highcharts/highcharts-3d */
      "Z9Wc");

      var HighchartsHeatmap = __webpack_require__(
      /*! highcharts/modules/heatmap */
      "/d2E"); // Highcharts 6 new modules


      var HighchartsBullet = __webpack_require__(
      /*! highcharts/modules/bullet */
      "taIq");

      var HighchartsXRange = __webpack_require__(
      /*! highcharts/modules/xrange */
      "7kAy"); // Highcharts 7 modules


      var HighchartsSankey = __webpack_require__(
      /*! highcharts/modules/sankey */
      "VuB0");

      var HighchartsOrganization = __webpack_require__(
      /*! highcharts/modules/organization */
      "QEsz");

      var HighchartsDependencyWheel = __webpack_require__(
      /*! highcharts/modules/dependency-wheel */
      "w6eQ");

      var HighchartsVenn = __webpack_require__(
      /*! highcharts/modules/venn */
      "QAO9");

      var HighchartsTimeline = __webpack_require__(
      /*! highcharts/modules/timeline */
      "o3Rf"); // Highcharts 8 modules


      var HighchartsMarkerClusters = __webpack_require__(
      /*! highcharts/modules/marker-clusters */
      "xLzr");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], // Step 4: register ChartModule with forRoot, passing Highcharts and any extra modules
        _revivejs_angular2_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"].forRoot(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__, Highcharts3d, HighchartsHeatmap, HighchartsBullet, HighchartsXRange, HighchartsSankey, HighchartsOrganization, HighchartsDependencyWheel, HighchartsVenn, HighchartsTimeline, HighchartsMarkerClusters)],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map