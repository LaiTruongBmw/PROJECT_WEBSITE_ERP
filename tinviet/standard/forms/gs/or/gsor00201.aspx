<%@ include file="/jsplib/taglibs.jsp"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Entry</title>
<%@ include file="/jsplib/header.incl.jsp"%>
<style type="text/css"></style>
<script type="text/javascript">
function BodyInit()
{
	txtClient.value = System.getAppUser();
	txtCompany_PK.value = "<%=request.getParameter("txtcompanypk")%>";
    //txtKeyWord.GetControl().focus();
	//txtClient.SetEnable(false);
	//dso_department.Call("SELECT");
	dso_lst_stgshr00201_0.Call("SELECT");
}
function OnSearch()
{
	dso_grd_stgshr00201_0.Call("SELECT");
}

function doSelect(sender,event)
{
	//alert("test");
	//var rowindex = idGrid.selectedrowindexes;
	var rowindex = event.row;
	var code_data=new Array();
	
	code_data[0]=idGrid.GetGridData( rowindex , 'pk' );
	code_data[1]=idGrid.GetGridData( rowindex , 'org_nm' );
	code_data[2]=idGrid.GetGridData( rowindex , 'emp_name' );
	code_data[3]=idGrid.GetGridData( rowindex , 'emp_id' );
	code_data[4]=idGrid.GetGridData( rowindex , 'pos_type' );
	code_data[5]=idGrid.GetGridData( rowindex , 'job_type' );
	code_data[6]=idGrid.GetGridData( rowindex , 'tel' );
	code_data[7]=idGrid.GetGridData( rowindex , 'permanent_addr' );
	code_data[8]='';
	code_data[9]='';
	
	System.setDataParam(code_data);
	//alert(code_data);
	System.ClosePopup(window);

}
function OnSelect()
{
	var rowindex = idGrid.selectedrowindexes; //alert(rowindex);
	//var rowindex = event.row;
	var code_data=new Array();
	
	code_data[0]=idGrid.GetGridData( rowindex , 'pk' );
	code_data[1]=idGrid.GetGridData( rowindex , 'org_nm' );
	code_data[2]=idGrid.GetGridData( rowindex , 'emp_name' );
	code_data[3]=idGrid.GetGridData( rowindex , 'emp_id' );
	code_data[4]=idGrid.GetGridData( rowindex , 'pos_type' );
	code_data[5]=idGrid.GetGridData( rowindex , 'job_type' );
	code_data[6]=idGrid.GetGridData( rowindex , 'tel' );
	code_data[7]=idGrid.GetGridData( rowindex , 'permanent_addr' );
	code_data[8]='';
	code_data[9]='';
	
	System.setDataParam(code_data);
	//alert(code_data);
	System.ClosePopup(window);

}

 function OnDataReceive(obj)
 {
	if(obj.id =='dso_lst_stgshr00201_0')
	{
		OnSearch();
	 }	
 }



<%-- System.GetDataLanguage_Popup(document,window.location.toString(),'<%=Session("SESSION_LANG")%>','<%=Session("CODEADMIN_YN")%>'); --%>
</script>
</head>
<!--  BEGIN DSO  -->
<body >

<gw-data id="dso_lst_stgshr00201_0" onreceive="OnDataReceive(this)"> 
		<xml> 
			<!-- procedure="gasp.ga_sel_wsyau00001_list_org" -->
			<dso type="list" function="st_hr_sel_lst_stgshr00201_0" > 
				<data-inputs>
					 <data-input bind="txtClient" > </data-input>
					 <data-input bind="txtCompany_PK" > </data-input>
				</data-inputs>
				<data-outputs> 
					<data-output bind="lstDepartment"></data-output>
				</data-outputs>
			</dso> 
		</xml> 
	</gw-data>
	

<gw-data id="dso_grd_stgshr00201_0"  onreceive="OnDataReceive(this)" > 
    <xml> 
   		 <dso type="grid" parameter="" function="st_hr_sel_grd_stgshr00201_0" procedure=""   > 
            <data-inputs> 
                <data-input bind="txtClient" ></data-input>
                <data-input bind="lstDepartment" ></data-input>
                <data-input bind="txtKeyWord" ></data-input>
             </data-inputs>
            <data-outputs  bind="idGrid"></data-outputs>
        </dso> 
    </xml> 
</gw-data> 



<table  align="center" width="100%" height="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr height="8%">
    
	<td colspan=10 width="10%"><gw-label id="lbl_lang_Org" >Org:</gw-label></td>
	<td colspan=20 width="20%"><gw-list id="lstDepartment"  valuemember="val" displaymember="nm"  ></gw-list></td>
	<td colspan=10 width="10%"><gw-label id="lbl_lang_IdName" >ID/Name:</gw-label></td>
	<td colspan=20 width="20%"><gw-input id="txtKeyWord" onenterkey="OnSearch()" ></gw-input></td>
    <td colspan=5 align="right" width="5%" style="padding-left:1px;">
    	<!-- <gw-button id="idSearch" img="search" alt="Search" text="Search" onclick="OnSearch();" /> -->
    	<gw-imgbtn id="idSearch" text="search" img="search"  onclick="OnSearch()" ></gw-imgbtn>
    </td>
    <td colspan=5 align="right" width="5%" style="padding-left:1px;">
    	<gw-imgbtn id="btnSelect" text="Select" img="select"  onclick="OnSelect()" ></gw-imgbtn>
    	
    </td>
  </tr>
  <tr height="92%">
	  <td colspan=99   >
			    <gw-grid id="idGrid" rowDblClick ="doSelect(sender,event)" >
					 <columns>
						<column text="_PK" datafield="pk" columntype="textbox" editable="false" hidden="true" width="0"></column>
						<column text="Organization" datafield="org_nm" columntype="textbox" editable="false"  width="150"></column>
						
						<column text="Emp Name" datafield="emp_name" columntype="textbox" editable="false" width="200"></column>
						<column text="Emp ID" datafield="emp_id" columntype="textbox" editable="false" width="100"></column>
						<column text="Position" datafield="pos_type" columntype="textbox" editable="false"  width="100"></column>
						<column text="Job" datafield="job_type" columntype="textbox" editable="false"  width="100"></column>
						<column text="Tel" datafield="tel" columntype="textbox" editable="false"  width="100"></column>
						
						<column text="Address" datafield="permanent_addr" columntype="textbox" editable="false" hidden="true" ></column>
						
					</columns>
				</gw-grid>
	</td>
  </tr>
</table>
<gw-input id="txtClient" style="display:none;" />
<gw-input id="txtCompany_PK" style="display:none;" />
</body>
</html>