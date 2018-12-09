<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>HR Code</title>
</head>
    <style type="text/css">
		
    </style>
    <script type="text/javascript">
        var l_row_master;
        var c2_use_yn=23;
function BodyInit()
{
    var data;
    data=<%=TSErpLib.SetListDataSQL("select a.pk,a.PARTNER_NAME from tco_company a where a.del_if = 0 and a.ACTIVE_YN='Y' ")%>;
    grdDetailCode.SetColComboData("COMPANY", data, "PK", "PARTNER_NAME");
    lstCompany.setDataJson(data);   
}

function OnSearch()
{
    
    dso_grd_gshr00100_0.Call("SELECT");
}
function auto_resize_column(obj,col1,col2,font_size)
{
    if(font_size!=0)
        obj.GetGridControl().FontSize =font_size;   
    obj.autoSizeColumns(col1,col2,false,0);
}

function OnDataReceive(obj)
{
    if (obj.id=="dso_grd_gshr00100_0")
    {        
            lblRecord_M.text=grdMasterCode.RowCount + " record(s).";
            auto_resize_column(grdMasterCode,1,4,0);
        
    }
    if (obj.id=="dso_grd_gshr00100_1")
    {
        auto_resize_column(grdDetailCode,0,c2_use_yn,0);
        
    }
    if (obj.id=="dso_lst_gshr00100_0")
    {
        var data1=obj.jsonData.Data.Table;
        //console.log(data1);
        if(data1 !=null)
        {
            grdDetailCode.SetColComboData("CHA5NM", data1, "CODE", "CODE_NM");
        }
        onSearchDetail();
        
    }
    
    
    
}

function ShowDetail(objGrid,event)
{
    l_row_master=event.row;
    txtMaster_PK.text=grdMasterCode.GetGridData(l_row_master,'PK')||''; //get MASTERpk
    grdDetailCode.ClearData();

    if(txtMaster_PK.text!='')
    {        
        txthrcode_id.text=grdMasterCode.GetGridData(l_row_master,'CHA5NM'); //get char_r
        OnSetGrid();

        dso_lst_gshr00100_0.Call("SELECT");
    }
}
function OnSetGrid()
{

    var t;
    lblID.text=grdMasterCode.GetGridData(l_row_master,'ID');
    lblName.text=grdMasterCode.GetGridData(l_row_master,'NAME');

    t=grdMasterCode.GetGridData(l_row_master,'NUM1NN');
    
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM1NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM1NN').header='NUM 1';

    t=grdMasterCode.GetGridData(l_row_master,'NUM2NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM2NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM2NN').header='NUM 2';

    t=grdMasterCode.GetGridData(l_row_master,'NUM3NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM3NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM3NN').header='NUM 3';

    t=grdMasterCode.GetGridData(l_row_master,'NUM4NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM4NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM4NN').header='NUM 4';

    t=grdMasterCode.GetGridData(l_row_master,'NUM5NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM5NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM5NN').header='NUM 5';

    t=grdMasterCode.GetGridData(l_row_master,'NUM6NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM6NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM6NN').header='NUM 6';

    t=grdMasterCode.GetGridData(l_row_master,'NUM7NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM7NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM7NN').header='NUM 7';

   

    t=grdMasterCode.GetGridData(l_row_master,'NUM8NN');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('NUM8NN').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('NUM8NN').header='NUM 8';

    //----char

    t=grdMasterCode.GetGridData(l_row_master,'CHA1NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA1NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA1NM').header='CHAR 1';

    t=grdMasterCode.GetGridData(l_row_master,'CHA2NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA2NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA2NM').header='CHAR 2';

    t=grdMasterCode.GetGridData(l_row_master,'CHA3NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA3NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA3NM').header='CHAR 3';

    t=grdMasterCode.GetGridData(l_row_master,'CHA4NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA4NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA4NM').header='CHAR 4';

    t=grdMasterCode.GetGridData(l_row_master,'CHA5NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA5NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA5NM').header='CHAR 5';

    t=grdMasterCode.GetGridData(l_row_master,'CHA6NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA6NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA6NM').header='CHAR 6';

    t=grdMasterCode.GetGridData(l_row_master,'CHA7NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA7NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA7NM').header='CHAR 7';

    t=grdMasterCode.GetGridData(l_row_master,'CHA8NM');
    if(t!=null)
        grdDetailCode.columnHeaders.columns.getColumn('CHA8NM').header=t;
    else
        grdDetailCode.columnHeaders.columns.getColumn('CHA8NM').header='CHAR 8';
}

function onSearchDetail()
{
    if(txtMaster_PK.text!="")
    {
        dso_grd_gshr00100_1.Call("SELECT");
    }
    else
    {
        alert("Select master pls.")
    }
}

function OnTextBoxKeyPressed(p_type)
{
    if(event.keyCode == 13)
    {
        if(p_type=='MASTER')
            dso_grd_gshr00100_0.Call("SELECT");
        else
            onSearchDetail();
    }
    
}

function OnAddNew(p_obj)
{
    if(p_obj=="MASTER")
    {
        grdMasterCode.AddRow();
        var irow=grdMasterCode.RowCount-1;
        if (irow!=0)
            inum=Number(grdMasterCode.GetGridData(irow-1,'SEQ'))+1;
        else
            inum=1;
        grdMasterCode.SetGridText(irow,'SEQ',inum);
        grdMasterCode.SetGridText(irow,'USE_YN','Y');
        grdMasterCode.SetGridText(irow,'SYS_YN','N');
    }

    if(p_obj=='DETAIL')
    {
        if (txtMaster_PK.text!="")
        {
            grdDetailCode.AddRow();
            
            var irow=grdDetailCode.RowCount-1;
            grdDetailCode.SetGridText(irow,'MASTER_PK',txtMaster_PK.text);
            grdDetailCode.SetGridText(irow,'USE_YN','Y');
            if (irow!=0)
                inum=Number(grdDetailCode.GetGridData(irow-1,'SEQ'))+1;
            else
                inum=1;
            grdDetailCode.SetGridText(irow,'SEQ',inum);
        }
        else
            alert("Please select a code master!");
    }
}

function OnSave(p_obj)
{
    if(p_obj=="MASTER")
    {
        if(grdMasterCode.RowCount>0)
        {
            if(confirm("Do you want to update?"))
                dso_grd_gshr00100_0.Call();
        }
       
    }
    else if(p_obj=="DETAIL")
    {
        if(grdDetailCode.RowCount>0)
        {
            if(confirm("Do you want to update?"))
                dso_grd_gshr00100_1.Call();
        }
       
    }
}

function OnDelete(p_obj)
{
    if(p_obj=="MASTER")
    {
        if(grdMasterCode.RowCount>0)
        {
            if(confirm("Do you want to delete?"))
            {
                grdMasterCode.DeleteRow();
                dso_grd_gshr00100_0.Call();
            }
                
        }
       
    }
    else if(p_obj=="DETAIL")
    {
        if(grdDetailCode.RowCount>0)
        {
            if(confirm("Do you want to delete?"))
            {
                grdDetailCode.DeleteRow();
                dso_grd_gshr00100_1.Call();
            }
                
        }
       
    }
}

    </script>
</head>
<!--  BEGIN DSO  -->
<!------------------data Gird--------------------------->
<ts-data id="dso_grd_gshr00100_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  
                  parameter="PK,SEQ,ID,NAME,USE_YN,REMARK,NUM1NN,NUM2NN,NUM3NN,NUM4NN,NUM5NN,NUM6NN,NUM7NN,NUM8NN,CHA1NM,CHA2NM,CHA3NM,CHA4NM,CHA5NM,CHA6NM,CHA7NM,CHA8NM,SYS_YN,ID_MAP,TABLE_NAME,COLUMN_NAME" 
                  function="ST_HR_SEL_GSHR00100_0" 
                  procedure="ST_HR_UPD_GSHR00100_0">
                <data-inputs bind="grdMasterCode" >                    
                    <data-input bind="txtID"></data-input>
                    <data-input bind="txtName"></data-input>
                </data-inputs>
                <data-outputs>
                    <data-output  bind="grdMasterCode"></data-output>
                </data-outputs>               
            </dso> 
        </xml> 
</ts-data>
<!---------------------------------------------------------->
<ts-data id="dso_grd_gshr00100_1" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="PK,MASTER_PK,SEQ,CODE,CODE_NM,CODE_KNM,CODE_FNM,NUM1NN,NUM2NN,NUM3NN,NUM4NN,NUM5NN,NUM6NN,NUM7NN,NUM8NN,CHA1NM,CHA2NM,CHA3NM,CHA4NM,CHA5NM,CHA6NM,CHA7NM,CHA8NM,USE_YN,REMARK,COMPANY" 
                  function="ST_HR_SEL_GSHR00100_1" 
                  procedure="ST_HR_UPD_GSHR00100_1">
                <data-inputs bind="grdDetailCode">
                    <data-input bind="txtMaster_PK"></data-input>
                    <data-input bind="lstCompany"></data-input>
                    <data-input bind="lstDetail_Temp"></data-input>
                    <data-input bind="txtDetail_Val"></data-input>
                </data-inputs>
                <data-outputs  bind="grdDetailCode"></data-outputs>
            </dso> 
        </xml> 
</ts-data>    
<!---------------------------------------------------------->
<ts-data id="dso_lst_gshr00100_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="array" function="ST_HR_SEL_LST_GSHR00100_0"> 
			<data-inputs>
                <data-input bind="txthrcode_id"></data-input>
			</data-inputs>
			<data-outputs bind="noneed">
			</data-outputs>
        </dso> 
    </xml> 
</ts-data>
<!---------------------------------------------------------->
<body>
    <table width="100%" id="tblMain" cellpadding="0" cellspacing="0" border=1 style="width:100%;height:100%;">
        <tr style="width:100%;height:100%" valign="top">
            <td>
               <table width="100%"  id="tblUpper" style="height:5%; padding-top:5px" border=1 cellpadding="0" cellspacing="0">
                    <tr style="border:0;width:100%;height:100%" valign="top" >
                        
                        <td colspan="5" style="border:0;width:5%" align="right" valign="middle">
                            ID
                        </td>
                        <td colspan="10" style="border:0;width:10%" align="center" valign="middle" >
                            <ts-textbox id="txtID" text="" keyPressed="OnTextBoxKeyPressed('MASTER')"></ts-textbox>
                        </td>
                        <td colspan="10" style="border:0;width:10%" align="right" valign="middle">Name
                        </td>
                        <td colspan="18" style="border:0;width:18%" align="center" valign="middle">
                            <ts-textbox id="txtName" text="" keyPressed="OnTextBoxKeyPressed('MASTER')" ></ts-textbox>	
                        </td>
                        <td colspan="20" width="20%" style="border:0;" align="center" >
                            <ts-label img="new" id="lblRecord_M"  style="font-weight:bold;color:red;font-size:12" >Records</ts-label>
                        </td>
                        
                        <td colspan="8" width="8%" style="border:0;" align="right" >
                         <ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
                        </td>
                        <td colspan="8" width="8%" style="border:0;" align="right" >
                            <ts-button img="new" id="ibtnAdd_M"   alt="Add"  onclick="OnAddNew('MASTER')" imgtype="0">Add New</ts-button>
                        </td>
                         <td colspan="8" width="8%" style="border:0;" align="right" >
                            <ts-button img="save" id="ibtnSave_M"    alt="Save"  onclick="OnSave('MASTER')" imgtype="0">Update</ts-button>
                        </td>
                        <td colspan="8" width="8%" style="border:0;" align="right" >
                            <ts-button img="delete" id="ibtnDelete_M"    alt="Delete"  onclick="OnDelete('MASTER')" imgtype="0">Delete</ts-button>
                        </td>
                        <td  style="border:0;width:2%" align="right" valign="middle">
                               
                        </td>
                    </tr>
                </table>
                <table width="100%" id="tblMaster" style="height:50%" border=1 cellpadding="0" cellspacing="0" >                 
                    
                    <tr style="border:1;width:100%;height:100%" valign="top">
                        <td colspan=100 style="width:100%;height:100%;"> 
                             <ts-grid id="grdMasterCode" rowClick="ShowDetail(sender,event)">
                                 <columns>
                                    <column text="PK"	        datafield="PK" 		    width="100"   columntype="number"     cellsalign="center"     editable=false  hidden="true"></column>
                                    <column text="SEQ"	        datafield="SEQ" 		width="100"   columntype="textbox"    cellsalign=""           editable=true                 ></column>                                                 
                                    <column text="ID"	        datafield="ID" 		    width="150"   columntype="textbox"    cellsalign=""           editable=true                 ></column>                                                 
                                    <column text="NAME"	        datafield="NAME" 		width="200"   columntype="textbox"    cellsalign=""           editable=true                 ></column>                                                 
                                    <column text="USE"	        datafield="USE_YN"      width="90" 	  columntype="checkbox"   cellsalign="center"     editable=true                  ></column>                                                 
                                    <column text="REMARK"       datafield="REMARK"      width="200"   columntype="textbox"    cellsalign="center"     editable=true                  ></column>                                                 
                                     <column text="NUM 1 Name"  datafield="NUM1NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 2 Name"  datafield="NUM2NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 3 Name"  datafield="NUM3NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 4 Name"  datafield="NUM4NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 5 Name"  datafield="NUM5NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 6 Name"  datafield="NUM6NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 7 Name"  datafield="NUM7NN"      width="150"   columntype="textbox" ></column>
                                     <column text="NUM 8 Name"  datafield="NUM8NN"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 1 Name"  datafield="CHA1NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 2 Name"  datafield="CHA2NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 3 Name"  datafield="CHA3NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 4 Name"  datafield="CHA4NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 5 Name"  datafield="CHA5NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 6 Name"  datafield="CHA6NM"      width="150"   columntype="textbox"></column>
                                     <column text="CHA 7 Name"  datafield="CHA7NM"      width="150"   columntype="textbox" ></column>
                                     <column text="CHA 8 Name"  datafield="CHA8NM"      width="150"   columntype="textbox" ></column>
                                     <column text="SYS Y/N"     datafield="SYS_YN"      width="70"    columntype="checkbox"     cellsalign="center"  ></column>
                                     <column text="ID MAP"      datafield="ID_MAP"      width="150"   columntype="textbox" ></column>
                                     <column text="TABLE NAME"  datafield="TABLE_NAME"  width="150"   columntype="textbox" ></column>
                                     <column text="COLUMN NAME" datafield="COLUMN_NAME" width="150"   columntype="textbox" ></column>
                                 </columns>
                             </ts-grid>
                         </td>
                    </tr>
               </table> 
               <table width="100%" id="tblDetail" style="height:45%" border=1 cellpadding="0" cellspacing="0">
                    <tr style="border:0;width:100%;height:5%" valign="center" >
                        <td colspan="15" width="15%" style="border:0;" align="right"  valign="middle">
                             <ts-list id="lstCompany" style="width:100%;display:;" onchange="onChangeCompany()" displaymember="PARTNER_NAME" valuemember="PK" >
                             </ts-list>
                        </td>
                        <td colspan="10" style="border:0;width:10%" align="right" valign="middle">Search by</td>
                         <td colspan="10" style="border:0;width:10%;color:#3399FF" align="left" valign="middle">
                             <ts-list  id="lstDetail_Temp" value="1" maxlen = "100" styles='width:100%' onchange="" >
                                <data>|0|CODE NAME|1|NUM 1|2|NUM 2|3|NUM 3|4|NUM 4|5|NUM 5|6|NUM 6|7|NUM 7|8|NUM 8|9|CHAR 1|10|CHAR 2|11|CHAR 3|12|CHAR 4|13|CHAR 5|14|CHAR 6|15|CHAR 7|16|CHAR 8
                                </data>
                            </ts-list>
                        </td>
                        <td colspan="14" style="border:0;width:14%" align="right" valign="middle">
                            <ts-textbox id="txtDetail_Val" text="" styles='width:90%' keyPressed="OnTextBoxKeyPressed('DETAIL')"></ts-textbox>
                        </td>
                        <td colspan="10" style="border:0;width:10%" align="left" valign="right">
                           <ts-label img="new" style="color:red;font-weight:bold"  id="lblID" ></ts-label>
                        </td>
                        
                        <td colspan="10"  style="border:0;width:10%" align="left" valign="middle">
                           <ts-label img="new" style="color:red;font-weight:bold" id="lblName" ></ts-label>
                        </td>
                        
                        
                        <td colspan="5" width="5%" style="border:0;" align="right" >
                         <ts-button img="new" id="ibtnAdd_D"   alt="Add"  onclick="OnAddNew('DETAIL')" imgtype="0">Add New</ts-button>
                        </td>
                         <td colspan="8" width="8%" style="border:0;" align="right" >
                         <ts-button img="save" id="ibtnSave_D"    alt="Save"  onclick="OnSave('DETAIL')" imgtype="0">Update</ts-button>
                        </td>
                        <td colspan="8" width="8%" style="border:0;" align="right" >
                         <ts-button img="delete" id="ibtnDelete_D"    alt="Delete"  onclick="OnDelete('DETAIL')" imgtype="0">Delete</ts-button>
                        </td>
                    </tr>
                    
                    <tr style="border:1;width:100%;height:95%" valign="top">
                        <td colspan=100 style="width:100%;height:100%;"> 
                            <ts-grid id="grdDetailCode" rowClick="CheckButton(this)">
                                 <columns>
                                     <column text="PK"         datafield="PK"         columntype="textbox" width="100" hidden="true"></column>
                                     <column text="Master PK"  datafield="MASTER_PK"  columntype="textbox" width="100" hidden="true"></column>
                                     <column text="SEQ"        datafield="SEQ"        columntype="textbox" width="150"></column>
                                     <column text="CODE"       datafield="CODE"       columntype="textbox" width="150"></column>
                                     <column text="CODE_NM"    datafield="CODE_NM"    columntype="textbox" width="200"></column>
                                     <column text="CODE_KNM"   datafield="CODE_KNM"   columntype="textbox" width="200"></column>
                                     <column text="CODE_FNM"   datafield="CODE_FNM"   columntype="textbox" width="200"></column>
                                     <column text="NUM 1 Name" datafield="NUM1NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 2 Name" datafield="NUM2NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 3 Name" datafield="NUM3NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 4 Name" datafield="NUM4NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 5 Name" datafield="NUM5NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 6 Name" datafield="NUM6NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 7 Name" datafield="NUM7NN"     columntype="textbox" width="150"></column>
                                     <column text="NUM 8 Name" datafield="NUM8NN"     columntype="textbox" width="150"></column>
                                     <column text="CHA 1 Name" datafield="CHA1NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 2 Name" datafield="CHA2NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 3 Name" datafield="CHA3NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 4 Name" datafield="CHA4NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 5 Name" datafield="CHA5NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 6 Name" datafield="CHA6NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 7 Name" datafield="CHA7NM"     columntype="textbox" width="150"></column>
                                     <column text="CHA 8 Name" datafield="CHA8NM"     columntype="textbox" width="150"></column>
                                     <column text="USE"        datafield="USE_YN"     columntype="checkbox" width="70" cellsalign="center"></column>
                                     <column text="REMARK"     datafield="REMARK"     columntype="textbox" width="150"></column>
                                     <column text="COMPANY"    datafield="COMPANY"    columntype="textbox" width="150"></column>
                                 </columns>
                             </ts-grid>
                        </td>
                    </tr>
               </table> 
            </td>
        </tr>
    </table>
    <ts-textbox id="txtMaster_PK" style="display:none"></ts-textbox>
    <ts-textbox id="txthrcode_id" style="display:none"></ts-textbox>
    <ts-list id="txt_list_char_5" style="display:none"></ts-list>    
</body>
</html>
