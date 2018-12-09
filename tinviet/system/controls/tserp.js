var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tserp;
(function (tserp) {
    var Aggregate;
    (function (Aggregate) {
        Aggregate[Aggregate["None"] = 0] = "None";
        Aggregate[Aggregate["Sum"] = 1] = "Sum";
        Aggregate[Aggregate["Cnt"] = 2] = "Cnt";
        Aggregate[Aggregate["Avg"] = 3] = "Avg";
        Aggregate[Aggregate["Max"] = 4] = "Max";
        Aggregate[Aggregate["Min"] = 5] = "Min";
        Aggregate[Aggregate["Rng"] = 6] = "Rng";
        Aggregate[Aggregate["Std"] = 7] = "Std";
        Aggregate[Aggregate["Var"] = 8] = "Var";
        Aggregate[Aggregate["StdPop"] = 9] = "StdPop";
        Aggregate[Aggregate["VarPop"] = 10] = "VarPop";
    })(Aggregate = tserp.Aggregate || (tserp.Aggregate = {}));
    var DataType;
    (function (DataType) {
        DataType[DataType["Object"] = 0] = "Object";
        DataType[DataType["String"] = 1] = "String";
        DataType[DataType["Number"] = 2] = "Number";
        DataType[DataType["Boolean"] = 3] = "Boolean";
        DataType[DataType["Date"] = 4] = "Date";
        DataType[DataType["Array"] = 5] = "Array";
    })(DataType = tserp.DataType || (tserp.DataType = {}));
    var DataStatus;
    (function (DataStatus) {
        DataStatus[DataStatus["Normal"] = 10] = "Normal";
        DataStatus[DataStatus["Added"] = 20] = "Added";
        DataStatus[DataStatus["Edited"] = 30] = "Edited";
        DataStatus[DataStatus["Deleted"] = 40] = "Deleted";
    })(DataStatus = tserp.DataStatus || (tserp.DataStatus = {}));
    function tryCast(value, type) {
        if (value == null) {
            return null;
        }
        if (isString(type)) {
            return isFunction(value.implementsInterface) && value.implementsInterface(type) ? value : null;
        }
        return value instanceof type ? value : null;
    }
    tserp.tryCast = tryCast;
    function setCss(e, css) {
        wijmo.setCss(e, css);
    }
    tserp.setCss = setCss;
    function hasClass(e, className) {
        return wijmo.hasClass(e, className);
    }
    tserp.hasClass = hasClass;
    function removeClass(e, className) {
        wijmo.removeClass(e, className);
    }
    tserp.removeClass = removeClass;
    function addClass(e, className) {
        wijmo.addClass(e, className);
    }
    tserp.addClass = addClass;
    function asString(value, nullOK) {
        if (nullOK === void 0) { nullOK = true; }
        return wijmo.asString(value, nullOK);
    }
    tserp.asString = asString;
    function asBoolean(value, nullOK) {
        if (nullOK === void 0) { nullOK = false; }
        wijmo.assert((nullOK && value == null) || isBoolean(value), 'Boolean expected.');
        return wijmo.asBoolean(value, nullOK);
    }
    tserp.asBoolean = asBoolean;
    function isString(value) {
        return wijmo.isString(value);
    }
    tserp.isString = isString;
    function isNullOrWhiteSpace(value) {
        return wijmo.isNullOrWhiteSpace(value);
    }
    tserp.isNullOrWhiteSpace = isNullOrWhiteSpace;
    function isNumber(value) {
        return wijmo.isNumber(value);
    }
    tserp.isNumber = isNumber;
    function isInt(value) {
        return wijmo.isInt(value);
    }
    tserp.isInt = isInt;
    function isBoolean(value) {
        return wijmo.isBoolean(value);
    }
    tserp.isBoolean = isBoolean;
    function isFunction(value) {
        return wijmo.isFunction(value);
    }
    tserp.isFunction = isFunction;
    function isUndefined(value) {
        return wijmo.isUndefined(value);
    }
    tserp.isUndefined = isUndefined;
    function isDate(value) {
        return wijmo.isDate(value);
    }
    tserp.isDate = isDate;
    function isArray(value) {
        return wijmo.isArray(value);
    }
    tserp.isArray = isArray;
    function isObject(value) {
        return wijmo.isObject(value);
    }
    tserp.isObject = isObject;
    function getElement(selector) {
        return wijmo.getElement(selector);
    }
    tserp.getElement = getElement;
    function createElement(html) {
        return wijmo.createElement(html);
    }
    tserp.createElement = createElement;
    function isMobile() {
        return wijmo.isMobile();
    }
    tserp.isMobile = isMobile;
    function setText() { }
    tserp.setText = setText;
    var Globalize = (function (_super) {
        __extends(Globalize, _super);
        function Globalize() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Globalize;
    }(wijmo.Globalize));
    tserp.Globalize = Globalize;
    var Event = (function (_super) {
        __extends(Event, _super);
        function Event() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Event;
    }(wijmo.Event));
    tserp.Event = Event;
    var EventArgs = (function (_super) {
        __extends(EventArgs, _super);
        function EventArgs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EventArgs;
    }(wijmo.EventArgs));
    tserp.EventArgs = EventArgs;
    var CellsRendererEventArgs = (function (_super) {
        __extends(CellsRendererEventArgs, _super);
        function CellsRendererEventArgs() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rowData = {};
            _this.cellValue = null;
            _this.rowIdx = -1;
            _this.colIdx = -1;
            return _this;
        }
        return CellsRendererEventArgs;
    }(EventArgs));
    tserp.CellsRendererEventArgs = CellsRendererEventArgs;
    var CellsClassNameEventArgs = (function (_super) {
        __extends(CellsClassNameEventArgs, _super);
        function CellsClassNameEventArgs() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rowData = {};
            _this.cellValue = null;
            _this.cellHtml = null;
            _this.rowIdx = -1;
            _this.colIdx = -1;
            return _this;
        }
        return CellsClassNameEventArgs;
    }(EventArgs));
    tserp.CellsClassNameEventArgs = CellsClassNameEventArgs;
    var TabEventArgs = (function (_super) {
        __extends(TabEventArgs, _super);
        function TabEventArgs() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.TabIdx = -1;
            return _this;
        }
        return TabEventArgs;
    }(EventArgs));
    tserp.TabEventArgs = TabEventArgs;
    var TreeNodeEventArgs = (function (_super) {
        __extends(TreeNodeEventArgs, _super);
        function TreeNodeEventArgs() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nodeData = {};
            return _this;
        }
        return TreeNodeEventArgs;
    }(EventArgs));
    tserp.TreeNodeEventArgs = TreeNodeEventArgs;
    var Control = (function (_super) {
        __extends(Control, _super);
        function Control(element, options, invalidateOnResize) {
            if (options === void 0) { options = null; }
            if (invalidateOnResize === void 0) { invalidateOnResize = false; }
            var _this = _super.call(this, element, options, invalidateOnResize) || this;
            _this.id = '';
            _this.id = _this.hostElement.id;
            if (_this.hostElement.id) {
                _this.id = tserp.utils.EsysMath.uuidFast();
            }
            return _this;
        }
        Control.prototype.applyTemplate = function (classNames, template, parts, namePart) {
            if (classNames) {
                addClass(this.hostElement, classNames);
            }
            var tpl = null;
            if (template) {
                tpl = createElement(template);
                if (this._orgTag == 'BUTTON') {
                    this.hostElement.innerHTML = '';
                }
                tpl = this.hostElement.appendChild(tpl);
            }
            if (parts) {
                for (var part in parts) {
                    var wjPart = parts[part];
                    this[part] = tpl.querySelector('[ts-part="' + wjPart + '"]');
                    if (this[part] == null && tpl.getAttribute('ts-part') == wjPart) {
                        this[part] = tpl;
                    }
                    if (this[part] == null) {
                        throw 'Missing template part: "' + wjPart + '"';
                    }
                    if (wjPart == namePart) {
                        var att = this.hostElement.attributes['name'];
                        if (att && att.value) {
                            this[part].setAttribute('name', att.value);
                        }
                        att = this.hostElement.attributes['accesskey'];
                        if (att && att.value) {
                            this[part].setAttribute('accesskey', att.value);
                            this.hostElement.removeAttribute('accesskey');
                        }
                    }
                }
            }
            return tpl;
        };
        Control.prototype._copyOriginalAttributes = function (e) {
            var atts = this._orgAtts;
            if (atts) {
                for (var i = 0; i < atts.length; i++) {
                    var name = atts[i].name;
                    if (name != 'id' && name != 'style') {
                        if (name == 'class') {
                            var _tmpdefval = e.getAttribute(name);
                            if (_tmpdefval) {
                                e.setAttribute(name, _tmpdefval + ' ' + atts[i].value);
                            }
                            else {
                                e.setAttribute(name, atts[i].value);
                            }
                        }
                        else {
                            e.setAttribute(name, atts[i].value);
                        }
                    }
                }
            }
        };
        Control.prototype.GetData = function () {
            return null;
        };
        Control.prototype.SetData = function (data) {
        };
        Control.prototype.SetDataText = function (data) {
        };
        Control.prototype.SetEnable = function (bEnable) {
            this.isDisabled = !bEnable;
        };
        Control.prototype.GetEnable = function () {
            return this.isDisabled;
        };
        Control.prototype.GetControl = function () {
            return this;
        };
        return Control;
    }(wijmo.Control));
    tserp.Control = Control;
    var Ajax = (function () {
        function Ajax(op) {
            this._options = null;
        }
        Ajax.setCtx = function (val) {
            this._ctx = val;
        };
        Ajax.getBoundary = function () {
            return '-----------------------------' + Math.floor(Math.random() * Math.pow(10, 8));
        };
        Ajax.SendData = function (_func, xmlobj, dsotype, doc, callback, callbackerror) {
            this._url = this._ctx + 'system/DSOHandler.ashx?dso_type=' + dsotype + '&action=' + _func;
            this.SendRequest(this._url, callback, xmlobj, callbackerror);
        };
        Ajax.SendRequest2 = function (url, options) {
            tserp.System.showLoadingProcess();
            var xhttp = this.createXMLHTTPObject();
            if (xhttp == null)
                return;
            if (options == null) {
                options = {
                    method: 'POST'
                };
            }
            else {
                if (options.method == null) {
                    options.method = 'POST';
                }
            }
            if (options.contentType == null) {
                options.contentType = 'application/xml';
            }
            xhttp.open(options.method, url, true);
            if (options.responseType) {
                xhttp.responseType = options.responseType;
            }
            xhttp.setRequestHeader('Content-type', options.contentType);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState != 4)
                    return;
                if (xhttp.status != 200 && xhttp.status != 304) {
                    if (typeof options.callbackerror === 'function') {
                        if (options.getResponse) {
                            options.callbackerror(xhttp);
                        }
                        else {
                            options.callbackerror(xhttp.responseText);
                        }
                    }
                    return;
                }
                if (typeof options.callback === 'function') {
                    if (options.getResponse) {
                        options.callback(xhttp);
                    }
                    else {
                        options.callback(xhttp.responseText);
                    }
                }
                tserp.System.hideLoadingProcess();
            };
            if (xhttp.readyState == 4)
                return;
            xhttp.send(options.postData);
        };
        Ajax.SendRequest = function (url, callback, postData, callbackerror) {
            tserp.System.showLoadingProcess();
            var xhttp = this.createXMLHTTPObject();
            if (xhttp == null)
                return;
            var method = (postData) ? "POST" : "GET";
            xhttp.open(method, url, true);
            if (postData) {
                xhttp.setRequestHeader('Content-type', 'application/xml');
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState != 4)
                    return;
                if (xhttp.status != 200 && xhttp.status != 304) {
                    if (typeof callbackerror === 'function') {
                        callbackerror(xhttp.responseText);
                    }
                    return;
                }
                if (typeof callback === 'function') {
                    callback(xhttp.responseText);
                }
                tserp.System.hideLoadingProcess();
            };
            if (xhttp.readyState == 4)
                return;
            xhttp.send(postData);
        };
        Ajax.createXMLHTTPObject = function () {
            var xmlhttp = null;
            for (var i = 0; i < this.XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = this.XMLHttpFactories[i]();
                }
                catch (e) {
                    continue;
                }
                break;
            }
            return xmlhttp;
        };
        Ajax._ctx = '/';
        Ajax.XMLHttpFactories = [
            function () { return new XMLHttpRequest(); },
            function () { return new ActiveXObject("Msxml2.XMLHTTP"); },
            function () { return new ActiveXObject("Msxml3.XMLHTTP"); },
            function () { return new ActiveXObject("Microsoft.XMLHTTP"); }
        ];
        return Ajax;
    }());
    tserp.Ajax = Ajax;
})(tserp || (tserp = {}));
(function (tserp) {
    var utils;
    (function (utils) {
        var EsysMath = (function () {
            function EsysMath() {
            }
            EsysMath.uuid = function (len, radix) {
                var chars = this.CHARS, uuid = [], i;
                radix = radix || chars.length;
                if (len) {
                    for (i = 0; i < len; i++)
                        uuid[i] = chars[0 | Math.random() * radix];
                }
                else {
                    var r;
                    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                    uuid[14] = '4';
                    for (i = 0; i < 36; i++) {
                        if (!uuid[i]) {
                            r = 0 | Math.random() * 16;
                            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                        }
                    }
                }
                return uuid.join('');
            };
            EsysMath.uuidCompact = function () {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };
            EsysMath.CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            EsysMath.uuidFast = function () {
                var chars = this.CHARS, uuid = new Array(36), rnd = 0, r;
                for (var i = 0; i < 36; i++) {
                    if (i == 8 || i == 13 || i == 18 || i == 23) {
                        uuid[i] = '-';
                    }
                    else if (i == 14) {
                        uuid[i] = '4';
                    }
                    else {
                        if (rnd <= 0x02)
                            rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                        r = rnd & 0xf;
                        rnd = rnd >> 4;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
                return uuid.join('');
            };
            return EsysMath;
        }());
        utils.EsysMath = EsysMath;
        function addEvent(element, evnt, funct) {
            if (element.attachEvent)
                return element.attachEvent('on' + evnt, funct);
            else
                return element.addEventListener(evnt, funct, false);
        }
        utils.addEvent = addEvent;
        var Converter = (function () {
            function Converter() {
            }
            Converter.ObjectToString = function (obj, defVal) {
                if (obj == null || obj == undefined)
                    return defVal;
                return obj.toString();
            };
            Converter.BooleanToString = function (obj, defVal) {
                if (obj == null || obj == undefined)
                    return defVal;
                if (obj == true)
                    return 'Y';
                if (obj == false)
                    return 'N';
                return obj.toString();
            };
            Converter.ObjectToFloat = function (obj, defVal) {
                if (obj == null || obj == undefined)
                    return defVal;
                return parseFloat(obj);
            };
            Converter.ObjectToBoolean = function (obj, defVal) {
                if (defVal === void 0) { defVal = false; }
                if (obj == null)
                    return defVal;
                if (typeof obj === 'boolean') {
                    if (obj === true)
                        return true;
                    return false;
                }
                if (typeof obj === 'string') {
                    if (obj == "") {
                        return defVal;
                    }
                    obj = obj.replace(/^\s+|\s+$/g, '');
                    if (obj.toLowerCase() == 'true' || obj.toLowerCase() == 'yes' || obj.toLowerCase() == 't' || obj.toLowerCase() == 'y')
                        return true;
                    obj = obj.replace(/,/g, '.');
                    obj = obj.replace(/^\s*\-\s*/g, '-');
                }
                if (!isNaN(obj))
                    return (parseFloat(obj) != 0);
                return false;
            };
            Converter.HTMLReserved = function (htmlStrEncode) {
                var re;
                var s = htmlStrEncode;
                re = />/g;
                s = s.replace(re, "&gt;");
                re = /</g;
                s = s.replace(re, "&lt;");
                return s;
            };
            return Converter;
        }());
        utils.Converter = Converter;
        var Dom = (function () {
            function Dom() {
            }
            Dom.ie = function () {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                }
                var trident = ua.indexOf('Trident/');
                if (trident > 0) {
                    var rv = ua.indexOf('rv:');
                    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                }
                var edge = ua.indexOf('Edge/');
                if (edge > 0) {
                    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                }
                return undefined;
            };
            Dom.hide = function (sel) {
                this.hideElements(this.getElements(sel));
            };
            Dom.show = function (sel, a) {
                var elements = this.getElements(sel);
                if (a) {
                    this.hideElements(elements);
                }
                this.showElements(elements);
            };
            Dom.toggleClass = function (sel, c1, c2) {
                this.toggleClassElements(this.getElements(sel), c1, c2);
            };
            Dom.toggleClassElements = function (elements, c1, c2) {
                var i, l = elements.length;
                for (i = 0; i < l; i++) {
                    this.toggleClassElement(elements[i], c1, c2);
                }
            };
            Dom.toggleClassElement = function (element, c1, c2) {
                var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
                t1 = (c1 || "");
                t2 = (c2 || "");
                t1Arr = t1.split(" ");
                t2Arr = t2.split(" ");
                arr = element.className.split(" ");
                if (t2Arr.length == 0) {
                    allPresent = true;
                    for (j = 0; j < t1Arr.length; j++) {
                        if (arr.indexOf(t1Arr[j]) == -1) {
                            allPresent = false;
                        }
                    }
                    if (allPresent) {
                        this.removeClassElement(element, t1);
                    }
                    else {
                        this.addClassElement(element, t1);
                    }
                }
                else {
                    allPresent = true;
                    for (j = 0; j < t1Arr.length; j++) {
                        if (arr.indexOf(t1Arr[j]) == -1) {
                            allPresent = false;
                        }
                    }
                    if (allPresent) {
                        this.removeClassElement(element, t1);
                        this.addClassElement(element, t2);
                    }
                    else {
                        this.removeClassElement(element, t2);
                        this.addClassElement(element, t1);
                    }
                }
            };
            Dom.filterHTML = function (id, sel, filter) {
                var a, b, c, i, ii, iii, hit;
                a = this.getElements(id);
                for (i = 0; i < a.length; i++) {
                    b = this.getElements(sel);
                    for (ii = 0; ii < b.length; ii++) {
                        hit = 0;
                        if (b[ii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                            hit = 1;
                        }
                        c = b[ii].getElementsByTagName("*");
                        for (iii = 0; iii < c.length; iii++) {
                            if (c[iii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                                hit = 1;
                            }
                        }
                        if (hit == 1) {
                            b[ii].style.display = "";
                        }
                        else {
                            b[ii].style.display = "none";
                        }
                    }
                }
            };
            Dom.sortHTML = function (id, sel, sortvalue) {
                var a, b, i, ii, y, bytt, v1, v2, cc, j;
                a = this.getElements(id);
                for (i = 0; i < a.length; i++) {
                    for (j = 0; j < 2; j++) {
                        cc = 0;
                        y = 1;
                        while (y == 1) {
                            y = 0;
                            b = a[i].querySelectorAll(sel);
                            for (ii = 0; ii < (b.length - 1); ii++) {
                                bytt = 0;
                                if (sortvalue) {
                                    v1 = b[ii].querySelector(sortvalue).innerHTML.toLowerCase();
                                    v2 = b[ii + 1].querySelector(sortvalue).innerHTML.toLowerCase();
                                }
                                else {
                                    v1 = b[ii].innerHTML.toLowerCase();
                                    v2 = b[ii + 1].innerHTML.toLowerCase();
                                }
                                if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                                    bytt = 1;
                                    break;
                                }
                            }
                            if (bytt == 1) {
                                b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
                                y = 1;
                                cc++;
                            }
                        }
                        if (cc > 0) {
                            break;
                        }
                    }
                }
            };
            Dom.slideshow = function (sel, ms, func) {
                var i, ss, x = this.getElements(sel), l = x.length;
                ss = {};
                ss.current = 1;
                ss.x = x;
                ss.ondisplaychange = func;
                if (!isNaN(ms) || ms == 0) {
                    ss.milliseconds = ms;
                }
                else {
                    ss.milliseconds = 1000;
                }
                ss.start = function () {
                    ss.display(ss.current);
                    if (ss.ondisplaychange) {
                        ss.ondisplaychange();
                    }
                    if (ss.milliseconds > 0) {
                        window.clearTimeout(ss.timeout);
                        ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
                    }
                };
                ss.next = function () {
                    ss.current += 1;
                    if (ss.current > ss.x.length) {
                        ss.current = 1;
                    }
                    ss.start();
                };
                ss.previous = function () {
                    ss.current -= 1;
                    if (ss.current < 1) {
                        ss.current = ss.x.length;
                    }
                    ss.start();
                };
                ss.display = function (n) {
                    this.styleElements(ss.x, "display", "none");
                    this.styleElement(ss.x[n - 1], "display", "block");
                };
                ss.start();
                return ss;
            };
            Dom.getElements = function (id) {
                if (typeof id == "object") {
                    return [id];
                }
                else {
                    return document.querySelectorAll(id);
                }
            };
            Dom.getElementsByAttribute = function (x, att) {
                var arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
                l = y.length;
                for (i = -1; i < l; i += 1) {
                    if (i == -1) {
                        y[i] = x;
                    }
                    if (y[i].getAttribute(z) !== null) {
                        arrCount += 1;
                        arr[arrCount] = y[i];
                    }
                }
                return arr;
            };
            Dom.addStyle = function (sel, prop, val) {
                this.styleElements(this.getElements(sel), prop, val);
            };
            Dom.styleElement = function (element, prop, val) {
                element.style.setProperty(prop, val);
            };
            Dom.styleElements = function (elements, prop, val) {
                var i, l = elements.length;
                for (i = 0; i < l; i++) {
                    this.styleElement(elements[i], prop, val);
                }
            };
            Dom.hideElement = function (element) {
                this.styleElement(element, "display", "none");
            };
            Dom.hideElements = function (elements) {
                var i, l = elements.length;
                for (i = 0; i < l; i++) {
                    this.hideElement(elements[i]);
                }
            };
            Dom.showElement = function (element) {
                this.styleElement(element, "display", "");
            };
            Dom.showElements = function (elements) {
                var i, l = elements.length;
                for (i = 0; i < l; i++) {
                    this.showElement(elements[i]);
                }
            };
            Dom.width = function (element) {
                if (element) {
                    return element.style.width || element.offsetWidth;
                }
                return 0;
            };
            Dom.height = function (element) {
                if (element) {
                    return element.style.height || element.offsetHeight;
                }
                return 0;
            };
            Dom.getOriginalAttributes = function (targetId) {
                var e0 = document.getElementById(targetId);
                var _rs = '';
                var atts = e0.attributes;
                if (atts) {
                    for (var i = 0; i < atts.length; i++) {
                        var name = atts[i].name;
                        var _tmpdefval = e0.getAttribute(name);
                        if (_tmpdefval) {
                            _rs = _rs + ' ' + name + '="' + _tmpdefval + '" ';
                        }
                    }
                }
                return _rs;
            };
            Dom.replaceTargetWith = function (targetID, html) {
                var i, tmp, elm, last, target = document.getElementById(targetID);
                tmp = document.createElement(html);
                tmp.innerHTML = html;
                i = tmp.childNodes.length;
                last = target;
                while (i--) {
                    target.parentNode.insertBefore((elm = tmp.childNodes[i]), last);
                    last = elm;
                }
                target.parentNode.removeChild(target);
            };
            Dom.addClass = function (sel, name) {
                this.addClassElements(this.getElements(sel), name);
            };
            Dom.addClassElements = function (elements, name) {
                var i, l = elements.length;
                for (i = 0; i < l; i++) {
                    this.addClassElement(elements[i], name);
                }
            };
            Dom.addClassElement = function (element, name) {
                var i, arr1, arr2;
                arr1 = element.className.split(" ");
                arr2 = name.split(" ");
                for (i = 0; i < arr2.length; i++) {
                    if (arr1.indexOf(arr2[i]) == -1) {
                        element.className += " " + arr2[i];
                    }
                }
            };
            Dom.removeClass = function (sel, name) {
                this.removeClassElements(this.getElements(sel), name);
            };
            Dom.removeClassElements = function (elements, name) {
                var i, l = elements.length, arr1, arr2, j;
                for (i = 0; i < l; i++) {
                    this.removeClassElement(elements[i], name);
                }
            };
            Dom.removeClassElement = function (element, name) {
                var i, arr1, arr2;
                arr1 = element.className.split(" ");
                arr2 = name.split(" ");
                for (i = 0; i < arr2.length; i++) {
                    while (arr1.indexOf(arr2[i]) > -1) {
                        arr1.splice(arr1.indexOf(arr2[i]), 1);
                    }
                }
                element.className = arr1.join(" ");
            };
            return Dom;
        }());
        utils.Dom = Dom;
        var Json = (function () {
            function Json() {
            }
            Json.parse = function (strText) {
                return JSON.parse(strText);
            };
            Json.stringify = function (jsondata) {
                return JSON.stringify(jsondata);
            };
            return Json;
        }());
        utils.Json = Json;
        var Common = (function () {
            function Common() {
            }
            Common.GetIframeDocument = function (frame) {
                if (typeof frame.contentDocument != 'undefined') {
                    return frame.contentDocument;
                }
                else {
                    return frame.document;
                }
            };
            Common.GetIframeWindow = function (frame) {
                if (typeof frame.contentWindow != 'undefined') {
                    return frame.contentWindow;
                }
                else {
                    return frame.window;
                }
            };
            Common.createCookie = function (name, value, days) {
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toUTCString();
                }
                else
                    var expires = "";
                document.cookie = name + "=" + value + expires + "; path=/";
            };
            Common.readCookie = function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0)
                        return c.substring(nameEQ.length, c.length);
                }
                return null;
            };
            Common.eraseCookie = function (name) {
                this.createCookie(name, "", -1);
            };
            Common.addDays = function (date, days) {
                date.setDate(date.getDate() + days);
                return date;
            };
            Common.addMonths = function (date, months) {
                if (date && months) {
                    var m, d = (date = new Date(+date)).getUTCDate();
                    date.setUTCMonth(date.getUTCMonth() + months, 1);
                    m = date.getUTCMonth();
                    date.setUTCDate(d);
                    if (date.getUTCMonth() !== m)
                        date.setUTCDate(0);
                }
                return date;
            };
            Common.addYears = function (date, years) {
                if (date && years) {
                    var m, d = (date = new Date(+date)).getUTCDate();
                    date.setUTCFullYear(date.getUTCFullYear() + years, 1);
                    m = date.getUTCMonth();
                    date.setUTCDate(d);
                }
                return date;
            };
            Common.Round = function (value, dec) {
                return Math.round(value * Math.pow(10, dec)) / Math.pow(10, dec);
            };
            Common.RemoveComma = function (value) {
                var text = new String(value);
                var bPoint = false;
                var str = "";
                for (var i = 0; i < text.length; i++) {
                    var ch = text.charAt(i);
                    if ((ch >= "0" && ch <= "9"))
                        str += ch;
                    else if (ch == "." && !bPoint) {
                        str += ch;
                        bPoint = true;
                    }
                    else if (ch == "-" && str.length == 0) {
                        str += ch;
                    }
                }
                return str;
            };
            Common.IsNumeric = function (sText) {
                var ValidChars = "0123456789.";
                var Char;
                for (var i = 0; i < sText.length; i++) {
                    Char = sText.charAt(i);
                    if (ValidChars.indexOf(Char) == -1) {
                        return false;
                    }
                }
                return true;
            };
            Common.formatDate = function (value, format) {
                if (format == null || format == undefined || format == '') {
                    format = 'YYYYMMDD';
                }
                if (value) {
                    return (moment)(value).format(format);
                }
                return value.toDateString();
            };
            Common.formatNumber = function (value, format) {
                var bDigitCutMethod = 0;
                var bConvertNumber = true;
                var nFixedPoint = 0;
                var nStart0 = 0;
                var nSep = 3;
                var nSepChar = "";
                var digitarea = format;
                var otherarea = "";
                var i, j;
                i = digitarea.lastIndexOf("0");
                j = digitarea.lastIndexOf("#");
                if (i < 0 && j < 0) {
                    alert("[" + digitarea + "] Format Error");
                }
                if (j > i)
                    i = j;
                otherarea = digitarea.substring(i + 1);
                digitarea = digitarea.substring(0, i + 1);
                for (i = 0; i < otherarea.length; i++) {
                    switch (otherarea.charAt(i)) {
                        case "C":
                            bDigitCutMethod = 2;
                            break;
                        case "F":
                            bDigitCutMethod = 0;
                            break;
                        case "R":
                            bDigitCutMethod = 1;
                            break;
                        case "T":
                            bConvertNumber = true;
                            break;
                    }
                }
                nStart0 = -1;
                nFixedPoint = -1;
                nSep = -1;
                j = 0;
                for (i = 0; i < digitarea.length; i++) {
                    var ch = digitarea.charAt(i);
                    if (ch == "0")
                        nStart0 = j;
                    if (ch == ".")
                        nFixedPoint = j;
                    else if (ch == "#" || ch == "0")
                        j++;
                    else {
                        nSep = j;
                        nSepChar = ch;
                    }
                }
                if (nFixedPoint >= 0)
                    nFixedPoint = j - nFixedPoint;
                else
                    nFixedPoint = 0;
                if (nStart0 > -1) {
                    nStart0 = (j - nStart0) - nFixedPoint - 1;
                    if (nStart0 >= 0)
                        nStart0++;
                }
                else
                    nStart0 = 0;
                if (nSep >= 0) {
                    nSep = (j - nSep) - nFixedPoint;
                }
                var i, j;
                var str = "";
                var bPoint = false;
                for (i = 0; i < value.length; i++) {
                    var ch = value.charAt(i);
                    if ((ch >= "0" && ch <= "9"))
                        str += ch;
                    else if (ch == "." && !bPoint) {
                        str += ch;
                        bPoint = true;
                    }
                    else if (ch == "-" && str.length == 0) {
                        str += ch;
                    }
                }
                var nm = new Number(str).valueOf();
                if (isNaN(nm))
                    nm = 0;
                if (bConvertNumber) {
                    nm = nm * Math.pow(10, nFixedPoint);
                    switch (bDigitCutMethod) {
                        case 0:
                            nm = Math.floor(nm);
                            break;
                        case 1:
                            nm = Math.round(nm);
                            break;
                        case 2:
                            nm = Math.ceil(nm);
                            break;
                    }
                    nm = nm / Math.pow(10, nFixedPoint);
                }
                return nm.toString();
            };
            Common.AddTimeDelimiter = function (s, delimiterChar) {
                if (delimiterChar == '' || delimiterChar == null || delimiterChar == undefined) {
                    delimiterChar = ':';
                }
                if (s.length == 6) {
                    return String(s).substr(0, 2) + delimiterChar + String(s).substr(2, 2) + delimiterChar + String(s).substr(2, 2);
                }
                else if (s.length == 4) {
                    return String(s).substr(0, 2) + delimiterChar + String(s).substr(2, 2);
                }
                else {
                    return s;
                }
            };
            Common.AddDateDelimiter = function (s, delimiterChar) {
                if (delimiterChar == '' || delimiterChar == null || delimiterChar == undefined) {
                    delimiterChar = '-';
                }
                return String(s).substr(0, 4) + delimiterChar + String(s).substr(4, 2) + delimiterChar + String(s).substr(6, 2);
            };
            Common.AddMonthDelimiter = function (s, delimiterChar) {
                if (delimiterChar == '' || delimiterChar == null || delimiterChar == undefined) {
                    delimiterChar = '-';
                }
                return String(s).substr(0, 4) + delimiterChar + String(s).substr(4, 2);
            };
            Common.AddYearDelimiter = function (s) {
                return String(s).substr(0, 4);
            };
            Common.pad = function (number, digits) {
                return new Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
            };
            Common.getDateArray = function (date) {
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
            Common.getCurrentDate = function (date) {
                var d = this.getDateArray(date);
                return d[0] + '' + d[1] + '' + d[2] + '' + d[3] + '' + d[4] + '' + d[5] + '' + d[6];
            };
            Common.GetRandomIDByCurrentTime = function () {
                return this.getCurrentDate(new Date());
            };
            Common.DelDateDelimiter = function (s) {
                return s.substring(0, 4) + s.substring(5, 7) + s.substring(8, 10);
            };
            Common.AddComma = function (s) {
                var digit = s.split(".");
                var ret = "";
                for (var i = 0; i < digit[0].length; i++) {
                    if (((digit[0].length - i) % 3) == 0)
                        if (ret.length > 0 && ret != "-")
                            ret += ",";
                    ret += digit[0].charAt(i);
                }
                if (digit.length > 1) {
                    ret += "." + digit[1];
                }
                return ret;
            };
            Common.HasSpecialChar = function (str) {
                var special_list = new Array("~", "@", "#", "$", "&", "*", "<", ">", ",", "\\", "\"", "`", "'", "/", ":", "|", "?");
                for (var i = 0; i < str.length; i++)
                    for (var j = 0; j < special_list.length + 1; j++)
                        if (str.charAt(i) == special_list[j]) {
                            alert("Cannot Write all of this special mark ~@#$&*<>,\\\"`'/:|? .");
                            return true;
                        }
                return false;
            };
            Common.getFnNameFromString = function (str) {
                var s = str
                    .substring(0, str.indexOf('('));
                return s;
            };
            Common.getFnArgFromString = function (str) {
                var s = str;
                s = s
                    .substring(s.indexOf('(') + 1, s.indexOf(')'));
                s = s.replace(/[\r\n\s]*/g, '');
                s = s
                    .replace(/\\+['"]/g, '')
                    .replace(/=\s*(["']).*?\1/g, '')
                    .replace(/=.*?(,|$)/g, '')
                    .replace(/^\'/, "")
                    .replace(/^\"/, "")
                    .replace(/\'$/, "")
                    .replace(/\"$/, "");
                return s.split(',');
            };
            Common.CDelimiter = "|!";
            Common.RDelimiter = "|@";
            return Common;
        }());
        utils.Common = Common;
        function transition(div_old, div_new, type, callBack) {
            var width = Dom.width(div_old);
            var height = Dom.height(div_old);
            var time = 0.5;
            if (!div_old || !div_new) {
                console.log('ERROR: Cannot do transition when one of the divs is null');
                return;
            }
            div_old.parentNode.style.cssText += 'perspective: 900px; overflow: hidden;';
            div_old.style.cssText += '; position: absolute; z-index: 1019; backface-visibility: hidden';
            div_new.style.cssText += '; position: absolute; z-index: 1020; backface-visibility: hidden';
            switch (type) {
                case 'slide-left':
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; transform: translate3d(' + width + 'px, 0, 0)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: translate3d(0, 0, 0)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: translate3d(-' + width + 'px, 0, 0)';
                    }, 1);
                    break;
                case 'slide-right':
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; transform: translate3d(-' + width + 'px, 0, 0)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: translate3d(0px, 0, 0)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: translate3d(' + width + 'px, 0, 0)';
                    }, 1);
                    break;
                case 'slide-down':
                    div_old.style.cssText += 'overflow: hidden; z-index: 1; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; z-index: 0; transform: translate3d(0, 0, 0)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: translate3d(0, 0, 0)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: translate3d(0, ' + height + 'px, 0)';
                    }, 1);
                    break;
                case 'slide-up':
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, ' + height + 'px, 0)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: translate3d(0, 0, 0)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: translate3d(0, 0, 0)';
                    }, 1);
                    break;
                case 'flip-left':
                    div_old.style.cssText += 'overflow: hidden; transform: rotateY(0deg)';
                    div_new.style.cssText += 'overflow: hidden; transform: rotateY(-180deg)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: rotateY(0deg)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: rotateY(180deg)';
                    }, 1);
                    break;
                case 'flip-right':
                    div_old.style.cssText += 'overflow: hidden; transform: rotateY(0deg)';
                    div_new.style.cssText += 'overflow: hidden; transform: rotateY(180deg)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: rotateY(0deg)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: rotateY(-180deg)';
                    }, 1);
                    break;
                case 'flip-down':
                    div_old.style.cssText += 'overflow: hidden; transform: rotateX(0deg)';
                    div_new.style.cssText += 'overflow: hidden; transform: rotateX(180deg)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: rotateX(0deg)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: rotateX(-180deg)';
                    }, 1);
                    break;
                case 'flip-up':
                    div_old.style.cssText += 'overflow: hidden; transform: rotateX(0deg)';
                    div_new.style.cssText += 'overflow: hidden; transform: rotateX(-180deg)';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: rotateX(0deg)';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: rotateX(180deg)';
                    }, 1);
                    break;
                case 'pop-in':
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(.8); opacity: 0;';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; transform: scale(1); opacity: 1;';
                        div_old.style.cssText += 'transition: ' + time + 's;';
                    }, 1);
                    break;
                case 'pop-out':
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(1); opacity: 1;';
                    div_new.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0); opacity: 0;';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; opacity: 1;';
                        div_old.style.cssText += 'transition: ' + time + 's; transform: scale(1.7); opacity: 0;';
                    }, 1);
                    break;
                default:
                    div_old.style.cssText += 'overflow: hidden; transform: translate3d(0, 0, 0)';
                    div_new.style.cssText += 'overflow: hidden; translate3d(0, 0, 0); opacity: 0;';
                    Dom.showElement(div_new);
                    window.setTimeout(function () {
                        div_new.style.cssText += 'transition: ' + time + 's; opacity: 1;';
                        div_old.style.cssText += 'transition: ' + time + 's';
                    }, 1);
                    break;
            }
            setTimeout(function () {
                if (type === 'slide-down') {
                    Dom.addStyle(div_old, 'z-index', '1019');
                    Dom.addStyle(div_new, 'z-index', '1020');
                }
                if (typeof callBack === 'function')
                    callBack();
            }, time * 1000);
        }
        utils.transition = transition;
    })(utils = tserp.utils || (tserp.utils = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var ui;
    (function (ui) {
        var parser = (function () {
            function parser() {
            }
            parser.sleep = function (miliseconds) {
                var currentTime = new Date().getTime();
                while (currentTime + miliseconds >= new Date().getTime()) {
                }
            };
            parser.swap = function (oldNode, newNode) {
                var parentNode = oldNode.parentNode;
                parentNode.insertBefore(newNode, oldNode);
                parentNode.removeChild(oldNode);
            };
            parser.__PreInitTag__ = function (doc, callBack) {
                if (callBack === void 0) { callBack = null; }
                for (var i = 0; i < this.htttml_data.length; i++) {
                    var obj = this.htttml_data[i];
                    for (var key in obj) {
                        var value = obj[key];
                        var _htmlKeyLst = document.getElementsByTagName(key.toUpperCase());
                        switch (String(key).toLowerCase()) {
                            case 'ts-textbox':
                            case 'ts-input':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlNode = tserp.createElement('<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + ' tabindex="-1" type="text"/>');
                                    parser.swap(document.getElementById(_htmlKeyLst[j].id), _newHtmlNode);
                                    window[_id] = new tserp.input.TextBox(_newHtmlNode);
                                }
                                break;
                            case 'ts-label':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    if (_id) {
                                    }
                                    var _innerHtml = _htmlKeyLst[j].innerHTML;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + ' >' + _innerHtml + '</' + value + '>';
                                    document.getElementById(_htmlKeyLst[j].id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.Label('#' + _id);
                                }
                                break;
                            case 'ts-togglebutton':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _innerHtml = _htmlKeyLst[j].innerHTML;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + ' >' + _innerHtml + '</' + value + '>';
                                    document.getElementById(_htmlKeyLst[j].id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.components.ToggleButton('#' + _id);
                                }
                                break;
                            case 'ts-textarea':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _innerHtml = _htmlKeyLst[j].innerHTML;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '>' + _innerHtml + '</' + value + '>';
                                    document.getElementById(_htmlKeyLst[j].id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.Textarea('#' + _id);
                                }
                                break;
                            case 'ts-datebox':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + ' ></' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    var typedDateString = tserp.input.DateBoxType[document.getElementById(_id).getAttribute('type')];
                                    var _type = tserp.input.DateBoxType[typedDateString] || tserp.input.DateBoxType.Date;
                                    var _format = document.getElementById(_id).getAttribute('format');
                                    var _required = tserp.utils.Converter.ObjectToBoolean(document.getElementById(_id).getAttribute('isRequired'), true);
                                    var _obj = document.getElementById(_id);
                                    if (_type == tserp.input.DateBoxType.Date) {
                                        if (_format == null) {
                                            _format = 'dd/MM/yyyy';
                                        }
                                        _obj.setAttribute('maxlength', '10');
                                        _obj.setAttribute('size', '10');
                                        tserp.addClass(_obj, 'date-box');
                                        window[_id] = new tserp.input.DateBox('#' + _id, {
                                            format: _format,
                                            type: tserp.input.DateBoxType.Date,
                                            maxlength: '10',
                                            size: '10',
                                            isRequired: _required
                                        });
                                    }
                                    else if (_type === tserp.input.DateBoxType.Month) {
                                        if (_format == null) {
                                            _format = 'MM/yyyy';
                                        }
                                        tserp.addClass(_obj, 'month-box');
                                        window[_id] = new tserp.input.DateBox('#' + _id, {
                                            format: _format,
                                            type: tserp.input.DateBoxType.Month,
                                            maxlength: '7',
                                            size: '7',
                                            isRequired: _required
                                        });
                                    }
                                    else if (_type == tserp.input.DateBoxType.Year) {
                                        tserp.addClass(_obj, 'year-box');
                                        if (_format == null) {
                                            _format = 'yyyy';
                                        }
                                        window[_id] = new tserp.input.DateBox('#' + _id, {
                                            format: _format,
                                            type: tserp.input.DateBoxType.Year,
                                            maxlength: '4',
                                            size: '4',
                                            isRequired: _required
                                        });
                                    }
                                }
                                break;
                            case 'ts-timebox':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + ' class=" input-time"  ></' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    var _mask = '99:99';
                                    var _format = document.getElementById(_id).getAttribute('format');
                                    if (_format == null) {
                                        _format = 'HH:mm';
                                    }
                                    window[_id] = new tserp.input.TimeBox('#' + _id, {
                                        format: _format, isRequired: false,
                                        step: null,
                                        mask: _mask
                                    });
                                }
                                break;
                            case 'ts-button':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _innerHtml = _htmlKeyLst[j].innerHTML;
                                    if (_innerHtml == "") {
                                        _innerHtml = _htmlKeyLst[j].getAttribute('value');
                                        if (_innerHtml == null) {
                                            _innerHtml = '';
                                        }
                                    }
                                    else {
                                        _htmlKeyLst[j].setAttribute('value', _innerHtml);
                                        _htmlKeyLst[j].innerHTML = "";
                                    }
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '   ></div>';
                                    var newTag = document.getElementById(_id);
                                    newTag.outerHTML = _newHtmlTag;
                                    var _hidden = tserp.utils.Converter.ObjectToBoolean(newTag.getAttribute('hidden'), false);
                                    var _btn = new tserp.input.Button('#' + _id);
                                    _btn.hostElement.tabIndex = -1;
                                    if (_hidden == true) {
                                        _btn.hidden = _hidden;
                                    }
                                    window[_id] = _btn;
                                }
                                break;
                            case 'ts-icon':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '   >' + '' + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.Icon('#' + _id);
                                }
                                break;
                            case 'ts-radio':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + _htmlKeyLst[j].innerHTML + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.Radio('#' + _id);
                                }
                                break;
                            case 'ts-checkbox':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + _htmlKeyLst[j].innerHTML + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.CheckBox('#' + _id);
                                }
                                break;
                            case 'ts-grid':
                            case 'ts-flexgrid':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _style = _htmlKeyLst[j].style.display;
                                    if (_style == 'none') {
                                        _style = 'display:none;';
                                    }
                                    else {
                                        _style = '';
                                    }
                                    var columnsDefinition = this.GridInfoTranfer('#' + _id);
                                    var cellEditEnding = _htmlKeyLst[j].getAttribute('cellEditEnding');
                                    var cellEditEnded = _htmlKeyLst[j].getAttribute('cellEditEnded');
                                    var localVirtualScrolling = tserp.utils.Converter.ObjectToBoolean(_htmlKeyLst[j].getAttribute('localVirtualScrolling'), false);
                                    var selectionChanged = _htmlKeyLst[j].getAttribute('selectionChanged');
                                    var onRowClick = _htmlKeyLst[j].getAttribute('rowClick');
                                    var onRowDblClick = _htmlKeyLst[j].getAttribute('rowDblClick');
                                    var defaultSize = _htmlKeyLst[j].getAttribute('defaultSize');
                                    var frozenColumns = _htmlKeyLst[j].getAttribute('frozenColumns');
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + '</' + value + '>';
                                    if (document.getElementById(_id).parentNode) {
                                        if (document.getElementById(_id).parentNode.tagName == 'TD') {
                                            _newHtmlTag = '<table cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed; ' + _style + '"><tr><td style="width:100%;height:100%;padding: 0px;margin: 0px;"><' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + '</' + value + '></td></tr><table>';
                                            document.getElementById(_id).outerHTML = _newHtmlTag;
                                        }
                                        else {
                                            document.getElementById(_id).outerHTML = _newHtmlTag;
                                        }
                                    }
                                    else {
                                        document.getElementById(_id).outerHTML = _newHtmlTag;
                                    }
                                    if (document.getElementById(_id).parentNode) {
                                        if (document.getElementById(_id).parentNode.tagName == 'TD') {
                                            if (!Function.prototype.bind) {
                                                setTimeout(function () {
                                                    tserp.ui.parser.AdjustGridSize(_id);
                                                }, 100);
                                            }
                                            else {
                                                setTimeout(tserp.ui.parser.AdjustGridSize.bind(this, _id), 100);
                                            }
                                        }
                                    }
                                    var gsGrid;
                                    var _gridOptionExt = new tserp.grid.GridOptionExt(_id);
                                    gsGrid = new tserp.grid.FlexGrid('#' + _id);
                                    gsGrid.gridOptionExt = _gridOptionExt;
                                    gsGrid.LstColumnLayout = columnsDefinition.list2;
                                    gsGrid.LocalVirtualScrolling = localVirtualScrolling;
                                    if (localVirtualScrolling == true) {
                                        gsGrid.scrollPositionChanged.addHandler(function (sender, event) {
                                            var x = sender.hostElement;
                                            if (x) {
                                                var myDiv = x.querySelector('div[wj-part="root"');
                                                if (myDiv) {
                                                    if ((myDiv.offsetHeight + myDiv.scrollTop) >= myDiv.scrollHeight) {
                                                        sender._GetVirtualData();
                                                    }
                                                }
                                            }
                                        }, gsGrid);
                                    }
                                    gsGrid.initialize({
                                        isReadOnly: _gridOptionExt.isReadOnly,
                                        autoGenerateColumns: false,
                                        autoSizeMode: tserp.grid.AutoSizeMode.Both,
                                        allowAddNew: _gridOptionExt.allowAddNew,
                                        allowMerging: tserp.grid.AllowMerging.AllHeaders,
                                        columns: columnsDefinition.lst,
                                        selectionMode: _gridOptionExt.selectionmode,
                                        headersVisibility: _gridOptionExt.headersVisibility
                                    });
                                    if (_gridOptionExt.headersRowsCount > 1) {
                                        for (var e = 1; e < _gridOptionExt.headersRowsCount; e++) {
                                            var hr = new tserp.grid.Row();
                                            hr.allowMerging = true;
                                            gsGrid.columnHeaders.rows.push(hr);
                                        }
                                        (gsGrid.columnHeaders.rows[0]).allowMerging = true;
                                        var _startRow = 0;
                                        for (var r = gsGrid.columnHeaders.rows.length - 1; r >= 0; r--) {
                                            for (var c = 0; c < gsGrid.columns.length; c++) {
                                                var content = gsGrid.columns[c].header;
                                                if (gsGrid.columns[c].header_rows_text[r] != undefined)
                                                    content = gsGrid.columns[c].header_rows_text[r]['header_' + r];
                                                gsGrid.columnHeaders.setCellData(_startRow, c, content);
                                            }
                                            _startRow = _startRow + 1;
                                        }
                                    }
                                    gsGrid.itemFormatter = function (panel, r, c, cell) {
                                        var editRange = panel.grid.editRange;
                                        if (panel.columns[c].cellsClassNameStr && panel.cellType != tserp.grid.CellType.ColumnHeader) {
                                            if (panel.columns[c].cellsClassNameStr != '') {
                                                if (panel.grid.rows[r]) {
                                                    var e0 = new tserp.CellsClassNameEventArgs();
                                                    e0.rowData = panel.grid.rows[r].dataItem;
                                                    e0.rowIdx = r;
                                                    e0.colIdx = c;
                                                    e0.cellValue = cell.childNodes[0].value;
                                                    e0.cellHtml = cell;
                                                    panel.columns[c].onCellsClassName(e0);
                                                }
                                            }
                                        }
                                        if (panel.columns[c].columnType == 'button' && panel.cellType == tserp.grid.CellType.Cell) {
                                            var e1 = new tserp.CellsRendererEventArgs();
                                            e1.rowData = panel.grid.rows[r].dataItem;
                                            e1.rowIdx = r;
                                            e1.colIdx = c;
                                            e1.cellValue = cell;
                                            panel.columns[c].onCellsRenderer(e1);
                                        }
                                        if (panel.cellType == tserp.grid.CellType.ColumnHeader) {
                                            var range = panel.grid.getMergedRange(panel, r, c);
                                            if (cell) {
                                                cell.style.textAlign = 'center';
                                            }
                                            if (range) {
                                                cell.innerHTML = '<div>' + cell.innerHTML + '</div>';
                                                tserp.setCss(cell.children[0], {
                                                    display: 'table-cell',
                                                    verticalAlign: 'middle',
                                                    textAlign: 'center',
                                                    lineHeight: cell.style.height,
                                                    width: cell.style.width
                                                });
                                            }
                                        }
                                        else if (panel.cellType == tserp.grid.CellType.Cell && editRange && editRange.row === r && editRange.col === c) {
                                            if (panel.grid.GetColumnType(c)=== 'date') {
                                                cell.childNodes[0].style.display = 'none';
                                                cell.style.overflow = 'visible';
                                                var _cellVal = cell.childNodes[0].value;
                                                var _cellFmt = panel.grid.columns[c].format;
                                                var _required = panel.grid.columns[c].isRequired;
                                                if (_cellFmt == '' || _cellFmt == undefined) {
                                                    _cellFmt = 'dd-MM-YYYY';
                                                }
                                                if (_cellVal == '') {
                                                    _cellVal = new Date();
                                                }
                                                else {
                                                    _cellVal = tserp.Globalize.parseDate(_cellVal, _cellFmt);
                                                }
												cell.innerHtml = "";
												var inputDT = document.createElement("input");												
												cell.appendChild(inputDT);
                                                var inputDate = new tserp.input.InputDate(inputDT, {
                                                        format: _cellFmt,
                                                        isRequired: _required,
                                                    });
                                                if (inputDate) {
                                                    inputDate.internalValue = _cellVal;
                                                    inputDate.focus();
                                                }
                                                inputDate.hostElement.addEventListener('keyup', function (e) {
                                                    if (e.keyCode == 13) {
                                                        panel.grid.finishEditing();
                                                    }
                                                }, false);
                                                var editEndingEH = function (s, e) {
                                                    panel.grid.cellEditEnding.removeHandler(editEndingEH);
                                                    if (!e.cancel) {
                                                        panel.grid.setCellData(r, c, inputDate.internalValue);
                                                        e.cancel = true;
                                                    }
													inputDate = null;
                                                };
                                                panel.grid.cellEditEnding.addHandler(editEndingEH);
                                            }
                                            else if (panel.grid.GetColumnType(c)=== 'time') {
                                                cell.childNodes[0].style.display = 'none';
                                                cell.style.overflow = 'visible';
                                                var _mask = '99:99';
                                                var _formatTime = panel.grid.columns[c].format;
                                                if (_formatTime == '' || _formatTime == undefined) {
                                                    _formatTime = 'HH:mm';
                                                }
                                                var _gTimeVal = cell.childNodes[0].value;
                                                if (_gTimeVal != '') {
                                                    _gTimeVal = tserp.Globalize.parseDate(_gTimeVal, _formatTime);
                                                }
                                                else {
                                                    _gTimeVal = new Date();
                                                }
                                                var inputTime = new tserp.input.InputTime(cell, {
                                                    step: null,
                                                    mask: _mask,
                                                    isRequired: false,
                                                    format: _formatTime
                                                });
                                                if (inputTime) {
                                                    inputTime.value = _gTimeVal;
                                                    inputTime.focus();
                                                }
                                                inputTime.selectedIndexChanged.addHandler(function (obj, event) {
                                                    if (obj.isDroppedDown) {
                                                        panel.grid.finishEditing();
                                                    }
                                                }, inputTime);
                                                inputTime.hostElement.addEventListener('keyup', function (e) {
                                                    if (e.keyCode == 13) {
                                                        panel.grid.finishEditing();
                                                    }
                                                }, false);
                                                inputTime.hostElement.addEventListener('keydown', function (e) {
                                                    if (e.keyCode == 9) {
                                                        panel.grid.finishEditing();
                                                    }
                                                }, false);
                                                var editEndingEH = function (s, e) {
                                                    panel.grid.cellEditEnding.removeHandler(editEndingEH);
                                                    if (!e.cancel) {
                                                        inputTime._commitText();
                                                        panel.grid.setCellData(e.row, e.col, inputTime.value);
                                                        e.cancel = true;
                                                    }
                                                };
                                                panel.grid.cellEditEnding.addHandler(editEndingEH);
                                            }
                                        }
                                    };
                                    if (cellEditEnded) {
                                        gsGrid.cellEditEnded.addHandler(function (sender, event) {
                                            eval('(function(){' + cellEditEnded + '})();');
                                        });
                                    }
                                    if (cellEditEnding) {
                                        gsGrid.cellEditEnded.addHandler(function (sender, event) {
                                            eval('(function(){' + cellEditEnding + '})();');
                                        });
                                    }
                                    if (selectionChanged) {
                                        gsGrid.selectionChanged.addHandler(function (sender, event) {
                                            eval('(function(){' + selectionChanged + '})();');
                                        });
                                    }
                                    if (onRowClick) {
                                        gsGrid.rowClickStr = onRowClick;
                                        gsGrid.rowClick.addHandler(function (sender, event) {
                                            eval('(function(){' + sender.rowClickStr + '})();');
                                        });
                                    }
                                    gsGrid.hostElement.addEventListener("click", function (e) {
                                        var ht = gsGrid.hitTest(e.pageX, e.pageY);
                                        switch (ht.cellType) {
                                            case tserp.grid.CellType.Cell:
                                                var CellClickEventArgs = new tserp.grid.CellClickEventArgs(ht.grid, ht.row, ht.col);
                                                gsGrid.onRowClick(CellClickEventArgs);
                                                break;
                                            default: break;
                                        }
                                    }, false);
                                    if (onRowDblClick) {
                                        gsGrid.rowDblClickStr = onRowDblClick;
                                        gsGrid.rowDblClick.addHandler(function (sender, event) {
                                            eval('(function(){' + sender.rowDblClickStr + '})();');
                                        });
                                    }
                                    gsGrid.cellEditEnded.addHandler(function (sender, event) {
                                        sender.setRowEdited(event.row);
                                        if (sender.isRowNormal(event.row)) {
                                            sender.rows[event.row].cssClass = '';
                                        }
                                    });
                                    gsGrid.rowAdded.addHandler(function (sender, event) {
                                        sender.setRowAdded(event.row);
                                        if (sender.isRowAdded(event.row)) {
                                            sender.rows[event.row].cssClass = 'ts-grid-row_status-added';
                                        }
                                    });
                                    if (defaultSize) {
                                    }
                                    if (frozenColumns) {
                                        if (typeof frozenColumns === 'number') {
                                            gsGrid.frozenColumns = frozenColumns;
                                        }
                                        else if (typeof frozenColumns === 'string') {
                                            if (gsGrid.getColumn(frozenColumns)) {
                                                gsGrid.frozenColumns = gsGrid.getColumn(frozenColumns).index;
                                            }
                                        }
                                    }
                                    window[_id] = gsGrid;
                                }
                                break;
                            case 'ts-panel':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + _htmlKeyLst[j].innerHTML + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.contain.Panel('#' + _id, null, tserp.System.ctx);
                                }
                                break;
                            case 'ts-flexgrid':
                                break;
                            case 'ts-tab':
                            case 'ts-tabs':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _onPageActivated = _htmlKeyLst[j].getAttribute('onPageActivated');
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + _htmlKeyLst[j].innerHTML + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    var _Tab2 = new tserp.contain.Tab2('#' + _id);
                                    if (_onPageActivated) {
                                        _Tab2.pageActivatedStr = _onPageActivated;
                                        _Tab2.pageActivated.addHandler(function (sender, event) {
                                            eval('(function(){' + sender.pageActivatedStr + '})();');
                                        });
                                    }
                                    window[_id] = _Tab2;
                                }
                                break;
                            case 'ts-list':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var jsonData = this.JsonDataForList(_htmlKeyLst[j].innerHTML.replace(/(<([^>]+)>)/ig, '').trim());
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.List('#' + _id);
                                    window[_id].SetDataJson(jsonData);
                                }
                                break;
                            case 'ts-image':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  > ' + '</' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    var newTag = document.getElementById(_id);
                                    var p = {
                                        width: newTag.getAttribute('width'),
                                        height: newTag.getAttribute('height'),
                                        post: newTag.getAttribute('post'),
                                        view: newTag.getAttribute('view'),
                                        closeForFirstFile: newTag.getAttribute('closeForFirstFile'),
                                        noimage: newTag.getAttribute('noimage'),
                                        src_table_name: newTag.getAttribute('src_table_name'),
                                        table_name: newTag.getAttribute('table_name'),
                                        master_pk: newTag.getAttribute('master_pk'),
                                        procedure: newTag.getAttribute('procedure'),
                                        value: newTag.getAttribute('value'),
                                    };
                                    window[_id] = new tserp.input.ImageBox('#' + _id, p, tserp.System.ctx);
                                }
                                break;
                            case 'ts-upload':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  ></' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    window[_id] = new tserp.input.UploadInLine('#' + _id);
                                }
                                break;
                            case 'ts-classictreeview':
                                for (var j = 0; j < _htmlKeyLst.length; j++) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _newHtmlTag = '<' + value + tserp.utils.Dom.getOriginalAttributes(_id) + '  ></' + value + '>';
                                    document.getElementById(_id).outerHTML = _newHtmlTag;
                                    var _onClickNode = document.getElementById(_id).getAttribute('onClickNode');
                                    window[_id] = new tserp.nav.ClassicTreeView('#' + _id, null, tserp.System.ctx);
                                    if (_onClickNode) {
                                        window[_id].clickNode.addHandler(function (sender, event) {
                                            eval('(function(){' + _onClickNode + '})();');
                                        });
                                    }
                                }
                                break;
                            case 'ts-tree':
                                break;
                            case 'ts-data':
                                for (var j = _htmlKeyLst.length - 1; j >= 0; j--) {
                                    var _id = _htmlKeyLst[j].id;
                                    var _data = new tserp.Data(_id);
                                    window[_id] = _data;
                                }
                                break;
                        }
                    }
                }
                if (callBack && typeof callBack === 'function') {
                    callBack();
                }
            };
            parser.parse = function (callBack) {
                if (callBack === void 0) { callBack = null; }
                this.__PreInitTag__(document, callBack);
            };
            parser.JsonDataForList = function (dataStr) {
                var _rs = [];
                if (dataStr != '') {
                    var arr = dataStr.split("|");
                    if (arr.length > 2 || String(arr[0]).toUpperCase() == "DATA") {
                        for (var i = 1; i < arr.length; i += 2) {
                            var obj = { pk0: arr[i], nm0: arr[i + 1] };
                            _rs.push(obj);
                        }
                    }
                }
                return _rs;
            };
            parser.GridInfoTranfer = function (element) {
                var _obj = null;
                var columnsDefinition = [];
                var columnsDefinition2 = [];
                if (tserp.isString(element)) {
                    _obj = document.getElementById(element.replace('#', ''));
                }
                else {
                    _obj = element;
                }
                var _cols = _obj.getElementsByTagName('COLUMNS');
                if (_cols.length = 0) {
                    throw Error('VUI LONG KHAI TAG GRID > COLUMNS');
                }
                var _colLst = _cols[0].getElementsByTagName('COLUMN');
                if (_colLst.length == 0) {
                    throw Error('VUI LONG KHAI TAG GRID > COLUMNS > COLUMN');
                }
                var _textLelvel = tserp.utils.Converter.ObjectToFloat(_obj.getAttribute('headersRowsCount'), 1);
                for (var i = 0; i < _colLst.length; i++) {
                    var colobj = {};
                    var colobj2 = {};
                    colobj['header'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('text'), '');
                    colobj2['header'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('text'), '');
                    if (_textLelvel > 1) {
                        for (var l = 0; l < _textLelvel; l++) {
                            var _tmpObj = {};
                            if (l == 0) {
                                _tmpObj['header_' + l] = colobj['header'];
                            }
                            else {
                                _tmpObj['header_' + l] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('text' + l), colobj['header']);
                            }
                            if (colobj['header_rows_text'] == undefined) {
                                colobj['header_rows_text'] = new Array();
                            }
                            colobj['header_rows_text'].push(_tmpObj);
                            colobj2['header_rows_text'].push(_tmpObj);
                        }
                    }
                    var _datafield = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('datafield'), '');
                    if (_datafield != '') {
                        colobj['binding'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('datafield'), '');
                        colobj2['binding'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('datafield'), '');
                    }
                    var _required = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('isRequired'), '');
                    if (_datafield != '') {
                        colobj['isRequired'] = tserp.utils.Converter.ObjectToBoolean(_datafield, false);
                        colobj2['isRequired'] = tserp.utils.Converter.ObjectToBoolean(_datafield, false);
                    }
                    var _cssClass = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('cssClass'), '');
                    if (_cssClass != '') {
                        colobj['cssClass'] = _cssClass;
                        colobj2['cssClass'] = _cssClass;
                    }
                    var _oncellsrenderer = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('oncellsrenderer'), '');
                    if (_oncellsrenderer != '') {
                        colobj['__cellsrenderer'] = _oncellsrenderer;
                        colobj2['__cellsrenderer'] = _oncellsrenderer;
                    }
                    var _aggregate = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('aggregate'), '');
                    if (_aggregate != '') {
                        colobj['aggregate'] = _aggregate;
                        colobj2['aggregate'] = _aggregate;
                    }
                    var _valueSameText = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('valueSameText'), false);
                    if (_valueSameText == true) {
                        colobj['valueSameText'] = _valueSameText;
                        colobj2['valueSameText'] = _valueSameText;
                    }
                    var _cellclassname = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('cellclassname'), '');
                    if (_cellclassname != '') {
                        colobj['cellsClassNameStr'] = _cellclassname;
                        colobj2['cellsClassNameStr'] = _cellclassname;
                    }
                    colobj['allowSorting'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('allowSorting'), true);
                    colobj2['allowSorting'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('allowSorting'), true);
                    colobj['allowMerging'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('allowMerging'), true);
                    colobj2['allowMerging'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('allowMerging'), true);
                    colobj['align'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('cellsalign'), 'left');
                    colobj2['align'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('cellsalign'), 'left');
                    colobj['visible'] = !tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('hidden'), false);
                    colobj2['visible'] = !tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('hidden'), false);
                    colobj['isReadOnly'] = !tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('editable'), true);
                    colobj2['isReadOnly'] = !tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('editable'), true);
                    colobj['isContentHtml'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('isContentHtml'), false);
                    colobj2['isContentHtml'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('isContentHtml'), false);
                    colobj['wordWrap'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('wordWrap'), false);
                    colobj2['wordWrap'] = tserp.utils.Converter.ObjectToBoolean(_colLst[i].getAttribute('wordWrap'), false);
                    var _width = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('width'), '');
                    if (_width != '') {
                        colobj['width'] = Number(_width.replace('px', '').replace('%', ''));
                        colobj2['width'] = Number(_width.replace('px', '').replace('%', ''));
                    }
                    if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'checkbox') {
                        colobj['inputType'] = 'checkbox';
                        colobj['dataType'] = tserp.DataType.Boolean;
                        colobj2['inputType'] = 'checkbox';
                        colobj2['columnType'] = 'checkbox';
                        colobj2['dataType'] = tserp.DataType.Boolean;
                    }
                    else if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'date') {
                        var format = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('format'), 'dd-MM-yyyy');
                        colobj['dataType'] = tserp.DataType.Date;
                        colobj['format'] = format;
                        colobj2['columnType'] = 'date';
                        colobj2['dataType'] = tserp.DataType.Date;
                        colobj2['format'] = format;
                    }
                    else if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'time') {
                        var format = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('format'), 'HH:mm');
                        colobj['dataType'] = tserp.DataType.Date;
                        colobj['format'] = format;
                        colobj2['columnType'] = 'time';
                        colobj2['dataType'] = tserp.DataType.Date;
                        colobj2['format'] = format;
                    }
                    else if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'textbox') {
                        colobj['dataType'] = tserp.DataType.String;
                        colobj['inputType'] = 'text';
                        colobj2['columnType'] = 'text';
                        colobj2['dataType'] = tserp.DataType.String;
                        colobj2['inputType'] = 'text';
                        var format = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('format'), '');
                        if (format != '') {
                            colobj['format'] = format;
                            colobj2['format'] = format;
                        }
                    }
                    else if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'number') {
                        colobj['dataType'] = tserp.DataType.Number;
                        colobj['inputType'] = 'number';
                        colobj['align'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('align'), '');
                        colobj2['columnType'] = 'number';
                        colobj2['dataType'] = tserp.DataType.Number;
                        colobj2['inputType'] = 'number';
                        colobj2['align'] = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('align'), '');
                        var format = tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('format'), 'n2');
                        if (format != '') {
                            colobj['format'] = format;
                            colobj2['format'] = format;
                        }
                    }
                    else if (tserp.utils.Converter.ObjectToString(_colLst[i].getAttribute('columntype'), '') == 'button') {
                        colobj['dataType'] = tserp.DataType.String;
                        colobj['inputType'] = 'button';
                        colobj['isReadOnly'] = true;
                        colobj2['columnType'] = 'button';
                        colobj2['dataType'] = tserp.DataType.String;
                        colobj2['inputType'] = 'button';
                        colobj2['isReadOnly'] = true;
                    }
                    else {
                        colobj['dataType'] = tserp.DataType.String;
                        colobj['inputType'] = 'text';
                        colobj2['dataType'] = tserp.DataType.String;
                        colobj2['inputType'] = 'text';
                        colobj2['columnType'] = 'text';
                    }
                    columnsDefinition.push(colobj);
                    columnsDefinition2.push(colobj2);
                }
                var colobj = {};
                colobj['header'] = '_tsStatus_';
                colobj['binding'] = '_tsStatus_';
				colobj['visible'] = false;
                columnsDefinition.push(colobj);
                columnsDefinition2.push(colobj);
                return {
                    lst: columnsDefinition, list2: columnsDefinition2
                };
            };
            parser.AdjustGridSize = function (_id) {
                var _parentNode = document.getElementById(_id).parentNode;
                if (_parentNode) {
                    if (tserp.utils.Dom.ie() < 10) {
                        document.getElementById(_id).style.height = (_parentNode.offsetHeight - 1.3) + 'px';
                    }
                    else {
                        if (document.getElementById(_id).style.height.indexOf('px') == -1) {
                            document.getElementById(_id).style.height = (_parentNode.offsetHeight - 1.3) + 'px';
                        }
                    }
                }
            };
            parser.htttml_data = [
                { 'ts-tab': 'div' },
                { 'ts-textbox': 'input' },
                { 'ts-datebox': 'div' },
                { 'ts-panel': 'iframe' },
                { 'ts-button': 'div' },
                { 'ts-checkbox': 'input' },
                { 'ts-radiobutton': 'div' },
                { 'ts-radio': 'div' },
                { 'ts-data': 'div' },
                { 'ts-input': 'input' },
                { 'ts-image': 'div' },
                { 'ts-tree': 'div' },
                { 'ts-classictreeview': 'div' },
                { 'ts-list': 'select' },
                { 'ts-icon': 'div' },
                { 'ts-textarea': 'div' },
                { 'ts-label': 'label' },
                { 'ts-maskedinput': 'input' },
                { 'ts-numberinput': 'input' },
                { 'ts-timebox': 'div' },
                { 'ts-togglebutton': 'input' },
                { 'ts-upload': 'div' },
                { 'ts-dropdownlist': 'div' },
                { 'ts-flexgrid': 'div' },
                { 'ts-grid': 'div' },
                { 'ts-paperviewer': 'div' },
            ];
            return parser;
        }());
        ui.parser = parser;
    })(ui = tserp.ui || (tserp.ui = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.js.map