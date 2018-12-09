var tserp;
(function (tserp) {
    var System = (function () {
        function System() {
        }
        System.getDateArray = function (date) {
            date = date || new Date();
            return [
                date.getFullYear(),
                this.pad(date.getMonth() + 1, 2),
                this.pad(date.getDate(), 2),
                this.pad(date.getHours(), 2),
                this.pad(date.getMinutes(), 2),
                this.pad(date.getSeconds(), 2),
                this.pad(date.getMilliseconds(), 2)
            ];
        };
        ;
        System.js_yyyy_mm_dd_hh_mm_ss = function () {
            var now = new Date();
            var year = "" + now.getFullYear();
            var month = "" + (now.getMonth() + 1);
            if (month.length == 1) {
                month = "0" + month;
            }
            var day = "" + now.getDate();
            if (day.length == 1) {
                day = "0" + day;
            }
            var hour = "" + now.getHours();
            if (hour.length == 1) {
                hour = "0" + hour;
            }
            var minute = "" + now.getMinutes();
            if (minute.length == 1) {
                minute = "0" + minute;
            }
            var second = "" + now.getSeconds();
            if (second.length == 1) {
                second = "0" + second;
            }
            return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        };
        System.pad = function (number, digits) {
            return new Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
        };
        ;
        System.getCurrentDate = function (date) {
            var d = this.getDateArray(date);
            return d[0] + '' + d[1] + '' + d[2] + '' + d[3] + '' + d[4] + '' + d[5];
        };
        System.setCurrLang = function (val) {
            top.window['currLang'] = val;
        };
        System.getCurrLang = function () {
            return top.window['currLang'];
        };
        System.getCurrUserId = function () {
            return top.window['currUserId'];
        };
        System.getTheme = function () {
            return top.window['SysTheme'];
        };
        System.getGb_SysImgPath = function () {
            return this.ctx;
        };
        System.getGb_SysPath = function () {
            return this.ctx;
        };
        System.getSessionUserId = function () {
            return this.getSessionDataKey('UserId');
        };
        System.getSessionUserName = function () {
            return this.getSessionDataKey('UserName');
        };
        System.getSessionEmployeePk = function () {
            return this.getSessionDataKey('EmployeePk');
        };
        System.getSessionOrgName = function () {
            return this.getSessionDataKey('OrgName');
        };
        System.getSessionRoleName = function () {
            return this.getSessionDataKey('RoleName');
        };
        System.getSessionCodeAdminYn = function () {
            return this.getSessionDataKey('CodeAdminYN');
        };
        System.getSessionDebugYn = function () {
            return this.getSessionDataKey('DebugYN');
        };
        System.getSessionCompanyPk = function () {
            return this.getSessionDataKey('CompanyPk');
        };
        System.getSessionOrgPk = function () {
            return this.getSessionDataKey('OrgPk');
        };
        System.getSessionHrLevel = function () {
            return this.getSessionDataKey('HrLevel');
        };
        System.getSessionAcLevel = function () {
            return this.getSessionDataKey('AcLevel');
        };
        System.getSessionFuLevel = function () {
            return this.getSessionDataKey('FuLevel');
        };
        System.getSessionSaLevel = function () {
            return this.getSessionDataKey('SaLevel');
        };
        System.getSessionPrLevel = function () {
            return this.getSessionDataKey('PrLevel');
        };
        System.getSessionInLevel = function () {
            return this.getSessionDataKey('InLevel');
        };
        System.getSessionPuLevel = function () {
            return this.getSessionDataKey('PuLevel');
        };
        System.getSessionEiLevel = function () {
            return this.getSessionDataKey('EiLevel');
        };
        System.getSessionLayout = function () {
            return this.getSessionDataKey('LayoutStyle');
        };
        System.getSessionLang = function () {
            return this.getSessionDataKey('SessionLang');
        };
        System.getSessionEmpId = function () {
            return this.getSessionDataKey('EmpId');
        };
        System.getSessionPositionName = function () {
            return this.getSessionDataKey('PositionName');
        };
        System.getSessionAnnounceYn = function () {
            return this.getSessionDataKey('AnnounceYN');
        };
        System.getSessionOrgId = function () {
            return this.getSessionDataKey('OrgId');
        };
        System.getSessionUserPk = function () {
            return this.getSessionDataKey('UserPk');
        };
        System.getSessionBusPartnerPk = function () {
            return this.getSessionDataKey('DeptPk');
        };
        System.getSessionPartnerName = function () {
            return this.getSessionDataKey('DeptName');
        };
        System.getSessionDbDataSource = function () {
            return top.window['SYSTEM_DB_DATASOURCE'];
        };
        System.getSessionDbType = function () {
            return top.window['SYSTEM_DB_TYPE'];
        };
        System.getCurrToken = function () {
            return top.window['SYSTEM_CURR_TOKEN'];
        };
        System.getClientPk = function () {
            return this.getSessionDataKey('ClientPk');
        };
        System.getAppUser = function () {
            return this.getSessionDataKey('AppDbUser');
        };
        System.getSessionDataKey = function (SessionKey) {
			if (window['TS_LOGIN_INFO']) {
				var sessionInfo = tserp.utils.Json.parse(window['TS_LOGIN_INFO']);
				if (sessionInfo) {
					var SessionVal = sessionInfo[SessionKey];
					if (SessionVal) {
						return SessionVal;
					}
					else {
						alert('Invalid login session value. Please login again');
						top.window.location.href = 'login.aspx';
					}
				}
				else {
					alert('Invalid login session. Please login again');
					top.window.location.href = 'login.aspx';
				}
			}
            return null;
        };
        Object.defineProperty(System, "S_Lang", {
            get: function () {
                return '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(System, "ctx", {
            get: function () {
                return this._ctx;
            },
            set: function (val) {
                this._ctx = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(System, "UrlExt", {
            get: function () {
                return this._UrlExt;
            },
            set: function (value) {
                this._UrlExt = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(System, "SysImgPath", {
            get: function () {
                return '';
            },
            set: function (val) {
            },
            enumerable: true,
            configurable: true
        });
        System.Trim = function (sent) {
            var S = new String(sent);
            S = S.replace(/^\s+/, "");
            return S.replace(/\s+$/, "");
        };
        System.TrimHTMLSpace = function (sent) {
            return sent = sent.replace(/&nbsp;/g, "");
        };
        System.getMsgToShow = function (strMsg) {
            var _msg = strMsg;
            var _startIdx = strMsg.indexOf(':');
            if (_startIdx > -1) {
                var _endIdx = strMsg.indexOf('ORA-', _startIdx);
                if (_endIdx == -1) {
                    _endIdx = strMsg.length - 1;
                }
                _msg = System.Trim(strMsg.substr(_startIdx + 1, (_endIdx - _startIdx - 2))).replace(/(?:\\[n])+/g, "\r\n");
            }
            return _msg;
        };
        System.showLoadingProcess = function () {
            var _width;
            if (typeof top.window.innerWidth != 'undefined') {
                _width = top.window.innerWidth;
            }
            else if (typeof top.document.documentElement != 'undefined' && typeof top.document.documentElement.clientWidth != 'undefined' && top.document.documentElement.clientWidth != 0) {
                _width = top.document.documentElement.clientWidth;
            }
            else {
                _width = top.document.getElementsByTagName('body')[0].clientWidth;
            }
            var obj = top.document.getElementById('divProgress');
            if (obj) {
                obj.style.left = (_width - 50) + 'px';
                obj.style.display = '';
            }
            if (typeof window['getPopupId'] === 'function') {
                var l_popupId = window['getPopupId']();
                if (l_popupId) {
                    var l_img = top.document.getElementById('ajax_loading_' + l_popupId);
                    if (l_img) {
                        l_img.src = this.ctx + '/system/images/main/loading/ajax_loading_popup.gif';
                    }
                }
            }
        };
        System.hideLoadingProcess = function () {
            var obj = top.document.getElementById('divProgress');
            if (obj) {
                obj.style.display = 'none';
            }
            if (typeof window['getPopupId'] === 'function') {
                var l_popupId = window['getPopupId']();
                if (l_popupId) {
                    var l_img = top.document.getElementById('ajax_loading_' + l_popupId);
                    if (l_img) {
                        l_img.src = this.ctx + '/system/images/popup/window-icon.png';
                    }
                }
            }
        };
        System.getDataParam = function (clearData) {
            if (clearData === void 0) { clearData = true; }
            var tmpReturn = top.window['DataParam'];
            if (clearData == true) {
                top.window['DataParam'] = '';
            }
            return tmpReturn;
        };
        System.setDataParam = function (value) {
            top.window['DataParam'] = value;
        };
        System.getQueryParameter = function (parameterName) {
            var queryString = decodeURIComponent(window.location.search).substring(1);
            var parameterName = parameterName + "=";
            if (queryString.length > 0) {
                var begin = queryString.indexOf(parameterName);
                if (begin != -1) {
                    begin += parameterName.length;
                    var end = queryString.indexOf("&", begin);
                    if (end == -1) {
                        end = queryString.length;
                    }
                    return unescape(queryString.substring(begin, end));
                }
            }
            return "null";
        };
        System.getQueryParameterFromUrl = function (url, parameterName) {
            var queryString = url.substring(1);
            var parameterName = parameterName + "=";
            if (queryString.length > 0) {
                var begin = queryString.indexOf(parameterName);
                if (begin != -1) {
                    begin += parameterName.length;
                    var end = queryString.indexOf("&", begin);
                    if (end == -1) {
                        end = queryString.length;
                    }
                    return unescape(queryString.substring(begin, end));
                }
            }
            return "null";
        };
        System.parseJSON = function (strdata) {
            if (typeof strdata === "string") {
                return $.parseJSON(strdata);
            }
            else {
                return strdata;
            }
        };
        System.getLangDataFromDB = function (lang, objLangData) {
            if (lang == 'VIE') {
                return objLangData.msg_vie;
            }
            else if (lang == 'ENG') {
                return objLangData.msg_eng;
            }
            else if (lang == 'KOR') {
                return objLangData.msg_kor;
            }
            return objLangData.data_field;
        };
        System.TranslateLanguage = function (objid, langfromto) {
            if (objid == undefined) {
                objid = System.getQueryParameterFromUrl(window.location.href, 'objId');
            }
            if (window["pageLangData_" + objid] == '')
                return;
            window["pageLangData_" + objid] = this.parseJSON(window["pageLangData_" + objid]);
            var fromLang = langfromto.split("2")[0];
            var toLang = langfromto.split("2")[1];
            if (window['pageLangData_' + objid] == undefined)
                return;
            var regData = window['pageLangData_' + objid].objcurdatas[0];
            if (regData.totalrows == 0)
                return;
            if (toLang == fromLang)
                return;
            for (var prop in window) {
                if (!/webkitStorageInfo|webkitIndexedDB/.test(prop)) {
                    if (window[prop]) {
                        if (window[prop] instanceof tserp.input.Label) {
                            var _label = window[prop];
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _label.value && _label.value != '') {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _label.value = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                        }
                        if (window[prop] instanceof tserp.input.TextBox) {
                            var _textbox = window[prop];
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _textbox.placeholder && _textbox.placeholder != '') {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _textbox.placeholder = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                        }
                        if (window[prop] instanceof tserp.input.Icon) {
                            var _icon = window[prop];
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _icon.title && _icon.title != '') {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _icon.title = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                        }
                        if (window[prop] instanceof tserp.input.Button) {
                            var _button = window[prop];
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _button.value) {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _button.value = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _button.title) {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _button.title = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                        }
                        if (window[prop] instanceof tserp.contain.Tab2) {
                            var _tab = window[prop];
                            for (var h = 0; h < regData.records.length; h++) {
                                if (this.getLangDataFromDB(fromLang, regData.records[h]) == _tab) {
                                    var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                    if (_tmpLangData != '') {
                                        _tab = _tmpLangData;
                                        break;
                                    }
                                }
                            }
                        }
                        if (window[prop] instanceof tserp.contain.Panel) {
                            var _panel = window[prop];
                            if (_panel) {
                                _panel.TranslateLanguage(langfromto);
                            }
                        }
                        if (window[prop] instanceof tserp.grid.FlexGrid) {
                            var _grid = window[prop];
                            var _hastranslate = 0;
                            for (var rh = 0; rh < _grid.columnHeaders.rows.length; rh++) {
                                for (var ch = 0; ch < _grid.columnHeaders.columns.length; ch++) {
                                    var _gCellData = _grid.columnHeaders.getCellData(rh, ch, false);
                                    for (var h = 0; h < regData.records.length; h++) {
                                        if (this.getLangDataFromDB(fromLang, regData.records[h]) == _gCellData) {
                                            var _tmpLangData = this.getLangDataFromDB(toLang, regData.records[h]);
                                            if (_tmpLangData != '') {
                                                _grid.columnHeaders.setCellData(rh, ch, _tmpLangData);
                                                _hastranslate = _hastranslate + 1;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            if (_hastranslate > 0) {
                                _grid.refresh();
                            }
                        }
                    }
                }
            }
        };
        System.langDataSet = function (langData, newVal, addNoCheck) {
            if (addNoCheck === void 0) { addNoCheck = false; }
            if (langData == null)
                return;
            if (langData.records == null)
                return;
            if (addNoCheck == true) {
                langData.records.push({
                    "pk": newVal.pk,
                    "tco_bsobj_id": newVal.tco_bsobj_id,
                    "data_field": newVal.data_field,
                    "english": newVal.english,
                    "vietnamese": newVal.vietnamese,
                    "korean": newVal.korean,
                    "chinese": newVal.chinese,
                    "japanese": newVal.japanese,
                    "french": newVal.french,
                    "remark": newVal.remark,
                    "type_dic": newVal.type_dic,
                    "_gwStatus_": newVal._gwStatus_
                });
            }
            else {
                var tmpCount = 0;
                for (var l = 0; l < langData.records.length; l++) {
                    if (langData.records[l].data_field == newVal.data_field) {
                        tmpCount = tmpCount + 1;
                    }
                }
                if (tmpCount == 0) {
                    langData.records.push({
                        "pk": newVal.pk,
                        "tco_bsobj_id": newVal.tco_bsobj_id,
                        "data_field": newVal.data_field,
                        "english": newVal.english,
                        "vietnamese": newVal.vietnamese,
                        "korean": newVal.korean,
                        "chinese": newVal.chinese,
                        "japanese": newVal.japanese,
                        "french": newVal.french,
                        "remark": newVal.remark,
                        "type_dic": newVal.type_dic,
                        "_gwStatus_": newVal._gwStatus_
                    });
                }
            }
        };
        System.GetDataLanguage = function (objid, regData, langData) {
            var tags = new Array;
            var data = new Array;
            var str_return = "";
            var str_temp = "";
            var tmpData;
            var tmpCount = 0;
            var tmpCount2 = 0;
            if (regData != null) {
                for (var h = 0; h < regData.records.length; h++) {
                    tmpData = {
                        "pk": regData.records[h].pk,
                        "tco_bsobj_id": objid,
                        "data_field": regData.records[h].data_field,
                        "english": regData.records[h].eng_desc,
                        "vietnamese": regData.records[h].vie_desc,
                        "korean": regData.records[h].kor_desc,
                        "chinese": regData.records[h].china_desc,
                        "japanese": regData.records[h].japan_desc,
                        "french": regData.records[h].fra_desc,
                        "remark": regData.records[h].remark,
                        "type_dic": regData.records[h].type_dic,
                        "_gwStatus_": regData.records[h]._gwStatus_
                    };
                    this.langDataSet(langData, tmpData, true);
                }
            }
            for (var prop in window) {
                if (!/webkitStorageInfo|webkitIndexedDB/.test(prop)) {
                    if (window[prop]) {
                        if (window[prop] instanceof tserp.input.Label) {
                            var _label = window[prop];
                            tmpCount = 0;
                            if (regData != null) {
                                for (var h = 0; h < regData.records.length; h++) {
                                    if (regData.records[h].data_field == _label.text && _label.text != '') {
                                        tmpCount = tmpCount + 1;
                                    }
                                }
                            }
                            if (tmpCount == 0 && _label.text != '') {
                                tmpData = {
                                    "pk": 0,
                                    "tco_bsobj_id": objid,
                                    "data_field": _label.text,
                                    "english": _label.text,
                                    "vietnamese": "",
                                    "korean": "",
                                    "chinese": "",
                                    "japanese": "",
                                    "french": "",
                                    "remark": "",
                                    "type_dic": "form",
                                    "_gwStatus_": tserp.DataStatus.Added
                                };
                                this.langDataSet(langData, tmpData);
                            }
                        }
                        if (window[prop] instanceof tserp.input.TextBox) {
                            var _textbox = window[prop];
                            tmpCount = 0;
                            if (regData != null) {
                                for (var h = 0; h < regData.records.length; h++) {
                                    if (regData.records[h].data_field == _textbox.placeholder && _textbox.placeholder != '') {
                                        tmpCount = tmpCount + 1;
                                    }
                                }
                            }
                            if (tmpCount == 0 && _textbox.placeholder != '') {
                                tmpData = {
                                    "pk": 0,
                                    "tco_bsobj_id": objid,
                                    "data_field": _textbox.placeholder,
                                    "english": _textbox.placeholder,
                                    "vietnamese": "",
                                    "korean": "",
                                    "chinese": "",
                                    "japanese": "",
                                    "french": "",
                                    "remark": "",
                                    "type_dic": "form",
                                    "_gwStatus_": tserp.DataStatus.Added
                                };
                                this.langDataSet(langData, tmpData);
                            }
                        }
                        if (window[prop] instanceof tserp.input.Icon) {
                            var _icon = window[prop];
                            tmpCount = 0;
                            if (regData != null) {
                                for (var h = 0; h < regData.records.length; h++) {
                                    if (regData.records[h].data_field == _icon.title && _icon.title != '') {
                                        tmpCount = tmpCount + 1;
                                    }
                                }
                            }
                            if (tmpCount == 0 && _icon.title != '') {
                                tmpData = {
                                    "pk": 0,
                                    "tco_bsobj_id": objid,
                                    "data_field": _icon.title,
                                    "english": _icon.title,
                                    "vietnamese": "",
                                    "korean": "",
                                    "chinese": "",
                                    "japanese": "",
                                    "french": "",
                                    "remark": "",
                                    "type_dic": "form",
                                    "_gwStatus_": tserp.DataStatus.Added
                                };
                                this.langDataSet(langData, tmpData);
                            }
                        }
                        if (window[prop] instanceof tserp.input.Button) {
                            var _button = window[prop];
                            tmpCount = 0;
                            tmpCount2 = 0;
                            if (regData != null) {
                                for (var h = 0; h < regData.records.length; h++) {
                                    if (regData.records[h].data_field == _button.value && _button.value != '') {
                                        tmpCount = tmpCount + 1;
                                    }
                                    if (regData.records[h].data_field == _button.title && _button.title != '') {
                                        tmpCount2 = tmpCount2 + 1;
                                    }
                                }
                            }
                            if (tmpCount == 0 && _button.value != '') {
                                tmpData = {
                                    "pk": 0,
                                    "tco_bsobj_id": objid,
                                    "data_field": _button.value,
                                    "english": _button.value,
                                    "vietnamese": "",
                                    "korean": "",
                                    "chinese": "",
                                    "japanese": "",
                                    "french": "",
                                    "remark": "",
                                    "type_dic": "form",
                                    "_gwStatus_": tserp.DataStatus.Added
                                };
                                this.langDataSet(langData, tmpData);
                            }
                            if (tmpCount2 == 0 && _button.title != '') {
                                tmpData = {
                                    "pk": 0,
                                    "tco_bsobj_id": objid,
                                    "data_field": _button.title,
                                    "english": _button.title,
                                    "vietnamese": "",
                                    "korean": "",
                                    "chinese": "",
                                    "japanese": "",
                                    "french": "",
                                    "remark": "",
                                    "type_dic": "form",
                                    "_gwStatus_": tserp.DataStatus.Added
                                };
                                this.langDataSet(langData, tmpData);
                            }
                        }
                        if (window[prop] instanceof tserp.grid.FlexGrid) {
                            var _grid = window[prop];
                            tmpCount = 0;
                            for (var rh = 0; rh < _grid.columnHeaders.rows.length; rh++) {
                                for (var ch = 0; ch < _grid.columnHeaders.columns.length; ch++) {
                                    var _gCellData = _grid.columnHeaders.getCellData(rh, ch, false);
                                    if (regData != null) {
                                        for (var h = 0; h < regData.records.length; h++) {
                                            if (regData.records[h].data_field == _gCellData && _gCellData != '') {
                                                tmpCount = tmpCount + 1;
                                            }
                                        }
                                    }
                                    if (tmpCount == 0 && _gCellData != '' && _gCellData != '_gwStatus_') {
                                        tmpData = {
                                            "pk": 0,
                                            "tco_bsobj_id": objid,
                                            "data_field": _gCellData,
                                            "english": _gCellData,
                                            "vietnamese": "",
                                            "korean": "",
                                            "chinese": "",
                                            "japanese": "",
                                            "french": "",
                                            "remark": "",
                                            "type_dic": "form",
                                            "_gwStatus_": tserp.DataStatus.Added
                                        };
                                        this.langDataSet(langData, tmpData);
                                    }
                                    tmpCount = 0;
                                }
                            }
                        }
                    }
                }
            }
        };
        System.ClosePopup = function (doc) {
            var l_popupId = doc.getPopupId();
            if (l_popupId == undefined || l_popupId == '') {
                alert('Khong the dong popup, vui long kiem tra voi developer');
            }
            else {
                if (top.window[l_popupId]) {
                    top.window[l_popupId].hide();
                }
            }
        };
        System.OpenModal = function (url, width, height, wtile, caller, fnclosecallback, opt) {
            if (typeof top.window['TopOpenModal'] === 'function') {
                top.window['TopOpenModal'](url, width, height, wtile, caller, fnclosecallback, opt);
            }
            else {
                this.OpenModalNew(url, width, height, wtile, caller, fnclosecallback, opt);
            }
        };
        System.OpenModalNew = function (url, width, height, wtile, caller, fnclosecallback, opt) {
            if (wtile == undefined || wtile == '' || wtile == null) {
                wtile = 'GSF window title';
            }
            if (System.S_Lang != "ENG") {
                var sIdx = url.lastIndexOf("/");
                var eIdx = url.indexOf(".aspx");
                var popup_id = url.substr(sIdx + 1, eIdx - sIdx - 1);
            }
            var d = this.js_yyyy_mm_dd_hh_mm_ss();
            if (url.indexOf("?") == -1)
                url += "?random=" + d;
            else
                url += "&random=" + d;
            var s = "";
            if (width == 0 || width == undefined)
                width = 300;
            if (height == 0 || height == undefined)
                height = 300;
            if (width > document.body.clientWidth)
                width = document.body.clientWidth - 20;
            if (height > document.body.clientHeight)
                height = document.body.clientHeight - 30;
            var iframeHeight = height - 40;
            if (opt) {
                if (opt.showFooter == true) {
                    iframeHeight = height - 100;
                }
            }
            var objId = System.getQueryParameterFromUrl(url, 'objId');
            var popupId = url.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            popupId = popupId.split(' ').join('') + '_' + this.getCurrentDate(new Date());
            url += "&popupId=" + popupId;
            var strHtml = '<div id="' + popupId + '" class="ts-control ts-content ts-popup ts-state-empty ts-state-invalid ts-state-focused" style="height: ' + height + 'px;  width: ' + width + 'px; display:none;" >' +
                '<h4 id="windowHeader" class="modal-header">' +
                '<span>' +
                '<img height="24px" id="ajax_loading_' + popupId + '" src="' + this.ctx + '/system/images/popup/window-icon.png" alt="" style="margin-right: 5px" />' +
                '<label style="position: relative;top: -8;">' + wtile + '</label>' +
                '<span style="position: relative;top: -3;"> <a href="javascript:void(0);" onclick="onDictionaryPopup(\'' + objId + '\', \'ifrDriver_' + popupId + '\');" title="Open Dictionary">' +
                '<img src="' + this.ctx + '/system/images/core/icon-dict.png" height="24px"/></a></span> ' +
                '</span>';
            if (opt) {
                if (opt.showCloseButton == false) {
                }
                else {
                    strHtml += '<button type="button" tabindex="-1" class="close wj-hide ts-hide">×</button>';
                }
            }
            else {
                strHtml += '<button type="button" tabindex="-1" class="close wj-hide ts-hide">×</button>';
            }
            strHtml += '</h4>' +
                '<div id="windowContent" class="modal-body" style="height: ' + (iframeHeight) + 'px;">' +
                '<iframe class="iframe-placeholder" style="width:100%; height:100%;"   src="' + ((url.startsWith(System.ctx))? url : (System.ctx + url)) + '"></iframe>' +
                '</div>';
            if (opt) {
                if (opt.showFooter) {
                    strHtml = strHtml + '<div id="windowFooter" class="modal-footer" >' +
                        '<button class="btn btn-primary" type="submit">Create Account</button>' +
                        '</div>';
                }
            }
            strHtml = strHtml + '</div>';
            document.body.insertAdjacentHTML('beforeend', strHtml);
            var popup = new wijmo.input.Popup('#' + popupId, {
                hideTrigger: wijmo.input.PopupTrigger.None
            });
            popup.hidden.addHandler(function (obj) {
                if (fnclosecallback) {
                    fnclosecallback();
                }
            }, popup);
            window[popupId] = popup;
            popup.show(true);
        };
        System.openwindow = function (url, params, wtile, otype, woption, caller, fnclosecallback) {
            var _u = url;
            if (!url.startsWith(this.ctx)) {
                _u = this.ctx + url;
            }
            if (String(otype).toLowerCase() == 'post') {
                var winName = wtile;
                var winURL = _u;
                var windowoption = 'resizable=yes,height=600,width=800,location=0,menubar=0,scrollbars=1';
                if (woption != undefined) {
                    windowoption = woption;
                }
                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", winURL);
                form.setAttribute("target", winName);
                for (var i in params) {
                    if (params.hasOwnProperty(i)) {
                        var input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = i;
                        input.value = params[i];
                        form.appendChild(input);
                    }
                }
                document.body.appendChild(form);
                window.open('', winName, windowoption);
                form.target = winName;
                form.submit();
                document.body.removeChild(form);
            }
            else {
                window.open(_u);
            }
        };
        System.AppLogout = function () {
            top.window.location.href = this.ctx + '/system/logout' + this.UrlExt;
        };
        System.OpenPage = function (url) {
            window.open(url);
        };
        System.OpenTargetPage = function (url, target) {
            var d = new Date();
            if (url.indexOf("?") == -1)
                url += "?random=" + d;
            else
                url += "&random=" + d;
            window.open(url, target);
        };
        Object.defineProperty(System, "JsRender", {
            get: function () {
                return tserp.JsRender;
            },
            enumerable: true,
            configurable: true
        });
        System.CDelimiter = "|!";
        System.RDelimiter = "|@";
        System._UrlExt = '.gw';
        System._ctx = '';
        return System;
    }());
    tserp.System = System;
    var JsRender = (function () {
        function JsRender() {
        }
        JsRender.GetTemplate = function (element) {
            var el;
            if (typeof (element) == 'string') {
                el = document.getElementById(element);
            }
            else {
                el = element;
            }
            return el.innerHTML;
        };
        JsRender.BuildHtmlFromTemplate = function (element, data) {
            var $ = window.jsrender;
            var markup = JsRender.GetTemplate(element);
            var tmpl = $.templates(markup);
            var html = tmpl.render(data);
            return html;
        };
        return JsRender;
    }());
    tserp.JsRender = JsRender;
})(tserp || (tserp = {}));
var System = tserp.System;
//# sourceMappingURL=system.js.map