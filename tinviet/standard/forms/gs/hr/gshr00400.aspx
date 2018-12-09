
<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Salary View</title>
</head>
    <style type="text/css">
		
	</style>
</head>
<script>

function BodyInit()
{
    txtClientDB.text  = System.getClientPk();
    chkCheck.value="Y";
}
function DisableControl()
{
    txtPartnerName.SetEnable(false);
    txtPartAddress.SetEnable(false);
    txtPhone.SetEnable(false);
    txtFax.SetEnable(false);
    txtEmail.SetEnable(false);
    txtWebsite.SetEnable(false);
}
function BindingDataList()
{   
 
 



}

function searchUser()
{
    dso_grd_gshr00400_0.Call("SELECT");
}

function openEmpLookup(num)
{
	var url = '/standard/forms/gs/au/gsau00101.aspx' ;
	o = System.OpenModal( System.RootURL+ url , 700 , 500 , 'resizable:yes;status:yes') 
	if ( o != null )
	{       
		if(num== 0) txtSearchName.text = o[1];
		else {
		txtEmpPk.text = o[0];
		txtName.text = o[1];
		txtTel.text = o[2];
		txtMobile.text = o[3];
		txtLivingAddr.text = o[5];
		txtGroup.text = o[9];
		txtJob.text = o[4];
		txtPosition.text = o[6];
		txtDept.text = o[7];
		}
	}	
}
function loadUserMapping(){
		
	var row  = grdUserList.row;
	txtUserPK.text = grdUserList.GetGridData(row, 5);
	btnNew.SetEnable(true);
	ibtnSearch.SetEnable(true);
	dso_grd_gshr00400_1.Call("SELECT");
}

function AddOnClick() {
    var fpath = System.RootURL + "/standard/forms/gs/hr/gshr00401.aspx?p_userpk="+ txtUserPK.text;
    var aData = new Array();
    aData = System.OpenModal(fpath, 700, 500, 'resizable:yes;status:yes');
    if (aData != null) 
    {
        var len = aData.length;

        for (i = 0; i <= len - 1; i++) {

            aRow = aData[i];
            grdMapping.AddRow();
            var irow = grdMapping.rows - 1;
            grdMapping.SetGridText(irow, 1, txtUserPK.text); 	// id
            grdMapping.SetGridText(irow, 2, aRow[0]); 	// emp_pk


            grdMapping.SetGridText(irow, 3, aRow[1]); 	// name
            grdMapping.SetGridText(irow, 4, aRow[2]); 	// url
            grdMapping.SetGridText(irow, 5, aRow[3]); 	// url
        }

    }	
}

function SaveOnClick(){


    if (confirm("Do you want to save?\nBạn có muốn lưu?"))
        dso_grd_gshr00400_1.Call();

}
function OnSearch() {

    datMenu.Call("SELECT");
}

function OnDataReceive(objData)
{
    
}

function DeleteOnClick(){
    
    if(confirm("Do you want to delete?\n Bạn có muốn xóa?")){
        grdMapping.DeleteRow();
    }
}
//------------------------------------------------------------------------------------
function OnSetGrid(obj_checkbox,obj_grd,obj_col)
{	
    var tmp;
    if( obj_checkbox.GetData()=='T')
		tmp=-1;
	else
		tmp=0;
    var ctrl = obj_grd.GetGridControl();
    
    if (ctrl.SelectedRows>0)
    {
	    for ( var i =  0 ; i < ctrl.SelectedRows ; i++ )
		    {
			    var row = ctrl.SelectedRow(i);
			    if ( row > 0 )
			    {		
				    obj_grd.SetGridText(row,obj_col,tmp);
			    }
		    }
	}
	else
	{
	    for ( var i =  1 ; i < ctrl.rows ; i++ )
				    obj_grd.SetGridText(i,obj_col,tmp);
	}
}
</script>
<body leftmargin="5">
    
<ts-data id="dso_grd_gshr00400_0"> 
    <xml> 
        <dso type="grid"  function="ST_HR_SEL_GSHR00400_0" > 
            <data-inputs> 
                <data-input bind="txtSearchUserID"></data-input>
                <data-input bind="txtSearchName"></data-input>
                <data-input bind="chkCheck" ></data-input>
                <data-input bind="txtClientDB"></data-input>
            </data-inputs>
            <data-outputs  bind="grdUserList"></data-outputs>
        </dso> 
    </xml> 
</ts-data>
            
<ts-data id="dso_grd_gshr00400_1"  onreceive="OnDataReceive(this)" > 
    <xml> 
        <dso type="grid" parameter="0,1,2,6" function="ST_HR_SEL_GSHR00400_1" procedure="ST_HR_UPD_GSHR00400_1"> 
            <data-inputs bind="grdMapping" > 
                <data-input bind="txtUserPK"> </data-input>
                <data-input bind="lstSearchBy"></data-input>
                <data-input bind="txtTemp"></data-input>
            </data-inputs> 
            <data-outputs bind="grdMapping"> </data-outputs>
        </dso> 
    </xml> 
</ts-data>
     
    <table width="100%" height="100%" border="1" cellspacing="0" cellpadding="0">
        <tr>
            <td width="50%" valign="top">
                <table width="100%" height="100%">
                    <tr style="width:100%; height:10%">
                        <td width="15%">
                            <b>UserID/EmpID</b>
                        </td>
                        <td width="20%">
                            <ts-textbox id="txtSearchUserID" styles="width:95%"  onenterkey="searchUser()" />
                        </td>
                        <td width="20%">
                            &nbsp;&nbsp;<b>Emp Name</b></td>
                        <td width="20%">                            
                            <ts-textbox id="txtSearchName" styles="width:95%"  onenterkey="searchUser()" />
                        </td>
                        <td width="5%" align="center">
                            <ts-button id="btnNewSub2" img="popup" alt="popup" onclick="openEmpLookup(0)" imgtype="0">Popup</ts-button>
                        </td>
                        <td align="center" width="15%">
                            <ts-checkbox id="chkCheck" mode="01"><b>Active</b></ts-checkbox>
                        </td>
                        <td width="5%" align="right">
                                <ts-button img="search" id="btnSearch"   alt="search"  onclick="searchUser()" imgtype="0">Search</ts-button>
                        </td>
                    </tr>
                    <tr style="width:100%; height:90%">
                        <td colspan="7">
                            <ts-grid id="grdUserList"  rowClick="loadUserMapping(sender,event)">
                                <columns>	
                                    <column text="Emp ID"	    datafield="EMP_ID"      width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>					
                                    <column text="Employee Name"datafield="EMP_NAME" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
                                    <column text="User ID"	    datafield="USER_ID" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
                                    <column text="Mobile" 	    datafield="MOBILE" 	    width="130" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="Living Address"datafield="LIVING_ADDR" width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="PK" 	    	datafield="PK" 			width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
                                </columns>
                            </ts-grid>
                        </td>
                    </tr>
                </table>
            </td>
            <td align="center"  width="50%"  valign="top">
                <table style="width:100%; height:100%" border="0" cellspacing="0" cellpadding="0">
                    <tr style="width:100%; height:10%">
                        <td>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="100%">
                                        <table width="100%" >
                                            <tr>
                                                <td width="4%">
                                                    Search</td>
                                                <td width="12%" align="right">
                                                    <ts-list  id="lstSearchBy" value="1" styles='width:100%' onchange=""> 
							                             
					                                </ts-list>
                                                </td>
                                                <td width="2%">
                                                        &nbsp;
                                                </td>
                                                <td width="12%" align="right">
                                                    <ts-textbox id="txtTemp" onenterkey   ="loadUserMapping()" styles="width:95%"/>
                                                </td>
                                                <td width="2%">
                                                    &nbsp;
                                                </td>
                                                <td width="2%">
                                                    <ts-button img="search" id="ibtnSearch2"   alt="search"  onclick="loadUserMapping()" imgtype="0">Search</ts-button>
                                                </td>
                                                <td width="2%">
                                                    <ts-button img="new" id="btnNew"   alt="Add"  onclick="AddOnClick()" imgtype="0">Add New</ts-button>
                                                </td>
                                                <td width="2%">
                                                    <ts-button img="save" id="btnSave"    alt="Save"  onclick="SaveOnClick()" imgtype="0">Update</ts-button>
                                                </td>
                                                <td width="2%">
                                                    <ts-button img="delete" id="btnDelete"    alt="Delete"  onclick="DeleteOnClick()" imgtype="0">Delete</ts-button>
                                                </td>
                                                <td width="6%" align="right">
                                                    Set
                                                </td>
                                                <td width="2%">
                                                    <ts-checkbox id="chkCheckReport" value="F" onclick="OnSetGrid(chkCheckReport,grdMapping,6)" ></ts-checkbox >
                                                </td>
                                                
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="width:100%; height:90%">
                        <td>
                            <ts-grid id="grdMapping">
                                <columns>	
                                    <column text="PK" 	    	datafield="PK" 			width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
                                    <column text="USER_PK" 	    datafield="USER_PK" 	width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
                                    <column text="OBJ_PK" 	    datafield="OBJ_PK" 		width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
                                    <column text="Menu ID"	    datafield="MENU_ID"     width="110" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>					
                                    <column text="Menu Name"	datafield="MENU_NAME" 	width="200" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
                                    <column text="Menu URL"	    datafield="MENU_URL" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
                                    <column text="Only View" 	datafield="MOBILE" 	    width="200" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                </columns>
                            </ts-grid> 
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <ts-textbox id="iddata-input1" text="" style="display: none" />
    <ts-textbox id="txtPartnerPk" text="" style="display: none" />
    <ts-textbox id="txtUserPK" style="display: none" />
    <ts-textbox id="txtEmpPk" style="display: none" />
    <ts-textbox id="txtPwdEnc" style="display: none" />
    <ts-textbox id="txtreNum" text="" style="display: none" />
    <ts-textbox id="txtreMsg" text="" style="display: none" />
    <ts-textbox id="txtClientDB" text="" style="display: none" />
</body>
</html>
