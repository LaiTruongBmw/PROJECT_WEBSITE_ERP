
<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Salary View</title>
</head>
    <style type="text/css">
		
    </style>
<script>
function BodyInit()
{ 

}
//----------------------------------------------------
function OnSearch()
{
        dso_grd_gshr000300_0.Call("SELECT");
}
//-----------------------------------------------------------
function OnAddNew()
{
        grdUser.AddRow();   
}
//-----------------------------------
function OnDelete()
{
    grdUser.DeleteRow();
}
//----------------------------------------------------------
function OnSave(obj)
{
    if(confirm("Do you want to save?\nBạn muốn save?"))
    {
            dso_grd_gshr000300_0.Call();
    }
}
function OnDataReceive(obj)
{
       if (obj.id=="dso_grd_gshr000300_0")
       {
          idRecord.text = grdUser.rows -1 +' records';
       } 
	   
}       
</script>
<body bottommargin="0" topmargin="0" leftmargin="0" rightmargin="0" >
<!----------------------------------->
<ts-data id="dso_grd_gshr000300_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="grid" parameter="PK,USER_ID,EMP_ID,FULL_NAME,ORG_CODE,EMP_LEVEL,POSITION,VIEW_LEVEL,DESCRIPTION" 
            function="ST_HR_SEL_GSHR00300_0" 
            procedure="ST_HR_UPD_GSHR00300_0" > 
            <data-inputs> 
                <data-input bind="txtEmp_PK" ></data-input>
            </data-inputs> 
            <data-outputs bind="grdUser"></data-outputs>
        </dso> 
   </xml> 
</ts-data> 
<!----------------------------------->
    <table  name="Summary" id="tblEvent" width="100%" cellpadding="0" cellspacing="0" border=1 style="width:100%;height:100%;" valign="top">
        <tr style="width:100%;height:100%" valign="top">
            <td>				
				<div id="topbutton" style="padding:5px; width:100%;height:5%;">
					<table width="100%"  style="height:100%" border=0 cellpadding="0" cellspacing="0">
						<tr style="border:0;width:100%;height:5%" valign="center">
							<td width="2%" align="left"></td>
							<td  width="5%" align="left">Row:</td>
							<td width="5%" align="left">
								<ts-label id="idRecord"></ts-label>
							</td>
							<td  width="50%" align="left"></td>
							<td width="5%" >
                                <ts-button img="search" id="ibtnSearch1" alt="search" onclick="OnSearch(1)" imgtype="0">Search</ts-button>
                            </td>
                            <td width="1%" align="left"></td>
							<td width="5%" >
                                <ts-button img="new" id="ibtnAdd" alt="Add New" onclick="OnAddNew()" imgtype="0">Add New</ts-button>
                            </td>
                            <td width="1%" align="left"></td>
							<td  width="5%" >
                                <ts-button img="save" id="ibtnSave" alt="Save" onclick="OnSave()" imgtype="0">Update</ts-button>
                            </td>
                            <td width="1%" align="left"></td>
							<td width="5%" >
                                <ts-button img="delete" id="ibtnDel" alt="Delete" onclick="OnDelete()" imgtype="0">Delete</ts-button>
                            </td>
                            <td width="1%" align="left"></td>
							<td  width="5%" >
							<ts-button id="ibtnReport1"  alt="Report"  img="excel"  onclick="OnReport(1)" imgtype="0" >Report</ts-button>
                            </td>
                            <td width="2%" align="left"></td>
						</tr>
					</table>
				</div>
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border:0px solid #62ac0d;width:100%;height:95%">
					<table width="100%" style="height:100%" border=0 cellpadding="0" cellspacing="0">								        					        
						<tr align = top style="border:0;width:100%;height:90%" valign="center"> 
	                        <td  colspan="50"  align = top style="width:100%;height:100%" >
	                           <table width="100%" id="tblMaster" style="height:100%" border=1 cellpadding="0" cellspacing="0">
                                    <tr style="border:1;width:100%;height:100%" valign="top">
                                        <td>
                                          <ts-grid id="grdUser">
                                            <columns>	
                                                <column text="PK"			    datafield="PK" 			width="50" 	    columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
                                                <column text="User ID"	        datafield="USER_ID"     width="100" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>
                                                <column text="Emp ID"		    datafield="EMP_ID" 	    width="100" 	columntype="textbox" 		cellsalign="center"		editable=true >						</column>					
                                                <column text="Full Name"		datafield="FULL_NAME" 	width="200" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
                                                <column text="Organization"	    datafield="ORG_CODE" 	width="200" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
                                                <column text="Employee Level" 	datafield="EMP_LEVEL" 	width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                                <column text="Position" 	    datafield="POSITION" 	width="200" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                                <column text="View Level" 		datafield="VIEW_LEVEL" 	width="200" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                                <column text="Description" 		datafield="DESCRIPTION" width="200" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                            </columns> 
                                         </ts-grid>
		                                </td>  
                    	            </tr>
                    	        </table>                    	         
  	                        </td>
						</tr>
					</table>
				</div>
			</td>
        </tr>
    </table>   			 
    <ts-textbox id="iduser_pk" style="display:none"/>
    <ts-textbox id="txtHr_level" style="display:none"/>
    <ts-textbox id="txtEmp_PK" style="display:none"/>
</body>
</html>

				
