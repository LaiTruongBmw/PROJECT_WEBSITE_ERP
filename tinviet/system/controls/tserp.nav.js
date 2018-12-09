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
    var nav;
    (function (nav) {
        var TreeView = (function (_super) {
            __extends(TreeView, _super);
            function TreeView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TreeView.controlTemplate = '<div ts-part="root"></div>';
            return TreeView;
        }(tserp.Control));
        nav.TreeView = TreeView;
        var _BindingArray = (function () {
            function _BindingArray() {
            }
            return _BindingArray;
        }());
        nav._BindingArray = _BindingArray;
        var ClassicTreeViewImageStautus;
        (function (ClassicTreeViewImageStautus) {
            ClassicTreeViewImageStautus[ClassicTreeViewImageStautus["imgNone"] = 0] = "imgNone";
            ClassicTreeViewImageStautus[ClassicTreeViewImageStautus["imgOpen"] = 1] = "imgOpen";
            ClassicTreeViewImageStautus[ClassicTreeViewImageStautus["imgClose"] = 2] = "imgClose";
        })(ClassicTreeViewImageStautus = nav.ClassicTreeViewImageStautus || (nav.ClassicTreeViewImageStautus = {}));
        var ClassicTreeView = (function (_super) {
            __extends(ClassicTreeView, _super);
            function ClassicTreeView(element, options, ctxval) {
                if (ctxval === void 0) { ctxval = ""; }
                var _this = _super.call(this, element) || this;
                _this._ctx = '';
                _this.currentNode = null;
                _this.latecurrentid = null;
                _this.latecurrentitem = null;
                _this.pURL = null;
                _this.sURL = null;
                _this.itemid = 'PK';
                _this.itemtext = 'TEXT';
                _this.parentid = 'P_PK';
                _this.levNode = 'LEV';
                _this.bDrag = false;
                _this.bMouseDown = false;
                _this.bDragElement = null;
                _this.selElement = null;
                _this.varElement = null;
                _this.modifyList = new Array();
                _this.imgList = null;
                _this.clickNode = new tserp.Event();
                _this._ctx = ctxval;
                _this.imgList = new Array(_this.ctx + "system/images/classtreeview/vline01.gif", _this.ctx + "system/images/classtreeview/plus01.gif", _this.ctx + "system/images/classtreeview/minus01.gif", _this.ctx + "system/images/classtreeview/vline02.gif", _this.ctx + "system/images/classtreeview/plus02.gif", _this.ctx + "system/images/classtreeview/minus02.gif");
                var tpl = _this.getTemplate();
                _this.applyTemplate('esys-control esys-treeview esys-content', tpl, {
                    _nodeRoot: 'nodeRoot',
                    _nodeDownload: 'nodeDownload',
                    _nodeDefault: 'nodeDefault',
                    _nodeDefaultChild: 'nodeDefaultChild',
                    _nodeDragIcon: 'nodeDragIcon'
                }, 'div');
                if (_this._orgTag == 'DIV') {
                    _this._copyOriginalAttributes(_this._nodeRoot);
                    var value = _this._nodeRoot.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                    var _itemid = _this._nodeRoot.getAttribute('itemid') || 'PK';
                    if (_itemid) {
                        _this.itemid = _itemid;
                    }
                    var _parentid = _this._nodeRoot.getAttribute('parentid') || 'P_PK';
                    if (_parentid) {
                        _this.parentid = _parentid;
                    }
                    var _itemtext = _this._nodeRoot.getAttribute('itemtext') || 'TEXT';
                    if (_itemtext) {
                        _this.itemtext = _itemtext;
                    }
                    var _levNode = _this._nodeRoot.getAttribute('lev') || 'LEV';
                    if (_levNode) {
                        _this.levNode = _levNode;
                    }
                }
                _this.initialize(options);
                var offsetHeight = _this.hostElement.offsetHeight;
                if (offsetHeight < 300) {
                    offsetHeight = 300;
                }
                var offsetWidth = _this.hostElement.offsetWidth;
                if (offsetWidth < 300) {
                    offsetWidth = 300;
                }
                _this.hostElement.childNodes[0].style.width = +offsetWidth + 'px';
                _this.hostElement.childNodes[0].style.height = +offsetHeight + 'px';
                _this.hostElement.childNodes[0].style.overflow = 'auto';
                var self = _this;
                _this._nodeRoot.addEventListener('click', function (event) {
                    self.fnOnClick(self, event);
                });
                _this.hostElement.addEventListener('resize', function (event) {
                });
                return _this;
            }
            ClassicTreeView.prototype.GetData = function () {
                var s = "";
                for (var i = 0; i < this.modifyList.length; i++) {
                    if (i > 0)
                        s += tserp.System.RDelimiter;
                    s += this.modifyList[i][0] + tserp.System.CDelimiter + this.modifyList[i][1] + tserp.System.CDelimiter + "16";
                }
                return s;
            };
            ClassicTreeView.prototype.SetData = function (data) {
                var l_levelKey = this.levNode;
                if (data) {
                    this.modifyList = new Array();
                    var Data = new Array();
                    var firstlevel;
                    for (var x = 0; x < data.length; x++) {
                        var row = data[x];
                        var arr = row;
                        if (x == 0) {
                            firstlevel = arr[l_levelKey];
                        }
                        arr[l_levelKey] -= firstlevel;
                        this.AddList(Data, arr);
                    }
                    var Sibling = new Array();
                    var oldlevel = -999;
                    var s = "";
                    this._nodeRoot.innerHTML = "";
                    var pDiv = this._nodeRoot;
                    for (var x = 0; x < Data.length; x++) {
                        var level = Data[x][l_levelKey];
                        var name = Data[x][this.itemtext];
                        var pk = Data[x][this.itemid];
                        var lst = Data[x]["LST"];
                        var img = Data[x]["TYPE"];
                        var bShow = !(Data[x]["0"] == 0);
                        if (oldlevel != -999) {
                            for (var i = level; i <= oldlevel; i++) {
                                pDiv = pDiv.parentNode.parentNode;
                            }
                        }
                        var bSibling = false;
                        var bChild = false;
                        for (var y = x + 1; y < Data.length; y++) {
                            if (Data[y][l_levelKey] < level)
                                break;
                            if (Data[y][l_levelKey] == level) {
                                bSibling = true;
                                break;
                            }
                            bChild = true;
                        }
                        Sibling[level] = bSibling;
                        var is = "";
                        for (var j = 0; j < level; j++) {
                            if (!Sibling[j])
                                is += "<img align=\"absMiddle\"  border=0 src=\"" + this.ctx + "system/images/classtreeview/none.gif\">";
                            else
                                is += "<img align=\"absMiddle\"  border=0 src=\"" + this.ctx + "system/images/classtreeview/vline.gif\">";
                        }
                        var imgid = ClassicTreeViewImageStautus.imgOpen;
                        var imgurl;
                        if (!bChild)
                            imgid = ClassicTreeViewImageStautus.imgNone;
                        else if (bShow) {
                            imgid = ClassicTreeViewImageStautus.imgClose;
                        }
                        if (!bSibling)
                            imgurl = this.imgList[imgid];
                        else
                            imgurl = this.imgList[imgid + 3];
                        is += "<img types=\"openclose\" align=\"absMiddle\" style=\"cursor:hand\" src=\"" + imgurl + "\" border=0 >";
                        is += "<span><img align=\"absMiddle\" style=\"cursor:hand\" src=\"" + this.GetAppTreeImage(img) + "\" border=0 >&nbsp;";
                        var _text = name;
                        name = name + "</span>";
                        var sRead = "yes";
                        if (!bChild)
                            sRead = "none";
                        if (!bSibling)
                            s = "<div data-item='" + JSON.stringify(Data[x]) + "' id='nodes' lst = '" + lst + "' read='" + sRead + "' depth='" + level + "' img='" + img + "' oid='" + pk + "' text='" + _text + "' lastnode=true ><nobr style='cursor:hand' internals='yes' >" + is + name + "</nobr>";
                        else
                            s = "<div data-item='" + JSON.stringify(Data[x]) + "' id='nodes' lst = '" + lst + "' read='" + sRead + "' depth='" + level + "' img='" + img + "' oid='" + pk + "' text='" + _text + "' ><nobr style='cursor:hand'  internals='yes' >" + is + name + "</nobr>";
                        if (!bChild || !bShow)
                            s += "<div style='display:none'></div></div>";
                        else
                            s += "<div></div></div>";
                        pDiv.insertAdjacentHTML("beforeend", s);
                        pDiv = pDiv.childNodes[pDiv.childNodes.length - 1];
                        pDiv = pDiv.childNodes[pDiv.childNodes.length - 1];
                        oldlevel = level;
                    }
                    this.NavigateRecursive(this._nodeRoot);
                }
            };
            ClassicTreeView.prototype.AddList = function (list, obj) {
                var i = list.length;
                list[i] = obj;
            };
            ClassicTreeView.prototype.NavigateRecursive = function (node) {
                if (!node)
                    return;
                if (node.childNodes.length == 0)
                    return;
                var _self = this;
                for (var i = 0; i < node.childNodes.length; i++) {
                    var nd = node.childNodes[i];
                    if (nd.childNodes[0].childNodes.length == 0)
                        continue;
                    var namend = nd.childNodes[0].childNodes[nd.childNodes[0].childNodes.length - 1];
                    namend.addEventListener('mousedown', function (event) {
                        _self.NodeDown(_self, event);
                    });
                    namend.addEventListener('mousemove', function (event) {
                        _self.NodeMove(_self, event);
                    });
                    namend.addEventListener('mouseup', function (event) {
                        _self.NodeUp(_self, event);
                    });
                    this.NavigateRecursive(nd.childNodes[1]);
                }
                return;
            };
            ClassicTreeView.prototype.SetDataDownload = function (s) {
                var nodeCanvas = this._nodeRoot;
                this._nodeDownload.innerHTML = s;
                this.Parse(nodeCanvas, this._nodeDownload);
            };
            ClassicTreeView.prototype.GetParentNodeFromCanvas = function (nd) {
                if (nd == this._nodeRoot)
                    return null;
                return nd.parentNode;
            };
            ClassicTreeView.prototype.fnPutURL = function (s) {
                if (this._nodeRoot) {
                    if (this.currentNode) {
                        this.latecurrentid = this.currentNode.oid;
                        this.latecurrentitem = this.currentNode.item;
                    }
                    this.sURL = s;
                    this.nodeCanvas = this._nodeRoot;
                    this._nodeDownload.startDownload(s, this.fnDownloadDone);
                }
                else
                    this.pURL = s;
            };
            ClassicTreeView.prototype.fnDownloadDone = function (s) {
                this._nodeDownload.innerHTML = s;
                this.Parse(this.nodeCanvas, this._nodeDownload);
                if (this.latecurrentid != null) {
                    var nd = this.FindNode(this.latecurrentid, this.latecurrentitem);
                    if (nd != null)
                        this.SetCurrentNode(nd);
                    this.latecurrentid = null;
                }
            };
            ClassicTreeView.prototype.SetCurrentNode = function (node) {
                var p;
                if (this.currentNode == node)
                    return;
                if (this.currentNode != null) {
                    if (this.currentNode.childNodes.length > 0) {
                        p = this.currentNode.childNodes[0];
                        p.style.color = this.oldColor;
                        p.style.fontWeight = this.oldWeight;
                    }
                }
                this.currentNode = node;
                if (this.currentNode) {
                    p = this.currentNode.childNodes[0];
                    this.oldColor = p.style.color;
                    this.oldWeight = p.style.fontWeight;
                    p.style.fontWeight = "bold";
                }
            };
            ClassicTreeView.prototype.FindNode = function (id, item) {
                var list = this._nodeRoot.querySelectorAll("nodes");
                for (var i = 0; i < list.length; i++) {
                    if (list[i].oid == id && list[i].item == item)
                        return list[i];
                }
                return null;
            };
            ClassicTreeView.prototype.Parse = function (nodeCanvas, dataNode) {
                var nodeParent = this.GetParentNodeFromCanvas(nodeCanvas);
                var depth = 0;
                var startN = 0;
                var i;
                for (i = 0; i < dataNode.childNodes.length; i++) {
                    if (typeof (dataNode.childNodes[i].oid) != "undefined") {
                        startN = i;
                        break;
                    }
                }
                if (dataNode.childNodes.length == 0 || dataNode.childNodes[startN].oid == "-1") {
                    if (nodeCanvas != this._nodeRoot) {
                        this.SetImage(nodeCanvas.parentNode, ClassicTreeViewImageStautus.imgNone);
                    }
                    nodeCanvas.style.display = "none";
                    return;
                }
                nodeCanvas.style.display = "block";
                if (nodeParent) {
                    depth = nodeParent.depth + 1;
                    nodeParent.read = "yes";
                    this.SetImage(nodeParent, ClassicTreeViewImageStautus.imgClose);
                }
                var ndChildren = dataNode.childNodes;
                nodeCanvas.innerHTML = "";
                for (i = startN; i < ndChildren.length; i++) {
                    var ndChild = ndChildren[i];
                    var oDiv = this._nodeDefault.cloneNode();
                    nodeCanvas.appendChild(oDiv);
                    var is = "";
                    if (nodeParent != null) {
                        var p = nodeParent;
                        for (var j = 0; j < nodeParent.depth + 1; j++) {
                            if (p.lastnode)
                                is = "<img align=\"absMiddle\"  border=0 src=\"" + this.ctx + "system/images/classtreeview/none.gif\">" + is;
                            else
                                is = "<img align=\"absMiddle\"  border=0 src=\"" + this.ctx + "system/images/classtreeview/vline.gif\">" + is;
                            p = this.GetParentNode(p);
                        }
                    }
                    oDiv.depth = depth;
                    oDiv.lastnode = (i == ndChildren.length - 1);
                    oDiv.url = ndChild.url;
                    oDiv.oid = ndChild.oid;
                    if (typeof (ndChild.clicktype) == "undefined")
                        oDiv.clicktype = "";
                    else {
                        oDiv.clicktype = ndChild.clicktype;
                    }
                    if (typeof (ndChild.item) == "undefined")
                        oDiv.item = "";
                    else
                        oDiv.item = ndChild.item;
                    var imgid = ClassicTreeViewImageStautus.imgOpen;
                    if (ndChild.child == "no")
                        imgid = ClassicTreeViewImageStautus.imgNone;
                    if (ndChild.childNodes.length > 1)
                        imgid = ClassicTreeViewImageStautus.imgClose;
                    var s;
                    if (oDiv.lastnode)
                        s = this.imgList[imgid];
                    else
                        s = this.imgList[imgid + 3];
                    if (oDiv.clicktype != "")
                        ndChild.childNodes[0].className = "tree_clicknode";
                    var sPresent = '';
                    if (ndChild.childNodes[0] != undefined)
                        ndChild.childNodes[0].outerHTML;
                    oDiv.innerHTML = "<nobr internals=\"yes\">" + is + "<img types=\"openclose\" align=\"absMiddle\" style=\"cursor:hand\" src=\"" + s + "\" border=0 >" + sPresent + "</nobr>";
                    var oDivChild = this._nodeDefaultChild.cloneNode();
                    oDiv.appendChild(oDivChild);
                    if (ndChild.childNodes.length > 1) {
                        oDiv.read = "yes";
                        this.Parse(oDivChild, ndChild.childNodes[1]);
                    }
                    else {
                        if (ndChild.child == "no")
                            oDiv.read = "none";
                        else
                            oDiv.read = "no";
                        oDivChild.style.display = "none";
                    }
                }
            };
            ClassicTreeView.prototype.GetURL = function (node) {
                var e = node.childNodes[0].childNodes[0];
                if (node.read == "none")
                    return;
                if (node.read == "no") {
                    this.nodeCanvas = node.childNodes[node.childNodes.length - 1];
                    var szUrl = '';
                    if (node.url.indexOf("?") == -1)
                        szUrl = node.url + "?ID=" + node.oid + "&item=" + node.item;
                    else
                        szUrl = node.url + "&ID=" + node.oid + "&item=" + node.item;
                    this._nodeDownload.startDownload(szUrl, this.fnDownloadDone);
                }
                else {
                    if (node.childNodes[node.childNodes.length - 1].style.display != "none") {
                        node.childNodes[node.childNodes.length - 1].style.display = "none";
                        this.SetImage(node, ClassicTreeViewImageStautus.imgOpen);
                    }
                    else {
                        node.childNodes[node.childNodes.length - 1].style.display = "block";
                        this.SetImage(node, ClassicTreeViewImageStautus.imgClose);
                    }
                }
            };
            ClassicTreeView.prototype.onClickNode = function (e) {
                this.clickNode.raise(this, e);
            };
            ClassicTreeView.prototype.SelectNode = function (id) {
                var node = this.FindNodeByID(id);
                if (node != null) {
                    this.SetCurrentNode(node);
                    if (this.currentNode.clicktype == "openclose") {
                        this.ToggleChild(this.currentNode);
                    }
                    var e = new tserp.TreeNodeEventArgs();
                    e.nodeData = this.GetSelectedItem();
                    this.onClickNode(e);
                }
            };
            ClassicTreeView.prototype.FindNodeByID = function (id) {
                var list = this._nodeRoot.querySelectorAll("nodes");
                for (var i = 0; i < list.length; i++) {
                    if (list[i].oid == id)
                        return list[i];
                }
                return null;
            };
            ClassicTreeView.prototype.RefreshNode = function (nd) {
                if (this.currentNode) {
                    this.latecurrentid = this.currentNode.oid;
                    this.latecurrentitem = this.currentNode.item;
                }
                nd.childNodes[nd.childNodes.length - 1].innerHTML = "";
                nd.read = "no";
                this.ToggleChild(nd);
            };
            ClassicTreeView.prototype.GetParentNode = function (nd) {
                if (nd == this._nodeRoot)
                    return null;
                else
                    return nd.parentNode.parentNode;
            };
            ClassicTreeView.prototype.GetFirstNode = function () {
                return this._nodeRoot.childNodes[0];
            };
            Object.defineProperty(ClassicTreeView.prototype, "ctx", {
                get: function () {
                    return this._ctx;
                },
                set: function (value) {
                    this._ctx = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ClassicTreeView.prototype, "value", {
                get: function () {
                    var _selItem = this.GetSelectedItem();
                    return _selItem[this.itemid];
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ClassicTreeView.prototype, "selectedNodeText", {
                get: function () {
                    var _selItem = this.GetSelectedItem();
                    return _selItem[this.itemtext];
                },
                enumerable: true,
                configurable: true
            });
            ClassicTreeView.prototype.GetSelectedItem = function () {
                var _CurrentNode = this.GetCurrentNode();
                if (_CurrentNode != null && _CurrentNode != undefined) {
                    var data_item = _CurrentNode.getAttribute('data-item');
                    if (data_item) {
                        data_item = JSON.parse(data_item);
                        return data_item;
                    }
                }
                return {};
            };
            ClassicTreeView.prototype.SetDataText = function (value) {
            };
            ClassicTreeView.prototype.GetCurrentNode = function () {
                if (this.currentNode != null) {
                    if (this.currentNode.childNodes.length == 0)
                        this.currentNode = null;
                }
                return this.currentNode;
            };
            ClassicTreeView.prototype.GetAppTreeImage = function (n) {
                switch (n * 1) {
                    case 1:
                        return this.ctx + "system/images/classtreeview/icoclass.gif";
                    case 2:
                        return this.ctx + "system/images/classtreeview/btn_tree2.gif";
                    case 3:
                        return this.ctx + "system/images/classtreeview/btn_tree3.gif";
                    case 4:
                        return this.ctx + "system/images/classtreeview/btn_tree4.gif";
                    case 5:
                        return this.ctx + "system/images/classtreeview/btn_tree5.gif";
                }
                return this.ctx + "system/images/classtreeview/folder.gif";
            };
            ClassicTreeView.prototype.NodeDown = function (sender, event) {
                if (sender.bDrag) {
                    sender.bDrag = false;
                    sender.TargetElement(null);
                    sender.dragElement.releaseCapture();
                    sender.nodeDragIcon.style.display = "none";
                }
                sender.bMouseDown = true;
            };
            ClassicTreeView.prototype.NodeUp = function (sender, event) {
                sender.bMouseDown = false;
                if (sender.bDrag) {
                    sender.bDrag = false;
                    sender.nodeDragIcon.style.display = "none";
                    sender.dragElement.releaseCapture();
                    var targetElement = sender.selElement;
                    sender.TargetElement(null);
                    if (targetElement) {
                        var from = sender.dragElement.parentNode.parentNode;
                        var to = targetElement.parentNode.parentNode.childNodes(1);
                        sender.ModifyData(from.oid, targetElement.parentNode.parentNode.oid);
                        var pfrom = from.parentNode.parentNode;
                        var pto = targetElement.parentNode.parentNode;
                        var oDiv = window.document.createElement("DIV");
                        oDiv.innerHTML = "123123";
                        to.appendChild(oDiv);
                        oDiv.swapNode(from);
                        oDiv.removeNode(true);
                        var level = sender.GetLevel(pfrom);
                        sender.RefreshIcon(pfrom, level);
                        level = sender.GetLevel(pto);
                        sender.RefreshIcon(pto, level);
                    }
                }
            };
            ClassicTreeView.prototype.NodeMove = function (sender, event) {
                if (sender.bDragMode) {
                    if (!sender.bDrag) {
                        if (sender.bMouseDown) {
                            sender.bDrag = true;
                            sender.FindPos(event.srcElement);
                            sender.nodeDragIcon.innerHTML = event.srcElement.innerHTML;
                            sender.nodeDragIcon.style.display = "";
                            sender.dragElement = event.srcElement;
                            while (sender.dragElement.tagName != "SPAN")
                                sender.dragElement = sender.dragElement.parentNode;
                            sender.dragElement.setCapture();
                            sender.TargetElement(null);
                            sender.mx = event.clientX - sender.nodeDragIcon.offsetLeft;
                            sender.my = event.clientY - sender.nodeDragIcon.offsetTop;
                        }
                    }
                    else {
                        sender.nodeDragIcon.style.left = event.clientX - sender.mx;
                        sender.nodeDragIcon.style.top = event.clientY - sender.my;
                        if (!sender.SearchTarget(sender._nodeRoot, event.clientX - sender.mx + sender.nodeDragIcon.offsetWidth / 2, event.clientY - sender.my + sender._nodeDragIcon.offsetHeight / 2))
                            sender.TargetElement(null);
                    }
                }
            };
            ClassicTreeView.prototype.CheckDelay = function (sender) {
                if (sender.selElement == sender.varElement) {
                    var nd = sender.varElement.parentNode.parentNode;
                    if (nd.childNodes[nd.childNodes.length - 1].style.display == "none") {
                        sender.ToggleChild(nd);
                    }
                }
                sender.varElement = null;
            };
            ClassicTreeView.prototype.TargetElement = function (sender, t) {
                if (sender.selElement) {
                    if (sender.selElement != t)
                        sender.selElement.style.backgroundColor = "";
                }
                sender.selElement = t;
                if (sender.selElement) {
                    if (!sender.varElement) {
                        sender.varElement = sender.selElement;
                    }
                    sender.selElement.style.backgroundColor = "yellow";
                }
            };
            ClassicTreeView.prototype.SetImage = function (node, imgid) {
                var _imgNode = node.querySelector('img');
                while (_imgNode.getAttribute('types') == undefined) {
                    _imgNode = (_imgNode.nextElementSibling);
                }
                if (_imgNode) {
                    _imgNode.src = this.imgList[imgid];
                }
            };
            ClassicTreeView.prototype.ToggleChild = function (node) {
                var e = node.childNodes[0].childNodes[0];
                if (node.read == "none")
                    return;
                if (node.childNodes[node.childNodes.length - 1].style.display != "none") {
                    node.childNodes[node.childNodes.length - 1].style.display = "none";
                    this.SetImage(node, ClassicTreeViewImageStautus.imgOpen);
                }
                else {
                    node.childNodes[node.childNodes.length - 1].style.display = "block";
                    this.SetImage(node, ClassicTreeViewImageStautus.imgClose);
                }
            };
            ClassicTreeView.prototype.fnOnClick = function (sender, event) {
                var _event = window.event || event;
                var e = _event.srcElement;
                if (e.parentNode.parentNode.parentNode.getAttribute("lst") == "0") {
                    var status = e.parentNode.parentNode.lastChild.getAttribute("style");
                    e.parentNode.parentNode.lastChild.setAttribute("style", (status == "display:none") ? "" : "display:none");
                }
                if (e.getAttribute('types') == "openclose" && e.parentNode.parentNode.getAttribute('read') == 'yes') {
                    sender.ToggleChild(e.parentNode.parentNode);
                }
                else {
                    while (e && e != this && typeof (e.getAttribute) === 'function' && e.getAttribute('internals') != "yes")
                        e = e.parentNode;
                    if (!e)
                        return;
                    if (typeof (e.getAttribute) === 'function' && e.getAttribute('internals') == "yes") {
                        sender.SetCurrentNode(e.parentNode);
                        if (sender.currentNode.getAttribute('clicktype') == "openclose") {
                            sender.ToggleChild(sender.currentNode);
                        }
                        var ev = new tserp.TreeNodeEventArgs();
                        ev.nodeData = sender.GetSelectedItem();
                        sender.onClickNode(ev);
                    }
                }
            };
            ClassicTreeView.controlTemplate = '<div style="position:relative" class="esys-template">'
                + '<div ts-part="nodeRoot" class="tree_canvas" onselectstart= "return false" > </div>'
                + '<div ts-part="nodeDownload" STYLE="behavior:url(#default#download);color:white;display:none" ></div>'
                + '<div ts-part="nodeDefault" id="idnode" class="tree_node" ></div>'
                + '<div ts-part="nodeDefaultChild" class="tree_child" ></div>'
                + '<div ts-part="nodeDragIcon" style="position:absolute;display:none"></div>'
                + '</div>';
            return ClassicTreeView;
        }(tserp.Control));
        nav.ClassicTreeView = ClassicTreeView;
    })(nav = tserp.nav || (tserp.nav = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.nav.js.map