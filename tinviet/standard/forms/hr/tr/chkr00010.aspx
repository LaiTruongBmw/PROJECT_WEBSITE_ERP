<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>EMPLOYEE ENTRY</title>

<script type="text/javascript">

function BodyInit()
{
  
}
function BindingDataList()
{
	
	 
}
 
//-------------------------------------------------------------------------------------
function OnSearch()
{
	datEQ_Management.Call("SELECT");
}
//--------------------------------------------------------------------------------------------------
function ChangeColorItem(lstctl) 
 {
        var slevel1, slevel2, slevel3,slevel4;
        for (var i = 0; i < lstctl.options.length; i++)
        {
            slevel1 = lstctl.options.item(i).text.substr(0, 1);
            slevel2 = lstctl.options.item(i).text.substr(0, 3);
            slevel3 = lstctl.options.item(i).text.substr(0, 5);
            slevel4 = lstctl.options.item(i).text.substr(0, 7);
            if (slevel4 != ".......")
            {
                if(slevel3==".....")
                {
                    lstctl.options.item(i).style.color = "0066CC";
                }
                else  
                {
                    if (slevel2 == "...")
                    {
                        lstctl.options.item(i).style.color = "FF4500";
                    }
                    else
                    {
                        if (slevel1 == ".")
                            lstctl.options.item(i).style.color = "FF00FF";  //FF3333
                    }
                }                
            }
        }
    }
//--------------------------------------
function OnDelete()
{
	if(confirm((v_language =="ENG")?"Do you want to delete?":"Bạn có muốn xóa?"))
    {
		grdTraining.DeleteRow();
		datEQ_Management.Call();
    }
	
}
//--------------------------------------------------------------------------------------------------
function OnDataReceive(obj)
{
	//alert('Ondatareceive');
	if(obj.id == "Training_Information")
       {
            lblRecord.text=grdEmpTraining.rows-1 ;
       }
    if(obj.id == "datCheck_View")
       {
            if(txtFlag_View.text == 'Y')
            {
                idBtnNew.style.display = "none";
                idBtnSave.style.display = "none";
                idBtnDelete.style.display = "none";
            }
        
            datTax_Detail.Call("SELECT");
            
       }
	   if(obj.id == "datEQ_Management")
       {       
			
			//txtTraPk.text = grdTraining.GetGridData(grdTraining.rows-1, p_pk);	
			//alert(txtTraPk.text);
			if (txtTraPk.text =="")
			{
				for(var i =1 ;i<= grdEmpTraining.rows-1; i++)
				{				
					grdEmpTraining.SetGridText(i,v_tra_id,txt_trainning_id.text);
				}
				//alert(txt_trainning_id.text);
				 Training_Information.Call();				 
			}
       }
	   
}
//---------------------------------------------------------
function OnAdd()
{
   var ctrl=grdTraining.GetGridControl();
        grdTraining.AddRow();
		ctrl.TopRow = ctrl.rows;
	

}
//-------------------------------------------------------------------------------------
function OnSave()
{
	OnValidate();
	 
}
function OnSave1()
{	
	for(var i = 1; i<grdEmpTraining.rows -1; i++)
			{	
				var a = grdEmpTraining.GetGridData(i, v_emp_id) + grdEmpTraining.GetGridData(i, v_thr_emp_pk);
			
				for(var j = i+1; j<grdEmpTraining.rows ; j++)
				{
					var b = grdEmpTraining.GetGridData(j, v_emp_id) + grdEmpTraining.GetGridData(j, v_thr_emp_pk) ;
					
					if(a == b)
					{
						alert((v_language == "ENG")?"Employee at row" +i+ " and row "+j+" are same!!!":"Trùng dữ liệu tại dòng "+i+ " và dong "+j+"!!!");
						
						return false;
					}					
				}
			}
	if(grdEmpTraining.GetGridData(i, v_tra_plan_pk) =="")
		{
			alert((v_language =="ENG")?"You have not saved the training information yet!!!" :"Bạn chưa lưu thông tin đào tạo !!!");
			return false;
		}
	 if (confirm("Do you want to save?"))
		{
            Training_Information_2.Call();
		}
}
function OnDelete1()
{
	for(var i = 1; i<grdEmpTraining.rows -1; i++)
	if(grdEmpTraining.GetGridData(i, v_tra_plan_pk) =="")
		if(confirm((v_language =="ENG")?"Do you want to delete?":"Bạn có muốn xóa?"))
		{
			grdEmpTraining.ClearData();
			return false;
		}

	if(confirm((v_language =="ENG")?"Do you want to delete?":"Bạn có muốn xóa?"))
    {
		grdEmpTraining.DeleteRow();
		Training_Information.Call();
    }
	
	
}
function OnAddNew1()
{
	var irow2=grdTraining.row;
			if (irow2>=1)
			{	
				var path = System.RootURL + '/standard/forms/hr/tr/hrtr00103.aspx';
				var obj = System.OpenModal( path ,800 , 550 ,  'resizable:yes;status:yes');
				if(obj != null)
						{
							var s_m_pk = grdTraining.GetGridData(grdTraining.row,p_pk);
							for(var i = 0; i<obj.length; i++)
							{
								grdEmpTraining.AddRow();
								//alert(grdMethod.rows);
								irow=grdEmpTraining.rows-1;
								grdEmpTraining.SetGridText(irow, v_tra_plan_pk, s_m_pk);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_emp_id,obj[i][0]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_Full_nm,obj[i][1]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_position,obj[i][3]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_thr_emp_pk,obj[i][7]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_organization,obj[i][9]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_org_pk,obj[i][8]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_position_pk,obj[i][10]);
							}
						
						}
			}
			else
			{
				alert((v_language == "ENG")?"You need to select one row from Object imformation!!!":"Bạn phải chọn một đối tượng!!!");
			}
}
function OnReport()
{
	var	url = System.RootURL + "/standard/reports/hr/tr/rpt_hrtr00100_0.aspx?";
       url = url + '&p_Idtraining=' + txtIDtrain.text + '&p_dtStart_dt=' + dtStart_dt.value + '&p_dtEnd_dt='+ dtEnd_dt.value;
       window.open(url);
}
//------------------------------------------------------------------------------
function onChange_org()
{
		datGet_period.Call();
}
function Popup()
{
 
  var irow=grdTraining.row;
  var col=event.col;
	if(col== p_Organization)
	{
		var strcom;
        var fpath = System.RootURL + "/standard/forms/hr/co/hrco01700.aspx?";        
        var obj=window.showModalDialog(fpath,this,'titleb:0;resizable:no;status:no;dialogWidth:20;dialogHeight:20;dialogLeft:'+window.event.screenX+';dialogTop:'+window.event.screenY+';edge:sunken;scroll:yes;unadorned:yes;help:no');
       if (obj!=null)
        {  
			grdTraining.SetGridText(event.row,col,obj);
		} 
	}
	if(grdTraining.col == p_content && grdTraining.row < grdTraining.rows)
	{	
	
		var g_data_pk = grdTraining.GetGridData(grdTraining.row, p_pk);
		var path = System.RootURL + '/standard/forms/hr/tr/hrtr00101.aspx?emp_pk=' + g_data_pk;
		var object = System.OpenModal( path ,550 , 350 ,  'resizable:yes;status:yes');
		if(object != null)
		grdTraining.SetGridText( grdTraining.row , grdTraining.col ,object.toString());
	}
	 if(grdTraining.col == p_Responsible && grdTraining.row < grdTraining.rows)
			//if (irow>=1)
						{	
			var path = System.RootURL + '/standard/forms/hr/tr/hrtr00102.aspx';
			var object = System.OpenModal( path ,1000 , 600 ,  'resizable:yes;status:yes');
			var names = "";
			var pk = "";
				if(object != null)
				{	
					for (var i =0 ;i < object.length;i++)
					{
						
						
							names = names + object[i][1]+ "/";
							pk = pk +  object[i][0]+ ",";
						
					//thr_emp_name=thr_emp_name + object[i,1];//alert(object[i]);
					//alert(object[i]);
					
					} 
					names=names.substr(0,names.length-1);
					//alert(thr_emp_name);
				//grdTraining.SetGridText( grdTraining.row , grdTraining.col ,thr_emp_name);
				
				grdTraining.SetGridText( grdTraining.row , p_Responsible ,names);
				grdTraining.SetGridText( grdTraining.row , p_Responsible_pk ,pk);
			}

			}
/*	if(grdTraining.col == p_Object && grdTraining.row < grdTraining.rows)
		{	
				var path = System.RootURL + '/standard/forms/hr/tr/hrtr00103.aspx';
				var obj = System.OpenModal( path ,800 , 550 ,  'resizable:yes;status:yes');
				if(obj != null)
						{
							var s_m_pk = grdTraining.GetGridData(irow,p_pk);
							for(var i = 0; i<obj.length; i++)
							{
								grdEmpTraining.AddRow();
								//alert(grdMethod.rows);
								irow=grdEmpTraining.rows-1;
								grdEmpTraining.SetGridText(irow, v_tra_plan_pk, s_m_pk);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_emp_id,obj[i][0]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_Full_nm,obj[i][1]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_position,obj[i][3]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_thr_emp_pk,obj[i][7]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_organization,obj[i][9]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_org_pk,obj[i][8]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_position_pk,obj[i][10]);
							}
						
						}
		}
		*/
}
function OnValidate()
{
	var ctrl = grdTraining.GetGridControl();
	for ( var i =  1 ; i < ctrl.rows ; i++ )
	{
		if(grdTraining.GetGridData(i, p_Idtraining) =="")
		{
			alert((v_language =="ENG")?"You have input ID Training at row " + i :"Bạn phải nhập mã đào tạo tại dòng " + i);
			return false;
		}
		if(grdTraining.GetGridData(i, p_Object) =="")
		{
			alert((v_language =="ENG")?"You have input object at row " + i:"Bạn phải nhập đối tượng tại dòng " + i);
			return false;
		} 
		if(grdTraining.GetGridData(i, p_Times) =="")
		{
			alert((v_language =="ENG")?"You have input Training Date at row " + i :"Bạn phải ngày đào tạo cho dòng " + i);
			return false;
		}
		if(grdTraining.GetGridData(i, p_Responsible) =="")
		{
			alert((v_language =="ENG")?"You have input InCharge at row " + i :"Bạn phải nhập người đào tạo cho dòng " + i);
			return false;
		}

	}
	if (confirm("Do you want to save?"))
				{	
					txtTraPk.text = grdTraining.GetGridData( grdTraining.row, p_pk);
					txt_trainning_id.text = grdTraining.GetGridData( grdTraining.row, p_Idtraining);
					datEQ_Management.Call();
				}
  
	
}
function grdTrainingOnclick()
{
	/*if (OnValidate())
	//lblRecordCriteria.text = "" + grdTraining.GetGridData( grdTraining.row, g1_level_empNM );
	//lblRecordPosition.text = "" + grdTraining.GetGridData( grdTraining.row, g1_positionNM );
	//flag = 'view' ;
	txtTraPk.text = grdTraining.GetGridData( grdTraining.row, p_pk);
	
	
	
	//Training_Information.Call("SELECT"); */

	// var ctrl=grdTraining.GetGridControl();
	
	 txtTraPk.text = grdTraining.GetGridData( grdTraining.row, p_pk);
		//alert(txtTraPk.text);
		if(txtTraPk.text=="")
		{ 
		 
		}
		else
		{
		  Training_Information.Call("SELECT");
		}
	return true;
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
function OnPopUp(pos)
{
    switch(pos)
    {	
		case 'RequestTrain':
					grdTraining.ClearData();
					grdEmpTraining.ClearData();
					/* var irow2=grdRecPosition.row;
					if(irow2 <= 0)
					{
						alert((v_language == "ENG")?"You need to select one row from position imformation table!!!":"Bạn phải chọn một dong trong bảng chức vụ!!!");
						return;
					} 
					var data_empLevel = grdRecPosition.GetGridData(grdRecPosition.row, g1_level_emp);
					var data_position = grdRecPosition.GetGridData(grdRecPosition.row, g1_position);
					var rec_d_pk = grdRecPosition.GetGridData(grdRecPosition.row, g1_pk);
					var rec_m_pk = grdRecPosition.GetGridData(grdRecPosition.row, g1_rec_m_pk);*/
					var path = System.RootURL + '/standard/forms/hr/tr/hrtr00104.aspx';
					var obj = System.OpenModal( path ,800 , 600 ,  'resizable:yes;status:yes');
					if (obj!=null)
					{
					//	for(var i = 0; i<obj.length; i++)
						//{
							
							grdTraining.AddRow();
							//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_d_pk, rec_d_pk);
							//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_m_pk, rec_m_pk);
							grdTraining.SetGridText(grdTraining.rows-1, p_Object,obj[0][0]);
							grdTraining.SetGridText(grdTraining.rows-1, p_content,obj[0][1]);
							grdTraining.SetGridText(grdTraining.rows-1, p_Organization,obj[0][2]);	
						//	}
						
							for(var i = 1; i<obj.length; i++)
									  {
										grdEmpTraining.AddRow();
										//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_d_pk, rec_d_pk);
										//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_m_pk, rec_m_pk);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_organization,obj[i][0]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_emp_id,obj[i][1]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_Full_nm,obj[i][2]);	
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_thr_emp_pk,obj[i][4]);	
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_org_pk,obj[i][5]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_position,obj[i][3]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_position_pk,obj[i][6]);
								    }
							
											
						}
						break;
						
		case 'MandatoryTrain':
					grdTraining.ClearData();
					grdEmpTraining.ClearData();
					/* var irow2=grdRecPosition.row;
					if(irow2 <= 0)
					{
						alert((v_language == "ENG")?"You need to select one row from position imformation table!!!":"Bạn phải chọn một dong trong bảng chức vụ!!!");
						return;
					} 
					var data_empLevel = grdRecPosition.GetGridData(grdRecPosition.row, g1_level_emp);
					var data_position = grdRecPosition.GetGridData(grdRecPosition.row, g1_position);
					var rec_d_pk = grdRecPosition.GetGridData(grdRecPosition.row, g1_pk);
					var rec_m_pk = grdRecPosition.GetGridData(grdRecPosition.row, g1_rec_m_pk);*/
					var path = System.RootURL + '/standard/forms/hr/tr/hrtr00105.aspx';
					var obj = System.OpenModal( path ,800 , 600 ,  'resizable:yes;status:yes');
					if (obj!=null)
					{
					//	for(var i = 0; i<obj.length; i++)
						//{
							
							grdTraining.AddRow();
							//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_d_pk, rec_d_pk);
							//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_m_pk, rec_m_pk);
							grdTraining.SetGridText(grdTraining.rows-1, p_Object,obj[0][1]);
							grdTraining.SetGridText(grdTraining.rows-1, p_content,obj[0][2]);
							//grdTraining.SetGridText(grdTraining.rows-1, p_Organization,obj[0][2]);	
						//	}
						
							for(var i = 1; i<obj.length; i++)
									  {
										grdEmpTraining.AddRow();
										//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_d_pk, rec_d_pk);
										//grdTraining.SetGridText(grdTraining.rows-1, g2_rec_m_pk, rec_m_pk);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_organization,obj[i][0]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_emp_id,obj[i][1]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_Full_nm,obj[i][2]);	
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_thr_emp_pk,obj[i][4]);	
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_org_pk,obj[i][5]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_position,obj[i][3]);
										grdEmpTraining.SetGridText(grdEmpTraining.rows-1, v_position_pk,obj[i][6]);
								    }
							
						 					
						}
						break;
	}   
	/*var irow2=grdTraining.row;
			if (irow2>=1)
			{	
				var path = System.RootURL + '/standard/forms/hr/tr/hrtr00104.aspx';
				var obj = System.OpenModal( path ,800 , 550 ,  'resizable:yes;status:yes');
				if(obj != null)
						{
							for(var i = 0; i<obj.length; i++)
							{
								grdEmpTraining.AddRow();
								//alert(grdMethod.rows);
								irow=grdEmpTraining.rows-1;
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_emp_id,obj[i][0]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_Full_nm,obj[i][1]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_position,obj[i][3]);
								grdEmpTraining.SetGridText(grdEmpTraining.rows-1,v_thr_emp_pk,obj[i][7]);
							}
						
						}
			} */
}
</script>

<body bgcolor='#FFFFFF' style="overflow-y:hidden;">
<gw:data id="datCheck_View" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso  type="process" procedure="ST_HR_PRO_CO_CHECK_VIEW"  > 
                <input>
                    <input bind="iduser_pk" />
                    <input bind="menu_id" />
                </input> 
                <output>
                    <output bind="txtFlag_View" />
                </output>
            </dso> 
        </xml> 
</gw:data>

<!----------------------Search----------------->

<gw:data id="datEQ_Management" onreceive="OnDataReceive(this)"  > 
        <xml>
            <dso   type="grid" parameter="1,2,3,4,5,6,7,8,9,10,11" function="st_hr_sel_hrtr00100_0" procedure="st_hr_upd_hrtr00100_0" > 
                <input bind="grdTraining" >
					<input bind="txtIDtrain" />
					<input bind="dtStart_dt" />
					<input bind="dtEnd_dt" />
                </input>
                <output  bind="grdTraining" />
                
            </dso> 
        </xml> 
</gw:data>
<!--------------------------------------->
<gw:data id="Training_Information" onreceive="OnDataReceive(this)" >
        <xml>
            <dso  type="grid" parameter="1,2,3,4,5,6,7,8,9,10" function="st_hr_sel_hrtr00100_1" procedure="st_hr_upd_hrtr00100_1" > 
                <input bind="grdEmpTraining" >
					<input bind="txtTraPk" />
                </input>
                <output  bind="grdEmpTraining" />
                
            </dso> 
        </xml> 
</gw:data>
<!----------------------------------------------------->
<gw:data id="Training_Information_2" onreceive="OnDataReceive(this)" >
        <xml>
            <dso  type="grid" parameter="1,2,3,4,5,6,7,8,9" function="st_hr_sel_hrtr00100_1" procedure="st_hr_upd_hrtr00100_2" > 
                <input bind="grdEmpTraining" >
					<input bind="txtTraPk" />
                </input>
                <output  bind="grdEmpTraining" />
                
            </dso> 
        </xml> 
</gw:data>
<!----------------------------------------------------->
<table name="Training Informations" width="100%" cellpadding="0" cellspacing="0" style="width:100%;height:100%;border:1px solid #62ac0d;">
        <tr style="width:100%;height:60%" valign="top">
            <td>              
				<div style="border-top:0px solid #62ac0d;border-left:0px solid #62ac0d;border-right:0px solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:10%">
					<fieldset style="padding: 5">
						<legend ><font class="eco_blue" ><b>Filter Data</b></font></legend>
							<table width="100%" id="tblexp" style="height:100%"  cellpadding="0" cellspacing="0">
								<tr style="border:0;width:100%;height:4%" valign="center" >
									<td colspan=2 width="2%" style="border:0"   >
										
									</td>
									
									<td colspan=10 width="10%" style="border:0"  align="left" >
										ID Training
									</td>
									<td colspan=20 width="20%" style="border:0"  align="left" >
										 <gw:textbox id="txtIDtrain" onenterkey   ="OnSearch()"  styles="width:100%"/>
									</td>
									<td colspan=7 width="7%" style="border:0"> </td>
									<td colspan=8 width="8%" style="border:0">
										<gw:list  id="lstPeriod_B" value='1' maxlen = "100" styles='width:80%' onchange="OnChangeDate(lstPeriod_B, dtStart_dt, dtEnd_dt)" >
											<data>
												|1|Daily|2|Weekly|3|Monthly
											</data>
										</gw:list>
									</td>
									<td colspan=8 width="8%" style="border:0" align="left">
										 <gw:datebox id="dtStart_dt" styles='width:100%'   />
									</td>
									<td colspan=1 width="1%" style="border:0">~</td>
									<td colspan=10 width="10%" style="border:0" align="left">
										 <gw:datebox id="dtEnd_dt" styles='width:100%'   />
									</td>
									<td colspan=10 style="border:0" width="10%" align="left" > </td>
									<td colspan=20 width="20%" style="border:0" align="left">																	
									</td>	
									
								</tr>
							</table>
						</fieldset>
				</div>
				<div style="border-top:0 solid #62ac0d;border-left:0 solid #62ac0d;border-right:0 solid #62ac0d;border-bottom:1px solid #62ac0d;width:100%;height:4%">
					<table width="100%"  style="height:100%" border=0 cellpadding="0" cellspacing="0">
						<tr style="border:0;width:100%;height:100%" valign="center" >
							<td colspan=2 width="2%" style="border:0"   >
								
							</td>
													
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:label id="idRecord"  text="" maxlen = "100" />
							</td>
							<td colspan=45 width="45%" style="border:0" align="" >
							</td>
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:button img="search" id="ibtnSearch"  text="Search"  alt="Search"  onclick="OnSearch()"/>
							</td>
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:button id="btnDelete" img="delete" text = "Delete" alt="Delete" onclick="OnDelete()" />
							</td>
							<td colspan=7 width="7%" style="border:0" align="" >
								<gw:button id="ibtnAdd" img="new"" text="Add New" onclick="OnAdd()" />
							</td>
							<td colspan=7 width="7%" style="border:0" align="" >
								<gw:button id="ibtnSave" img="save"   text="Save"  onclick="OnSave()"/>
							</td>
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:button id="ibtnReport" alt="Report" img="excel" text="Report" onclick="OnReport()"/>
							</td>	
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:button id="ibtnPopup" img="popup" text="Request" alt="Request Training" onclick="OnPopUp('RequestTrain')" />
							</td>
							<td colspan=5 width="5%" style="border:0" align="" >
								<gw:button id="ibtnPopup" img="popup" text="Mdatory" alt="Mandatory Training" onclick="OnPopUp('MandatoryTrain')" />
							</td>
							
													
						</tr>
					</table>
				</div>
				<div id="tblMaster" style="border-top:1px solid #62ac0d;border-left:1px solid #62ac0d;border-right:1px solid #62ac0d;border:0px solid #62ac0d;width:100%;height:86%">
					<table  cellspacing=0 cellpadding=0 style="height:99%" width=100% border=1>
						<tr valign="top">
							<td  style="width:100%;height:100%;"> 
								<gw:grid   
                                      id="grdTraining"
										header="No.|ID Training(*)|Object(*)|Content|Training Date(*)|Training Place|Incharge(*)|_Responsible_pk|Proposed Organization|Amount|Description|_pk"
										format="0|0|0|0|4|0|0|0|0|-0|0|0"
										aligns="0|0|0|0|0|0|0|0|0|0|0|0"
										defaults="|||||||||||"
                                        editcol="0|1|1|1|1|1|1|1|1|1|1|1"
                                        widths="500|2000|2500|3000|2000|2000|1500|2500|2500|1500|1500|0"
                                        sorting='T' 
										autosize = "T"
										oncelldblclick="Popup()"
										oncellclick="grdTrainingOnclick()" 
                                        styles='width:100%; height:100%' 
                                        acceptnulldate='T' />
							</td>
						</tr>
				   </table> 
				</div>
			</td>
        </tr>
		<tr style="height: 40%">
            <td valign="top">
                <div style="width:100%;height:100%" class="eco_line">
                    <table style="width:100%;border:0;height:100%;" cellpadding="0" cellspacing="0" border="0">
                        <tr style="padding-bottom:2px;padding:2 5 1 5" class="eco_bg">
                            <td align="left" style="white-space:nowrap">
                                <table style="height:100%">
                                    <tr>
										<td align="left" style="width:65%" >
											<legend><font color="red" size="2"><b>Staff Training Information</b></font></legend>
										<td colspan=10 width="10%" style="border:0"   >
										<td colspan=10 width="30%" style="border:0">
											<legend><font color="black" size="2"><b>Employees Paticipate :</b></font></legend>
										</td>
										<td colspan=5 width="5%" style="border:0">
											<gw:label id="lblRecord"  text="" />
										</td>
                                        <td style="width:10%"></td>
                                        
                                    </tr>
                                </table>
                            </td>
                            <td>&nbsp;</td>
                            <td align="right">
                                <table style="height:90%">
                                    <tr>
										
										<td><gw:button id="btnNewPos" img="new" alt="New" text="Add New" onclick="OnAddNew1()" /></td>
										<td><gw:button id="btnSavePos" img="save" alt="Save" text="Save" onclick="OnSave1()" /></td>
                                        <td><gw:button id="btnDeletePos" img="delete" alt="Delete" text="Delete" onclick="OnDelete1()" /></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="height:96%;">
                            <td colspan="3" valign="top" class="eco_line_t">
                                <gw:grid id='grdEmpTraining' 
								header='No.|_pk|_tra_plan_pk|Organization|_pk_org|Emp ID|Full Name|Position|_thr_emp_pk|_pos_pk|_tra_id
                                format='0|0|0|0|0|0|0|0|0|0|0|0' 
								aligns='0|0|0|0|0|0|0|0|0|0|0|0'
                                check='|||||||||||' 
								editcol='0|0|0|0|0|0|0|0|0|0|0'
                                widths='500|0|0|2000|0|3000|3500|2000|0|0|0'
                                sorting='T' styles='width:100%; height:100%' 
                                acceptnulldate='T' />
                            </td>
                        </tr>
                    </table>
                </div>
				
            </td>
        </tr>
    </table>

    <!--------------------------------------------------------------------------->
  
    <gw:textbox id="iduser_pk" styles="display:none"/>
    <gw:textbox id="txt_sal_security" styles="display:none"/>
    <gw:textbox id="txtflag_menu" styles="display:none"/>
    <gw:textbox id="txtHr_level" styles="display:none"/> 
    <gw:textbox id="menu_id" text="" styles="display:none"  />
    <gw:textbox id="txtFlag_View" text="" styles="display:none"  />
	<gw:textbox id="txtReport_tmp" styles="display:none"/>	
	<gw:textbox id="txtTraPk" styles="display:none"/>
	<gw:textbox id="txtlst_period" styles="display:none"/>
	<gw:textbox id="dtfrom" text="" styles="display:none"  />
	<gw:textbox id="dtto" text="" styles="display:none"  />
	<gw:textbox id="txt_trainning_id"  styles="display:none"  />	
    <!------------------------------------------->
</body>
</html>
