<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Password Change</title>

<script type="text/javascript">
var datacol = [{val:'0', nm: 'CODE'},
               {val:'1', nm: 'CHAR_1'},
               {val:'2', nm: 'CHAR_2'},
               {val:'3', nm: 'CHAR_3'},
               {val:'4', nm: 'CHAR_4'},
               {val:'5', nm: 'CHAR_5'},
               {val:'6', nm: 'NUM_1'},
               {val:'7', nm: 'NUM_2'},
               {val:'8', nm: 'NUM_3'},
               {val:'9', nm: 'NUM_4'},
               {val:'10', nm: 'NUM_5'}               
               ];
var datacol2 = [
               {code:'', code_name: ''}               
               ];               
var l_char1="CHAR 1",
	l_char2="CHAR 2", 
	l_char3="CHAR 3", 
	l_char4="CHAR 4", 
	l_char5="CHAR 5", 
	l_num1="NUM 1",
	l_num2="NUM 2",
	l_num3="NUM 3",
	l_num4="NUM 4",
	l_num5="NUM 5";
var l_admin_yn;
function BodyInit()
	{

		// $("#txtUserPK").val(System.getSessionUserPk());		 
		// $("#txtCompanyPK").val(System.getSessionCompanyPk());		 
		// $("#txtFormObjID").val("sthrfrstagbh0001");
		txtUserID.value = System.getSessionUserId();
		 l_admin_yn = System.getSessionCodeAdminYn();
	 
	 }
	 
	var OnDataReceive = function (obj)
	{
		 if(obj.id =='dso_ctl_stgsau00400_0')
		 {
			 alert(txtResult.value);
			 if(txtResult.value=="Password changed successed!"){
				 top.window.location.href = '${ctx}/system/logout.gw';
			 }
		 }
		 
	 };
	 function form_reset()
	 {
	 	/*txtOldPassword.value = '';
	 	txtNewPassword.value = '';
	 	txtConfirmPassword.value = '';*/
	 	top.window.location.href = '${ctx}/system/index.gw';
	 }
	 function changePwd()
	 {
	 	if(checkData()==true)
	 	{	 	
	 	    txtOldPasswordEnc.value = b64_md5(txtOldPassword.value);
	 	    txtNewPasswordEnc.value = b64_md5(txtNewPassword.value);
	 	    //alert(txtOldPasswordEnc.value);
	 	    //alert(txtNewPasswordEnc.value);
	 	    dso_ctl_stgsau00400_0.Call();			 	
	 	}
	 }
	 function checkData()
	 {
	     var s;
	     
	     /*if(txtNewPassword.value.length < 6 ){
	         alert("The Minimum Password Length must be 6 characters.");
	         return false;
	     }*/
	     
	 	if (txtOldPassword.value == '') {
	 		alert('Please input Old password');
	 		return false
	 	}	
	 	if (txtNewPassword.value == '') {
	 		alert('Please input New password');
	 		return false
	 	}
	 	if (txtConfirmPassword.value == '') {
	 		alert('Please input confirm new password');
	 		return false
	 	}	
	 	if (txtNewPassword.value != txtConfirmPassword.value) {
	 		alert('New password and Confirm password doesnot match.');
	 		return false;
	 	}	
	 	
	 	return true;
	 }
	 function OnShowPopup()
	{
	alert("dang vao day");
	 var url = "/standard/forms/hr/co/hrco00200.aspx";
	 var obj;
	 obj = System.OpenModal(  url , 120, 300, 'GET ORG', document,OnClosePopupManager);
	 if (obj!=null)
	 {
	
    
	 }
	 else
	 {
		
	 }
        
	}
</script>
</head>
<!--  BEGIN DSO  -->
<body>

<ts-data id="dso_ctl_stgsau00400_0" onreceive="OnDataReceive(this)"> 
	<xml> 
	    <dso type="process" function="" procedure="st_hr_sel_ctl_stgsau00400_0">	    	
	        <data-inputs>
                <data-input bind="txtUserID" ></data-input>
                <data-input bind="txtOldPasswordEnc" ></data-input>
                <data-input bind="txtNewPasswordEnc" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="txtResult"></data-output>            	
            </data-outputs> 
	    </dso> 
	</xml> 
</ts-data>

<!--  END DSO -->
<table align="center" width="100%" height="100%" border="0" >
        <tr  style="vertical-align:top">
            <td align=center >
                <table align="center" cellspacing="0" cellpadding="0" border="1" style="width: 50%;
                    height: 40%; border-color: #6B9EB8">
                    <tr>
                        <td  align=center>                        
                            <b>
                            	<ts-label id="lblMsg" styles="color:red"></ts-label>
                            </b>
                        </td>
                    </tr>
                    <tr>
                        <td align="center"  >
                            <table align="center" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                	<td width=50 align=left style='font-size: 12px;'>
                                    </td>
                                    <td width=50 align=left style='font-size: 12px;'>
                                        <b>User ID</b>
                                    </td>
                                    <td colspan="2" align="center" width=250>
                                        
                                        <ts-textbox  type="text"  name="password" id="txtUserID" readonly="true"></ts-textbox>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="7" colspan="3">
                                    </td>
                                </tr>
                                <tr>
                                    <td width=50 align=left style='font-size: 12px;'>
                                    </td>
                                    <td width=50 align=left style='font-size: 12px;'>
                                        <b>Old Password</b>
                                    </td>
                                    <td colspan="2" align="center">                                        
                                        <ts-textbox  type="password"  name="password" id="txtOldPassword" ></ts-textbox>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td height="7" colspan="3">
                                    </td>
                                </tr>
                                <tr>
                                    <td width=50 align=left style='font-size: 12px;'>
                                    </td>
                                    <td width=50 align=left style='font-size: 12px;'>
                                        <b>New Password</b>
                                    </td>
                                    <td colspan="2" align="center">
                                        
                                    	<ts-textbox  type="password"  name="password" id="txtNewPassword" ></ts-textbox>
                                    	
                                    </td>
                                </tr>
                                <tr>
                                    <td height="7" colspan="3">
                                    </td>
                                </tr>
                                <tr>
                                    <td width=50 align=left style='font-size: 12px;'>
                                    </td>
                                    <td width=50 align=left style='font-size: 12px;'>
                                        <b>Confirm Password</b>
                                    </td>
                                    <td colspan="2" align="center">
                                        
                                        <ts-textbox  type="password"  name="password" id="txtConfirmPassword" ></ts-textbox>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td height="7" colspan="3"> &nbsp;
                                    </td>
                                </tr>
                                                                                             
                                <tr >
                                <td colspan="7" align=center style="color:red"><b color="red">Note: Password length atleast 6 characters.</b></td>
                                </tr>
                                
                                
                                <tr>
                                    <td></td>
                                    <td width="50">
										<ts-button id="btnSave" img="save" alt="Save" text="Save" onclick="changePwd()"imgtype="0">
											Save
										</ts-button>
                                    </td>
                                    <td width="50" align="left">
										<ts-button id="btnCancel" img="cancel" alt="Cancel" text="Cancel" onclick="form_reset()"imgtype="0">
											Reset
										</ts-button>
                                    </td>
									<td width="50" align="left">
										<ts-button id="btnCancel1" img="cancel" alt="Cancel" text="Cancel" onclick="OnShowPopup()" imgtype="0">
											TestPopup
										</ts-button>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <ts-textbox maxlen="10" style="display:none" id="txtResult" ></ts-textbox>
    <ts-textbox maxlen="10" style="display:none" id="txtOldPasswordEnc" ></ts-textbox>
    <ts-textbox maxlen="10" style="display:none" id="txtNewPasswordEnc"></ts-textbox>
</body>
</html>