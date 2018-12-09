<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Authority Entry</title>

<script type="text/javascript">
function BodyInit(){
	chkUser.value = "Y";
	chkUsedObject1.value = "Y";
	chkUsedRole1.value = "Y";
	chkUsedObject2.value = "Y";
	chkUsedUser2.value = "Y";
	txtClientPK.value = System.getClientPk();
	
	/*idGridUserAndRole.autoresizecolumns();
	grdObjectAndRole1.autoresizecolumns();
	grdObjectAndUser2.autoresizecolumns();*/
	
}
function getUserAndRole()
{	
	dso_grd_stgsau00500_0.Call("SELECT");
	//alert("search 1-line 25");
}

function getObjectAndRole()
{	
	dso_grd_stgsau00500_1.Call("SELECT");
//	alert("search 2 - line 31");
}

function getObjectAndUser()
{
    dso_grd_stgsau00500_2.Call("SELECT");
}

function getTotal()
{	
	/* document.getElementById("totalrows").innerHTML = "<b>Total Rows: " + idGridUserObject.rows +"</b>"; */
}
function onKeyPressSearch(e){
	if(e.keyCode == 13)
	{
		dso_grd_stgsau00500_0.Call("SELECT"); 	 
	}	
}
function onKeyPressSearch1(e){
	
	if(e.keyCode == 13)
	{
		dso_grd_stgsau00500_1.Call("SELECT"); 
	}	
}
function onKeyPressSearch2(e){
	
	if(e.keyCode == 13)
	{
		 dso_grd_stgsau00500_2.Call("SELECT"); 
	}	
}
function OnDataReceive(dso)
{	
		if(dso.id=="dso_grd_stgsau00500_0")
			{
			//idGridUserAndRole.autoresizecolumns();		
			}
		if(dso.id=="dso_grd_stgsau00500_1")
		{
			//grdObjectAndRole1.autoresizecolumns();	
		}
		if(dso.id=="dso_grd_stgsau00500_2")
		{
			//grdObjectAndUser2.autoresizecolumns();	
		}
	
	
	
}

function selectedTextEvent(sender,event)
{
	var selectedTab = event.TabIdx;
	if(selectedTab ==0)
	{ 
		idGridUserAndRole.refreshGrid(); 
	}
	if(selectedTab ==1)
	{ 
		grdObjectAndRole1.refreshGrid(); 
	}
	if(selectedTab ==2)
	{ 
		grdObjectAndUser2.refreshGrid();
	}
}	

</script>
</head>
<body>
<ts-data id="dso_grd_stgsau00500_0" onreceive="OnDataReceive(this)" > 
    <xml> 
    	<!-- function="sp_es_sel_user_and_role_150319" -->
        <dso type="grid" function="st_hr_sel_grd_gsau00500_0" > 
            <data-inputs> 
                <data-input bind="txtUserID" ></data-input>
                <data-input bind="txtFullName" ></data-input>
                <data-input bind="chkUser" ></data-input>
				<data-input bind="txtClientPK" ></data-input>
             </data-inputs>
            <data-outputs bind="idGridUserAndRole"></data-outputs>
        </dso> 
    </xml> 
</ts-data> 

<ts-data id="dso_grd_stgsau00500_1" onreceive="OnDataReceive(this)" > 
    <xml> 
    	<!-- function="sp_es_sel_object_and_Role" -->
        <dso type="grid" function="st_hr_sel_grd_gsau00500_1" > 
            <data-inputs> 
                <data-input bind="txtObjectId1" ></data-input>
                <data-input bind="txtObjectName1" ></data-input>
                <data-input bind="chkUsedObject1" ></data-input>
                <data-input bind="chkUsedRole1" ></data-input>
                <data-input bind="txtRole1" ></data-input>
             </data-inputs>
            <data-outputs  bind="grdObjectAndRole1"></data-outputs>
        </dso> 
    </xml> 
</ts-data> 

<ts-data id="dso_grd_stgsau00500_2" onreceive="OnDataReceive(this)" > 
    <xml> 
    	<!-- function="sp_es_sel_object_and_user" -->
        <dso type="grid" function="st_hr_sel_grd_gsau00500_2" > 
            <data-inputs> 
                <data-input bind="txtUserId2" ></data-input>
                <data-input bind="txtObjectId2" ></data-input>
                <data-input bind="txtObjectName2" ></data-input>
                <data-input bind="txtRoleName2" ></data-input>
                <data-input bind="chkUsedObject2" ></data-input>
                <data-input bind="chkUsedUser2" ></data-input>
             </data-inputs>
            <data-outputs  bind="grdObjectAndUser2"></data-outputs>
        </dso> 
    </xml> 
</ts-data>

<table  border=1  style="width: 100%; height: 100%;" >
<tr>
	<td width="100%" height="100%">
	<ts-tab id="idTab"  height="100%" onPageActivated="selectedTextEvent(sender,event)" >
		<table style="width: 100%; height: 100%;" id="User_Role"  name="User and Role" >
		<tr height="5%">
			<td width="5%"><ts-label id="lblUserID">User ID</ts-label></td>
			<td width="20%">
				<ts-textbox id="txtUserID" onkeyup="onKeyPressSearch(event)" ></ts-textbox></td>
			<td width="5%"></td>
			<td width="10%"><ts-label id="lblEmployeeName">Employee Name</ts-label></td>
			<td width="20%">
				<ts-textbox id="txtFullName" onkeyup="onKeyPressSearch(event)"></ts-textbox></td>
			<td width="5%"></td>
			<td width="10%" align ="right"><ts-label id="lblActive">User Active</ts-label></td>
			<td width="5%"><ts-checkbox id="chkUser"></ts-checkbox></td>
			<td width="15%"></td>		
			<td width="5%">
				<ts-button id="btnSearch1" img="search" alt="Search" text="Search" onclick="getUserAndRole()"imgtype="0">
					Search
				</ts-button>	
			</td>					
			<td width="10%"></td>
		</tr>
		<tr height="95%" >
			<td colspan="12">
			    
				<ts-grid id="idGridUserAndRole" sortable="true" style="height: 100%;width: 100%;"  >
					 <columns>
						<column text="User ID" datafield="USER_ID" columntype="textbox" width="100"></column>
						<column text="Full Name" datafield="USER_NAME" columntype="textbox" width="200"></column>
						<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="300"></column>
						<column text="Role Active" datafield="USE_YN" columntype="checkbox" width="158"></column>
						<column text="Crt Date" datafield="CRT_DT" columntype="textbox" width="200"></column>
						<column text="Crt By" datafield="CRT_BY" columntype="textbox" width="200"></column>
					</columns>
				</ts-grid>
				
				
            </td>
		</tr>
		</table>
		<table style="width: 100%; height: 100%;" id="Object_Role"  name="Object and Role">
		<tr height="5%"> 
			<td width="7%"><ts-label id="lblObject_ID">Object ID</ts-label></td>
			<td width="15%"><ts-textbox id="txtObjectId1" onkeyup="onKeyPressSearch1(event)" ></ts-textbox></td>
			<td width="8%"><ts-label id="lblObject_Name">Object Name</ts-label></td>
			<td width="15%"><ts-textbox id="txtObjectName1" onkeyup="onKeyPressSearch1(event)" ></ts-textbox></td>						
			<td width="5%"><ts-label id="lblRole">Role</ts-label></td>
			<td width="15%"><ts-textbox id="txtRole1" onkeyup="onKeyPressSearch1(event)" ></ts-textbox></td>			
			<td width="10%" align ="right"><ts-label id="lblUsed_Object">Used Object</ts-label></td>
			<td width="5%"><ts-checkbox id="chkUsedObject1" mode="01" value="T"></ts-checkbox></td>
			<td width="5%"></td>			
			<td width="10%"><ts-label id="lblUsed_Role">Used Role</ts-label></td>
			<td width="5%"><ts-checkbox id="chkUsedRole1" mode="01" value="T"></ts-checkbox></td>
			<td width="5%">
				<!-- <ts-button id="btnSearch1" img="search" alt="Search"  onclick="getObjectAndRole()"/> -->
				<ts-button id="btnSearch" img="search" alt="Search" text="Search" onclick="getObjectAndRole()" imgtype="0" >
					Search
				</ts-button>
			</td>					
			
		</tr>
		<tr  height="95%">
			<td colspan="12">
			 
				<ts-grid id="grdObjectAndRole1" sortable="true" style="width: 100%" > 
					 <columns>
						<column text="Object ID" datafield="MENU_ID" columntype="textbox" width="100"></column>
						<column text="Object Name" datafield="FORM_NM" columntype="textbox" width="200"></column>
						<column text="Menu ID" datafield="MENU_ID1" columntype="textbox" width="158"></column>
						<column text="Obj Start Date" datafield="N1" columntype="datetimeinput" width="200"></column>
						<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="300"></column>
						<column text="Role Start Date" datafield="ST_DATE" columntype="date" width="200" ></column>
						<column text="_Obj_Priv" datafield="OBJ_PRIV" columntype="checkbox" hidden="true" width="0" editable="false"></column>
						<column text="_Obj_Status" datafield="N2" columntype="checkbox" hidden="true" width="0" editable="false"></column>
						<column text="_Obj_Use" datafield="OBJ_USE_YN" columntype="checkbox" hidden="true" width="0" editable="false"></column>
						<column text="_Role_Use" datafield="ROL_USE_YN" columntype="checkbox" hidden="true" width="0" editable="false"></column>
					</columns>
				</ts-grid>
				
				
				
            </td>						
		</tr>		
    </table>
	<table style="width: 100%; height: 100%;" id="Object_User"  name="Object and User">
		<tr height="5%"> 
			<td width="7%" align ="right"><ts-label id="lblUser_ID1">User ID</ts-label></td> 
			<td width="10%" widht="5%"><ts-textbox id="txtUserId2" onkeyup="onKeyPressSearch2(event)" ></ts-textbox></td> 
			<td width="7%" align ="right"><ts-label id="lblObject_ID1">Object ID</ts-label></td>
			<td width="10%"><ts-textbox id="txtObjectId2" onkeyup="onKeyPressSearch2(event)" ></ts-textbox></td>
			<td width="7%" align ="right"><ts-label id="lblObject_Name1">Object Name</ts-label></td>
			<td width="10%"><ts-textbox id="txtObjectName2" onkeyup="onKeyPressSearch2(event)" ></ts-textbox></td>				
			<td width="7%" align ="right"><ts-label id="lblRole_Name1">Role Name</ts-label></td>
			<td width="10%"><ts-textbox id="txtRoleName2" onkeyup="onKeyPressSearch2(event)" ></ts-textbox></td>			
			<td width="7%" align ="right"><ts-label id="lblUsedObject1">Used Object</ts-label></td>
			<td width="5%"><ts-checkbox id="chkUsedObject2" mode="01" value="T" ></ts-checkbox></td>
			<td width="7%" align ="right"><ts-label id="lblUsedUser1">Used User</ts-label></td>
			<td width="5%"><ts-checkbox id="chkUsedUser2" mode="01" value="T" ></ts-checkbox></td>
			<td width="3%">
				<ts-button id="btnSelect2" img="search" alt="Search" text="Search" onclick="getObjectAndUser()" imgtype="0" >
					Search
				</ts-button>
			</td>					
			<!-- <td width="5%"><div id="totalrows2"/></td> -->		
			
		</tr>
		<tr height="95%">
			<td colspan="16">
					
                    <ts-grid id="grdObjectAndUser2" sortable="true" style="height: 100%;width: 100%;"  >
					 <columns>
						<column text="User ID" datafield="USER_ID" columntype="textbox" width="100" ></column>
						<column text="Full Name" datafield="USER_NAME" columntype="textbox" width="200"></column>
						<column text="Object ID" datafield="MENU_ID" columntype="textbox" width="100"></column>
						<column text="Object Name" datafield="FORM_NM" columntype="textbox" width="300"></column>
						<column text="Menu ID" datafield="MENU_ID1" columntype="textbox" width="100"></column>
						<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="300"></column>
						<column text="Object Used" datafield="USE_YN1" columntype="checkbox" width="100"></column>
						<column text="Role Used" datafield="USE_YN2" columntype="checkbox" width="100"></column>
						<column text="Role Object Used" datafield="USE_YN3" columntype="checkbox" width="300"></column>
						<column text="User Used" datafield="USE_YN4" columntype="checkbox" width="100"></column>
						<column text="User Role Used" datafield="USE_YN5" columntype="checkbox" width="200" ></column>
					</columns>
				</ts-grid>
			</td>						
		</tr>		
    </table>
	</ts-tab>
	</td>
</tr>
</table>   
<ts-textbox id="txtClientPK"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="idID"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="idName"  text="" style="display:none" ></ts-textbox>
</body>
</html>