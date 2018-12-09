<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Role Entry</title>
<style type="text/css">

</style>
<script type="text/javascript">
var _gLoad = false;
function BodyInit()
{
	
	txtClientPK.value = System.getClientPk();
	chkActive.value = "Y";
	chkActive1.value = "Y";
	
	//alert("fdasf");
	dsoMenuTree.Call("SELECT");
	//dsolstKey.Call("SELECT");
	//alert("fdasfweee");
	grdMapping.GetGridControl().FrozenCols = 6;  
	

	//OnSearchRole(); 
}
//----------------------------------------Role------------------------------------------------------
function OnSearchRole()
{
	dsoRole.Call("SELECT");
}
function OnNewRole()
{
    grdRole.AddRow();
    //var crt=grdRole.GetGridControl();
	//crt.jqxGrid('selectrow',grdRole.rowCount-1);
	//crt.jqxGrid('selectcell',grdRole.rowCount-1 , 'role_nm');
}
function OnDeleteRole()
{
    grdRole.DeleteRow();
}
function OnUnDeleteRole()
{
    grdRole.UnDeleteRow();
}
function OnSaveRole()
{
    if(CheckRoleDataIsValid())
    {
        dsoRole.Call();
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
			
			dsoMenuTree.Call("SELECT");
			OnSearchRoleList();
			
			break;
	}
}*/

function selectedTextEvent(sender,event)
{
	var selectedTab = event.TabIdx;
	if(selectedTab ==1)
	{
		//grdRoleList.refreshGrid(); 
		//grdObjList.refreshGrid(); 
		//grdMapping.refreshGrid();
		dsoMenuTree.Call("SELECT");
		//OnSearchRoleList();
		//onSearchfavourite();
	}
	if(selectedTab == 0)
	{
		//grdRole.refreshGrid();
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
    dsoRoleList.Call("SELECT");    
}

function loadObjectList(sender,event)
{    // alert("safdafs");
	//var RowIndex = event.args.rowindex ;
	//alert(RowIndex);
    _gLoad = true;
	//txtParentPK.value = "0";
	txtRolePK.value = grdRoleList.GetGridData(event.row,"pk");
	OnFilterObjectChange();
	dsoObjectList.Call("SELECT");
}
function saveMapping()
{
	//Build priviledge code
	_gLoad = false;

	dsoRoleObjList.Call();
}


function OnAddTo() 
{
    var objCtrl = grdObjList.selectedrowindexes;
	var rolePK = txtRolePK.value;
	var i = 0;
	
	
	
	if (rolePK != ""  ) {
		//get selected row
		if (objCtrl.length>0) {
			for (i=0;i < objCtrl.length;i++){
				var rowindex=objCtrl[i];

					grdMapping.AddRow();
				
					
					
					
		//			var crt=grdMapping.GetGridControl();
			//		crt.jqxGrid('selectrow',grdMapping.rowCount-1);
					grdMapping.SetGridData(grdMapping.rowCount-1 , "tes_role_pk", rolePK); //role pk
					grdMapping.SetGridData(grdMapping.rowCount-1 , "tes_obj_pk",grdObjList.GetGridData(rowindex,"pk")); //obj pk				
					grdMapping.SetGridData(grdMapping.rowCount-1 , "menu_id",grdObjList.GetGridData(rowindex,"menu_id"));//obj ID
					grdMapping.SetGridData(grdMapping.rowCount-1 , "form_nm",grdObjList.GetGridData(rowindex,"form_nm"));//Obj name
					
			
				
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
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "tes_role_pk", rolePK); //role pk
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "tes_obj_pk",grdObjList.GetGridData(rowIndex,"pk")); //obj pk				
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "menu_id",grdObjList.GetGridData(rowIndex,"menu_id"));//obj ID
		
		grdMapping.SetGridData(grdMapping.RowCount - 1 , "form_nm",grdObjList.GetGridData(rowIndex,"form_nm"));//Obj name
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
function OnDelete() 
{
	grdMapping.DeleteRow();
}

function OnUnDelete() 
{
    grdMapping.UnDeleteRow();
}

function OnDataReceive(dso)
{
    if(dso.id == "dsoObjectList")
    {
       if(_gLoad == true)
       {
           _gLoad = false;
           dsoRoleObjList.Call("SELECT");
       }
    }
    else if(dso.id == "dsoRoleObjList")
    {
       if(_gLoad == true)
       {
            _gLoad = false;
            dsoObjectList.Call("SELECT");
       }
    }
    else if(dso.id == "dsoMenuTree")
    {
    	dsolstKey.Call("SELECT");
    	//OnSearchRoleList();
	}
    else if(dso.id == "dsolstKey")
    {
    	OnSearchRole();
    	//OnSearchRoleList();
	}
    else if(dso.id == "dsolstKey")
    {
    	OnSearchRole();
    	//OnSearchRoleList();
	}
	else if(dso.id == "dsoRoleList")
    {
		
	}
    
    
	
}
function OnSearch()
{
    OnFilterObjectChange();
    dsoObjectList.Call("SELECT");
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
	dsoObjectList.Call("SELECT");
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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core-min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha256.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script>
    function toWordArray(str){
      return CryptoJS.enc.Utf8.parse(str);
    }

    function toString(words){
      return CryptoJS.enc.Utf8.stringify(words);
    }

    function toBase64String(words){
      return CryptoJS.enc.Base64.stringify(words);
    }

    function encrypt(input, key){
  
      var PROTOCOL_AES256 = 2;
      var secret_key = CryptoJS.SHA256(key);
      var header = toWordArray("AMAZON" + String.fromCharCode(PROTOCOL_AES256));
      var iv = CryptoJS.lib.WordArray.random(16);
      var body = CryptoJS.AES.encrypt(json_payload, secret_key, {iv: iv});

      // construct the packet
      // HEADER + IV + BODY
      header.concat(iv);
      header.concat(body.ciphertext);

      // encode in base64
      return toBase64String(header);
    }

    function decrypt(input, key){
      // convert payload encoded in base64 to words
      var packet = CryptoJS.enc.Base64.parse(input);

      // helpers to compute for offsets
      var PROTOCOL_AES256 = 2;
      var secret_key = CryptoJS.SHA256(key);
      var header = toWordArray("AMAZON" + String.fromCharCode(PROTOCOL_AES256));
      var iv = CryptoJS.lib.WordArray.random(16);

      // compute for offsets
      var packet_size = packet.words.length - (iv.words.length + header.words.length);
      var start = iv.words.length + header.words.length;
      var end = packet.words.length;
      
      var ciphertext = CryptoJS.lib.WordArray.create(packet.words.slice(start, end));
      var parsed_iv = CryptoJS.lib.WordArray.create(packet.words.slice(header.words.length, iv.words.length+1));
      ciphertext = toBase64String(ciphertext);
      var decrypted = CryptoJS.AES.decrypt(ciphertext, secret_key, {iv: parsed_iv});

      return toString(decrypted);
    }

    // data
  	var key = "xuan";
  
    var decoded = decrypt(window.TS_LOGIN_INFO, key);

    console.log(decoded);
</script>
</head>
<body >
<ts-data id="dsoMenuTree" onreceive="OnDataReceive(this)" > 
        <xml>
        	<!-- function="es_sel_menu_parent" -->
            <dso id="1" type="tree" function="stgsfrstagam0002_s_01" > 
                <data-inputs > 
            	</data-inputs>  
				<data-outputs bind="idMenu" ></data-outputs>
            </dso> 
        </xml> 
</ts-data> 


<ts-data id="dsoRole" onreceive="OnDataReceive(this)" > 
	<xml>
		<!-- function="sp_es_sel_role_150319" procedure="sp_es_upd_role_entry_150319" -->
		<dso type="grid" parameter="role_nm,cb,st_date,end_date,pk,client_pk" function="stgsfrstagam0002_f_02" procedure="stgsfrstagam0002_p_03"  > 
			<data-inputs bind="grdRole" > 
			    <data-input bind="txtRoleName" ></data-input>
			    <data-input bind="chkActive" ></data-input>
				<data-input bind="txtClientPK" ></data-input>
			</data-inputs>
			<data-outputs bind="grdRole" ></data-outputs>
		</dso> 
	</xml> 
</ts-data> 

<ts-data id="dsoRoleList"  onreceive="OnDataReceive(this)" > 
	<xml>
		<!-- function="sp_es_sel_role_list" -->
		<dso type="grid" function="stgsfrstagam0002_f_02"  > 
			<data-inputs bind="grdRoleList" > 
			    <data-input bind="txtRoleName1" ></data-input>
			    <data-input bind="chkActive1" ></data-input>
				<data-input bind="txtClientPK" ></data-input>
			</data-inputs>
			<data-outputs bind="grdRoleList" ></data-outputs>
		</dso> 
	</xml> 
</ts-data> 

<ts-data id="dsoObjectList" onreceive="OnDataReceive(this)" > 
    <xml>
    	<!-- function="es_sel_object_list" -->
        <dso type="grid" function="stgsfrstagam0002_f_05"  > 
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
				
<ts-data id="dsoRoleObjList" onreceive="OnDataReceive(this)" > 
    <xml>
    	<!-- function="sp_es_sel_roleobj_mapping" procedure="sp_es_upd_roleobj_mapping" -->
        <dso type="grid" parameter="pk,tes_role_pk,tes_obj_pk" function="stgsfrstagam0002_f_06" procedure="stgsfrstagam0002_p_07" > 
            <data-inputs bind="grdMapping" > 
                <data-input bind="txtRolePK" ></data-input>
            </data-inputs>
            <data-outputs bind="grdMapping" ></data-outputs>
        </dso> 
    </xml> 
</ts-data>



<ts-data id="dsolstKey" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="stgsfrstagam0002_s_09">
            <data-inputs>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstKey"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>

<ts-tab id="idTab" onPageActivated="selectedTextEvent(sender,event)">
<table  style="width: 100%; height: 100%;" id="Role_Entry"  name="Role Entry" >
		<tr height="10%">
			<td width="10%"><ts-label id='lblRoleName'>Role Name</ts-label></td>
			<td width="20%"><ts-textbox id="txtRoleName"   ></ts-textbox></td>
			<td width="8%"><ts-label id='lblActive'>Active</ts-label></td>
			<td width="2%"><ts-checkbox id="chkActive" mode="01" value="T" ></ts-checkbox></td>
			<td width="30%"></td>
			<td width="3%">
				<!-- <ts-button id="btnSearchRole" img="search" alt="Search" onclick="OnSearchRole()" ></ts-button> -->
				<ts-icon id="btnSearch" name="search" title="Search"  onclick="OnSearchRole()"></ts-icon>
			</td>
			<td width="3%">
				<ts-icon id="btnNewRole" name="plus" title="New"  onclick="OnNewRole()"></ts-icon>
			</td>
			<td width="3%">
				<ts-icon id="btnDleteRole" name="trash" title="Delete"  onclick="OnDeleteRole()"></ts-icon>
				</td>
			<td width="3%">
				
			</td>					 
			<td width="3%">
				<ts-icon id="btnSaveRole" name="save" title="Save" data-tooltip-position="left" style="font-size:x-large;" onclick="OnSaveRole()"></ts-icon>
				
			</td>				
		 </tr>
		 <tr height="90%">
			<td colspan=10>
				<ts-grid id="grdRole" sortable="true"  width="100%" style="width:100%; height:100%" edit="true" >
					 <columns>
						<column text="Role Name" datafield="role_nm" columntype="textbox" width="300" ></column>
						<column text="Active" datafield="cb" columntype="checkbox" editable="true"  width="100"></column>
						<column text="Start Date" datafield="st_date" columntype="datetimeinput"   width="200"></column>
						<column text="End Date" datafield="end_date" columntype="datetimeinput"   width="200"></column>
						<column text="_PK" datafield="pk" columntype="textbox" hidden="true" width="0" editable="false"></column>
						<column text="_Client_PK" datafield="client_pk" columntype="textbox" hidden="true" width="0" editable="false"></column>
					</columns>
				</ts-grid>
		 	</td>
	   </tr>
</table>	
<table width="100%" border="0" height="100%" id="Role_Object_Mapping"  name="Role Object Mapping">
	<tr height="100%">
	   <td width="30%"  valign="top">
	     <table width="100%" border="0" height="100%">
	       	<tr height="8%">
	       	<td>
	       	<table width="100%" border="0" height="100%">
	       	<tr>
	       	<td width="20%"><ts-label id='lblRoleName1'>Role Name</ts-label></td>
			<td width="40%"><ts-textbox id="txtRoleName1" onkeyup="enterkey(event)" class="mandatory"></ts-textbox></td>
			<td width="10%"><ts-label id='lblActive1'>Active</ts-label></td>
			<td width="5%"><ts-checkbox id="chkActive1" mode="01" value="T" ></ts-checkbox></td>
			<td width="20%"></td>
			<td width="5%">
			<ts-icon id="btnSearch1" name="search" title="Search"  onclick="OnSearchRoleList()"></ts-icon>
			</td>
			</tr>
			</table>
			</td>
			</tr>
		   	<tr height="42%">
			    <td style="width:100%; height:100%"> 
					<ts-grid id="grdRoleList"  style="width:100%;" height="100%" rowClick="loadObjectList(sender,event)"   editable="false">
						<columns>
							<column text="Role Name" datafield="role_nm" columntype="textbox" width="300" editable="false"></column>
							<column text="_PK" datafield="pk" columntype="textbox" hidden="true" width="0" editable="false"></column>
						</columns>
					</ts-grid>
		   		</td>
		   	</tr>
		   	<tr height="5%" >
		   	<td align="center">
		   	<ts-label id='lb_lang_Menu1'>Menu list</ts-label>
		   	</td>
		   	</tr>
		   	
		   	<tr height="45%" >
				<td  valign="top" >
					<ts-classictreeview  id="idMenu" itemtext="text"  style="width:100%; height:100%; " onClickNode="MenuClick(sender,event)" >
					</<ts-classictreeview>
				</td>
			</tr>
		 
		 </table>
	   </td>
	   <td width="1%"></td>
	   
	   <td width="69%" valign="top" >
	   	 <table width="100%"  height="100%">
			
			<tr height="50%">
				<td colspan=4>
					<table width="100%" height="100%">
						<tr height="8%">
							<td width="8%"><ts-label id='lblFilterKey'>Filter key</ts-label></td>
							<td width="15%">
								<ts-list id="lstKey" displaymember="name" valuemember="obj_id" emptytextpoint="last" ></ts-list>
							</td>
							<td width="10%"><ts-label id='lblValue'>Value</ts-label></td>
							<td width="28%"><ts-textbox id="txtFilter" styles="width:100%" onkeyup="enterkey(event)" ></ts-textbox></td>
							<td width="1%" align="right">
								<ts-icon id="btnAddTo" name="hand-o-down" title="Add to"  onclick="OnAddTo()"></ts-icon>
							</td>
							<td width="1%" align="right">
								<ts-icon id="btnSearch2" name="search" title="Search"  onclick="OnSearch()"></ts-icon>
							</td>
						</tr>
						<tr height="92%">
							<td colspan="6" style="width:100%; height:100%">
									
								<ts-grid id="grdObjList" sortable="true" style="width:100%;" height="350px" rowDblClick="OnAddTo2(sender,event)"  editable="false" autoresizecolumns="true" >
									 <columns>
										<column text="Menu ID" datafield="menu_id" columntype="textbox" width="100"  editable="false"></column>
										<column text="Menu Name" datafield="form_nm" columntype="textbox" width="200"  editable="false"></column>
										<column text="Parent Menu Name" datafield="parent_name" columntype="textbox" width="400"  editable="false"></column>
										<column text="_PK" datafield="pk" hidden="true" width="0" columntype="textbox" ></column>
									</columns>
								</ts-grid>
								
							</td>
						</tr>
					</table>
				</td>
			</tr>
			
			<tr height="6%">
				<td width="75%" align="center"><ts-label data-style="text-align:center" id='lblMapping'>Mapping table (Role-Menu)</ts-label></td>
				<td width="5%">
				<ts-icon id="idDelete" name="trash" title="Remove"  onclick="OnDelete()"></ts-icon>
				</td>				
				<td width="5%">
				<ts-icon id="idUDelete" name="undo" title="UnRemove"  onclick="OnUnDelete()"></ts-icon>
				</td>								
				<td width="5%">
				<ts-icon id="idBtnUpdate" name="save" title="Save"  onclick="saveMapping()"></ts-icon>
				</td>
			</tr>
			<tr height="44%">
				<td colspan="4" style="width:100%; height:100%">
						
					<ts-grid id="grdMapping" sortable="true" style="width:100%;" height="350px" editable="false" autoresizecolumns="true">
							 <columns>
								<column text="Menu ID" datafield="menu_id" columntype="textbox" width="100"  editable="false"></column>
								<column text="Menu Name" datafield="form_nm" columntype="textbox" width="200"  editable="false"></column>
								<column text="Role Name" datafield="role_nm" columntype="textbox" width="200"  editable="false"></column>
								<column text="_PK" datafield="pk" columntype="textbox" hidden="true" width="0" ></column>
								<column text="_RolePK" datafield="tes_role_pk" columntype="textbox" hidden="true" width="0" ></column>
								<column text="_ObjPK" datafield="tes_obj_pk" columntype="textbox" hidden="true" width="0" ></column>
							</columns>
						</ts-grid>
							
					</td>
				</tr>
			</table>
		</td>
	  </tr>
</table>



</ts-tab>

<ts-textbox id="txtClientPK"  text="" style="display:none" ></ts-textbox> 
<ts-textbox id="txtParentPK"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="txtRolePK"  text="" style="display:none" ></ts-textbox> 
<ts-textbox id="txtObjectID"  text="" style="display:none" ></ts-textbox>
<ts-textbox id="txtObjectName"  text="" style="display:none" ></ts-textbox>
</body>
</html>