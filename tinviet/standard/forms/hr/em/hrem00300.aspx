<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>EMPLOYEE PROFILE</title>
</head>
<script>
var emp_pk_list;
var check_init=0;
var data = "";
function BodyInit()
{

	BindingDataList();
    ChangeColorItem(lstOrg.GetControl());


}
function BindingDataList()
{

}

//-----------------------------------------------
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

//-------------------------------

function OnDataReceive(obj)
{
    if (obj.id=="datOrgData")
    {
            if(txtHr_level.text=="6")
                txtOrgData.text=txtOrgData.text+"|ALL|Select All";
            lstOrg.SetDataText(txtOrgData.text)    ;
            
              obj=lstOrg.GetControl()
		    if (obj.options.length ==2)
			    obj.options.selectedIndex=0;
		    else
			    obj. options.selectedIndex=0;
    
        
        //datGroupData.Call();
    }
   else if (obj.id=="datEmployee_Detail_Search")
   {
        imgFile.SetDataText(txtPhoto_PK.text);
        datExperience.Call("SELECT");
   }
   else if (obj.id=="datExperience")
   {
   
        datEdu.Call("SELECT");
   }
   else if (obj.id=="datEdu")
   {
   
        datFamily.Call("SELECT");
   }
   else if (obj.id=="datFamily")
   {
        datOther.Call("SELECT");
   }
   else if (obj.id=="datUser_info")
   {
        ChangeColorItem(lstOrg.GetControl());
		datSal_security.Call();
   }
	else if (obj.id=="datSal_security")
   {   
		check_init=1;
   }
   else if (obj.id=="datFind_Report")
   {
        if(txtReportCode_tmp.text =="01" ) //Employee Report.
		{	
			var url =System.RootURL + txtReport_tmp.text+'?emp_pk=' + emp_pk_list+'&p_sal_security='+ txt_sal_security.text  ;                 
		}
        
        window.open(url); 
   }    
}
//------------------------------------------------
function OnChangeOrg()
{
    txtOrg.text=lstOrg.value ;
    

}
//----------------------------------------------------
function ChoseList_box(obj_list,value)
{
    obj_list.SetDataText(value )    ;
    obj=obj_list.GetControl()
	if (obj.options.length ==2)
		obj.options.selectedIndex=0;
	else
		obj.options.selectedIndex=obj.options.length-1;
}
//----------------------------------
function OnShowPopup()
{
    var strcom;
    var fpath = System.RootURL + "/standard/forms/hr/co/hrco00100.aspx?";
    var obj=window.showModalDialog(fpath,this,'titleb:0;resizable:yes;status:no;dialogWidth:20;dialogHeight:20;dialogLeft:'+window.event.screenX+';dialogTop:'+ window.event.screenY +';edge:sunken;scroll:yes;unadorned:yes;help:no');
    if (obj!=null)
    {
        lstOrg.value=obj;
    }
    
}
//-----------------------------------------------
function OnToggle()
{
    if(imgArrow.status == "expand")
    {
        idLeftDiv.style.display="none";
        imgArrow.status = "collapse";
        imgArrow.src = "../../../../system/images/next_orange.gif";
    }
    else
    {
        idLeftDiv.style.display="";
        imgArrow.status = "expand";
        imgArrow.src = "../../../../system/images/prev_orange.gif";
    }
    
}
//------------------------------------------------
function OnSearch()
{
	if(check_init==1)
	{
		//datEmployee_Detail_Search.StatusInsert();
		grdExperience.ClearData();
		grdFamily.ClearData();
		grdOther.ClearData();
		datEmployee_Main_Search.Call("SELECT");
	}	
}
//-------------------------------------------------
function OnClickRow()
{
    var col=grdEmployee.GetGridControl().col
    if(col!=1)
    {
        txtEmpPK.text=grdEmployee.GetGridData(grdEmployee.row,0);
        imgFile.MasterPK = txtEmpPK.text;
        datEmployee_Detail_Search.Call("SELECT");
    }    
}
//--------------------------------------------------
function OnReport()
{
	if(check_init==1)
	{
		if(lstReport_Type.value =="01")
		{
			emp_pk_list="";
			for (var i=1;i<=grdEmployee.rows-1;i++)
			{
				if (grdEmployee.GetGridData(i,1)=="-1")
				{
					emp_pk_list = emp_pk_list + grdEmployee.GetGridData(i,0) + ",";                        
				}   
			}
			if (emp_pk_list=="")
			{
				alert((v_language =="ENG")?"Please choose employees to print":"Bạn hãy chọn nhân viên để in");
				return;
			}
			else
			{
				emp_pk_list=emp_pk_list.substr(0,emp_pk_list.length-1);
				
				 
				txtReportCode_tmp.text = lstReport_Type.value;
				txtOrg_tmp_pk.text=lstOrg.value; 
				 
			}
		}
		datFind_Report.Call();
		
	}				
}
/*
<ts-tab id="idTab">
				            <table  name="Experience" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <ts-grid  id="grdExperience">
											<columns>	
												<column text="PK"				datafield="PK" 			    	width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
												<column text="EMP_PK"			datafield="EMP_PK" 			    width="150" 	columntype="textbox" 		cellsalign="left" 		editable=false hidden="true">		</column>					
												<column text="NO"				datafield="NO" 					width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
												<column text="COMPANY'S NAME" 	datafield="COMPANY_NM" 			width="150" 	columntype="textbox" 		cellsalign="left"		editable="true">					</column>
												<column text="START DATE" 		datafield="START_DATE" 			width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="END DATE"			datafield="END_DATE" 			width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="POSITION"			datafield="POSITION" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="DUTIES"			datafield="DUTIES" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="SALARY"			datafield="SALARY" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="REMARK"			datafield="REMARK" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
											</columns>	
										</ts-grid>
					                </td> 
					            </tr>
				            </table>
				            <table  name="Education" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <ts-grid  id="grdEDU">
											<columns>	
												<column text="PK"					datafield="PK" 			    	width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
												<column text="EMP_PK"				datafield="EMP_PK" 			    width="150" 	columntype="textbox" 		cellsalign="left" 		editable=false hidden="true">		</column>					
												<column text="NO"					datafield="NO" 					width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
												<column text="SCHOOL NAME/MAJOR" 	datafield="COMPANY_NM" 			width="150" 	columntype="textbox" 		cellsalign="left"		editable="true">					</column>
												<column text="START DATE" 			datafield="START_DATE" 			width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="END DATE"				datafield="END_DATE" 			width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="MAJOR"				datafield="MAJOR" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="RESULT"				datafield="RESULT" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="REMARK"				datafield="REMARK" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column> 
											</columns>	
                                        </ts-grid>
					                </td> 
					            </tr>
				            </table>
				            <table  name="Family" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <ts-grid id="grdFamily"> 
											<columns>	
												<column text="PK"			datafield="PK" 			    	width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
												<column text="EMP_PK"		datafield="EMP_PK" 			    width="150" 	columntype="textbox" 		cellsalign="left" 		editable=false hidden="true">		</column>					
												<column text="NO"			datafield="NO" 					width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
												<column text="FULL NAME" 	datafield="FULL_NM" 			width="150" 	columntype="textbox" 		cellsalign="left"		editable="true">					</column>
												<column text="RELATION" 	datafield="RELATION" 			width="150" 	columntype="text" 			cellsalign="left" 		editable="true">					</column>
												<column text="BIRTH DATE"	datafield="BIRTH_DATE" 			width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="JOB"			datafield="JOB" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="SALARY"		datafield="SALARY" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="REMARK"		datafield="REMARK" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column> 
											</columns>	
                                      </ts-grid>
						            </td>
						        </tr>
				            </table>
				            <table   name="Note" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						               <ts-grid id="grdOther">
											<columns>	
												<column text="PK"			datafield="PK" 			    width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
												<column text="EMP_PK"		datafield="EMP_PK" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable=false hidden="true">		</column>					
												<column text="NO"			datafield="NO" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
												<column text="NOTE 1" 		datafield="NOTE_1" 			width="150" 	columntype="textbox" 		cellsalign="left"		editable="true">					</column>
												<column text="NOTE 2" 		datafield="NOTE_2" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="NOTE 3"		datafield="NOTE_3" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="NOTE 4"		datafield="NOTE_4" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
												<column text="NOTE 5"		datafield="NOTE_5" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
											</columns>	
										</ts-grid> 
					                </td> 
					            </tr>
				            </table>
				        </ts-tab>
*/
</script>


<!-------------------data control----------------------->
<ts-data id="datSal_security" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="process" procedure="ST_HR_PRO_CO_SAL_DISPLAY"  > 
                <data-inputs>
                    <data-input bind="iduser_pk" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txt_sal_security" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>

<!------------------------------------------>
<ts-data id="datUser_info" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="list" procedure="ST_HR_SEL_CO_USER_ROLE2"  > 
                <data-inputs>
                    <data-input bind="iduser_pk" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="lstOrg" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!------------------------------------------>
<ts-data id="datFind_Report" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="process" procedure="ST_HR_PRO_CO_REPORT" > 
                <data-inputs>
                    <data-input bind="txtReportCode_tmp" /> 
                    <data-input bind="txtOrg_tmp_pk" /> 
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txtReport_tmp" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!------------------------------------->
<ts-data id="datEmployee_Detail_Search" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="control" function="ST_HR_SEL_HREM00300_0" > 
                <data-inouts>
                    <data-inout bind="txtEmpPK" /> 
                    <data-inout bind="txtEmpID" /> 
                    <data-inout bind="txtOldCode" /> 
                    <data-inout bind="txtPhoto_PK" /> 
                    <data-inout bind="txtFullName" /> 
                    <data-inout bind="txtCardID" /> 
                    <data-inout bind="txtCurAdd" /> 
                    <data-inout bind="txtPerAdd" /> 
                    <data-inout bind="txtOrganization" /> 
                    <data-inout bind="txtGroup" /> 
                    <data-inout bind="txtEmpType" /> 
                    <data-inout bind="txtTel" /> 
                    <data-inout bind="txtSex" /> 
                    <data-inout bind="txtStatus" /> 
                    <data-inout bind="txtJoinDate" /> 
                    <data-inout bind="txtLeftDate" /> 
                    <data-inout bind="txtNation" /> 
                    <data-inout bind="txtBirthPlace" /> 
                    <data-inout bind="txtBirthDate" /> 
                    <data-inout bind="txtPersonID" /> 
                    <data-inout bind="txtPersonIDPlace" /> 
                    <data-inout bind="txtIssuedDate" /> 
                    <data-inout bind="txtPos" /> 
                    <data-inout bind="txtJob" />
                    <data-inout bind="txtEdu" />
                    <data-inout bind="txtEthnic" />
                    <data-inout bind="txtReligion" />
                    <data-inout bind="txtMarital" />
                </data-inouts> 
            </dso> 
        </xml> 
</ts-data>

<ts-data id="datEmployee_Main_Search" > 
        <xml> 
            <dso  type="grid"   function="ST_HR_SEL_HREM00300_1" > 
                <data-inputs bind="grdEmployee" >
                    <data-input bind="lstOrg" />
                    <data-input bind="dtFrom_JoinDate" />
                    <data-input bind="dtTo_JoinDate" />
                    <data-input bind="txtEmployee" />
					<data-input bind="lstNation" />
					<data-input bind="lstStatus" />					
                </data-inputs>
				<data-outputs> 
					<data-output  bind="grdEmployee" />
				</data-outputs> 
            </dso> 
        </xml> 
</ts-data>
<!---------------------expand employee tab data control------------------>
<ts-data id="datExperience" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="grid" function="ST_HR_SEL_HREM00300_2" > 
                <data-inputs bind="grdExperience" >
                    <data-input bind="txtEmpPK" />
                </data-inputs>
				<data-outputs> 
					<data-output  bind="grdExperience" />
				</data-outputs> 
            </dso> 
        </xml> 
</ts-data>
<!----------------------------------->
<ts-data id="datFamily" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="grid" function="ST_HR_SEL_HREM00300_3" > 
                <data-inputs>
                    <data-input bind="txtEmpPK" />
                </data-inputs>
				<data-outputs> 
					<data-output  bind="grdFamily" />
				</data-outputs> 
            </dso> 
        </xml> 
</ts-data>
<!---------------------expand employee tab data control------------------>
<ts-data id="datEdu" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="grid" function="ST_HR_SEL_HREM00300_4" > 
                <data-inputs bind="grdEDU" >
                    <data-input bind="txtEmpPK" />
                </data-inputs>
				<data-outputs> 
					<data-output  bind="grdEDU" />
				</data-outputs> 
            </dso> 
        </xml> 
</ts-data>

<!----------------------------------->
<ts-data id="datOther" onreceive="OnDataReceive(this)"  > 
        <xml> 
            <dso  type="grid" function="ST_HR_SEL_HREM00300_5" > 
                <data-inputs>
                    <data-input bind="txtEmpPK" />
                </data-inputs>
				<data-outputs> 
					<data-output  bind="grdOther" />
				</data-outputs> 
            </dso> 
        </xml> 
</ts-data>
<!----------------------------------->
<body  style="overflow-y:hidden;">
<table  border="1" width="100%" height="100%" cellpadding="0" cellspacing="0" >
    <tr> 
        <td  id="idLeftDiv" valign="top" width="30%" height="100%">
			<div >
            <table width="100%" height="100%" cellpadding=0 cellspacing=0 border=0 class="itable">
				<tr style="border:0;height:4%">
			        <td style="border:0"  align="right" valign="middle"><a class="eco_link" title="Click here to show Organization" onclick="OnShowPopup()" href="#tips"  >Organization</a></td>
				    <td style="border:0" colspan=6>
					    <ts-list  id="lstOrg" value="ALL" styles='width:100%' onchange="" /> 
				    </td>
				    <td ></td>
				    <td ></td>
			    </tr>
			    <tr   style="border:0;height:4%">
			        <td width="20%" style="border:0"  align="right" valign="middle">Nation</td>
				    <td colspan=2 width="25%" style="border:0" >
					    <ts-list  id="lstNation" value='01' maxlen = "100" styles='width:100%' />
				    </td>
				    <td width="16%" align=right>Status</td>
				    <td colspan=3 width="44%"><ts-list  id="lstStatus" value='A' maxlen = "100" styles='width:100%' />
                     </td>
				    <td width=5%></td>
				    <td width=5%></td>
			    </tr>
				<tr  style="border:0;height:4%" >
					<td  style="border:0" align="right">Join DT</td>
				    <td colspan=2 style="border:0" ><ts-datebox id="dtFrom_JoinDate" nullaccept styles="width:100%"  /></td>
				    <td ></td>
				    <td colspan=4 style="border:0" ><ts-datebox id="dtTo_JoinDate" nullaccept styles="width:100%"  /></td>
				    <td ></td>
				    <td ></td>
				    
				</tr>
				<tr  style="border:0;height:4%">
		            <td style="border:0" align="right" >Employee</td>
		            
		            <td colspan=6 style="border:0"><ts-textbox id="txtEmployee" styles="color:blue;width:100%"  onenterkey ="OnSearch()"  /></td>
		            <td colspan=2 style="border:0" >
						<ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
					</td>
		            
				</tr >
				<tr  style="border:0;height:4%">
		            <td colspan=1 style="border:0" align="right" >Report</td>
		            <td colspan=6 style="border:0">
						<ts-list  id="lstReport_Type" value="" styles="color:blue;width:100%" onchange=""/> 
					</td>
		            <td colspan=2 style="border:0" >
						<ts-button id="ibtnReport" text="Report" alt="C.V Report" img="excel" onclick="OnReport()" /> 
					</td>		            
				</tr >
		        <tr  style="border:1;height:80%">
		            <td colspan=9 style="width:100%;height:100%">
		               <table border=1 width=100% style="height:100%" cellspacing=0 border=0>
		                    <tr>
		                        <td>
		                            <ts-grid  id="grdEmployee" rowClick="OnClickRow(sender,event)"> 
										<columns>	
												<column text="PK"			datafield="PK" 			    width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
												<column text="V"			datafield="SELECT" 			width="150" 	columntype="checkbox" 		cellsalign="left" 		editable="true">					</column>		
												<column text="FULL NAME" 	datafield="FULL_NM" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable="true">					</column>
												<column text="Emp ID" 		datafield="RELATION" 		width="150" 	columntype="text" 			cellsalign="left" 		editable="true">					</column>
												<column text="JOIN DATE"	datafield="BIRTH_DATE" 		width="150" 	columntype="date" 			cellsalign="left" 		editable="true">					</column>
												<column text="PERSON ID"	datafield="JOB" 			width="150" 	columntype="textbox" 		cellsalign="left" 		editable="true">					</column>
											</columns>	
									</ts-grid>
		                        </td>
		                    </tr>
		               </table>
		            </td>
		        </tr>
	        </table>
			</div>
	    </td>     
        <td  id="idRightDiv" align="top" height="100%">  
			<div >
            <table  valign="top" border=0 cellpadding=0 cellspacing=0 width='100%' style="height:100%" > 
				<tr style="height:4%" >
					<td colspan=2 width="2%" align="right"></td>
				    <td colspan=10 width="10%" align="left">Emp ID</td>
				    <td colspan=20 width="20%"> <ts-textbox id="txtEmpID"  styles='width:100%' /></td>
					<td colspan=2 width="2%" align="right"></td>
				    <td colspan=10 width="10%"  align="left">Old Code</td>
				    <td colspan=20 width="20%"> <ts-textbox id="txtOldCode" styles='width:100%' /></td>
					<td colspan=2 width="2%" align="right"></td>
				    <td colspan=10 width="10%" align="left"></td>
				    <td colspan=26 width="26%" style="border:0"  rowspan="5" align="center">
						<ts-image id="imgFile"  styles="width:150;height:130"  styles="width:120;height:130"  />
					</td>
			    </tr>
			    <tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Full Name
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtFullName"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Card ID
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtCardID" styles='width:100%' />
					</td>
				    
			    </tr>
			    <tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Cur Address
					</td>
				    <td colspan=52 width="52%"> 
						<ts-textbox id="txtCurAdd"  styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Per Address
					</td>
				    <td colspan=52 width="52%"> 
						<ts-textbox id="txtPerAdd"  styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Organization
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtOrganization"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Group
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtGroup" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Emp Type
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtEmpType"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Telephone
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtTel" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Sex
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtSex" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Status
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtStatus"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Join Date
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtJoinDate" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Left Date
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtLeftDate" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Nation
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtNation"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Birth Place
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtBirthPlace" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Birth Date
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtBirthDate" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Person ID
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtPersonID"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Person ID Place
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtPersonIDPlace" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Issued Date
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtIssuedDate" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Position
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtPos"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Job
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtJob" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Education
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtEdu" styles='width:100%' />
					</td>
			    </tr>
				<tr style="height:4%" >
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%" align="left">
						Ethnic
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtEthnic"  styles='width:100%' />
					</td>
					<td colspan=2 width="2%" >
						
					</td>
				    <td colspan=10 width="10%"  align="left">
						Religion
					</td>
				    <td colspan=20 width="20%"> 
						<ts-textbox id="txtReligion" styles='width:100%' />
					</td>
				    <td colspan=2 width="2%" >
					
					</td>
				    <td colspan=10 width="10%"  align="left">
						Marital Status
					</td>
				    <td colspan=24 width="24%"> 
						<ts-textbox id="txtMarital" styles='width:100%' />
					</td>
			    </tr>
			    <tr  style="height:56%">
			        <td colspan=100 >
			             <gw:tab id="idTab"  >
				            <table  name="Experience" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <gw:grid   
                                            id="grdExperience"  
                                            header="_PK|_EMP_PK|NO|COMPANY'S NAME|START DATE|END DATE|POSITION|DUTIES|SALARY|REMARK"   
                                            format="0|0|0|0|0|0|0|0|1|0"  
                                            aligns="1|0|1|0|0|0|0|0|0|0"  
                                            defaults="||||||||"  
                                            editcol="0|0|0|1|1|1|1|1|1|1"  
                                            widths="1000|2500|1000|2500|1500|1500|1500|1500|1500|1500"  
                                            styles="width:100%; height:100%"   
                                            sorting="T"   
                                            param="0,1,2,3,4,5,6,7,8" /> 
					                </td> 
					            </tr>
				            </table>
				            <table  name="Education" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <gw:grid   
                                            id="grdEDU"  
                                            header="_PK|_EMP_PK|NO|SCHOOL NAME/MAJOR|START DATE|END DATE|MAJOR|RESULT|REMARK"   
                                            format="0|0|0|0|0|0|0|0|0"  
                                            aligns="1|0|1|0|0|0|0|0|0"  
                                            defaults="|||||||"  
                                            editcol="0|0|0|1|1|1|1|1|1"  
                                            widths="1000|500|500|3000|1500|1500|2000|2000|1500"  
                                            styles="width:100%; height:100%"   
                                            sorting="T"   
                                            /> 
					                </td> 
					            </tr>
				            </table>
				            <table  name="Family" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						                <gw:grid   
                                             id="grdFamily"  
                                            header="_PK|_EMP_PK|NO|NAME|RELATION|BIRTH DATE|JOB|SALARY|REMARK"   
                                            format="0|0|0|0|0|0|0|1|0"  
                                            aligns="1|0|1|0|0|0|0|0|0"  
                                            defaults="|||||||"  
                                            editcol="0|0|0|1|1|1|1|1|1"  
                                            widths="1000|2000|1000|2500|2000|2500|2000|1700|2000"  
                                            styles="width:100%; height:100%"   
                                            sorting="T"   
                                       /> 
						            </td>
						        </tr>
				            </table>
				            <table   name="Note" align = top  cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
					            <tr> 
					                <td align = top  >
						               <gw:grid   
                                           id="grdOther"  
                                            header="_PK|_EMP_PK|NO|NOTE 1|NOTE 2|NOTE 3|NOTE 4|NOTE 5"   
                                            format="0|0|0|0|0|0|0|0"  
                                            aligns="1|0|1|0|0|0|0|0"  
                                            defaults="||||||"  
                                            editcol="0|0|0|1|1|1|1|1"  
                                            widths="1000|2500|1000|2500|2500|2500|2500|2500"  
                                            styles="width:100%; height:100%"   
                                            sorting="T"   
                                            param="0,1,2,3,4,5,6,7" /> 
					                </td> 
					            </tr>
				            </table>
				        </gw:tab>
			        </td>
			    </tr>
			</table> 
			</div>
        </td>
    </tr>
</table>
<ts-img status="expand" id="imgArrow" src="../../../../system/images/prev_orange.gif" style="cursor:hand;position:absolute;left:0;top:0;" onclick="OnToggle()"/> 
<ts-textbox id="txtEmpPK" styles="display:none"/>
<ts-textbox id="txtOrg" styles="display:none"/>	
<ts-textbox id="txtOrgData" styles="display:none"/>
<ts-textbox id="txtUpperOrg" styles="display:none"/>
<ts-textbox id="txtGroupData" styles="display:none"/>
<ts-textbox id="txtPhoto_PK" styles="display:none"/>
<ts-textbox id="iduser_pk" styles="display:none"/>
<ts-textbox id="txtHr_level" styles="display:none"/>
<ts-textbox id="txtReport_tmp" styles="display:none"/>
<ts-textbox id="txtReportCode_tmp" styles="display:none"/>
<ts-textbox id="txt_sal_security" styles="display:none"/>
<ts-textbox id="txtOrg_tmp_pk" text="" styles="display:none"  />
</body>
</html>
