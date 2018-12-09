var tserp;
(function (tserp) {
    var fwtabs = (function () {
        function fwtabs(op) {
            this._ctx = '';
            this._idTab = "idTab";
            this._idContent = "idContent";
            this._idWorkspace = "idWorkspace";
            this._imgShowMenu = "imgShowMenu";
            this._idTabScroll = "idTabScroll";
            this._idScrollLeft = "idScrollLeft";
            this._idScrollRight = "idScrollRight";
            this._imgDebug = "imgDebug";
            this.nPos = 0;
            this.nCount = 0;
            this.gReload = false;
            this.nScrollDelta = 0;
            this.nScrollID = 0;
            this.showType = 1;
            this.S_Lang = 'VIE';
            this.Gb_TableStyle = "width:100%;height:100%;border:0px;";
            this.Gb_TableBorder = 0;
            this.Gb_TdStyle1 = "";
            this.Gb_TdStyle2 = "color:#666666;font-weight:bold";
            this.Gb_FrameStyle = "width:100%;height:100%;";
            this.Gb_FrameBorder = 0;
            op = op || {};
            this._ctx = op.ctx || '';
            this.Gb_TdStyle1 = "background-image:url(" + this._ctx + "system/images/tab/title_bar_bgr.gif);height:30px";
        }
        fwtabs.prototype.ShowMenu = function () {
            var obj = document.getElementById(this._idWorkspace);
            if (obj) {
                var imgShowMenu = document.getElementById(this._imgShowMenu);
                if (obj.style.visibility == "hidden") {
                    obj.style.visibility = "";
                    obj.style.display = "";
                    obj.parentNode.style.width = '250px';
                    obj.focus();
                    if (imgShowMenu) {
                        imgShowMenu.style.display = "none";
                    }
                }
                else {
                    obj.style.visibility = "hidden";
                    obj.style.display = "none";
                }
            }
        };
        fwtabs.prototype.HideAppMenu = function () {
            var obj = document.getElementById(this._idWorkspace);
            if (obj) {
                var imgShowMenu = document.getElementById(this._imgShowMenu);
                obj.style.visibility = "hidden";
                obj.style.display = "none";
                obj.parentNode.style.width = '';
                if (imgShowMenu) {
                    imgShowMenu.style.display = "";
                    imgShowMenu.style.visibility = "";
                }
            }
        };
        fwtabs.prototype.PinClick = function () {
            var obj = event.srcElement;
            var pobj = obj;
            while (pobj.id != "idWorkspace")
                pobj = pobj.parentNode;
            if (pobj.pin == "off") {
                pobj.pin = "on";
            }
            else {
                pobj.pin = "off";
            }
            obj.src = this._ctx + "system/images/main/pin" + pobj.pin + ".png";
        };
        fwtabs.prototype.getTabsCount = function () {
            var idTab = document.getElementById(this._idTab);
            if (idTab) {
                return document.getElementById(this._idTab).childNodes.length;
            }
            else {
                return 0;
            }
        };
        fwtabs.prototype.NewWindow = function (url, Title, lTitle, fTitle, menu_id, menu_cd, menu_path) {
            if (!Title)
                return;
            this._url = url;
            this._Title = Title;
            this._lTitle = lTitle;
            this._fTitle = fTitle;
            this._menu_id = menu_id;
            this._menu_cd = menu_cd;
            this._menu_path = menu_path;
            var aTemp = new Array();
            var idx, sTitle;
            if (this.S_Lang == "VIE") {
                sTitle = lTitle;
            }
            else if (this.S_Lang == "KOR") {
                sTitle = fTitle;
            }
            else {
                sTitle = Title;
            }
            if (this.showType == 1) {
                idx = this.FindTab(menu_cd + " " + sTitle);
                var idTab = document.getElementById(this._idTab);
                if ((idx != -1) && (idx < idTab.childNodes.length)) {
                    this.SelectTab(idx);
                    var currForm = this.GetTabContent(idx);
                    var frm = currForm.childNodes[0].childNodes[1].childNodes[0].childNodes[0];
                    if (confirm("Do you want to reload this form ?")) {
                        frm.src = url;
                    }
                }
                else {
                    if (this.S_Lang == "ENG") {
                        this.addTabs(url, Title, lTitle, fTitle, menu_id, menu_cd, menu_path);
                    }
                    else {
                        var sIdx = url.lastIndexOf("/");
                        var eIdx = url.indexOf(".aspx");
                        var form_id = url.substr(sIdx + 1, eIdx - sIdx - 1);
                    }
                }
            }
            else {
                if (this.S_Lang == "VIE") {
                    this.addTabs(url, Title, lTitle, fTitle, menu_id, menu_cd, menu_path);
                }
                else {
                    var sIdx = url.lastIndexOf("/");
                    var eIdx = url.indexOf(".aspx");
                    var form_id = url.substr(sIdx + 1, eIdx - sIdx - 1);
                }
            }
        };
        fwtabs.prototype.addTabs = function (url, Title, lTitle, fTitle, menu_id, menu_cd, menu_path) {
            var sTitle;
            if (this.S_Lang == "VIE") {
                sTitle = menu_cd + " " + lTitle;
            }
            else if (this.S_Lang == "KOR") {
                sTitle = menu_cd + " " + fTitle;
            }
            else {
                sTitle = menu_cd + " " + Title;
            }
            var i = url.lastIndexOf("/");
            var eIdx = url.indexOf(".aspx");
            var short_url = url.substr(0, eIdx + 5);
            this.SetNormal();
            var idTab = document.getElementById(this._idTab);
            idTab.insertAdjacentHTML('afterbegin', '<table onmouseout="outTab(this)" onmouseover="overTab(this)" onclick="ClickTab(this)" onactive="" onunactive="" menucd="' + menu_cd + '" menuid="' + menu_id + '" title="' + sTitle + '" etitle="' + menu_cd + ' ' + Title + '" ltitle="' + menu_cd + ' ' + lTitle + '" ftitle="' + menu_cd + ' ' + fTitle + ' cellpadding="0" cellspacing="0"><tr><td class="left"></td><td class="middile">' + sTitle + '</td><td class="right"></td></tr></table>');
            var idContent = document.getElementById("idContent");
            idContent.insertAdjacentHTML("afterbegin", '<table style="' + this.Gb_TableStyle + '"  height="100%" border=' + this.Gb_TableBorder + ' cellspacing=0 cellpadding=0 >' +
                '<tr>	' +
                '	<td style="' + this.Gb_TdStyle1 + '">' +
                '		<table border=0 width="100%" ><tr>' +
                '			<td  align="left" width=2%>' +
                '				<img src="' + this._ctx + 'system/images/main/iconapplication.gif" title=' + url + ' align="absMiddle">' +
                '			</td>' +
                '			<td  id="idTitle" width="70%" style="' + this.Gb_TdStyle2 + '" align="left">[' + menu_path + '][Menu: ' + menu_cd + ']</td>' +
                '			<td  id="idTitle" width="21%" style="' + this.Gb_TdStyle2 + '" align="right"><b>Welcome [' + 'System.S_UserName' + ']</td>' +
                '			<td align="right" width=7%><nobr>' +
                '				<img style="cursor:hand" src="' + this._ctx + 'system/images/main/dictionary.png" alt="open dictionary" align="absMiddle" onclick="ExecuteFile()">' +
                '				<img style="cursor:hand" alt="help" src="' + this._ctx + 'system/images/main/iconpopup.png" align="absMiddle" onclick="openUserGuide(\'' + url + '\')">' +
                '				<img src="' + this._ctx + 'system/images/main/iconminimize.png" alt="next window" align="absMiddle" onclick="NextWindow()">' +
                '				<img src="' + this._ctx + 'system/images/main/iconexit.png" alt="close window" align="absMiddle" onclick="DeleteWindow()">' +
                '				</nobr>' +
                '			</td>' +
                '		</tr></table>' +
                '	</td>' +
                '</tr>' +
                '<tr>' +
                '	<td  width="100%" height="100%" border=0>' +
                '		<iframe id="frmContent" src="' + ((this._ctx === '/') ? url : this._ctx + url.replace('..', '')) + '"  style="padding:0 0 0 0;' + this.Gb_FrameStyle + '" frameborder=' + this.Gb_FrameBorder + '  onload="OnPageLoad()">	</iframe>' +
                '	</td>' +
                '</tr>' +
                '</table>	');
            this.nCount = this.nCount + 1;
            this.nPos = 0;
            this.SetSelect();
        };
        ;
        fwtabs.prototype._getSelectTab = function () {
            var idTab = document.getElementById(this._idTab);
            if (idTab) {
                var nPos = idTab.getAttribute("nPos");
                if (nPos == undefined) {
                    nPos = 0;
                }
            }
            return nPos;
        };
        ;
        fwtabs.prototype._SetSelectTab = function (pos) {
            var idTab = document.getElementById(this._idTab);
            if (idTab) {
                idTab.setAttribute("nPos", pos);
            }
            return pos;
        };
        ;
        fwtabs.prototype.SetNormal = function () {
            if (this.nCount > 0) {
                var idTab = this.GetTabTitle(this.nPos);
                var nPos = 0;
                idTab.className = 'tab';
                var title = idTab.title;
                if (title.length > 18)
                    title = title.substr(0, 18) + "...";
                idTab.getElementsByTagName('TD')[1].innerText = title;
                var idContent = this.GetTabContent(this.nPos);
                idContent.style.display = "none";
            }
        };
        fwtabs.prototype.SetSelect = function () {
            if (this.nCount >= 0) {
                var nPos = this.nPos;
                var idTab = this.GetTabTitle(nPos);
                if (idTab) {
                    idTab.className = 'activeTab';
                    idTab.getElementsByTagName('TD')[1].innerText = idTab.title;
                    var idContent = this.GetTabContent(nPos);
                    if (idContent.style)
                        idContent.style.display = "";
                    idContent.focus();
                }
            }
            this.CheckScroll();
        };
        fwtabs.prototype.IsActive = function (p_tittle) {
            var idx = this.FindTab(p_tittle);
            if (idx >= 0) {
                var idTab = this.GetTabTitle(idx);
                if (idTab) {
                    if (idTab.className == 'activeTab') {
                        return true;
                    }
                }
            }
            return false;
        };
        fwtabs.prototype.FindTab = function (tlt) {
            var idTab = document.getElementById(this._idTab);
            if (idTab) {
                var pobj = idTab;
                var i = 0;
                while (i < idTab.childNodes.length) {
                    var obj = idTab.childNodes[i];
                    if (obj.tagName == "TABLE") {
                        if (obj.title == tlt) {
                            return i;
                        }
                    }
                    i++;
                }
            }
            return -1;
        };
        fwtabs.prototype.SelectTab = function (idx) {
            if (idx != -1 && idx != this.nPos) {
                this.SetNormal();
                this.nPos = idx;
                this.SetSelect();
            }
        };
        fwtabs.prototype.GetTabTitle = function (npos) {
            var idTab = document.getElementById(this._idTab);
            if (typeof idTab.children === 'object') {
                return idTab.children[npos];
            }
            else if (typeof idTab.childNodes === 'object') {
                return idTab.childNodes[npos];
            }
            return null;
        };
        fwtabs.prototype.GetTabContent = function (npos) {
            var idContent = document.getElementById(this._idContent);
            if (typeof idContent.children === 'object') {
                return idContent.children[npos];
            }
            else if (typeof idContent.childNodes === 'object') {
                return idContent.childNodes[npos];
            }
            return null;
        };
        fwtabs.prototype.ClickTab = function () {
            var obj = event.srcElement;
            var pobj;
            while (obj.tagName != "TABLE")
                obj = obj.parentNode;
            pobj = obj.parentNode;
            var pos = -1;
            for (var i = 0; i < pobj.childNodes.length; i++) {
                if (pobj.childNodes[i] == obj) {
                    pos = i;
                    break;
                }
            }
            if (pos != -1 && pos != this.nPos) {
                this.SetNormal();
                this.nPos = pos;
                this.SetSelect();
                var tabTilte;
                var _TabObj = this.GetTabTitle(this.nPos);
                if (tserp.System.S_Lang == "ENG") {
                    tabTilte = _TabObj.etitle;
                }
                else if (tserp.System.S_Lang == "VIE") {
                    tabTilte = _TabObj.ltitle;
                }
                else {
                    tabTilte = _TabObj.ftitle;
                }
            }
        };
        fwtabs.prototype.overTab = function (obj) {
            var pobj;
            while (obj.tagName != "TABLE")
                obj = obj.parentNode;
            pobj = obj.parentNode;
            var pos = -1;
            for (var i = 0; i < pobj.childNodes.length; i++) {
                if (pobj.childNodes[i] == obj) {
                    pos = i;
                    break;
                }
            }
            if (pos != this.nPos) {
                obj.className = 'overTab';
            }
        };
        fwtabs.prototype.outTab = function (obj) {
            var pobj;
            while (obj.tagName != "TABLE")
                obj = obj.parentNode;
            pobj = obj.parentNode;
            var pos = -1;
            for (var i = 0; i < pobj.childNodes.length; i++) {
                if (pobj.childNodes[i] == obj) {
                    pos = i;
                    break;
                }
            }
            if (pos != this.nPos) {
                obj.className = 'tab';
            }
        };
        fwtabs.prototype.NextWindow = function () {
            if (this.nCount > 1) {
                this.SetNormal();
                this.nPos++;
                if (this.nPos == this.nCount)
                    this.nPos = 0;
                this.SetSelect();
            }
        };
        fwtabs.prototype.DeleteWindow = function () {
            if (this.nCount > 0) {
                this.nCount--;
                var idTab = document.getElementById(this._idTab);
                var idContent = document.getElementById(this._idContent);
                var tabInfo = idTab.childNodes[this.nPos];
                if (tabInfo) {
                    if (tabInfo.nodeName === '#text') {
                        tabInfo = idTab.children[this.nPos];
                        idTab.removeChild(tabInfo);
                    }
                    else {
                        idTab.removeChild(idTab.childNodes[this.nPos]);
                    }
                }
                var tabContent = idContent.childNodes[this.nPos];
                if (tabContent) {
                    if (tabContent.nodeName === '#text') {
                        tabContent = idContent.children[this.nPos];
                        idTab.removeChild(tabContent);
                    }
                    else {
                        idContent.removeChild(tabContent);
                    }
                }
                this.nPos = 0;
                this.SetSelect();
            }
        };
        fwtabs.prototype.fnScrollTick = function (tabs) {
            var idTabScroll = document.getElementById(tabs._idTab);
            if (idTabScroll) {
                if (idTabScroll.scrollLeft == undefined) {
                    idTabScroll.scrollLeft = 0;
                }
                idTabScroll.scrollLeft += tabs.nScrollDelta;
                tabs.CheckScroll();
            }
        };
        fwtabs.prototype.Scroll = function (d) {
            this.nScrollDelta = d * 10;
            this.nScrollID = setInterval(this.fnScrollTick, 50, this);
        };
        fwtabs.prototype.ScrollStop = function () {
            if (this.nScrollID != 0) {
                clearInterval(this.nScrollID);
                this.nScrollID = 0;
            }
        };
        fwtabs.prototype.CheckScroll = function () {
            var idTabScroll = document.getElementById(this._idTab);
            if (idTabScroll) {
                var idScrollLeft = document.getElementById(this._idScrollLeft);
                var idScrollRight = document.getElementById(this._idScrollRight);
                if (idTabScroll.scrollLeft == 0)
                    idScrollLeft.style.display = "none";
                else
                    idScrollLeft.style.display = "";
                if (idTabScroll.offsetWidth < idTabScroll.scrollWidth - idTabScroll.scrollLeft)
                    idScrollRight.style.display = "";
                else
                    idScrollRight.style.display = "none";
            }
        };
        fwtabs.prototype.initData = function (debug_yn, lang) {
            var obj = document.getElementById("imgType");
            this.showType = obj.status;
            obj = top.document.getElementById(this._imgDebug);
            if (obj) {
                if (debug_yn == "Y") {
                    obj.style.display = "";
                }
                else {
                    obj.style.display = "none";
                }
            }
        };
        fwtabs.prototype.ShowTypeClick = function (obj) {
            if (obj) {
                console.log(obj.getAttribute('status'));
                if (obj.getAttribute('status') == 0) {
                    obj.src = tserp.System.ctx + 'system/images/main/pinon.png';
                    obj.setAttribute('status', 1);
                }
                else {
                    obj.src = tserp.System.ctx + 'system/images/main/pinoff.png';
                    obj.setAttribute('status', 0);
                }
                this.showType = obj.getAttribute('status');
            }
        };
        fwtabs.prototype.PinOver = function (obj) {
            if (obj) {
                if (obj.status == 0) {
                    obj.src = tserp.System.ctx + 'system/images/main/pinoff_over.png';
                }
                else {
                    obj.src = tserp.System.ctx + 'system/images/main/pinon_over.png';
                }
            }
        };
        fwtabs.prototype.PinOut = function (obj) {
            if (obj) {
                if (obj.status == 0) {
                    obj.src = tserp.System.ctx + 'system/images/main/pinoff.png';
                }
                else {
                    obj.src = tserp.System.ctx + 'system/images/main/pinon.png';
                }
            }
        };
        return fwtabs;
    }());
    tserp.fwtabs = fwtabs;
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.fwtabs.js.map