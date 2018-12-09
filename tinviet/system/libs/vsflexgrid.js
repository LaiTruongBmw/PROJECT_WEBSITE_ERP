vsflexgrid = function (element, option) {
    document.getElementById(element).innerHTML = "<object id='idInternalGrid' name='wmode' value='transparent' classid='clsid:D76D7126-4A96-11D3-BD95-D296DC2DD072' style='font-family:Tahoma; font-size:9pt; width:100%;'></object>";
    this.obj = document.getElementsByTagName('object')[0];
    this.objOptionCol = option;

    // for Grid style
    this.Gb_Grid_BColor = 0xffffff;
    this.Gb_Grid_BColorAlt = 0xffffff;
    this.Gb_Grid_BColorBkg = 0xffffff;
    this.Gb_Grid_BColorFixed = 0xFFE9BD;
    this.Gb_Grid_BColorSel = 0xF7EFE1;

    this.Gb_Grid_FColorSel = 0x0;
    this.Gb_Grid_Color = 0xF3D781;
    this.Gb_Grid_ColorFixed = 0xF3D781;
    this.Gb_Grid_BorderStyle = 0;
    this.Gb_Grid_SheetBorder = 0xffffff;
    this.Gb_Grid_RowHeightMin = 280;

    this.Gb_Grid_CalWidth = 145;
    this.Gb_Grid_CalHeight = 185;
    this.Gb_Grid_DefStyle = "; font-family: Tahoma;font-size:9pt;width:100%;";
    this.Gb_Grid_DateLang = 1;
    this.Gb_Grid_DateSep = "/";
    this.bModifing = false;


    this.TextMatrix = function ( r, c, val) {
        this.obj.TextMatrix(r, c) = val;
    }
    this.RowData = function (r, val) {
        this.obj.RowData(r) = val;
    }
    this.ClearData = function() {
        this.obj.Row = -1;
        this.obj.Rows = this.obj.FixedRows
    }
    this.SetData = function (jsondata) {
        this.ClearData();
        this.bModifing = true;
        this.obj.Rows = this.obj.FixedRows + jsondata.length;
        var r = obj.FixedRows;
        for (var l = 0; l < jsondata.length; l++) {
            var objRow = jsondata[l];
            for (var x = 0 ; x < this.obj.Cols ; x++) {
                var _ColKey = this.obj.ColKey(x);
                if (_ColKey) {
                    this.obj.TextMatrix(r,x) = objRow[_ColKey];
                }
            }
            r++;
        }
        this.bModifing = false;
        //if (beditColColor) {
          //  SetColorNotEditCol();
        //}
        //if (bAutoSize) {
          //  obj.AutoSize(0, obj.Cols - 1);
        //}
        this.obj.Redraw = 1;
    }
    this._setWidth = function () {
        if (this.obj) {
            for (var x = 0 ; x < this.obj.Cols ; x++) {
            }
        }
    }
    this.InitGrid = function (option) {

        this.obj.FixedCols = 1;
        this.obj.Cols = this.obj.FixedCols + option.length + 1;

        this.obj.Appearance = 1;
        //obj.Rows = 1;
        //obj.Cols = 3;
        this.obj.AllowUserResizing = 1;//flexResizeColumns;
        
        this.obj.FixedAlignment(-1) = 4;//flexAlignCenterCenter;
        this.obj.ColAlignment(-1) = 4;//flexAlignCenterCenter;

        // obj.AllowSelection = true;
        // obj.AllowBigSelection = true;

        // obj.SelectionMode = 1; // flexSelectionByRow;
        this.obj.SelectionMode = 3; // flexSelectionListBox;
        this.obj.ExtendLastCol = true;

        this.obj.ExplorerBar = 5;//flexExSortShow;

        this.obj.Editable = 2;

        this.obj.BackColor = this.Gb_Grid_BColor;
        this.obj.BackColorAlternate = this.Gb_Grid_BColorAlt;
        this.obj.BackColorBkg = this.Gb_Grid_BColorBkg;
        this.obj.BackColorFixed = this.Gb_Grid_BColorFixed;
        this.obj.BackColorSel = this.Gb_Grid_BColorSel;

        this.obj.ForeColorSel = this.Gb_Grid_FColorSel;
        this.obj.GridColor = this.Gb_Grid_Color;
        this.obj.GridColorFixed = this.Gb_Grid_ColorFixed;
        this.obj.BorderStyle = this.Gb_Grid_BorderStyle;
        this.obj.SheetBorder = this.Gb_Grid_SheetBorder;
        this.obj.RowHeightMin = this.Gb_Grid_RowHeightMin;

        this.obj.GridLines = 1;
        this.obj.GridLinesFixed = 1;
        this.obj.TabBehavior = 1;
        this.obj.FontSize = 9;


            
        if (option.length == 0) {
            return;
        }
        this.obj.ColWidth(i) = '300';
        for (var i = 0; i < option.length; i++) {
            if (i < option.length) {
                this.obj.ColKey(i+1) = option[i]['binding'];
                this.obj.TextMatrix(0, i + 1) = option[i]['header'];
                if (option[i]['isReadOnly'] == true) {
                    //editCol[i] = 1;

                }
                if (option[i]['visible'] == true) {
                   // this.obj.ColHidden(i) = !option['visible'];
                }
                if (option[i]['width'] == '*') {
                    this.obj.ColWidth(i) = 1000;
                }
            } else {
                this.obj.ColKey(i + 1) = '_gwStatus_';
                this.obj.TextMatrix(0, i + 1) = '_gwStatus_';
                //this.obj.ColHidden(i) = false;
            }
        }
        console.log(this.obj);
    }
   // this.InitGrid(option);
    return this;
};
