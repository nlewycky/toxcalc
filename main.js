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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _totaldosecalc_totaldosecalc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totaldosecalc/totaldosecalc.component */ "./src/app/totaldosecalc/totaldosecalc.component.ts");
/* harmony import */ var _humancalc_humancalc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./humancalc/humancalc.component */ "./src/app/humancalc/humancalc.component.ts");
/* harmony import */ var _inhalecalc_inhalecalc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inhalecalc/inhalecalc.component */ "./src/app/inhalecalc/inhalecalc.component.ts");
/* harmony import */ var _hbelcalc_hbelcalc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hbelcalc/hbelcalc.component */ "./src/app/hbelcalc/hbelcalc.component.ts");
/* harmony import */ var _bioavailcalc_bioavailcalc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bioavailcalc/bioavailcalc.component */ "./src/app/bioavailcalc/bioavailcalc.component.ts");
/* harmony import */ var _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./definitions/definitions.component */ "./src/app/definitions/definitions.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./license/license.component */ "./src/app/license/license.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");
/* harmony import */ var _termsclickthrough_termsclickthrough_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./termsclickthrough/termsclickthrough.component */ "./src/app/termsclickthrough/termsclickthrough.component.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later













var routes = [
    { path: '', pathMatch: 'full', component: _termsclickthrough_termsclickthrough_component__WEBPACK_IMPORTED_MODULE_12__["TermsclickthroughComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'TotalDoseCalc', component: _totaldosecalc_totaldosecalc_component__WEBPACK_IMPORTED_MODULE_4__["TotalDoseCalcComponent"] },
    { path: 'HumanCalc', component: _humancalc_humancalc_component__WEBPACK_IMPORTED_MODULE_5__["HumanCalcComponent"] },
    { path: 'InhaleCalc', component: _inhalecalc_inhalecalc_component__WEBPACK_IMPORTED_MODULE_6__["InhaleCalcComponent"] },
    { path: 'HBELCalc', component: _hbelcalc_hbelcalc_component__WEBPACK_IMPORTED_MODULE_7__["HbelCalcComponent"] },
    { path: 'BioavailCalc', component: _bioavailcalc_bioavailcalc_component__WEBPACK_IMPORTED_MODULE_8__["BioavailCalcComponent"] },
    { path: 'definitions', component: _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_9__["DefinitionsComponent"] },
    { path: 'examples', component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"] },
    { path: 'license', component: _license_license_component__WEBPACK_IMPORTED_MODULE_10__["LicenseComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<header>\n  <nav class=\"d-flex px-3 py-3 justify-content-between border-bottom\">\n    <div class=\"mr-3\">\n      <h1><img src=\"assets/2bccee2d6a372288131d/toxcalc-logo.png\"></h1>\n    </div>\n    <ul class=\"nav\">\n      <li class=\"ml-3 align-self-center\">\n        <a routerLink=\"/landing\">⮎ All calculators</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n<router-outlet></router-outlet>\n<footer class=\"mt-2\">\n  <div class=\"d-flex align-items-center w-100 border-top border-bottom p-2 fluid-container text-muted bg-light\">\n    <div style=\"flex: 1 1 0px\"></div>\n    <div style=\"flex: 1 1 0px\" class=\"text-center\"><a href=\"https://github.com/USEPA/toxcalc\" rel=\"noreferrer noopener\"><img style=\"height: 2em\" src=\"data:image/svg+xml;utf8,%3Csvg fill=%27none%27 viewBox=%270 0 1024 1024%27 xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath transform=%27scale%2864%29%27 d=%27m8 0c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27s1.36 0.09 2 0.27c1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38 3.16-1.06 5.45-4.06 5.45-7.59 0-4.42-3.58-8-8-8z%27 clip-rule=%27evenodd%27 fill=%27%231B1F23%27 fill-rule=%27evenodd%27%2F%3E%3C%2Fsvg%3E\" alt=\"GitHub\"></a></div>\n    <div style=\"flex: 1 1 0px\" class=\"text-right\"><a routerLink=\"/license\">Source code license</a></div>\n  </div>\n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inhalecalc_inhalecalc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inhalecalc/inhalecalc.component */ "./src/app/inhalecalc/inhalecalc.component.ts");
/* harmony import */ var _humancalc_humancalc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./humancalc/humancalc.component */ "./src/app/humancalc/humancalc.component.ts");
/* harmony import */ var _hbelcalc_hbelcalc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hbelcalc/hbelcalc.component */ "./src/app/hbelcalc/hbelcalc.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sd_product_list_sd_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sd-product-list/sd-product-list.component */ "./src/app/sd-product-list/sd-product-list.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sd-select/sd-select.component */ "./src/app/sd-select/sd-select.component.ts");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _totaldosecalc_totaldosecalc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./totaldosecalc/totaldosecalc.component */ "./src/app/totaldosecalc/totaldosecalc.component.ts");
/* harmony import */ var _shared_number_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/number-util */ "./src/app/shared/number-util.ts");
/* harmony import */ var _sd_internal_calc_error_sd_internal_calc_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sd-internal-calc-error/sd-internal-calc-error.component */ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.ts");
/* harmony import */ var _sd_katex_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sd-katex.directive */ "./src/app/sd-katex.directive.ts");
/* harmony import */ var _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./definitions/definitions.component */ "./src/app/definitions/definitions.component.ts");
/* harmony import */ var _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sd-calculation-log/sd-calculation-log.component */ "./src/app/sd-calculation-log/sd-calculation-log.component.ts");
/* harmony import */ var _sd_justification_sd_justification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sd-justification/sd-justification.component */ "./src/app/sd-justification/sd-justification.component.ts");
/* harmony import */ var _bioavailcalc_bioavailcalc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bioavailcalc/bioavailcalc.component */ "./src/app/bioavailcalc/bioavailcalc.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");
/* harmony import */ var _termsclickthrough_termsclickthrough_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./termsclickthrough/termsclickthrough.component */ "./src/app/termsclickthrough/termsclickthrough.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./license/license.component */ "./src/app/license/license.component.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _bioavailcalc_bioavailcalc_component__WEBPACK_IMPORTED_MODULE_22__["BioavailCalcComponent"],
                _definitions_definitions_component__WEBPACK_IMPORTED_MODULE_19__["DefinitionsComponent"],
                _inhalecalc_inhalecalc_component__WEBPACK_IMPORTED_MODULE_7__["InhaleCalcComponent"],
                _humancalc_humancalc_component__WEBPACK_IMPORTED_MODULE_8__["HumanCalcComponent"],
                _hbelcalc_hbelcalc_component__WEBPACK_IMPORTED_MODULE_9__["HbelCalcComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
                _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_14__["SdCalcRowComponent"],
                _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_14__["SdCalcRowHelp"],
                _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_14__["SdCalcRowInput"],
                _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_14__["SdCalcRowLabel"],
                _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_20__["SdCalculationLogComponent"],
                _shared_number_util__WEBPACK_IMPORTED_MODULE_16__["SdInputPositiveNumber"],
                _shared_number_util__WEBPACK_IMPORTED_MODULE_16__["SdInputPositiveNumberLeft"],
                _sd_internal_calc_error_sd_internal_calc_error_component__WEBPACK_IMPORTED_MODULE_17__["SdInternalCalcErrorComponent"],
                _sd_justification_sd_justification_component__WEBPACK_IMPORTED_MODULE_21__["SdJustificationComponent"],
                _sd_katex_directive__WEBPACK_IMPORTED_MODULE_18__["SdKatexDirective"],
                _sd_product_list_sd_product_list_component__WEBPACK_IMPORTED_MODULE_11__["SdProductListComponent"],
                _sd_product_list_sd_product_list_component__WEBPACK_IMPORTED_MODULE_11__["SdProductListItem"],
                _sd_product_list_sd_product_list_component__WEBPACK_IMPORTED_MODULE_11__["SdProductListItemDescription"],
                _sd_product_list_sd_product_list_component__WEBPACK_IMPORTED_MODULE_11__["SdProductListItemTitle"],
                _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_13__["SdSelectComponent"],
                _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_13__["SdSelectItem"],
                _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_13__["SdSelectGroup"],
                _totaldosecalc_totaldosecalc_component__WEBPACK_IMPORTED_MODULE_15__["TotalDoseCalcComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_23__["ExamplesComponent"],
                _termsclickthrough_termsclickthrough_component__WEBPACK_IMPORTED_MODULE_24__["TermsclickthroughComponent"],
                _license_license_component__WEBPACK_IMPORTED_MODULE_25__["LicenseComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bioavailcalc/bioavailcalc.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bioavailcalc/bioavailcalc.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvYXZhaWxjYWxjL2Jpb2F2YWlsY2FsYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYmlvYXZhaWxjYWxjL2Jpb2F2YWlsY2FsYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG94Q2FsYyEgYnkgU2FmZSBEb3NlIMKpIDIwMTgtMjAyMS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBHUEwtMy4wLW9yLWxhdGVyXG4gKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/bioavailcalc/bioavailcalc.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bioavailcalc/bioavailcalc.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n  <p class=\"lead font-weight-bold\">\n    Relative Bioavailability Correction\n  </p>\n  <ngb-alert type=\"info\" [dismissible]=\"false\">This is a MULTIDIRECTIONAL calculator. <u>Leave any <b>one</b> field blank and hit Calculate!</u> It will calculate the missing field for you.</ngb-alert>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #bioavailabilityPDERow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"bioavailabilityPDE\">\n            {{bioavailabilityPDE.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': bioavailabilityPDE.isMarkedAsOutput()}\"\n              id=\"bioavailabilityPDE\"\n              sdInputPosNumLeft\n              (input)=\"bcfForm.calculate()\"\n              [readonly]=\"bioavailabilityPDE.isMarkedAsOutput()\"\n              [(ngModel)]=\"bioavailabilityPDE.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #bioavailabilityPDEInput\n              />\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            This is the % bioavailability for the intended route of exposure via the PDE. If there is uncertainty regarding this value, 100% should be assumed.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #bioavailabilityCriticalStudyRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"bioavailabilityCriticalStudy\">\n            {{bioavailabilityCriticalStudy.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': bioavailabilityCriticalStudy.isMarkedAsOutput()}\"\n              id=\"bioavailabilityCriticalStudy\"\n              sdInputPosNumLeft\n              (input)=\"bcfForm.calculate()\"\n              [readonly]=\"bioavailabilityCriticalStudy.isMarkedAsOutput()\"\n              [(ngModel)]=\"bioavailabilityCriticalStudy.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #bioavailabilityCriticalStudyInput\n              />\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            This is the % bioavailability from the study from which the No/Low Effect level or point of departure is derived. The user should have a high degree of certainty for this value before using this correction because overestimation of this value is not a conservative assumption. An example of how different assumptions in the % bioavailability for the critical study route can impact the PDE can be found <a target=\"_blank\" href=\"examples\">here</a>.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #alphaRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"alpha\">\n            {{alpha.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': alpha.isMarkedAsOutput()}\"\n              id=\"alpha\"\n              sdInputPosNumLeft\n              (input)=\"bcfForm.calculate()\"\n              [readonly]=\"alpha.isMarkedAsOutput()\"\n              [(ngModel)]=\"alpha.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #alphaInput\n              />\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Alpha or BCF is the bioavailability correction factor. This factor is applied when the route of administration of the critical study is different from the route of exposure to which the PDE applies. Note that application of BCF is not considered appropriate if the critical effect may be different between the route of exposure to which the PDE applies as compared to the route of exposure from the critical study. For example, a site-of-contact critical effect may be more concentration dependent rather than total dose dependent, and a BCF would not account for this.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"bcfForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"bcfForm.calculateAndLog(calculationLog)\" [disabled]=\"bcfForm.internalError\">Convert!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"bcfForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"bcfForm.equationSnippet\">\n    </div>\n  </div>\n  <sd-calculation-log #calculationLog></sd-calculation-log>\n</div>\n"

/***/ }),

/***/ "./src/app/bioavailcalc/bioavailcalc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bioavailcalc/bioavailcalc.component.ts ***!
  \********************************************************/
/*! exports provided: BioavailCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioavailCalcComponent", function() { return BioavailCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _shared_dimension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _shared_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/field */ "./src/app/shared/field.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/form */ "./src/app/shared/form.ts");
/* harmony import */ var _shared_equation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/equation */ "./src/app/shared/equation.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later







var BioavailabilityPDE = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BioavailabilityPDE, _super);
    function BioavailabilityPDE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["Dimension"].initUnit());
        return _this;
    }
    Object.defineProperty(BioavailabilityPDE.prototype, "label", {
        get: function () { return '% bioavailability for PDE route'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityPDE.prototype, "equationVarName", {
        get: function () { return '\\% bioavailability for PDE route'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityPDE.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityPDE.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    return BioavailabilityPDE;
}(_shared_field__WEBPACK_IMPORTED_MODULE_4__["Field"]));
var BioavailabilityCriticalStudy = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BioavailabilityCriticalStudy, _super);
    function BioavailabilityCriticalStudy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["Dimension"].initUnit());
        return _this;
    }
    Object.defineProperty(BioavailabilityCriticalStudy.prototype, "label", {
        get: function () { return '% bioavailability for critical study route'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityCriticalStudy.prototype, "equationVarName", {
        get: function () { return '\\% bioavailability for critical study route'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityCriticalStudy.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BioavailabilityCriticalStudy.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    return BioavailabilityCriticalStudy;
}(_shared_field__WEBPACK_IMPORTED_MODULE_4__["Field"]));
var Alpha = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Alpha, _super);
    function Alpha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_3__["Dimension"].initUnit());
        return _this;
    }
    Object.defineProperty(Alpha.prototype, "label", {
        get: function () { return 'Alpha or BCF'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    return Alpha;
}(_shared_field__WEBPACK_IMPORTED_MODULE_4__["Field"]));
var BioavailCalcComponent = /** @class */ (function () {
    function BioavailCalcComponent() {
        this.variableMap = new Map();
        this.eqPrinter = new _shared_equation__WEBPACK_IMPORTED_MODULE_6__["EquationPrinter"](this.variableMap);
        this.bioavailabilityPDE = new BioavailabilityPDE;
        this.bioavailabilityCriticalStudy = new BioavailabilityCriticalStudy;
        this.alpha = new Alpha;
        this.bcfForm = new _shared_form__WEBPACK_IMPORTED_MODULE_5__["Form"](this.eqPrinter, [this.bioavailabilityPDE, this.bioavailabilityCriticalStudy, this.alpha]);
        var bcfeq = new _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].div(this.bioavailabilityPDE.var, _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].mul(this.bioavailabilityCriticalStudy.var, this.alpha.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].constantFromNumber(1));
        this.bioavailabilityPDE.term = bcfeq.solve(this.bioavailabilityPDE.var).RHS;
        this.bioavailabilityCriticalStudy.term = bcfeq.solve(this.bioavailabilityCriticalStudy.var).RHS;
        this.alpha.term = bcfeq.solve(this.alpha.var).RHS;
        this.variableMap.set(this.bioavailabilityPDE.var, this.bioavailabilityPDE.equationVarName);
        this.variableMap.set(this.bioavailabilityCriticalStudy.var, this.bioavailabilityCriticalStudy.equationVarName);
        this.variableMap.set(this.alpha.var, this.alpha.equationVarName);
        this.bcfForm.equationSnippet = this.alpha.equationSnippet(this.eqPrinter);
    }
    BioavailCalcComponent.prototype.ngAfterViewInit = function () {
        this.bioavailabilityPDE.row = this.bioavailabilityPDERow;
        this.bioavailabilityPDE.input = this.bioavailabilityPDEInput;
        this.bioavailabilityCriticalStudy.row = this.bioavailabilityCriticalStudyRow;
        this.bioavailabilityCriticalStudy.input = this.bioavailabilityCriticalStudyInput;
        this.alpha.row = this.alphaRow;
        this.alpha.input = this.alphaInput;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bioavailabilityPDERow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], BioavailCalcComponent.prototype, "bioavailabilityPDERow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bioavailabilityPDEInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BioavailCalcComponent.prototype, "bioavailabilityPDEInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bioavailabilityCriticalStudyRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], BioavailCalcComponent.prototype, "bioavailabilityCriticalStudyRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bioavailabilityCriticalStudyInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BioavailCalcComponent.prototype, "bioavailabilityCriticalStudyInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alphaRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], BioavailCalcComponent.prototype, "alphaRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alphaInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BioavailCalcComponent.prototype, "alphaInput", void 0);
    BioavailCalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bioavailcalc',
            template: __webpack_require__(/*! ./bioavailcalc.component.html */ "./src/app/bioavailcalc/bioavailcalc.component.html"),
            styles: [__webpack_require__(/*! ./bioavailcalc.component.css */ "./src/app/bioavailcalc/bioavailcalc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BioavailCalcComponent);
    return BioavailCalcComponent;
}());



/***/ }),

/***/ "./src/app/definitions/definitions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/definitions/definitions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n.term { text-decoration: underline; font-weight: bold; }\n\n.example { text-decoration: underline; font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmaW5pdGlvbnMvZGVmaW5pdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCxRQUFRLDJCQUEyQixDQUFDLGtCQUFrQixFQUFFOztBQUN4RCxXQUFXLDJCQUEyQixDQUFDLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvZGVmaW5pdGlvbnMvZGVmaW5pdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbi50ZXJtIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4uZXhhbXBsZSB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBmb250LXdlaWdodDogYm9sZDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/definitions/definitions.component.html":
/*!********************************************************!*\
  !*** ./src/app/definitions/definitions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container\">\n<dl>\n<dt><a name=\"concentration\">Concentration</a></dt>\n<dd>\n<p>There are many ways to express concentration such as Mass per unit volume (e.g. mg/L), Molar concentration (e.g. moles/L), Percent or parts per hundred (e.g. %), Parts per Million (ppm), parts per billion (ppb) and parts per trillion (ppt). When using parts per notation (like percent, ppm, ppb, ppt etc.), concentration can be expressed as the ratio of the mass, volume or mixed mass/volume of the two parts of the system. Common concentration ratios are weight/weight (w/w), volume/volume (v/v) and weight/volume (w/v).</p>\n<p><b>1. Percent</b>: Percent or <i>Per cent</i> refers to the amount of one substance <i>per</i> 100 units of another.  In percent mixtures, the amount (expressed in weight or volume) of a substance is expressed as percentage of total mixture weight or volume. Percent solutions take three main forms:</p>\n<p>(1) <span class=\"term\">% weight/weight or %w/w:</span> (also called percent by mass or percent weight). This is used when the weight of both substances is used to prepare the mixture.</p>\n<ul>\n  <li><span class=\"example\">Example:</span> A solution of 30 g of sodium chloride and 70 g of water would be 30% sodium chloride by mass: [(30 g NaCl) ÷ (30 g NaCl + 70 g water)] × 100% = 30%.</li>\n</ul>\n<p>(2) <span class=\"term\">% volume/volume or %v/v:</span> (also called percent by volume, percent volume).</p>\n<ul>\n  <li><span class=\"example\">Example:</span> A 70 mL %v/v solution of isopropyl alcohol in water contains 70 mL of isopropyl alcohol for every 100 mL of the total solution.\n</ul>\n<p>(3) <span class=\"term\">% weight/volume or %w/v:</span> By far the most common unit for w/v solutions is grams per 100 mL. Since this is so commonly used, it may be helpful to commit this to memory.</p>\n<ul>\n  <li><span class=\"example\">Example:</span> A 5% solution of sucrose in water is 5 grams of sucrose in 100 mL of water. Note that in a w/v mixture, the units in the numerator and denominator are not the same, so this is not a true percentage since the ratio is not a dimensionless quantity. Because of the way it is defined, you can have a w/v % solution that is over 100%.\n</ul>\n<p>The formulas for calculating %w/w, %v/v and %w/w are given below. %w/w can be calculated using the following formula:</p>\n<p sdKatex=\"\\frac{\\text{mass of the substance of interest}}{\\text{total mass of the solution or mixture}} \\times 100\"></p>\n<p>%v/v can be calculated using the following formula:</p>\n<p sdKatex=\"\\frac{\\text{volume of the substance of interest}}{\\text{total volume of the solution or mixture}} \\times 100\"></p>\n<p>%w/v can be calculated using the following formula:</p>\n<p sdKatex=\"\\frac{\\text{mass of the substance of interest (g)}}{\\text{total volume of the mixture or solution (mL)}} \\times 100\"></p>\n<p><i>Hint:</i> When entering study data from the source document it is important to check whether the substance of interest is reported in %w/w, %v/v and %w/v because this can have implications on the dose received. This may require some digging into the methods section of papers that describe how something was prepared, since it is not always explicitly stated.</p>\n<p>Interconverting from dose and these % solutions is not always straightforward and requires knowledge of density, temperature, pressure as well as other considerations like partial molar properties (see example below for the complexities that can arise).</p>\n<p>Example: Calculate the mg/kg body weight dose of 100 mL 40%v/v ethanol in water</p>\n<p>A solution containing 40%v/v ethanol contains 40 mL of pure ethanol in a total volume of 100 mL. Since ethanol contracts in water, the amount of water required to bring the volume up to 100 mL at 20°C is not 60 mL, but rather 63.34 mL. Thus, this solution, while being 40%v/v ethanol is actually a 63.34%v/v water solution. Since ethanol is lighter than water (the density of pure ethanol is 0.7893 g/mL (at 20°C)), the mass of the ethanol in 100 mL of this solution is 31.572 g (40 mL × 0.789 g/mL = 31.572 g)<sup><a href=\"javascript:void(0);\" data-html=\"true\" data-toggle=\"tooltip\" title=\"A 40%v/v ethanol solution is a 33.26%w/w ethanol solution. The weight of the water added to the ethanol is 63.34 g in 63.34 mL. Thus, by mass this is a 33.26%w/w ethanol solution (31.572 ÷ (31.572 g + 63.34 g) × 100 = 33.26w/w%\">1</a></sup>.  If the intake rate of this solution is 100 mL per day, the daily dose of ethanol would be 31.572 g/day or 31.572 g/kg body weight/day for an animal weighing 1 kg.</p>\n<p><b>2.  Parts per million (ppm):</b> Substances that are in lower amounts can be described in parts per million. Toxicologists often deal with substances in ppm or lower quantities. Substances in even lower amounts can be described in parts per billion (ppb), parts per trillion (ppt) and so on. Like percent which is essentially parts per hundred (with the exception of %w/v), ppm and other quantities are dimensionless and can be used for gases, liquids and solids. Also like percent, ppm, ppb and so on can be expressed in terms of mass, volume or mixed mass/volume units.</p>\n<p>When dealing with weight units, such as the presence of a solid substance in another solid substance, one ppm is the same a 1 mg/kg, since 1 mg is 1 millionth of a kg (i.e. 1 mg is 1/1000<sup>th</sup> of a g and 1 g is 1/1000<sup>th</sup> of a kg, thus 1 mg is 1/1000 × 1/1000 or 1/1,000,000 of a kg). One ppm w/w is about equivalent to one granule of sugar in 273 sugar cubes. One ppm is also the same as 0.0001%w/w, since this is also 1 mg/kg. One ppb w/w is the same as 1 µg/kg and one ppt w/w is the same a 1 ng/kg.  Scientists usually express concentrations of substances present in low quantities in liquid media in ppmm/v or ppbm/v. Since the density of pure water is about 1 g/mL, 1 mg/kg in water is equivalent to 1 mg/L of water or 1 ppm. This density can be assumed for dilute aqueous solutions. To help visualize such small quantities, see <a rel=\"noopener\" target=\"_blank\" href=\"https://youtu.be/aa-m8a-jZ0k\">this link</a>. The table below provides the relationship between percent, ppm, ppb, ppt and their weight and volume equivalents. When converting between ppm w/v in a liquid to mg/kg, the density of the liquid needs to be considered if it is not water or dilute aqueous.</p>\n<p><b>Conversion Table</b></p>\n  <table border=\"1\">\n    <tr>\n      <th>Percent</th>\n      <th>PPM</th>\n      <th>PPB</th>\n      <th>PPT</th>\n      <th>(weight/weight)</th>\n      <th>volume/weight</th>\n    </tr>\n    <tr>\n      <td>0.0001%</td>\n      <td>1</td>\n      <td>1,000</td>\n      <td>1,000,000</td>\n      <td>1 mg/kg; 1 µg/g</td>\n      <td>1 mg/L; 1 µg/mL (only if dilute aqueous solution)</td>\n    </tr>\n    <tr>\n      <td>0.00001%</td>\n      <td>0.1</td>\n      <td>100</td>\n      <td>100,000</td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>0.000001%</td>\n      <td>0.01</td>\n      <td>10</td>\n      <td>10,000</td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>-</td>\n      <td>0.001</td>\n      <td>1</td>\n      <td>1,000</td>\n      <td>1 µg/kg; 1 ng/g</td>\n      <td>1 µg/L; 1 ng/mL (only if dilute aqueous solution)</td>\n    </tr>\n    <tr>\n      <td>-</td>\n      <td>0.0001</td>\n      <td>0.1</td>\n      <td>100</td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>-</td>\n      <td>-</td>\n      <td>0.01</td>\n      <td>10</td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>-</td>\n      <td>-</td>\n      <td>0.001</td>\n      <td>1</td>\n      <td>1 ng/kg; 1 pg/g</td>\n      <td>1 ng/L; 1 pg/mL (only if dilute aqueous solution)</td>\n    </tr>\n  </table>\n<p>Example: 20 mL of a 1200 ppm(v/v) glycerin solution in water was consumed. Convert into mg/kg body weight/day based on an assumed body weight of 60 kg.</p>\n<p>While ppmV is not a common unit for liquids, it is occasionally used. This solution contains 1200 parts of glycerin in 1 million parts of the solvent, which in this case is water. Since this is stated to be a ppmV solution, one could assume for the purpose of illustration that it contains 1200 mL of glycerin in 1,000,000 mL of water. In this case, we need to find the total mass of glycerin in this solution. The density of the glycerin is 1.26 g/mL at standard temperature and pressure, so 1200 mL of glycerin will weigh more than if it was water (i.e. since water has a density of 1 g/mL, if we had 1200 mL of water it would weigh 1200 g) . However, since it is heavier than water, the concentration of glycerin in this solution would be 1200 mL × 1.26 g/mL or 1512 g in 1,000,000 mLs of water which is the same as 1512 mg in 1,000 mLs of water, or 1512 mg/L. Thus, 1200 ppm glycerin in water is equivalent to 1512.0 mg/L of glycerin in water. Note that this same principles applies for ppb, ppt etc, since these are dimensionless quantities that describe the relationship between two quantities. If 20 mL of this solution was consumed, the daily dose would be 30.24 mg/day ((1512 mg/L × 20) ÷ 1000 mL) = 30.24 mg/day. If body weight was 60 kg, this would be 30.24 ÷ 60 kg = 0.503 mg/kg body weight/day.</p>\n<p>It is important to note that this is only true if mixing the 2 liquids are additive, which may not always be the case. If, as in the example with ethanol, volumes change by their mixing, this equation would not hold true. However, when one component of the mixture is present in the ppm, ppb or ppt range, the quantitative impact of these solution interactions will be smaller than in the % solution situation. Also, it is important to correct for the any changes to the solution caused by changes in temperature or pressure.</p>\n<p>Example: Calculate the mg/kg body weight/day dose of 100 mL of a 10 ppm w/w solution of ciprofloxacin made up in glycerin. Assume a body weight of 60 kg.</p>\n<p>10 ppm w/w = 10 mg of ciprofloxacin in 1,000 g of the solution by weight is the same as 10 mg per kg of the solution. The density of the entire solution is 1.26 g/mL at STP. If the solution had the same density of water, 100 mL of the solution would weigh 100 g and 100 mL would contain 1/10 of the ciprofloxacin, or 1 mg. However, since glycerin is heavier than water, 100 mL weighs 100 × 1.26 g/mL or 126 g. Thus, 100 mL of this solution will contain 1.26 mg of ciprofloxacin and the daily dose would be 1.26 mg/day. For a 60 kg body weight, this would be 1.26 ÷ 60 kg = 0.021 mg/kg body weight/day.</p>\n</dd>\n<dt><a name=\"molarity\">Molarity</a></dt>\n<dd>\n<p>The molarity of a solution is the number of moles of solute present in 1 L of the solution (mol/L). Other units include mmol/mL, µmol/µL and so on. Thus, 1 mol of sucrose (342 g) in a final volume of 1.0 L has a sucrose concentration of 1.00 mol/L or 1.0 M (1.00 Molar solutions).  The formula for molarity is:</p>\n<p sdKatex=\"\\text{Molarity} = \\frac{\\text{moles of solute}}{\\text{Litres of solution}}\"></p>\n<p>Example: 250 µL of a 10 µM dexamethasone was injected intraperitoneally in a mouse. What is the mg/kg body weight dose?</p>\n<p>Dexamethasone has a formula weight of 396.461 g/mol. A 1 M solution of dexamethasone would contain 396.461 g of dexamethasone in one liter. Therefore, a 10 µM solution of dexamethasone is 3.96461 mg/L. In 250 µL there would be 0.00099 mg or 0.99 µg. If the mouse weighed 30 g, injection of 0.99 µg result in a dose of 33 µg/kg body weight or 0.033 mg/kg body weight.</p>\n</dd>\n<dt><a name=\"molality\">Molality</a></dt>\n<dd>\n<p>The molality of a solution is the number of moles of solute present in 1 kg of the solution (mol/kg). Other units include mmol/kg, µmol/kg and so on. Thus, 1 mol of sucrose (342 g) in 1 kg of solution has a sucrose concentration of 1.00 mol/kg or 1.0 M (1.00 Molal solutions).  The formula for molality is:</p>\n<p sdKatex=\"\\text{Molality} = \\frac{\\text{moles of solute}}{\\text{Kg of solution}}\"></p>\n</dd>\n<dt><a name=\"mixture\">Mixture</a></dt>\n<dd>\n  Combination of two or more substances in which each substance retains its own chemical identity and properties.  In general, mixtures have no fixed composition. The amount of one or more components (substances) can usually vary over a wide range. For example the amount of sugar in a cup of coffee can vary widely from a little to a lot. In the case of coffee, sugar and water are components of the mixture.\n</dd>\n<dt><a name=\"solution\">Solution</a></dt>\n<dd>\n  A solution is a homogenous mixture of two or more substances. A cup of coffee is a solution in that the coffee and sugar are uniformly dissolved throughout the mixture.  In this case, the coffee and sugar are the substances which are dissolved in the water and are thus considered solutes. Generally, solutes are present in the lesser quantity. The water is the dissolving media, or the solvent. When both solute and solvent are present at 50% either component can be considered the solute or solvent.\n</dd>\n</dl>\n</div>\n"

/***/ }),

/***/ "./src/app/definitions/definitions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/definitions/definitions.component.ts ***!
  \******************************************************/
/*! exports provided: DefinitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionsComponent", function() { return DefinitionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var DefinitionsComponent = /** @class */ (function () {
    function DefinitionsComponent() {
    }
    DefinitionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-definitions',
            template: __webpack_require__(/*! ./definitions.component.html */ "./src/app/definitions/definitions.component.html"),
            styles: [__webpack_require__(/*! ./definitions.component.css */ "./src/app/definitions/definitions.component.css")]
        })
    ], DefinitionsComponent);
    return DefinitionsComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.css":
/*!*************************************************!*\
  !*** ./src/app/examples/examples.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3hDYWxjISBieSBTYWZlIERvc2UgwqkgMjAxOC0yMDIxLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/examples/examples.component.html":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container\">\n  <h4>Examples</h4>\n<u>Example #1</u>: Substance X has a NOEL of 100 mg/kg BW/day for a systemic effect when delivered via the oral route in an animal study. To arrive at the PDE for this substance, two modifying factors are applied: 10 for interindividual variability and 10 for interspecies extrapolation (10 × 10 = 100). This results in a PDE of 1 mg/kg BW/day (100 ÷ 100 = 1 mg/kg BW/day). In this case, the PDE is intended only for the oral route. Now, let's assume that a PDE for Substance X is also needed for the intravenous route. The % bioavailability for the intravenous route is taken as 100%. The % bioavailability via the critical study route (i.e. the oral study from which the NOEL of 100 mg/kg BW/day was obtained) is estimated to be between 5% and 40%. If the higher value for % bioavailability is used in the calculation (40%), the bioavailability correction factor (BCF) would be calculated as 100%/40% or 2.5. If the lower estimate of bioavailability of 5% were used, the BCF would be calculated as 100%/5% or 20. The composite modifying factors when 40% bioavailability is assumed is 250 (10<sub>(interindividual variability)</sub> × 10<sub>(interspecies extrapolation)</sub> × 2.5<sub>(BCF)</sub> = 250), while the composite modifying factor when 5% bioavailability is assumed is 2000 (10<sub>(interindividual variability)</sub> × 10<sub>(interspecies extrapolation)</sub> × 20<sub>(BCF)</sub> = 2000). Thus, the PDE when a composite factor of 250 is used is 0.4 mg/kg BW/day (100 ÷ 250 = 0.4). When a composite modifying factor of 2000 is used, the PDE is 0.05 mg/kg BW/day, or 8 times lower. Thus, the lower bioavailability estimate is the more conservative estimate.\n</div>\n"

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.css */ "./src/app/examples/examples.component.css")]
        })
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/hbelcalc/hbelcalc.component.css":
/*!*************************************************!*\
  !*** ./src/app/hbelcalc/hbelcalc.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGJlbGNhbGMvaGJlbGNhbGMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2hiZWxjYWxjL2hiZWxjYWxjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3hDYWxjISBieSBTYWZlIERvc2UgwqkgMjAxOC0yMDIxLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/hbelcalc/hbelcalc.component.html":
/*!**************************************************!*\
  !*** ./src/app/hbelcalc/hbelcalc.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n  <p class=\"lead font-weight-bold\">\n    Health-Based Exposure Limits (HBELs) for Pharmaceuticals\n  </p>\n  <ngb-alert type=\"info\" [dismissible]=\"false\">This is a MULTIDIRECTIONAL calculator. <u>Leave any <b>one</b> field blank and hit Calculate!</u> It will calculate the missing field for you.</ngb-alert>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #effectLimitRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"effectLimit\">\n            {{effectLimit.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': effectLimit.isMarkedAsOutput()}\"\n              id=\"effectLimit\"\n              sdInputPosNum\n              (input)=\"pdeForm.calculate()\"\n              [readonly]=\"effectLimit.isMarkedAsOutput()\"\n              [(ngModel)]=\"effectLimit.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #effectLimitInput\n              />\n            <div class=\"input-group-append\">\n              <sd-select name=\"effectLimitUnits\" #effectLimitUnits (change)=\"pdeForm.calculate();\" [sdAppend]=\"true\">\n                <option *ngFor=\"let unit of iterUnits(effectLimit.UNITS)\" [label]=\"unit\" [value]=\"effectLimit.UNITS[unit]\">\n              </sd-select>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Enter the No/Low effect levels or other suitable Point of Departure (PoD) from the critical study. Either a human or animal No/Low effect level may be used. If an animal No/Low effect level is used, you can convert to a human equivalent dose (HED). If an HED is used as the No/Low effect level, no F1 factor needs to be applied.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #bodyWeightRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"bodyWeight\">\n            {{bodyWeight.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"d-flex\">\n              <div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !bodyWeight.expanded && bodyWeight.selected != i}\" *ngFor=\"let item of bodyWeight.options; index as i\">\n                  <input type=\"radio\" name=\"bodyWeightGroup\" class=\"form-check-input\" [id]=\"'bodyWeightGroup' + i\" [(ngModel)]=\"bodyWeight.selected\" [ngModelOptions]=\"{standalone: true}\" [value]=\"i\" [disabled]=\"bodyWeight.output\" (click)=\"bodyWeightClick(i)\">\n                  <label [ngClass]=\"{'form-check-label': true, 'font-weight-bold': item.bold}\" [for]=\"'bodyWeightGroup' + i\">{{item.label}}</label>\n                </div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !bodyWeight.expanded && !bodyWeight.custom}\">\n                  <input type=\"radio\" name=\"bodyWeightGroup\" class=\"form-check-input\" id=\"bodyWeightCustom\" [(ngModel)]=\"bodyWeight.selected\" [ngModelOptions]=\"{standalone: true}\" value=\"custom\" checked [disabled]=\"bodyWeight.output\" (click)=\"bodyWeightClickCustom()\">\n                  <label class=\"form-check-label\" for=\"bodyWeightCustom\">custom body weight:</label>\n                  <div class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input\n                        [ngClass]=\"{'form-control': true, 'output': bodyWeight.isMarkedAsOutput()}\"\n                        id=\"bodyWeightCustomValue\"\n                        sdInputPosNum\n                        (input)=\"pdeForm.calculate()\"\n                        [readonly]=\"bodyWeight.isMarkedAsOutput()\"\n                        [disabled]=\"!bodyWeight.custom\"\n                        [(ngModel)]=\"bodyWeight.customValue\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        #bodyWeightInput\n                        />\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">kg</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"mx-2\" (click)=\"bodyWeight.expanded = !bodyWeight.expanded\">\n                <span class=\"dropdown-toggle\"></span>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"bodyWeightRow.showHelp = !bodyWeightRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowInput *ngIf=\"!bodyWeight.enabled\">\n            <ngb-alert class=\"mt-2\" [dismissible]=\"false\">Body weight is not used in the calculation due to the units selected for the PDE.</ngb-alert>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            This is the assumed body weight for the human to which the PDE applies. This is needed if the PDE is to be expressed in mg/day. For example, for a PDE being set based on NOEL of 100 mg/kg BW/day, and applying a modifying factor of 100, the PDE is 1 mg/kg BW/day (100 mg/kg BW/day ÷ 100 = 1 mg/kg BW/day). If the assumed human body weight is 50 kg, this PDE is equivalent to 50 mg/day (PDE of 1 mg/kg BW/day × 50 kg = 50 mg/day).\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #speciesRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"species\">\n            {{species.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"d-flex\">\n              <div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !species.expanded && species.selected != i}\" *ngFor=\"let item of species.options; index as i\">\n                  <input type=\"radio\" name=\"speciesGroup\" class=\"form-check-input\" [id]=\"'speciesGroup' + i\" [(ngModel)]=\"species.selected\" [ngModelOptions]=\"{standalone: true}\" [value]=\"i\" [disabled]=\"species.output\" (click)=\"speciesClick(i)\">\n                  <label class=\"form-check-label\" [for]=\"'speciesGroup' + i\">{{item.value}}: {{item.label}}</label>\n                </div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !species.expanded && !species.custom}\">\n                  <input type=\"radio\" name=\"speciesGroup\" class=\"form-check-input\" id=\"speciesCustom\" [(ngModel)]=\"species.selected\" [ngModelOptions]=\"{standalone: true}\" value=\"custom\" checked [disabled]=\"species.output\" (click)=\"speciesClickCustom()\">\n                  <label class=\"form-check-label\" for=\"speciesCustom\">custom species name:</label>\n                  <div class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input\n                        class=\"form-control\"\n                        id=\"speciesCustomName\"\n                        type=\"text\"\n                        [disabled]=\"!species.custom\"\n                        [(ngModel)]=\"species.customSpeciesName\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        />\n                    </div>\n                  </div>\n                  <label class=\"form-check-label\" for=\"speciesCustomFactor\">with factor:</label>\n                  <div class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input\n                        [ngClass]=\"{'form-control': true, 'output': species.isMarkedAsOutput()}\"\n                        id=\"speciesCustomFactor\"\n                        sdInputPosNumLeft\n                        (input)=\"pdeForm.calculate()\"\n                        [readonly]=\"species.isMarkedAsOutput()\"\n                        [disabled]=\"!species.custom\"\n                        [(ngModel)]=\"species.customValue\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        #speciesInput\n                        />\n                      <div class=\"invalid-tooltip d-block\" *ngIf=\"speciesRow.errorText\">\n                        {{speciesRow.errorText}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"mx-2\" (click)=\"species.expanded = !species.expanded\">\n                <span class=\"dropdown-toggle\"></span>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"speciesRow.showHelp = !speciesRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Use this factor if the No/Low Effect level comes from animals. This factor accounts for the uncertainty related to extrapolating animal data to humans. The basic assumption when using this factor is that the critical effect for which the No/Low effect level is derived is relevant to humans, but that toxicokinetic and toxicodynamic differences exist between humans and animals. The fixed factors listed for the species above are based on body surface area allometric scaling (BW<sup>2/3</sup>). For more on the priniciples of allometric scaling see <a rel=\"noopener\" target=\"_blank\" href=\"/assets/665c125d6b338f200ae3/Size Matters.pdf\">Human Equivalent Doses and Allometry Explained <fa-icon [icon]=\"['fas', 'file-pdf']\"></fa-icon></a>. <a rel=\"noopener\" target=\"_blank\" href=\"HumanCalc\">HumanCalc</a> may also be used to perform allometric scaling. Note that these are default methods for interspecies scaling. These are to be used the absence of good comparative data on the toxicodynamic and toxicokinetic differences between the species from which the No/Low effect level is derived and humans.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #safetyFactorRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"safetyFactor\">\n            {{safetyFactor.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': safetyFactor.isMarkedAsOutput()}\"\n              id=\"safetyFactor\"\n              sdInputPosNumLeft\n              (input)=\"pdeForm.calculate()\"\n              [readonly]=\"safetyFactor.isMarkedAsOutput()\"\n              [(ngModel)]=\"safetyFactor.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #safetyFactorInput\n              />\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            This factor is intended to account for the variation in sensitivity among the members of the human population. Thus, if starting from a no effect level in humans, the no effect level is considered representative of the study from which the no effect level was derived, which may not be representative of the true range of human sensitivities within a population.  The application of this factor  is intended to cover the range from the <em>average</em> human (which is presumably reflected in the study population from which the no effect level is derived) to the <em>sensitive</em> human. If starting with a no effect level in animals, F1 extrapolates the no effect level from animals to humans and F2 subsequently extrapolates the no effect level in the <em>average</em> human to a human that may be more sensitive to the effects of the substance. Whether or not the applied F1 factor suitably covers sensitive subpopulations may be gained by investigating a chemical's mechanism of action.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #studyDurationFactorRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"studyDurationFactor\">\n            {{studyDurationFactor.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"d-flex\">\n              <div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !studyDurationFactor.expanded && studyDurationFactor.selected != i}\" *ngFor=\"let item of studyDurationFactor.options(); index as i\">\n                  <input type=\"radio\" name=\"studyDurationFactorGroup\" class=\"form-check-input\" [id]=\"'studyDurationFactorGroup' + i\" [(ngModel)]=\"studyDurationFactor.selected\" [ngModelOptions]=\"{standalone: true}\" [value]=\"i\" [disabled]=\"studyDurationFactor.output\" (click)=\"studyDurationFactorClick(item.value)\">\n                  <label class=\"form-check-label\" [for]=\"'studyDurationFactorGroup' + i\">{{item.value}}: {{item.label}}</label>\n                </div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !studyDurationFactor.expanded && !studyDurationFactor.custom}\">\n                  <input type=\"radio\" name=\"studyDurationFactorGroup\" class=\"form-check-input\" id=\"studyDurationFactorGroupCustom\" [(ngModel)]=\"studyDurationFactor.selected\" [ngModelOptions]=\"{standalone: true}\" value=\"custom\" checked [disabled]=\"studyDurationFactor.output\" (click)=\"studyDurationFactorClickCustom()\">\n                  <label class=\"form-check-label\" for=\"studyDurationFactorGroupCustom\">custom value:</label>\n                  <div class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input\n                        [ngClass]=\"{'form-control': true, 'output': studyDurationFactor.isMarkedAsOutput()}\"\n                        id=\"studyDurationFactorCustom\"\n                        sdInputPosNumLeft\n                        (input)=\"pdeForm.calculate()\"\n                        [readonly]=\"studyDurationFactor.isMarkedAsOutput()\"\n                        [disabled]=\"!studyDurationFactor.custom\"\n                        [(ngModel)]=\"studyDurationFactor.customValue\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        #studyDurationFactorInput\n                        />\n                      <div class=\"invalid-tooltip d-block\" *ngIf=\"studyDurationFactorRow.errorText\">\n                        {{studyDurationFactorRow.errorText}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"mx-2\" (click)=\"studyDurationFactor.expanded = !studyDurationFactor.expanded\">\n                <span class=\"dropdown-toggle\"></span>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"studyDurationFactorRow.showHelp = !studyDurationFactorRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            PDEs are calculated for lifetime exposures, yet experimental data evaluating the health effects of chemicals are typically days to months long. It is assumed that the health effects observed in these shorter duration studies are relevant to lifetime exposures, but that these effects may occur at lower doses or occur at higher severity with prolonged exposures. Furthermore, it also assumes that some effects may only be revealed after chronic exposures. F3 addresses the question of whether studies of longer duration than the one used for PDE derivation might have yielded a lower point of departure or no/low effect level.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #severeToxicityFactorRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"severeToxicityFactor\">\n            {{severeToxicityFactor.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"d-flex\">\n              <div>\n                This factor can be used for any form of severe toxicity. Examples of factors that could be applied in the realm of developmental toxicity studies is shown below:\n                <div [ngClass]=\"{'form-check': true, 'd-none': !severeToxicityFactor.expanded && severeToxicityFactor.selected != i}\" *ngFor=\"let item of severeToxicityFactor.options; index as i\">\n                  <input type=\"radio\" name=\"severeToxicityFactorGroup\" class=\"form-check-input\" [id]=\"'severeToxicityFactorGroup' + i\" [(ngModel)]=\"severeToxicityFactor.selected\" [ngModelOptions]=\"{standalone: true}\" [value]=\"i\" checked [disabled]=\"severeToxicityFactor.output\" (click)=\"severeToxicityFactorClick(item.value)\">\n                  <label class=\"form-check-label\" [for]=\"'severeToxicityFactorGroup' + i\">{{item.value}}: {{item.label}}</label>\n                </div>\n                <div [ngClass]=\"{'form-check': true, 'd-none': !severeToxicityFactor.expanded && !severeToxicityFactor.custom}\">\n                  <input type=\"radio\" name=\"severeToxicityFactorGroup\" class=\"form-check-input\" id=\"severeToxicityGroupCustom\" [(ngModel)]=\"severeToxicityFactor.selected\" [ngModelOptions]=\"{standalone: true}\" value=\"custom\" [disabled]=\"severeToxicityFactor.output\" (click)=\"severeToxicityFactorClickCustom()\">\n                  <label class=\"form-check-label\" for=\"severeToxicityGroupCustom\">custom value:</label>\n                  <div class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input\n                        [ngClass]=\"{'form-control': true, 'output': severeToxicityFactor.isMarkedAsOutput()}\"\n                        id=\"severeToxicityFactorCustom\"\n                        sdInputPosNumLeft\n                        (input)=\"pdeForm.calculate()\"\n                        [readonly]=\"severeToxicityFactor.isMarkedAsOutput()\"\n                        [disabled]=\"!severeToxicityFactor.custom\"\n                        [(ngModel)]=\"severeToxicityFactor.customValue\"\n                        [ngModelOptions]=\"{standalone: true}\"\n                        #severeToxicityFactorInput\n                        />\n                      <div class=\"invalid-tooltip d-block\" *ngIf=\"severeToxicityFactorRow.errorText\">\n                        {{severeToxicityFactorRow.errorText}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"mx-2\" (click)=\"severeToxicityFactor.expanded = !severeToxicityFactor.expanded\">\n                <span class=\"dropdown-toggle\"></span>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"severeToxicityFactorRow.showHelp = !severeToxicityFactorRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            This factor is used to account for the severity of effect observed. ICH Q3C indicates its use for severe toxicity (e.g. non-genotoxic carcinogenicity, neurotoxicity or teratogenicity). This factor is not uniformly used by other authoritative agencies that perform risk assessment.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #noNoelFactorRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"noNoelFactor\">\n            {{noNoelFactor.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': noNoelFactor.isMarkedAsOutput()}\"\n              id=\"noNoelFactor\"\n              sdInputPosNumLeft\n              (input)=\"pdeForm.calculate()\"\n              [readonly]=\"noNoelFactor.isMarkedAsOutput()\"\n              [(ngModel)]=\"noNoelFactor.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #noNoelFactorInput\n              />\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The absence of a NOEL with use of a LOEL creates some uncertainty. The use of the modifying factor is expected to drop the LOEL into the range of the NOEL. Note that if a benchmark dose limit is used as the point of departure, F5 does not need to be used.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #alphaRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"alpha\">\n            {{alpha.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"form-inline\">\n              <div class=\"input-group\">\n                <input\n                  [ngClass]=\"{'form-control': true, output: alpha.isMarkedAsOutput()}\"\n                  id=\"alpha\"\n                  sdInputPosNumLeft\n                  (input)=\"pdeForm.calculate()\"\n                  [disabled]=\"!alpha.enabled\"\n                  [readonly]=\"alpha.isMarkedAsOutput()\"\n                  [(ngModel)]=\"alpha.textValue\"\n                  [ngModelOptions]=\"{standalone: true}\"\n                  #alphaInput\n                  />\n              </div>\n              <input\n                class=\"form-check-input ml-3\"\n                id=\"alphaDisableControl\"\n                type=\"checkbox\"\n                (change)=\"alphaDisable()\"\n                [(ngModel)]=\"alphaDisabled\"\n                [ngModelOptions]=\"{standalone: true}\"\n                />\n              <label class=\"form-check-label\" for=\"alphaDisableControl\">Disable</label>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"alphaRow.showHelp = !alphaRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Alpha or BCF is the bioavailability correction factor. This factor is applied when the route of administration of the critical study is different from the route of exposure to which the PDE applies. To calculate BCF use <a rel=\"noopener\" target=\"_blank\" href=\"BioavailCalc\">BioavailCalc</a>. Note that application of BCF is not considered appropriate if the critical effect may be different between the route of exposure to which the PDE applies as compared to the route of exposure from the critical study. For example, a site-of-contact critical effect may be more concentration dependent rather than total dose dependent, and a BCF would not account for this.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #extraFactorsRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"extraFactors\">\n            {{extraFactors.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div class=\"form-inline\">\n              <div class=\"input-group\">\n                <input\n                  [ngClass]=\"{'form-control': true, 'output': extraFactors.isMarkedAsOutput()}\"\n                  id=\"extraFactors\"\n                  sdInputPosNumLeft\n                  (input)=\"pdeForm.calculate()\"\n                  [disabled]=\"!extraFactors.enabled\"\n                  [readonly]=\"extraFactors.isMarkedAsOutput()\"\n                  [(ngModel)]=\"extraFactors.textValue\"\n                  [ngModelOptions]=\"{standalone: true}\"\n                  #extraFactorsInput\n                  />\n              </div>\n              <input\n                class=\"form-check-input ml-3\"\n                id=\"extraFactorsDisableControl\"\n                type=\"checkbox\"\n                (change)=\"extraFactorsDisable()\"\n                [(ngModel)]=\"extraFactorsDisabled\"\n                [ngModelOptions]=\"{standalone: true}\"\n                />\n              <label class=\"form-check-label\" for=\"extraFactorsDisableControl\">Disable</label>\n              <div>\n                <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"extraFactorsRow.showHelp = !extraFactorsRow.showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\">\n                  <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Application of this factor is based on professional judgment, where the risk assessor believes that uncertainties are not adequately addressed by F1 to F5. ICH Q3C does not specifically apply a factor for database completeness. Thus, if the database is considered poor quality or is insufficiently robust to address key hazard endpoints, this modifying factor may be used.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row>\n          <ng-template sdCalcRowLabel>\n            Composite modifying factors\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true,\n                          'output-only': getCompositeFactorsValue() != ''}\"\n              type=\"text\"\n              readonly\n              [value]=\"getCompositeFactorsValue()\"\n              #compositeFactorsOutput\n              />\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\">\n            <div>\n              <p>This field is calculated based on the following equation:</p>\n              <p sdKatexInline=\"true\" [sdKatex]=\"eqPrinter.dispatch(compositeFactorsTerm)\"></p>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowInput sdCustomRowInput=\"true\" *ngIf=\"getCompositeFactorsTooHigh()\">\n            <ngb-alert [dismissible]=\"false\">Composite uncertainty associated with this PDE is high.</ngb-alert>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The product of all modifying factors applied. Note that composite modifying factors above 5000 indicate a low confidence limit.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #pdeRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"pde\">\n            {{pde.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': pde.isMarkedAsOutput()}\"\n              id=\"pde\"\n              sdInputPosNum\n              (input)=\"pdeForm.calculate()\"\n              [readonly]=\"pde.isMarkedAsOutput()\"\n              [(ngModel)]=\"pde.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #pdeInput\n              />\n            <sd-select name=\"pdeUnits\" #pdeUnits (change)=\"changePdeUnits();\" [sdAppend]=\"true\">\n              <optgroup label=\"mass/time\">\n                <option *ngFor=\"let unit of iterUnits(pde.UNITS, pde.MASS_TIME)\" [label]=\"unit\" [value]=\"pde.UNITS[unit]\">\n              </optgroup>\n              <optgroup label=\"mass/body weight/time\">\n                <option *ngFor=\"let unit of iterUnits(pde.UNITS, pde.PER_TIME)\" [label]=\"unit\" [value]=\"pde.UNITS[unit]\">\n              </optgroup>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            A substance specific dose that is unlikely to cause an adverse effect if an individual is exposed at or below this dose every day for a lifetime. Effectively synonymous with ADE.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"pdeForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"pdeForm.calculateAndLog(calculationLog)\" [disabled]=\"pdeForm.internalError\">Convert!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"pdeForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"pdeForm.equationSnippet\">\n    </div>\n  </div>\n  <p>The calculations presented follow the principles outlined in the <a rel=\"noopener\" target=\"_blank\" href=\"https://www.ich.org/fileadmin/Public_Web_Site/ICH_Products/Guidelines/Quality/Q3C/Q3C__R6___Step_4.pdf\">ICH Q3C Guideline</a>.</p>\n  <sd-calculation-log #calculationLog></sd-calculation-log>\n</div>\n"

/***/ }),

/***/ "./src/app/hbelcalc/hbelcalc.component.ts":
/*!************************************************!*\
  !*** ./src/app/hbelcalc/hbelcalc.component.ts ***!
  \************************************************/
/*! exports provided: HbelCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HbelCalcComponent", function() { return HbelCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sd-select/sd-select.component */ "./src/app/sd-select/sd-select.component.ts");
/* harmony import */ var _shared_dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _shared_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/field */ "./src/app/shared/field.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/form */ "./src/app/shared/form.ts");
/* harmony import */ var _shared_equation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/equation */ "./src/app/shared/equation.ts");
/* harmony import */ var _shared_number_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/number-util */ "./src/app/shared/number-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later











// pdeForm
var EffectLimit = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EffectLimit, _super);
    function EffectLimit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PER_DAY = _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initTime().recip();
        _this.UNITS = {
            'mg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.000001, _this.PER_DAY),
            'g/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.001, _this.PER_DAY),
            'µg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.000000001, _this.PER_DAY),
        };
        return _this;
    }
    Object.defineProperty(EffectLimit.prototype, "label", {
        get: function () { return 'No/low effect level'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EffectLimit.prototype, "unitName", {
        get: function () { return this.units.selectedName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EffectLimit.prototype, "unit", {
        get: function () { return this.units.value; },
        enumerable: true,
        configurable: true
    });
    return EffectLimit;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var BodyWeight = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BodyWeight, _super);
    function BodyWeight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.KG = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initMass());
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        _this.customValue = '';
        _this.customSpeciesName = '';
        _this.custom = true;
        _this.selectedValue = '';
        _this.selected = 'custom';
        _this.options = [
            { label: '50 kg (ICH Q3C default)', value: 50, bold: true },
            { label: '60 kg', value: 60, bold: false },
            { label: '70 kg', value: 70, bold: false },
            { label: '80 kg', value: 80, bold: false },
        ];
        _this.enabled = true;
        _this.expanded = true;
        return _this;
    }
    Object.defineProperty(BodyWeight.prototype, "label", {
        get: function () { return 'Assumed human body weight'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyWeight.prototype, "unitName", {
        get: function () {
            return this.enabled ? 'kg' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyWeight.prototype, "unit", {
        get: function () {
            return this.enabled ? this.KG : this.UNIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyWeight.prototype, "logValue", {
        get: function () {
            // super.logValue is inlined here, see:
            // https://github.com/Microsoft/TypeScript/issues/338
            return this.enabled ? [this.value, this.unitName, this.isMarkedAsOutput() ? '(calculated)' : ''].filter(function (txt) { return txt.length > 0; }).join(' ') : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyWeight.prototype, "value", {
        get: function () {
            if (!this.enabled) {
                return '1';
            }
            if (this.custom) {
                return this.customValue;
            }
            return this.selectedValue;
        },
        set: function (new_value) { this.customValue = new_value; },
        enumerable: true,
        configurable: true
    });
    BodyWeight.prototype.disable = function (variableMap) {
        this.enabled = false;
        variableMap.set(this.var, '');
    };
    BodyWeight.prototype.enable = function (variableMap) {
        this.enabled = true;
        variableMap.set(this.var, this.equationVarName);
    };
    BodyWeight.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.selected = 'custom';
        this.custom = true;
        this.expanded = true;
    };
    return BodyWeight;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var Species = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Species, _super);
    function Species() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        _this.customValue = '';
        _this.customSpeciesName = '';
        _this.custom = true;
        _this.selectedValue = '';
        _this.selected = 'custom';
        _this.expanded = true;
        _this.options = [
            { label: 'human equivalent dose (no F1 required)', value: 1 },
            { label: 'human', value: 1 },
            { label: 'dog', value: 2 },
            { label: 'rabbit', value: 2.5 },
            { label: 'monkey', value: 3 },
            { label: 'rat', value: 5 },
            { label: 'mouse', value: 12 },
            { label: 'other species', value: 10 },
        ];
        return _this;
    }
    Object.defineProperty(Species.prototype, "label", {
        get: function () { return 'F1: Interspecies Extrapolation'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "logColumnName", {
        get: function () { return 'F1'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "logValue", {
        get: function () {
            if (this.custom) {
                if (this.customSpeciesName === '') {
                    if (this.isMarkedAsOutput()) {
                        return "custom (" + this.customValue + ") (calculated)";
                    }
                    return "custom (" + this.customValue + ")";
                }
                if (this.isMarkedAsOutput()) {
                    return this.customSpeciesName + " (" + this.customValue + ") (calculated)";
                }
                return this.customSpeciesName + " (" + this.customValue + ")";
            }
            return this.selectedName + " (" + this.selectedValue + ")";
        },
        enumerable: true,
        configurable: true
    });
    Species.prototype.updateErrorState = function () {
        if (this.custom) {
            _super.prototype.updateErrorState.call(this);
        }
    };
    Object.defineProperty(Species.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "selectedName", {
        get: function () {
            if (this.selected === 'custom') {
                return 'custom';
            }
            return this.options[parseInt(this.selected, 10)].label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "value", {
        get: function () { return this.custom ? this.customValue : this.selectedValue; },
        set: function (new_value) { this.customValue = new_value; },
        enumerable: true,
        configurable: true
    });
    Species.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.selected = 'custom';
        this.custom = true;
        this.expanded = true;
    };
    return Species;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var SafetyFactor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafetyFactor, _super);
    function SafetyFactor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        return _this;
    }
    Object.defineProperty(SafetyFactor.prototype, "label", {
        get: function () { return 'F2: Interindividual variability'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafetyFactor.prototype, "logColumnName", {
        get: function () { return 'F2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafetyFactor.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SafetyFactor.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    return SafetyFactor;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var StudyDurationFactor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudyDurationFactor, _super);
    function StudyDurationFactor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.species = 'custom';
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        // The value shown in the custom box.
        _this.customValue = '';
        // Whether 'custom value' is the currently selected radio button.
        _this.custom = true;
        // The value, if custom is not active.
        _this.selectedValue = '';
        _this.selected = 'custom';
        _this.expanded = true;
        _this.mouseRatOptions = [
            { label: 'one half lifetime (1 year)', value: 1 },
            { label: 'whole period of organogenesis in a reproductive study', value: 1 },
            { label: '≥ 6-month study', value: 2 },
            { label: '≥ 3-month study', value: 5 },
            { label: 'shorter duration studies', value: 10 }
        ];
        _this.rabbitOptions = [
            { label: 'one half lifetime (1 year)', value: 1 },
            { label: 'whole period of organogenesis in a reproductive study', value: 1 },
            { label: '≥ 3.5-year study', value: 2 },
            { label: '≥ 2-year study', value: 5 },
            { label: 'shorter duration studies', value: 10 }
        ];
        _this.catDogMonkeyOptions = [
            { label: 'one half lifetime (7 years)', value: 1 },
            { label: 'whole period of organogenesis in a reproductive study', value: 1 },
            { label: '≥ 3.5-year study', value: 2 },
            { label: '≥ 2-year study', value: 5 },
            { label: 'shorter duration studies', value: 10 }
        ];
        _this.unknownSpeciesOptions = [
            { label: 'one half lifetime (1 year for rodents or rabbits; 7 years for cats, dogs and monkeys)', value: 1 },
            { label: 'whole period of organogenesis in a reproductive study', value: 1 },
            { label: '≥ 6-month study in rodents, or ≥ 3.5-year study in non-rodents', value: 2 },
            { label: '≥ 3-month study in rodents, or ≥ 2-year study in non-rodents', value: 5 },
            { label: 'shorter duration studies', value: 10 }
        ];
        return _this;
    }
    Object.defineProperty(StudyDurationFactor.prototype, "label", {
        get: function () { return 'F3: Exposure duration adjustment'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyDurationFactor.prototype, "logColumnName", {
        get: function () { return 'F3'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyDurationFactor.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyDurationFactor.prototype, "logValue", {
        get: function () {
            if (this.custom) {
                if (this.isMarkedAsOutput()) {
                    return this.customValue + " (calculated)";
                }
                return this.customValue;
            }
            return this.options()[parseInt(this.selected, 10)].label + ' (' + this.selectedValue + ')';
        },
        enumerable: true,
        configurable: true
    });
    StudyDurationFactor.prototype.options = function () {
        switch (this.species) {
            case 'mouse':
            case 'rat':
                return this.mouseRatOptions;
            case 'rabbit':
                return this.rabbitOptions;
            case 'cat':
            case 'dog':
            case 'monkey':
                return this.catDogMonkeyOptions;
            default:
                return this.unknownSpeciesOptions;
        }
    };
    StudyDurationFactor.prototype.updateErrorState = function () {
        if (this.custom) {
            _super.prototype.updateErrorState.call(this);
        }
    };
    Object.defineProperty(StudyDurationFactor.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyDurationFactor.prototype, "value", {
        get: function () { return this.custom ? this.customValue : this.selectedValue; },
        set: function (new_value) { /* assert (this.custom) */ this.customValue = new_value; },
        enumerable: true,
        configurable: true
    });
    StudyDurationFactor.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.selected = 'custom';
        this.custom = true;
        this.expanded = true;
    };
    return StudyDurationFactor;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var SevereToxicityFactor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SevereToxicityFactor, _super);
    function SevereToxicityFactor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        // The value shown in the custom box.
        _this.customValue = '';
        // Whether 'custom value' is the currently selected radio button.
        _this.custom = true;
        // The value, if custom is not active.
        _this.selectedValue = '';
        _this.selected = 'custom';
        _this.expanded = true;
        _this.options = [
            { label: 'fetal toxicity associated with maternal toxicity', value: 1 },
            { label: 'fetal toxicity without maternal toxicity', value: 5 },
            { label: 'teratogenic effect with maternal toxicity', value: 5 },
            { label: 'teratogenic effect without maternal toxicity', value: 10 },
        ];
        return _this;
    }
    Object.defineProperty(SevereToxicityFactor.prototype, "label", {
        get: function () { return 'F4: Severe toxicity adjustment'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SevereToxicityFactor.prototype, "logColumnName", {
        get: function () { return 'F4'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SevereToxicityFactor.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SevereToxicityFactor.prototype, "logValue", {
        get: function () {
            if (this.custom) {
                if (this.isMarkedAsOutput()) {
                    return this.customValue + " (calculated)";
                }
                return this.customValue;
            }
            return this.options[parseInt(this.selected, 10)].label + ' (' + this.selectedValue + ')';
        },
        enumerable: true,
        configurable: true
    });
    SevereToxicityFactor.prototype.updateErrorState = function () {
        if (this.custom) {
            _super.prototype.updateErrorState.call(this);
        }
    };
    Object.defineProperty(SevereToxicityFactor.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SevereToxicityFactor.prototype, "value", {
        get: function () { return this.custom ? this.customValue : this.selectedValue; },
        set: function (new_value) { /* assert (this.custom) */ this.customValue = new_value; },
        enumerable: true,
        configurable: true
    });
    SevereToxicityFactor.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.selected = 'custom';
        this.custom = true;
        this.expanded = true;
    };
    return SevereToxicityFactor;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var NoNoelFactor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NoNoelFactor, _super);
    function NoNoelFactor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        return _this;
    }
    Object.defineProperty(NoNoelFactor.prototype, "label", {
        get: function () { return 'F5: LOEL to NOEL extrapolation'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoNoelFactor.prototype, "logColumnName", {
        get: function () { return 'F5'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoNoelFactor.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoNoelFactor.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    return NoNoelFactor;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var ExtraFactors = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExtraFactors, _super);
    function ExtraFactors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        _this.enabled = true;
        _this.textValue = '';
        _this.saveText = '';
        return _this;
    }
    Object.defineProperty(ExtraFactors.prototype, "label", {
        get: function () { return 'Additional modifying factor'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtraFactors.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtraFactors.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtraFactors.prototype, "value", {
        get: function () {
            return this.enabled ? this.textValue : '1';
        },
        set: function (new_value) { this.textValue = new_value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtraFactors.prototype, "logValue", {
        get: function () {
            // super.logValue is inlined here, see:
            // https://github.com/Microsoft/TypeScript/issues/338
            return this.enabled ? [this.value, this.unitName, this.isMarkedAsOutput() ? '(calculated)' : ''].filter(function (txt) { return txt.length > 0; }).join(' ') : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    ExtraFactors.prototype.disable = function (variableMap) {
        this.enabled = false;
        this.saveText = this.textValue;
        this.textValue = '';
        variableMap.set(this.var, '');
    };
    ExtraFactors.prototype.enable = function (variableMap) {
        this.enabled = true;
        this.textValue = this.saveText;
        this.saveText = '';
        variableMap.set(this.var, this.equationVarName);
    };
    ExtraFactors.prototype.clear = function () {
        this.saveText = '';
        _super.prototype.clear.call(this);
    };
    return ExtraFactors;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var Alpha = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Alpha, _super);
    function Alpha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit());
        _this.enabled = true;
        _this.textValue = '';
        _this.saveText = '';
        return _this;
    }
    Object.defineProperty(Alpha.prototype, "label", {
        get: function () { return 'Alpha or BCF'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "value", {
        get: function () {
            return this.enabled ? this.textValue : '1';
        },
        set: function (new_value) { this.textValue = new_value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alpha.prototype, "logValue", {
        get: function () {
            // super.logValue is inlined here, see:
            // https://github.com/Microsoft/TypeScript/issues/338
            return this.enabled ? [this.value, this.unitName, this.isMarkedAsOutput() ? '(calculated)' : ''].filter(function (txt) { return txt.length > 0; }).join(' ') : 'n/a';
        },
        enumerable: true,
        configurable: true
    });
    Alpha.prototype.disable = function (variableMap) {
        this.enabled = false;
        this.saveText = this.textValue;
        this.textValue = '';
        variableMap.set(this.var, '');
    };
    Alpha.prototype.enable = function (variableMap) {
        this.enabled = true;
        this.textValue = this.saveText;
        this.saveText = '';
        variableMap.set(this.var, this.equationVarName);
    };
    Alpha.prototype.clear = function () {
        this.saveText = '';
        _super.prototype.clear.call(this);
    };
    return Alpha;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var PDE = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PDE, _super);
    function PDE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MASS_TIME = _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initTime());
        _this.PER_TIME = _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initTime());
        _this.UNITS = {
            'mg/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.001, _this.MASS_TIME),
            'g/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.1, _this.MASS_TIME),
            'µg/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.000001, _this.MASS_TIME),
            'mg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.000001, _this.PER_TIME),
            'g/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.001, _this.PER_TIME),
            'µg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["ScalarAndDimension"](0.000000001, _this.PER_TIME),
        };
        return _this;
    }
    Object.defineProperty(PDE.prototype, "label", {
        get: function () { return 'Permissible daily exposure'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PDE.prototype, "unitName", {
        get: function () { return this.units.selectedName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PDE.prototype, "unit", {
        get: function () { return this.units.value; },
        enumerable: true,
        configurable: true
    });
    return PDE;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var PDEForm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PDEForm, _super);
    function PDEForm(eqPrinter, fields, factorFields) {
        var _this = _super.call(this, eqPrinter, fields) || this;
        _this.factorFields = factorFields;
        return _this;
    }
    PDEForm.prototype.updateFactorVars = function () {
        this.factorFields.forEach(function (f) {
            f.updateVar();
        });
    };
    PDEForm.prototype.updateFactorErrors = function () {
        this.factorFields.filter(function (f) { return f.row.show; }).forEach(function (f) {
            f.updateErrorState();
        });
    };
    PDEForm.prototype.hasFactorErrors = function () {
        return this.factorFields.filter(function (f) { return f.row.show; }).some(function (f) { return f.hasError; });
    };
    PDEForm.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.updateFactorVars();
    };
    PDEForm.prototype.calculate = function () {
        this.updateFactorErrors();
        if (!this.hasFactorErrors()) {
            this.updateFactorVars();
        }
        _super.prototype.calculate.call(this);
    };
    return PDEForm;
}(_shared_form__WEBPACK_IMPORTED_MODULE_8__["Form"]));
var HbelCalcComponent = /** @class */ (function () {
    function HbelCalcComponent() {
        this.variableMap = new Map();
        this.eqPrinter = new _shared_equation__WEBPACK_IMPORTED_MODULE_9__["EquationPrinter"](this.variableMap);
        this.effectLimit = new EffectLimit;
        this.bodyWeight = new BodyWeight;
        this.species = new Species;
        this.safetyFactor = new SafetyFactor;
        this.studyDurationFactor = new StudyDurationFactor;
        this.severeToxicityFactor = new SevereToxicityFactor;
        this.noNoelFactor = new NoNoelFactor;
        this.extraFactors = new ExtraFactors;
        this.alpha = new Alpha;
        this.pde = new PDE;
        this.pdeForm = new PDEForm(this.eqPrinter, [this.effectLimit, this.bodyWeight, this.species, this.safetyFactor, this.studyDurationFactor, this.severeToxicityFactor, this.noNoelFactor, this.extraFactors, this.alpha, this.pde], [this.species, this.safetyFactor, this.studyDurationFactor, this.severeToxicityFactor, this.noNoelFactor, this.extraFactors, this.alpha]);
        this.ready = false;
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilePdf"]);
        // pdeForm
        this.compositeFactorsTerm = _shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"].mul(this.species.var, this.safetyFactor.var, this.studyDurationFactor.var, this.severeToxicityFactor.var, this.noNoelFactor.var, this.extraFactors.var, this.alpha.var);
        var eq = new _shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"].div(_shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"].mul(this.effectLimit.var, this.bodyWeight.var), _shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"].mul(this.compositeFactorsTerm, this.pde.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_9__["Equation"].constantFromNumber(1));
        this.effectLimit.term = eq.solve(this.effectLimit.var).RHS;
        this.bodyWeight.term = eq.solve(this.bodyWeight.var).RHS;
        this.species.term = eq.solve(this.species.var).RHS;
        this.safetyFactor.term = eq.solve(this.safetyFactor.var).RHS;
        this.studyDurationFactor.term = eq.solve(this.studyDurationFactor.var).RHS;
        this.severeToxicityFactor.term = eq.solve(this.severeToxicityFactor.var).RHS;
        this.noNoelFactor.term = eq.solve(this.noNoelFactor.var).RHS;
        this.extraFactors.term = eq.solve(this.extraFactors.var).RHS;
        this.alpha.term = eq.solve(this.alpha.var).RHS;
        this.pde.term = eq.solve(this.pde.var).RHS;
        this.variableMap.set(this.effectLimit.var, this.effectLimit.equationVarName);
        this.variableMap.set(this.bodyWeight.var, this.bodyWeight.equationVarName);
        this.variableMap.set(this.species.var, this.species.equationVarName);
        this.variableMap.set(this.safetyFactor.var, this.safetyFactor.equationVarName);
        this.variableMap.set(this.studyDurationFactor.var, this.studyDurationFactor.equationVarName);
        this.variableMap.set(this.severeToxicityFactor.var, this.severeToxicityFactor.equationVarName);
        this.variableMap.set(this.noNoelFactor.var, this.noNoelFactor.equationVarName);
        this.variableMap.set(this.extraFactors.var, this.extraFactors.equationVarName);
        this.variableMap.set(this.alpha.var, this.alpha.equationVarName);
        this.variableMap.set(this.pde.var, this.pde.equationVarName);
        this.pdeForm.equationSnippet = this.pde.equationSnippet(this.eqPrinter);
    }
    HbelCalcComponent.prototype.ngAfterViewInit = function () {
        this.effectLimit.row = this.effectLimitRow;
        this.effectLimit.input = this.effectLimitInput;
        this.effectLimit.units = this.effectLimitUnits;
        this.bodyWeight.row = this.bodyWeightRow;
        this.bodyWeight.input = this.bodyWeightInput;
        this.species.row = this.speciesRow;
        this.species.input = this.speciesInput;
        this.safetyFactor.row = this.safetyFactorRow;
        this.safetyFactor.input = this.safetyFactorInput;
        this.studyDurationFactor.row = this.studyDurationFactorRow;
        this.studyDurationFactor.input = this.studyDurationFactorInput;
        this.severeToxicityFactor.row = this.severeToxicityFactorRow;
        this.severeToxicityFactor.input = this.severeToxicityFactorInput;
        this.noNoelFactor.row = this.noNoelFactorRow;
        this.noNoelFactor.input = this.noNoelFactorInput;
        this.extraFactors.row = this.extraFactorsRow;
        this.extraFactors.input = this.extraFactorsInput;
        this.alpha.row = this.alphaRow;
        this.alpha.input = this.alphaInput;
        this.pde.row = this.pdeRow;
        this.pde.input = this.pdeInput;
        this.pde.units = this.pdeUnits;
        this.ready = true;
    };
    HbelCalcComponent.prototype.changePdeUnits = function () {
        var PER_TIME = _shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initUnit().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"].initTime());
        if (this.pde.units.value.d.equal(PER_TIME)) {
            this.bodyWeight.disable(this.variableMap);
        }
        else {
            this.bodyWeight.enable(this.variableMap);
        }
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.bodyWeightClick = function (i) {
        this.bodyWeight.custom = false;
        this.bodyWeight.customValue = '';
        this.bodyWeight.row.errorText = '';
        this.bodyWeight.expanded = !this.bodyWeight.expanded;
        this.bodyWeight.selectedValue = Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_10__["printNum"])(this.bodyWeight.options[i].value);
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.bodyWeightClickCustom = function () {
        this.bodyWeight.custom = true;
        this.bodyWeight.expanded = !this.bodyWeight.expanded;
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.speciesClick = function (i) {
        this.species.custom = false;
        this.species.customValue = '';
        this.species.customSpeciesName = '';
        this.species.row.errorText = '';
        this.species.expanded = !this.species.expanded;
        this.species.selectedValue = Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_10__["printNum"])(this.species.options[i].value);
        this.studyDurationFactor.species = this.species.options[i].label;
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.speciesClickCustom = function () {
        this.species.custom = true;
        this.studyDurationFactor.species = 'custom';
        this.species.expanded = !this.species.expanded;
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.studyDurationFactorClick = function (value) {
        this.studyDurationFactor.custom = false;
        this.studyDurationFactor.customValue = '';
        this.studyDurationFactor.row.errorText = '';
        this.studyDurationFactor.expanded = !this.studyDurationFactor.expanded;
        this.studyDurationFactor.selectedValue = Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_10__["printNum"])(value);
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.studyDurationFactorClickCustom = function () {
        this.studyDurationFactor.custom = true;
        this.studyDurationFactor.expanded = !this.studyDurationFactor.expanded;
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.severeToxicityFactorClick = function (value) {
        this.severeToxicityFactor.custom = false;
        this.severeToxicityFactor.customValue = '';
        this.severeToxicityFactor.row.errorText = '';
        this.severeToxicityFactor.expanded = !this.severeToxicityFactor.expanded;
        this.severeToxicityFactor.selectedValue = Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_10__["printNum"])(value);
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.severeToxicityFactorClickCustom = function () {
        this.severeToxicityFactor.custom = true;
        this.severeToxicityFactor.expanded = !this.severeToxicityFactor.expanded;
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.alphaDisable = function () {
        if (this.alpha.enabled) {
            this.alpha.disable(this.variableMap);
        }
        else {
            this.alpha.enable(this.variableMap);
        }
        this.pdeForm.calculate();
    };
    HbelCalcComponent.prototype.extraFactorsDisable = function () {
        if (this.extraFactors.enabled) {
            this.extraFactors.disable(this.variableMap);
        }
        else {
            this.extraFactors.enable(this.variableMap);
        }
        this.pdeForm.calculate();
    };
    // Allow the template to iterate over unit labels filtered by dimension.
    HbelCalcComponent.prototype.iterUnits = function (table, d) {
        var results = [];
        Object.keys(table).forEach(function (key) {
            if (d == null || table[key].d.equal(d)) {
                results.push(key);
            }
        });
        return results;
    };
    HbelCalcComponent.prototype.getCompositeFactorsValue = function () {
        if (!this.ready) {
            return '';
        }
        var result = this.compositeFactorsTerm.getValue();
        if (result == null) {
            return '';
        }
        if (Object(_shared_dimension__WEBPACK_IMPORTED_MODULE_6__["isCalculateError"])(result)) {
            return '';
        }
        return Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_10__["printNum"])(result.n);
    };
    HbelCalcComponent.prototype.getCompositeFactorsTooHigh = function () {
        if (!this.ready) {
            return false;
        }
        var result = this.compositeFactorsTerm.getValue();
        if (result == null) {
            return false;
        }
        if (Object(_shared_dimension__WEBPACK_IMPORTED_MODULE_6__["isCalculateError"])(result)) {
            return false;
        }
        return result.n > 5000;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('effectLimitRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "effectLimitRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('effectLimitInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "effectLimitInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('effectLimitUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_5__["SdSelectComponent"])
    ], HbelCalcComponent.prototype, "effectLimitUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyWeightRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "bodyWeightRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyWeightInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "bodyWeightInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('speciesRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "speciesRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('speciesInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "speciesInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('safetyFactorRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "safetyFactorRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('safetyFactorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "safetyFactorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studyDurationFactorRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "studyDurationFactorRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('studyDurationFactorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "studyDurationFactorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('severeToxicityFactorRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "severeToxicityFactorRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('severeToxicityFactorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "severeToxicityFactorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noNoelFactorRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "noNoelFactorRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noNoelFactorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "noNoelFactorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('extraFactorsRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "extraFactorsRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('extraFactorsInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "extraFactorsInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alphaRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "alphaRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alphaInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "alphaInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdeRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], HbelCalcComponent.prototype, "pdeRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdeInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HbelCalcComponent.prototype, "pdeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdeUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_5__["SdSelectComponent"])
    ], HbelCalcComponent.prototype, "pdeUnits", void 0);
    HbelCalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hbelcalc',
            template: __webpack_require__(/*! ./hbelcalc.component.html */ "./src/app/hbelcalc/hbelcalc.component.html"),
            styles: [__webpack_require__(/*! ./hbelcalc.component.css */ "./src/app/hbelcalc/hbelcalc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HbelCalcComponent);
    return HbelCalcComponent;
}());



/***/ }),

/***/ "./src/app/humancalc/humancalc.component.css":
/*!***************************************************!*\
  !*** ./src/app/humancalc/humancalc.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHVtYW5jYWxjL2h1bWFuY2FsYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvaHVtYW5jYWxjL2h1bWFuY2FsYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG94Q2FsYyEgYnkgU2FmZSBEb3NlIMKpIDIwMTgtMjAyMS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBHUEwtMy4wLW9yLWxhdGVyXG4gKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/humancalc/humancalc.component.html":
/*!****************************************************!*\
  !*** ./src/app/humancalc/humancalc.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n  <p class=\"lead font-weight-bold\">\n    Human Equivalent Dose Calculators\n  </p>\n  <ngb-alert type=\"info\" [dismissible]=\"false\">This is a MULTIDIRECTIONAL calculator. <u>Leave any <b>one</b> field blank and hit Calculate!</u> It will calculate the missing field for you.</ngb-alert>\n  <p><b>FDA Method</b></p>\n  <p>For details on this method, see Table 1 (page 10) of the <a rel=\"noopener\" target=\"_blank\" href=\"https://www.fda.gov/downloads/drugs/guidances/ucm078932.pdf\">FDA Guidance for Industry</a>.</p>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #animalSpeciesRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"animalSpecies\">\n            {{animalSpecies.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <sd-select id=\"animalSpecies\" (click)=\"changeSpecies()\" #animalSpeciesSelect>\n              <option *ngFor=\"let species of animalSpecies.options\" [label]=\"species.species\" [value]=\"species\"></option>\n            </sd-select>\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #animalDoseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"animalDose\">\n            {{animalDose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': animalDose.isMarkedAsOutput()}\"\n              id=\"animalDose\"\n              sdInputPosNum\n              (input)=\"fdaMethodForm.calculate()\"\n              [readonly]=\"animalDose.isMarkedAsOutput()\"\n              [(ngModel)]=\"animalDose.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #animalDoseInput\n              />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">mg/kg BW/day</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The dose in mg/kg body weight/day that the animal received.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #humanDoseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"humanDose\">\n            {{humanEquivalentDose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': humanEquivalentDose.isMarkedAsOutput()}\"\n              id=\"humanDose\"\n              sdInputPosNum\n              (input)=\"fdaMethodForm.calculate()\"\n              [readonly]=\"humanEquivalentDose.isMarkedAsOutput()\"\n              [(ngModel)]=\"humanEquivalentDose.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #humanDoseInput/>\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">mg/kg BW/day</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Human dose extrapolated from an animal dose.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"fdaMethodForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"fdaMethodForm.calculateAndLog(calculationLog)\" [disabled]=\"fdaMethodForm.internalError\">Convert!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"fdaMethodForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"fdaMethodForm.equationSnippet\">\n    </div>\n  </div>\n  <hr />\n  <p><b>Body weight scaling method</b></p>\n  <p>This method scales doses between animals and humans-based Body Weight¾ (EPA preferred method) or Body Weight⅔ (FDA preferred method). Note that use of the FDA preferred method will result in more conservative estimations of human equivalent doses. It is NOT recommended that this calculator be used to scale human doses to smaller animals because this will result in higher doses in the animals on a mg/kg basis (i.e. this is not conservative) UNLESS it is already known that the dosing of the substance in question scales allometrically.</p>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #weightAnimalDoseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"weightAnimalDose\">\n            {{weightAnimalDose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': weightAnimalDose.isMarkedAsOutput()}\"\n              id=\"weightAnimalDose\"\n              sdInputPosNum\n              (input)=\"weightMethodForm.calculate()\"\n              [readonly]=\"weightAnimalDose.isMarkedAsOutput()\"\n              [(ngModel)]=\"weightAnimalDose.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #weightAnimalDoseInput\n              />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">mg/kg BW/day</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The dose in mg/kg body weight/day that the animal received.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #animalWeightRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"animalWeight\">\n            {{animalWeight.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, output: animalWeight.isMarkedAsOutput()}\"\n              id=\"animalWeight\"\n              sdInputPosNum\n              (input)=\"weightMethodForm.calculate()\"\n              [readonly]=\"animalWeight.isMarkedAsOutput()\"\n              [(ngModel)]=\"animalWeight.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #animalWeightInput\n              />\n            <sd-select name=\"animalWeightUnits\" #animalWeightUnits (change)=\"changeAnimalWeightUnits()\" [sdAppend]=\"true\">\n              <option label=\"kg\"></option>\n              <option label=\"g\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The mass of the animal.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #humanWeightRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"humanWeight\">\n            {{humanWeight.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': humanWeight.isMarkedAsOutput()}\"\n              id=\"humanWeight\"\n              sdInputPosNum\n              (input)=\"weightMethodForm.calculate()\"\n              [readonly]=\"humanWeight.isMarkedAsOutput()\"\n              [(ngModel)]=\"humanWeight.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #humanWeightInput\n              />\n            <sd-select name=\"humanWeightUnits\" #humanWeightUnits (change)=\"changeHumanWeightUnits()\" [sdAppend]=\"true\">\n              <option label=\"kg\"></option>\n              <option label=\"g\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The mass of the human.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #conversionFactorRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"conversionFactor\">\n            {{conversionFactor.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <sd-select (click)=\"changeConversionFactor()\" id=\"conversionFactor\" #conversionFactorSelect>\n                <option *ngFor=\"let factor of conversionFactor.options\" [label]=\"factor.display\" [value]=\"factor\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The FDA method recommends use of Body Weight<sup>⅔</sup> or scaling based on body surface area. When the equation is rearranged, this is Body Weight<sup>⅓</sup> or Body Weight<sup>0.33</sup>. The EPA default recommendation is Body Weight<sup>¾</sup> or scaling based on metabolic rate. When this equation is rearranged, this is Body Weight<sup>¼</sup> or Body Weight<sup>0.25</sup>.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #weightHumanDoseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"weightHumanDose\">\n            {{weightHumanEquivalentDose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': weightHumanEquivalentDose.isMarkedAsOutput()}\"\n              id=\"weightHumanDose\"\n              sdInputPosNum\n              (input)=\"weightMethodForm.calculate()\"\n              [readonly]=\"weightHumanEquivalentDose.isMarkedAsOutput()\"\n              [(ngModel)]=\"weightHumanEquivalentDose.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #weightHumanDoseInput\n              />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">mg/kg BW/day</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            Human dose extrapolated from an animal dose.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"weightMethodForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"weightMethodForm.calculateAndLog(calculationLog)\" [disabled]=\"weightMethodForm.internalError\">Convert!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"weightMethodForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"weightMethodForm.equationSnippet\">\n    </div>\n  </div>\n  <p><a rel=\"noopener\" target=\"_blank\" href=\"/assets/665c125d6b338f200ae3/Size Matters.pdf\">Human Equivalent Doses and Allometry Explained <fa-icon [icon]=\"['fas', 'file-pdf']\"></fa-icon></a></p>\n  <sd-calculation-log #calculationLog></sd-calculation-log>\n</div>\n"

/***/ }),

/***/ "./src/app/humancalc/humancalc.component.ts":
/*!**************************************************!*\
  !*** ./src/app/humancalc/humancalc.component.ts ***!
  \**************************************************/
/*! exports provided: HumanCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanCalcComponent", function() { return HumanCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _toxicology_HED_FACTORS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toxicology/HED_FACTORS */ "./src/app/toxicology/HED_FACTORS.ts");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sd-select/sd-select.component */ "./src/app/sd-select/sd-select.component.ts");
/* harmony import */ var _shared_dimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _shared_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/field */ "./src/app/shared/field.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/form */ "./src/app/shared/form.ts");
/* harmony import */ var _shared_equation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/equation */ "./src/app/shared/equation.ts");
/* harmony import */ var _shared_number_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/number-util */ "./src/app/shared/number-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later












var Species = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Species, _super);
    function Species() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit());
        _this.options = _toxicology_HED_FACTORS__WEBPACK_IMPORTED_MODULE_4__["SPECIES_CONVERSION"];
        return _this;
    }
    Object.defineProperty(Species.prototype, "label", {
        get: function () { return 'Species of animal'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "unitName", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "value", {
        get: function () { return this.select.value.species; },
        set: function (unused) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "equationVarName", {
        get: function () { return Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_11__["printNum"])(this.select ? this.select.value.factor : this.options[0].factor); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Species.prototype, "logValue", {
        get: function () { return this.select.value.species + ' (' + Object(_shared_number_util__WEBPACK_IMPORTED_MODULE_11__["printNum"])(this.select.value.factor) + ')'; },
        enumerable: true,
        configurable: true
    });
    Species.prototype.updateErrorState = function () { };
    Object.defineProperty(Species.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    Species.prototype.updateVar = function () {
        this.var.setValue(new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](this.select.value.factor, this.unit.d));
    };
    return Species;
}(_shared_field__WEBPACK_IMPORTED_MODULE_8__["Field"]));
var AnimalDose = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimalDose, _super);
    function AnimalDose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PER_DAY = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip());
        return _this;
    }
    Object.defineProperty(AnimalDose.prototype, "label", {
        get: function () { return 'Animal dose administered'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimalDose.prototype, "unitName", {
        get: function () { return 'mg/kg BW/day'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimalDose.prototype, "unit", {
        get: function () { return this.PER_DAY; },
        enumerable: true,
        configurable: true
    });
    return AnimalDose;
}(_shared_field__WEBPACK_IMPORTED_MODULE_8__["Field"]));
var HumanEquivalentDose = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HumanEquivalentDose, _super);
    function HumanEquivalentDose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PER_DAY = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip());
        return _this;
    }
    Object.defineProperty(HumanEquivalentDose.prototype, "label", {
        get: function () { return 'Human equivalent dose'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumanEquivalentDose.prototype, "unitName", {
        get: function () { return 'mg/kg BW/day'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HumanEquivalentDose.prototype, "unit", {
        get: function () { return this.PER_DAY; },
        enumerable: true,
        configurable: true
    });
    return HumanEquivalentDose;
}(_shared_field__WEBPACK_IMPORTED_MODULE_8__["Field"]));
//
var AnimalWeight = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimalWeight, _super);
    function AnimalWeight(label) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.G = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        _this.KG = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        return _this;
    }
    Object.defineProperty(AnimalWeight.prototype, "unitName", {
        get: function () { return this.units.selectedName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimalWeight.prototype, "unit", {
        get: function () {
            return this.units.selectedName === 'g' ? this.G : this.KG;
        },
        enumerable: true,
        configurable: true
    });
    return AnimalWeight;
}(_shared_field__WEBPACK_IMPORTED_MODULE_8__["Field"]));
var ConversionFactor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConversionFactor, _super);
    function ConversionFactor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit());
        _this.options = [
            { display: 'FDA Standard (0.33)', value: (1 / 3), logvalue: '0.33 (FDA standard)' },
            { display: 'EPA Standard (0.25)', value: (1 / 4), logvalue: '0.25 (EPA standard)' }
        ];
        return _this;
    }
    Object.defineProperty(ConversionFactor.prototype, "label", {
        get: function () { return 'Use the conversion factor recommended by'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionFactor.prototype, "logColumnName", {
        get: function () { return 'Conversion factor'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionFactor.prototype, "equationVarName", {
        get: function () { return (!this.select || this.select.value === this.options[0]) ? '0.33' : '0.25'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionFactor.prototype, "logValue", {
        get: function () { return this.select.value.logvalue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConversionFactor.prototype, "value", {
        get: function () { return this.select.value.display; },
        set: function (unused) { },
        enumerable: true,
        configurable: true
    });
    ConversionFactor.prototype.updateErrorState = function () { };
    Object.defineProperty(ConversionFactor.prototype, "unit", {
        get: function () { return this.UNIT; },
        enumerable: true,
        configurable: true
    });
    ConversionFactor.prototype.updateVar = function () {
        this.var.setValue(new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](this.select.value.value, this.unit.d));
    };
    return ConversionFactor;
}(_shared_field__WEBPACK_IMPORTED_MODULE_8__["Field"]));
var HumanCalcComponent = /** @class */ (function () {
    function HumanCalcComponent() {
        this.variableMap = new Map();
        this.eqPrinter = new _shared_equation__WEBPACK_IMPORTED_MODULE_10__["EquationPrinter"](this.variableMap);
        this.animalSpecies = new Species;
        this.animalDose = new AnimalDose;
        this.humanEquivalentDose = new HumanEquivalentDose;
        this.fdaMethodForm = new _shared_form__WEBPACK_IMPORTED_MODULE_9__["Form"](this.eqPrinter, [this.animalSpecies, this.animalDose, this.humanEquivalentDose]);
        this.weightAnimalDose = new AnimalDose;
        this.animalWeight = new AnimalWeight('Body weight of animal');
        this.humanWeight = new AnimalWeight('Body weight of human');
        this.conversionFactor = new ConversionFactor;
        this.weightHumanEquivalentDose = new HumanEquivalentDose;
        this.weightMethodForm = new _shared_form__WEBPACK_IMPORTED_MODULE_9__["Form"](this.eqPrinter, [this.weightAnimalDose, this.animalWeight, this.humanWeight, this.conversionFactor, this.weightHumanEquivalentDose]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilePdf"]);
        var fdaMethodEq = new _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].div(this.animalDose.var, _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].mul(this.animalSpecies.var, this.humanEquivalentDose.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].constantFromNumber(1));
        // Skip animalSpecies, it's never an output.
        this.animalDose.term = fdaMethodEq.solve(this.animalDose.var).RHS;
        this.humanEquivalentDose.term = fdaMethodEq.solve(this.humanEquivalentDose.var).RHS;
        this.variableMap.set(this.animalSpecies.var, this.animalSpecies.equationVarName);
        this.variableMap.set(this.animalDose.var, this.animalDose.equationVarName);
        this.variableMap.set(this.humanEquivalentDose.var, this.humanEquivalentDose.equationVarName);
        this.fdaMethodForm.equationSnippet = this.humanEquivalentDose.equationSnippet(this.eqPrinter);
        var weightMethodEq = new _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].div(_shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].mul(this.weightAnimalDose.var, _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].exp(_shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].div(this.animalWeight.var, this.humanWeight.var), this.conversionFactor.var)), this.weightHumanEquivalentDose.var), _shared_equation__WEBPACK_IMPORTED_MODULE_10__["Equation"].constantFromNumber(1));
        this.weightAnimalDose.term = weightMethodEq.solve(this.weightAnimalDose.var).RHS;
        this.animalWeight.term = weightMethodEq.solve(this.animalWeight.var).RHS;
        this.humanWeight.term = weightMethodEq.solve(this.humanWeight.var).RHS;
        // Skip conversionFactor, it's never an output.
        this.weightHumanEquivalentDose.term = weightMethodEq.solve(this.weightHumanEquivalentDose.var).RHS;
        this.variableMap.set(this.weightAnimalDose.var, this.weightAnimalDose.equationVarName);
        this.variableMap.set(this.animalWeight.var, this.animalWeight.equationVarName);
        this.variableMap.set(this.humanWeight.var, this.humanWeight.equationVarName);
        this.variableMap.set(this.conversionFactor.var, this.conversionFactor.equationVarName);
        this.variableMap.set(this.weightHumanEquivalentDose.var, this.weightHumanEquivalentDose.equationVarName);
        this.weightMethodForm.equationSnippet = this.weightHumanEquivalentDose.equationSnippet(this.eqPrinter);
    }
    HumanCalcComponent.prototype.ngAfterViewInit = function () {
        this.animalSpecies.select = this.animalSpeciesSelect;
        this.animalSpecies.row = this.animalSpeciesRow;
        this.animalDose.input = this.animalDoseInput;
        this.animalDose.row = this.animalDoseRow;
        this.humanEquivalentDose.input = this.humanDoseInput;
        this.humanEquivalentDose.row = this.humanDoseRow;
        this.weightAnimalDose.input = this.weightAnimalDoseInput;
        this.weightAnimalDose.row = this.weightAnimalDoseRow;
        this.animalWeight.input = this.animalWeightInput;
        this.animalWeight.units = this.animalWeightUnits;
        this.animalWeight.row = this.animalWeightRow;
        this.humanWeight.input = this.humanWeightInput;
        this.humanWeight.units = this.humanWeightUnits;
        this.humanWeight.row = this.humanWeightRow;
        this.conversionFactor.select = this.conversionFactorSelect;
        this.conversionFactor.row = this.conversionFactorRow;
        this.weightHumanEquivalentDose.input = this.weightHumanDoseInput;
        this.weightHumanEquivalentDose.row = this.weightHumanDoseRow;
    };
    HumanCalcComponent.prototype.changeSpecies = function () {
        this.variableMap.set(this.animalSpecies.var, this.animalSpecies.equationVarName);
        this.fdaMethodForm.calculate();
    };
    HumanCalcComponent.prototype.changeConversionFactor = function () {
        this.variableMap.set(this.conversionFactor.var, this.conversionFactor.equationVarName);
        this.weightMethodForm.calculate();
    };
    HumanCalcComponent.prototype.changeAnimalWeightUnits = function () {
        this.weightMethodForm.calculate();
    };
    HumanCalcComponent.prototype.changeHumanWeightUnits = function () {
        this.weightMethodForm.calculate();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalSpeciesRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "animalSpeciesRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalSpeciesSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], HumanCalcComponent.prototype, "animalSpeciesSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalDoseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "animalDoseRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalDoseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "animalDoseInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('humanDoseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "humanDoseRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('humanDoseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "humanDoseInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightAnimalDoseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "weightAnimalDoseRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightAnimalDoseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "weightAnimalDoseInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalWeightRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "animalWeightRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalWeightUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], HumanCalcComponent.prototype, "animalWeightUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animalWeightInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "animalWeightInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('humanWeightRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "humanWeightRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('humanWeightUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], HumanCalcComponent.prototype, "humanWeightUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('humanWeightInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "humanWeightInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conversionFactorRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "conversionFactorRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conversionFactorSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], HumanCalcComponent.prototype, "conversionFactorSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightHumanDoseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_5__["SdCalcRowComponent"])
    ], HumanCalcComponent.prototype, "weightHumanDoseRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightHumanDoseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HumanCalcComponent.prototype, "weightHumanDoseInput", void 0);
    HumanCalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-humancalc',
            template: __webpack_require__(/*! ./humancalc.component.html */ "./src/app/humancalc/humancalc.component.html"),
            styles: [__webpack_require__(/*! ./humancalc.component.css */ "./src/app/humancalc/humancalc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HumanCalcComponent);
    return HumanCalcComponent;
}());



/***/ }),

/***/ "./src/app/inhalecalc/inhalecalc.component.css":
/*!*****************************************************!*\
  !*** ./src/app/inhalecalc/inhalecalc.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5oYWxlY2FsYy9pbmhhbGVjYWxjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9pbmhhbGVjYWxjL2luaGFsZWNhbGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/inhalecalc/inhalecalc.component.html":
/*!******************************************************!*\
  !*** ./src/app/inhalecalc/inhalecalc.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n  <p class=\"lead font-weight-bold mb-4\">Inhalation Dose Calculators</p>\n  <ngb-alert type=\"info\" [dismissible]=\"false\">This is a MULTIDIRECTIONAL calculator. <u>Leave any <b>one</b> field blank and hit Calculate!</u> It will calculate the missing field for you.</ngb-alert>\n  <p>Use this calculator to convert between air concentrations in volume/volume to mass/volume.</p>\n  <p><b>All calculations are for a temperature of 25 degrees Celsius and 1 atmosphere of pressure (SATP)</b></p>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #concenVolVolRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"concenVolVol\">\n            {{concenVolVol.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, output: concenVolVol.isMarkedAsOutput()}\"\n              id=\"concenVolVol\"\n              sdInputPosNum\n              (input)=\"conversionForm.calculate()\"\n              [readonly]=\"concenVolVol.isMarkedAsOutput()\"\n              [(ngModel)]=\"concenVolVol.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #concenVolVolInput\n              />\n            <sd-select (click)=\"conversionForm.calculate()\" [sdAppend]=\"true\" #concenVolVolUnits>\n              <option *ngFor=\"let ratio of concenUnitsVolVolOptions\" [value]=\"ratio\" [label]=\"ratio.units\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The <b>air concentration (parts per notation)</b> is the amount of one substance present in any volume of air.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #molarMassRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"molarMass\">\n            {{molarMass.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, output: molarMass.isMarkedAsOutput()}\"\n              id=\"molarMass\"\n              sdInputPosNum\n              (input)=\"conversionForm.calculate()\"\n              [readonly]=\"molarMass.isMarkedAsOutput()\"\n              [(ngModel)]=\"molarMass.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #molarMassInput\n              />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">g/mol</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Molar mass</b> is the sum of the total mass in grams of all the atoms that make up a mole of a particular molecule. The unit used to measure molar mass is grams per mole. To calculate molar mass, you can look it up for your molecule from a trusted source, or you can calculate it using the atomic masses of individual atoms that make up the molecule. So, for sodium chloride or NaCl, the atomic mass of sodium is 22.99 g/mol. The atomic mass of chlorine is 35.45 g/mol. Since there is only one atom of sodium and one atom of chlorine in sodium chloride, we add these two together to get the molar mass of NaCl, which is 58.44 g/mol (22.99+35.45=58.44 g/mol).\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #concenMassVolRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"concenMassVol\">\n            {{concenMassVol.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': concenMassVol.isMarkedAsOutput()}\"\n              id=\"concenMassVol\"\n              sdInputPosNum\n              (input)=\"conversionForm.calculate()\"\n              [readonly]=\"concenMassVol.isMarkedAsOutput()\"\n              [(ngModel)]=\"concenMassVol.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #concenMassVolInput\n              />\n            <sd-select (click)=\"conversionForm.calculate()\" [sdAppend]=\"true\" #concenMassVolUnits>\n              <option *ngFor=\"let ratio of concenUnitsMassVolOptions\" [value]=\"ratio\" [label]=\"ratio.units\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Air concentration (mass/volume)</b> is the mass of the substance present in a specified volume of air.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"conversionForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"conversionForm.calculateAndLog(calculationLog)\" [disabled]=\"conversionForm.internalError\">Convert!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"conversionForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"conversionForm.equationSnippet\">\n    </div>\n  </div>\n  <hr>\n  <p><b>All calculations are for a temperature of 25 degrees Celsius and 1 atmosphere of pressure (SATP)</b></p>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #concenRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"concen\">\n            {{concen.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': concen.isMarkedAsOutput()}\"\n              id=\"concen\"\n              sdInputPosNum\n              (input)=\"inhalationForm.calculate()\"\n              [readonly]=\"concen.isMarkedAsOutput()\"\n              [(ngModel)]=\"concen.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #concenInput\n              />\n            <sd-select (click)=\"inhalationForm.calculate()\" [sdAppend]=\"true\" #concenUnits>\n              <option *ngFor=\"let ratio of concenUnitsMassVolOptions\" [value]=\"ratio\" [label]=\"ratio.units\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Air concentration (mass/volume)</b> is the mass of the substance present in a specified volume of air.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #intakeRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"intake\">\n            {{intake.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': intake.isMarkedAsOutput()}\"\n              id=\"intake\"\n              sdInputPosNum\n              (input)=\"inhalationForm.calculate()\"\n              [readonly]=\"intake.isMarkedAsOutput()\"\n              [(ngModel)]=\"intake.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #intakeInput\n              />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">m³/day</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Intake</b> is the amount of air inhaled in a day.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #weightRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"weight\">\n            {{weight.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': weight.isMarkedAsOutput()}\"\n              id=\"weight\"\n              sdInputPosNum\n              (input)=\"inhalationForm.calculate()\"\n              [readonly]=\"weight.isMarkedAsOutput()\"\n              [(ngModel)]=\"weight.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #weightInput\n              />\n            <sd-select (click)=\"inhalationForm.calculate()\" [sdAppend]=\"true\" #weightUnits>\n              <option *ngFor=\"let ratio of weightUnitsOptions\" [value]=\"ratio\" [label]=\"ratio.units\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The <b>body weight</b> of the animal or human consuming the substance.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #doseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"dose\">\n            {{dose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input\n              [ngClass]=\"{'form-control': true, 'output': dose.isMarkedAsOutput()}\"\n              id=\"dose\"\n              sdInputPosNum\n              (input)=\"inhalationForm.calculate()\"\n              [readonly]=\"dose.isMarkedAsOutput()\"\n              [(ngModel)]=\"dose.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              #doseInput\n              />\n            <sd-select (click)=\"inhalationForm.calculate()\" [sdAppend]=\"true\" #doseUnits>\n              <option *ngFor=\"let ratio of doseUnitsOptions\" [value]=\"ratio\" [label]=\"ratio.units\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Dose</b> is the quantity of a substance administered to or received by the animal or human in a day.\n          </ng-template>\n        </sd-calc-row>\n        <sd-internal-calc-error [errorText]=\"inhalationForm.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button class=\"btn btn-primary mr-3\" (click)=\"inhalationForm.calculateAndLog(calculationLog)\" [disabled]=\"inhalationForm.internalError\">Calculate!</button>\n          <button class=\"btn btn-secondary mr-4\" (click)=\"inhalationForm.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"border-top card-header\">\n      Live view of the equation used in this calculation:\n    </div>\n    <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"inhalationForm.equationSnippet\">\n    </div>\n  </div>\n  <p>Air concentrations for gases and vapours may be expressed in either ppm (v/v) or mg/m³ but for aerosols only mg/m³ should be used.</p>\n  <p>To get the molar mass, add the atomic weights of all atoms in the substance. To find the atomic weights, you may use the <a rel=\"noopener\" target=\"_blank\" href=\"https://en.wikipedia.org/wiki/File:Periodic_Table_Of_Elements.svg\">Periodic Table</a> or look up the molar mass from a trusted source such as <a rel=\"noopener\" target=\"_blank\" href=\"https://chem.nlm.nih.gov/chemidplus/\">ChemIDPlus</a>.</p>\n  <sd-calculation-log #calculationLog></sd-calculation-log>\n</div>\n"

/***/ }),

/***/ "./src/app/inhalecalc/inhalecalc.component.ts":
/*!****************************************************!*\
  !*** ./src/app/inhalecalc/inhalecalc.component.ts ***!
  \****************************************************/
/*! exports provided: InhaleCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InhaleCalcComponent", function() { return InhaleCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sd-calculation-log/sd-calculation-log.component */ "./src/app/sd-calculation-log/sd-calculation-log.component.ts");
/* harmony import */ var _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sd-select/sd-select.component */ "./src/app/sd-select/sd-select.component.ts");
/* harmony import */ var _shared_dimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _shared_equation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/equation */ "./src/app/shared/equation.ts");
/* harmony import */ var _shared_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/field */ "./src/app/shared/field.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/form */ "./src/app/shared/form.ts");
/* harmony import */ var _toxicology_UNIT_LISTS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toxicology/UNIT_LISTS */ "./src/app/toxicology/UNIT_LISTS.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later










// Conversion form fields.
var ConcenVolVol = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConcenVolVol, _super);
    function ConcenVolVol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConcenVolVol.prototype, "label", {
        get: function () { return 'Air concentration (v/v)'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcenVolVol.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](this.units.value.value, _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initUnit());
        },
        enumerable: true,
        configurable: true
    });
    return ConcenVolVol;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var MolarMass = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MolarMass, _super);
    function MolarMass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.G_MOL = new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMolarMass()));
        return _this;
    }
    Object.defineProperty(MolarMass.prototype, "label", {
        get: function () { return 'Molar mass'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "unitName", {
        get: function () { return 'g/mol'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "unit", {
        get: function () { return this.G_MOL; },
        enumerable: true,
        configurable: true
    });
    return MolarMass;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var ConcenMassVol = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConcenMassVol, _super);
    function ConcenMassVol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initLength().exp(3);
        _this.MASS_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMass().div(_this.VOLUME);
        return _this;
    }
    Object.defineProperty(ConcenMassVol.prototype, "label", {
        get: function () { return 'Air concentration (m/v)'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcenMassVol.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](this.units.value.value, this.MASS_VOLUME);
        },
        enumerable: true,
        configurable: true
    });
    return ConcenMassVol;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
// Inhalation form fields.
var Concen = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Concen, _super);
    function Concen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initLength().exp(3);
        _this.MASS_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMass().div(_this.VOLUME);
        return _this;
    }
    Object.defineProperty(Concen.prototype, "label", {
        get: function () { return 'Air concentration'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Concen.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](this.units.value.value, this.MASS_VOLUME);
        },
        enumerable: true,
        configurable: true
    });
    return Concen;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var Intake = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Intake, _super);
    function Intake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initLength().exp(3);
        _this.VOLUME_TIME = _this.VOLUME.div(_shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initTime());
        return _this;
    }
    Object.defineProperty(Intake.prototype, "label", {
        get: function () { return 'In­take'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Intake.prototype, "unitName", {
        get: function () { return 'm³/day'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Intake.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](1, this.VOLUME_TIME);
        },
        enumerable: true,
        configurable: true
    });
    return Intake;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var Weight = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Weight, _super);
    function Weight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Weight.prototype, "label", {
        get: function () { return 'Body weight'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weight.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](this.units.value.value, _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMass());
        },
        enumerable: true,
        configurable: true
    });
    return Weight;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var Dose = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dose, _super);
    function Dose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Dose.prototype, "label", {
        get: function () { return 'Dose'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dose.prototype, "unit", {
        get: function () {
            return new _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["ScalarAndDimension"](this.units.value.value, _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initTime().recip());
        },
        enumerable: true,
        configurable: true
    });
    return Dose;
}(_shared_field__WEBPACK_IMPORTED_MODULE_7__["Field"]));
var InhaleCalcComponent = /** @class */ (function () {
    function InhaleCalcComponent() {
        this.variableMap = new Map();
        this.eqPrinter = new _shared_equation__WEBPACK_IMPORTED_MODULE_6__["EquationPrinter"](this.variableMap);
        this.concenVolVol = new ConcenVolVol;
        this.molarMass = new MolarMass;
        this.concenMassVol = new ConcenMassVol;
        this.conversionForm = new _shared_form__WEBPACK_IMPORTED_MODULE_8__["Form"](this.eqPrinter, [this.concenVolVol, this.molarMass, this.concenMassVol]);
        this.concen = new Concen;
        this.intake = new Intake;
        this.weight = new Weight;
        this.dose = new Dose;
        this.inhalationForm = new _shared_form__WEBPACK_IMPORTED_MODULE_8__["Form"](this.eqPrinter, [this.concen, this.intake, this.weight, this.dose]);
        this.concenUnitsVolVolOptions = [
            { units: 'ppm (v/v)', value: 1 },
            { units: 'ppb (v/v)', value: 0.001 },
            { units: '% (v/v)', value: 10000 }
        ];
        this.concenUnitsMassVolOptions = [
            { units: 'mg/m³', value: 1 },
            { units: '\u03BCg/m³', value: 0.001 },
            { units: 'mg/L', value: 1000 },
            { units: '\u03BCg/L', value: 1 }
        ];
        this.concenUnitsOptions = _toxicology_UNIT_LISTS__WEBPACK_IMPORTED_MODULE_9__["CONCEN_RATIOS_INHALATION"];
        this.weightUnitsOptions = _toxicology_UNIT_LISTS__WEBPACK_IMPORTED_MODULE_9__["WEIGHT_RATIOS"];
        this.doseUnitsOptions = _toxicology_UNIT_LISTS__WEBPACK_IMPORTED_MODULE_9__["DOSE_RATIOS_INHALATION"];
        var conversionEq = new _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].div(_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].mul(this.concenVolVol.var, this.molarMass.var), _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].mul(_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].constantFromNumberDimension(_toxicology_UNIT_LISTS__WEBPACK_IMPORTED_MODULE_9__["SATP_RATIO"], _shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initLength().exp(3).div(_shared_dimension__WEBPACK_IMPORTED_MODULE_5__["Dimension"].initMolarMass())), this.concenMassVol.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].constantFromNumber(1));
        this.concenVolVol.term = conversionEq.solve(this.concenVolVol.var).RHS;
        this.molarMass.term = conversionEq.solve(this.molarMass.var).RHS;
        this.concenMassVol.term = conversionEq.solve(this.concenMassVol.var).RHS;
        this.variableMap.set(this.concenVolVol.var, this.concenVolVol.equationVarName);
        this.variableMap.set(this.molarMass.var, this.molarMass.equationVarName);
        this.variableMap.set(this.concenMassVol.var, this.concenMassVol.equationVarName);
        this.conversionForm.equationSnippet = this.concenMassVol.equationSnippet(this.eqPrinter);
        var inhalationEq = new _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].div(_shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].mul(this.concen.var, this.intake.var), _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].mul(this.weight.var, this.dose.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_6__["Equation"].constantFromNumber(1));
        this.concen.term = inhalationEq.solve(this.concen.var).RHS;
        this.intake.term = inhalationEq.solve(this.intake.var).RHS;
        this.weight.term = inhalationEq.solve(this.weight.var).RHS;
        this.dose.term = inhalationEq.solve(this.dose.var).RHS;
        this.variableMap.set(this.concen.var, this.concen.equationVarName);
        this.variableMap.set(this.intake.var, this.intake.equationVarName);
        this.variableMap.set(this.weight.var, this.weight.equationVarName);
        this.variableMap.set(this.dose.var, this.dose.equationVarName);
        this.inhalationForm.equationSnippet = this.dose.equationSnippet(this.eqPrinter);
    }
    InhaleCalcComponent.prototype.ngAfterViewInit = function () {
        // Conversion form.
        this.concenVolVol.input = this.concenVolVolInput;
        this.concenVolVol.units = this.concenVolVolUnits;
        this.concenVolVol.row = this.concenVolVolRow;
        this.molarMass.input = this.molarMassInput;
        this.molarMass.row = this.molarMassRow;
        this.concenMassVol.input = this.concenMassVolInput;
        this.concenMassVol.units = this.concenMassVolUnits;
        this.concenMassVol.row = this.concenMassVolRow;
        // Inhalation form.
        this.concen.input = this.concenInput;
        this.concen.units = this.concenUnits;
        this.concen.row = this.concenRow;
        this.intake.input = this.intakeInput;
        this.intake.row = this.intakeRow;
        this.weight.input = this.weightInput;
        this.weight.units = this.weightUnits;
        this.weight.row = this.weightRow;
        this.dose.input = this.doseInput;
        this.dose.units = this.doseUnits;
        this.dose.row = this.doseRow;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calculationLog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_3__["SdCalculationLogComponent"])
    ], InhaleCalcComponent.prototype, "calculationLog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenVolVolInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "concenVolVolInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenVolVolUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__["SdSelectComponent"])
    ], InhaleCalcComponent.prototype, "concenVolVolUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenVolVolRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "concenVolVolRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('molarMassInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "molarMassInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('molarMassRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "molarMassRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenMassVolInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "concenMassVolInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenMassVolUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__["SdSelectComponent"])
    ], InhaleCalcComponent.prototype, "concenMassVolUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenMassVolRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "concenMassVolRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "concenInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__["SdSelectComponent"])
    ], InhaleCalcComponent.prototype, "concenUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "concenRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('intakeInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "intakeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('intakeRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "intakeRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "weightInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__["SdSelectComponent"])
    ], InhaleCalcComponent.prototype, "weightUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('weightRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "weightRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InhaleCalcComponent.prototype, "doseInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_4__["SdSelectComponent"])
    ], InhaleCalcComponent.prototype, "doseUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_2__["SdCalcRowComponent"])
    ], InhaleCalcComponent.prototype, "doseRow", void 0);
    InhaleCalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inhalecalc',
            template: __webpack_require__(/*! ./inhalecalc.component.html */ "./src/app/inhalecalc/inhalecalc.component.html"),
            styles: [__webpack_require__(/*! ./inhalecalc.component.css */ "./src/app/inhalecalc/inhalecalc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InhaleCalcComponent);
    return InhaleCalcComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container-fluid bg-light border-top border-bottom\">\n  <h1 class=\"my-3 container display-4\">Multidirectional Human Health Risk Assessment Calculators</h1>\n  <sd-product-list>\n    <sd-product-list-item routerLink=\"/TotalDoseCalc\">\n      <ng-template sdProductListTitle>Total Dose Conversion Calculator</ng-template>\n      <ng-template sdProductListDescription>\n        Convert between concentration and dose. Calculator can be used for liquids in liquids (e.g. ethanol in water), solids in liquids (e.g. sugar in water) or solids in solids (e.g. sugar in flour).\n      </ng-template>\n    </sd-product-list-item>\n    <sd-product-list-item routerLink=\"/InhaleCalc\">\n      <ng-template sdProductListTitle>Inhalation Dose Calculators</ng-template>\n      <ng-template sdProductListDescription>\n         Convert ppm or % in air to mg/m³. Convert mg/m³ to dose in mg/kg body weight.\n      </ng-template>\n    </sd-product-list-item>\n    <sd-product-list-item routerLink=\"/HumanCalc\">\n      <ng-template sdProductListTitle>Human Equivalent Dose Conversion Calculators</ng-template>\n      <ng-template sdProductListDescription>\n         Convert a dose in animals to a dose in humans.\n      </ng-template>\n    </sd-product-list-item>\n    <sd-product-list-item routerLink=\"/HBELCalc\">\n      <ng-template sdProductListTitle>Health-Based Exposure Limits (HBELs) for Pharmaceuticals</ng-template>\n      <ng-template sdProductListDescription>\n         Calculate an HBEL based on the ICH Q3C Guideline.\n      </ng-template>\n    </sd-product-list-item>\n    <sd-product-list-item routerLink=\"/BioavailCalc\">\n      <ng-template sdProductListTitle>Relative Bioavailability Correction</ng-template>\n      <ng-template sdProductListDescription>\n        Calculates the modifying factor necessary when route to route extrapolation is required for the PDE calculation.\n      </ng-template>\n    </sd-product-list-item>\n  </sd-product-list>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/license/license.component.css":
/*!***********************************************!*\
  !*** ./src/app/license/license.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGljZW5zZS9saWNlbnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9saWNlbnNlL2xpY2Vuc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/license/license.component.html":
/*!************************************************!*\
  !*** ./src/app/license/license.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n<pre>\n                    GNU GENERAL PUBLIC LICENSE\n                       Version 3, 29 June 2007\n\n Copyright (C) 2007 Free Software Foundation, Inc. &lt;<a href=\"https://fsf.org/\">https://fsf.org/</a>&gt;\n Everyone is permitted to copy and distribute verbatim copies\n of this license document, but changing it is not allowed.\n\n                            Preamble\n\n  The GNU General Public License is a free, copyleft license for\nsoftware and other kinds of works.\n\n  The licenses for most software and other practical works are designed\nto take away your freedom to share and change the works.  By contrast,\nthe GNU General Public License is intended to guarantee your freedom to\nshare and change all versions of a program--to make sure it remains free\nsoftware for all its users.  We, the Free Software Foundation, use the\nGNU General Public License for most of our software; it applies also to\nany other work released this way by its authors.  You can apply it to\nyour programs, too.\n\n  When we speak of free software, we are referring to freedom, not\nprice.  Our General Public Licenses are designed to make sure that you\nhave the freedom to distribute copies of free software (and charge for\nthem if you wish), that you receive source code or can get it if you\nwant it, that you can change the software or use pieces of it in new\nfree programs, and that you know you can do these things.\n\n  To protect your rights, we need to prevent others from denying you\nthese rights or asking you to surrender the rights.  Therefore, you have\ncertain responsibilities if you distribute copies of the software, or if\nyou modify it: responsibilities to respect the freedom of others.\n\n  For example, if you distribute copies of such a program, whether\ngratis or for a fee, you must pass on to the recipients the same\nfreedoms that you received.  You must make sure that they, too, receive\nor can get the source code.  And you must show them these terms so they\nknow their rights.\n\n  Developers that use the GNU GPL protect your rights with two steps:\n(1) assert copyright on the software, and (2) offer you this License\ngiving you legal permission to copy, distribute and/or modify it.\n\n  For the developers' and authors' protection, the GPL clearly explains\nthat there is no warranty for this free software.  For both users' and\nauthors' sake, the GPL requires that modified versions be marked as\nchanged, so that their problems will not be attributed erroneously to\nauthors of previous versions.\n\n  Some devices are designed to deny users access to install or run\nmodified versions of the software inside them, although the manufacturer\ncan do so.  This is fundamentally incompatible with the aim of\nprotecting users' freedom to change the software.  The systematic\npattern of such abuse occurs in the area of products for individuals to\nuse, which is precisely where it is most unacceptable.  Therefore, we\nhave designed this version of the GPL to prohibit the practice for those\nproducts.  If such problems arise substantially in other domains, we\nstand ready to extend this provision to those domains in future versions\nof the GPL, as needed to protect the freedom of users.\n\n  Finally, every program is threatened constantly by software patents.\nStates should not allow patents to restrict development and use of\nsoftware on general-purpose computers, but in those that do, we wish to\navoid the special danger that patents applied to a free program could\nmake it effectively proprietary.  To prevent this, the GPL assures that\npatents cannot be used to render the program non-free.\n\n  The precise terms and conditions for copying, distribution and\nmodification follow.\n\n                       TERMS AND CONDITIONS\n\n  0. Definitions.\n\n  &quot;This License&quot; refers to version 3 of the GNU General Public License.\n\n  &quot;Copyright&quot; also means copyright-like laws that apply to other kinds of\nworks, such as semiconductor masks.\n\n  &quot;The Program&quot; refers to any copyrightable work licensed under this\nLicense.  Each licensee is addressed as &quot;you&quot;.  &quot;Licensees&quot; and\n&quot;recipients&quot; may be individuals or organizations.\n\n  To &quot;modify&quot; a work means to copy from or adapt all or part of the work\nin a fashion requiring copyright permission, other than the making of an\nexact copy.  The resulting work is called a &quot;modified version&quot; of the\nearlier work or a work &quot;based on&quot; the earlier work.\n\n  A &quot;covered work&quot; means either the unmodified Program or a work based\non the Program.\n\n  To &quot;propagate&quot; a work means to do anything with it that, without\npermission, would make you directly or secondarily liable for\ninfringement under applicable copyright law, except executing it on a\ncomputer or modifying a private copy.  Propagation includes copying,\ndistribution (with or without modification), making available to the\npublic, and in some countries other activities as well.\n\n  To &quot;convey&quot; a work means any kind of propagation that enables other\nparties to make or receive copies.  Mere interaction with a user through\na computer network, with no transfer of a copy, is not conveying.\n\n  An interactive user interface displays &quot;Appropriate Legal Notices&quot;\nto the extent that it includes a convenient and prominently visible\nfeature that (1) displays an appropriate copyright notice, and (2)\ntells the user that there is no warranty for the work (except to the\nextent that warranties are provided), that licensees may convey the\nwork under this License, and how to view a copy of this License.  If\nthe interface presents a list of user commands or options, such as a\nmenu, a prominent item in the list meets this criterion.\n\n  1. Source Code.\n\n  The &quot;source code&quot; for a work means the preferred form of the work\nfor making modifications to it.  &quot;Object code&quot; means any non-source\nform of a work.\n\n  A &quot;Standard Interface&quot; means an interface that either is an official\nstandard defined by a recognized standards body, or, in the case of\ninterfaces specified for a particular programming language, one that\nis widely used among developers working in that language.\n\n  The &quot;System Libraries&quot; of an executable work include anything, other\nthan the work as a whole, that (a) is included in the normal form of\npackaging a Major Component, but which is not part of that Major\nComponent, and (b) serves only to enable use of the work with that\nMajor Component, or to implement a Standard Interface for which an\nimplementation is available to the public in source code form.  A\n&quot;Major Component&quot;, in this context, means a major essential component\n(kernel, window system, and so on) of the specific operating system\n(if any) on which the executable work runs, or a compiler used to\nproduce the work, or an object code interpreter used to run it.\n\n  The &quot;Corresponding Source&quot; for a work in object code form means all\nthe source code needed to generate, install, and (for an executable\nwork) run the object code and to modify the work, including scripts to\ncontrol those activities.  However, it does not include the work's\nSystem Libraries, or general-purpose tools or generally available free\nprograms which are used unmodified in performing those activities but\nwhich are not part of the work.  For example, Corresponding Source\nincludes interface definition files associated with source files for\nthe work, and the source code for shared libraries and dynamically\nlinked subprograms that the work is specifically designed to require,\nsuch as by intimate data communication or control flow between those\nsubprograms and other parts of the work.\n\n  The Corresponding Source need not include anything that users\ncan regenerate automatically from other parts of the Corresponding\nSource.\n\n  The Corresponding Source for a work in source code form is that\nsame work.\n\n  2. Basic Permissions.\n\n  All rights granted under this License are granted for the term of\ncopyright on the Program, and are irrevocable provided the stated\nconditions are met.  This License explicitly affirms your unlimited\npermission to run the unmodified Program.  The output from running a\ncovered work is covered by this License only if the output, given its\ncontent, constitutes a covered work.  This License acknowledges your\nrights of fair use or other equivalent, as provided by copyright law.\n\n  You may make, run and propagate covered works that you do not\nconvey, without conditions so long as your license otherwise remains\nin force.  You may convey covered works to others for the sole purpose\nof having them make modifications exclusively for you, or provide you\nwith facilities for running those works, provided that you comply with\nthe terms of this License in conveying all material for which you do\nnot control copyright.  Those thus making or running the covered works\nfor you must do so exclusively on your behalf, under your direction\nand control, on terms that prohibit them from making any copies of\nyour copyrighted material outside their relationship with you.\n\n  Conveying under any other circumstances is permitted solely under\nthe conditions stated below.  Sublicensing is not allowed; section 10\nmakes it unnecessary.\n\n  3. Protecting Users' Legal Rights From Anti-Circumvention Law.\n\n  No covered work shall be deemed part of an effective technological\nmeasure under any applicable law fulfilling obligations under article\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\nsimilar laws prohibiting or restricting circumvention of such\nmeasures.\n\n  When you convey a covered work, you waive any legal power to forbid\ncircumvention of technological measures to the extent such circumvention\nis effected by exercising rights under this License with respect to\nthe covered work, and you disclaim any intention to limit operation or\nmodification of the work as a means of enforcing, against the work's\nusers, your or third parties' legal rights to forbid circumvention of\ntechnological measures.\n\n  4. Conveying Verbatim Copies.\n\n  You may convey verbatim copies of the Program's source code as you\nreceive it, in any medium, provided that you conspicuously and\nappropriately publish on each copy an appropriate copyright notice;\nkeep intact all notices stating that this License and any\nnon-permissive terms added in accord with section 7 apply to the code;\nkeep intact all notices of the absence of any warranty; and give all\nrecipients a copy of this License along with the Program.\n\n  You may charge any price or no price for each copy that you convey,\nand you may offer support or warranty protection for a fee.\n\n  5. Conveying Modified Source Versions.\n\n  You may convey a work based on the Program, or the modifications to\nproduce it from the Program, in the form of source code under the\nterms of section 4, provided that you also meet all of these conditions:\n\n    a) The work must carry prominent notices stating that you modified\n    it, and giving a relevant date.\n\n    b) The work must carry prominent notices stating that it is\n    released under this License and any conditions added under section\n    7.  This requirement modifies the requirement in section 4 to\n    &quot;keep intact all notices&quot;.\n\n    c) You must license the entire work, as a whole, under this\n    License to anyone who comes into possession of a copy.  This\n    License will therefore apply, along with any applicable section 7\n    additional terms, to the whole of the work, and all its parts,\n    regardless of how they are packaged.  This License gives no\n    permission to license the work in any other way, but it does not\n    invalidate such permission if you have separately received it.\n\n    d) If the work has interactive user interfaces, each must display\n    Appropriate Legal Notices; however, if the Program has interactive\n    interfaces that do not display Appropriate Legal Notices, your\n    work need not make them do so.\n\n  A compilation of a covered work with other separate and independent\nworks, which are not by their nature extensions of the covered work,\nand which are not combined with it such as to form a larger program,\nin or on a volume of a storage or distribution medium, is called an\n&quot;aggregate&quot; if the compilation and its resulting copyright are not\nused to limit the access or legal rights of the compilation's users\nbeyond what the individual works permit.  Inclusion of a covered work\nin an aggregate does not cause this License to apply to the other\nparts of the aggregate.\n\n  6. Conveying Non-Source Forms.\n\n  You may convey a covered work in object code form under the terms\nof sections 4 and 5, provided that you also convey the\nmachine-readable Corresponding Source under the terms of this License,\nin one of these ways:\n\n    a) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by the\n    Corresponding Source fixed on a durable physical medium\n    customarily used for software interchange.\n\n    b) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by a\n    written offer, valid for at least three years and valid for as\n    long as you offer spare parts or customer support for that product\n    model, to give anyone who possesses the object code either (1) a\n    copy of the Corresponding Source for all the software in the\n    product that is covered by this License, on a durable physical\n    medium customarily used for software interchange, for a price no\n    more than your reasonable cost of physically performing this\n    conveying of source, or (2) access to copy the\n    Corresponding Source from a network server at no charge.\n\n    c) Convey individual copies of the object code with a copy of the\n    written offer to provide the Corresponding Source.  This\n    alternative is allowed only occasionally and noncommercially, and\n    only if you received the object code with such an offer, in accord\n    with subsection 6b.\n\n    d) Convey the object code by offering access from a designated\n    place (gratis or for a charge), and offer equivalent access to the\n    Corresponding Source in the same way through the same place at no\n    further charge.  You need not require recipients to copy the\n    Corresponding Source along with the object code.  If the place to\n    copy the object code is a network server, the Corresponding Source\n    may be on a different server (operated by you or a third party)\n    that supports equivalent copying facilities, provided you maintain\n    clear directions next to the object code saying where to find the\n    Corresponding Source.  Regardless of what server hosts the\n    Corresponding Source, you remain obligated to ensure that it is\n    available for as long as needed to satisfy these requirements.\n\n    e) Convey the object code using peer-to-peer transmission, provided\n    you inform other peers where the object code and Corresponding\n    Source of the work are being offered to the general public at no\n    charge under subsection 6d.\n\n  A separable portion of the object code, whose source code is excluded\nfrom the Corresponding Source as a System Library, need not be\nincluded in conveying the object code work.\n\n  A &quot;User Product&quot; is either (1) a &quot;consumer product&quot;, which means any\ntangible personal property which is normally used for personal, family,\nor household purposes, or (2) anything designed or sold for incorporation\ninto a dwelling.  In determining whether a product is a consumer product,\ndoubtful cases shall be resolved in favor of coverage.  For a particular\nproduct received by a particular user, &quot;normally used&quot; refers to a\ntypical or common use of that class of product, regardless of the status\nof the particular user or of the way in which the particular user\nactually uses, or expects or is expected to use, the product.  A product\nis a consumer product regardless of whether the product has substantial\ncommercial, industrial or non-consumer uses, unless such uses represent\nthe only significant mode of use of the product.\n\n  &quot;Installation Information&quot; for a User Product means any methods,\nprocedures, authorization keys, or other information required to install\nand execute modified versions of a covered work in that User Product from\na modified version of its Corresponding Source.  The information must\nsuffice to ensure that the continued functioning of the modified object\ncode is in no case prevented or interfered with solely because\nmodification has been made.\n\n  If you convey an object code work under this section in, or with, or\nspecifically for use in, a User Product, and the conveying occurs as\npart of a transaction in which the right of possession and use of the\nUser Product is transferred to the recipient in perpetuity or for a\nfixed term (regardless of how the transaction is characterized), the\nCorresponding Source conveyed under this section must be accompanied\nby the Installation Information.  But this requirement does not apply\nif neither you nor any third party retains the ability to install\nmodified object code on the User Product (for example, the work has\nbeen installed in ROM).\n\n  The requirement to provide Installation Information does not include a\nrequirement to continue to provide support service, warranty, or updates\nfor a work that has been modified or installed by the recipient, or for\nthe User Product in which it has been modified or installed.  Access to a\nnetwork may be denied when the modification itself materially and\nadversely affects the operation of the network or violates the rules and\nprotocols for communication across the network.\n\n  Corresponding Source conveyed, and Installation Information provided,\nin accord with this section must be in a format that is publicly\ndocumented (and with an implementation available to the public in\nsource code form), and must require no special password or key for\nunpacking, reading or copying.\n\n  7. Additional Terms.\n\n  &quot;Additional permissions&quot; are terms that supplement the terms of this\nLicense by making exceptions from one or more of its conditions.\nAdditional permissions that are applicable to the entire Program shall\nbe treated as though they were included in this License, to the extent\nthat they are valid under applicable law.  If additional permissions\napply only to part of the Program, that part may be used separately\nunder those permissions, but the entire Program remains governed by\nthis License without regard to the additional permissions.\n\n  When you convey a copy of a covered work, you may at your option\nremove any additional permissions from that copy, or from any part of\nit.  (Additional permissions may be written to require their own\nremoval in certain cases when you modify the work.)  You may place\nadditional permissions on material, added by you to a covered work,\nfor which you have or can give appropriate copyright permission.\n\n  Notwithstanding any other provision of this License, for material you\nadd to a covered work, you may (if authorized by the copyright holders of\nthat material) supplement the terms of this License with terms:\n\n    a) Disclaiming warranty or limiting liability differently from the\n    terms of sections 15 and 16 of this License; or\n\n    b) Requiring preservation of specified reasonable legal notices or\n    author attributions in that material or in the Appropriate Legal\n    Notices displayed by works containing it; or\n\n    c) Prohibiting misrepresentation of the origin of that material, or\n    requiring that modified versions of such material be marked in\n    reasonable ways as different from the original version; or\n\n    d) Limiting the use for publicity purposes of names of licensors or\n    authors of the material; or\n\n    e) Declining to grant rights under trademark law for use of some\n    trade names, trademarks, or service marks; or\n\n    f) Requiring indemnification of licensors and authors of that\n    material by anyone who conveys the material (or modified versions of\n    it) with contractual assumptions of liability to the recipient, for\n    any liability that these contractual assumptions directly impose on\n    those licensors and authors.\n\n  All other non-permissive additional terms are considered &quot;further\nrestrictions&quot; within the meaning of section 10.  If the Program as you\nreceived it, or any part of it, contains a notice stating that it is\ngoverned by this License along with a term that is a further\nrestriction, you may remove that term.  If a license document contains\na further restriction but permits relicensing or conveying under this\nLicense, you may add to a covered work material governed by the terms\nof that license document, provided that the further restriction does\nnot survive such relicensing or conveying.\n\n  If you add terms to a covered work in accord with this section, you\nmust place, in the relevant source files, a statement of the\nadditional terms that apply to those files, or a notice indicating\nwhere to find the applicable terms.\n\n  Additional terms, permissive or non-permissive, may be stated in the\nform of a separately written license, or stated as exceptions;\nthe above requirements apply either way.\n\n  8. Termination.\n\n  You may not propagate or modify a covered work except as expressly\nprovided under this License.  Any attempt otherwise to propagate or\nmodify it is void, and will automatically terminate your rights under\nthis License (including any patent licenses granted under the third\nparagraph of section 11).\n\n  However, if you cease all violation of this License, then your\nlicense from a particular copyright holder is reinstated (a)\nprovisionally, unless and until the copyright holder explicitly and\nfinally terminates your license, and (b) permanently, if the copyright\nholder fails to notify you of the violation by some reasonable means\nprior to 60 days after the cessation.\n\n  Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n\n  Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, you do not qualify to receive new licenses for the same\nmaterial under section 10.\n\n  9. Acceptance Not Required for Having Copies.\n\n  You are not required to accept this License in order to receive or\nrun a copy of the Program.  Ancillary propagation of a covered work\noccurring solely as a consequence of using peer-to-peer transmission\nto receive a copy likewise does not require acceptance.  However,\nnothing other than this License grants you permission to propagate or\nmodify any covered work.  These actions infringe copyright if you do\nnot accept this License.  Therefore, by modifying or propagating a\ncovered work, you indicate your acceptance of this License to do so.\n\n  10. Automatic Licensing of Downstream Recipients.\n\n  Each time you convey a covered work, the recipient automatically\nreceives a license from the original licensors, to run, modify and\npropagate that work, subject to this License.  You are not responsible\nfor enforcing compliance by third parties with this License.\n\n  An &quot;entity transaction&quot; is a transaction transferring control of an\norganization, or substantially all assets of one, or subdividing an\norganization, or merging organizations.  If propagation of a covered\nwork results from an entity transaction, each party to that\ntransaction who receives a copy of the work also receives whatever\nlicenses to the work the party's predecessor in interest had or could\ngive under the previous paragraph, plus a right to possession of the\nCorresponding Source of the work from the predecessor in interest, if\nthe predecessor has it or can get it with reasonable efforts.\n\n  You may not impose any further restrictions on the exercise of the\nrights granted or affirmed under this License.  For example, you may\nnot impose a license fee, royalty, or other charge for exercise of\nrights granted under this License, and you may not initiate litigation\n(including a cross-claim or counterclaim in a lawsuit) alleging that\nany patent claim is infringed by making, using, selling, offering for\nsale, or importing the Program or any portion of it.\n\n  11. Patents.\n\n  A &quot;contributor&quot; is a copyright holder who authorizes use under this\nLicense of the Program or a work on which the Program is based.  The\nwork thus licensed is called the contributor's &quot;contributor version&quot;.\n\n  A contributor's &quot;essential patent claims&quot; are all patent claims\nowned or controlled by the contributor, whether already acquired or\nhereafter acquired, that would be infringed by some manner, permitted\nby this License, of making, using, or selling its contributor version,\nbut do not include claims that would be infringed only as a\nconsequence of further modification of the contributor version.  For\npurposes of this definition, &quot;control&quot; includes the right to grant\npatent sublicenses in a manner consistent with the requirements of\nthis License.\n\n  Each contributor grants you a non-exclusive, worldwide, royalty-free\npatent license under the contributor's essential patent claims, to\nmake, use, sell, offer for sale, import and otherwise run, modify and\npropagate the contents of its contributor version.\n\n  In the following three paragraphs, a &quot;patent license&quot; is any express\nagreement or commitment, however denominated, not to enforce a patent\n(such as an express permission to practice a patent or covenant not to\nsue for patent infringement).  To &quot;grant&quot; such a patent license to a\nparty means to make such an agreement or commitment not to enforce a\npatent against the party.\n\n  If you convey a covered work, knowingly relying on a patent license,\nand the Corresponding Source of the work is not available for anyone\nto copy, free of charge and under the terms of this License, through a\npublicly available network server or other readily accessible means,\nthen you must either (1) cause the Corresponding Source to be so\navailable, or (2) arrange to deprive yourself of the benefit of the\npatent license for this particular work, or (3) arrange, in a manner\nconsistent with the requirements of this License, to extend the patent\nlicense to downstream recipients.  &quot;Knowingly relying&quot; means you have\nactual knowledge that, but for the patent license, your conveying the\ncovered work in a country, or your recipient's use of the covered work\nin a country, would infringe one or more identifiable patents in that\ncountry that you have reason to believe are valid.\n\n  If, pursuant to or in connection with a single transaction or\narrangement, you convey, or propagate by procuring conveyance of, a\ncovered work, and grant a patent license to some of the parties\nreceiving the covered work authorizing them to use, propagate, modify\nor convey a specific copy of the covered work, then the patent license\nyou grant is automatically extended to all recipients of the covered\nwork and works based on it.\n\n  A patent license is &quot;discriminatory&quot; if it does not include within\nthe scope of its coverage, prohibits the exercise of, or is\nconditioned on the non-exercise of one or more of the rights that are\nspecifically granted under this License.  You may not convey a covered\nwork if you are a party to an arrangement with a third party that is\nin the business of distributing software, under which you make payment\nto the third party based on the extent of your activity of conveying\nthe work, and under which the third party grants, to any of the\nparties who would receive the covered work from you, a discriminatory\npatent license (a) in connection with copies of the covered work\nconveyed by you (or copies made from those copies), or (b) primarily\nfor and in connection with specific products or compilations that\ncontain the covered work, unless you entered into that arrangement,\nor that patent license was granted, prior to 28 March 2007.\n\n  Nothing in this License shall be construed as excluding or limiting\nany implied license or other defenses to infringement that may\notherwise be available to you under applicable patent law.\n\n  12. No Surrender of Others' Freedom.\n\n  If conditions are imposed on you (whether by court order, agreement or\notherwise) that contradict the conditions of this License, they do not\nexcuse you from the conditions of this License.  If you cannot convey a\ncovered work so as to satisfy simultaneously your obligations under this\nLicense and any other pertinent obligations, then as a consequence you may\nnot convey it at all.  For example, if you agree to terms that obligate you\nto collect a royalty for further conveying from those to whom you convey\nthe Program, the only way you could satisfy both those terms and this\nLicense would be to refrain entirely from conveying the Program.\n\n  13. Use with the GNU Affero General Public License.\n\n  Notwithstanding any other provision of this License, you have\npermission to link or combine any covered work with a work licensed\nunder version 3 of the GNU Affero General Public License into a single\ncombined work, and to convey the resulting work.  The terms of this\nLicense will continue to apply to the part which is the covered work,\nbut the special requirements of the GNU Affero General Public License,\nsection 13, concerning interaction through a network will apply to the\ncombination as such.\n\n  14. Revised Versions of this License.\n\n  The Free Software Foundation may publish revised and/or new versions of\nthe GNU General Public License from time to time.  Such new versions will\nbe similar in spirit to the present version, but may differ in detail to\naddress new problems or concerns.\n\n  Each version is given a distinguishing version number.  If the\nProgram specifies that a certain numbered version of the GNU General\nPublic License &quot;or any later version&quot; applies to it, you have the\noption of following the terms and conditions either of that numbered\nversion or of any later version published by the Free Software\nFoundation.  If the Program does not specify a version number of the\nGNU General Public License, you may choose any version ever published\nby the Free Software Foundation.\n\n  If the Program specifies that a proxy can decide which future\nversions of the GNU General Public License can be used, that proxy's\npublic statement of acceptance of a version permanently authorizes you\nto choose that version for the Program.\n\n  Later license versions may give you additional or different\npermissions.  However, no additional obligations are imposed on any\nauthor or copyright holder as a result of your choosing to follow a\nlater version.\n\n  15. Disclaimer of Warranty.\n\n  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\n\n  16. Limitation of Liability.\n\n  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGES.\n\n  17. Interpretation of Sections 15 and 16.\n\n  If the disclaimer of warranty and limitation of liability provided\nabove cannot be given local legal effect according to their terms,\nreviewing courts shall apply local law that most closely approximates\nan absolute waiver of all civil liability in connection with the\nProgram, unless a warranty or assumption of liability accompanies a\ncopy of the Program in return for a fee.\n\n                     END OF TERMS AND CONDITIONS\n\n            How to Apply These Terms to Your New Programs\n\n  If you develop a new program, and you want it to be of the greatest\npossible use to the public, the best way to achieve this is to make it\nfree software which everyone can redistribute and change under these terms.\n\n  To do so, attach the following notices to the program.  It is safest\nto attach them to the start of each source file to most effectively\nstate the exclusion of warranty; and each file should have at least\nthe &quot;copyright&quot; line and a pointer to where the full notice is found.\n\n    &lt;one line to give the program's name and a brief idea of what it does.&gt;\n    Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see &lt;<a href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>&gt;.\n\nAlso add information on how to contact you by electronic and paper mail.\n\n  If the program does terminal interaction, make it output a short\nnotice like this when it starts in an interactive mode:\n\n    &lt;program&gt;  Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.\n    This is free software, and you are welcome to redistribute it\n    under certain conditions; type `show c' for details.\n\nThe hypothetical commands `show w' and `show c' should show the appropriate\nparts of the General Public License.  Of course, your program's commands\nmight be different; for a GUI interface, you would use an &quot;about box&quot;.\n\n  You should also get your employer (if you work as a programmer) or school,\nif any, to sign a &quot;copyright disclaimer&quot; for the program, if necessary.\nFor more information on this, and how to apply and follow the GNU GPL, see\n&lt;<a href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>&gt;.\n\n  The GNU General Public License does not permit incorporating your program\ninto proprietary programs.  If your program is a subroutine library, you\nmay consider it more useful to permit linking proprietary applications with\nthe library.  If this is what you want to do, use the GNU Lesser General\nPublic License instead of this License.  But first, please read\n&lt;<a href=\"https://www.gnu.org/licenses/why-not-lgpl.html\">https://www.gnu.org/licenses/why-not-lgpl.html</a>&gt;.\n\n</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/license/license.component.ts":
/*!**********************************************!*\
  !*** ./src/app/license/license.component.ts ***!
  \**********************************************/
/*! exports provided: LicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseComponent", function() { return LicenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var LicenseComponent = /** @class */ (function () {
    function LicenseComponent() {
    }
    LicenseComponent.prototype.ngOnInit = function () {
    };
    LicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-license',
            template: __webpack_require__(/*! ./license.component.html */ "./src/app/license/license.component.html"),
            styles: [__webpack_require__(/*! ./license.component.css */ "./src/app/license/license.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LicenseComponent);
    return LicenseComponent;
}());



/***/ }),

/***/ "./src/app/sd-calc-row/sd-calc-row.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sd-calc-row/sd-calc-row.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2QtY2FsYy1yb3cvc2QtY2FsYy1yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3NkLWNhbGMtcm93L3NkLWNhbGMtcm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3hDYWxjISBieSBTYWZlIERvc2UgwqkgMjAxOC0yMDIxLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sd-calc-row/sd-calc-row.component.html":
/*!********************************************************!*\
  !*** ./src/app/sd-calc-row/sd-calc-row.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"form-group form-row\" [ngbCollapse]=\"!show\">\n  <ng-container *ngFor=\"let input of inputs; first as isFirst\">\n    <label class=\"col-12 col-md-2 col-form-label\" [for]=\"label.for\" *ngIf=\"isFirst\">\n      <ng-template [ngTemplateOutlet]=\"label.templateRef\"></ng-template>\n    </label>\n    <div class=\"col-md-2\" *ngIf=\"!isFirst\"></div>\n    <div class=\"col-12 col-md-10 d-flex flex-column justify-content-center\">\n      <ng-container *ngIf=\"input.custom\">\n        <ng-template [ngTemplateOutlet]=\"input.templateRef\"></ng-template>\n      </ng-container>\n      <ng-container *ngIf=\"!input.custom\">\n        <div class=\"form-inline\">\n          <div class=\"input-group\">\n            <ng-template [ngTemplateOutlet]=\"input.templateRef\"></ng-template>\n            <div class=\"invalid-tooltip d-block\" id=\"error\" *ngIf=\"errorText\">\n              {{errorText}}\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-light ml-3\" (click)=\"showHelp = !showHelp\" aria-controls=\"help\" aria-label=\"Help\" aria-haspopup=\"true\" [attr.aria-expanded]=\"showHelp\" *ngIf=\"isFirst && help != null\">\n            <fa-icon [icon]=\"['fas', 'question-circle']\"></fa-icon>\n          </button>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n<div class=\"form-row\" id=\"help\" *ngIf=\"showHelp\">\n  <div class=\"col-12 mb-3\">\n    <div class=\"shadow-sm p-3 bg-light\">\n      <div class=\"float-right ml-2\">\n        <button type=\"button\" class=\"close text-primary\" aria-label=\"Close\" (click)=\"showHelp = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <ng-template [ngTemplateOutlet]=\"help.templateRef\"></ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-calc-row/sd-calc-row.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sd-calc-row/sd-calc-row.component.ts ***!
  \******************************************************/
/*! exports provided: SdCalcRowLabel, SdCalcRowInput, SdCalcRowHelp, SdCalcRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalcRowLabel", function() { return SdCalcRowLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalcRowInput", function() { return SdCalcRowInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalcRowHelp", function() { return SdCalcRowHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalcRowComponent", function() { return SdCalcRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later




var SdCalcRowLabel = /** @class */ (function () {
    function SdCalcRowLabel(templateRef) {
        this.templateRef = templateRef;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdCalcRowLabelFor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdCalcRowLabel.prototype, "for", void 0);
    SdCalcRowLabel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[sdCalcRowLabel]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], SdCalcRowLabel);
    return SdCalcRowLabel;
}());

var SdCalcRowInput = /** @class */ (function () {
    function SdCalcRowInput(templateRef) {
        this.templateRef = templateRef;
        this.custom = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdCustomRowInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdCalcRowInput.prototype, "custom", void 0);
    SdCalcRowInput = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[sdCalcRowInput]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], SdCalcRowInput);
    return SdCalcRowInput;
}());

var SdCalcRowHelp = /** @class */ (function () {
    function SdCalcRowHelp(templateRef) {
        this.templateRef = templateRef;
    }
    SdCalcRowHelp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[sdCalcRowHelp]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], SdCalcRowHelp);
    return SdCalcRowHelp;
}());

var SdCalcRowComponent = /** @class */ (function () {
    function SdCalcRowComponent() {
        this.show = true;
        this.showHelp = false;
        this.errorText = '';
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faQuestionCircle"]);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdShow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdCalcRowComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SdCalcRowLabel),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", SdCalcRowLabel)
    ], SdCalcRowComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(SdCalcRowInput),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SdCalcRowComponent.prototype, "inputs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SdCalcRowHelp),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", SdCalcRowHelp)
    ], SdCalcRowComponent.prototype, "help", void 0);
    SdCalcRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-calc-row',
            template: __webpack_require__(/*! ./sd-calc-row.component.html */ "./src/app/sd-calc-row/sd-calc-row.component.html"),
            styles: [__webpack_require__(/*! ./sd-calc-row.component.css */ "./src/app/sd-calc-row/sd-calc-row.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SdCalcRowComponent);
    return SdCalcRowComponent;
}());



/***/ }),

/***/ "./src/app/sd-calculation-log/sd-calculation-log.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sd-calculation-log/sd-calculation-log.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2QtY2FsY3VsYXRpb24tbG9nL3NkLWNhbGN1bGF0aW9uLWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvc2QtY2FsY3VsYXRpb24tbG9nL3NkLWNhbGN1bGF0aW9uLWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG94Q2FsYyEgYnkgU2FmZSBEb3NlIMKpIDIwMTgtMjAyMS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBHUEwtMy4wLW9yLWxhdGVyXG4gKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/sd-calculation-log/sd-calculation-log.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sd-calculation-log/sd-calculation-log.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"card shadow-sm\">\n  <div class=\"card-body\">\n    <div class=\"d-flex\">\n      <div class=\"d-flex mr-auto\">\n        <h5 class=\"card-title\">\n          Calculation Log\n        </h5>\n      </div>\n      <div class=\"d-flex ml-auto\">\n        <ng-container *ngIf=\"log.groups.length != 0; else notEmpty\">\n          <a class=\"text-decoration-none\" rel=\"noopener\" target=\"_blank\" download=\"Calculator Log.csv\" [attr.href]=\"log.uri\" (click)=\"log.downloadclick()\">Download <fa-icon [icon]=\"['fas', 'file-download']\"></fa-icon></a>\n        </ng-container>\n        <ng-template #notEmpty>\n          <span class=\"text-muted\">Download <fa-icon [icon]=\"['fas', 'file-download']\"></fa-icon></span>\n        </ng-template>\n      </div>\n    </div>\n    <ng-container *ngIf=\"log.groups.length == 0\">\n      <div class=\"w-100\">\n        <span class=\"text-muted\"><i>No calculations yet. Click <span class=\"bg-primary text-white rounded p-1\" style=\"font-style: normal\">Calculate!</span> or <span class=\"bg-primary text-white rounded p-1\" style=\"font-style: normal\">Convert!</span> to log a calculation.</i></span>\n      </div>\n    </ng-container>\n    <ng-container *ngFor=\"let group of log.groups; let group_index = index; let group_last = last\">\n      <table class=\"table table-bordered table-sm table-responsive w-100\">\n        <thead class=\"bg-light\">\n          <tr>\n            <th scope=\"col\" *ngFor=\"let column of group.columns\">{{column}}</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tr *ngFor=\"let row of group.rows; let row_index = index; let row_last = last\">\n          <td *ngFor=\"let cell of row\">{{cell}}</td>\n          <td align=\"right\"><span #sdcalcmostrecent *ngIf=\"group_last && row_last\"></span><button type=\"button\" class=\"btn btn-light\" aria-label=\"Delete\" (click)=\"log.deleteRow(group_index, row_index);\"><fa-icon [icon]=\"['fas', 'trash-alt']\"></fa-icon></button></td>\n        </tr>\n      </table>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-calculation-log/sd-calculation-log.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sd-calculation-log/sd-calculation-log.component.ts ***!
  \********************************************************************/
/*! exports provided: SdCalculationLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalculationLogComponent", function() { return SdCalculationLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _sd_calculation_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sd-calculation-log.service */ "./src/app/sd-calculation-log/sd-calculation-log.service.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later





var SdCalculationLogComponent = /** @class */ (function () {
    function SdCalculationLogComponent(log) {
        this.log = log;
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileDownload"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrashAlt"]);
    }
    SdCalculationLogComponent.prototype.scrollIntoView = function () {
        this.mostRecent.nativeElement.scrollIntoView();
    };
    SdCalculationLogComponent.prototype.empty = function () {
        return this.log.empty();
    };
    SdCalculationLogComponent.prototype.append = function (columns, cells) {
        return this.log.append(columns, cells);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sdcalcmostrecent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SdCalculationLogComponent.prototype, "mostRecent", void 0);
    SdCalculationLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-calculation-log',
            template: __webpack_require__(/*! ./sd-calculation-log.component.html */ "./src/app/sd-calculation-log/sd-calculation-log.component.html"),
            styles: [__webpack_require__(/*! ./sd-calculation-log.component.css */ "./src/app/sd-calculation-log/sd-calculation-log.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sd_calculation_log_service__WEBPACK_IMPORTED_MODULE_4__["SdCalculationLogService"]])
    ], SdCalculationLogComponent);
    return SdCalculationLogComponent;
}());



/***/ }),

/***/ "./src/app/sd-calculation-log/sd-calculation-log.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/sd-calculation-log/sd-calculation-log.service.ts ***!
  \******************************************************************/
/*! exports provided: SdCalculationLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdCalculationLogService", function() { return SdCalculationLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_string_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/string-util */ "./src/app/shared/string-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later




var SdCalculationLogService = /** @class */ (function () {
    function SdCalculationLogService(sanitizer) {
        this.sanitizer = sanitizer;
        this.blob = null;
        this.uri_ = null;
        this.unsafeuri = null;
        this.groups_ = [];
    }
    SdCalculationLogService_1 = SdCalculationLogService;
    Object.defineProperty(SdCalculationLogService.prototype, "uri", {
        get: function () { return this.uri_; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdCalculationLogService.prototype, "groups", {
        get: function () {
            return this.groups_;
        },
        enumerable: true,
        configurable: true
    });
    SdCalculationLogService.prototype.sameArray = function (left, right) {
        return JSON.stringify(left) === JSON.stringify(right);
    };
    SdCalculationLogService.prototype.empty = function () {
        return this.groups_.length === 0;
    };
    SdCalculationLogService.prototype.append = function (columns, cells) {
        if (this.groups_.length === 0 ||
            !this.sameArray(this.groups_[this.groups_.length - 1].columns, columns)) {
            this.groups_.push({ 'columns': columns, 'rows': [cells] });
        }
        else {
            this.groups_[this.groups_.length - 1].rows.push(cells);
        }
        this.updateDownload();
    };
    SdCalculationLogService.prototype.deleteRow = function (group_index, row_index) {
        // These safety checks should never fire.
        if (group_index > this.groups_.length) {
            return;
        }
        if (row_index > this.groups[group_index].rows.length) {
            return;
        }
        // Delete the row.
        this.groups[group_index].rows.splice(row_index, 1);
        // Did we just delete the last row of a group? If so, delete the group.
        if (this.groups[group_index].rows.length === 0) {
            this.groups_.splice(group_index, 1);
            // Did the groups before and after the one we deleted have the same
            // columns? If so, merge them.
            if (group_index !== 0 && group_index < this.groups_.length &&
                this.sameArray(this.groups[group_index - 1].columns, this.groups[group_index].columns)) {
                this.groups[group_index - 1].rows = this.groups[group_index - 1].rows.concat(this.groups[group_index].rows);
                this.groups_.splice(group_index, 1);
            }
        }
        this.updateDownload();
    };
    // Escaping as described in RFC 4180. Appears to work with Excel.
    SdCalculationLogService.csvEscape = function (escape) {
        if (!escape.includes(',') && !escape.includes('"') &&
            !escape.includes('\n')) {
            return escape;
        }
        return '"' + escape.replace(/"/g, '""') + '"';
    };
    SdCalculationLogService.prototype.updateDownload = function () {
        if (this.groups_.length === 0) {
            this.uri_ = null;
            return;
        }
        var result = '';
        this.groups_.forEach(function (group) {
            result += group.columns.map(_shared_string_util__WEBPACK_IMPORTED_MODULE_3__["removeSoftHyphen"]).map(SdCalculationLogService_1.csvEscape).join(',') + '\r\n';
            group.rows.forEach(function (row) {
                result += row.map(_shared_string_util__WEBPACK_IMPORTED_MODULE_3__["removeSoftHyphen"]).map(SdCalculationLogService_1.csvEscape).join(',') + '\r\n';
            });
        });
        this.blob = new Blob([result], { type: 'text/csv' });
        var oldunsafeuri = this.unsafeuri;
        this.unsafeuri = URL.createObjectURL(this.blob);
        this.uri_ = this.sanitizer.bypassSecurityTrustUrl(this.unsafeuri);
        if (oldunsafeuri) {
            URL.revokeObjectURL(oldunsafeuri);
        }
    };
    // Hacks for IE browsers that don't support blob URIs.
    SdCalculationLogService.prototype.downloadclick = function () {
        if (window.navigator && navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(this.blob, 'Calculator Log.csv');
            return false;
        }
        return true;
    };
    var SdCalculationLogService_1;
    SdCalculationLogService = SdCalculationLogService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SdCalculationLogService);
    return SdCalculationLogService;
}());



/***/ }),

/***/ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/sd-internal-calc-error/sd-internal-calc-error.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2QtaW50ZXJuYWwtY2FsYy1lcnJvci9zZC1pbnRlcm5hbC1jYWxjLWVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9zZC1pbnRlcm5hbC1jYWxjLWVycm9yL3NkLWludGVybmFsLWNhbGMtZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/sd-internal-calc-error/sd-internal-calc-error.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"form-row ml-0\" *ngIf=\"errorText\">\n  <ngb-alert [dismissible]=\"false\" type=\"danger\" class=\"w-100\">\n    <p class=\"lead\">Internal calculator error!</p>\n    <p class=\"px-3\"><kbd>{{errorText}}</kbd></p>\n    <p class=\"mb-0\">Click <strong>Clear</strong> to clear this error and reset the form.</p>\n  </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sd-internal-calc-error/sd-internal-calc-error.component.ts ***!
  \****************************************************************************/
/*! exports provided: SdInternalCalcErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdInternalCalcErrorComponent", function() { return SdInternalCalcErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var SdInternalCalcErrorComponent = /** @class */ (function () {
    function SdInternalCalcErrorComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdInternalCalcErrorComponent.prototype, "errorText", void 0);
    SdInternalCalcErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-internal-calc-error',
            template: __webpack_require__(/*! ./sd-internal-calc-error.component.html */ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.html"),
            styles: [__webpack_require__(/*! ./sd-internal-calc-error.component.css */ "./src/app/sd-internal-calc-error/sd-internal-calc-error.component.css")]
        })
    ], SdInternalCalcErrorComponent);
    return SdInternalCalcErrorComponent;
}());



/***/ }),

/***/ "./src/app/sd-justification/sd-justification.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sd-justification/sd-justification.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2QtanVzdGlmaWNhdGlvbi9zZC1qdXN0aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9zZC1qdXN0aWZpY2F0aW9uL3NkLWp1c3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sd-justification/sd-justification.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sd-justification/sd-justification.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"py-1 w-100\">\n  <button class=\"btn btn-link text-decoration-none p-0 border-0 m-0\" (click)=\"openJustificationEditor()\" *ngIf=\"!showJustification && justification.trim() == ''\">Include a justification</button>\n  <div class=\"d-flex w-100\" *ngIf=\"!showJustification && justification.trim() != ''\">\n    <div class=\"d-flex w-100\" style=\"min-width: 0\">\n      <span class=\"d-inline-block text-truncate\">{{justification}}</span>\n    </div>\n    <div class=\"d-flex ml-1\">\n      <button class=\"btn btn-link text-decoration-none p-0 border-0 m-0\" (click)=\"openJustificationEditor()\">edit</button>\n    </div>\n  </div>\n  <div class=\"w-100\" *ngIf=\"showJustification\">\n    Justification:<br>\n    <textarea class=\"form-control w-100 mb-3\" rows=\"3\" [(ngModel)]=\"justification\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n    <button type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"saveJustification()\">Save!</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelJustification()\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-justification/sd-justification.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sd-justification/sd-justification.component.ts ***!
  \****************************************************************/
/*! exports provided: SdJustificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdJustificationComponent", function() { return SdJustificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var SdJustificationComponent = /** @class */ (function () {
    function SdJustificationComponent() {
        // Justification to return to when the user clicks cancel.
        this.backupJustification = '';
        // Whether we're showing the textarea to edit the justification.
        this.showJustification = false;
        this.justification = '';
    }
    SdJustificationComponent.prototype.openJustificationEditor = function () {
        this.backupJustification = this.justification;
        this.showJustification = true;
    };
    SdJustificationComponent.prototype.saveJustification = function () {
        this.showJustification = false;
    };
    SdJustificationComponent.prototype.cancelJustification = function () {
        this.justification = this.backupJustification;
        this.showJustification = false;
    };
    SdJustificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-justification',
            template: __webpack_require__(/*! ./sd-justification.component.html */ "./src/app/sd-justification/sd-justification.component.html"),
            styles: [__webpack_require__(/*! ./sd-justification.component.css */ "./src/app/sd-justification/sd-justification.component.css")]
        })
    ], SdJustificationComponent);
    return SdJustificationComponent;
}());



/***/ }),

/***/ "./src/app/sd-katex.directive.ts":
/*!***************************************!*\
  !*** ./src/app/sd-katex.directive.ts ***!
  \***************************************/
/*! exports provided: SdKatexDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdKatexDirective", function() { return SdKatexDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex */ "./node_modules/katex/dist/katex.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_2__);
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later



var SdKatexDirective = /** @class */ (function () {
    function SdKatexDirective(element) {
        this.element = element;
        this.class = true;
        this.inlineMode = false;
    }
    SdKatexDirective.prototype.ngOnChanges = function () {
        katex__WEBPACK_IMPORTED_MODULE_2__["render"](this.value, this.element.nativeElement, { displayMode: !this.inlineMode });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.katex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdKatexDirective.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdKatex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdKatexDirective.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdKatexInline'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdKatexDirective.prototype, "inlineMode", void 0);
    SdKatexDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sdKatex]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SdKatexDirective);
    return SdKatexDirective;
}());



/***/ }),

/***/ "./src/app/sd-product-list/sd-product-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/sd-product-list/sd-product-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\na { text-decoration: none; }\n\n.border-secondary-hover:hover { border-color: #6c757d !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2QtcHJvZHVjdC1saXN0L3NkLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILElBQUksc0JBQXNCLEVBQUU7O0FBQzVCLGdDQUFnQyxpQ0FBaUMsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3NkLXByb2R1Y3QtbGlzdC9zZC1wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbmEgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbi5ib3JkZXItc2Vjb25kYXJ5LWhvdmVyOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sd-product-list/sd-product-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sd-product-list/sd-product-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"mx-auto container\">\n  <a class=\"card mb-2 bg-white text-reset border-secondary-hover\" *ngFor=\"let item of items\" [routerLink]=\"item.routerLink\">\n    <div class=\"card-body\">\n      <p class=\"card-title lead\" style=\"font-size: 1.75rem\">\n        <b>\n          <a [routerLink]=\"item.routerLink\">\n            <ng-template [ngTemplateOutlet]=\"item.title?.templateRef\"></ng-template>\n          </a>\n        </b>\n      </p>\n      <p>\n        <ng-template [ngTemplateOutlet]=\"item.description?.templateRef\"></ng-template>\n      </p>\n      <a [routerLink]=\"item.routerLink\" class=\"btn btn-primary\">Get started!</a>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-product-list/sd-product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sd-product-list/sd-product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: SdProductListItemTitle, SdProductListItemDescription, SdProductListItem, SdProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdProductListItemTitle", function() { return SdProductListItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdProductListItemDescription", function() { return SdProductListItemDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdProductListItem", function() { return SdProductListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdProductListComponent", function() { return SdProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var SdProductListItemTitle = /** @class */ (function () {
    function SdProductListItemTitle(templateRef) {
        this.templateRef = templateRef;
    }
    SdProductListItemTitle = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[sdProductListTitle]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], SdProductListItemTitle);
    return SdProductListItemTitle;
}());

var SdProductListItemDescription = /** @class */ (function () {
    function SdProductListItemDescription(templateRef) {
        this.templateRef = templateRef;
    }
    SdProductListItemDescription = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[sdProductListDescription]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], SdProductListItemDescription);
    return SdProductListItemDescription;
}());

var SdProductListItem = /** @class */ (function () {
    function SdProductListItem() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SdProductListItemTitle),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", SdProductListItemTitle)
    ], SdProductListItem.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SdProductListItemDescription),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", SdProductListItemDescription)
    ], SdProductListItem.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdProductListItem.prototype, "routerLink", void 0);
    SdProductListItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'sd-product-list-item' })
    ], SdProductListItem);
    return SdProductListItem;
}());

var SdProductListComponent = /** @class */ (function () {
    function SdProductListComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(SdProductListItem),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SdProductListComponent.prototype, "items", void 0);
    SdProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-product-list',
            template: __webpack_require__(/*! ./sd-product-list.component.html */ "./src/app/sd-product-list/sd-product-list.component.html"),
            styles: [__webpack_require__(/*! ./sd-product-list.component.css */ "./src/app/sd-product-list/sd-product-list.component.css")]
        })
    ], SdProductListComponent);
    return SdProductListComponent;
}());



/***/ }),

/***/ "./src/app/sd-select/sd-select.component.css":
/*!***************************************************!*\
  !*** ./src/app/sd-select/sd-select.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n.dropdown-item:hover { background: #007bff; color: #fff }\n\n.dropdown-header { color: #007bff; }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Qtc2VsZWN0L3NkLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILHVCQUF1QixvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7O0FBQ3pELG1CQUFtQixlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9zZC1zZWxlY3Qvc2Qtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3hDYWxjISBieSBTYWZlIERvc2UgwqkgMjAxOC0yMDIxLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7IGJhY2tncm91bmQ6ICMwMDdiZmY7IGNvbG9yOiAjZmZmIH1cbi5kcm9wZG93bi1oZWFkZXIgeyBjb2xvcjogIzAwN2JmZjsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sd-select/sd-select.component.html":
/*!****************************************************!*\
  !*** ./src/app/sd-select/sd-select.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"input-group\">\n  <div [ngClass]=\"{'input-group-append': append}\" ngbDropdown placement=\"bottom-left\">\n    <button class=\"btn btn-outline-secondary\" ngbDropdownToggle type=\"button\" name=\"selection\">{{ selectedName }}</button>\n    <div ngbDropdownMenu>\n      <ng-container *ngFor=\"let group of groups\">\n        <h6 class=\"dropdown-header\">{{ group.label }}</h6>\n        <button class=\"dropdown-item\" type=\"button\" (click)=\"onGroupItemSelected(group, item)\" *ngFor=\"let item of group.items\">{{ item.label }}</button>\n      </ng-container>\n      <ng-container *ngIf=\"groups.length == 0\">\n        <button class=\"dropdown-item\" type=\"button\" (click)=\"onItemSelected(item)\" *ngFor=\"let item of items\">{{ item.label }}</button>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sd-select/sd-select.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sd-select/sd-select.component.ts ***!
  \**************************************************/
/*! exports provided: SdSelectItem, SdSelectGroup, SdSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdSelectItem", function() { return SdSelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdSelectGroup", function() { return SdSelectGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdSelectComponent", function() { return SdSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var SdSelectItem = /** @class */ (function () {
    function SdSelectItem() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdSelectItem.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdSelectItem.prototype, "value", void 0);
    SdSelectItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' })
    ], SdSelectItem);
    return SdSelectItem;
}());

var SdSelectGroup = /** @class */ (function () {
    function SdSelectGroup() {
    }
    SdSelectGroup.prototype.ngAfterContentInit = function () {
        this.items.forEach(function (item, index, array) { item.index = index; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(SdSelectItem),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SdSelectGroup.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SdSelectGroup.prototype, "label", void 0);
    SdSelectGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'optgroup' })
    ], SdSelectGroup);
    return SdSelectGroup;
}());

var SdSelectComponent = /** @class */ (function () {
    function SdSelectComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready_ = false;
    }
    SdSelectComponent.prototype.onGroupItemSelected = function (group, item) {
        this.selectedGroup = group;
        this.selectedItem = item;
        this.change.emit({ group: group, item: item });
    };
    SdSelectComponent.prototype.onItemSelected = function (item) {
        this.selectedItem = item;
        this.change.emit({ item: item });
    };
    Object.defineProperty(SdSelectComponent.prototype, "selectedIndex", {
        // If you attempt to access these before 'ready' is true, such as from an
        // ngIf, they will raise an exception. Check the value of ready, and if it is
        // false produce the result that is correct for the default state of the page.
        get: function () { return this.selectedItem.index; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdSelectComponent.prototype, "selectedName", {
        get: function () { return this.selectedItem.label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdSelectComponent.prototype, "selectedGroupIndex", {
        get: function () { return this.selectedGroup.index; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdSelectComponent.prototype, "selectedGroupName", {
        get: function () { return this.selectedGroup.label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdSelectComponent.prototype, "ready", {
        get: function () { return this.ready_; },
        enumerable: true,
        configurable: true
    });
    SdSelectComponent.prototype.ngAfterContentInit = function () {
        if (this.groups.length === 0) {
            this.selectedItem = this.items.first;
            this.items.forEach(function (item, index, array) { item.index = index; });
        }
        else {
            this.groups.forEach(function (group, index, array) { group.index = index; });
            this.selectedGroup = this.groups.first;
            this.selectedItem = this.selectedGroup.items.first;
        }
        this.ready_ = true;
    };
    Object.defineProperty(SdSelectComponent.prototype, "value", {
        get: function () { return this.selectedItem.value; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sdAppend'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SdSelectComponent.prototype, "append", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(SdSelectGroup),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SdSelectComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(SdSelectItem),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], SdSelectComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SdSelectComponent.prototype, "change", void 0);
    SdSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sd-select',
            template: __webpack_require__(/*! ./sd-select.component.html */ "./src/app/sd-select/sd-select.component.html"),
            styles: [__webpack_require__(/*! ./sd-select.component.css */ "./src/app/sd-select/sd-select.component.css")]
        })
    ], SdSelectComponent);
    return SdSelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/dimension.ts":
/*!*************************************!*\
  !*** ./src/app/shared/dimension.ts ***!
  \*************************************/
/*! exports provided: Dimension, ScalarAndDimension, isCalculateError, ScalarAndDimensionMutable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimension", function() { return Dimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarAndDimension", function() { return ScalarAndDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCalculateError", function() { return isCalculateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarAndDimensionMutable", function() { return ScalarAndDimensionMutable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later

// A dimension represents the non-scalar portion of units as an integer vector.
// The vector is <mass, length, molar mass, time> where each integer is the
// exponent. For instance one metre and ten metres are the same, but one meter
// and one square metre are different.
//
// This class is immutable and has a private constructor. Create new instances
// using the "init" methods. Creating a new object can be done by methods that
// return a new Dimension.
var Dimension = /** @class */ (function () {
    function Dimension(mass, length, molar_mass, time) {
        this.mass = mass;
        this.length = length;
        this.molar_mass = molar_mass;
        this.time = time;
    }
    Dimension.initUnit = function () { return this.UNIT; };
    Dimension.initMass = function () { return this.MASS; };
    Dimension.initLength = function () { return this.LENGTH; };
    Dimension.initMolarMass = function () { return this.MOLAR_MASS; };
    Dimension.initTime = function () { return this.TIME; };
    Dimension.prototype.unit = function () {
        return this.mass === 0 &&
            this.length === 0 &&
            this.molar_mass === 0 &&
            this.time === 0;
    };
    Dimension.prototype.equal = function (other) {
        return this === other ||
            (this.mass === other.mass &&
                this.length === other.length &&
                this.molar_mass === other.molar_mass &&
                this.time === other.time);
    };
    Dimension.prototype.mul = function (other) {
        return new Dimension(this.mass + other.mass, this.length + other.length, this.molar_mass + other.molar_mass, this.time + other.time);
    };
    Dimension.prototype.div = function (other) {
        return new Dimension(this.mass - other.mass, this.length - other.length, this.molar_mass - other.molar_mass, this.time - other.time);
    };
    Dimension.prototype.exp = function (other) {
        return new Dimension(this.mass * other, this.length * other, this.molar_mass * other, this.time * other);
    };
    Dimension.prototype.recip = function () {
        return new Dimension(-this.mass, -this.length, -this.molar_mass, -this.time);
    };
    Dimension.UNIT = new Dimension(0, 0, 0, 0);
    Dimension.MASS = new Dimension(1, 0, 0, 0);
    Dimension.LENGTH = new Dimension(0, 1, 0, 0);
    Dimension.MOLAR_MASS = new Dimension(0, 0, 1, 0);
    Dimension.TIME = new Dimension(0, 0, 0, 1);
    return Dimension;
}());

// A class with two members, 'n' and 'd' that are a number and a Dimension
// respectively. This is immutable and there suitable for readonly or const
// datatypes. If you would like to perform calculations, call clone() which
// produces a ScalarAndDimensionMutable with the same values.
var ScalarAndDimension = /** @class */ (function () {
    function ScalarAndDimension(n, d) {
        this._n = n;
        this._d = d == null ? Dimension.initUnit() : d;
    }
    Object.defineProperty(ScalarAndDimension.prototype, "n", {
        get: function () { return this._n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalarAndDimension.prototype, "d", {
        get: function () { return this._d; },
        enumerable: true,
        configurable: true
    });
    ScalarAndDimension.prototype.clone = function () {
        return new ScalarAndDimensionMutable(this.n, this.d);
    };
    return ScalarAndDimension;
}());

;
function isCalculateError(x) {
    return x === 'dimension conformity error' || x === 'zero to the power of zero' || x === 'complex exponential';
}
var ScalarAndDimensionMutable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ScalarAndDimensionMutable, _super);
    function ScalarAndDimensionMutable(n, d) {
        return _super.call(this, n, d) || this;
    }
    Object.defineProperty(ScalarAndDimensionMutable.prototype, "n", {
        // The getters should have been inherited:
        //   https://github.com/Microsoft/TypeScript/issues/25927
        get: function () { return this._n; },
        set: function (n) { this._n = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalarAndDimensionMutable.prototype, "d", {
        get: function () { return this._d; },
        set: function (d) { this._d = d; },
        enumerable: true,
        configurable: true
    });
    ScalarAndDimensionMutable.prototype.addEq = function (other) {
        if (!this.d.equal(other.d)) {
            return 'dimension conformity error';
        }
        this.n += other.n;
    };
    ScalarAndDimensionMutable.prototype.mulEq = function (other) {
        this.d = this.d.mul(other.d);
        this.n *= other.n;
    };
    ScalarAndDimensionMutable.prototype.expEq = function (exponent) {
        // 'this' is the base of the exponentiation.
        var _a;
        // The exponent must have a unit dimension. It's not meaningful to take
        // (2g).exp(3mL).
        if (!exponent.d.unit()) {
            return 'dimension conformity error';
        }
        // Has no defined value, and usually indicates a division by zero.
        if (this.n === 0 && exponent.n === 0) {
            return 'zero to the power of zero';
        }
        // Our scalar is notionally a real value, not a complex.
        if (this.n < 0 && !Number.isInteger(exponent.n)) {
            return 'complex exponential';
        }
        (_a = this).n = Math.pow(_a.n, exponent.n);
        this.d = this.d.exp(exponent.n);
    };
    return ScalarAndDimensionMutable;
}(ScalarAndDimension));



/***/ }),

/***/ "./src/app/shared/equation.ts":
/*!************************************!*\
  !*** ./src/app/shared/equation.ts ***!
  \************************************/
/*! exports provided: Variable, Equation, EquationPrinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equation", function() { return Equation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquationPrinter", function() { return EquationPrinter; });
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-util */ "./src/app/shared/number-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


// A tiny computer algebra system, supporting one equation with one unknown, on
// an equality relation. Create Variable objects to hold on to and build an
// expression out of them using the static constructors in Equation. (Hint: to
// avoid hitting implementation limits in the solver, try to use each Variable
// only once.) Call solved_eq = my_eq.solve(my_var) to return a new Equation in
// my_var = expr... form. If all your variables are set, solved_eq.RHS.getValue()
// should result in a concrete value.
var TypeDiscriminator;
(function (TypeDiscriminator) {
    TypeDiscriminator[TypeDiscriminator["Constant"] = 0] = "Constant";
    TypeDiscriminator[TypeDiscriminator["Variable"] = 1] = "Variable";
    TypeDiscriminator[TypeDiscriminator["Add"] = 2] = "Add";
    TypeDiscriminator[TypeDiscriminator["Multiply"] = 3] = "Multiply";
    TypeDiscriminator[TypeDiscriminator["Exponentiate"] = 4] = "Exponentiate";
    TypeDiscriminator[TypeDiscriminator["Logarithmize"] = 5] = "Logarithmize";
})(TypeDiscriminator || (TypeDiscriminator = {}));
var Constant = /** @class */ (function () {
    function Constant(value) {
        this.value = value;
        this.kind = TypeDiscriminator.Constant;
    }
    Constant.prototype.getValue = function () { return this.value; };
    Constant.prototype.contains = function (v) { return false; };
    return Constant;
}());
var Variable = /** @class */ (function () {
    function Variable() {
        this.kind = TypeDiscriminator.Variable;
        this.value = null;
    }
    Variable.prototype.getValue = function () { return this.value; };
    Variable.prototype.setValue = function (value) { this.value = value; };
    Variable.prototype.contains = function (v) { return this === v; };
    return Variable;
}());

var Add = /** @class */ (function () {
    // All units in summands must be the same.
    function Add(summands) {
        this.summands = summands;
        this.kind = TypeDiscriminator.Add;
    }
    Add.prototype.contains = function (v) {
        return this.summands.some(function (t) { return t.contains(v); });
    };
    Add.prototype.collect = function (filter) {
        var collected = [];
        var anticollected = [];
        for (var i = 0; i !== this.summands.length; ++i) {
            if (filter(this.summands[i])) {
                collected.push(this.summands[i]);
            }
            else {
                anticollected.push(this.summands[i]);
            }
        }
        return { 'collected': collected, 'anticollected': anticollected };
    };
    Add.prototype.getValue = function () {
        if (this.summands.length === 0) {
            return null;
        }
        var result = this.summands[0].getValue();
        if (result == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(result)) {
            return result;
        }
        var mut_result = result.clone();
        for (var i = 1; i !== this.summands.length; ++i) {
            var value = this.summands[i].getValue();
            if (value == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(value)) {
                return value;
            }
            var error = mut_result.addEq(value);
            if (error) {
                return error;
            }
        }
        return mut_result;
    };
    return Add;
}());
var Multiply = /** @class */ (function () {
    function Multiply(multipliers) {
        this.multipliers = multipliers;
        this.kind = TypeDiscriminator.Multiply;
    }
    Multiply.prototype.contains = function (v) {
        return this.multipliers.some(function (t) { return t.contains(v); });
    };
    Multiply.prototype.collect = function (filter) {
        var collected = [];
        var anticollected = [];
        for (var i = 0; i !== this.multipliers.length; ++i) {
            if (filter(this.multipliers[i])) {
                collected.push(this.multipliers[i]);
            }
            else {
                anticollected.push(this.multipliers[i]);
            }
        }
        return { 'collected': collected, 'anticollected': anticollected };
    };
    Multiply.prototype.getValue = function () {
        if (this.multipliers.length === 0) {
            return null;
        }
        var result = this.multipliers[0].getValue();
        if (result == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(result)) {
            return result;
        }
        var mut_result = result.clone();
        for (var i = 1; i !== this.multipliers.length; ++i) {
            var value = this.multipliers[i].getValue();
            if (value == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(value)) {
                return value;
            }
            mut_result.mulEq(value);
        }
        return mut_result;
    };
    return Multiply;
}());
var Exponentiate = /** @class */ (function () {
    function Exponentiate(base, exponent) {
        this.base = base;
        this.exponent = exponent;
        this.kind = TypeDiscriminator.Exponentiate;
    }
    Exponentiate.prototype.getBase = function () { return this.base; };
    Exponentiate.prototype.getExponent = function () { return this.exponent; };
    Exponentiate.prototype.contains = function (v) {
        return this.base.contains(v) || this.exponent.contains(v);
    };
    Exponentiate.prototype.getValue = function () {
        var base = this.base.getValue();
        if (base == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(base)) {
            return base;
        }
        var exponent = this.exponent.getValue();
        if (exponent == null || Object(_dimension__WEBPACK_IMPORTED_MODULE_0__["isCalculateError"])(exponent)) {
            return exponent;
        }
        var mut_base = base.clone();
        var error = mut_base.expEq(exponent);
        if (error) {
            return error;
        }
        return mut_base;
    };
    return Exponentiate;
}());
var Logarithmize = /** @class */ (function () {
    function Logarithmize(b, a) {
        var _a;
        this.kind = TypeDiscriminator.Logarithmize;
        _a = [b, a], this.base = _a[0], this.antilogarithm = _a[1];
    }
    Logarithmize.prototype.contains = function (v) {
        return this.base.contains(v) || this.antilogarithm.contains(v);
    };
    Logarithmize.prototype.getValue = function () {
        return null;
        /* TODO
          let base = this.base.getValue();
          let antilogarithm = this.antilogarithm.getValue();
          if (base == null || antilogarithm == null)
            return null;
          return Math.log(base, antilogarithm);
        */
    };
    return Logarithmize;
}());
function isSolveError(x) {
    return x === 'overdefined' || x === 'underdefined' || x === 'too complex';
}
// An equation with a single equality relationship between two terms.
var Equation = /** @class */ (function () {
    function Equation(lhs, rhs) {
        var _a;
        _a = [lhs, rhs], this.LHS = _a[0], this.RHS = _a[1];
    }
    // Rewrite equation into 'v = term' form.
    Equation.prototype.solve = function (v) {
        if (this.RHS.contains(v)) {
            if (this.LHS.contains(v)) {
                return 'too complex';
            }
            return new Equation(this.RHS, this.LHS).solve(v);
        }
        switch (this.LHS.kind) {
            case TypeDiscriminator.Add: {
                var add = this.LHS;
                var left = add.collect(function (t) { return t.contains(v); });
                if (left['collected'].length !== 1) {
                    return 'too complex';
                }
                var right = Equation.sub(this.RHS, Equation.addFromArray(left['anticollected']));
                return new Equation(left['collected'][0], right).solve(v);
            }
            case TypeDiscriminator.Multiply: {
                var multiply = this.LHS;
                var left = multiply.collect(function (t) { return t.contains(v); });
                if (left['collected'].length !== 1) {
                    return 'too complex';
                }
                var right = Equation.div(this.RHS, Equation.mulFromArray(left['anticollected']));
                return new Equation(left['collected'][0], right).solve(v);
            }
            case TypeDiscriminator.Constant:
                return 'underdefined';
            case TypeDiscriminator.Variable: {
                if (this.LHS === v) {
                    return this;
                }
                return 'too complex';
            }
            case TypeDiscriminator.Exponentiate: {
                var exponentiate = this.LHS;
                if (!exponentiate.getExponent().contains(v)) {
                    var left = exponentiate.getBase();
                    var right = Equation.exp(this.RHS, Equation.exp(exponentiate.getExponent(), Equation.constantFromNumber(-1)));
                    return new Equation(left, right).solve(v);
                }
                return 'too complex';
            }
            case TypeDiscriminator.Logarithmize:
                return 'too complex';
            default:
                var exhaustive = this.LHS.kind;
                return exhaustive;
        }
        return 'too complex'; // This should be unreachable.
    };
    // Static constructors form the public API.
    //
    // The implementations will do some simplification, but none of the
    // simplifications are needed for correctness. They should behave the same as
    // if the did nothing but call the relevant constructor, which is also why
    // they aren't allowed to return CalculateErrors.
    Equation.constant = function (sau) { return new Constant(sau); };
    Equation.constantFromNumberDimension = function (n, d) {
        return Equation.constant(new _dimension__WEBPACK_IMPORTED_MODULE_0__["ScalarAndDimension"](n, d));
    };
    Equation.constantFromNumber = function (n) {
        return Equation.constantFromNumberDimension(n, null);
    };
    Equation.add = function () {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        return Equation.addFromArray(terms);
    };
    Equation.addFromArray = function (terms) {
        // Expand any add's terms to our terms.
        var newTerms = [];
        for (var i = 0; i !== terms.length; ++i) {
            if (terms[i].kind === TypeDiscriminator.Add) {
                newTerms = newTerms.concat(terms[i].summands);
            }
            else {
                newTerms.push(terms[i]);
            }
        }
        terms = newTerms;
        // Collapse multiple constants into one.
        var constants = null;
        newTerms = [];
        for (var i = 0; i !== terms.length; ++i) {
            if (terms[i].kind === TypeDiscriminator.Constant) {
                var term = terms[i];
                if (constants == null) {
                    constants = term.getValue().clone();
                }
                else if (constants.d === term.getValue().d) {
                    constants.addEq(term.getValue());
                }
                else {
                    // In the case the units don't match, defer error until getValue().
                    newTerms.push(terms[i]);
                }
            }
            else {
                newTerms.push(terms[i]);
            }
        }
        terms = newTerms;
        if (constants && terms.length === 0) {
            return Equation.constant(constants);
        }
        if (constants && constants.n !== 0) {
            terms.push(Equation.constant(constants));
        }
        // TODO: got the same term twice or more? Convert that into a multiply.
        if (terms.length === 1) {
            return terms[0];
        }
        return new Add(terms);
    };
    Equation.sub = function (minuend, subtrahend) {
        return Equation.add(minuend, Equation.mul(subtrahend, Equation.constantFromNumber(-1)));
    };
    Equation.mul = function () {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        return Equation.mulFromArray(terms);
    };
    Equation.mulFromArray = function (terms) {
        // Expand any multiply's terms to our terms.
        var newTerms = [];
        for (var i = 0; i !== terms.length; ++i) {
            if (terms[i].kind === TypeDiscriminator.Multiply) {
                newTerms = newTerms.concat(terms[i].multipliers);
            }
            else {
                newTerms.push(terms[i]);
            }
        }
        terms = newTerms;
        // Collapse multiple constants into one.
        var constants = null;
        newTerms = [];
        for (var i = 0; i !== terms.length; ++i) {
            if (terms[i].kind === TypeDiscriminator.Constant) {
                var term = terms[i];
                if (constants == null) {
                    constants = term.getValue().clone();
                }
                else {
                    constants.mulEq(term.getValue());
                }
            }
            else {
                newTerms.push(terms[i]);
            }
        }
        terms = newTerms;
        // TODO: handle constant zero. It may have units which must be preserved.
        if (constants) {
            if (constants.n === 1 && constants.d.unit()) {
                if (terms.length === 0) {
                    return Equation.constant(constants);
                }
            }
            else {
                terms.push(Equation.constant(constants));
            }
        }
        // TODO: got the same term twice or more? Convert to an exponentiation.
        // Turn a^x * a^y into a^(x+y).
        // Collect the terms with common exponent bases.
        var common_exp_bases = new Map();
        for (var i = 0; i !== terms.length; ++i) {
            var term = terms[i];
            if (terms[i].kind === TypeDiscriminator.Exponentiate) {
                term = term.getBase();
            }
            if (!common_exp_bases.has(term)) {
                common_exp_bases.set(term, [i]);
            }
            else {
                common_exp_bases.get(term).push(i);
            }
        }
        // Calculate the replacement terms into newTerms.
        newTerms = [];
        common_exp_bases.forEach(function (value, key) {
            if (value.length > 1) {
                if (key.kind === TypeDiscriminator.Exponentiate) {
                    key = key.getBase();
                }
                newTerms.push(Equation.exp(key, Equation.addFromArray(value.map(function (i) { return terms[i].kind === TypeDiscriminator.Exponentiate ? terms[i].getExponent() : Equation.constantFromNumber(1); }))));
            }
        });
        // Remove now-dead terms. Produce a sorted list of indices so that we remove
        // back to front, so as to not disrupt the later indices.
        var deadIndices = [];
        common_exp_bases.forEach(function (value, key) {
            if (value.length > 1) {
                deadIndices.push.apply(deadIndices, value);
            }
        });
        deadIndices.sort().reverse();
        for (var i = 0; i !== deadIndices.length; ++i) {
            terms.splice(deadIndices[i], 1);
        }
        terms.push.apply(terms, newTerms);
        if (terms.length === 1) {
            return terms[0];
        }
        return new Multiply(terms);
    };
    Equation.div = function (dividend, divisor) {
        return Equation.mul(dividend, Equation.exp(divisor, Equation.constantFromNumber(-1)));
    };
    Equation.exp = function (base, exponent) {
        // If both terms are constant, return a constant.
        if (base.kind === TypeDiscriminator.Constant &&
            exponent.kind === TypeDiscriminator.Constant) {
            var base_c = base;
            var exponent_c = exponent;
            var result = base_c.getValue().clone();
            var error = result.expEq(exponent_c.getValue());
            if (!error) {
                return Equation.constant(result);
            }
        }
        if (exponent.kind === TypeDiscriminator.Constant) {
            var exponent_c = exponent;
            // If the exponent is one, return the base.
            if (exponent_c.getValue().n === 1) {
                return base;
            }
            // If the exponent is zero, return one.
            if (exponent_c.getValue().n === 0) {
                return Equation.constantFromNumber(1);
            }
        }
        // If base is an exponentiation, combine our exponents.
        if (base.kind === TypeDiscriminator.Exponentiate) {
            var base_exp = base;
            return Equation.exp(base_exp.getBase(), Equation.mul(base_exp.getExponent(), exponent));
        }
        // If base is a multiplication, distribute across its elements instead.
        if (base.kind === TypeDiscriminator.Multiply) {
            var base_mul = base;
            return Equation.mulFromArray(base_mul.multipliers.map(function (x) { return Equation.exp(x, exponent); }));
        }
        return new Exponentiate(base, exponent);
    };
    return Equation;
}());

var EquationPrinter = /** @class */ (function () {
    function EquationPrinter(variables) {
        this.variables = variables;
        this.precedence = 0;
    }
    // Emit parentheses when moving to a region of lower precedence.
    // Example 1: add[a, mul[b, c], d]/ Precedence starts at zero, then we visit
    // the Add and it goes up to 10. Emit a, emit the multiply which pushes the
    // precedence up to 20. Exiting the multiply, it calls leaveGroup(10) which
    // restores the precedence back to 10, and finally Add emits d
    // producing 'a + b * c + d'.
    // Example 2: mul[add[a, b], add[c, d]]. Precedence starts at zero, enters the
    // mul and goes to 20. Then it goes to emit its first member, the add enters
    // precedence 10 which is less than 20 so enterGroup returns [20, '('], the
    // first value being the remembered precedence to pop back to, the second
    // value being the grouping character. After emitting a and b, we reach
    // leaveGroup(20) and it restores the precedence to 20 and also detects that
    // this an increase in the precedence, so we must be closing a group and
    // returns ')'. We emit '(a + b) * (c + d)'.
    EquationPrinter.prototype.enterGroup = function (new_precedence) {
        var old_precedence = this.precedence;
        this.precedence = new_precedence;
        return [old_precedence, new_precedence > old_precedence ? '' : '\\left('];
    };
    EquationPrinter.prototype.leaveGroup = function (new_precedence) {
        var old_precedence = this.precedence;
        this.precedence = new_precedence;
        return new_precedence < old_precedence ? '' : '\\right)';
    };
    EquationPrinter.prototype.print = function (lhs, rhs) {
        return this.dispatch(lhs) + ' = ' + this.dispatch(rhs);
    };
    EquationPrinter.prototype.visitVariable = function (v) {
        var s = this.variables.get(v);
        return s ? "\\text{" + s + "}" : '';
    };
    EquationPrinter.prototype.visitConstant = function (c) {
        return Object(_number_util__WEBPACK_IMPORTED_MODULE_1__["printNum"])(c.getValue().n);
    };
    EquationPrinter.prototype.visitAdd = function (a) {
        var _this = this;
        // TODO: convert a + -1 * b into a - b. See the code in multiply.
        var p = this.enterGroup(10);
        return p[1] + a.summands.map(function (x) { return _this.dispatch(x); }).filter(function (x) { return x !== ''; }).join(' + ') + this.leaveGroup(p[0]);
    };
    EquationPrinter.prototype.visitMultiply = function (m) {
        var _this = this;
        var p = this.enterGroup(20);
        var result = p[1];
        // Emit A ÷ B instead of A × B^-1. Collect all b^e where e is a negative
        // constant and emit those second, with division signs, and with a
        // sign-flipped exponent. Everything else gets emitted in the first pass.
        var denominator = m.collect(function (t) {
            return t.kind === TypeDiscriminator.Exponentiate &&
                t.getExponent().kind === TypeDiscriminator.Constant &&
                t.getExponent().getValue().n < 0;
        });
        var numerator_str;
        if (denominator['anticollected'].length === 0) {
            // Used when the whole multiply is emitted in the second pass. We get
            // "1 ÷ A ÷ B".
            numerator_str = '1';
        }
        else {
            // Print -A × B instead of A × -1 × B unless the -1 has a dimension.
            var index = denominator['anticollected'].findIndex(function (t) {
                return t.kind === TypeDiscriminator.Constant &&
                    t.getValue().n === -1 &&
                    t.getValue().d.unit();
            });
            if (index !== -1 && denominator['anticollected'].length > 1) {
                denominator['anticollected'].splice(index, 1);
                numerator_str = '-';
            }
            else {
                numerator_str = '';
            }
            numerator_str += denominator['anticollected'].map(function (x) { return _this.dispatch(x); }).filter(function (x) { return x !== ''; }).join(' \\times ');
        }
        if (denominator['collected'].length !== 0) {
            result += '\\frac{' + numerator_str + '}{' + denominator['collected'].map(function (x) { return Equation.exp(x, Equation.constantFromNumber(-1)); }).map(function (x) { return _this.dispatch(x); }).filter(function (x) { return x !== ''; }).join(' \\times ') + '}';
        }
        else {
            result += numerator_str;
        }
        return result + this.leaveGroup(p[0]);
    };
    EquationPrinter.prototype.visitExponentiate = function (e) {
        // Print 1/x instead of x^-1.
        if (e.getExponent().kind === TypeDiscriminator.Constant &&
            e.getExponent().getValue().n === -1) {
            var p = this.enterGroup(20);
            var result = p[1] + '\\frac{1}{';
            result += this.dispatch(e.getBase());
            return result + '}' + this.leaveGroup(p[0]);
        }
        var p_enter = this.enterGroup(30);
        var base_str = this.dispatch(e.getBase());
        var p_close = this.leaveGroup(p_enter[0]);
        // Because we enter a new superscript region for every exponent, we never
        // need parentheses to disambiguate order of operation.
        var savePrecedence = this.precedence;
        this.precedence = 0;
        var exp_str = this.dispatch(e.getExponent());
        this.precedence = savePrecedence;
        if (base_str === '' || exp_str === '') {
            return '';
        }
        return "" + p_enter[1] + base_str + p_close + "^{" + exp_str + "}";
    };
    EquationPrinter.prototype.visitLogarithmize = function (l) {
        // TODO
        return '';
    };
    EquationPrinter.prototype.dispatch = function (t) {
        switch (t.kind) {
            case TypeDiscriminator.Constant:
                return this.visitConstant(t);
                break;
            case TypeDiscriminator.Variable:
                return this.visitVariable(t);
                break;
            case TypeDiscriminator.Add:
                return this.visitAdd(t);
                break;
            case TypeDiscriminator.Multiply:
                return this.visitMultiply(t);
                break;
            case TypeDiscriminator.Exponentiate:
                return this.visitExponentiate(t);
                break;
            case TypeDiscriminator.Logarithmize:
                return this.visitLogarithmize(t);
                break;
        }
    };
    return EquationPrinter;
}());



/***/ }),

/***/ "./src/app/shared/field.ts":
/*!*********************************!*\
  !*** ./src/app/shared/field.ts ***!
  \*********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _equation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equation */ "./src/app/shared/equation.ts");
/* harmony import */ var _string_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string-util */ "./src/app/shared/string-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later



var Field = /** @class */ (function () {
    function Field() {
        this.input = null;
        this.units = null;
        this.justification = null;
        this.mVar = new _equation__WEBPACK_IMPORTED_MODULE_1__["Variable"];
        this.output = false;
        this.value = '';
        // Update our 'var' from the text in 'value'.
        this.ONE = new _dimension__WEBPACK_IMPORTED_MODULE_0__["ScalarAndDimension"](1, null);
    }
    Object.defineProperty(Field.prototype, "var", {
        get: function () { return this.mVar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "term", {
        get: function () { return this.mTerm; },
        set: function (t) { this.mTerm = t; },
        enumerable: true,
        configurable: true
    });
    Field.prototype.markAsOutput = function () { this.output = true; };
    Field.prototype.unmarkAsOutput = function () { this.output = false; };
    Field.prototype.isMarkedAsOutput = function () { return this.output; };
    Field.prototype.clear = function () {
        this.row.errorText = '';
        this.unmarkAsOutput();
        this.value = '';
    };
    Object.defineProperty(Field.prototype, "hasError", {
        get: function () { return this.row.errorText !== ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "logColumnName", {
        get: function () { return this.label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "equationVarName", {
        get: function () { return Object(_string_util__WEBPACK_IMPORTED_MODULE_2__["removeSoftHyphen"])(this.logColumnName); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "logValue", {
        get: function () { return [this.value, this.unitName, this.isMarkedAsOutput() ? '(calculated)' : ''].filter(function (txt) { return txt.length > 0; }).join(' '); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "unitName", {
        get: function () { return this.units.selectedName; },
        enumerable: true,
        configurable: true
    });
    // Only look for errors that are certainly wrong given the state of this field,
    // ignoring the state of the of the rest of the form.
    Field.prototype.updateErrorState = function () {
        if (this.isMarkedAsOutput() || this.value === '') {
            this.row.errorText = '';
            return;
        }
        if (this.value.match(/.*\..*\..*/)) {
            this.row.errorText = 'One decimal point maximum.';
            return;
        }
        var value = parseFloat(this.value);
        if (isNaN(value)) {
            this.row.errorText = 'Must be a number.';
            return;
        }
        if (value <= 0) {
            this.row.errorText = 'Must be greater than zero.';
            return;
        }
        this.row.errorText = '';
    };
    Field.prototype.updateVar = function () {
        if (!this.row.show) {
            this.var.setValue(this.ONE);
            return;
        }
        if (this.value === '') {
            this.var.setValue(null);
            return;
        }
        this.var.setValue(new _dimension__WEBPACK_IMPORTED_MODULE_0__["ScalarAndDimension"](parseFloat(this.value) * this.unit.n, this.unit.d));
    };
    Field.prototype.equationSnippet = function (eqPrinter) {
        return eqPrinter.print(this.var, this.term);
    };
    return Field;
}());



/***/ }),

/***/ "./src/app/shared/form.ts":
/*!********************************!*\
  !*** ./src/app/shared/form.ts ***!
  \********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _number_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-util */ "./src/app/shared/number-util.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later



var Form = /** @class */ (function () {
    function Form(eqPrinter, fields) {
        this.eqPrinter = eqPrinter;
        this.fields = fields;
        this.internalError = '';
        this.equationSnippet = '';
    }
    Form.prototype.updateVars = function () {
        this.fields.forEach(function (f) {
            f.updateVar();
        });
    };
    Form.prototype.updateErrors = function (required) {
        this.fields.filter(function (f) { return f.row.show; }).forEach(function (f) {
            f.updateErrorState();
            if (required && !f.hasError && f.value === '') {
                f.row.errorText = 'Please fill in a number.';
            }
        });
    };
    Form.prototype.hasErrors = function () {
        return this.fields.filter(function (f) { return f.row.show; }).some(function (f) { return f.hasError; });
    };
    Form.prototype.clear = function () {
        this.internalError = '';
        this.fields.forEach(function (f) {
            f.clear();
        });
        this.equationSnippet = this.fields[this.fields.length - 1].equationSnippet(this.eqPrinter);
    };
    Form.prototype.calculate = function () {
        this.updateErrors(false);
        var out_control = null;
        var fields = this.fields.filter(function (f) { return f.row.show; });
        for (var i = 0; i !== fields.length; ++i) {
            if (fields[i].isMarkedAsOutput() || fields[i].value === '') {
                if (out_control == null) {
                    out_control = fields[i];
                }
                else {
                    out_control = null;
                    break;
                }
            }
        }
        if (!out_control) {
            // We might be here if there were multiple possible outputs found.
            // Wipe values and readonly state for all of them.
            for (var i = 0; i !== fields.length; ++i) {
                if (fields[i].isMarkedAsOutput()) {
                    fields[i].unmarkAsOutput();
                    fields[i].value = '';
                }
            }
            this.equationSnippet = fields[fields.length - 1].equationSnippet(this.eqPrinter);
            return;
        }
        out_control.markAsOutput();
        out_control.value = '';
        if (this.hasErrors()) {
            return;
        }
        this.updateVars();
        this.equationSnippet = out_control.equationSnippet(this.eqPrinter);
        var result = out_control.term.getValue();
        if (result == null) {
            this.internalError = 'calculation returned null';
            return;
        }
        if (Object(_dimension__WEBPACK_IMPORTED_MODULE_1__["isCalculateError"])(result)) {
            this.internalError = result;
            return;
        }
        if (!result.d.equal(out_control.unit.d)) {
            this.internalError = 'dimension mismatch';
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.log(result.n);
                console.log(result.d);
                console.log(out_control.unit.n);
                console.log(out_control.unit.d);
            }
            return;
        }
        out_control.value = Object(_number_util__WEBPACK_IMPORTED_MODULE_2__["printNum"])(result.n / out_control.unit.n);
    };
    Form.prototype.calculateAndLog = function (calculationLog) {
        this.updateErrors(true);
        if (!this.hasErrors()) {
            calculationLog.append(this.fields.map(function (f) { return f.justification ? [f.logColumnName, 'Justification'] : [f.logColumnName]; }).reduce(function (accumulator, currentValue) { return accumulator.concat(currentValue); }), this.fields.map(function (f) { return f.justification ? [f.row.show ? f.logValue : 'n/a', f.justification.justification] : [f.row.show ? f.logValue : 'n/a']; }).reduce(function (accumulator, currentValue) { return accumulator.concat(currentValue); }));
        }
    };
    return Form;
}());



/***/ }),

/***/ "./src/app/shared/number-util.ts":
/*!***************************************!*\
  !*** ./src/app/shared/number-util.ts ***!
  \***************************************/
/*! exports provided: SdInputPositiveNumber, SdInputPositiveNumberLeft, printNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdInputPositiveNumber", function() { return SdInputPositiveNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdInputPositiveNumberLeft", function() { return SdInputPositiveNumberLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printNum", function() { return printNum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


// Make sure that the values emitted by printNum are accepted by the pattern in
// SdInputPositiveNumber and by parseFloat.
var SdInputPositiveNumber = /** @class */ (function () {
    function SdInputPositiveNumber(e) {
        this.e = e;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.class = true;
        this.type = 'text';
    }
    SdInputPositiveNumber.prototype.onInput = function () {
        this.e.nativeElement.value = this.e.nativeElement.value.replace(/[^\d.]/g, '');
        this.ngModelChange.emit(this.e.nativeElement.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SdInputPositiveNumber.prototype, "ngModelChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.text-right'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdInputPositiveNumber.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdInputPositiveNumber.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SdInputPositiveNumber.prototype, "onInput", null);
    SdInputPositiveNumber = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sdInputPosNum]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SdInputPositiveNumber);
    return SdInputPositiveNumber;
}());

var SdInputPositiveNumberLeft = /** @class */ (function () {
    function SdInputPositiveNumberLeft(e) {
        this.e = e;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.type = 'text';
    }
    SdInputPositiveNumberLeft.prototype.onInput = function () {
        this.e.nativeElement.value = this.e.nativeElement.value.replace(/[^\d.]/g, '');
        this.ngModelChange.emit(this.e.nativeElement.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SdInputPositiveNumberLeft.prototype, "ngModelChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.type'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SdInputPositiveNumberLeft.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SdInputPositiveNumberLeft.prototype, "onInput", null);
    SdInputPositiveNumberLeft = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sdInputPosNumLeft]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SdInputPositiveNumberLeft);
    return SdInputPositiveNumberLeft;
}());

function printNum(n) {
    // Never use scientific notation, round to 6 decimal places or fewer.
    return Number(n).toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 6 });
}


/***/ }),

/***/ "./src/app/shared/string-util.ts":
/*!***************************************!*\
  !*** ./src/app/shared/string-util.ts ***!
  \***************************************/
/*! exports provided: removeSoftHyphen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSoftHyphen", function() { return removeSoftHyphen; });
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later
function removeSoftHyphen(input) {
    return input.replace(/­/g, '');
}


/***/ }),

/***/ "./src/app/termsclickthrough/termsclickthrough.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/termsclickthrough/termsclickthrough.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXNjbGlja3Rocm91Z2gvdGVybXNjbGlja3Rocm91Z2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zY2xpY2t0aHJvdWdoL3Rlcm1zY2xpY2t0aHJvdWdoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3hDYWxjISBieSBTYWZlIERvc2UgwqkgMjAxOC0yMDIxLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/termsclickthrough/termsclickthrough.component.html":
/*!********************************************************************!*\
  !*** ./src/app/termsclickthrough/termsclickthrough.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"mx-auto container\">\n  <div class=\"card border-dark w-100 my-5\">\n    <div class=\"card-body\">\n      <h1 class=\"card-text display-4\">\n        Terms of Use\n      </h1>\n      <p class=\"card-text\">These calculators are provided to you solely for the purposes of beta testing. By clicking on the button below, you agree not to use it for professional or personal purposes, OR to share it with anyone.</p>\n    </div>\n    <div class=\"card-footer text-center border-dark\">\n      <a [routerLink]=\"'landing'\" class=\"btn btn-danger\">Yes, I accept the terms</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/termsclickthrough/termsclickthrough.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/termsclickthrough/termsclickthrough.component.ts ***!
  \******************************************************************/
/*! exports provided: TermsclickthroughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsclickthroughComponent", function() { return TermsclickthroughComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later


var TermsclickthroughComponent = /** @class */ (function () {
    function TermsclickthroughComponent() {
    }
    TermsclickthroughComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsclickthrough',
            template: __webpack_require__(/*! ./termsclickthrough.component.html */ "./src/app/termsclickthrough/termsclickthrough.component.html"),
            styles: [__webpack_require__(/*! ./termsclickthrough.component.css */ "./src/app/termsclickthrough/termsclickthrough.component.css")]
        })
    ], TermsclickthroughComponent);
    return TermsclickthroughComponent;
}());



/***/ }),

/***/ "./src/app/totaldosecalc/totaldosecalc.component.css":
/*!***********************************************************!*\
  !*** ./src/app/totaldosecalc/totaldosecalc.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n * SPDX-License-Identifier: GPL-3.0-or-later\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG90YWxkb3NlY2FsYy90b3RhbGRvc2VjYWxjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC90b3RhbGRvc2VjYWxjL3RvdGFsZG9zZWNhbGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRveENhbGMhIGJ5IFNhZmUgRG9zZSDCqSAyMDE4LTIwMjEuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogR1BMLTMuMC1vci1sYXRlclxuICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/totaldosecalc/totaldosecalc.component.html":
/*!************************************************************!*\
  !*** ./src/app/totaldosecalc/totaldosecalc.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.\n  SPDX-License-Identifier: GPL-3.0-or-later\n-->\n\n<div class=\"container py-3\">\n  <p class=\"lead font-weight-bold\">Total Dose Conversion Calculator</p>\n  <ngb-alert type=\"info\" [dismissible]=\"false\">This is a MULTIDIRECTIONAL calculator. <u>Leave any <b>one</b> field blank and hit Calculate!</u> It will calculate the missing field for you.</ngb-alert>\n  <div class=\"card w-100 mb-3\">\n    <div class=\"card-body\">\n      <form autocomplete=\"off\" novalidate>\n        <sd-calc-row #concenRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"concen\">\n            {{concen.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': concen.isMarkedAsOutput()}\" name=\"concen\" id=\"concen\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"concen.isMarkedAsOutput()\" [(ngModel)]=\"concen.value\" [ngModelOptions]=\"{standalone: true}\" #concenInput>\n            <sd-select name=\"concen-units\" #concenUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <optgroup label=\"mass/volume\">\n                <option *ngFor=\"let unit of iterUnits(CONCEN_UNITS, MASS_VOLUME)\" [label]=\"unit\"></option>\n              </optgroup>\n              <optgroup label=\"volume/volume\">\n                <option label=\"mL/L\"></option>\n                <option label=\"µL/L\"></option>\n                <option label=\"µL/mL\"></option>\n                <option label=\"ppm (v/v)\"></option>\n                <option label=\"ppb (v/v)\"></option>\n                <option label=\"% (v/v)\"></option>\n              </optgroup>\n              <optgroup label=\"mol/volume\">\n                <option *ngFor=\"let unit of iterUnits(CONCEN_UNITS, MOL_VOLUME)\" [label]=\"unit\"></option>\n              </optgroup>\n              <optgroup label=\"mol/mass\">\n                <option *ngFor=\"let unit of iterUnits(CONCEN_UNITS, MOL_MASS)\" [label]=\"unit\"></option>\n              </optgroup>\n              <optgroup label=\"mass/mass\">\n                <option label=\"mg/kg\"></option>\n                <option label=\"µg/kg\"></option>\n              </optgroup>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Concentration</b> is the amount of one substance present in another substance. In other words, it is the amount of a substance present in a <a target=\"_blank\" href=\"definitions#mixture\">mixture</a> that contains at least two substances. Commonly, these mixtures are <a target=\"_blank\" href=\"definitions#solution\">solutions</a>. Concentration can be used to express the amount of any substance in any media. Examples of media that are relevant to human or environmental health include food, soil, water, air, bodily fluids, tissues, pharmaceuticals and consumer products. <a target=\"_blank\" href=\"definitions#concentration\">Click here</a> for more information on concentration.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #intakeRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"intake\">\n            {{intake.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': intake.isMarkedAsOutput()}\" name=\"intake\" id=\"intake\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"intake.isMarkedAsOutput()\" [(ngModel)]=\"intake.value\" [ngModelOptions]=\"{standalone: true}\" #intakeInput>\n            <sd-select name=\"intake-units\" #intakeUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <optgroup label=\"volume/time\">\n                <option *ngFor=\"let unit of iterUnits(INTAKE_UNITS, VOLUME_TIME)\" [label]=\"unit\"></option>\n              </optgroup>\n              <optgroup label=\"mass/time\">\n                <option *ngFor=\"let unit of iterUnits(INTAKE_UNITS, MASS_TIME)\" [label]=\"unit\"></option>\n              </optgroup>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Intake</b> is the amount of the total mixture being consumed in a day.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row [sdShow]=\"false\" #substanceDensityRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"substanceDensity\">\n            {{substanceDensity.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': substanceDensity.isMarkedAsOutput()}\" name=\"substanceDensity\" id=\"substanceDensity\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"substanceDensity.isMarkedAsOutput()\" [(ngModel)]=\"substanceDensity.value\" [ngModelOptions]=\"{standalone: true}\" #substanceDensityInput>\n            <sd-select name=\"substanceDensity-units\" #substanceDensityUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <option *ngFor=\"let unit of iterUnits(DENSITY_UNITS)\" [label]=\"unit\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Substance density</b> is the density of the substance or chemical of interest. It is the chemical that is present in a small amount that is being added to the solvent or media which is present in large amount.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row [sdShow]=\"false\" #molarMassRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"molarMass\">\n            {{molarMass.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': molarMass.isMarkedAsOutput()}\" name=\"molarMass\" id=\"molarMass\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"molarMass.isMarkedAsOutput()\" [(ngModel)]=\"molarMass.value\" [ngModelOptions]=\"{standalone: true}\" #molarMassInput>\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">g/mol</span>\n            </div>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Molar mass</b> is the sum of the total mass in grams of all the atoms that make up a mole of a particular molecule. The unit used to measure molar mass is grams per mole. To calculate molar mass, you can look it up for your molecule from a trusted source, or you can calculate it using the atomic masses of individual atoms that make up the molecule. So, for sodium chloride or NaCl, the atomic mass of sodium is 22.99 g/mol. The atomic mass of chlorine is 35.45 g/mol. Since there is only one atom of sodium and one atom of chlorine in sodium chloride, we add these two together to get the molar mass of NaCl, which is 58.44 g/mol (22.99+35.45=58.44 g/mol).\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row [sdShow]=\"false\" #solutionDensityRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"solutionDensity\">\n            {{solutionDensity.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': solutionDensity.isMarkedAsOutput()}\" name=\"solutionDensity\" id=\"solutionDensity\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"solutionDensity.isMarkedAsOutput()\" [(ngModel)]=\"solutionDensity.value\" [ngModelOptions]=\"{standalone: true}\" #solutionDensityInput>\n            <sd-select name=\"solutionDensity-units\" #solutionDensityUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <option *ngFor=\"let unit of iterUnits(DENSITY_UNITS)\" [label]=\"unit\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            <b>Solvent or media density</b> is the density of the chemical present in mixture in the larger amount. Note that the density of water is 1 g/mL, and for very dilute aqueous solutions, the density of water can be used as a surrogate.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #bodyWeightRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"bodyWeight\">\n            {{bodyWeight.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': bodyWeight.isMarkedAsOutput()}\" name=\"bodyWeight\" id=\"bodyWeight\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"bodyWeight.isMarkedAsOutput()\" [(ngModel)]=\"bodyWeight.value\" [ngModelOptions]=\"{standalone: true}\" #bodyWeightInput>\n            <sd-select name=\"bodyWeight-units\" #bodyWeightUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <option label=\"kg\"></option>\n              <option label=\"g\"></option>\n            </sd-select>\n          </ng-template>\n          <ng-template sdCalcRowHelp>\n            The <b>body weight</b> of the animal or human consuming the substance.\n          </ng-template>\n        </sd-calc-row>\n        <sd-calc-row #doseRow>\n          <ng-template sdCalcRowLabel sdCalcRowLabelFor=\"dose\">\n            {{dose.label}}\n          </ng-template>\n          <ng-template sdCalcRowInput>\n            <input [ngClass]=\"{'form-control': true, 'output': dose.isMarkedAsOutput()}\" name=\"dose\" id=\"dose\" sdInputPosNum (input)=\"form.calculate()\" [readonly]=\"dose.isMarkedAsOutput()\" [(ngModel)]=\"dose.value\" [ngModelOptions]=\"{standalone: true}\" #doseInput>\n            <sd-select name=\"dose-units\" #doseUnits (change)=\"changeUnits();\" [sdAppend]=\"true\">\n              <option *ngFor=\"let unit of iterUnits(DOSE_UNITS)\" [label]=\"unit\"></option>\n            </sd-select>\n          </ng-template>\n           <ng-template sdCalcRowHelp>\n            <b>Dose</b> is the quantity of a substance administered to or received by the animal or human in a day.\n          </ng-template>\n        </sd-calc-row>\n\n        <div class=\"form-group form-row ml-0\">\n          <ngb-alert *ngIf=\"form.underConstructionShow\" [dismissible]=\"false\" type=\"warning\" class=\"w-100\"><strong class=\"mr-2\">Sorry!</strong>Calculation with these units is not supported.</ngb-alert>\n        </div>\n        <sd-internal-calc-error [errorText]=\"form.internalError\"></sd-internal-calc-error>\n        <div class=\"form-group form-row ml-0 mb-0\">\n          <button type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"form.calculateAndLog(calculationLog)\" [disabled]=\"form.underConstructionShow || form.internalError\">Calculate!</button>\n          <button type=\"reset\" class=\"btn btn-secondary mr-4\" (click)=\"form.clear()\">Clear</button>\n          <button class=\"btn btn-link\" (click)=\"calculationLog.scrollIntoView()\" *ngIf=\"!calculationLog.empty()\">See calculation log!</button>\n        </div>\n      </form>\n    </div>\n    <ng-container *ngIf=\"!form.underConstructionShow\">\n      <div class=\"border-top card-header\">\n        Live view of the equation used in this calculation:\n      </div>\n      <div class=\"card-body text-center\" [sdKatexInline]=\"true\" [sdKatex]=\"form.equationSnippet\">\n      </div>\n    </ng-container>\n  </div>\n  <p>This calculator is designed to only be used for homogenous (i.e. uniform) chemical <a target=\"_blank\" href=\"definitions#mixture\">mixtures</a>. It should not be used for radionuclides.</p>\n  <p>\n    To get the molar mass, add the atomic weights of all atoms in the substance. To find the atomic weights, you may use the <a rel=\"noopener\" target=\"_blank\" href=\"https://en.wikipedia.org/wiki/File:Periodic_Table_Of_Elements.svg\">Periodic Table</a> or look up the molar mass from a trusted source such as <a rel=\"noopener\" target=\"_blank\" href=\"https://chem.nlm.nih.gov/chemidplus/\">ChemIDPlus</a>.\n  </p>\n  <p>\n    If body weight of the animal or human is unknown, use defaults. Some defaults for rodents can be found here: <a rel=\"noopener\" target=\"_blank\" href=\"https://semspub.epa.gov/work/10/500017164.pdf\">EPA Default Animal Body Weights</a> and here <a rel=\"noopener\" target=\"_blank\" href=\"https://www.tera.org/Tools/ratmousevalues.pdf\">TERA Default Rat and Mouse Body Weights</a>.\n  </p>\n  <p><a rel=\"noopener\" target=\"_blank\" href=\"/assets/a82014b103e4d9e8f05a/totaldosecalc-tutorial.pdf\">Tutorial: How do changes in body weight, intake rate and concentration impact dose? <fa-icon [icon]=\"['fas', 'file-pdf']\"></fa-icon></a></p>\n  <sd-calculation-log #calculationLog></sd-calculation-log>\n</div>\n"

/***/ }),

/***/ "./src/app/totaldosecalc/totaldosecalc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/totaldosecalc/totaldosecalc.component.ts ***!
  \**********************************************************/
/*! exports provided: TotalDoseCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDoseCalcComponent", function() { return TotalDoseCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sd-calc-row/sd-calc-row.component */ "./src/app/sd-calc-row/sd-calc-row.component.ts");
/* harmony import */ var _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sd-calculation-log/sd-calculation-log.component */ "./src/app/sd-calculation-log/sd-calculation-log.component.ts");
/* harmony import */ var _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sd-select/sd-select.component */ "./src/app/sd-select/sd-select.component.ts");
/* harmony import */ var _shared_dimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dimension */ "./src/app/shared/dimension.ts");
/* harmony import */ var _shared_equation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/equation */ "./src/app/shared/equation.ts");
/* harmony import */ var _shared_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/field */ "./src/app/shared/field.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/form */ "./src/app/shared/form.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later











var Concentration = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Concentration, _super);
    function Concentration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initLength().exp(3);
        _this.MASS_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME);
        _this.MOL_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_this.VOLUME);
        _this.MOL_MASS = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        _this.CONCEN_UNITS = {
            'mg/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _this.MASS_VOLUME),
            'g/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _this.MASS_VOLUME),
            'µg/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _this.MASS_VOLUME),
            'ppm (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _this.MASS_VOLUME),
            'ppb (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _this.MASS_VOLUME),
            '% (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](10, _this.MASS_VOLUME),
            'mL/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µL/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µL/mL': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'ppm (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'ppb (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            '% (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.01, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'mol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _this.MOL_VOLUME),
            'mmol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _this.MOL_VOLUME),
            'µmol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _this.MOL_VOLUME),
            'mol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _this.MOL_MASS),
            'mmol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _this.MOL_MASS),
            'µmol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _this.MOL_MASS),
            'mg/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µg/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
        };
        return _this;
    }
    Object.defineProperty(Concentration.prototype, "label", {
        get: function () { return 'Con­cen­tra­tion'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Concentration.prototype, "unit", {
        get: function () {
            return this.CONCEN_UNITS[this.units.selectedName];
        },
        enumerable: true,
        configurable: true
    });
    return Concentration;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var Intake = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Intake, _super);
    function Intake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initLength().exp(3);
        _this.VOLUME_TIME = _this.VOLUME.div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime());
        _this.MASS_TIME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime());
        _this.INTAKE_UNITS = {
            'L/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _this.VOLUME_TIME),
            'mL/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _this.VOLUME_TIME),
            'kg/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _this.MASS_TIME),
            'g/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _this.MASS_TIME),
        };
        return _this;
    }
    Object.defineProperty(Intake.prototype, "label", {
        get: function () { return 'In­take'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Intake.prototype, "unit", {
        get: function () {
            return this.INTAKE_UNITS[this.units.selectedName];
        },
        enumerable: true,
        configurable: true
    });
    return Intake;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var SubstanceDensity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubstanceDensity, _super);
    function SubstanceDensity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initLength().exp(3);
        _this.DENSITY_UNITS = {
            'g/mL': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'g/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'kg/m³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'g/cm³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
        };
        return _this;
    }
    Object.defineProperty(SubstanceDensity.prototype, "label", {
        get: function () { return 'Substance density'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubstanceDensity.prototype, "unit", {
        get: function () {
            return this.DENSITY_UNITS[this.units.selectedName];
        },
        enumerable: true,
        configurable: true
    });
    return SubstanceDensity;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var MolarMass = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MolarMass, _super);
    function MolarMass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recip = false;
        _this.recipVar = new _shared_equation__WEBPACK_IMPORTED_MODULE_8__["Variable"];
        _this.ONE = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, null);
        _this.G_MOL = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass()));
        return _this;
    }
    Object.defineProperty(MolarMass.prototype, "label", {
        get: function () { return 'Molar mass of substance'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "logColumnName", {
        get: function () { return 'Molar mass'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "equationVarName", {
        get: function () { return 'Molar mass'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "unitName", {
        get: function () { return 'g/mol'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "var", {
        get: function () { return this.recip ? this.recipVar : this.mVar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "otherVar", {
        get: function () { return this.recip ? this.mVar : this.recipVar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MolarMass.prototype, "term", {
        get: function () { return this.recip ? this.recipTerm : this.mTerm; },
        set: function (t) { /* assert recip is false */ this.mTerm = t; },
        enumerable: true,
        configurable: true
    });
    // Update our 'var' from the text in 'value'.
    MolarMass.prototype.updateVar = function () {
        this.otherVar.setValue(this.ONE);
        _super.prototype.updateVar.call(this);
    };
    Object.defineProperty(MolarMass.prototype, "unit", {
        get: function () {
            // g/mol
            return this.G_MOL;
        },
        enumerable: true,
        configurable: true
    });
    return MolarMass;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var SolutionDensity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SolutionDensity, _super);
    function SolutionDensity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recip = false;
        _this.recipVar = new _shared_equation__WEBPACK_IMPORTED_MODULE_8__["Variable"];
        _this.ONE = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, null);
        _this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initLength().exp(3);
        _this.DENSITY_UNITS = {
            'g/mL': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'g/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'kg/m³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
            'g/cm³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_this.VOLUME)),
        };
        return _this;
    }
    Object.defineProperty(SolutionDensity.prototype, "label", {
        get: function () { return 'Solvent or media density'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionDensity.prototype, "var", {
        get: function () { return this.recip ? this.recipVar : this.mVar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionDensity.prototype, "otherVar", {
        get: function () { return this.recip ? this.mVar : this.recipVar; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionDensity.prototype, "term", {
        get: function () { return this.recip ? this.recipTerm : this.mTerm; },
        set: function (t) { /* assert recip is false */ this.mTerm = t; },
        enumerable: true,
        configurable: true
    });
    // Update our 'var' from the text in 'value'.
    SolutionDensity.prototype.updateVar = function () {
        this.otherVar.setValue(this.ONE);
        _super.prototype.updateVar.call(this);
    };
    Object.defineProperty(SolutionDensity.prototype, "unit", {
        get: function () {
            return this.DENSITY_UNITS[this.units.selectedName];
        },
        enumerable: true,
        configurable: true
    });
    return SolutionDensity;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var BodyWeight = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BodyWeight, _super);
    function BodyWeight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.KG_UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        _this.G_UNIT = new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        return _this;
    }
    Object.defineProperty(BodyWeight.prototype, "label", {
        get: function () { return 'Body weight'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BodyWeight.prototype, "unit", {
        get: function () {
            return this.units.selectedName === 'g' ? this.G_UNIT : this.KG_UNIT;
        },
        enumerable: true,
        configurable: true
    });
    return BodyWeight;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var Dose = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dose, _super);
    function Dose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DOSE_UNITS = {
            'mg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip()),
            'µg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip()),
            'mol/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass()).div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime())),
            'mmol/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass()).div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime())),
        };
        return _this;
    }
    Object.defineProperty(Dose.prototype, "label", {
        get: function () { return 'Dose'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dose.prototype, "unit", {
        get: function () {
            return this.DOSE_UNITS[this.units.selectedName];
        },
        enumerable: true,
        configurable: true
    });
    return Dose;
}(_shared_field__WEBPACK_IMPORTED_MODULE_9__["Field"]));
var TotalDoseCalcForm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TotalDoseCalcForm, _super);
    function TotalDoseCalcForm(eqPrinter, fields) {
        var _this = _super.call(this, eqPrinter, fields) || this;
        _this.underConstructionShow = false;
        return _this;
    }
    TotalDoseCalcForm.prototype.hasErrors = function () {
        return this.underConstructionShow || _super.prototype.hasErrors.call(this);
    };
    TotalDoseCalcForm.prototype.updateErrors = function (required) {
        var hasEmptyField = false;
        var hasOutput = false;
        this.fields.filter(function (f) { return f.row.show; }).forEach(function (f) {
            f.updateErrorState();
            hasOutput = hasOutput || f.isMarkedAsOutput();
            if (!f.hasError && f.value === '') {
                if (required) {
                    f.row.errorText = 'Please fill in a number.';
                }
                hasEmptyField = true;
            }
        });
        if (!hasEmptyField && !hasOutput) {
            this.fields.filter(function (f) { return f.row.show; }).forEach(function (f) {
                f.row.errorText = 'Please remove a value.';
            });
        }
    };
    return TotalDoseCalcForm;
}(_shared_form__WEBPACK_IMPORTED_MODULE_10__["Form"]));
var TotalDoseCalcComponent = /** @class */ (function () {
    function TotalDoseCalcComponent() {
        this.variableMap = new Map();
        this.eqPrinter = new _shared_equation__WEBPACK_IMPORTED_MODULE_8__["EquationPrinter"](this.variableMap);
        this.concen = new Concentration;
        this.intake = new Intake;
        this.substanceDensity = new SubstanceDensity;
        this.molarMass = new MolarMass;
        this.solutionDensity = new SolutionDensity;
        this.bodyWeight = new BodyWeight;
        this.dose = new Dose;
        this.form = new TotalDoseCalcForm(this.eqPrinter, [this.concen, this.intake, this.substanceDensity, this.molarMass, this.solutionDensity, this.bodyWeight, this.dose]);
        this.VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initLength().exp(3);
        this.MASS_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(this.VOLUME);
        this.MOL_VOLUME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(this.VOLUME);
        this.MOL_MASS = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass());
        this.CONCEN_UNITS = {
            'mg/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, this.MASS_VOLUME),
            'g/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, this.MASS_VOLUME),
            'µg/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, this.MASS_VOLUME),
            'ppm (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, this.MASS_VOLUME),
            'ppb (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, this.MASS_VOLUME),
            '% (w/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](10, this.MASS_VOLUME),
            'mL/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µL/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µL/mL': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'ppm (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'ppb (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            '% (v/v)': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.01, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'mol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, this.MOL_VOLUME),
            'mmol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, this.MOL_VOLUME),
            'µmol/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, this.MOL_VOLUME),
            'mol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, this.MOL_MASS),
            'mmol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, this.MOL_MASS),
            'µmol/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, this.MOL_MASS),
            'mg/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
            'µg/kg': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initUnit()),
        };
        this.VOLUME_TIME = this.VOLUME.div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime());
        this.MASS_TIME = _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime());
        this.INTAKE_UNITS = {
            'L/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, this.VOLUME_TIME),
            'mL/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, this.VOLUME_TIME),
            'kg/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, this.MASS_TIME),
            'g/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, this.MASS_TIME),
        };
        this.DENSITY_UNITS = {
            'g/mL': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(this.VOLUME)),
            'g/L': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(this.VOLUME)),
            'kg/m³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(this.VOLUME)),
            'g/cm³': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](1000, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass().div(this.VOLUME)),
        };
        this.DOSE_UNITS = {
            'mg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip()),
            'µg/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime().recip()),
            'mol/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass()).div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime())),
            'mmol/kg BW/day': new _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["ScalarAndDimension"](0.000001, _shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMolarMass().div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initMass()).div(_shared_dimension__WEBPACK_IMPORTED_MODULE_7__["Dimension"].initTime())),
        };
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilePdf"]);
        var calcEq = new _shared_equation__WEBPACK_IMPORTED_MODULE_8__["Equation"](_shared_equation__WEBPACK_IMPORTED_MODULE_8__["Equation"].div(_shared_equation__WEBPACK_IMPORTED_MODULE_8__["Equation"].mul(this.concen.var, this.intake.var, this.substanceDensity.var, this.molarMass.var, this.solutionDensity.var), _shared_equation__WEBPACK_IMPORTED_MODULE_8__["Equation"].mul(this.molarMass.recipVar, this.solutionDensity.recipVar, this.bodyWeight.var, this.dose.var)), _shared_equation__WEBPACK_IMPORTED_MODULE_8__["Equation"].constantFromNumber(1));
        this.concen.term = calcEq.solve(this.concen.var).RHS;
        this.intake.term = calcEq.solve(this.intake.var).RHS;
        this.substanceDensity.term = calcEq.solve(this.substanceDensity.var).RHS;
        this.molarMass.term = calcEq.solve(this.molarMass.var).RHS;
        this.solutionDensity.term = calcEq.solve(this.solutionDensity.var).RHS;
        this.molarMass.recipTerm = calcEq.solve(this.molarMass.recipVar).RHS;
        this.solutionDensity.recipTerm = calcEq.solve(this.solutionDensity.recipVar).RHS;
        this.bodyWeight.term = calcEq.solve(this.bodyWeight.var).RHS;
        this.dose.term = calcEq.solve(this.dose.var).RHS;
        this.variableMap.set(this.concen.var, this.concen.equationVarName);
        this.variableMap.set(this.intake.var, this.intake.equationVarName);
        this.variableMap.set(this.bodyWeight.var, this.bodyWeight.equationVarName);
        this.variableMap.set(this.dose.var, this.dose.equationVarName);
        this.form.equationSnippet = this.dose.equationSnippet(this.eqPrinter);
    }
    TotalDoseCalcComponent.prototype.ngAfterViewInit = function () {
        this.concen.input = this.concenInput;
        this.concen.units = this.concenUnits;
        this.concen.row = this.concenRow;
        this.intake.input = this.intakeInput;
        this.intake.units = this.intakeUnits;
        this.intake.row = this.intakeRow;
        this.substanceDensity.input = this.substanceDensityInput;
        this.substanceDensity.units = this.substanceDensityUnits;
        this.substanceDensity.row = this.substanceDensityRow;
        this.molarMass.input = this.molarMassInput;
        this.molarMass.row = this.molarMassRow;
        this.solutionDensity.input = this.solutionDensityInput;
        this.solutionDensity.units = this.solutionDensityUnits;
        this.solutionDensity.row = this.solutionDensityRow;
        this.bodyWeight.input = this.bodyWeightInput;
        this.bodyWeight.units = this.bodyWeightUnits;
        this.bodyWeight.row = this.bodyWeightRow;
        this.dose.input = this.doseInput;
        this.dose.units = this.doseUnits;
        this.dose.row = this.doseRow;
        this.updateEquation();
    };
    // Allow the template to iterate over unit labels filtered by dimension.
    TotalDoseCalcComponent.prototype.iterUnits = function (table, d) {
        var results = [];
        Object.keys(table).forEach(function (key) {
            if (d == null || table[key].d.equal(d)) {
                results.push(key);
            }
        });
        return results;
    };
    TotalDoseCalcComponent.prototype.updateEquation = function () {
        this.variableMap.set(this.substanceDensity.var, this.substanceDensity.row.show ? this.substanceDensity.equationVarName : '');
        this.variableMap.set(this.molarMass.var, this.molarMass.row.show ? this.molarMass.equationVarName : '');
        this.variableMap.set(this.molarMass.otherVar, '');
        this.variableMap.set(this.solutionDensity.var, this.solutionDensity.row.show ? this.solutionDensity.equationVarName : '');
        this.variableMap.set(this.solutionDensity.otherVar, '');
        this.form.equationSnippet = this.dose.equationSnippet(this.eqPrinter);
    };
    TotalDoseCalcComponent.prototype.changeUnits = function () {
        // Concentration of volume/volume and intake of mass/time has units that
        // line up, but the calculation would not be correct without considering the
        // volume of solvent per mass.
        if (this.concenUnits.selectedGroupName === 'volume/volume' &&
            this.intakeUnits.selectedGroupName === 'mass/time') {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = false;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = true;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        // Substance density and reciprocal solution density are indistinguishable.
        // Handle the three cases of reciprocal solution density up front.
        if (this.concenUnits.selectedGroupName === 'mol/mass' &&
            this.intakeUnits.selectedGroupName === 'volume/time' &&
            (this.doseUnits.selectedName === 'mg/kg BW/day' ||
                this.doseUnits.selectedName === 'µg/kg BW/day')) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = true;
            this.molarMass.recip = false;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (this.concenUnits.selectedGroupName === 'mol/mass' &&
            this.intakeUnits.selectedGroupName === 'volume/time' &&
            (this.doseUnits.selectedName === 'mol/kg BW/day' ||
                this.doseUnits.selectedName === 'mmol/kg BW/day')) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = false;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (this.concenUnits.selectedGroupName === 'mass/mass' &&
            this.intakeUnits.selectedGroupName === 'volume/time') {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show =
                this.doseUnits.selectedName === 'mol/kg BW/day' ||
                    this.doseUnits.selectedName === 'mmol/kg BW/day';
            this.molarMass.recip = true;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        // Use dimensional analysis to determine which rows to show.
        var residual = this.concen.unit.d
            .mul(this.intake.unit.d)
            .div(this.bodyWeight.unit.d)
            .div(this.dose.unit.d)
            .recip();
        if (residual.unit()) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = false;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.substanceDensity.unit.d)) {
            this.substanceDensity.row.show = true;
            this.molarMass.row.show = false;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.molarMass.unit.d)) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = true;
            this.molarMass.recip = false;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.molarMass.unit.d.recip())) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = true;
            this.molarMass.recip = true;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.solutionDensity.unit.d.recip())) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = false;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = true;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.substanceDensity.unit.d.mul(this.molarMass.unit.d))) {
            this.substanceDensity.row.show = true;
            this.molarMass.row.show = true;
            this.molarMass.recip = false;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.substanceDensity.unit.d.div(this.molarMass.unit.d))) {
            this.substanceDensity.row.show = true;
            this.molarMass.row.show = true;
            this.molarMass.recip = true;
            this.solutionDensity.row.show = false;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.solutionDensity.unit.d.recip().mul(this.molarMass.unit.d))) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = true;
            this.molarMass.recip = false;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = true;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (residual.equal(this.solutionDensity.unit.d.recip().mul(this.molarMass.unit.d.recip()))) {
            this.substanceDensity.row.show = false;
            this.molarMass.row.show = true;
            this.molarMass.recip = true;
            this.solutionDensity.row.show = true;
            this.solutionDensity.recip = true;
            this.form.underConstructionShow = false;
            this.updateEquation();
            this.form.calculate();
            return;
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            console.log(residual);
        }
        this.form.underConstructionShow = true;
        this.updateEquation();
        this.form.calculate();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calculationLog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calculation_log_sd_calculation_log_component__WEBPACK_IMPORTED_MODULE_5__["SdCalculationLogComponent"])
    ], TotalDoseCalcComponent.prototype, "calculationLog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "concenRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "concenInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('concenUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "concenUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('intakeRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "intakeRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('intakeInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "intakeInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('intakeUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "intakeUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('substanceDensityRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "substanceDensityRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('substanceDensityInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "substanceDensityInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('substanceDensityUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "substanceDensityUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('molarMassRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "molarMassRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('molarMassInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "molarMassInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('solutionDensityRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "solutionDensityRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('solutionDensityInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "solutionDensityInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('solutionDensityUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "solutionDensityUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyWeightRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "bodyWeightRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyWeightInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "bodyWeightInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyWeightUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "bodyWeightUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseRow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_calc_row_sd_calc_row_component__WEBPACK_IMPORTED_MODULE_4__["SdCalcRowComponent"])
    ], TotalDoseCalcComponent.prototype, "doseRow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalDoseCalcComponent.prototype, "doseInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('doseUnits'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sd_select_sd_select_component__WEBPACK_IMPORTED_MODULE_6__["SdSelectComponent"])
    ], TotalDoseCalcComponent.prototype, "doseUnits", void 0);
    TotalDoseCalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-totaldosecalc',
            template: __webpack_require__(/*! ./totaldosecalc.component.html */ "./src/app/totaldosecalc/totaldosecalc.component.html"),
            styles: [__webpack_require__(/*! ./totaldosecalc.component.css */ "./src/app/totaldosecalc/totaldosecalc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalDoseCalcComponent);
    return TotalDoseCalcComponent;
}());



/***/ }),

/***/ "./src/app/toxicology/HED_FACTORS.ts":
/*!*******************************************!*\
  !*** ./src/app/toxicology/HED_FACTORS.ts ***!
  \*******************************************/
/*! exports provided: SPECIES_CONVERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIES_CONVERSION", function() { return SPECIES_CONVERSION; });
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later
var SPECIES_CONVERSION = [
    { species: 'mouse', factor: 12.3 },
    { species: 'hamster', factor: 7.4 },
    { species: 'rat', factor: 6.2 },
    { species: 'ferret', factor: 5.3 },
    { species: 'guinea pig', factor: 4.6 },
    { species: 'rabbit', factor: 3.1 },
    { species: 'dog', factor: 1.8 },
    { species: 'monkey', factor: 3.1 },
    { species: 'marmoset', factor: 6.2 },
    { species: 'squirrel monkey', factor: 5.3 },
    { species: 'baboon', factor: 1.8 },
    { species: 'micro-pig', factor: 1.4 },
    { species: 'mini-pig', factor: 1.1 }
];


/***/ }),

/***/ "./src/app/toxicology/UNIT_LISTS.ts":
/*!******************************************!*\
  !*** ./src/app/toxicology/UNIT_LISTS.ts ***!
  \******************************************/
/*! exports provided: CONCEN_RATIOS_MASS_VOL, CONCEN_RATIOS_VOL_VOL, CONCEN_RATIOS_MOL_VOL, CONCEN_RATIOS_MOL_MASS, CONCEN_RATIOS_MASS_MASS, CONCEN_RATIOS_INHALATION, INTAKE_RATIOS_VOL_TIME, INTAKE_RATIOS_MASS_TIME, INTAKE_RATIOS_INHALATION, WEIGHT_RATIOS, DOSE_RATIOS, DOSE_RATIOS_INHALATION, SATP_RATIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_MASS_VOL", function() { return CONCEN_RATIOS_MASS_VOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_VOL_VOL", function() { return CONCEN_RATIOS_VOL_VOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_MOL_VOL", function() { return CONCEN_RATIOS_MOL_VOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_MOL_MASS", function() { return CONCEN_RATIOS_MOL_MASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_MASS_MASS", function() { return CONCEN_RATIOS_MASS_MASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEN_RATIOS_INHALATION", function() { return CONCEN_RATIOS_INHALATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTAKE_RATIOS_VOL_TIME", function() { return INTAKE_RATIOS_VOL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTAKE_RATIOS_MASS_TIME", function() { return INTAKE_RATIOS_MASS_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTAKE_RATIOS_INHALATION", function() { return INTAKE_RATIOS_INHALATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHT_RATIOS", function() { return WEIGHT_RATIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOSE_RATIOS", function() { return DOSE_RATIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOSE_RATIOS_INHALATION", function() { return DOSE_RATIOS_INHALATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SATP_RATIO", function() { return SATP_RATIO; });
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later
var CONCEN_RATIOS_MASS_VOL = [
    { units: 'mg/L', value: 1 },
    { units: 'g/L', value: 1000 },
    { units: '\u03BCg/L', value: 0.001 },
    { units: 'ppm (w/v)', value: 1 },
    { units: 'ppb (w/v)', value: 0.001 },
    { units: '% (w/v)', value: 10000 }
];
var CONCEN_RATIOS_VOL_VOL = [
    { units: 'mL/L', value: 1000 },
    { units: '\u03BCL/L', value: 1 },
    { units: '\u03BCL/mL', value: 1000 },
    { units: 'ppm (v/v)', value: 1 },
    { units: 'ppb (v/v)', value: 0.001 },
    { units: '% (v/v)', value: 10000 }
];
var CONCEN_RATIOS_MOL_VOL = [
    { units: 'mol/L', value: 1000 },
    { units: 'mmol/L', value: 1 },
    { units: '\u03BCmol/L', value: 0.001 }
];
var CONCEN_RATIOS_MOL_MASS = [
    { units: 'mol/kg', value: 1000 },
    { units: 'mmol/kg', value: 1 },
    { units: '\u03BCmol/kg', value: 0.001 }
];
var CONCEN_RATIOS_MASS_MASS = [
    { units: 'mg/kg', value: 1 },
    { units: '\u03BCg/kg', value: 0.001 }
];
var CONCEN_RATIOS_INHALATION = [
    { units: 'ppm', value: 1 },
    { units: 'ppb', value: 0.001 }
];
var INTAKE_RATIOS_VOL_TIME = [
    { units: 'L/day', value: 1 },
    { units: 'mL/day', value: 0.001 }
];
var INTAKE_RATIOS_MASS_TIME = [
    { units: 'kg/day', value: 1 },
    { units: 'g/day', value: 0.001 }
];
var INTAKE_RATIOS_INHALATION = [
    { units: 'm³/day', value: 1 }
];
var WEIGHT_RATIOS = [
    { units: 'kg', value: 1 },
    { units: 'g', value: 0.001 }
];
var DOSE_RATIOS = [
    { units: 'mg/kg BW/day', value: 1 },
    { units: '\u03BCg/kg BW/day', value: 0.001 },
    { units: 'mol/kg BW/day', value: 1000 },
    { units: 'mmol/kg BW/day', value: 1 }
];
var DOSE_RATIOS_INHALATION = [
    { units: 'mg/kg BW/day', value: 1 },
    { units: '\u03BCg/kg BW/day', value: 0.001 }
];
var SATP_RATIO = 24.45;


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
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
// ToxCalc! by Safe Dose © 2018-2021. See LICENSE file for details.
// SPDX-License-Identifier: GPL-3.0-or-later




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/toxcalc/toxcalc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map