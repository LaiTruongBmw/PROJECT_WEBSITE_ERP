<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>USER ENTRY</title>
<script type="text/javascript">

	
	function BodyInit()
	{	
		dso_sel_lst_gsau00100_0.Call("SELECT");
	}
	function OnDataReceive(obj)
	{ 
		
	}
	
	function OnSearch()
	{
		dso_sel_grd_gsau00100_0.Call("SELECT");
	}
	function OnInsert()
	{ //alert(lstClient.value);
	  if(dso_ctl_gsau00100_0.GetStatus()!= 20)
	  {
		  
		dso_ctl_gsau00100_0.StatusInsert();
		chkActive.value = "Y";
		txtPwd.value="";
		txtConfirmPwd.value="";
		//txtClientDB.value = System.getAppUser();
		//alert(txtClientDB.value);
		//lstLanguage.value="ENG";
		txtUID.value ="";
		_txtEmpPk.value = "";
		txtName.value = "";
		txtTel.value = "";
		txtMobile.value = "";
		txtLivingAddr.value = "";
		txtGroup.value = "";
		txtJob.value = "";
		txtPosition.value = "";
		txtDept.value = "";
		lstUserType.value="";
	  }
	  else
	  {
	    alert("Now you can register new user.");
	  }
		
	}
	function OnSave()
	{
		if (txtPwdEnc.value != txtPwd.value) 
		{
			txtPwdEnc.value = b64_md5(txtPwd.value);
		}
		alert(txtPwdEnc.value);
		if(confirm("Do you want to save ?"))
		 {
			dso_ctl_gsau00100_0.Call();
		 }
		
	}
	function checkData()
	{
		if (txtUID.value == "") 
		{
			alert("UserID cann't be blank.");
			return false;
		}
		if(_txtEmpPk.value == "" && lstUserType.value == "0") {
			alert("Not found mapping employee. Please remapping employee for this account.");
			return false;
		}	
		if(txtName.value == "") {
			alert("Employee name cann't be blank.Please input name for this user.");
			return false;
		}	
		if (txtPwd.value == "") {
			alert('Password cannt be blank.');
			return false;
		}
		if (txtPwd.value != txtConfirmPwd.value) {
			alert('Password and Confirm password differ. Please re-enter.');
			return false;		
		}
		if (lstLanguage.value == "") {
			alert('Default language cannt be blank.');
			lstLanguage.GetControl().focus();
			return false;
		}	
		if(lstUserType.value!="0")
		{
	        if (txtDept.value== "") {
			    alert('Please input the name of the department.');
			    return false;
		    }
		    if (txtGroup.value == "") {
			    alert('Please input the name of the group.');
			    return false;		
		    }
		    
		} 
		
		return true;
	}
	function LoadUserDetail(sender,event)
	{ 
		
		var rowIndex = event.row;
		txtPk.value = grdEmployee.GetGridData(rowIndex, "PK");
		dso_ctl_gsau00100_0.Call("SELECT");
	} 
	function OnGetEmp()
	{ 
		
		var url = "/system/index.gw?openType=F&objId=stgsau00101";
	
		System.OpenModal(  url , 850, 990 , 'Select employee',document,callBack) ;

		
	}
	function callBack()
	{   	var o = System.getDataParam();

		if(o!=null && o.length>0)
		{
			
					_txtEmpPk.value = o[0];
					txtName.value = o[2];
					txtTel.value = o[6];
					txtMobile.value = o[8];
					txtLivingAddr.value = o[7];
					txtGroup.value = o[9];
					txtJob.value = o[5];
					txtPosition.value = o[4];
					txtDept.value = o[1];
					
			
		}
		
		
	}
</script>

<body bgcolor='#DEE8F7'  >

<ts-data id="dso_sel_lst_gsau00100_0" onreceive="OnDataReceive(this)"> 
	<xml> 
	    <dso type="list" parameter="" function="st_hr_sel_lst_gsau00100_0">
	        <data-inputs>
                <data-input bind="txtUserPK" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstClient"></data-output>
            	<data-output bind="lstUserType"></data-output>
            	<data-output bind="lstLanguage"></data-output>
            	<data-output bind="lstAccount"></data-output>
            	<data-output bind="lstFinancial"></data-output>
            	<data-output bind="lstSale"></data-output>
            	<data-output bind="lstProduction"></data-output>
            	<data-output bind="lstInventory"></data-output>
            	<data-output bind="lstPurchasing"></data-output>
            	<data-output bind="lstHR"></data-output>
            	<data-output bind="lstExecutive"></data-output>
				<data-output bind="lstClient_S"></data-output>
            </data-outputs> 
	    </dso> 
	</xml> 
</ts-data>

<ts-data id="dso_sel_grd_gsau00100_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter=""  
        	function="st_hr_sel_grd_gsau00100_0"
        	procedure="">
            <data-inputs bind="grdEmployee">
                <data-input bind="txtEmpID_S" ></data-input>
                <data-input bind="txtEmpName_S" ></data-input>
                <data-input bind="chkActive_S" ></data-input>
                <data-input bind="lstClient_S" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="grdEmployee"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<ts-data id="dso_ctl_gsau00100_0" onreceive="OnDataReceive(this)"> 
    <xml>
        <dso type="control" parameter="-"  
        	function="st_hr_sel_ctl_gsau00100_0" 
        	procedure="st_hr_upd_ctl_gsau00100_0"> 
            <data-inouts> 
                <data-inout bind="txtPk" ></data-inout>
                <data-inout bind="lstClient" ></data-inout>
	            <data-inout bind="txtUID" ></data-inout>
	            <data-inout bind="txtName" ></data-inout>
	            <data-inout bind="txtPwdEnc" ></data-inout>
	            <data-inout bind="lstUserType" ></data-inout>
	            <data-inout bind="lstLanguage" ></data-inout>
	            <data-inout bind="txtDept" ></data-inout>
	            <data-inout bind="txtGroup" ></data-inout>
	            <data-inout bind="txtJob" ></data-inout>
	            <data-inout bind="txtPosition" ></data-inout>
	            <data-inout bind="txtTel" ></data-inout>
	            <data-inout bind="txtMobile" ></data-inout>
	            <data-inout bind="txtLivingAddr" ></data-inout>
	            <data-inout bind="txtUrgentContact" ></data-inout>
	            <data-inout bind="_txtEmpPk" ></data-inout>
	            <data-inout bind="chkAnnouncement" ></data-inout>
	            <data-inout bind="chkSecurityAdmin" ></data-inout>   
	            <data-inout bind="chkActive" ></data-inout>
	            <data-inout bind="dtStartDT" ></data-inout>
	            <data-inout bind="dtEndDT" ></data-inout>
	            <data-inout bind="lstAccount" ></data-inout>
	            <data-inout bind="lstFinancial" ></data-inout>
	            <data-inout bind="lstSale" ></data-inout>
	            <data-inout bind="lstProduction" ></data-inout>
	            <data-inout bind="lstInventory" ></data-inout>   
	            <data-inout bind="lstPurchasing" ></data-inout>
	            <data-inout bind="lstHR" ></data-inout>
	            <data-inout bind="lstExecutive" ></data-inout>
	            
	       </data-inouts>
        </dso> 
    </xml> 
</ts-data>
<table id="main" style="width:100%;height:100%" cellpadding="2" cellspacing="1" border="1">
        <tr>
            <td id="left" style="width:30%;height:100%" valign="top" rowspan="2">
                
                    <table style="width:100%;height:100%;border:1;" cellpadding="0" cellspacing="0">
                        <tr style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;" >
                            <td colspan=25 style="width: 25%" align="left" >Records :</td>
                            <td colspan=25 style="width: 25%" align="left" style="width:25%">
                                <gw:label id="lblRecord"  text="" />
                            </td>
                            <td colspan=25 style="width: 25%" ></td>
                            <td colspan=25 style="width: 25%">
                            	<ts-button id="ibtnSearch" img="search"  text="Search"  onclick="OnSearch()" imgtype="0">Search </ts-button>
                            </td>
                        </tr>
                        <tr style="padding-left:5px;padding-right:5px;padding-top:5px;">
                            <td colspan=100 style="width: 100%">
                                <table style="width: 100%; height: 100%" border="0">
									<tr>
                                        <td colspan=25 style="width: 25%" >
                                            Client 
                                        </td>
                                        <td colspan=75 style="width:75%">
                                           <ts-list id="lstClient_S" valuemember="CODE" displaymember="CODE_NM" emptyvalue="" emptytext="" emptytextpoint="first" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan=25 style="width: 25%" >
                                            User ID
                                        </td>
                                        <td colspan=75 style="width:75%">
										    <ts-textbox id="txtEmpID_S" style="width: 100%;" text="" keyPressed="OnSearch()"></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan=25 style="width:25%">
                                            User Name
                                        </td>
                                        <td colspan=75 style="width:75%">
										   <ts-textbox id="txtEmpName_S" style="width: 100%;" text="" keyPressed="OnSearch()"></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan=25 style="width: 25%">
                                            Active Y/N
                                        </td>
                                        <td colspan=75 style="width: 75%">
                                           <ts-checkbox id="chkActive_S" defaultvalue="Y|N" value="Y" onchange="OnClick(this)" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="height: 96%">
                            <td colspan=100  style="width: 100%;height:100%" >
                                <ts-grid id="grdEmployee" auto-size-mode="Headers" headersRowsCount="1" rowClick="LoadUserDetail(sender,event)" style="width:100%;height:100%;">
										<columns>	
											<column text="PK"				datafield="PK" 			width="150" 		columntype="textbox" 		cellsalign="left" 	editable=false hidden="true">						</column>					
											<column text="CLIENT"			datafield="CLIENT" 			width="150" 		columntype="textbox" 		cellsalign="left" 	editable=false>						</column>
											<column text="USER ID" 			datafield="USER_ID" 				width="150" 	columntype="textbox" 		cellsalign="left">										</column>
											<column text="USER NAME" 		datafield="USER_NAME" 			width="150" 	columntype="textbox" 			cellsalign="left" 	editable="false">					</column>
											<column text="EMPLOYEE ID"		datafield="EMPLOYEE_ID" 				width="150" 	columntype="textbox" 			cellsalign="left" 	editable="false">					</column>
											<column text="MOBILE" 			datafield="MOBILE" 				width="150" 		columntype="textbox" 			cellsalign="left" 	editable="false">					</column>
											<column text="ADDRESS" 			datafield="ADDRESS" 				width="150" 	columntype="textbox" 		cellsalign="left" 		editable=false>						</column>						
											
										</columns>
								</ts-grid>
                            </td>
                        </tr>
                    </table>
               
            </td>
            <td id="right" style="width: 70%" valign="top">
                    <table style="width:100%;height:100%;border:0;" cellpadding="0" cellspacing="0" border="0" valign="top">
                    	<tr style="height: 5%">
                    		<td colspan="20" width="20%"><gw:label id="lblStatus" /></td>
	                        <td colspan="10" width="10%" >Client</td>
	                        <td colspan="50" width="50%">
	                            <ts-list id="lstClient" valuemember="CODE" displaymember="CODE_NM" emptyvalue="" emptytext="" emptytextpoint="first" />
	                        </td>
	                        <td colspan="11" width="11%"></td>
	                        <td colspan="3" width="3%">
	                            <ts-button id="ibtnNew" img="new"  text="Insert"  onclick="OnInsert()" imgtype="0"> Insert </ts-button>
	                        </td>
	                        <td colspan="3" width="3%">
	                            <ts-button id="ibtnUpdate" img="save"  text="Save"  onclick="OnSave()" imgtype="0"> Save </ts-button>
	                        </td>
	                        <td colspan="3" width="3%">
	                            <ts-button id="ibtnDelete" img="delete"  text="Delete" onclick="OnClick(this)" imgtype="0"> Delete </ts-button>
	                        </td>
                    	</tr>
                        <tr style="height:95%">
	                        <td colspan="100" width="100%" >
	                            <fieldset style="padding: 5">
	                                <legend><font color="black"><b>Copy User Role Information</b></font></legend>
	                                <table width="100%" height="5%">
	                                    <tr>
	                                        <td width="5%" style="white-space:nowrap;" align="center">From user</td>	
											<td width="30%" style="padding-left:5px"><ts-input id="txtFromUserID" styles="width:99%" /></td>	
											<td width="5%" style="white-space:nowrap;padding-left:5px">Keep Exists Role</td>	
											<td width="5%" style="white-space:nowrap">
												<gw:radio id="rbKeepRole" value="Y" > 
													<span value="Y">Yes</span>
													<span value="N">No</span>
												</gw:radio>
											</td>	
											<td width="45%" align="left" style="padding-left:5px">
							                                            <ts-button id="ibtnCopy" img="popup"  text="Copy"  onclick="OnClick(this)"/>
							                                        </td>
								        </tr>
							        </table>
							     </fieldset>
							     <fieldset style="padding: 5">
                                <legend><font color="black"><b>User Information</b></font></legend>
                                <table width="100%" >
                                    <tr>
                                        <td>
                                            <table width="100%">
                                                <tr>
                                                    <td width="15%" align="left">User ID</td>
                                                    <td width="35%">
                                                        <ts-input id="txtUID" styles="width:99%" csstype="mandatory"  />
                                                    </td>
                                                    <td width="15%" align="left">
                                                     	<ts-label id="lblEmpID" style="font-size: 9pt; color: #3c86e8; font-weight: bold" onclick="OnGetEmp(0)">Emp Name</ts-label>   
                                                    </td>
                                                    <td  colspan="2" width="32%">
                                                        <ts-input id="txtName" styles="width:100%" csstype="mandatory" />
                                                    </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td width="15%" align="left">
                                                        Password</td>
                                                    <td width="35%">
                                                    	<ts-textbox  type="password" class="form-control password" name="password" id="txtPwd" ></ts-textbox>
                                                    </td>
                                                    <td width="15%" align="left">
                                                        User Type</td>
                                                    <td colspan="2">
                                                        <ts-list id="lstUserType" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;" onchange="OnClick(this)"> </ts-list>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="15%" align="left">
                                                        Confirm Pwd</td>
                                                    <td width="35%">
                                                    	<ts-textbox  type="password" class="form-control password" name="password" id="txtConfirmPwd" ></ts-textbox>
                                                    </td>
                                                    <td width="15%" align="left">
                                                        Language</td>
                                                    <td colspan="3" width="35%">
                                                        <ts-list id="lstLanguage" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;background-color : #fffaaf;"> 
                                                     </ts-list>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="15%">
                                                        Dept</td>
                                                    <td width="35%">
                                                        <ts-input id="txtDept" csstype="mandatory" styles="width: 100%;" />
                                                    </td>
                                                    <td width="15%">
                                                        Group</td>
                                                    <td colspan="3" width="35%">
                                                        <ts-input id="txtGroup" csstype="mandatory" styles="width: 100%;" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="15%">
                                                        Job</td>
                                                    <td width="35%">
                                                        <ts-input id="txtJob" csstype="mandatory" styles="width: 100%;" />
                                                    </td>
                                                    <td width="15%">
                                                        Position</td>
                                                    <td colspan="3" width="35%">
                                                        <ts-input id="txtPosition" csstype="mandatory" styles="width: 100%;" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="15%">
                                                        Tel No</td>
                                                    <td width="35%">
                                                        <ts-input id="txtTel" styles="width: 100%;" />
                                                    </td>
                                                    <td width="15%">
                                                        Mobile No</td>
                                                    <td colspan="3" width="35%">
                                                        <ts-input id="txtMobile" styles="width: 100%;" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                   <td width="15%">
                                                        Living Addr</td>
                                                    <td width="35%">
                                                        <ts-input id="txtLivingAddr" styles="width: 100%;" />
                                                    </td>
                                                    <td width="15%">
                                                        Contact</td>
                                                    <td colspan="3"  width="35%">
                                                        <ts-input id="txtUrgentContact" styles="width: 100%;" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </fieldset>
							     
							<fieldset style="padding: 5">
                                <legend><font color="black"><b>Security Information</b></font></legend>
                                <table width="100%" height="40%">
                                    <tr>
                                        <td colspan="4">
                                            <table width="100%">
                                                <tr>
                                                    <td width="1%" align="left">
                                                        <ts-checkbox id="chkAnnouncement" mode="01" />
                                                    </td>
                                                    <td width="15%">Announcement</td>
                                                    <td width="1%" align="left">
                                                        <ts-checkbox id="chkSecurityAdmin" mode="01" />
                                                    </td>
                                                    <td width="15%">Sec.Admin</td>
                                                    <td width="1%">
                                                        <ts-checkbox id="chkActive" value="0" mode="01" />
                                                    </td>
                                                    <td width="15%">Active</td>
                                                    
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width=15%>Start Date</td>
                                        <td width=35%>
                                            <ts-datebox id="dtStartDT"  maxlen = "10" text="" styles='width:100%'  required="false" />
                                        </td>
                                        <td width=15%>End Date</td>
                                        <td width=35%>
                                            <ts-datebox id="dtEndDT"  maxlen = "10" text="" styles='width:100%'  required="false" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width=15%>Accounting</td>
                                        <td width=35%>
                                            <ts-list id="lstAccount" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                        <td width=15%>Financial</td>
                                        <td width=35%>
                                            <ts-list id="lstFinancial" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"></ts-list>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">Sales</td>
                                        <td>
                                            <ts-list id="lstSale" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"></ts-list>
                                        </td>
                                        <td align="left">Production</td>
                                        <td>
                                            <ts-list id="lstProduction" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">Inventory</td>
                                        <td>
                                            <ts-list id="lstInventory" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                        <td align="left">Purchasing</td>
                                        <td>
                                            <ts-list id="lstPurchasing" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">HR</td>
                                        <td>
                                            <ts-list id="lstHR" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                        <td align="left">Executive</td>
                                        <td>
                                            <ts-list id="lstExecutive" valuemember="CODE" displaymember="CODE_NM" styles="width:100%;"> </ts-list>
                                        </td>
                                    </tr>
                                </table>
                            </fieldset>
                        	</td>
                    	</tr>
                        
                    </table>
               
            </td>
        </tr>
    </table>
 <ts-textbox id="txtUserPK" style="display: none"></ts-textbox>
 <ts-textbox id="txtHRLevel" style="display: none"></ts-textbox>
<ts-textbox id="txtFormObjID" style="display: none"></ts-textbox>
<ts-textbox id="txtCompanyPK" style="display: none"></ts-textbox>
<ts-textbox id="txtEmployeePK" style="display: none"></ts-textbox>
<ts-textbox id="txtPk" style="display: none"></ts-textbox>
<ts-textbox id="txtPwdEnc" style="display: none"></ts-textbox>
<ts-textbox id="_txtEmpPk" style="display: none"></ts-textbox>
<ts-list id="lstDept" valuemember="CODE" displaymember="CODE_NM" style="display: none"> </ts-list>
</body>
</html>