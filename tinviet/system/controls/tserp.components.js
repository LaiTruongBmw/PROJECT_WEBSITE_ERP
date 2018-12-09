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
    var components;
    (function (components) {
        var jqxgrid = (function () {
            function jqxgrid(element, options) {
                this.dropdown_columns_list = [];
                this.host = tserp.getElement(element);
                this._render();
            }
            Object.defineProperty(jqxgrid.prototype, "value", {
                get: function () {
                    return this.host.getAttribute('value');
                },
                set: function (value) {
                    this.showloadelement();
                    this.host.setAttribute('value', value);
                    var bindJson = this.formatData(value);
                    this.clearselection();
                    this.setrawsource(bindJson);
                    this.hideloadelement();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "ctrlId", {
                get: function () {
                    return this.host.id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "rowCount", {
                get: function () {
                    var rows = $("#" + this.ctrlId).jqxGrid('getboundrows');
                    return rows.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "autoshowloadelement", {
                get: function () {
                    var _autoshowloadelement = tserp.utils.Converter.ObjectToBoolean(this.host.getAttribute('autoshowloadelement'), false);
                    return _autoshowloadelement;
                },
                set: function (val) {
                    this.host.setAttribute('autoshowloadelement', val);
                    $('#' + this.ctrlId).jqxGrid({ autoshowloadelement: val });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "autoheight", {
                get: function () {
                    var _autoheight = tserp.utils.Converter.ObjectToBoolean(this.host.getAttribute('autoheight'), false);
                    return _autoheight;
                },
                set: function (val) {
                    this.host.setAttribute('autoheight', val);
                    $('#' + this.ctrlId).jqxGrid({ autoheight: val });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "autorowheight", {
                get: function () {
                    var _autorowheight = this.host.getAttribute('autorowheight') || false;
                    return _autorowheight;
                },
                set: function (val) {
                    this.host.setAttribute('autorowheight', val);
                    $('#' + this.ctrlId).jqxGrid({ autorowheight: val });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "rowsheight", {
                get: function () {
                    var _rowsheight = parseInt(this.host.getAttribute('rowsheight')) || 28;
                    return _rowsheight;
                },
                set: function (val) {
                    this.host.setAttribute('rowsheight', tserp.utils.Converter.ObjectToFloat(val));
                    $('#' + this.ctrlId).jqxGrid({ rowsheight: tserp.utils.Converter.ObjectToFloat(val) });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "selectedrowindexes", {
                get: function () {
                    var selectedrowindexes = $('#' + this.ctrlId).jqxGrid('selectedrowindexes');
                    return selectedrowindexes;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid({ selectedrowindexes: val });
                    this.host.setAttribute('selectedrowindexes', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "selectedrowindex", {
                get: function () {
                    var selectedrowindex = $('#' + this.ctrlId).jqxGrid('selectedrowindex');
                    return selectedrowindex;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid({ selectedrowindex: val });
                    this.host.setAttribute('selectedrowindex', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "sortable", {
                get: function () {
                    var sortable = $('#' + this.ctrlId).jqxGrid('sortable');
                    return sortable;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('sortable', val);
                    this.host.setAttribute('sortable', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "clipboard", {
                get: function () {
                    var sortable = $('#' + this.ctrlId).jqxGrid('clipboard');
                    return sortable;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('clipboard', val);
                    this.host.setAttribute('clipboard', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "disabled", {
                get: function () {
                    var _disabled = $('#' + this.ctrlId).jqxGrid('disabled');
                    return _disabled;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('disabled', val);
                    this.host.setAttribute('disabled', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "editable", {
                get: function () {
                    var _editable = $('#' + this.ctrlId).jqxGrid('editable');
                    return tserp.utils.Converter.ObjectToBoolean(_editable, true);
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('editable', tserp.utils.Converter.ObjectToBoolean(val, true));
                    this.host.setAttribute('editable', tserp.utils.Converter.ObjectToBoolean(val, true));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "keyboardnavigation", {
                get: function () {
                    var _keyboardnavigation = $('#' + this.ctrlId).jqxGrid('keyboardnavigation');
                    return _keyboardnavigation;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('keyboardnavigation', val);
                    this.host.setAttribute('keyboardnavigation', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "width", {
                get: function () {
                    var _width = $('#' + this.ctrlId).jqxGrid('width');
                    return _width;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('width', val);
                    this.host.setAttribute('width', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "height", {
                get: function () {
                    var _height = $('#' + this.ctrlId).jqxGrid('height');
                    return _height;
                },
                set: function (val) {
                    $('#' + this.ctrlId).jqxGrid('height', val);
                    this.host.setAttribute('height', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxgrid.prototype, "columnsheight", {
                get: function () {
                    var _height = $('#' + this.ctrlId).jqxGrid('columnsheight');
                    return _height;
                },
                set: function (val) {
                    val = val || 25;
                    $('#' + this.ctrlId).jqxGrid('columnsheight', val);
                    this.host.setAttribute('columnsheight', val);
                },
                enumerable: true,
                configurable: true
            });
            jqxgrid.prototype.stringOf = function (count, chr) {
                if (count < 1)
                    return '';
                var x = '';
                while (count > 1) {
                    if (count & 1)
                        x += chr;
                    count >>= 1;
                    chr += chr;
                }
                return x + chr;
            };
            jqxgrid.prototype._render = function () {
                var lstcolumn = this._getColumnTemplateHtml();
                if (lstcolumn.length < 1) {
                    return;
                }
                var lstcolumgroups = this._getqueryChildren(this.host, 'columngroups');
                if (lstcolumgroups.length > 0) {
                    var lstcolumgroup = this._getqueryChildren(lstcolumgroups[0], 'columngroup');
                    if (lstcolumgroup.length < 1) {
                        alert('Vui long khai bao thong tin cot "columngroup"');
                        return;
                    }
                }
                var colRs = [];
                for (var i = 0; i < lstcolumn.length; i++) {
                    var col;
                    var tmp = this._getDatafield(lstcolumn[i]);
                    var _text = this._getText(lstcolumn[i]);
                    var _cellsalign = this._getCellsalign(lstcolumn[i]);
                    var _hidden = this._getHidden(lstcolumn[i]);
                    var _columntype = this._getColumntype(lstcolumn[i]);
                    var _cellsformat = this._getCellsformat(lstcolumn[i]);
                    var _sortable = this._getSortable(lstcolumn[i]);
                    var _width = this._getcolwidth(lstcolumn[i]);
                    var _align = this._getAlign(lstcolumn[i]);
                    var _columngroup = this._getcolumngroup(lstcolumn[i]);
                    var _colpinned = this._getpinned(lstcolumn[i]);
                    var _coleditable = this._getcoleditable(lstcolumn[i]);
                    var _renderer = this._getcolrenderer(lstcolumn[i]);
                    var _cellsrenderer = this._getcolcellsrenderer(lstcolumn[i]);
                    var _cellclassname = this._getcolcellclassname(lstcolumn[i]);
                    if (this._isListColumnType(lstcolumn[i])) {
                        var self = this;
                        var _dropDownWidth = this._getdropDownWidth(lstcolumn[i]);
                        var _autoDropDownHeight = this._getautoDropDownHeight(lstcolumn[i]);
                        var _dropDownHeight = this._getdropDownHeight(lstcolumn[i]);
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        col["displayfield"] = tmp + '_Dis';
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsalign"] = _cellsalign;
                        col["sortable"] = _sortable;
                        col["hidden"] = _hidden;
                        col["cellsformat"] = _cellsformat;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["pinned"] = _colpinned;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        col["createeditor"] = function (row, value, editor) {
                            if (this.datafield != undefined)
                                var l_columnlst = self._getColumnTemplateHtml();
                            var l_col = self._getColumwithDataField(l_columnlst, this.datafield);
                            if (l_col != null) {
                                _columntype = self._getColumntype(l_col);
                                _dropDownHeight = self._getdropDownHeight(l_col);
                                _dropDownWidth = self._getdropDownWidth(l_col);
                                _autoDropDownHeight = self._getautoDropDownHeight(l_col);
                                var _searchMode = self._getsearchMode(l_col);
                                var _autoComplete = self._getautoComplete(l_col);
                                if (_columntype == 'combobox') {
                                    editor.jqxComboBox({
                                        autoDropDownHeight: _autoDropDownHeight,
                                        dropDownWidth: _dropDownWidth,
                                        dropDownHeight: _dropDownHeight,
                                        searchMode: _searchMode,
                                        autoComplete: _autoComplete,
                                        source: self._getdataAdapter(this.datafield),
                                        displayMember: self._getdataAdapterOption(this.datafield, 'D'),
                                        valueMember: self._getdataAdapterOption(this.datafield, 'V')
                                    });
                                }
                                else {
                                    editor.jqxDropDownList({
                                        autoDropDownHeight: _autoDropDownHeight,
                                        dropDownWidth: _dropDownWidth,
                                        dropDownHeight: _dropDownHeight,
                                        source: self._getdataAdapter(this.datafield),
                                        displayMember: self._getdataAdapterOption(this.datafield, 'D'),
                                        valueMember: self._getdataAdapterOption(this.datafield, 'V')
                                    });
                                }
                            }
                        };
                    }
                    else if (_columntype.toLocaleLowerCase() == 'datetimeinput') {
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsalign"] = _cellsalign;
                        col["sortable"] = _sortable;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["cellsformat"] = _cellsformat;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                    }
                    else if (_columntype.toLocaleLowerCase().startsWith('template_')) {
                        var _colTypeTmp = _columntype.toLocaleLowerCase().replace("template_", "");
                        if (_colTypeTmp == 'maskedinput') {
                            col = { draggable: true };
                            col["text"] = _text;
                            col["datafield"] = tmp;
                            if (_width != null)
                                col["width"] = _width;
                            col["cellsalign"] = _cellsalign;
                            col["sortable"] = _sortable;
                            col["hidden"] = _hidden;
                            col["pinned"] = _colpinned;
                            col["cellsformat"] = _cellsformat;
                            col["columntype"] = "template";
                            col["columngroup"] = _columngroup;
                            col["align"] = _align;
                            col["editable"] = _coleditable;
                            col["cellsrenderer"] = function (row, columnfield, cellvalue, defaulthtml, columnproperties) {
                                if (cellvalue == this.stringOf(9, '0') || cellvalue == this.stringOf(7, '0') || cellvalue.substr(0, 9) == '000-00-00') {
                                    return '';
                                }
                                else {
                                    var parts = defaulthtml.split('>'), subparts = parts[1].split('<'), w = cellvalue;
                                    if (w.indexOf('-') == -1) {
                                        w = w.substr(0, 3) + '-' + w.substr(3, 2) + '-' + w.substr(5, 4);
                                    }
                                    return parts[0] + '>' + w + '<' + subparts[1] + '>';
                                }
                            };
                            col["createeditor"] = function (row, cellvalue, editor, cellText, width, height) {
                                var inputElement = $('<input/>').prependTo(editor);
                                inputElement.jqxMaskedInput({
                                    width: width,
                                    height: height,
                                    theme: 'energyblue',
                                    mask: '###-##-####',
                                    value: cellvalue
                                });
                            };
                            col["initeditor"] = function (row, cellvalue, editor, celltext, pressedkey) {
                                var inputField = editor.find('input');
                                if (pressedkey) {
                                    inputField.val(pressedkey);
                                }
                                else {
                                    inputField.val(cellvalue);
                                }
                                inputField.jqxMaskedInput('clear');
                                inputField.jqxMaskedInput('focus');
                            };
                            col["geteditorvalue"] = function (row, cellvalue, editor) {
                                return editor.find('input').val();
                            };
                        }
                        else {
                        }
                    }
                    else if (_columntype.toLocaleLowerCase() == 'checkbox') {
                        col = { draggable: true, type: 'bool' };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        col["width"] = _width;
                        col["sortable"] = _sortable;
                        col["cellsalign"] = _cellsalign;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                    }
                    else {
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsformat"] = _cellsformat;
                        col["sortable"] = _sortable;
                        col["cellsalign"] = _cellsalign;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                    }
                    colRs.push(col);
                }
                var colGrs = [];
                if (lstcolumgroups.length > 0) {
                    for (var j = 0; j < lstcolumgroup.length; j++) {
                        var _text = this._getText(lstcolumgroup[j]);
                        var _name = this._getName(lstcolumgroup[j]);
                        var _align = this._getAlign(lstcolumgroup[j]);
                        var grp = {
                            text: _text,
                            name: _name,
                            align: _align
                        };
                        colGrs.push(grp);
                    }
                }
                var heightParent = $(this).parent().outerHeight(true);
                if (heightParent == 0) {
                    heightParent = '100%';
                }
                else {
                    heightParent = heightParent + 'px';
                }
                if (this._getheight() != null) {
                    heightParent = this._getheight();
                }
                console.log('sss');
                if (colGrs.length > 0) {
                    $(this.host).jqxGrid({
                        theme: tserp.System.getTheme(),
                        source: this._getEmptyAataAdapter(colRs),
                        pageable: false,
                        sortable: true,
                        columnsresize: true,
                        altrows: true,
                        autoheight: this.autoheight,
                        autorowheight: this.autorowheight,
                        editable: this._geteditable(),
                        width: this._getwidth(),
                        editmode: this._geteditmode(),
                        clipboard: this._getclipboard(),
                        selectionmode: this._getselectionmode(),
                        keyboardnavigation: this._getkeyboardnavigation(),
                        columnsheight: this._getcolumnsheight(),
                        disabled: this._getdisabled(),
                        height: heightParent,
                        rowsheight: this.rowsheight,
                        autoshowloadelement: this.autoshowloadelement,
                        columns: colRs,
                        columngroups: colGrs
                    });
                }
                else {
                    $(this.host).jqxGrid({
                        theme: tserp.System.getTheme(),
                        source: this._getEmptyAataAdapter(colRs),
                        pageable: false,
                        sortable: true,
                        columnsresize: true,
                        altrows: true,
                        autoheight: this.autoheight,
                        autorowheight: this.autorowheight,
                        editable: this._geteditable(),
                        width: this._getwidth(),
                        editmode: this._geteditmode(),
                        selectionmode: this._getselectionmode(),
                        keyboardnavigation: this._getkeyboardnavigation(),
                        columnsheight: this._getcolumnsheight(),
                        height: heightParent,
                        rowsheight: this.rowsheight,
                        autoshowloadelement: this.autoshowloadelement,
                        columns: colRs
                    });
                }
                this.AddEventGrid($("#" + this.ctrlId), "bindingcomplete", this.host.getAttribute('bindingcomplete'));
                this.AddEventGrid($("#" + this.ctrlId), "columnresized", this.host.getAttribute('columnresized'));
                this.AddEventGrid($("#" + this.ctrlId), "columnreordered", this.host.getAttribute('columnreordered'));
                this.AddEventGrid($("#" + this.ctrlId), "columnclick", this.host.getAttribute('columnclick'));
                this.AddEventGrid($("#" + this.ctrlId), "cellclick", this.host.getAttribute('cellclick'));
                this.AddEventGrid($("#" + this.ctrlId), "celldoubleclick", this.host.getAttribute('celldoubleclick'));
                this.AddEventGrid($("#" + this.ctrlId), "cellselect", this.host.getAttribute('cellselect'));
                this.AddEventGrid($("#" + this.ctrlId), "cellunselect", this.host.getAttribute('cellunselect'));
                this.AddEventGrid($("#" + this.ctrlId), "cellvaluechanged", this.host.getAttribute('cellvaluechanged'));
                this.AddEventGrid($("#" + this.ctrlId), "cellbeginedit", this.host.getAttribute('cellbeginedit'));
                this.AddEventGrid($("#" + this.ctrlId), "cellendedit", this.host.getAttribute('cellendedit'));
                this.AddEventGrid($("#" + this.ctrlId), "filter", this.host.getAttribute('filter'));
                this.AddEventGrid($("#" + this.ctrlId), "groupschanged", this.host.getAttribute('groupschanged'));
                this.AddEventGrid($("#" + this.ctrlId), "groupexpand", this.host.getAttribute('groupexpand'));
                this.AddEventGrid($("#" + this.ctrlId), "groupcollapse", this.host.getAttribute('groupcollapse'));
                this.AddEventGrid($("#" + this.ctrlId), "pagechanged", this.host.getAttribute('pagechanged'));
                this.AddEventGrid($("#" + this.ctrlId), "pagesizechanged", this.host.getAttribute('pagesizechanged'));
                this.AddEventGrid($("#" + this.ctrlId), "rowclick", this.host.getAttribute('rowclick'));
                this.AddEventGrid($("#" + this.ctrlId), "rowdoubleclick", this.host.getAttribute('rowdoubleclick'));
                this.AddEventGrid($("#" + this.ctrlId), "rowselect", this.host.getAttribute('rowselect'));
                this.AddEventGrid($("#" + this.ctrlId), "rowunselect", this.host.getAttribute('rowunselect'));
                this.AddEventGrid($("#" + this.ctrlId), "rowexpand", this.host.getAttribute('rowexpand'));
                this.AddEventGrid($("#" + this.ctrlId), "rowcollapse", this.host.getAttribute('rowcollapse'));
                this.AddEventGrid($("#" + this.ctrlId), "sort", this.host.getAttribute('sort'));
            };
            jqxgrid.prototype._getText = function (col) {
                var _text = col.getAttribute("text");
                return _text;
            };
            jqxgrid.prototype._getName = function (col) {
                var _name = col.getAttribute("name");
                return _name;
            };
            jqxgrid.prototype._isListColumnType = function (col) {
                var _columntype = col.getAttribute("columntype");
                if (_columntype == null || _columntype == undefined || _columntype == '')
                    return false;
                if (_columntype == 'combobox' || _columntype == 'dropdownlist') {
                    return true;
                }
                return false;
            };
            jqxgrid.prototype._getDatafield = function (col) {
                var _datafield = col.getAttribute("datafield");
                if (_datafield == null || _datafield == undefined || _datafield == '') {
                    alert('vui long khai bao "datafield".' + col);
                    return;
                }
                return _datafield;
            };
            jqxgrid.prototype._getCellsalign = function (col) {
                var _cellsalign = col.getAttribute("cellsalign");
                if (_cellsalign == null || _cellsalign == undefined || _cellsalign == '') {
                    _cellsalign = 'left';
                }
                return _cellsalign;
            };
            jqxgrid.prototype._getHidden = function (col) {
                var _hidden = col.getAttribute("hidden");
                return tserp.utils.Converter.ObjectToString(_hidden, false);
            };
            jqxgrid.prototype._getColumntype = function (col) {
                var _columntype = col.getAttribute("columntype");
                if (_columntype == null || _columntype == undefined || _columntype == '') {
                    _columntype = 'textbox';
                }
                return _columntype;
            };
            jqxgrid.prototype._getCellsformat = function (col) {
                var _cellsformat = col.getAttribute("cellsformat");
                if (col.getAttribute("columntype") == "datetimeinput") {
                    _cellsformat = col.getAttribute("cellsformat") || 'dd-MM-yyyy';
                }
                if (_cellsformat == null || _cellsformat == undefined || _cellsformat == '') {
                    _cellsformat = '';
                }
                return _cellsformat;
            };
            jqxgrid.prototype._getCellsformat2 = function (datafield) {
                var lstcolumn = this._getColumnTemplateHtml();
                if (lstcolumn.length < 1) {
                    return null;
                }
                for (var i = 0; i < lstcolumn.length; i++) {
                    var tmp = this._getDatafield(lstcolumn[i]);
                    if (tmp == datafield) {
                        return this._getCellsformat(lstcolumn[i]);
                    }
                }
                return null;
            };
            jqxgrid.prototype._getSortable = function (col) {
                var _sortable = col.getAttribute("sortable");
                if (_sortable == null || _sortable == undefined || _sortable == '') {
                    _sortable = false;
                }
                return _sortable;
            };
            jqxgrid.prototype._getcolwidth = function (col) {
                var _with = col.getAttribute("width");
                if (_with == undefined) {
                    return 0;
                }
                if (_with == '') {
                    return 0;
                }
                return _with;
            };
            jqxgrid.prototype._getAlign = function (col) {
                var _align = col.getAttribute("align");
                if (_align == null || _align == undefined || _align == '') {
                    _align = 'center';
                }
                return _align;
            };
            jqxgrid.prototype._getcoleditable = function (col) {
                var _editable = col.getAttribute('editable');
                return tserp.utils.Converter.ObjectToBoolean(_editable, true);
            };
            jqxgrid.prototype._getcolrenderer = function (col) {
                var _renderer = col.getAttribute('renderer');
                if (_renderer != null)
                    _renderer = window[_renderer];
                return _renderer;
            };
            jqxgrid.prototype._getcolcellsrenderer = function (col) {
                var _cellsrenderer = col.getAttribute('cellsrenderer');
                if (_cellsrenderer != null)
                    _cellsrenderer = window[_cellsrenderer];
                return _cellsrenderer;
            };
            jqxgrid.prototype._getcolcellclassname = function (col) {
                var _cellclassname = col.getAttribute('cellclassname');
                if (_cellclassname != null)
                    _cellclassname = window[_cellclassname];
                return _cellclassname;
            };
            jqxgrid.prototype._getdropDownWidth = function (col) {
                var _dropDownWidth = col.getAttribute('dropDownWidth') || 200;
                return _dropDownWidth;
            };
            jqxgrid.prototype._getautoDropDownHeight = function (col) {
                var _r = tserp.utils.Converter.ObjectToBoolean(col.getAttribute('autoDropDownHeight'), false);
                return _r;
            };
            jqxgrid.prototype._getautoComplete = function (col) {
                return tserp.utils.Converter.ObjectToBoolean(col.getAttribute('autoComplete'), false);
            };
            jqxgrid.prototype._getsearchMode = function (col) {
                return col.getAttribute('searchMode') || 'startswithignorecase';
            };
            jqxgrid.prototype._getdropDownHeight = function (col) {
                var _r = col.getAttribute('dropDownHeight') || 200;
                return _r;
            };
            jqxgrid.prototype._getcolumngroup = function (col) {
                var _columngroup = col.getAttribute("columngroup");
                if (_columngroup == null || _columngroup == undefined || _columngroup == '') {
                    _columngroup = '';
                }
                return _columngroup;
            };
            jqxgrid.prototype._getDropDownListData = function (col) {
                if (col == undefined || col == '' || col == null)
                    return [];
                var _columntype = col.getAttribute("columntype");
                if (_columntype == 'dropdownlist' || _columntype == 'combobox') {
                    var _columndropdownlistData = col.getAttribute("columndropdownlistData");
                    if (_columndropdownlistData != null && _columndropdownlistData != '' && _columndropdownlistData != undefined) {
                        return JSON.parse(_columndropdownlistData);
                    }
                    return [];
                }
                return [];
            };
            jqxgrid.prototype._getdataAdapter = function (coldatafield) {
                var columnlst = this._getColumnTemplateHtml();
                var col = this._getColumwithDataField(columnlst, coldatafield);
                if (col == null)
                    return undefined;
                var dropdown_columns_list_data = this._getDropDownListData(col);
                for (var i = 0; i < dropdown_columns_list_data.length; i++) {
                    if (dropdown_columns_list_data[i].datafield == coldatafield) {
                        var source = {
                            datatype: "json",
                            localdata: dropdown_columns_list_data[i].jsondata,
                            updaterow: function (rowid, rowdata, commit) {
                                commit(true);
                            },
                        };
                        var dataAdapter = new $.jqx.dataAdapter(source);
                        dataAdapter.dataBind();
                        return dataAdapter;
                    }
                }
            };
            jqxgrid.prototype._getdataAdapterOption = function (coldatafield, typeVal) {
                var columnlst = this._getColumnTemplateHtml();
                var col = this._getColumwithDataField(columnlst, coldatafield);
                if (col == null)
                    return undefined;
                var dropdown_columns_list_data = this._getDropDownListData(col);
                for (var i = 0; i < dropdown_columns_list_data.length; i++) {
                    if (dropdown_columns_list_data[i].datafield == coldatafield) {
                        if (typeVal == 'D')
                            return dropdown_columns_list_data[i].displaymember;
                        else if (typeVal == 'V')
                            return dropdown_columns_list_data[i].valuemember;
                        else
                            return '';
                    }
                }
                return '';
            };
            jqxgrid.prototype._setDropDownListData = function (col, djson) {
                if (col == undefined || col == '' || col == null)
                    return;
                else
                    col.setAttribute("columndropdownlistData", JSON.stringify(djson));
            };
            jqxgrid.prototype._getqueryChildren = function (element, htmlTag) {
                var el = document.getElementById(element.getAttribute('refcolId'));
                if (htmlTag == 'column') {
                    el = element;
                }
                if (el == null) {
                    console.log(element);
                    console.trace();
                }
                var tmp = [];
                for (var i = 0; i < el.children.length; i++) {
                    if (el.children[i].tagName == htmlTag.toUpperCase()) {
                        tmp.push(el.children[i]);
                    }
                }
                return tmp;
            };
            jqxgrid.prototype._getColumnTemplateHtml = function () {
                var lstcolumns = this._getqueryChildren(this.host, 'columns');
                if (lstcolumns.length == 0) {
                    alert('Vui Long Khai bao thong tin cot cua luoi');
                    return [];
                }
                if (lstcolumns.length > 1) {
                    alert('Trong mot luoi chi co mot tag "columns". Vui long kiem tra lai.');
                    return [];
                }
                var lstcolumn = this._getqueryChildren(lstcolumns[0], 'column');
                if (lstcolumn.length < 1) {
                    alert('Vui long khai bao thong tin cot "column"');
                    return [];
                }
                return lstcolumn;
            };
            jqxgrid.prototype._getColumwithDataField = function (lstcolumn, coldatafield) {
                for (var i = 0; i < lstcolumn.length; i++) {
                    var tmp = this._getDatafield(lstcolumn[i]);
                    if (tmp == coldatafield) {
                        return lstcolumn[i];
                    }
                }
                return null;
            };
            jqxgrid.prototype._getselectionmode = function () {
                var _selectionmode = this.host.getAttribute('selectionmode') || 'multiplerowsextended';
                return _selectionmode;
            };
            jqxgrid.prototype._getclipboard = function () {
                var _clipboard = this.host.getAttribute('clipboard') || false;
                return _clipboard;
            };
            jqxgrid.prototype._getsortable = function () {
                var _sortable = this.host.getAttribute('sortable') || false;
                return _sortable;
            };
            jqxgrid.prototype._getdisabled = function () {
                var _disabled = this.host.getAttribute('disabled') || false;
                return _disabled;
            };
            jqxgrid.prototype._geteditable = function () {
                var _editable = this.host.getAttribute('editable') || true;
                return _editable;
            };
            jqxgrid.prototype._getcolumnsheight = function () {
                var _columnsheight = this.host.getAttribute('columnsheight') || 25;
                return _columnsheight;
            };
            jqxgrid.prototype._geteditmode = function () {
                var _editmode = this.host.getAttribute('editmode') || 'click';
                return _editmode;
            };
            jqxgrid.prototype._getkeyboardnavigation = function () {
                var _keyboardnavigation = this.host.getAttribute('keyboardnavigation') || true;
                return _keyboardnavigation;
            };
            jqxgrid.prototype._getwidth = function () {
                var _width = this.host.getAttribute('width') || '100%';
                return _width;
            };
            jqxgrid.prototype._getheight = function () {
                var _height = this.host.getAttribute('height');
                return _height;
            };
            jqxgrid.prototype._getpinned = function (col) {
                var _colpinned = col.getAttribute("pinned") || false;
                return _colpinned;
            };
            jqxgrid.prototype._ValidDateValue = function (obj, type, lang) {
                var testday;
                var today;
                var s;
                var t_yy, t_mm, t_dd;
                var sValue = obj;
                var aValue = sValue.split('/');
                if (type == 0) {
                    if (aValue.length == 3) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        aValue[1]++;
                        aValue[1] -= 1;
                        aValue[2]++;
                        aValue[2] -= 1;
                        if (lang != "1") {
                            testday = new Date(aValue[0], aValue[1] - 1, aValue[2]);
                            t_yy = aValue[0];
                            t_mm = aValue[1] - 1;
                            t_dd = aValue[2];
                        }
                        else {
                            testday = new Date(aValue[2], aValue[1] - 1, aValue[0]);
                            t_yy = aValue[2];
                            t_mm = aValue[1] - 1;
                            t_dd = aValue[0];
                        }
                        if (!((testday.getYear() % 100) != (t_yy % 100) || testday.getMonth() != t_mm || testday.getDate() != t_dd)) {
                            if (lang != "1")
                                today = new Date(aValue[0], aValue[1] - 1, aValue[2]);
                            else
                                today = new Date(aValue[2], aValue[1] - 1, aValue[0]);
                        }
                    }
                }
                else if (type == 1) {
                    if (aValue.length == 2) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        aValue[1]++;
                        aValue[1] -= 1;
                        if (lang != "1") {
                            testday = new Date(aValue[0], aValue[1] - 1, 1);
                            t_yy = aValue[0];
                            t_mm = aValue[1] - 1;
                        }
                        else {
                            testday = new Date(aValue[1], aValue[0] - 1, 1);
                            t_yy = aValue[1];
                            t_mm = aValue[0] - 1;
                        }
                        if (!((testday.getYear() % 100) != (t_yy % 100) || testday.getMonth() != t_mm)) {
                            if (lang != "1")
                                today = new Date(aValue[0], aValue[1] - 1, 1);
                            else
                                today = new Date(aValue[1], aValue[0] - 1, 1);
                        }
                    }
                }
                else {
                    if (aValue.length == 1) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        if (!(isNaN(aValue[0])) && aValue[0] > 0)
                            today = new Date(aValue[0], 0, 1);
                    }
                }
                if (typeof (today) == "string")
                    return "";
                var y = "000" + (today.getFullYear());
                var m = "0" + (today.getMonth() + 1);
                var d = "0" + (today.getDate());
                if (type == 0) {
                    if (lang != "1")
                        s = y.substr(y.length - 4) + "/" + m.substr(m.length - 2) + "/" + d.substr(d.length - 2);
                    else
                        s = d.substr(d.length - 2) + "/" + m.substr(m.length - 2) + "/" + y.substr(y.length - 4);
                }
                else if (type == 1)
                    if (lang != "1")
                        s = y.substr(y.length - 4) + "/" + m.substr(m.length - 2);
                    else
                        s = m.substr(m.length - 2) + "/" + y.substr(y.length - 4);
                else
                    s = y.substr(y.length - 4);
                return s;
            };
            jqxgrid.prototype._getFieldType = function (colList, datafield) {
                var rs = "string";
                for (var i = 0; i < colList.length; i++) {
                    if (colList[i].datafield == datafield) {
                        if (colList[i].columntype == 'datetimeinput')
                            return 'date';
                        if (colList[i].columntype == 'numberinput' || colList[i].columntype == 'number')
                            return 'number';
                        if (colList[i].columntype == 'checkbox')
                            return 'bool';
                    }
                }
                return rs;
            };
            jqxgrid.prototype._getEmptyAataAdapter = function (colList) {
                var myDatafields = [];
                var field = {};
                for (var i = 0; i < colList.length; i++) {
                    field = {
                        name: colList[i].datafield,
                        type: this._getFieldType(colList, colList[i].datafield)
                    };
                    myDatafields[myDatafields.length] = field;
                }
                for (i = 0; i < colList.length; i++) {
                    if (colList[i].columntype == 'dropdownlist' || colList[i].columntype == 'combobox') {
                        field = {
                            name: colList[i].datafield + "_Dis",
                            type: "string"
                        };
                        myDatafields[myDatafields.length] = field;
                    }
                }
                field = {
                    name: "_gwStatus_",
                    type: "number"
                };
                myDatafields[myDatafields.length] = field;
                var gridSource = {
                    localdata: [],
                    datatype: "array",
                    datafields: myDatafields,
                    updaterow: function (rowid, rowdata, commit) {
                        commit(true);
                    },
                };
                var gridDataAdapter = new $.jqx.dataAdapter(gridSource);
                gridDataAdapter.dataBind();
                return gridDataAdapter;
            };
            jqxgrid.prototype.SetColComboData = function (datafield, jsondata, valuemember, displaymember) {
                var tmpData = [];
                tmpData.push({
                    datafield: datafield,
                    jsondata: jsondata,
                    displaymember: displaymember,
                    valuemember: valuemember
                });
                this.dropdown_columns_list.push({
                    datafield: datafield,
                    jsondata: jsondata,
                    displaymember: displaymember,
                    valuemember: valuemember
                });
                var _tempCol = this._getColumnTemplateHtml();
                for (var i = 0; i < _tempCol.length; i++) {
                    var tmp = this._getDatafield(_tempCol[i]);
                    if (tmp == datafield) {
                        this._setDropDownListData(_tempCol[i], tmpData);
                    }
                }
                $("#" + this.ctrlId).jqxGrid({ 'dropdownlistsource': this.dropdown_columns_list });
                this._render();
            };
            jqxgrid.prototype.GetData = function () {
                return this.value;
            };
            jqxgrid.prototype.SetData = function (value) {
                this.value = value;
            };
            jqxgrid.prototype.GetGridData = function (row, coldatafield) {
                var gridId = "#" + this.ctrlId;
                var column = $(gridId).jqxGrid('getcolumn', coldatafield);
                if (column == null) {
                    var _rs = $(gridId).jqxGrid('columns');
                    for (var i = 0; i < _rs.length; i++) {
                        if (_rs[i].datafield == coldatafield) {
                            column = _rs[i];
                            break;
                        }
                    }
                }
                if (column == null) {
                    throw 'Loi lay thong tin cot';
                }
                if (column.columntype == 'datetimeinput') {
                    var t = $(gridId).jqxGrid('getcellvalue', row, coldatafield);
                    return moment(t).format('YYYYMMDD');
                }
                else if (column.columntype == 'dropdownlist' || column.columntype == 'combobox') {
                    return $(gridId).jqxGrid('getcellvalue', row, coldatafield);
                }
                else if (column.columntype == 'checkbox') {
                    return tserp.utils.Converter.BooleanToString($(gridId).jqxGrid('getcellvalue', row, coldatafield));
                }
                else
                    return $(gridId).jqxGrid('getcellvalue', row, coldatafield);
            };
            jqxgrid.prototype.SetGridData = function (row, coldatafield, value) {
                var gridId = "#" + this.ctrlId;
                var column = $(gridId).jqxGrid('getcolumn', coldatafield);
                if (column.columntype == 'datetimeinput') {
                    $(gridId).jqxGrid('setcellvalue', row, coldatafield, moment(value, "YYYYMMDD"));
                    $(gridId).jqxGrid('begincelledit', row, coldatafield);
                    $(gridId).jqxGrid('endcelledit', row, coldatafield, false);
                }
                else if (column.columntype == 'dropdownlist' || column.columntype == 'combobox') {
                    var l_dropdownlistsource = this.dropdown_columns_list;
                    var testVal = '';
                    if (l_dropdownlistsource != undefined)
                        for (var i = 0; i < l_dropdownlistsource.length; i++) {
                            if (l_dropdownlistsource[i].datafield == coldatafield) {
                                for (var j = 0; j < l_dropdownlistsource[i].jsondata.length; j++) {
                                    if (l_dropdownlistsource[i].jsondata[j][l_dropdownlistsource[i].valuemember] == value) {
                                        testVal = l_dropdownlistsource[i].jsondata[j][l_dropdownlistsource[i].displaymember];
                                    }
                                }
                            }
                        }
                    $(gridId).jqxGrid('setcellvalue', row, coldatafield, value);
                    $(gridId).jqxGrid('setcellvalue', row, coldatafield + '_Dis', testVal);
                }
                else if (column.columntype == 'checkbox') {
                    $(gridId).jqxGrid('setcellvalue', row, coldatafield, tserp.utils.Converter.ObjectToBoolean(value, false));
                }
                else
                    $(gridId).jqxGrid('setcellvalue', row, coldatafield, value);
                this.setRowEdited(row);
            };
            jqxgrid.prototype.SetGridText = function (row, coldatafield, value) {
                this.SetGridData(row, coldatafield, value);
            };
            jqxgrid.prototype.Validate = function (row, coldatafield, cancel) {
            };
            jqxgrid.prototype.GetGridControl = function () {
                return $(this).children("div");
            };
            jqxgrid.prototype.ClearData = function () {
                this.clear();
            };
            jqxgrid.prototype.AddRow = function () {
                var b = $(this.host).jqxGrid('addrow', null, {});
                if (b) {
                    var rows = $(this.host).jqxGrid('getrows');
                    $(this.host).jqxGrid('selectrow', rows.length - 1);
                    $(this.host).jqxGrid('ensurerowvisible', rows.length - 1);
                }
                ;
            };
            jqxgrid.prototype.AddRowAt = function (idx) {
            };
            jqxgrid.prototype.DeleteRow = function (remove) {
                if (remove == true) {
                    var selectedrowindexes = $('#' + this.ctrlId).jqxGrid('selectedrowindexes');
                    for (var i = 0; i <= selectedrowindexes.length; i++) {
                        var rowscount = $('#' + this.ctrlId).jqxGrid('getdatainformation').rowscount;
                        if (selectedrowindexes[i] >= 0 && selectedrowindexes[i] < rowscount) {
                            var id = $('#' + this.ctrlId).jqxGrid('getrowid', selectedrowindexes[i]);
                            var commit = $('#' + this.ctrlId).jqxGrid('deleterow', id);
                        }
                    }
                }
                else {
                    var selectedrowindexes = $('#' + this.ctrlId).jqxGrid('selectedrowindexes');
                    for (var i = 0; i <= selectedrowindexes.length; i++) {
                        this.setRowDeleted(selectedrowindexes[i]);
                    }
                }
            };
            jqxgrid.prototype.DeleteRowAt = function (row, r) {
                if (r == true) {
                    if (row >= 0 && row < this.rowCount) {
                        var id = $('#' + this.ctrlId).jqxGrid('getrowid', row);
                        var commit = $('#' + this.ctrlId).jqxGrid('deleterow', id);
                    }
                }
                else {
                    if (row > 0 && row < this.rowCount) {
                        this.setRowDeleted(row);
                    }
                }
            };
            jqxgrid.prototype.UnDeleteRow = function () {
                var selectedrowindexes = $("#" + this.ctrlId).jqxGrid('selectedrowindexes');
                for (var i = 0; i < selectedrowindexes.length; i++) {
                    this.setRowNormal(selectedrowindexes[i]);
                }
            };
            jqxgrid.prototype.UnDeleteRowAt = function (row) {
                if (row > 0 && row < this.rowCount) {
                    this.setRowNormal(row);
                }
            };
            jqxgrid.prototype.DeleteAll = function () {
                var row, i;
                for (i = 0; i < this.rowCount; i++) {
                    this.setRowDeleted(row);
                }
            };
            jqxgrid.prototype.SetRowBgColor = function (ridx, htmlcolor) {
                if (ridx != null && ridx != undefined && String(ridx) != '') {
                    var _rid = "row" + ridx + this.ctrlId;
                    var _lst = $('#' + _rid).find('div');
                    for (var i = 0; i < _lst.length; i++) {
                        $(_lst[i]).css("background-color", 'red');
                    }
                }
                setTimeout(this.SetRowBgColor, 300, ridx, htmlcolor);
            };
            jqxgrid.prototype.getType = function () {
                return '';
            };
            jqxgrid.prototype.isReadonly = function () {
                this.host.getAttribute('data-readonly');
            };
            jqxgrid.prototype.setrawsource = function (data) {
                $("#" + this.ctrlId).jqxGrid({ 'dropdownlistsource': this.dropdown_columns_list });
                $("#" + this.ctrlId).jqxGrid('setrawsource', data);
            };
            jqxgrid.prototype.setRowEdited = function (selrow) {
                if (selrow > -1) {
                    $("#" + this.ctrlId).jqxGrid('setRowEdited', selrow);
                }
            };
            jqxgrid.prototype.setRowNormal = function (selrow) {
                if (selrow > -1) {
                    $("#" + this.ctrlId).jqxGrid('setRowNormal', selrow);
                }
            };
            jqxgrid.prototype.setRowAdded = function (selrow) {
                if (selrow > -1) {
                    $("#" + this.ctrlId).jqxGrid('setRowAdded', selrow);
                }
            };
            jqxgrid.prototype.setRowDeleted = function (selrow) {
                if (selrow > -1) {
                    $("#" + this.ctrlId).jqxGrid('setRowDeleted', selrow);
                }
            };
            jqxgrid.prototype.setAllRowIsDeleted = function (selrow) {
                $("#" + this.ctrlId).jqxGrid('setRowDeleted', selrow);
            };
            jqxgrid.prototype.showloadelement = function () {
                $("#" + this.ctrlId).jqxGrid('showloadelement');
            };
            jqxgrid.prototype.hideloadelement = function () {
                $("#" + this.ctrlId).jqxGrid('hideloadelement');
            };
            jqxgrid.prototype.getRowCount = function () {
                return this.rowCount;
            };
            jqxgrid.prototype.getDataSource = function () {
                var rowCaches = $('#' + this.ctrlId).jqxGrid('getboundrows');
                var rows = ($.parseJSON(JSON.stringify(rowCaches)));
                var lstcolumn = this._getColumnTemplateHtml();
                for (var r = 0; r < rows.length; r++) {
                    for (var i = 0; i < lstcolumn.length; i++) {
                        var _columntype = this._getColumntype(lstcolumn[i]);
                        if (_columntype == 'datetimeinput') {
                            var tmp = this._getDatafield(lstcolumn[i]);
                            if (rows[r][tmp] != '' && rows[r][tmp] != null && rows[r][tmp] != undefined)
                                rows[r][tmp] = moment(rows[r][tmp]).format('YYYYMMDD');
                        }
                        if (_columntype == 'checkbox') {
                            var tmp = this._getDatafield(lstcolumn[i]);
                            if (String(rows[r][tmp]) != '' && String(rows[r][tmp]) != null && String(rows[r][tmp]) != undefined
                                && String(rows[r][tmp]) != 'null' && String(rows[r][tmp]) != 'undefined') {
                                rows[r][tmp] = tserp.utils.Converter.BooleanToString(rows[r][tmp]);
                            }
                        }
                    }
                }
                return rows;
            };
            jqxgrid.prototype.formatData = function (valJson) {
                console.log(valJson);
                var rows = {};
                if (valJson != null && valJson != undefined) {
                    rows = valJson;
                    var lstcolumn = this._getColumnTemplateHtml();
                    for (var r = 0; r < rows.records.length; r++) {
                        for (var i = 0; i < lstcolumn.length; i++) {
                            var _columntype = this._getColumntype(lstcolumn[i]);
                            if (_columntype == 'datetimeinput') {
                                var tmp = this._getDatafield(lstcolumn[i]);
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = moment(rows.records[r][tmp])._d;
                            }
                            if (_columntype == 'checkbox') {
                                var tmp = this._getDatafield(lstcolumn[i]);
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = tserp.utils.Converter.ObjectToBoolean(rows.records[r][tmp], false);
                            }
                        }
                    }
                }
                else {
                    rows = { records: {} };
                }
                return rows;
            };
            jqxgrid.prototype.autoresizecolumns = function (val) {
                if (val == undefined || val == null || val == '')
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumns');
                else
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumns', val);
            };
            jqxgrid.prototype.autoresizecolumn = function (dataField, val) {
                if (val == undefined || val == null || val == '')
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumn', dataField);
                else
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumn', dataField, val);
            };
            jqxgrid.prototype.beginupdate = function (dataField, val) {
                $('#' + this.ctrlId).jqxGrid('beginupdate');
            };
            jqxgrid.prototype.clear = function () {
                $('#' + this.ctrlId).jqxGrid('clear');
            };
            jqxgrid.prototype.endupdate = function () {
                $('#' + this.ctrlId).jqxGrid('endupdate');
            };
            jqxgrid.prototype.getcolumnindex = function (dataField) {
                var index = $('#' + this.ctrlId).jqxGrid('getcolumnindex', dataField);
                return index;
            };
            jqxgrid.prototype.getcolumn = function (dataField) {
                var column = $('#' + this.ctrlId).jqxGrid('getcolumn', dataField);
                return column;
            };
            jqxgrid.prototype.getcolumnproperty = function (dataField, propertyName) {
                var value = $('#' + this.ctrlId).jqxGrid('getcolumnproperty', dataField, propertyName);
                return value;
            };
            jqxgrid.prototype.getrowid = function (rowBoundIndex) {
                var id = $('#' + this.ctrlId).jqxGrid('getrowid', rowBoundIndex);
                return id;
            };
            jqxgrid.prototype.getrowdata = function (rowBoundIndex) {
                var data = $('#' + this.ctrlId).jqxGrid('getrowdata', rowBoundIndex);
                return data;
            };
            jqxgrid.prototype.hidecolumn = function (dataField) {
                $('#' + this.ctrlId).jqxGrid('hidecolumn', dataField);
            };
            jqxgrid.prototype.showcolumn = function (dataField) {
                $('#' + this.ctrlId).jqxGrid('showcolumn', dataField);
            };
            jqxgrid.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
                $('#' + this.ctrlId).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
            };
            jqxgrid.prototype.settitletext = function (dataField, text) {
                $('#' + this.ctrlId).jqxGrid('setcolumnproperty', dataField, 'text', text);
            };
            jqxgrid.prototype.getcelltext = function (rowBoundIndex, dataField) {
                return $('#' + this.ctrlId).jqxGrid('getcelltext', rowBoundIndex, dataField);
            };
            jqxgrid.prototype.getcelltextbyid = function (rowID, dataField) {
                return $('#' + this.ctrlId).jqxGrid('getcelltextbyid', rowID, dataField);
            };
            jqxgrid.prototype.clearselection = function () {
                $('#' + this.ctrlId).jqxGrid('clearselection');
            };
            jqxgrid.prototype.getselectedrowindex = function () {
                var rowindex = $('#' + this.ctrlId).jqxGrid('getselectedrowindex');
                return rowindex;
            };
            jqxgrid.prototype.getselectedcell = function () {
                var cell = $('#' + this.ctrlId).jqxGrid('getselectedcell');
                return cell;
            };
            jqxgrid.prototype.getselectedcells = function () {
                var cell = $('#' + this.ctrlId).jqxGrid('getselectedcells');
                return cell;
            };
            jqxgrid.prototype.selectcell = function (rowBoundIndex, dataField) {
                $('#' + this.ctrlId).jqxGrid('selectcell', rowBoundIndex, dataField);
            };
            jqxgrid.prototype.selectallrows = function () {
                $('#' + this.ctrlId).jqxGrid('selectallrows');
            };
            jqxgrid.prototype.selectrow = function (rowBoundIndex) {
                $('#' + this.ctrlId).jqxGrid('selectrow', rowBoundIndex);
            };
            jqxgrid.prototype.unselectrow = function (rowBoundIndex) {
                $('#' + this.ctrlId).jqxGrid('unselectrow', rowBoundIndex);
            };
            jqxgrid.prototype.unselectcell = function (rowBoundIndex, dataField) {
                $('#' + this.ctrlId).jqxGrid('unselectcell', rowBoundIndex, dataField);
            };
            jqxgrid.prototype.AddEventGrid = function (obj, eventname, fnName) {
                var _cellclick = fnName;
                if (_cellclick != null && _cellclick != '' && _cellclick != undefined) {
                    var n = _cellclick.indexOf("(");
                    var fn = _cellclick;
                    if (n > -1) {
                        var fn = _cellclick.substr(0, n);
                    }
                    obj.on(eventname, window[fn]);
                }
            };
            return jqxgrid;
        }());
        components.jqxgrid = jqxgrid;
        var ToggleButton = (function (_super) {
            __extends(ToggleButton, _super);
            function ToggleButton(element, options) {
                var _this = _super.call(this, element) || this;
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-togglebutton ts-content', tpl, {
                    _tbx: 'input'
                }, 'input');
                if (_this._orgTag == 'INPUT') {
                    _this._copyOriginalAttributes(_this._tbx);
                    var value = _this._tbx.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                }
                _this.initialize(options);
                return _this;
            }
            Object.defineProperty(ToggleButton.prototype, "value", {
                get: function () {
                    return this._tbx.value;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._tbx.value = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            ToggleButton.ctrlIinternalId = tserp.utils.EsysMath.uuid(15, 30);
            ToggleButton.controlTemplate = '<div class="switch">' +
                '<input ts-part="input" id= "' + ToggleButton.ctrlIinternalId + '" class= "cmn-toggle cmn-toggle-round" type="checkbox" >' +
                '<label for= "' + ToggleButton.ctrlIinternalId + '" > </label>' +
                '</div>';
            return ToggleButton;
        }(tserp.Control));
        components.ToggleButton = ToggleButton;
    })(components = tserp.components || (tserp.components = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.components.js.map