<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>HR Code 2</title>
</head>
<style type="text/css">
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}
</style>
<script type="text/javascript">

 function BodyInit()
    {
        BindingDataList();
        
        var data=<%=TSErpLib.SetListDataSQL("select a.pk,a.PARTNER_NAME from tco_company a where a.del_if = 0 and a.ACTIVE_YN='Y' ")%>;
        lstCompany.setDataJson(data);  
      //  OnSearch('MASTER');
        
        
    }
    //===============================================================
    
    function BindingDataList()
    { 
    
    }
  
  
    function OnAddNew()
    {
        var objCtrl = grdDetail.GetGridControl();
        
        if (grdMaster.row > 0)
        {
            grdDetail.AddRow();
            
      
            objCtrl.TextMatrix( objCtrl.Rows-1, G2_MASTER_PK    ) = grdMaster.GetGridData(grdMaster.row, G1_PK );
            objCtrl.TextMatrix( objCtrl.Rows-1, G2_COMPANY_PK    ) = lstCompany.value ;        
        }
        else
        {
            alert((v_language=='ENG') ? "Please select one Group first":"Vui lòng chọn mã code");
        }    
    }
	
   function OnDelete()
    {
        if (confirm((v_language=='ENG') ? "Do you want to delete? ":" Bạn có muốn xóa không?"))
        {
            grdDetail.DeleteRow();
            dso_grd_gshr00500_1.Call();    
        }
        
    }
   function OnSave()
    {  
        if (confirm((v_language=='ENG') ? "Do you want to save? ":" Bạn có muốn lưu không?"))
        {
            dso_grd_gshr00500_1.Call();    
        }
    }
	
	function OnSearch(p)
    {
        if (p == 'MASTER')
        {
            dso_grd_gshr00500_0.Call('SELECT');
        }
        if (p == 'DETAIL')
        {
            dso_grd_gshr00500_1.Call('SELECT');            
        }      
    }
   function OnClickGroup(sender,event)
    {
        var rowIndex = event.row;
		txtMaster_PK.value = grdMaster.GetGridData(rowIndex, "PK");
        lbCode.text = grdMaster.GetGridData(rowIndex, "CODE_ID");
        txtCodeID_D.text = "";
        txtCodeName_D.text = "";

        dso_grd_gshr00500_1.Call('SELECT');
    }
	
	function OnToggle()
    { 
        var left  = document.all("t-left");    
        var right = document.all("t-right");
        var imgArrow  = document.all("imgArrow");  
        
        if ( imgArrow.status == "expand" )
        {
            left.style.display     = "none";
            right.style.display    = "";                              
                    
            imgArrow.status = "collapse";  
            imgArrow.src = "../../../../system/images/button/next.gif";                              
        }
        else 
        {
            left.style.display     = "";
            right.style.display    = "";
            
            imgArrow.status = "expand";
            imgArrow.src = "../../../../system/images/button/previous.gif";
        }
    }
</script>
<body>
    <!------------------------------------------------------------>
    <ts-data id="dso_grd_gshr00500_0" onreceive="OnDataReceive(this)">
            <xml>
                <dso id="1" type="grid" function="ST_HR_SEL_GSHR00500_0">
                    <data-inputs bind="grdMaster" >
                        <data-input bind="txtCodeID"></data-input>
                        <data-input bind="txtCodeName"></data-input>
                    </data-inputs>
                    <data-outputs bind="grdMaster"></data-outputs>
                </dso>
            </xml>
        </ts-data>
        <!---------------------------------------------------------->
        <ts-data id="dso_grd_gshr00500_1" onreceive="OnDataReceive(this)"> 
                <xml> 
                    <dso  type="grid"  
                    parameter="PK,MASTER_PK,SEQ,CODE_ID,CODE_NAME,KNAME,CODE_FNM,NUM1,NUM2,NUM3,NUM4,NUM5,NUM6,NUM7,NUM8,CHAR1,CHAR2,CHAR3,CHAR4,CHAR5,CHAR6,CHAR7,CHAR8,USE_YN,REMARK,COMPANY" 
                    function="ST_HR_SEL_GSHR00500_1" 
                    procedure="ST_HR_UPD_GSHR00500_1">
                        <data-inputs bind="grdDetail" >
                            <data-input bind="txtMaster_PK"></data-input>
                            <data-input bind="lstCompany" ></data-input>
                            <data-input bind="txtCodeID_D"></data-input>
                            <data-input bind="txtCodeName_D"></data-input>
                        </data-inputs>
                        <data-outputs bind="grdDetail"></data-outputs>
                    </dso> 
                </xml> 
        </ts-data>
    <!--------------------------------------------------------------------------------------->
     <table style="background-color: #BDE9FF; height: 100%; width: 100%" cellspacing="2">
        <tr style="background-color: White">
            <td id="t-left" style="width: 30%">
                <table style="height: 100%; width: 100%">
                    <tr style="height: 1%">
                        <td style="width: 40%" align="right">
                            Code ID
                        </td>
                        <td style="width: 69%" align="right">
                            <ts-textbox id="txtCodeID" styles="width: 100%" keyPressed="OnSearch('MASTER')" /> 
                        </td>
                        <td style="width: 1%">
                           <ts-button img="search" id="ibtnSearch_S"   alt="search"  onclick="OnSearch('MASTER')"  imgtype="0">Search</ts-button>
                        </td>
                    </tr>
					<tr style="height: 1%">
                        <td style="width: 40%" align="right">
                           Code Name
                        </td>
                        <td style="width: 69%" align="right">
                            <ts-textbox id="txtCodeName" styles="width: 100%" onenterkey="OnSearch('MASTER')" /> 
                        </td>
                        <td style="width: 1%">
                          
                        </td>
                    </tr>
                   
                     <tr style="height: 1%" align="right">
                        <td style="width: 30%">
                           
                        </td>
                        <td colspan="2">
                           
                        </td>
                    </tr>
                    <tr style="border:1;width:100%;height:50%" valign="top">
                        <td colspan=100 style="width:100%;height:100%;"> 
                            <ts-grid id="grdMaster" rowClick="OnClickGroup(sender,event)">
                                <columns>	
                                    <column text="PK"				datafield="PK" 			    width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
                                    <column text="Code ID"			datafield="CODE_ID" 		width="100" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
                                    <column text="Code Name"		datafield="CODE_NAME" 		width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
                                    <column text="Description" 		datafield="DESCRIPTION" 	width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                </columns>	
                            </ts-grid>
                        </td>
                    </tr>
                </table>
            </td>
            <td id="t-right" style="width: 70%">
                <table style="height: 100%; width: 100%" border="0">
                    <tr style="height: 1%">
                        <td style="width: 1%" align="left">
                            <img status="expand" id="imgArrow" src="../../../../system/images/button/previous.gif"
                                style="cursor: hand" onclick="OnToggle()" />
                        </td>
                        <td style="width: 1%; white-space:nowrap" align="right">
                           Company
                        </td>
                        <td style="width: 50%">
							<ts-list id="lstCompany" valuemember="PK" displaymember="PARTNER_NAME" styles="width:100%"></ts-list>
                            
                        </td>
                        <td style="width: 100%" align="center">
							<ts-label id="lbCode" styles='width:100%;color:red;font:9pt'></ts-label>
                        </td>
                        <td style="width: 1%">
                        </td>
                        <td style="width: 1%">
                            <ts-button img="search" id="ibtnSearch" alt="search" onclick="OnSearch('DETAIL')" imgtype="0">Search</ts-button>
                        </td>
                        <td style="width: 1%">
                            <ts-button img="new" id="ibtnAdd_M"  alt="Add New" onclick="OnAddNew()" imgtype="0">Add New</ts-button>
                        </td>
                        <td style="width: 1%">
                             <ts-button img="delete" id="ibtnDelete_M" alt="Delete" onclick="OnDelete()" imgtype="0">Delete</ts-button>
                        </td>
                        <td style="width: 1%">
                             <ts-button img="save" id="ibtnSave_M" alt="Save" onclick="OnSave()" imgtype="0">Update</ts-button>
                        </td>
                    </tr>
					<tr style="height: 1%">
                        <td style="width: 1%" align="left">
                         
                        </td>
                        <td style="width: 1%; white-space:nowrap" align="right">
                          Code ID
                        </td>
                        <td style="width: 50%">
							<ts-textbox id="txtCodeID_D" styles="width: 100%"   keyPressed="OnSearch('DETAIL')" />
                        </td>
                         <td style="width: 1%; white-space:nowrap" align="right">
                          Code Name
                        </td>
                        <td colspan=3 style="width: 100%">
                             <ts-textbox id="txtCodeName_D" styles="width: 100%" keyPressed="OnSearch('DETAIL')" />
                        </td>
                        <td align="right" colspan=2 style="width: 1%">
                            <ts-label id="lbRecord" styles='width:100%;color:blue;font:9pt'>record(s)</ts-label>
                        </td>
                    </tr>
                    <tr style="height: 98%">
                        <td colspan="11">
                            <ts-grid id="grdDetail">
                                <columns>	
                                    <column text="PK"			datafield="PK" 			width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
                                    <column text="Master PK"	datafield="MASTER_PK"   width="50" 		columntype="textbox" 		cellsalign="center" 	editable=false hidden="true">		</column>
                                    <column text="Seq"		    datafield="SEQ" 	    width="50" 	    columntype="textbox" 		cellsalign="center"		editable=true >						</column>					
                                    <column text="Code ID"		datafield="CODE_ID" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true >						</column>					
                                    <column text="Code Name"	datafield="CODE_NAME" 	width="150" 	columntype="textbox" 		cellsalign="left" 		editable=true>						</column>
                                    <column text="KNAME" 		datafield="KNAME" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="Code FName" 	datafield="CODE_FNM" 	width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 1" 		datafield="NUM1" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 2" 		datafield="NUM2" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 3" 		datafield="NUM3" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 4" 		datafield="NUM4" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 5" 		datafield="NUM5" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 6" 		datafield="NUM6" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 7" 		datafield="NUM7" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="NUM 8" 		datafield="NUM8" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 1" 		datafield="CHAR1" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 2" 		datafield="CHAR2" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 3" 		datafield="CHAR3" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 4" 		datafield="CHAR4" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 5" 		datafield="CHAR5" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 6" 		datafield="CHAR6" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 7" 		datafield="CHAR7" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="CHA 8" 		datafield="CHAR8" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="Use Y/N" 		datafield="USE_YN" 		width="150" 	columntype="checkbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="Remark" 		datafield="REMARK" 		width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                    <column text="Company" 		datafield="COMPANY" 	width="150" 	columntype="textbox" 		cellsalign="left"		editable=true>						</column>
                                </columns>	
                            </ts-grid>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
<ts-textbox id="txtMaster_PK" style="display: none"></ts-textbox>
<ts-textbox id="txtPK"    style="display: none"></ts-textbox>
<ts-textbox id="txtPartPK" style="display: none"></ts-textbox>
<ts-textbox id="txtCOLORCODE" style="display: none"></ts-textbox>
<!--------------------------------------------------------------------------------------->
</html>
