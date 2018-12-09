<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Work Group</title>
    <style type="text/css">

    </style>
</head>
<script>
var startTime,interval_time;
var value_before=0;
var flag=0;
var col=0;
var row=0;
var _days=0;
var tmp1,tmp2;
var flag_open=0;
var col_f=1;//col ngay dau tien
var col_e=31; //col ngay cuoi cung
var tab_no=0;
var check_init = 0;
/*
function BodyInit()
{   
   
    //if (v_language!="ENG")
    System.Translate_V2(document, System.Menu.GetMenuPS());
           
          
      
	lstHol.value="";
	txt_WG_temp1.SetDataText(data);
	txt_WG_temp1.value ="ALL";
	lstWG_S.SetDataText(data);
	lstWG_S.value ="ALL";
	lstWG2.SetDataText(data);
	lstWG2.value ="ALL";
	lstWS_S.SetDataText(data);
	lstWS_S.value= "ALL";
	
    lstReport1.SetDataText(data);
	//detail.style.display="none";
	
	//var now = new Date(); 
	//var ldate;
	//ldate=dtFromDate.value ; 
	//ldate = ldate.substr(0,4) + ldate.substr(4,2) + '01' ;
	//FromDT.value=ldate ;
	//dtFromDate.value=ldate ;
	
	if((Trim(iduser_pk.text)!="")&&(txtHr_level.text=="1")) //QUYEN BI GIOI HAN 
        datUser_info.Call(); 
    else
    {    
        txtCompanyPK.text=lstCompany.value;
	    //txtOrgPK.text=lstOrg.value;
        //datWorkGroup_info.Call();
		check_init = 1;
    }
  
    
}

function OnSearch(n)
{   
    if(check_init==1)
    {
        if(n==1)
        {
	       
            datWorkSchedule.Call("SELECT");
        }
        else    
            datWorkSchedule2.Call("SELECT");
     }       
}
function OnDelete()
{
    if(check_init==1)
    {
	    if (confirm((v_language =="ENG")?"Do you want to delete?":"Bạn muốn xóa dữ liệu?"))
            grdWork.DeleteRow();
			datWorkSchedule.Call();
    }
}


function OnSave(n)
{
    if(check_init==1)
    {
        if(n==1)
        {
	        if (confirm((v_language =="ENG")?"Do you want to save?":"Bạn muốn lưu dữ liệu?"))
	        {
		        
		        datWorkSchedule.Call();
	        }	
	    }
	    else
	    {
	        if (confirm((v_language =="ENG")?"Do you want to save?":"Bạn muốn lưu dữ liệu?"))
	            datWorkSchedule2.Call();
	    }   
	} 
	
}

function OnShowPopup(n)
{
         var strcom;
         var fpath = System.RootURL + "/standard/forms/hr/co/hrco00100.aspx?";
        //var obj  = System.OpenModal(  fpath , 300 , 200 , 'resizable:yes;status:yes');
        var obj=window.showModalDialog(fpath,this,'titleb:0;resizable:no;status:no;dialogWidth:20;dialogHeight:20;dialogLeft:10;dialogTop:330;edge:sunken;scroll:yes;unadorned:yes;help:no');
         if (obj!=null)
        {       if(n==1)
             lstOrg.value=obj;
             else
             lstOrg2.value=obj;
             
             ChangeOrganization(n)
        }
}


function OnDataReceive(obj) {
    if (obj.id == "datUser_info") {

        lstOrg.SetDataText(txt_temp.text);
        lstOrg2.SetDataText(txt_temp.text);
        txtCompanyPK.text = lstCompany.value;
        //datWorkGroup_info.Call();
    }
    
    if (obj.id == "datGet_period_kind") {
        idLst_period2.SetDataText(txt_temp2.text + "|M|Month");
        datGet_Period.Call();
    }
    
    if (obj.id == "datWorkSchedule") {
        
        idRecord.text = grdWork.rows - 1;
		datWorkSchedule_detail.Call("SELECT");
    }
    else if (obj.id == "WorkSchedule") {
       
        if (txtResult.text == '0') {
            alert((v_language =="ENG")?"Successful":"Thành công");
            OnSearch(1);
            //datWorkSchedule.Call("SELECT")
        }
        else
            alert((v_language =="ENG")?"Error during process":"Có lỗi xảy ra");


    }
    else if (obj.id == "datWorkSchedule2") {
        idRecord2.text = grdWork2.rows - 1 ;
        auto_resize_column(grdWork2, 0, grdWork2.cols - 1, 0);
        fill_sunday();
    }
    else if (obj.id == "datSunday") {
        fill_sunday();
        check_init = 1;
    }
    if (obj.id == "datGet_Period") {
        //alert(idMon_fr2.value);
        var n;
        _days = daysInMonth(idMon_fr2.value.substring(4, 6), idMon_fr2.value.substring(0, 4));
        tmp1 = Number(idMon_fr2.value.substring(6, 8));
        tmp2 = Number(idMon_to2.value.substring(6, 8));
        //alert(tmp2)
        if (tmp2 < _days)//chu ky giua thang
        {
            for (var i = tmp1; i <= 31 + tmp2; i++) {
                if (i > 31)
                    n = i - 31
                else
                    n = i
                grdWork2.SetGridText(0, i - tmp1 + col_f, n);
            }
            for (var i = 1; i <= 31 - _days; i++)
                grdWork2.GetGridControl().ColHidden(i + _days - tmp1 + col_f) = true;
        }
        else {
            for (var i = 1; i <= 31; i++)
                grdWork2.SetGridText(0, i + col_f - 1, i);

            for (var i = 1; i <= 31 - _days; i++)
                grdWork2.GetGridControl().ColHidden(i + _days + col_f - 1) = true;
        }

        if (idClose_flag2.text == "Y") {
            idRecord.text = (v_language =="ENG")?"This month is close":"Dữ liệu tháng này đã đóng";
            ibtnSave2.SetEnable(0);
        }
        else {
            idRecord.text = "";
            ibtnSave2.SetEnable(1);
        }
        datSunday.Call("SELECT");
    }

}
function fill_sunday()
{
    var tmp;
      
       grdWork2.SetCellBgColor(0, 0,0, grdWork2.cols-1, 0x000000);
      for(var i=1;i<grdWork3.rows;i++)
      {
        
        if(Number(grdWork3.GetGridData(i,0))<Number(idMon_fr2.value.substring(6,8)))
            tmp=31-Number(idMon_fr2.value.substring(6,8))+Number(grdWork3.GetGridData(i,0))+col_f;
        else
            tmp=Number(grdWork3.GetGridData(i,0))-Number(idMon_fr2.value.substring(6,8))+col_f;
            
        //alert(tmp);
        grdWork2.SetCellBgColor(0, tmp,grdWork2.rows-1, tmp, 0x3366FF );  
      }  
} 
function auto_resize_column(obj,col1,col2,font_size)
{
  if(font_size!=0)
        obj.GetGridControl().FontSize =font_size;   
  obj.GetGridControl().AutoSize(col1,col2,false,0);  
}      


function show_detail()
{
	txtMaster_pk.text=grdWork.GetGridData(event.row,4);
	if(imgMaster.status == "expand")
	    datWorkSchedule_detail.Call("SELECT")
}
*/
/*
function OnToggle()
{
        if(imgMaster.status == "expand")
        {
            detail.style.display="none";
            imgMaster.status = "collapse";
			//tbl.style.width="100%";
            imgMaster.src = "../../../../system/images/iconmaximize.gif";
			imgMaster.alt="Show detail"
          /*  tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblDetail.style.height="95%";
            
        }
        else
        {
            detail.style.display="";
            imgMaster.status = "expand";
            imgMaster.src = "../../../../system/images/close_popup.gif";
			imgMaster.alt="Close detail"
			datWorkSchedule_detail.Call("SELECT")
          /*  tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblDetail.style.height="45%";
            tblMaster.style.height="50%";
            
        }
  
}
*/
/*
function onView(n) {
    if (n == 1) {
        var fpath = System.RootURL + "/standard/forms/hr/ti/hrti00302.aspx";
        var obj = System.OpenModal(fpath, 450, 700, 'resizable:yes;status:yes');
    }
    else {
        if (row > 0 && col > 0 && grdWork2.GetGridData(row, col) != "") {
            var tmp, dt;
            tmp = Number(idMon_fr2.value.substring(6, 8)) + col - col_f;
            if (tmp > 31) {
                tmp = tmp - 31;
                if (tmp < 10)
                    dt = idMon_to2.value.substring(0, 6) + "" + "0" + tmp;
                else
                    dt = idMon_to2.value.substring(0, 6) + "" + tmp;
            }
            else {
                if (tmp < 10)
                    dt = idMon_fr2.value.substring(0, 6) + "" + "0" + tmp;
                else
                    dt = idMon_fr2.value.substring(0, 6) + "" + tmp;
            }
            //alert(idMon_to2.value + "  " + idMon_fr2.value + " " + (Number(idMon_fr2.value.substring(6, 8)) + col - col_f));
            var fpath = System.RootURL + "/standard/forms/hr/ti/hrti00303.aspx?group_pk=" + grdWork2.GetGridData(row, 32) + "&dt=" + dt;
            var obj = window.showModalDialog(fpath, this, 'titleb:0;resizable:yes;status:no;dialogWidth:50;dialogHeight:30;dialogLeft:50;dialogTop:100;edge:sunken;scroll:yes;unadorned:yes;help:no');
        }
    }
}

function OnReport(n)
{
    if (n == 1)
        var url = System.RootURL + '/standard/reports/hr/ti/rpt_hrti00300_0.aspx?p_WG=' + lstWG.value + '&p_from=' + FromDT.value + '&p_to=' + ToDT.value;
    else
        var url = System.RootURL + '/standard/reports/hr/ti/rpt_hrti00300_1.aspx?p_WG=' + lstWG2.value + '&p_month=' + idWorkMon2.value;
    window.open(url);
}
function OnShowWorkShift()
{
    
    var fpath = System.RootURL + "/standard/forms/hr/co/hrco00200.aspx?shift=" + 0;
        var obj=window.showModalDialog(fpath,this,'titleb:0;resizable:yes;status:no;dialogWidth:40;dialogHeight:15;dialogLeft:200;dialogTop:260;edge:sunken;scroll:yes;unadorned:yes;help:no');
       
}
function onSetGrid()
{
    var ctrl = grdWork.GetGridControl();
	for ( var i =  0 ; i < ctrl.SelectedRows ; i++ )
		{
			var row = ctrl.SelectedRow(i);
			if ( row > 0 )
			{		
				grdWork.SetGridText(row,5,lstHol.GetData());
			}		
		}
}
function OnChangeDate(Option, dtfrom, dtto)
{
	if(Option.value == "1") //daily
	{
		dtto.value = dtfrom.value;
	}
	else if(Option.value == "2") //weekly
	{
		dtto.SetDataText(System.AddDate(dtfrom.GetData(),7));
	}
	else if(Option.value == "3") //monthly
	{
		var ldate = dtfrom.value ; 
		lfromdate = ldate.substr(0,4) + ldate.substr(4,2) + '01' ;
		ltodate = ldate.substr(0,4) + ldate.substr(4,2) ;
		ltodate = ltodate + getDaysInMonth(ltodate) ;
		dtfrom.value = lfromdate ;
		dtto.value = ltodate;
	}
} 
function getDaysInMonth(yyyymm) //xac dinh thang do co bao nhieu ngay
{
   // returns the last day of a given month
    var m,y,tmpDate,checkMonth,lastDay
	
	m = Number(yyyymm.substr(4,2))-1;
		if(m==-1)
			m=Number(yyyymm.substr(5,1))-1;

	y = Number(yyyymm.substr(0,4));
	tmpDate = new Date(y, m, 28);
	checkMonth = tmpDate.getMonth();
	lastDay = 27;

    while(lastDay <= 31){
        temp = tmpDate.setDate(lastDay + 1);
        if(checkMonth != tmpDate.getMonth())
            break;
        lastDay++
    }
    return lastDay;
}
function onHide_column()
{
    //xac dinh thang co bao nhieu ngay 
     grdWork2.ClearData();   
        for(var i=1;i<=31;i++)
            grdWork2.GetGridControl().ColHidden(i)=0
            
        var n=getDaysInMonth(idWorkMon2.value);
        for(var i=n+1;i<=31;i++)
            grdWork2.GetGridControl().ColHidden(i)=1
	
    datSunday.Call("SELECT");    
	OnChangeMon2();		 
}
function onPageActive()
{
    if(tabMain.GetCurrentPageNo()==1)
    {
        if(flag_open==0)
        {
            flag_open=1;
            idMon_fr2.SetEnable(0);
            idMon_to2.SetEnable(0);
            OnChangeMon2();
            datGet_period_kind.Call();
         }   
    }
   
}
function on_check()
{
    var r=event.row;
    var c=event.col;
    if(c>0 && isNaN(grdWork2.GetGridData(event.row,event.col)))
    {
        alert((v_language =="ENG")?"Incorrect number of shift":"Nhập số thự tự ca làm việc");
        //alert(value_before);
        grdWork2.SetGridText(r,c,value_before);
    }    
}
function on_save_before()
{
    value_before=grdWork2.GetGridData(event.row,event.col);
    //alert(value_before);
}
function on_click()
{
    col=event.col;
    row=event.row;
}
function OnChangeMon2()
{
	for(var i=col_f;i<=col_e;i++)
		    grdWork2.GetGridControl().ColHidden(i)=false;
	datGet_Period.Call();
	
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


function ChangeOrganization(n)
{   if(n==1)
    {txtCompanyPK.text=lstCompany.value;
    tab_no=1;
    }
    if(n==2)
    {
   txtCompanyPK.text=lstCompany2.value;
    tab_no=2;
    }
    //datWorkGroup_info.Call();
}
function OnProcess()
{
	
	var fpath = System.RootURL + "/standard/forms/hr/ti/hrti00301.aspx?tco_company_pk=" + lstCompany.value +"&wg_pk=" + lstWG_S.value + "&ws_pk=" + lstWS_S.value +"&dt_from=" + dtFromDate.text + "&dt_to=" + dtToDate.text;
    var obj=window.showModalDialog(fpath,this,'titleb:0;resizable:no;status:no;dialogWidth:35;dialogHeight:25;edge:sunken;scroll:yes;unadorned:yes;help:no');
	  
}
*/
</script>

<body bgcolor='#FFFFFF' style="overflow-y: hidden;">
<!--
    <ts-data id="datWorkGroup_info" onreceive="OnDataReceive(this)"> 
        <xml>
            <dso  type="list" procedure="ST_hr_sel_CO_wg_role_com"  > 
                <data-inputs>
                    <data-input bind="txtCompanyPK" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txt_WG_temp" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<ts-data id="datWorkShift_info" onreceive="OnDataReceive(this)"> 
        <xml>
            <dso  type="list" procedure="ST_HR_sel_CO_ws_role_com"  > 
                <data-inputs>
                    <data-input bind="txtCompanyPK" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txt_WS_temp" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<ts-data id="datUser_info" onreceive="OnDataReceive(this)"> 
        <xml>
            <dso  type="list" procedure="ST_HR_SEL_CO_USER_ROLE2"  > 
                <data-inputs>
                    <data-input bind="iduser_pk" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txt_temp" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>

<ts-data id="datWorkSchedule" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="1,2,3,4,5" function="ST_HR_SEL_HRTI00300_0" procedure="ST_HR_UPD_HRTI00300_0"> 
                <data-inputs bind="grdWork" >
                    <data-input bind="lstCompany" />
                    <data-input bind="lstWG_S" />
					<data-input bind="lstWS_S" />
                    <data-input bind="dtFromDate" />
                    <data-input bind="dtToDate" />                    
                </data-inputs>
                <data-outputs  bind="grdWork"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
<ts-data id="datWorkSchedule_detail" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="1,2,4,5" function="ST_HR_SEL_HRTI00300_1" > 
                <data-inputs bind="grdDetail" >
                    <data-input bind="txtMaster_pk" />
                </data-inputs>
                <data-outputs  bind="grdDetail"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <ts-data id="datWorkSchedule2" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35" function="ST_HR_SEL_HRTI00300_2" procedure="ST_HR_UPD_HRTI00300_2"> 
                <data-inputs bind="grdWork2" >
                    <data-input bind="lstWG2" />
                    <data-input bind="idWorkMon2" />
                    <data-input bind="idMon_fr2" />
                    <data-input bind="idMon_to2" />
                    <data-input bind="lstCompany2" />
                </data-inputs>
                <data-outputs  bind="grdWork2"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <ts-data id="datSunday" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="1" function="ST_HR_sel_CO_sunday2"> 
                <data-inputs bind="grdWork3" >
                    <data-input bind="idWorkMon2" />
                     <data-input bind="idMon_fr2" />
                    <data-input bind="idMon_to2" />
                </data-inputs>
                <data-outputs  bind="grdWork3"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <ts-data id="datGet_Period" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="process" procedure="ST_hr_PRO_CO_sal_period_com" > 
                <data-inputs>
                    <data-input bind="lstCompany" />
                    <data-input bind="idWorkMon2" /> 
                    <data-input bind="idLst_period2" />
                </data-inputs>
                <data-outputs>
                    <data-output bind="idMon_fr2" /> 
                    <data-output bind="idMon_to2" /> 
                    <data-output bind="idnum_day2" />
                    <data-output bind="idClose_flag2" />  
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <ts-data id="datGet_period_kind" onreceive="OnDataReceive(this)"> 
        <xml>
            <dso  type="list" procedure="ST_HR_SEL_CO_PERIOD_BY_ORG"  > 
                <data-inputs>
                    <data-input bind="lstCompany2" />
                </data-inputs> 
                <data-outputs>
                    <data-output bind="txt_temp2" />
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
-->
<ts-tab id="tabMain" style="width: 100%; height: 100%;" onpageactivate="onPageActive()"> 
	<table name="Schedule" id="tab1" style="width:100%;height:100%;border:1px " cellpadding="0" cellspacing="0" align="top"  >
        <tr style="width:100%;height:100%" valign="top">
            <td>
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:8%; padding-top:1%;">
					<fieldset style="padding: 5">
						<legend ><font class="eco_blue" ><b>Filter Data</b></font></legend>
							<table width="100%" style="height:100%" border="0" cellpadding="2" cellspacing="1">
								<tr style="border:0;width:100%;" valign="center" >
									<td colspan=2 width="2%" style="border:0" align="left">
										
									</td>
									<td colspan=10 width="10%" style="border:0" align="left" >
										Work Group
									</td>
									<td colspan=20 width="20%" style="border:0" align="left"> 
										<ts-list  id="lstWG_S" value="ALL"  maxlen = "100" style='width:100%' onchange="" >
										</ts-list>
									</td>																		
									<td colspan=2 width="2%" style="border:0"></td>
									<td colspan=12 width="12%" style="border:0"  align="left" >
										Work Shift
									</td>
									<td colspan=20 width="20%" style="border:0"  align="left" >
										<ts-list  id="lstWS_S" value="ALL"  maxlen = "100" style='width:100%' />
									</td>
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=2 width="2%" style="border:0" align="left" >
										
									</td>
									<td colspan=10 width="10%" style="border:0" align="left" >
										Holiday Type
									</td>
									<td colspan=30 width="30%" style="border:0" align="left" > 
										<ts-list  id="lstHol" style='width:100%' ></ts-list>
									</td>
									<td colspan=4 width="4%"></td>
								</tr>
								<tr style="border:0;width:100%" valign="center" >
	
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=10 width="10%" style="border:0" align="left" >
										<ts-list  id="lstPeriod" value='1' maxlen = "100" style='width:80%' onchange="OnChangeDate(lstPeriod, dtFromDate, dtToDate)"></ts-list>
									</td>
									<td colspan=30 width="30%" style="border:0" align="left" >
										<ts-datebox id="dtFromDate" onchange="OnChangeDate(lstPeriod, dtFromDate, dtToDate)"  maxlen = "10" text="" style='width:100%' />																		
										~																		
										<ts-datebox id="dtToDate"  maxlen = "10" text="" style='width:100%'/>
									</td>
									<td colspan=68 width="38%" style="border:0"   >
										
									</td>
								</tr>
							</table>
					</fieldset>
				</div>
				<div style="border-top0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:4%; padding-top:3%; padding-bottom:2%">
					<table width="100%"  style="height:100%" border="0" cellpadding="2" cellspacing="1">
						<tr style="border:0;width:100%;height:4%" valign="center" >
							<td colspan=2 width="2%" style="border:0"></td>
							<td colspan=5 width="5%" style="border:0" align="left">
								Rows:
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-label id="idRecord"  text="" maxlen = "100" />						
							</td>
							<td colspan=45 width="45%" style="border:0" align="left" ></td>
							
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button img="excel" id="ibtnRpt"   alt="Report"  onclick="OnReport(1)" imgtype="0">Report</ts-button>
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch(1)" imgtype="0">Search</ts-button>
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button img="set" id="idBtnSet"   alt="Set Grid"  onclick="onSetGrid()" imgtype="0">Set Grid</ts-button>
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >	
								<ts-button img="process" id="idBtnManual"   alt="Process"  onclick="OnProcess()" imgtype="0">Process</ts-button>
							</td>
							
							<td colspan=5 width="5%" style="border:0" align="left" >
								 <ts-button img="save" id="ibtnSave" alt="Save" onclick="OnSave(1)" imgtype="0">Update</ts-button>
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button img="delete" id="ibtnDelete" alt="Delete" onclick="OnDelete()" imgtype="0">Delete</ts-button>
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" ></td>
						</tr>
					</table>	
				</div>
				<div  style="width:100%;height:87%">
					<table style="width:100%;height:87%" >
						<td id="master" style="width:70%;height:100%">
							<table width="100%" style="height:100%">
								<tr>
									<td>
										<ts-grid id="grdWork"	rowClick="show_detail(sender,event)">
											<columns>	
												<column text="WGroup"			datafield="WG" 	   		width="100" 	columntype="textbox" 	cellsalign="center" 	editable=true >		            	</column>
												<column text="Work Date"	    datafield="W_DT"     	width="300" 	columntype="textbox" 	cellsalign="center" 	editable=true>	                	</column>
												<column text="Work Shift"		datafield="WS"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
												<column text="Wgrp_pk"		    datafield="WG_PK" 	    width="400" 	columntype="textbox" 	cellsalign="center" 	editable=true 	hidden="true">		</column>					
												<column text="master_pk"	    datafield="MASTER_PK" 	width="250" 	columntype="textbox" 	cellsalign="center" 	editable=true	hidden="true">		</column>
												<column text="Holiday Type" 	datafield="HOL_TYPE" 	width="100" 	columntype="textbox" 	cellsalign="center"		editable=true>						</column>
												<column text="Day Type" 	    datafield="DAY_TYPE" 	width="100" 	columntype="textbox" 	cellsalign="center"		editable=true>						</column>
											</columns> 
										</ts-grid>   
									</td>
								</tr>
							</table>
						</td>
						<td id="detail" style="width:30%;height:100%">
							<table width="100%" style="height:100%">
								<tr>
									<td>
										<ts-grid id="grdDetail">
											<columns>	
												<column text="Employee ID"		datafield="EMP_ID" 	   		width="100" 	columntype="textbox" 	cellsalign="center" 	editable=true >		    </column>
												<column text="Full Name"	    datafield="FULL_NAME"     	width="300" 	columntype="textbox" 	cellsalign="center" 	editable=true>	        </column>
												<column text="Join Date"		datafield="JOIN_DT"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >			</column>
											</columns> 
										</ts-grid>										
									</td>
								</tr>
							</table>
						</td>
					</table>
				</div>
			</td>	
		</tr>
    </table>
    <table name="Monthly Schedule" id="Tab2" style="width:100%;height:100%;display:none" cellpadding="0" cellspacing="0" align="top" class="eco_line">
        <tr >
            <td valign="top">
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:8%">
					<fieldset style="padding: 5">
						<legend ><font class="eco_blue" ><b>Filter Data</b></font></legend>
							<table width="100%"  style="height:100%" border="0" cellpadding="2" cellspacing="1">
								<tr style="border:0.5;width:100%;height:4%" valign="center" >
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=10 width="10%" style="border:0"  align="left" >
										Group
									</td>
									<td colspan=20 width="20%" style="border:0"  align="left" >
										<ts-list  id="lstWG2" value="ALL"  maxlen = "100" style='width:100%' onchange="" />
									</td>
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=10 style="border:0" width="12%" align="left" >
										Month Type
									</td>
									<td colspan=20 style="border:0" width="20%"  align="left" >
										<ts-list  id="idLst_period2" value='01' maxlen = "100" style='width:100%' onchange="OnChangeMon2()">
											
										</ts-list>
									</td>
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=10 width="10%" style="border:0"  align="left" >
										Work Month
									</td>
									<td colspan=20 width="20%" style="border:0"  align="left" >
										<gw:datebox id="idWorkMon2"  maxlen = "10" type="month" style='width:60%' onchange="onHide_column()" />
									</td>
								</tr>
								<tr style="border:0.5;width:100%;height:4%" valign="center" >
									<td colspan=2 width="2%" style="border:0" align="left"   >
										
									</td>
									<td colspan=10 width="10%" style="border:0" align="left" >Company</td>
									<td colspan=20 width="20%" style="border:0"> 
										 <ts-list  id="lstCompany2" value="" maxlen = "100" style='width:100%' onchange="ChangeOrganization(2)" >
											
										</ts-list>
									</td>
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=12 style="border:0" width="12%" align="left" >
										Work Date
									</td>
									<td colspan=10 width="10%" style="border:0" align="left">
										<ts-datebox id="idMon_fr2"   onchange="" />
									</td>
									<td colspan=10 width="10%" style="border:0" align="left">
										<ts-datebox id="idMon_to2"   onchange="" />
									</td>
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									<td colspan=10 width="10%" style="border:0" align="left" >
										
									</td>
									<td colspan=20 width="20%" style="border:0"> 
										
									</td>
								</tr>
							</table>
					</fieldset>
				</div>
				<div style="border-top0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:4%">
					<table width="100%"  style="height:100%" border="0" cellpadding="2" cellspacing="1">
						<tr style="border:0;width:100%;height:4%" valign="center" >
							<td colspan=2 width="2%" style="border:0"   >
								
							</td>
							<td colspan=5 width="5%" style="border:0" align="center" >
								Rows: 
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-label id="idRecord2"  text="" maxlen = "100"  />
							</td>
							<td colspan=25></td>
							<td colspan=10 width="10%" style="border:0" align="left" >
								<a class="eco_link" title="Click here to work shift information" onclick="OnShowWorkShift()" href="#tips" style="text-decoration: none; color=#0000ff" >Shift Info</a>
							</td>
							<td colspan=10 width="10%" style="border:0" align="left" >
								<a class="eco_link" title="Click here to view detail" onclick="onView(2)" href="#tips" style="text-decoration: none; color=#0000ff" >View Detail</a>
							</td>
							<td colspan=25></td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button id="ibtnSearch2" alt="Search" img="search" text="Search" onclick="OnSearch(2)" />
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button id="ibtnSave2" alt="Save" img="save" text="Save" onclick="OnSave(2)" />
							</td>
							<td colspan=5 width="5%" style="border:0" align="left" >
								<ts-button id="ibtnRpt2" img="excel" text="Report" onclick="OnReport(2)" />
							</td>								
						</tr>
					</table>
				</div>
				<div  style="border-top:1px solid #62ac0d;border-left:1px solid #62ac0d;border-right:1px solid #62ac0d;border:0px solid #62ac0d;width:100%;height:88%">
					<table  cellspacing=0 cellpadding=0 style="height:100%" width=100% border=0>
						<tr valign="top">
							<td class="eco_line_t">
								<ts-grid id="grdWork2"	rowClick="on_click(sender,event)">
									<columns>	
										<column text="Group"	datafield="WG" 	   		width="100" 	columntype="textbox" 	cellsalign="center" 	editable=true >		            	</column>
										<column text="1"	    datafield="D1"     		width="300" 	columntype="textbox" 	cellsalign="center" 	editable=true>	                	</column>
										<column text="2"		datafield="D2"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="3"		datafield="D3"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="4"		datafield="D4"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="5"		datafield="D5"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="6"		datafield="D6"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="7"		datafield="D7"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="8"		datafield="D8"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="9"		datafield="D9"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="10"		datafield="10"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="11"		datafield="11"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="12"		datafield="12"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="13"		datafield="D13"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="14"		datafield="D14"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="15"		datafield="D15"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="16"		datafield="D16"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="17"		datafield="D17"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="18"		datafield="D18"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="19"		datafield="D19"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="20"		datafield="D20"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="20"		datafield="D20"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="21"		datafield="D21"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="22"		datafield="D22"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="23"		datafield="D23"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="24"		datafield="D24"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="25"		datafield="D25"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="26"		datafield="D26"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="27"		datafield="D27"    		width="300" 	columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="28"		datafield="D28"    		width="50" 		columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="29"		datafield="D29"    		width="50" 		columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="30"		datafield="D30"    		width="50" 		columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="31"		datafield="D31"    		width="50" 		columntype="textbox" 	cellsalign="center"		editable=true >						</column>					
										<column text="_grp_pk"	datafield="WG_PK" 	    width="400" 	columntype="textbox" 	cellsalign="center" 	editable=true 	hidden="true">		</column>					
										<column text="_w_mon"	datafield="MASTER_PK" 	width="250" 	columntype="textbox" 	cellsalign="center" 	editable=true	hidden="true">		</column>
										<column text="_from" 	datafield="HOL_TYPE" 	width="100" 	columntype="textbox" 	cellsalign="center"		editable=true	hidden="true">		</column>
										<column text="_to" 	    datafield="DAY_TYPE" 	width="100" 	columntype="textbox" 	cellsalign="center"		editable=true	hidden="true">		</column>
									</columns> 
								</ts-grid>   								
							</td>
						</tr>
					</table>
				</div>
            </td>
        </tr>        
	</table>
</ts-tab>
    <ts-textbox id="txtResult" style="display:none" />
    <ts-textbox id="txtFlag" style="display:none" />
    <ts-textbox id="txtOrgPK" style="display:none" />
    <ts-textbox id="txtCompanyPK" style="display:none" />
    <ts-textbox id="txtGroupData" style="display:none" />
    <ts-textbox id="txtMaster_pk" style="display:none" />
    <ts-textbox id="iduser_pk" style="display:none" />
    <ts-textbox id="txtHr_level" style="display:none" />
    <ts-textbox id="txt_temp" style="display:none" />
    <ts-textbox id="txt_temp1" style="display:none" />
    <ts-textbox id="txt_temp2" style="display:none" />
    <ts-textbox id="txt_WS_temp" style="display:none" />
    <ts-textbox id="txt_WG_temp1" style="display:none" />
    <ts-textbox id="txt_WG_temp" style="display:none" />
    <ts-textbox id="txt_Sal_kind" style="display:none" />
    <ts-textbox id="idnum_day2" style="display:none" />
    <ts-textbox id="idClose_flag2" style="display:none" />
    <ts-textbox id="idResult2" style="display:none" />
<!--	
    <ts-grid id="grdWork3" header="1" format="0" aligns="0" defaults="|" editcol="0"
        widths="2500" style="width:100%; height:100%;display:none" sorting="T" />
	-->	
    <ts-list id="lstOrg" maxlen="100" style='width:100%;display:none' onchange="ChangeOrganization(1)">
	
	</ts-list>
    <ts-list id="lstOrg2" maxlen="100" style='width:100%;display:none' onchange="ChangeOrganization(1)">
		
	</ts-list>
	<ts-list  id="lstCompany" value="" maxlen = "100" style='width:100%;display:none' onchange="ChangeOrganization(1)" >
	
	</ts-list>
	<ts-list  id="lstReport"  maxlen = "100" style='width:100%;display:none' ></ts-list>
	
	<ts-list  id="lstReport1" value='1' maxlen = "100" style='width:100%;display:none' ></ts-list>
	<img status="expand" id="imgMaster" alt="Show month salary information" src="../../../../system/images/iconmaximize.gif" style="cursor:hand" onclick="OnToggle()" />
</body>
</html>
