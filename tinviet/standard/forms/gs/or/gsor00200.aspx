<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>EMPLOYEE ENTRY</title>

<script type="text/javascript">

function BodyInit()
{		
		/*
		txtUserPK.value = System.getSessionUserPk();		
		txtHRLevel.value = System.getSessionHrLevel();		
		txtFormObjID.value = "stgshr00200";	
		txtCompanyPK.value = System.getSessionCompanyPk();
		txtEmployeePK.value = System.getSessionEmployeePk();  
		//alert(System.getSessionCompanyPk());
		var date = new Date();
		l_cur_date = moment(date).format('YYYYMMDD');
		txtUpperDept.disabled= true;
		txtManager_ID.disabled = true;
		txtManager_Name.disabled = true;
		
		dso_lst_stgshr00200_0.Call("SELECT");
*/		
		BindingDataList();
}
function OnDataReceive(obj)
{ 
	if(obj.id == "dso_lst_gsor00200_1")
	{
		dso_tre_gsor00200_0.Call("SELECT");
	}
}
function BindingDataList()
{
	
	dso_lst_gsor00200_1.Call("SELECT");
	
}
function OnChangeShow() 
{
}
function selectNode(sender,event)
{	
		txtOrgPk.value= sender.value;
		//txtParentPK1.value = sender.value + '';
		//idPName1.value=sender.selectedNodeText;
	    dso_ctl_gsor00200_0.Call('SELECT');
}
function OnAdd()
	{
		var upperDeptPk     = txtOrgPk.text;
	    var upperDept       = txtUpperDept.text= txtOrgName.text;
		
	    dso_ctl_gsor00200_0.StatusInsert();
		txtCompanyPk.text   =   lstCompany.value;
	   	txtUpperOrgPk.text = upperDeptPk;
		txtUpperDept.text   = upperDept;
		//alert(txtCompanyPk.text); alert(upperDeptPk);
		txtOrgPk.value 	="";
		txtOrgId.value 	= "";
		txtOrgName.value = "";
		txtOrgLocalName.value = "";
		txtOrgForeignName.value = "";
		lstOrgType.value		= "";
		dtStartDate.value		= l_cur_date;
		dtEndDate.value		= "";
		txtareaRemark.value	= "";
		txtSeq.value			= "";
		txtManager_PK.value	= "";
		lstManager_Kind.value	= "";
		txtManager_ID.value	= "";
		txtManager_Name.value	= "";
		lstPaySal.value		= "Y";
		txtID_VD.value		= "";
		txtShortName.value	= "";
		lstCostGroup.value	= "";
		lstCostGroupKind.value = "";
		txtCost_Center_pk.value = "";
		txtCostCenter.value	= "";
	}
function OnSave()
	 {
		status = "save";
		 if(CheckValid())
			 {
				 if(confirm("Do you want to save ?"))
				 {
					 dso_ctl_gsor00200_0.Call();
					
				 }	 
			 }
		 
	 }
function OnDelete()
{
		 if(confirm("Do you want to delete ?"))
		 {	
			 status = "save";
			 dso_ctl_gsor00200_0.StatusDelete();
			 dso_ctl_gsor00200_0.Call();
			
		 }	 
}
function CheckValid()
{
		if(txtOrgId.value =="")
			{
				alert("Organization ID must input !");
				txtOrgId.focus();
				return false
			}
		if(txtOrgName.value =="")
		{
			alert("Organization name must input !");
			txtOrgName.focus();
			return false
		}
		if(lstOrgType.value =="")
			{
				alert("Organization type must input !");
				lstOrgType.focus();
				return false
			}
		if(lstPaySal.value == "")
			{
				alert("Pay salary must input !");
				lstPaySal.focus();
				return false
			}
		return true;
}
function OnClear()
{
		txtManager_PK.value = "";
		txtManager_ID.value = "";
		txtManager_Name.value = "";	
}
function OnShowManager()
	{ 
		
		var url = "/system/index.gw?openType=F&objId=stgsor00201&txtcompanypk="+ lstCompany.value;
		//var url = "/tinviet/forms/gs/or/gsor00201.aspx?code=" + strtemp ;
	
		System.OpenModal(  url , 850, 990 , 'Select Manager',document,callBack) ;

		
	}
function callBack()
	{   	
		var o = System.getDataParam();

		if(o!=null && o.length>0)
		{
			
			txtManager_PK.value = o[0];
			txtManager_ID.value = o[3];
			txtManager_Name.value = o[2];	
		}
		
		
	}
function OnShowPopup()
{
	 var url = "/standard/forms/hr/co/hrco00100.aspx"; //pop up EMPLOYEE
	 var obj;
	 obj = System.OpenModal(  url , 900, 700, 'GET EMPLOYEE', document,OnClosePopupManager);
	 if (obj!=null)
	 {
	
    
	 }
	 else
	 {
		
	 }
        
 }
 function OnClosePopupManager()
 {
	var param = System.getDataParam();
	
    if(param[1]!=null)
    {
			txtManager_ID.value=param[0];
			txtManager_Name.value=param[1];
		
    }
 
 }
</script>
</head>
<ts-data id="dso_tre_gsor00200_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="tree" function="st_hr_sel_tre_gsor00200_0"   procedure="">
            	<data-inputs> 
            		<data-input bind="lstCompany" ></data-input>
            		<data-input bind="txtUserPK" ></data-input>
					<data-input bind="lstShow" ></data-input>
            	</data-inputs>  
				<data-outputs bind="idTreOrg" > </data-outputs>  
            </dso> 
        </xml> 
</ts-data>
<!--------------------------------------------------------------------->
<ts-data id="dso_lst_gsor00200_1" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="st_hr_sel_lst_gsor00200_1">
            <data-inputs>
                <data-input bind="txtUserPK" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstCompany"></data-output>
            	<data-output bind="lstOrgType"></data-output>
            	<data-output bind="lstManager_Kind"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<!-------------------------------------------------------------------->
<ts-data id="dso_ctl_gsor00200_0" onreceive="OnDataReceive(this)"  > 
    <xml> 
        <dso type="control" parameter="-"  function = "ST_HR_SEL_GSOR00200_0" procedure="ST_HR_UPD_GSOR00200_0"> 
              <data-inouts> 
                <data-inout bind="txtOrgPk" />
				<data-inout bind="txtUpperOrgPk" />
				<data-inout bind="txtUpperDept" /> 
				<data-inout bind="txtOrgId" />
				<data-inout bind="txtOrgName" />
				<data-inout bind="txtOrgLocalName" /> 
				<data-inout bind="txtOrgForeignName" />
				<data-inout bind="lstOrgType" />
				<data-inout bind="dtStartDate" /> 
				<data-inout bind="dtEndDate" /> 
				<data-inout bind="txtareaRemark" />
				<data-inout bind="txtCompanyPk" /> 
				<data-inout bind="txtSeq" /> 
				<data-inout bind="txtManager_PK" /> 
				<data-inout bind="lstManager_Kind" /> 
				<data-inout bind="txtManager_ID" /> 
				<data-inout bind="txtManager_Name" /> 
				<data-inout bind="lstPaySal" />
				<data-inout bind="txtID_VD" />
				<data-inout bind="txtShortName" />
				<data-inout bind="lstCostGroup" />
				<data-inout bind="lstCostGroupKind" />
				<data-inout bind="txtCost_Center_pk" /> 
				<data-inout bind="txtCostCenter" />
            </data-inouts>
        </dso> 
    </xml> 
</ts-data> 
<!--------------------------------------------------->
<ts-data id="dsoCheckDeptId"  onreceive="OnDataReceive(this)" > 
        <xml> 
            <dso  type="process"  procedure="ST_GS_PRO_GSOR00200_1" > 
               	<data-inputs> 
                    <data-input bind="txtOrgPk" /> 
                    <data-input bind="txtOrgId" /> 
               	</data-inputs> 
               <data-outputs>
                    <data-output bind="txtCountOrgId" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!-------------------------------------------------------->
<body >


<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="1">
	<tr width="100%" height="10%">
		<td width="30%">
						<!-- Table1 contain master buttons and text box -->
						<table id="LeftTopTB" width="100%">
							<tr>
								<td width="100%">
									<table id="LeftTopTB1" height="15" width="100%" border="0">
										<tr>
											<td width="9%" align="left">Company</td>
											<td width="27%">
                                                    <data>
                                                   <ts-list id="lstCompany" style="width: 100%;" displaymember="PARTNER_NAME" valuemember="PK" maxlen = "100" onchange="OnChange_com()"></ts-list>
													</data>
										    </td>
											<td width="4%" align="right"><ts-imgBtn id="btnSearch" img="search"  alt="search" onclick="query()" /> </td>
										</tr>
									</table>
								</td>
							</tr>
							
						</table>
						<!-- End of Table1--->
		</td>
		<td width="70%">
					<!-- Table2 contain detail buttons and text box -->
					<table id="RightTopTB" width="100%">
						<tr>
							<td width="30%"><ts-list id="lstShow" styles='width:80%' onchange="OnChangeShow()" ><data>|01|Show All|02|Show Available</data> </ts-list></td>
							<td width="30"></td>
							<td width="4%"><ts-button img="new" alt="Add New"  id="btnAddSub" 	onclick="OnAdd()" imgtype="0" >Add New</ts-button></td>	
							<td width="4%">
							    <ts-button img="save" id="ibtnUpdate"   alt="Save"  onclick="OnSave()" imgtype="0">Save</ts-button>
							</td>
							<td width="4%">
							    <ts-button img="delete"  alt="Delete"     id="btnDelete" 	onclick="OnDelete()"  imgtype="0">Delete</ts-button>
							</td>
						</tr>
					</table>
		</td>
	
	</tr>
	<tr width="100%" height="90%" valign="top">
		<td width="30%" height="100%"> 
			<table id="LeftBottomTB" width="100%" height="100%"  >
				<tr>
					<td width="100%" valign="top"> 
						<ts-classictreeview  id="idTreOrg" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="selectNode(sender,event)" ></<ts-classictreeview>
					</td>
				</tr>
			</table>			
		</td>
		<td width="70%" valign="top">
						<table id="RightBottomTB" width="100%" height="100%"  align="top" >
							<tr>
									<td width="100%" valign="top" > 
										<table width="100%" >
											  <tr> 
												<td width="25%" align="right">Upper Organization</td>
												<td width="75%" colspan=5><ts-textbox id="txtUpperDept"   onkeypress="checkKey()" csstype=""/></td>
											  </tr>
											  <tr> 
												
												  <td width="25%" align="right"><a title="Click here to show Organization summary" onclick="OnShowDeptID()" href="#tips" style="text-decoration : none; color=#0000FF">Organization ID</a></td>
												<td width="75%"  colspan=5><ts-textbox id="txtOrgId"  style='width:100%'    onBlur="OnCheckOrgId()"  onkeypress="checkKey()" csstype="mandatory"/></td>
											  </tr>
											  <tr> 
												<td width="25%" align="right">Organization</td>
												<td width="75%"  colspan=5><ts-textbox id="txtOrgName" maxlen="100" style='width:100%'  onkeypress="" csstype="mandatory"/></td>
											  </tr>
											  <tr> 
												<td width="25%" align="right">Local name</td>
												<td width="75%"  colspan=5><ts-textbox id="txtOrgLocalName" maxlen="100" style='width:100%'  onkeypress="" csstype=""/></td>
											  </tr>
											  <tr> 
												<td width="25%" align="right">Foreign name</td>
												<td width="75%" colspan=5><ts-textbox id="txtOrgForeignName" maxlen="100" style='width:100%'  onkeypress="" csstype=""/></td>
											  </tr>
											  <tr> 
												<td width="25%" align="right">Short Name</td>
												<td width="75%" colspan=5><ts-textbox id="txtShortName" maxlen="" style='width:100%'  onkeypress="" csstype=""/></td>
											  </tr>
											  <tr> 
												<td width="25%" align="right">Type&nbsp;&nbsp;</td>
												<td width="20%" > 
													<ts-list id="lstOrgType" displaymember="CODE_NM" valuemember="CODE" style='width:100%' /> 
												</td>
												
												 <td  width="9%"><a class="eco_link" title="Click choose employee id" onclick="OnShowPopup()" href="#tips" style="text-decoration: none;" class="eco_link" >Manager</a></td>
												<td width="12%"  ><ts-textbox id="txtManager_ID" maxlen="100" style='width:100%'   csstype=""/></td>
											    <td width="30%"  ><ts-textbox id="txtManager_Name" maxlen="100" style='width:100%'  csstype=""/></td> 
											    <td width="3%"  >
														<ts-icon id="btEraser" name="eraser" data-tooltip="Eraser" data-tooltip-position="top" style="font-size:x-large;" onclick="OnClear()"></ts-icon>
												</td> 
											  </tr>
											  <tr> 
												<td width="25%" align="right">Start Date&nbsp;&nbsp;</td>
												<td width="20%" ><ts-datebox id="dtStartDate" maxlen=10 style='width:31%'  lang="1" onchange = "OnCheckDate()" required="false"/></td>
												<td width="22%" colspan=2 align="right">Manager &nbsp;</td>  
												<td width="33%" colspan=2 >
													<ts-list  id="lstManager_Kind" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' csstype="mandatory" />
												</td>
											    
											  </tr>
											  <tr> 
												<td width="25%" align="right">End Date&nbsp;&nbsp;</td>
												<td ><ts-datebox id="dtEndDate" maxlen=10 style='width:31%'  lang="1" onchange = "OnCheckDate()" required="false"/></td>
												<td width="22%" colspan=2 align="right">Pay Salary</td>  
												<td width="33%" colspan=2 >
													<ts-list id="lstPaySal"  style='width:100%'> 
													<data>|Y|Yes|N|No</data>
													</ts-list >
												</td>
											    
											  </tr>
											  <tr> 
												<td width="25%" align="right">Seq &nbsp;</td>
												<td width="25%" ><ts-textbox id="txtSeq" maxlen="10" style='width:100%'  onkeypress="return Numbers(event)" csstype=""/></td>
                                                <td width="25%" colspan=2 align="right">ID VD</td>
												<td width="25%" colspan=2><ts-textbox id="txtID_VD" maxlen="10" style='width:100%'  onkeypress="return Numbers(event)" csstype=""/></td>
											  </tr>
                                            
											  <tr> 
												<td width="25%" align="right">Cost Group</td>
												<td  width="25%" align="right">
                                                        <ts-list  id="lstCostGroup"  style='width:100%' onChange="">
                                                        
                                                        </ts-list >
                                                 </td>
                                                 <td colspan=2 width="25%" align="right">Cost Type</td>
												<td colspan=2  width="25%" align="right">
                                                        <ts-list  id="lstCostGroupKind" style='width:100%' onChange="">
                                                        
                                                        </ts-list >
                                                </td>
											  </tr>
											  <tr> 
												<td width="25%" align="right"><a title="Click here to show cost center" onclick="" href="#tips" >Cost Center</td>
												<td width="75%" colspan=5><ts-textbox id="txtCostCenter" maxlen="" style='width:100%'  onkeypress="" csstype=""/></td>
											  </tr>
											  <tr> 
												<td align="right">Remark&nbsp;&nbsp;</td>
												<td  colspan=5><ts-textbox id="txtareaRemark" maxlen="" style='width:100%'  onkeypress="" csstype=""/></td>
											  </tr>
											  <tr> 
												<td align="right">Image&nbsp;&nbsp;</td>
												<td>
													<ts-image id="imgFile" table_name="TCO_BPPHOTO" procedure="ES_INSERT_IMAGE" styles="width:50%;height:100" />
												</td>
												<td  colspan=3>
												</td>
											  </tr>
										      
										</table>
									</td>			
							</tr>
						</table>
						
		</td>
	</tr>	
</table> 

</body>
<ts-textbox id="txtUserPK" style="display:none"></ts-textbox>
<ts-textbox id="txtHRLevel" style="display:none"></ts-textbox>
<ts-textbox id="txtFormObjID" style="display:none"></ts-textbox>
<ts-textbox id="txtCompanyPK" style="display:none"></ts-textbox>
<ts-textbox id="txtEmployeePK" style="display:none"></ts-textbox>

<ts-textbox id="txtOrgPk" style="display:none"></ts-textbox>
<ts-textbox id="txtUpperOrgPk" maxlen=100 style='width:100%;display:none'   csstype=""/>
<ts-textbox id="txtCompanyPk" maxlen=100 style='width:100%;display:none'   csstype=""/>
<ts-textbox id="txtCountOrgId" maxlen=100 style='width:100%;display:none'   csstype=""/>
<ts-textbox id="idemp_pk" style="display:none"/>
<ts-textbox id="txtManager_PK" style="display:none"/>
<ts-textbox id="imagePK" maxlen="100" style='width:100%;display:none' csstype="" />
<ts-textbox id="txtCost_Center_pk" style="display:none"/>
<ts-textbox id="txtText" text="" style="display: none"></ts-textbox>
</html>