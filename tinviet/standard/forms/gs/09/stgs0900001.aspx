<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>User Entry</title>
    <style type="text/css">
		/*
        legend.legendStyle {
            padding-left: 5px;
            padding-right: 5px;
            font-size: 90%;
            font-color: red;
            background-color: transparent;
            font-weight: bold;
        }

        fieldset.fsStyle {
            font-family: Verdana, Arial, sans-serif;
            font-size: small;
            font-weight: normal;
            height: 100%;
            border: 1px solid #999999;
            padding: 4px;
            margin: 5px;
            padding-bottom: 15px;
            padding-top: 5px;
            vertical-align: middle;
        }

        legend {
            width: auto;
            margin-bottom: 5px;
            border-bottom: 0px;
        }
		/**/
    </style>

    <script type="text/javascript">
function BodyInit()
{ 
    BindingDataList();
   
     AddOnClick();
    OnChangeUserType();
    DisableControl();
	txtClientDB.text = "GENUWIN";//System.getAppUser();
    searchUser(); 
}
function DisableControl()
{
    txtPartnerName.disabled=true;
    txtPartAddress.disabled=true;
    txtPhone.disabled=true;
    txtFax.disabled=true;
    txtEmail.disabled=true;
    //txtWebsite.SetEnable(false);
}
function BindingDataList()
{   
 

 	dsolstLanguage.Call("SELECT");
 	dsolstUserType.Call("SELECT");
 	dsodatatext.Call("SELECT");
}

function searchUser()
{
	txtClientDB.value = "GENUWIN";//System.getAppUser();
	getUser.Call("SELECT");
}
var num=0;
function openEmpLookup(n)
{  num=n;
	 if(n==1 && lstUserType.value!="0")
		 {
		 alert("Cannot open popup.");
		 return;
		 }
	
	var url = "/system/index.gw?openType=F&objId=stgspustagam0001";
	//alert(url);
	System.OpenModal(  url , 950, 990 , 'Select employee',document,callBack) ;

	
}




function callBack()
{   	var o = System.getDataParam();

	if(o!=null && o.length>0)
	{
	if ( num!= null )
	{       
		if(num== 0) 
		{ txtSearchName.value = o[2];
		
		}
		else 
		{
			txtEmpPk.value = o[0];
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
	}
	
	
}


function openUserPopup()
{ var url = "/system/index.gw?openType=F&objId=stgspustagam0004";
	//alert(url);
	System.OpenModal(  url , 950, 990 , 'select user',document,callBack1) ;
}




function callBack1()
{   	var o = System.getDataParam();

	if(o!=null && o.length>0)
	{
		txtFromUserID.value=o[2];
		
	}
	
	
}

//==========client===============
function OnShowClient()
{ 
	var url = "/system/index.gw?openType=F&objId=stgspustagam0005";
	System.OpenModal(  url , 950, 990 , 'Select Client',document,callBack1) ;
}




function callBack1()
{   	var o = System.getDataParam();

	if(o!=null && o.length>0)
	{
		
		//txtPartnerName txtPartAddress txtPhone txtFax
		txtClientPk.value=o[0];
		txtPartnerName.value=o[2];
		txtPartAddress.value=o[3];
		txtPhone.value=o[4];
		txtFax.value=o[5];
	}
	
	
}		

/*function loadUserDetail(){
	var row = grdUserList.getselectedrowindex();
	// var row  = grdUserList.row; 
	txtPk.value = grdUserList.GetGridData(row,"pk");
	alert("aaa");
	userEntry.StatusSelect();  
	userEntry.Call("SELECT");
}*/

function loadUserDetail(serder,event){
	console.log(event)
	//var datafile =  event.colNm+"index";
	//txtStaus.value = grdStatus.GetGridData(event.row,datafile);
	txtPk.value = grdUserList.GetGridData(event.row,"PK");
	userEntry.Call("SELECT");
}


function AddOnClick()
{
  if(userEntry.GetStatus()!= 20){
	userEntry.StatusInsert();
	chkActive.value = "T";
	txtPwd.value="";
	txtConfirmPwd.value="";
	txtClientDB.value = System.getAppUser();
	//alert(txtClientDB.value);
	lstLanguage.value="ENG";
	/*txtEmpPk.value = "";
	txtName.value = "";
	txtTel.value = "";
	txtMobile.value = "";
	txtLivingAddr.value = "";
	txtGroup.value = "";
	txtJob.value = "";
	txtPosition.value = "";
	txtDept.value = "";*/
	lstUserType.value="0";
  }
  else{
    alert("Now you can register new user.");
  }
	
}

function SaveOnClick(){
	var status = userEntry.GetStatus();
	
	//alert(status);
	if (status != 40) //40 status delete
	{
	     
		if (checkData()) 
		{
		 
			if (txtPwdEnc.value != txtPwd.value) 
			{
				txtPwdEnc.value = b64_md5(txtPwd.value);
			}
			
	        if(status==20)
	        {
	            userEntry.Call();
	        }
	        else
	        { 
	            
	            userEntry.StatusUpdate();
		        userEntry.Call();
		    }
		}   
	}
	else 
	{
		    
			userEntry.Call();
	} 
}

function checkData(){
	if (txtUserID.value == "") {
		alert("UserID cann't be blank.");
		return false;
	}
	if(txtEmpPk.value == "" && lstUserType.value == "0") {
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

function OnDataReceive(objData)
{
    
    var status = userEntry.GetStatus();
    if(objData.id=="userEntry")
    {
    	
    	//alert(txtPk.value);
        
        /*if( status==20 || status==10 || status==40)
        {
            userEntry.StatusSelect();
            searchUser();
        }
        else
        {*/
            txtPwd.value= txtPwdEnc.value;
            txtConfirmPwd.value= txtPwdEnc.value;
            OnChangeUserType();
        //}
        
    }
    else if(objData.id == "dsoChekUserAvailable"){
     // alert("dddd");
      //console.log(objData.jsonData.objcurdatas[0].records);
    	var arr = objData.jsonData.objcurdatas[0].records;
      //alert(arr);
      
      lblStatus.GetControl().style.fontWeight = "bold";
      
      if(arr.length > 0){
         if(arr[0] == "EXISTED"){
            lblStatus.value = "The user name '"+ arr[1] +"' was existed.";
            lblStatus.GetControl().style.color = "Red";
            btnSave.SetEnable(false);
            alert(lblStatus.value);
         }
         else{
            lblStatus.value = "You can use this user name '"+ arr[1] +"'.";
            lblStatus.GetControl().style.color = "Green";
            btnSave.SetEnable(true);
         }
      }
      else{
            lblStatus.value = "You can use this user name '"+ txtUserID.value +"'.";
            lblStatus.GetControl().style.color = "Green";
            btnSave.SetEnable(true);
      }
      
    }
	else if (objData.id == "dsoCopyRole"){
		if(txtCopyRoleResult.value != ''){
			alert(txtCopyRoleResult.value);
		}
	}
    
}

function DeleteOnClick(){
    if(txtPk.value == ""){
        alert("Please select a user to delete.");
        return;
    }
    if(confirm("Do you want to delete this user?")){
        userEntry.StatusDelete();
        SaveOnClick();
    }
}
function OnChangeUserType(){
   
	//alert(lstUserType.value);
	if(lstUserType.value=="0")
	{
		//alert("fdfds2");
		txtName.readonly=true;
        //btnPopup.isReadonly(false);
    }
    else{
    	//alert("fdfds1");
        txtName.readonly=false;
        //btnPopup.isReadonly(true);
    }
}
function OnCopyRole()
{   
	
    if(confirm("Do you want to copy role?")){
	   if(txtPk.value == ""){
			alert("Please select a destination user to copy role.");
			return;
		}
		if(txtFromUserID.value == ""){
			alert("Please input user id to be copy role.");
			txtFromUserID.GetControl().focus();
			return;
		}
		dsoCopyRole.Call();
	}
}
function change(e){
	
	 var key=e.keyCode || e.which;
	  if (key==13){
		
		  e.preventDefault(); 
		  searchUser();
	  }
	}	  

    </script>
</head>
<!--  BEGIN DSO  -->
<body>

    <ts-data id="dsoCopyRole" onreceive="OnDataReceive(this)"> 
    <xml> 
    	<!-- procedure="es_pro_copy_user_role" -->
        <dso type="process" procedure="stgsfrstagam0001_p_07" > 
            <data-inputs> 
                <data-input bind="txtFromUserID" ></data-input>
				<data-input bind="rbKeepRole" ></data-input>
                <data-input bind="txtPk" ></data-input>
            </data-inputs>
            <data-outputs>
				<data-output bind="txtCopyRoleResult" ></data-output>
			</data-outputs>
        </dso> 
    </xml> 
</ts-data>

    <ts-data id="dsoChekUserAvailable" onreceive="OnDataReceive(this)">  
        <xml> 
            <dso  type="array" parameter="" function="core.stgsfrstagam0001_f_01" procedure="" > 
                <data-inputs  >
                	<data-input bind="txtUserID" ></data-input>
                </data-inputs>
                <data-outputs bind="noneed" ></data-outputs>
            </dso> 
        </xml> 
</ts-data>


    <ts-data id="getUser" onreceive="OnDataReceive(this)"> 
    <xml>
    	<!-- function="gasp.sp_get_user" -->
        <dso type="grid" function="core.stgsfrstagam0001_f_02" > 
            <data-inputs>
                <data-input bind="txtSearchUserID" ></data-input>
                <data-input bind="txtSearchName" ></data-input>
                <data-input bind="chkCheck" ></data-input>
				<data-input bind="txtClientDB" ></data-input>
             </data-inputs>
            <data-outputs bind="grdUserList" ></data-outputs>
        </dso> 
    </xml> 
</ts-data>
    <ts-data id="userEntry" onreceive="OnDataReceive(this)"> 
    <xml>
    	<!-- function="gasp.sp_get_user_entry2" procedure="gasp.sp_user_entry" -->
        <dso type="control" parameter="-"  function="core.stgsfrstagam0001_f_03" procedure="core.stgsfrstagam0001_f_04"> 
            <data-inouts> 
                <data-inout bind="txtPk" ></data-inout>
                <data-inout bind="txtName" ></data-inout>
	            <data-inout bind="txtUserID" ></data-inout>
	            <data-inout bind="txtPwdEnc" ></data-inout>
	            <data-inout bind="lstLanguage" ></data-inout>
	            <data-inout bind="lstUserType" ></data-inout>
	            <data-inout bind="txtTel" ></data-inout>
	            <data-inout bind="txtMobile" ></data-inout>
	            <data-inout bind="txtLivingAddr" ></data-inout>
	            <data-inout bind="chkActive" ></data-inout>
	            <data-inout bind="txtUrgentContact" ></data-inout>
	            <data-inout bind="dtStartDT" ></data-inout>
	            <data-inout bind="dtEndDT" ></data-inout>
	            <data-inout bind="chkAnnouncement" ></data-inout>
	            <data-inout bind="chkSecurityAdmin" ></data-inout>
	            <data-inout bind="lstAccount" ></data-inout>
	            <data-inout bind="lstFinancialManagement" ></data-inout>
	            <data-inout bind="lstSale" ></data-inout>   
	            <data-inout bind="lstProduction" ></data-inout>
	            <data-inout bind="lstInventory" ></data-inout>
	            <data-inout bind="lstPurchasing" ></data-inout>
	            <data-inout bind="lstHR" ></data-inout>
	            <data-inout bind="lstExecutiveInfo" ></data-inout>
	            <data-inout bind="txtEmpPk" ></data-inout>
	            <data-inout bind="txtClientDB" ></data-inout>
	            <data-inout bind="txtPartnerName" ></data-inout>   
	            <data-inout bind="txtPartAddress" ></data-inout>
	            <data-inout bind="txtPhone" ></data-inout>
	            <data-inout bind="txtFax" ></data-inout>
	            <data-inout bind="txtEmail" ></data-inout>
	            <data-inout bind="txtWebsite" ></data-inout>
	            <data-inout bind="txtDept" ></data-inout>
	            <data-inout bind="txtGroup" ></data-inout>
	            <data-inout bind="txtJob" ></data-inout>
	            <data-inout bind="txtPosition" ></data-inout>
                <data-inout bind="txtOrgPk" ></data-inout>
                <data-inout bind="txtClientPk" ></data-inout>
	       </data-inouts>
        </dso> 
    </xml> 
</ts-data>
    <ts-data id="dsolstLanguage" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="stgsfrstagam0001_s_09">
            <data-inputs>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstLanguage"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>


    <ts-data id="dsolstUserType" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="stgsfrstagam0001_s_10">
            <data-inputs>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstUserType"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>

    <ts-data id="dsodatatext" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="stgsfrstagam0001_s_11">
            <data-inputs>
            	<data-input bind="txtText"></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstAccount"></data-output>
            	<data-output bind="lstFinancialManagement"></data-output>
            	<data-output bind="lstSale"></data-output>
            	<data-output bind="lstProduction"></data-output>
            	<data-output bind="lstInventory"></data-output>
            	<data-output bind="lstPurchasing"></data-output>
            	<data-output bind="lstHR"></data-output>
            	<data-output bind="lstExecutiveInfo"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
    <table style="width:100%; height:100%;" border="0">
        <tr style="height:100%">
            <td width="50%" valign="top">
                <table width="100%" style="height: 100%">
                    <tr>
                        <td width="20%" class="mid">
                            <ts-label id='lblUserID_EmpID'>UserID/EmpID</ts-label>
                        </td>
                        <td width="20%">
                            <ts-textbox id="txtSearchUserID" onkeyup="change(event)"></ts-textbox>
                        </td>
                        <td width="20%" class="mid">
                            <a title="click here to show popup" onclick="openEmpLookup(0)">
                                <ts-label id='lblEmployeeName' data-tooltip="click here to show popup">User Name</ts-label>
                            </a></td>
                        <td width="20%">
                            <ts-textbox id="txtSearchName" onkeyup="change(event)"></ts-textbox>
                        </td>
                        <td width="5%">
                            <!-- <ts-button id="btnNewSub2" img="popup" alt="popup" onclick="openEmpLookup(0)" ></ts-button> 
                            <ts-icon id="btnNewSub2" name="external-link-square" data-tooltip="click here to show popup" data-tooltip-position="left" style="font-size:x-large;" onclick="openEmpLookup(0)"></ts-icon>-->
                        </td>
                        <td width="5%" class="mid">
                            <ts-label id='lblActive0'>Active</ts-label>
                        </td>
                        <td width="5%">
                            <ts-checkbox id="chkCheck" value="Y"></ts-checkbox>
                        </td>
                        <td width="5%">
                            <ts-icon id="btnNewSub3" name="search" title="search" onclick="searchUser()"></ts-icon>
                        </td>
                    </tr>
                    <tr valign="top" height="100%">
                        <td colspan="8">
                            <ts-grid id="grdUserList" sortable="true" editable="false" rowclick="loadUserDetail(sender,event)" selectionmode="singlecell">
								 <columns>
									<column text="Emp ID" datafield="EMP_ID" width="100" columntype="textbox" editable="false"></column>
									<column text="Emp Name" datafield="EMP_NAME" width="150" columntype="textbox" editable="false"></column>
									<column text="UserID" datafield="USER_ID"  width="150" columntype="textbox" editable="false"></column>
									<column text="Mobile" datafield="MOBILE"  width="200" columntype="textbox" editable="false"></column>
									<column text="Living Addr" datafield="LIVING_ADDR"  width="250" columntype="textbox" editable="false"></column>
									<column text="_PK" datafield="PK" columntype="textbox"   hidden="true" width="0" editable="false"></column>
								</columns>
							</ts-grid>
                        </td>
                    </tr>
                </table>
            </td>
            <td width="50%" style="height: 100%;vertical-align:top !important" align="left">
                <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
                    <tr height="5%">
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table style="width: 100%" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="97%" align="left">
                                                    <ts-label style="text-align: left" id="lblStatus"></ts-label>
                                                </td>
                                                <td width="1%" style="padding-right:5px">
                                                    <ts-icon id="btnNew" name="plus" title="new" onclick="AddOnClick()"></ts-icon>
                                                </td>
                                                <td width="1%" style="padding-right:5px">
                                                    <ts-icon id="btnDelete" name="trash" title="delete" onclick="DeleteOnClick()"></ts-icon>
                                                </td>
                                                <td width="1%" style="padding-right:5px">
                                                    <ts-icon id="btnNewSub2" name="save" title="save" onclick="SaveOnClick()"></ts-icon>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr height="5%">
                                    <td>
                                        <fieldset>
                                            <legend>
                                                <ts-label style="text-align: left; color: red" id="lblUI0">Copy User Role Information</ts-label>
                                            </legend>
                                            <table height="100%" width="100%">
                                                <tr height="100%">
                                                    <td width="10%" class="mid">

                                                        <a title="click here to show popup" onclick="openUserPopup()">
                                                            <ts-label id="lblFU0">From user</ts-label></td>
                                                    </a>
                                       
												<td width="20%">
                                                    <ts-textbox id="txtFromUserID" style="width: 99%; background-color: #E1E1E1" readonly="true" onclick="openUserPopup()"></ts-textbox>
                                                </td>
                                                    <td align="left" width="20%" class="mid">
                                                        <ts-label id="lblK">Keep Exists Role</ts-label>
                                                    </td>
                                                    <td align="left" width="20%" class="mid">
                                                        <ts-radio id="rbKeepRole" value="Y"> 
														<span value="Y">Yes</span>
														<span value="N">No</span>
													</ts-radio>
                                                    </td>

                                                    <td align="left" width="30%">
                                                        <ts-icon id="btnCopyRole" name="copy" title="copy" onclick="OnCopyRole()"></ts-icon>
                                                    </td>

                                                </tr>
                                            </table>
                                        </fieldset>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <fieldset class="fsStyle">
                                <legend class="legendStyle">
                                    <ts-label style="text-align: left; color: red" id="lblUI">User Information</ts-label>
                                </legend>
                                <table width="100%" height="99%">
                                    <tr height="100%">
                                        <td>
                                            <table width="100%" height="100%">
                                                <tr height="14%">
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblUserID">UserID</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox id="txtUserID" style="width: 100%" csstype="mandatory" onchange="dsoChekUserAvailable.Call('SELECT');"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblUserType1">User Type</ts-label>
                                                    </td>
                                                    <td colspan="2">
                                                        <ts-list id="lstUserType" style="width: 100%;" onchange="OnChangeUserType()" displaymember="code_nm" valuemember="code"> </ts-list>
                                                    </td>
                                                </tr>
                                                <tr height="14%">
                                                    <td width="15%"class="mid">
                                                        <ts-label id="lblPassword">Password</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox type="password" id="txtPwd" passwd="T" style="width: 100%" csstype="mandatory"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <a title="click here to show popup" onclick="openEmpLookup(1)">
                                                            <ts-label id="lblEmpName">User Name</ts-label></td>
                                                    </a>
                                            <td colspan="2" width="35%">
                                                <ts-textbox id="txtName" style="width: 99%" csstype="mandatory"></ts-textbox>
                                            </td>



                                                </tr>
                                                <tr height="14%">
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblConfirmPwd">Confirm Pwd</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox type="password" id="txtConfirmPwd" passwd="T" csstype="mandatory" style="width: 100%"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblLanguage">Language</ts-label>
                                                    </td>
                                                    <td colspan="3" width="35%">
                                                        <ts-list id="lstLanguage" style="width: 100%; background-color: #fffaaf;" displaymember="NAME" valuemember="ENG"></ts-list>
                                                    </td>
                                                </tr>

                                                <tr height="14%">
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblDept">Dept</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox id="txtDept" csstype="mandatory" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblGroup">Group</ts-label>
                                                    </td>
                                                    <td colspan="3" width="35%">
                                                        <ts-textbox id="txtGroup" csstype="mandatory" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                </tr>
                                                <tr height="14%">
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblJob">Job</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox id="txtJob" csstype="mandatory" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblPosition">Position</ts-label>
                                                    </td>
                                                    <td colspan="3" width="35%">
                                                        <ts-textbox id="txtPosition" csstype="mandatory" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                </tr>
                                                <tr height="14%">
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblTelNo">Tel No</ts-label>
                                                    </td>
                                                    <td width="35%">
                                                        <ts-textbox id="txtTel" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                    <td width="15%" class="mid">
                                                        <ts-label id="lblMobileNo">Mobile No</ts-label>
                                                    </td>
                                                    <td colspan="3" width="35%">
                                                        <ts-textbox id="txtMobile" style="width: 100%;"></ts-textbox>
                                                    </td>
                                                </tr>
                                                <tr height="14%">
                                                    <td colspan="6">
                                                        <table width="100%">
                                                            <tr>
                                                                <td width="15%" class="mid">
                                                                    <ts-label id="lblLivingAddr">Living Addr</ts-label>
                                                                </td>
                                                                <td width="35%">
                                                                    <ts-textbox id="txtLivingAddr" style="width: 100%;"></ts-textbox>
                                                                </td>
                                                                <td width="5%" class="mid">
                                                                    <ts-label id="lblActive">Active</ts-label>
                                                                </td>
                                                                <td width="4%">
                                                                    <ts-checkbox id="chkActive" value="0" mode="F"></ts-checkbox>
                                                                </td>
                                                                <td width="10%" class="mid">
                                                                    <ts-label id="lblContact">Contact</ts-label>
                                                                </td>
                                                                <td width="31%">
                                                                    <ts-textbox id="txtUrgentContact" style="width: 100%;"></ts-textbox>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </fieldset>
                        </td>

                    </tr>

                    <tr>
                        <td>
                          <ts-tab id="tabs" tabclick="OnTabClick(event)">
	
	
		                        <table id="tb_ClientInformation" style="width: 100%; height: 100%;" name="Client Information">
                                    <tr height="25%">
                                        <td width="15%" class="mid">
                                            <a href="javascript:void(0)" onclick="OnShowClient()" style="color: #68a1ed; font-weight: bold;">
                                                <ts-label id="lblClient">Client</ts-label>
                                            </a>
                                        </td>
                                        <td width="35%" align="left" colspan="3">
                                            <ts-textbox id="txtPartnerName" style="width: 100%"></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr height="25%">
                                        <td width="15%" class="mid">
                                            <ts-label id="lblAddress">Address</ts-label>
                                        </td>
                                        <td width="35%" align="left" colspan="3">
                                            <ts-textbox id="txtPartAddress" style="width: 100%"></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr height="25%">
                                        <td width="15%" class="mid">
                                            <ts-label id="lblPhone">Phone</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-textbox id="txtPhone" style="width: 100%"></ts-textbox>
                                        </td>
                                        <td width="15%" class="mid">
                                            <ts-label id="lblFax">Fax</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-textbox id="txtFax" style="width: 100%"></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr height="25%">
                                        <td width="15%" class="mid">
                                            <ts-label id="lblEmail">Email</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-textbox id="txtEmail" style="width: 100%"></ts-textbox>
                                        </td>
                                        <td width="15%" class="mid">
                                            <ts-label id="lblWebsite">Web site</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-textbox id="txtWebsite" style="width: 100%"></ts-textbox>
                                        </td>
                                    </tr>
		                        </table>
                              <table id="tb_SecurityInformation" style="width: 100%; height: 100%;" name="Security Information">
                                  <tr height="20%">
                                        <td width="15%" class="mid">
                                                <ts-label id="lblAnnouncement">Announcement</ts-label>
                                            </td>
                                        <td width="35%">
                                            <ts-checkbox id="chkAnnouncement" mode="01"></ts-checkbox>
                                        </td>
                                        <td width="15%" class="mid">
                                            <ts-label id="lblSec_Admin">Sec.Admin</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-checkbox id="chkSecurityAdmin" mode="01"></ts-checkbox>
                                        </td>
                                    </tr>
                                   <tr height="20%">
                                        <td width="15%" class="mid">
                                                <ts-label id="lblStartDate">Start Date</ts-label>
                                            </td>
                                        <td width="35%">
                                            <ts-datebox isRequired="false" id="dtStartDT" style="float: left;"></ts-datebox>
                                        </td>
                                        <td width="15%" class="mid">
                                            <ts-label id="lblEndDate">End Date</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-datebox isRequired="false" id="dtEndDT" style="float: left;"></ts-datebox>
                                        </td>
                                    </tr>
                                    <tr height="20%">
                                        <td width="15%" class="mid">
                                            <b>
                                                <ts-label id="lblAccounting">Accounting</ts-label>
                                            </b></td>
                                        <td width="35%">
                                            <ts-list id="lstAccount" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"></ts-list>
                                        </td>
                                        <td width="15%" class="mid">
                                            <ts-label id="lblFinancialMgt">Financial Mgt</ts-label>
                                        </td>
                                        <td width="35%">
                                            <ts-list id="lstFinancialManagement" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"></ts-list>
                                        </td>
                                    </tr>
                                    <tr height="20%" class="mid">
                                        <td align="left">
                                            <ts-label id="lblSales">Sales</ts-label>
                                        </td>
                                        <td>
                                            <ts-list id="lstSale" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"></ts-list>
                                        </td>
                                        <td class="mid">
                                            <ts-label id="lblProduction">Production</ts-label>
                                        </td>
                                        <td>
                                            <ts-list id="lstProduction" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"></ts-list>
                                        </td>
                                    </tr>
                                    <tr height="20%">
                                        <td  class="mid">
                                            <b>
                                                <ts-label id="lblInventory">Inventory</ts-label>
                                            </b></td>
                                        <td>
                                            <ts-list id="lstInventory" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"> </ts-list>
                                        </td>
                                        <td class="mid">
                                            <ts-label id="lblPurchasing">Purchasing</ts-label>
                                        </td>
                                        <td>
                                            <ts-list id="lstPurchasing" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"> </ts-list>
                                        </td>
                                    </tr>
                                    <tr height="20%">
                                        <td class="mid">
                                            <b>
                                                <ts-label id="lblHR">HR</ts-label>
                                            </b></td>
                                        <td>
                                            <ts-list id="lstHR" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"> </ts-list>
                                        </td>
                                        <td class="mid">
                                            <ts-label id="lblExecutiveInfo">Executive Info</ts-label>
                                        </td>
                                        <td>
                                            <ts-list id="lstExecutiveInfo" style="width: 100%;" displaymember="CODE_NM" valuemember="CODE"> </ts-list>
                                        </td>
                                    </tr>
                              </table>
                              </ts-tab>

                            
                        </td>
                    </tr>
                     
                </table>
            </td>
        </tr>
    </table>
    <ts-textbox id="idInput1" style="display: none"></ts-textbox>
    <ts-textbox id="txtClientDB" style="display: none"></ts-textbox>
    <ts-textbox id="txtPk" style="display: none"></ts-textbox>
    <ts-textbox id="txtEmpPk" style="display: none"></ts-textbox>
    <ts-textbox id="txtPwdEnc" style="display: none"></ts-textbox>
    <ts-textbox id="txtreNum" text="" style="display: none"></ts-textbox>
    <ts-textbox id="txtreMsg" text="" style="display: none"></ts-textbox>
    <ts-textbox id="txtCopyRoleResult" text="" style="display: none"></ts-textbox>
    <ts-textbox id="txtOrgPk" text="" style="display: none"></ts-textbox>
    <ts-textbox id="txtText" text="" style="display: none"></ts-textbox>
    <ts-textbox id="txtClientPk" text="" style="display: none"></ts-textbox>
</body>
</html>
