<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>TypeScript HTML App</title>
    <link href="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
    <!--<link rel="stylesheet" href="app.css" type="text/css" />-->
    <link href="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/styles/wijmo.css" rel="stylesheet" />
    <link href="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/styles/tserp.css" rel="stylesheet" />
    <!--<link href="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/styles/tserp2.css" rel="stylesheet" />-->
    <link href="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/styles/tserp-icon.css" rel="stylesheet" />

    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.input.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.nav.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.grid.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.grid.multirow.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.grid.filter.min.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/wijmo/wijmo.grid.detail.min.js"></script>


    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.input.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.grid.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.contain.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.components.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.nav.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.popup.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/system.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/controls/tserp.data.js"></script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/moment/moment.js"></script>
    <style type="text/css">
        hr {
            display: block;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
            margin-left: auto;
            margin-right: auto;
            border-style: inset;
            border-width: 1px;
        }
    </style>
    <script type="text/javascript">
        System.ctx = '<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>';
        var _Popup;
        function OnTextBoxValueChange(sender, e) {
            console.log(e);
            alert(sender.value);
        }
        function OnTextBoxKeyPressed(sender, e) {
            console.log(e);
            if (e.keyCode === 13) {
                alert(sender.value);
            }
        }
        function OnvalueChanged(sender, e) {
            alert(sender.value);
        }
        function BodyInit() {
            
            //alert('1');
            btn_test22.disabled = true;
            _Popup = new tserp.Popup('#popdiv');    

        }
        function moveDown() {
            _Popup.Open();
        } 
function moveSearch() {
    lbl_Log_Virtual.value = 'Gởi Dữ liệu' + tserp.utils.Common.formatDate(new Date(),'YYYY-MM-DD HH:mm:SS') + '\n\r'
            dsoGrdAppPerson.Call('SELECT');
        }
function OnDataReceive(obj){
    if(obj.id ==='dsoGrdAppPerson'){
    lbl_Log_Virtual.value = lbl_Log_Virtual.value + 'Nhận Dữ liệu' + tserp.utils.Common.formatDate(new Date(),'YYYY-MM-DD HH:mm:SS') + '\n\r' + 'Số Dòng hiển thị = ' + grdAppPerson.RowCount + 'Số dòng thực tế = ' + grdAppPerson.RowCountDataSource
}
}
    </script>
    <script src="<%=TSERP.Libs.TSERPLibs.GetRootUrl() %>system/libs/app.js"></script>
</head>
<body>
        <div id="popdiv"></div>
    <h3>TextBox Control</h3>
    <ts-textbox id="txt_1" keyPressed="OnTextBoxKeyPressed(sender,e);"></ts-textbox>
    <pre>
        &lt;ts-textbox id="txt_1"&gt; &lt;/ts-textbox&gt;
Thuộc tính
    - text
    - value
    - isDisabled
    - isTouching
    - isUpdating
Phương thức
    - GetData()
    - SetData('value')
    - SetDataText('value')
    - GetData()
    - SetEnable(bvalue)
    - GetControl()
Sự Kiện
    - valueChanged: Ex: function(sender, e);
        + Khai báo inline: &lt;ts-textbox id="txt_1" valueChanged="OnTextBoxValueChanged(sender,e);"&gt;&lt;/ts-textbox&gt;
    - keyPressed: Ex: function(sender, e);
        + Khai báo inline: &lt;ts-textbox id="txt_1" keyPressed="OnTextBoxKeyPressed(sender,e);"&gt;&lt;/ts-textbox&gt;
    </pre>
    <input id="txt_2" style="display:none" />
    <hr />
    <h3>CheckBox Control</h3>
    <ts-checkbox id="chk_1" text="All Task" value="Y" valueChanged="OnvalueChanged(sender, e);"></ts-checkbox>
    <pre>
        &lt;ts-checkbox id="chk_1"&gt; &lt;/ts-checkbox&gt;
Thuộc tính
    - text   (Y/N)
    - value  (Y/N)
    - isDisabled
    - isTouching
    - isUpdating
Phương thức
    - GetData()
    - SetData('Y/N')
    - SetDataText('Y/N')
    - GetData()
    - SetEnable(bvalue)
    - GetControl()
Sự Kiện
    - valueChanged: Ex: =function(sender, event){};
        + Khai báo inline: &lt;ts-checkbox id="chk_1" text="All Task" value="Y" valueChanged="OnvalueChanged(sender, e);"&gt;&lt;/ts-checkbox&gt;

    </pre>
    <input id="chk_2" text="All Task" style="display:none" />
    <hr />
    <h3>TimeBox Control</h3>
    <ts-timebox id="id_time"></ts-timebox>
    <pre>
        &lt;ts-timebox id="chk_1"&gt; &lt;/ts-timebox&gt;
Thuộc tính
    - text   (Y/N)
    - value  (Y/N)
    - isDisabled
    - isTouching
    - isUpdating
Phương thức
    - GetData()
    - SetData('Y/N')
    - SetDataText('Y/N')
    - GetData()
    - SetEnable(bvalue)
    - GetControl()

    </pre>

    <hr />
    <h3>DateBox Control</h3>
    Year
    <ts-datebox id="db_YYYY" type="2"></ts-datebox>
    <br />
    Year Month
    <ts-datebox id="db_YYYYMM" type="1"></ts-datebox>
    <br />
    Year Month Date
    <ts-datebox id="db_YYYYMMDD"></ts-datebox>
    <pre>
        Year
        &lt;ts-datebox id="db_YYYY" type="2"&gt;&lt;/ts-datebox&gt;
        &lt;br /&gt;

        Year Month
        &lt;ts-datebox id="db_YYYYMM" type="1"&gt;&lt;/ts-datebox&gt;
        &lt;br /&gt;

        Year Month Date
        &lt;ts-datebox id="db_YYYYMMDD"&gt;&lt;/ts-datebox&gt;

Thuộc tính
    - text   (Y/N)
    - value  (Y/N)
    - isDisabled
    - isTouching
    - isUpdating
Phương thức
    - GetData()
    - SetData('Y/N')
    - SetDataText('Y/N')
    - GetData()
    - SetEnable(bvalue)
    - GetControl()

    </pre>


    <br />
    <ts-monthbox id="m_test"></ts-monthbox>
    <br />

    <ts-icon name="search" id="btnSearch1" onclick="OnSearchsatus()"></ts-icon>

    <input id="intro" />

    <ts-label id="temp" for="intro">dddd</ts-label>

    <ts-image id="imgFile"  styles="width:130;height:130" ></ts-image>

    <ts-panel id="pnl_Test" src="" style="height:200px;"></ts-panel>
    <ts-classictreeview id="tv_test"></ts-classictreeview>

    <ts-radio id="rdoAMOUNT" value="2" onchange="OnChangeAmountType()" style='height:22'>
        <span value="1">Trans & Book</span>
        <span value="2">Book</span>
        <span value="3">Trans</span>
    </ts-radio>


    <ts-button id="btn_test2" onclick="moveSearch()" value="sss" img="search" imgtype="0">Search</ts-button>

    <ts-button id="btn_test22" onclick="moveDown()" value="sss" img="add"></ts-button>

    <ts-data id="dsoGrdAppPerson" onreceive="OnDataReceive(this)" > 
	    <xml>
		    <dso type="grid" parameter="PK" function="SEL_MainTutorial" procedure=""  > 
			    <data-inputs bind="grdAppPerson" > 
			        <data-input bind="txt_122" ></data-input>
			    </data-inputs>
			    <data-outputs bind="grdAppPerson" ></data-outputs>
		    </dso> 
	    </xml> 
    </ts-data> 
    <ts-textbox id="txt_122" keyPressed="OnTextBoxKeyPressed(sender,e);"></ts-textbox>
    <ts-grid id="grdAppPerson" rowDblClick="onChangeApprovalPerson(sender,event)" style="height:500px" localVirtualScrolling="true">
        <columns>
            <column text="pk" datafield="PK" width="130" allowSorting="true" allowMerging="true"></column>
            <column text="DESCRIPTION" datafield="DESCRIPTION" width="100"></column>
            <column text="ITEM_BC" datafield="ITEM_BC" width="100" aggregate="Sum"></column>
            <column text="CLOSE_YN" datafield="CLOSE_YN" columntype="checkbox" width="150" editable="true"></column>
            <column text="REF_PO_NO" datafield="REF_PO_NO" width="150" editable="false"></column>
            <column text="ATT01" datafield="ATT01" width="150" editable="false"></column>
            <column text="ATT02" datafield="ATT02" width="150" editable="false"></column>
            <column text="SOD_NO" datafield="SOD_NO" width="150" editable="false"></column>
            <column text="IN_OUT_STATUS" datafield="IN_OUT_STATUS" width="150" editable="false"></column>
            <column text="CRT_BY" datafield="CRT_BY" width="150" editable="false"></column>
            <column text="REF_PO_NO" datafield="REF_PO_NO" width="150" editable="false"></column>
            <column text="STYLE_SPEC" datafield="STYLE_SPEC" width="150" editable="false"></column>
            <column text="PRINT_TIMES" datafield="PRINT_TIMES" width="150" editable="false"></column>
        </columns>
    </ts-grid>
    <ts-label id="lbl_Log_Virtual" ></ts-label>

    <ts-radio id="rdoCODE_TYPE" value="C" > 
	    <span value="N" > <font color="black" >NUMBER</font>&nbsp;&nbsp;&nbsp;</span>
	    <span value="C" > <font color="black" >CHAR</font>&nbsp;&nbsp;&nbsp; </span>
    </ts-radio >


    <table style="width: 100%; height: 100%;">
        <tr style="width: 100%;height: 98%;   ">
            <td style="width: 49%;">

                <ts-tab id="tab_test" onPageActivated="TestpageActivated()">
                    <table name="Tab 1" id="idTab_Child" class="" align="top" cellspacing=0 cellpadding=0 border=0 style="width:100%;height:145;">
                        <tr valign="top">
                            <td>
                                <table width="100%" cellpadding="1" cellspacing="1" border="0">
                                    <tr>
                                        <td colspan=4>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan=4>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="right">Description</td>
                                        <td colspan=3><gw:textbox id="txt_REMARK" text="" styles="width:100%"> </gw:textbox></td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="right">Company Group</td>
                                        <td width="15%" align="left"><gw:list id="lst_COM_GRP" value="" styles="width:100%" onchange=""></gw:list></td>
                                        <td width="15%" align="right">Profit Loss Group 1</td>
                                        <td width="15%" align="left"><gw:list id="lst_PLC_GRP1" value="" styles="width:100%" onchange=""></gw:list></td>
                                    </tr>
                                    <tr>
                                        <td align="right">Profit Loss Group 2</td>
                                        <td align="left"><gw:list id="lst_PLC_GRP2" value="" styles="width:100%" onchange=""></gw:list></td>
                                        <td align="right">Profit Loss Group 3</td>
                                        <td align="left"><gw:list id="lst_PLC_GRP3" value="" styles="width:100%" onchange=""></gw:list></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table name="Tab 2" id="idTab_Child2" class="" align="top" cellspacing=0 cellpadding=0 border=0 style="width:100%;height:145;">
                        <tr valign="top">
                            <td>
                                sssss
                            </td>
                        </tr>
                    </table>
                </ts-tab>

            </td>
        </tr>
    </table>


</body>
</html>