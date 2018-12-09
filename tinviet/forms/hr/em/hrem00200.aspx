<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Untitled Page</title>
</head>
<script>


function BodyInit()
{
	dso_lst_hrem00200_1.Call("SELECT");
	BindingDataList();
	
}
function BindingDataList()
{
	//dso_lst_hrem00200_0.Call("SELECT");
	//dso_lst_hrem00200_1.Call("SELECT");
}
function ChangeColorItem(lstctl) 
{
        var slevel1, slevel2, slevel3,slevel4;
        for (var i = 0; i < lstctl.options.length; i++)
        {
            slevel1 = lstctl.options.item(i).text.substr(0, 1);
            slevel2 = lstctl.options.item(i).text.substr(0, 3);
            slevel3 = lstctl.options.item(i).text.substr(0, 5);
            slevel4 = lstctl.options.item(i).text.substr(0, 7);
            if (slevel4 != ".......")
            {
                if(slevel3==".....")
                {
                    lstctl.options.item(i).style.color = "0066CC";
                }
                else  
                {
                    if (slevel2 == "...")
                    {
                        lstctl.options.item(i).style.color = "FF4500";
                    }
                    else
                    {
                        if (slevel1 == ".")
                            lstctl.options.item(i).style.color = "FF00FF";  //FF3333
                    }
                }                
            }
        }
}
function OnSearch()
{
    dso_sel_hrem00200_0.Call("SELECT");
}
function OnSave()
{
	if(confirm("Do you want to update?"))
		dso_sel_hrem00200_0.Call();
}
function OnDataReceive(obj)
{
	if(obj.id=="dso_lst_hrem00200_0")
	{	
		
		var data1=obj.jsonData.Data.Table;
		var data2=obj.jsonData.Data.Table1;
        //console.log(data1);
        if(data1 !=null)
        {
            grdEmployee.SetColComboData("PLACE_BIRTH", data1, "CODE", "CODE_NM");
			grdEmployee.SetColComboData("WORK_GROUP", data2, "GROUP_PK", "GROUP_NM");
        }
		
        //auto_resize_column(grdEmployee,1,4,0);
		//grdEmployee.SetColComboData("PLACE_BIRTH", obj.jsonData.objcurdatas[0].records, "CODE", "CODE_NM");
		
	}	
	if(obj.id == "dso_lst_hrem00200_1")
	{
		
	}
	if(obj.id=="dso_sel_hrem00200_0")
	{
		lblRecord.text=grdEmployee.RowCount + "";
	}
}
</script>
<ts-data id="dso_sel_hrem00200_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter="NO,THR_EMP_PK,ORGANIZATION,WORK_GROUP,EMPLOYEE_ID,FULL_NAME,JOIN_DT,BIRTH_DT,PLACE_BIRTH,TELEPHONE,PERMANENT_ADD,PRESENT_ADD,SEX,PERSONAL_ID,MARRIED_YN"  
        	function="st_hr_sel_grd_sthrem00200_0"
        	procedure="st_hr_upd_grd_sthrem00200_0">
            <data-inputs bind="grdEmployee">
                <data-input bind="txtEmployee" ></data-input>
				<data-input bind="lstOrg" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="grdEmployee"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<ts-data id="dso_lst_hrem00200_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="array" function="st_hr_sel_lst_hrem00200_0" > 
			<data-inputs bind="noneed"></data-inputs>
			<data-outputs bind="2"></data-outputs>
        </dso> 
    </xml> 
</ts-data>
<ts-data id="dso_lst_hrem00200_1" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="st_hr_sel_lst_hrem00200_1">
            <data-inputs>
            	<data-input bind="txtText"></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstOrg"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>

<body bgcolor='#FFFFFF' style="overflow-y:hidden;">
 
  <table name="Employee Informations" width="100%" cellpadding="0" cellspacing="0" style="width:100%;height:100%;border:1px solid #62ac0d;">
        <tr style="width:100%;height:100%" valign="top">
            <td>
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d solid #62ac0d;width:100%;height:10%">
					
						<table width="100%" id="tblexp" style="height:100%" border=0 cellpadding="0" cellspacing="0">
							<tr style="border:0.5;width:100%;height:4%" valign="center" >
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=12 width="12%" style="border:0"  align="left" >
									Employee
								</td>
								<td colspan=20 width="20%" style="border:0"  align="left" >
									 <ts-textbox id="txtEmployee" style="width: 100%;" text="" keyPressed="OnTextBoxKeyPressed('MASTER')"></ts-textbox>
								</td>
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=10 width="10%" style="border:0" align="left" >
									
								</td>
								<td colspan=20 width="20%" style="border:0"> 
									
								</td>
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=10 width="10%" style="border:0" align="left" > </td>
								<td colspan=20 width="20%" style="border:0"> 
									
								</td>
							</tr>
							<tr style="border:0.5;width:100%;height:4%" valign="center" >
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=12 width="12%" style="border:0"  align="left" >
									Organization
								</td>
								<td colspan=20 width="20%" style="border:0"  align="left" >
									 <ts-list id="lstOrg" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"></ts-list>
								</td>
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=10 width="10%" style="border:0" align="left" >
									
								</td>
								<td colspan=20 width="20%" style="border:0"> 
									
								</td>
								<td colspan=2 width="2%" style="border:0"   >
									
								</td>
								<td colspan=10 width="10%" style="border:0" align="left" > </td>
								<td colspan=20 width="20%" style="border:0"> 
									
								</td>
							</tr>
						</table>
				</div>
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:5%;">
					<table width="100%"  style="height:100%" border=0 cellpadding="0" cellspacing="0">
						<tr style="border:0;width:100%;height:4%" valign="center"  >
							<td colspan=5 width="5%" style="border:0"   >
								Rows: 
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								
								<ts-label img="new" id="lblRecord"  style="font-weight:bold;color:red;font-size:12" ></ts-label>
							</td>
							<td colspan=60 width="60%" style="border:0"> 
								
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								
							</td>
							<td colspan=10 width="10%" style="border:0" align="left" >
								<ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
							</td>
							<td colspan=10 width="10%" style="border:0" align="left" >
								<ts-button id="ibtnSave" img="save"    onclick="OnSave()" imgtype="0" >Save</ts-button>
							</td>
														
						</tr>
					</table>
				</div>
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border:0px solid #62ac0d;width:100%;height:85%">
					<table width="100%" style="height:100%" border=0 cellpadding="0" cellspacing="0">
                    <tr style="border:1;width:100%;height:100%" valign="top">
                        <td colspan=100 style="width:100%;height:100%;"> 
							<ts-grid id="grdEmployee" >
                                 <columns>	
									<column text="NO"					datafield="NO" 			    		width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false >						</column>
									<column text="THR_EMP_PK"			datafield="THR_EMP_PK" 			    width="150" 	columntype="textbox" 		cellsalign="left" 	editable=false hidden="true">						</column>					
									<column text="ORGANIZATION"			datafield="ORGANIZATION" 			width="150" 	columntype="textbox" 		cellsalign="left" 	editable=true>						</column>
									<column text="WORK GROUP" 			datafield="WORK_GROUP" 				width="150" 	columntype="textbox" 		cellsalign="left">										</column>
									<column text="EMPLOYEE ID" 			datafield="EMPLOYEE_ID" 			width="150" 	columntype="textbox" 		cellsalign="left" 	editable="true">					</column>
									<column text="FULL NAME"			datafield="FULL_NAME" 				width="150" 	columntype="textbox" 		cellsalign="left" 	editable="true">					</column>
									<column text="JOIN DATE" 			datafield="JOIN_DT" 				width="150" 	columntype="date" 		    cellsalign="left" 	editable="true">					</column>
									<column text="BIRTH DATE" 			datafield="BIRTH_DT" 				width="150" 	columntype="textbox" 		cellsalign="left" 	editable=true>						</column>						
									<column text="PLACE BIRTH" 			datafield="PLACE_BIRTH" 			width="150" 	columntype="dropdownlist" 	cellsalign="left" 	editable=true>						</column>	
									<column text="TELEPHONE" 			datafield="TELEPHONE" 				width="150" 	columntype="textbox" 		cellsalign="left"	editable=true>						</column>	
									<column text="PERMANENT ADDRESS" 	datafield="PERMANENT_ADD" 			width="150" 	columntype="textbox" 		cellsalign="left" 	editable=true 	>				</column>						
									<column text="PRESENT ADDRESS" 		datafield="PRESENT_ADD"  			width="150" 	columntype="textbox" 		cellsalign="left"  	editable=true >		</column>
									<column text="SEX" 					datafield="SEX"  					width="100" 	columntype="dropdownlist" 	cellsalign="left"  	editable=true 	>		</column>
									<column text="PERSONAL ID" 		 	datafield="PERSONAL_ID"  			width="150" 	columntype="textbox" 		cellsalign="left"  	editable=true 	>		</column>
									<column text="MARRIED Y/N" 		 	datafield="MARRIED_YN"  			width="100" 	columntype="checkbox" 		cellsalign="center"  editable=true 	>		</column>
								</columns>
                             </ts-grid>
                        </td>
                    </tr>
					</table>
				</div>	
                
            </td>
        </tr>
    </table>

</body>
<ts-textbox id="txtText" text="" style="display: none"></ts-textbox>

</html>
