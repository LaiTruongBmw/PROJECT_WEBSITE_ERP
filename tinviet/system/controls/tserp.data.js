var LZW;
var tserp;
(function (tserp) {
    var Data = (function () {
        function Data(element, options) {
            this._XML_TAG_DATA = 'data';
            this._XML_TAG_FUNCTION = 'tsfunction';
            this._XML_TAG_PROCEDURE = 'tsprocedure';
            this._XML_TAG_DSOTYPE = 'tsdsoType';
            this._XML_TAG_ACTION = 'tsaction';
            this._XML_TAG_TOKEN = 'tstoken';
            this._XML_TAG_OUTPARAMETER = 'tsoutparameter';
            this._XML_TAG_INPARAMETER = 'tsinparameter';
            this._XML_TAG_OBJCURNO = 'tsobjcurno';
            this._XML_TAG_DSOID = 'tsdsoid';
            this._XML_TAG_PARAMETER = 'tsparameter';
            this._XML_TAG_PARAMETER_ID = 'tsparameterid';
            this._XML_TAG_ROWS = 'tsRows';
            this._XML_TAG_ROW = 'tsrow';
            this._COL_Status = '_tsStatus_';
            this.SearchList = new Array();
            this.InputList = new Array();
            this.OutputList = new Array();
            this.ParaList = new Array();
            this.func = "";
            this.rows = 0;
            this.table = new Array();
            this._obj = null;
            this.__type = '';
            this.__function = '';
            this.__procedure = '';
            this.__parameter = '';
            this.__onreceive = '';
            this.__onerror = '';
            this.__ctrlstatus = tserp.DataStatus.Normal;
            this.__jsonData = [];
            this.__rawData = '';
            this.onreceive = new tserp.Event();
            this.onerror = new tserp.Event();
            var el = null;
            if (typeof element == 'string') {
                this._obj = document.getElementById(element);
                el = document.getElementById(element);
            }
            else {
                this._obj = element;
                el = element;
            }
            if (this._obj == null || this._obj == undefined) {
                throw new Error('Vui Long Cung Cap Elemenet Data!');
            }
            if (el != null) {
                if (typeof el.remove === "function") {
                    el.remove();
                }
            }
            this.SetOnreceive(this._obj.getAttribute('onreceive'));
            this.SetOnerror(this._obj.getAttribute('onerror'));
            if (this.__onreceive != '') {
                if (typeof window[this.__onreceive] === 'function') {
                    this.onreceive.addHandler(window[this.__onreceive]);
                }
            }
            if (this.__onerror != '') {
                if (typeof window[this.__onerror] === 'function') {
                    this.onerror.addHandler(window[this.__onerror]);
                }
            }
            this._obj.innerHTML = this._obj.innerHTML.replace(new RegExp("xml", "gm"), "DATAXML");
            var _xmlNode = this._obj.getElementsByTagName('DATAXML');
            if (_xmlNode.length == 0) {
                throw new Error('Element TS-DATA THIEU TAG XML!');
            }
            for (var i = 0; i < _xmlNode.length; i++) {
                var _dsoNode = _xmlNode[i].getElementsByTagName('DSO');
                if (_dsoNode.length == 0) {
                    throw new Error('Element TS-DATA THIEU TAG XML > DSO!');
                }
                this.SetDsoType(_dsoNode[0].getAttribute('type'));
                if (this.DsoType == '') {
                    throw new Error('Element TS-DATA > XML > DSO THIEU ATTR TYPE!');
                }
                this.SetDsoFunction(_dsoNode[0].getAttribute('function'));
                this.SetDsoProcedure(_dsoNode[0].getAttribute('procedure'));
                this.SetDsoParameter(_dsoNode[0].getAttribute('parameter'));
                var _dsoType = this.DsoType;
                var bindingname = null;
                var bindobject = null;
                switch (_dsoType) {
                    case 'array':
                        var _dataInputs = _dsoNode[0].getElementsByTagName('DATA-INPUTS');
                        if (_dataInputs.length == 0) {
                            throw new Error('Element TS-DATA THIEU TAG XML > DSO > DATA-INPUTS!');
                        }
                        if (_dataInputs[0].getAttribute('bind') == 'noneed') {
                            var searchList = _dataInputs[0].getElementsByTagName('DATA-INPUT');
                            for (var i = 0; i < searchList.length; i++) {
                                bindingname = searchList[i].getAttribute("bind");
                                this.SearchList[this.SearchList.length] = this.ObjectEvaluation(bindingname);
                            }
                        }
                        else {
                            var inList = _dataInputs[0].getElementsByTagName('DATA-INPUT');
                            for (var i = 0; i < inList.length; i++) {
                                bindingname = inList[i].getAttribute("bind");
                                bindobject = this.ObjectEvaluation(bindingname);
                                this.ParaList[this.ParaList.length] = bindobject;
                            }
                        }
                        var _outparam = _dsoNode[0].getElementsByTagName('DATA-OUTPUTS')[0].getAttribute("bind");
                        if (_outparam == 'noneed') {
                            this.OutputList[this.OutputList.length] = _outparam;
                        }
                        else {
                            var data = Number(_outparam);
                            for (var i = 0; i < data; i++) {
                                this.OutputList[this.OutputList.length] = i;
                            }
                        }
                        break;
                    case "grid":
                    case "tree":
                    case "table":
                        var dso = _dsoNode[0];
                        var inList = dso.getElementsByTagName('DATA-INPUTS');
                        for (var i = 0; i < inList.length; i++) {
                            bindingname = inList[i].getAttribute("bind");
                            if (bindingname != null && bindingname != '')
                                this.InputList[this.InputList.length] = this.ObjectEvaluation(bindingname);
                        }
                        var searchList = inList[0].getElementsByTagName("DATA-INPUT");
                        for (var j = 0; j < searchList.length; j++) {
                            bindingname = searchList[j].getAttribute("bind");
                            bindobject = this.ObjectEvaluation(bindingname);
                            if (bindobject != null && bindobject != '')
                                this.SearchList[this.SearchList.length] = bindobject;
                        }
                        var inList = dso.getElementsByTagName("DATA-OUTPUTS");
                        if (inList.length == 0) {
                            alert('Vui Long Dinh Nghia Tag [DATA-OUTPUTS] cho control id = ' + this.id);
                        }
                        bindingname = inList[0].getAttribute("bind");
                        if (bindingname != null) {
                            bindobject = this.ObjectEvaluation(bindingname);
                            this.OutputList[this.OutputList.length] = bindobject;
                        }
                        else {
                            var _outlist = dso.getElementsByTagName("DATA-OUTPUTS")[0].getElementsByTagName("DATA-OUTPUT");
                            for (var i = 0; i < _outlist.length; i++) {
                                bindingname = _outlist[i].getAttribute("bind");
                                bindobject = this.ObjectEvaluation(bindingname);
                                this.OutputList[this.OutputList.length] = bindobject;
                            }
                        }
                        break;
                    case "control":
                        var dso = _dsoNode[0];
                        var _searchLists = dso.getElementsByTagName("DATA-SEARCHS");
                        if (_searchLists.length == 1) {
                            var searchList = _searchLists[0].getElementsByTagName("DATA-SEARCH");
                            for (var s = 0; s < searchList.length; s++) {
                                bindingname = searchList[s].getAttribute("bind");
                                if (bindingname != null) {
                                    var bindobject = this.ObjectEvaluation(bindingname);
                                    this.SearchList[this.SearchList.length] = bindobject;
                                }
                            }
                        }
                        var inList = dso.getElementsByTagName("DATA-INOUTS")[0].getElementsByTagName("DATA-INOUT");
                        for (var i = 0; i < inList.length; i++) {
                            bindingname = inList[i].getAttribute("bind");
                            bindobject = this.ObjectEvaluation(bindingname);
                            this.OutputList[this.OutputList.length] = bindobject;
                            if (this.inParameterList(i)) {
                                this.InputList[this.InputList.length] = bindobject;
                            }
                            if (this.SearchList.length == 0) {
                                this.SearchList[this.SearchList.length] = bindobject;
                            }
                        }
                        break;
                    case "process":
                    case "list":
                        var dso = _dsoNode[0];
                        var inList = dso.getElementsByTagName('DATA-INPUTS')[0].getElementsByTagName("DATA-INPUT");
                        if (inList.length == 0 && _dsoType == "process") {
                            alert("You must add input node for element " + this.id);
                            return;
                        }
                        for (var i = 0; i < inList.length; i++) {
                            bindingname = inList[i].getAttribute("bind");
                            bindobject = this.ObjectEvaluation(bindingname);
                            this.InputList[this.InputList.length] = bindobject;
                        }
                        var outList = dso.getElementsByTagName('DATA-OUTPUTS')[0].getElementsByTagName("DATA-OUTPUT");
                        if (outList.length == 0) {
                            alert("You must add output node for element " + this.id);
                            return;
                        }
                        for (var i = 0; i < outList.length; i++) {
                            bindingname = outList[i].getAttribute("bind");
                            bindobject = this.ObjectEvaluation(bindingname);
                            this.OutputList[this.OutputList.length] = bindobject;
                        }
                        break;
                    case "login":
                        var dso = _dsoNode[0];
                        var inList = dso.getElementsByTagName("INOUTS")[0].getElementsByTagName("INOUT");
                        for (var i = 0; i < inList.length; i++) {
                            bindingname = inList[i].getAttribute("bind");
                            bindobject = this.ObjectEvaluation(bindingname);
                            this.InputList[this.InputList.length] = bindobject;
                        }
                        break;
                }
            }
            var self = this;
        }
        Object.defineProperty(Data.prototype, "getParameterList", {
            get: function () {
                return this.ParaList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "getSearchList", {
            get: function () {
                return this.SearchList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "getOutputList", {
            get: function () {
                return this.OutputList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "getInputList", {
            get: function () {
                return this.InputList;
            },
            enumerable: true,
            configurable: true
        });
        Data.prototype.GetStatus = function () {
            return this.__ctrlstatus;
        };
        Data.prototype.StatusSelect = function () {
            this.__ctrlstatus = tserp.DataStatus.Normal;
        };
        Data.prototype.StatusUpdate = function () {
            this.__ctrlstatus = tserp.DataStatus.Edited;
        };
        Data.prototype.StatusInsert = function () {
            if (this.__ctrlstatus == tserp.DataStatus.Added) {
                alert('Already set new. Now you can input new data.\n\n Đã bật chức năng nhập mới rồi. Giờ bạn có thể nhập mới dữ liệu.');
                return;
            }
            this.ClearDataControl();
            this.__ctrlstatus = tserp.DataStatus.Added;
        };
        Data.prototype.StatusDelete = function () {
            this.__ctrlstatus = tserp.DataStatus.Deleted;
        };
        Object.defineProperty(Data.prototype, "jsonData", {
            get: function () {
                return this.JsonData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "JsonData", {
            get: function () {
                return this.__jsonData;
            },
            enumerable: true,
            configurable: true
        });
        Data.prototype.RawData = function () {
            return this.__rawData;
        };
        Data.prototype.SetJsonData = function (value) {
            if (value == null)
                value = {};
            this.__jsonData = value;
        };
        Data.prototype.SetRawData = function (value) {
            if (value == null)
                value = '';
            this.__rawData = value;
        };
        Data.prototype.SetDsoType = function (value) {
            if (value == null)
                value = '';
            this.__type = value.toLowerCase();
        };
        Object.defineProperty(Data.prototype, "id", {
            get: function () {
                if (this._obj) {
                    return this._obj.id;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "DsoType", {
            get: function () {
                return this.__type;
            },
            enumerable: true,
            configurable: true
        });
        Data.prototype.SetDsoFunction = function (value) {
            if (value == null)
                value = '';
            this.__function = value;
        };
        Data.prototype.SetDsoProcedure = function (value) {
            if (value == null)
                value = '';
            this.__procedure = value;
        };
        Data.prototype.SetDsoParameter = function (value) {
            if (value == null)
                value = '';
            this.__parameter = value;
            if (this.__parameter != '') {
                this.ParaList = this.__parameter.split(",");
            }
        };
        Data.prototype.SetOnreceive = function (value) {
            if (value == null)
                value = '';
            this.__onreceive = value.replace('(this)', '');
        };
        Data.prototype.SetOnerror = function (value) {
            if (value == null)
                value = '';
            this.__onerror = value.replace('(this)', '');
        };
        Data.prototype.ObjectEvaluation = function (bindingname) {
            var bindobject = document.getElementById(bindingname) || window[bindingname];
            if (bindobject == null) {
                alert("[" + bindingname + "] binding object does not exist !!");
                return bindobject;
            }
            else {
            }
            return bindingname;
        };
        Data.prototype.inParameterList = function (col) {
            if (this.ParaList.length == 1 && this.ParaList[0] == '-') {
                return true;
            }
            for (var i = 0; i < this.ParaList.length; i++) {
                if (this.ParaList[i] == col) {
                    return true;
                }
            }
            return false;
        };
        Data.prototype.resetData = function () {
            this.SearchList = new Array();
            this.InputList = new Array();
            this.OutputList = new Array();
            this.ParaList = new Array();
        };
        Data.prototype.ClearDataControl = function () {
            for (var i = 0; i < this.OutputList.length; i++) {
                var ctrlId = this.OutputList[i];
                var objCtrl = window[ctrlId];
                if (objCtrl) {
                    if (typeof objCtrl.SetData === "function") {
						if(tserp.grid.FlexGrid.prototype.isPrototypeOf(objCtrl)){
							objCtrl.ClearData();
						}else{
							objCtrl.SetData([]);
						}
                    }
                    else {
                        throw new Error('VUI LONG KIEM TRA FUNCTION SETDATA CHO CTRL=' + ctrlId);
                    }
                }
                else {
                    objCtrl = document.getElementById(ctrlId);
                    if (objCtrl) {
                        objCtrl.value = '';
                    }
                    else {
                        throw new Error('VUI LONG KIEM CTRL=' + ctrlId + ' CO TON TAI TRONG DOCUMENT KHONG');
                    }
                }
            }
        };
        ;
        Data.prototype.buildXML = function (_action, _dsoType) {
            var _procedure = this.__procedure;
            var _function = this.__function;
            if (_dsoType == "array" || _dsoType == "table") {
                return this.GetDataFromArray(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "tree") {
                return this.GetDataFromTree(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "grid") {
                return this.GetDataFromGrid(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "control") {
                return this.GetDataFromControl(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "process") {
                return this.GetDataFromProcessControl(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "list") {
                return this.GetDataFromControl2(_action, _dsoType, _procedure, _function);
            }
            else if (_dsoType == "login") {
                return this.GetDataFromProcessControl(_action, _dsoType, _procedure, _function);
            }
            alert("System did not support control type " + _dsoType);
            return "";
        };
        Data.prototype.GetDataFromArray = function (_action, _dsoType, _procedure, _function) {
            var xml = "", parameter = "", row = "";
            var i, j;
            if (this.ParaList != null) {
                for (i = 0; i < this.ParaList.length; i++) {
                    var obj = this.ParaList[i];
                    parameter += this.GetDataControl(obj) + "|!";
                }
                parameter = parameter.substr(0, parameter.length - 2);
                if (parameter.length == 0 && this.ParaList.length > 0) {
                    parameter = "";
                }
            }
            else {
                parameter = "";
            }
            var objcurno = this.OutputList.length;
            if (_action === "SELECT") {
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.ParaList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + objcurno + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            else {
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.ParaList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + objcurno + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "<" + this._XML_TAG_ROWS + ">" + row + "</" + this._XML_TAG_ROWS + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            return xml;
        };
        Data.prototype.GetDataFromControl2 = function (_action, _dsoType, _procedure, _function) {
            var parameter = "", xml, outparam = 1;
            if (this.InputList != null) {
                for (var i = 0; i < this.InputList.length; i++) {
                    var obj = this.InputList[i];
                    parameter += this.GetDataControl(obj) + "|!";
                }
                parameter = parameter.substr(0, parameter.length - 2);
                if (parameter.length == 0 && this.InputList.length > 0) {
                    parameter = "";
                }
            }
            else {
                parameter = "";
            }
            if (this.OutputList != undefined)
                if (this.OutputList.length > 0)
                    outparam = this.OutputList.length;
            xml = "<" + this._XML_TAG_DATA + ">"
                + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.InputList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                + "</" + this._XML_TAG_DATA + ">";
            return xml;
        };
        Data.prototype.GetDataFromProcessControl = function (_action, _dsoType, _procedure, _function) {
            var parameter = "", outparameter = "", xml, outparam = 1;
            if (this.InputList != null) {
                for (var i = 0; i < this.InputList.length; i++) {
                    var obj = this.InputList[i];
                    parameter += this.GetDataControl(obj) + "|!";
                }
                parameter = parameter.substr(0, parameter.length - 2);
                if (parameter.length == 0 && this.InputList.length > 0) {
                    parameter = " ";
                }
            }
            else {
                parameter = "";
            }
            if (this.OutputList != null) {
                for (var i = 0; i < this.OutputList.length; i++) {
                    var obj = this.OutputList[i];
                    outparameter += obj + "|!";
                }
                outparameter = outparameter.substr(0, outparameter.length - 2);
                if (outparameter.length == 0 && this.OutputList.length > 0) {
                    outparameter = " ";
                }
                outparam = this.OutputList.length;
            }
            else {
                outparameter = "";
            }
            _action = _dsoType.toUpperCase();
            xml = "<" + this._XML_TAG_DATA + ">"
                + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + outparameter + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.InputList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                + "</" + this._XML_TAG_DATA + ">";
            return xml;
        };
        ;
        Data.prototype.GetDataControl = function (ctrl_id) {
            if (window[ctrl_id] != undefined && typeof window[ctrl_id].GetData === "function") {
                return window[ctrl_id].GetData();
            }
            else
                return document.getElementById(ctrl_id).getAttribute('value');
        };
        ;
        Data.prototype.GetDataFromControl = function (_action, _dsoType, _procedure, _function) {
            var xml = "", parameter = "", row = "", outparam = 1, i;
            if (_action == "SELECT") {
                if (this.InputList != null) {
                    var obj = this.InputList[0];
                    parameter = this.GetDataControl(obj);
                }
                else {
                    alert("No found primary control. Please check inout control again. ");
                    return "";
                }
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.InputList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            else {
                if (this.GetStatus() == tserp.DataStatus.Edited) {
                    row += "<" + this._XML_TAG_ROW + "><![CDATA[UPDATE|!";
                    for (i = 0; i < this.InputList.length; i++) {
                        row += this.GetDataControl(this.InputList[i]) + "|!";
                    }
                    row = row.substr(0, row.length - 2);
                    row += "]]></" + this._XML_TAG_ROW + ">";
                }
                else if (this.GetStatus() == tserp.DataStatus.Added) {
                    row += "<" + this._XML_TAG_ROW + "><![CDATA[INSERT|!";
                    for (i = 0; i < this.InputList.length; i++) {
                        row += this.GetDataControl(this.InputList[i]) + "|!";
                    }
                    row = row.substr(0, row.length - 2);
                    row += "]]></" + this._XML_TAG_ROW + ">";
                }
                else if (this.GetStatus() == tserp.DataStatus.Deleted) {
                    row += "<" + this._XML_TAG_ROW + "><![CDATA[DELETE|!";
                    for (i = 0; i < this.InputList.length; i++) {
                        row += this.GetDataControl(this.InputList[i]) + "|!";
                    }
                    row = row.substr(0, row.length - 2);
                    row += "]]></" + this._XML_TAG_ROW + ">";
                }
                if (this.GetStatus() == tserp.DataStatus.Edited || this.GetStatus() == tserp.DataStatus.Added || this.GetStatus() == tserp.DataStatus.Deleted) {
                    xml = "<" + this._XML_TAG_DATA + ">"
                        + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                        + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                        + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                        + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                        + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                        + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                        + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.InputList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                        + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                        + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                        + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                        + "<" + this._XML_TAG_ROWS + ">" + row + "</" + this._XML_TAG_ROWS + ">"
                        + "</" + this._XML_TAG_DATA + ">";
                }
            }
            return xml;
        };
        ;
        Data.prototype.GetDataFromTree = function (_action, _dsoType, _procedure, _function) {
            var xml = "", parameter = "", row = "", outparam = 1;
            var i, j;
            if (this.SearchList != null) {
                for (i = 0; i < this.SearchList.length; i++) {
                    var obj = this.SearchList[i];
                    parameter += this.GetDataControl(obj) + "|!";
                }
                parameter = parameter.substr(0, parameter.length - 2);
                if (parameter.length == 0 && this.SearchList.length > 0) {
                    parameter = " ";
                }
            }
            else {
                parameter = "";
            }
            if (parameter == null || parameter == 'null')
                parameter = '';
            outparam = this.OutputList.length;
            if (_action == "SELECT") {
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join(';') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.SearchList.join(';') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            else {
                var grdCtrl = this.InputList[0];
                var s = "";
                var _boundrows = [];
                if (_boundrows.length > 0) {
                    for (i = 0; i < _boundrows.length; i++) {
                        if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Edited) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[UPDATE|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                        else if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Added) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[INSERT|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                        else if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Deleted) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[DELETE|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                    }
                }
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.SearchList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "<" + this._XML_TAG_ROWS + ">" + row + "</" + this._XML_TAG_ROWS + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            return xml;
        };
        ;
        Data.prototype.GetDataFromGrid = function (_action, _dsoType, _procedure, _function) {
            var xml = "", parameter = "", row = "", outparam = 1;
            var i, j;
            if (this.SearchList != null) {
                for (i = 0; i < this.SearchList.length; i++) {
                    var obj = this.SearchList[i];
                    parameter += this.GetDataControl(obj) + "|!";
                }
                parameter = parameter.substr(0, parameter.length - 2);
                if (parameter.length == 0 && this.SearchList.length > 0) {
                    parameter = "";
                }
            }
            else {
                parameter = "";
            }
            outparam = this.OutputList.length;
            if (_action === "SELECT") {
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.SearchList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            else {
                var grdCtrl = this.InputList[0];
                var s = "";
                if (grdCtrl == undefined)
                    throw new SyntaxError("Thẻ DSO ID='" + this.id + "' có lỗi tại thẻ [data-inputs] chưa khai báo thuộc tính [bind=?].");
                var _boundrows = this.GetDataControl(grdCtrl);
                if (_boundrows.length > 0) {
                    for (i = 0; i < _boundrows.length; i++) {
                        if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Edited) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[UPDATE|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                        else if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Added) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[INSERT|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                        else if (_boundrows[i][this._COL_Status] == tserp.DataStatus.Deleted) {
                            row = row + "<" + this._XML_TAG_ROW + "><![CDATA[DELETE|!";
                            for (j = 0; j < this.ParaList.length; j++) {
                                s = _boundrows[i][this.ParaList[j]];
                                if (s != undefined) {
                                    row += s + "|!";
                                }
                                else {
                                    row += "|!";
                                }
                            }
                            row = row.substr(0, row.length - 2);
                            row = row + "]]></" + this._XML_TAG_ROW + ">";
                        }
                    }
                }
				 //if (row !== "") {
                  //  return "";
                //}
                xml = "<" + this._XML_TAG_DATA + ">"
                    + "<" + this._XML_TAG_FUNCTION + ">" + _function + "</" + this._XML_TAG_FUNCTION + ">"
                    + "<" + this._XML_TAG_PROCEDURE + ">" + _procedure + "</" + this._XML_TAG_PROCEDURE + ">"
                    + "<" + this._XML_TAG_DSOTYPE + ">" + _dsoType + "</" + this._XML_TAG_DSOTYPE + ">"
                    + "<" + this._XML_TAG_ACTION + ">" + _action + "</" + this._XML_TAG_ACTION + ">"
                    + "<" + this._XML_TAG_TOKEN + ">" + tserp.System.getCurrToken() + "</" + this._XML_TAG_TOKEN + ">"
                    + "<" + this._XML_TAG_OUTPARAMETER + "><![CDATA[" + this.OutputList.join('|!') + "]]></" + this._XML_TAG_OUTPARAMETER + ">"
                    + "<" + this._XML_TAG_INPARAMETER + "><![CDATA[" + this.SearchList.join('|!') + "]]></" + this._XML_TAG_INPARAMETER + ">"
                    + "<" + this._XML_TAG_OBJCURNO + ">" + outparam + "</" + this._XML_TAG_OBJCURNO + ">"
                    + "<" + this._XML_TAG_DSOID + ">" + this.id + "</" + this._XML_TAG_DSOID + ">"
                    + "<" + this._XML_TAG_PARAMETER + "><![CDATA[" + parameter + "]]></" + this._XML_TAG_PARAMETER + ">"
                    + "<" + this._XML_TAG_ROWS + ">" + row + "</" + this._XML_TAG_ROWS + ">"
                    + "</" + this._XML_TAG_DATA + ">";
            }
            return xml;
        };
        Data.prototype.Call = function (fn) {
            var arrControl = {};
            arrControl["type"] = this.__type;
            arrControl["function"] = this.__function;
            arrControl["procedure"] = this.__procedure;
            arrControl["para"] = this.ParaList;
            arrControl["searchs"] = this.SearchList;
            arrControl["inputs"] = this.InputList;
            arrControl["outputs"] = this.OutputList;
            arrControl["id"] = this.id;
            var _xmlObj = this.buildXML(fn, this.__type);
			////if (_xmlObj === "") {
            //    return;
           // }
            var _self = this;
            tserp.Ajax.setCtx(tserp.System.ctx);
            tserp.Ajax.SendData(fn, _xmlObj, this.__type, document, function (data) {
                if (data.indexOf("<script>") > -1) {
                    document.write(data);
                    return;
                }
                try {
                    _self.SetRawData(data);
                    var rs = tserp.utils.Json.parse(data);
                    _self.SetJsonData(rs);
                    if (rs.Results === 'S') {
                        if (_self.DsoType !== 'array') {
                            _self.ClearDataControl();
                            _self.BindClientData(_self.DsoType, rs);
                            _self.StatusUpdate();
                        }
                        _self.onreceive.raise(_self);
                    }else if (rs.Results === 'L') {
                        alert(System.getMsgToShow(rs.Message));
                        if (top.window.location.port === '80' || top.window.location.port === '') {
                            top.window.location.href = top.window.location.protocol + '//' + top.window.location.host + rs.Remarks;
                        } else {
                            top.window.location.href = top.window.location.protocol + '//' + top.window.location.host + ':' + top.window.location.port + rs.Remarks;
                        }
                    } else{
						console.log(data);
                        if (!_self.onerror.hasHandlers) {
                            alert(tserp.System.getMsgToShow(rs.ErrorData.Messages));
                        }
                        _self.onerror.raise(_self);
                    }
                    var iflastLog = top.document.getElementById('lastLog');
                    if (iflastLog != null && iflastLog != undefined) {
                        if (rs.LogData) {
                            for (var j = 0; j < rs.LogData.length; j++) {
                                var logData = rs.LogData[j];
                                var sContent = "<table width=100% class='debugtable'><tr><td width=20% class='debug_title'>" + logData.DataBaseConnected + " connected</td><td class='debug_title'>" + logData.StatementName + "</td></tr>";
                                sContent += "<tr><td width=20% class='debug_title2'>Parameter</td><td class='debug_title2'>" + logData.Parameter + "</td></tr>";
                                sContent += "<tr><td width=20% class='debug_title' >Statement</td><td class='debug_title'>" + logData.Statement + "</td></tr></table>";
                                top.window.urlList[top.window.urlList.length] = sContent;
                                top.window.pos = top.window.urlList.length - 1;
                                iflastLog.innerHTML = sContent;
                            }
                        }
                    }
                }
                catch (e) {
                    if (data.indexOf("script") > -1) {
                    }
                    else {
						console.log(e);
                        alert(e);
                        _self.onerror.raise(_self);
                    }
                }
            }, function (data) {
                _self.onerror.raise(_self);
            });
        };
        Object.defineProperty(Data.prototype, "DsoFunction", {
            get: function () {
                return this.__function;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "DsoProcedure", {
            get: function () {
                return this.__procedure;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Data.prototype, "DsoParameter", {
            get: function () {
                return this.__parameter;
            },
            enumerable: true,
            configurable: true
        });
        Data.prototype.BindClientData = function (_dsoType, rsobj) {
            var i = 0;
            if (_dsoType == "grid") {
                for (var i = 0; i < rsobj.Totals; i++) {
                    this.SetDataToGrid(this.OutputList[i], rsobj.Data['Table' + ((i == 0) ? '' : (i + ''))]);
                }
            }
            else if (_dsoType == "process") {
                i = 0;
                this.BindDataToControl(rsobj.Data['Table' + ((i == 0) ? '' : (i + ''))]);
            }
            else if (_dsoType == "control") {
                i = 0;
                this.BindDataToControl(rsobj.Data['Table' + ((i == 0) ? '' : (i + ''))]);
            }
            else if (_dsoType == "list") {
                for (var i = 0; i < rsobj.Totals; i++) {
                    this.BindDataToList(this.OutputList[i], rsobj.Data['Table' + ((i == 0) ? '' : (i + ''))]);
                }
            }
            else if (_dsoType == 'tree') {
                for (var i = 0; i < rsobj.Totals; i++) {
                    this.BindDataToTree(this.OutputList[i], rsobj.Data['Table' + ((i == 0) ? '' : (i + ''))]);
                }
            }
        };
        Data.prototype.SetDataToGrid = function (ctrl, rsjson) {
            if (typeof window[ctrl].SetData === "function") {
                window[ctrl].SetData(rsjson);
            }
            else {
                document.getElementById(ctrl).nodeValue = rsjson;
            }
        };
        Data.prototype.BindDataToTree = function (ctrl, rows) {
            if (typeof window[ctrl].SetData === "function") {
                window[ctrl].SetData(rows);
            }
            else {
                throw new Error('Khong tim thay function [SetData] cua tree [' + ctrl + ']');
            }
        };
        Data.prototype.BindDataToList = function (ctrl, rows) {
            if (typeof window[ctrl].SetDataJson === "function") {
                window[ctrl].SetDataJson(rows);
            }
            else {
                throw new Error('Khong tim thay function [SetDataJson] cua list [' + ctrl + ']');
            }
        };
        Data.prototype.SetDataToControl = function (ctrl, value) {
            if (typeof window[ctrl].value !== "undefined") {
                window[ctrl].value = value;
            }
            else {
                throw new Error('Khong tim thay properties [value] cua control [' + ctrl + ']');
            }
        };
        Data.prototype.BindDataToControl = function (rows) {
            if (rows.length == 1) {
                if ("process" == this.DsoType) {
                    for (var j = 0; j < this.OutputList.length; j++) {
                        this.SetDataToControl(this.OutputList[j], rows[0]["val_" + j]);
                    }
                }
                else {
                    for (var j = 0; j < this.OutputList.length; j++) {
                        this.SetDataToControl(this.OutputList[j], rows[0][this.OutputList[j].toUpperCase()]);
                    }
                }
            }
            else if (rows.length == 0) {
                for (var j = 0; j < this.OutputList.length; j++) {
                    this.SetDataToControl(this.OutputList[j], "");
                }
            }
            else {
                for (var i = 0; i < rows.length; i++) {
                    if (this.ParaList.length == 1 && this.ParaList[0] == '-') {
                        for (var j = 0; j < this.OutputList.length; j++) {
                            if (this.OutputList.length > j) {
                                this.SetDataToControl(this.OutputList[j], rows[0][this.OutputList[j].toUpperCase()]);
                            }
                        }
                    }
                    else {
                        for (var j = 0; j < this.ParaList.length; j++) {
                            if (this.OutputList.length > j) {
                                this.SetDataToControl(this.OutputList[j], rows[0][this.ParaList[j].toUpperCase()]);
                            }
                        }
                    }
                }
            }
        };
        return Data;
    }());
    tserp.Data = Data;
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.data.js.map