

<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Role Entry</title>

<style type="text/css">

</style>
<script type="text/javascript">
var _gLoad = false;
function BodyInit()
{
	
	//txtClientPK.value = System.getClientPk();
	//chkActive.value = "Y";
	//chkActive1.value = "Y";
//	alert(txtClientPK.value);
	dso_tre_gsau00200_0.Call("SELECT");
	dso_lst_gsau00200_0.Call("SELECT");
	//alert("fdasfweee");
	grdMapping.GetGridControl().FrozenCols = 6;  
	

	//OnSearchRole(); 
}
//----------------------------------------Role------------------------------------------------------
function OnSearchRole()
{
	dso_grd_gsau00200_0.Call("SELECT");
}
function OnNewRole()
{ 
	//var l_cur_date = new Date();
	
	var date = new Date();
	var l_cur_date = moment(date).format('YYYYMMDD');
	
    grdRole.AddRow();
    grdRole.SetGridData(grdRole.RowCount-1 , 'CB', "Y"); //role pk
    grdRole.SetGridData(grdRole.RowCount-1 , 'ST_DATE', l_cur_date); //role pk
    
    
}
function OnDeleteRole()
{
	
	if(confirm("Do you want to delete ?"))
	{
		grdRole.DeleteRow();
		dso_grd_gsau00200_0.Call();
	}
    
}
function OnUnDeleteRole()
{
    grdRole.UnDeleteRow();
}
function OnSaveRole()
{
    if(CheckRoleDataIsValid())
    {
    	if(confirm("Do you want to save?"))
        	dso_grd_gsau00200_0.Call();
    }
}
function CheckRoleDataIsValid(){
    return true;
}
//----------------------------------------------------End of Role-----------------------------------------------------------------
/*function selectedTextEvent(event)
{	 	
	
	switch (event.args.item)
	{
		case 0:
			OnSearchRole();
			break;
		case 1:
			
			dso_tre_gsau00200_0.Call("SELECT");
			OnSearchRoleList();
			
			break;
	}
}*/

function selectedTextEvent(sender,event)
{
	var selectedTab = event.TabIdx;
	
	if(selectedTab ==1)
	{
		
		grdRoleList.refreshGrid(); 
		grdObjList.refreshGrid(); 
		grdMapping.refreshGrid();
		dso_tre_gsau00200_0.Call("SELECT");
		//OnSearchRoleList();
		//onSearchfavourite();
	}
	if(selectedTab == 0)
	{
		
		grdRole.refreshGrid();
		OnSearchRole();
	}
	/*else if (selectedTab == 1)
	{
		currentType = "L";
		//alert(currentType);
	}*/
}

//---------------------------------------------------- Function for mapping-----------------------------------------------------------
function OnSearchRoleList()
{   
	//grdMapping.ClearData();
	//grdObjList.ClearData();
    dso_grd_gsau00200_1.Call("SELECT");    
}

function loadObjectList(sender,event)
{   
//	alert("safdafs");
	//var RowIndex = event.args.rowindex ;
	//alert(RowIndex);
    _gLoad = true;
	//txtParentPK.value = "0";
	txtRolePK.value = grdRoleList.GetGridData(event.row,"PK");
	
	OnFilterObjectChange();
	dso_grd_gsau00200_2.Call("SELECT");
}
function saveMapping()
{

	//Build priviledge code
	_gLoad = false;
	if(confirm("Do you want to save?"))
		dso_grd_gsau00200_3.Call();
}


function OnAddTo() 
{
    var objCtrl = grdObjList.selectedrowindexes;
	var rolePK = txtRolePK.value;
	var i = 0;
	
	if (rolePK != ""  ) 
	{
		//get selected row
		if (objCtrl.length>0) 
		{
			for (i=0;i < objCtrl.length;i++)
			{
				var rowindex=objCtrl[i];

					grdMapping.AddRow();
		
					grdMapping.SetGridData(grdMapping.RowCount-1 , "TES_ROLE_PK", rolePK); //role pk
					grdMapping.SetGridData(grdMapping.RowCount-1 , "TES_OBJ_PK",grdObjList.GetGridData(rowindex,"PK")); //obj pk				
					grdMapping.SetGridData(grdMapping.RowCount-1 , "MENU_ID",grdObjList.GetGridData(rowindex,"MENU_ID"));//obj ID
					grdMapping.SetGridData(grdMapping.RowCount-1 , "FORM_NM",grdObjList.GetGridData(rowindex,"FORM_NM"));//Obj name
				
			}
			
			for (i=objCtrl.length;i >=0;i--)
			{ var rowindex=objCtrl[i];
			//     alert(objCtrl.length +"--"+rowindex);
				grdObjList.DeleteRowAt(rowindex,true);
			}
			grdObjList.clearselection();
			
		}			
	}		
	else {
		alert ("Please select Role for mapping.");
	}
}
//===================================
function OnAddTo2(sender,event) 
{
	var rolePK = txtRolePK.value;
	var i = 0;
	var columnidx = event.col;
	var rowIndex = event.row;
	var columnDataField;
	//rowidx=event.args.rowindex;
	if ((rolePK) != "") {
	    if(grdObjList.rowCount <= 0){
	        alert("Please select menu to add to role.");
	        return;
	    }
		grdMapping.AddRow();
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "TES_ROLE_PK", rolePK); //role pk
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "TES_OBJ_PK",grdObjList.GetGridData(rowIndex,"PK")); //obj pk				
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "MENU_ID",grdObjList.GetGridData(rowIndex,"MENU_ID"));//obj ID
		
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "FORM_NM",grdObjList.GetGridData(rowIndex,"FORM_NM"));//Obj name
		//grdMapping.SetGridData(grdMapping.RowCount - 1 , "role_nm",grdObjList.GetGridData(rowIndex,"form_nm"));//Obj name
		
		//grdRoleList role_nm
		//grdObjList.DeleteRowAt(rowIndex,true);
		//grdObjList.RemoveRow();
		//grdObjList.row = -1;
		//grdObjList.clearselection();
	} 
	else {
		alert ("Please select Role for mapping.");
	}
}
//==========================================
function OnCellDoubleClick(sender,event)
	{
		var columnidx = event.col;
		var rowIndex = event.row;
		var columnDataField;
		if (currentType == "S")
		{
			columnDataField = grdDetail1.columns[columnidx].binding;
		}
		else if (currentType == "L")
		{
			columnDataField = grdDetail2.columns[columnidx].binding;
		}
		//alert(columnDataField);
		if (columnDataField == "abs_type")
		{
			var url = "/system/index.gw?openType=F&objId=steapustchea0006&rowIndex=" + rowIndex + "&p=abs_type&tab=" + currentType;
			System.OpenModal(  url , 600, 300 , "Select Absence Type", document, AfterSelectAbsType);
		}
		else if (columnDataField == "e_time")
		{
			var url = "/system/index.gw?openType=F&objId=steapustchea0006&rowIndex=" + rowIndex + "&p=e_time&tab=" + currentType;
			System.OpenModal(  url , 600, 300 , "Select Abs Time", document, AfterSelectAbsTime);
		}
		else if (columnDataField == "reason" || columnDataField == "reason1")
		{
			var url = "/system/index.gw?openType=F&objId=steapustchea0006&rowIndex=" + rowIndex + "&p=reason_type&tab=" + currentType;
			System.OpenModal(  url , 600, 300 , "Select Reason Type", document, AfterSelectReasonType);
		}
	}



function OnDelete() 
{
//	alert("OnDelete");
	if(confirm("Do you want to delete?\nBạn có muốn xóa dữ liệu?"))
	{
		grdMapping.DeleteRow();
		dso_grd_gsau00200_3.Call();
	}
}

function OnUnDelete() 
{
    grdMapping.UnDeleteRow();
}

function OnDataReceive(dso)
{
    if(dso.id == "dso_grd_gsau00200_2")
    {
       if(_gLoad == true)
       {
           _gLoad = false;
           dso_grd_gsau00200_3.Call("SELECT");
       }
    }
    else if(dso.id == "dso_grd_gsau00200_3")
    {
       if(_gLoad == true)
       {
            _gLoad = false;
            dso_grd_gsau00200_2.Call("SELECT");
       }
    }
    else if(dso.id == "dso_tre_gsau00200_0")
    {
    	dso_lst_gsau00200_0.Call("SELECT");
    	//OnSearchRoleList();
	}
    else if(dso.id == "dso_lst_gsau00200_0")
    {
    	OnSearchRole();
    	//OnSearchRoleList();
	}
    else if(dso.id == "dso_lst_gsau00200_0")
    {
    	OnSearchRole();
    	//OnSearchRoleList();
	}
	else if(dso.id == "dso_grd_gsau00200_1")
    {
		
	}
    
    
	
}
function OnSearch()
{
    OnFilterObjectChange();
    dso_grd_gsau00200_2.Call("SELECT");
}
function OnFilterObjectChange()
{
    if(lstKey.value == "1")
    {
        txtObjectID.value = txtFilter.value;
        txtObjectName.value = "";
    }
    else
    {
        txtObjectID.value = "";
        txtObjectName.value = txtFilter.value;
    }
}



function MenuClick(sender,event)
{
    if(txtRolePK.value == ""){
		alert("Please select a role firstly.");
		return;
	}
	
	//var node = idMenu.GetCurrentNode();
	txtParentPK.value = sender.value ;
	_gLoad = true;
	OnFilterObjectChange();
	dso_grd_gsau00200_2.Call("SELECT");
}

/*function onenterkey(event){
	//console.log(event);
	//console.log(event.srcElement.parentElement);
	alert("few");
	var key=event.keyCode || event.which;
	 
	 if (key==13){
		
		  event.preventDefault(); 
		   if (event.srcElement.parentElement.id=="txtRoleName")
		  {alert("dd");
			   OnSearchRole();
		  }
		   if (event.srcElement.parentElement.id=="txtRoleName1")
			  {OnSearchRoleList();
			  }
		  if (event.srcElement.parentElement.id=="txtFilter")
		  {OnSearch();
		  }
	  }
	}	  
	*/
</script>
</head>
<body >
<ts-data id="dso_tre_gsau00200_0" onreceive="OnDataReceive(this)" > 
        <xml>
            <dso type="tree" function="st_hr_sel_tre_gsau00200_0" > 
                <data-inputs > 
					<data-input bind="txtTreeSearch" ></data-input>
            	</data-inputs>  
				<data-outputs bind="idMenu" ></data-outputs>
            </dso> 
        </xml> 
</ts-data> 


<ts-data id="dso_grd_gsau00200_0" onreceive="OnDataReceive(this)" > 
	<xml>
		<dso type="grid" parameter="ROLE_NM,CB,ST_DATE,END_DATE,PK,CLIENT_PK" function="st_hr_sel_grd_gsau00200_0" procedure="st_hr_upd_grd_gsau00200_0"  > 
			<data-inputs bind="grdRole" > 
			    <data-input bind="txtRoleName" ></data-input>
			    <data-input bind="chkActive" ></data-input>
				<data-input bind="txtClientPK" ></data-input>
			</data-inputs>
			<data-outputs bind="grdRole" ></data-outputs>
		</dso> 
	</xml> 
</ts-data> 

<ts-data id="dso_grd_gsau00200_1"  onreceive="OnDataReceive(this)" > 
	<xml>
		<!-- function="sp_es_sel_role_list" -->
		<dso type="grid" function="st_hr_sel_grd_gsau00200_1"  > 
			<data-inputs bind="grdRoleList" > 
			    <data-input bind="txtRoleName1" ></data-input>
			    <data-input bind="chkActive1" ></data-input>
				<data-input bind="txtClientPK" ></data-input>
			</data-inputs>
			<data-outputs bind="grdRoleList" ></data-outputs>
		</dso> 
	</xml> 
</ts-data> 

<ts-data id="dso_grd_gsau00200_2" onreceive="OnDataReceive(this)" > 
    <xml>
    	<!-- function="es_sel_object_list" -->
        <dso type="grid" function="st_hr_sel_grd_gsau00200_2"  > 
            <data-inputs bind="grdObjList"  > 
				<data-input bind="txtRolePK" ></data-input>
                <data-input bind="txtObjectID" ></data-input>
                <data-input bind="txtObjectName" ></data-input>
                <data-input bind="txtParentPK" ></data-input>		
            </data-inputs>
            <data-outputs bind="grdObjList" ></data-outputs>
        </dso> 
    </xml> 
</ts-data> 
				
<ts-data id="dso_grd_gsau00200_3" onreceive="OnDataReceive(this)" > 
    <xml>
    	<!-- function="sp_es_sel_roleobj_mapping" procedure="sp_es_upd_roleobj_mapping" -->
        <dso type="grid" parameter="PK,TES_ROLE_PK,TES_OBJ_PK" 
			function="st_hr_sel_grd_gsau00200_3" 
			procedure="st_hr_upd_grd_gsau00200_3" > 
            <data-inputs bind="grdMapping" > 
                <data-input bind="txtRolePK" ></data-input>
            </data-inputs>
            <data-outputs>
				<data-output bind="grdMapping"></data-output>
			</data-outputs>
        </dso> 
    </xml> 
</ts-data>



<ts-data id="dso_lst_gsau00200_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="st_hr_sel_lst_gsau00200_0">
            <data-inputs>				
				 <data-input bind="txtTemp" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstKey"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<table  border=1  style="width: 100%; height: 100%;" >
<tr>
<td width="100%" height="100%">
<ts-tab id="idTab" onPageActivated="selectedTextEvent(sender,event)">
<table style="width: 100%; height: 100%;" id="Role_Entry"  name="Role Entry" >
		<tr>
			<td width="10%"><ts-label id='lblRoleName'>Role Name</ts-label></td>
		  <td width="20%"><ts-textbox id="txtRoleName"   ></ts-textbox></td>
			<td width="8%"><ts-label id='lblActive'>Active</ts-label></td>
			<td width="2%"><ts-checkbox id="chkActive" mode="01" value="T" ></ts-checkbox></td>
			<td width="30%"></td>
			<td width="3%">
				
			</td>
			<td width="3%">
				<ts-button id="btnSearch" img="search" text= "Search" title="Search"  onclick="OnSearchRole()" imgtype="0">Search</ts-button>
			</td>
			<td width="3%">
				<ts-button id="btnNewRole" img="new" text="Insert" title="New"  onclick="OnNewRole()" imgtype="0">Insert</ts-button>
			</td>
			<td width="3%">
				<ts-button id="btnDleteRole" img="delete" text="Delete" title="Delete"  onclick="OnDeleteRole()" imgtype="0">Delete</ts-button>
			</td> 
			<td width="3%">
				<ts-button id="btnSaveRole" img="save" text="Save" title="Save" data-tooltip-position="left" style="font-size:x-large;" onclick="OnSaveRole()" imgtype="0">Save</ts-button>
				
			</td>				
		 </tr>
		 <tr height="96%">
			<td colspan=10>
				<ts-grid id="grdRole" sortable="true" width="100%" rowClick="loadObjectList(sender,event)" style="width:100%; height:100%" edit="true" >
					 <columns>
					 	<column text="No" 		  datafield="NO" 	   columntype="textbox"  width="30" 	  	editable="false" cellsalign="center"></column>
						<column text="Role Name"  datafield="ROLE_NM"  columntype="textbox"  width="300" ></column>
						<column text="Active" 	  datafield="CB" 	   columntype="checkbox" width="300"  	editable="true" cellsalign="center" ></column>
						<column text="Start Date" datafield="ST_DATE"  columntype="date"     width="200"></column>
						<column text="End Date"   datafield="END_DATE" columntype="date"     width="400"></column>
						<column text="_PK" 		  datafield="PK" 	   columntype="textbox"  width="0"   	editable="false" hidden="true" ></column>
						<column text="_Client_PK" datafield="CLIENT_PK" columntype="textbox" width="0" 		editable="false" hidden="true"  ></column>
					</columns>
				</ts-grid>
		 	</td>
	   </tr>
</table>	
<table width="100%" border="1" height="100%" id="Role_Object_Mapping"  name="Role Object Mapping">
	<tr height="100%">	
		<td width="30%"  valign="button">
		<table border="1">	
			<table height="50%" border="1">				
				<tr height="10%" valign="center">
					<td>
						<table width="100%"  height="100%">
							<tr>
								<td width="20%" height="40"><ts-label id='lblRoleName1'>Role Name</ts-label></td>
								<td width="40%"><ts-textbox id="txtRoleName1" onkeyup="enterkey(event)" ></ts-textbox></td>
								<td width="10%"><ts-label id='lblActive1'>Active</ts-label></td>
								<td width="5%"><ts-checkbox id="chkActive1" mode="01" value="T" ></ts-checkbox></td>
								<td width="20%"></td>
								<td width="5%">
									<ts-button id="btnSearch1" img="search" text="Search"  onclick="OnSearchRoleList()" imgtype="0">Search</ts-button>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr height="40%">
					<td style="width:100%; height:100%"> 
						<ts-grid id="grdRoleList"  style="width:100%;" height="100%" rowClick="loadObjectList(sender,event)"   editable="false">
							<columns>
								<column text="No" 		 datafield="NO" 	 columntype="textbox" width="40" 	editable="false" cellsalign="center"></column>
								<column text="Role Name" datafield="ROLE_NM" columntype="textbox" width="324" 	editable="false"></column>
								<column text="_PK" 		 datafield="PK" 	 columntype="textbox" width="0"		editable="false" hidden="true"  ></column>
							</columns>
						</ts-grid>
					</td>
				</tr>				
			</table>			
			<table table width="100%" height="50%">
				
				   	
				<tr height="45%" >
					<td height="242"  valign="top" >
						<ts-classictreeview  id="idMenu" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="MenuClick(sender,event)" >
						</ts-classictreeview>
					</td>
				</tr>	
			</table>
		</table>
      </td>
	   <td width="70%" valign="top" >
			<table width="100%"  height="100%">			
			<tr height="50%">
				<td colspan=4>
					<table width="100%" height="100%">
						<tr >
							
							<td style="width:70%; height:100%">
								<table width="100%" height="100%">
									<tr height="8%">
										<td width="8%" height="34"><ts-label id='lblFilterKey'>Filter key</ts-label></td>
										<td width="15%">
										  <ts-list id="lstKey" displaymember="NAME" valuemember="obj_id" emptytextpoint="last" ></ts-list>
										</td>
										<td width="10%"><ts-label id='lblValue'>Value</ts-label></td>
										<td width="28%"><ts-textbox id="txtFilter" styles="width:100%" onkeyup="enterkey(event)" ></ts-textbox></td>
										
										<td width="1%" align="right">
											<ts-button id="btnSearch2" img="search" text="Search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
										</td>
										<td width="1%" align="right">
											<ts-button id="btnAddTo" img="select" text="Select" onclick="OnAddTo()" imgtype="0">Select</ts-button>
										</td>
									</tr>
									<tr height="92%">
										<td colspan="6" style="width:100%; height:100%">
												
											<ts-grid id="grdObjList" sortable="true"style="width:100%;" height="350px" rowDblClick="OnAddTo2(sender,event)"  editable="false" autoresizecolumns="true" >
												 <columns>
												 	<column text="No" 		datafield="NO" 		columntype="textbox"  width="50"   editable="false" cellsalign="center"></column>
													<column text="Menu ID" 	datafield="MENU_ID" columntype="textbox"  width="200"  editable="false"></column>
													<column text="Menu Name" datafield="FORM_NM" columntype="textbox" width="206"  editable="false"></column>
													<column text="Parent Menu Name" datafield="PARENT_NAME" 		  width="400"  editable="false" columntype="textbox"   ></column>
													<column text="_PK" 		datafield="PK" 		columntype="textbox"  width="1" hidden="true"  ></column>
												</columns>
											</ts-grid>
											
										</td>
									</tr>
								</table>
							</td>
						</tr>
						
					</table>
				</td>
			</tr>
			
			<tr height="6%">
				<td colspan=2 width="98%" align="center"><ts-label data-style="text-align:center" id='lblMapping'>Mapping table (Role-Menu)</ts-label></td>
				<td width="1%">
					<ts-button id="idDelete" img="delete" text="Delete"  onclick="OnDelete()" imgtype="0">Delete</ts-button>
				</td>							
				<td width="1%">
					<ts-button id="idBtnUpdate" img="save" text="Save"  onclick="saveMapping()" imgtype="0"> Save</ts-button>
				</td>
			</tr>
			<tr height="44%">
				<td colspan="4" style="width:100%; height:100%">
						
					<ts-grid id="grdMapping" sortable="true" style="width:100%;" height="350px" editable="" autoresizecolumns="true">
							 <columns>
							 	<column text="No" 		 datafield="NO" 	     columntype="textbox" width="50"  	editable="" cellsalign="center"></column>
								<column text="Menu ID" 	 datafield="MENU_ID"     columntype="textbox" width="200"  	editable=""></column>
								<column text="Menu Name" datafield="FORM_NM"     columntype="textbox" width="210"  	editable="false"></column>
								<column text="Role Name" datafield="ROLE_NM"     columntype="textbox" width="400"  	editable="false"></column>
								<column text="_PK" 		 datafield="PK" 	     columntype="textbox" width="0" 	hidden="true"  ></column>
								<column text="_RolePK" 	 datafield="TES_ROLE_PK" columntype="textbox" width="0" 	hidden="true"  ></column>
								<column text="_ObjPK" 	 datafield="TES_OBJ_PK"  columntype="textbox" width="0" 	hidden="true"  ></column>
							</columns>
				  </ts-grid>
							
			  </td>
			  </tr>
		</table>
	  </td>
	</tr>
</table>
</ts-tab>
</td>
</tr>
</table>
<ts-textbox id="txtTemp" style="display:none;"></ts-textbox>
<ts-textbox id="txtTreeSearch" style="display:none;"></ts-textbox>
<ts-textbox id="txtClientPK"  text="" style="display:none" ></ts-textbox> 
<ts-textbox id="txtParentPK"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="txtRolePK"  text="" style="display:none" ></ts-textbox> 
<ts-textbox id="txtObjectID"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="txtObjectName"  text="" style="display:none" ></ts-textbox>
</body>
</html>