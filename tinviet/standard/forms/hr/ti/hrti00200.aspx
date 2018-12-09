<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Calendar</title>
    <style type="text/css">
		
    </style>

    <script type="text/javascript">
        var calendar;
        var arr_events= [];
        var tooltip;
        
function BodyInit()
{
   
    var data;
    data=  <%=TSErpLib.SetListDataSQL("select a.pk,a.PARTNER_NAME from tco_company a where a.del_if = 0 and a.ACTIVE_YN='Y' ")%>;
    lstCompany.setDataJson(data); 

    //create calendar
    var theDate = new Date();
    tooltip = new wijmo.Tooltip(),
     calendar = new wijmo.input.Calendar('#theCalendar', {
        min: new Date(2014, 8, 1),
        firstDayOfWeek:1,
        value: theDate,
        formatItem : fnFormat,
        displayMonthChanged:onCalendarChange
    });
    calendar.formatItem.addHandler(function (s, e) {
        e.item.addEventListener('dblclick', onDoubleClick, false);
    });

    
    var tmp=calendar.value;

    txtMonth.text=tmp.getFullYear()+""+(tmp.getMonth() + 1).pad(2);
    dso_pro_lst_hrti00200_0.Call();
    
}



function fnFormat(s, e){
    //console.log(e.data);
    //console.log(s);
    // console.log(e);
    var weekday = e.data.getDay();
    wijmo.toggleClass(e.item, 'cus-cell',weekday=weekday);
    wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 );
    var event = getEvent(e.data);
    var l_format,l_color;
   
    if(event){
        if(event.HOL_TYPE=='HOL')
            l_color='orange';
        else if(event.HOL_TYPE=='SUN')
            l_color='red';
        else
            l_color='black';
    }
    

    l_format='<div style="font-size:30px!important;color:'+l_color+';height:0px !important">{date}</div>';

    var html = wijmo.format(l_format, {date: e.data.getDate()});
    
   
    var cmt;

    if(event){
        if(event.HOL_COMMENT!=null)
            cmt=event.HOL_COMMENT.length>7 ? event.HOL_COMMENT.substr(0,7)+"...":event.HOL_COMMENT;
        else
            cmt=' ';
    }
    else
        cmt=' ';

    html += event
        ? '<br><div style="font-size:10px;height:0px !important">' +cmt +'</div>'
            : '';
    e.item.innerHTML = html;

    // add tooltip to cell
    var tip = wijmo.format('<div>' +
            '<div>{date:d MMM, yyyy}</div>' +
            '<div class="event">{eventMessage}</div>' +
        '</div>', {
            date: e.data,
            eventMessage: event ? event.HOL_COMMENT : ' ',
            eventType: event ? 'none' : 'none'
        });
    tooltip.setTooltip(e.item, tip)

}

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}


function getEvent(date){
    //console.log(date);

    var yyyymmdd=date.getFullYear() +""+(date.getMonth() + 1).pad(2)+""+date.getDate().pad(2);
    

    for (var i = 0; i < arr_events.length; i++) {

       // console.log(i +":"+arr_events[i].CAR_DATE);

        if (arr_events[i].CAR_DATE==yyyymmdd) {
            return arr_events[i];
        }
    }
    return null;
}

function onCalendarChange()
{
    var tmp=calendar.displayMonth;
    
    txtMonth.text=tmp.getFullYear()+""+(tmp.getMonth() + 1).pad(2);
    //alert(txtMonth.text);
    dso_lst_grd_hrti00200_0.Call("SELECT");
           
}


function onChangeCompany()
{
    dso_pro_lst_hrti00200_0.Call();
}

function OnDataReceive(obj)
{
    if (obj.id=="dso_pro_lst_hrti00200_0")
    {
        lblMaxDate.text=txttmp.text;
        dso_lst_grd_hrti00200_0.Call("SELECT");                
        
    }

    if (obj.id=="dso_lst_grd_hrti00200_0")
    {
        
        var data1=obj.jsonData.Data.Table;

        arr_events=data1;
        calendar.refresh();
        //console.log(data1);
    }
    if (obj.id=="dso_pro_lst_hrti00200_1")
    {
        alert('Increase calendar finish!');
        dso_pro_lst_hrti00200_0.Call();
    }
    
}

var l_check=0;
function OnPopUpCalendar()
{	 
    
    v_month = Number((txtMonth.text).substr(4,2));
    v_year = Number((txtMonth.text).substr(0,4));
    //alert(v_month + "  " + v_year);
    var url = 'standard/forms/hr/ti/hrti00201.aspx?MONTH=' + v_month + '&YEAR=' + v_year+'&v_company_pk='+lstCompany.value+'&v_max_dt='+lblMaxDate.text;
    var obj;
    //(url, width, height, wtile, caller, fnclosecallback, opt)
  
    obj = System.OpenModal(  url , 900, 800, 'Calendar Popup', document,onClosePopup);
}

function onClosePopup()
{

    var param = System.getDataParam();
    //alert(param);
    if(param==1)
        dso_pro_lst_hrti00200_0.Call();
}

function OnCreateData()
{
    if(confirm("Do you want to create more calendar data"))
        dso_pro_lst_hrti00200_1.Call();
}
   
   
function onDoubleClick(e)
{
    /// console.log(e);
    /// console.log(i);
    //alert(calendar.value);
    var tmp=calendar.value;
    var yyyymmdd=tmp.getFullYear() +""+(tmp.getMonth() + 1).pad(2)+""+tmp.getDate().pad(2);

    var url = 'standard/forms/hr/ti/hrti00202.aspx?date=' + yyyymmdd+'&v_company_pk='+lstCompany.value;
    var obj;
    //(url, width, height, wtile, caller, fnclosecallback, opt)
  
    obj = System.OpenModal(  url , 600, 300, 'Detail Date Info', document,onCloseDetailPopup);
}
    
function onCloseDetailPopup()
{
    var param = System.getDataParam();
    //alert(param);
    if(param==1)
        dso_pro_lst_hrti00200_0.Call();
}

</script>

<style>
.wj-calendar .cus-cell
{
  height:55px;
  font-size:30px;
}
.wj-calendar .date-weekend:not(.wj-state-selected) {
  color: red;
  height:55px;
  font-size:30px;
}
.container .wj-header{
  color:green;
}
.container .wj-header td{
  font-size:30px;
}
  .container table {
    border-collapse: collapse;
}
.container table tr td {
    border: 1px solid black !important;
}
.container .wj-month-select{
     font-size:25px !important;
}
    .container .wj-calendar-year {
         font-size:25px !important;
    }
</style>

</head>
<!--  BEGIN DSO  -->

<ts-data id="dso_lst_grd_hrti00200_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="array" function="st_hr_sel_lst_hrti00200_0" > 
			<data-inputs>
                <data-input bind="txtMonth" ></data-input>
                <data-input bind="lstCompany" ></data-input>
			</data-inputs>
			<data-outputs bind="noneed">
			</data-outputs>
        </dso> 
    </xml> 
</ts-data>

    
<ts-data id="dso_pro_lst_hrti00200_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="process" procedure="st_hr_pro_lst_hrti00200_0" > 
			<data-inputs>
                <data-input bind="lstCompany" ></data-input>
			</data-inputs>
            <data-outputs>
			    <data-output bind="txttmp"></data-output>
			</data-output>
        </dso> 
    </xml> 
</ts-data>

<ts-data id="dso_pro_lst_hrti00200_1" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="process" procedure="st_hr_pro_lst_hrti00200_1" > 
			<data-inputs>
                <data-input bind="lstCompany" ></data-input>
			</data-inputs>
            <data-outputs>
			    <data-output bind="txtResult"></data-output>
			</data-output>
        </dso> 
    </xml> 
</ts-data>

<body>

    <table width="100%" id="tblMain" cellpadding="0" cellspacing="0" border=1 style="width:100%;height:100%;">
        <tr style="width:100%;height:100%" valign="top">
            <td>
               <table width="100%"  id="tblUpper" style="height:5%" border=0 cellpadding="0" cellspacing="0">
                    <tr style="border:0;width:100%;height:100%" valign="top" >
                        <td colspan="10" width="10%" style="border:0;" align="right" >Company</td>
                        <td colspan="15" width="15%" style="border:0;" align="right"  valign="middle">
                             <ts-list id="lstCompany" style="width:100%" onchange="onChangeCompany()" displaymember="PARTNER_NAME" valuemember="PK"></ts-list>
                        </td>
                        <td colspan="10" width=10% align=right>&nbsp;</td>
		                <td colspan="10" width=10%>&nbsp;</td>
                        <td colspan="5" width="5%" style="border:0;" align="right" >&nbsp;</td>
                        
                        <td colspan="15" width="15%" align=right><b>Calendar Maximum</b></td>
		                <td colspan="10" width="10%" style="border:0;" align="left" >
                            <ts-label img="new" id="lblMaxDate"  style="font-weight:bold;color:red;font-size:12" >&nbsp;</ts-label>
                        </td>
                        <td colspan="15" width="15%" style="border:0;" align="right" >
                            <ts-button img="process" id="btnCreateCal"    alt="Increase 50 Years more"  onclick="OnCreateData()" imgtype="0">Create Data</ts-button>
                        </td>
		                <td colspan="10" width="10%" ><ts-button img="confirm" id="btnAdjust"    alt="View and Adjust Calendar"  onclick="OnPopUpCalendar()" imgtype="0">Input Calendar</ts-button></td>
                    </tr>
                </table>
                <table width="100%" id="tblMaster" style="height:95%" border=1 cellpadding="0" cellspacing="0" >                 
                    <tr style="border:1;width:100%;height:100%" valign="top">
                        <td class="container" colspan=100 style="width:100%;height:100%;"> 
                             <div id="theCalendar"></div>
                         </td>
                    </tr>
               </table> 
               
            </td>
        </tr>
    </table>
    <ts-textbox id="txttmp" style="display:none"></ts-textbox>
    <ts-textbox id="txtResult" style="display:none"></ts-textbox>
    <ts-textbox id="txtMonth" style="display:none"></ts-textbox>
    
</body>
</html>
