webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(171);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__access_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['../login']);
        }
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__access_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__access_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var closeGuard = (function () {
    function closeGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    closeGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            console.log("not logged in ");
            this.router.navigate(['../home']);
        }
        return !this.authService.isAuthenticated();
    };
    return closeGuard;
}());
closeGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__access_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__access_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], closeGuard);

var _a, _b;
//# sourceMappingURL=close.guard.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent() {
        this.error = false;
        this.success = false;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        $('.inverted.pointing.menu').css({
            'background-color': 'black'
        });
        $('.pusher').css({
            'background': 'url("")',
            'background-color': 'white'
        });
        $('.masthead.segment').css({
            'min-height': '0' + 'px',
            'background-color': '#2962FF',
            'background-image': 'url("")',
        });
        $('#here').empty();
    };
    ForgotpasswordComponent.prototype.onsubmit = function (s) {
        var _this = this;
        $('.forgotdim.dimmer').dimmer('show');
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(s).then(function () {
            _this.error = false;
            _this.success = true;
            $('.forgotdim.dimmer').dimmer('hide');
        }, function (error) {
            if (error.code == 'auth/user-not-found') {
                _this.success = false;
                _this.error = true;
                $('.forgotdim.dimmer').dimmer('hide');
            }
        });
    };
    return ForgotpasswordComponent;
}());
ForgotpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(228),
    }),
    __metadata("design:paramtypes", [])
], ForgotpasswordComponent);

//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = comingTransition;

function comingTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('comingState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
        ])
    ]);
}
//# sourceMappingURL=forcoming.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fly_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newtransition_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forcoming__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(data) {
        this.data = data;
        this.numberoftimes = 0;
        this.orderdetails = [];
        this.show = true;
        this.pos = { lat: '', lng: '' };
        this.successpre = false;
        this.errorpre = false;
        this.erroritem = false;
        this.added = false;
        this.checkthis = true;
        this.item = {
            name: 'add something',
            quantity: 1,
            weight: 1
        };
        this.addForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](),
            'quantity': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](),
            'weight': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]()
        });
        this.myForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required]),
            'address': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](),
            'phonenum': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required]),
            'filename': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]({ value: 'To Check the list', disabled: true }),
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#addche').addClass('disabled');
        $('#check').change(function () {
            var g = $('#check').is(":checked");
            _this.checkthis = !g;
            if ($('#check').is(":checked")) {
                $('#addche').removeClass('disabled');
            }
            else {
                $('#addche').addClass('disabled');
            }
            console.log(_this.checkthis);
        });
        $('.pusher').css({
            'background-color': '#fed463'
        });
        $('.masthead').css({
            'background-color': '#58585a',
        });
        $('#signsomething').remove();
        $('#updatesomething').remove();
        this.data.getdata();
        console.log(this.orderdetails.length);
        this.orderdetails = this.data.previous;
        this.data.getdata();
        $('#here').empty();
    };
    //----------------------------------This is regarding location access ---------------------
    HomeComponent.prototype.get = function (s, p) {
        this.position = p;
        this.address = s;
        $('#add').val(s);
        $('#add').value = s;
        $('.ui.modal.test')
            .modal('hide');
    };
    HomeComponent.prototype.changess = function () {
        return this.progresss;
    };
    HomeComponent.prototype.getLocations = function () {
        var _this = this;
        if (navigator.geolocation) {
            $('.locationdim.dimmer').dimmer({
                on: false,
                opacity: 0.04
            }).dimmer('show');
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': _this.pos }, function (results, status) {
                    if (status === 'OK') {
                        _this.results = results;
                        $('.locationdim.dimmer').dimmer('hide');
                        $('.ui.modal.test')
                            .modal('show');
                        $('.ui.modal.test')
                            .modal('refresh');
                    }
                    else {
                        $('.locationdim.dimmer').dimmer('hide');
                        console.log(status);
                    }
                });
            }, function (error) {
                $('.locationdim.dimmer').dimmer('hide');
                console.log(error);
            });
        }
    };
    HomeComponent.prototype.alert = function () {
        console.log(this.pos);
        console.log(this.myForm.value);
        if (!$('#check').is(":checked")) {
            $('.ui.modal.test1')
                .modal('show');
        }
        else {
            $('#temporary1').empty();
            $('#temporary1').append($('#add').val());
            $('.ui.modal.selectlocating')
                .modal('show');
        }
    };
    HomeComponent.prototype.newalert = function (s2) {
        var _this = this;
        $('.ui.modal.selectlocating')
            .modal('hide');
        console.log(s2);
        var s = 1;
        console.log(s2);
        if (s2) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': $('#add').val() }, function (results, status) {
                if (status == 'OK') {
                    _this.pos = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
            $('.ui.modal.test1')
                .modal('show');
        }
        else {
            console.log(this.data.data);
            var g = Object.keys(this.data.data).map(function (k) {
                return _this.data.data[k];
            });
            g = g[0];
            this.pos = {
                lat: g.lat,
                lng: g.lng
            };
            $('.ui.modal.test1')
                .modal('show');
        }
    };
    //---------------------This is all regarding final submittion ----------------
    HomeComponent.prototype.Onsubmit = function () {
        this.save();
        $('#progress').empty();
        $('#progress').append('<div class="ui inverted segment" style="margin-top: 0px"> <div class="ui active inverted loader"></div> <br> <br> <br><div style="color: white;text-align: center" class="chaneg"></div></div>');
        $("html, body").animate({ scrollTop: 200 }, "slow");
        this.progresss = 0;
        var date = new Date().toDateString();
        this.orders = {
            'id': Math.floor(Math.random() * 2000000000000),
            'name': this.myForm.get('name').value,
            'address': $('#add').val(),
            'number': this.myForm.get('phonenum').value,
            'date': date,
            'file': this.orderdetails,
            'check': false,
            'pos': this.pos,
            'random': Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
            'usercheck': false,
            'previousam': 0
        };
        this.data.updates(this.orders);
        console.log("asdf");
        this.myForm.reset();
        this.numberoftimes = 0;
    };
    //---------------------------regarding order adding saving -------------------
    HomeComponent.prototype.checking = function () {
        var _this = this;
        if (this.data.data && !this.numberoftimes) {
            var g = Object.keys(this.data.data).map(function (k) {
                return _this.data.data[k];
            });
            g = g[0];
            this.pos = {
                lat: g.lat,
                lng: g.lng
            };
            this.myForm.setValue({
                name: g.name,
                address: g.address,
                phonenum: g.phonenumber,
                filename: 'To Check the List'
            });
            this.numberoftimes = 1;
        }
        if (this.data.previous) {
            this.orderdetails = this.data.previous;
            return true;
        }
        return false;
    };
    HomeComponent.prototype.delete = function (item) {
        console.log(item);
        var index = this.orderdetails.indexOf(item);
        this.orderdetails.splice(index, 1);
        if (this.orderdetails.length == 0) {
            console.log("deleting");
            console.log(this.item);
            this.orderdetails.push(this.item);
        }
    };
    HomeComponent.prototype.adds = function (s) {
        var _this = this;
        console.log(s);
        if (this.addForm.get('name').value && this.addForm.get('quantity').value) {
            this.erroritem = false;
            this.added = true;
            this.myForm.patchValue({
                'filename': 'To add more items'
            });
            var f = void 0;
            f = {
                name: this.addForm.get('name').value,
                quantity: this.addForm.get('quantity').value,
                weight: this.addForm.get('weight').value
            };
            this.orderdetails.push(f);
            var index = this.orderdetails.map(function (e) { return e.name; }).indexOf('add something');
            console.log(index);
            if (index != -1) {
                this.orderdetails.splice(index, 1);
            }
            this.addForm.reset();
            $('#addess')
                .modal({
                closable: false
            }).modal('refresh');
        }
        else {
            this.erroritem = true;
            setTimeout(function () {
                _this.erroritem = false;
            }, 5000);
        }
    };
    HomeComponent.prototype.add = function (s) {
        var _this = this;
        console.log(s);
        if (this.addForm.get('name').value && this.addForm.get('quantity').value) {
            this.erroritem = false;
            var f = void 0;
            f = {
                'name': this.addForm.get('name').value,
                'quantity': this.addForm.get('quantity').value,
                'weight': this.addForm.get('weight').value
            };
            this.orderdetails.push(f);
            var index = this.orderdetails.map(function (e) { return e.name; }).indexOf('add something');
            if (index != -1) {
                this.orderdetails.splice(index, 1);
            }
            this.addForm.reset();
            $('#addess')
                .modal({
                closable: false
            }).modal('refresh');
        }
        else {
            this.erroritem = true;
            setTimeout(function () {
                _this.erroritem = false;
            }, 5000);
        }
    };
    HomeComponent.prototype.once = function () {
        return this.added;
    };
    HomeComponent.prototype.startadd = function () {
        $('#addess')
            .modal({
            closable: false
        }).modal('show');
    };
    HomeComponent.prototype.storeorder = function () {
        $('#addees')
            .modal({
            observeChanges: true,
            closable: false
        }).modal('show');
    };
    HomeComponent.prototype.close = function () {
        $('#addess').modal({
            observeChanges: true,
        })
            .modal('hide');
    };
    HomeComponent.prototype.save = function () {
        var _this = this;
        if (!this.orderdetails.length) {
            this.errorpre = true;
            setTimeout(function () {
                _this.errorpre = false;
            }, 5000);
        }
        else {
            console.log(this.orderdetails);
            this.data.save(this.orderdetails);
            this.successpre = true;
            setTimeout(function () {
                _this.successpre = false;
            }, 5000);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'home',
        template: __webpack_require__(229),
        styles: ["\n  @colors: red, green, blue, violet, pink, black, white;\n.ui.toggle.checkbox {\n    .-(@i: length(@colors)) when (@i > 0) {\n        @c: extract(@colors, @i);\n        &.@{c} {\n            input:checked~label {\n                color: @c;\n                &:before { background-color: @c; }\n            }\n        }\n        .-((@i - 1));\n    } .-;\n}\n  #come{\n  animation: type 4s steps(60, end); \n  \n  }\n  @keyframes type{ \n  from { width: 0; } \n} \n body {\n      background-color: rgba(0,0,0,.87);\n    }\n    body > .grid {\n      height: 100%;\n    }\n    .image {\n      margin-top: -100px;\n    }\n    .column {\n      max-width: 450px;\n    }\n.masthead.segment {\n    min-height: 0px;\n  }\n  .grid{\n  padding-top:9em;\n  }\n \n"],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fly_component__["a" /* flyTransition */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__newtransition_component__["a" /* getTransition */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__forcoming__["a" /* comingTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
        this.k = 0;
        this.t = 0;
        this.updateddetails = [];
        this.mapaddress = "https://www.google.co.in/maps/dir/";
    }
    MapComponent.prototype.ngOnInit = function () {
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('.locationdim.dimmer').remove();
        $('.ui.modal.test').remove();
        $('.ui.modal.test1').remove();
        $('#updatesomething').remove();
        $('#addess')
            .remove();
        $('#addees')
            .remove();
    };
    MapComponent.prototype.startmap = function () {
        var _this = this;
        var g = Object.keys(this.item.map).map(function (k) { return _this.item.map[k]; });
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById(this.item.id.toString()), {
            zoom: 3,
            center: { lat: this.item.pos.lat, lng: this.item.pos.lng }
        });
        this.mapaddress = this.mapaddress + this.item.pos.lat + ',' + this.item.pos.lng + '/' + this.item.address + '/' + '@';
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById(this.item.random));
        this.mapaddress = this.mapaddress + g[0].lat + ',' + g[0].lng;
        if (g.length == 1) {
            directionsService.route({
                origin: { lat: this.item.pos.lat, lng: this.item.pos.lng },
                destination: g[0],
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
        else {
            g.splice(g.length - 1, 1);
            var f = [];
            for (var _i = 0, g_1 = g; _i < g_1.length; _i++) {
                var i = g_1[_i];
                var g_2 = {
                    'location': i,
                    'stopover': true
                };
                f.push(g_2);
            }
            directionsService.route({
                origin: { lat: this.item.pos.lat, lng: this.item.pos.lng },
                destination: g[g.length - 1],
                waypoints: f,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    };
    MapComponent.prototype.checking = function () {
        var _this = this;
        if (this.item.map && this.item.ready) {
            var g = Object.keys(this.item.map).map(function (k) {
                return _this.item.map[k];
            });
            if (document.getElementById(this.item.id.toString()) && g.length && this.k == 0) {
                this.startmap();
                this.k = 1;
            }
            if (!this.t) {
                var up = Object.keys(this.item.updated).map(function (k) {
                    return _this.item.updated[k];
                });
                var _loop_1 = function (i) {
                    var h = Object.keys(i).map(function (k) {
                        return i[k];
                    });
                    for (var _i = 0, h_1 = h; _i < h_1.length; _i++) {
                        var j = h_1[_i];
                        this_1.updateddetails.push(j);
                    }
                };
                var this_1 = this;
                for (var _i = 0, up_1 = up; _i < up_1.length; _i++) {
                    var i = up_1[_i];
                    _loop_1(i);
                }
                this.t = 1;
            }
            return true;
        }
        else {
            return false;
        }
    };
    MapComponent.prototype.see = function () {
        $('#' + this.item.id + 'i').modal({
            observeChanges: true,
        }).modal('show');
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "item", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'map',
        template: __webpack_require__(230)
    })
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newtransition_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var orderComponent = (function () {
    function orderComponent(data) {
        this.data = data;
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('.locationdim.dimmer').remove();
        $('.ui.modal.test').remove();
        $('.ui.modal.test1').remove();
        $('#updatesomething').remove();
        $('#addess')
            .remove();
        $('#addees')
            .remove();
    }
    orderComponent.prototype.ngOnInit = function () {
        $('.masthead').css({
            'background-color': '#58585a',
        });
        $('.pusher').css({
            'background-color': 'rgb(103, 152, 209)'
        });
        $('#here').empty();
        this.data.getdata();
        $('.ui.accordion')
            .accordion();
    };
    orderComponent.prototype.getdata = function () {
        var _this = this;
        this.details = this.data.data;
        if (this.details) {
            this.details = Object.keys(this.data.data).map(function (k) { return _this.data.data[k]; });
            this.details = Object.keys(this.details[0]).map(function (k) { return _this.details[0][k]; });
            this.details = Object.keys(this.details[5]).map(function (k) { return _this.details[5][k]; });
            return true;
        }
        else {
            return false;
        }
    };
    return orderComponent;
}());
orderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'order',
        template: __webpack_require__(231),
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__newtransition_component__["a" /* getTransition */])()],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object])
], orderComponent);

var _a;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var profileComponent = (function () {
    function profileComponent(data) {
        this.data = data;
        this.k = 0;
        this.checkdet = false;
        this.checkpass = false;
        this.checkloc = false;
        this.success = false;
        this.error = false;
        this.same = false;
        this.sameloc = false;
        $('.ui.modal.selectlocating').remove();
        $('.locationdim.dimmer').remove();
        $('.ui.modal.test').remove();
        $('.ui.modal.test1').remove();
        $('#updatesomething').remove();
        $('#addess')
            .remove();
        $('#addees')
            .remove();
        this.deform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            'phonenum': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
        this.passwordform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'newpassword': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            'checkpassword': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('')
        });
    }
    profileComponent.prototype.checking = function () {
        var _this = this;
        if (this.k == 0 && this.data.data) {
            var g = Object.keys(this.data.data).map(function (k) {
                return _this.data.data[k];
            });
            g = g[0];
            this.deform.setValue({
                name: g.name,
                phonenum: g.phonenumber,
            });
            this.detfo = this.deform.value;
            $('#updateloc').val(g.address);
            $('#updateloc').value = g.address;
            this.locfo = $('#updateloc').val();
            this.k = 1;
        }
    };
    profileComponent.prototype.make = function () {
        this.checkdet = true;
    };
    profileComponent.prototype.makepass = function () {
        this.checkpass = true;
    };
    profileComponent.prototype.makeloc = function () {
        this.checkloc = true;
    };
    profileComponent.prototype.back = function () {
        this.checkdet = false;
    };
    profileComponent.prototype.backpass = function () {
        this.checkpass = false;
    };
    profileComponent.prototype.backloc = function () {
        this.checkloc = false;
    };
    profileComponent.prototype.updatedet = function () {
        var _this = this;
        if (this.detfo.name == this.deform.get('name').value && this.detfo.phonenum == this.deform.get('phonenum').value) {
            this.checkdet = false;
            this.same = true;
            setTimeout(function () {
                _this.same = false;
            }, 5000);
        }
        else {
            $('.updatingdetails.dimmer').dimmer('show');
            this.checkdet = false;
            this.data.updatedetailss(this.deform.get('name').value, this.deform.get('phonenum').value);
        }
    };
    profileComponent.prototype.updatepass = function () {
        var _this = this;
        $('.updatingdetails.dimmer').dimmer('show');
        this.checkpass = false;
        var user = firebase.auth().currentUser;
        user.updatePassword(this.passwordform.get('newpassword').value).then(function (data) {
            console.log(data);
            $('.updatingdetails.dimmer').dimmer('hide');
            _this.data.success = true;
            setTimeout(function () {
                _this.data.success = false;
            }, 5000);
        }, function (error) {
            console.log(error);
            $('.updatingdetails.dimmer').dimmer('hide');
            _this.data.error = true;
            setTimeout(function () {
                _this.data.error = false;
            }, 5000);
        });
        this.passwordform.reset();
    };
    profileComponent.prototype.updateloc = function () {
        var _this = this;
        if (this.locfo == $('#updateloc').val()) {
            this.checkloc = false;
            this.sameloc = true;
            setTimeout(function () {
                _this.sameloc = false;
            }, 5000);
        }
        else {
            if (this.pos.lat) {
                $('.updatingdetails.dimmer').dimmer('show');
                this.checkloc = false;
                this.data.updatelocation(this.pos, this.address);
            }
            else {
                this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 5000);
            }
        }
    };
    profileComponent.prototype.matchs = function () {
        if (this.passwordform.get('newpassword').value == this.passwordform.get('checkpassword').value) {
            $('.refie').removeClass('error');
            return true;
        }
        else {
            $('.refie').addClass('error');
            return false;
        }
    };
    profileComponent.prototype.get = function (s) {
        this.address = s;
        console.log(this.address);
        console.log($('#signadd'));
        $('#updateloc').val(s);
        $('#updateloc').value = s;
        $('#updatesomething').modal('hide');
    };
    profileComponent.prototype.getLocations = function () {
        var _this = this;
        if (navigator.geolocation) {
            $('.locupdate.dimmer').dimmer({
                on: false,
                opacity: 0.04
            }).dimmer('show');
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': _this.pos }, function (results, status) {
                    if (status === 'OK') {
                        _this.results = results;
                        console.log(_this.results);
                        $('.locupdate.dimmer').dimmer('hide');
                        $('#updatesomething').modal({
                            observable: true
                        }).modal('show');
                        $('#updatesomething').modal({
                            observable: true
                        }).modal('refresh');
                    }
                    else {
                        $('.locupdate.dimmer').dimmer('hide');
                        console.log(status);
                    }
                });
            }, function (error) {
                $('.locupdate.dimmer').dimmer('hide');
                console.log(error);
            });
        }
    };
    return profileComponent;
}());
profileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'profile',
        template: __webpack_require__(232),
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object])
], profileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        return value.slice().reverse();
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logo_transition__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(de, router, http) {
        this.de = de;
        this.router = router;
        this.http = http;
        this.toogle = 'in';
        this.k = 0;
        this.g = ['G', 'o', 'l', 'a', 'z', 'y'];
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('#updatesomething').remove();
        $(window).resize(function () {
            console.log($(window).width());
            if ($(window).width() < 680) {
                console.log("high");
                $('.copy').css({
                    'display': 'none'
                });
            }
            else {
                $('.copy').css({
                    'display': 'inline'
                });
            }
        });
        if ($(window).width() < 680) {
            console.log("high");
            $('.copy').css({
                'display': 'none'
            });
        }
        else {
            $('.copy').css({
                'display': 'inline'
            });
        }
        $('.ui.sidebar').sidebar('setting', 'transition', 'scale down')
            .sidebar('attach events', '.toc.item');
        if (this.de.isAuthenticated()) {
            this.router.navigate(['../home']);
        }
    };
    AppComponent.prototype.accesss = function () {
        if (this.de.isAuthenticated() && this.k == 0) {
            this.router.navigate(['./home']);
            this.k = 1;
        }
        return this.de.isAuthenticated();
    };
    AppComponent.prototype.check = function () {
        var s = document.getElementsByClassName('masthead')[0];
        $('.masthead')
            .visibility({
            once: false,
            onBottomPassed: function () {
                this.j = 'y';
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function () {
                this.j = 'n';
                $('.fixed.menu').transition('fade out');
            }
        });
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
    };
    AppComponent.prototype.logout = function (event) {
        $('.ui.modal.test').remove();
        $('.ui.modal.test1').remove();
        $('#addess')
            .remove();
        $('#addees')
            .remove();
        event.preventDefault();
        console.log("logging out");
        this.de.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(233),
        styles: [__webpack_require__(225)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logo_transition__["a" /* logoTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hello_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__afterLogin_home_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__afterLogin_order_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dataservice_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__access_service_access_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contactus_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__access_service_auth_guard__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__afterLogin_map_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__afterLogin_reverse_pipe__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__access_service_forgotpassword_forgotpassword_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__afterLogin_profile_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reloadcomponent__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__onfocus_directive__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/index', pathMatch: 'full' },
                { path: 'index', component: __WEBPACK_IMPORTED_MODULE_7__main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__["a" /* closeGuard */]] },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__afterLogin_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__access_service_auth_guard__["a" /* AuthGuard */]] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__["a" /* closeGuard */]] },
                { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__["a" /* closeGuard */]] },
                { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_11__afterLogin_order_component__["a" /* orderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__access_service_auth_guard__["a" /* AuthGuard */]] },
                { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_14__contactus_component__["a" /* ContactComponent */] },
                { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_19__access_service_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__["a" /* closeGuard */]] },
                { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_20__afterLogin_profile_component__["a" /* profileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__access_service_auth_guard__["a" /* AuthGuard */]] },
                { path: 'reload', component: __WEBPACK_IMPORTED_MODULE_22__reloadcomponent__["a" /* reloadcomponent */] }
            ])],
        declarations: [__WEBPACK_IMPORTED_MODULE_23__onfocus_directive__["a" /* OnFocusDirective */], __WEBPACK_IMPORTED_MODULE_18__afterLogin_reverse_pipe__["a" /* ReversePipe */], __WEBPACK_IMPORTED_MODULE_19__access_service_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */], __WEBPACK_IMPORTED_MODULE_20__afterLogin_profile_component__["a" /* profileComponent */], __WEBPACK_IMPORTED_MODULE_22__reloadcomponent__["a" /* reloadcomponent */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_17__afterLogin_map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_11__afterLogin_order_component__["a" /* orderComponent */], __WEBPACK_IMPORTED_MODULE_14__contactus_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_10__afterLogin_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_9__hello_component__["a" /* HelloComponent */], __WEBPACK_IMPORTED_MODULE_8__signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_19__access_service_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__dataservice_data_service__["a" /* dataService */], __WEBPACK_IMPORTED_MODULE_13__access_service_access_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__access_service_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__access_service_close_guard__["a" /* closeGuard */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squeeze_tranisition__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(de) {
        this.de = de;
        this.submitted = false;
        this.feedbackform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]),
            'texts': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required])
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('#updatesomething').remove();
        $('.locationdim.dimmer').remove();
        $('.ui.modal.test').remove();
        $('.ui.modal.test1').remove();
        $('#addess')
            .remove();
        $('#addees')
            .remove();
        $('.masthead').css({
            'background-color': '#6798d1',
        });
        $('.pusher').css({
            'background-color': 'white'
        });
        $('#here').empty();
    };
    ContactComponent.prototype.feedback = function () {
        this.de.feedbacks(this.feedbackform.value);
        this.feedbackform.reset();
        this.submitted = true;
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'cont',
        template: __webpack_require__(234),
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__squeeze_tranisition__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataservice_data_service__["a" /* dataService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = flyTransition;

function flyTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('herosState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500)
        ])
    ]);
}
//# sourceMappingURL=fly.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelloComponent = (function () {
    function HelloComponent() {
        this.state = 'inactive';
    }
    HelloComponent.prototype.toggleMove = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    return HelloComponent;
}());
HelloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'hello',
        template: "\n    <div class=\"row\">\n        <div class=\"columns\">\n            <button (click)=\"toggleMove()\">Press me for animation</button>\n        </div>\n        <div class=\"columns\">\n            <div id=\"content\" [@focusPanel]='state' [@movePanel]='state'>Look at me animate</div>\n        </div>\n    </div>\n    ",
        styles: ["\n        button { font-size:1.8em; }\n        #content { padding:30px; background:#eeeeee; }\n    "],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('focusPanel', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({
                    transform: 'scale(1)',
                    backgroundColor: '#eee'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({
                    transform: 'scale(1.1)',
                    backgroundColor: '#cfd8dc'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('100ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* trigger */])('movePanel', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])(600, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ])
            ])
        ]
    })
], HelloComponent);

//# sourceMappingURL=hello.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__access_service_access_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(acc, router) {
        this.acc = acc;
        this.router = router;
        this.h = 'in';
        this.myloginform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('#updatesomething').remove();
        var user = firebase.auth().currentUser;
        if (user) {
            this.router.navigate(['./home']);
        }
        if (this.acc.isAuthenticated()) {
            this.router.navigate(['./home']);
        }
        $('.pusher').css({
            'background-color': '#fed463'
        });
        $('.masthead').css({
            'background-color': '#58585a',
        });
        $('#here').empty();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        $('.logindim.dimmer').dimmer({
            on: false,
            opacity: 0.04
        }).dimmer('show');
        this.acc.userlogin(this.myloginform.value);
    };
    LoginComponent.prototype.wrong = function () {
        return this.acc.wrong;
    };
    LoginComponent.prototype.onFocus = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'login',
        template: __webpack_require__(235),
        styles: ["\n body {\n      background-color: rgba(0,0,0,.87);\n    }\n    body > .grid {\n      height: 100%;\n    }\n    .image {\n      margin-top: -100px;\n    }\n    .column {\n      max-width: 450px;\n    }\n.masthead.segment {\n    min-height: 0px;\n  }\n  .grid{\n  margin-top:9em;\n  }\n .tn_focus\n {\n  outline: none;\n  border-color: red;\n  box-shadow: 0 0 10px #9ecaed;\n }\n"],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__access_service_access_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__access_service_access_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = logoTransition;

function logoTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('logoState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(3000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ])
    ]);
}
//# sourceMappingURL=logo.transition.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(router, de) {
        this.router = router;
        this.de = de;
        this.h = 'in';
    }
    MainComponent.prototype.ngOnInit = function () {
        $('.masthead').css({
            'background-color': '#6798d1',
        });
        var f = this.de.fsize - $('.pushermain').height();
        console.log(this.de.fsize);
        console.log(f);
        if ($(window).width() < 990) {
            $('#homepage').css({
                'height': 'auto'
            });
            console.log("hi");
            $('.pathimg').hide();
            $('.straight').show();
        }
        else {
            $('#homepage').css({
                'height': f
            });
            console.log("no");
            $('.pathimg').show();
            $('.straight').hide();
        }
        $(window).resize(function () {
            console.log($(window).width());
            if ($(window).width() < 980) {
                $('#homepage').css({
                    'height': 'auto'
                });
                console.log("hi");
                $('.pathimg').hide();
                $('.straight').show();
            }
            else {
                $('#homepage').css({
                    'height': f
                });
                console.log("no");
                $('.pathimg').show();
                $('.straight').hide();
            }
        });
        $('.ui.modal.selectlocating').remove();
        $('.ui.modal.selectlocating1').remove();
        $('#updatesomething').remove();
        $(document).ready(function () {
            $('#signsomething').remove();
            $('.mainhead').css({
                'font-family': '"Gloria Hallelujah", cursive'
            });
            $('.below1').typed({
                strings: ["Progress isn't made by early risers. It's made by lazy men trying to find easier ways to do something."],
                typeSpeed: 1
            });
            $('.typed-cursor').remove();
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'main',
        template: __webpack_require__(236),
        styles: [__webpack_require__(226)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataservice_data_service__["a" /* dataService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnFocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnFocusDirective = (function () {
    function OnFocusDirective(_el, renderer) {
        this._el = _el;
        this.renderer = renderer;
        this.el = this._el;
    }
    OnFocusDirective.prototype.onFocus = function (e) {
        console.log("hello");
        console.log(this.el.nativeElement.classList[0]);
        var str = "label." + this.el.nativeElement.classList[0];
        $(str).css({
            'font-size': '200%'
        });
        this.renderer.setElementClass(this._el.nativeElement, 'tn_focus', true);
        return;
    };
    OnFocusDirective.prototype.onblur = function (e) {
        var str = "label." + this.el.nativeElement.classList[0];
        $(str).css({
            'font-size': '100%'
        });
        this.renderer.setElementClass(this._el.nativeElement, 'tn_focus', false);
        return;
    };
    return OnFocusDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnFocusDirective.prototype, "onFocus", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnFocusDirective.prototype, "onblur", null);
OnFocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[onFocus]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer */]) === "function" && _b || Object])
], OnFocusDirective);

var _a, _b;
//# sourceMappingURL=onfocus.directive.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reloadcomponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var reloadcomponent = (function () {
    function reloadcomponent() {
        $('.pushermain').remove();
        $(document).ready(function () {
            var i = 2;
            setInterval(function () {
                if (i % 2 == 0) {
                    var alternate = anime({
                        targets: ['#alternate'],
                        color: [
                            { value: '#fed463' },
                            { value: '#6798d1' },
                            { value: '#58585a' },
                            { value: '#f26964' }
                        ],
                        translateX: -500,
                        direction: 'alternate',
                        duration: 3000,
                    });
                }
                else {
                    var alternate = anime({
                        targets: ['#alternate'],
                        color: [
                            { value: '#fed463' },
                            { value: '#6798d1' },
                            { value: '#58585a' },
                            { value: '#f26964' }
                        ],
                        translateX: 500,
                        direction: 'alternate',
                        duration: 3000,
                    });
                }
                i = i + 1;
            }, 4000);
        });
    }
    return reloadcomponent;
}());
reloadcomponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'reload',
        template: __webpack_require__(237),
    }),
    __metadata("design:paramtypes", [])
], reloadcomponent);

//# sourceMappingURL=reloadcomponent.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataservice_data_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(ae, de) {
        this.ae = ae;
        this.de = de;
        this.pos = { lat: '', lng: '' };
        this.mysignupform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required,
                this.isEmail
            ])),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(8)]),
            'address': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]({ value: '', disabled: true }),
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(8)]),
            'phonenumber': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]),
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        $('.ui.modal.selectlocating1').remove();
        $('.ui.modal.selectlocating').remove();
        $('#updatesomething').remove();
        this.getbeforeLocations();
        $('.masthead').css({
            'background-color': '#58585a',
        });
        $('.pusher').css({
            'background-color': '#fed463'
        });
        $('#here').empty();
    };
    SignupComponent.prototype.get = function (s) {
        this.address = s;
        console.log(this.address);
        console.log($('#signadd'));
        $('#signadd').val(s);
        $('#signadd').value = s;
        $('.ui.modal.something')
            .modal('hide');
    };
    SignupComponent.prototype.getLocations = function () {
        var _this = this;
        if (navigator.geolocation) {
            $('.locationsidim.dimmer').dimmer({
                on: false,
                opacity: 0.04
            }).dimmer('show');
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': _this.pos }, function (results, status) {
                    if (status === 'OK') {
                        _this.results = results;
                        console.log(_this.results);
                        $('.locationsidim.dimmer').dimmer('hide');
                        $('#signsomething').modal({
                            observable: true
                        }).modal('show');
                    }
                    else {
                        $('.locationsidim.dimmer').dimmer('hide');
                        console.log(status);
                    }
                });
            }, function (error) {
                $('.locationsidim.dimmer').dimmer('hide');
                console.log(error);
            });
        }
    };
    SignupComponent.prototype.getbeforeLocations = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    } }, function (results, status) {
                    if (status === 'OK') {
                        _this.results = results;
                        console.log(_this.results);
                    }
                    else {
                        console.log(status);
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    SignupComponent.prototype.onsignSubmit = function (event) {
        console.log(this.pos.lat);
        if (this.pos.lat) {
            $('.signupdim.dimmer').dimmer({
                on: false,
                opacity: 0.04
            }).dimmer('show');
            event.preventDefault();
            this.ae.usersignin(this.mysignupform.value, this.det);
            this.det = {
                'name': this.mysignupform.get('name').value,
                'address': $('#signadd').val(),
                'phonenumber': this.mysignupform.get('phonenumber').value,
                'lat': this.pos.lat,
                'lng': this.pos.lng,
                'email': this.mysignupform.get('email').value,
                'orders': [],
                'previous': [
                    {
                        'name': 'delete this at beginning',
                        'quantity': 20
                    }
                ]
            };
            console.log(this.det);
        }
        else {
            this.error = "Please Click On Get Your Location";
        }
    };
    SignupComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return { noEmail: true };
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'signup',
        template: __webpack_require__(238),
        styles: ["\n body {\n      background-color: #DADADA;\n    }\n    body > .grid {\n      height: 100%;\n    }\n    .image {\n      margin-top: -100px;\n    }\n    .column {\n      max-width: 450px;\n    }\n\n"],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_component__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__access_service_access_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__dataservice_data_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dataservice_data_service__["a" /* dataService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('squeeState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'scale(1.0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0.0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms'))
    ]);
}
//# sourceMappingURL=squeeze.tranisition.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".hidden.menu {\r\n  display: none;\r\n}\r\n.secondary.pointing.menu .toc.item {\r\n  display: none;\r\n}\r\n@-webkit-keyframes opac {\r\nfrom{opacity: 0}\r\n  to{opacity: 0}\r\n}\r\n@keyframes opac {\r\nfrom{opacity: 0}\r\n  to{opacity: 0}\r\n}\r\n@-webkit-keyframes mymove {\r\n  0%{opacity: 1;zoom:5;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}\r\n  30%{opacity: 1;zoom: 4;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  60%{opacity: 1;zoom:3;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  80%{opacity: 1;zoom:2;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  100%{\r\n    opacity: 1;zoom: 1;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n}\r\n@keyframes mymove {\r\n  0%{opacity: 1;zoom:5;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}\r\n  30%{opacity: 1;zoom: 4;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  60%{opacity: 1;zoom:3;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  80%{opacity: 1;zoom:2;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n  100%{\r\n    opacity: 1;zoom: 1;-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out}\r\n}\r\n\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .secondary.pointing.menu .toc.item {\r\n    display: block;\r\n  }\r\n  .magleft {\r\n    display: none !important;\r\n  }\r\n  .magright {\r\n    display: none !important;\r\n  }\r\n  .secondary.pointing.menu .toc.item {\r\n    display: block;\r\n  }\r\n  .secondary.pointing.menu .item,\r\n  .secondary.pointing.menu .menu {\r\n    display: none;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "\r\n.masthead.segment {\r\n\r\n  padding: 1em 0em;\r\n}\r\n.masthead .logo.item img {\r\n  margin-right: 1em;\r\n}\r\n.masthead .ui.menu .ui.button {\r\n  margin-left: 0.5em;\r\n}\r\n.masthead h1.ui.header {\r\n  margin-top: 3em;\r\n  margin-bottom: 0em;\r\n  font-size: 4em;\r\n  font-weight: normal;\r\n}\r\n.masthead h2 {\r\n  font-size: 1.7em;\r\n  font-weight: normal;\r\n}\r\n\r\n.ui.vertical.stripe {\r\n  padding: 8em 0em;\r\n}\r\n.ui.vertical.stripe h3 {\r\n  font-size: 2em;\r\n}\r\n.ui.vertical.stripe .button + h3,\r\n.ui.vertical.stripe p + h3 {\r\n  margin-top: 3em;\r\n}\r\n.ui.vertical.stripe .floated.image {\r\n  clear: both;\r\n}\r\n.ui.vertical.stripe p {\r\n  font-size: 1.33em;\r\n}\r\n.ui.vertical.stripe .horizontal.divider {\r\n  margin: 3em 0em;\r\n}\r\n\r\n.quote.stripe.segment {\r\n  padding: 0em;\r\n}\r\n.quote.stripe.segment .grid .column {\r\n  padding-top: 5em;\r\n  padding-bottom: 5em;\r\n}\r\n\r\n.footer.segment {\r\n  padding: 5em 0em;\r\n}\r\n\r\n#straight\r\n{\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n\r\n\r\n\r\n\r\n  .masthead.segment {\r\n    min-height: 350px;\r\n  }\r\n\r\n  .masthead h1.ui.header {\r\n    font-size: 2em;\r\n    margin-top: 1.5em;\r\n  }\r\n\r\n  .masthead h2 {\r\n    margin-top: 0.5em;\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n@media only screen and (max-width: 892px) {\r\n  #pathimg\r\n  {\r\n    display: none;\r\n  }\r\n#pathimg1\r\n\r\n{\r\n  display: none;\r\n}\r\n#pathimg2\r\n{\r\n  display: none;\r\n}\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 13em\">\r\n\r\n<div class=\"middle aligned aligned grid ui\">\r\n\r\n<div class=\"ui card centered\">\r\n  <div class=\"content\">\r\n    <div class=\"header\">Forgot Password</div>\r\n    <div class=\"ui compact negative message\" *ngIf=\"error\">\r\n      <p>You are not registered with us</p>\r\n    </div>\r\n    <div class=\"ui compact success message\" *ngIf=\"success\">\r\n      <p>Check Your Email To reset your Password.</p>\r\n    </div>\r\n    <div class=\"description\">\r\n      <form class=\"ui form\">\r\n        <div class=\"field\">\r\n          <label>Email</label>\r\n          <input type=\"text\" name=\"Email\" placeholder=\"Enter Your Email Address\" #f>\r\n        </div>\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <button class=\"ui bottom attached button\" (click)=\"onsubmit(f.value)\">\r\n\r\n    Submit\r\n  </button>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"ui page dimmer forgotdim\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\">\r\n        <div class=\"ui text large loader\">Checking...</div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "  <div class=\"ui message\" >\r\n    <button class=\"ui red right floated button\" (click)=\"storeorder()\" *ngIf=\"checking()\" style=\"background-color: #f26964\"> Add to My List </button>\r\n    <button class=\"ui red right floated button\" *ngIf=\"!checking()\" style=\"background-color: #f26964\"> Wait ... </button>\r\n    <div class=\"header\" >\r\n      Welcome Back!!\r\n    </div>\r\n    <p >To give a great user Experience we are requesting you to use <b>\"GET LOCATION\"</b>. </p>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui container two center aligned column stackable equal width divided grid\"  style=\"padding-top: 0\">\r\n\r\n   <div class=\"row\">\r\n    <div class=\"column\" style=\"margin-right: 4%\" [@herosState]=\"h\">\r\n      <h2 class=\"ui image dividing header\" style=\"padding-top: 5%;\">\r\n\r\n        <div class=\"content \" style=\"color: #6798d1\">\r\n         I Hate Waiting.....\r\n        </div>\r\n      </h2>\r\n\r\n      <form class=\"ui large attached form\"  [formGroup]=\"myForm\" >\r\n        <div class=\"ui\" style=\"margin-bottom: 5%;\">\r\n          <div class=\"field\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"user icon\"></i>\r\n              <input type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Your Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\" id=\"addche\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"user icon\"></i>\r\n              <input type=\"text\" id=\"add\" formControlName=\"address\" name=\"address\" placeholder=\"Address\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"field\">\r\n            <div class=\"ui left icon input\">\r\n              <i class=\"lock icon\"></i>\r\n              <input  name=\"Phonenumber\" formControlName=\"phonenum\" placeholder=\"Your Phone Number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\" *ngIf=\"!once()\">\r\n            <div class=\"ui action input\" >\r\n\r\n              <input type=\"text\" id=\"_attachmentName\" formControlName=\"filename\"  placeholder=\"To Check the list\">\r\n\r\n              <label  class=\"ui icon  button btn-file\" (click)=\"startadd()\" *ngIf=\"checking()\" style=\"background-color:#6798d1;\">\r\n\r\n                <span style=\"color: white\">Click here</span>\r\n\r\n                </label>\r\n\r\n              <label  class=\"ui icon black button btn-file\"  *ngIf=\"!checking()\" style=\"background-color:#6798d1;\">\r\n                <i class=\"tags icon\" style=\"color:white;margin-right: 4px;\"></i>\r\n                Wait...\r\n\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\" *ngIf=\"once()\">\r\n            <div class=\"ui action input\">\r\n\r\n              <input type=\"text\" id=\"_1attachmentName\"   formControlName=\"filename\"  placeholder=\"No of items in your list\">\r\n\r\n              <label  class=\"ui icon  button btn-file\" (click)=\"startadd()\" *ngIf=\"checking()\" style=\"background-color:#6798d1;\">\r\n\r\n                <span style=\"color: white\">Add</span>\r\n\r\n              </label>\r\n\r\n              <label  class=\"ui icon black button btn-file\"  *ngIf=\"!checking()\" style=\"background-color:rgb(103, 152, 209);\">\r\n                <i class=\"tags icon\" style=\"color:white;margin-right: 4px;\"></i>\r\n                Wait...\r\n\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui horizontal divider\">\r\n            Check\r\n          </div>\r\n\r\n              <div class=\"ui toggle checkbox\">\r\n\r\n                <input id=\"check\" type=\"checkbox\" name=\"chk[]\" value=true>\r\n                <label for=\"check\" style=\"color:black;font-size: 130%;\"><b>Check this if you want the delivery to a new address.</b></label>\r\n              </div>\r\n\r\n          <div class=\"ui divider\"></div>\r\n          <button class=\"ui fluid large  submit button\"style=\"background-color:#6798d1;color:white;\" (click)=\"getLocations()\" [disabled]=\"!checkthis\">Get Location</button>\r\n          <br>\r\n          <button class=\"ui fluid large  submit button\" style=\"background-color:#6798d1;color:white;\" (click)=\"alert()\" [disabled]=\"myForm.invalid || (!orderdetails.length)\">Submit</button>\r\n        </div>\r\n\r\n        <div class=\"ui error message\"></div>\r\n      </form>\r\n\r\n    </div>\r\n     <div class=\"column\" *ngIf=\"checking()\"  [@comingState]=\"h\" style=\"padding-left: 4%;border-left:#6798d1 solid\">\r\n       <div class=\"ui  segment\" style=\"border-left: thick solid #6798d1\">\r\n       <div class=\"ui comments\">\r\n         <h3 class=\"ui dividing header\" style=\"color:#6798d1\">Note</h3>\r\n         <div class=\"comment\">\r\n           <a class=\"avatar\">\r\n             <img src=\"https://semantic-ui.com/images/avatar/small/matt.jpg\">\r\n           </a>\r\n           <div class=\"content\" style=\"text-align: left\">\r\n             <a class=\"author\">Mike</a>\r\n             <div class=\"metadata\">\r\n               <span class=\"date\">Now</span>\r\n             </div>\r\n             <div class=\"text\">\r\n               <span  style=\"width: 0\">Hi. These are your orders</span>\r\n\r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n       <div class=\"ui animated ordered list\">\r\n         <div class=\"item\" *ngFor=\"let item of orderdetails\" style=\"text-align:left\">\r\n\r\n\r\n\r\n         <span style=\"text-align: left\"><b>{{item.name}}-(quantity - {{item.quantity}})<i class=\"shopping basket icon\"></i></b></span>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   </div>\r\n  </div>\r\n\r\n\r\n<div id=\"progress\"></div>\r\n\r\n\r\n<div class=\"ui modal test\">\r\n  <i class=\"close icon\"></i>\r\n\r\n  <div class=\"image content\">\r\n\r\n    <div class=\"description\">\r\n      <div class=\"ui header\">Select Your Location</div>\r\n      <div class=\"ui link list\">\r\n\r\n        <a class=\"item\" *ngFor=\"let item of results\" (click)=\"get(lo.id,item.place_id)\"  id=\"{{item.formatted_address}}\" #lo>{{item.formatted_address}}</a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"ui modal test1\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n\r\n  </div>\r\n  <div class=\"image content\">\r\n    <div class=\"ui medium image\">\r\n      <img src=\"http://semantic-ui.com/images/avatar2/large/rachel.png\">\r\n    </div>\r\n    <div class=\"description\">\r\n      <div class=\"ui header\">Hold on...</div>\r\n      <p>You are \"READY\" to go and place your order </p>\r\n      <p>Is it okay to place your order?</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui black floated right deny button\">\r\n      Nope\r\n    </div>\r\n    <div class=\"ui positive floated right labeled icon button\" (click)=\"Onsubmit()\">\r\n      Yep, Let's do it\r\n      <i class=\"checkmark icon\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui modal\" id=\"addess\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    Contents\r\n  </div>\r\n  <div class=\"ui success message\" *ngIf=\"successpre\">\r\n\r\n    <div class=\"header\">\r\n     Successfully Saved to database\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"errorpre\">\r\n\r\n    <div class=\"header\">\r\n     Add atleast one item to your List\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"erroritem\">\r\n\r\n    <div class=\"header\">\r\n     Check the data\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui container\">\r\n    <div class=\"ui  icon message\">\r\n      <i class=\"notched circle loading icon\" style=\"color: #6798d1;\"></i>\r\n      <div class=\"content\">\r\n        <div class=\"header\">\r\n          Adding Your Requirements\r\n        </div>\r\n        <ul class=\"list\" *ngFor=\"let item of orderdetails\">\r\n          <li>\r\n            <div class=\"ui message\">\r\n              <i class=\"close icon\" (click)=\"delete(item)\"></i>\r\n              <div class=\"header\">\r\n                <ul class=\"list\">\r\n                  <li><b>Name of the item : </b>{{item.name}}</li>\r\n                  <li><b>Quantity of the item : </b>{{item.quantity}}</li>\r\n                  <li><b>Weight of item : </b>{{item.weight}}</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n           </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui message\">\r\n\r\n      <div class=\"header\">\r\n        Fill and Add (weight in grams,Size as small,big)\r\n      </div>\r\n      <br>\r\n      <form class=\"ui form\" [formGroup]=\"addForm\">\r\n        <div class=\"three fields\">\r\n          <div class=\"field\">\r\n\r\n            <input type=\"text\" name=\"name\" placeholder=\"Name\" formControlName=\"name\">\r\n          </div>\r\n          <div class=\"field\">\r\n\r\n            <input type=\"text\" name=\"weight\" placeholder=\"weight/optional/grams/size\" formControlName=\"weight\">\r\n          </div>\r\n          <div class=\"field\">\r\n\r\n            <input type=\"number\" name=\"quantity\" placeholder=\"Quantity\" formControlName=\"quantity\">\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <p>Click Add to add your products.</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"actions\">\r\n    <div class=\"ui button disabled\" *ngIf=\"!data.key\" style=\"background-color: rgb(103, 152, 209);color: white\">Wait for a second</div>\r\n    <div class=\"ui button\" (click)=\"save()\" *ngIf=\"data.key\" style=\"background-color: rgb(103, 152, 209);color: white\">Save</div>\r\n    <div class=\"ui button\" (click)=\"adds(item)\" style=\"background-color: rgb(103, 152, 209);color: white\">Add</div>\r\n    <div class=\"ui button\" (click)=\"close()\" style=\"background-color: rgb(103, 152, 209);color: white\">Submit</div>\r\n  </div>\r\n</div>\r\n<div class=\"ui modal\" id=\"addees\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    Contents\r\n  </div>\r\n  <div class=\"ui success message\" *ngIf=\"successpre\">\r\n\r\n    <div class=\"header\">\r\n      Successfully Saved to database\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"errorpre\">\r\n\r\n    <div class=\"header\">\r\n      Add atleast one item to your List\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui container\">\r\n    <div class=\"ui  icon message\">\r\n      <i class=\"notched circle loading icon\" style=\"color: #6798d1;\"></i>\r\n      <div class=\"content\">\r\n        <div class=\"header\">\r\n          Adding Your Requirements\r\n        </div>\r\n        <ul class=\"list\" *ngFor=\"let item of orderdetails\">\r\n          <li>\r\n            <div class=\"ui message\">\r\n              <i class=\"close icon\" (click)=\"delete(item)\"></i>\r\n              <div class=\"header\">\r\n                <ul class=\"list\">\r\n                  <li><b>Name of the item : </b>{{item.name}}</li>\r\n                  <li><b>Quantity of the item : </b>{{item.quantity}}</li>\r\n                  <li><b>Weight of item : </b>{{item.weight}}</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui message\">\r\n\r\n      <div class=\"header\">\r\n        Fill and Add (weight in grams,Size as small,big)\r\n      </div>\r\n      <br>\r\n      <form class=\"ui form\" [formGroup]=\"addForm\">\r\n        <div class=\"three fields\">\r\n          <div class=\"field\">\r\n\r\n            <input type=\"text\" name=\"name\" placeholder=\"Name\" formControlName=\"name\">\r\n          </div>\r\n          <div class=\"field\">\r\n\r\n            <input type=\"text\" name=\"weight\" placeholder=\"weight/optional/size\" formControlName=\"weight\">\r\n          </div>\r\n          <div class=\"field\">\r\n\r\n            <input type=\"number\" name=\"quantity\" placeholder=\"Quantity\" formControlName=\"quantity\">\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <p>** Click Add to add your products.</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"actions\">\r\n    <div class=\"ui button disabled\" *ngIf=\"!data.key\" style=\"rgb(103, 152, 209);color: white\">Wait for a second to save</div>\r\n    <div class=\"ui button\" (click)=\"save()\" *ngIf=\"data.key\" style=\"background-color: rgb(103, 152, 209);color: white\">Save</div>\r\n    <div class=\"ui button\" (click)=\"add(item)\" style=\"background-color: rgb(103, 152, 209);color: white\">Add</div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui page dimmer locationdim\" >\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\">\r\n        <div class=\"ui text large loader\">I'm gonna order pizza 5 minutes before New year and when they arrive I'll say i ordered this a year ago </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui modal small selectlocating\">\r\n  <i class=\"close icon\"></i>\r\n\r\n\r\n\r\n    <div class=\"content\" style=\"padding: 0\">\r\n      <div class=\"ui negative message\">\r\n\r\n        <div class=\"ui comments\" style=\"margin-right: 0\">\r\n          <h3 class=\"ui dividing header\">Warning</h3>\r\n          <div class=\"comment\">\r\n            <a class=\"avatar\">\r\n              <img src=\"https://semantic-ui.com/images/avatar/small/matt.jpg\">\r\n            </a>\r\n            <div class=\"content\">\r\n              <a class=\"author\">Mike</a>\r\n              <div class=\"metadata\">\r\n                <span class=\"date\">Now</span>\r\n              </div>\r\n              <div class=\"text\">\r\n              Select your address.\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          Sorry for the inconvenience. We are solving this. <b>Kindly use Get Location for better user Experience. We recommend in using Get Location.</b><br>\r\n\r\n        <p>\r\n          Your temporary address : <b> <span style=\"font-size: 110%;color: black\" id=\"temporary1\"></span></b> <br>\r\n          <b style=\"font-size: 110%;\">Close this and change address if we are wrong.</b>\r\n\r\n        </p>\r\n        <div class=\"actions\">\r\n          <div class=\"ui button\" style=\"background-color: rgb(103, 152, 209);color: white;\" (click)=\"newalert('0')\">Permanent</div>\r\n          <div class=\"ui button \" style=\"background-color: rgb(103, 152, 209);color: white;\" (click)=\"newalert('1')\">Temporary</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <a class=\"ui red floated right circular label\" *ngIf=\"!item.check && item.ready\">check</a>\r\n  <i class=\"dropdown icon\"></i>\r\n  <b>{{item.date}}--------{{item.name}}-------------{{item.id}}</b>\r\n\r\n\r\n</div>\r\n<div class=\"content\">\r\n  <div class=\"transition hidden\">\r\n    <div class=\"ui warning message\" *ngIf=\"!item.check && item.ready\">\r\n\r\n      <div class=\"header\">\r\n        Your Order is Ready For Delivery\r\n      </div>\r\n      <p>Go and <b>Collect your Order</b></p>\r\n      <p>To go to google maps <a href=\"{{mapaddress}}\">Click here</a></p>\r\n    </div>\r\n    <ul class=\"ui list\">\r\n      <li><b>Your Name: </b> {{item.name}}</li>\r\n      <li><b>You Uploaded a Order : </b> <button class=\"circular ui icon button\" (click)=\"see()\">\r\n        <i class=\"sticky note icon\"></i>\r\n      </button></li>\r\n      <li><b>Delivery Address : </b>{{item.address}}</li>\r\n      <li><b>Total amount till now : </b>{{item.amount}}</li>\r\n      <li><b>Will be Delivered by Person With id : </b>{{item.idto}}</li>\r\n    </ul>\r\n    <div class=\"ui positive message\" *ngIf=\"item.ready\">\r\n      <div class=\"ui animated  list\">\r\n        <div class=\"item\" *ngFor=\"let item of updateddetails\" style=\"text-align:left\">\r\n\r\n\r\n\r\n          <span style=\"text-align: left\"><b><i class=\"motorcycle icon\"></i>{{item.name}}-(Amount - {{item.amount}})</b></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui stackable  container cards two\" id=\"something\" *ngIf=\"checking()\">\r\n      <div class=\"ui card\" style=\"border-right: thick solid #ff0000;\">\r\n        <div class=\"content\">\r\n          <div class=\"description\">\r\n            <div class=\"ui red ribbon label\" >\r\n              <i class=\"hotel icon\"></i> Map\r\n            </div>\r\n            <div class=\"ui embed\" id=\"{{item.id}}\" #map data-placeholder=\"https://semantic-ui.com/images/image-16by9.png\" data-icon=\"right circle arrow\">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui card\" style=\"border-right: thick solid #ff0000;\">\r\n        <div class=\"content\">\r\n          <div class=\"description\">\r\n            <div class=\"column\">\r\n              <div class=\"column\" style=\"background-color: white\" id=\"{{item.random}}\"></div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<div class=\"ui modal\" id=\"{{item.id}}i\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    Contents\r\n  </div>\r\n\r\n  <div class=\"ui container\">\r\n    <div class=\"ui  icon message\">\r\n      <i class=\"sticky note  icon\"></i>\r\n      <div class=\"content\">\r\n        <div class=\"header\">\r\n          Your Order Contents\r\n        </div>\r\n        <ul class=\"list\" *ngFor=\"let items of item.file\">\r\n          <li>\r\n            <div class=\"ui message\">\r\n\r\n              <div class=\"header\">\r\n                <ul class=\"list\">\r\n                  <li><b>Name of the item : </b>{{items.name}}</li>\r\n                  <li><b>Quantity of the item : </b>{{items.quantity}}</li>\r\n                  <li><b>Weight of item : </b>{{items.weight}}</li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui attached stackable menu\">\r\n  <div class=\"ui container\">\r\n<div class=\"ui tiny steps\">\r\n  <div class=\" step\">\r\n    <i class=\"info icon\"></i>\r\n    <div class=\"content\">\r\n      <div class=\"title\">Orders</div>\r\n      <div class=\"description\">Details</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"disabled step\">\r\n    <i class=\"truck icon\"></i>\r\n    <div class=\"content\">\r\n      <div class=\"title\">Shipping</div>\r\n      <div class=\"description\">Will be available soon</div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"ui container stackable comments\" >\r\n\r\n  <div class=\"comment\" >\r\n    <a class=\"avatar\">\r\n      <img src=\"http://semantic-ui.com/images/avatar/small/matt.jpg\">\r\n    </a>\r\n    <div class=\"content\">\r\n      <a class=\"author\" style=\"color: white\">Mike</a>\r\n      <div class=\"metadata\">\r\n        <span class=\"date\" style=\"color: white\">Now</span>\r\n      </div>\r\n      <div class=\"text\" style=\"color: white\">\r\n        Did you see me !! You can check you order details here\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui attached stackable menu\" style=\"background-color: #ecf0f1\">\r\n  <div class=\"ui container\">\r\n    <div class=\"ui styled fluid accordion\" style=\"border-left: thick solid #6798d1\">\r\n      <div  *ngIf=\"getdata()\">\r\n      <div *ngFor=\"let item of details | reverse\" [@itemState]=\"h\" >\r\n<map [item]=\"item\"></map>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n\r\n  <h2 class=\"ui top attached header\" style=\"color: #6798d1\">\r\n   Update Your Details here...\r\n  </h2>\r\n  <div class=\"ui positive message\" *ngIf=\"data.success\">\r\n\r\n    <div class=\"header\">\r\n      Successfully updated\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"data.error\">\r\n\r\n    <div class=\"header\">\r\n      We are experiencing problem try after sometime.\r\n    </div>\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"error\">\r\n\r\n    <div class=\"header\">\r\n     Kindly use get Location.\r\n    </div>\r\n  </div>\r\n  <div class=\"ui  attached segment \">\r\n\r\n    <form class=\"ui form \" [formGroup]=\"deform\">\r\n      <div class=\"ui negative message\" *ngIf=\"same\">\r\n\r\n        <div class=\"header\">\r\n          You cannot update with same details.\r\n        </div>\r\n\r\n      </div>\r\n<div *ngIf=\"checking()\"></div>\r\n      <div class=\"field\">\r\n        <label>First Name</label>\r\n        <input type=\"text\" name=\"first-name\" placeholder=\"First Name\" formControlName=\"name\">\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Phone number</label>\r\n        <input type=\"text\" name=\"phone-number\" placeholder=\"Phone number\" formControlName=\"phonenum\">\r\n      </div>\r\n      <div *ngIf=\"checkdet\" style=\"color:red;\"> <b>** Are you sure you want to change ?</b></div>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\"  *ngIf=\"!checkdet\"(click)=\"make()\" [disabled]=\"deform.invalid\">Update</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkdet\" (click)=\"back()\">Decline</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkdet\" (click)=\"updatedet()\">Accept</button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n  <h2 class=\"ui attached header\" style=\"color: #6798d1\">\r\n   Change Your Password here...\r\n  </h2>\r\n  <div class=\"ui attached segment\">\r\n    <form class=\"ui form \" [formGroup]=\"passwordform\">\r\n\r\n      <div class=\"field\">\r\n        <label>New Password</label>\r\n        <input type=\"password\" name=\"newpass\" placeholder=\"New Password\" formControlName=\"newpassword\">\r\n      </div>\r\n      <div class=\"field refie\">\r\n        <label>Re-type your Password</label>\r\n        <input type=\"text\" name=\"checkpass\" placeholder=\"Re-type Your Password\" formControlName=\"checkpassword\">\r\n      </div>\r\n\r\n      <div *ngIf=\"checkpass\" style=\"color:red;\"> <b>** Are you sure you want to change ?</b></div>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\"  *ngIf=\"!checkpass\"(click)=\"makepass()\" [disabled]=\"!matchs() || !passwordform.get('newpassword').value\">Update</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkpass\" (click)=\"backpass()\">Decline</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkpass\" (click)=\"updatepass()\">Accept</button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n  <h2 class=\"ui attached header\" style=\"color: #6798d1\">\r\n  Change your Main address...\r\n  </h2>\r\n  <div class=\"ui attached segment\">\r\n    <form class=\"ui form \">\r\n      <div><b> Note :</b> We are working on it. Bear with us. Kindly click on <b>Get Location</b> to change your locations.</div>\r\n      <div class=\"ui negative message\" *ngIf=\"sameloc\">\r\n\r\n        <div class=\"header\">\r\n          You cannot update with same Location.\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"field\">\r\n\r\n        <input type=\"text\" name=\"location\" id=\"updateloc\" placeholder=\"Location\" disabled>\r\n      </div>\r\n\r\n      <div *ngIf=\"checkloc\" style=\"color:red;\"> <b>** Are you sure you want to change ?</b></div>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\"  *ngIf=\"!checkloc\"(click)=\"makeloc()\">Update</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" (click)=\"getLocations()\">Get Location</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkloc\" (click)=\"backloc()\">Decline</button>\r\n      <button class=\"ui button right \" style=\"background-color: #6798d1;color: white;\" type=\"submit\" *ngIf=\"checkloc\" (click)=\"updateloc()\">Accept</button>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"ui page dimmer locupdate\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\">\r\n        <div class=\"ui text large loader\"><p>Getting Location Please Wait....</p><p>My Brain is like The Bermuda Triangle... Information goes in and then it's never found again.</p></div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div class=\"ui page dimmer updatingdetails\">\r\n    <div class=\"content\">\r\n      <div class=\"center\">\r\n\r\n        <div class=\"ui active dimmer\">\r\n          <div class=\"ui text large loader\"><p>Updating ....... </p><p>From an unknown aircraft waiting in a very long takeoff queue: \"I'm bored!\" Ground Traffic Control: \"Last aircraft transmitting, identify yourself immediately!\" Unknown aircraft: \"I said I was bored, not stupid!\"\r\n\r\n            source: http://www.jokebuddha.com/Waiting#ixzz4cUMBk7Aj</p></div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui modal test something\" id=\"updatesomething\">\r\n    <i class=\"close icon\"></i>\r\n\r\n    <div class=\"image content\">\r\n\r\n      <div class=\"description\">\r\n        <div class=\"ui header\">Select Your Location</div>\r\n        <div class=\"ui link list\" >\r\n\r\n          <a class=\"item\" *ngFor=\"let item of results\" (click)=\"get(lo.id)\" id=\"{{item.formatted_address}}\" #lo>{{item.formatted_address}}</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui vertical inverted sidebar menu\">\r\n  <a *ngIf=\"!accesss()\" class=\" item\" routerLinkActive=\"active\" routerLink=\"index\">Home</a>\r\n  <a *ngIf=\"accesss()\" class=\" item\" routerLinkActive=\"active\" routerLink=\"home\">Home</a>\r\n  <a *ngIf=\"accesss()\" class=\"item\" routerLinkActive=\"active\" routerLink=\"orders\">Orders</a>\r\n\r\n  <a class=\"item\" routerLinkActive=\"active\" routerLink=\"contactus\">Contact Us</a>\r\n  <a *ngIf=\"!accesss()\" routerLinkActive=\"active\" class=\"item\" routerLink=\"login\">Log in</a>\r\n  <a *ngIf=\"!accesss()\" routerLinkActive=\"active\" class=\"item\" routerLink=\"signup\">Sign Up</a>\r\n  <a  *ngIf=\"accesss()\" routerLinkActive=\"active\" routerLink=\"profile\" class=\"item\" ><span >Profile  </span></a>\r\n\r\n  <a  *ngIf=\"accesss()\" routerLinkActive=\"active\" class=\"item\" (click)=\"logout($event)\">Logout</a>\r\n</div>\r\n<div class=\"pushermain\" >\r\n\r\n  <div class=\"ui vertical inverted masthead center aligned segment\"  style=\"padding-bottom: 0;background-color: #6798d1\" [@heroState]=\"toogle\">\r\n\r\n    <div class=\"ui container\">\r\n      <div class=\"ui large secondary inverted pointing menu\" style=\"border: 0\" >\r\n        <a class=\"toc item\">\r\n          <i class=\"sidebar icon\"></i>\r\n        </a>\r\n        <div class=\"left item magleft\" >\r\n\r\n\r\n          <a *ngIf=\"!accesss()\" class=\" item\" routerLinkActive=\"active\" routerLink=\"index\"><span style=\"color:white;\">Home</span></a>\r\n          <a *ngIf=\"accesss()\" class=\" item\" routerLinkActive=\"active\" routerLink=\"home\"><span style=\"color:white;\">Home</span></a>\r\n          <a *ngIf=\"accesss()\" class=\" item\" routerLinkActive=\"active\" routerLink=\"orders\"><span style=\"color:white;\">Orders</span></a>\r\n        </div>\r\n        <div class=\"center item \">\r\n          <a class=\"item\" ><i class=\"hashtag big icon\" style=\"margin-right: 0;color:#f26964;animation: opac 3s,mymove 0.2s linear 3s forwards;\"></i><h1 class=\"ui header\" style=\"color:white;font-family: 'Gloria Hallelujah', cursive;font-size: 3.3em;transform: rotate(7deg)\" [@logoState]=\"h\">Golazy</h1></a>\r\n        </div>\r\n        <div class=\"right item magright\">\r\n          <a routerLink=\"contactus\" routerLinkActive=\"active\" class=\"item\"><span style=\"color:white;\">Contact Us</span></a>\r\n          <a *ngIf=\"!accesss()\" routerLinkActive=\"active\" class=\"ui inverted button\" routerLink=\"login\" style=\"margin-right: 0.5em\"><span>Log in</span></a>\r\n          <a *ngIf=\"!accesss()\"  routerLinkActive=\"active\" class=\"ui inverted button\" routerLink=\"signup\" ><span>Sign Up</span></a>\r\n          <a  *ngIf=\"accesss()\" routerLinkActive=\"active\" routerLink=\"profile\" class=\"item\" style=\"padding-bottom: 2%;margin-right: 4%\"><span ><img class=\"ui avatar image\" src=\"http://semantic-ui.com/images/avatar/small/matt.jpg\">Profile  </span></a>\r\n\r\n           <a  *ngIf=\"accesss()\" routerLinkActive=\"active\"  class=\"ui inverted button\" (click)=\"logout($event)\"><span>Logout</span></a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"pushers\">\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div [@squeeState]=\"h\">\r\n  <img class=\"ui fluid image\" src=\"assets/images/contact.png\">\r\n  <div class=\"ui container stackable cards two\">\r\n\r\n      <div class=\"ui card\" style=\"border-right: thick solid rgb(103, 152, 209);\">\r\n        <div class=\"content\">\r\n          <div class=\"header\">Get in Touch</div>\r\n          <div class=\"ui success message\" *ngIf=\"submitted\">\r\n\r\n            <div class=\"header\">\r\n              Thanks for your feedback\r\n            </div>\r\n            <p>We will work on it and solve it as soon as possible.</p>\r\n          </div>\r\n          <div class=\"description\">\r\n            <form class=\"ui form raised\" [formGroup]=\"feedbackform\">\r\n              <div class=\"field\">\r\n                <label>Name</label>\r\n                <input type=\"text\" name=\"first-name\" formControlName=\"name\" placeholder=\"Name\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <label>Email</label>\r\n                <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <label>Text</label>\r\n                <textarea formControlName=\"texts\"></textarea>\r\n              </div>\r\n              <hr>\r\n              <button class=\"ui right floated button\" (click)=\"feedback()\" [disabled]=\"feedbackform.invalid\" style=\"background-color: rgb(103, 152, 209);color: white;\">Submit</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n       </div>\r\n\r\n        <div class=\"ui card raised\" style=\"border-right: thick solid rgb(103, 152, 209);\">\r\n          <div class=\"content\">\r\n            <div class=\"header\">Contact Us</div>\r\n            <div class=\"meta\">24 Hours </div>\r\n            <div class=\"description\">\r\n              <div class=\"ui horizontal list\">\r\n                <div class=\"item\">\r\n                  <img class=\"ui avatar image\" src=\"http://semantic-ui.com/images/avatar/small/tom.jpg\">\r\n                  <div class=\"content\">\r\n                    <div class=\"header\">Harshith</div>\r\n                    9944571457\r\n                  </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                  <img class=\"ui avatar image\" src=\"http://semantic-ui.com/images/avatar/small/christian.jpg\">\r\n                  <div class=\"content\">\r\n                    <div class=\"header\">Rohith</div>\r\n                    7871677598\r\n                  </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                  <img class=\"ui avatar image\" src=\"http://semantic-ui.com/images/avatar/small/matt.jpg\">\r\n                  <div class=\"content\">\r\n                    <div class=\"header\">Manikanta </div>\r\n                   8919242584\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n<br><br><br><br><br><br><br><br>\r\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui  container two column stackable  grid\" [@heroState]=\"h\" >\r\n  <div class=\"ui centered row \">\r\n  <div class=\"ui column \">\r\n    <img class=\"ui fluid massive image\" src=\"./assets/images/login.png\" style=\"margin-top: 5%;\">\r\n  </div>\r\n  <div class=\"ui column centered center aligned\" style=\"padding: 2%;margin-right: 0\">\r\n    <h2 class=\"ui  teal image header\">\r\n\r\n      <div class=\"content\" style=\"color: #58585a\">\r\n        <b>Log-in to your account</b>\r\n      </div>\r\n    </h2>\r\n    <form class=\"ui large form\" [formGroup]=\"myloginform\" >\r\n      <div class=\"ui \">\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\"   class=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail address\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" class=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"ui visible message\" *ngIf=\"wrong()\">\r\n          <p><b style=\"color: red\">Invalid User Name or {{acc.wrong}}</b> </p>\r\n        </div>\r\n\r\n        <button class=\"ui fluid large  submit button\" style=\"background-color: #58585a;color: white\" (click)=\"onLoginSubmit()\" [disabled]=\"myloginform.invalid\"><b>Login</b></button>\r\n\r\n      </div>\r\n\r\n      <div class=\"ui error message\"></div>\r\n\r\n    </form>\r\n\r\n    <div class=\"ui message\">\r\n      New to us? <a href=\"#\" routerLink=\"../signup\" style=\"color: #2962FF\">Sign Up</a>\r\n    </div>\r\n    <div class=\"ui message\">\r\n      Forgot password? <a href=\"#\" routerLink=\"../forgotpassword\" style=\"color: #2962FF\">Click here</a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui page dimmer logindim\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n        <div class=\"ui active dimmer\">\r\n          <div class=\"ui text large loader\">Sleeping is my drug. My <b>Bed</b> is my <b>Dealer</b> and my <b>Alarm Clock </b> is the Police.</div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Sidebar Menu -->\r\n\r\n\r\n<!-- Page Contents -->\r\n<div style=\"background-color:#6798d1 \" [@heroState]=\"h\" id=\"homeimage\">\r\n<div class=\"ui container\" >\r\n<div style=\"background-color: #6798d1\" id=\"homepage\">\r\n  <img class=\"ui fluid image\" src=\"./assets/images/home.png\" >\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n<div style=\"background-color: #fed463\">\r\n<div class=\"ui container two column doubling stackable grid\" style=\"margin-top: 0;margin-bottom: 0;border: 0\">\r\n  <div class=\"left floated column\" style=\"padding-top: 3%;\">\r\n    <div class=\"ui grid\" style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: white\">\r\n      <div class=\"row\">\r\n        <div class=\"column\">\r\n        <img class=\"ui centered medium image\" src=\"./assets/images/14.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column\">\r\n          <h2 class=\"ui header\"> User Control<p class=\"sub header\"> With the click of the button the user/ vendor can register with the portal and golazy....</p></h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"column\" style=\"padding: 0\">\r\n  <img class=\"ui centered large image pathimg\" id=\"pathimg\" src=\"./assets/images/path.png\" style=\"margin:0;padding-top: 11%;\">\r\n</div>\r\n\r\n  <div class=\"column straight\" style=\"padding: 0\">\r\n    <img class=\"ui centered large image\"  src=\"./assets/images/path2.png\" style=\"margin:0;padding-top: 0%;padding-bottom: 0%\">\r\n  </div>\r\n\r\n</div>\r\n<div class=\"ui container two column doubling stackable grid\" style=\"margin-top: 0;margin-bottom: 0;border: 0\">\r\n  <div class=\"column\" style=\"padding: 0\">\r\n    <img class=\"ui centered large image pathimg\"  src=\"./assets/images/path1.png\" style=\"margin:0;margin-left: 23%;margin-top: 10%;\">\r\n  </div>\r\n\r\n<div class=\"column\" style=\"padding-top: 1.2%;padding-bottom: 3%;\">\r\n  <div class=\"ui grid\" style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: white\">\r\n    <div class=\"row\">\r\n      <div class=\"column\">\r\n        <img class=\"ui centered medium image \" src=\"./assets/images/13.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n<div class=\"column\">\r\n  <h2 class=\"ui header\"> Supply Chain<p class=\"sub header\">The users list is sent across the nearby shops and those who satisy the users needs are shipped. </p></h2>\r\n\r\n</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div class=\"column straight\" style=\"padding: 0\">\r\n    <img class=\"ui centered large image\"  src=\"./assets/images/path2.png\" style=\"margin:0;padding-top: 0%;padding-bottom: 0%\">\r\n  </div>\r\n</div>\r\n</div>\r\n<div style=\"background-color: #f26964\">\r\n<div class=\"ui container  two column doubling stackable grid\" style=\"margin-top: 0;margin-bottom: 0;border: 0\">\r\n  <div class=\" column\" style=\"padding-top: 1.3%;\">\r\n<div class=\"ui grid\" style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: white\">\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n    <img class=\"ui centered medium image\" src=\"./assets/images/11.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <h2 class=\"ui header\"> Logistics<p class=\"sub header\">The vendor contacts us and we establish a clear route to the customer.</p></h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n  </div>\r\n  <div class=\"column\" style=\"padding: 0\">\r\n    <img class=\"ui centered large image pathimg\" id=\"pathimg2\" src=\"./assets/images/path.png\" style=\"margin:0;padding-top: 11%;\">\r\n  </div>\r\n  <div class=\"column straight\" style=\"padding: 0\" >\r\n    <img class=\"ui centered large image\"  src=\"./assets/images/path2.png\" style=\"margin:0;padding-top: 0%;padding-bottom: 0%\">\r\n  </div>\r\n</div>\r\n<div class=\"ui container two column doubling stackable grid\" style=\"margin-top: 0;margin-bottom: 0;border: 0\">\r\n  <div class=\"column\" style=\"padding: 0\">\r\n    <img class=\"ui centered large image pathimg\" id=\"pathimg1\" src=\"./assets/images/path1.png\" style=\"margin:0;margin-left: 23%;margin-top: 10%;\">\r\n  </div>\r\n\r\n<div class=\"column\" style=\"padding-top: 1.5%;padding-bottom: 3%\">\r\n  <div class=\"ui grid\" style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: white\">\r\n    <div class=\"row\">\r\n      <div class=\"column\">\r\n        <img class=\"ui centered medium image\" src=\"./assets/images/12.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n<div class=\"column\">\r\n  <h2 class=\"ui header\">Delivery<p class=\"sub header\">Our delivery staff delivers the customers goods within no time ....</p></h2>\r\n</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n<div class=\"ui segment center aligned \" style=\"background-color: #6798d1;height: 15%;margin: 0;padding:3%;\" >\r\n  <div class=\"ui animated center aligned fade button huge\" tabindex=\"0\" style=\"background-color: #fed463;color: #58585a\" routerLink=\"../signup\">\r\n    <div class=\"visible content\" >Get Started</div>\r\n    <div class=\"hidden content\">\r\n      Signup\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui inverted vertical footer segment\" style=\"background-color: #58585a;color: white;\">\r\n  <div class=\"ui container\">\r\n    <div class=\"ui stackable inverted divided equal height stackable grid\">\r\n      <div class=\"three wide column\">\r\n        <h4 class=\"ui inverted header\" >About</h4>\r\n        <div class=\"ui inverted link list\">\r\n          <a routerLink=\"../home\" class=\"item\">Home</a>\r\n          <a routerLink=\"../contactus\" class=\"item\">Contact Us</a>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"three wide column\">\r\n        <h4 class=\"ui inverted header\" >Services</h4>\r\n        <div class=\"ui inverted link list\">\r\n          <a routerLink=\"../login\" class=\"item\">Login</a>\r\n          <a routerLink=\"../signup\" class=\"item\">Signup</a>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"seven wide column\">\r\n        <h2 class=\"ui inverted header\" style=\"color:white ;font-family: 'Gloria Hallelujah', cursive;\">Go Lazy</h2>\r\n        <p><i class=\"copyright icon\"></i>golazy.com - 2017 </p>\r\n        <p><i class=\"large facebook f icon\"></i><i class=\"large google icon\"></i><i class=\"large linkedin icon\"></i><i class=\"large twitter icon\"></i></p>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui page\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\" style=\"background-color: white\">\r\n        <div class=\"ui text large loader baby\" >\r\n\r\n\r\n          <h1 class=\"ui header center middle aligned\" id =\"alternate\" style=\"color:#f26964;font-family: 'Gloria Hallelujah', cursive; font-size: 4.3em;height: 100%\">\r\n            Golazy\r\n          </h1>\r\n<h3 style=\"text-align: center;color: #6798d1;\">Please Reload the Page.</h3>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"ui  container two column stackable  grid\" [@heroState]=\"h\" style=\"margin-top: 5%;\">\r\n  <div class=\"ui centered row\">\r\n\r\n    <div class=\"ui column centered center aligned\" style=\"padding: 2%;margin-left: 0\">\r\n    <h2 class=\"ui teal image header\">\r\n\r\n      <div class=\"content\" style=\"color: #58585a\">\r\n        Sign-up to your account\r\n      </div>\r\n    </h2>\r\n    <div class=\"ui red message\" *ngIf=\"error\">{{error}}</div>\r\n    <form class=\"ui large form\" [formGroup]=\"mysignupform\" >\r\n      <div class=\"ui\">\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail address\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password (Should be alteast 8 characters)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\"  formControlName=\"name\" name=\"name\" placeholder=\"Your Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input  formControlName=\"phonenumber\" name=\"number\" placeholder=\"Your Number\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" id=\"signadd\" formControlName=\"address\" name=\"address\" placeholder=\"Address\">\r\n          </div>\r\n\r\n      </div>\r\n\r\n<div >\r\n  <b>Note : </b> Click on Get Location for to select your location.<br>\r\n  <b>Note : </b> By clicking signup, you agree to our <b>Terms and Conditions.</b> </div>\r\n        <br>\r\n        <div class=\"ui fluid large  submit button\" style=\"background-color: #58585a;color: white;;\" (click)=\"getLocations()\" ><b>Get Location</b></div>\r\n        <br>\r\n        <button class=\"ui fluid large  submit button\" (click)=\"onsignSubmit($event)\" style=\"background-color: #58585a;color: white\" [disabled]=\"mysignupform.invalid\"><b>Sign-Up</b></button>\r\n      </div>\r\n\r\n      <div class=\"ui error message\"></div>\r\n\r\n    </form>\r\n\r\n\r\n  </div>\r\n    <div class=\"ui column \">\r\n      <img class=\"ui fluid massive image\" src=\"./assets/images/login.png\" style=\"margin-top: 30%;\">\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"ui modal test something\" id=\"signsomething\">\r\n  <i class=\"close icon\"></i>\r\n\r\n  <div class=\"image content\">\r\n\r\n    <div class=\"description\">\r\n      <div class=\"ui header\">Select Your Location</div>\r\n      <div class=\"ui link list\" >\r\n\r\n        <a class=\"item\" *ngFor=\"let item of results\" (click)=\"get(lo.id)\" id=\"{{item.formatted_address}}\" #lo>{{item.formatted_address}}</a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"ui page dimmer locationsidim\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\">\r\n        <div class=\"ui text large loader\"><p>Getting Location Please Wait....</p><p>My Brain is like The Bermuda Triangle... Information goes in and then it's never found again.</p></div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui page dimmer signupdim\">\r\n  <div class=\"content\">\r\n    <div class=\"center\">\r\n\r\n      <div class=\"ui active dimmer\">\r\n        <div class=\"ui text large loader\"><p>Signing in Kindly Wait</p><p>Wait i don't snore i dream i'm a motorcycle.</p></div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var dataService = (function () {
    function dataService(router, http) {
        this.router = router;
        this.http = http;
        this.k = 0;
        this.ks = 0;
        this.reset = false;
        this.success = false;
        this.error = false;
        console.log($(window).height());
        if ($(window).height() < 844) {
            this.fsize = 844;
        }
        else {
            this.fsize = $(window).height();
        }
    }
    dataService.prototype.ngOnInit = function () {
    };
    dataService.prototype.getdata = function () {
        var _this = this;
        var email;
        var user = firebase.auth().currentUser;
        if (user) {
            email = user.email;
        }
        firebase.database().ref().child('details').orderByChild('email').equalTo(email).on('value', function (snapshot) {
            console.log("jhgfjhf");
            _this.data = snapshot.val();
            var keyini = Object.keys(_this.data).map(function (k) { return k; });
            _this.key = keyini[0];
            var r = Object.keys(_this.data).map(function (k) { return _this.data[k]; });
            r = r[0];
            r = r.previous;
            _this.previous = r;
        });
    };
    dataService.prototype.jacky = function (s) {
        var _this = this;
        var f;
        f = { 'id': s.id,
            'address': s.address,
            'date': s.date,
            'file': s.file,
            'name': s.name,
            'number': s.number,
            'check': s.check,
            'pos': s.pos,
            'random': s.random,
            'idto': this.id,
            'by': null,
            'ready': false,
            'amount': 0
        };
        console.log(f);
        console.log("submitting");
        if (this.num) {
            firebase.database().ref("details/" + this.num).child('orders').push(f).then(function (get) {
                console.log(get);
                _this.reset = true;
                $('#progress').empty();
                _this.router.navigate(['./orders']);
            });
            this.k = 1;
        }
    };
    dataService.prototype.jackys = function (s) {
        var _this = this;
        var f = s;
        f.user = this.key;
        f.ready = false;
        if (this.nums) {
            firebase.database().ref("shop/" + this.nums).child('orders').push(f).then(function (get) {
                _this.id = get.path.o[1];
                console.log(get.path);
                _this.jacky(f);
            });
            this.ks = 1;
        }
    };
    dataService.prototype.updates = function (s) {
        var _this = this;
        console.log(s);
        var get = firebase.database().ref('shop').once('value', function (snapshot) {
            var item;
            var details = Object.keys(snapshot.val()).map(function (k) { return snapshot.val()[k]; });
            var min = 10e5;
            for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
                var i = details_1[_i];
                var lat = i.lat;
                var lng = i.lng;
                var R = 6371; //kms
                var φ1 = lat * Math.PI / 180;
                var φ2 = (s.pos.lat * Math.PI / 180);
                var se = s.pos.lat - lat;
                var Δφ = (s.pos.lat - lat) * Math.PI / 180;
                var Δλ = (s.pos.lng - lng) * Math.PI / 180;
                var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                if (min > d) {
                    item = i;
                    min = d;
                }
            }
            console.log(item);
            firebase.database().ref('shop').orderByChild('email').equalTo(item.email).once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    _this.nums = childSnapshot.key;
                    console.log(_this.nums);
                    var email;
                    var user = firebase.auth().currentUser;
                    if (user) {
                        email = user.email;
                    }
                    console.log(s);
                    var goal = firebase.database().ref('details').orderByChild('email').equalTo(email).once('value', function (snapshot) {
                        snapshot.forEach(function (childSnapshot) {
                            _this.num = childSnapshot.key;
                            _this.jackys(s);
                        });
                    });
                });
            });
        });
    };
    dataService.prototype.save = function (g) {
        var ge = true;
        while (ge) {
            if (this.key) {
                firebase.database().ref('details/' + this.key).update({
                    'previous': g
                });
                ge = false;
            }
        }
    };
    dataService.prototype.feedbacks = function (s) {
        firebase.database().ref('feedback/').push(s).then(console.log("hi"));
    };
    dataService.prototype.updatedetailss = function (s, p) {
        var _this = this;
        var email;
        var user = firebase.auth().currentUser;
        if (user) {
            email = user.email;
        }
        firebase.database().ref().child('details').orderByChild('email').equalTo(email).on('value', function (snapshot) {
            var keyini = Object.keys(_this.data).map(function (k) { return k; });
            _this.key = keyini[0];
            firebase.database().ref('details/' + _this.key).update({
                name: s,
                phonenumber: p
            });
            $('.updatingdetails.dimmer').dimmer('hide');
            _this.success = true;
            setTimeout(function () {
                _this.success = false;
            }, 5000);
        });
    };
    dataService.prototype.updatelocation = function (s, g) {
        var _this = this;
        var email;
        var user = firebase.auth().currentUser;
        if (user) {
            email = user.email;
        }
        firebase.database().ref().child('details').orderByChild('email').equalTo(email).on('value', function (snapshot) {
            var keyini = Object.keys(_this.data).map(function (k) { return k; });
            _this.key = keyini[0];
            firebase.database().ref('details/' + _this.key).update({
                address: g,
                lat: s.lat,
                lng: s.lng
            });
            $('.updatingdetails.dimmer').dimmer('hide');
            _this.success = true;
            setTimeout(function () {
                _this.success = false;
            }, 5000);
        });
    };
    return dataService;
}());
dataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], dataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.wrong = '';
        if (firebase == 0) {
            this.router.navigate(['../reload']);
        }
        else {
            console.log("loaded");
        }
    }
    AuthService.prototype.usersignin = function (user, detail) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function (data) {
            console.log(data);
            firebase.database().ref("details").push(detail);
            $('.signupdim.dimmer').dimmer('hide');
            _this.router.navigate(['../login']);
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    };
    AuthService.prototype.userlogin = function (user) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function (data) {
            _this.wrong = "";
            $('.logindim.dimmer').remove();
            _this.router.navigate(['../home']);
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                _this.wrong = "Wrong Password";
                console.log(_this.wrong);
                $('.logindim.dimmer').dimmer('hide');
            }
            else {
                _this.wrong = errorMessage;
                $('.logindim.dimmer').dimmer('hide');
            }
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        firebase.auth().signOut().then(function () {
            _this.router.navigate(['../login']);
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            this.userdet = user.email;
            return true;
        }
        else {
            return false;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=access.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('heroState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(600, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
            ]))
        ])
    ]);
}
//# sourceMappingURL=transition.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransition;

function getTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('itemState', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(200px)', offset: 0.3 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ]))
        ]),
    ]);
}
//# sourceMappingURL=newtransition.component.js.map

/***/ })

},[501]);
//# sourceMappingURL=main.bundle.js.map