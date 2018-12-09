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
    var grid;
    (function (grid_1) {
        var CellType;
        (function (CellType) {
            CellType[CellType["None"] = 0] = "None";
            CellType[CellType["Cell"] = 1] = "Cell";
            CellType[CellType["ColumnHeader"] = 2] = "ColumnHeader";
            CellType[CellType["RowHeader"] = 3] = "RowHeader";
            CellType[CellType["TopLeft"] = 4] = "TopLeft";
            CellType[CellType["ColumnFooter"] = 5] = "ColumnFooter";
            CellType[CellType["BottomLeft"] = 6] = "BottomLeft";
        })(CellType = grid_1.CellType || (grid_1.CellType = {}));
        var AllowMerging;
        (function (AllowMerging) {
            AllowMerging[AllowMerging["None"] = 0] = "None";
            AllowMerging[AllowMerging["Cells"] = 1] = "Cells";
            AllowMerging[AllowMerging["ColumnHeaders"] = 2] = "ColumnHeaders";
            AllowMerging[AllowMerging["RowHeaders"] = 4] = "RowHeaders";
            AllowMerging[AllowMerging["AllHeaders"] = 6] = "AllHeaders";
            AllowMerging[AllowMerging["All"] = 7] = "All";
        })(AllowMerging = grid_1.AllowMerging || (grid_1.AllowMerging = {}));
        var HeadersVisibility;
        (function (HeadersVisibility) {
            HeadersVisibility[HeadersVisibility["None"] = 0] = "None";
            HeadersVisibility[HeadersVisibility["Column"] = 1] = "Column";
            HeadersVisibility[HeadersVisibility["Row"] = 2] = "Row";
            HeadersVisibility[HeadersVisibility["All"] = 3] = "All";
        })(HeadersVisibility = grid_1.HeadersVisibility || (grid_1.HeadersVisibility = {}));
        var SelectionMode;
        (function (SelectionMode) {
            SelectionMode[SelectionMode["None"] = 0] = "None";
            SelectionMode[SelectionMode["Cell"] = 1] = "Cell";
            SelectionMode[SelectionMode["CellRange"] = 2] = "CellRange";
            SelectionMode[SelectionMode["Row"] = 3] = "Row";
            SelectionMode[SelectionMode["RowRange"] = 4] = "RowRange";
            SelectionMode[SelectionMode["ListBox"] = 5] = "ListBox";
        })(SelectionMode = grid_1.SelectionMode || (grid_1.SelectionMode = {}));
        var SelectedState;
        (function (SelectedState) {
            SelectedState[SelectedState["None"] = 0] = "None";
            SelectedState[SelectedState["Selected"] = 1] = "Selected";
            SelectedState[SelectedState["Cursor"] = 2] = "Cursor";
            SelectedState[SelectedState["Active"] = 3] = "Active";
        })(SelectedState = grid_1.SelectedState || (grid_1.SelectedState = {}));
        var SelMove;
        (function (SelMove) {
            SelMove[SelMove["None"] = 0] = "None";
            SelMove[SelMove["Next"] = 1] = "Next";
            SelMove[SelMove["Prev"] = 2] = "Prev";
            SelMove[SelMove["NextPage"] = 3] = "NextPage";
            SelMove[SelMove["PrevPage"] = 4] = "PrevPage";
            SelMove[SelMove["Home"] = 5] = "Home";
            SelMove[SelMove["End"] = 6] = "End";
            SelMove[SelMove["NextCell"] = 7] = "NextCell";
            SelMove[SelMove["PrevCell"] = 8] = "PrevCell";
        })(SelMove = grid_1.SelMove || (grid_1.SelMove = {}));
        var GridColumnOptionExt = (function () {
            function GridColumnOptionExt(el) {
                this._align = null;
                this._allowDragging = true;
                this._allowMerging = true;
                this._allowResizing = true;
                this._allowSorting = true;
                var _obj = null;
                if (tserp.asString(el)) {
                    _obj = document.getElementById(el);
                }
                else {
                    _obj = el;
                }
                this._allowSorting = tserp.utils.Converter.ObjectToBoolean(_obj.getAttribute('allowSorting'), true);
            }
            Object.defineProperty(GridColumnOptionExt.prototype, "allowSorting", {
                get: function () {
                    return this._allowSorting;
                },
                enumerable: true,
                configurable: true
            });
            return GridColumnOptionExt;
        }());
        grid_1.GridColumnOptionExt = GridColumnOptionExt;
        var GridOptionExt = (function () {
            function GridOptionExt(el) {
                this._groupcolumns = [];
                this._outlineBar = true;
                this._allowSorting = true;
                this._isReadOnly = false;
                this._allowAddNew = false;
                this._dblclick = null;
                this._headersRowsCount = 1;
                var _obj = null;
                if (tserp.asString(el)) {
                    _obj = document.getElementById(el);
                }
                else {
                    _obj = el;
                }
                this._groupcolumns = tserp.utils.Converter.ObjectToString(_obj.getAttribute('groupcolumns'), '').split(',');
                this._outlineBar = tserp.utils.Converter.ObjectToBoolean(_obj.getAttribute('outlineBar'), true);
                this._isReadOnly = tserp.utils.Converter.ObjectToBoolean(_obj.getAttribute('isReadOnly'), false);
                this._allowAddNew = tserp.utils.Converter.ObjectToBoolean(_obj.getAttribute('allowAddNew'), false);
                this._headersRowsCount = tserp.utils.Converter.ObjectToFloat(_obj.getAttribute('headersRowsCount'), 1);
                var tmpSelMode = tserp.utils.Converter.ObjectToString(_obj.getAttribute('selectionmode'), '');
                var tmpHeadersVisibility = tserp.utils.Converter.ObjectToString(_obj.getAttribute('headersVisibility'), '1');
                switch (tmpSelMode) {
                    case 'None':
                    case '0':
                        this._selectionmode = grid.SelectionMode.None;
                        break;
                    case 'Cell':
                    case '1':
                        this._selectionmode = grid.SelectionMode.Cell;
                        break;
                    case 'CellRange':
                    case '2':
                        this._selectionmode = grid.SelectionMode.CellRange;
                        break;
                    case 'Row':
                    case '3':
                        this._selectionmode = grid.SelectionMode.Row;
                        break;
                    case 'RowRange':
                    case '4':
                        this._selectionmode = grid.SelectionMode.RowRange;
                        break;
                    case 'ListBox':
                    case '5':
                        this._selectionmode = grid.SelectionMode.ListBox;
                        break;
                    default:
                        this._selectionmode = grid.SelectionMode.ListBox;
                        break;
                }
                switch (tmpHeadersVisibility) {
                    case '0':
                    case 'None':
                        this._headersVisibility = grid.HeadersVisibility.None;
                        break;
                    case '1':
                    case 'Column':
                        this._headersVisibility = grid.HeadersVisibility.Column;
                        break;
                    case '2':
                    case 'Row':
                        this._headersVisibility = grid.HeadersVisibility.Row;
                        break;
                    case '3':
                    case 'All':
                        this._headersVisibility = grid.HeadersVisibility.All;
                        break;
                    default:
                        this._headersVisibility = grid.HeadersVisibility.All;
                        break;
                }
                this._dblclick = _obj.getAttribute('oncelldblclick');
            }
            Object.defineProperty(GridOptionExt.prototype, "groupcolumns", {
                get: function () {
                    return this._groupcolumns;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "outlineBar", {
                get: function () {
                    return this._outlineBar;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "isReadOnly", {
                get: function () {
                    return this._isReadOnly;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "allowAddNew", {
                get: function () {
                    return this._allowAddNew;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "headersRowsCount", {
                get: function () {
                    return this._headersRowsCount;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "selectionmode", {
                get: function () {
                    return this._selectionmode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridOptionExt.prototype, "headersVisibility", {
                get: function () {
                    return this._headersVisibility;
                },
                enumerable: true,
                configurable: true
            });
            return GridOptionExt;
        }());
        grid_1.GridOptionExt = GridOptionExt;
        var CellRange = (function (_super) {
            __extends(CellRange, _super);
            function CellRange() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CellRange;
        }(wijmo.grid.CellRange));
        grid_1.CellRange = CellRange;
        var FlexGrid = (function (_super) {
            __extends(FlexGrid, _super);
            function FlexGrid(element, options) {
                var _this = _super.call(this, element, options) || this;
                _this._autoheight = false;
                _this._autorowheight = false;
                _this._gridOptionExt = null;
                _this._statusNormal = tserp.DataStatus.Normal;
                _this._statusAdded = tserp.DataStatus.Added;
                _this._statusEdited = tserp.DataStatus.Edited;
                _this._statusDeleted = tserp.DataStatus.Deleted;
                _this._columnStatusName = "_tsStatus_";
                _this._LocalVirtualScrolling = false;
                _this._LocalVirtualDataSource = [];
                _this._LocalObdata = null;
                _this._Localcv = null;
                _this._LocalPageSize = 500;
                _this._LocalPageNumber = 0;
                _this._LstColumnLayout = [];
                _this.changes = [];
                _this.rowDblClick = new tserp.Event();
                _this.rowDblClickStr = "";
                _this.rowClickStr = "";
                _this.rowClick = new tserp.Event();
                return _this;
            }
            FlexGrid.prototype.initialize = function (options) {
                _super.prototype.initialize.call(this, options);
            };
            Object.defineProperty(FlexGrid.prototype, "LocalVirtualDataSource", {
                get: function () {
                    return this._LocalVirtualDataSource;
                },
                set: function (value) {
                    this._LocalVirtualDataSource = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "LocalVirtualScrolling", {
                get: function () {
                    return this._LocalVirtualScrolling;
                },
                set: function (value) {
                    this._LocalVirtualScrolling = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "LocalPageSize", {
                get: function () {
                    return this._LocalPageSize;
                },
                set: function (value) {
                    this._LocalPageSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "LocalPageNumber", {
                get: function () {
                    return this._LocalPageNumber;
                },
                set: function (value) {
                    this._LocalPageNumber = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "gridOptionExt", {
                get: function () {
                    return this._gridOptionExt;
                },
                set: function (value) {
                    this._gridOptionExt = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "LstColumnLayout", {
                get: function () {
                    return this._LstColumnLayout;
                },
                set: function (value) {
                    this._LstColumnLayout = value;
                },
                enumerable: true,
                configurable: true
            });
            FlexGrid.prototype.isRowNormal = function (selrow) {
                var tempRs = this.GetGridData(selrow, this._columnStatusName, true);
                if (tempRs == this._statusNormal) {
                    return true;
                }
                return false;
            };
            FlexGrid.prototype.setRowNormal = function (selrow) {
                this.setCellData(selrow, this._columnStatusName, this._statusNormal);
            };
            FlexGrid.prototype.isRowAdded = function (selrow) {
                var tempRs = this.GetGridData(selrow, this._columnStatusName, true);
                if (tempRs == this._statusAdded) {
                    return true;
                }
                return false;
            };
            FlexGrid.prototype.setRowAdded = function (selrow) {
                this.setCellData(selrow, this._columnStatusName, this._statusAdded);
            };
            FlexGrid.prototype.isRowDeleted = function (selrow) {
                var tempRs = this.GetGridData(selrow, this._columnStatusName, true);
                if (tempRs == this._statusDeleted) {
                    return true;
                }
                return false;
            };
            FlexGrid.prototype.setRowDeleted = function (selrow) {
                this.setCellData(selrow, this._columnStatusName, this._statusDeleted);
            };
            FlexGrid.prototype.isRowEdited = function (selrow) {
                var tempRs = this.GetGridData(selrow, this._columnStatusName, true);
                if (tempRs == this._statusEdited) {
                    return true;
                }
                return false;
            };
            FlexGrid.prototype.setRowEdited = function (selrow) {
                var statusVal = this.getCellData(selrow, this.getColumn(this._columnStatusName).index, false);
                if (statusVal != this._statusAdded)
                    this.setCellData(selrow, this._columnStatusName, this._statusEdited);
            };
            FlexGrid.prototype.setSystemRowEdited = function (selrow) {
                this.setCellData(selrow, this._columnStatusName, this._statusEdited);
            };
            FlexGrid.prototype._ReFormatData = function () {
                var rows = [];
                if (this.itemsSource != undefined)
                    rows = this.itemsSource.sourceCollection;
                for (var r = 0; r < rows.length; r++) {
                    for (var i = 0; i < this.columns.length; i++) {
                        var tmpCol = this.columns[i];
                        var _columnType = this.GetColumnType(i);
                        if (_columnType == 'date') {
                            var tmp = tmpCol.binding;
                            if (rows[r][tmp] != '' && rows[r][tmp] != null && rows[r][tmp] != undefined) {
                                if (rows[r][tmp] instanceof Date) {
                                    rows[r][tmp] = wijmo.Globalize.formatDate(rows[r][tmp], 'yyyy-MM-dd').replace('-', '').replace('-', '');
                                }
                            }
                        }
                        else if (_columnType == 'time') {
                            var tmp = tmpCol.binding;
                            if (rows[r][tmp] != '' && rows[r][tmp] != null && rows[r][tmp] != undefined) {
                                if (rows[r][tmp] instanceof Date) {
                                    if (tmpCol.valueSameText == true) {
                                        rows[r][tmp] = wijmo.Globalize.formatDate(rows[r][tmp], 'HH:mm');
                                    }
                                    else {
                                        rows[r][tmp] = wijmo.Globalize.formatDate(rows[r][tmp], 'HH:mm').replace(':', '');
                                    }
                                }
                            }
                        }
                        if (_columnType == 'checkbox') {
                            var tmp = tmpCol.binding;
                            if (String(rows[r][tmp]) != '' && String(rows[r][tmp]) != null && String(rows[r][tmp]) != undefined
                                && String(rows[r][tmp]) != 'null' && String(rows[r][tmp]) != 'undefined') {
                                rows[r][tmp] = tserp.utils.Converter.BooleanToString(rows[r][tmp]);
                            }
                        }
                    }
                }
                return rows;
            };
            FlexGrid.prototype.formatData = function (valJson, lstcolumn) {
                var rows = { records: [] };
                if (valJson != null) {
                    if (valJson.records == null) {
                        rows.records = valJson;
                    }
                    else {
                        rows = valJson;
                    }
                    for (var r = 0; r < rows.records.length; r++) {
                        for (var i = 0; i < lstcolumn.length; i++) {
                            var _columntype = this.GetColumnType(i);
                            if (_columntype == 'date') {
                                var tmp = lstcolumn[i].binding;
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = moment(rows.records[r][tmp])._d;
                            }
                            if (_columntype == 'time') {
                                var tmp = lstcolumn[i].binding;
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined) {
                                    var _tmp = rows.records[r][tmp] + '';
                                    if (_tmp.length == 6) {
                                        rows.records[r][tmp] = moment(_tmp, 'HHmmss')._d;
                                    }
                                    else if (_tmp.length == 4) {
                                        rows.records[r][tmp] = moment(_tmp, 'HHmm')._d;
                                    }
                                }
                            }
                            if (_columntype == 'checkbox') {
                                var tmp = lstcolumn[i].binding;
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = tserp.utils.Converter.ObjectToBoolean(rows.records[r][tmp]);
                            }
                        }
                    }
                }
                else {
                    rows = { records: [] };
                }
                return rows;
            };
            FlexGrid.prototype.BuildDataView = function (jsonData) {
                jsonData = this.formatData(jsonData, this.LstColumnLayout);
                var view = new wijmo.collections.CollectionView([]);
                if (jsonData.records) {
                    view = new wijmo.collections.CollectionView(jsonData.records);
                }
                else {
                    view = new wijmo.collections.CollectionView(jsonData);
                }
                if (this.gridOptionExt) {
                    if (this.gridOptionExt.groupcolumns) {
                        for (var i = 0; i < this.gridOptionExt.groupcolumns.length; i++) {
                            if (this.gridOptionExt.groupcolumns[i] != "") {
                                var gd = new wijmo.collections.PropertyGroupDescription(this.gridOptionExt.groupcolumns[i]);
                                view.groupDescriptions.push(gd);
                            }
                        }
                        if (this.gridOptionExt.outlineBar && this.gridOptionExt.groupcolumns.length > 0) {
                            if (this.gridOptionExt.groupcolumns[0] != "") {
                                var flex = this;
                                flex.formatItem.addHandler(function (s, e) {
                                    if (e.panel == flex.columnHeaders &&
                                        e.row == 0 && e.col == flex.columns.firstVisibleIndex &&
                                        flex.rows.maxGroupLevel > -1) {
                                        var panel = document.createElement('span');
                                        tserp.setCss(panel, {
                                            marginRight: 3,
                                            fontSize: '90%',
                                            fontWeight: 'normal',
                                            cursor: 'pointer'
                                        });
                                        for (var i = 0; i <= flex.rows.maxGroupLevel + 1; i++) {
                                            var btn = document.createElement('span');
                                            btn.textContent = (i + 1).toString();
                                            btn.setAttribute('data-level', i.toString());
                                            tserp.setCss(btn, {
                                                borderRight: 'solid #c0c0c0 1px',
                                                padding: 5,
                                            });
                                            panel.appendChild(btn);
                                        }
                                        e.cell.insertBefore(panel, e.cell.childNodes[0]);
                                        panel.addEventListener('mousedown', function (e) {
                                            var btn = document.elementFromPoint(e.clientX, e.clientY), level = btn ? btn.getAttribute('data-level') : null;
                                            if (level) {
                                                e.preventDefault();
                                                flex.collapseGroupsToLevel(parseInt(level));
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                }
                view.trackChanges = true;
                return view;
            };
            FlexGrid.prototype.GetColumnType = function (col) {
                if (col < 0 || col > this._LstColumnLayout.length) {
                    throw 'Khong tim thay column type';
                }
                return this._LstColumnLayout[col].columnType;
            };
            FlexGrid.prototype.autoSizeRowsAsync = function (start, step) {
                this.autoSizeRows(start, start + step, false);
                start += step;
                if (start < this.rows.length) {
                    setTimeout(function () {
                        this.autoSizeRowsAsync(this, start, step);
                    }, 100);
                }
            };
            FlexGrid.prototype.SetGridText = function (row, col, value) {
                this.SetGridData(row, col, value);
            };
            FlexGrid.prototype.SetGridData = function (row, col, value) {
                this.beginUpdate();
                var _colIdx = -1;
                var columntype = '';
                var colformat = '';
                if (typeof col === 'number') {
                    _colIdx = col;
                    columntype = this.GetColumnType(col);
                    colformat = this.columns[col].format;
                }
                else {
                    var colObj = this.getColumn(col);
                    if (colObj) {
                        _colIdx = colObj.index;
                        columntype = this.GetColumnType(_colIdx);
                        colformat = colObj.format;
                    }
                }
                if (columntype == 'checkbox') {
                    if (value == true || value == 'Y') {
                        this.setCellData(row, col, true, true);
                    }
                    else {
                        this.setCellData(row, col, false, true);
                    }
                }
                else if (columntype == 'date') {
                    if (value instanceof Date) {
                        this.setCellData(row, col, value);
                    }
                    else if (typeof (value + '') === 'string') {
                        var s = tserp.utils.Common.AddDateDelimiter(value + '', "-");
                        var s2 = wijmo.Globalize.parseDate(s, 'yyyy-MM-dd');
                        this.setCellData(row, col, s2);
                    }
                    else {
                        this.setCellData(row, col, value, true);
                    }
                }
                else if (columntype == 'time') {
                    if (value instanceof Date) {
                        this.setCellData(row, col, value);
                    }
                    else if (typeof (value + '') === 'string') {
                        var s = tserp.utils.Common.AddTimeDelimiter(value + '', ":");
                        var s2 = wijmo.Globalize.parseDate(s, 'HH:mm');
                        this.setCellData(row, col, s2);
                    }
                    else {
                        this.setCellData(row, col, value, true);
                    }
                }
                else if (columntype == 'text') {
                    this.setCellData(row, col, value + '', true);
                }
                else {
                    this.setCellData(row, col, value, true);
                }
                this.setRowEdited(row);
                this.endUpdate();
                this.refreshCells(true);
            };
            ;
            FlexGrid.prototype.SetComboFormat = function (col, jsonData, valuemember, displaymember) {
                if (valuemember == null) {
                    valuemember = 'cd';
                }
                if (displaymember == null) {
                    displaymember = 'nm';
                }
                var tmpCol;
                if (typeof col === 'number') {
                    tmpCol = this.columns[col];
                }
                else {
                    tmpCol = this.columns.getColumn(col);
                }
                tmpCol.dataMap = new wijmo.grid.DataMap(jsonData, valuemember, displaymember);
            };
            FlexGrid.prototype.GetGridCell = function (row, col) {
                var _colIdx = -1;
                var columntype = '';
                var colformat = '';
                if (typeof col === 'number') {
                    _colIdx = col;
                    columntype = this.GetColumnType(col);
                    colformat = this.columns[col].format;
                }
                else {
                    var colObj = this.getColumn(col);
                    if (colObj) {
                        _colIdx = colObj.index;
                        columntype = this.GetColumnType(_colIdx);
                        colformat = colObj.format;
                    }
                }
                var rc = this.getCellBoundingRect(row, _colIdx);
                var cell = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2);
                if (wijmo.hasClass(cell, 'wj-header')) {
                    cell = null;
                }
                while (cell && !wijmo.hasClass(cell, 'wj-cell')) {
                    cell = cell.parentElement;
                }
                return cell;
            };
            FlexGrid.prototype.SetCssGridCell = function (row, col, cssNm) {
                var cell = this.GetGridCell(row, col);
                if (cell) {
                    wijmo.addClass(cell, cssNm);
                }
            };
            FlexGrid.prototype.SetStyleGridCell = function (row, col, propNm, val) {
                var cell = this.GetGridCell(row, col);
                if (cell) {
                    tserp.utils.Dom.addStyle(cell, propNm, val);
                }
            };
            FlexGrid.prototype.GetGridData = function (row, col, formatted) {
                if (formatted === void 0) { formatted = false; }
                var _colIdx = -1;
                var columntype = '';
                var colformat = '';
                if (typeof col === 'number') {
                    _colIdx = col;
                    columntype = this.GetColumnType(col);
                    colformat = this.columns[col].format;
                    if (this.columns[col].valueSameText) {
                        formatted = true;
                    }
                }
                else {
                    var colObj = this.getColumn(col);
                    if (colObj) {
                        _colIdx = colObj.index;
                        columntype = this.GetColumnType(_colIdx);
                        colformat = colObj.format;
                    }
                }
                if (columntype == 'date') {
                    var rtn = this.getCellData(row, _colIdx, formatted);
                    if (rtn == undefined || rtn == '') {
                        return "";
                    }
                    else {
                        if (formatted == false) {
                            return (moment)(rtn).format('YYYYMMDD');
                        }
                        else {
                            return rtn;
                        }
                    }
                }
                else if (columntype == 'time') {
                    var rtn = this.getCellData(row, _colIdx, formatted);
                    if (rtn == undefined || rtn == '') {
                        return "";
                    }
                    else {
                        if (formatted == false) {
                            if (typeof rtn === "string") {
                                rtn = moment(rtn, colformat);
                            }
                            return moment(rtn).format('HHmm');
                        }
                        else {
                            return rtn;
                        }
                    }
                }
                else if (columntype == 'checkbox') {
                    var rtn = this.getCellData(row, _colIdx, formatted);
                    if (rtn == true || rtn == 'Y')
                        return 'Y';
                    if (rtn == false || rtn == 'N')
                        return 'N';
                    return '';
                }
                else {
                    return this.getCellData(row, _colIdx, formatted);
                }
            };
            FlexGrid.prototype.GetGridControl = function () {
                return this;
            };
            FlexGrid.prototype.Show = function () {
                this.hostElement.style.display = '';
                var _parentTb = this.hostElement.parentNode.parentNode.parentNode.parentNode;
                if (_parentTb) {
                    _parentTb.style.display = '';
                }
                this.refreshGrid();
            };
            FlexGrid.prototype.Hide = function () {
                this.hostElement.style.display = 'none';
                var _parentTb = this.hostElement.parentNode.parentNode.parentNode.parentNode;
                if (_parentTb) {
                    _parentTb.style.display = 'none';
                }
            };
            FlexGrid.prototype.ColVisible = function (col, visibleVal) {
                if (typeof col === 'number') {
                    this.columns[col].visible = visibleVal;
                }
                else if (typeof col === 'string') {
                    var _colIdx = this.columns.getColumn(col);
                    if (_colIdx) {
                        this.columns[_colIdx.index].visible = visibleVal;
                    }
                }
            };
            FlexGrid.prototype.ColHidden = function (col) {
                this.ColVisible(col, false);
            };
            FlexGrid.prototype.ColShowHidden = function (col) {
                this.ColVisible(col, true);
            };
            FlexGrid.prototype.refreshGrid = function () {
                var self = this;
                this.hostElement.style.height = this.hostElement.parentNode.clientHeight + 6 + 'px';
                this.refresh(true);
                setTimeout(function () {
                    if (self.hostElement.clientHeight < 10) {
                        self.refreshGrid();
                    }
                }, 10);
            };
            FlexGrid.prototype.MoveRowToTop = function (callBack) {
                if (callBack === void 0) { callBack = null; }
                var arr = this.selectedrowindexes;
                var hasSwap = 0;
                var hasSelected = 0;
                for (var r = 0; r < arr.length; r++) {
                    if (arr[r] == 0) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else if (this.rows[arr[r] - 1].isSelected) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else {
                        var fidx = arr[r], tidx = arr[r] - 1;
                        if (arr.length == 1 || r == 0) {
                            tidx = 0;
                        }
                        else {
                            tidx = (0 - 1) + (arr[r] - arr[0]);
                        }
                        this.SwapRow(fidx, tidx);
                        this.rows[tidx].isSelected = true;
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(tidx, this.selection.col, tidx, this.selection.col), true);
                        }
                        hasSwap += 1;
                    }
                }
                if (callBack && hasSwap > 0) {
                    callBack();
                }
            };
            FlexGrid.prototype.MoveRowToBottom = function (callBack) {
                if (callBack === void 0) { callBack = null; }
                var arr = this.selectedrowindexes;
                var hasSwap = 0;
                var hasSelected = 0;
                for (var r = arr.length - 1; r >= 0; r--) {
                    if (arr[r] == this.RowCount - 1) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else if (this.rows[arr[r] + 1].isSelected) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else {
                        var fidx = arr[r], tidx = arr[r] + 1;
                        if (arr.length == 1 || r == arr.length - 1) {
                            tidx = this.RowCount - 1;
                        }
                        else {
                            tidx = (this.RowCount - 1) - (arr[arr.length - 1] - arr[r]);
                        }
                        this.SwapRow(fidx, tidx);
                        this.rows[tidx].isSelected = true;
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(tidx, this.selection.col, tidx, this.selection.col), true);
                        }
                        hasSwap += 1;
                    }
                }
                if (callBack && hasSwap > 0) {
                    callBack();
                }
            };
            FlexGrid.prototype.MoveRowUp = function (callBack) {
                if (callBack === void 0) { callBack = null; }
                var arr = this.selectedrowindexes;
                var hasSwap = 0;
                var hasSelected = 0;
                for (var r = 0; r < arr.length; r++) {
                    if (arr[r] == 0) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else if (this.rows[arr[r] - 1].isSelected) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else {
                        var fidx = arr[r], tidx = arr[r] - 1;
                        this.SwapRow(fidx, tidx);
                        this.rows[tidx].isSelected = true;
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(tidx, this.selection.col, tidx, this.selection.col), true);
                        }
                        hasSwap += 1;
                    }
                }
                if (callBack && hasSwap > 0) {
                    callBack();
                }
            };
            FlexGrid.prototype.MoveRowDown = function (callBack) {
                if (callBack === void 0) { callBack = null; }
                var arr = this.selectedrowindexes;
                var hasSwap = 0;
                var hasSelected = 0;
                for (var r = arr.length - 1; r >= 0; r--) {
                    if (arr[r] == this.RowCount - 1) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else if (this.rows[arr[r] + 1].isSelected) {
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(arr[r], this.selection.col, arr[r], this.selection.col), true);
                        }
                        this.rows[arr[r]].isSelected = true;
                        continue;
                    }
                    else {
                        var fidx = arr[r], tidx = arr[r] + 1;
                        this.SwapRow(fidx, tidx);
                        this.rows[tidx].isSelected = true;
                        if (hasSelected == 0) {
                            hasSelected += 1;
                            this.select(new tserp.grid.CellRange(tidx, this.selection.col, tidx, this.selection.col), true);
                        }
                        hasSwap += 1;
                    }
                }
                if (callBack && hasSwap > 0) {
                    callBack();
                }
            };
            FlexGrid.prototype.SwapRow = function (fromIdx, toIdex) {
                if (fromIdx < 0 || fromIdx > this.RowCount) {
                    wijmo.assert(false, 'From Index invalid.');
                }
                if (toIdex < 0 || toIdex > this.RowCount) {
                    wijmo.assert(false, 'To Index invalid.');
                }
                if (fromIdx != toIdex) {
                    var fromData = this.collectionView.items[fromIdx];
                    var toData = this.collectionView.items[toIdex];
                    this.collectionView.items[fromIdx] = toData;
                    this.collectionView.items[toIdex] = fromData;
                    this.collectionView.refresh();
                }
            };
            FlexGrid.prototype.SortBy = function (c, sort) {
                var _colIdx = -1;
                if (typeof c === 'number') {
                    _colIdx = c;
                }
                else {
                    var colObj = this.getColumn(c);
                    if (colObj) {
                        _colIdx = colObj.index;
                    }
                }
                var _sort = null;
                if (_colIdx > -1) {
                    if (sort.toLocaleLowerCase() == 'asc') {
                        _sort = '+';
                    }
                    else if (sort.toLocaleLowerCase() == 'des') {
                        _sort = '-';
                    }
                    else {
                        _sort = null;
                    }
                    this.columns[_colIdx].allowSorting = true;
                    var fieldName = this.columns[_colIdx].binding, ascending = true, sd, sdNew;
                    if (!fieldName) {
                        return;
                    }
                    sdNew = new wijmo.collections.SortDescription(fieldName, ascending);
                    sd.splice(0, sd.length, sdNew);
                }
            };
            FlexGrid.prototype.BuildDataMap = function (jsondata, valuemember, displaymember) {
                var _rs;
                if (jsondata) {
                    _rs = new wijmo.grid.DataMap(jsondata, valuemember, displaymember);
                }
                else {
                    _rs = new wijmo.grid.DataMap([], valuemember, displaymember);
                }
                return _rs;
            };
            FlexGrid.prototype.SetColComboData = function (datafield, jsondata, valuemember, displaymember) {
                var _dataMap = this.BuildDataMap(jsondata, valuemember, displaymember);
                var _col = this.columns.getColumn(datafield);
                if (_col) {
                    _col.dataMap = _dataMap;
                }
            };
            FlexGrid.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
                var _col;
                switch (propertyName) {
                    case 'editable':
                        _col = this.columns.getColumn(dataField);
                        if (_col) {
                            _col.isReadOnly = tserp.utils.Converter.ObjectToBoolean(propertyValue, false);
                        }
                        break;
                    case 'cellclassname':
                        _col = this.columns.getColumn(dataField);
                        if (_col) {
                            _col.cssClass = _col.cssClass + ' ' + propertyValue;
                        }
                        break;
                    case 'align':
                    case 'cellsalign':
                        if (_col) {
                            _col.align = tserp.utils.Converter.ObjectToString(propertyValue, '');
                        }
                        break;
                    case 'cellsformat':
                        _col = this.columns.getColumn(dataField);
                        if (_col) {
                            _col.format = tserp.utils.Converter.ObjectToString(propertyValue, '');
                        }
                        break;
                    case 'columntype':
                        _col = this.columns.getColumn(dataField);
                        if (_col) {
                            switch (propertyValue) {
                                case 'datetimeinput':
                                    _col.dataType = wijmo.DataType.Date;
                                    break;
                                case 'textbox':
                                    _col.dataType = wijmo.DataType.String;
                                    break;
                                case 'combobox':
                                    _col.dataType = wijmo.DataType.String;
                                    break;
                                case 'checkbox':
                                    _col.dataType = wijmo.DataType.String;
                                    break;
                                default:
                                    _col.dataType = wijmo.DataType.Object;
                            }
                        }
                        break;
                    default:
                        wijmo.assert(false, 'propertyName ' + propertyName + ' Khong ho tro');
                }
            };
            FlexGrid.prototype._GetVirtualData = function () {
                var data = [];
                if (this._LocalObdata === null) {
                    data = this.LocalPaginate(this._LocalVirtualDataSource, this._LocalPageSize, this._LocalPageNumber);
                    this._LocalPageNumber = this._LocalPageNumber + 1;
                    this._LocalObdata = new wijmo.collections.ObservableArray(data);
                    this._Localcv = new wijmo.collections.CollectionView(this._LocalObdata);
                    this._Localcv.pageSize = this.LocalPageSize;
                    this.itemsSource = this._Localcv;
                }
                else {
                    data = this.LocalPaginate(this._LocalVirtualDataSource, this._LocalPageSize, this._LocalPageNumber);
                    this._Localcv.pageSize += data.length;
                    this._LocalPageNumber = this._LocalPageNumber + 1;
                    this._LocalObdata.beginUpdate();
                    for (var i = 0; i < data.length; i++) {
                        this._LocalObdata.push(data[i]);
                    }
                    this._LocalObdata.endUpdate();
                }
            };
            FlexGrid.prototype.LocalPaginate = function (array, page_size, page_number) {
                return array.slice(page_number * page_size, (page_number + 1) * page_size);
            };
            FlexGrid.prototype.SetData = function (jsonData) {
                if (this.LocalVirtualScrolling == true) {
                    jsonData = this.formatData(jsonData, this.columns);
                    if (jsonData.records) {
                        this.LocalVirtualDataSource = jsonData.records;
                    }
                    else {
                        this.LocalVirtualDataSource = jsonData;
                    }
                    this.itemsSource = this._Localcv;
                    this._GetVirtualData();
                }
                else {
                    jsonData = this.formatData(jsonData, this.columns);
                    var view = this.BuildDataView(jsonData);
                    this.itemsSource = view;
                }
            };
            FlexGrid.prototype.GetData = function () {
                this.endUpdate();
                return this._ReFormatData();
            };
            FlexGrid.prototype.GetDataSource = function () {
                return this.getDataSource();
            };
            FlexGrid.prototype.getDataSource = function () {
                return this.itemsSource.sourceCollection;
            };
            Object.defineProperty(FlexGrid.prototype, "RowCount", {
                get: function () {
                    return this.rows.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "RowCountDataSource", {
                get: function () {
                    if (this.LocalVirtualScrolling == true) {
                        return this.LocalVirtualDataSource.length;
                    }
                    else {
                        return this.rows.length;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "autoheight", {
                get: function () {
                    return this._autoheight;
                },
                set: function (value) {
                    this._autoheight = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGrid.prototype, "selectedrowindexes", {
                get: function () {
                    var _rs = [];
                    for (var i = 0; i < this.rows.length; i++) {
                        if (this.rows[i].isSelected == true) {
                            _rs.push(i);
                        }
                    }
                    return _rs;
                },
                set: function (val) {
                    this.select(new tserp.grid.CellRange(val[0], 0, val[val.length - 1], 0), true);
                },
                enumerable: true,
                configurable: true
            });
            FlexGrid.prototype.setChanged = function (obj, r, c) {
                if (obj == null) {
                    obj = this;
                }
                if (!obj.getChanged(r, c)) {
                    obj.changes.push({
                        item: obj.rows[r].dataItem,
                        prop: obj.columns[c].binding
                    });
                }
            };
            FlexGrid.prototype.getChanged = function (obj, r, c) {
                if (obj == null) {
                    obj = this;
                }
                for (var i = 0; i < obj.changes.length; i++) {
                    var item = obj.rows[r].dataItem;
                    var prop = obj.columns[c].binding;
                    var ch = obj.changes[i];
                    if (ch.item == item && ch.prop == prop) {
                        return true;
                    }
                }
                return false;
            };
            FlexGrid.prototype._AddDefaultValue = function (idx) {
                for (var i = 0; i < this.columns.length; i++) {
                    var tmpCol = this.columns[i];
                    if (tmpCol.columnType == 'checkbox') {
                        this.setCellData(idx, tmpCol.binding, tserp.utils.Converter.ObjectToBoolean(tmpCol.defaultVal));
                    }
                    else {
                        this.setCellData(idx, tmpCol.binding, tmpCol.defaultVal);
                    }
                }
            };
            FlexGrid.prototype.GetDefaultRowVal = function () {
                var _delVal = {
                    records: []
                };
                var _objRow = {};
                for (var c = 0; c < this.columns.length; c++) {
                    _objRow[this.columns[c].binding] = this.columns[c].defaultVal;
                }
                _delVal.records.push(_objRow);
                return _delVal;
            };
            FlexGrid.prototype.AddRow = function (pos, defVal) {
                if (pos === void 0) { pos = 0; }
                if (this.collectionView == undefined) {
                    var _delVal = this.GetDefaultRowVal();
                    this.SetData(_delVal);
                }
                else {
                    var ecv = tserp.tryCast(this.collectionView, 'IEditableCollectionView');
                    var newItem = ecv.addNew();
                    this.refresh(true);
                    ecv.commitNew();
                    this.setRowAdded(ecv._idx);
					this.scrollIntoView(ecv._idx, this.selection.col, true);
                }
            };
            FlexGrid.prototype.DeleteRow = function () {
                for (var i = this.selection.topRow; i <= this.selection.bottomRow; i++) {
                    this.setRowDeleted(i);
                    this.rows[i].cssClass = 'wj-grid-row_status-deleted';
                }
            };
            FlexGrid.prototype.DeleteRowAt = function (idxNo, bkeep) {
                if (bkeep === void 0) { bkeep = false; }
                if (bkeep == true) {
                    if (idxNo >= 0 && idxNo < this.RowCount) {
                        if (this.collectionView) {
                            this.collectionView.removeAt(idxNo);
                        }
                    }
                }
                else {
                    if (idxNo >= 0 && idxNo < this.RowCount) {
                        this.setRowDeleted(idxNo);
                        this.rows[idxNo].cssClass = 'wj-grid-row_status-deleted';
                    }
                }
            };
            FlexGrid.prototype.UnDeleteRow = function () {
                for (var i = this.selection.topRow; i <= this.selection.bottomRow; i++) {
                    this.setRowNormal(i);
                    this.rows[i].cssClass = '';
                }
            };
            FlexGrid.prototype.UnDeleteRowAt = function (idxNo) {
                if (idxNo >= 0 && idxNo < this.RowCount) {
                    this.setRowNormal(idxNo);
                    this.rows[idxNo].cssClass = '';
                }
            };
            FlexGrid.prototype.DeleteAll = function (bkeep) {
                if (bkeep === void 0) { bkeep = true; }
                if (bkeep == false) {
                    for (var i = 0; i < this.RowCount; i++) {
                        this.RemoveRowAt(i);
                    }
                }
                else {
                    for (var i = 0; i < this.RowCount; i++) {
                        this.setRowDeleted(i);
                        this.rows[i].cssClass = 'wj-grid-row_status-deleted';
                    }
                }
            };
            FlexGrid.prototype.RemoveRow = function () {
                if (this.collectionView) {
                    for (var i = this.selection.bottomRow; i >= this.selection.topRow; i--) {
                        this.collectionView.removeAt(i);
                    }
                }
            };
            FlexGrid.prototype.RemoveRowAt = function (idx) {
                if (this.collectionView) {
                    this.collectionView.removeAt(idx);
                }
            };
            FlexGrid.prototype.SetColText = function (col, txt) {
                var _colIdx = -1;
                var colObj = null;
                if (typeof col === 'number') {
                    _colIdx = col;
                    colObj = this.columns[col];
                }
                else {
                    colObj = this.getColumn(col);
                }
                if (colObj) {
                    colObj.header = txt;
                }
            };
            FlexGrid.prototype.SetEnable = function (enable) {
                this.isReadOnly = enable;
            };
            FlexGrid.prototype.SetRowEditable = function (r, bEdit) {
                if (r > -1 && r < this.RowCount) {
                    this.rows[r].isReadOnly = bEdit;
                }
            };
            FlexGrid.prototype.SelectRow = function (r) {
                if (r > -1 && r < this.RowCount) {
                    this.ClearSelection();
                    this.rows[r].isSelected = true;
                    this.selection = new CellRange(r, this.selection.col, r, this.selection.col);
                }
            };
            FlexGrid.prototype.DeselectRow = function (r) {
                if (r > -1 && r < this.RowCount) {
                    this.ClearSelection();
                    this.selection = new CellRange(0, 0, 0, 0);
                }
            };
            FlexGrid.prototype.ClearSelection = function () {
                for (var i = 0; i < this.rows.length; i++) {
                    this.rows[i].isSelected = false;
                }
            };
            FlexGrid.prototype.GetCellHtml = function (r, c) {
                var rc = this.getCellBoundingRect(r, c);
                var cell = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2);
                if (tserp.hasClass(cell, 'wj-header')) {
                    cell = null;
                }
                while (cell && !tserp.hasClass(cell, 'wj-cell')) {
                    cell = cell.parentElement;
                }
                return cell;
            };
            FlexGrid.prototype.SetCellHtmlByCssName = function (r, c, cssName) {
                var rc = this.getCellBoundingRect(r, c);
                var cell = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2);
                if (tserp.hasClass(cell, 'wj-header')) {
                    cell = null;
                }
                while (cell && !tserp.hasClass(cell, 'wj-cell')) {
                    cell = cell.parentElement;
                }
                tserp.addClass(cell, cssName);
            };
            FlexGrid.prototype.ClearData = function () {
                this.rows.clear();
                if (this.collectionView)
                    this.collectionView.items.length = 0;
                if (this.LocalVirtualScrolling == true) {
                    this.LocalVirtualDataSource = [];
					this.LocalPageSize = 500;
					this.LocalPageNumber = 0;
					this._LocalObdata = null;
					this._Localcv = null;
                }
            };
            FlexGrid.prototype.SetColEdit = function (col, editFunc) {
                var _colIdx = -1;
                var colObj = null;
                if (typeof col === 'number') {
                    _colIdx = col;
                    colObj = this.columns[col];
                }
                else {
                    colObj = this.getColumn(col);
                }
                if (colObj) {
                    colObj.isReadOnly = editFunc;
                }
            };
            FlexGrid.prototype.getColumn = function (name) {
                return this.columns.getColumn(name);
            };
            FlexGrid.prototype.onRowDblClick = function (e) {
                this.rowDblClick.raise(this, e);
            };
            FlexGrid.prototype.onRowClick = function (e) {
                this.rowClick.raise(this, e);
            };
            return FlexGrid;
        }(wijmo.grid.FlexGrid));
        grid_1.FlexGrid = FlexGrid;
        var CellClickEventArgs = (function (_super) {
            __extends(CellClickEventArgs, _super);
            function CellClickEventArgs(grid, row, col) {
                var _this = _super.call(this) || this;
                _this._g = grid;
                _this._col = col;
                _this._row = row;
                if (grid.columns[col]) {
                    _this._colNm = grid.columns[col].binding;
                }
                return _this;
            }
            Object.defineProperty(CellClickEventArgs.prototype, "grid", {
                get: function () {
                    return this._g;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CellClickEventArgs.prototype, "row", {
                get: function () {
                    return this._row;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CellClickEventArgs.prototype, "col", {
                get: function () {
                    return this._col;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CellClickEventArgs.prototype, "colNm", {
                get: function () {
                    return this._colNm;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CellClickEventArgs.prototype, "data", {
                get: function () {
                    return this._data;
                },
                set: function (value) {
                    this._data = value;
                },
                enumerable: true,
                configurable: true
            });
            return CellClickEventArgs;
        }(tserp.EventArgs));
        grid_1.CellClickEventArgs = CellClickEventArgs;
        var CellDblClickEventArgs = (function (_super) {
            __extends(CellDblClickEventArgs, _super);
            function CellDblClickEventArgs(grid, row, col) {
                return _super.call(this, grid, row, col) || this;
            }
            return CellDblClickEventArgs;
        }(CellClickEventArgs));
        grid_1.CellDblClickEventArgs = CellDblClickEventArgs;
        var Column = (function (_super) {
            __extends(Column, _super);
            function Column() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._defaultVal = '';
                _this.cellsrenderer = new tserp.Event();
                _this.cellsClassNameStr = undefined;
                _this.cellsClassName = new tserp.Event();
                _this.___cellsrenderer = '';
                _this._header_rows_text = [];
                _this._valueSameText = false;
                _this._columnType = 'textbox';
                return _this;
            }
            Object.defineProperty(Column.prototype, "defaultVal", {
                get: function () {
                    return this._defaultVal;
                },
                set: function (value) {
                    this._defaultVal = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Column.prototype, "inputType", {
                get: function () {
                    return this.inputType;
                },
                set: function (value) {
                    this.inputType = tserp.asString(value, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Column.prototype, "valueSameText", {
                get: function () {
                    return this._valueSameText;
                },
                set: function (value) {
                    this._valueSameText = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Column.prototype, "columnType", {
                get: function () {
                    return this._columnType;
                },
                set: function (value) {
                    this._columnType = tserp.asString(value, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Column.prototype, "__cellsrenderer", {
                get: function () {
                    return this.___cellsrenderer;
                },
                set: function (value) {
                    this.___cellsrenderer = tserp.asString(value, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Column.prototype, "header_rows_text", {
                get: function () {
                    return this._header_rows_text;
                },
                set: function (value) {
                    this._header_rows_text = value;
                },
                enumerable: true,
                configurable: true
            });
            Column.prototype.onCellsRenderer = function (e) {
                this.cellsrenderer.raise(this, e);
            };
            Column.prototype.onCellsClassName = function (e) {
                this.cellsClassName.raise(this, e);
            };
            return Column;
        }(wijmo.grid.Column));
        grid_1.Column = Column;
        var Row = (function (_super) {
            __extends(Row, _super);
            function Row() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Row;
        }(wijmo.grid.Row));
        grid_1.Row = Row;
        var CellRangeEventArgs = (function (_super) {
            __extends(CellRangeEventArgs, _super);
            function CellRangeEventArgs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CellRangeEventArgs;
        }(wijmo.grid.CellRangeEventArgs));
        grid_1.CellRangeEventArgs = CellRangeEventArgs;
        var AutoSizeMode;
        (function (AutoSizeMode) {
            AutoSizeMode[AutoSizeMode["None"] = 0] = "None";
            AutoSizeMode[AutoSizeMode["Headers"] = 1] = "Headers";
            AutoSizeMode[AutoSizeMode["Cells"] = 2] = "Cells";
            AutoSizeMode[AutoSizeMode["Both"] = 3] = "Both";
        })(AutoSizeMode = grid_1.AutoSizeMode || (grid_1.AutoSizeMode = {}));
        var AllowDragging;
        (function (AllowDragging) {
            AllowDragging[AllowDragging["None"] = 0] = "None";
            AllowDragging[AllowDragging["Columns"] = 1] = "Columns";
            AllowDragging[AllowDragging["Rows"] = 2] = "Rows";
            AllowDragging[AllowDragging["Both"] = 3] = "Both";
        })(AllowDragging = grid_1.AllowDragging || (grid_1.AllowDragging = {}));
    })(grid = tserp.grid || (tserp.grid = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.grid.js.map