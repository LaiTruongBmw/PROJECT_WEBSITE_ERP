<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Shift Plan</title>
    <style type="text/css">
		
    </style>
</head>
<script>
function BodyInit() {
     txtUser_PK.text = System.getSessionUserPk();
     iduser_pk.text = System.getSessionUserId();
     txtHr_level.text = System.getSessionHrLevel();
    //... 
    var data;
    data=<%=TSErpLib.SetListDataSQL("select a.PK,a.PARTNER_NAME from tco_company a where a.del_if = 0 and a.ACTIVE_YN='Y' ")%>;
    lstCompany.setDataJson(data);   

    dso_grd_hrti00100_0.Call("SELECT");   

    if ((Trim(iduser_pk.text) != "") && (txtHr_level.text == "1")) //QUYEN BI GIOI HAN 
        dso_lst_hrti00100_0.Call();
    else
        ChangeLocation();
}
//...
function OnDataReceive(obj) {
    if (obj.id == "dso_lst_hrti00100_0")
    {
        dso_grd_hrti00100_0.Call("SELECT");
    }
    else if (obj.id == "dso_pro_hrti00100_0")
    {
        var url = System.RootURL + '/reports/ag/bh/' + txtReport_tmp.text + '?p_company=' + lstCompany.value;
        window.open(url);
    }
}
//...
function ChangeLocation() {
    dso_grd_hrti00100_0.Call("SELECT");
}
//...
function AddOnClick() {
    grdWorkShift.AddRow();
    grdWorkShift.SetGridText(grdWorkShift.rows - 1, c_com_pk, lstCompany.value);
}
//...
function UpdateOnClick() {

    if (confirm("Do you want to save?"))
    {
            dso_grd_hrti00100_0.Call();
    }
}
//...
function DeleteOnClick() {
    if (confirm("Do you want to delte?"))
    {
        grdWorkShift.DeleteRow();
        dso_grd_hrti00100_0.Call();
    }
}
//...
function ReportOnClick() {
    txtReport_tmp.text = "rpt_shift_plan.aspx";
    dso_pro_hrti00100_0.Call();

}

</script>
<body bgcolor='#FFFFFF' style="overflow-y:hidden;">
    <ts-data id="dso_grd_hrti00100_0"> 
        <xml> 
            <dso id="1" type="grid" 
                parameter="PK,SHIFT,BEGIN,END,WT,OT,NT,START_MEAL1,END_MEAL1,HOUR_MEAL1,START_MEAL2,END_MEAL2,HOUR_MEAL2,START_OT,START_NT,USE_YN,DESCRIPTION,DAYS,WT_PLUS,MAX_OT,WT_PLUS_RATE,COMPANY_PK,REVERSE_OT,MAX_REVERSE_OT,NOTE" 
                function="ST_HR_SEL_HRTI00100_0" procedure="ST_HR_UPD_HRTI00100_0"> 
                <data-inputs bind="grdWorkShift"> 
                   <data-input bind="lstCompany"> </data-input>          
                </data-inputs>
                <data-outputs bind="grdWorkShift"></data-outputs>
            </dso>             
        </xml> 
    </ts-data> 
 <!------------------------------------------>
<ts-data id="dso_pro_hrti00100_0" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="process" procedure="ST_HR_PRO_CO_FIND_REPORT_2" > 
                <data-inputs>
                    <data-input bind="txtReport_tmp"> </data-input>
                    <data-input bind="lstCompany"></data-input>
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txtReport_tmp"></data-output>
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!------------------------------------------>
<ts-data id="dso_lst_hrti00100_0" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="list" procedure="ST_HR_PRO_CO_COMPANY_USER"  > 
                <data-inputs>
                    <data-input bind="txtUser_PK"></data-input>
                </data-inputs> 
                <data-outputs>
                    <data-output bind="lstCompany"></data-output>
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <table id="main" style="width:100%;height:100%;" cellpadding="0" cellspacing="0" class="eco_line">
        <tr style="width:100%;height:2%" valign="top" class="eco_bg">
            <td align="left" valign="top">
				<table style="height:100%" border="0" cellpadding="3" cellspacing="2">
					<tr style="border:0;height:4%" valign="center" >
					    <td style="padding-left:50px">
					        Company
					    </td>
					    <td style="width:200px">
					        <ts-list  id="lstCompany"  maxlen = "100" valuemember="PK" displaymember="PARTNER_NAME" styles='width:100%'onchange="ChangeLocation()"></ts-list>
                        </td>
                        <td style="width:200px">

                        </td>
					    <td>
                            <ts-button img="new" id="ibtnAdd" alt="Add New" onclick="AddOnClick()" imgtype="0">Add New</ts-button>
                        </td>
					    <td>
                            <ts-button img="save" id="ibtnUpdate" alt="Save" onclick="UpdateOnClick()" imgtype="0">Update</ts-button>
                        </td>
					    <td>
                            <ts-button img="delete" id="ibtnDelete" alt="Delete" onclick="DeleteOnClick()" imgtype="0">Delete</ts-button>
                        </td>
                        <td>
                            <ts-button id="ibtnReport"  alt="Report"  img="excel"   onclick="ReportOnClick()" imgtype="0" >Report</ts-button>
                        </td>  
                        <td style="width:200px">

                        </td>                      
                        <td style="width:150px">
                            <ts-label id="lblRecord"  text="" maxlen = "100" styles="color:red;width:90%;font-weight: bold;font-size:12" />
                        </td>
					</tr>
				</table>
			</td>
        </tr>
        <tr style="width:100%;height:98%" valign="top">
            <td class="eco_line_t">
                <ts-grid id="grdWorkShift">
                    <columns>	
                        <column text="PK"			    datafield="PK" 			    width="50" 	    columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
                        <column text="Shift"	        datafield="SHIFT"           width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>
                        <column text="Begin"		    datafield="BEGIN" 	        width="100" 	columntype="textbox" 		cellsalign="center"		editable=true >						</column>					
                        <column text="End"		        datafield="END" 	        width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true >						</column>					
                        <column text="WT"	            datafield="WT" 	            width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>						</column>
                        <column text="OT" 	            datafield="OT" 	            width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="NT" 	            datafield="NT" 	            width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Start Meal(1)" 	datafield="START_MEAL1" 	width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="End Meal(1)" 		datafield="END_MEAL1"       width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Hour Meal(1)"		datafield="HOUR_MEAL1" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true >						</column>					
                        <column text="Start Meal(2)"    datafield="START_MEAL2" 	width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true >						</column>					
                        <column text="End Meal(2)"	    datafield="END_MEAL2" 	    width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>						</column>
                        <column text="Hour Meal(2)" 	datafield="HOUR_MEAL2" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Start OT" 	    datafield="START_OT" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Start NT" 		datafield="START_NT" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="USE_YN"		    datafield="USE_YN" 	        width="100" 	columntype="checkbox" 		cellsalign="center"		editable=true >						</column>					
                        <column text="Description"		datafield="DESCRIPTION" 	width="200" 	columntype="textbox" 		cellsalign="center" 	editable=true >						</column>					
                        <column text="Days"	            datafield="DAYS" 	        width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>						</column>
                        <column text="WT Plus" 	        datafield="WT_PLUS" 	    width="150" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Max OT" 	        datafield="MAX_OT" 	        width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="WT Plus Rate" 	datafield="WT_PLUS_RATE" 	width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="company_pk"	    datafield="COMPANY_PK" 	    width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true hidden="true">		</column>
                        <column text="Reverse OT" 	    datafield="REVERSE_OT" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Max Reverse OT" 	datafield="MAX_REVERSE_OT" 	width="200" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                        <column text="Note" 		    datafield="NOTE" 	        width="200" 	columntype="textbox" 		cellsalign="center"		editable=true>						</column>
                    </columns> 
                </ts-grid>                
            </td>
        </tr>
    </table>
    <ts-textbox id="txtidPK"  		text=""  style="display:none"/>  
    <ts-textbox id="txtidSaveData" 	text=""  style="display:none"/> 
    <ts-textbox id="txtAction" 	    text=""  style="display:none"/> 
    <ts-textbox id="iduser_pk" style="display:none"/>
    <ts-textbox id="txtUser_PK" style="display:none"/>
    <ts-textbox id="txtHr_level" style="display:none"/>
    <ts-textbox id="txtReport_tmp" style="display:none"/>
</body>
</html>
