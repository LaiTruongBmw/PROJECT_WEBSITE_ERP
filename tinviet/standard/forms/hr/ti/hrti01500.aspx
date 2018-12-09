<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Work Group</title>
    <style type="text/css">
		
    </style>
</head>
<script>
function BodyInit()
{
    txtUser_PK.text = System.getSessionUserPk();
    iduser_pk.text = System.getSessionUserId();
     txtHr_level.text = System.getSessionHrLevel();
    //... 
    var data;
    data=<%=TSErpLib.SetListDataSQL("select a.PK,a.PARTNER_NAME from tco_company a where a.del_if = 0 and a.ACTIVE_YN='Y' ")%>;
    lstCompany.setDataJson(data);   

    datUser_info.Call(); 
   
}
function OnAdd()
{
    // var ctrl=idGrid.GetGridControl();
        idGrid.AddRow();
		//ctrl.TopRow = ctrl.rows;
		//idGrid.SetGridText(ctrl.rows-1,6,lstCompany.value)
		
}
function OnSave()
{
    if(confirm("Do you want to save?\nBạn đã chắc chắn save?"))
        datWork_Group_Entry.Call();
}
function OnDel()
{
    if(confirm("Do you want to delete?\nBạn đã chắc chắn xóa?"))
        idGrid.DeleteRow();
}
function onSearch()
{
    datWork_Group_Entry.Call("SELECT");
}

function OnDataReceive(obj)
{
    if(obj.id=="datUser_info")
     datWork_Group_Entry.Call("SELECT");
  
}
function OnDataError(obj) 
{
	switch (obj.id) 
	{
		default: return false;
		case datWork_Group_Entry.id:
			System.Menu.OnGetError(eval(obj).errmsg);
			break;
	}
}
function ChangeLocation()
{
	datWork_Group_Entry.Call("SELECT");
}  
    
</script>
<body bgcolor='#FFFFFF' style="overflow-y:hidden;">
<!------------------------------------------>
<ts-data id="datUser_info" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="list" procedure="ST_HR_PRO_CO_COMPANY_USER"  > 
                <data-inputs>
                    <data-input bind="txtUser_PK"></data-input>
                </data-inputs> 
                <data-outputs>
                    <data-output bind="lstCompany" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!--------------------main table--------------------------------->
<ts-data id="datWork_Group_Entry" onreceive="OnDataReceive(this)" onerror="OnDataError(this)"> 
        <xml> 
            <dso  type="grid"  parameter="GROUP_ID,GROUP_NAME,GROUP_VNAME,REMARK,SEQ,PK,COMPANY_PK" 
					function="ST_HR_SEL_HRTI01500_0" 
					procedure="ST_HR_UPD_HRTI01500_0">
                <data-inputs bind="idGrid"> 
                    <data-input bind="lstCompany"></data-input>
                </data-inputs>
                <data-outputs bind="idGrid"> </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<table id="main" style="width:100%;height:100%" cellpadding="0" cellspacing="0" class="eco_line">
    <tr style="height:2%" class="eco_bg">
        <td colspan="2">
            <table width="100%"  style="height:100%" border="0" cellpadding="2" cellspacing="1">
                <tr style="border:0;width:100%;height:4%" valign="center" >
					<td colspan=2 width="2%" style="border:0"   >
						
					</td>
					<td colspan=12 width="12%" style="border:0" align="left" >Company</td>
					<td colspan=20 width="20%" style="border:0"> 
						<ts-list  id="lstCompany"  valuemember="PK" displaymember="PARTNER_NAME" maxlen = "100" styles='width:70%'onchange="ChangeLocation()" ></ts-list>
                    </td>
                    <td colspan=15 width="15%" style="border:0" align="left" >
						
                    </td>
                    <td colspan=5 width="5%" style="border:0" align="left" >
                        <ts-button img="new" id="idBtnNew" alt="Add New" onclick="OnAdd()" imgtype="0">Add New</ts-button>
					</td>
                    <td colspan=5 width="5%" style="border:0" align="left" >
                        <ts-button img="save" id="idBtnSave" alt="Save" onclick="OnSave()" imgtype="0">Update</ts-button>
					</td>					
                    <td colspan=5 width="5%" style="border:0" align="left" >
                        <ts-button img="delete" id="idBtnDelete" alt="Delete" onclick="OnDel()" imgtype="0">Delete</ts-button>
					</td>
					<td colspan=10 width="10%" style="border:0" align="center" >
						
					</td>
					<td colspan=5 width="5%" style="border:0" align="left" >
						
					</td>
					<td colspan=15 width="15%" style="border:0" align="left" >
						
                    </td>
				</tr>
            </table>
        </td>
    </tr>
    <tr style="height:98%">
        <td colspan="2" class="eco_line_t">
            <ts-grid id="idGrid">
                <columns>	
                    <column text="WorkGroup ID"			datafield="GROUP_ID" 	   width="100" 	columntype="textbox" 	cellsalign="center" 	editable=true >		            </column>
                    <column text="Work Group Name"	    datafield="GROUP_NAME"     width="300" 	columntype="textbox" 	cellsalign="center" 	editable=true>	                	</column>
                    <column text="Work Group VName"		datafield="GROUP_VNAME"    width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
                    <column text="Remark"		        datafield="REMARK" 	       width="400" 	columntype="textbox" 	cellsalign="center" 	editable=true >						</column>					
                    <column text="Seq"	                datafield="SEQ" 	       width="250" 	columntype="textbox" 	cellsalign="center" 	editable=true>						</column>
                    <column text="PK" 	                datafield="PK" 	           width="100" 	columntype="textbox" 	cellsalign="center"		editable=true   hidden="true">		</column>
                    <column text="Company_PK" 	        datafield="COMPANY_PK" 	   width="100" 	columntype="textbox" 	cellsalign="center"		editable=true   hidden="true">		</column>
                </columns> 
            </ts-grid>            
        </td>
    </tr>
</table>

<ts-textbox id="txtpk" styles="display:none"/>
<ts-textbox id="txtfrom" style="display:none"/>
<ts-textbox id="txtto" style="display:none"/>
<ts-textbox id="txtflag" style="display:none"/>
<ts-textbox id="txtresult" style="display:none"/>
<ts-textbox id="iduser_pk" style="display:none"/>
<ts-textbox id="txtUser_PK" style="display:none"/>
<ts-textbox id="txtHr_level" style="display:none"/>
</body>
</html>
