<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Authority Entry</title>

<script type="text/javascript">
var _gLoad = false;
function BodyInit()
{	
	txtClientDB.value = System.getAppUser();
	BindDataList();
	OnSearch(0);
	
}

function BindDataList()
{
    //dso_lst_stgsau00300_0.Call("SELECT");
  //  dso_lst_stgsau00300_1.Call("SELECT");
    
}

/*function OnSearch()
{
	dso_grd_stgsau00300_1.Call("SELECT");
}*/
function OnSearch(obj)
{
	if(obj=='0')
	{
		dso_grd_stgsau00300_1.Call("SELECT");
	}
	if(obj=='1')
	{
		var key = lstKey.GetData();
		if (key == '0') 
		{
			txtFullName.text = txtKeyWord.text; 
			txtEmpID.text = '';
		}
		if (key == '1') 
		{
			txtFullName.text = ''; 
			txtEmpID.text = txtKeyWord.text;
		}
		
		if (Trim(txtRolePK.text) != "") 
		{
			dsoUserList.Call("SELECT");
		}
	}
	if(obj=='2')
	{
		dsoUserLisMpos.Call("SELECT");
	}
}

function loadRoleByUser(sender,event)
{
    _gLoad = true;
	//if(obj=='0')
	//{
		var rowIndex = event.row;
		txtUserPK.value = grdUserList.GetGridData(rowIndex, "pk");
		dso_grd_stgsau00300_0.Call("SELECT");
	//}
	/*if(obj=='1')
	{
		var RowIndex = grdRoleList1.getselectedrowindex();
		txtRolePK.value = grdRoleList1.GetGridData(RowIndex,"pk");
		dso_grd_stgsau00300_4.Call("SELECT"); 
	}*/
	
}

function loadRoleByUser0()
{
    _gLoad = true;
    var RowIndex = grdUserList.getselectedrowindex();
	txtUserPK.value = grdUserList.GetGridData(RowIndex,"pk");
	dso_grd_stgsau00300_0.Call("SELECT");
}

function loadRoleByUser1(sender,event)
{
	alert("dang vao day");
  /* _gLoad = true;
    var columnidx = event.col;
	var rowIndex = event.row;
	
	//var RowIndex = grdRoleList1.getselectedrowindex();
	txtRolePK.value = grdRoleList1.GetGridData(rowIndex,"PK");
	dso_grd_stgsau00300_4.Call("SELECT"); */
}

function addObjectTo1(sender,event)
{
	var objGrdUserList = grdUserList1.selectedrowindexes;
	var objGrdRoleList = grdRoleList1.selectedrowindexes;
	if(objGrdRoleList.length > 1)
		{
			alert("You must choose one role");
			return;
		}
	var rowIdxUser = objGrdUserList[0];
	
		if(grdUserList1.RowCount >0)
		{	
			var rowIdxRole = objGrdRoleList[0];
			
			if( rowIdxRole == null)
			{
				rowIdxRole = 0;
			}
			grdMapping1.AddRow();
			grdMapping1.SetGridData(grdMapping1.RowCount-1, 'tes_user_pk', grdUserList1.GetGridData(rowIdxUser,"pk"));
			grdMapping1.SetGridData(grdMapping1.RowCount-1, 'tes_role_pk', grdRoleList1.GetGridData(rowIdxRole,"pk"));
			grdMapping1.SetGridData(grdMapping1.RowCount-1, 'role_nm', grdRoleList1.GetGridData(rowIdxRole,"role_nm"));
			grdMapping1.SetGridData(grdMapping1.RowCount-1, 'user_id', grdUserList1.GetGridData(rowIdxUser,"user_id"));
			grdMapping1.SetGridData(grdMapping1.RowCount-1, 'full_name', grdUserList1.GetGridData(rowIdxUser,"user_name"));
			
			grdUserList1.RemoveRowAt(rowIdxUser);
		}
		
}
//-------------------------------------------------------
function addObjectTo0() 
{
	var objGrdUserList = grdUserList.selectedrowindexes;
	var objGrdRoleList = grdRoleList.selectedrowindexes;
	if(objGrdUserList.length > 1)
		{
			alert("You must choose one user id");
			return;
		}
	var rowIdxUser = objGrdUserList[0];
	
	
	if(grdRoleList.RowCount >0)
	{
		var rowIdxRole = objGrdRoleList[0];
		
		if( rowIdxRole == null)
		{
			rowIdxRole = 0;
		}
		
		grdMapping.AddRow();
		grdMapping.SetGridData(grdMapping.RowCount-1, 'tes_user_pk', grdUserList.GetGridData(rowIdxUser,"pk"));
		grdMapping.SetGridData(grdMapping.RowCount-1, 'tes_role_pk', grdRoleList.GetGridData(rowIdxRole,"pk"));
		grdMapping.SetGridData(grdMapping.RowCount-1, 'role_nm', grdRoleList.GetGridData(rowIdxRole,"role_nm"));
		grdMapping.SetGridData(grdMapping.RowCount-1, 'user_id', grdUserList.GetGridData(rowIdxUser,"user_id"));
		grdMapping.SetGridData(grdMapping.RowCount-1, 'full_name', grdUserList.GetGridData(rowIdxUser,"user_name"));
		grdMapping.SetGridData(grdMapping.RowCount-1, 'use_yn', "Y");
		
		grdRoleList.RemoveRowAt(rowIdxRole);
		
	}
	

}
function OnAddToMaping(sender,event)
{//alert("ondblclick");
	var rowIdxRole = event.row;
	
	var objGrdUserList = grdUserList.selectedrowindexes;
	if(objGrdUserList.length > 1)
	{
		alert("You must choose one user id");
		return;
	}
	var rowIdxUser = objGrdUserList[0];
	
	grdMapping.AddRow();
	grdMapping.SetGridData(grdMapping.RowCount-1, 'tes_user_pk', grdUserList.GetGridData(rowIdxUser,"pk"));
	grdMapping.SetGridData(grdMapping.RowCount-1, 'tes_role_pk', grdRoleList.GetGridData(rowIdxRole,"pk"));
	grdMapping.SetGridData(grdMapping.RowCount-1, 'role_nm', grdRoleList.GetGridData(rowIdxRole,"role_nm"));
	grdMapping.SetGridData(grdMapping.RowCount-1, 'user_id', grdUserList.GetGridData(rowIdxUser,"user_id"));
	grdMapping.SetGridData(grdMapping.RowCount-1, 'full_name', grdUserList.GetGridData(rowIdxUser,"user_name"));
	grdMapping.SetGridData(grdMapping.RowCount-1, 'use_yn', "Y");
	
	grdRoleList.RemoveRowAt(rowIdxRole);
}
function OnAddToMaping1(sender,event)
{
	var rowIdxUser = event.row;
	
	var objGrdRoleList = grdRoleList1.selectedrowindexes;
	if(objGrdRoleList.length > 1)
	{
		alert("You must choose one user id");
		return;
	}
	var rowIdxRole = objGrdRoleList[0];
	
	grdMapping1.AddRow();
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'TES_ROLE_PK', grdUserList1.GetGridData(rowIdxUser,"pk"));
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'TES_USER_PK', grdRoleList1.GetGridData(rowIdxRole,"pk"));
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'ROLE_NM', grdRoleList1.GetGridData(rowIdxRole,"role_nm"));
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'USER_ID', grdUserList1.GetGridData(rowIdxUser,"user_id"));
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'FULL_NAME', grdUserList1.GetGridData(rowIdxUser,"user_name"));
	grdMapping1.SetGridData(grdMapping1.RowCount-1, 'CB', "Y");
	
	grdUserList1.RemoveRowAt(rowIdxUser);
}
function removeObjectFrom(obj) 
{
	if(obj=='0')
	{
		if(confirm("Do you want delete data?"))
			{
				grdMapping.DeleteRow()//RemoveItem(i);
				dso_grd_stgsau00300_2.Call();
			}
		
	}	
	if(obj=='1')
	{
		if(confirm("Do you want delete data?"))
		{
			grdMapping1.DeleteRow()//RemoveItem(i);
			dso_grd_stgsau00300_5.Call();
		}
		
	}
}

function removeObjectFrom1() 
{
	grdMapping1.DeleteRow()//RemoveItem(i);
}


function saveMapping(obj)
{
    _gLoad = true;
	if(obj=='0')
	{
		
		dso_grd_stgsau00300_2.Call();
	}
	if(obj=='1')
	{
		dso_grd_stgsau00300_5.Call();
	}
}



function OnDataReceive(obj)
{
	if(obj.id == "dso_grd_stgsau00300_0")
    {
      //  if(_gLoad == true)
     //  {
      //     _gLoad = false;
			dso_grd_stgsau00300_2.Call("SELECT");
			
	//	}
    }
	else if(obj.id == "dso_grd_stgsau00300_4")
    {
     //  if(_gLoad == true)
  //     {
         //  _gLoad = false;
           dso_grd_stgsau00300_5.Call("SELECT");
    //   }
    }
	
   /* else if(dso.id == "dso_grd_stgsau00300_0")
    { 
       //var t = grdRoleList.selectedrowindexes;
       //alert(t[0]);
    	if(_gLoad == true)
        {
           _gLoad = false;
          
			dso_grd_stgsau00300_2.Call("SELECT");
		}
    }
    if(dso.id == "dso_grd_stgsau00300_2")
    {
       //alert(txtUserPK.value);
    	if(_gLoad == true)
       {
            _gLoad = false;
            dso_grd_stgsau00300_0.Call("SELECT");
       }
    }
     if(dso.id == "dso_grd_stgsau00300_5")
    {
       if(_gLoad == true)
       {
            _gLoad = false;
            dso_grd_stgsau00300_4.Call("SELECT");
       }
    }
    else if(dso.id == "dso_lst_stgsau00300_0")
    {
    	//dso_lst_stgsau00300_1.Call("SELECT");
    	
    }
     if(dso.id == "dso_lst_stgsau00300_1")
    {
    	lstDept.value='ALL';
    	OnSearch();
    }
 */
}
function OnSearchRole(obj)
{
	if(obj=='0')
	{
		dso_grd_stgsau00300_0.Call("SELECT");
	}
	if(obj=='1')
	{
		dso_grd_stgsau00300_3.Call("SELECT");
	}
}
function OnSearchTab(sender,event)
{
	var selectedTab = event.TabIdx;
	if(selectedTab == 1)
	{ 
		//alert("fail");
		grdRoleList1.refreshGrid(); 
	    grdUserList1.refreshGrid(); 
	    grdMapping1.refreshGrid();
		//dsoMenuTree.Call("SELECT");
		
	}
	if(selectedTab == 0)
	{
	   //alert("line 339 check lai");
		grdUserList.refreshGrid(); 
		grdRoleList.refreshGrid(); 
		grdMapping.refreshGrid();
		
	}
	
	/*else if (selectedTab == 1)
	{
		currentType = "L";
		//alert(currentType);
	}*/
}
function OnSearchMapping(sender,event)
{
	_txtRoleIdx.value = event.row;
	//alert("onclick");
	
}
function OnGetUserPK(sender,event)
{
	_gLoad = true;
	var rowIndex = event.row;
	txtUserPK.value= grdUserList.GetGridData(rowIndex,"PK");
	dso_grd_stgsau00300_0.Call("SELECT");
	//alert(txtUserPK.value);
}
</script>
</head>

<body>
 <ts-data id="dso_grd_stgsau00300_0" onreceive="OnDataReceive(this)" > 
	<xml>
		<dso type="grid" function="st_hr_sel_grd_gsau00300_0"  > 
			<data-inputs bind="grdRoleList" >	
			        <data-input bind="txtUserPK" ></data-input>
					<data-input bind="txtRoleName" ></data-input>
			</data-inputs> 
			<data-outputs bind="grdRoleList" ></data-outputs>
		</dso> 
	</xml> 
</ts-data>

  <ts-data id="dso_grd_stgsau00300_1" onreceive="OnDataReceive(this)" > 
      <xml>
          <dso type="grid" function="st_hr_sel_grd_gsau00300_1" > 
              <data-inputs bind="grdUserList"> 
                  <data-input bind="txtFullName" ></data-input>
                  <data-input bind="txtEmpID" ></data-input>
                  <data-input bind="txtClientDB" ></data-input> 
              </data-inputs> 
              <data-outputs bind="grdUserList" ></data-outputs>
          </dso> 
      </xml> 
  </ts-data>

 <ts-data id="dso_grd_stgsau00300_2" onreceive="OnDataReceive(this)" > 
    <xml>
        <dso type="grid" parameter="USE_YN,ST_DATE,END_DATE,ADD_YN,EDIT_YN,DEL_YN,PRINT_YN,CONFIRM_YN,CANCEL_YN,UNDO_YN,REDO_YN,EXPORT_YN,ATT_FILE,ATT_FILE_VIEW
                   ,ATT_FILE_DOWN_LOAD,PK,TES_USER_PK,TES_ROLE_PK" 
        	function="st_hr_sel_grd_gsau00300_2" procedure="st_hr_upd_grd_stgsau00300_2"> 
            <data-inputs bind="grdMapping" > 
                <data-input bind="txtUserPK" ></data-input>
            </data-inputs> 
            <data-outputs bind="grdMapping" ></data-outputs>
        </dso> 
    </xml> 
</ts-data> 


<ts-data id="dso_grd_stgsau00300_3" onreceive="OnDataReceive(this)" > 
	<xml> 
		<dso type="grid" function="st_hr_sel_grd_gsau00300_3"  > 
			<data-inputs bind="grdRoleList1" >
				<data-input bind="txtRoleName2" ></data-input>
			</data-inputs> 
			<data-outputs bind="grdRoleList1" > </data-outputs>
		</dso> 
	</xml> 
</ts-data>

  <ts-data id="dso_grd_stgsau00300_4" onreceive="OnDataReceive(this)" > 
      <xml>
          <dso type="grid" function="st_hr_sel_grd_gsau00300_4" >  
              <data-inputs bind="grdUserList1"> 
                  <data-input bind="lstDept" > </data-input>
                  <data-input bind="txtFullName" ></data-input> 
                  <data-input bind="txtKeyWord" > </data-input>
                  <data-input bind="txtRolePK" > </data-input>
                  <data-input bind="txtClientDB" > </data-input> 
              </data-inputs> 
              <data-outputs bind="grdUserList1" > </data-outputs>
          </dso> 
      </xml> 
  </ts-data>

 <ts-data id="dso_grd_stgsau00300_5" onreceive="OnDataReceive(this)" > 
    <xml>
        <dso type="grid" parameter="CB,ST_DATE,END_DATE,PK,TES_USER_PK,TES_ROLE_PK" function="st_hr_sel_grd_gsau00300_5" procedure="st_hr_upd_grd_stgsau00300_5"> 
            <data-inputs bind="grdMapping1" > 
                <data-input bind="txtRolePK" > </data-input>
				<data-input bind="txtClientDB" > </data-input>
            </data-inputs> 
            <data-outputs bind="grdMapping1" > </data-outputs>
        </dso> 
    </xml> 
</ts-data> 

<ts-data id="dso_lst_stgsau00300_1" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="st_hr_sel_lst_gsau00300_0">
            <data-inputs>
                <data-input bind="txtList" ></data-input>
            </data-inputs>
            <data-outputs>
				<data-output bind="lstDept"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<!----------------------------------->
<table  style="width: 100%; height: 100%"  border="0">
<tr>
	<td>
	<ts-tab id="idTab" >
		<!------>
		<table align="top" id="User_Roles" name="User-Roles" style="width:100%;height:100%;border:0" cellpadding="0" cellspacing="0" border="1">
			
			<tr height="100%">
				<td width="30%" >
					<table style="width: 100%; height: 100%;" >
						<tr height="5%">
							<td style="white-space:nowrap;"><ts-label id='lblEmpName'><h4><p style="color : #006666">Emp name</p></h4></ts-label></td>
							<td><ts-textbox id="txtFullName" onenterkey="OnSearch(0)" ></ts-textbox></td>
							<td style="white-space:nowrap;"><ts-label id='lblEmpID'><h4><p style="color : #006666">Emp ID</p></h4></ts-label></td>
							<td><ts-textbox id="txtEmpID" onenterkey="OnSearch('0')" ></ts-textbox></td>
							<td>
								<ts-button id="btnSearch9" img="search" alt="Search" text="Search" onclick="onSearch('0')"imgtype="0">Search </ts-button>
						    </td>
					  	</tr >
						<tr height="45%">
							<td colspan="5">
								
								<ts-grid id="grdUserList"  rowClick="OnGetUserPK(sender,event)" style="height:45%" >
									 <columns>
										<column text="User ID" datafield="USER_ID" columntype="textbox" editable="false" width="100"></column>
										<column text="Full Name" datafield="USER_NAME" columntype="textbox" editable="false" width="200"></column>
										<column text="Employee ID" datafield="EMP_ID" columntype="textbox" editable="false" width="100"></column>
										<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="0" editable="false"></column>
									</columns>
								</ts-grid>
									 
							</td>
						</tr>
						<tr height="50%">
							<td colspan="5">
							   <table width="100%" height="100%">
								   <tr height="10%">
										<td><ts-label id='lblRoleName'>Role name</ts-label></td>
										<td><ts-textbox id="txtRoleName" onenterkey="OnSearchRole('0')" ></ts-textbox></td>
										<td>
											<ts-button id="btnSearch" img="search" alt="Search" text="Search" onclick="OnSearchRole(0)"imgtype="0">Search </ts-button>
											
										</td>
										<td>
											<ts-imgbtn id="btnAdd6" img="select" text="Select" onclick="addObjectTo0()"></ts-imgbtn>
										</td>
									</tr>
									<tr height="90%">
										<td colspan="4" width="100%"> 
										 
											<ts-grid id="grdRoleList" sortable="true" rowDblClick="OnAddToMaping(sender,event)" rowClick="OnSearchMapping(sender,event)"  style="height:100%" >
												 <columns>
													<column text="Role Name" datafield="ROLE_NM" columntype="textbox" editable="false" width="400"></column>
													<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="0" editable="false"></column>
												</columns>
											</ts-grid>
										
										</td>
									</tr>
							   </table>
							</td>
						</tr>
					</table>
					
				</td>
				<td width="70%">
					<table style="width: 100%; height: 100%;">
						<tr height="5%">
							<td width="90%"></td>
							<td>
								
							</td>
							<td width="1%">                  
								<ts-button id="btnDelete" img="delete" alt="Delete" text="Search" onclick="removeObjectFrom('0')"imgtype="0">Delete </ts-button>
							</td>									
							<td width="1%">
								<ts-button id="btnSave" img="save" alt="Save" text="Search" onclick="saveMapping('0')"imgtype="0">Save </ts-button>
							</td>
						</tr>
						<tr height="95%">
							<td colspan="5">	
							<ts-grid id="grdMapping" sortable="true" oncelldblclick="removeObjectFrom('0')"  style="height: 100%;">
									 <columns>
										<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="150" editable="true"></column>
										<column text="UserID" datafield="USER_UD" columntype="textbox" width="60" editable="true"></column>
										<column text="Emp Name" datafield="FULL_NAME" columntype="textbox" width="150" editable="true"></column>
										<column text="Active" datafield="USE_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Start Date" datafield="ST_DATE" columntype="date" width="80" editable="true"></column>
										<column text="End Date" datafield="END_DATE" columntype="date" width="80" editable="true"></column>
										<column text="Add YN" datafield="ADD_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Edit YN" datafield="EDIT_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Del YN" datafield="DEL_YN" columntype="checkbox" width="50" editable="true"> </column>
										<column text="Print YN" datafield="PRINT_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Confirm YN" datafield="CONFIRM_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Cancel YN" datafield="CANCEL_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Undo YN" datafield="UNDO_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Redo YN" datafield="REDO_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Export YN" datafield="EXPORT_YN" columntype="checkbox" width="50" editable="true"></column>
										<column text="Att File" datafield="ATT_FILE" columntype="checkbox" width="50" editable="true"></column>
										<column text="Att File View" datafield="ATT_FILE_VIEW" columntype="checkbox" width="50" editable="true"></column>
										<column text="Att File Dowload" datafield="ATT_FILE_DOWN_LOAD" columntype="checkbox" width="50" editable="true"></column>
										<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="0" editable="false"></column>
										<column text="_UserPK" datafield="TES_USER_PK" columntype="textbox" hidden="true" width="50" editable="false"></column>
										<column text="_RolePK" datafield="TES_ROLE_PK" columntype="textbox" hidden="true" width="50" editable="false"></column>
									</columns>
								</ts-grid>
							  
							</td>
						</tr>
					</table>
					
					
				</td>
			</tr>
			
		</table>
		<table border="1"  style="width: 100%; height: 100%;" id="Roles_User"  name="Roles-User" >
			<tr height="100%">
				<td width="30%">
					<table height="100%" width="100%">
						<tr height="5%">
							<td><ts-label id='lblRoleName'><h4><p style="color : #006666">Role Name</p></h4></ts-label></td>
							<td><ts-textbox id="txtRoleName2" styles="width:100%" onenterkey="OnSearchRole('1')" ></ts-textbox></td>
							<td>
								<ts-button id="btnSearch4" img="search" alt="Search" text="Search" onclick="OnSearchRole(1)"imgtype="0">Search </ts-button>
							</td>
						</tr>
						<tr height="45%">
							<td colspan="3">
								<ts-grid id="grdRoleList1" rowClick="loadRoleByUser1(sender,event)" sortable="true" style="height:100%">
										 <columns>
										<column text="Role Name" datafield="ROLE_NM" columntype="textbox" editable="false" width="400"></column>
										<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="0" editable="false" width="0"></column>
									</columns>
								</ts-grid>

							</td>
						</tr>
						<tr height="50%">
							<td colspan="3"> 
								<table  style="width: 100%; height: 100%;">
									
									<tr height="0%">
										
										<td><ts-label id='lblKey' style="display:none">Key</ts-label></td>
										<td>
											<ts-list id="lstKey" displaymember="name" valuemember="obj_id" style="display:none"></ts-list>
										</td>
										
									</tr>
									<tr height="5%">
										<td><ts-label id='lblDepartment'>Department</ts-label></td>
										<td><ts-list id="lstDept" displaymember="org_nm" valuemember="pk"  emptyvalue="ALL" emptytext="--select All--" emptytextpoint="last"></ts-list></td>
										
										<td><ts-imgbtn id="btnSearch5" img="search" text="Search" data-tooltip-position="left" style="font-size:x-large;" onclick="loadRoleByUser('1')"></ts-imgbtn></td>
										<td><ts-imgbtn id="btnAdd7" img="select" text="Select" data-tooltip-position="left" style="font-size:x-large;" onclick="addObjectTo1()"></ts-imgbtn></td>
										<td colspan=0><ts-textbox id="txtKeyWord" onenterkey="loadRoleByUser('1')" ></ts-textbox></td>
									</tr>
									<tr height="90%">
										<td colspan="7">
											<ts-grid id="grdUserList1" sortable="true" rowDblClick="OnAddToMaping1(sender,event)"   style=" height: 100%;" >
												 <columns>
													<column text="User ID" datafield="USER_ID" columntype="textbox" editable="false" width="100"></column>
													<column text="Full Name" datafield="USER_NAME" columntype="textbox" editable="false" width="200"></column>
													<column text="Employee ID" datafield="EMP_ID" columntype="textbox" editable="false" width="200"></column>
													<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="0" editable="false"></column>
												</columns>
											</ts-grid>
										</td>
									</tr>
								</table>
							</td>
					</tr>
					</table>
				</td>
				<td width="70%">
					<table  style="width: 100%; height: 100%;">
						<tr height="5%">
							<td width="80%"></td>
							<td>
								
							</td>
							<td>
								<ts-imgbtn id="btnDelete1" img="delete" text="Delete" onclick="removeObjectFrom('1')"></ts-imgbtn>
							</td>				
															
							<td>
								<ts-imgbtn id="btnSave1" img="save" text="Save" onclick="saveMapping('1')"></ts-imgbtn>
							</td>
						</tr>
						<tr height="95%">
							<td colspan="5">
								<ts-grid id="grdMapping1" sortable="true" rowClick="On"  style="height: 100%;">
									 <columns>
										<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="300"></column>
										<column text="UserID" datafield="USER_ID" columntype="textbox" width="100"></column>
										<column text="Emp Name" datafield="FULL_NAME" columntype="textbox" width="200"></column>
										<column text="Active" datafield="CB" columntype="checkbox" width="100"></column>
										<column text="Start Date" datafield="ST_DATE" columntype="date" width="100"></column>
										<column text="End Date" datafield="END_DATE" columntype="date" width="100"></column>
										<column text="_PK" datafield="PK" columntype="textbox" hidden="true" width="50" editable="false"></column>
										<column text="_UserPK" datafield="TES_USER_PK" columntype="textbox" hidden="true" width="50" editable="false"></column>
										<column text="_RolePK" datafield="TES_ROLE_PK" columntype="textbox" hidden="true" width="50" editable="false"></column>
									</columns>
								</ts-grid>
							  
							</td>
						</tr>
					</table>
				</td>
			</tr>
			
		</table>
		<!------->
			
	 </ts-tab>
   </td>
  </tr>
</table>	
<ts-textbox id="txtTemp"   style="display:none" ></ts-textbox>
<ts-textbox id="txtUserPK"   style="display:none" ></ts-textbox> 
<ts-textbox id="txtClientDB"   style="display:none" ></ts-textbox>
<ts-textbox id="txtRolePK"   style="display:none" ></ts-textbox>
<ts-textbox id="_txtRoleIdx"   style="display:none" ></ts-textbox>
<ts-textbox id="txtList"   style="display:none" ></ts-textbox>
</body>
</html>