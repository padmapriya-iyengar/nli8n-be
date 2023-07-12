"use strict";
(self["webpackChunkDevCenterHouseDemo"] = self["webpackChunkDevCenterHouseDemo"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _commons_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons/components/dashboard/dashboard.component */ 4425);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons/components/document-upload/document-upload.component */ 9857);
/* harmony import */ var _commons_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/components/login/login.component */ 8880);
/* harmony import */ var _commons_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commons/components/sign-up/sign-up.component */ 5015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: "dashboard",
  component: _commons_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: "docUpload",
  component: _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_1__.DocumentUploadComponent
}, {
  path: "login",
  component: _commons_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}, {
  path: "signup",
  component: _commons_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent
}, {
  path: "migration",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_migration_migration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./migration/migration.module */ 6818)).then(mod => mod.MigrationModule)
}, {
  path: '',
  redirectTo: "login",
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'disabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons/services/utilities.service */ 5810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _commons_services_agc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/services/agc.service */ 2935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var _commons_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commons/components/notification/notification.component */ 6036);
/* harmony import */ var _commons_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commons/components/user-profile/user-profile.component */ 1825);
















const _c0 = ["userProfileModal"];
const _c1 = ["logoutModal"];
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.goToURL("dashboard"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 12)(8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_1_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.openNotfModal(_r5, "lg-modal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p-splitButton", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r0.notfCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("pTooltip", ctx_r0.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r0.userActions);
  }
}
const _c2 = function () {
  return {
    width: "100%",
    height: "460px"
  };
};
function AppComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 10)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "User Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20)(7, "p-scrollPanel", 21)(8, "user-profile", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("oooEnable", function AppComponent_ng_template_3_Template_user_profile_oooEnable_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.onOOOEnable($event));
    })("reqSubmit", function AppComponent_ng_template_3_Template_user_profile_reqSubmit_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.onRequestSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 24)(12, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_p_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.updateUserProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_p_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("userInfo", ctx_r2.userInfo)("modalSubmit", ctx_r2.isReqSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Profile last updated on ", ctx_r2.userInfo.LastUpdatedOn, " at ", ctx_r2.userInfo.LastUpdatedTime, " ");
  }
}
function AppComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 10)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Signout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 27)(7, "div", 28)(8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Are you sure, you want to signout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 32)(13, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_5_Template_p_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.logMeOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 32)(15, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_5_Template_p_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
const _c3 = function () {
  return {
    width: "100%",
    height: "350px"
  };
};
function AppComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 10)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 35)(7, "p-scrollPanel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "notification", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 24)(10, "p-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_7_Template_p_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.hideNotfModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allNotifications", ctx_r6.allNotifications);
  }
}
class AppComponent {
  constructor(modalService, router, utilService, datePipe, agcService) {
    this.modalService = modalService;
    this.router = router;
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.userManagementInfo = {};
    this.requestType = '';
    this.reqItemID = '';
    this.currentUserName = '';
    this.currentUserDN = '';
    this.userInfo = {};
    this.isOOOEnabled = false;
    this.isReqSubmitted = false;
    this.hideUserActions = true;
    this.searchText = "";
    this.isSearchClicked = false;
    this.sClickCount = 0;
    this.newTabRoutes = [];
    this.showSpinner = false;
    this.allNotifications = [];
    this.notfCount = 0;
    this.title = 'InterviewDemo';
  }
  ngOnInit() {
    this.newTabRoutes.push('migration', 'docUpload');
    this.initialize();
  }
  initialize() {
    this.utilService.route.subscribe(route => {
      if (lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf(this.newTabRoutes, route) != -1) {
        this.utilService.setUserActions(false);
        window.open('#/' + route);
      } else {
        this.goToURL(route);
      }
    });
    this.userActions = [{
      label: 'User Profile',
      command: () => {
        this.getUserInfo();
      }
    }, {
      label: 'Signout',
      command: () => {
        this.openModal(this.userLogout, 'sm-modal');
      }
    }];
    this.utilService.userActions.subscribe(details => {
      this.hideUserActions = details;
    });
    this.utilService.cUserName.subscribe(userDetails => {
      this.currentUserName = userDetails.UserName;
      this.currentUserDN = userDetails.UserDN;
    });
    this.utilService.userNotfs.subscribe(allNotifications => {
      this.getAllNotifications(allNotifications, this.currentUserName);
    });
    if (this.utilService.readFromStorage('IS_LOGGEDIN') != true) {
      this.goToURL('');
    } else {
      let url = window.location.href;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0__.includes(window.location.href, '#')) {
        url = url + "/#/";
      }
      this.goToURL(url);
    }
  }
  goToURL(url) {
    let routeName = url;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.includes(url, '#')) {
      routeName = url.split('#')[1];
    }
    this.router.navigate([routeName]);
  }
  getUserInfo() {
    this.userInfo = _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_INFO;
    this.openModal(this.userProfile, 'md-modal');
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideModal() {
    this.modalRef.hide();
  }
  logMeOut() {
    this.hideModal();
    localStorage.clear();
    this.utilService.setUserActions(true);
    this.utilService.saveToStorage("IS_LOGGEDIN", false);
    this.utilService.pushRoute('login');
  }
  onOOOEnable(data) {
    this.isOOOEnabled = data.value;
  }
  updateUserProfile() {
    this.isReqSubmitted = true;
  }
  onRequestSubmit(data) {
    if (data.status == 'SUCCESS') {
      this.hideModal();
      this.utilService.alert('success', 'Success', 'User profile updated successfully!!', false);
      this.isReqSubmitted = false;
    } else {
      setTimeout(() => {
        this.isReqSubmitted = false;
      });
    }
    this.reloadUserProfile();
  }
  reloadUserProfile() {
    let divisions = [];
    let roles = [];
    let userInfo = {};
    this.agcService.getUserInfo(_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        divisions = resp[0].agc_user_divisions;
        let inboxPref = [];
        if (resp) {
          _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_ITEM_ID = resp[0].username;
          _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.IS_USER_PROFILE_TRIGGERED = true;
          inboxPref = resp[0].agc_user_profile.inbox_preference;
          _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_INBOX_PREF = inboxPref;
          _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_DN = resp[0].username;
          userInfo = {
            DisplayName: resp[0].display_name,
            UserDN: resp[0].username,
            Email: resp[0].agc_user_profile.email,
            DepartmentName: resp[0].agc_user_profile.department,
            LastUpdatedOn: this.datePipe.transform(resp[0].agc_user_profile.updated_on.split("T")[0], 'MMM d, y'),
            LastUpdatedTime: resp[0].agc_user_profile.updated_on.split("T")[1].substring(0, 5),
            ItemID: resp[0].username,
            ReceiveEmailNotifications: resp[0].agc_user_profile.email_notifications == 1 ? true : false,
            OutOfOffice: resp[0].agc_user_profile.ooo == 1 ? true : false,
            DateFrom: resp[0].agc_user_profile.ooo_date_from,
            DateUntil: resp[0].agc_user_profile.ooo_date_until,
            OutOfOfficeMessage: resp[0].agc_user_profile.ooo_message,
            Roles: []
          };
          if (divisions) {
            if (divisions.length) {
              divisions.forEach(item => {
                userInfo.Roles.push({
                  label: item.group_name,
                  value: item.title
                });
              });
            } else {
              userInfo.Roles.push({
                label: divisions.group_name,
                divisions: divisions.title
              });
            }
          }
          _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_INFO = userInfo;
        }
        this.utilService.pushRoute('dashboard');
      },
      error: error => {
        console.error('Request failed with error');
      }
    });
  }
  removeNilAttribute(jsonObject) {
    let keys = lodash__WEBPACK_IMPORTED_MODULE_0__.keys(jsonObject);
    keys.forEach(key => {
      if (jsonObject[key]["@nil"]) {
        delete jsonObject[key]["@nil"];
        jsonObject[key] = null;
      }
    });
  }
  getAllNotifications(allNotfs, username) {
    this.allNotifications = [];
    let resp = allNotfs.filter(ntf => ntf.responder === username);
    if (resp) {
      if (resp.length) {
        resp.forEach(item => {
          if (item.status == 'A') {
            this.allNotifications.push({
              ItemId: item.id,
              FileReferenceNo: item.file_reference_no,
              RequestNo: item.request_no,
              Actor: item.actor,
              MessageCode: item.message_code,
              MessageType: item.message_type,
              Responder: item.responder,
              Message: item.message,
              Status: item.status,
              CreatedDate: this.datePipe.transform(item.created_on.split('T')[0], 'MMM d, y'),
              ModifiedDate: item.modified_on,
              MessageReadStatus: item.message_read_status,
              UserGroup: item.user_group,
              CreatedTime: item.created_on.split('T')[1].substring(0, 5),
              ShowRead: item.message_read_status == 'NotRead' ? true : false,
              ShowDelete: item.status == 'A' ? true : false,
              ShowNotf: item.status == 'A' ? true : false,
              NotfHeader: lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize(item.actor ? item.actor.substring(0, 1) : item.responder.substring(0, 1)),
              StyleClass: item.message_read_status == 'Read' ? 'notf-row' : 'read-notf-row',
              RequestState: item.request_state,
              SourceItemId: item.source_item_id,
              LayoutID: '',
              TaskEntityInstanceID: '',
              CreatedOn: item.created_on
            });
          }
        });
      }
      this.notfCount = this.allNotifications.length;
    }
  }
  openNotfModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideNotfModal() {
    this.modalRef.hide();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_2__.AgcService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.userProfile = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.userLogout = _t.first);
    }
  },
  decls: 10,
  vars: 1,
  consts: [[1, "container-fluid", 2, "padding-left", "6px !important"], ["class", "row", "style", "height: 55px;", 4, "ngIf"], ["userProfileModal", ""], ["logoutModal", ""], ["notfModal", ""], ["position", "top-right"], [1, "row", 2, "height", "55px"], [1, "col-lg-8", "sm-padding", "lg-font", 2, "height", "55px"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to go to dashboard", 1, "custom-wht-text", "pointer", 2, "font-weight", "bold", 3, "click"], [1, "col-lg-4", "sm-padding", 2, "text-align", "right", "height", "55px", "padding-right", "20px"], [1, "row"], [1, "col-lg-9", "sm-padding", "no-padding"], [1, "col-lg-2", "sm-padding", "no-padding"], ["pBadge", "", 1, "pi", "pi-bell", "text-3xl", 2, "font-size", "1.5rem", "padding-top", "10px", "color", "white", "cursor", "pointer", 3, "value", "click"], [1, "col-lg-1", "sm-padding", "no-padding"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", 1, "custom-user-split-btn", "xxsm-padding-left", 3, "model", "pTooltip"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], [1, "sm-custom-modl-content"], [1, "custom-scroll"], [3, "userInfo", "modalSubmit", "oooEnable", "reqSubmit"], [1, "form-field-header", "no-top-padding", "sm-padding", "no-bottom-padding"], [1, "modal-footer"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to update user profile", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "sm-custom-modl-content", 2, "border", "0px solid transparent !important", "box-shadow", "0px 0px 0px 0px !important"], [1, "xsm-margin"], [2, "font-weight", "bold"], [1, "row", "xsm-margin"], [1, "col-lg-8"], [1, "col-lg-2"], ["label", "Yes", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to confirm signout", "styleClass", "p-button-sm", "icon", "pi pi-check", 1, "custom-tertiary-btn", 3, "click"], ["label", "No", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to go back to application", "styleClass", "p-button-sm", "icon", "pi pi-times", 1, "custom-tertiary-btn", 3, "click"], [1, "sm-custom-modl-content", 2, "border", "none !important", "box-shadow", "none !important"], [3, "allNotifications"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to close", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_Template, 11, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 14, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 16, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 11, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p-toast", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hideUserActions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanel, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__.SplitButton, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeDirective, _commons_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent, _commons_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__.UserProfileComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-dropzone */ 2522);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_advisory_file_advisory_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/advisory-file/advisory-file.component */ 5301);
/* harmony import */ var _services_advisory_request_advisory_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/advisory-request/advisory-request.component */ 1584);
/* harmony import */ var _services_mla_file_mla_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/mla-file/mla-file.component */ 9581);
/* harmony import */ var _services_mla_request_mla_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/mla-request/mla-request.component */ 2122);
/* harmony import */ var _commons_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commons/components/dashboard/dashboard.component */ 4425);
/* harmony import */ var _commons_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commons/components/notification/notification.component */ 6036);
/* harmony import */ var _commons_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commons/components/user-profile/user-profile.component */ 1825);
/* harmony import */ var _commons_primeng_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commons/primeng.module */ 9693);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commons/services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _commons_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commons/components/login/login.component */ 8880);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./commons/components/document-upload/document-upload.component */ 9857);
/* harmony import */ var _commons_components_document_details_document_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./commons/components/document-details/document-details.component */ 8715);
/* harmony import */ var _commons_components_document_versions_document_versions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commons/components/document-versions/document-versions.component */ 978);
/* harmony import */ var _commons_directives_file_title_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./commons/directives/file-title.directive */ 701);
/* harmony import */ var _commons_services_websocket_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commons/services/websocket.service */ 4904);
/* harmony import */ var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-disable-browser-back-button */ 38);
/* harmony import */ var _commons_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commons/components/sign-up/sign-up.component */ 5015);
/* harmony import */ var _commons_services_agc_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commons/services/agc.service */ 2935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2560);






























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  providers: [_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_10__.UtilitiesService, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__.BsModalService, primeng_api__WEBPACK_IMPORTED_MODULE_22__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_22__.MessageService, _commons_services_agc_service__WEBPACK_IMPORTED_MODULE_18__.AgcService, _commons_services_websocket_service__WEBPACK_IMPORTED_MODULE_16__.WebsocketService, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _commons_primeng_module__WEBPACK_IMPORTED_MODULE_9__.PrimeNGModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_26__.NgxDropzoneModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_28__.BackButtonDisableModule.forRoot({
    preserveScroll: true
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _services_advisory_file_advisory_file_component__WEBPACK_IMPORTED_MODULE_2__.AdvisoryFileComponent, _services_advisory_request_advisory_request_component__WEBPACK_IMPORTED_MODULE_3__.AdvisoryRequestComponent, _services_mla_file_mla_file_component__WEBPACK_IMPORTED_MODULE_4__.MlaFileComponent, _services_mla_request_mla_request_component__WEBPACK_IMPORTED_MODULE_5__.MlaRequestComponent, _commons_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _commons_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__.NotificationComponent, _commons_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__.UserProfileComponent, _commons_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_12__.DocumentUploadComponent, _commons_components_document_details_document_details_component__WEBPACK_IMPORTED_MODULE_13__.DocumentDetailsComponent, _commons_components_document_versions_document_versions_component__WEBPACK_IMPORTED_MODULE_14__.DocumentVersionsComponent, _commons_directives_file_title_directive__WEBPACK_IMPORTED_MODULE_15__.FileTitleDirective, _commons_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__.SignUpComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _commons_primeng_module__WEBPACK_IMPORTED_MODULE_9__.PrimeNGModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_26__.NgxDropzoneModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_28__.BackButtonDisableModule]
  });
})();

/***/ }),

/***/ 4425:
/*!*********************************************************************!*\
  !*** ./src/app/commons/components/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _services_agc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/agc.service */ 2935);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/websocket.service */ 4904);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _services_advisory_file_advisory_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/advisory-file/advisory-file.component */ 5301);
/* harmony import */ var _services_advisory_request_advisory_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/advisory-request/advisory-request.component */ 1584);
/* harmony import */ var _services_mla_file_mla_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/mla-file/mla-file.component */ 9581);
/* harmony import */ var _services_mla_request_mla_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/mla-request/mla-request.component */ 2122);




















function DashboardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Advisory");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "MLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Migration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_p_progressSpinner_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-progressSpinner", 28);
  }
}
const _c0 = function () {
  return {
    "width": "60%"
  };
};
function DashboardComponent_p_table_50_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "span", 36)(2, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DashboardComponent_p_table_50_ng_template_2_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12.filterGlobal(_r17.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 40)(7, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_p_table_50_ng_template_2_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.refreshFileTasks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r13.fileTasks.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
  }
}
function DashboardComponent_p_table_50_ng_template_3_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "p-sortIcon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", col_r23.spanWidthPx, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSortableColumn", col_r23.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r23.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", col_r23.field);
  }
}
function DashboardComponent_p_table_50_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 42)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "th", 42)(5, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_p_table_50_ng_template_3_th_6_Template, 3, 6, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r21 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", ctx_r14.totalTableHeaderWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r21);
  }
}
function DashboardComponent_p_table_50_ng_template_4_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 53);
  }
}
function DashboardComponent_p_table_50_ng_template_4_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_p_table_50_ng_template_4_ng_template_10_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const rowData_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.onFileTaskSelect(rowData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r29 = ctx.$implicit;
    const rowData_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", col_r29.spanWidthPx, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("pTooltip", col_r29.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 5, rowData_r24[col_r29.field], "dd/MM/yyyy h:mm:ss") : col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 8, rowData_r24[col_r29.field], "dd/MM/yyyy") : rowData_r24[col_r29.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r29.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 11, rowData_r24[col_r29.field], "dd/MM/yyyy h:mm:ss") : col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 14, rowData_r24[col_r29.field], "dd/MM/yyyy") : rowData_r24[col_r29.field], " ");
  }
}
const _c1 = function (a0) {
  return {
    "color": a0
  };
};
function DashboardComponent_p_table_50_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48)(2, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 50)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_p_table_50_ng_template_4_i_6_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 50)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DashboardComponent_p_table_50_ng_template_4_ng_template_10_Template, 6, 17, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r24 = ctx.$implicit;
    const columns_r25 = ctx.columns;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", ctx_r15.totalTableHeaderWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c1, rowData_r24["SLA_BREACH"] == "Y" ? "#f00a0a" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r24["URGENCYMARK"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r24["LOCKED"] == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](rowData_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r25);
  }
}
function DashboardComponent_p_table_50_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No files available!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return ["FILE_REF_NO", "TASK_TITLE", "FILE_TITLE", "TASK_STATUS", "TASK_FROM", "FILE_TYPE"];
};
function DashboardComponent_p_table_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-table", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onRowSelect", function DashboardComponent_p_table_50_Template_p_table_onRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.onFileTaskSelected($event));
    })("onRowUnselect", function DashboardComponent_p_table_50_Template_p_table_onRowUnselect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.onFileTaskUnselected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DashboardComponent_p_table_50_ng_template_2_Template, 8, 3, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_p_table_50_ng_template_3_Template, 7, 4, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DashboardComponent_p_table_50_ng_template_4_Template, 11, 12, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_p_table_50_ng_template_5_Template, 3, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r8.fileTasks)("columns", ctx_r8.fileTaskCols)("filterDelay", 5)("scrollable", true)("sortOrder", -1)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c2));
  }
}
function DashboardComponent_p_table_52_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "span", 36)(2, "input", 37, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function DashboardComponent_p_table_52_ng_template_2_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r37.filterGlobal(_r42.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 40)(7, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_p_table_52_ng_template_2_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r45.refreshRequestTasks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r38.requestTasks.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
  }
}
function DashboardComponent_p_table_52_ng_template_3_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "p-sortIcon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", col_r48.spanWidthPx, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSortableColumn", col_r48.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r48.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("field", col_r48.field);
  }
}
function DashboardComponent_p_table_52_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 42)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "th", 42)(5, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_p_table_52_ng_template_3_th_6_Template, 3, 6, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r46 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", ctx_r39.totalTableHeaderWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r46);
  }
}
function DashboardComponent_p_table_52_ng_template_4_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 53);
  }
}
function DashboardComponent_p_table_52_ng_template_4_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_p_table_52_ng_template_4_ng_template_10_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57);
      const rowData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.onRequestTaskSelect(rowData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r54 = ctx.$implicit;
    const rowData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", col_r54.spanWidthPx, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("pTooltip", col_r54.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 5, rowData_r49[col_r54.field], "dd/MM/yyyy h:mm:ss") : col_r54.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 8, rowData_r49[col_r54.field], "dd/MM/yyyy") : rowData_r49[col_r54.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r54.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 11, rowData_r49[col_r54.field], "dd/MM/yyyy h:mm:ss") : col_r54.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 14, rowData_r49[col_r54.field], "dd/MM/yyyy") : rowData_r49[col_r54.field], " ");
  }
}
function DashboardComponent_p_table_52_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48)(2, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 50)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_p_table_52_ng_template_4_i_6_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 50)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DashboardComponent_p_table_52_ng_template_4_ng_template_10_Template, 6, 17, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r49 = ctx.$implicit;
    const columns_r50 = ctx.columns;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width:", ctx_r40.totalTableHeaderWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c1, rowData_r49["SLA_BREACH"] == "Y" ? "#f00a0a" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r49["URGENCYMARK"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rowData_r49["LOCKED"] == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](rowData_r49.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r50);
  }
}
function DashboardComponent_p_table_52_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No requests available!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_p_table_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-table", 29, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onRowSelect", function DashboardComponent_p_table_52_Template_p_table_onRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r59.onRequestTaskSelected($event));
    })("onRowUnselect", function DashboardComponent_p_table_52_Template_p_table_onRowUnselect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r61.onRequestTaskUnselected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DashboardComponent_p_table_52_ng_template_2_Template, 8, 3, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_p_table_52_ng_template_3_Template, 7, 4, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DashboardComponent_p_table_52_ng_template_4_Template, 11, 12, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_p_table_52_ng_template_5_Template, 3, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r9.requestTasks)("columns", ctx_r9.requestTaskCols)("filterDelay", 5)("scrollable", true)("sortOrder", -1)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c2));
  }
}
function DashboardComponent_ng_template_53_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 70)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_ng_template_53_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r68.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_ng_template_53_advisory_file_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "advisory-file", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reqSubmit", function DashboardComponent_ng_template_53_advisory_file_9_Template_advisory_file_reqSubmit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r70.onRequestSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modalSubmit", ctx_r63.isReqSubmitted);
  }
}
function DashboardComponent_ng_template_53_advisory_request_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "advisory-request", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reqSubmit", function DashboardComponent_ng_template_53_advisory_request_10_Template_advisory_request_reqSubmit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r72.onRequestSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modalSubmit", ctx_r64.isReqSubmitted);
  }
}
function DashboardComponent_ng_template_53_mla_file_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mla-file", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reqSubmit", function DashboardComponent_ng_template_53_mla_file_11_Template_mla_file_reqSubmit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r74.onRequestSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modalSubmit", ctx_r65.isReqSubmitted);
  }
}
function DashboardComponent_ng_template_53_mla_request_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mla-request", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("reqSubmit", function DashboardComponent_ng_template_53_mla_request_12_Template_mla_request_reqSubmit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r76.onRequestSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modalSubmit", ctx_r66.isReqSubmitted);
  }
}
function DashboardComponent_ng_template_53_p_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_ng_template_53_p_button_14_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r78.createServiceRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c3 = function () {
  return {
    width: "100%",
    height: "740px"
  };
};
function DashboardComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "div", 1)(3, "div", 61)(4, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_ng_template_53_div_6_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 64)(8, "p-scrollPanel", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DashboardComponent_ng_template_53_advisory_file_9_Template, 1, 1, "advisory-file", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DashboardComponent_ng_template_53_advisory_request_10_Template, 1, 1, "advisory-request", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, DashboardComponent_ng_template_53_mla_file_11_Template, 1, 1, "mla-file", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DashboardComponent_ng_template_53_mla_request_12_Template, 1, 1, "mla-request", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, DashboardComponent_ng_template_53_p_button_14_Template, 1, 0, "p-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p-button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_ng_template_53_Template_p_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r80.hideRequestModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.serviceTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.reqIdentifier == "ADV_FILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.reqIdentifier == "ADV_REQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.reqIdentifier == "MLA_FILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.reqIdentifier == "MLA_REQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.reqIdentifier != "RECALL_REASSIGN" && ctx_r11.reqIdentifier != "REOPEN_REQ" && ctx_r11.reqIdentifier != "MFC");
  }
}
class DashboardComponent {
  constructor(utilService, modalService, datePipe, confirmationService, agcService, wsService) {
    this.utilService = utilService;
    this.modalService = modalService;
    this.datePipe = datePipe;
    this.confirmationService = confirmationService;
    this.agcService = agcService;
    this.wsService = wsService;
    this.fileTaskCols = [];
    this.notifications = [];
    this.isTaskSelected = false;
    this.showSpinner = false;
    this.totalTableHeaderWidth = 255;
    this.fileTasks = [];
    this.requestTaskCols = [];
    this.requestTasks = [];
    this.wsReceivedMessages = [];
    this.allNotifications = [];
    this.userNotifications = [];
    wsService.messages.subscribe(msg => {
      this.wsReceivedMessages.push(msg);
      let notfData = this.wsReceivedMessages.filter(msg => msg.identifier == 'NOTIFICATION_INFO');
      this.allNotifications = notfData[notfData.length - 1].data;
      this.utilService.getUserNotfs(this.allNotifications);
    });
  }
  ngOnInit() {
    this.getLoggedInUserDetails();
    this.loadAllColumns();
    this.getFileTasksData();
  }
  loadAllColumns() {
    this.fileTaskCols = [{
      field: "DELIVERY_DATE",
      label: "Received Date",
      type: "datetime",
      spanWidthPx: "200"
    }, {
      field: "FILE_REF_NO",
      label: "Ref No.",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "TASK_TITLE",
      label: "Title",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "FILE_TITLE",
      label: "File Title",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "TASK_STATUS",
      label: "Status",
      type: "string",
      spanWidthPx: "100"
    }, {
      field: "TASK_FROM",
      label: "From",
      type: "string",
      spanWidthPx: "100"
    }, {
      field: "ASSIGNEE",
      label: "Locked By",
      type: "string",
      spanWidthPx: "100"
    }, {
      field: "FILE_TYPE",
      label: "File Type",
      type: "string",
      spanWidthPx: "100"
    }];
    this.requestTaskCols = [{
      field: "DELIVERY_DATE",
      label: "Received Date",
      type: "datetime",
      spanWidthPx: "200"
    }, {
      field: "REQUEST_ID",
      label: "Request ID",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "FILE_REF_NO",
      label: "Ref No.",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "TASK_TITLE",
      label: "Title",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "TASK_STATUS",
      label: "Status",
      type: "string",
      spanWidthPx: "100"
    }, {
      field: "TASK_FROM",
      label: "From",
      type: "string",
      spanWidthPx: "100"
    }, {
      field: "ASSIGNEE",
      label: "Locked By",
      type: "string",
      spanWidthPx: "200"
    }, {
      field: "REQUEST_DUE_DATE",
      label: "Due Date",
      type: "datetime",
      spanWidthPx: "200"
    }, {
      field: "EXPECTED_RESPONSE_DATE",
      label: "Response Date",
      type: "datetime",
      spanWidthPx: "200"
    }, {
      field: "REQUEST_TYPE",
      label: "Request Type",
      type: "string",
      spanWidthPx: "200"
    }];
  }
  getLoggedInUserDetails() {
    this.utilService.cUserName.next({
      UserName: _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME,
      UserDN: _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_DN
    });
  }
  getFileTasksData() {
    this.showSpinner = true;
    this.fileTasks = [];
    this.agcService.getFilesForDashboard(_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length > 0) {
            resp.forEach(task => {
              task.LOCKED = !this.utilService.isEmpty(task.ASSIGNEE) ? 'Y' : 'N';
              if (task.TARGET_TYPE == 'user') {
                task.icon = 'fa fa-pencil';
              } else if (task.ASSIGNEE == _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME) {
                task.icon = 'fa fa-user';
              } else {
                task.icon = 'fa fa-group';
              }
              this.fileTasks.push(task);
            });
          }
        }
        this.showSpinner = false;
        this.getRequestTasksData();
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestTasksData() {
    this.showSpinner = true;
    this.requestTasks = [];
    this.agcService.getRequestsForDashboard(_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length > 0) {
            resp.forEach(task => {
              task.LOCKED = !this.utilService.isEmpty(task.ASSIGNEE) ? 'Y' : 'N';
              if (task.TARGET_TYPE == 'user') {
                task.icon = 'fa fa-pencil';
              } else if (task.ASSIGNEE == _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME) {
                task.icon = 'fa fa-user';
              } else {
                task.icon = 'fa fa-group';
              }
              this.requestTasks.push(task);
            });
          }
        }
        this.showSpinner = false;
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  openService(template, serviceName) {
    let serviceObj = {
      ServiceDescription: '',
      ExternalUrl: '',
      ServiceCode: ''
    };
    if (serviceName == 'ADV_FILE') {
      serviceObj.ServiceDescription = 'Create New Advisory File';
      serviceObj.ServiceCode = serviceName;
    }
    if (serviceName == 'ADV_REQ') {
      serviceObj.ServiceDescription = 'Create New Advisory Request';
      serviceObj.ServiceCode = serviceName;
    }
    if (serviceName == 'MLA_FILE') {
      serviceObj.ServiceDescription = 'Create MLA/Extradition File';
      serviceObj.ServiceCode = serviceName;
    }
    if (serviceName == 'MLA_REQ') {
      serviceObj.ServiceDescription = 'Create New MLA/Extradition Request';
      serviceObj.ServiceCode = serviceName;
    }
    if (serviceName == 'MIGRATION_PORTAL') {
      serviceObj.ServiceDescription = 'Migration';
      serviceObj.ExternalUrl = 'migration';
      serviceObj.ServiceCode = serviceName;
    }
    this.openServiceModal(template, serviceObj, 'xxl-modal');
  }
  openServiceModal(template, serviceObj, cssClass) {
    this.serviceTitle = serviceObj.ServiceDescription;
    this.entityURL = serviceObj.ExternalUrl;
    this.reqIdentifier = serviceObj.ServiceCode;
    if (this.utilService.isEmpty(this.entityURL)) {
      this.modalRef = this.modalService.show(template, {
        class: cssClass,
        keyboard: false,
        backdrop: true,
        ignoreBackdropClick: true
      });
    } else {
      this.utilService.pushRoute(this.entityURL);
    }
  }
  hideModal() {
    this.modalRef.hide();
  }
  createServiceRequest() {
    this.isReqSubmitted = true;
  }
  onRequestSubmit(data) {
    if (data.status == 'SUCCESS') {
      this.hideModal();
      this.isReqSubmitted = false;
    } else {
      setTimeout(() => {
        this.isReqSubmitted = false;
      });
    }
  }
  hideRequestModal() {
    this.isReqSubmitted = false;
    this.hideModal();
  }
  onFileTaskSelect(data) {}
  onRequestTaskSelect(data) {}
  refreshFileTasks() {
    this.fileTasks = [];
    let context = this;
    setTimeout(function () {
      context.getFileTasksData();
    }, 1000);
  }
  refreshRequestTasks() {
    this.requestTasks = [];
    let context = this;
    setTimeout(function () {
      context.getRequestTasksData();
    }, 1000);
  }
  onFileTaskSelected(data) {
    this.isTaskSelected = true;
  }
  onFileTaskUnselected(data) {
    this.isTaskSelected = false;
  }
  onRequestTaskSelected(data) {
    this.isTaskSelected = true;
  }
  onRequestTaskUnselected(data) {
    this.isTaskSelected = false;
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_agc_service__WEBPACK_IMPORTED_MODULE_1__.AgcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["dashboard"]],
  decls: 55,
  vars: 3,
  consts: [[1, "container-fluid"], [1, "row"], [1, "sm-padding", "no-padding", "col-lg-12"], [1, "row", 2, "padding-left", "12px !important"], [1, "sm-padding", "xsm-pm-border", "lg-card-height", "pm-lt-bk", "no-top-padding", "no-bottom-padding", 2, "width", "99.5%"], [1, "row", "xsm-padding"], [1, "col-lg-2"], [1, "custom-card"], ["pTemplate", "subtitle"], [1, "row", "sm-margin"], [1, "col-lg-6"], [1, "custom-serv-card", 3, "click"], [1, "col-lg-12"], [1, "pi", "pi-file-o", 2, "font-size", "1.5rem"], [1, "pi", "pi-book", 2, "font-size", "1.5rem"], [1, "col-lg-7"], [1, "col-lg-1"], [1, "custom-mig-card", 3, "click"], [1, "pi", "pi-check-square", 2, "font-size", "2.5rem", "padding-top", "15px"], [1, "row", 2, "padding-left", "12px !important", "height", "825px !important"], [1, "xsm-padding", "xsm-pm-border", "lg-card-height", "pm-lt-bk", 2, "width", "99.5%"], ["class", "dashboard-spinner", "strokeWidth", "7", 4, "ngIf"], [1, "dashboard-tab"], ["header", "Files"], ["class", "custom-dashboard-table", "scrollHeight", "710px", "scrollDirection", "both", "sortField", "DELIVERY_DATE", 3, "value", "columns", "filterDelay", "scrollable", "sortOrder", "globalFilterFields", "onRowSelect", "onRowUnselect", 4, "ngIf"], ["header", "Requests"], ["serviceModal", ""], [2, "font-weight", "bold"], ["strokeWidth", "7", 1, "dashboard-spinner"], ["scrollHeight", "710px", "scrollDirection", "both", "sortField", "DELIVERY_DATE", 1, "custom-dashboard-table", 3, "value", "columns", "filterDelay", "scrollable", "sortOrder", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["fileTasksDT", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["myFileTasksSearch", ""], [2, "width", "30%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "p-input-icon-right", 2, "padding-bottom", "10px !important", "cursor", "pointer", 3, "ngStyle"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to refresh", "tooltipPosition", "left", 1, "fa", "fa-refresh", 2, "right", "3rem", 3, "click"], [2, "width", "25px !important"], [1, "fa", "fa-exclamation"], [3, "style", "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer", 3, "ngStyle"], [1, "alarm-notf", 2, "width", "25px !important"], [2, "width", "25px !important", "font-size", "14px", "font-weight", "bolder", "padding-top", "15px !important"], [2, "width", "25px !important", "padding-top", "15px !important", "color", "#000 !important"], ["class", "fa fa-lock", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "fa", "fa-lock"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", 3, "pTooltip", "click"], ["colspan", "11", 1, "custom-info-text", 2, "text-align", "center !important", "font-size", "14px !important"], ["reqTasksDT", ""], ["myReqTasksSearch", ""], ["colspan", "13", 1, "custom-info-text", 2, "text-align", "center !important", "font-size", "14px !important"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], ["class", "col-lg-2 modal-header", 4, "ngIf"], [1, "custom-modl-content"], [1, "custom-scroll"], [3, "modalSubmit", "reqSubmit", 4, "ngIf"], [1, "modal-footer"], ["label", "Create & View", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to create and open", "styleClass", "p-button-sm", "class", "custom-tertiary-btn", 3, "click", 4, "ngIf"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel request", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "col-lg-2", "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", 3, "click"], [3, "modalSubmit", "reqSubmit"], ["label", "Create & View", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to create and open", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_ng_template_8_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "p-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_p_card_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openService(_r10, "ADV_FILE"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DashboardComponent_ng_template_12_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10)(17, "p-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_p_card_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openService(_r10, "ADV_REQ"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DashboardComponent_ng_template_18_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9)(20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 6)(23, "p-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DashboardComponent_ng_template_24_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 9)(26, "div", 10)(27, "p-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_p_card_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openService(_r10, "MLA_FILE"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, DashboardComponent_ng_template_28_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 9)(30, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 10)(33, "p-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_p_card_click_33_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openService(_r10, "MLA_REQ"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DashboardComponent_ng_template_34_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 9)(36, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 16)(40, "p-card", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_p_card_click_40_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openService(_r10, "MIGRATION_PORTAL"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, DashboardComponent_ng_template_41_Template, 2, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 9)(43, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 19)(46, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, DashboardComponent_p_progressSpinner_47_Template, 1, 0, "p-progressSpinner", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "p-tabView", 22)(49, "p-tabPanel", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, DashboardComponent_p_table_50_Template, 6, 7, "p-table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "p-tabPanel", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, DashboardComponent_p_table_52_Template, 6, 7, "p-table", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, DashboardComponent_ng_template_53_Template, 16, 10, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_12__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_13__.SortIcon, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_14__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabPanel, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinner, _services_advisory_file_advisory_file_component__WEBPACK_IMPORTED_MODULE_3__.AdvisoryFileComponent, _services_advisory_request_advisory_request_component__WEBPACK_IMPORTED_MODULE_4__.AdvisoryRequestComponent, _services_mla_file_mla_file_component__WEBPACK_IMPORTED_MODULE_5__.MlaFileComponent, _services_mla_request_mla_request_component__WEBPACK_IMPORTED_MODULE_6__.MlaRequestComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8715:
/*!***********************************************************************************!*\
  !*** ./src/app/commons/components/document-details/document-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDetailsComponent": () => (/* binding */ DocumentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
















const _c0 = ["docDetails"];
function DocumentDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Click save and close to upload document with different tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DocumentDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please take necessary actions on the highlighted duplicate files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DocumentDetailsComponent_ng_template_12_ng_template_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentDetailsComponent_ng_template_12_ng_template_1_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.renameDocument(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DocumentDetailsComponent_ng_template_12_ng_template_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentDetailsComponent_ng_template_12_ng_template_1_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.enableRenameDocument(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DocumentDetailsComponent_ng_template_12_ng_template_1_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentDetailsComponent_ng_template_12_ng_template_1_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.versionDocument(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DocumentDetailsComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentDetailsComponent_ng_template_12_ng_template_1_i_3_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentDetailsComponent_ng_template_12_ng_template_1_i_6_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DocumentDetailsComponent_ng_template_12_ng_template_1_i_8_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20)(10, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentDetailsComponent_ng_template_12_ng_template_1_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.deleteDocument(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const file_r6 = ctx_r24.$implicit;
    const i_r7 = ctx_r24.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r6.isFileNameEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("custom-input-", file_r6.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "fileName_", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", file_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !file_r6.isFileNameEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r6.class == "version-file-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r6.class == "version-file-card");
  }
}
function DocumentDetailsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentDetailsComponent_ng_template_12_Template_p_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const i_r7 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.getFileDetails(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentDetailsComponent_ng_template_12_ng_template_1_Template, 11, 9, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](file_r6.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "fileCard_", i_r7, "");
  }
}
function DocumentDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "p-inputSwitch", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_14_Template_p_inputSwitch_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.copyToAll = $event);
    })("ngModelChange", function DocumentDetailsComponent_div_14_Template_p_inputSwitch_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.copyFileDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 32)(6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Same metadata applicable for all documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isDuplicateExists)("ngModel", ctx_r4.copyToAll);
  }
}
function DocumentDetailsComponent_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52)(1, "div", 4)(2, "div", 53)(3, "div", 20)(4, "div", 54)(5, "p-checkbox", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_div_5_Template_p_checkbox_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.documentDetails.isOutgoing = $event);
    })("onChange", function DocumentDetailsComponent_div_15_div_5_Template_p_checkbox_onChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.onCheckboxChange($event, "isOutgoing"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 57)(8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Outgoing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r31.isDuplicateExists)("ngModel", ctx_r31.documentDetails.isOutgoing)("binary", true);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
function DocumentDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 34)(2, "div", 35)(3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocumentDetailsComponent_div_15_div_5_Template, 10, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "div", 4)(8, "div", 38)(9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 40)(12, "div", 41)(13, "p-dropdown", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_Template_p_dropdown_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.documentDetails.securityClassification = $event);
    })("onChange", function DocumentDetailsComponent_div_15_Template_p_dropdown_onChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.onMndtFieldChange($event, "securityClassification"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2)(16, "div", 4)(17, "div", 38)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Document Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 40)(21, "div", 41)(22, "p-dropdown", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_Template_p_dropdown_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.documentDetails.docType = $event);
    })("onChange", function DocumentDetailsComponent_div_15_Template_p_dropdown_onChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r45.onMndtFieldChange($event, "docType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2)(25, "div", 4)(26, "div", 4)(27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Document Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 40)(30, "div", 41)(31, "p-calendar", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_Template_p_calendar_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.documentDetails.docDate = $event);
    })("ngModelChange", function DocumentDetailsComponent_div_15_Template_p_calendar_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.onDateFieldChange($event, "docDate"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 2)(34, "div", 4)(35, "div", 4)(36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 40)(39, "div", 41)(40, "textarea", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_Template_textarea_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.documentDetails.docDescription = $event);
    })("ngModelChange", function DocumentDetailsComponent_div_15_Template_textarea_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.onNonMndtFieldChange($event, "docDescription"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 2)(43, "div", 4)(44, "div", 4)(45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 40)(48, "div", 41)(49, "textarea", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocumentDetailsComponent_div_15_Template_textarea_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.documentDetails.docRemarks = $event);
    })("ngModelChange", function DocumentDetailsComponent_div_15_Template_textarea_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.onNonMndtFieldChange($event, "docRemarks"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.documentDetails.fileName, " - Metadata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.showOutgoing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c1, !ctx_r5.isDuplicateExists, ctx_r5.isDuplicateExists));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", true)("disabled", ctx_r5.isDuplicateExists)("options", ctx_r5.secClassification)("ngModel", ctx_r5.documentDetails.securityClassification)("required", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c2, ctx_r5.formSubmitted && _r32.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c1, !ctx_r5.isDuplicateExists, ctx_r5.isDuplicateExists));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", true)("disabled", ctx_r5.isDuplicateExists)("options", ctx_r5.documentType)("ngModel", ctx_r5.documentDetails.docType)("required", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c2, ctx_r5.formSubmitted && _r33.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.documentDetails.docDate)("showIcon", true)("maxDate", ctx_r5.todaysDate)("disabled", ctx_r5.isDuplicateExists)("showTime", true)("showSeconds", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.documentDetails.docDescription)("rows", 5)("cols", 30)("disabled", ctx_r5.isDuplicateExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.documentDetails.docRemarks)("rows", 5)("cols", 30)("disabled", ctx_r5.isDuplicateExists);
  }
}
class DocumentDetailsComponent {
  constructor(utilService, datePipe) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.fileDetails = [];
    this.existingFileDetails = [];
    this.formSubmitted = false;
    this.secClassification = [];
    this.documentType = [];
    this.todaysDate = new Date();
    this.detSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.detailsSubmit = false;
    this.allDocDetails = [];
    this.copyToAll = false;
    this.isDuplicateExists = false;
    this.duplicateCount = 0;
    this.allFileNames = [];
    this.invalidDocuments = "";
    this.serviceType = "";
    this.showOutgoing = false;
  }
  ngOnInit() {
    this.getSecurityClassifications();
    this.getDocumentTypes();
    this.loadDocumentDetails();
    this.existingFileDetails?.forEach(eFile => {
      this.allFileNames.push(eFile.FileName);
    });
    if (this.serviceType == 'Circulation') this.showOutgoing = true;
  }
  ngOnChanges(changes) {
    if (changes['detailsSubmit'].currentValue) {
      this.submit();
    }
  }
  loadDocumentDetails() {
    this.fileDetails?.forEach(fDet => {
      let detObj = {};
      detObj.fileName = fDet.name;
      detObj.mimeType = fDet.type;
      this.allFileNames.push(fDet.name);
      fDet.newName = fDet.name;
      let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.existingFileDetails, function (file) {
        return file.FileName == fDet.name;
      });
      if (index != -1) {
        fDet.class = 'version-file-card';
        fDet.isFileNameEdit = false;
        this.isDuplicateExists = true;
        this.duplicateCount++;
        detObj.documentId = this.existingFileDetails[index].ID;
      } else {
        fDet.class = 'file-card';
        fDet.isFileNameEdit = false;
        detObj.documentId = '';
      }
      let reader = new FileReader();
      reader.onload = e => {
        let TYPED_ARRAY = new Uint8Array(e.target.result);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
        detObj.base64String = base64String;
      };
      reader.readAsArrayBuffer(fDet);
      this.allDocDetails.push(detObj);
    });
    if (this.allDocDetails.length > 0) {
      this.getFileDetails(0);
    }
  }
  getSecurityClassifications() {
    this.secClassification = [];
    //Service Integration
    let response = {
      "CodeTables": [{
        "CodeTables-id": {
          "Id": "389463",
          "ItemId": "002248573547A1ECA03AED61BD366817.389463"
        },
        "DisplayOrder": "2",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "C",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_C",
        "Name": "Confidential",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3149",
        "Title": {
          "Value": "CODE-000030364"
        }
      }, {
        "CodeTables-id": {
          "Id": "389464",
          "ItemId": "002248573547A1ECA03AED61BD366817.389464"
        },
        "DisplayOrder": "3",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "R",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_R",
        "Name": "Restricted",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3150",
        "Title": {
          "Value": "CODE-000030365"
        }
      }, {
        "CodeTables-id": {
          "Id": "389462",
          "ItemId": "002248573547A1ECA03AED61BD366817.389462"
        },
        "DisplayOrder": "1",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "S",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_S",
        "Name": "Secret",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3148",
        "Title": {
          "Value": "CODE-000030363"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'SECURITY_CLASSIFICATION');
  }
  getDocumentTypes() {
    this.documentType = [];
    //Service Integration
    let response = {
      "CodeTables": [{
        "CodeTables-id": {
          "Id": "389463",
          "ItemId": "002248573547A1ECA03AED61BD366817.389463"
        },
        "DisplayOrder": "2",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "C",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_C",
        "Name": "Confidential",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3149",
        "Title": {
          "Value": "CODE-000030364"
        }
      }, {
        "CodeTables-id": {
          "Id": "389464",
          "ItemId": "002248573547A1ECA03AED61BD366817.389464"
        },
        "DisplayOrder": "3",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "R",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_R",
        "Name": "Restricted",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3150",
        "Title": {
          "Value": "CODE-000030365"
        }
      }, {
        "CodeTables-id": {
          "Id": "389462",
          "ItemId": "002248573547A1ECA03AED61BD366817.389462"
        },
        "DisplayOrder": "1",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "S",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_S",
        "Name": "Secret",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3148",
        "Title": {
          "Value": "CODE-000030363"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'DOCUMENT_TYPES');
  }
  getMasterDataSuccessHandler(response, type) {
    if (response.CodeTables) {
      if (response.CodeTables.length > 0) {
        if (type == 'SECURITY_CLASSIFICATION') {
          response.CodeTables.forEach(data => {
            this.secClassification.push({
              label: data.Name,
              value: data.Code
            });
          });
          this.documentDetails ? this.documentDetails.securityClassification = 'SCLASS_S' : '';
        }
      } else if (!response.CodeTables.length) {
        let data = response.CodeTables;
        if (type == 'SECURITY_CLASSIFICATION') {
          this.secClassification.push({
            label: data.Name,
            value: data.Code
          });
          this.documentDetails.securityClassification = 'SCLASS_S';
        }
      }
    }
    if (response.DocumentTypes) {
      if (response.DocumentTypes.length > 0) {
        if (type == 'DOCUMENT_TYPES') {
          response.DocumentTypes.forEach(data => {
            this.documentType.push({
              label: data.DocumentType,
              value: data.CodeId
            });
          });
        }
      } else if (!response.DocumentTypes.length) {
        let data = response.DocumentTypes;
        if (type == 'DOCUMENT_TYPES') {
          this.documentType.push({
            label: data.DocumentType,
            value: data.CodeId
          });
        }
      }
    }
  }
  submit() {
    this.formSubmitted = true;
    if (!this.isDocDetailValid()) {
      this.detSubmit.emit({
        status: 'FAILURE',
        details: null
      });
      this.utilService.alert('error', 'Error', 'Please fill the mandatory details for the files - ' + this.invalidDocuments, false);
    } else if (this.allDocDetails.length == 0) {
      this.formSubmitted = false;
      this.detSubmit.emit({
        status: 'FAILURE',
        details: null
      });
      this.utilService.alert('error', 'Error', 'Please click on cancel to go back to document upload!!', false);
    } else {
      this.detSubmit.emit({
        status: 'SUCCESS',
        details: this.allDocDetails
      });
    }
  }
  getFileDetails(index) {
    this.documentDetails = this.allDocDetails[index];
    setTimeout(() => {
      this.handleStyle(index);
    });
  }
  isDocDetailValid() {
    let isValid = true;
    this.invalidDocuments = "";
    this.allDocDetails.forEach(doc => {
      if (this.utilService.isEmpty(doc.securityClassification) || this.utilService.isEmpty(doc.docType)) {
        isValid = false;
        this.invalidDocuments += doc.fileName + ',';
      }
    });
    if (this.invalidDocuments.substring(this.invalidDocuments.length - 1, this.invalidDocuments.length) == ",") this.invalidDocuments = this.invalidDocuments.substring(0, this.invalidDocuments.length - 1);
    return isValid;
  }
  handleStyle(index) {
    let element = null;
    for (var i = 0; i < this.fileDetails.length; i++) {
      if (i == index) {
        element = document.getElementById('fileCard_' + index);
        if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-file-card')) {
          element.classList.add('version-file-card-highlight');
        } else if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-change-file-card')) {
          element.classList.add('version-change-file-card-highlight');
        } else if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'name-change-file-card')) {
          element.classList.add('name-change-file-card-highlight');
        } else if (element != null && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-file-card') && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-change-file-card') && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'name-change-file-card')) {
          element.classList.add('file-card-highlight');
        }
      } else {
        element = document.getElementById('fileCard_' + i);
        if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-file-card')) {
          element.classList.remove('version-file-card-highlight');
        } else if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-change-file-card')) {
          element.classList.remove('version-change-file-card-highlight');
        } else if (element != null && lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'name-change-file-card')) {
          element.classList.remove('name-change-file-card-highlight');
        } else if (element != null && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-file-card') && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'version-change-file-card') && !lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[i].class, 'name-change-file-card')) {
          element.classList.remove('file-card-highlight');
        }
      }
    }
  }
  copyFileDetails(data) {
    if (data) {
      let copyContent = this.allDocDetails[0];
      if (this.utilService.isEmpty(copyContent.securityClassification) || this.utilService.isEmpty(copyContent.docType)) {
        this.formSubmitted = true;
        this.utilService.alert('error', 'Error', 'To copy details, please fill mandatory information for the first document - ' + this.fileDetails[0].name, false);
        setTimeout(() => {
          this.copyToAll = false;
        });
      } else {
        this.allDocDetails.forEach(doc => {
          doc.securityClassification = copyContent.securityClassification;
          doc.docType = copyContent.docType;
          doc.docDate = copyContent.docDate;
          doc.docDescription = copyContent.docDescription;
          doc.docRemarks = copyContent.docRemarks;
          doc.isOutgoing = copyContent.isOutgoing;
        });
      }
    }
  }
  deleteDocument(index) {
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.includes(this.fileDetails[index].class, 'version-file-card')) this.duplicateCount--;
    if (this.duplicateCount == 0) this.isDuplicateExists = false;
    this.fileDetails.splice(index, 1);
    this.allDocDetails.splice(index, 1);
  }
  versionDocument(index) {
    this.duplicateCount--;
    if (this.duplicateCount == 0) this.isDuplicateExists = false;
    this.fileDetails[index].documentId = this.allDocDetails[index].documentId;
    this.fileDetails[index].class = 'version-change-file-card';
    this.reloadAllDocs(index);
  }
  enableRenameDocument(index) {
    this.fileDetails[index].isFileNameEdit = true;
  }
  renameDocument(index) {
    let HTMLElement = document.getElementById('fileName_' + index);
    var newFileName = HTMLElement ? HTMLElement.value : '';
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf(this.allFileNames, newFileName) == -1) {
      this.duplicateCount--;
      if (this.duplicateCount == 0) this.isDuplicateExists = false;
      this.fileDetails[index].newName = newFileName;
      this.fileDetails[index].class = 'name-change-file-card';
      this.fileDetails[index].isFileNameEdit = false;
      this.reloadAllDocs(index);
    } else {
      this.utilService.alert('error', 'Error', 'Please change the name as file name already exists', false);
    }
  }
  reloadAllDocs(index) {
    this.allDocDetails[index].documentId = this.fileDetails[index].documentId, this.allDocDetails[index].fileName = this.fileDetails[index].newName;
  }
  onMndtFieldChange(data, attribute) {
    let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDocDetails, function (doc) {
      return doc[attribute] != data.value;
    });
    if (index != -1) {
      this.copyToAll = false;
    } else {
      this.copyToAll = true;
    }
  }
  onNonMndtFieldChange(data, attribute) {
    let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDocDetails, function (doc) {
      return doc[attribute] != data;
    });
    if (index != -1) {
      this.copyToAll = false;
    } else {
      this.copyToAll = true;
    }
  }
  onDateFieldChange(data, attribute) {
    let context = this;
    let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDocDetails, function (doc) {
      return context.datePipe.transform(doc[attribute], "yyyy-MM-dd'T'hh:mm") != context.datePipe.transform(data, "yyyy-MM-dd'T'hh:mm");
    });
    if (index != -1) {
      this.copyToAll = false;
    } else {
      this.copyToAll = true;
    }
  }
  onCheckboxChange(data, attribute) {
    let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDocDetails, function (doc) {
      return doc[attribute] != data.checked;
    });
    if (index != -1) {
      this.copyToAll = false;
    } else {
      this.copyToAll = true;
    }
  }
}
DocumentDetailsComponent.ɵfac = function DocumentDetailsComponent_Factory(t) {
  return new (t || DocumentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe));
};
DocumentDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DocumentDetailsComponent,
  selectors: [["document-details"]],
  viewQuery: function DocumentDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.reqForm = _t.first);
    }
  },
  inputs: {
    fileDetails: "fileDetails",
    existingFileDetails: "existingFileDetails",
    detailsSubmit: "detailsSubmit",
    division: "division",
    serviceType: "serviceType"
  },
  outputs: {
    detSubmit: "detSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 17,
  vars: 5,
  consts: [[1, "container-fluid"], ["docDetails", "ngForm"], [1, "row"], [1, "col-lg-6"], [1, "col-lg-12", "sm-padding", "no-padding"], ["class", "sm-padding form-field-header no-bottom-padding no-top-padding", 4, "ngIf"], [1, "col-lg-10", "xsm-padding"], [1, "sm-padding"], ["ngFor", "", 3, "ngForOf"], [1, "row", "sm-padding"], ["class", "col-lg-12 no-top-padding", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], ["position", "top-right", "closable", "true"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [3, "id", "click"], ["pTemplate", "title"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to update document metadata", 1, "col-lg-8"], [1, "p-input-icon-right", 2, "width", "100%"], ["tooltipPosition", "top", "pTooltip", "Click to confirm file name", "class", "pi pi-check", 3, "click", 4, "ngIf"], ["type", "text", "pInputText", "", "pInputText", "", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter new file name", 2, "cursor", "pointer !important", "font-size", "13px !important", 3, "id", "disabled", "value"], [1, "col-lg-1"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to edit the file name", "class", "fa fa-edit", "style", "width: 10% !important;", 3, "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to create a new version", "class", "fa fa-history", "style", "width: 10% !important;", 3, "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to delete", 1, "fa", "fa-times", 2, "width", "10% !important", 3, "click"], ["tooltipPosition", "top", "pTooltip", "Click to confirm file name", 1, "pi", "pi-check", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to edit the file name", 1, "fa", "fa-edit", 2, "width", "10% !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to create a new version", 1, "fa", "fa-history", 2, "width", "10% !important", 3, "click"], [1, "col-lg-12", "no-top-padding"], [1, "row", "no-top-padding", 2, "height", "45px", "padding-top", "10px"], [1, "col-lg-1", 2, "margin-right", "15px"], ["name", "copySwitch", 1, "custom-switch", 3, "disabled", "ngModel", "ngModelChange"], ["copySwitch", "ngModel"], [1, "col-lg-10", 2, "padding-top", "3px", "padding-left", "15px"], [1, "sm-padding", "no-padding", "form-field-header"], [1, "row", "xsm-padding"], [1, "col-lg-12", "xsm-padding", "no-padding"], [1, "xsm-padding", "form-field-header", "form-divider", "no-top-padding", 2, "overflow-wrap", "break-word", "max-width", "35.5rem"], ["class", "row sm-padding no-bottom-padding", 4, "ngIf"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose security classification", "name", "secClssfctn", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose security classification", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["secClssfctn", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose document type", "name", "dType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose document type", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["dType", "ngModel"], ["appendTo", "body", "inputId", "icon", "dateFormat", "dd/mm/yy", "name", "dDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document date", 1, "customized-calendar", 3, "ngModel", "showIcon", "maxDate", "disabled", "showTime", "showSeconds", "ngModelChange"], ["dDate", "ngModel"], ["pInputTextarea", "", "name", "docDesc", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document description", 1, "custom-textarea", 2, "height", "60px !important", 3, "ngModel", "rows", "cols", "disabled", "ngModelChange"], ["docDesc", "ngModel"], ["pInputTextarea", "", "name", "docRem", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document remarks", 1, "custom-textarea", 2, "height", "60px !important", 3, "ngModel", "rows", "cols", "disabled", "ngModelChange"], ["docRem", "ngModel"], [1, "row", "sm-padding", "no-bottom-padding"], [1, "row", "no-top-padding"], [1, "p-field-radiobutton"], ["name", "ogng", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange", "onChange"], ["ogng", "ngModel"], [1, "col-lg-10", 2, "padding-top", "3px"]],
  template: function DocumentDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", null, 1)(3, "div", 2)(4, "div", 3)(5, "div", 2)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentDetailsComponent_div_7_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DocumentDetailsComponent_div_8_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "div", 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DocumentDetailsComponent_ng_template_12_Template, 2, 4, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DocumentDetailsComponent_div_14_Template, 8, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DocumentDetailsComponent_div_15_Template, 51, 40, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "p-toast", 12);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDuplicateExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDuplicateExists);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fileDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fileDetails.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.documentDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_4__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9857:
/*!*********************************************************************************!*\
  !*** ./src/app/commons/components/document-upload/document-upload.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOC_METADATA": () => (/* binding */ DOC_METADATA),
/* harmony export */   "DocumentUploadComponent": () => (/* binding */ DocumentUploadComponent)
/* harmony export */ });
/* harmony import */ var _entities_document_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../entities/document-details */ 8887);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tree */ 3449);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/blockui */ 81);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-dropzone */ 2522);
/* harmony import */ var _document_details_document_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document-details/document-details.component */ 8715);
/* harmony import */ var _document_versions_document_versions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-versions/document-versions.component */ 978);



























const _c0 = ["docDetailsModal"];
const _c1 = ["docVersionsModal"];
const _c2 = ["docMetadataModal"];
const _c3 = ["docsDT"];
const _c4 = function () {
  return {
    "height": "6px"
  };
};
function DocumentUploadComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-progressBar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c4));
  }
}
function DocumentUploadComponent_div_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](node_r19.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", node_r19.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", node_r19.label, " ");
  }
}
function DocumentUploadComponent_div_5_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_div_5_ng_template_9_div_0_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const docType_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.filterDocsByType(docType_r20.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 40)(4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "p-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const docType_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](docType_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", docType_r20.value);
  }
}
function DocumentUploadComponent_div_5_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DocumentUploadComponent_div_5_ng_template_9_div_0_Template, 8, 2, "div", 36);
  }
  if (rf & 2) {
    const docType_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", docType_r20.value != "0");
  }
}
const _c5 = function () {
  return {
    width: "99%",
    height: "268px"
  };
};
const _c6 = function () {
  return {
    width: "99%",
    height: "325px"
  };
};
function DocumentUploadComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "p-scrollPanel", 28)(4, "p-tree", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onNodeSelect", function DocumentUploadComponent_div_5_Template_p_tree_onNodeSelect_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.nodeSelect($event));
    })("onNodeUnselect", function DocumentUploadComponent_div_5_Template_p_tree_onNodeUnselect_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.nodeUnselect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DocumentUploadComponent_div_5_ng_template_5_Template, 2, 5, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 31)(7, "p-scrollPanel", 32)(8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DocumentUploadComponent_div_5_ng_template_9_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.docTree)("propagateSelectionUp", false)("propagateSelectionDown", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.docTypeCountList);
  }
}
function DocumentUploadComponent_ng_template_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_11_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.getTotalFiles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Show all files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DocumentUploadComponent_ng_template_11_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_11_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.createCirculation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DocumentUploadComponent_ng_template_11_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_11_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.deleteDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c7 = function (a0) {
  return {
    "width": a0
  };
};
function DocumentUploadComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "span", 45)(2, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function DocumentUploadComponent_ng_template_11_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r3.filterGlobal(_r30.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DocumentUploadComponent_ng_template_11_span_6_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DocumentUploadComponent_ng_template_11_i_8_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 52)(10, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_11_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.refreshDocuments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 52)(12, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_11_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.downloadDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DocumentUploadComponent_ng_template_11_i_14_Template, 1, 0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r4.files.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.reqType == "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c7, ctx_r4.reqType == "File" ? "27%" : "48%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isLOUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.readOnly == "N" && ctx_r4.showDelete);
  }
}
function DocumentUploadComponent_ng_template_12_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-sortIcon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pSortableColumn", col_r46.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r46.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", col_r46.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", col_r46.field);
  }
}
function DocumentUploadComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DocumentUploadComponent_ng_template_12_th_2_Template, 3, 4, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", columns_r44);
  }
}
function DocumentUploadComponent_ng_template_13_p_tableRadioButton_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-tableRadioButton", 65);
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const rowData_r47 = ctx_r52.$implicit;
    const i_r49 = ctx_r52.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", rowData_r47)("index", i_r49);
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", col_r53.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, rowData_r47[col_r53.field], "dd/MM/yyyy h:mm:ss") : rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("pTooltip", rowData_r47[col_r53.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_13_ng_template_3_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67);
      const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r65.openMetadataEdit(rowData_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](rowData_r47["StyleClass"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](rowData_r47["StyleClass"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_13_ng_template_3_td_4_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r74);
      const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.getDocuments(rowData_r47[col_r53.field]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](rowData_r47["StyleClass"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_13_ng_template_3_td_5_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80);
      const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r78.openDocumentVersions(rowData_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r47[col_r53.field], " ");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 84)(1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_13_ng_template_3_td_6_a_5_Template_i_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r85.textFinalData($event, rowData_r47, _r3, _r83));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pRowToggler", rowData_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r84.expanded ? "..less" : "...more");
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "div")(2, "div", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DocumentUploadComponent_ng_template_13_ng_template_3_td_6_a_5_Template, 3, 2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const col_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r49 = ctx_r90.rowIndex;
    const rowData_r47 = ctx_r90.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", col_r53.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", i_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rowData_r47[col_r53.field], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.checkOverflow(_r83));
  }
}
function DocumentUploadComponent_ng_template_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DocumentUploadComponent_ng_template_13_ng_template_3_td_0_Template, 3, 5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DocumentUploadComponent_ng_template_13_ng_template_3_td_1_Template, 2, 3, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DocumentUploadComponent_ng_template_13_ng_template_3_td_2_Template, 3, 5, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DocumentUploadComponent_ng_template_13_ng_template_3_td_3_Template, 3, 5, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DocumentUploadComponent_ng_template_13_ng_template_3_td_4_Template, 3, 5, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DocumentUploadComponent_ng_template_13_ng_template_3_td_5_Template, 2, 2, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DocumentUploadComponent_ng_template_13_ng_template_3_td_6_Template, 6, 4, "td", 72);
  }
  if (rf & 2) {
    const col_r53 = ctx.$implicit;
    const rowData_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field != "FileVersion" && col_r53.field != "FileDescription" && col_r53.field != "FileName" && col_r53.field != "FileTypeDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileTypeDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileName" && rowData_r47["DocType"] != "FOLDER" && ctx_r51.readOnly != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileName" && rowData_r47["DocType"] != "FOLDER" && ctx_r51.readOnly == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileName" && rowData_r47["DocType"] == "FOLDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileVersion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", col_r53.field == "FileDescription");
  }
}
function DocumentUploadComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 63)(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DocumentUploadComponent_ng_template_13_p_tableRadioButton_2_Template, 1, 2, "p-tableRadioButton", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DocumentUploadComponent_ng_template_13_ng_template_3_Template, 7, 7, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r47 = ctx.$implicit;
    const columns_r48 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", rowData_r47["DocType"] != "FOLDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", columns_r48);
  }
}
function DocumentUploadComponent_ng_template_14_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No documents available in request!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DocumentUploadComponent_ng_template_14_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No documents available in folder!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DocumentUploadComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DocumentUploadComponent_ng_template_14_tr_0_Template, 3, 0, "tr", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DocumentUploadComponent_ng_template_14_tr_1_Template, 3, 0, "tr", 72);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.reqType == "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.reqType == "File");
  }
}
function DocumentUploadComponent_div_15_ngx_dropzone_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-dropzone-label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Drag & Drop or Click to add documents here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DocumentUploadComponent_div_15_ngx_dropzone_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-dropzone-label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Drag & Drop or Click to add documents here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DocumentUploadComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 88)(2, "ngx-dropzone", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DocumentUploadComponent_div_15_Template_ngx_dropzone_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r96.onSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DocumentUploadComponent_div_15_ngx_dropzone_label_3_Template, 3, 0, "ngx-dropzone-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DocumentUploadComponent_div_15_ngx_dropzone_label_4_Template, 2, 0, "ngx-dropzone-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxFileSize", 30000000);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.reqType == "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.reqType == "Request");
  }
}
const _c8 = function () {
  return {
    width: "100%",
    height: "429px"
  };
};
function DocumentUploadComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 4)(3, "div", 94)(4, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Document Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 96)(7, "p-scrollPanel", 97)(8, "document-details", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("detSubmit", function DocumentUploadComponent_ng_template_16_Template_document_details_detSubmit_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r98.onDetailsSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 99)(10, "p-button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_16_Template_p_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r99);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r100.updateDocumentDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_16_Template_p_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r99);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r101.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fileDetails", ctx_r10.allFiles)("existingFileDetails", ctx_r10.files)("detailsSubmit", ctx_r10.updateDocDetails)("division", ctx_r10.fileDivision)("serviceType", ctx_r10.reqType);
  }
}
const _c9 = function () {
  return {
    width: "100%",
    height: "530px"
  };
};
function DocumentUploadComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 4)(3, "div", 94)(4, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Document Versions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 96)(7, "p-scrollPanel", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "document-versions", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 99)(10, "p-button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_18_Template_p_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r102.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("docDetails", ctx_r12.versionData)("reqType", ctx_r12.reqType)("fileID", ctx_r12.fileID)("requestNo", ctx_r12.requestNo)("division", ctx_r12.fileDivision);
  }
}
const _c10 = function () {
  return {
    width: "100%",
    height: "545px"
  };
};
const _c11 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
const _c12 = function () {
  return {
    "required": true,
    "read-only": false
  };
};
function DocumentUploadComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 4)(3, "div", 94)(4, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 96)(7, "p-scrollPanel", 105)(8, "div", 23)(9, "div", 106)(10, "div", 4)(11, "div", 107)(12, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "div", 107)(16, "div", 109)(17, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 111)(20, "div", 112)(21, "p-dropdown", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_ng_template_20_Template_p_dropdown_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r109.metadata.SecurityClassification = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4)(24, "div", 107)(25, "div", 109)(26, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Document Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 111)(29, "div", 112)(30, "p-dropdown", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_ng_template_20_Template_p_dropdown_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r111.metadata.FileType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 4)(33, "div", 107)(34, "div", 107)(35, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Document Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 111)(38, "div", 112)(39, "p-calendar", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_ng_template_20_Template_p_calendar_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r112.metadata.FileDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 4)(42, "div", 107)(43, "div", 107)(44, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 111)(47, "div", 112)(48, "textarea", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_ng_template_20_Template_textarea_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r113.metadata.FileDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 4)(51, "div", 107)(52, "div", 107)(53, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 111)(56, "div", 112)(57, "textarea", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocumentUploadComponent_ng_template_20_Template_textarea_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r114.metadata.Remarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 99)(60, "p-button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_20_Template_p_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r115.updateMetadata());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p-button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_20_Template_p_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r116.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r14.metadata.FileName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r14.secClassification)("ngModel", ctx_r14.metadata.SecurityClassification)("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", false)("options", ctx_r14.documentTypes)("ngModel", ctx_r14.metadata.FileType)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r14.metadata.FileDate)("showIcon", true)("maxDate", ctx_r14.todaysDate)("disabled", false)("showTime", true)("showSeconds", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r14.metadata.FileDescription)("rows", 5)("cols", 30)("disabled", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r14.metadata.Remarks)("rows", 5)("cols", 30)("disabled", false);
  }
}
function DocumentUploadComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r118);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r15.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocumentUploadComponent_ng_template_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r118);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r15.reject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c13 = function (a0) {
  return {
    "height": a0
  };
};
const _c14 = function () {
  return {
    width: "100%"
  };
};
const _c15 = function () {
  return ["FileName", "FileDescription", "FileVersion", "FileClass"];
};
const _c16 = function () {
  return {
    width: "35vw"
  };
};
class DocumentUploadComponent {
  constructor(modalService, utilService, datePipe, confirmationService) {
    this.modalService = modalService;
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.confirmationService = confirmationService;
    this.checkedCount = 0;
    this.hash = "#";
    this.reqFiles = [];
    this.files = [];
    this.fileCols = [];
    this.allFiles = [];
    this.updateDocDetails = false;
    this.fileID = "";
    this.requestNo = "";
    this.csPath = "";
    this.progressValue = 0;
    this.showProgress = false;
    this.selectedIndex = -1;
    this.serviceName = "";
    this.fileDivision = "";
    this.expanded = false;
    this.fileReqNos = [];
    this.documentTypes = [];
    this.docTypeCount = new Map();
    this.docTypeCountList = [];
    this.metadata = new DOC_METADATA();
    this.todaysDate = new Date();
    this.documentType = [];
    this.secClassification = [];
    this.docMimeStyleMap = new Map();
    this.totalFiles = [];
    this.noOfRows = 15;
    this.cclInprogressStates = ['Forward to Assignment within Division', 'Assign within Division', 'Return to Registry'];
    this.cclClosedStates = ['BackCapture', 'Discard', 'Closed', 'Completed', 'Draft'];
    this.itemSubject = "";
    this.userGroups = [];
    this.isLOUser = false;
    this.isDocBlocked = false;
    this.showDelete = false;
    this.currentUserName = "";
    this.requestID = "";
    this.requestType = "";
    this.readOnly = "";
  }
  ngOnInit() {
    this.reqType = this.requestType;
    this.reqItemID = this.requestID;
    this.readOnly = this.readOnly;
    this.getLoggedInUserDetails();
    if (this.reqType == 'File') {
      this.fileCols = [{
        field: "FileName",
        label: "Name",
        type: "string",
        spanWidth: "2"
      }, {
        field: "FileDescription",
        label: "Description",
        type: "string",
        spanWidth: "3"
      }, {
        field: "FileVersion",
        label: "Version",
        type: "string",
        spanWidth: "1"
      }, {
        field: "FileClass",
        label: "Class",
        type: "string",
        spanWidth: "1"
      }, {
        field: "FileDate",
        label: "Doument Date",
        type: "date",
        spanWidth: "2"
      }];
    }
    this.getItemDetails(this.reqType, this.reqItemID);
    this.loadDocMimeTypeStyleClassMap();
    if (this.readOnly == 'Y') {
      this.noOfRows = 15;
    }
    this.checkIfUserIsLO();
  }
  getLoggedInUserDetails() {
    this.currentUserName = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService.CURRENT_USER_NAME;
  }
  getItemDetails(type, itemID) {
    //Service Integration
    let response = {
      "GenericFile": {
        "GenericFile-id": {
          "Id": "2473999",
          "ItemId": "002248573547A1EC9E9CF72B1B84A817.2473999"
        },
        "ForeignAgencyTypeDesc": null,
        "SerialNo": null,
        "FileCreatedBy": "iadro1",
        "MLADualCriminality": null,
        "I_MLA_HOA": null,
        "MLARequestedUnder": null,
        "DefaultLayoutID": "002248573547A1ECB989DF36749AA81F",
        "I_CourierCostCalculationTrigger": null,
        "AgencyNameDesc": null,
        "DashboardURL": "/home/AGC/SIW/#/dashboard",
        "I_RequestNo": null,
        "LocalOrForeign": null,
        "MLACaseStatusDesc": null,
        "MLAPoliticalExposedPerson": null,
        "FileReferenceNo": "AG/LEGIS/LEG/B/2022/000000002",
        "HistoryURL": "/home/AGC/SIW/#/?history&itemID=002248573547A1EC9E9CF72B1B84A817.2473999&source=File",
        "FileType": "ADVISORY",
        "RecordsFileType": null,
        "MLASovereignty": null,
        "I_ForeignAgencyType": null,
        "RecordsTransferDate": null,
        "MLANovelLegalSensitiveIssue": null,
        "SecurityClassificationDesc": null,
        "MLAContentious": null,
        "CountryForeignOrgDesc": null,
        "RecordsConversionRemarks": null,
        "CaseActivityURL": "/home/AGC/SIW/#/dashboard?caseactivity=File&itemID=002248573547A1EC9E9CF72B1B84A817.2473999",
        "I_MLAFATFPurpose": null,
        "FileCreatedDate": "2022-06-08T09:25:39Z",
        "LocalForeignDesc": null,
        "I_AgencyName": null,
        "RecordsConversionDate": null,
        "I_Header2": "B",
        "LegisTags": null,
        "MLADeathPenalty": null,
        "FileTitle": "Test advisory file Priya",
        "MLACaseStatus": null,
        "FileSensitivity": null,
        "MLARequestedUnderDesc": null,
        "I_CostCalculationTrigger": "False",
        "RecordsDispositionActionDesc": null,
        "CSPath": "AG/LEGIS/LEG/2022/000000002",
        "MLASubType": null,
        "I_ParticipantUserName": null,
        "MLAOffencePunishableByCaning": "false",
        "TopicTags": null,
        "MLAFATFPurposeDesc": null,
        "DocumentsURL": "/home/AGC/SIW/#/?source=File&itemID=002248573547A1EC9E9CF72B1B84A817.2473999",
        "MLA_TotalELitigationCost": "0.00",
        "I_Header1": "LEG",
        "I_ForeignAgencyName": null,
        "MLAReceivedDate": null,
        "Description": null,
        "MLA_TotalCourierCost": null,
        "MLARequestPerfectedDate": null,
        "ForeignAgencyNameDesc": null,
        "RecordsDispositionAction": null,
        "MLAComplexityDesc": null,
        "RecordsDispositionRemarks": null,
        "MLAComplexity": null,
        "I_RequestNos": null,
        "ForeignAgencyType": null,
        "ForeignAgencyName": null,
        "MLASeniorGovtOfficial": "false",
        "MLAOutgoingSentDate": null,
        "MLAFATFPurpose": null,
        "FileStatusDesc": null,
        "I_MLACaseType": null,
        "RecordsRevisedRetentionPeriod": null,
        "RecordsLastActionDate": "2022-07-18T15:31:32Z",
        "SecurityClassification": "SCLASS_S",
        "LocalForeign": "ADDR_L",
        "MLAAssignedOfficer": null,
        "ExtAgencyRefNo": null,
        "FileID": "F0000000296",
        "FileOwner": "priya",
        "I_MLACaseSubType": null,
        "I_Edit": "false",
        "I_Year": "2022",
        "IsMigrated": null,
        "MLASubTypeDesc": null,
        "Remarks": "Test advisory file Priya",
        "RecordsDispositionDate": null,
        "AgencyType": "EAT_GM",
        "RecordsRetentionPeriod": null,
        "MLACaseType": null,
        "Sensitivity": "true",
        "MLAFileCloseDate": null,
        "MLAFileOpenDate": null,
        "I_MLAEdit": "false",
        "AgencyName": "MEWR",
        "CountryForeignOrg": null,
        "AgencyTypeDesc": null,
        "LayoutID": "002248573547A1ECA51E73D1F18C681A",
        "I_Division": "LEGIS",
        "FileStatus": null,
        "AdvisoryPassageOfBill": {
          "AdvisoryPassageOfBill-id": {
            "Id": "131073",
            "ItemId": "002248573547A1ECA2984041634F6819.131073"
          }
        },
        "Title": {
          "Value": "AG/LEGIS/LEG/B/2022/000000002"
        },
        "Tracking": {
          "LastModifiedDate": "2022-07-18T15:32:15Z",
          "CreatedDate": null,
          "LastModifiedBy": {
            "Identity-id": {
              "Id": "164134917",
              "ItemId": "F8B156E1037111E6E9CB0FBF3334FBBF.164134917"
            }
          }
        }
      }
    };
    if (this.reqType === 'File' && response.GenericFile) {
      let itemDetails = response.GenericFile;
      this.fileID = itemDetails.FileReferenceNo;
      this.csPath = itemDetails.CSPath;
      this.serviceName = itemDetails.FileType;
      this.fileDivision = itemDetails.I_Division;
      this.itemSubject = itemDetails.FileTitle;
      this.getDocumentTypes(response.GenericFile.I_Division);
      this.getSecurityClassifications();
    }
  }
  getRequestNosForFile(fileRefNo) {
    //Service Integration
    let response = {
      "GetRequestsResponse": {
        "GenericRequest": {
          "LastModifiedBy": {
            "Identity-id": {
              "Id": "164134917",
              "ItemId": "F8B156E1037111E6E9CB0FBF3334FBBF.164134917"
            }
          },
          "CreatedBy": {
            "Identity-id": {
              "Id": "163971073",
              "ItemId": "F8B156E1037111E6E9CB0FBF3334FBBF.163971073"
            }
          },
          "Tracking": {
            "LastModifiedDate": "2022-07-18T15:32:32Z",
            "CreatedDate": "2022-07-18T15:30:18Z",
            "LastModifiedBy": {
              "Identity-id": {
                "Id": "164134917",
                "ItemId": "F8B156E1037111E6E9CB0FBF3334FBBF.164134917"
              }
            },
            "CreatedBy": {
              "Identity-id": {
                "Id": "163971073",
                "ItemId": "F8B156E1037111E6E9CB0FBF3334FBBF.163971073"
              }
            }
          },
          "MainFile": {
            "GenericFile-id": {
              "Id": "2473999",
              "ItemId": "002248573547A1EC9E9CF72B1B84A817.2473999"
            }
          },
          "Lifecycle": {
            "InstanceIdentifier": "00224857-3547-A1ED-81AB-A043B784E824",
            "CurrentState": "Forward to Assignment / Assign within Division",
            "CurrentStateId": "00224857-3547-A1EC-A2C8-46FBDBF22819",
            "ParentState": "Forward to Assignment / Assign within Division",
            "RootState": "Forward to Assignment / Assign within Division",
            "PriorActivity": "SetFileToRequestRelation",
            "PriorEvent": "All Activity Completion",
            "PreviousState": "FA/ AD Procesing",
            "PreviousStateId": "00224857-3547-A1EC-BC4F-D7459A1B2822",
            "InstanceStatus": "In Progress"
          },
          "Title": {
            "Value": "ADV000000058"
          },
          "DateOfDispatch": null,
          "AssigningOfficer": null,
          "PostalCode": null,
          "DueDateChangeRemarks": null,
          "RequestReceivedModeDesc": "By Fax",
          "IsMigrated": null,
          "DefaultDocumentsURL": null,
          "RequestReceivedMode": "RMODE_F",
          "RequestCreatedBy": "iadro1",
          "I_ReqCloseHandler_InstanceID": null,
          "InternalRequestingDivisionDesc": null,
          "I_AOUserDN": null,
          "MainOfficerExists": "true",
          "OfficerEmail": null,
          "RevisedDueDate": null,
          "I_Current_AOTaskID": null,
          "ActionsDraft": "Assign within Division",
          "ActionsClosureReason": "RCR_F",
          "ExpResponseDate": "2022-07-19T12:00:00Z",
          "RequestLocked": "false",
          "CountryForeignOrgDesc": null,
          "ForeignAgencyType": null,
          "AllowAO_OOO": "false",
          "ActionsMainOfficer": "false",
          "IsSensitive": "false",
          "RequestorName": "test",
          "Internal": "false",
          "RequestLockedBy": null,
          "I_ROUserDN": null,
          "ForeignAgencyTypeDesc": null,
          "RequestingAgencyRefNo": null,
          "RequestActions": null,
          "ActionsLO": "Return to Registry",
          "ComplexityChangeRemarks": null,
          "ContactNo": null,
          "OfficerName": null,
          "DefaultLayoutID": "002248573547A1ECA970AD0E1EFC681B",
          "SecurityClassification": "SCLASS_S",
          "LO_OOO_Message": null,
          "LayoutID": "002248573547A1ECA2C9120D41FB2819",
          "BlockOrHouseName": null,
          "ReceivedDate": "2022-07-18T08:59:58Z",
          "RequestingAgencyNameDesc": "MINISTRY OF COMMUNITY DEVELOPMENT, YOUTH And SPORTS",
          "LegisTags": null,
          "ActionsAssigningOfficer": null,
          "RequestingAgencyName": "MCYS",
          "RequestingAgencyType": "EAT_GM",
          "RequestTypeDesc": "Advisory",
          "Email": "test@gmail.om",
          "UserDivision": "LEGIS",
          "RequestStatusDesc": "Assigned",
          "OtherAgency": null,
          "InternalRequestingDivision": null,
          "CountryForeignOrg": null,
          "DocumentsURL": "/home/AGC/SIW/#/?source=Request&itemID=002248573547A1EC9F382DC3A9CD6817.2998276",
          "BuildingName": null,
          "I_LOConsolidation_InstanceID": "00224857-3547-A1ED-81AB-AC35A082E824",
          "AllowLO_OOO": "false",
          "RequestStatus": "RSTAT_A",
          "IsAO_OOO": "false",
          "ComplexityDesc": "Extremely Complex",
          "RequestDueDate": "2022-08-15T00:00:00Z",
          "ActionsRO": null,
          "RequestClosedDate": null,
          "RequestCreatedDate": "2022-07-18T09:00:18Z",
          "I_AOGroupDN": null,
          "ActionsOfficerName": "legislo2",
          "RequestState": "Assign within Division",
          "ForeignAgencyNameDesc": null,
          "DashboardURL": "/home/AGC/SIW/#/dashboard",
          "UrgencyDesc": "Not Urgent",
          "HistoryURL": "/home/AGC/SIW/#/?history&itemID=002248573547A1EC9F382DC3A9CD6817.2998276&source=Request",
          "Complexity": "RCOMPLEX_EC",
          "StreetName": null,
          "ActionRemarks": "remarks",
          "RequestNo": "ADV000000058",
          "ActionsAO": null,
          "I_Current_ROTaskID": null,
          "LocalForeignDesc": "Local",
          "Remarks": null,
          "UnitNo": null,
          "LocalForeign": "ADDR_L",
          "RevisedComplexity": null,
          "Sensitivity": "true",
          "ForeignAgencyName": null,
          "CSPath": "AG/LEGIS/LEG/2022/000000002/ADV000000058",
          "ActionsReturnToRegistryReason": "RCR_F",
          "I_MainFileRefNo": "AG/LEGIS/LEG/B/2022/000000002",
          "I_OfficersEmail": null,
          "LocalOrForeign": null,
          "SecurityClassificationDesc": "Secret",
          "Urgency": "RURGENT_NU",
          "TopicTags": null,
          "I_Edit": null,
          "RequestingAgencyTypeDesc": "Government Ministry",
          "ClosureReasons": null,
          "OriginalDueDate": "2022-08-15T05:30:00Z",
          "AO_OOO_Message": null,
          "E_RevisedDueDate": null,
          "RequestTitle": "Advisory Request LO",
          "RequestType": "RTYPE_ADV",
          "IsLO_OOO": "false",
          "I_ROGroupDN": "",
          "I_TargetTypeValue": "00224857-3547-A1EC-AC2D-A62398BA281B",
          "RequestLockedTime": null,
          "GenericRequest-id": {
            "Id": "2998276",
            "ItemId": "002248573547A1EC9F382DC3A9CD6817.2998276"
          }
        }
      }
    };
    let resp = response.GetRequestsResponse;
    if (resp && resp.GenericRequest) {
      let data = resp.GenericRequest;
      this.fileReqNos.push({
        label: data.RequestNo,
        value: data.RequestNo
      });
    }
    this.getDocumentsForFile();
    this.loadDocData();
  }
  loadDocData() {
    let children = [];
    this.fileReqNos.forEach(req => {
      let child = {};
      child.label = req.label, child.expandedIcon = 'fa fa-folder-open', child.collapsedIcon = 'fa fa-folder', child.expanded = false, child.styleClass = 'doc_tree_child_node';
      children.push(child);
    });
    this.docTree = [{
      label: this.fileID,
      expandedIcon: "fa fa-folder-open",
      collapsedIcon: "fa fa-folder",
      expanded: true,
      children: children,
      styleClass: "doc_tree_node_highlight"
    }];
  }
  onSelect(event) {
    let aFiles = [];
    let rFiles = [];
    aFiles.push(...event.addedFiles);
    rFiles.push(...event.rejectedFiles);
    if (rFiles.length > 0) {
      let fNames = '';
      rFiles.forEach(fl => {
        fNames += fl.name + ",";
      });
      fNames = fNames.substring(0, fNames.length - 1);
      this.utilService.alert('error', 'Error', 'Cannot upload files - ' + fNames + ' as they exceed the maximum file size 30MB!!', false);
    }
    if (aFiles.length > 0) {
      this.reqFiles.push(...event.addedFiles);
      this.allFiles = event.addedFiles;
      this.openModal(this.details, 'xl-modal');
    }
  }
  getDocumentsForFile() {
    this.resetDocTypeCount();
    this.files = [];
    //Service Integration
    let response = {
      "tuple": [{
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "300",
            "FILE_NAME": "DateTimePicker.png",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/DateTimePicker.png",
            "CS_DOCUMENT_ID": "182136",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asdasd",
            "DOCUMENT_DESCRIPTION": "asdasd",
            "DOCUMENT_DATE": "2022-06-07T01:16:59.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-06-08T07:47:04.270000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "image/png",
            "DOCUMENT_FORMAT": "png",
            "OUTGOING": "",
            "FILE_TYPE_DESC": null,
            "SEC_CLASS_DESC": null,
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "316",
            "FILE_NAME": "ADVISORY_ADDED_FILES.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ADDED_FILES.xml",
            "CS_DOCUMENT_ID": "218679",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asd",
            "DOCUMENT_DESCRIPTION": "asd",
            "DOCUMENT_DATE": "2022-07-12T09:03:24.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-07-15T03:33:28.907000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": "xml",
            "OUTGOING": "",
            "FILE_TYPE_DESC": null,
            "SEC_CLASS_DESC": null,
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "337",
            "FILE_NAME": "ADVISORY_ASSIGNMENT_CC.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ASSIGNMENT_CC.xml",
            "CS_DOCUMENT_ID": "221911",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asAS",
            "DOCUMENT_DESCRIPTION": "asAS",
            "DOCUMENT_DATE": "2022-07-24T09:26:56.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "1",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-07-25T03:57:00.597000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": "xml",
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Advice",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "358",
            "FILE_NAME": "ADVISORY_CIR_ROUTE.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CIR_ROUTE.xml",
            "CS_DOCUMENT_ID": "236758",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asdasd",
            "DOCUMENT_DESCRIPTION": "asda",
            "DOCUMENT_DATE": "2022-08-01T09:58:49.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "12",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T04:28:56.790000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Gazette Notification",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "359",
            "FILE_NAME": "ADVISORY_CROSS_DIV_OFF.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CROSS_DIV_OFF.xml",
            "CS_DOCUMENT_ID": "236881",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "fghfghfg",
            "DOCUMENT_DESCRIPTION": "hfgh",
            "DOCUMENT_DATE": "2022-08-01T10:20:39.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T04:50:50.063000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "File Note",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "362",
            "FILE_NAME": "ADVISORY_DISPATCH_DOC.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_DISPATCH_DOC.xml",
            "CS_DOCUMENT_ID": "237330",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "Test document upload",
            "DOCUMENT_DESCRIPTION": "Test document upload",
            "DOCUMENT_DATE": "2022-08-01T02:51:20.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T09:21:27.940000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "File Note",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "366",
            "FILE_NAME": "CIR_ROUTE_HISTORY.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_ROUTE_HISTORY.xml",
            "CS_DOCUMENT_ID": "246477",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "ASDASD",
            "DOCUMENT_DESCRIPTION": "ASD",
            "DOCUMENT_DATE": "2022-08-01T11:34:43.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-18T06:04:49.283000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Egazette",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "367",
            "FILE_NAME": "CIR_TIMELOG.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_TIMELOG.xml",
            "CS_DOCUMENT_ID": "246367",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "ASDASD",
            "DOCUMENT_DESCRIPTION": "ASD",
            "DOCUMENT_DATE": "2022-08-01T11:34:43.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-18T06:04:49.297000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Egazette",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "368",
            "FILE_NAME": "CIRCULATION.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/CIRCULATION.xml",
            "CS_DOCUMENT_ID": "245707",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "ASDASD",
            "DOCUMENT_DESCRIPTION": "ASD",
            "DOCUMENT_DATE": "2022-08-01T11:34:43.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-18T06:04:49.360000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Egazette",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }]
    };
    this.getDocDetailsSuccessHandler(response, 'FILE_DOC');
  }
  getDocDetailsSuccessHandler(response, type) {
    this.totalFiles = [];
    let docDetails = response.tuple;
    if (docDetails) {
      if (docDetails.length > 0) {
        if (type == 'FILE_DOC') {
          this.fileReqNos.forEach(req => {
            let docInfo = {
              FileName: req.value,
              DocType: 'FOLDER',
              StyleClass: 'fa fa-folder'
            };
            this.files.push(docInfo);
            if (this.docsDt) this.docsDt.reset();
          });
        }
        docDetails.forEach(doc => {
          let docInfo = {
            FileName: doc.old.AWP_DOCUMENTS.FILE_NAME,
            FileDescription: doc.old.AWP_DOCUMENTS.DOCUMENT_DESCRIPTION,
            FileClass: doc.old.AWP_DOCUMENTS.DOCUMENT_CLASS,
            FileVersion: doc.old.AWP_DOCUMENTS.DOCUMENT_VERSION,
            FileDate: doc.old.AWP_DOCUMENTS.DOCUMENT_DATE,
            ID: doc.old.AWP_DOCUMENTS.ID,
            FileType: doc.old.AWP_DOCUMENTS.FILE_TYPE,
            DocType: type,
            StyleClass: this.docMimeStyleMap.get(doc.old.AWP_DOCUMENTS.MIME_TYPE),
            SecurityClassification: doc.old.AWP_DOCUMENTS.SECURITY_CLASSIFICATION,
            Remarks: doc.old.AWP_DOCUMENTS.REMARKS,
            FileTypeDescription: !this.utilService.isEmpty(doc.old.AWP_DOCUMENTS.FILE_TYPE) ? this.documentTypes[lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.documentTypes, function (dt) {
              return dt.value == doc.old.AWP_DOCUMENTS.FILE_TYPE;
            })].label : '',
            CreatedBy: doc.old.AWP_DOCUMENTS.CREATED_BY,
            ShowDelete: doc.old.AWP_DOCUMENTS.CREATED_BY == this.currentUserName ? 'Y' : 'N'
          };
          this.totalFiles.push(docInfo);
          if (type == 'REQ_DOC' || type == 'FILE_DOC' && this.utilService.isEmpty(doc.old.AWP_DOCUMENTS.REQUEST_ID)) {
            this.files.push(docInfo);
            if (this.docsDt) this.docsDt.reset();
            this.docTypeCount.set(doc.old.AWP_DOCUMENTS.FILE_TYPE, lodash__WEBPACK_IMPORTED_MODULE_1__.filter(this.files, {
              'FileType': doc.old.AWP_DOCUMENTS.FILE_TYPE
            }).length);
          }
        });
      } else if (!docDetails.length) {
        if (type == 'FILE_DOC') {
          this.fileReqNos.forEach(req => {
            let docInfo = {
              FileName: req.value,
              DocType: 'FOLDER',
              StyleClass: 'fa fa-folder'
            };
            this.files.push(docInfo);
            if (this.docsDt) this.docsDt.reset();
          });
        }
        let docInfo = {
          FileName: docDetails.old.AWP_DOCUMENTS.FILE_NAME,
          FileDescription: docDetails.old.AWP_DOCUMENTS.DOCUMENT_DESCRIPTION,
          FileClass: docDetails.old.AWP_DOCUMENTS.DOCUMENT_CLASS,
          FileVersion: docDetails.old.AWP_DOCUMENTS.DOCUMENT_VERSION,
          FileDate: docDetails.old.AWP_DOCUMENTS.DOCUMENT_DATE,
          ID: docDetails.old.AWP_DOCUMENTS.ID,
          FileType: docDetails.old.AWP_DOCUMENTS.FILE_TYPE,
          DocType: type,
          StyleClass: this.docMimeStyleMap.get(docDetails.old.AWP_DOCUMENTS.MIME_TYPE),
          SecurityClassification: docDetails.old.AWP_DOCUMENTS.SECURITY_CLASSIFICATION,
          Remarks: docDetails.old.AWP_DOCUMENTS.REMARKS,
          FileTypeDescription: !this.utilService.isEmpty(docDetails.old.AWP_DOCUMENTS.FILE_TYPE) ? this.documentTypes[lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.documentTypes, function (dt) {
            return dt.value == docDetails.old.AWP_DOCUMENTS.FILE_TYPE;
          })].label : '',
          CreatedBy: docDetails.old.AWP_DOCUMENTS.CREATED_BY,
          ShowDelete: docDetails.old.AWP_DOCUMENTS.CREATED_BY == this.currentUserName ? 'Y' : 'N'
        };
        this.totalFiles.push(docInfo);
        if (type == 'REQ_DOC' || type == 'FILE_DOC' && this.utilService.isEmpty(docDetails.old.AWP_DOCUMENTS.REQUEST_ID)) {
          this.files.push(docInfo);
          if (this.docsDt) this.docsDt.reset();
          this.docTypeCount.set(docDetails.old.AWP_DOCUMENTS.FILE_TYPE, lodash__WEBPACK_IMPORTED_MODULE_1__.filter(this.files, {
            'FileType': docDetails.old.AWP_DOCUMENTS.FILE_TYPE
          }).length);
        }
      }
      this.loadDocTypeCount();
    }
  }
  nodeSelect(event) {
    this.files = [];
    this.docTree[0].styleClass = 'doc_tree_root_node';
    this.docTree[0].children?.forEach(child => {
      child.styleClass = 'doc_tree_child_node';
    });
    if (!event.node.parent) {
      this.docTree[0].styleClass = 'doc_tree_node_highlight';
      this.getDocumentsForFile();
    } else {
      let treeNode = this.docTree[0].children;
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(treeNode, function (child) {
        return child.label == event.node.label;
      });
      if (cIndex != -1) treeNode[cIndex].styleClass = 'doc_tree_node_highlight';
      this.getDocumentsForRequest(event.node.label);
    }
  }
  nodeUnselect(event) {
    this.getDocumentsForFile();
  }
  getDocumentTypes(fileDiv) {
    this.documentTypes = [];
    //Service Integration
    let response = {
      "DocumentTypes": [{
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Advice",
        "CodeId": "1",
        "DocumentTypes-id": {
          "Id": "32902",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32902"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Egazette",
        "CodeId": "10",
        "DocumentTypes-id": {
          "Id": "32904",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32904"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "File Note",
        "CodeId": "11",
        "DocumentTypes-id": {
          "Id": "32909",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32909"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Gazette Notification",
        "CodeId": "12",
        "DocumentTypes-id": {
          "Id": "32914",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32914"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Internal Minute",
        "CodeId": "13",
        "DocumentTypes-id": {
          "Id": "32917",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32917"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Minute",
        "CodeId": "14",
        "DocumentTypes-id": {
          "Id": "32900",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32900"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Notice of Amendments",
        "CodeId": "15",
        "DocumentTypes-id": {
          "Id": "32906",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32906"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Notice of Introduction",
        "CodeId": "16",
        "DocumentTypes-id": {
          "Id": "32910",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32910"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Research/Analysis",
        "CodeId": "17",
        "DocumentTypes-id": {
          "Id": "32913",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32913"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Revised Act",
        "CodeId": "18",
        "DocumentTypes-id": {
          "Id": "32918",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32918"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Revised Subsidiary Legislation",
        "CodeId": "19",
        "DocumentTypes-id": {
          "Id": "32916",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32916"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Assented Copy",
        "CodeId": "2",
        "DocumentTypes-id": {
          "Id": "32907",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32907"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Second Reading Speech",
        "CodeId": "20",
        "DocumentTypes-id": {
          "Id": "32920",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32920"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Select Committee",
        "CodeId": "21",
        "DocumentTypes-id": {
          "Id": "32921",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32921"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Subsidiary Legislation",
        "CodeId": "22",
        "DocumentTypes-id": {
          "Id": "32923",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32923"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Template",
        "CodeId": "23",
        "DocumentTypes-id": {
          "Id": "32925",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32925"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Training Material",
        "CodeId": "24",
        "DocumentTypes-id": {
          "Id": "32919",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32919"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Presentation Copy",
        "CodeId": "25",
        "DocumentTypes-id": {
          "Id": "32922",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32922"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Map/Plan",
        "CodeId": "26",
        "DocumentTypes-id": {
          "Id": "32924",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32924"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Bill",
        "CodeId": "3",
        "DocumentTypes-id": {
          "Id": "32911",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32911"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Cabinet Memo",
        "CodeId": "4",
        "DocumentTypes-id": {
          "Id": "32898",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32898"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Circular",
        "CodeId": "5",
        "DocumentTypes-id": {
          "Id": "32903",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32903"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Circulation",
        "CodeId": "6",
        "DocumentTypes-id": {
          "Id": "32908",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32908"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Consultation Paper",
        "CodeId": "7",
        "DocumentTypes-id": {
          "Id": "32912",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32912"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Correspondence",
        "CodeId": "8",
        "DocumentTypes-id": {
          "Id": "32915",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32915"
        }
      }, {
        "IsActive": "A",
        "Type": "LEGIS",
        "IsMigrated": null,
        "DocumentType": "Corrigendum",
        "CodeId": "9",
        "DocumentTypes-id": {
          "Id": "32899",
          "ItemId": "002248573547A1ECA3C27994E0F4681A.32899"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'DOCUMENT_TYPES');
  }
  getMasterDataSuccessHandler(response, type) {
    if (response.DocumentTypes) {
      if (response.DocumentTypes.length > 0) {
        if (type == 'DOCUMENT_TYPES') {
          response.DocumentTypes.forEach(data => {
            this.documentTypes.push({
              label: data.DocumentType,
              value: data.CodeId
            });
          });
        }
      } else if (!response.DocumentTypes.length) {
        let data = response.DocumentTypes;
        if (type == 'DOCUMENT_TYPES') {
          this.documentTypes.push({
            label: data.DocumentType,
            value: data.CodeId
          });
        }
      }
      if (this.reqType === 'File') {
        this.getRequestNosForFile(this.fileID);
      }
      this.loadDocTypeCount();
    }
    if (response.CodeTables) {
      if (response.CodeTables.length > 0) {
        if (type == 'SECURITY_CLASSIFICATION') {
          response.CodeTables.forEach(data => {
            this.secClassification.push({
              label: data.Name,
              value: data.Code
            });
          });
        }
      } else if (!response.CodeTables.length) {
        let data = response.CodeTables;
        if (type == 'SECURITY_CLASSIFICATION') {
          this.secClassification.push({
            label: data.Name,
            value: data.Code
          });
        }
      }
    }
  }
  updateDocumentDetails() {
    this.updateDocDetails = true;
  }
  hideModal() {
    this.updateDocDetails = false;
    this.modalRef.hide();
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  onDetailsSubmit(data) {
    if (data.status == 'SUCCESS') {
      this.hideModal();
      if (data.details != null) {
        data.details.forEach(det => {
          let fileObj = new _entities_document_details__WEBPACK_IMPORTED_MODULE_0__.REQUEST_DOCS();
          fileObj.FileName = det.fileName;
          fileObj.SecurityClassification = det.securityClassification;
          fileObj.FileType = det.docType;
          fileObj.FileDate = det.docDate;
          fileObj.FileDescription = det.docDescription;
          fileObj.FileRemarks = det.docRemarks;
          fileObj.FileVersion = det.fileVersion;
          fileObj.Base64 = det.base64String;
          fileObj.ID = det.documentId;
          fileObj.MimeType = det.mimeType;
          this.files.push(fileObj);
        });
      }
      this.uploadDocuments(this.files);
    } else {
      setTimeout(() => {
        this.updateDocDetails = false;
      });
    }
  }
  uploadDocuments(filesList) {
    this.isDocBlocked = true;
    let validDocuments = [];
    validDocuments = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(filesList, function (file) {
      return file.Base64;
    });
    let pendingCount = !validDocuments.length ? 1 : validDocuments.length;
    sessionStorage.setItem("PendingFiles", pendingCount.toString());
    this.showProgress = true;
    filesList.forEach(file => {
      if (file.Base64) {
        let dTypeIndex = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.documentTypes, function (doc) {
          return doc.value == file.FileType;
        });
        let sClassIndex = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.secClassification, function (sClass) {
          return sClass.value == file.SecurityClassification;
        });
        let uploadReq = {
          uploadRequest: {
            DocumentName: file.FileName,
            Description: file.FileDescription,
            FileRemarks: file.FileRemarks,
            DocumentContent: file.Base64,
            ServiceType: this.serviceName,
            RequestId: this.requestNo,
            FileId: this.fileID,
            Taxonomy: this.csPath,
            DocumentsId: file.ID,
            FileDate: file.FileDate != null ? this.datePipe.transform(file.FileDate, "yyyy-MM-dd'T'hh:mm:ss") : this.datePipe.transform(new Date(), "yyyy-MM-dd'T'hh:mm:ss"),
            SecurityClassification: file.SecurityClassification,
            FileType: file.FileType,
            RequestType: this.reqType,
            ItemID: this.reqItemID,
            MimeType: !this.utilService.isEmpty(file.MimeType) ? file.MimeType : 'application/file',
            DocumentTypeDescription: this.documentTypes[dTypeIndex].label,
            SecurityClassificationDescription: this.secClassification[sClassIndex].label
          }
        };
      }
    });
  }
  uploadDocumentSuccessHandler(response, prms) {
    let pendingCount = Number(sessionStorage.getItem('PendingFiles')) - 1;
    if (pendingCount > 0) {
      sessionStorage.setItem("PendingFiles", pendingCount.toString());
      prms.curComp.progressValue = 100 / (pendingCount + 1);
    } else {
      prms.curComp.progressValue = 100;
      prms.curComp.showProgress = false;
      if (prms.curComp.reqType == 'File') {
        prms.curComp.getDocumentsForFile();
      }
      prms.curComp.utilService.alert('success', 'Success', 'All documents uploaded successfully!!', false);
      prms.curComp.isDocBlocked = false;
    }
  }
  onRowSelected(docData) {
    this.selectedIndex = docData.index;
    this.showDelete = this.files[this.selectedIndex].ShowDelete == 'Y' ? true : false;
  }
  onRowUnSelected(docData) {
    this.showDelete = false;
  }
  deleteDocument() {
    let selectedFile = this.file;
    if (!selectedFile || selectedFile.length == 0) {
      this.utilService.alert("error", "Error", "Please select a file to delete!!", false);
    } else {
      let docID = this.files[this.selectedIndex].ID;
      let deleteReq = {
        deleteRequest: {
          ID: docID,
          RequestType: this.reqType,
          ItemID: this.reqItemID
        }
      };
    }
  }
  deleteDocumentSuccessHandler(response, prms) {
    if (response.tuple) {
      let resp = response.tuple.old.deleteDocument.deleteDocument;
      if (resp.FILE_DETAILS.STATUS == 'Success') {
        prms.curComp.utilService.alert('success', 'Success', 'Selected document deleted successfully!!', false);
        if (prms.curComp.reqType == 'File') {
          prms.curComp.getDocumentsForFile();
        }
        if (prms.curComp.docsDt) prms.curComp.docsDt.reset();
      } else {
        prms.curComp.utilService.alert('error', 'Error', 'Failed to delete the selected document', false);
      }
    }
  }
  downloadDocument() {
    let selectedFile = this.file;
    if (!selectedFile || selectedFile.length == 0) {
      this.utilService.alert("error", "Error", "Please select a file to download!!", false);
    } else {
      let docID = this.files[this.selectedIndex].ID;
      let downloadReq = {
        ID: docID,
        VERSION_REQUIRED: false,
        VERSION_NUMBER: 0
      };
    }
  }
  createCirculation() {
    let selectedFile = this.file;
    if (!selectedFile || selectedFile.length == 0) {
      this.utilService.alert("error", "Error", "Please select a file to create circulation!!", false);
    } else {}
  }
  openDocumentVersions(data) {
    this.versionData = data;
    this.openModal(this.docVersions, 'xl-modal');
  }
  checkOverflow($event) {
    if ($event.offsetHeight < $event.scrollHeight || $event.offsetWidth < $event.scrollWidth) {
      return true;
    } else {
      return false;
    }
  }
  textFinalData(event, rowdata, dts, col) {
    if (event.target.textContent == "...more") {
      jQuery(col).height('auto');
      jQuery(col).parent().height('auto');
      this.expanded = true;
      event.target.textContent = '..less';
    } else {
      jQuery(col).height('3em');
      jQuery(col).parent().height('4em');
      this.expanded = false;
      event.target.textContent = '...more';
    }
  }
  loadDocTypeCount() {
    this.docTypeCountList = [];
    this.documentTypes.forEach(doc => {
      this.docTypeCountList.push({
        label: doc.label,
        value: this.docTypeCount.get(doc.value) ? this.docTypeCount.get(doc.value)?.toString() : '0'
      });
    });
  }
  resetDocTypeCount() {
    this.docTypeCount = new Map();
    this.docTypeCountList = [];
    this.documentTypes.forEach(doc => {
      this.docTypeCountList.push({
        label: doc.label,
        value: '0'
      });
    });
  }
  getDocumentsForRequest(reqNo) {
    this.resetDocTypeCount();
    this.files = [];
    //Service Integration
    let response = {
      "@xmlns:SOAP": "http://schemas.xmlsoap.org/soap/envelope/",
      "@xmlns": "http://schemas.agc.com/DocumentsServices"
    };
    this.getDocDetailsSuccessHandler(response, 'REQ_DOC');
  }
  openMetadataEdit(data) {
    let rowData = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(data);
    this.metadata.SecurityClassification = rowData.SecurityClassification;
    this.metadata.FileDate = rowData.FileDate ? new Date(rowData.FileDate) : null;
    this.metadata.FileType = rowData.FileType;
    this.metadata.FileDescription = rowData.FileDescription;
    this.metadata.Remarks = rowData.Remarks;
    this.metadata.ID = rowData.ID;
    this.metadata.FileName = rowData.FileName;
    this.openModal(this.docMetadata, 'md-modal');
  }
  getSecurityClassifications() {
    this.secClassification = [];
    //Service Integration
    let response = {
      "CodeTables": [{
        "CodeTables-id": {
          "Id": "389463",
          "ItemId": "002248573547A1ECA03AED61BD366817.389463"
        },
        "DisplayOrder": "2",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "C",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_C",
        "Name": "Confidential",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3149",
        "Title": {
          "Value": "CODE-000030364"
        }
      }, {
        "CodeTables-id": {
          "Id": "389464",
          "ItemId": "002248573547A1ECA03AED61BD366817.389464"
        },
        "DisplayOrder": "3",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "R",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_R",
        "Name": "Restricted",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3150",
        "Title": {
          "Value": "CODE-000030365"
        }
      }, {
        "CodeTables-id": {
          "Id": "389462",
          "ItemId": "002248573547A1ECA03AED61BD366817.389462"
        },
        "DisplayOrder": "1",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "S",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_S",
        "Name": "Secret",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3148",
        "Title": {
          "Value": "CODE-000030363"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'SECURITY_CLASSIFICATION');
  }
  updateMetadata() {
    let req = {
      tuple: {
        old: {
          AWP_DOCUMENTS: {
            ID: this.metadata.ID
          }
        },
        new: {
          AWP_DOCUMENTS: {
            ID: this.metadata.ID,
            FILE_TYPE: this.metadata.FileType,
            DOCUMENT_DATE: this.metadata.FileDate ? this.datePipe.transform(this.metadata.FileDate, "yyyy-MM-dd'T'hh:mm:ss") : null,
            DOCUMENT_DESCRIPTION: this.metadata.FileDescription,
            REMARKS: this.metadata.Remarks
          }
        }
      }
    };
  }
  loadDocMimeTypeStyleClassMap() {
    this.docMimeStyleMap.set("audio/aac", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("application/x-abiword", "fa fa-file-word-o");
    this.docMimeStyleMap.set("application/x-freearc", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("image/avif", "fa fa-file-image-o");
    this.docMimeStyleMap.set("video/x-msvideo", "fa fa-file-video-o");
    this.docMimeStyleMap.set("application/vnd.amazon.ebook", "fa fa-book");
    this.docMimeStyleMap.set("application/octet-stream", "fa fa-file-code-o");
    this.docMimeStyleMap.set("image/bmp", "fa fa-file-image-o");
    this.docMimeStyleMap.set("application/x-bzip", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/x-bzip2", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/x-cdf", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("application/msword", "fa fa-file-word-o");
    this.docMimeStyleMap.set("application/vnd.openxmlformats-officedocument.wordprocessingml.document", "fa fa-file-word-o");
    this.docMimeStyleMap.set("application/epub+zip", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/gzip", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/java-archive", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/vnd.rar", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/x-tar", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/x-7z-compressed", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("application/zip", "fa fa-file-archive-o");
    this.docMimeStyleMap.set("image/gif", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/vnd.microsoft.icon", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/jpeg", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/png", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/svg+xml", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/tiff", "fa fa-file-image-o");
    this.docMimeStyleMap.set("image/webp", "fa fa-file-image-o");
    this.docMimeStyleMap.set("application/vnd.visio", "fa fa-file-image-o");
    this.docMimeStyleMap.set("audio/midi", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/x-midi", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/3gpp2", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/3gpp", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/wav", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/webm", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/opus", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/ogg", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("audio/mpeg", "fa fa-file-audio-o");
    this.docMimeStyleMap.set("video/mp4", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/mpeg", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/ogg", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/mp2t", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/webm", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/3gpp", "fa fa-file-video-o");
    this.docMimeStyleMap.set("video/3gpp2", "fa fa-file-video-o");
    this.docMimeStyleMap.set("font/woff", "fa fa-font");
    this.docMimeStyleMap.set("font/woff2", "fa fa-font");
    this.docMimeStyleMap.set("font/ttf", "fa fa-font");
    this.docMimeStyleMap.set("font/otf", "fa fa-font");
    this.docMimeStyleMap.set("application/vnd.ms-fontobject", "fa fa-font");
    this.docMimeStyleMap.set("application/xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("text/xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/atom+xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/vnd.mozilla.xul+xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/xhtml+xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/ogg", "fa fa-file-code-o");
    this.docMimeStyleMap.set("text/javascript", "fa fa-file-code-o");
    this.docMimeStyleMap.set("text/css", "fa fa-file-code-o");
    this.docMimeStyleMap.set("text/html", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/json", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/ld+json", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/vnd.apple.installer+xml", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/x-httpd-php", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/rtf", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/x-sh", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/x-shockwave-flash", "fa fa-file-code-o");
    this.docMimeStyleMap.set("application/x-csh", "fa fa-file-code-o");
    this.docMimeStyleMap.set("text/plain", "fa fa-file-text-o");
    this.docMimeStyleMap.set("application/vnd.oasis.opendocument.text", "fa fa-file-text-o");
    this.docMimeStyleMap.set("application/vnd.ms-powerpoint", "fa fa-file-powerpoint-o");
    this.docMimeStyleMap.set("application/vnd.openxmlformats-officedocument.presentationml.presentation", "fa fa-file-powerpoint-o");
    this.docMimeStyleMap.set("application/vnd.oasis.opendocument.presentation", "fa fa-file-powerpoint-o");
    this.docMimeStyleMap.set("application/vnd.oasis.opendocument.spreadsheet", "fa fa-file-excel-o");
    this.docMimeStyleMap.set("application/vnd.ms-excel", "fa fa-file-excel-o");
    this.docMimeStyleMap.set("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "fa fa-file-excel-o");
    this.docMimeStyleMap.set("text/csv", "fa fa-file-excel-o");
    this.docMimeStyleMap.set("text/calendar", "fa fa-calendar");
    this.docMimeStyleMap.set("application/pdf", "fa fa-file-pdf-o");
    this.docMimeStyleMap.set("application/file", "fa fa-file-o");
  }
  getDocuments(nodeName) {
    this.docTree[0].styleClass = 'doc_tree_root_node';
    this.docTree[0].children?.forEach(child => {
      child.styleClass = 'doc_tree_child_node';
    });
    let treeNode = this.docTree[0].children;
    let cIndex = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(treeNode, function (child) {
      return child.label == nodeName;
    });
    if (cIndex != -1) treeNode[cIndex].styleClass = 'doc_tree_node_highlight';
    this.getDocumentsForRequest(nodeName);
  }
  filterDocsByType(docType) {
    this.files = [];
    let dtIndex = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.documentTypes, function (type) {
      return type.label == docType;
    });
    if (dtIndex != -1) {
      let dtValue = this.documentTypes[dtIndex].value;
      this.files = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(this.totalFiles, {
        'FileType': dtValue
      });
    }
  }
  getTotalFiles() {
    this.resetDocTypeCount();
    this.files = [];
    //Service Integration
    let response = {
      "tuple": [{
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "300",
            "FILE_NAME": "DateTimePicker.png",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/DateTimePicker.png",
            "CS_DOCUMENT_ID": "182136",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asdasd",
            "DOCUMENT_DESCRIPTION": "asdasd",
            "DOCUMENT_DATE": "2022-06-07T01:16:59.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-06-08T07:47:04.270000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "image/png",
            "DOCUMENT_FORMAT": "png",
            "OUTGOING": "",
            "FILE_TYPE_DESC": null,
            "SEC_CLASS_DESC": null,
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "316",
            "FILE_NAME": "ADVISORY_ADDED_FILES.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ADDED_FILES.xml",
            "CS_DOCUMENT_ID": "218679",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asd",
            "DOCUMENT_DESCRIPTION": "asd",
            "DOCUMENT_DATE": "2022-07-12T09:03:24.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-07-15T03:33:28.907000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": "xml",
            "OUTGOING": "",
            "FILE_TYPE_DESC": null,
            "SEC_CLASS_DESC": null,
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "337",
            "FILE_NAME": "ADVISORY_ASSIGNMENT_CC.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ASSIGNMENT_CC.xml",
            "CS_DOCUMENT_ID": "221911",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asAS",
            "DOCUMENT_DESCRIPTION": "asAS",
            "DOCUMENT_DATE": "2022-07-24T09:26:56.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "1",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-07-25T03:57:00.597000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": "xml",
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Advice",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "358",
            "FILE_NAME": "ADVISORY_CIR_ROUTE.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CIR_ROUTE.xml",
            "CS_DOCUMENT_ID": "236758",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "asdasd",
            "DOCUMENT_DESCRIPTION": "asda",
            "DOCUMENT_DATE": "2022-08-01T09:58:49.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "12",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T04:28:56.790000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Gazette Notification",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "359",
            "FILE_NAME": "ADVISORY_CROSS_DIV_OFF.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CROSS_DIV_OFF.xml",
            "CS_DOCUMENT_ID": "236881",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "fghfghfg",
            "DOCUMENT_DESCRIPTION": "hfgh",
            "DOCUMENT_DATE": "2022-08-01T10:20:39.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T04:50:50.063000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "File Note",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "362",
            "FILE_NAME": "ADVISORY_DISPATCH_DOC.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_DISPATCH_DOC.xml",
            "CS_DOCUMENT_ID": "237330",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "Test document upload",
            "DOCUMENT_DESCRIPTION": "Test document upload",
            "DOCUMENT_DATE": "2022-08-01T02:51:20.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "11",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-01T09:21:27.940000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "File Note",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }, {
        "old": {
          "AWP_DOCUMENTS": {
            "ID": "366",
            "FILE_NAME": "CIR_ROUTE_HISTORY.xml",
            "SERVICE_TYPE": "ADVISORY",
            "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_ROUTE_HISTORY.xml",
            "CS_DOCUMENT_ID": "246477",
            "REQUEST_ID": "",
            "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
            "REMARKS": "ASDASD",
            "DOCUMENT_DESCRIPTION": "ASD",
            "DOCUMENT_DATE": "2022-08-01T11:34:43.0",
            "DOCUMENT_VERSION": "1",
            "SECURITY_CLASSIFICATION": "SCLASS_S",
            "FILE_TYPE": "10",
            "CREATED_BY": "iadro1",
            "CREATED_ON": "2022-08-18T06:04:49.283000000",
            "LAST_MODIFIED_BY": null,
            "LAST_MODIFIED_ON": null,
            "DOCUMENT_CLASS": "",
            "MIME_TYPE": "text/xml",
            "DOCUMENT_FORMAT": null,
            "OUTGOING": "",
            "FILE_TYPE_DESC": "Egazette",
            "SEC_CLASS_DESC": "Secret",
            "LEGIS_TAGS": null,
            "TOPIC_TAGS": null,
            "KM_NOTES": null
          }
        }
      }]
    };
    let docDetails = response.tuple;
    if (docDetails) {
      if (docDetails.length > 0) {
        docDetails.forEach(doc => {
          let docInfo = {
            FileName: doc.old.AWP_DOCUMENTS.FILE_NAME,
            FileDescription: doc.old.AWP_DOCUMENTS.DOCUMENT_DESCRIPTION,
            FileClass: doc.old.AWP_DOCUMENTS.DOCUMENT_CLASS,
            FileVersion: doc.old.AWP_DOCUMENTS.DOCUMENT_VERSION,
            FileDate: doc.old.AWP_DOCUMENTS.DOCUMENT_DATE,
            ID: doc.old.AWP_DOCUMENTS.ID,
            FileType: doc.old.AWP_DOCUMENTS.FILE_TYPE,
            DocType: '',
            StyleClass: this.docMimeStyleMap.get(doc.old.AWP_DOCUMENTS.MIME_TYPE),
            SecurityClassification: doc.old.AWP_DOCUMENTS.SECURITY_CLASSIFICATION,
            Remarks: doc.old.AWP_DOCUMENTS.REMARKS,
            FileTypeDescription: !this.utilService.isEmpty(doc.old.AWP_DOCUMENTS.FILE_TYPE) ? this.documentTypes[lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.documentTypes, function (dt) {
              return dt.value == doc.old.AWP_DOCUMENTS.FILE_TYPE;
            })].label : '',
            CreatedBy: doc.old.AWP_DOCUMENTS.CREATED_BY,
            ShowDelete: doc.old.AWP_DOCUMENTS.CREATED_BY == this.currentUserName ? 'Y' : 'N'
          };
          this.files.push(docInfo);
          if (this.docsDt) this.docsDt.reset();
          this.docTypeCount.set(doc.old.AWP_DOCUMENTS.FILE_TYPE, lodash__WEBPACK_IMPORTED_MODULE_1__.filter(this.files, {
            'FileType': doc.old.AWP_DOCUMENTS.FILE_TYPE
          }).length);
        });
      }
      this.loadDocTypeCount();
    }
  }
  checkIfUserIsLO() {
    this.userGroups = [];
    //Service Integration
    let response = {
      "Groups": {
        "FunctionalGroup": [{
          "FunctionalGroup-id": {
            "Id": "49155",
            "ItemId": "002248573547A1ECA0C26352C534A817.49155"
          },
          "GroupName": "IAD",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "true",
          "IsChild": "No",
          "GroupDescription": "International Affairs Division",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "IAD"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "180226",
            "ItemId": "002248573547A1ECA0C26352C534A817.180226"
          },
          "GroupName": "Migration Data Admin",
          "GroupCreatedInOTDS": "No",
          "IsDivision": "false",
          "IsChild": "Yes",
          "GroupDescription": "Migration Data Admin",
          "GroupType": "Functional",
          "UserLinkedToGroup": "No",
          "Status": "A",
          "Title": {
            "Value": "Migration Data Admin"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "163843",
            "ItemId": "002248573547A1ECA0C26352C534A817.163843"
          },
          "GroupName": "SECURITY ADMIN",
          "GroupCreatedInOTDS": "No",
          "IsDivision": "false",
          "IsChild": "Yes",
          "GroupDescription": "Security Administrator",
          "GroupType": "Functional",
          "UserLinkedToGroup": "No",
          "Status": "A",
          "Title": {
            "Value": "SECURITY ADMIN"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "1",
            "ItemId": "002248573547A1ECA0C26352C534A817.1"
          },
          "GroupName": "AGC",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "false",
          "IsChild": "No",
          "GroupDescription": "Attorney General Chambers",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "AGC"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "49156",
            "ItemId": "002248573547A1ECA0C26352C534A817.49156"
          },
          "GroupName": "REGISTRY (IAD)",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "false",
          "IsChild": "Yes",
          "GroupDescription": "Registry team of IAD",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "REGISTRY (IAD)"
          }
        }]
      }
    };
    if (response.Groups) {
      let resp = response.Groups.FunctionalGroup;
      if (resp.length > 0) {
        resp.forEach(fGroup => {
          this.userGroups.push(fGroup.Title.Value);
        });
      }
    }
    if (this.userGroups.length > 0) {
      let legalOffCount = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(this.userGroups, function (ug) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__.includes(ug, 'LEGAL OFFICER');
      }).length;
      if (legalOffCount > 0) {
        this.isLOUser = true;
      }
    }
  }
  getUserGroupsSuccessHandler(response, prms) {}
  refreshDocuments() {
    this.getItemDetails(this.reqType, this.reqItemID);
    if (this.readOnly == 'Y') {
      this.noOfRows = 15;
    }
    this.checkIfUserIsLO();
  }
}
DocumentUploadComponent.ɵfac = function DocumentUploadComponent_Factory(t) {
  return new (t || DocumentUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService));
};
DocumentUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DocumentUploadComponent,
  selectors: [["document-upload"]],
  viewQuery: function DocumentUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.details = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.docVersions = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.docMetadata = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.docsDt = _t.first);
    }
  },
  inputs: {
    requestID: "requestID",
    requestType: "requestType",
    readOnly: "readOnly"
  },
  decls: 27,
  vars: 23,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding", 2, "width", "100% !important", "height", "914px"], ["class", "row xsm-padding", 4, "ngIf"], [1, "no-header-panel"], ["dTab", ""], [1, "row"], ["class", "col-lg-3 xsm-padding no-bottom-padding", "style", "padding-left: 30px !important;", 4, "ngIf"], [1, "xsm-padding", "no-bottom-padding", "no-top-padding", 3, "ngClass"], [1, "xsm-padding", "no-bottom-padding", "lg-card-height", "pm-lt-bk"], [1, "row", "no-padding", 3, "ngStyle"], ["dataKey", "FileName", 1, "custom-table", 3, "value", "columns", "rows", "paginator", "globalFilterFields", "selection", "onRowSelect", "onRowUnselect", "selectionChange"], ["docsDT", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["docDetailsModal", ""], ["docVersionsModal", ""], ["docMetadataModal", ""], ["position", "top-right"], ["key", "circulationDialog", 1, "custom-confirmation", 3, "baseZIndex"], ["cd", ""], ["pTemplate", "footer"], [3, "target", "blocked"], [1, "row", "xsm-padding"], ["mode", "indeterminate", 1, "custom-progress-bar"], [1, "col-lg-3", "xsm-padding", "no-bottom-padding", 2, "padding-left", "30px !important"], [1, "row", 2, "height", "900px !important"], [1, "lg-card-height", "pm-lt-bk", "no-padding", 2, "height", "32% !important"], [1, "custom-scroll"], ["selectionMode", "single", 1, "doc-tree", 3, "value", "propagateSelectionUp", "propagateSelectionDown", "onNodeSelect", "onNodeUnselect"], ["pTemplate", "default"], [1, "lg-card-height", "pm-lt-bk", "no-padding", 2, "height", "25% !important"], [1, "custom-doc-type-scroll", "no-padding"], [1, "col-lg-12", "xsm-padding", "no-top-padding", "no-bottom-padding"], ["ngFor", "", 3, "ngForOf"], [3, "title"], ["class", "row", "class", "highlight-notf-row", 4, "ngIf"], [1, "highlight-notf-row"], [1, "col-lg-12", "xsm-margin"], [1, "row", "notf-row", 2, "cursor", "pointer", "border", "0px", 3, "click"], [1, "col-lg-10", 2, "padding-top", "2%"], [1, "md-font", "form-field-header"], [1, "col-lg-2", 2, "padding-top", "2%"], [3, "value"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["docSearch", ""], [1, "table-records"], ["class", "custom-warn-text", "style", "width: 10%; padding-left: 10%; text-decoration: underline !important; \n                                                            cursor: pointer !important; font-size: 14px !important; ", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to get all files", 3, "click", 4, "ngIf"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 3, "ngStyle"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to create a circulation for file", "class", "fa fa-circle-o-notch", 3, "click", 4, "ngIf"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to download file", 1, "fa", "fa-download", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete file", "class", "fa fa-trash", 3, "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to get all files", 1, "custom-warn-text", 2, "width", "10%", "padding-left", "10%", "text-decoration", "underline !important", "cursor", "pointer !important", "font-size", "14px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to create a circulation for file", 1, "fa", "fa-circle-o-notch", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete file", 1, "fa", "fa-trash", 3, "click"], [2, "width", "50px !important"], ["style", "text-align: center !important;", 3, "pSortableColumn", 4, "ngFor", "ngForOf"], [2, "text-align", "center !important", 3, "pSortableColumn"], [3, "field"], [1, "pointer"], ["class", "custom-radio-btn", 3, "value", "index", 4, "ngIf"], [1, "custom-radio-btn", 3, "value", "index"], ["style", "text-align: center;", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", 3, "pTooltip", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to edit metadata", 3, "click", 4, "ngIf"], ["class", "custom-warn-text", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; \n                                                            cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to get files in the request", 3, "click", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important; text-align: center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to view file versions", 3, "click", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to edit metadata", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", 3, "click"], [2, "padding-right", "10px", "color", "#706f6d"], [1, "custom-warn-text"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to get files in the request", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", 3, "click"], [2, "padding-right", "10px", "color", "#e6e600"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to view file versions", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", "text-align", "center", 3, "click"], [2, "overflow", "hidden", "line-height", "1em", "height", "3em", "text-align", "justify", "white-space", "pre-wrap", 3, "id"], ["docDesc", ""], ["href", "#", 3, "pRowToggler", 4, "ngIf"], ["href", "#", 3, "pRowToggler"], [2, "color", "blue", "text-decoration", "underline", "font-weight", "bold", 3, "click"], ["colspan", "11", 1, "custom-info-text", 2, "text-align", "center !important", "font-size", "14px !important"], ["colspan", "9", 1, "custom-info-text", 2, "text-align", "center !important", "font-size", "14px !important"], [1, "xsm-padding", "no-left-padding"], [2, "height", "120px", "margin-top", "60px", 3, "maxFileSize", "change"], ["style", "font-size: 13px !important;", 4, "ngIf"], [2, "font-size", "13px !important"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], [1, "custom-modl-content"], [1, "custom-scroll", "xsm-padding"], [3, "fileDetails", "existingFileDetails", "detailsSubmit", "division", "serviceType", "detSubmit"], [1, "modal-footer"], ["label", "Save & Close", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to update document details", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel request", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "custom-scroll", "sm-padding"], [3, "docDetails", "reqType", "fileID", "requestNo", "division"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to close", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "custom-scroll", "sm-padding", "no-top-padding"], [1, "col-lg-12", "sm-padding"], [1, "col-lg-12", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "form-divider", "no-top-padding", "no-bottom-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose security classification", "name", "secClssfctn", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngModelChange"], ["secClssfctn", "ngModel"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose document type", "name", "dType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose document type", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngModelChange"], ["dType", "ngModel"], ["appendTo", "body", "inputId", "icon", "dateFormat", "dd/mm/yy", "name", "dDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document date", 1, "customized-calendar", 3, "ngModel", "showIcon", "maxDate", "disabled", "showTime", "showSeconds", "ngModelChange"], ["dDate", "ngModel"], ["pInputTextarea", "", "name", "docDesc", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document description", 1, "custom-textarea", 2, "height", "80px !important", 3, "ngModel", "rows", "cols", "disabled", "ngModelChange"], ["docDesc", "ngModel"], ["pInputTextarea", "", "name", "docRem", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter document remarks", 1, "custom-textarea", 2, "height", "80px !important", 3, "ngModel", "rows", "cols", "disabled", "ngModelChange"], ["docRem", "ngModel"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to update metadata", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-check", "label", "Ok", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-times", "label", "Cancel", 3, "click"]],
  template: function DocumentUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DocumentUploadComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-panel", 2, 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DocumentUploadComponent_div_5_Template, 10, 10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p-table", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onRowSelect", function DocumentUploadComponent_Template_p_table_onRowSelect_9_listener($event) {
        return ctx.onRowSelected($event);
      })("onRowUnselect", function DocumentUploadComponent_Template_p_table_onRowUnselect_9_listener($event) {
        return ctx.onRowUnSelected($event);
      })("selectionChange", function DocumentUploadComponent_Template_p_table_selectionChange_9_listener($event) {
        return ctx.file = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DocumentUploadComponent_ng_template_11_Template, 15, 7, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, DocumentUploadComponent_ng_template_12_Template, 3, 1, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, DocumentUploadComponent_ng_template_13_Template, 4, 2, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DocumentUploadComponent_ng_template_14_Template, 2, 2, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DocumentUploadComponent_div_15_Template, 5, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DocumentUploadComponent_ng_template_16_Template, 12, 8, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DocumentUploadComponent_ng_template_18_Template, 11, 8, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, DocumentUploadComponent_ng_template_20_Template, 62, 32, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "p-toast", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p-confirmDialog", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, DocumentUploadComponent_ng_template_25_Template, 2, 0, "ng-template", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "p-blockUI", 22);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.files.length > 0 && ctx.showProgress);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqType == "File");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.reqType == "File" ? "col-lg-9 no-left-padding" : "col-lg-12");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c13, ctx.readOnly != "Y" ? "705px" : "605px"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c14));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.files)("columns", ctx.fileCols)("rows", ctx.noOfRows)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c15))("selection", ctx.file);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.readOnly != "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c16));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("baseZIndex", 10000);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("target", _r1)("blocked", ctx.isDocBlocked);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableRadioButton, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_11__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextarea, primeng_tree__WEBPACK_IMPORTED_MODULE_18__.Tree, primeng_badge__WEBPACK_IMPORTED_MODULE_19__.Badge, primeng_progressbar__WEBPACK_IMPORTED_MODULE_20__.ProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialog, primeng_panel__WEBPACK_IMPORTED_MODULE_23__.Panel, primeng_blockui__WEBPACK_IMPORTED_MODULE_24__.BlockUI, ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__.NgxDropzoneLabelDirective, _document_details_document_details_component__WEBPACK_IMPORTED_MODULE_3__.DocumentDetailsComponent, _document_versions_document_versions_component__WEBPACK_IMPORTED_MODULE_4__.DocumentVersionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
class DOC_METADATA {
  constructor() {
    this.FileDescription = "";
    this.Remarks = "";
  }
}

/***/ }),

/***/ 978:
/*!*************************************************************************************!*\
  !*** ./src/app/commons/components/document-versions/document-versions.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentVersionsComponent": () => (/* binding */ DocumentVersionsComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);








const _c0 = ["docVersionsDT"];
function DocumentVersionsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "span", 11)(2, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function DocumentVersionsComponent_ng_template_9_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.filterGlobal(_r4.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r1.fileVersions.length, " ");
  }
}
function DocumentVersionsComponent_ng_template_10_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-sortIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r9.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", col_r9.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", col_r9.field);
  }
}
function DocumentVersionsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentVersionsComponent_ng_template_10_th_1_Template, 3, 4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r7);
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", col_r14.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r14.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, rowData_r10[col_r14.field], "dd/MM/yyyy h:mm:ss") : rowData_r10[col_r14.field], " ");
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentVersionsComponent_ng_template_11_ng_template_1_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.downloadDocument(rowData_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", col_r14.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r14.field], " ");
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_2_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28)(1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentVersionsComponent_ng_template_11_ng_template_1_td_2_a_5_Template_i_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
      const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.textFinalData($event, rowData_r10, _r0, _r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pRowToggler", rowData_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r27.expanded ? "..less" : "...more");
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "div")(2, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocumentVersionsComponent_ng_template_11_ng_template_1_td_2_a_5_Template, 3, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r12 = ctx_r33.rowIndex;
    const rowData_r10 = ctx_r33.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", col_r14.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r14.field], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.checkOverflow(_r26));
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_3_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28)(1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentVersionsComponent_ng_template_11_ng_template_1_td_3_a_5_Template_i_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
      const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.textFinalData($event, rowData_r10, _r0, _r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pRowToggler", rowData_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r35.expanded ? "..less" : "...more");
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "div")(2, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocumentVersionsComponent_ng_template_11_ng_template_1_td_3_a_5_Template, 3, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r12 = ctx_r41.rowIndex;
    const rowData_r10 = ctx_r41.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", col_r14.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r14.field], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.checkOverflow(_r34));
  }
}
function DocumentVersionsComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DocumentVersionsComponent_ng_template_11_ng_template_1_td_0_Template, 3, 5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentVersionsComponent_ng_template_11_ng_template_1_td_1_Template, 2, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DocumentVersionsComponent_ng_template_11_ng_template_1_td_2_Template, 6, 4, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentVersionsComponent_ng_template_11_ng_template_1_td_3_Template, 6, 4, "td", 22);
  }
  if (rf & 2) {
    const col_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r14.field != "DOCUMENT_VERSION" && col_r14.field != "DOCUMENT_DESCRIPTION" && col_r14.field != "FILE_TYPE_NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r14.field == "DOCUMENT_VERSION");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r14.field == "DOCUMENT_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r14.field == "FILE_TYPE_NAME");
  }
}
function DocumentVersionsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentVersionsComponent_ng_template_11_ng_template_1_Template, 4, 4, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r11 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r11);
  }
}
const _c1 = function () {
  return {
    width: "100%"
  };
};
const _c2 = function () {
  return ["DOCUMENT_DESCRIPTION", "FILE_TYPE_NAME", "SECURITY_CLASSIFICATION_NAME", "DOCUMENT_VERSION", "DOCUMENT_CLASS"];
};
class DocumentVersionsComponent {
  constructor(utilService) {
    this.utilService = utilService;
    this.fileVersions = [];
    this.fileVersionCols = [];
    this.secClassification = [];
    this.documentType = [];
    this.expanded = false;
  }
  ngOnInit() {
    this.getAllDocTypes();
    this.getAllSecurityClassifications();
    this.fileVersionCols = [{
      field: "DOCUMENT_DESCRIPTION",
      label: "Description",
      type: "string",
      spanWidth: "3"
    }, {
      field: "FILE_TYPE_NAME",
      label: "Document Type",
      type: "string",
      spanWidth: "2"
    }, {
      field: "SECURITY_CLASSIFICATION_NAME",
      label: "Security Classification",
      type: "string",
      spanWidth: "1"
    }, {
      field: "DOCUMENT_VERSION",
      label: "Version",
      type: "string",
      spanWidth: "1"
    }, {
      field: "DOCUMENT_CLASS",
      label: "Class",
      type: "string",
      spanWidth: "1"
    }, {
      field: "DOCUMENT_DATE",
      label: "Document Date",
      type: "date",
      spanWidth: "1"
    }];
  }
  getAllSecurityClassifications() {
    //Service Integration
    let response = {
      "CodeTables": [{
        "CodeTables-id": {
          "Id": "389463",
          "ItemId": "002248573547A1ECA03AED61BD366817.389463"
        },
        "DisplayOrder": "2",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "C",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_C",
        "Name": "Confidential",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3149",
        "Title": {
          "Value": "CODE-000030364"
        }
      }, {
        "CodeTables-id": {
          "Id": "389464",
          "ItemId": "002248573547A1ECA03AED61BD366817.389464"
        },
        "DisplayOrder": "3",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "R",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_R",
        "Name": "Restricted",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3150",
        "Title": {
          "Value": "CODE-000030365"
        }
      }, {
        "CodeTables-id": {
          "Id": "389462",
          "ItemId": "002248573547A1ECA03AED61BD366817.389462"
        },
        "DisplayOrder": "1",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "S",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_S",
        "Name": "Secret",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3148",
        "Title": {
          "Value": "CODE-000030363"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'SECURITY_CLASSIFICATION');
  }
  getAllDocTypes() {
    //Service Integration
    let response = {
      "CodeTables": [{
        "CodeTables-id": {
          "Id": "389463",
          "ItemId": "002248573547A1ECA03AED61BD366817.389463"
        },
        "DisplayOrder": "2",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "C",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_C",
        "Name": "Confidential",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3149",
        "Title": {
          "Value": "CODE-000030364"
        }
      }, {
        "CodeTables-id": {
          "Id": "389464",
          "ItemId": "002248573547A1ECA03AED61BD366817.389464"
        },
        "DisplayOrder": "3",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "R",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_R",
        "Name": "Restricted",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3150",
        "Title": {
          "Value": "CODE-000030365"
        }
      }, {
        "CodeTables-id": {
          "Id": "389462",
          "ItemId": "002248573547A1ECA03AED61BD366817.389462"
        },
        "DisplayOrder": "1",
        "IsMigrated": "true",
        "I_TB_ParentID": null,
        "AlternateKey": "S",
        "I_TB_ParentCode": null,
        "Code": "SCLASS_S",
        "Name": "Secret",
        "Category": "SECURITY_CLASSIFICATION",
        "Status": "A",
        "CodeId": "3148",
        "Title": {
          "Value": "CODE-000030363"
        }
      }]
    };
    this.getMasterDataSuccessHandler(response, 'DOCUMENT_TYPES');
  }
  getMasterDataSuccessHandler(response, type) {
    if (response.CodeTables) {
      if (response.CodeTables.length > 0) {
        if (type == 'SECURITY_CLASSIFICATION') {
          response.CodeTables.forEach(data => {
            this.secClassification.push({
              label: data.Name,
              value: data.Code
            });
          });
          this.getFileVersions();
        }
      } else if (!response.CodeTables.length) {
        let data = response.CodeTables;
        if (type == 'SECURITY_CLASSIFICATION') {
          this.secClassification.push({
            label: data.Name,
            value: data.Code
          });
          this.getFileVersions();
        }
      }
    }
    if (response.DocumentTypes) {
      if (response.DocumentTypes.length > 0) {
        if (type == 'DOCUMENT_TYPES') {
          response.DocumentTypes.forEach(data => {
            this.documentType.push({
              label: data.DocumentType,
              value: data.CodeId
            });
          });
        }
      } else if (!response.DocumentTypes.length) {
        let data = response.DocumentTypes;
        if (type == 'DOCUMENT_TYPES') {
          this.documentType.push({
            label: data.DocumentType,
            value: data.CodeId
          });
        }
      }
    }
  }
  getFileVersions() {
    if (this.reqType == 'File') {
      //Service Integration
      let response = {
        "tuple": {
          "old": {
            "AWP_DOCUMENT_VERSIONS": {
              "ID": "447",
              "FILE_NAME": "CIRCULATION.xml",
              "SERVICE_TYPE": "ADVISORY",
              "DOCUMENT_URL": "AGC/IW/AG/LEGIS/LEG/2022/000000002/CIRCULATION.xml",
              "CS_DOCUMENT_ID": "245707",
              "REQUEST_ID": "",
              "FILE_ID": "AG/LEGIS/LEG/B/2022/000000002",
              "REMARKS": "ASDASD",
              "DOCUMENT_DESCRIPTION": "ASD",
              "DOCUMENT_DATE": "2022-08-01T11:34:43.0",
              "DOCUMENT_VERSION": "1",
              "SECURITY_CLASSIFICATION": "SCLASS_S",
              "FILE_TYPE": "10",
              "DOCUMENT_CLASS": "",
              "CREATED_BY": "iadro1",
              "CREATED_ON": "2022-08-18T06:04:50.190000000",
              "LAST_MODIFIED_BY": null,
              "LAST_MODIFIED_ON": null,
              "AWP_DOC_ID": "368",
              "MIME_TYPE": "text/xml",
              "DOCUMENT_FORMAT": null,
              "OUTGOING": "",
              "FILE_TYPE_DESC": "Egazette",
              "SEC_CLASS_DESC": "Secret",
              "LEGIS_TAGS": null,
              "TOPIC_TAGS": null,
              "KM_NOTES": null,
              "FILE_TYPE_NAME": "Test File Type",
              "SECURITY_CLASSIFICATION_NAME": "Security Classification Name"
            }
          }
        }
      };
      if (response.tuple) {
        let sIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.secClassification, function (sc) {
          return sc.value == response.tuple.old.AWP_DOCUMENT_VERSIONS.SECURITY_CLASSIFICATION;
        });
        let fIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.documentType, function (dt) {
          return dt.value == response.tuple.old.AWP_DOCUMENT_VERSIONS.FILE_TYPE;
        });
        if (fIndex != -1) response.tuple.old.AWP_DOCUMENT_VERSIONS.FILE_TYPE_NAME = this.documentType[fIndex].label;
        if (sIndex != -1) response.tuple.old.AWP_DOCUMENT_VERSIONS.SECURITY_CLASSIFICATION_NAME = this.secClassification[sIndex].label;
        this.fileVersions.push(response.tuple.old.AWP_DOCUMENT_VERSIONS);
      }
    }
  }
  downloadDocument(data) {
    let docID = this.docDetails.ID;
    let docVersion = data.DOCUMENT_VERSION;
    let downloadReq = {
      ID: docID,
      VERSION_REQUIRED: true,
      VERSION_NUMBER: docVersion
    };
  }
  checkOverflow($event) {
    if ($event.offsetHeight < $event.scrollHeight || $event.offsetWidth < $event.scrollWidth) {
      return true;
    } else {
      return false;
    }
  }
  textFinalData(event, rowdata, dts, col) {
    if (event.target.textContent == "...more") {
      jQuery(col).height('auto');
      jQuery(col).parent().height('auto');
      this.expanded = true;
      event.target.textContent = '..less';
    } else {
      jQuery(col).height('3em');
      jQuery(col).parent().height('4em');
      this.expanded = false;
      event.target.textContent = '...more';
    }
  }
}
DocumentVersionsComponent.ɵfac = function DocumentVersionsComponent_Factory(t) {
  return new (t || DocumentVersionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService));
};
DocumentVersionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DocumentVersionsComponent,
  selectors: [["document-versions"]],
  viewQuery: function DocumentVersionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.docVersionsDt = _t.first);
    }
  },
  inputs: {
    docDetails: "docDetails",
    reqType: "reqType",
    fileID: "fileID",
    requestNo: "requestNo",
    division: "division"
  },
  decls: 12,
  vars: 8,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], [1, "row", "xsm-padding"], [1, "col-lg-12", "xsm-padding", "no-padding"], [1, "xsm-padding", "form-field-header", "form-divider", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], [1, "custom-table", 3, "value", "columns", "globalFilterFields"], ["docVersionsDT", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["docVersionSearch", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align: center !important;", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; text-align: center !important; cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to download selected file version", 3, "click", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center !important"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "top", "pTooltip", "Click to download selected file version", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "text-align", "center !important", "cursor", "pointer !important", 3, "click"], [2, "overflow", "hidden", "line-height", "1em", "height", "3em", "text-align", "justify", "white-space", "pre-wrap", 3, "id"], ["docDesc", ""], ["href", "#", 3, "pRowToggler", 4, "ngIf"], ["href", "#", 3, "pRowToggler"], [2, "color", "blue", "text-decoration", "underline", "font-weight", "bold", 3, "click"]],
  template: function DocumentVersionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "div", 4)(7, "p-table", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DocumentVersionsComponent_ng_template_9_Template, 6, 1, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DocumentVersionsComponent_ng_template_10_Template, 2, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DocumentVersionsComponent_ng_template_11_Template, 2, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.docDetails == null ? null : ctx.docDetails.FileName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.fileVersions)("columns", ctx.fileVersionCols)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortIcon, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8880:
/*!*************************************************************!*\
  !*** ./src/app/commons/components/login/login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _services_agc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/agc.service */ 2935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ 8848);













class LoginComponent {
  constructor(utilService, confirmationService, agcService, datePipe) {
    this.utilService = utilService;
    this.confirmationService = confirmationService;
    this.agcService = agcService;
    this.datePipe = datePipe;
    this.userName = "";
    this.password = "";
  }
  ngOnInit() {
    this.utilService.setUserActions(true);
  }
  login() {
    let details = {
      username: this.userName,
      password: this.password
    };
    this.agcService.login(details).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp.status == 'FAIL' || resp.status == 'NO_USER') {
          this.utilService.alert('error', resp.message, resp.details, false);
        } else {
          this.loadDashboard();
        }
      },
      error: error => {
        console.log('Request failed with error');
      }
    });
  }
  loadDashboard() {
    if (this.utilService.isEmpty(this.userName) || this.utilService.isEmpty(this.password)) {
      this.utilService.alert('error', 'Error', 'Please enter your username and password!!', false);
      return;
    }
    this.utilService.setUserActions(false);
    this.utilService.saveToStorage("IS_LOGGEDIN", true);
    _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME = this.userName;
    _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.IS_USER_PROFILE_TRIGGERED = false;
    let divisions = [];
    let roles = [];
    let userInfo = {};
    this.agcService.getUserInfo(this.userName).subscribe({
      next: response => {
        let resp = Object.assign(response);
        divisions = resp[0].agc_user_divisions;
        let inboxPref = [];
        if (resp) {
          _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_ITEM_ID = resp[0].username;
          _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.IS_USER_PROFILE_TRIGGERED = true;
          inboxPref = resp[0].agc_user_profile.inbox_preference;
          _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_INBOX_PREF = inboxPref;
          _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_DN = resp[0].username;
          userInfo = {
            DisplayName: resp[0].display_name,
            UserDN: resp[0].username,
            Email: resp[0].agc_user_profile.email,
            DepartmentName: resp[0].agc_user_profile.department,
            LastUpdatedOn: this.datePipe.transform(resp[0].agc_user_profile.updated_on.split("T")[0], 'MMM d, y'),
            LastUpdatedTime: resp[0].agc_user_profile.updated_on.split("T")[1].substring(0, 5),
            ItemID: resp[0].username,
            ReceiveEmailNotifications: resp[0].agc_user_profile.email_notifications == 1 ? true : false,
            OutOfOffice: resp[0].agc_user_profile.ooo == 1 ? true : false,
            DateFrom: resp[0].agc_user_profile.ooo_date_from,
            DateUntil: resp[0].agc_user_profile.ooo_date_until,
            OutOfOfficeMessage: resp[0].agc_user_profile.ooo_message,
            Roles: []
          };
          if (divisions) {
            if (divisions.length) {
              divisions.forEach(item => {
                userInfo.Roles.push({
                  label: item.group_name,
                  value: item.title
                });
              });
            } else {
              userInfo.Roles.push({
                label: divisions.group_name,
                divisions: divisions.title
              });
            }
          }
          _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_INFO = userInfo;
        }
        this.utilService.pushRoute('dashboard');
      },
      error: error => {
        console.error('Request failed with error');
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_agc_service__WEBPACK_IMPORTED_MODULE_1__.AgcService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["login"]],
  decls: 25,
  vars: 3,
  consts: [[1, "container-fluid", 2, "padding-left", "6px !important", "height", "914px !important"], [1, "row", 2, "height", "130px"], [1, "col-lg-12", "sm-padding", "login-lg-header"], ["tooltipStyleClass", "custom-tooltip", 1, "custom-wht-text", "pointer"], [1, "row"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding", "login-input", 2, "text-align", "center !important"], ["type", "text", "pInputText", "", "placeholder", "Username", "name", "userName", 3, "ngModel", "ngModelChange"], ["uName", "ngModel"], ["name", "pwd", "placeholder", "Password", 1, "pwd-field", 3, "ngModel", "feedback", "ngModelChange", "keyup.enter"], ["pwd", "ngModel"], [1, "col-lg-4", "xsm-padding"], [1, "col-lg-2", "xsm-padding"], ["label", "Sign in", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to sign in", "styleClass", "p-button-sm", 1, "custom-tertiary-login-btn", 3, "click"], [1, "xsm-padding", "login-input", 2, "text-align", "center !important", "padding-top", "15px !important"], ["routerLink", "/signup", 1, "sign-up"], ["position", "top-right"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "p-password", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_12_listener($event) {
        return ctx.password = $event;
      })("keyup.enter", function LoginComponent_Template_p_password_keyup_enter_12_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 6)(18, "p-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_p_button_click_18_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 14)(21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sign Up?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p-toast", 16);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password)("feedback", false);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_password__WEBPACK_IMPORTED_MODULE_11__.Password],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6036:
/*!***************************************************************************!*\
  !*** ./src/app/commons/components/notification/notification.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _services_agc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agc.service */ 2935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 9129);






function NotificationComponent_ng_template_1_div_0_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_ng_template_1_div_0_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const notf_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.actOnNotf("DELETE", notf_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationComponent_ng_template_1_div_0_i_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_ng_template_1_div_0_i_11_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const notf_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.actOnNotf("READ", notf_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NotificationComponent_ng_template_1_div_0_i_10_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NotificationComponent_ng_template_1_div_0_i_11_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_ng_template_1_div_0_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const notf_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.openNotification(notf_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const notf_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("row xsm-margin ", notf_r2.StyleClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notf_r2.NotfHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("File ", notf_r2.FileReferenceNo, "; ", notf_r2.Message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", notf_r2.CreatedDate, " at ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 10, notf_r2.CreatedOn, "h:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notf_r2.ShowDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notf_r2.ShowRead);
  }
}
function NotificationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NotificationComponent_ng_template_1_div_0_Template, 13, 13, "div", 4);
  }
  if (rf & 2) {
    const notf_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notf_r2.ShowNotf);
  }
}
function NotificationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No new notifications!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
class NotificationComponent {
  constructor(utilService, agcService) {
    this.utilService = utilService;
    this.agcService = agcService;
    this.allNotifications = [];
    this.notifications = [];
  }
  ngOnInit() {
    this.getAllNotifications();
  }
  getAllNotifications() {
    this.notifications = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.allNotifications);
  }
  actOnNotf(action, data) {
    let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.notifications, function (notf) {
      return notf.ItemId == data.ItemId;
    });
    if (index != -1) {
      this.agcService.updateUserNotifications(this.notifications[index].ItemId, action).subscribe({
        next: response => {
          if (action === 'READ') {
            this.notifications[index].ShowRead = false;
            this.notifications[index].StyleClass = 'notf-row';
            this.utilService.alert('success', 'Success', 'Notification read successfully!!', false);
          } else if (action === 'DELETE') {
            this.notifications[index].ShowRead = false;
            this.notifications[index].ShowDelete = false;
            this.notifications[index].ShowNotf = false;
            this.utilService.alert('success', 'Success', 'Notification deleted successfully!!', false);
          }
        },
        error: error => {
          console.error('Request failed with error');
        }
      });
    }
  }
  openNotification(data) {
    this.utilService.alert('error', 'Error', 'The request cannot be viewed!!', false);
  }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_agc_service__WEBPACK_IMPORTED_MODULE_2__.AgcService));
};
NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["notification"]],
  inputs: {
    allNotifications: "allNotifications"
  },
  decls: 4,
  vars: 2,
  consts: [[1, "container-fluid"], ["ngFor", "", 3, "ngForOf"], ["class", "row", 4, "ngIf"], ["position", "top-right"], [3, "class", 4, "ngIf"], [1, "col-lg-1", "circle"], [2, "padding-top", "8px"], [1, "col-lg-11", "no-left-padding", "no-top-padding"], [1, "sm-height", 2, "font-size", "13px !important"], ["class", "fa fa-trash pull-right xsm-padding pointer", "style", "font-size: 18px !important;", "title", "Click to delete notification", 3, "click", 4, "ngIf"], ["class", "fa fa-check pull-right xsm-padding pointer", "style", "font-size: 18px !important;", "title", "Click to mark the notification as read", 3, "click", 4, "ngIf"], ["title", "Click to open the request", 1, "fa", "fa-eye", "pull-right", "xsm-padding", "pointer", 2, "font-size", "18px !important", 3, "click"], ["title", "Click to delete notification", 1, "fa", "fa-trash", "pull-right", "xsm-padding", "pointer", 2, "font-size", "18px !important", 3, "click"], ["title", "Click to mark the notification as read", 1, "fa", "fa-check", "pull-right", "xsm-padding", "pointer", 2, "font-size", "18px !important", 3, "click"], [1, "row"], [1, "col-lg-12", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "form-divider", "custom-info-text"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NotificationComponent_div_2_Template, 4, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-toast", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allNotifications.length == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5015:
/*!*****************************************************************!*\
  !*** ./src/app/commons/components/sign-up/sign-up.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _services_agc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/agc.service */ 2935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 8848);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/multiselect */ 850);














const _c0 = ["signupForm"];
function SignUpComponent_i_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
  }
}
function SignUpComponent_i_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 37);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c3 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
const _c4 = function (a0) {
  return {
    "pwd-is-invalid": a0
  };
};
class SignUpComponent {
  constructor(utilService, agcService, router) {
    this.utilService = utilService;
    this.agcService = agcService;
    this.router = router;
    this.showSpinner = false;
    this.formSubmitted = false;
    this.readOnly = false;
    this.userObj = {};
    this.plainPassword = "";
    this.password = "";
    this.pwdsMatch = false;
    this.isUNameValid = false;
    this.departments = [];
    this.divisions = [];
  }
  ngOnInit() {
    this.loadDepartments();
    this.loadDivisions();
  }
  loadDivisions() {
    this.divisions = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_DIVISION').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.divisions.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  loadDepartments() {
    this.departments = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('DEPARTMENT').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.departments.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  comparePassword() {
    if (!this.utilService.isEmpty(this.password) && !this.utilService.isEmpty(this.plainPassword)) {
      if (this.password != this.plainPassword) {
        this.pwdsMatch = false;
        this.utilService.alert('error', 'Password Mismatch', 'Please confirm the right password!', false);
      } else {
        this.pwdsMatch = true;
      }
    }
  }
  checkUsername() {
    this.showSpinner = true;
    this.agcService.getUserInfo(this.userObj.username).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length > 0) {
            this.isUNameValid = false;
            this.utilService.alert('error', 'Username exists', 'Username already exists!', false);
            this.userObj.username = '';
          } else {
            this.isUNameValid = true;
          }
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  signUp() {
    this.formSubmitted = true;
    if (!this.signupForm.valid) {
      this.utilService.alert('error', 'Missing Information', 'Please fill in the mandatory details!', false);
    } else if (!this.isUNameValid) {
      this.utilService.alert('error', 'Username exists', 'Username already exists!', false);
    } else if (!this.pwdsMatch) {
      this.utilService.alert('error', 'Password Mismatch', 'Please confirm the right password!', false);
    } else {
      this.showSpinner = true;
      this.agcService.generateHash(this.plainPassword, '10').subscribe({
        next: response => {
          let resp = Object.assign(response);
          if (resp) {
            this.userObj.password = resp.valueOf();
            this.agcService.createUser(this.userObj).subscribe({
              next: createUserResponse => {
                let createUserResp = Object.assign(createUserResponse);
                if (createUserResp) {
                  this.utilService.alert('success', 'Success', createUserResp.message, false);
                  this.showSpinner = false;
                  this.router.navigate(['./login']);
                }
              },
              error: error => {
                console.log('Request failed with error');
                this.showSpinner = false;
              }
            });
          }
        },
        error: error => {
          console.log('Request failed with error');
          this.showSpinner = false;
        }
      });
    }
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_agc_service__WEBPACK_IMPORTED_MODULE_1__.AgcService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  viewQuery: function SignUpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signupForm = _t.first);
    }
  },
  decls: 103,
  vars: 107,
  consts: [[1, "container-fluid", 2, "background-color", "#FFF", "height", "845px"], ["signupForm", "ngForm"], [1, "row", "no-padding"], [1, "col-lg-2", "sm-padding"], [1, "col-lg-8", "md-padding", "sign-up-form"], [1, "row"], [1, "col-lg-6", "sm-padding", "no-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "signup-form-field-header", "no-bottom-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["type", "text", "pInputText", "", "name", "fName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter first name", "tooltipPosition", "bottom", "placeholder", "First Name", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange"], ["fName", "ngModel"], ["type", "text", "pInputText", "", "name", "lName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter last name", "tooltipPosition", "bottom", "placeholder", "Last Name", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange"], ["lName", "ngModel"], ["type", "text", "pInputText", "", "name", "dName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter display name", "tooltipPosition", "bottom", "placeholder", "Display Name", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange"], ["dName", "ngModel"], ["mode", "decimal", "inputId", "withoutgrouping", "name", "contact", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter contact", "tooltipPosition", "bottom", "placeholder", "Contact", 1, "input-number", 3, "useGrouping", "disabled", "ngModel", "ngClass", "required", "ngModelChange"], ["contact", "ngModel"], ["type", "text", "pInputText", "", "name", "email", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter email", "tooltipPosition", "bottom", "email", "", "placeholder", "Email", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange"], ["email", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a department", "name", "dept", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose department", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["dept", "ngModel"], ["placeholder", "Choose divisons", "optionLabel", "label", "name", "div", 1, "input-multiselect", 3, "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["div", "ngModel"], [1, "p-input-icon-right", 2, "width", "100%"], ["class", "pi pi-check", 4, "ngIf"], ["type", "text", "pInputText", "", "name", "uName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter username", "tooltipPosition", "bottom", "placeholder", "Username", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange", "change"], ["uName", "ngModel"], ["name", "pwd", "placeholder", "Password", 1, "signup-pwd-field", 3, "disabled", "ngModel", "feedback", "required", "ngClass", "ngModelChange", "change"], ["pwd", "ngModel"], ["type", "text", "pInputText", "", "name", "ppwd", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter password", "tooltipPosition", "bottom", "placeholder", "Confirm Password", 3, "disabled", "ngModel", "ngClass", "required", "ngModelChange", "change"], ["ppwd", "ngModel"], [1, "col-lg-4", "xsm-padding"], [1, "xsm-padding", "signup-input", 2, "text-align", "center !important"], ["label", "Sign Up", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to sign up", "styleClass", "p-button-sm", 1, "custom-tertiary-login-btn", 3, "click"], ["position", "top-right"], [1, "pi", "pi-check"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", null, 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " First Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.userObj.first_name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Last Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.userObj.last_name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5)(24, "div", 6)(25, "div", 7)(26, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Display Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9)(29, "div", 10)(30, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.userObj.display_name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "div", 7)(34, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9)(37, "div", 10)(38, "p-inputNumber", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_p_inputNumber_ngModelChange_38_listener($event) {
        return ctx.userObj.contact = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5)(41, "div", 6)(42, "div", 7)(43, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9)(46, "div", 10)(47, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_47_listener($event) {
        return ctx.userObj.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 6)(50, "div", 7)(51, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Department ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "p-dropdown", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_p_dropdown_ngModelChange_55_listener($event) {
        return ctx.userObj.department = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 5)(58, "div", 6)(59, "div", 7)(60, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Divisions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 9)(63, "div", 10)(64, "p-multiSelect", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_p_multiSelect_ngModelChange_64_listener($event) {
        return ctx.userObj.divisions = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 6)(67, "div", 7)(68, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Username ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 9)(71, "div", 10)(72, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, SignUpComponent_i_73_Template, 1, 0, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_74_listener($event) {
        return ctx.userObj.username = $event;
      })("change", function SignUpComponent_Template_input_change_74_listener() {
        return ctx.checkUsername();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 5)(77, "div", 6)(78, "div", 7)(79, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 9)(82, "div", 10)(83, "p-password", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_p_password_ngModelChange_83_listener($event) {
        return ctx.password = $event;
      })("change", function SignUpComponent_Template_p_password_change_83_listener() {
        return ctx.comparePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 6)(86, "div", 7)(87, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Confirm Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 9)(90, "div", 10)(91, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, SignUpComponent_i_92_Template, 1, 0, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "input", 31, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_93_listener($event) {
        return ctx.plainPassword = $event;
      })("change", function SignUpComponent_Template_input_change_93_listener() {
        return ctx.comparePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 33)(98, "div", 34)(99, "p-button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_p_button_click_99_listener() {
        return ctx.signUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "p-toast", 36);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](48);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](56);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](84);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](57, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.userObj.first_name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](60, _c2, ctx.formSubmitted && _r1.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](62, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.userObj.last_name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](65, _c2, ctx.formSubmitted && _r2.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](67, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.userObj.display_name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](70, _c2, ctx.formSubmitted && _r3.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](72, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useGrouping", false)("disabled", ctx.readOnly)("ngModel", ctx.userObj.contact)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](75, _c2, ctx.formSubmitted && _r4.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](77, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.userObj.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](80, _c2, ctx.formSubmitted && _r5.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](82, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("filter", true)("disabled", ctx.readOnly)("options", ctx.departments)("ngModel", ctx.userObj.department)("required", !ctx.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](85, _c3, ctx.formSubmitted && _r6.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](87, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("options", ctx.divisions)("ngModel", ctx.userObj.divisions)("required", !ctx.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](90, _c3, ctx.formSubmitted && _r6.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](92, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUNameValid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.userObj.username)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](95, _c2, ctx.formSubmitted && _r9.invalid))("required", !ctx.readOnly);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](97, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.password)("feedback", false)("required", !ctx.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](100, _c4, ctx.formSubmitted && _r10.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](102, _c1, !ctx.readOnly, ctx.readOnly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pwdsMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readOnly)("ngModel", ctx.plainPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](105, _c2, ctx.formSubmitted && _r12.invalid))("required", !ctx.readOnly);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, primeng_password__WEBPACK_IMPORTED_MODULE_12__.Password, primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__.MultiSelect],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1825:
/*!***************************************************************************!*\
  !*** ./src/app/commons/components/user-profile/user-profile.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities.service */ 5810);
/* harmony import */ var _entities_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entities/user-profile */ 6528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_agc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/agc.service */ 2935);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);















const _c0 = ["upForm"];
function UserProfileComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 22)(2, "div", 27)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 29)(6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](role_r5.label);
  }
}
const _c1 = function (a0) {
  return {
    "required": a0
  };
};
const _c2 = function (a0) {
  return {
    "p-calendar-is-invalid": a0
  };
};
const _c3 = function (a0) {
  return {
    "p-inputtextarea-is-invalid": a0
  };
};
function UserProfileComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 19)(2, "div", 32)(3, "div", 33)(4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Date From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 35)(7, "p-calendar", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_div_44_Template_p_calendar_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.userProfile.DateFrom = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 32)(10, "div", 33)(11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Date Until ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 35)(14, "p-calendar", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_div_44_Template_p_calendar_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.userProfile.DateUntil = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 19)(17, "div", 40)(18, "div", 33)(19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 35)(22, "textarea", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_div_44_Template_textarea_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.userProfile.OutOfOfficeMessage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx_r4.isOOOEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.userProfile.DateFrom)("showIcon", true)("required", ctx_r4.isOOOEnabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c2, ctx_r4.formSubmitted && _r7.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx_r4.isOOOEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.userProfile.DateUntil)("showIcon", true)("minDate", ctx_r4.userProfile.DateFrom)("required", ctx_r4.isOOOEnabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c2, ctx_r4.formSubmitted && _r8.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c1, ctx_r4.isOOOEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.userProfile.OutOfOfficeMessage)("rows", 5)("cols", 30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c3, ctx_r4.formSubmitted && _r9.invalid))("required", ctx_r4.isOOOEnabled);
  }
}
const _c4 = function () {
  return {
    height: "150px"
  };
};
class UserProfileComponent {
  constructor(utilService, datePipe, agcService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.oooEnable = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.userDivisions = [];
    this.todaysDate = new Date();
    this.isOOOEnabled = false;
    this.formSubmitted = false;
    this.userProfile = {};
  }
  ngOnInit() {
    this.userProfile = new _entities_user_profile__WEBPACK_IMPORTED_MODULE_2__.USER_PROFILE();
    this.userHeader = lodash__WEBPACK_IMPORTED_MODULE_0__.upperCase(this.userInfo?.DisplayName?.substring(0, 1));
    this.formattedUserName = lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize(this.userInfo?.DisplayName);
    this.loadUserDetails();
  }
  loadUserDetails() {
    this.userProfile.DateFrom = this.userInfo?.DateFrom ? new Date(this.userInfo?.DateFrom) : null;
    this.userProfile.DateUntil = this.userInfo?.DateUntil ? new Date(this.userInfo?.DateUntil) : null;
    this.userProfile.DepartmentName = this.userInfo?.DepartmentName;
    this.userProfile.Email = this.userInfo?.Email;
    this.userProfile.ItemID = this.userInfo?.ItemID;
    this.userProfile.OutOfOfficeMessage = this.userInfo?.OutOfOfficeMessage;
    this.userProfile.OutOfOffice = this.userInfo?.OutOfOffice;
    this.userProfile.ReceiveEmailNotifications = this.userInfo?.ReceiveEmailNotifications;
    if (this.userProfile?.OutOfOffice) {
      this.isOOOEnabled = true;
    } else {
      this.isOOOEnabled = false;
    }
    this.userInfo?.Roles.forEach(role => {
      this.userDivisions.push(role);
    });
    this.oooEnable.emit(this.isOOOEnabled);
    if (!this.utilService.isEmpty(this.userProfile.DateUntil)) {
      if (new Date(this.userInfo.DateUntil) < new Date()) {
        this.removeOOO();
      }
    }
  }
  actOnOOO(data) {
    this.oooEnable.emit(data.checked);
    if (data.checked) {
      this.isOOOEnabled = true;
    } else {
      this.isOOOEnabled = false;
    }
  }
  ngOnChanges(changes) {
    if (changes['modalSubmit'].currentValue) {
      this.onSubmit();
    }
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.upForm && !this.upForm.valid) {
      this.reqSubmit.emit({
        status: 'FAILURE'
      });
      this.utilService.alert('error', 'Error', 'Please fill all mandatory details!!', false);
    } else {
      let user_profile = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.userProfile);
      user_profile.ooo_date_from = user_profile.DateFrom ? this.datePipe.transform(user_profile.DateFrom, "yyyy-MM-dd'T'hh:mm:ss") : null;
      user_profile.ooo_date_until = user_profile.DateUntil ? this.datePipe.transform(user_profile.DateUntil, "yyyy-MM-dd'T'hh:mm:ss") : null;
      user_profile.ooo_message = user_profile.OutOfOfficeMessage;
      user_profile.ooo = user_profile.OutOfOffice == true ? '1' : '0';
      user_profile.email_notifications = user_profile.ReceiveEmailNotifications == true ? '1' : '0';
      this.agcService.updateUserProfile(_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_NAME, user_profile).subscribe({
        next: response => {
          let resp = Object.assign(response);
          if (resp) {
            this.reqSubmit.emit({
              status: 'SUCCESS'
            });
            this.oooEnable.emit({
              value: user_profile.OutOfOffice
            });
          }
        },
        error: error => {
          console.error('Request failed with error');
          this.reqSubmit.emit({
            status: 'FAILURE'
          });
        }
      });
    }
  }
  removeOOO() {
    let user_profile = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.userProfile);
    this.userProfile.ooo_message = null;
    this.userProfile.ooo_date_from = null;
    this.userProfile.ooo_data_until = null;
    this.userProfile.ooo = false;
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_agc_service__WEBPACK_IMPORTED_MODULE_3__.AgcService));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["user-profile"]],
  viewQuery: function UserProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.upForm = _t.first);
    }
  },
  inputs: {
    userInfo: "userInfo",
    modalSubmit: "modalSubmit"
  },
  outputs: {
    oooEnable: "oooEnable",
    reqSubmit: "reqSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 46,
  vars: 13,
  consts: [[1, "container-fluid"], ["upForm", "ngForm"], [1, "row", "xsm-margin"], [1, "col-lg-1", "circle"], [2, "padding-top", "8px"], [1, "col-lg-10", "xsm-padding"], [1, "row"], [1, "form-field-header", "no-top-padding", 2, "font-size", "x-large !important", "height", "40px !important"], [1, "col-lg-4", 2, "font-size", "12px !important"], [1, "col-lg-8"], [1, "col-lg-1"], [1, "p-field-radiobutton"], ["name", "emailNotf", "inputId", "binary", 1, "sm-custom-checkbox", 3, "ngModel", "binary", "ngModelChange"], ["emailNotf", "ngModel"], [1, "col-lg-10"], [1, "sm-padding", "no-padding", 2, "font-size", "12px !important"], ["name", "ooo", 1, "sm-custom-checkbox", 3, "ngModel", "binary", "ngModelChange", "onChange"], ["ooo", "ngModel"], [1, "col-lg-4", "xsm-padding"], [1, "row", "xsm-padding"], [1, "form-field-header", "no-top-padding"], [1, "custom-scroll"], [1, "col-lg-12"], [1, "row", "xsm-padding", "no-bottom-padding", 2, "margin-left", "0px !important"], ["ngFor", "", 3, "ngForOf"], ["class", "col-lg-8 xsm-padding", 4, "ngIf"], ["position", "top-right"], [1, "row", 2, "border", "0px"], [1, "fa", "fa-user", 2, "padding-right", "10px"], [1, "col-lg-9"], [2, "font-size", "12px"], [1, "col-lg-8", "xsm-padding"], [1, "col-lg-6", "sm-padding", "no-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "fDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter from date", 1, "custom-calendar", 3, "ngModel", "showIcon", "required", "ngClass", "ngModelChange"], ["fDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "tDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter to date", 1, "custom-calendar", 3, "ngModel", "showIcon", "minDate", "required", "ngClass", "ngModelChange"], ["tDate", "ngModel"], [1, "col-lg-12", "sm-padding", "no-padding"], ["pInputTextarea", "", "name", "oooMsg", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter out of office message", "name", "oooMessage", 1, "custom-textarea", 2, "height", "200px !important", 3, "ngModel", "rows", "cols", "ngClass", "required", "ngModelChange"], ["oooMsg", "ngModel"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", null, 1)(3, "div", 2)(4, "div", 3)(5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "div", 6)(16, "div", 10)(17, "div", 11)(18, "p-checkbox", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_p_checkbox_ngModelChange_18_listener($event) {
        return ctx.userProfile.ReceiveEmailNotifications = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14)(21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Receive email notifications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6)(24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9)(27, "div", 6)(28, "div", 10)(29, "div", 11)(30, "p-checkbox", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserProfileComponent_Template_p_checkbox_ngModelChange_30_listener($event) {
        return ctx.userProfile.OutOfOffice = $event;
      })("onChange", function UserProfileComponent_Template_p_checkbox_onChange_30_listener($event) {
        return ctx.actOnOOO($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 14)(33, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Enable Out of Office ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 2)(36, "div", 18)(37, "div", 19)(38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Roles in system ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p-scrollPanel", 21)(41, "div", 22)(42, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, UserProfileComponent_ng_template_43_Template, 8, 1, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, UserProfileComponent_div_44_Template, 24, 29, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "p-toast", 26);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.formattedUserName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.userProfile.Email, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userProfile.ReceiveEmailNotifications)("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.userProfile.DepartmentName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userProfile.OutOfOffice)("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.userDivisions);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isOOOEnabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_6__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.Checkbox, primeng_calendar__WEBPACK_IMPORTED_MODULE_9__.Calendar, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 701:
/*!************************************************************!*\
  !*** ./src/app/commons/directives/file-title.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileTitleDirective": () => (/* binding */ FileTitleDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class FileTitleDirective {
  constructor() {
    this.fileRefNo = '';
  }
  validate(control) {
    let fieldValue = control.value;
    console.log("The file reference number is - " + this.fileRefNo);
    if (lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty(fieldValue)) return {
      ftValid: false,
      showError: true,
      message: 'File title is required'
    };else if (lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty(this.fileRefNo)) return {
      ftValid: false,
      showError: true,
      message: 'File title should be in the format of <<File Reference No - title>>'
    };else {
      if (fieldValue.indexOf("-") == -1) return {
        ftValid: false,
        showError: true,
        message: 'File title should be in the format of <<File Reference No - title>>'
      };else if (fieldValue.split("-")[0] != this.fileRefNo) return {
        ftValid: false,
        showError: true,
        message: 'File title should be in the format of <<File Reference No - title>>'
      };else if (fieldValue.split("-")[1].length == 0) return {
        ftValid: false,
        showError: true,
        message: 'File title should be in the format of <<File Reference No - title>>'
      };else return null;
    }
  }
}
FileTitleDirective.ɵfac = function FileTitleDirective_Factory(t) {
  return new (t || FileTitleDirective)();
};
FileTitleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FileTitleDirective,
  selectors: [["", "fileTitle", ""]],
  inputs: {
    fileRefNo: "fileRefNo"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
    useClass: FileTitleDirective,
    multi: true
  }])]
});

/***/ }),

/***/ 9693:
/*!*******************************************!*\
  !*** ./src/app/commons/primeng.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* binding */ PrimeNGModule)
/* harmony export */ });
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tree */ 3449);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressbar */ 8395);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/chip */ 287);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/panel */ 4266);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/blockui */ 81);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/breadcrumb */ 7298);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/password */ 8848);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/multiselect */ 850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


































class PrimeNGModule {}
PrimeNGModule.ɵfac = function PrimeNGModule_Factory(t) {
  return new (t || PrimeNGModule)();
};
PrimeNGModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PrimeNGModule
});
PrimeNGModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService],
  imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_5__.ScrollPanelModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.CheckboxModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_15__.AccordionModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabViewModule, primeng_tree__WEBPACK_IMPORTED_MODULE_17__.TreeModule, primeng_badge__WEBPACK_IMPORTED_MODULE_18__.BadgeModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__.ProgressBarModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.PaginatorModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__.ProgressSpinnerModule, primeng_chip__WEBPACK_IMPORTED_MODULE_23__.ChipModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__.SidebarModule, primeng_tag__WEBPACK_IMPORTED_MODULE_25__.TagModule, primeng_panel__WEBPACK_IMPORTED_MODULE_26__.PanelModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_27__.BlockUIModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_28__.InputSwitchModule, primeng_divider__WEBPACK_IMPORTED_MODULE_29__.DividerModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__.BreadcrumbModule, primeng_password__WEBPACK_IMPORTED_MODULE_31__.PasswordModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__.MultiSelectModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNGModule, {
    exports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_5__.ScrollPanelModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.CheckboxModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_15__.AccordionModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabViewModule, primeng_tree__WEBPACK_IMPORTED_MODULE_17__.TreeModule, primeng_badge__WEBPACK_IMPORTED_MODULE_18__.BadgeModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_19__.ProgressBarModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_20__.PaginatorModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__.ProgressSpinnerModule, primeng_chip__WEBPACK_IMPORTED_MODULE_23__.ChipModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_24__.SidebarModule, primeng_tag__WEBPACK_IMPORTED_MODULE_25__.TagModule, primeng_panel__WEBPACK_IMPORTED_MODULE_26__.PanelModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_27__.BlockUIModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_28__.InputSwitchModule, primeng_divider__WEBPACK_IMPORTED_MODULE_29__.DividerModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_30__.BreadcrumbModule, primeng_password__WEBPACK_IMPORTED_MODULE_31__.PasswordModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__.MultiSelectModule]
  });
})();

/***/ }),

/***/ 2935:
/*!*************************************************!*\
  !*** ./src/app/commons/services/agc.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgcService": () => (/* binding */ AgcService)
/* harmony export */ });
/* harmony import */ var src_config_api_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-url */ 6049);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class AgcService {
  constructor(http) {
    this.http = http;
    this.apiURL = src_config_api_url__WEBPACK_IMPORTED_MODULE_0__.api;
    this.apiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_endpoint;
  }
  getMasterDataByType(type) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.http.get(this.apiEndpoint + this.apiURL.get_master_data + '?source=type&identifier=' + type));
  }
  getMasterDataByTypeAndParent(type, parent_code) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_master_data + '?source=type_parent&identifier=' + type + '&parent_code=' + parent_code);
  }
  getMasterDataByCode(code) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_master_data + '?source=code&identifier=' + code);
  }
  getMasterDataByTypes(types) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_master_data + '?source=types&identifier=' + types);
  }
  getMasterDataByCodes(codes) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_master_data + '?source=codes&identifier=' + codes);
  }
  getUserNotifications(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.user_notifications + '?username=' + username);
  }
  updateUserNotifications(id, action) {
    return this.http.post(this.apiEndpoint + this.apiURL.user_notifications + '?id=' + id, {
      action: action
    });
  }
  getUserDivisions(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.user_divisions + '?username=' + username);
  }
  getActiveUsers() {
    return this.http.get(this.apiEndpoint + this.apiURL.active_users);
  }
  getUsers() {
    return this.http.get(this.apiEndpoint + this.apiURL.users);
  }
  getUserProfile(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.user_profile + '?username=' + username);
  }
  getUserInfo(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.user_details + '?username=' + username);
  }
  getSequence(type) {
    return this.http.get(this.apiEndpoint + this.apiURL.sequence + '?type=' + type);
  }
  generateSequence(type) {
    return this.http.post(this.apiEndpoint + this.apiURL.sequence + '?type=' + type, {});
  }
  updateUserProfile(username, userdata) {
    return this.http.post(this.apiEndpoint + this.apiURL.user_profile + '?username=' + username, {
      data: userdata
    });
  }
  getFileDetails(fileNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.file_details + '?fileReferenceNo=' + fileNo);
  }
  readFile(fileNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.read_file + '?fileReferenceNo=' + fileNo);
  }
  createFile(fileData) {
    return this.http.post(this.apiEndpoint + this.apiURL.create_file, {
      data: fileData
    });
  }
  allFiles() {
    return this.http.get(this.apiEndpoint + this.apiURL.all_files);
  }
  getFile(fileNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_file + '?source=reference&identifier=' + fileNo);
  }
  getFileByFilter(source, filterValue) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_file + '?source=' + source + '&identifier=' + filterValue);
  }
  getFilesForRequest(reqNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.files_for_request + '?requestNo=' + reqNo);
  }
  readRequest(reqNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.read_request + '?requestNo=' + reqNo);
  }
  createRequest(fileNo, reqData) {
    return this.http.post(this.apiEndpoint + this.apiURL.create_request + '?fileReferenceNo=' + fileNo, {
      data: reqData
    });
  }
  allRequests() {
    return this.http.get(this.apiEndpoint + this.apiURL.all_requests);
  }
  getRequest(reqNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.get_file + '?requestNo=' + reqNo);
  }
  getRequestDetails(reqNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.request_details + '?requestNo=' + reqNo);
  }
  getRequestsForFile(fileNo) {
    return this.http.get(this.apiEndpoint + this.apiURL.requests_for_file + '?fileReferenceNo=' + fileNo);
  }
  getFilesForDashboard(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.dashboard_files + '?username=' + username);
  }
  getRequestsForDashboard(username) {
    return this.http.get(this.apiEndpoint + this.apiURL.dashboard_requests + '?username=' + username);
  }
  generateHash(password, saltRounds) {
    return this.http.get(this.apiEndpoint + this.apiURL.generate_hash + '?password=' + password + '&saltRounds=' + saltRounds);
  }
  login(reqData) {
    return this.http.post(this.apiEndpoint + this.apiURL.login, {
      data: reqData
    });
  }
  createUser(reqData) {
    return this.http.post(this.apiEndpoint + this.apiURL.create_user, {
      data: reqData
    });
  }
}
AgcService.ɵfac = function AgcService_Factory(t) {
  return new (t || AgcService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AgcService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AgcService,
  factory: AgcService.ɵfac
});

/***/ }),

/***/ 5810:
/*!*******************************************************!*\
  !*** ./src/app/commons/services/utilities.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class UtilitiesService {
  constructor(message, datePipe) {
    this.message = message;
    this.datePipe = datePipe;
    this.route = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.cUserName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.userActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dashboardServ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pushToMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.clearMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.fileDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pageNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.fileSource = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.userNotfs = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.BREADCRUMB = [];
    this.storage = localStorage;
  }
  applyLikeFilter(array, reqKey, reqValue) {
    let fArray = [];
    let cObj = {};
    lodash__WEBPACK_IMPORTED_MODULE_0__.forEach(array, function (value) {
      cObj = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(value);
      if (lodash__WEBPACK_IMPORTED_MODULE_0__.includes(lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(cObj[reqKey]), lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase(reqValue))) {
        fArray.push(cObj);
      }
    });
    return fArray;
  }
  pushRoute(url) {
    this.route.next(url);
  }
  getUserName(userDetails) {
    this.cUserName.next(userDetails);
  }
  getUserNotfs(allNotfs) {
    this.userNotfs.next(allNotfs);
  }
  saveToStorage(key, value) {
    value = JSON.stringify(value);
    this.storage.setItem(key, value);
  }
  readFromStorage(key) {
    const value = this.storage.getItem(key) || "{}";
    return JSON.parse(value);
  }
  removeFromStorage(key) {
    return this.storage.removeItem(key);
  }
  clearFromStorage() {
    this.storage.clear();
  }
  getUserId() {
    let userObj = this.storage.getItem('userObj') || '';
    userObj = userObj ? JSON.parse(userObj) : "";
    let userId = userObj['user'] && userObj['user']['id'] ? userObj['user']['id'] : '';
    return userId;
  }
  isEmpty(reqString) {
    reqString = lodash__WEBPACK_IMPORTED_MODULE_0__.trim(reqString);
    if (reqString === '' || reqString == null || reqString.length == 0) {
      return true;
    }
    return false;
  }
  alert(severity, summary, detail, sticky) {
    this.message.clear();
    this.message.add({
      severity: severity,
      summary: summary,
      detail: detail,
      sticky: sticky
    });
  }
  setUserActions(details) {
    this.userActions.next(details);
  }
  reloadDashboard(servIdentifier) {
    this.dashboardServ.next(servIdentifier);
  }
  pushToBreadcrumb(label, icon, routerLink, queryParams, commandType, commandDesc, styleClass) {
    this.pushToMenu.next({
      label: label,
      icon: icon,
      routerLink: routerLink,
      queryParams: queryParams,
      commandType: commandType,
      commandDesc: commandDesc,
      styleClass: styleClass
    });
    this.BREADCRUMB.push({
      label: label,
      icon: icon,
      routerLink: routerLink,
      queryParams: queryParams,
      commandType: commandType,
      commandDesc: commandDesc,
      styleClass: styleClass
    });
  }
  clearBreadcrumb() {
    this.clearMenu.next({});
    this.BREADCRUMB = [];
  }
  clearBreadcrumbAfterIndex(breadcrumb, index) {
    let cBreadCrumb = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(breadcrumb);
    cBreadCrumb.splice(index + 1);
    return cBreadCrumb;
  }
  transferFileData(fileData) {
    this.fileDetails.next({
      fileData
    });
  }
  transferRowData(rowData) {
    this.rowDetails.next({
      rowData
    });
  }
  getBreadCrumb() {
    return this.BREADCRUMB;
  }
  changeCurrentPageNumber(pageNumber) {
    this.pageNo.next({
      cPage: pageNumber
    });
  }
  setFileReportSource(fileSource) {
    this.fileSource.next({
      FILE_SOURCE: fileSource
    });
  }
  addDays(date, days, object, attribute) {
    date.setDate(date.getDate() + days);
    object[attribute] = date;
  }
}
UtilitiesService.CURRENT_USER_NAME = "";
UtilitiesService.CURRENT_USER_DN = "";
UtilitiesService.CURRENT_USER_ITEM_ID = "";
UtilitiesService.IS_USER_PROFILE_TRIGGERED = false;
UtilitiesService.CURRENT_USER_INFO = {};
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) {
  return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe));
};
UtilitiesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UtilitiesService,
  factory: UtilitiesService.ɵfac
});

/***/ }),

/***/ 4904:
/*!*******************************************************!*\
  !*** ./src/app/commons/services/websocket.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




class WebsocketService {
  constructor() {
    this.messages = this.connect(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ws_endpoint).pipe(rxjs__WEBPACK_IMPORTED_MODULE_1__.map(response => {
      let data = JSON.parse(response.data);
      return data;
    }));
  }
  connect(url) {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }
  create(url) {
    let ws = new WebSocket(url);
    let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(obs => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      error: null,
      complete: null,
      next: data => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__.AnonymousSubject(observer, observable);
  }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) {
  return new (t || WebsocketService)();
};
WebsocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: WebsocketService,
  factory: WebsocketService.ɵfac
});

/***/ }),

/***/ 9257:
/*!*******************************************!*\
  !*** ./src/app/entities/advisory-file.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADVISORY_FILE": () => (/* binding */ ADVISORY_FILE)
/* harmony export */ });
class ADVISORY_FILE {
  constructor() {
    this.I_Division = '';
    this.I_Header1 = '';
    this.I_Header2 = '';
    this.I_Year = '';
  }
}

/***/ }),

/***/ 8134:
/*!**********************************************!*\
  !*** ./src/app/entities/advisory-request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADVISORY_REQUEST": () => (/* binding */ ADVISORY_REQUEST)
/* harmony export */ });
class ADVISORY_REQUEST {}

/***/ }),

/***/ 8887:
/*!**********************************************!*\
  !*** ./src/app/entities/document-details.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_DOCS": () => (/* binding */ REQUEST_DOCS)
/* harmony export */ });
class REQUEST_DOCS {}

/***/ }),

/***/ 1073:
/*!**************************************!*\
  !*** ./src/app/entities/mla-file.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MLA_FILE": () => (/* binding */ MLA_FILE)
/* harmony export */ });
class MLA_FILE {}

/***/ }),

/***/ 3323:
/*!*****************************************!*\
  !*** ./src/app/entities/mla-request.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MLA_REQUEST": () => (/* binding */ MLA_REQUEST)
/* harmony export */ });
class MLA_REQUEST {}

/***/ }),

/***/ 6528:
/*!******************************************!*\
  !*** ./src/app/entities/user-profile.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_PROFILE": () => (/* binding */ USER_PROFILE)
/* harmony export */ });
class USER_PROFILE {}

/***/ }),

/***/ 5301:
/*!*******************************************************************!*\
  !*** ./src/app/services/advisory-file/advisory-file.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvisoryFileComponent": () => (/* binding */ AdvisoryFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/services/utilities.service */ 5810);
/* harmony import */ var src_app_entities_advisory_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/advisory-file */ 9257);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/agc.service */ 2935);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/components/document-upload/document-upload.component */ 9857);


















const _c0 = ["advfileForm"];
function AdvisoryFileComponent_p_progressSpinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-progressSpinner", 7);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
function AdvisoryFileComponent_form_4_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 11)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "div", 14)(6, "p-dropdown", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_div_89_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.advisoryFile.AgencyType = $event);
    })("onChange", function AdvisoryFileComponent_form_4_div_89_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.onLocalAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r14.readOnly, ctx_r14.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r14.readOnly)("required", !ctx_r14.readOnly)("options", ctx_r14.localAgencyTypes)("ngModel", ctx_r14.advisoryFile.AgencyType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r14.formSubmitted && _r22.invalid));
  }
}
function AdvisoryFileComponent_form_4_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 11)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "div", 14)(6, "p-dropdown", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_div_90_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.advisoryFile.AgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r15.readOnly, ctx_r15.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r15.readOnly)("required", !ctx_r15.readOnly)("options", ctx_r15.localAgencyNames)("ngModel", ctx_r15.advisoryFile.AgencyName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r15.formSubmitted && _r26.invalid));
  }
}
function AdvisoryFileComponent_form_4_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 11)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Country / Foreign Org. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "div", 14)(6, "p-dropdown", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_div_91_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.advisoryFile.CountryForeignOrg = $event);
    })("onChange", function AdvisoryFileComponent_form_4_div_91_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onForeignAgencyCountryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r16.readOnly, ctx_r16.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r16.readOnly)("required", !ctx_r16.readOnly)("options", ctx_r16.foreignCountries)("ngModel", ctx_r16.advisoryFile.CountryForeignOrg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r16.formSubmitted && _r29.invalid));
  }
}
function AdvisoryFileComponent_form_4_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 11)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "div", 14)(6, "p-dropdown", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_div_92_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.advisoryFile.ForeignAgencyType = $event);
    })("onChange", function AdvisoryFileComponent_form_4_div_92_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.onForeignAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r17.readOnly, ctx_r17.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r17.readOnly)("required", !ctx_r17.readOnly)("options", ctx_r17.foreignAgencyTypes)("ngModel", ctx_r17.advisoryFile.ForeignAgencyType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r17.formSubmitted && _r33.invalid));
  }
}
function AdvisoryFileComponent_form_4_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 11)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "div", 14)(6, "p-dropdown", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_div_93_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.advisoryFile.ForeignAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r18.readOnly, ctx_r18.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r18.readOnly)("required", !ctx_r18.readOnly)("options", ctx_r18.foreignAgencyNames)("ngModel", ctx_r18.advisoryFile.ForeignAgencyName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r18.formSubmitted && _r37.invalid));
  }
}
const _c3 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c4 = function (a0) {
  return {
    "p-radiobutton-is-invalid": a0
  };
};
const _c5 = function (a1) {
  return {
    "required": false,
    "read-only": a1
  };
};
function AdvisoryFileComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " AGC File Ref. No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " AG / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 15)(11, "div", 10)(12, "div", 16)(13, "p-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.advisoryFile.I_Division = $event);
    })("onChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_onChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.onFileDivisionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "div", 10)(19, "div", 16)(20, "p-dropdown", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.advisoryFile.I_Header1 = $event);
    })("onChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_onChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.onFileHeader1Change($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 10)(26, "div", 16)(27, "p-dropdown", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.advisoryFile.I_Header2 = $event);
    })("onChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_onChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r46.onFileHeader2Change($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 15)(32, "div", 10)(33, "div", 16)(34, "p-dropdown", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.advisoryFile.I_Year = $event);
    })("onChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_onChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.onFileYearChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 26)(39, "div", 14)(40, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.advisoryFile.I_SerialNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 10)(43, "div", 29)(44, "div", 11)(45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 31)(48, "div", 14)(49, "textarea", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_textarea_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.advisoryFile.FileTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 10)(52, "div", 34)(53, "div", 11)(54, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 31)(57, "div", 14)(58, "p-dropdown", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.advisoryFile.SecurityClassification = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34)(61, "div", 11)(62, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Sensitive / High Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 31)(65, "div", 37)(66, "div", 38)(67, "div", 39)(68, "p-radioButton", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_radioButton_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.advisoryFile.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 42)(71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 38)(74, "div", 39)(75, "p-radioButton", 44, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_radioButton_ngModelChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.advisoryFile.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 42)(78, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 34)(81, "div", 11)(82, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Local / Foreign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 31)(85, "div", 14)(86, "p-dropdown", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.advisoryFile.LocalForeign = $event);
    })("onChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_onChange_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.onLocalForeignChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, AdvisoryFileComponent_form_4_div_89_Template, 8, 12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, AdvisoryFileComponent_form_4_div_90_Template, 8, 12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, AdvisoryFileComponent_form_4_div_91_Template, 8, 12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, AdvisoryFileComponent_form_4_div_92_Template, 8, 12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, AdvisoryFileComponent_form_4_div_93_Template, 8, 12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 10)(95, "div", 48)(96, "div", 29)(97, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " File External Agency Ref. Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 31)(100, "div", 14)(101, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_input_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.advisoryFile.ExtAgencyRefNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 34)(104, "div", 29)(105, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " File Owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 31)(108, "div", 14)(109, "p-dropdown", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_p_dropdown_ngModelChange_109_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r57.advisoryFile.FileOwner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 29)(112, "div", 11)(113, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 31)(116, "div", 14)(117, "textarea", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryFileComponent_form_4_Template_textarea_ngModelChange_117_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.advisoryFile.Remarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](59);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](87);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](102);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](110);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](74, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileDivisions)("ngModel", ctx_r1.advisoryFile.I_Division)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](77, _c2, ctx_r1.formSubmitted && _r4.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.header1)("ngModel", ctx_r1.advisoryFile.I_Header1)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](79, _c2, ctx_r1.formSubmitted && _r5.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.header2)("ngModel", ctx_r1.advisoryFile.I_Header2)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](81, _c2, ctx_r1.formSubmitted && _r6.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.year)("ngModel", ctx_r1.advisoryFile.I_Year)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](83, _c2, ctx_r1.formSubmitted && _r7.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r1.advisoryFile.I_SerialNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](85, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryFile.FileTitle)("rows", 5)("cols", 30)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](88, _c3, ctx_r1.formSubmitted && _r9.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](90, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.secClassification)("ngModel", ctx_r1.advisoryFile.SecurityClassification)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](93, _c2, ctx_r1.formSubmitted && _r10.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](95, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryFile.Sensitivity)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](98, _c4, ctx_r1.formSubmitted && _r11.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryFile.Sensitivity)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](100, _c4, ctx_r1.formSubmitted && _r11.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](102, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("options", ctx_r1.fileOrigin)("ngModel", ctx_r1.advisoryFile.LocalForeign)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](105, _c2, ctx_r1.formSubmitted && _r13.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showLocalAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showLocalAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryFile.ExtAgencyRefNo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](107, _c3, ctx_r1.formSubmitted && _r19.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileOwners)("ngModel", ctx_r1.advisoryFile.FileOwner)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](109, _c2, ctx_r1.formSubmitted && _r20.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](111, _c5, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryFile.Remarks)("rows", 5)("cols", 30);
  }
}
function AdvisoryFileComponent_p_tabPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-tabPanel", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "document-upload", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("requestType", "File")("readOnly", "N")("requestID", ctx_r2.advisoryFile.ReferenceNo);
  }
}
class AdvisoryFileComponent {
  constructor(utilService, datePipe, agcService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.fileDetails = [];
    this.readOnly = false;
    this.secClassification = [];
    this.allFileDivisions = [];
    this.fileDivisions = [];
    this.header1 = [];
    this.header2 = [];
    this.year = [];
    this.localAgencyNames = [];
    this.localAgencyTypes = [];
    this.foreignAgencyNames = [];
    this.foreignAgencyTypes = [];
    this.fileOrigin = [];
    this.fileOwners = [];
    this.caseStatus = [];
    this.todaysDate = new Date();
    this.agcFileReFNo = '';
    this.fileSerialNumber = 0;
    this.formSubmitted = false;
    this.modalSubmit = false;
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.alertMessages = [];
    this.showForeignAgencyDetails = false;
    this.showLocalAgencyDetails = true;
    this.foreignCountries = [];
    this.fileDivisionItemIDMap = new Map();
    this.fileHeader1ItemIDMap = new Map();
    this.fileHeader2ItemIDMap = new Map();
    this.localAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyCountryCodeIDMap = new Map();
    this.showSpinner = false;
    this.reqIDAvailable = false;
  }
  ngOnInit() {
    this.showSpinner = true;
    this.formSubmitted = false;
    this.advisoryFile = new src_app_entities_advisory_file__WEBPACK_IMPORTED_MODULE_1__.ADVISORY_FILE();
    this.setSerialNo();
    this.getFileOrigins();
    this.getSecurityClassifications();
    this.getAGItemID();
    this.getFileOwners();
    this.getCaseStatus();
    this.advisoryFile.FileType = 'ADVISORY';
  }
  ngOnChanges(changes) {
    if (changes['modalSubmit'].currentValue) {
      this.onSubmit();
    }
  }
  setSerialNo() {
    this.showSpinner = true;
    this.agcService.getSequence('Advisory File').subscribe({
      next: response => {
        let resp = Object.assign(response);
        let prefix = resp[0].prefix ? resp[0].prefix : '';
        let count = Number(resp[0].seq_count) + 1;
        let suffix = resp[0].suffix ? resp[0].suffix : '';
        this.advisoryFile.I_SerialNo = prefix + count + suffix;
      },
      error: error => {
        console.error("Request failed with error");
        this.showSpinner = false;
      }
    });
  }
  getFileOrigins() {
    this.fileOrigin = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_ORIGIN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileOrigin.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryFile.LocalForeign = 'ADDR_L';
          this.advisoryFile.LocalOrForeign = 'ADDR_L';
          this.getLocalAgencyTypes();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getSecurityClassifications() {
    this.secClassification = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('SECURITY_CLASSIFICATION').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.secClassification.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryFile.SecurityClassification = 'SCLASS_S';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCaseStatus() {
    this.caseStatus = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('CASE_STATUS').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.caseStatus.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
        this.advisoryFile.FileStatus = 'CSTAT_DO';
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getAGItemID() {
    this.showSpinner = true;
    this.agcService.getMasterDataByType('ROOT_CODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          this.getFileDivisions(resp[0].code);
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileDivisions(agItemID) {
    this.allFileDivisions = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_DIVISION', agItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.allFileDivisions.push({
                label: item.value,
                value: item.code
              });
              this.fileDivisionItemIDMap.set(item.value, item.code);
            });
          }
          this.getCurrentUserFileDivisions();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCurrentUserFileDivisions() {
    this.fileDivisions = [];
    this.showSpinner = true;
    this.agcService.getUserDivisions(src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              let index = lodash__WEBPACK_IMPORTED_MODULE_2__.findIndex(this.allFileDivisions, function (fg) {
                return fg.value == item.title;
              });
              if (index != -1) {
                this.fileDivisions.push({
                  label: item.group_name,
                  value: item.title
                });
              }
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileHeader1(divItemID) {
    this.header1 = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_HEADER1', divItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.header1.push({
                label: item.value,
                value: item.code
              });
              this.fileHeader1ItemIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileHeader2(header1ItemID) {
    this.header2 = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_HEADER2', header1ItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.header2.push({
                label: item.value,
                value: item.code
              });
              this.fileHeader2ItemIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileYear() {
    this.year = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_YEAR').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.year.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getLocalAgencyTypes() {
    this.localAgencyTypes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.localAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.localAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileOwners() {
    this.fileOwners = [];
    this.showSpinner = true;
    this.agcService.getActiveUsers().subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileOwners.push({
                label: item.display_name,
                value: item.username
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignCountries() {
    this.foreignCountries = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('COUNTRY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignCountries.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyCountryCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignAgencyTypes(countryCodeID) {
    this.foreignAgencyTypes = [];
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('AGENCY_TYPE_FOREIGN', countryCodeID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onLocalForeignChange(data) {
    if (data.value === 'ADDR_F') {
      this.showLocalAgencyDetails = false;
      this.showForeignAgencyDetails = true;
      this.getForeignCountries();
    } else {
      this.showLocalAgencyDetails = true;
      this.showForeignAgencyDetails = false;
      this.getLocalAgencyTypes();
    }
    this.advisoryFile.LocalOrForeign = data.value;
  }
  onForeignAgencyCountryChange(data) {
    this.getForeignAgencyTypes(this.foreignAgencyCountryCodeIDMap.get(data.value));
  }
  onLocalAgencyTypeChange(data) {
    this.localAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_NAME').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.localAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onForeignAgencyTypeChange(data) {
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('AGENCY_NAME_FOREIGN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onFileDivisionChange(data) {
    this.showSpinner = true;
    let divItemID = this.fileDivisionItemIDMap.get(data.value);
    this.advisoryFile.ReferenceNo = "AG/" + this.advisoryFile.I_Division + "/" + this.advisoryFile.I_Header1 + "/" + this.advisoryFile.I_Header2 + "/" + this.advisoryFile.I_Year + "/" + this.advisoryFile.I_SerialNo;
    this.getFileHeader1(divItemID);
  }
  onFileHeader1Change(data) {
    this.showSpinner = true;
    let header1ItemID = this.fileHeader1ItemIDMap.get(data.value);
    this.advisoryFile.ReferenceNo = "AG/" + this.advisoryFile.I_Division + "/" + this.advisoryFile.I_Header1 + "/" + this.advisoryFile.I_Header2 + "/" + this.advisoryFile.I_Year + "/" + this.advisoryFile.I_SerialNo;
    this.getFileHeader2(header1ItemID);
  }
  onFileHeader2Change(data) {
    this.advisoryFile.ReferenceNo = "AG/" + this.advisoryFile.I_Division + "/" + this.advisoryFile.I_Header1 + "/" + this.advisoryFile.I_Header2 + "/" + this.advisoryFile.I_Year + "/" + this.advisoryFile.I_SerialNo;
    this.getFileYear();
  }
  onFileYearChange(data) {
    if (data.value) {
      this.advisoryFile.ReferenceNo = "AG/" + this.advisoryFile.I_Division + "/" + this.advisoryFile.I_Header1 + "/" + this.advisoryFile.I_Header2 + "/" + this.advisoryFile.I_Year + "/" + this.advisoryFile.I_SerialNo;
      this.reqIDAvailable = true;
    }
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.advfileForm && !this.advfileForm.valid) {
      this.reqSubmit.emit({
        status: 'FAILURE'
      });
      this.utilService.alert('error', 'Error', 'Please fill all mandatory details!!', false);
    } else {
      let reqDetails = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this.advisoryFile);
      reqDetails.Sensitivity = reqDetails.Sensitivity == 'Yes' ? true : false;
      reqDetails.FileCreatedBy = src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME;
      reqDetails.FileCreatedDate = new Date();
      let descQueryParam = reqDetails.SecurityClassification + ',' + reqDetails.LocalForeign + ',' + reqDetails.AgencyType + ',' + reqDetails.AgencyName + ',' + reqDetails.CountryForeignOrg + ',' + reqDetails.ForeignAgencyType + "," + reqDetails.ForeignAgencyName + ',' + reqDetails.FileStatus;
      this.agcService.getMasterDataByCodes(descQueryParam).subscribe({
        next: response => {
          let masterDataMap = new Map();
          let resp = Object.assign(response);
          if (resp) {
            if (resp.length) {
              resp.forEach(item => {
                masterDataMap.set(item.code, item.value);
              });
            }
            reqDetails.SecurityClassificationDesc = masterDataMap.get(reqDetails.SecurityClassification);
            reqDetails.LocalForeignDesc = masterDataMap.get(reqDetails.LocalForeign);
            reqDetails.AgencyTypeDesc = masterDataMap.get(reqDetails.AgencyType);
            reqDetails.AgencyNameDesc = masterDataMap.get(reqDetails.AgencyName);
            reqDetails.CountryForeignOrgDesc = masterDataMap.get(reqDetails.CountryForeignOrg);
            reqDetails.FileForeignAgencyTypeDesc = masterDataMap.get(reqDetails.ForeignAgencyType);
            reqDetails.ForeignAgencyNameDesc = masterDataMap.get(reqDetails.ForeignAgencyName);
            reqDetails.FileStatusDesc = masterDataMap.get(reqDetails.FileStatus);
            this.agcService.generateSequence('Advisory File').subscribe({
              next: response => {
                let resp = Object.assign(response);
                if (resp) {
                  this.agcService.createFile(reqDetails).subscribe({
                    next: response => {
                      let createResp = Object.assign(response);
                      if (createResp) {
                        let refNo = createResp.ReferenceNo;
                        this.utilService.alert('success', 'Success', 'Advisory File ' + refNo + ' created successfully', false);
                        this.reqSubmit.emit({
                          status: 'SUCCESS'
                        });
                      }
                    },
                    error: error => {
                      console.log('Request failed with error');
                      this.showSpinner = false;
                    }
                  });
                }
              },
              error: error => {
                console.log('Request failed with error');
                this.showSpinner = false;
              }
            });
          }
        },
        error: error => {
          console.log('Request failed with error');
          this.showSpinner = false;
        }
      });
    }
  }
}
AdvisoryFileComponent.ɵfac = function AdvisoryFileComponent_Factory(t) {
  return new (t || AdvisoryFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__.AgcService));
};
AdvisoryFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdvisoryFileComponent,
  selectors: [["advisory-file"]],
  viewQuery: function AdvisoryFileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.advfileForm = _t.first);
    }
  },
  inputs: {
    modalSubmit: "modalSubmit"
  },
  outputs: {
    reqSubmit: "reqSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 4,
  consts: [[1, "container-fluid", 2, "background-color", "#FFF"], ["class", "request-spinner", "strokeWidth", "7", 4, "ngIf"], [1, "service-tab"], [3, "header"], [4, "ngIf"], ["header", "Documents", 4, "ngIf"], ["position", "top-right"], ["strokeWidth", "7", 1, "request-spinner"], ["advfileForm", "ngForm"], [1, "row", "no-padding"], [1, "row"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-1", "no-right-padding", 2, "padding-top", "6px !important", "width", "55px !important", "font-size", "13px !important"], [1, "xsm-padding"], [1, "col-lg-2", "xsm-padding"], [1, "col-lg-10", "xsm-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Division", "name", "fileDiv", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose division", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileDiv", "ngModel"], [1, "col-lg-1", "xsm-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Header1", "name", "fileHeader1", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Header1", "placeholder", "Header1", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileHeader1", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Header2", "name", "fileHeader2", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Header2", "placeholder", "Header2", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileHeader2", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Year", "name", "fileYear", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Year", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileYear", "ngModel"], [1, "col-lg-1", "no-left-padding", 2, "padding-top", "5px !important", "width", "100px !important", "font-size", "13px !important"], ["type", "text", "pInputText", "", "name", "serialNo", 3, "disabled", "ngModel", "ngModelChange"], ["serialNo", "ngModel"], [1, "col-lg-12", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], ["pInputTextarea", "", "name", "fTitle", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter file title", "tooltipPosition", "bottom", 1, "custom-textarea", 2, "height", "75px !important", 3, "disabled", "ngModel", "rows", "cols", "required", "ngClass", "ngModelChange"], ["fTitle", "ngModel"], [1, "col-lg-4", "sm-padding", "no-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a security classification", "name", "secClsf", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose security classification", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["secClsf", "ngModel"], [1, "row", "xsm-padding", 2, "height", "35px"], [1, "col-lg-1"], [1, "p-field-radiobutton"], ["value", "Yes", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose yes", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "disabled", "required", "ngClass", "ngModelChange"], ["prfType", "ngModel"], [1, "col-lg-5", 2, "padding-top", "3px"], [1, "sm-padding", "form-field-header", "no-padding"], ["value", "No", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to choose no", 1, "custom-radio-btn", 3, "ngModel", "disabled", "required", "ngClass", "ngModelChange"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Local/Foreign", "name", "fileOrg", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to choose Local/Foreign", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fileOrg", "ngModel"], ["class", "col-lg-4 sm-padding no-padding", 4, "ngIf"], [1, "col-lg-8", "sm-padding", "no-padding"], ["type", "text", "pInputText", "", "name", "fileExtAgencyRefNo", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter requesting agency reference number", "tooltipPosition", "bottom", 3, "disabled", "ngModel", "ngClass", "ngModelChange"], ["fileExtAgencyRefNo", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a file Owner", "name", "fileOwner", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter File Owner", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngClass", "ngModelChange"], ["fileOwner", "ngModel"], ["pInputTextarea", "", "name", "fRemarks", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to enter remarks", 1, "custom-textarea", 2, "height", "75px !important", 3, "ngModel", "rows", "cols", "ngModelChange"], ["fRemarks", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency type", "name", "agencyType", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to enter agency type", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["agencyType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency name", "name", "agencyName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency name", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange"], ["agencyName", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a country/foreign origin", "name", "fCountry", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter country/foreign origin", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fCountry", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency type", "name", "fAgencyType", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to enter agency type", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fAgencyType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency name", "name", "fAgencyName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency name", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange"], ["fAgencyName", "ngModel"], ["header", "Documents"], [3, "requestType", "readOnly", "requestID"]],
  template: function AdvisoryFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdvisoryFileComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-tabView", 2)(3, "p-tabPanel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdvisoryFileComponent_form_4_Template, 119, 113, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdvisoryFileComponent_p_tabPanel_5_Template, 2, 3, "p-tabPanel", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-toast", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("header", "File Details (", ctx.advisoryFile.ReferenceNo, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqIDAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__.RadioButton, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextarea, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_13__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinner, _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__.DocumentUploadComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1584:
/*!*************************************************************************!*\
  !*** ./src/app/services/advisory-request/advisory-request.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvisoryRequestComponent": () => (/* binding */ AdvisoryRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/services/utilities.service */ 5810);
/* harmony import */ var src_app_entities_advisory_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/advisory-request */ 8134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/agc.service */ 2935);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/components/document-upload/document-upload.component */ 9857);



















const _c0 = ["advReqForm"];
function AdvisoryRequestComponent_p_progressSpinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-progressSpinner", 7);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
function AdvisoryRequestComponent_form_4_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Requesting Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_div_45_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.advisoryRequest.RequestingAgencyType = $event);
    })("onChange", function AdvisoryRequestComponent_form_4_div_45_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onLocalAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r9.readOnly, ctx_r9.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r9.readOnly)("options", ctx_r9.reqLocalAgencyTypes)("ngModel", ctx_r9.advisoryRequest.RequestingAgencyType)("required", !ctx_r9.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r9.formSubmitted && _r27.invalid));
  }
}
function AdvisoryRequestComponent_form_4_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Requesting Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_div_46_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.advisoryRequest.RequestingAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r10.readOnly, ctx_r10.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r10.readOnly)("options", ctx_r10.reqLocalAgencyNames)("ngModel", ctx_r10.advisoryRequest.RequestingAgencyName)("required", !ctx_r10.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r10.formSubmitted && _r31.invalid));
  }
}
function AdvisoryRequestComponent_form_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Country / Foreign Org. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_div_47_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.advisoryRequest.CountryForeignOrg = $event);
    })("onChange", function AdvisoryRequestComponent_form_4_div_47_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.onForeignAgencyCountryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r11.readOnly, ctx_r11.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r11.readOnly)("required", !ctx_r11.readOnly)("options", ctx_r11.foreignCountries)("ngModel", ctx_r11.advisoryRequest.CountryForeignOrg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r11.formSubmitted && _r34.invalid));
  }
}
function AdvisoryRequestComponent_form_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_div_48_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.advisoryRequest.ForeignAgencyType = $event);
    })("onChange", function AdvisoryRequestComponent_form_4_div_48_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.onForeignAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r12.readOnly, ctx_r12.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r12.readOnly)("required", !ctx_r12.readOnly)("options", ctx_r12.foreignAgencyTypes)("ngModel", ctx_r12.advisoryRequest.ForeignAgencyType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r12.formSubmitted && _r38.invalid));
  }
}
function AdvisoryRequestComponent_form_4_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_div_49_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.advisoryRequest.ForeignAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r13.readOnly, ctx_r13.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r13.readOnly)("required", !ctx_r13.readOnly)("options", ctx_r13.foreignAgencyNames)("ngModel", ctx_r13.advisoryRequest.ForeignAgencyName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r13.formSubmitted && _r42.invalid));
  }
}
const _c3 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c4 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
const _c5 = function (a0) {
  return {
    "p-radiobutton-is-invalid": a0
  };
};
const _c6 = function (a0) {
  return {
    "p-calendar-is-invalid": a0
  };
};
const _c7 = function (a1) {
  return {
    "required": false,
    "read-only": a1
  };
};
function AdvisoryRequestComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Request Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.advisoryRequest.RequestTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " File Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "p-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.fileReferenceNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "div", 19)(21, "div", 11)(22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Request Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "p-dropdown", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.advisoryRequest.RequestType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19)(29, "div", 11)(30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Request Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "p-dropdown", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.advisoryRequest.RequestStatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19)(37, "div", 11)(38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Local / Foreign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 13)(41, "div", 14)(42, "p-dropdown", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.advisoryRequest.LocalForeign = $event);
    })("onChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_onChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.onLocalForeignChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AdvisoryRequestComponent_form_4_div_45_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AdvisoryRequestComponent_form_4_div_46_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, AdvisoryRequestComponent_form_4_div_47_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, AdvisoryRequestComponent_form_4_div_48_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AdvisoryRequestComponent_form_4_div_49_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9)(51, "div", 19)(52, "div", 28)(53, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Other Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 13)(56, "div", 14)(57, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_input_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.advisoryRequest.OtherAgency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 19)(60, "div", 28)(61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Requesting Agency Ref No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 13)(64, "div", 14)(65, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.advisoryRequest.RequestingAgencyRefNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 19)(68, "div", 11)(69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Sensitive / High Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 13)(72, "div", 33)(73, "div", 34)(74, "div", 35)(75, "p-radioButton", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_radioButton_ngModelChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.advisoryRequest.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 38)(78, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 34)(81, "div", 35)(82, "p-radioButton", 40, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_radioButton_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.advisoryRequest.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38)(85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 9)(88, "div", 19)(89, "div", 11)(90, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 13)(93, "div", 14)(94, "p-dropdown", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.advisoryRequest.SecurityClassification = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 19)(97, "div", 11)(98, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " Request Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 13)(101, "div", 14)(102, "p-dropdown", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_102_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r57.advisoryRequest.RequestReceivedMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 19)(105, "div", 11)(106, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, " Complexity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 13)(109, "div", 14)(110, "p-dropdown", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_110_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.advisoryRequest.Complexity = $event);
    })("onChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_onChange_110_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r59.onComplexityChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 9)(113, "div", 19)(114, "div", 11)(115, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Urgency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 13)(118, "div", 14)(119, "p-dropdown", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_119_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.advisoryRequest.Urgency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 19)(122, "div", 11)(123, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, " Date/Time Received ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 13)(126, "div", 14)(127, "p-calendar", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_calendar_ngModelChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r61.advisoryRequest.ReceivedDate = $event);
    })("onSelect", function AdvisoryRequestComponent_form_4_Template_p_calendar_onSelect_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r62.onReceivedDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 19)(130, "div", 11)(131, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, " Request Due Date (Complexity) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 13)(134, "div", 14)(135, "p-calendar", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_calendar_ngModelChange_135_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.advisoryRequest.RequestDueDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 9)(138, "div", 19)(139, "div", 11)(140, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, " Expected Response Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 13)(143, "div", 14)(144, "p-calendar", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_calendar_ngModelChange_144_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r64.advisoryRequest.ExpResponseDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 19)(147, "div", 11)(148, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, " Division ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 13)(151, "div", 14)(152, "p-dropdown", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_p_dropdown_ngModelChange_152_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r65.advisoryRequest.UserDivision = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 28)(155, "div", 11)(156, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 13)(159, "div", 14)(160, "textarea", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdvisoryRequestComponent_form_4_Template_textarea_ngModelChange_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.advisoryRequest.Remarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](76);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](95);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](103);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](111);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](120);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](128);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](136);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](145);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](153);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](109, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.RequestTitle)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](112, _c3, ctx_r1.formSubmitted && _r4.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](114, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileReferences)("ngModel", ctx_r1.fileReferenceNo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](117, _c2, ctx_r1.formSubmitted && _r5.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](119, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.reqType)("ngModel", ctx_r1.advisoryRequest.RequestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](120, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.reqStatus)("ngModel", ctx_r1.advisoryRequest.RequestStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](121, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("options", ctx_r1.fileOrigin)("ngModel", ctx_r1.advisoryRequest.LocalForeign)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](124, _c2, ctx_r1.formSubmitted && _r8.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.OtherAgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.RequestingAgencyRefNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](126, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryRequest.Sensitivity)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](129, _c5, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryRequest.Sensitivity)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](131, _c5, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](133, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.secClassification)("ngModel", ctx_r1.advisoryRequest.SecurityClassification)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](136, _c2, ctx_r1.formSubmitted && _r18.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](138, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqModes)("ngModel", ctx_r1.advisoryRequest.RequestReceivedMode)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](141, _c2, ctx_r1.formSubmitted && _r19.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](143, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqCmplxts)("ngModel", ctx_r1.advisoryRequest.Complexity)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](146, _c2, ctx_r1.formSubmitted && _r20.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](148, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqUrgency)("ngModel", ctx_r1.advisoryRequest.Urgency)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](151, _c2, ctx_r1.formSubmitted && _r21.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](153, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.ReceivedDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("showTime", true)("showSeconds", false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](156, _c6, ctx_r1.formSubmitted && _r22.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](158, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.RequestDueDate)("showIcon", true)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](161, _c6, ctx_r1.formSubmitted && _r23.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](163, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.advisoryRequest.ExpResponseDate)("showIcon", true)("minDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](166, _c6, ctx_r1.formSubmitted && _r24.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](168, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqDivisions)("ngModel", ctx_r1.advisoryRequest.UserDivision)("required", !ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](171, _c2, ctx_r1.formSubmitted && _r25.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](173, _c7, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.advisoryRequest.Remarks)("rows", 5)("cols", 30);
  }
}
function AdvisoryRequestComponent_p_tabPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-tabPanel", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "document-upload", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("requestType", "Request")("readOnly", "N")("requestID", ctx_r2.advisoryRequest.RequestNo);
  }
}
class AdvisoryRequestComponent {
  constructor(utilService, datePipe, agcService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.readOnly = false;
    this.secClassification = [];
    this.reqType = [];
    this.reqStatus = [];
    this.reqModes = [];
    this.reqCmplxts = [];
    this.reqUrgency = [];
    this.allDivisions = [];
    this.reqDivisions = [];
    this.todaysDate = new Date();
    this.formSubmitted = false;
    this.modalSubmit = false;
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.alertMessages = [];
    this.reqLocalAgencyTypes = [];
    this.reqLocalAgencyNames = [];
    this.cmplxTimeMap = new Map();
    this.showForeignAgencyDetails = false;
    this.foreignAgencyNames = [];
    this.foreignAgencyTypes = [];
    this.foreignCountries = [];
    this.localAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyCountryCodeIDMap = new Map();
    this.fileOrigin = [];
    this.showSpinner = false;
    this.reqIDAvailable = false;
    this.fileReferenceNo = '';
    this.fileReferences = [];
  }
  ngOnInit() {
    this.formSubmitted = false;
    this.advisoryRequest = new src_app_entities_advisory_request__WEBPACK_IMPORTED_MODULE_2__.ADVISORY_REQUEST();
    this.setSerialNo();
    this.getSecurityClassifications();
    this.getRequestStatus();
    this.getRequestComplexity();
    this.getRequestTypes();
    this.getRequestModes();
    this.getRequestUrgency();
    this.getAGItemID();
    this.getFileOrigins();
    this.getFileReferences();
  }
  ngOnChanges(changes) {
    if (changes['modalSubmit'].currentValue) {
      this.onSubmit();
    }
  }
  setSerialNo() {
    this.showSpinner = true;
    this.agcService.getSequence('Advisory Request').subscribe({
      next: response => {
        let resp = Object.assign(response);
        let prefix = resp[0].prefix ? resp[0].prefix : '';
        let count = Number(resp[0].seq_count) + 1;
        let suffix = resp[0].suffix ? resp[0].suffix : '';
        this.advisoryRequest.RequestNo = prefix + count + suffix;
        this.reqIDAvailable = true;
      },
      error: error => {
        console.error("Request failed with error");
        this.showSpinner = false;
      }
    });
  }
  getSecurityClassifications() {
    this.secClassification = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('SECURITY_CLASSIFICATION').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.secClassification.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryRequest.SecurityClassification = 'SCLASS_S';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestStatus() {
    this.reqStatus = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_STATUS').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqStatus.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryRequest.RequestStatus = 'RSTAT_O';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestComplexity() {
    this.reqCmplxts = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_COMPLEXITY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqCmplxts.push({
                label: item.value,
                value: item.code
              });
              this.cmplxTimeMap.set(item.code, item.attribute_1);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestTypes() {
    this.reqType = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqType.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryRequest.RequestType = 'RTYPE_ADV';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestModes() {
    this.reqModes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_MODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqModes.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestUrgency() {
    this.reqUrgency = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_URGENCY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqUrgency.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryRequest.Urgency = 'RURGENT_NU';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignCountries() {
    this.foreignCountries = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('COUNTRY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignCountries.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyCountryCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignAgencyTypes(countryCodeID) {
    this.foreignAgencyTypes = [];
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('AGENCY_TYPE_FOREIGN', countryCodeID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getLocalAgencyTypes() {
    this.reqLocalAgencyTypes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqLocalAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.localAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileOrigins() {
    this.fileOrigin = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_ORIGIN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileOrigin.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.advisoryRequest.LocalForeign = 'ADDR_L';
          this.getLocalAgencyTypes();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getAGItemID() {
    this.showSpinner = true;
    this.agcService.getMasterDataByType('ROOT_CODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          this.getDivisions(resp[0].code);
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getDivisions(agItemID) {
    this.allDivisions = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_DIVISION', agItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.allDivisions.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.getCurrentUserFileDivisions();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCurrentUserFileDivisions() {
    this.reqDivisions = [];
    this.showSpinner = true;
    this.agcService.getUserDivisions(src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDivisions, function (fg) {
                return fg.value == item.title;
              });
              if (index != -1) {
                this.reqDivisions.push({
                  label: item.group_name,
                  value: item.title
                });
              }
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onComplexityChange(data) {
    let days;
    if (this.advisoryRequest.ReceivedDate) {
      days = this.cmplxTimeMap.get(data.value);
      this.utilService.addDays(this.advisoryRequest.ReceivedDate, days, this.advisoryRequest, 'RequestDueDate');
    }
  }
  onReceivedDateChange(data) {
    let days;
    if (!this.utilService.isEmpty(this.advisoryRequest.Complexity)) {
      days = this.cmplxTimeMap.get(this.advisoryRequest.Complexity);
      this.utilService.addDays(data, days, this.advisoryRequest, 'RequestDueDate');
    }
  }
  onLocalForeignChange(data) {
    if (data.value === 'ADDR_F') {
      this.showForeignAgencyDetails = true;
      this.getForeignCountries();
    } else {
      this.showForeignAgencyDetails = false;
    }
  }
  onForeignAgencyCountryChange(data) {
    this.getForeignAgencyTypes(this.foreignAgencyCountryCodeIDMap.get(data.value));
  }
  onLocalAgencyTypeChange(data) {
    this.reqLocalAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_NAME').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqLocalAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onForeignAgencyTypeChange(data) {
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('AGENCY_NAME_FOREIGN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileReferences() {
    this.showSpinner = true;
    this.agcService.getFileByFilter('type', 'ADVISORY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileReferences.push({
                label: item.ReferenceNo,
                value: item.ReferenceNo
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.reqForm && !this.reqForm.valid) {
      this.reqSubmit.emit({
        status: 'FAILURE'
      });
      this.utilService.alert('error', 'Error', 'Please fill all mandatory details!!', false);
    } else {
      let adv_req = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.advisoryRequest);
      adv_req.ReceivedDate = adv_req.ReceivedDate ? this.datePipe.transform(adv_req.ReceivedDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      adv_req.RequestDueDate = adv_req.RequestDueDate ? this.datePipe.transform(adv_req.RequestDueDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      adv_req.OriginalDueDate = adv_req.RequestDueDate;
      adv_req.ExpResponseDate = adv_req.ExpResponseDate ? this.datePipe.transform(adv_req.ExpResponseDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      adv_req.Sensitivity = adv_req.Sensitivity == 'Yes' ? true : false;
      adv_req.RequestCreatedBy = src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService.CURRENT_USER_NAME;
      adv_req.RequestCreatedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'hh:mm:ss");
      let descQueryParam = adv_req.RequestType + ',' + adv_req.RequestStatus + ',' + adv_req.LocalForeign + ',' + adv_req.RequestingAgencyType + ',' + adv_req.RequestingAgencyName + ',' + adv_req.CountryForeignOrg + ',' + adv_req.ForeignAgencyType + "," + adv_req.ForeignAgencyName + ',' + adv_req.SecurityClassification + ',' + adv_req.RequestReceivedMode + ',' + adv_req.Complexity + ',' + adv_req.Urgency;
      this.agcService.getMasterDataByCodes(descQueryParam).subscribe({
        next: response => {
          let masterDataMap = new Map();
          let resp = Object.assign(response);
          if (resp) {
            if (resp.length) {
              resp.forEach(item => {
                masterDataMap.set(item.code, item.value);
              });
            }
            adv_req.RequestTypeDesc = masterDataMap.get(adv_req.RequestType);
            adv_req.RequestStatusDesc = masterDataMap.get(adv_req.RequestStatus);
            adv_req.LocalForeignDesc = masterDataMap.get(adv_req.LocalForeign);
            adv_req.RequestingAgencyTypeDesc = masterDataMap.get(adv_req.RequestingAgencyType);
            adv_req.RequestingAgencyNameDesc = masterDataMap.get(adv_req.RequestingAgencyName);
            adv_req.CountryForeignOrgDesc = masterDataMap.get(adv_req.CountryForeignOrg);
            adv_req.ForeignAgencyTypeDesc = masterDataMap.get(adv_req.ForeignAgencyType);
            adv_req.ForeignAgencyNameDesc = masterDataMap.get(adv_req.ForeignAgencyName);
            adv_req.SecurityClassificationDesc = masterDataMap.get(adv_req.SecurityClassification);
            adv_req.RequestReceivedModeDesc = masterDataMap.get(adv_req.RequestReceivedMode);
            adv_req.ComplexityDesc = masterDataMap.get(adv_req.Complexity);
            adv_req.UrgencyDesc = masterDataMap.get(adv_req.Urgency);
            this.agcService.generateSequence('Advisory Request').subscribe({
              next: response => {
                let resp = Object.assign(response);
                if (resp) {
                  this.agcService.createRequest(this.fileReferenceNo, adv_req).subscribe({
                    next: response => {
                      let createResp = Object.assign(response);
                      if (createResp) {
                        let reqNo = createResp.RequestNo;
                        this.utilService.alert('success', 'Success', 'Advisory Request ' + reqNo + ' created successfully', false);
                        this.reqSubmit.emit({
                          status: 'SUCCESS'
                        });
                      }
                    },
                    error: error => {
                      console.log('Request failed with error');
                      this.showSpinner = false;
                    }
                  });
                }
              },
              error: error => {
                console.log('Request failed with error');
                this.showSpinner = false;
              }
            });
          }
        },
        error: error => {
          console.log('Request failed with error');
          this.showSpinner = false;
        }
      });
    }
  }
}
AdvisoryRequestComponent.ɵfac = function AdvisoryRequestComponent_Factory(t) {
  return new (t || AdvisoryRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__.AgcService));
};
AdvisoryRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdvisoryRequestComponent,
  selectors: [["advisory-request"]],
  viewQuery: function AdvisoryRequestComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.reqForm = _t.first);
    }
  },
  inputs: {
    modalSubmit: "modalSubmit"
  },
  outputs: {
    reqSubmit: "reqSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 4,
  consts: [[1, "container-fluid"], ["class", "request-spinner", "strokeWidth", "7", 4, "ngIf"], [1, "service-tab"], [3, "header"], [4, "ngIf"], ["header", "Documents", 4, "ngIf"], ["position", "top-right"], ["strokeWidth", "7", 1, "request-spinner"], ["advReqForm", "ngForm"], [1, "row"], [1, "col-lg-6", "sm-padding", "no-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["type", "text", "pInputText", "", "name", "reqTitle", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter request title", 3, "disabled", "ngModel", "required", "ngClass", "ngModelChange"], ["reqTitle", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "frno", "pTooltip", "Click to choose file reference", "tooltipStyleClass", "custom-tooltip", 1, "custom-dropdown", 3, "filter", "required", "disabled", "options", "ngModel", "ngClass", "ngModelChange"], ["frno", "ngModel"], [1, "col-lg-4", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], ["filterBy", "label", "appendTo", "body", "name", "rType", "pTooltip", "Click to choose request type", "tooltipStyleClass", "custom-tooltip", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange"], ["rType", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "rStatus", "pTooltip", "Click to choose request status", "tooltipStyleClass", "custom-tooltip", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange"], ["rStatus", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Local/Foreign", "name", "fileOrg", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Local/Foreign", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fileOrg", "ngModel"], ["class", "col-lg-4 sm-padding no-padding", 4, "ngIf"], [1, "col-lg-12", "sm-padding", "no-padding"], ["type", "text", "pInputText", "", "name", "oAgency", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter other agency", 3, "disabled", "ngModel", "ngModelChange"], ["oAgency", "ngModel"], ["type", "text", "pInputText", "", "name", "reqAgencyRefNo", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter requesting agency reference number", 3, "disabled", "ngModel", "ngModelChange"], ["reqAgencyRefNo", "ngModel"], [1, "row", "xsm-padding", 2, "height", "35px"], [1, "col-lg-1"], [1, "p-field-radiobutton"], ["value", "Yes", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose yes", 1, "custom-radio-btn", 3, "ngModel", "required", "disabled", "ngClass", "ngModelChange"], ["prfType", "ngModel"], [1, "col-lg-5", 2, "padding-top", "3px"], [1, "sm-padding", "form-field-header", "no-padding"], ["value", "No", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose no", 1, "custom-radio-btn", 3, "ngModel", "required", "disabled", "ngClass", "ngModelChange"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a security classification", "name", "secClsf", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to select security classification", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["secClsf", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a request mode", "name", "reqMode", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose request mode", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["reqMode", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a complexity", "name", "cmplx", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose complexity", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["cmplx", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose urgency", "name", "reqUrg", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose urgency", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["reqUrg", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "cDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter request date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "showTime", "showSeconds", "ngClass", "ngModelChange", "onSelect"], ["cDate", "ngModel"], ["inputId", "icon", "name", "dDate", "dateFormat", "dd/mm/yy", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter due date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "required", "ngClass", "ngModelChange"], ["dDate", "ngModel"], ["inputId", "icon", "name", "rDate", "dateFormat", "dd/mm/yy", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter expected response date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "minDate", "required", "ngClass", "ngModelChange"], ["rDate", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose division", "name", "reqDiv", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose division", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["reqDiv", "ngModel"], ["pInputTextarea", "", "name", "fRemarks", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter remarks", 1, "custom-textarea", 2, "height", "75px !important", 3, "ngModel", "rows", "cols", "ngModelChange"], ["fRemarks", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a requesting agency type", "name", "reqAtype", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose requesting agency type", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["reqAtype", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a requesting agency", "name", "reqAgency", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose requesting agency", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["reqAgency", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a country/foreign origin", "name", "fCountry", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter country/foreign origin", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fCountry", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency type", "name", "fAgencyType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency type", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fAgencyType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency name", "name", "fAgencyName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency name", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange"], ["fAgencyName", "ngModel"], ["header", "Documents"], [3, "requestType", "readOnly", "requestID"]],
  template: function AdvisoryRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdvisoryRequestComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-tabView", 2)(3, "p-tabPanel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdvisoryRequestComponent_form_4_Template, 162, 175, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdvisoryRequestComponent_p_tabPanel_5_Template, 2, 3, "p-tabPanel", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-toast", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("header", "Request Details (", ctx.advisoryRequest.RequestNo, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqIDAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__.RadioButton, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinner, _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__.DocumentUploadComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9581:
/*!*********************************************************!*\
  !*** ./src/app/services/mla-file/mla-file.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MlaFileComponent": () => (/* binding */ MlaFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/services/utilities.service */ 5810);
/* harmony import */ var src_app_entities_mla_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/mla-file */ 1073);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/agc.service */ 2935);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/components/document-upload/document-upload.component */ 9857);




















const _c0 = ["mlaFileForm"];
function MlaFileComponent_p_progressSpinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-progressSpinner", 7);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
function MlaFileComponent_form_4_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 29)(2, "div", 11)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Country / Foreign Org. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31)(6, "div", 14)(7, "p-dropdown", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_div_140_Template_p_dropdown_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.mlaFile.CountryForeignOrg = $event);
    })("onChange", function MlaFileComponent_form_4_div_140_Template_p_dropdown_onChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.onForeignAgencyCountryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 29)(10, "div", 11)(11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Foreign Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 31)(14, "div", 14)(15, "p-dropdown", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_div_140_Template_p_dropdown_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.mlaFile.ForeignAgencyType = $event);
    })("onChange", function MlaFileComponent_form_4_div_140_Template_p_dropdown_onChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.onForeignAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 29)(18, "div", 11)(19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Foreign Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 31)(22, "div", 14)(23, "p-dropdown", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_div_140_Template_p_dropdown_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.mlaFile.ForeignAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c1, !ctx_r20.readOnly, ctx_r20.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r20.readOnly)("options", ctx_r20.cfList)("ngModel", ctx_r20.mlaFile.CountryForeignOrg)("required", !ctx_r20.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c2, ctx_r20.formSubmitted && _r36.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](26, _c1, !ctx_r20.readOnly, ctx_r20.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r20.readOnly)("options", ctx_r20.fAgencyTypes)("ngModel", ctx_r20.mlaFile.ForeignAgencyType)("required", ctx_r20.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c2, ctx_r20.formSubmitted && _r37.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c1, !ctx_r20.readOnly, ctx_r20.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r20.readOnly)("options", ctx_r20.fAgencyNames)("ngModel", ctx_r20.mlaFile.ForeignAgencyName)("required", !ctx_r20.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c2, ctx_r20.formSubmitted && _r38.invalid));
  }
}
function MlaFileComponent_form_4_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 29)(2, "div", 11)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31)(6, "div", 14)(7, "p-dropdown", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_div_141_Template_p_dropdown_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.mlaFile.AgencyType = $event);
    })("onChange", function MlaFileComponent_form_4_div_141_Template_p_dropdown_onChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.onLocalAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 29)(10, "div", 11)(11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 31)(14, "div", 14)(15, "p-dropdown", 98, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_div_141_Template_p_dropdown_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.mlaFile.AgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c1, !ctx_r21.readOnly, ctx_r21.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r21.readOnly)("options", ctx_r21.lAgencyTypes)("ngModel", ctx_r21.mlaFile.AgencyType)("required", !ctx_r21.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c2, ctx_r21.formSubmitted && _r45.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c1, !ctx_r21.readOnly, ctx_r21.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r21.readOnly)("options", ctx_r21.lAgencyNames)("ngModel", ctx_r21.mlaFile.AgencyName)("required", !ctx_r21.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c2, ctx_r21.formSubmitted && _r46.invalid));
  }
}
const _c3 = function (a0) {
  return {
    "p-calendar-is-invalid": a0
  };
};
const _c4 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
const _c5 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c6 = function (a0) {
  return {
    "p-radiobutton-is-invalid": a0
  };
};
const _c7 = function (a1) {
  return {
    "required": false,
    "read-only": a1
  };
};
function MlaFileComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " AGC File Ref. No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " AG / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 15)(11, "div", 10)(12, "div", 16)(13, "p-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.mlaFile.I_Division = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.onFileDivisionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "div", 10)(19, "div", 16)(20, "p-dropdown", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.mlaFile.I_Header1 = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.onFileHeader1Change($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 10)(26, "div", 16)(27, "p-dropdown", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.mlaFile.I_Header2 = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r57.onFileHeader2Change($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 15)(32, "div", 10)(33, "div", 16)(34, "p-dropdown", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.mlaFile.I_Year = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r59.onFileYearChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 26)(39, "div", 14)(40, "div", 26)(41, "div", 14)(42, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.mlaFile.I_SerialNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 10)(45, "div", 29)(46, "div", 11)(47, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Received Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 31)(50, "div", 14)(51, "p-calendar", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_calendar_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r61.mlaFile.MLAReceivedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 29)(54, "div", 11)(55, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Case Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 31)(58, "div", 14)(59, "p-dropdown", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r62.mlaFile.MLACaseType = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.onCaseTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 29)(62, "div", 11)(63, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Case Opened Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 31)(66, "div", 14)(67, "p-calendar", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_calendar_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r64.mlaFile.MLAFileOpenDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 10)(70, "div", 38)(71, "div", 11)(72, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 31)(75, "div", 14)(76, "textarea", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_textarea_ngModelChange_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r65.mlaFile.FileTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 10)(79, "div", 29)(80, "div", 11)(81, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Date of Outgoing Request Sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 31)(84, "div", 14)(85, "p-calendar", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_calendar_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.mlaFile.MLAOutgoingSentDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 29)(88, "div", 11)(89, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, " Case Sub Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 31)(92, "div", 14)(93, "p-dropdown", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_93_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r67.mlaFile.MLASubType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 29)(96, "div", 11)(97, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " Case Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 31)(100, "div", 14)(101, "p-dropdown", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_101_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.mlaFile.FileStatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 10)(104, "div", 29)(105, "div", 11)(106, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, " Sensitive / High Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 31)(109, "div", 47)(110, "div", 48)(111, "div", 49)(112, "p-radioButton", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_radioButton_ngModelChange_112_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r69.mlaFile.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 52)(115, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 48)(118, "div", 49)(119, "p-radioButton", 54, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_radioButton_ngModelChange_119_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r70.mlaFile.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 52)(122, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 29)(125, "div", 11)(126, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 31)(129, "div", 14)(130, "p-dropdown", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_130_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.mlaFile.SecurityClassification = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 29)(133, "div", 11)(134, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, " Local / Foreign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 31)(137, "div", 14)(138, "p-dropdown", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_138_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.mlaFile.LocalForeign = $event);
    })("onChange", function MlaFileComponent_form_4_Template_p_dropdown_onChange_138_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r73.onRequestOriginChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, MlaFileComponent_form_4_div_140_Template, 25, 36, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, MlaFileComponent_form_4_div_141_Template, 18, 24, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 10)(143, "div", 29)(144, "div", 38)(145, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, " Agency Ref No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 31)(148, "div", 14)(149, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_input_ngModelChange_149_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r74.mlaFile.ExtAgencyRefNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 29)(152, "div", 11)(153, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, " Complexity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 31)(156, "div", 14)(157, "p-dropdown", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_157_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r75.mlaFile.MLAComplexity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 29)(160, "div", 11)(161, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, " Request Made Under ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 31)(164, "div", 14)(165, "p-dropdown", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_165_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r76.mlaFile.MLARequestedUnder = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 10)(168, "div", 29)(169, "div", 11)(170, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, " FATF Purpose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 31)(173, "div", 14)(174, "p-dropdown", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_dropdown_ngModelChange_174_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r77.mlaFile.MLAFATFPurpose = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 29)(177, "div", 11)(178, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, " Perfected Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 31)(181, "div", 14)(182, "p-calendar", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_calendar_ngModelChange_182_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r78.mlaFile.MLARequestPerfectedDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 38)(185, "div", 11)(186, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 31)(189, "div", 14)(190, "textarea", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_textarea_ngModelChange_190_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r79.mlaFile.Remarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 10)(193, "div", 72)(194, "div", 38)(195, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, " Special Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "div", 31)(198, "div", 14)(199, "div", 47)(200, "div", 48)(201, "div", 73)(202, "p-checkbox", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_202_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r80.mlaFile.MLANovelLegalSensitiveIssue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "div", 52)(205, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, " Novel Legal Sensitive Issues Raised ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "div", 48)(208, "div", 73)(209, "p-checkbox", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_209_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r81.mlaFile.MLAPoliticalExposedPerson = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 52)(212, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, " Political Exposed Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "div", 47)(215, "div", 48)(216, "div", 73)(217, "p-checkbox", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_217_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r82.mlaFile.MLADualCriminality = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "div", 52)(220, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, " Dual Criminality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 48)(223, "div", 73)(224, "p-checkbox", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_224_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r83.mlaFile.MLASovereignty = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "div", 52)(227, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, " Sovereignty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "div", 47)(230, "div", 48)(231, "div", 73)(232, "p-checkbox", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_232_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r84.mlaFile.MLAOffencePunishableByCaning = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](234, "div", 52)(235, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, " Offence Punishable by Caning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "div", 48)(238, "div", 73)(239, "p-checkbox", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_239_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r85.mlaFile.MLASeniorGovtOfficial = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](241, "div", 52)(242, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, " Senior Government Officials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "div", 47)(245, "div", 48)(246, "div", 73)(247, "p-checkbox", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_247_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r86.mlaFile.MLADeathPenalty = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](249, "div", 52)(250, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](251, " Death Penalty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](252, "div", 48)(253, "div", 73)(254, "p-checkbox", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaFileComponent_form_4_Template_p_checkbox_ngModelChange_254_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r87.mlaFile.MLAContentious = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "div", 52)(257, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](258, " Contentious ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](52);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](77);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](86);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](113);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](131);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](139);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](158);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](166);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](175);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](183);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](153, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileDivisions)("ngModel", ctx_r1.mlaFile.I_Division)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](156, _c2, ctx_r1.formSubmitted && _r4.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.header1)("ngModel", ctx_r1.mlaFile.I_Header1)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](158, _c2, ctx_r1.formSubmitted && _r5.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.header2)("ngModel", ctx_r1.mlaFile.I_Header2)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](160, _c2, ctx_r1.formSubmitted && _r6.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.year)("ngModel", ctx_r1.mlaFile.I_Year)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](162, _c2, ctx_r1.formSubmitted && _r7.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r1.mlaFile.I_SerialNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](164, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAReceivedDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](167, _c3, ctx_r1.formSubmitted && _r9.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](169, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.caseTypes)("ngModel", ctx_r1.mlaFile.MLACaseType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](170, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAFileOpenDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](173, _c3, ctx_r1.formSubmitted && _r11.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](175, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.FileTitle)("rows", 5)("cols", 30)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](178, _c5, ctx_r1.formSubmitted && _r12.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](180, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAOutgoingSentDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](183, _c3, ctx_r1.formSubmitted && _r13.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](185, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.caseSubTypes)("ngModel", ctx_r1.mlaFile.MLASubType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](186, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.caseStatus)("ngModel", ctx_r1.mlaFile.FileStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](187, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.mlaFile.Sensitivity)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](190, _c6, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.mlaFile.Sensitivity)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](192, _c6, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](194, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.secClassification)("ngModel", ctx_r1.mlaFile.SecurityClassification)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](197, _c2, ctx_r1.formSubmitted && _r18.invalid))("required", !ctx_r1.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](199, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileOrigin)("ngModel", ctx_r1.mlaFile.LocalForeign)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](202, _c2, ctx_r1.formSubmitted && _r19.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showLocalAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.ExtAgencyRefNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](204, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileCmplxts)("ngModel", ctx_r1.mlaFile.MLAComplexity)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](207, _c2, ctx_r1.formSubmitted && _r23.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](209, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqUnder)("ngModel", ctx_r1.mlaFile.MLARequestedUnder)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](212, _c2, ctx_r1.formSubmitted && _r24.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](214, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.fatfPurposes)("ngModel", ctx_r1.mlaFile.MLAFATFPurpose)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](217, _c2, ctx_r1.formSubmitted && _r25.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](219, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLARequestPerfectedDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](222, _c3, ctx_r1.formSubmitted && _r26.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](224, _c7, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.mlaFile.Remarks)("rows", 5)("cols", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLANovelLegalSensitiveIssue)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAPoliticalExposedPerson)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLADualCriminality)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLASovereignty)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAOffencePunishableByCaning)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLASeniorGovtOfficial)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLADeathPenalty)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaFile.MLAContentious)("binary", true);
  }
}
function MlaFileComponent_p_tabPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-tabPanel", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "document-upload", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("requestType", "File")("readOnly", "N")("requestID", ctx_r2.mlaFile.ReferenceNo);
  }
}
class MlaFileComponent {
  constructor(utilService, datePipe, agcService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.readOnly = false;
    this.allFileDivisions = [];
    this.fileDivisions = [];
    this.header1 = [];
    this.header2 = [];
    this.year = [];
    this.todaysDate = new Date();
    this.caseTypes = [];
    this.caseSubTypes = [];
    this.caseStatus = [];
    this.secClassification = [];
    this.fileOrigin = [];
    this.fileCmplxts = [];
    this.reqUnder = [];
    this.fatfPurposes = [];
    this.showForeignAgencyDetails = false;
    this.showLocalAgencyDetails = true;
    this.cfList = [];
    this.fAgencyTypes = [];
    this.fAgencyNames = [];
    this.lAgencyTypes = [];
    this.lAgencyNames = [];
    this.formSubmitted = false;
    this.modalSubmit = false;
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.alertMessages = [];
    this.fileDivisionItemIDMap = new Map();
    this.fileHeader1ItemIDMap = new Map();
    this.fileHeader2ItemIDMap = new Map();
    this.localAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyCountryCodeIDMap = new Map();
    this.urlParams = '';
    this.showSpinner = false;
    this.reqIDAvailable = false;
  }
  ngOnInit() {
    this.showSpinner = true;
    this.formSubmitted = false;
    this.mlaFile = new src_app_entities_mla_file__WEBPACK_IMPORTED_MODULE_1__.MLA_FILE();
    this.setSerialNo();
    this.getAGItemID();
    this.getFileOrigins();
    this.getCaseStatus();
    this.getSecurityClassifications();
    this.getFileComplexity();
    this.getFATFPurpose();
    this.mlaFile.FileType = 'MLA';
    this.urlParams = window.location.href;
  }
  ngOnChanges(changes) {
    if (changes['modalSubmit'].currentValue) {
      this.onSubmit();
    }
  }
  setSerialNo() {
    this.showSpinner = true;
    this.agcService.getSequence('MLA File').subscribe({
      next: response => {
        let resp = Object.assign(response);
        let prefix = resp[0].prefix ? resp[0].prefix : '';
        let count = Number(resp[0].seq_count) + 1;
        let suffix = resp[0].suffix ? resp[0].suffix : '';
        this.mlaFile.I_SerialNo = prefix + count + suffix;
      },
      error: error => {
        console.error("Request failed with error");
        this.showSpinner = false;
      }
    });
  }
  onRequestOriginChange(data) {
    if (data.value == 'ADDR_F') {
      this.showLocalAgencyDetails = false;
      this.showForeignAgencyDetails = true;
      this.getForeignCountries();
    } else {
      this.showLocalAgencyDetails = true;
      this.showForeignAgencyDetails = false;
      this.getLocalAgencyTypes();
    }
    this.mlaFile.LocalOrForeign = data.value;
  }
  onForeignAgencyCountryChange(data) {
    this.getForeignAgencyTypes(this.foreignAgencyCountryCodeIDMap.get(data.value));
  }
  getFileOrigins() {
    this.fileOrigin = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_ORIGIN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileOrigin.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaFile.LocalForeign = 'ADDR_L';
          this.mlaFile.LocalOrForeign = 'ADDR_L';
          this.getLocalAgencyTypes();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCaseTypes() {
    this.caseTypes = [];
    this.mlaFile.MLACaseType = '';
    this.showSpinner = true;
    this.agcService.getMasterDataByType('MLA_CASE_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.caseTypes.push({
                label: item.value,
                value: item.code
              });
            });
          }
          if (lodash__WEBPACK_IMPORTED_MODULE_2__.includes(this.mlaFile.I_Header1, 'MLA')) {
            this.mlaFile.MLACaseType = 'MLA';
            let data = {
              value: 'MLA'
            };
            this.onCaseTypeChange(data);
          } else if (lodash__WEBPACK_IMPORTED_MODULE_2__.includes(this.mlaFile.I_Header1, 'EXT')) {
            this.mlaFile.MLACaseType = 'EXTRADITION';
            let data = {
              value: 'EXT'
            };
            this.onCaseTypeChange(data);
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCaseSubTypes() {
    this.caseSubTypes = [];
    this.mlaFile.MLASubType = '';
    this.showSpinner = true;
    this.agcService.getMasterDataByType('MLA_CASE_SUB_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.caseSubTypes.push({
                label: item.value,
                value: item.code
              });
            });
          }
          if (lodash__WEBPACK_IMPORTED_MODULE_2__.includes(this.mlaFile.I_Header2, '-T')) {
            this.mlaFile.MLASubType = 'O';
          } else if (lodash__WEBPACK_IMPORTED_MODULE_2__.includes(this.mlaFile.I_Header2, '-F')) {
            this.mlaFile.MLASubType = 'I';
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getAGItemID() {
    this.showSpinner = true;
    this.agcService.getMasterDataByType('ROOT_CODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          this.getFileDivisions(resp[0].code);
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileDivisions(agItemID) {
    this.allFileDivisions = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_DIVISION', agItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.allFileDivisions.push({
                label: item.value,
                value: item.code
              });
              this.fileDivisionItemIDMap.set(item.value, item.code);
            });
          }
          this.getCurrentUserFileDivisions();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCurrentUserFileDivisions() {
    this.fileDivisions = [];
    this.showSpinner = true;
    this.agcService.getUserDivisions(src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              let index = lodash__WEBPACK_IMPORTED_MODULE_2__.findIndex(this.allFileDivisions, function (fg) {
                return fg.value == item.title;
              });
              if (index != -1) {
                this.fileDivisions.push({
                  label: item.group_name,
                  value: item.title
                });
              }
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileHeader1(divItemID) {
    this.header1 = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_HEADER1', divItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.header1.push({
                label: item.value,
                value: item.code
              });
              this.fileHeader1ItemIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileHeader2(header1ItemID) {
    this.header2 = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_HEADER2', header1ItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.header2.push({
                label: item.value,
                value: item.code
              });
              this.fileHeader2ItemIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileYear() {
    this.year = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_YEAR').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.year.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileComplexity() {
    this.fileCmplxts = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('CASE_COMPLEXITY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileCmplxts.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getSecurityClassifications() {
    this.secClassification = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('SECURITY_CLASSIFICATION').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.secClassification.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaFile.SecurityClassification = 'SCLASS_S';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFATFPurpose() {
    this.fatfPurposes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('CASE_FATF').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fatfPurposes.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getLocalAgencyTypes() {
    this.lAgencyTypes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.lAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.localAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignCountries() {
    this.cfList = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('COUNTRY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.cfList.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyCountryCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignAgencyTypes(countryCodeID) {
    this.fAgencyTypes = [];
    this.fAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('AGENCY_TYPE_FOREIGN', countryCodeID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCaseStatus() {
    this.caseStatus = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('CASE_STATUS').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.caseStatus.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
        this.mlaFile.FileStatus = 'CSTAT_DO';
        this.mlaFile.MLACaseStatus = 'CSTAT_DO';
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestedUnder(caseTypeRequestUnder) {
    this.reqUnder = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('REQUESTED_UNDER', caseTypeRequestUnder).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqUnder.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onLocalAgencyTypeChange(data) {
    this.lAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_NAME').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.lAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onForeignAgencyTypeChange(data) {
    this.fAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('AGENCY_NAME_FOREIGN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onFileDivisionChange(data) {
    this.showSpinner = true;
    let divItemID = this.fileDivisionItemIDMap.get(data.value);
    this.getFileHeader1(divItemID);
  }
  onFileHeader1Change(data) {
    this.showSpinner = true;
    let header1ItemID = this.fileHeader1ItemIDMap.get(data.value);
    this.getFileHeader2(header1ItemID);
    this.getCaseTypes();
  }
  onFileHeader2Change(data) {
    this.getFileYear();
    if (data.value == 'MLA-F') {
      this.mlaFile.I_MLA_HOA = 'HA_MLAI_MACMA';
    } else if (data.value == 'MLA-T') {
      this.mlaFile.I_MLA_HOA = 'HA_MLAO_MACMA';
    } else if (data.value == 'EXTR-T') {
      this.mlaFile.I_MLA_HOA = 'HA_EXTRADITION';
    } else if (data.value == 'EXTR-F') {
      this.mlaFile.I_MLA_HOA = 'HA_EXTRADITION';
    } else {
      this.mlaFile.I_MLA_HOA = '';
    }
    this.getCaseSubTypes();
  }
  onFileYearChange(data) {
    if (data.value) {
      this.mlaFile.ReferenceNo = "AG/" + this.mlaFile.I_Division + "/" + this.mlaFile.I_Header1 + "/" + this.mlaFile.I_Header2 + "/" + this.mlaFile.I_Year + "/" + this.mlaFile.I_SerialNo;
      this.reqIDAvailable = true;
    }
  }
  onCaseTypeChange(data) {
    if (data.value === 'MLA') {
      this.getRequestedUnder('REQUEST_UNDER_MLA');
    } else {
      this.getRequestedUnder('REQUEST_UNDER_EXTRADITION');
    }
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.reqForm && !this.reqForm.valid) {
      this.reqSubmit.emit({
        status: 'FAILURE'
      });
      this.utilService.alert('error', 'Error', 'Please fill all mandatory details!!', false);
    } else {
      let mla_file = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this.mlaFile);
      mla_file.MLAReceivedDate = mla_file.MLAReceivedDate ? this.datePipe.transform(mla_file.MLAReceivedDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_file.MLAFileOpenDate = mla_file.MLAFileOpenDate ? this.datePipe.transform(mla_file.MLAFileOpenDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_file.MLAOutgoingSentDate = mla_file.MLAOutgoingSentDate ? this.datePipe.transform(mla_file.MLAOutgoingSentDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_file.MLARequestPerfectedDate = mla_file.MLARequestPerfectedDate ? this.datePipe.transform(mla_file.MLARequestPerfectedDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_file.Sensitivity = mla_file.Sensitivity == 'Yes' ? true : false;
      mla_file.FileCreatedBy = src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME;
      mla_file.FileCreatedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'hh:mm:ss");
      let descQueryParam = mla_file.SecurityClassification + ',' + mla_file.LocalForeign + ',' + mla_file.AgencyType + ',' + mla_file.AgencyName + ',' + mla_file.CountryForeignOrg + ',' + mla_file.ForeignAgencyType + "," + mla_file.ForeignAgencyName + ',' + mla_file.FileStatus + ',' + mla_file.MLACaseStatus + ',' + mla_file.MLAComplexity + ',' + mla_file.MLAFATFPurpose + ',' + mla_file.MLARequestedUnder + ',' + mla_file.MLASubType;
      this.agcService.getMasterDataByCodes(descQueryParam).subscribe({
        next: response => {
          let masterDataMap = new Map();
          let resp = Object.assign(response);
          if (resp) {
            if (resp.length) {
              resp.forEach(item => {
                masterDataMap.set(item.code, item.value);
              });
            }
            mla_file.SecurityClassificationDesc = masterDataMap.get(mla_file.SecurityClassification);
            mla_file.LocalForeignDesc = masterDataMap.get(mla_file.LocalForeign);
            mla_file.AgencyTypeDesc = masterDataMap.get(mla_file.AgencyType);
            mla_file.AgencyNameDesc = masterDataMap.get(mla_file.AgencyName);
            mla_file.CountryForeignOrgDesc = masterDataMap.get(mla_file.CountryForeignOrg);
            mla_file.FileForeignAgencyTypeDesc = masterDataMap.get(mla_file.ForeignAgencyType);
            mla_file.ForeignAgencyNameDesc = masterDataMap.get(mla_file.ForeignAgencyName);
            mla_file.FileStatusDesc = masterDataMap.get(mla_file.FileStatus);
            mla_file.MLACaseStatusDesc = masterDataMap.get(mla_file.MLACaseStatus);
            mla_file.MLAComplexityDesc = masterDataMap.get(mla_file.MLAComplexity);
            mla_file.MLAFATFPurposeDesc = masterDataMap.get(mla_file.MLAFATFPurpose);
            mla_file.MLARequestedUnderDesc = masterDataMap.get(mla_file.MLARequestedUnder);
            mla_file.MLASubTypeDesc = masterDataMap.get(mla_file.MLASubType);
            this.agcService.generateSequence('MLA File').subscribe({
              next: response => {
                let resp = Object.assign(response);
                if (resp) {
                  this.agcService.createFile(mla_file).subscribe({
                    next: response => {
                      let createResp = Object.assign(response);
                      if (createResp) {
                        let refNo = createResp.ReferenceNo;
                        this.utilService.alert('success', 'Success', 'MLA File ' + refNo + ' created successfully', false);
                        this.reqSubmit.emit({
                          status: 'SUCCESS'
                        });
                      }
                    },
                    error: error => {
                      console.log('Request failed with error');
                      this.showSpinner = false;
                    }
                  });
                }
              },
              error: error => {
                console.log('Request failed with error');
                this.showSpinner = false;
              }
            });
          }
        },
        error: error => {
          console.log('Request failed with error');
          this.showSpinner = false;
        }
      });
    }
  }
}
MlaFileComponent.ɵfac = function MlaFileComponent_Factory(t) {
  return new (t || MlaFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__.AgcService));
};
MlaFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MlaFileComponent,
  selectors: [["mla-file"]],
  viewQuery: function MlaFileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.reqForm = _t.first);
    }
  },
  inputs: {
    modalSubmit: "modalSubmit"
  },
  outputs: {
    reqSubmit: "reqSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 4,
  consts: [[1, "container-fluid", 2, "background-color", "#FFF"], ["class", "request-spinner", "strokeWidth", "7", 4, "ngIf"], [1, "service-tab"], [3, "header"], [4, "ngIf"], ["header", "Documents", 4, "ngIf"], ["position", "top-right"], ["strokeWidth", "7", 1, "request-spinner"], ["mlaFileForm", "ngForm"], [1, "row", "no-padding"], [1, "row"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-1", "no-right-padding", 2, "padding-top", "6px !important", "width", "55px !important", "font-size", "13px !important"], [1, "xsm-padding"], [1, "col-lg-2", "xsm-padding"], [1, "col-lg-10", "xsm-padding"], ["filterBy", "label", "appendTo", "body", "name", "fileDivision", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose division", "placeholder", "Division", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileDivision", "ngModel"], [1, "col-lg-1", "xsm-padding"], ["filterBy", "label", "appendTo", "body", "name", "fileHeader1", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose header 1", "placeholder", "Header 1", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileHeader1", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "fileHeader2", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose header 2", "placeholder", "Header 2", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileHeader2", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "fileYear", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose year", "placeholder", "Year", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fileYear", "ngModel"], [1, "col-lg-1", "no-left-padding", 2, "padding-top", "5px !important", "width", "100px !important", "font-size", "13px !important"], ["type", "text", "pInputText", "", "name", "serialNo", 3, "disabled", "ngModel", "ngModelChange"], ["serialNo", "ngModel"], [1, "col-lg-4", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "cDate", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to enter received date", 1, "customized-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "ngClass", "ngModelChange"], ["cDate", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose case type", "name", "cType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose case type", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange", "onChange"], ["cType", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "oDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter opened date", "tooltipPosition", "bottom", 1, "customized-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "ngClass", "ngModelChange"], ["oDate", "ngModel"], [1, "col-lg-12", "sm-padding", "no-padding"], ["pInputTextarea", "", "name", "fType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter file title", "tooltipPosition", "bottom", 1, "custom-textarea", 2, "height", "75px !important", 3, "disabled", "ngModel", "rows", "cols", "required", "ngClass", "ngModelChange"], ["fType", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "odDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter date of outgoing request sent", "tooltipPosition", "bottom", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "ngClass", "ngModelChange"], ["odDate", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose case sub type", "name", "csType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose case sub type", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange"], ["csType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose case status", "name", "cStatus", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose case status", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange"], ["cStatus", "ngModel"], [1, "row", "xsm-padding", 2, "height", "35px"], [1, "col-lg-1"], [1, "p-field-radiobutton"], ["value", "Yes", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose yes", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "disabled", "required", "ngClass", "ngModelChange"], ["prfType", "ngModel"], [1, "col-lg-5", 2, "padding-top", "3px"], [1, "sm-padding", "form-field-header", "no-padding"], ["value", "No", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose no", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "disabled", "required", "ngClass", "ngModelChange"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose security classification", "tooltipPosition", "bottom", "name", "secClsf", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose security classification", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngClass", "required", "ngModelChange"], ["secClsf", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Local/Foreign", "name", "rOrigin", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Local/Foreign", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["rOrigin", "ngModel"], ["class", "row", 4, "ngIf"], ["type", "text", "pInputText", "", "name", "agencyRefNo", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency ref no", "tooltipPosition", "bottom", 3, "disabled", "ngModel", "ngModelChange"], ["agencyRefNo", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a complexity", "name", "cmplx", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose complexity", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["cmplx", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose request made under", "name", "rUnder", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose request made under", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["rUnder", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose FATF purpose", "name", "fPurpose", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose FATF purpose", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["fPurpose", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "pDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter perfected date", "tooltipPosition", "bottom", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "ngClass", "ngModelChange"], ["pDate", "ngModel"], ["pInputTextarea", "", "name", "fRemarks", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter remarks", "tooltipPosition", "bottom", 1, "custom-textarea", 2, "height", "75px !important", 3, "ngModel", "rows", "cols", "ngModelChange"], ["fRemarks", "ngModel"], [1, "col-lg-8", "sm-padding", "no-padding"], [1, "p-field-checkbox"], ["name", "sIRaised", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["sIRaised", "ngModel"], ["name", "pExposure", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["pExposure", "ngModel"], ["name", "dCriminality", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["dCriminality", "ngModel"], ["name", "svgnt", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["svgnt", "ngModel"], ["name", "cOffence", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["cOffence", "ngModel"], ["name", "sGovtOff", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["sGovtOff", "ngModel"], ["name", "dPenalty", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["dPenalty", "ngModel"], ["name", "cntnts", 1, "custom-checkbox", 3, "disabled", "ngModel", "binary", "ngModelChange"], ["cntnts", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose country or foreign origin", "name", "cfOrigin", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose country or foreign origin", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["cfOrigin", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose foreign agency type", "name", "fOriginType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose foreign agency type", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["fOriginType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose foreign agency name", "name", "fOriginName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose foreign agency name", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["fOriginName", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose agency type", "name", "lAType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose agency type", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["lAType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose agency name", "name", "lAName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose agency name", "tooltipPosition", "bottom", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["lAName", "ngModel"], ["header", "Documents"], [3, "requestType", "readOnly", "requestID"]],
  template: function MlaFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MlaFileComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-tabView", 2)(3, "p-tabPanel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MlaFileComponent_form_4_Template, 259, 226, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MlaFileComponent_p_tabPanel_5_Template, 2, 3, "p-tabPanel", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-toast", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("header", "File Details (", ctx.mlaFile.ReferenceNo, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqIDAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButton, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextarea, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinner, _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__.DocumentUploadComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2122:
/*!***************************************************************!*\
  !*** ./src/app/services/mla-request/mla-request.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MlaRequestComponent": () => (/* binding */ MlaRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_mla_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/mla-request */ 3323);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/services/agc.service */ 2935);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 1102);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commons/components/document-upload/document-upload.component */ 9857);



















const _c0 = ["mlaRequestForm"];
function MlaRequestComponent_p_progressSpinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-progressSpinner", 7);
  }
}
const _c1 = function (a0, a1) {
  return {
    "required": a0,
    "read-only": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-dropdown-is-invalid": a0
  };
};
function MlaRequestComponent_form_4_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Requesting Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_div_45_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.mlaRequest.RequestingAgencyType = $event);
    })("onChange", function MlaRequestComponent_form_4_div_45_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onLocalAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r9.readOnly, ctx_r9.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r9.readOnly)("options", ctx_r9.reqLocalAgencyTypes)("ngModel", ctx_r9.mlaRequest.RequestingAgencyType)("required", !ctx_r9.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r9.formSubmitted && _r27.invalid));
  }
}
function MlaRequestComponent_form_4_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Requesting Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_div_46_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.mlaRequest.RequestingAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r10.readOnly, ctx_r10.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r10.readOnly)("options", ctx_r10.reqLocalAgencyNames)("ngModel", ctx_r10.mlaRequest.RequestingAgencyName)("required", !ctx_r10.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r10.formSubmitted && _r31.invalid));
  }
}
function MlaRequestComponent_form_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Country / Foreign Org. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_div_47_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.mlaRequest.CountryForeignOrg = $event);
    })("onChange", function MlaRequestComponent_form_4_div_47_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.onForeignAgencyCountryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r11.readOnly, ctx_r11.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r11.readOnly)("required", !ctx_r11.readOnly)("options", ctx_r11.foreignCountries)("ngModel", ctx_r11.mlaRequest.CountryForeignOrg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r11.formSubmitted && _r34.invalid));
  }
}
function MlaRequestComponent_form_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_div_48_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.mlaRequest.ForeignAgencyType = $event);
    })("onChange", function MlaRequestComponent_form_4_div_48_Template_p_dropdown_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.onForeignAgencyTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r12.readOnly, ctx_r12.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r12.readOnly)("required", !ctx_r12.readOnly)("options", ctx_r12.foreignAgencyTypes)("ngModel", ctx_r12.mlaRequest.ForeignAgencyType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r12.formSubmitted && _r38.invalid));
  }
}
function MlaRequestComponent_form_4_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 11)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Foreign Agency Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "p-dropdown", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_div_49_Template_p_dropdown_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.mlaRequest.ForeignAgencyName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c1, !ctx_r13.readOnly, ctx_r13.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r13.readOnly)("required", !ctx_r13.readOnly)("options", ctx_r13.foreignAgencyNames)("ngModel", ctx_r13.mlaRequest.ForeignAgencyName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r13.formSubmitted && _r42.invalid));
  }
}
const _c3 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c4 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
const _c5 = function (a0) {
  return {
    "p-radiobutton-is-invalid": a0
  };
};
const _c6 = function (a0) {
  return {
    "p-calendar-is-invalid": a0
  };
};
function MlaRequestComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Request Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.mlaRequest.RequestTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " File Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "p-dropdown", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.fileReferenceNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "div", 19)(21, "div", 11)(22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Request Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "p-dropdown", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.mlaRequest.RequestType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19)(29, "div", 11)(30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Request Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "p-dropdown", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.mlaRequest.RequestStatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19)(37, "div", 11)(38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Local / Foreign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 13)(41, "div", 14)(42, "p-dropdown", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.mlaRequest.LocalForeign = $event);
    })("onChange", function MlaRequestComponent_form_4_Template_p_dropdown_onChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.onLocalForeignChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, MlaRequestComponent_form_4_div_45_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, MlaRequestComponent_form_4_div_46_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, MlaRequestComponent_form_4_div_47_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, MlaRequestComponent_form_4_div_48_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, MlaRequestComponent_form_4_div_49_Template, 8, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9)(51, "div", 19)(52, "div", 28)(53, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Other Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 13)(56, "div", 14)(57, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_input_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.mlaRequest.OtherAgency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 19)(60, "div", 28)(61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Requesting Agency Ref No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 13)(64, "div", 14)(65, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.mlaRequest.RequestingAgencyRefNo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 19)(68, "div", 11)(69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Sensitive / High Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 13)(72, "div", 33)(73, "div", 34)(74, "div", 35)(75, "p-radioButton", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_radioButton_ngModelChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.mlaRequest.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 38)(78, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 34)(81, "div", 35)(82, "p-radioButton", 40, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_radioButton_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.mlaRequest.Sensitivity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38)(85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 9)(88, "div", 19)(89, "div", 11)(90, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " Security Classification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 13)(93, "div", 14)(94, "p-dropdown", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.mlaRequest.SecurityClassification = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 19)(97, "div", 11)(98, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " Request Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 13)(101, "div", 14)(102, "p-dropdown", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_102_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r57.mlaRequest.RequestReceivedMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 19)(105, "div", 11)(106, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, " Complexity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 13)(109, "div", 14)(110, "p-dropdown", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_110_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.mlaRequest.Complexity = $event);
    })("onChange", function MlaRequestComponent_form_4_Template_p_dropdown_onChange_110_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r59.onComplexityChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 9)(113, "div", 19)(114, "div", 11)(115, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Urgency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 13)(118, "div", 14)(119, "p-dropdown", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_119_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.mlaRequest.Urgency = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 19)(122, "div", 11)(123, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, " Date/Time Received ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 13)(126, "div", 14)(127, "p-calendar", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_calendar_ngModelChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r61.mlaRequest.ReceivedDate = $event);
    })("onSelect", function MlaRequestComponent_form_4_Template_p_calendar_onSelect_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r62.onReceivedDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 19)(130, "div", 11)(131, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, " Request Due Date (Complexity) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 13)(134, "div", 14)(135, "p-calendar", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_calendar_ngModelChange_135_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.mlaRequest.RequestDueDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 9)(138, "div", 19)(139, "div", 11)(140, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, " Expected Response Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 13)(143, "div", 14)(144, "p-calendar", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_calendar_ngModelChange_144_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r64.mlaRequest.ExpResponseDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 19)(147, "div", 11)(148, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, " Division ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 13)(151, "div", 14)(152, "p-dropdown", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_p_dropdown_ngModelChange_152_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r65.mlaRequest.UserDivision = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 9)(155, "div", 28)(156, "div", 28)(157, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 13)(160, "div", 14)(161, "textarea", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MlaRequestComponent_form_4_Template_textarea_ngModelChange_161_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.mlaRequest.Remarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](76);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](95);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](103);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](111);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](120);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](128);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](136);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](145);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](153);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](113, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.RequestTitle)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](116, _c3, ctx_r1.formSubmitted && _r4.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](118, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("options", ctx_r1.fileReferences)("ngModel", ctx_r1.fileReferenceNo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](121, _c2, ctx_r1.formSubmitted && _r5.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](123, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqType)("ngModel", ctx_r1.mlaRequest.RequestType)("required", !ctx_r1.readOnly)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](126, _c2, ctx_r1.formSubmitted && _r6.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](128, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", true)("options", ctx_r1.reqStatus)("ngModel", ctx_r1.mlaRequest.RequestStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](129, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("required", !ctx_r1.readOnly)("options", ctx_r1.fileOrigin)("ngModel", ctx_r1.mlaRequest.LocalForeign)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](132, _c2, ctx_r1.formSubmitted && _r8.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showForeignAgencyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.OtherAgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.RequestingAgencyRefNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](134, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.mlaRequest.Sensitivity)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](137, _c5, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.mlaRequest.Sensitivity)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](139, _c5, ctx_r1.formSubmitted && _r16.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](141, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.secClassification)("ngModel", ctx_r1.mlaRequest.SecurityClassification)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](144, _c2, ctx_r1.formSubmitted && _r18.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](146, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqModes)("ngModel", ctx_r1.mlaRequest.RequestReceivedMode)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](149, _c2, ctx_r1.formSubmitted && _r19.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](151, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqCmplxts)("ngModel", ctx_r1.mlaRequest.Complexity)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](154, _c2, ctx_r1.formSubmitted && _r20.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](156, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqUrgency)("ngModel", ctx_r1.mlaRequest.Urgency)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](159, _c2, ctx_r1.formSubmitted && _r21.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](161, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.ReceivedDate)("showIcon", true)("maxDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("showTime", true)("showSeconds", false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](164, _c6, ctx_r1.formSubmitted && _r22.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](166, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.RequestDueDate)("showIcon", true)("minDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](169, _c6, ctx_r1.formSubmitted && _r23.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](171, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.ExpResponseDate)("showIcon", true)("minDate", ctx_r1.todaysDate)("required", !ctx_r1.readOnly)("disabled", ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](174, _c6, ctx_r1.formSubmitted && _r24.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](176, _c1, !ctx_r1.readOnly, ctx_r1.readOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filter", true)("disabled", ctx_r1.readOnly)("options", ctx_r1.reqDivisions)("ngModel", ctx_r1.mlaRequest.UserDivision)("required", !ctx_r1.readOnly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](179, _c2, ctx_r1.formSubmitted && _r25.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.readOnly)("ngModel", ctx_r1.mlaRequest.Remarks)("rows", 5)("cols", 30);
  }
}
function MlaRequestComponent_p_tabPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-tabPanel", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "document-upload", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("requestType", "Request")("readOnly", "N")("requestID", ctx_r2.mlaRequest.RequestNo);
  }
}
class MlaRequestComponent {
  constructor(utilService, datePipe, agcService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.agcService = agcService;
    this.todaysDate = new Date();
    this.readOnly = false;
    this.formSubmitted = false;
    this.reqType = [];
    this.reqCmplxts = [];
    this.reqModes = [];
    this.secClassification = [];
    this.reqUrgency = [];
    this.allDivisions = [];
    this.reqDivisions = [];
    this.showForeignAgencyDetails = false;
    this.reqStatus = [];
    this.reqLocalAgencyTypes = [];
    this.reqLocalAgencyNames = [];
    this.foreignAgencyNames = [];
    this.foreignAgencyTypes = [];
    this.foreignCountries = [];
    this.localAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyTypeCodeIDMap = new Map();
    this.foreignAgencyCountryCodeIDMap = new Map();
    this.fileOrigin = [];
    this.showSpinner = false;
    this.reqIDAvailable = false;
    this.fileReferenceNo = '';
    this.fileReferences = [];
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.modalSubmit = false;
    this.cmplxTimeMap = new Map();
  }
  ngOnInit() {
    this.formSubmitted = false;
    this.mlaRequest = new _entities_mla_request__WEBPACK_IMPORTED_MODULE_1__.MLA_REQUEST();
    this.setSerialNo();
    this.getSecurityClassifications();
    this.getRequestStatus();
    this.getRequestComplexity();
    this.getRequestTypes();
    this.getRequestModes();
    this.getRequestUrgency();
    this.getLocalAgencyTypes();
    this.getAGItemID();
    this.getFileOrigins();
    this.getFileReferences();
  }
  ngOnChanges(changes) {
    if (changes['modalSubmit'].currentValue) {
      this.onSubmit();
    }
  }
  setSerialNo() {
    this.showSpinner = true;
    this.agcService.getSequence('MLA Request').subscribe({
      next: response => {
        let resp = Object.assign(response);
        let prefix = resp[0].prefix ? resp[0].prefix : '';
        let count = Number(resp[0].seq_count) + 1;
        let suffix = resp[0].suffix ? resp[0].suffix : '';
        this.mlaRequest.RequestNo = prefix + count + suffix;
        this.reqIDAvailable = true;
      },
      error: error => {
        console.error("Request failed with error");
        this.showSpinner = false;
      }
    });
  }
  getSecurityClassifications() {
    this.secClassification = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('SECURITY_CLASSIFICATION').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.secClassification.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaRequest.SecurityClassification = 'SCLASS_S';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestStatus() {
    this.reqStatus = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_STATUS').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqStatus.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaRequest.RequestStatus = 'RSTAT_O';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestComplexity() {
    this.reqCmplxts = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_COMPLEXITY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqCmplxts.push({
                label: item.value,
                value: item.code
              });
              this.cmplxTimeMap.set(item.code, item.attribute_1);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestTypes() {
    this.reqType = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqType.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestModes() {
    this.reqModes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_MODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqModes.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getRequestUrgency() {
    this.reqUrgency = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('REQUEST_URGENCY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqUrgency.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaRequest.Urgency = 'RURGENT_NU';
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getLocalAgencyTypes() {
    this.reqLocalAgencyTypes = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_TYPE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqLocalAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.localAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileOrigins() {
    this.fileOrigin = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('FILE_ORIGIN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileOrigin.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.mlaRequest.LocalForeign = 'ADDR_L';
          this.getLocalAgencyTypes();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.error('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getAGItemID() {
    this.showSpinner = true;
    this.agcService.getMasterDataByType('ROOT_CODE').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          this.getDivisions(resp[0].code);
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getDivisions(agItemID) {
    this.allDivisions = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('FILE_DIVISION', agItemID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.allDivisions.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.getCurrentUserFileDivisions();
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getCurrentUserFileDivisions() {
    this.reqDivisions = [];
    this.showSpinner = true;
    this.agcService.getUserDivisions(_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService.CURRENT_USER_NAME).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              let index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.allDivisions, function (fg) {
                return fg.value == item.title;
              });
              if (index != -1) {
                this.reqDivisions.push({
                  label: item.group_name,
                  value: item.title
                });
              }
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onComplexityChange(data) {
    let days;
    if (this.mlaRequest.ReceivedDate) {
      days = this.cmplxTimeMap.get(data.value);
      this.utilService.addDays(this.mlaRequest.ReceivedDate, days, this.mlaRequest, 'RequestDueDate');
    }
  }
  onReceivedDateChange(data) {
    let days;
    if (!this.utilService.isEmpty(this.mlaRequest.Complexity)) {
      days = this.cmplxTimeMap.get(this.mlaRequest.Complexity);
      this.utilService.addDays(data, days, this.mlaRequest, 'RequestDueDate');
    }
  }
  onLocalForeignChange(data) {
    if (data.value === 'ADDR_F') {
      this.showForeignAgencyDetails = true;
      this.getForeignCountries();
    } else {
      this.showForeignAgencyDetails = false;
    }
  }
  onForeignAgencyCountryChange(data) {
    this.getForeignAgencyTypes(this.foreignAgencyCountryCodeIDMap.get(data.value));
  }
  getForeignCountries() {
    this.foreignCountries = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('COUNTRY').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignCountries.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyCountryCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getForeignAgencyTypes(countryCodeID) {
    this.foreignAgencyTypes = [];
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByTypeAndParent('AGENCY_TYPE_FOREIGN', countryCodeID).subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyTypes.push({
                label: item.value,
                value: item.code
              });
              this.foreignAgencyTypeCodeIDMap.set(item.code, item.code);
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onLocalAgencyTypeChange(data) {
    this.reqLocalAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('EXTERNAL_AGENCY_NAME').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.reqLocalAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onForeignAgencyTypeChange(data) {
    this.foreignAgencyNames = [];
    this.showSpinner = true;
    this.agcService.getMasterDataByType('AGENCY_NAME_FOREIGN').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.foreignAgencyNames.push({
                label: item.value,
                value: item.code
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  getFileReferences() {
    this.showSpinner = true;
    this.agcService.getFileByFilter('type', 'MLA').subscribe({
      next: response => {
        let resp = Object.assign(response);
        if (resp) {
          if (resp.length) {
            resp.forEach(item => {
              this.fileReferences.push({
                label: item.ReferenceNo,
                value: item.ReferenceNo
              });
            });
          }
          this.showSpinner = false;
        }
      },
      error: error => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    });
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.reqForm && !this.reqForm.valid) {
      this.reqSubmit.emit({
        status: 'FAILURE'
      });
      this.utilService.alert('error', 'Error', 'Please fill all mandatory details!!', false);
    } else {
      let mla_req = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.mlaRequest);
      mla_req.ReceivedDate = mla_req.ReceivedDate ? this.datePipe.transform(mla_req.ReceivedDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_req.RequestDueDate = mla_req.RequestDueDate ? this.datePipe.transform(mla_req.RequestDueDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_req.OriginalDueDate = mla_req.RequestDueDate;
      mla_req.ExpResponseDate = mla_req.ExpResponseDate ? this.datePipe.transform(mla_req.ExpResponseDate, "yyyy-MM-dd'T'hh:mm:ss") : null;
      mla_req.Sensitivity = mla_req.Sensitivity == 'Yes' ? true : false;
      mla_req.RequestCreatedBy = _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService.CURRENT_USER_NAME;
      mla_req.RequestCreatedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'hh:mm:ss");
      let descQueryParam = mla_req.RequestType + ',' + mla_req.RequestStatus + ',' + mla_req.LocalForeign + ',' + mla_req.RequestingAgencyType + ',' + mla_req.RequestingAgencyName + ',' + mla_req.CountryForeignOrg + ',' + mla_req.ForeignAgencyType + "," + mla_req.ForeignAgencyName + ',' + mla_req.SecurityClassification + ',' + mla_req.RequestReceivedMode + ',' + mla_req.Complexity + ',' + mla_req.Urgency;
      this.agcService.getMasterDataByCodes(descQueryParam).subscribe({
        next: response => {
          let masterDataMap = new Map();
          let resp = Object.assign(response);
          if (resp) {
            if (resp.length) {
              resp.forEach(item => {
                masterDataMap.set(item.code, item.value);
              });
            }
            mla_req.RequestTypeDesc = masterDataMap.get(mla_req.RequestType);
            mla_req.RequestStatusDesc = masterDataMap.get(mla_req.RequestStatus);
            mla_req.LocalForeignDesc = masterDataMap.get(mla_req.LocalForeign);
            mla_req.RequestingAgencyTypeDesc = masterDataMap.get(mla_req.RequestingAgencyType);
            mla_req.RequestingAgencyNameDesc = masterDataMap.get(mla_req.RequestingAgencyName);
            mla_req.CountryForeignOrgDesc = masterDataMap.get(mla_req.CountryForeignOrg);
            mla_req.ForeignAgencyTypeDesc = masterDataMap.get(mla_req.ForeignAgencyType);
            mla_req.ForeignAgencyNameDesc = masterDataMap.get(mla_req.ForeignAgencyName);
            mla_req.SecurityClassificationDesc = masterDataMap.get(mla_req.SecurityClassification);
            mla_req.RequestReceivedModeDesc = masterDataMap.get(mla_req.RequestReceivedMode);
            mla_req.ComplexityDesc = masterDataMap.get(mla_req.Complexity);
            mla_req.UrgencyDesc = masterDataMap.get(mla_req.Urgency);
            this.agcService.generateSequence('MLA Request').subscribe({
              next: response => {
                let resp = Object.assign(response);
                if (resp) {
                  this.agcService.createRequest(this.fileReferenceNo, mla_req).subscribe({
                    next: response => {
                      let createResp = Object.assign(response);
                      if (createResp) {
                        let reqNo = createResp.RequestNo;
                        this.utilService.alert('success', 'Success', 'MLA Request ' + reqNo + ' created successfully', false);
                        this.reqSubmit.emit({
                          status: 'SUCCESS'
                        });
                      }
                    },
                    error: error => {
                      console.log('Request failed with error');
                      this.showSpinner = false;
                    }
                  });
                }
              },
              error: error => {
                console.log('Request failed with error');
                this.showSpinner = false;
              }
            });
          }
        },
        error: error => {
          console.log('Request failed with error');
          this.showSpinner = false;
        }
      });
    }
  }
}
MlaRequestComponent.ɵfac = function MlaRequestComponent_Factory(t) {
  return new (t || MlaRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_commons_services_agc_service__WEBPACK_IMPORTED_MODULE_3__.AgcService));
};
MlaRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MlaRequestComponent,
  selectors: [["mla-request"]],
  viewQuery: function MlaRequestComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.reqForm = _t.first);
    }
  },
  inputs: {
    modalSubmit: "modalSubmit"
  },
  outputs: {
    reqSubmit: "reqSubmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 4,
  consts: [[1, "container-fluid"], ["class", "request-spinner", "strokeWidth", "7", 4, "ngIf"], [1, "service-tab"], [3, "header"], [4, "ngIf"], ["header", "Documents", 4, "ngIf"], ["position", "top-right"], ["strokeWidth", "7", 1, "request-spinner"], ["mlaRequestForm", "ngForm"], [1, "row"], [1, "col-lg-6", "sm-padding", "no-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["type", "text", "pInputText", "", "name", "reqTitle", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter request title", 3, "disabled", "ngModel", "required", "ngClass", "ngModelChange"], ["reqTitle", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "frno", "pTooltip", "Click to choose file reference", "tooltipStyleClass", "custom-tooltip", 1, "custom-dropdown", 3, "filter", "required", "disabled", "options", "ngModel", "ngClass", "ngModelChange"], ["frno", "ngModel"], [1, "col-lg-4", "sm-padding", "no-padding"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose request type", "name", "rType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose request type", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["rType", "ngModel"], ["filterBy", "label", "appendTo", "body", "name", "rStatus", "pTooltip", "Click to choose request status", "tooltipStyleClass", "custom-tooltip", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "ngModelChange"], ["rStatus", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose Local/Foreign", "name", "fileOrg", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose Local/Foreign", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fileOrg", "ngModel"], ["class", "col-lg-4 sm-padding no-padding", 4, "ngIf"], [1, "col-lg-12", "sm-padding", "no-padding"], ["type", "text", "pInputText", "", "name", "otherAgency", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter other agency", 3, "disabled", "ngModel", "ngModelChange"], ["otherAgency", "ngModel"], ["type", "text", "pInputText", "", "name", "requestingAgencyRefNo", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter requesting agency reference number", 3, "disabled", "ngModel", "ngModelChange"], ["requestingAgencyRefNo", "ngModel"], [1, "row", "xsm-padding", 2, "height", "35px"], [1, "col-lg-1"], [1, "p-field-radiobutton"], ["value", "Yes", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose yes", 1, "custom-radio-btn", 3, "ngModel", "required", "disabled", "ngClass", "ngModelChange"], ["prfType", "ngModel"], [1, "col-lg-5", 2, "padding-top", "3px"], [1, "sm-padding", "form-field-header", "no-padding"], ["value", "No", "name", "prfType", "inputId", "prfType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose no", 1, "custom-radio-btn", 3, "ngModel", "required", "disabled", "ngClass", "ngModelChange"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose security classification", "name", "classification", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose security classification", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["classification", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose request mode", "name", "mode", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose request mode", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["mode", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose complexity", "name", "cmplx", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose complexity", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["cmplx", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose urgency", "name", "urgency", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose urgency", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["urgency", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "cDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter received date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "maxDate", "required", "showTime", "showSeconds", "ngClass", "ngModelChange", "onSelect"], ["cDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "cDueDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter due date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "minDate", "required", "ngClass", "ngModelChange"], ["cDueDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "cResponseDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter response date", 1, "custom-request-calendar", 3, "disabled", "ngModel", "showIcon", "minDate", "required", "ngClass", "ngModelChange"], ["cResponseDate", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose division", "name", "division", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose division", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["division", "ngModel"], ["pInputTextarea", "", "name", "remarks", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter remarks", 1, "custom-textarea", 2, "height", "75px !important", 3, "disabled", "ngModel", "rows", "cols", "ngModelChange"], ["remarks", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a requesting agency type", "name", "reqAtype", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose requesting agency type", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange", "onChange"], ["reqAtype", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a requesting agency", "name", "reqAgency", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose requesting agency", 1, "custom-dropdown", 3, "filter", "disabled", "options", "ngModel", "required", "ngClass", "ngModelChange"], ["reqAgency", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose a country/foreign origin", "name", "fCountry", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter country/foreign origin", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fCountry", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency type", "name", "fAgencyType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency type", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange", "onChange"], ["fAgencyType", "ngModel"], ["filterBy", "label", "appendTo", "body", "placeholder", "Choose an agency name", "name", "fAgencyName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter agency name", 1, "custom-dropdown", 3, "filter", "disabled", "required", "options", "ngModel", "ngClass", "ngModelChange"], ["fAgencyName", "ngModel"], ["header", "Documents"], [3, "requestType", "readOnly", "requestID"]],
  template: function MlaRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MlaRequestComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p-tabView", 2)(3, "p-tabPanel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MlaRequestComponent_form_4_Template, 163, 181, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MlaRequestComponent_p_tabPanel_5_Template, 2, 3, "p-tabPanel", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-toast", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("header", "Request Details (", ctx.mlaRequest.RequestNo, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqIDAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__.RadioButton, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.Toast, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinner, _commons_components_document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_4__.DocumentUploadComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6049:
/*!*******************************!*\
  !*** ./src/config/api-url.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
const api = {
  get_master_data: '/master-data',
  user_notifications: '/notifications',
  user_divisions: '/user-divisions',
  users: '/users',
  active_users: '/active-users',
  user_profile: '/user-profile',
  user_details: '/user-details',
  sequence: '/sequence',
  read_file: '/file/read-file',
  create_file: '/file/create-file',
  get_file: '/file',
  file_details: '/file/details',
  files_for_request: '/file/files-for-request',
  all_files: '/file/files',
  read_request: '/request/read-request',
  create_request: '/request/create-request',
  get_request: '/request',
  request_details: '/request/details',
  requests_for_file: '/request/requests-for-file',
  all_requests: '/request/requests',
  dashboard_files: '/dashboard-files',
  dashboard_requests: '/dashboard-requests',
  generate_hash: '/hash',
  login: '/login',
  create_user: '/create-user'
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  api_endpoint: 'http://localhost:3010/agc',
  ws_endpoint: 'ws://localhost:3010/websockets'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map