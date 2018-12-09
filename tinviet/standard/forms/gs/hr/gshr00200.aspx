
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
	var txtUser_PK=<%=GetSessionUserPk()%>;
 
}

function OnDataReceive(obj)
{
    if(obj.id=="dso_grd_gshr00200_1")
    {
        for(var i=1;i<idGrid2.rows;i++)
        {
            idGrid2.SetGridData(i,8,txtUser_PK);
            idGrid2.SetRowStatus(i,0);
        }
    }
    if(obj.id=="dso_grd_gshr00200_0")
        datSalary_security.Call("SELECT");
}
function onClick_M()
{
    txtUser_PK.text=idGrid1.GetGridData(event.row,4);
    dso_grd_gshr00200_1.Call("SELECT");
}
function OnSave(n)
{
    if(confirm("Do you want to save?\nBạn muốn save?"))
        if(n==1)
            dso_grd_gshr00200_1.Call();
        else    
            datSalary_security.Call();
}
</script>

<body>
<!------------main control---------------------->
<ts-data id="dso_grd_gshr00200_0" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="grid" parameter="0" function="ST_HR_SEL_GSHR00200_0"> 
                <data-inputs bind="idGrid1">
                    <data-input bind="txtUser_PK"></data-input> 
					<data-input bind="txtClientDB"> </data-input>
                </data-inputs> 
                <data-outputs bind="idGrid1"></data-outputs>
            </dso> 
        </xml> 
</ts-data>

<ts-data id="dso_grd_gshr00200_1" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="grid" parameter="0,7,8" function="ST_HR_SEL_GSHR00200_1" procedure="ST_HR_UPD_GSHR00200_1"> 
                <data-inputs bind="idGrid2">
                    <data-input bind="txtUser_PK"> </data-input>
                </data-inputs> 
                <data-outputs bind="idGrid2"></data-outputs>
            </dso> 
        </xml> 
</ts-data>

<ts-data id="datSalary_security" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="grid" parameter="4,5,6" function="ST_HR_SEL_GSHR00200_2" procedure="ST_HR_UPD_GSHR00200_2"> 
                <data-inputs bind="idGrid3">
                    <data-input bind="txtUser_PK"> </data-input>
					<data-input bind="txtClientDB" ></data-input> 
                </data-inputs> 
                <data-outputs bind="idGrid3"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!--------------------main table--------------------------------->
<table style="width:100%;height:100%" cellpadding="0" cellspacing="0" align="top" border="1" >
	<tr>
	    <td width=50%>
	    <table id="tblMain" style="width:100%;height:100%" border=1 cellpadding="0" cellspacing="0">
	            <tr style="width:100%;height:30%">
	                <td id="tdMaster" style="width:100%">
	                    <ts-grid id="idGrid1" rowClick="onClick_M(sender,event)">
							<columns>	
								<column text="User ID"	    datafield="USER_ID"     width="110" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>					
								<column text="Full Name"	datafield="FULL_NAME" 	width="200" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
								<column text="Employee ID"	datafield="EMP_LEVEL" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
								<column text="Department" 	datafield="DEPARTMENT" 	width="200" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="PK" 	    	datafield="PK" 			width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
							</columns>
						</ts-grid>
	                </td>
	            </tr>
	            <tr style="width:100%;height:5%">
					<td  width="100%" align="right" >
						<ts-button img="save" id="ibtnSave" alt="Save" onclick="OnSave(1)" imgtype="0">Update</ts-button>
					</td>
				</tr>	
				<tr style="width:100%;height:65%">
					<td id="td2" style="width:100%">
						<ts-grid id="idGrid2">
							<columns>	
								<column text="Select"	    	datafield="USER_ID"     width="100" 	columntype="checkbox" 		cellsalign="center" 	editable=true>	                	</column>					
								<column text="Department ID"	datafield="FULL_NAME" 	width="100" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
								<column text="Employee ID"		datafield="EMP_LEVEL" 	width="100" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
								<column text="Department ID" 	datafield="DEPT_ID" 	width="100" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="Department Name" 	datafield="DEPT_NAME" 	width="100" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="Type" 			datafield="TYPE" 		width="100" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="Start Date" 		datafield="START_DT" 	width="100" 	columntype="date" 			cellsalign="left"		editable=true>						</column>
								<column text="End Date" 		datafield="END_DT" 		width="100" 	columntype="date" 			cellsalign="left"		editable=true>						</column>
								<column text="Remark" 			datafield="REMARK" 		width="100" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="dept_pk" 	    	datafield="DEPT_PK" 	width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
								<column text="emp_pk" 	    	datafield="EMP_PK" 		width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
								</columns>
						</ts-grid>
	                </td>
	              </tr>  
	       </table>
	    </td>
	    <td width=50%>
	    <table id="Table1" style="width:100%;height:100%" border=1 cellpadding="0" cellspacing="0">
	            <tr style="width:100%;height:5%">
					<td  width="100%" align="right" >
						<ts-button img="save" id="ibtnSave2" alt="Save" onclick="OnSave(2)" imgtype="0">Update</ts-button>
					</td>
				</tr>
	            <tr style="width:100%;height:95%">
	                <td id="td1" style="width:100%">
	                    <ts-grid id="idGrid3">
							<columns>	
								<column text="User ID"	    	datafield="USER_ID"     width="110" 	columntype="textbox" 		cellsalign="center" 	editable=true>	                	</column>					
								<column text="Full Name"		datafield="FULL_NAME" 	width="200" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
								<column text="Employee ID"		datafield="EMP_LEVEL" 	width="100" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
								<column text="Department" 		datafield="DEPARTMENT" 	width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
								<column text="Salary Control" 	datafield="SALARY_CTRL"	width="100" 	columntype="checkbox" 		cellsalign="left"		editable=true>						</column>								
								<column text="PK" 	    		datafield="PK" 			width="50" 		columntype="textbox" 		cellsalign="left"		editable=true  hidden="true">		</column>
							</columns>
						</ts-grid>  
	                </td>
	            </tr>
	       </table>
	      </td>
	</tr>
</table>
<ts-textbox id="txtUser_PK" style="display:none"/>
<ts-textbox id="txtClientDB" text="" style="display: none" />
</body>
</html>

