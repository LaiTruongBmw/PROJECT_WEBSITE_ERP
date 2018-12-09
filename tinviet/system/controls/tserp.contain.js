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
    var contain;
    (function (contain) {
        var Tab = (function () {
            function Tab(element, options) {
                this.curPage = 0;
                this.startIndex = 0;
                this.tbl = null;
                this.PageCount = 0;
                this._obj = null;
                this.overID = -1;
                this.pageActivated = new tserp.Event();
                if (wijmo.isString(element)) {
                    this._obj = document.getElementById(element.replace('#', ''));
                }
                else {
                    this._obj = element;
                }
                var i, j;
                var str = '<TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0"  width="100%" height="100%">' +
                    ' <TR>';
                var colcount = 1;
                var color = '';
                var img = '';
                for (i = 0; i < this._obj.childNodes.length; i++) {
                    if (this._obj.childNodes[i].nodeName == 'TABLE' || this._obj.childNodes[i].nodeName == 'DIV') {
                        var name = this._obj.childNodes[i].attributes.getNamedItem('name').nodeValue;
                        if (this.startIndex == 0) {
                            img = "_sel";
                            color = "color:black";
                            this.startIndex = 1;
                        }
                        else {
                            img = "";
                            color = "color:#888888";
                            (this._obj.childNodes[i]).style.display = "none";
                        }
                        str += '		<TD  style="cursor:hand;padding:0 0 0 0 ;margin:0 0 0 0;font-weight:bold;' + color + ';width: 5px;padding - top: 3px;">' +
                            '			<IMG SRC= "' + tserp.System.ctx + '/system/images/tab/tab_bgl' + img + '.gif"  align="absMiddle" />' +
                            '		</TD>' +
                            '		<TD  valign="bottom" style="font-weight:bold;background-image:url(' + tserp.System.ctx + '/system/images/tab/tab_bgm' + img + '.gif);background-repeat : repeat-x;background-position: 11px;background-position-y: 2px;;cursor:hand;padding:0px 0px 4px 0px;margin:0px 0px 0px 0px;' + color + '; background-size: auto 23px;"><nobr>' +
                            name +
                            '		</nobr></TD>' +
                            '		<TD  style="font-weight:bold;cursor:hand;padding:0 0 0 0;margin:0 0 0 0;' + color + ';width: 21px;padding - top: 3px;">' +
                            '			<IMG SRC="' + tserp.System.ctx + '/system/images/tab/tab_bgr' + img + '.gif" align="absMiddle" />' +
                            '		</TD>';
                        colcount += 3;
                    }
                }
                str += '	<td width="100%"></td>	</TR>' +
                    '</TABLE>	 	';
                this._obj.insertAdjacentHTML("afterbegin", str);
                this.tbl = this._obj.childNodes[0];
                for (i = this._obj.childNodes.length - 1; i > this.startIndex; i--) {
                    if (this._obj.childNodes[i].nodeName == 'TABLE') {
                        var newTR = this.tbl.insertRow(1);
                        var div = document.createElement('div');
                        var newTD = newTR.insertCell();
                        newTD.colSpan = colcount;
                        newTD.vAlign = "top";
                        newTD.style.height = "100%";
                        newTD.appendChild(this._obj.childNodes[i]);
                        this.PageCount++;
                    }
                }
                tserp.utils.addEvent(this.tbl.rows[0], 'click', this.fnOnClick);
                tserp.utils.addEvent(this.tbl.rows[0], 'mouseover', this.fnOnMouseOver);
                tserp.utils.addEvent(this.tbl.rows[0], 'mouseout', this.fnOnMouseOut);
            }
            Tab.prototype.onpageActivated = function (e) {
                this.pageActivated.raise(this, e);
            };
            Tab.prototype.SetPage = function (c) {
                this.HidePage(this.curPage);
                this.curPage = c;
                this.ShowPage(this.curPage);
            };
            Tab.prototype.HidePage = function (p) {
                this.tbl.rows[p + 1].style.display = "none";
                this.ShowTabBtn(p, 0);
            };
            Tab.prototype.ShowPage = function (p) {
                console.log(this.tbl.rows);
                this.tbl.rows[p + 1].style.display = "";
                this.ShowTabBtn(p, 1);
                this.onpageActivated();
            };
            Tab.prototype.HideTab = function (p) {
                this.tbl.rows[0].cells[p * 3].style.visibility = "hidden";
                this.tbl.rows[0].cells[p * 3 + 1].style.visibility = "hidden";
                this.tbl.rows[0].cells[p * 3 + 2].style.visibility = "hidden";
                this.ShowTabBtn(p, 0);
            };
            Tab.prototype.ShowTab = function (p) {
                this.tbl.rows[0].cells[p * 3].style.visibility = "visible";
                this.tbl.rows[0].cells[p * 3 + 1].style.visibility = "visible";
                this.tbl.rows[0].cells[p * 3 + 2].style.visibility = "visible";
                this.ShowTabBtn(p, 1);
            };
            Tab.prototype.GetChildNodes = function (element) {
                if (typeof element.children === 'object') {
                    return element.children;
                }
                else if (typeof element.childNodes === 'object') {
                    return element.childNodes;
                }
                return null;
            };
            Tab.prototype.ShowTabBtn = function (p, n) {
                var s = "";
                var color = "#888888";
                var _cur = 'auto';
                if (n == 1) {
                    s = "_sel";
                    color = "black";
                    _cur = 'pointer';
                }
                else if (n == 2) {
                    s = "_over";
                    color = "black";
                    _cur = 'pointer';
                }
                var _rowTitle = this._obj.childNodes[0].rows[0];
                this.GetChildNodes(_rowTitle.cells[p * 3])[0].src = tserp.System.ctx + "/system/images/tab/tab_bgl" + s + ".gif";
                _rowTitle.cells[p * 3 + 1].style.backgroundImage = "url( " + tserp.System.ctx + "/system/images/tab/tab_bgm" + s + ".gif)";
                this.GetChildNodes(_rowTitle.cells[p * 3 + 2])[0].src = tserp.System.ctx + "/system/images/tab/tab_bgr" + s + ".gif";
                _rowTitle.cells[p * 3].style.color = color;
                _rowTitle.cells[p * 3 + 1].style.color = color;
                _rowTitle.cells[p * 3 + 2].style.color = color;
                _rowTitle.cells[p * 3].style.cursor = _cur;
                _rowTitle.cells[p * 3 + 1].style.cursor = _cur;
                _rowTitle.cells[p * 3 + 2].style.cursor = _cur;
            };
            Tab.prototype.fnOnClick = function () {
                var e = window.event.srcElement;
                while (e.tagName != "TABLE" && e.tagName != "TD")
                    e = e.parentNode;
                if (e.tagName == "TD") {
                    var _selfId = e.parentNode.parentElement.parentElement.parentElement.id;
                    var _self = window[_selfId];
                    if (_self) {
                        var c = Math.floor(e.cellIndex / 3);
                        if (c >= _self.PageCount)
                            return;
                        if (_self.curPage != c) {
                            _self.SetPage(c);
                        }
                    }
                }
            };
            Tab.prototype.fnOnMouseOver = function () {
                var e = window.event.srcElement;
                while (e.tagName != "TABLE" && e.tagName != "TD")
                    e = e.parentNode;
                var _selfId = e.parentNode.parentElement.parentElement.parentElement.id;
                if (e.tagName == "TD" && _selfId != '') {
                    var c = Math.floor(e.cellIndex / 3);
                    var _self = window[_selfId];
                    if (_self == null)
                        return;
                    if (c >= _self.PageCount)
                        return;
                    if (_self.overID != c) {
                        if (_self.overID != -1)
                            _self.ShowTabBtn(_self.overID, _self.overID == _self.curPage ? 1 : 0);
                        _self.overID = c;
                        _self.ShowTabBtn(_self.overID, _self.overID == _self.curPage ? 1 : 2);
                    }
                }
            };
            Tab.prototype.fnOnMouseOut = function () {
                var e = window.event.srcElement;
                var _selfId = e.parentNode.parentElement.parentElement.parentElement.id;
                if (_selfId != '') {
                    var _self = window[_selfId];
                    if (_self) {
                        if (_self.overID != -1) {
                            _self.ShowTabBtn(_self.overID, _self.overID == _self.curPage ? 1 : 0);
                            _self.overID = -1;
                        }
                    }
                }
            };
            return Tab;
        }());
        contain.Tab = Tab;
        var Tab2 = (function () {
            function Tab2(element, options) {
                this._InternalUniqueId = '0';
                this.curPage = 0;
                this._ListTabId = [];
                this.startIndex = 0;
                this.tbl = null;
                this.PageCount = 0;
                this._obj = null;
                this.overID = -1;
                this._Tab_Header_Id = '';
                this._Tab_Content_Id = '';
                this.pageActivated = new tserp.Event();
                if (tserp.isString(element)) {
                    this._obj = document.getElementById(element.replace('#', ''));
                }
                else {
                    this._obj = element;
                }
                var tmp = this.GetChildNodes(this._obj);
                this._InternalUniqueId = this._obj.id + '_' + tserp.utils.Common.GetRandomIDByCurrentTime();
                this._Tab_Header_Id = this._InternalUniqueId + '_header';
                this._Tab_Content_Id = this._InternalUniqueId + '_Content';
                var i, j;
                var str = '<table id="' + this._InternalUniqueId + '" cellpadding="0" cellspacing="0" border="0"  width="100%" height="100%">' +
                    ' <tr>' +
                    ' <td style="height:28px;">' +
                    ' <div id="' + this._Tab_Header_Id + '" style="display: inline-flex;">' +
                    this.BuildHeaderTab(this._obj) +
                    ' </div>' +
                    ' </td>' +
                    ' </tr>' +
                    ' <tr>' +
                    ' <td id="' + this._Tab_Content_Id + '"> </td>' +
                    ' </tr>' +
                    ' </table>';
                this._obj.insertAdjacentHTML("afterbegin", str);
                this.BuildContentTab(this._obj);
                this.tbl = this.GetChildNodes(this._obj)[0];
                tserp.utils.addEvent(this.tbl.rows[0], 'click', this.fnOnClick);
                tserp.utils.addEvent(this.tbl.rows[0], 'mouseover', this.fnOnMouseOver);
                tserp.utils.addEvent(this.tbl.rows[0], 'mouseout', this.fnOnMouseOut);
            }
            Tab2.prototype.onPageActivated = function (e) {
                this.pageActivated.raise(this, e);
            };
            Tab2.prototype.BuildHeaderTab = function (obj) {
                var str = '';
                var _nodeList = this.GetChildNodes(obj);
                for (var i = 0; i < _nodeList.length; i++) {
                    var name = _nodeList[i].attributes.getNamedItem('name').nodeValue;
                    var _tabContentId = "esys_tab_content_id" + tserp.utils.Common.GetRandomIDByCurrentTime() + i.toString();
                    _nodeList[i].setAttribute("data-tabContentId", _tabContentId);
                    var _tabId = tserp.utils.Common.GetRandomIDByCurrentTime() + i.toString();
                    this._ListTabId.push(_tabId);
                    var cssNameSel = '';
                    if (this.startIndex == 0 && i == 0) {
                        cssNameSel = "sel";
                    }
                    str += '<table id="' + _tabId + '" title="' + name + '" cellpadding="0" cellspacing="0" border="0"  class="ts-tab-header" data-tabContentId="' + _tabContentId + '" >' +
                        ' <tr>';
                    str += ' <td class="ts-tab-header-left' + ((cssNameSel != '') ? ' ts-tab-header-left-' + cssNameSel : '') + '"> </td>' +
                        '<td class="ts-tab-header-middle' + ((cssNameSel != '') ? ' ts-tab-header-middle-' + cssNameSel : '') + '">' +
                        name +
                        '		</td>' +
                        '		<td class="ts-tab-header-right' + ((cssNameSel != '') ? ' ts-tab-header-right-' + cssNameSel : '') + '"> </td>';
                    str += '</tr>' +
                        '</table>	 	';
                }
                return str;
            };
            Tab2.prototype.BuildContentTab = function (obj) {
                var _nodeList = this.GetChildNodes(obj);
                var isSelTab = true;
                for (var i = 0; i < _nodeList.length; i++) {
                    if (_nodeList[i].attributes.getNamedItem("id").value == this._InternalUniqueId) {
                        continue;
                    }
                    var newTD = document.getElementById(this._InternalUniqueId + "_Content");
                    if (isSelTab == true) {
                        isSelTab = false;
                    }
                    else {
                        tserp.addClass(_nodeList[i], "ts-tab-content-hide");
                    }
                    newTD.appendChild(_nodeList[i]);
                    i--;
                }
            };
            Tab2.prototype.isValidTab = function (idx) {
                if (idx > this._ListTabId.length - 1) {
                    throw new Error('Out of index Tab');
                }
                return true;
            };
            Tab2.prototype.isHiddenTab = function (idx) {
                if (this.isValidTab(idx)) {
                    var tabId = this._ListTabId[idx];
                    if (tabId) {
                        return this.tbl.rows[0].cells[0].children[0].children[idx].style.display == 'none';
                    }
                }
                return false;
            };
            Tab2.prototype.HideTab = function (idx) {
                if (this.isValidTab(idx)) {
                    var tabId = this._ListTabId[idx];
                    if (tabId) {
                        this.tbl.rows[0].cells[0].children[0].children[idx].style.display = 'none';
                        this.tbl.rows[1].cells[0].children[idx].style.display = 'none';
                        this.tbl.rows[1].cells[0].children[idx].setAttribute('class', 'ts-tab-content-hide');
                    }
                }
            };
            Tab2.prototype.ShowTab = function (idx) {
                if (this.isValidTab(idx)) {
                    var tabId = this._ListTabId[idx];
                    if (tabId) {
                        this.tbl.rows[0].cells[0].children[0].children[idx].style.display = '';
                        this.tbl.rows[1].cells[0].children[idx].style.display = '';
                        this.tbl.rows[1].cells[0].children[idx].setAttribute('class', 'ts-tab-content');
                        console.log(this.tbl.rows[1].cells[0].children[idx]);
                    }
                }
            };
            Tab2.prototype.GetContentPart = function () {
                return document.getElementById(this._Tab_Content_Id);
            };
            Tab2.prototype.GetChildNodes = function (element) {
                if (typeof element.children === 'object') {
                    return element.children;
                }
                else if (typeof element.childNodes === 'object') {
                    return element.childNodes;
                }
                return null;
            };
            Tab2.prototype.GetCurrentPageNo = function () {
                return this.curPage;
            };
            Tab2.prototype.GetCurrentPage = function () {
                var tabId = this._ListTabId[this.curPage];
                var tabData = document.getElementById(tabId);
                if (tabData) {
                    var tabContentId = tabData.getAttribute("data-tabContentId");
                    var _contentLst = tserp.utils.Dom.getElementsByAttribute(this.GetContentPart(), 'data-tabContentId');
                    for (var i = 0; i < _contentLst.length; i++) {
                        if (_contentLst[i].getAttribute('data-tabContentId') == tabContentId) {
                            return _contentLst[i];
                        }
                    }
                }
                return null;
            };
            Tab2.prototype.SelectedTabById = function (tabId) {
                this.UnSelectedTabByIndex(this.curPage);
                var tabData = document.getElementById(tabId);
                if (tabData) {
                    this.removeCSSForTab(tabData, '-over');
                    this.setCSSForTab(tabData, '-sel');
                    var tabContentId = tabData.getAttribute("data-tabContentId");
                    var _contentLst = tserp.utils.Dom.getElementsByAttribute(this.GetContentPart(), 'data-tabContentId');
                    for (var i = 0; i < _contentLst.length; i++) {
                        if (_contentLst[i].getAttribute('data-tabContentId') == tabContentId) {
                            tserp.utils.Dom.removeClassElement(_contentLst[i], 'ts-tab-content-hide');
                            tserp.utils.Dom.addClassElement(_contentLst[i], 'ts-tab-content-show');
                        }
                    }
                    this.curPage = this.updateCurrPage(tabId);
                    var _TabEventArgs = new tserp.TabEventArgs();
                    _TabEventArgs.TabIdx = this.curPage;
                    this.onPageActivated(_TabEventArgs);
                }
            };
            Tab2.prototype.UnSelectedTabById = function (tabId) {
                var tabData = document.getElementById(tabId);
                if (tabData) {
                    this.removeCSSForTab(tabData, '-over');
                    this.removeCSSForTab(tabData, '-sel');
                    var tabContentId = tabData.getAttribute("data-tabContentId");
                    var _contentLst = tserp.utils.Dom.getElementsByAttribute(this.GetContentPart(), 'data-tabContentId');
                    for (var i = 0; i < _contentLst.length; i++) {
                        if (_contentLst[i].getAttribute('data-tabContentId') == tabContentId) {
                            tserp.utils.Dom.removeClassElement(_contentLst[i], 'ts-tab-content-show');
                            tserp.utils.Dom.addClassElement(_contentLst[i], 'ts-tab-content-hide');
                        }
                    }
                }
            };
            Tab2.prototype.SelectedTabByIndex = function (idx) {
                if (this.isValidTab(idx)) {
                    var tabId = this._ListTabId[idx];
                    this.curPage = idx;
                    this.SelectedTabById(tabId);
                }
            };
            Tab2.prototype.UnSelectedTabByIndex = function (idx) {
                if (this.isValidTab(idx)) {
                    var tabId = this._ListTabId[idx];
                    this.UnSelectedTabById(tabId);
                }
            };
            Tab2.prototype.updateCurrPage = function (tabId) {
                for (var i = 0; i < this._ListTabId.length; i++) {
                    if (this._ListTabId[i] == tabId) {
                        return i;
                    }
                }
                return 0;
            };
            Tab2.prototype.fnOnClick = function (event) {
                var e = window.event.srcElement;
                while (e.tagName != "TABLE" && e.tagName != "TD")
                    e = e.parentNode;
                var _headerEl = e.parentNode.parentElement.parentElement;
                if (_headerEl.getAttribute('class')) {
                    if (_headerEl.getAttribute('class').indexOf('ts-tab-header') > -1) {
                        var _selfId = _headerEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
                        if (_selfId != '') {
                            var _self = window[_selfId];
                            _self.SelectedTabById(_headerEl.id);
                        }
                    }
                }
            };
            Tab2.prototype.removeCSSForTab = function (tabelement, cssName) {
                if (tabelement) {
                    var _lst = tabelement.getElementsByTagName("TD");
                    tserp.removeClass(_lst[0], 'ts-tab-header-left' + cssName);
                    tserp.removeClass(_lst[1], 'ts-tab-header-middle' + cssName);
                    tserp.removeClass(_lst[2], 'ts-tab-header-right' + cssName);
                }
            };
            Tab2.prototype.setCSSForTab = function (tabelement, cssName) {
                if (tabelement) {
                    var _lst = tabelement.getElementsByTagName("TD");
                    tserp.addClass(_lst[0], 'ts-tab-header-left' + cssName);
                    tserp.addClass(_lst[1], 'ts-tab-header-middle' + cssName);
                    tserp.addClass(_lst[2], 'ts-tab-header-right' + cssName);
                }
            };
            Tab2.prototype.fnOnMouseOver = function (event) {
                var e = window.event.srcElement;
                while (e.tagName != "TABLE" && e.tagName != "TD")
                    e = e.parentNode;
                var _headerEl = e.parentNode.parentElement.parentElement;
                if (_headerEl.getAttribute('class')) {
                    if (_headerEl.getAttribute('class').indexOf('ts-tab-header') > -1) {
                        var _selfId = _headerEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
                        if (_selfId != '') {
                            var _self = window[_selfId];
                            _self.setCSSForTab(_headerEl, "-over");
                        }
                    }
                }
            };
            Tab2.prototype.fnOnMouseOut = function (event) {
                var e = window.event.srcElement;
                while (e.tagName != "TABLE" && e.tagName != "TD")
                    e = e.parentNode;
                var _headerEl = e.parentNode.parentElement.parentElement;
                if (_headerEl.getAttribute('class')) {
                    if (_headerEl.getAttribute('class').indexOf('ts-tab-header') > -1) {
                        var _selfId = _headerEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
                        if (_selfId != '') {
                            var _self = window[_selfId];
                            _self.removeCSSForTab(_headerEl, "-over");
                        }
                    }
                }
            };
            return Tab2;
        }());
        contain.Tab2 = Tab2;
    })(contain = tserp.contain || (tserp.contain = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var contain;
    (function (contain) {
        var PanelType;
        (function (PanelType) {
            PanelType[PanelType["IFRAME"] = 0] = "IFRAME";
            PanelType[PanelType["DIV"] = 1] = "DIV";
        })(PanelType = contain.PanelType || (contain.PanelType = {}));
        var Panel = (function (_super) {
            __extends(Panel, _super);
            function Panel(element, options, arg_ctx) {
                if (arg_ctx === void 0) { arg_ctx = null; }
                var _this = _super.call(this, element) || this;
                _this._panelTitile = '';
                _this._showPanelTitile = true;
                _this._urlSrc = '';
                _this._panelType = PanelType.IFRAME;
                _this._formtolang = undefined;
                if (arg_ctx == null) {
                    arg_ctx = '';
                }
                _this._ctx = arg_ctx;
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-panel ts-content', tpl, {
                    _iframe: 'panelif',
                    _div: 'paneldiv',
                    _a: 'adic',
                    _img: 'pnllangImg',
                    _toolHeader: 'panelheader'
                }, 'panel');
                _this._img.src = _this._ctx + "/system/images/core/icon-dict.png";
                if (_this._orgTag == 'IFRAME') {
                    var value = _this._iframe.getAttribute('src');
                    if (value) {
                        _this.urlSrc = value;
                    }
                }
                _this.initialize(options);
                var self = _this;
                _this._iframe.addEventListener('load', function (e) {
                    var doc = null;
                    console.log(this);
                    try {
                        if (self._formtolang) {
                            self.TranslateLanguage(self._formtolang);
                        }
                    }
                    catch (err) {
                        alert('error: ' + err.description);
                    }
                    console.log(this);
                }.bind(_this), false);
                _this._a.addEventListener('click', function (e) {
                    var _ojbId = tserp.System.getQueryParameterFromUrl(self.src, 'objId');
                    if (_ojbId) {
                        if (typeof top.window['onDictionaryPanel'] === 'function') {
                            var val = {
                                objId: _ojbId,
                                win: tserp.utils.Common.GetIframeWindow(self.IframeElement),
                                doc: tserp.utils.Common.GetIframeDocument(self.IframeElement)
                            };
                            top.window['onDictionaryPanel'](val);
                        }
                    }
                }, false);
                _this._iframe.addEventListener('focus', function () {
                });
                _this._iframe.addEventListener('click', function () {
                });
                return _this;
            }
            Panel.prototype.TranslateLanguage = function (formtolang) {
                this._formtolang = formtolang;
                var _ojbId = tserp.System.getQueryParameterFromUrl(this.src, 'objId');
                if (_ojbId) {
                    var _win = tserp.utils.Common.GetIframeWindow(this.IframeElement);
                    if (_win) {
                        setTimeout(function (_win) {
                            if (_win.System) {
                                _win.System.TranslateLanguage(undefined, formtolang);
                            }
                        }, 100, _win);
                    }
                }
            };
            Object.defineProperty(Panel.prototype, "ctx", {
                get: function () {
                    return this._ctx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "panelTitile", {
                get: function () {
                    return this._panelTitile;
                },
                set: function (val) {
                    this._panelTitile = tserp.asString(val, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "showPanelTitile", {
                get: function () {
                    return this._showPanelTitile;
                },
                set: function (val) {
                    this._showPanelTitile = tserp.asBoolean(val, false);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "urlSrc", {
                get: function () {
                    return this._urlSrc;
                },
                set: function (val) {
                    this._urlSrc = tserp.asString(val, false);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "IframeElement", {
                get: function () {
                    return this._iframe;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "value", {
                get: function () {
                    return this._iframe.src;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._iframe.src = tserp.asString(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Panel.prototype, "src", {
                get: function () {
                    return this._iframe.src;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._iframe.src = tserp.asString(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Panel.prototype.GetControl = function () {
                return this.IframeElement;
            };
            Panel.prototype.GetDocument = function () {
                if (this._iframe) {
                    if (typeof this._iframe.contentWindow != 'undefined') {
                        return this._iframe.contentWindow;
                    }
                    else {
                        return this._iframe.window;
                    }
                }
            };
            Panel.controlTemplate = '<div class="ts-panel"> <div ts-part="panelheader" class="ts-pannel-header">' +
                '<a href="javascript:void(0);" ts-part="adic" title="Open Dictionary" >' +
                '   <img ts-part="pnllangImg"  width= "19" >' +
                '</a>' +
                '</div><div class="ts-panel-content">' +
                '<div ts-part="paneldiv" class="ts-panel ts-form-control" style="display:none;"></div>' +
                '<iframe ts-part="panelif" class="ts-panel ts-form-control" ><iframe>' +
                '</div>' +
                '</div>';
            return Panel;
        }(tserp.Control));
        contain.Panel = Panel;
    })(contain = tserp.contain || (tserp.contain = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.contain.js.map