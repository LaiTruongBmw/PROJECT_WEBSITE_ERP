<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Calendar Popup</title>
    <style type="text/css">
		
    </style>

    <script type="text/javascript">

        var flag_update=0;
function BodyInit()
{
    
 
    txtCompany_PK.text = "<%=Request.Params["v_company_pk"]%>";
    dtYear.value="<%=Request.Params["YEAR"]%>";
    txtMonth.text="<%=Request.Params["MONTH"]%>";
    lblMaxDate.text="Calendar data maximum is "+"<%=Request.Params["v_max_dt"]%>";

    var data=  <%=TSErpLib.SetListDataSQL("SELECT A.CODE, A.CODE_NM   FROM TCO_ABCODE A,TCO_ABCODEGRP B WHERE B.ID = 'COAB0140'   AND A.TCO_ABCODEGRP_PK = B.PK AND A.DEL_IF = 0 AND B.DEL_IF = 0 union all select '' CODE,'' CODE_NM from dual")%>;
    grdCalendar.SetColComboData("HOL_TYPE", data, "CODE", "CODE_NM");

    var data=  <%=TSErpLib.SetListDataSQL("SELECT A.CODE, A.CODE_NM   FROM TCO_ABCODE A,TCO_ABCODEGRP B WHERE B.ID = 'COAB0140'   AND A.TCO_ABCODEGRP_PK = B.PK AND A.DEL_IF = 0 AND B.DEL_IF = 0")%>;
    lstHolidayType.setDataJson(data); 

    var filter = new wijmo.grid.filter.FlexGridFilter(grdCalendar);

    dtYear.valueChanged.addHandler(OnSearch);

    dso_grd_hrti00201_0.Call("SELECT");
    
}

function OnSearch()
{
    dso_grd_hrti00201_0.Call("SELECT");
}
function auto_resize_column(obj,col1,col2,font_size)
{
    if(font_size!=0)
        obj.GetGridControl().FontSize =font_size;   
    obj.autoSizeColumns(col1,col2,false,0);
}

function OnDataReceive(obj)
{
    if (obj.id=="dso_grd_hrti00201_0")
    {
       
        lblRecord_M.text=grdCalendar.RowCountDataSource + " record(s).";
        
    }
    
}




function OnTextBoxKeyPressed()
{
    if(event.keyCode == 13)
    {
        dso_grd_hrti00201_0.Call("SELECT");
    }
    
}



function OnSave()
{
    if(grdCalendar.RowCount>0)
    {
        if(confirm("Do you want to update?"))
        {
            flag_update=1;
            dso_grd_hrti00201_0.Call();
        }
            
    }
}

function onReturn()
{
    var arr_data = new Array();
    arr_data[0]=flag_update;
    System.setDataParam(arr_data);
    System.ClosePopup(window);
}

    </script>
</head>
<!--  BEGIN DSO  -->
<!------------------data control--------------------------->


<ts-data id="dso_grd_hrti00201_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="PK,CAR_DATE,DAY_TYPE,HOL_TYPE,HOL_COMMENT" function="st_hr_sel_grd_hrti00201_0" procedure="st_hr_upd_grd_hrti00201_0">
                <data-inputs bind="grdCalendar" >
                    <data-input bind="lstHolidayType" ></data-input>
                    <data-input bind="dtYear" ></data-input>
                    <data-input bind="txtMonth" ></data-input>
                    <data-input bind="txtCompany_PK"> </data-input>
                </data-inputs>
                <data-outputs  bind="grdCalendar"></data-outputs>
            </dso> 
        </xml> 
</ts-data>

<body>

    <table id="tblMain" cellpadding="0" cellspacing="0" border=0 style="width:100%;height:100%;">
                <tr style="border:0;width:100%;height:5%" valign="top" >                        
                        <td colspan="10" width=10% align=right><font color=black>Year</font></td>
		                <td colspan="20" width=20%><ts-datebox id="dtYear" type=2  ></ts-datebox></td>
                        <td colspan="10" width=10% align=right><font color=black>Month</font></td>
                        <td colspan="10" style="border:0;width:10%" align="left" valign="middle" >
                            <ts-textbox id="txtMonth" text="" keyPressed="OnTextBoxKeyPressed()"></ts-textbox>
                        </td>
                        <td colspan="20" style="border:0;width:20%" align="right" valign="middle">Holiday Type</td>
                        <td colspan="15" style="border:0;width:15%;color:#3399FF" align="left" valign="middle">
                             <ts-list id="lstHolidayType" style="width:100%" onchange="OnSearch()" displaymember="CODE_NM" valuemember="CODE" emptytext=" " emptyvalue="" emptytextpoint="first" >
                             </ts-list>
                         </td>
                        <td colspan="15" width="15%" style="border:0;" align="right" >
                            <ts-button img="close" id="btnReturn"    alt="Return main form"  onclick="onReturn()" imgtype="0">Return</ts-button>
                        </td>
                    </tr>
                <tr style="border:0;width:100%;height:5%" valign="top" >
                        <td colspan="10" width="10%" style="border:0;" align="left" >
                            <ts-label img="new" id="lblRecord_M"  style="font-weight:bold;color:red;font-size:11" >Records</ts-label>
                        </td>
                        <td colspan="25" width="25%" style="border:0;" align="left" >
                            &nbsp;
                        </td>
                        <td colspan="10" width="10%" style="border:0;" align="right" >
                         <ts-button img="search" id="btnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
                        </td>
                        
                         <td colspan="10" width="10%" style="border:0;" align="right" >
                            <ts-button img="save" id="btnSave"    alt="Save"  onclick="OnSave()" imgtype="0">Update</ts-button>
                        </td>
                        
                       <td colspan="40" width="40%" style="border:0;" align="center" >
                            <ts-label img="new" id="lblMaxDate"  style="font-weight:bold;color:red;font-size:8;text-align:center" >&nbsp;</ts-label>
                        </td>
                       <td colspan="5" width="5%" style="border:0;" align="left" >
                            &nbsp;
                        </td>
                    </tr> 
                <tr style="border:1;width:100%;height:90%">
                        <td colspan=100> 
                             <ts-grid id="grdCalendar" localVirtualScrolling="true">
                                 <columns>
                                     <column text="PK" datafield="PK" hidden="true" columntype="number" width="100"></column>
                                     <column text="Calendar Date" datafield="CAR_DATE" columntype="date" width="140"></column>
                                     <column text="Day Type" datafield="DAY_TYPE" columntype="textbox" width="150"></column>
                                     <column text="Holiday Type" datafield="HOL_TYPE" columntype="textbox" width="150"></column>
                                     <column text="Description" datafield="HOL_COMMENT" columntype="textbox" width="400"></column>
                                 </columns>
                             </ts-grid>
                         </td>
                    </tr>
    </table>

   
   
    
</body>
     <ts-textbox id="txtCompany_PK" style="display:none"></ts-textbox>
</html>
