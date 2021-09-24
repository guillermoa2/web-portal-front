(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Guillermo/Documents/bay-valley-tech/laMar-intern/web-portal-front/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RegisterComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The password must be atleast 8 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The passwords don't match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/sign-in"]; };
class RegisterComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.showLengthMessage = false;
        this.showMatchMessage = false;
        this.registerForm = this.formBuilder.group({ email: [''], password: [''], password2: [''] });
    }
    ngOnInit() {
        this.registerForm.valueChanges.subscribe((e) => {
            if (e.password.length < 8) {
                this.showLengthMessage = true;
            }
            else {
                this.showLengthMessage = false;
            }
            ;
            if (e.password != e.password2) {
                this.showMatchMessage = true;
            }
            else {
                this.showMatchMessage = false;
            }
        });
    }
    onClickRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showLengthMessage == false
                && this.showMatchMessage == false
                && this.registerForm.value.email != ''
                && this.registerForm.value.password != '') {
                // console.log(this.registerForm.value.email)
                const token = yield this.authService.register(this.registerForm.value);
                localStorage.setItem('jwt', token);
                // console.log(token)
            }
            else {
                alert('Invalid credentials');
            }
        });
    }
    ;
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 15, vars: 5, consts: [[1, "container"], [1, "register", 3, "formGroup"], ["type", "text", "formControlName", "email", "placeholder", "Email"], ["type", "text", "formControlName", "password", "placeholder", "Password"], ["type", "text", "formControlName", "password2", "placeholder", "Retype Password"], [3, "click"], ["class", "message", "href", "#", 4, "ngIf"], ["routerLinkActive", "active", 1, "switchBtn", 3, "routerLink"], ["href", "#", 1, "message"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_9_listener() { return ctx.onClickRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_a_11_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_p_12_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLengthMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMatchMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["html[_ngcontent-%COMP%] {\n    margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: rgb(255, 94, 0);\n    color: silver;\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n}\n.register[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: white;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n    justify-content: center;\n    height: auto;\n    width: 300px;\n    border: 1px solid whitesmoke;\n}\nh2[_ngcontent-%COMP%]  {\n    color: black;\n    margin-bottom: 0px;\n}\np[_ngcontent-%COMP%]   {\n    margin-top: 8px;\n    margin-bottom: 40px;\n}\ninput[_ngcontent-%COMP%] {\n    margin: 8px;\n    border: 1px solid lightgray;\n    width: 60%;\n}\n[_ngcontent-%COMP%]::placeholder {\n    color: lightgray;\n}\nbutton[_ngcontent-%COMP%] {\n    background-color: rgb(255, 94, 0);\n    border: none;\n    border-radius: 30px;\n    color: white;\n    height: 25px;\n    margin-bottom: 8px;\n    width: 61%;\n}\n.switchBtn[_ngcontent-%COMP%] {\n    border: 3px solid;\n    background-color: white;\n    color: rgb(255, 94, 0);\n    margin-bottom: 10px;\n    margin-top: 8px;\n}\n.message[_ngcontent-%COMP%] {\n    align-items: start;\n    color: red;\n    display: flex;\n    font-size: 90%;\n    flex-wrap: wrap;\n    margin-top: 8px;\n    margin-bottom: 8 px;\n    text-decoration: none;\n    text-align: center;\n    width: 61%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2QiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTQsIDApO1xuICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLnJlZ2lzdGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuaDIgIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5wICAge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTQsIDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHdpZHRoOiA2MSU7XG59XG5cbi5zd2l0Y2hCdG4ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiByZ2IoMjU1LCA5NCwgMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOCBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2MSU7XG59Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "header"], [1, "content"], ["src", "assets/images/Image 13.png", "alt", "Mission Graduates Logo"], [1, "body"], [1, "members-card"], ["id", "members-card-title"], ["inset", ""], ["id", "members-items"], ["mat-card-avatar", "", 1, "members-header-image1", "members-item"], ["mat-card-avatar", "", 1, "members-header-image2", "members-item"], ["mat-card-avatar", "", 1, "members-header-image3", "members-item"], ["mat-card-avatar", "", 1, "members-header-image4", "members-item"], [1, "link", "members-item"], [1, "committees-card"], ["id", "committees-card-title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Member Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edward Kaufman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Robert Benavidez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Natalie Guandique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Catherine Marroquin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View all board members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Committees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #FAFAFA;\n  color: #5C5C5C;\n}\n.header[_ngcontent-%COMP%]  {\n  align-items: center;\n  background-color: #D5D5D5;\n  display: flex;\n  height: 35%;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%]  {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 10%;\n  width: 70vw;\n}\n.link[_ngcontent-%COMP%] {\n  color: #41AAE2;\n}\nmat-card[_ngcontent-%COMP%] {\n  color: #5C5C5C;\n}\n.members-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 350px;\n}\n#members-items[_ngcontent-%COMP%] {\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n}\n\n\n.members-header-image1[_ngcontent-%COMP%] {\n  background-image: url('Image 1.png');\n  background-size: cover;\n}\n.members-header-image2[_ngcontent-%COMP%] {\n  background-image: url('Image 2.png');\n  background-size: cover;\n}\n.members-header-image3[_ngcontent-%COMP%] {\n  background-image: url('Image 3.png');\n  background-size: cover;\n}\n.members-header-image4[_ngcontent-%COMP%] {\n  background-image: url('Image 4.png');\n  background-size: cover;\n}\n.committees-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: 200px;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2Qjs7QUFFL0I7QUFHQTttQkFDbUI7QUFDakIscUJBQXFCO0FBRXZCO0VBQ0Usb0NBQThEO0VBQzlELHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0NBQThEO0VBQzlELHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0NBQThEO0VBQzlELHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0NBQThEO0VBQzlELHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIGNvbG9yOiAjNUM1QzVDO1xufVxuLmhlYWRlciAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENUQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM1JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudCAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIHdpZHRoOiA3MHZ3O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNDFBQUUyO1xufVxuXG5tYXQtY2FyZCB7XG4gIGNvbG9yOiAjNUM1QzVDO1xufVxuXG4ubWVtYmVycy1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbiNtZW1iZXJzLWl0ZW1zIHtcbiAgaGVpZ2h0OiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG59XG5cblxuLyogI21lbWJlcnMtY2FyZC10aXRsZSB7XG4gIC8qIG1hcmdpbjogMHB4OyAqL1xuICAvKiBkaXNwbGF5OiBibG9jazsgfSovXG5cbi5tZW1iZXJzLWhlYWRlci1pbWFnZTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL21lbWJlcnMvSW1hZ2UgMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tZW1iZXJzLWhlYWRlci1pbWFnZTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL21lbWJlcnMvSW1hZ2UgMi5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tZW1iZXJzLWhlYWRlci1pbWFnZTMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL21lbWJlcnMvSW1hZ2UgMy5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tZW1iZXJzLWhlYWRlci1pbWFnZTQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL21lbWJlcnMvSW1hZ2UgNC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbW1pdHRlZXMtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FyLO":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 2, vars: 0, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RZyK":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/register"]; };
class SignInComponent {
    constructor(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.loginForm = this.formBuilder.group({ email: [''], password: [''] });
    }
    ngOnInit() {
    }
    onClickLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const input = yield this.authService.login(this.loginForm.value);
            // console.log(token)
            // console.log(token == true)
            if (input.token) {
                localStorage.setItem('jwt', input.token);
                this.router.navigate(['/main']);
                // console.log('hi')
            }
            else {
                alert('invalid');
            }
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 14, vars: 3, consts: [[1, "container"], [1, "login", 3, "formGroup"], ["type", "text", "formControlName", "email", "placeholder", "Email"], ["type", "text", "formControlName", "password", "placeholder", "Password"], [3, "click"], ["href", "#"], ["routerLinkActive", "active", 1, "switchBtn", 3, "routerLink"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_8_listener() { return ctx.onClickLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "I forgot my password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["html[_ngcontent-%COMP%] {\n    margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: rgb(255, 94, 0);\n    display: flex;\n    justify-content: center;\n    height: 100vh;\n    color: silver;\n\n}\n.login[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: white;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    font-family: Arial, Helvetica, sans-serif;\n    justify-content: center;\n    height: auto;\n    width: 300px;\n    border: 1px solid whitesmoke;\n}\nh2[_ngcontent-%COMP%]  {\n    color: black;\n    margin-bottom: 0px;\n}\np[_ngcontent-%COMP%]   {\n    margin-top: 8px;\n    margin-bottom: 40px;\n}\ninput[_ngcontent-%COMP%] {\n    margin: 8px;\n    border: 1px solid lightgray;\n    width: 60%;\n}\n[_ngcontent-%COMP%]::placeholder {\n    color: lightgray;\n}\nbutton[_ngcontent-%COMP%] {\n    background-color: rgb(255, 94, 0);\n    border: none;\n    border-radius: 30px;\n    color: white;\n    height: 25px;\n    width: 61%;\n}\n.switchBtn[_ngcontent-%COMP%] {\n    border: 3px solid;\n    background-color: white;\n    color: rgb(255, 94, 0);\n    margin-bottom: 10px;\n\n}\na[_ngcontent-%COMP%] {\n    align-items: start;\n    color: lightskyblue;\n    display: flex;\n    font-size: 70%;\n    margin-top: 16px;\n    margin-bottom: 16px;\n    text-decoration: none;\n    text-align: left;\n    width: 61%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTQsIDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogc2lsdmVyO1xuXG59XG4ubG9naW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG5oMiAge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbnAgICB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlucHV0IHtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NCwgMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogNjElO1xufVxuXG4uc3dpdGNoQnRuIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuYSB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDYxJTtcblxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'web-portal-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.req('post', 'http://localhost:5000/login', body);
            // console.log(res)
            return res;
        });
    }
    register(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.req('post', 'http://localhost:5000/register', body);
            return res;
        });
    }
    req(method, url, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (body) {
                return this.http[method](url, body, {}).toPromise().catch(err => console.log(err));
            }
            else {
                return this.http[method](url, {}).toPromise().catch(err => console.log(err));
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const appRoutes = [
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "XpXM")).then(m => m.MainModule)
    },
    // {path: '**', component: ErrorPageComponent},
    { path: '**', redirectTo: 'sign-in' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
