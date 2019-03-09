(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button expand=\"full\" (click)=\"displayListOfNumbers()\">Generate number</ion-button>\n\n  <!-- Displays the top message -->\n  <p text-center *ngIf=\"flag==true\">{{message}}</p>\n\n  <!-- List of Number display -->\n  <ion-grid *ngIf=\"flag==false\">\n    <ion-row class=\"rowNumber\" *ngFor=\"let num of numbers\">\n      {{num}}\n    </ion-row>\n  </ion-grid>\n\n  <!-- Input with a placeholder -->\n  <ion-input placeholder=\"{{placeholder}}\" [(ngModel)]=\"number\" type=\"number\" text-center class=\"userInput\"></ion-input>\n\n  <!-- Check button to check whether the input value is correct or not -->\n  <div text-center>\n    <ion-button (click)=\"userGuess()\">Check</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HomePage = /** @class */ (function () {
    function HomePage(alertController) {
        this.alertController = alertController;
        this.sum = 0; // Holds the total value after calculation
        this.numbers = [];
        this.digits = 100; // Determines the maximum digits of a generated random number e.g: 10 is maximum two digits
        this.rangeOfNumbers = 10; // Determines the maximum number of value generated in the list of numbers
        this.flag = true; // Determines the message to display on the top based on user input
        this.message = "Click on Generate Number"; // The message that is displayed on the top
        this.placeholder = "Enter Input"; // Input field Placeholder text
        this.congratsMessage = "Congratulations!";
        this.sorryMessage = "Sorry! the guess isn't correct";
        // Function definition below
        this.generateRandomNumbers(this.rangeOfNumbers);
    }
    //===============================================================================================
    //===============================================================================================
    /**
      * This function generates the random numbers
      * the number of maximum input is determined by the rangeOfNumbers variable
      */
    HomePage.prototype.generateRandomNumbers = function (maxNumbers) {
        this.numbers = [];
        for (var i = 0; i < maxNumbers; i++) {
            //Generates single random number
            var temp = Math.floor(Math.random() * this.digits);
            if (temp !== 0 && temp > 10) {
                this.sum = this.sum + temp;
                this.numbers.push(temp);
            }
        }
    };
    /**
     * Sets the flag to false thus displays the list of random numbers
     */
    HomePage.prototype.displayListOfNumbers = function () {
        this.flag = false;
        if (this.numbers.length > 0) {
            this.numbers = [];
            this.generateRandomNumbers(this.rangeOfNumbers);
        }
    };
    /**
     * Takes the sum calculated from the user if its not empty or zero
     * Checks whether the guess is correct or not and displays a popup
     */
    HomePage.prototype.userGuess = function () {
        if (this.number && this.flag == false) {
            if (this.sum == this.number) {
                console.log(this.congratsMessage);
                this.congratsPopup('Congrats!!');
                this.generateRandomNumbers(this.rangeOfNumbers);
            }
            else {
                console.log("OOPSss!");
                this.congratsPopup(this.sorryMessage);
                this.generateRandomNumbers(this.rangeOfNumbers);
            }
        }
        else {
            this.number = null;
            //Displays this message in placeholder if Check button is pressed without entering any value
            this.placeholder = "Please input your assumption";
        }
    };
    //Alert
    HomePage.prototype.congratsPopup = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ans:' + this.sum,
                            subHeader: '',
                            message: message,
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map