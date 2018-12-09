<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>COMPANY ENTRY</title>

<script type="text/javascript">
 var status_control;
 //---------------------------------------------------------
	 function BodyInit()
	 { 
	  //  System.Translate(document); 
		BindingDataList();
	   // onSearch(0);
	 }
	 //---------------------------------------------------------
	 
	 function BindingDataList()
	 {
		   dso_cbo_gsor00100_1.Call("SELECT");
	 }
	 //---------------------------------------------------------
	 
	 function onSearch(index)
	 {
		switch(index)
		{
			case 0:
				detail.StatusSelect();
				detail.Call("SELECT");
			break;
		}
	 }
	 //---------------------------------------------------------
	 function onSave()
	 {
		imagePK.text = imgFile.GetData();
		//alert("DANG SAVE");
		dso_ctl_gsor00100.Call();
		//imagePK.text = imgFile.oid;
	   // imagePK_1.text = imgFile_1.oid;
	  /*  switch(index)
		{
			case 0: // save master:
				if ( txtPartnerid.text == '' )
				{
					alert('Please, input data Partner ID !!!');
					txtPartnerid.GetControl().focus();
					return
				}
				
				if ( txtPartnerName.text == '' )
				{
					alert('Please, input data Partner Name !!!');
					txtPartnerName.GetControl().focus();
					return;
				}
				
				if ( txtTaxcode.text == '' )
				{
					alert('Please, input data Tax Code !!!');
					txtTaxcode.GetControl().focus();
					return;
				}
				dso_ctl_gsor00100.Call();
				
			break; */
		   // case 1:// save charger
			//    idData_Dsql_wcodc00001_1.Call();
		 //   break;
			
		 
	 } 
	 //---------------------------------------------------------
	 function onNew(index)
		{
		switch(index)
		{
			case 0: // add new master
					
				dso_ctl_gsor00100.StatusInsert();
			break;
			case 1:// add new charger
				if(txtPartnerPk!="")
				{
					grdCharger.AddRow();
					grdCharger.SetGridText(grdCharger.rows - 1,1,txtPartnerPk.GetData());
				}
				else
				{
				   alert("You should input and save master information first.");
				   return;
				}
			break;
			case 2: // add new contact
				if(txtPartnerPk!="")
				{
					 grdContact.AddRow();
					 grdContact.SetGridText(grdContact.rows - 1,1,txtPartnerPk.GetData());
				}
				else
				{
				   alert("You should input and save master information first.");
				   return;
				}     
			break;
			case 3:// add new biz placeok
				if(txtPartnerPk!="")
				{
					grdBizplace.AddRow();
					grdBizplace.SetGridText(grdBizplace.rows - 1,1,txtPartnerPk.GetData());
				}
				else
				{
				   alert("You should input and save master information first.");
				   return;
				}   
				
			break;
			case 4: // add new location
				if(txtPartnerPk!="")
				{
					 grdLocation.AddRow();
					 grdLocation.SetGridText(grdLocation.rows - 1,1,txtPartnerPk.GetData());
				}
				else
				{
				   alert("You should input and save master information first.");
				   return;
				}   
			break;
		}
	 }
	 //---------------------------------------------------------
	 function onDelete(index)
	 {
		switch(index)
		{
		   case 0:// delete master
				if(confirm('Do you want to delete selected item ?'))
				{
					dso_ctl_gsor00100.StatusDelete();
					dso_ctl_gsor00100.Call();
				}   
			break;
			case 1:// delete charger
				if(confirm('Do you want to delete selected charger ?'))
				{
					 grdCharger.DeleteRow();
					 idData_Dsql_wcodc00001_1.Call();
				}
			break;
			case 2: // Delete contact
				if(confirm('Do you want to delete selected contact ?'))
				{
					 grdContact.DeleteRow();
					 idData_Dsql_wcodc00001_2.Call();
				}
			break;
			case 3:// delete place
				if(confirm('Do you want to delete selected place ?'))
				{
					 grdBizplace.DeleteRow();
					 idData_Dsql_wcodc00001_3.Call();
				}
			break;
			case 4: // delete location
				if(confirm('Do you want to delete selected location ?'))
				{
					 grdLocation.DeleteRow();
					 idData_Dsql_wcodc00001_4.Call();
				}
			break;
		  
		}          
	 }
	 function LoadUserDetail(sender,event)
	 {
		
		/*var row  = grdPartner.row;
		txtPartnerPk.value  = grdPartner.GetGridData(row,0);
		alert(txtPartnerPk.value);
		dso_ctl_gsor00100.StatusSelect();
		dso_ctl_gsor00100.Call("SELECT");	
		txtPartnerPk.value= sender.value;
			//txtParentPK1.value = sender.value + '';
			//idPName1.value=sender.selectedNodeText;
		dso_ctl_gsor00100.Call('SELECT'); */
		
			var rowIndex = event.row;
			txtPartnerPk.value = grdPartner.GetGridData(rowIndex, "PK");
			
			dso_ctl_gsor00100.Call("SELECT");
		
	 }
	 //---------------------------------------------------------
	 function openEmpLookup(num)
	 {
		var url = '/form/ch/ae/chae0010_search_emp.aspx' ;
		
		o = System.OpenModal( System.RootURL+ url , 900 , 600 , 'resizable:yes;status:yes') 
		
		if ( o != null )
		{
			grdCharger.SetGridText(grdCharger.row,2,o[0]); // Emp PK
			grdCharger.SetGridText(grdCharger.row,3,o[1]); // Emp ID
			grdCharger.SetGridText(grdCharger.row,4,o[2]); // Emp Name
			grdCharger.SetGridText(grdCharger.row,5,o[4]); // Department
		}
	 }
	 //---------------------------------------------------------
	 function OnDataReceive(obj)
	 {
		if(obj.id == "dso_cbo_gsor00100_1")
		{
			dso_ctl_gsor00100.Call("SELECT");
		}
		else if (obj.id =="dso_ctl_gsor00100")
		{
				imgFile.SetDataText(imagePK.text);
		}
		/*switch(oId.id)
		{
			/*case "dso_ctl_gsor00100":            
				status_control = dso_ctl_gsor00100.GetStatus();

				imgFile.SetDataText(imagePK.text);      
				imgFile_1.SetDataText(imagePK_1.text);      
				idData_Dsql_wcodc00001_1.Call("SELECT");
			break;
			
			case "idData_Dsql_wcodc00001_1":
				idData_Dsql_wcodc00001_2.Call("SELECT");
			break;
			case "idData_Dsql_wcodc00001_2":
				idData_Dsql_wcodc00001_3.Call("SELECT");
			break;
			case "idData_Dsql_wcodc00001_3":
				idData_Dsql_wcodc00001_4.Call("SELECT");
			break;
			case "idData_Dsql_wcodc00001_4":
				if ( status_control != 0 )
				{
					detail.Call("SELECT");
				}
				else
				{}
			break; 
		}*/
	 }
	 
	 function OnGetParent()
	 {
		var fpath = System.RootURL + "/form/ag/ec/agio00010_p.aspx";
		oValue = System.OpenModal( fpath , 600 , 350, 'resizable:yes;status:yes');
		
		if ( oValue != null)
		{
			txtParentPk.SetDataText(oValue[0]);
			txtParCom.SetDataText(oValue[2]);
		}
	 }
	 
	 /*function OnToggle()
	 {
		var left  = document.all("left");    
		var right = document.all("right");   
		var imgArrow = document.all("imgArrow");   
		
		if(imgArrow.status == "expand"){
			left.style.display="none";
			imgArrow.status = "collapse";
			right.style.width="100%";
			imgArrow.src = "../../../../system/images/next_orange.gif";
		}
		else{
			left.style.display="";
			imgArrow.status = "expand";
			right.style.width="80%";
			imgArrow.src = "../../../../system/images/prev_orange.gif";
		}
	 }
	 */
	function OnChan()
	 {
		if ( chAuto.value == 'T' )
		{
			txtPartnerid.SetEnable(false);
		  
		}
		else
		{
		  
			txtPartnerid.SetEnable(true);
		}
	 }
 //---------------------------------------------------------
</script>


<ts-data id="detail"> 
        <xml> 
            <dso  id="1"  type="grid"  parameter="PK,PARTNER_ID,PARTNER_NAME" 
				  function="ST_HR_SEL_GRD_GSOR00100_1"
				  procedure="">
                <data-inputs bind="grdPartner">
					<data-input bind="txtPartnerid" ></data-input>
                </data-inputs>
                <data-outputs  bind="grdPartner"></data-outputs>
				
            </dso> 
        </xml> 
</ts-data> 
<!--------------------->
<ts-data id="dso_ctl_gsor00100"  onreceive="OnDataReceive(this)" > 
    <xml> 
        <dso type="control" parameter="-" function="ST_HR_SEL_CTL_GSOR00100_0"  procedure="ST_HR_UPD_CTL_GSOR00100_0"> 
            <data-inouts> 
				<data-inout  bind="txtPartnerPk" />
                <data-inout  bind="txtParentPk" />
                <data-inout  bind="txtParCom" />
				<data-inout  bind="txtPartnerid" />
                <data-inout  bind="txtPartnerName" />
				
				<data-inout  bind="txtLname" />
                <data-inout  bind="txtFname" />
                <data-inout  bind="cboPartnertype" />
                <data-inout  bind="txtTaxcode" />
				<data-inout  bind="txtAddress1" />
				
                <data-inout  bind="txtAddress2" />
                <data-inout  bind="txtAddress3" />
				<data-inout  bind="txtPhone" />
				<data-inout  bind="txtEmail" />
				<data-inout  bind="txtFax" />
				
				<data-inout  bind="txtWebsie" />
				<data-inout  bind="cboTranccy" />
				<data-inout  bind="cboNation" />
				<data-inout  bind="chkActive" />
				<data-inout  bind="dtbAnniversary" />
				
				<data-inout  bind="txtNum_employee" />	
				<data-inout  bind="cboCompanysize" />
				<data-inout  bind="txtCapital" />
				<data-inout  bind="cboIndustrial" />
				<data-inout  bind="txtCompanyproduct" />
				
                <data-inout  bind="txtTaxoffice" />
				<data-inout  bind="dtbTo" />
			    <data-inout  bind="txtDescription" />
				<data-inout  bind="txtSerial" /> 
				<data-inout  bind="txtShortNM" />
				
				<data-inout  bind="txtFormNo" /> 
				<data-inout  bind="imagePK" /> 

            </data-inouts>
        </dso> 
    </xml> 
</ts-data> 
<!--------------------------------------------------------------------->
<ts-data id="dso_cbo_gsor00100_1" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter="" function="st_hr_sel_cbo_gsor00100_1">
            <data-inputs>
                <data-input bind="txtbyCbo" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="cboPartnertype"></data-output>
            	<data-output bind="cboNation"></data-output>
				<data-output bind="cboCompanysize"></data-output>
				<data-output bind="cboIndustrial"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<body >

<table align="top" id="tableID1" style="width:100%;height:100%;border:0" cellpadding="0" cellspacing="0" border="1">
            <tr>
                <td id="left" width="20%" valign="top"  >
                    <table width="20%" height="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr  height="1%">
                            <td  width="10%" >
                                <b style="color : #008800">Client</b>
                            </td>
                            <td width="20%">
                             <ts-textbox id="txtPartnerQuery" csstype="filter" onenterkey="onSearch(0)" imgtype="0">Search</ts-textbox>
                            </td>
                            <td width="3%" align="right">
                                <ts-button id="btnSearch" img="search" alt="Search" text="Search" onclick="onSearch(0)" imgtype="0">Search</ts-button>
                            </td>
                        </tr>
                          <tr style="height: 100%" valign="top">
                           <td colspan=100 width="100%" style="height:100%" >                    
							<ts-grid id="grdPartner"  rowClick="LoadUserDetail(sender,event)" style="width:100%;height:100%;" >
                                 <columns>
                                     <column text="PK"             datafield="PK"         columntype="textbox" width="10" hidden="true"></column>
                                     <column text="PARTNER ID"     datafield="PARTNER_ID" columntype="textbox" width="100"></column>
                                     <column text="PARTNER NAME"   datafield="PARTNER_NAME" columntype="textbox" width="200" ></column>
                                 </columns>
							</ts-grid>
                            </td>                            
                        </tr>
                    </table>
               </td> 
                <td id="right" width="100%"  >
                    <table width="100%" cellpadding="1" cellspacing="1" border="0">
                        <tr valign=top> 
							
                            <td id="Td1" width="80%" valign="top" >
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            <b style="color: #FF0000; cursor: hand" onclick="OnGetParent()">&nbsp;&nbsp;&nbsp; Parent Com</b>
                                        </td>
                                        <td width="87%" colspan="3">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td width="20%">
                                                        <ts-textbox id="txtParCom" style="width:100%" > </ts-textbox>
                                                    </td>
                                                    <td id="idVoucher" width="10%" align="right"></td>
                                                    <td width="15%"></td>
                                                    <td width="8%" align="left"></td>
                                                    <td width="13%">
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="85%"></td>
                                                             <td width="3%" align="right" style="height: 19px">
                                                                    <ts-button id="btnSearch1" img="search" alt="Search" text="Search" onclick="onSearch(1)"imgtype="0">Search </ts-button>
                                                                </td>
                                                                <td width="3%" align="right" style="height: 19px">
                                                                    <ts-button id="btnNew" img="new" alt="New" text="Add New" onclick="onNew(0)" imgtype="0">New</ts-button>
                                                                </td>
                                                                <td width="3%" style="height: 19px">
                                                                    <ts-button id="btnSave" img="save" alt="Save" text="Save" onclick="onSave(0)" imgtype="0">Save</ts-button>
                                                                </td>
                                                                <td width="3%" style="height: 19px">
                                                                    <ts-button id="btnDelete" img="delete" alt="Delete" text="Delete" onclick="onDelete(0)" imgtype="0">Delete</ts-button>
                                                                </td>
                                                                
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" height="3">
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp;&nbsp; Company Type
                                        </td>
										 <td width="20%">
														<ts-list id="cboPartnertype" displaymember="CODE_NM" valuemember="CODE" style='width:100%' ></ts-list> 
                                        </td>
                                        <td width="87%" colspan="3">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td width="11%" align="right">
                                                        <b style="color : #006666">Tax code &nbsp;</b>
                                                    </td>
                                                    <td width="15%">
                                                        <ts-textbox id="txtTaxcode" style="width:95%" csstype="mandatory" ></ts-textbox>
                                                    </td>
                                                    <td width="8%" align="right"></td>
                                                    <td width="13%"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" height="3">
                                        </td>
                                    </tr>
                                    <tr valign="top">

                                        <td width="13%" valign="middle">
                                            <b style="color: #006666; cursor: hand">&nbsp; &nbsp; Company ID</b></td>
                                        <td width="20%">
                                            <ts-textbox id="txtPartnerid" style="width:100%" csstype="mandatory" ></ts-textbox>
                                        </td>
										
                                        <td width="15%" valign="middle" align="right">
                                           <b style="color: #006666"> Company Name &nbsp;</b></td>
                                        <td>
										
                                            <ts-textbox id="txtPartnerName" csstype="mandatory" style="width:40%" ></ts-textbox>
                                        </td>
                                    </tr>
									 <tr>
                                        <td width="13%" valign="middle">&nbsp; &nbsp;Short Name</td>
                                        <td width="20%" colspan="1">
                                            <ts-textbox id="txtShortNM" style="width: 100%" ></ts-textbox>
                                        </td>
										<td width="15%" align="right">Representative &nbsp;</td>
                                        <td width="50%" colspan="1">
                                            <ts-textbox id="txtRepresentative" style="width:40%" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                          &nbsp; &nbsp; Local Name</td>
                                        <td width="20%" colspan="1">
                                            <ts-textbox id="txtLname" style="width:100%" csstype="" ></ts-textbox>
                                        </td>
										 <td width="10%" align="right">
                                                Fax &nbsp;
                                         </td>
                                         <td width="15%">
                                               <ts-textbox id="txtFax" style="width:40%" csstype="" ></ts-textbox>
                                         </td>

                                    </tr>
                                   
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp; &nbsp; Foreign Name</td>
                                        <td width="20%" colspan="1">
                                            <ts-textbox id="txtFname" style="width:100%" csstype="" ></ts-textbox>
                                        </td>
										<td width="10%" align="right">
                                               Email &nbsp;</td>
                                        <td width="15%">
                                               <ts-textbox id="txtEmail" style="width:40%" csstype="" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp; &nbsp; Address 1</td>
                                        <td width="20%" colspan="1">
                                            <ts-textbox id="txtAddress1" style="width:100%" csstype="" ></ts-textbox>
                                        </td>
										<td width="10%" align="right">
                                                        Web site &nbsp;</td>
                                        <td width="15%">
                                                        <ts-textbox id="txtWebsie" style="width:40%" csstype="" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                           &nbsp; &nbsp; Address 2</td>
                                        <td width="87%" colspan="3">
                                            <ts-textbox id="txtAddress2" style="width:23.5%" csstype="" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp; &nbsp; Address 3</td>
                                        <td width="87%" colspan="3">
                                            <ts-textbox id="txtAddress3" style="width:23.5%" csstype="" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp; &nbsp; Description</td>
                                        <td width="87%" colspan="3">
                                            <ts-textbox id="txtDescription" style="width:23.5%" csstype="" ></ts-textbox>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="13%" valign="middle">
                                            &nbsp; &nbsp; Phone
                                        </td>
                                        <td width="87%" colspan="3">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" >
                                                <tr>
                                                    <td width="20%">
                                                        <ts-textbox id="txtPhone" style="width:23.5%" csstype="" ></ts-textbox>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" height="2">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" height="1" bgcolor="#999999">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" width="100%">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td>
                                                        <ts-tab id="idTab" style="width: 100%; height: 220; border1px">
							                            <!--onpageactivate="showActiveTab()"-->
							                            <table width="100%" border="0" cellpadding="0" cellspacing="0"
								                            name="General Info" id="TabGeneralInfo" align="top"
								                            style="overflow:scroll">
								                            <tr>
								                                <td width=100%>
								                                    <table width="100%" cellpadding="0" cellspacing="2" border=0 >
								                                        <tr>
					                                                        <td colspan="5" height="2" ></td>
				                                                        </tr>
				                                                        <tr>
					                                                        <td colspan="6" height="1" bgcolor="#999999"></td>
				                                                        </tr>
				                                                        <tr>
				                                                            <td width=50% valign=top>
				                                                                <table width=100% cellpadding=0 cellspacing=0 border=0>
			                                                                       <tr height=24>
			                                                                            <td width=15%>&nbsp; &nbsp;Active</td>
											                                            <td width=20%><ts-checkbox id="chkActive" mode="01"	onchange="" /></td>
											                                            
										                                            </tr>
										                                             <tr height=24 >
											                                            <td width=15%>&nbsp; &nbsp;Tax office</td>
											                                            <td width=20%><ts-textbox id="txtTaxoffice"   style="width:100%" ></ts-textbox></td>
            											                           
										                                             </tr>
										                                            <tr>
											                                            <td width=15% align="left" >&nbsp; &nbsp;Number of employee</td>
											                                            <td width=20%><ts-textbox id="txtNum_employee" style="width:100%" ></ts-textbox></td>
            											                               
										                                            </tr>
										                                             <tr>
											                                            <td width=15%>&nbsp; &nbsp;Capital</td>
											                                            <td width=20%><ts-textbox id="txtCapital" style="width:100%" /></ts-textbox></td>
            											                               
										                                            </tr>
										                                            <tr>
											                                            <td width=15%>&nbsp; &nbsp;Company size</td>
											                                            <td width=20%>
																						<ts-list id="cboCompanysize" displaymember="CODE_NM" valuemember="CODE" style='width:100%' ></ts-list>
																						</td>
            											                              
										                                            </tr>
										                                            <tr>
											                                            <td width=15%>&nbsp; &nbsp;Nation</td>
											                                            <td width=20%>
																						<ts-list id="cboNation" displaymember="CODE_NM" valuemember="CODE" style='width:100%' ></ts-list>
																						</td>
            											                               
										                                            </tr>
										                                            <tr>
											                                            <td width=15%>&nbsp; &nbsp;Currency</td>
											                                            <td width=20%>		
																						<ts-list id="cboTranccy" displaymember="CODE_NM" valuemember="CODE" style='width:100%' ></ts-list>
																						</td>
            											                              
										                                            </tr>
										                                            <tr>
											                                            <td width=15%>&nbsp; &nbsp;Industrial zone</td>
											                                            <td width=20%><ts-list id="cboIndustrial" styles="width:100%"></ts-list></td>
            											                               
										                                            </tr>
										                                             <tr>
											                                            <td width=15%>&nbsp; &nbsp;Company product</td>
											                                            <td width=20%><ts-textbox id="txtCompanyproduct" style="width:100%" ></ts-textbox></td>
            											                                
										                                            </tr>
            										                                 <tr>
											                                            <td width=15%>&nbsp; &nbsp;Bank account</td>
											                                            <td width=20%><ts-textbox id="txtbankacc" style="width:100%" ></ts-textbox></td>
            											                                
										                                            </tr>
											                                    </table>
				                                                            </td>
                                                                            <td width=50% valign=top>
								                                                 <table width=100% cellpadding=0 cellspacing=0 border="0">
								                                                     <tr>
											                                            <td width=40% >&nbsp; &nbsp; &nbsp; &nbsp;Anniversary &nbsp;</td>
											                                            <td width=10%><ts-datebox id="dtbAnniversary"  mode="01"	onchange="" /></td>
										                                             </tr>
								                                                     <tr>
								                                                        <td width=40% align=left>&nbsp; &nbsp; &nbsp; &nbsp;Valid from &nbsp;</td>
								                                                        <td width=20%><ts-datebox id="dtbFrom"  mode="01"	onchange="" /></td>
								                                                        <td width=10% valign="middle"><b>~</b></td>
								                                                        <td width=20%><ts-datebox id="dtbTo"  mode="01"	onchange="" /></td>
							                                                        </tr>
							                                                         <tr>
								                                                        <td width=40% align=left>&nbsp; &nbsp; &nbsp; &nbsp;Serial no &nbsp;</td>
								                                                        <td width=60% colspan=2><ts-textbox id="txtSerial" style="width: 100%" ></td>
							                                                        </tr>
            							                                            
							                                                        <tr>
							                                                            <td width=40% align=left>&nbsp; &nbsp; &nbsp; &nbsp;Form no &nbsp;</td>
							                                                            <td width=60% colspan=2><ts-textbox id="txtFormNo" style="width: 100%" /></td>
							                                                        </tr>
							                                                        <tr>
							                                                            <td width=40% align=left><b>&nbsp;</b></td>
							                                                            <td>
																						  <ts-image id="imgFile"  styles="width:130;height:100"  styles="width:130;height:100"  />
																						</td>
							                                                        </tr>
								                                                 </table>
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
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
         </tr>
 </table>
</body>
	<ts-textbox id="txtbyCbo"  style="display: none"></ts-textbox>
	<ts-textbox id="txtPartnerPk"  style="display: none"></ts-textbox>
	<ts-textbox id="txtParentPk"  style="display: none"></ts-textbox>
	<ts-textbox id="imagePK"  style="display: none"></ts-textbox>
	<ts-textbox id="imagePK_1"  style="display: none"></ts-textbox>
	<ts-textbox id="txtPartID"  style="display: none"></ts-textbox>
	<ts-textbox id="txtTable"  style="display: none"></ts-textbox>
	
	
</html>