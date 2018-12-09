<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Page</title>
</head>
<style type="text/css">
	
</style>
<script type="text/javascript">
var t=System.getSessionDbDataSource();
function BodyInit()
{
	//System.getSessionDbDataSource()
	//System.getSessionDbType()
	//alert(t);
	//alert(System.getSessionDbType());
	//alert();
	txtDBUser.value= System.getAppUser();
	//alert(txtDBUser.value);
    BindingDataList();
	
}

function BindingDataList()
{   
	dso_lst_gsau00700_0.Call("SELECT");
}

function OnSearch()
{	
    dso_grd_gsau00700_0.Call("SELECT");
}
function OnDataReceive(obj) {
	switch(obj.id)
	{
		case 'dso_lst_gsau00700_0':
			lstDept.value = "ALL";
			/* dso_grd_gsau00700_0.Call("SELECT"); */
		break;
		case 'dso_grd_gsau00700_0':
		
		break;
	}
}
function OnSave()
{
	if(confirm("Do you want to update"))
	{
	  dso_grd_gsau00700_0.Call();
	}
}
function OnExcel()
{
	var url = '/reports/sys/auth/rpt_sysauth00005.aspx?p_dbuser='+ txtDBUser.value +'&p_from_date='+dtFromDate.value+'&p_to_date='+dtToDate.value+'&p_org='+ lstDept.value + '&p_user_id='+ txtUserId.text +'&p_user_name='+ txtUserName.text +'&p_success_yn='+chkLoged.value;  
	System.OpenTargetPage( System.RootURL+url , "newform" );
}
function onKeyPressSearch(e){
	if(e.keyCode == 13)
		OnSearch();	
}
</script>
</head>
<!--  BEGIN DSO  -->
<body>


<ts-data id="dso_grd_gsau00700_0" onreceive="OnDataReceive(this)"> 
    <xml>
    	<!-- function="sp_es_sel_login_history" -->
        <dso type="grid" parameter="PK,ALLOW_YN" function="ST_HR_SEL_GRD_GSAU00700_0" procedure="ST_HR_UPD_GRD_GSAU00700_0" > 
            <data-inputs bind="grdLoginHistory"> 
			    <data-input bind="txtDBUser"> </data-input>
                <data-input bind="dtFromDate"> </data-input>
                <data-input bind="dtToDate" > </data-input>
                <data-input bind="lstDept" > </data-input>
                <data-input bind="txtUserId" > </data-input>
                <data-input bind="txtUserName"> </data-input>
                <data-input bind="chkLoged" > </data-input>
             </data-inputs>
			<data-outputs>
            	<data-output bind="grdLoginHistory"></data-output>
            </data-outputs>
        </dso> 
    </xml> 
</ts-data>
<ts-data id="dso_lst_gsau00700_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="ST_HR_SEL_LST_GSAU00700_0">
            <data-inputs> 
				<data-input bind="txtTemp" > </data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstDept"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>

    <table width="100%" height="99%">
        <tr height="10%">
            <td width="5%" align="right">
            	<ts-label id='lblLDate'>Date</ts-label>
				
			
            </td>
            <td width="7%"  align="center">
                <ts-datebox lang="1" id="dtFromDate" ></ts-datebox>
            </td>
            <td width="2%" align="center">
                <ts-label id='lblaa'>~</ts-label>
            </td>
            <td width="7%"  align="center">
                <ts-datebox lang="1" id="dtToDate" ></ts-datebox>
            </td>
            
			<td width="5%" align="right"><ts-label id='lblDept' >Dept</ts-label></td>
			<td width="10%" align="right">
                <ts-list id="lstDept" valuemember="PK" displaymember="ORG_NM" ></ts-textbox> 
            </td>
            <td width="7%" align="right">
                <ts-label id='lblUserID'>User ID</ts-label>
            </td>
            <td width="10%">
                <ts-textbox id="txtUserId" styles="width:100%" onkeyup="onKeyPressSearch(event)" ></ts-textbox>
            </td>
            <td width="5%" align="right">
                <ts-label id='lblName' >Name</ts-label>
            </td>
            <td width="10%">
                <ts-textbox id="txtUserName" styles="width:100%" onkeyup="onKeyPressSearch(event)" ></ts-textbox>
            </td>
            <td width="2%">
            </td>
            <td width="10%" align="right">
                <ts-label id='lblLogin'>Login success(Y/N)</ts-label>
            </td>
            <td width="3%">
                <ts-checkbox id="chkLoged" mode="01" value="0" onchange="OnSearch()" ></ts-checkbox>
            </td>
			<td  width="5%">
				<ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
			</td>
           <td width="5%">
				<ts-button img="save" id="btSave"   alt="save"  onclick="OnSave()" imgtype="0">Save</ts-button>
			</td>
           <td width="5%">
				<ts-button img="excel" id="btExcel"   alt="report"  onclick="OnExcel()" imgtype="0">Report</ts-button>
            </td>
        </tr>
        <tr hegith="90%">
            <td colspan="16">
            	<ts-grid id="grdLoginHistory"  style="width:100%; height:100%" editable="true"   >
					 <columns>
						<column text="pk" 			datafield="PK" 			columntype="textbox" 	width="0"	 	editable="false"	cellsalign="center" hidden="true" ></column>
						<column text="No" 			datafield="ROWNUM" 		columntype="textbox" 	width="100"	 	editable="true" 	cellsalign="center"  ></column>
						<column text="User ID" 		datafield="USER_ID" 	columntype="textbox" 	width="100"  	editable="false" 	cellsalign="left"  ></column>
						<column text="Full Name" 	datafield="USER_NAME" 	columntype="textbox" 	width="200"  	editable="false" 	cellsalign="left"  ></column>
						<column text="Dept Name" 	datafield="ORG_NM"  	columntype="textbox" 	width="200"  	editable="false" ></column>
						<column text="Login IP" 	datafield="USER_IP" 	columntype="textbox" 	width="150"  	editable="false" ></column>
						<column text="Login Date" 	datafield="LOGIN_DATE" 	columntype="textbox"  	width="200"  	editable="false"></column>
						<column text="Emp Id" 		datafield="EMP_ID" 		columntype="textbox" 	width="100"  	editable="false" ></column>
						<column text="Status" 		datafield="STATUS" 		columntype="textbox"	width="100"  	editable="false" 	cellsalign="right" ></column>
						<column text="Resign date" 	datafield="RESIGN_DATE" columntype="textbox"	width="100"  	editable="false" 	cellsalign="center" ></column>
						<column text="Success(Y/N)" datafield="SUCESS_YN" 	columntype="textbox" 	width="100" 	editable="false" 	cellsalign="center" ></column>
						<column text="Allow" 		datafield="ALLOW_YN" 	columntype="checkbox" 	width="100"  	editable="true"		cellsalign="center" ></column>
					</columns>
				</ts-grid>
            </td>
        </tr>
    </table>
	
		<ts-textbox id="txtDBUser" style="display:none;" ></ts-textbox> 
	
		<ts-textbox id="txtTemp" style="display:none;" ></ts-textbox> 
		
		
</body>
</html>