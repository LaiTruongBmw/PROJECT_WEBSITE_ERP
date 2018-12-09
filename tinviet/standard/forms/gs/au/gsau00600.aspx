<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Untitled Page</title>
</head>
<style type="text/css">
	
</style>
<script type="text/javascript">


function BodyInit()
	{
		 
		 dso_tre_gsau00600_0.Call('SELECT');
	//	 dso_lst_gsau00600_0.Call("SELECT");
		 //dddd.value= 'sssss';
	 }
 	  
 		

 	function OnSaveMenu()
 	{
	 	
	 	dso_grd_gsau00600_0.Call();
 	}

 	
 	function OnDeleteBtnClick()
 	{
	 	if(confirm("Do you want to delete this menu?\n If you delete it. \nThe role object and object entity which has related with this menu will be deleted too."))
	 	{
		 	dso_ctl_gsau00600_0.StatusDelete();
		 	dso_ctl_gsau00600_0.Call(); 
	 	}
 	}
 
 	 
 
function OnNewItemBtnClick()
{ //console.log(idMenu);
	///dso_ctl_gsau00600_0.ClearDataControl();
	dso_ctl_gsau00600_0.StatusInsert();
	
	lstMenuType.value="I";
	idName.value="";
	//alert("ssdd");
	idLocalName.value="";
	idForeignName.value="";
	idUrl.value="";
	idMenuID.value="";
	idImage.value="";
	idObjectID.value="";
	OnchangeMenuType();
	txtParentPK.value = txtParentPK1.value;
	idPName.value=idPName1.value;
	//alert("ssdd222");
}
 

 



 function OnAddMenu()
 {
	
	 if(txtObject_PK.value =="")
		 {
		 	alert("You must choose one parent menu to insert child");
		 	return;
		 }
	 grdMenu.AddRow();
	 
	 grdMenu.SetGridData( grdMenu.RowCount-1 , 'P_PK', txtObject_PK.value);
	 grdMenu.SetGridData( grdMenu.RowCount-1 , 'USE_YN', 'Y');
	 /*
	  grdMenu.SetGridData( grdMenu.rowCount-1 , 'p_pk', txtParentPK.value);
		grdMenu.SetGridData( grdMenu.rowCount-1 , 'form_type', "I");
		grdMenu.SetGridData( grdMenu.rowCount-1 , 'img', "images/iconAutoForm.png");
		grdMenu.SetGridData( grdMenu.rowCount-1 , 'use_yn', true);
		grdMenu.SetGridData( grdMenu.rowCount-1 , 'no',  grdMenu.rowCount);
	 
	*/
	alert(grdMenu.GetGridData( grdMenu.RowCount-1 , 'p_pk', txtObject_PK.value));
}
 function OnDeleteMenu()
 {
	 if(confirm("Do you want to delete ?"))
	 {
		 grdMenu.DeleteRow(false);
		 
		 dso_grd_gsau00600_0.Call();
	 }
	 
	 
 }

 function OnSave()
{ 
	dso_ctl_gsau00600_0.Call('UPDATE');
}
  
 
  var OnDataReceive = function (obj){
		 if(obj.id =='dso_ctl_gsau00600_0'){
			 dso_grd_gsau00600_0.Call('SELECT');
		 }
		 else if(obj.id == 'dso_grd_gsau00600_0'){
			 //grdMenu.autoresizecolumns();
		 }
	 };

function selectNode(sender,event)
{	txtObject_PK.value= sender.value;
	txtParentPK1.value = sender.value + '';
	idPName1.value=sender.selectedNodeText;
    dso_ctl_gsau00600_0.Call('SELECT');
}

function OnChooseOject()
{
	if(lstMenuType.value=="M")
		{
		alert("cannot select oject because Menu type is Folder");
		
		}
	else
		{
		var url = "/system/index.gw?openType=F&objId=stgspustagam0002";
		//alert(url);
		System.OpenModal(  url , 950, 790 , 'Oject',document,callBack) ;

		}

}

function callBack()
{
	var o = System.getDataParam();
	
if(o!=null && o.length>0)
	{
		
	idObjectID.value=o[1];
	idName.value=o[2];
	idUrl.value=o[5];
	idLocalName.value=o[4];
	idForeignName.value=o[3];
	
	}
	
}

function OnChooseMenu()
{
	
		var url = "/system/index.gw?openType=F&objId=stgspustagam0003";
		//alert(url);
		System.OpenModal(  url , 550, 690 , 'Oject',document,callBack2) ;


}

function callBack2()
{
	var o = System.getDataParam();
	
if(o!=null && o.length>0)
	{
		
	txtParentPK.value = o[0];
    idPName.value=o[1];
	
	}
	
}



function OnchangeMenuType()
{
	if(lstMenuType.value=="M")
		{ 	idObjectID.value="";
				idUrl.value="";
				idType.value = "M";
				idImage.value = "images/iconFolderClosed.png";
		}
		else
			{
			idType.value = "I";
			idImage.value = "images/iconAutoForm.png";
			}
		
		
		
}
function OnClear()
{
    txtParentPK.value = '';
    idPName.value='';

}
function OnReset()
{
	dso_ctl_gsau00600_0.StatusInsert();
	lstMenuType.value="I";
	idName.value="";
	//alert("ssdd");
	idLocalName.value="";
	idForeignName.value="";
	idUrl.value="";
	idMenuID.value="";
	idImage.value="";
	idObjectID.value="";
	OnchangeMenuType();
	
}
function ChooseObj(event)
{//console.log(event);

var rowindex = grdMenu.selectedrowindexes;

	if((event.args.datafield=="obj_id"||event.args.datafield=="obj_url") && grdMenu.GetGridData( rowindex , 'form_type' )=="I" )
	{
		var url = "/system/index.gw?openType=F&objId=stgspustagam0002";
	//alert(url);
		System.OpenModal(  url , 950, 790 , 'Object',document,callBack3) ;
		
	}
}
function callBack3()
{
	var rowindex = grdMenu.selectedrowindexes;
	var o = System.getDataParam();
	
	if(o!=null && o.length>0)
		{
		//alert(o[1]);
			
		grdMenu.SetGridData( rowindex , 'obj_id', o[1]);
		grdMenu.SetGridData( rowindex , 'form_nm', o[2]);
		grdMenu.SetGridData( rowindex , 'form_lnm', o[3]);
		grdMenu.SetGridData( rowindex , 'form_fnm', o[4]);
		grdMenu.SetGridData( rowindex , 'obj_url', o[5]);
		}
}

 function cellchange(e)
 {//console.log(e);
	 //alert(grdMenu.GetGridData( grdMenu.selectedrowindexes , e.args.datafield) );
	 rowindex=e.args.rowindex;
	 //alert(e.args.datafield);
	 if(e.args.datafield=="form_type")
		 { if(e.args.value=='I')
			 {
			 grdMenu.SetGridData( rowindex , 'img', "images/iconAutoForm.png");
			 //grdMenu.SetGridData( rowindex , 'img', "2");
			 }
		 else
			 {
			 //grdMenu.SetGridData( rowindex , 'img', "1");
			 grdMenu.SetGridData( rowindex , 'img', "images/iconFolderClosed.png");
			 grdMenu.SetGridData( rowindex , 'obj_id', '');
			 grdMenu.SetGridData( rowindex , 'obj_url', '');
			 
			 }
		 
		 }
 }
 function OnSearch()
 {   
	 	lstMenuType.value="I";
		idName.value="";
		//alert("ssdd");
		idLocalName.value="";
		idForeignName.value="";
		idUrl.value="";
		idMenuID.value="";
		idImage.value="";
		idObjectID.value="";
		
	    txtParentPK.value = '';
	    
	    txtParentPK1.value = '';
	    idPName1.value='';
	    grdMenu.clear();
	    dso_tre_stgsau00600_0.Call('SELECT');
	 
 }
 
 </script>
</head>

<!-- DSO START -->
<ts-data id="dso_ctl_gsau00600_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="control" function="st_hr_sel_ctl_gsau00600_0"  parameter="-" procedure="st_hr_upd_ctl_gsau00600_0">  
                <data-inouts> 
                      <data-inout bind="txtObject_PK" />
                      <data-inout bind="idName" />
                      <data-inout bind="idLocalName" />
			    	  <data-inout bind="idForeignName" />
			    	  <data-inout bind="idUrl" />
			    	  <data-inout bind="idMenuID" />
			    	  <data-inout bind="idImage" />
			    	  <data-inout bind="txtParentPK" />
			    	  <data-inout bind="lstMenuType" />
			    	  <data-inout bind="idObjectID" />
			    	  <data-inout bind="idPName" />
                </data-inouts>
            </dso> 
        </xml> 
</ts-data> 

<ts-data id="dso_tre_gsau00600_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="tree" function="st_hr_sel_tre_gsau00600_0"   procedure="">
            	<data-inputs> 
            		<data-input bind="txtTreeSearch" ></data-input>
            	</data-inputs>  
				<data-outputs bind="idMenu" > </data-outputs>  
            </dso> 
        </xml> 
</ts-data> 
<ts-data id="dso_grd_gsau00600_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter="NO,MENU_CD,FORM_NM,OBJ_URL,FORM_LNM,FORM_FNM,IMG,USE_YN,FORM_TYPE,P_PK,PK,OBJ_ID" 
        	function="st_hr_sel_grd_gsau00600_0" procedure="st_hr_upd_grd_gsau00600_0" >
			
            <data-inputs bind="grdMenu">
                <data-input bind="txtObject_PK" ></data-input>
            </data-inputs>
            <data-outputs bind="grdMenu"></data-outputs>
        </dso>
    </xml>
</ts-data>
<ts-data id="dso_lst_gsau00600_1" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="array" function="st_hr_sel_lst_gsau00600_1" > 
			<data-inputs bind="noneed"></data-inputs>
			<data-outputs bind="2"></data-outputs>
        </dso> 
    </xml> 
</ts-data>

<!-- DSO END -->

<body >
	<table style="width: 100%; height: 100%;" >
		<tr style="height:100%">
			<td  valign="top"  style="width: 20%;">
				<table width="100%" height="100%"  border= "1" >
					<tr style="height: 5%;">
						<td>
							<table width="100%" cellspacing="0" >
								<tr style="height: 100%;">
									<td width="30%" >
										Menu
									</td>
									<td width="70%" align="right" >
										
										<ts-textbox  id="txtCompany_pk" style="display: none;" ></ts-textbox>
										<ts-button id="btSearch" img="search"  alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
										
									</td>
									<td align="right" >
										<ts-button  id="idBtnMenuAdd"  img="new"  alt="Add" onclick="OnNewItemBtnClick()" imgtype="0">Add New</ts-button>
									</td>
								</tr>								
							</table>
						</td>
					</tr>
					<tr style="height:95%" valign="top">
						<td >
							 
							<ts-classictreeview  id="idMenu" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="selectNode(sender,event)" >
							</<ts-classictreeview>
							 
						</td>
					</tr>
				</table>

			</td>
			<td width="80%" valign="top">
				<table style="width:100%; height: 100%"  border= "1">
				<tr style="height: 25%">
				<td>
				
				<table style="width:100%; height: 100%">
					<tr style="height: 5%">
						<td style="width:10%">
							<a title="clich here to change Parent " onclick="OnChooseMenu()"><ts-label id="lbl_lang_pname" data-style="color:blue">Parent Info</ts-label></a>
						</td>
						<td width="40%">
							<!-- <input type="text" style="width:100%" id="idName" /> -->
							<ts-textbox style="width:100%" id="idPName" onchange="" readonly="true" csstype="mandatory" />
						</td>
						<td  width="10%" style="white-space: nowrap;">
							<ts-icon id="btEraser" name="eraser" data-tooltip="Eraser" data-tooltip-position="top" style="font-size:x-large;" onclick="OnClear()"></ts-icon>
						
						</td>
						<td align="right"  width="40%" style="white-space: nowrap;">
						<table style="width:100%; height: 100%">
						<tr height="100%">
						<td width="60%" align="right">
							<ts-button id="idBtnReset" img="insert" text="Insert" onclick="OnReset()">Reset</ts-button>
						</td>
						<td width="20%" align="right">
							<ts-button  id="idBtnDelete" img="delete"  onclick="OnDeleteBtnClick()" alt="Delete" imgtype="0" >Delete</ts-button>
						</td>
						<td width="20%" align="right">
							<ts-button id="idBtnSave" img="save" alt="Save" onclick="OnSave()" imgtype="0" >Save</ts-button>
						</td>
						</tr>
						</table>
						</td>
						
					</tr>
					<tr style="height:5%">
						<td width="10%"><ts-label id="lbl_lang_Menu_id" >MenuID</ts-label></td>
							<td width=40%>
								<ts-textbox style="width:100%"  id="idMenuID" csstype="mandatory"></ts-textbox>
						</td>
						
						<td  width="10%"><ts-label id="lbl_lang_Menutype" style="display: none;">Menu type</ts-label></td>
						<td width="40%" style="white-space: nowrap;"  >
							<ts-textbox id="lstMenuType" styles="width:100%;"  valuemember="CODE" displaymember="CODE_NM" style="display: none;"></ts-textbox>
						</td>
					</tr>
					<tr style="height: 5%">
						
						<td width="10%"><a title="Click here to choose object ID" onclick="OnChooseOject()">
							<ts-label id="lbl_lang_obj_id"  >Object Id</ts-label>
						</td>
						<td width=40%>
								<ts-textbox style="width:100%"  id="idObjectID" readonly="true"  csstype="mandatory"></ts-textbox>
								
						</td>
						
						<td  width="10%"><ts-label id="lbl_lang_URl">URL</ts-label></td>
						<td width=40% colspan="3">
							<ts-textbox  style="width:100%" id="idUrl" styles="background-color:#E1E1E1" readonly="true" ></ts-textbox>
						</td>

					</tr>
					
				
					
					<tr style="height: 5%">
						<td style="width:10%">
							<ts-label id="lbl_lang_name">Name</ts-label>
						</td>
						<td width="40%">
							<!-- <input type="text" style="width:100%" id="idName" /> -->
							<ts-textbox style="width:100%" id="idName" onchange="onchange(event);" csstype="mandatory" />
						</td>
						<td width="10%"><ts-label id="lbl_lang_icon">Icon</ts-label></td>
							<td width=40%>
								<ts-textbox id="idImage" style="width:100%" ></ts-textbox>
							</td>

					</tr>
					<tr style="height: 5%">
						<td width="10%"><ts-label id="lbl_idLName" for="idLocalName">LName</ts-label>	</td>
						<td width="40%">
							<ts-textbox style="width:100%" id="idLocalName" csstype="mandatory"></ts-textbox>
						</td>
						<td width="10%">
							<ts-label id="lbl_idForeignName" for="idForeignName">FName</ts-label>	
						</td>
						<td width="40%">
							<ts-textbox style="width:100%" id="idForeignName" ></ts-textbox>
						</td>

					</tr>

					

				</table>
			</td>
			</tr>
			<tr style="height: 80%">
				<td>
				<table style="height: 100%; width: 100%;" cellspacing=0 cellpadding=0 >
					<tr style="height: 5%">
						<td width=5%></td>
						<td width=10%>
							<label  id="lblRows" ></label>
						<td width=10%>
							
						</td>
						<td width=10%>
							
						</td>
						<td width=30%>&nbsp;</td>
						
						<td width="5%" align="right">
							<ts-button id="btGridNew" img="new" alt="Add" imgtype="0" onclick="OnAddMenu()">Add New</ts-button>
							
						</td>
						
						<td align="center" width="5%">
							<ts-button id="btGridDelete" img="delete" alt="Delete" imgtype="0" onclick="OnDeleteMenu()">Delete</ts-button>
							
						</td>
						<td width="5%">
						<ts-button id="btGridSave" img="save" alt="save" imgtype="0"  onclick="OnSaveMenu()">Save</ts-button>
						</td>
					</tr>
					<tr style="height: 95%">
						<td colspan=9 valign="top">
							<ts-grid id="grdMenu" editable="true"  celldoubleclick="ChooseObj(this)" cellendedit="cellchange(this)"  height="550px">
									<columns> 
										<column text="No"  			datafield="NO"  		width="50" 	columntype="textbox" ></column>
										<column text="Menu Cd"  	datafield="MENU_CD"  	width="50" 	columntype="textbox" ></column>
										<column text="Menu Name"  	datafield="FORM_NM"  	width="150" columntype="textbox" ></column>
										<column text="URL"  		datafield="OBJ_URL"  	width="150" columntype="textbox" editable="true" ></column>
										<column text="Menu LName"  	datafield="FORM_LNM"  	width="250" columntype="textbox" ></column>
										<column text="Menu FName"  	datafield="FORM_FNM"  	width="150" columntype="textbox" ></column>
										<column text="Icon Path"  	datafield="IMG" 		width="150"	columntype="textbox" hidden="true" ></column>
										<column text="Active"  		datafield="USE_YN" 		width="80"	columntype="checkbox" ></column>
										<column text="Type"  		datafield="FORM_TYPE" 	width="150"	columntype="dropdownlist" hidden="true"></column>
										<column text="Object ID"  	datafield="OBJ_ID" 		width="100"	columntype="textbox"  editable="true" ></column>
										<column text="Parent_PK"  	datafield="P_PK" 		width="80"	columntype="textbox" hidden="true"></column>
										<column text="Pk"  			datafield="PK"  		width="80" 	columntype="textbox" hidden="true" ></column>
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
	</table>
	
	<ts-textbox id="txtText" text="" style="display: none"></ts-textbox>
	<ts-textbox id="txtTreeSearch" style="display:none;"></ts-textbox>
	<ts-textbox id="txtObject_PK" style="display:none" ></ts-textbox>
	<ts-textbox id="idType" style="display:none" ></ts-textbox>
	<ts-textbox type="text" id="txtParentPK" style="display:none;" ></ts-textbox>
	<ts-textbox type="text" id="txtParentPK1" style="display:none;" ></ts-textbox>
	<ts-textbox type="text" id="idPName1" style="display:none;" ></ts-textbox>
	<ts-label id="idFunc" style="display:none" ></ts-label>
	<ts-label id="idParentID" style="display:none"  ></ts-label>

</body>
</html>