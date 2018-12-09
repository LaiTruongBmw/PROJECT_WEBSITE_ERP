<%@ Page Language="C#" AutoEventWireup="true"  Inherits="TSERP.Core.Web.DefaultPage" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title></title>
    <link href="system/styles/system.css" rel="stylesheet" />
    <link href="system/styles/application.css" rel="stylesheet" />
    <link href="system/styles/esys.css" rel="stylesheet" />
    <script src="system/controls/esys.js"></script>
    <script src="system/controls/esys.data.js"></script>
    <script src="system/controls/esys.grid.js"></script>
    <script src="system/controls/esys.input.js"></script>
    <script src="system/controls/esys.fwtabs.js"></script>
    <script src="system/libs/lzw.js"></script>
    <script src="system/libs/system.js"></script>
    <script src="system/libs/app.js"></script>
    <script src="system/libs/moment.min.js"></script>
    <script type="text/javascript">
function OnAdd(){
    grdPaymentReq.AddRow();
}
function OnSave(){
    dsogrdPaymentReq.Call();
}
function OnSearch(){
	dsogrdPaymentReq.Call('SELECT');
}
function OnSearchBig(){
	dsoObj.Call('SELECT');
}
    </script>
</head>


<ts-data id="dsogrdPaymentReq" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter="COL1,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,PK" function="ac_sel_st60220010" procedure="ac_upd_st60220010" >
            <data-inputs bind="grdPaymentReq">
                <data-input bind="dtb_year" ></data-input>
                <data-input bind="lstStatus" ></data-input>
            </data-inputs>
            <data-outputs bind="grdPaymentReq"></data-outputs>
        </dso>
    </xml>
</ts-data>

<ts-data id="dsoObj" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter="COL1,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,PK" function="ac_sel_st602200101">
            <data-inputs bind="grdPaymentReq">
                <data-input bind="dtb_year" ></data-input>
                <data-input bind="lstStatus" ></data-input>
            </data-inputs>
            <data-outputs bind="grdPaymentReq"></data-outputs>
        </dso>
    </xml>
</ts-data>


<body>
 
<table border ='0' style="width:100%; height: 100%">
	
	<tr style="height: 1%; ">
		<td align="right" style="width:20%">
			Year
			<ts-upload id="idData"></ts-upload>
		</td>
		<td style="width:10%">	<ts-datebox id="dtb_year" data-type="year"></td>
		<td align="right">Status</td>
		<td><ts-list id="lstStatus" displaymember="nm" valuemember="val" emptytext="--select All--" emptytextpoint="first" onchange="" styles ="width:50%"></ts-list>	</td>
		<td align="left"> 	
            <ts-button  id="btnSearchBig"  title="Search" onclick="OnSearchBig()" style="height:26px;"  >Search(>10.000)</ts-button>
            <ts-button  id="btnSearch"  title="Search" onclick="OnSearch()" style="height:26px;"  >Search</ts-button>

            <ts-button  id="btnAdd"  title="Search" onclick="OnAdd()" style="height:26px;"  >Add</ts-button>

            <ts-button  id="btnSave"  title="Search" onclick="OnSave()" style="height:26px;"  >Save</ts-button>
		
		
			</td>
	</tr>
	<tr style="height: 99%">

		<td colspan="5" >
			<ts-grid id="grdPaymentReq" editable="true" rowdoubleclick="Popup_Dtl(event)"     height =" 800px"    >
				<columns>
					<column text="COL1"  datafield="COL1"  width="50"  ></column>
					<column text="COL2"  datafield="COL2"  width="50"  ></column>
					<column text="COL3"  datafield="COL3"  width="100"  ></column>
					<column text="COL4"  datafield="COL4"  width="200"   ></column>
					<column text="COL5"  datafield="COL5"  width="300"  ></column>
					<column text="COL6"  datafield="COL6"  width="300"  ></column>
					<column text="COL7"  datafield="COL7"  width="150"  ></column>
					<column text="COL8"  datafield="COL8"  width="200"   ></column>
					<column text="COL9"  datafield="COL9"  width="300"  ></column>
				</columns>						            
			</ts-grid>
		
		</td>
	</tr>
</table>

    
<br/>
<h3>Image input</h3>
<ts-image id="imgData"></ts-image>
<br/>
<br/>
<h3>Dropdown List</h3>

<ts-dropdownlist id="ddl_test"></ts-dropdownlist>

<br/>
<h3>Tab control</h3>
<ts-tabs1 id="tabTest" selected="selectedTextEvent(event);">
	<div title="sssss"   >	 
		<ts-grid id="grdTestt1"  height="300px" >
			<columns>
				<column text="column 1" columngroup="name1" datafield="col1" columntype="datetimeinput" cellsformat="dd-MM-yyyy" width="250" onchange="ddd()"></column>
				<column text="column 1" columngroup="name1" datafield="col2"  width="250" columntype="dropdownlist" ></column>
				<column text="column 1" datafield="col3" width="250"></column>
				<column text="column 1" datafield="col4" width="250" columntype="checkbox"></column>
			</columns>
			<columngroups>
				<columngroup text="Product Details" name="name1"></columngroup>
			</columngroups>
		</ts-grid>
	 </div>
	
	<div title="3333">
		<ts-button id="idButtonTesttab"  title="Button test" onclick="onTestButtonClick()">Button test</ts-button>
		<ts-grid id="grdTestt3"  >
			<columns>
				<column text="column 1" columngroup="name1" datafield="col1" columntype="datetimeinput" cellsformat="dd-MM-yyyy" width="250" onchange="ddd()"></column>
				<column text="column 1" columngroup="name1" datafield="col2"  width="250" columntype="dropdownlist" ></column>
				<column text="column 1" datafield="col3" width="250"></column>
				<column text="column 1" datafield="col4" width="250" columntype="checkbox"></column>
			</columns>
			<columngroups>
				<columngroup text="Product Details" name="name1"></columngroup>
			</columngroups>
		</ts-grid>
	</div>
</ts-tabs1>

<br/>
<ts-checkbox id="chk1" text=" vi du" ></ts-checkbox>
<table id="tblInfo">
	<tr>
	<td>
	</td>
	</tr>
</table>


<br/>

<h3>Upload File</h3>
<table id="tblInfo1">
	<tr>
	<td>
	<ts-upload id="txt_upload1" table_name="TC_FSBINARY"  master_pk="5"></ts-upload>
	</td>
	</tr>
</table>




<br/>
<h1>Cac control co ban</h1>
<h3>TextBox</h3>
<ts-textbox id="txt_textbox1" style="width:30px;"></ts-textbox>

<h3>TextBox</h3>
<ts-checkbox id="chk_test" onchange="onChangeVal(this.value)"></ts-checkbox>

<h3>List</h3>
<ts-list id="dddd" disabled="true" displaymember="nm" valuemember="val" emptytext="--select All--" emptytextpoint="last" onchange="chk(this.value);"></ts-list>
<ts-list id="dddd2" displaymember="text" valuemember="pk" emptytext="--select All--" emptytextpoint="first" onchange="chk(this.value);"></ts-list>

<h3>datebox - Date</h3> 
<ts-datebox id="db_testDatebox1"  disabled="false" data-nullaccept="true"></ts-datebox>
<br/>

<h3>datebox - month</h3> 
<ts-datebox id="db_testDatebox" data-type="month" disabled="false" data-nullaccept="true"></ts-datebox>
<br/>


<h3>datebox - year</h3> 
<ts-datebox id="db_testDateboxyear" data-type="year" disabled="false" data-nullaccept="true"></ts-datebox>
<br/>
<h3>Button</h3> 
<ts-button  id="idButtonTest"  title="Button test" style="height:21px" onclick="onTestButtonClick()">Button test</ts-button>
    <br/>
<ts-button  id="idButtonTest1"  title="Button test" style="height:21px" onclick="onTestButtonClick1()">Button test</ts-button>

<br/>
<h3>Tree view</h3>
<ts-classictreeview1 id="idTree" onclick="clicktree(this);">
</ts-classictreeview1>
<br/>
<h3>Grid</h3>
<ts-grid id="grdTest" edit="true" celldoubleclick="kitrathi(event);"  >
	<columns>
		<column text="column 1" columngroup="name1" datafield="col1" columntype="datetimeinput" cellsformat="dd-MM-yyyy" width="250" onchange="ddd()"></column>
		<column text="column 1" columngroup="name1" datafield="col2"  width="250" columntype="dropdownlist" ></column>
		<column text="column 1" datafield="col3" width="250"></column>
		<column text="column 1" datafield="col4" width="250" columntype="checkbox"></column>
	</columns>
	<columngroups>
		<columngroup text="Product Details" name="name1"></columngroup>
	</columngroups>
</ts-grid>



<br/> 

<ts-icon  id="icSearch" name="search" data-tooltip="Search" data-tooltip-position="bottom"   onclick="OnSearch()"> <i class="fa fa-search"></i>  </ts-icon>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>

	<table style="width: 100%;  " >
		<tr>
			<td  valign="top"  style="width: 25%;">
				<table width="100%" height="100%"  >
					<tr style="height: 1px;">
						<td>
							<table width="100%" cellspacing="0" >
								<tr>
									<td bgcolor="white" width="90%" height="20">
										<b>
											<ts-label id="lbl_menutree">Menu</ts-label>
										</b>
									</td>

									<td align="right" bgcolor="white">
										<ts-button  id="idBtnMenuFolderAdd"  title="Add Folder" click="OnNewItemBtnClick(true)"  disabled="true">Add Folder</ts-button>
										<input type="text" id="txtCompany_pk" style="display: none;" value="" >
									</td>
									<td align="right" bgcolor="white">
										<ts-button  id="idBtnMenuAdd"  title="Add Menu" click="OnNewItemBtnClick(false)" disabled="true">Add Menu</ts-button>
									</td>
									<td align="right" bgcolor="white">
										<ts-button  id="Report"  title="Report" click="OnReport(1)"  >Report</ts-button>
									</td>
									<td align="right" bgcolor="white">
									<br/>
										<ts-button  id="Report2" disabled="true"  title="Report 2" click="OnReport(2)"  >Report 2</ts-button>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr >
						<td style="height:300px">
							<ts-tree  id="idMenu"  itemtext="text" ></ts-tree>
						</td>
					</tr> 
				</table>

			</td>
			<td width="75%" valign="top">
				<table style="width:100%; height: 100%">
				<tr style="height: 1%">
				<td>
				
				<table width="100%">
					<tr>
						<td style="width:5%">
							<ts-label id="lbl_lang_name">Name</ts-label>
						</td>
						<td width="45%">
							<!-- <input type="text" style="width:100%" id="idName" /> -->
							<ts-textbox style="width:100%" id="idName" onchange="onchanged(event);" />
						</td>
						<td width="5%" bgcolor="white">
							<input type="button" value="Save" id="idBtnModify"  onclick="OnSave()">
						</td>
						<td width="45%" bgcolor="white">
							<input type="button" value="Delete"  id="idBtnDelete" onclick="OnDeleteBtnClick()" />
						</td>

					</tr>
					<tr>
						<td width="10%">LName</td>
						<td width="40%">
							<input type="text" style="width:100%" id="idLocalName" />
						</td>
						<td width="10%">
							<label id="lbl_idForeignName" for="idForeignName">FName</label>	
						</td>
						<td width="40%">
							<input type="text" style="width:100%" id="idForeignName" />
						</td>

					</tr>

					<tr>
						<td><b>URL</b></td>
						<td width=95% colspan="3">
							<input type="text" style="width:100%" id="idUrl" />
						</td>

					</tr>
					<tr>
						<td><b>MenuID</b></td>
							<td width=45%>
								<input type="text" style="width:100%" id="idMenuID" />
							</td>
							<td><b>Object Id</b></td>
							<td width=45%>
								<input type="text" style="width:100%"  id="idObjectID"/>
						</td>
					</tr>
					<tr>
						<td><b>Icon</b></td>
							<td width=45%>
								<input type="text" id="idImage" style="width:100%" />
							</td>
							<td></td>
							<td></td>
					</tr>

				</table>
			</td>
			</tr>
			<tr style="height: 99%">
				<td>
				<table style="height: 100%; width: 100%;" cellspacing=0 cellpadding=0 >
					<tr style="height: 1px;">
						<td width=5%>Rows:</td>
						<td width=10%>
							<label  id="lblRows" ></label>
						<td width=10%>
							<input type="button" value="Add Parent" onclick="OnAddMenu('M')" />
						</td>
						<td width=10%>
							<input type="button" value="Move To" onclick="OnMoveMenu()" />
						</td>
						<td width=45%>&nbsp;</td>
						<td width=15%></td>
						<td width=5%>
							<input type="button" value="new" title="add new menu" onclick="OnAddMenu('I')" />
						</td>
						<td width=5%>
							<input type="button" value="delete" title="delete menu" onclick="OnDeleteMenu()"/>
						</td>
						<td width=5%>
							<input type="button" value="save" title="save menu"  id="btn_SaveMenu"/>
							<!-- <ts-button id="btn_test"  style="width:100px;" onclick="testfn();"  >vlalalla</ts-button> -->
						</td>
					</tr>
					<tr style="height: 200px">
						<td colspan=9>
								<ts-grid id="grdMenu" edit="true" celldoubleclick="kitrathi(event);"
						            cellclick="ddd();"   height="200px">
									<columns>
										<column text="No"  datafield="no"  width="50"  ></column>
										<column text="Menu Cd"  datafield="menu_cd"  width="50"  ></column>
										<column text="Menu Name"  datafield="form_nm"  width="50"  ></column>
										<column text="File Path"  datafield="form_url"  width="50"  ></column>
										<column text="Menu LName"  datafield="form_lnm"  width="50"  ></column>
										<column text="Menu FName"  datafield="form_fnm"  width="50"  ></column>
										<column text="Icon Path"  datafield="img"  width="50"  ></column>
										<column text="Active"  datafield="use_yn"  width="50"  ></column>
										<column text="Type"  datafield="form_type"  width="50"  ></column>
										<column text="P Pk"  datafield="p_pk"  width="50"  ></column>
										<column text="Object ID"  datafield="menu_id"  width="50"  ></column>
										<column text="Pk"  datafield="pk"  width="50"  ></column>
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
	
	<label id="idID" style="display:none" ></label>
	<label id="idType" style="display:none" ></label>
	<input type="text" id="txtParentPK" style="display:none" />
	<label id="idFunc" style="display:none" ></label>
	<label id="idParentID" style="display:none"  ></label>

    


	<ts-textbox style="width:100%" id="txtId" styles="display:none"  />
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
