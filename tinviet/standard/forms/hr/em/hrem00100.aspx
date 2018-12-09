<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>EMPLOYEE ENTRY</title>

<script type="text/javascript">
var pop_type;
var compk = <%= GetSessionCompanyPk() %>
	function BodyInit()
	{	
		
		dtSTProbate.isDisabled = true;
		dtEDProbate.isDisabled = true;
		
		var date = new Date();
		l_cur_date = moment(date).format('YYYYMMDD');
		
		data= <%=TSErpLib.SetListDataSQL("select a.code,a.code_nm from VHR_HR_CODE a where a.id='HR0004' order by a.code_nm ")%>;
    	lstResignType.setDataJson(data); 

		dso_lst_sthrem00100_0.Call("SELECT");
	}
	 //$("#lblA1").mask("999,999,999");
	function OnDataReceive(obj)
	{ 
		if(obj.id=="dso_lst_sthrem00100_0")
		{			
			lstStatus_s.value = "A";
			//OnInsert();
			dso_pro_sthrem00100_1.Call();
		}		
		else if(obj.id == "dso_ctl_sthrem00100_0")
		{	
			imgFile.SetDataText(txtPhoto_PK.text);
		}
	}
	function OnSearch()
	{
		dso_grd_sthrem00100_0.Call("SELECT");
	}
	function OnSave()
	{
		txtPhoto_PK.text = imgFile.GetData();
		if(CheckValidate())
		{
			if(confirm("Do you want to save ?"))
			 {
				
				dso_ctl_sthrem00100_0.Call();
			 }
		}
		
	}
	function OnDelete(obj)
	{
		 if(confirm("Do you want to delete ?"))
			 {
			 	dso_ctl_sthrem00100_0.StatusDelete();
			 	dso_ctl_sthrem00100_0.Call();
			 }
		 
	 }
	function OnInsert()
	{ 
	  if(dso_ctl_sthrem00100_0.GetStatus()!= 20)
	  {
		  dso_ctl_sthrem00100_0.StatusInsert();
		  txtEmp_PK.value = "";
		  txtEMPID.value = "";
		  txtIDCard.value = "";
		  txtAnnualLeave.value = "";
		  txtPhoto_PK.value = "";
		  txtFullName.value = "";
		  dtJoinDT.value = l_cur_date;
		  lstEmp_Type.value = "01"; // Staff
		  lstStatus.value = "A";
		  dtLeaveDT.value = "";
		  lstResignType.value ="";
		  lstOrg_Code.value = "";
		  lstWork_Grp.value = "";
		  lstNation.value = '';
		  txtBirthDT.value = "";
		  lstBirthPlace.value = "";
		  lstNativeCountry.value = "";
		  lstPosition.value = "";
		  txtPersonalID.value = "";
		  dtIssueDT.value = "";
		  lstPlaceID.value = "";
		  lstJob.value = "";
		  lstSEX.value = "";
		  lstReligion.value = "";
		  lstEthnic.value = "";
		  lstEducation.value = "";
		  txtPerAdd.value = "";
		  txtLivingAdd.value = "";
		  txtHomePhone.value = "";
		  txtTel.value = "";
		  txtEmail.value = "";
		  lstMarial.value = "";
		  lstProKind.value = ""; 
		  dtSTProbate.value = "";
		  dtEDProbate.value = "";
		  lstContractKind.value = "01";  //Thu viec
		  txtContractNo.value = "";
		  dtSTContract.value = "";
		  dtEDContract.value = "";
		  lstBank.value = "";
		  txtAccount.value = "";
		  txtPit_No.value = "";
		  lstPayType.value = "";
		  lstMoneyKind.value = "01"; //VND
		  lstSalYN.value = "T";
		  lstOTYN.value = "T";
		  lstNetSal_YN.value = "T";
		  lstUnion.value = "T";
		  chkSocial.value = "T";
		  chkHealth.value = "T";
		  chkUnEmp.value = "T";
		  lstSalaryType.value = "";
		  txtProSal.value = "";
		  txtBasicSal.value = "";
		  txtAllow1.value = "";
		  txtAllow2.value = "";
		  txtAllow3.value = "";
		  txtAllow4.value = "";
		  txtAllow5.value = "";
		  txtAllow6.value = "";
		  txtAllow7.value = "";
		  txtAllow8.value = "";
		  txtInsSal.value = "";
		  lstAttYN.value = "T";
	  }
	  else
	  {
	    alert("Now you can register new employee.");
	  }
		
	}
	function LoadUserDetail(sender,event)
	{ 
		
		var rowIndex = event.row;
		txtEmp_PK.value = grdEmployee.GetGridData(rowIndex, "PK");
		
		dso_ctl_sthrem00100_0.Call("SELECT");
	} 
	
	function OnChangeValue(obj)
	{
		if(obj == "lstProKind")
		{
			if(dtJoinDT.value =="")
			{
				alert("You must choose join date!");
				return;
			}
			
			dso_pro_sthrem00100_0.Call();
		}
	}
	function CheckValidate()
	{
		if(txtIDCard.value =="")
		{
			alert("You must input Id card");
			txtIDCard.focus();
			return false;
		}
		else if(lstEmp_Type.value =="")
		{
			alert("You must input employee type");
			lstEmp_Type.focus();
			return false;
		}
		else if(txtFullName.value =="")
		{
			alert("You must input full name");
			txtFullName.focus();
			return false;
		}
		else if(txtBirthDT.value =="")
		{
			alert("You must input birth date");
			txtBirthDT.focus();
			return false;
		}
		else if(dtJoinDT.value =="")
		{
			alert("You must input join date");
			dtJoinDT.focus();
			return false;
		}
		else if(lstOrg_Code.value =="")
		{
			alert("You must input organization");
			lstOrg_Code.focus();
			return false;
		}
		else if(lstWork_Grp.value =="")
		{
			alert("You must input work group");
			lstWork_Grp.focus();
			return false;
		}
		else if(lstProKind.value =="")
		{
			alert("You must input probation type");
			lstProKind.focus();
			return false;
		}
		return true;
	}
//-----------------------------------------------
function OnShowPopup(strtemp,objlist)
{
    pop_type = objlist;
	
	if (strtemp==3)
    { 
        var url = "/standard/forms/hr/co/hrco00200.aspx?"  ;
		 var obj;
        obj = System.OpenModal(url , 400, 500, 'ORGANIZATION', document,OnClosePopupOrg);
    }
    else
    {
		 var url = "/standard/forms/hr/co/hrco00500.aspx?code=" + strtemp ;
		 var obj;
        obj = System.OpenModal(url , 800, 600, 'HR CODE', document,OnCloseHRCode);
	 
    }
    
}
function OnCloseHRCode()
{
    var param = System.getDataParam();

    if(param[1]!=null)
    {  
		if(param[0] == "HR0004")
			lstResignType.value=param[1];
		else if(param[0] == "HR0009")
			lstNation.value=param[1];
		else if (param[0] =="HR0021")
			lstBirthPlace.value = param[1];
		else if (param[0] =="HR0008")
			lstPosition.value = param[1];
		else if (param[0] =="HR0010") //job
			lstJob.value = param[1];
		else if (param[0] =="HR0011") //Education
			lstEducation.value = param[1];
		else if (param[0] =="HR0014")
			lstPlaceID.value = param[1];
		else if (param[0] =="HR0015") //Ethenic
			lstEthnic.value = param[1];
		else if (param[0] =="HR0016") //Religion
			lstReligion.value = param[1];
		else if (param[0] =="HR0017") //Employee Type
			lstEmp_Type.value = param[1];
		else if (param[0] =="HR0020") //Bank type
			lstBank.value = param[1];
		else if (param[0] =="HR0023") //Pay type
			lstPayType.value = param[1];
    }
}
function OnClosePopupOrg()
{
	
	var param = System.getDataParam();
	
    if(param[1]!=null)
    {  
		if(pop_type =="ORG_E")
			lstOrg_Code.value = param[1];
		else 
			lstOrg_Code_s.value = param[1];
	}
}
</script>
<ts-data id="dso_ctl_sthrem00100_0" onreceive="OnDataReceive(this)"> 
    <xml>
		<dso type="control" 
		parameter="-"   
			function="st_hr_sel_ctl_sthrem00100_0" procedure="st_hr_upd_ctl_hrem00100_0"> 
            <data-inouts> 
                <data-inout bind="txtEmp_PK" />
                <data-inout bind="txtEMPID" />
                <data-inout bind="txtIDCard" />
                <data-inout bind="txtAnnualLeave" />
                <data-inout bind="txtPhoto_PK" />
                
                <data-inout bind="txtFullName" />
                <data-inout bind="dtJoinDT" />
                <data-inout bind="lstEmp_Type" />
                <data-inout bind="lstStatus" />
                <data-inout bind="dtLeaveDT" />
                
                <data-inout bind="lstResignType" />
                <data-inout bind="lstOrg_Code" />
				<data-inout bind="lstWork_Grp" />
                <data-inout bind="lstNation" />
                <data-inout bind="txtBirthDT" />
                
                <data-inout bind="lstBirthPlace"/>
                <data-inout bind="lstNativeCountry"/>
                <data-inout bind="lstPosition"/>
                <data-inout bind="txtPersonalID"/>
                <data-inout bind="dtIssueDT"/>
                
                <data-inout bind="lstPlaceID"/>
                <data-inout bind="lstJob"/>
                <data-inout bind="lstSEX"/>
                <data-inout bind="lstReligion"/>
                <data-inout bind="lstEthnic"/>
                
                <data-inout bind="lstEducation"/>
                <data-inout bind="txtPerAdd"/>
                <data-inout bind="txtLivingAdd"/>
                <data-inout bind="txtHomePhone"/>
                <data-inout bind="txtTel"/>
                
                <data-inout bind="txtEmail"/>
                <data-inout bind="lstMarial"/>
                <data-inout bind="lstProKind"/>
                <data-inout bind="dtSTProbate"/>
                <data-inout bind="dtEDProbate"/>
                
                <data-inout bind="lstContractKind"/>
                <data-inout bind="txtContractNo"/>
                <data-inout bind="dtSTContract"/>
                <data-inout bind="dtEDContract"/>
                <data-inout bind="lstBank"/>
                
                <data-inout bind="txtAccount"/>
                <data-inout bind="txtPit_No"/> 
                <data-inout bind="lstPayType"/>
                <data-inout bind="lstMoneyKind"/>
                
                <data-inout bind="lstSalYN"/>
                <data-inout bind="lstOTYN"/>
                <data-inout bind="lstNetSal_YN"/>
                <data-inout bind="lstUnion"/>
                <data-inout bind="chkSocial"/>
                
                <data-inout bind="chkHealth"/>
                <data-inout bind="chkUnEmp"/>
                <data-inout bind="lstSalaryType"/>
                
                <data-inout bind="txtProSal"/>
                <data-inout bind="txtBasicSal"/>
                <data-inout bind="txtAllow1"/>
                <data-inout bind="txtAllow2"/>
                <data-inout bind="txtAllow3"/>
                
                <data-inout bind="txtAllow4"/>
                <data-inout bind="txtAllow5"/>
                <data-inout bind="txtAllow6"/>
                <data-inout bind="txtAllow7"/>
                <data-inout bind="txtAllow8"/>
                
                <data-inout bind="txtInsSal"/>
                <data-inout bind="lstAttYN"/>
	       </data-inouts>
        </dso> 
    </xml> 
</ts-data>
<ts-data id="dso_lst_sthrem00100_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter=""  function="st_hr_sel_lst_hrem00100_0">
            <data-inputs>
                <data-input bind="txtCompanyPK" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstOrg_Code_s"></data-output>
            	<data-output bind="lstStatus_s"></data-output>
				<data-output bind="lstEmp_Type"></data-output>
            	<data-output bind="lstOrg_Code"></data-output>
            	<data-output bind="lstWork_Grp"></data-output>
            	<data-output bind="lstStatus"></data-output>
            	
            	<data-output bind="lstProKind"></data-output>
            	<data-output bind="lstMoneyKind"></data-output>
            	<data-output bind="lstContractKind"></data-output>
            	<data-output bind="lstNation"></data-output>
            	<data-output bind="lstBirthPlace"></data-output>
            	<data-output bind="lstNativeCountry"></data-output>
            	<data-output bind="lstPosition"></data-output>
            	<data-output bind="lstPlaceID"></data-output>
            	<data-output bind="lstJob"></data-output>
            	<data-output bind="lstSEX"></data-output>
            	<data-output bind="lstEthnic"></data-output>
            	<data-output bind="lstReligion"></data-output>
            	<data-output bind="lstEducation"></data-output>
            	<data-output bind="lstMarial"></data-output>
            	<data-output bind="lstPayType"></data-output>
            	<data-output bind="lstBank"></data-output>
            	<data-output bind="lstSalaryType"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<ts-data id="dso_grd_sthrem00100_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="grid" parameter="NO,PK,EMPLOYEE_ID,EMPLOYEE_NM"  
        	function="st_hr_sel_grd_sthrem00100_0"
        	procedure="">
            <data-inputs bind="grdEmployee">
                <data-input bind="lstOrg_Code_s" ></data-input>
                <data-input bind="lstStatus_s" ></data-input>
                <data-input bind="txtEmployee" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="grdEmployee"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<ts-data id="dso_pro_sthrem00100_1" onreceive="OnDataReceive(this)" > 
	<xml> 
		<dso type="process" procedure="st_hr_sel_pro_sthrem00100_1" > 
			<data-inputs> 
				<data-input bind="txtUserPK"></data-input>
				<data-input bind="txtFormObjID" ></data-input>
				<data-input bind="txtHRLevel" ></data-input>
			</data-inputs>
			<data-outputs>
				<data-output bind="lblMaxID"></data-output>
				<data-output bind="lblTotalEmployee" ></data-output>
				<data-output bind="txtFlag_View" ></data-output>
				<data-output bind="txt_sal_security" ></data-output>
				<data-output bind="txt_First_use" ></data-output>
				<data-output bind="txt_Employee_ByHand" ></data-output>
			</data-outputs>
		</dso> 
	</xml> 
</ts-data>
<body >

<table id="main" style="width:100%;height:100%;border:0" cellpadding="2" cellspacing="1" border="1">
        <tr>
            <td id="left" style="width:25%;height:100%" valign="top" rowspan="2">
                <div style="width:100%;height:100%" >
                    <table style="width:100%;height:100%;border:1;" cellpadding="0" cellspacing="0">
                        <tr >
                            <td colspan=70 width="70%" style="border:0" >&nbsp;</td>
                            <td colspan=30 width="30%" style="border:0">
								<ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
							</td>
                        </tr>
						<tr >
                            <td colspan=30 width="30%" style="border:0" >
								<a class="eco_link" title="Click choose organization" onclick="OnShowPopup(3,'ORG_S')" href="#tips" style="text-decoration: none;" class="eco_link" >Organization</a></td>
							<td colspan=70 width="70%" style="border:0">
							   <ts-list  id="lstOrg_Code_s" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%' onchange="" > </ts-list>
							</td>
                        </tr>
                        <tr >
                            <td colspan=30 width="30%" style="border:0" >
								Status
							</td>
							<td colspan=70 width="70%" style="border:0">
							   <ts-list  id="lstStatus_s"  valuemember="CODE" displaymember="CODE_NM" />
							</td>
                        </tr>
						<tr >
                            <td colspan=30 width="30%" style="border:0" >
								Employee
							</td>
							<td colspan=70 width="70%" style="border:0">
							    <ts-textbox id="txtEmployee" style="width: 100%;" text="" keyPressed="OnSearch()"></ts-textbox>
							</td>
                        </tr>
                        <tr style="height: 96%" valign="top">
                            <td colspan=100 width="100%" style="height:100%" >
                                <ts-grid id="grdEmployee"  headersRowsCount="1" rowClick="LoadUserDetail(sender,event)" style="width:100%;height:100%;">
										<columns>	
											<column text="NO"				datafield="NO" 				width="40" 		columntype="textbox" 		cellsalign="left" 	editable=false >					</column>
											<column text="PK"				datafield="PK" 				width="150" 	columntype="textbox" 		cellsalign="left" 	editable=false hidden="true">		</column>
											<column text="EMPLOYEE ID"		datafield="EMPLOYEE_ID" 	width="80" 		columntype="textbox" 		cellsalign="left" 	editable="false">					</column>
											<column text="EMPLOYEE NAME" 	datafield="EMPLOYEE_NM" 	width="200" 	columntype="textbox" 		cellsalign="left" 	editable="false">					</column>
										</columns>
								</ts-grid>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
            <td id="right" style="width: 75%" valign="top">
                <div style="width:100%;height:100%" >
                    <table style="width:100%;border:0;height:100%;" cellpadding="0" cellspacing="0" border="0">
                        <tr style="padding-bottom:2px;padding:2 5 2 5;height:4%" class="eco_bg">
                            <td align="left" style="width:20%;white-space:">
                                <a class="eco_link" title="Click here to show/hide" onclick="OnShowHide()" href="#tips" style="text-decoration: none;" class="eco_link">Hide/Show Search</a>
                            </td>
                            <td style="width:60%" align="center">
                                <table style="height:100%;" border="0">
                                    <tr>
                                        <td style="width:30%" align="right">
                                           Max ID: &nbsp;
										</td>
										<td style="width:10%" align="left">
                                            <ts-label id="lblMaxID"  text="" maxlen = "100" styles='color:red;width:100%;font-weight: bold;font-size:13' />    
										</td>
										<td style="width:50%" align="right">
                                           Total Active Employees: &nbsp;
										</td>
										<td style="width:10%" align="left">
                                            <ts-label id="lblTotalEmployee"  text="" maxlen = "100" styles='color:red;width:100%;font-weight: bold;font-size:13' />    
										</td>
										
                                    </tr>
                                </table>
                            </td>
                            <td align="right" style="width:20%">
                                <table style="height:100%">
                                    <tr>
                                        <td>
											<ts-button img="new" id="ibtnResetE"   alt="Add New"  onclick="OnInsert()" imgtype="0">Add New</ts-button>
										</td>
                                        <td>
											<ts-button img="save" id="ibtnUpdate"   alt="Save"  onclick="OnSave()" imgtype="0">Save</ts-button> 
										</td>
                                        <td>
											<ts-button img="delete" id="ibtnDelete"   alt="Delete"  onclick="OnSave()" imgtype="0">Delete</ts-button> 
										</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr style="height:96%;">
                            <td colspan="3" valign="top" class="eco_line_t">
                                 <table width="100%;" height="100%" border="0" cellpadding="2" cellspacing="1">
                                    <tr style="height:40%">
                                        <td>
                                            <fieldset style="padding: 5">
                                                <legend><font color="red"><b>Basic Information</b></font></legend>
                                                <table width="100%" border="0" cellpadding="1" cellspacing="1">
                                                    <tr >
                                                        <td  align="center" width=24% colspan=2  rowspan=4 >
                                                            <ts-image id="imgFile"  styles="width:150;height:130"  styles="width:120;height:130"  /></td>
                                                        <td  width=1%></td>
                                                        <td  width="9%">Employee ID(*)</td>
                                                        <td  width=15%>
                                                            <ts-textbox id="txtEMPID"  text="" 	maxlen = "10" styles='width:100%;'  onenterkey="OnEnterEmp()" csstype="mandatory" />
                                                        </td>
                                                        <td  width=1%></td>
                                                        <td  width="9%">ID Number(*)</td>
                                                        <td  width="15%"><ts-textbox id="txtIDCard"  text="" maxlen = "20" styles='width:100%;' csstype="mandatory" /></td>
                                                        <td  width="1%"></td>
                                                        <td  width="9%">
															<a class="eco_link" title="Click here to show employee type" onclick="OnShowPopup('HR0017',lstEmp_Type)" href="#tips" style="text-decoration: none;" class="eco_link" >Employee Type(*)</a>
														</td>
                                                        <td  width="15%"><ts-list  id="lstEmp_Type" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' csstype="mandatory" /></td>
                                                        <td  width="1%"></td>
                                                    </tr>
                                                    <tr>
                                                        <td  ></td>
                                                        <td  >Full Name(*)</td>
                                                        <td colspan=4  >
															<ts-textbox id="txtFullName" style="width: 100%;" text="" ></ts-textbox>
                                                        </td>
                                                        <td  ></td>
                                                        <td  >Birth Date(*)</td>
                                                        <td  >
															<ts-textbox id="txtBirthDT"  text="" maxlen = "10" styles='width:100%' csstype="mandatory"/>
                                                        </td> 
                                                        <td  ></td>              
                                                    </tr>
													<tr>
                                                        <td  ></td>     
                                                        <td  ><a class="eco_link" title="Click choose organization" onclick="OnShowPopup(3,'ORG_E')" href="#tips" style="text-decoration: none;" class="eco_link" >
                                                            Organization(*)</a></td>
                                                        <td colspan=4  > <ts-list  id="lstOrg_Code" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%'onchange="" /></td>
                                                        <td  ></td>
                                                        <td  >Join Date(*)</td>
                                                        <td  ><ts-datebox id="dtJoinDT"  maxlen = "10" text=""  onchange="ChangeProbType()" required="false" csstype="mandatory"/> </td>
					                                    <td  ></td>
                                                    </tr>
                                                    <tr>
                                                        <td  ></td>   
                                                        <td  >Group(*)</td>
                                                        <td colspan=4  ><ts-list  id="lstWork_Grp" valuemember="CODE" displaymember="CODE_NM" maxlen = "100" styles='width:100%'onchange="" /></td>
                                                        <td  ></td>
                                                        <td  >Annual Num</td>
                                                        <td  ><ts-textbox  id="txtAnnualLeave" type="number" format="#,###,###,###.##R" text="12" styles='width:100%' /> </td>
					                                    <td  ></td>              
                                                    </tr>
                                                    
                                                    <tr>
								                        <td colspan="2" align="center">
									                        <table style="height:100%;border:none" cellpadding="0" cellspacing="0" border="0">
										                        <tr>
											                        <td>
												                        <ts-imgbtn id="idBtnResetImg"  img="Reset Image" text="Reset Image"  onclick="OnResetImage()" />
											                        </td>
										                        </tr>
									                        </table>
								                        </td>  
														<td  ></td>
                                                        <td  >Status</td>
                                                        <td  ><ts-list  id="lstStatus" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%' />    
                                                        </td>
                                                        <td ></td>
                                                        <td ><span id="lb_left_date">Left Date(*)</span></td>
                                                        <td  >
                                                            <ts-datebox id="dtLeaveDT" text="" maxlen = "10" styles='width:90%;'  required="false" /> 
                                                        </td>
                                                        <td  ></td>
                                                        <td  width=5%><a class="eco_link" id="lb_resign_type" title="Click choose result of resign" onclick="OnShowPopup('HR0004',lstResignType)" href="#tips" style="text-decoration: none;" class="eco_link">Resign Type</a></td>
                                                        <td >
															<ts-list  id="lstResignType" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' emptytext=" " emptyvalue="" emptytextpoint="first"></ts-list>
                                                        </td> 
                                                        <td  ></td>
                                                    </tr>
                                                </table>
                                            </fieldset>
                                        </td>
                                    </tr>
									
                                    <tr style="height:55%">
                                        <td valign="top">
                                        	<ts-tab id="idTab" onPageActivated="selectedTextEvent(sender,event)">
                                                <table id="tab_01" name="Extend Information" cellpadding="2" cellspacing="1" style="width:100%;height:100%" class="eco_line">
													<tr >
														<td ></td>
														<td style="white-space:">Probation Type(*)</td>
														<td>
															<ts-list  id="lstProKind" valuemember="CODE" displaymember="CODE_NM" onchange="OnChangeValue('lstProKind')" />
														</td>
														<td ></td>
														<td style="white-space:;">Begin Probation(*)</td>
														<td ><ts-datebox id="dtSTProbate"  maxlen = "10" text=""  required="false" onchange=""/></td>
														<td ></td>
														<td style="white-space:">End Probation(*)</td>
														<td ><ts-datebox id="dtEDProbate"  maxlen = "10" text=""  required="false" onchange=""/></td>
														<td ></td>
														<td >Money Kind</td>
														<td ><ts-list  id="lstMoneyKind" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' onChange="" /></td>
													</tr>
													<tr>
														<td ></td>
														<td >Contract Kind(*)</td>
														<td ><ts-list  id="lstContractKind" valuemember="CODE" displaymember="CODE_NM" styles='width:100%;' onChange="" /></td>
														<td ></td>
														<td >Begin Contract</td>
														<td ><ts-datebox id="dtSTContract"  maxlen = "10" text=""  required="false" onchange=""/></td>
														<td ></td>
														<td >End Contract</td>
														<td><ts-datebox id="dtEDContract"  maxlen = "10" text=""  required="false" onchange=""/></td>
														<td ></td>
														<td >Contract No</td>
														<td ><ts-textbox  id="txtContractNo" text="" styles='width:100%' /></td>
													</tr>
                                                    <tr>
                                                        <td  width=1%></td>     
                                                        <td  width=9%><a  title="Click choose nation" onclick="OnShowPopup('HR0009','NATION')" href="#tips" style="text-decoration: none;" class="eco_link" >Nation(*)</a></td>
                                                        <td  width=15%> 
										                    <ts-list  id="lstNation" valuemember="CODE" displaymember="CODE_NM"  styles='width:100%' />
									                    </td>
					                                    <td  width=1%> </td>
                                                        <td  width=9%><a class="eco_link" title="Click choose place birth" onclick="OnShowPopup('HR0021',lstBirthPlace)" href="#tips" style="text-decoration: none;" class="eco_link" >Place Birth</a></td>
                                                        <td  width=15%>
                                                            <ts-list  id="lstBirthPlace" valuemember="CODE" displaymember="CODE_NM" maxlen = "100" styles='width:100%' /> 
                                                        </td>
                                                        <td  width=1%></td>
                                                        <td  width=9%><a class="eco_link" title="Click choose native country" onclick="OnShowPopup('HR0021',lstNativeCountry)" href="#tips" style="text-decoration: none" class="eco_link" >Native Country</a></td>
                                                        <td  width=15%><ts-list  id="lstNativeCountry" valuemember="CODE" displaymember="CODE_NM" maxlen = "100" styles='width:100%' /></td>
					                                    <td  width=1%></td>
                                                        <td  width=9%><a class="eco_link" title="Click choose position" onclick="OnShowPopup('HR0008',lstPosition)" href="#tips" style="text-decoration: none;" class="eco_link" >Position</a></td>
                                                        <td  width=15%><ts-list  id="lstPosition" valuemember="CODE" displaymember="CODE_NM" maxlen = "100" styles='width:100%' />
									                    </td>
                                                    </tr>
                                                    <tr>
                                                        <td  ></td>     
                                                        <td  >Personal ID</td>
                                                        <td  >
                                                            <ts-textbox id="txtPersonalID"  maxlen = "12" text="" styles='width:100%;' onkeypress="return Numbers(event)"  onlostfocus="check_number(0)" onenterkey="" />
                                                        </td>
                                                        <td  ></td>
                                                        <td  >Issue Date</td>
                                                        <td  >
                                                            <ts-datebox id="dtIssueDT" text="" maxlen = "10" styles='width:100%'  required="false"/>
                                                        </td>
                                                        <td  ></td>
                                                        <td  ><a class="eco_link" title="Click choose place ID" onclick="OnShowPopup('HR0014',lstPlaceID)" href="#tips" style="text-decoration: none;"  class="eco_link" >Place ID</a></td>
                                                        <td  >
                                                            <ts-list  id="lstPlaceID" valuemember="CODE" displaymember="CODE_NM" maxlen = "10" styles='width:100%' /> 
                                                        </td>
                                                        <td  ></td>
                                                        <td  ><a class="eco_link" title="Click choose job" onclick="OnShowPopup('HR0010',lstJob)" href="#tips" style="text-decoration: none;" class="eco_link" >Job</a></td>
                                                        <td  >
                                                            <ts-list  id="lstJob" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' /> 
                                                        </td>
                                                    </tr>    
                                                    <tr>
                                                        <td  ></td>     
                                                        <td  >Sex</td>
                                                        <td  ><ts-list  id="lstSEX" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' /></td>
					                                    <td  > </td>
                                                        <td  ><a class="eco_link" title="Click choose ethnic" onclick="OnShowPopup('HR0015',lstEthnic)" href="#tips" style="text-decoration: none;" class="eco_link" >Ethenic</a></td>
                                                        <td  >
                                                            <ts-list  id="lstEthnic" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' /> 
                                                        </td>
                                                        <td  ></td>
                                                        <td  ><a class="eco_link" title="Click choose religion" onclick="OnShowPopup('HR0016',lstReligion)" href="#tips" style="text-decoration: none;" class="eco_link" >Religion</a></td>
                                                        <td  >
                                                            <ts-list  id="lstReligion" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' /> 
                                                        </td>
					                                    <td  ></td>
                                                        <td  ><a class="eco_link" title="Click choose education" onclick="OnShowPopup('HR0011',lstEducation)" href="#tips" style="text-decoration: none;" class="eco_link" >Education</a></td>
                                                        <td  ><ts-list  id="lstEducation" valuemember="CODE" displaymember="CODE_NM" maxlen = "10" styles='width:100%' /></td>
                                                    </tr>
                                                    <tr>
                                                        <td  ></td>     
                                                        <td  >Permanent Address</td>
                                                        <td   colspan=4 ><ts-textbox id="txtPerAdd"  text=""  style='width:100%' /> </td>  
                                                        <td  ></td>
                                                        <td  >Current Address</td>
                                                        <td  colspan=4 ><ts-textbox id="txtLivingAdd"  text="" maxlen = "100" style='width:100%' /></td>
                                                    </tr>
                                                    <tr>
                                                        <td  ></td>     
                                                        <td  >Home Phone</td>
                                                        <td  >
                                                            <ts-textbox id="txtHomePhone"  text="" maxlen = "100" styles='width:100%' />
                                                        </td> 
                                                        <td  ></td> 
                                                        <td  >Hand Phone</td>
                                                        <td  ><ts-textbox id="txtTel"  text="" maxlen = "15" styles='width:100%' tabindex="35"  /></td>
                                                        <td ></td>             
                                                        <td  >Email</td>
                                                        <td  ><ts-textbox id="txtEmail"  text="" maxlen = "100" styles='width:100%' /></td>
                                                        <td  ></td>
                                                        <td  >Marital Status</td>
                                                        <td   ><ts-list  id="lstMarial" valuemember="CODE" displaymember="CODE_NM" styles="width:100%" /> 
                                                        </td>
                                                    </tr>
													
													<tr>
														<td style="width:1%"></td>
														<td style="width:8%"><a class="eco_link" title="Click choose pay type" onclick="OnShowPopup('HR0023',lstPayType)" href="#tips" style="text-decoration: none;" class="eco_link" >Pay Type</a> </td>
														<td style="width:16%"><ts-list  id="lstPayType" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' onChange="" /></td>
														<td style="width:1%"></td>
														<td style="width:8%"><a class="eco_link" title="Click chọn ngân hàng" onclick="OnShowPopup('HR0020',lstBank)" href="#tips" style="text-decoration: none;" class="eco_link" >Bank Name</a> </td>
														<td style="width:16%"><ts-list  id="lstBank" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' onChange="" /></td>
														<td style="width:1%"></td>
														<td style="width:8%">Account No</td>
														<td style="width:16%"><ts-textbox  id="txtAccount" value="" styles='width:100%' /></td>
														<td style="width:1%"></td>
														<td style="width:8%">PIT No</td>
														<td style="width:16%"><ts-textbox id="txtPit_No"  text="" maxlen = "30" styles='width:100%' /></td>
													</tr>
													
                                                </table>
                                                
                                                <table id="tab_02" name="Salary Information" cellpadding="2" cellspacing="1" style="width:100%;height:100%" class="eco_line">
                                                    <tr >
                                                        <td  width=1% ></td>
                                                        <td  width=9%>Salary (Y/N)</td>
                                                        <td  width=5% align="left"><ts-checkbox id="lstSalYN" value="Y" ></ts-checkbox ></td>
                                                        <td  width=1% ></td>
                                                        <td  width=9%>Timekeeping (Y/N)</td>
                                                        <td  width=5% align="left"><ts-checkbox id="lstAttYN" value="Y" ></ts-checkbox ></td>
                                                        <td  width=1%></td>
                                                        <td  width=9% >Salary Type</td>
                                                        <td  width=10% >
                                                            <ts-list  id="lstSalaryType" valuemember="CODE" displaymember="CODE_NM" styles='width:100%' onChange="" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td   ></td>
                                                        <td   >Overtime (Y/N)</td>
                                                        <td  align="left"><ts-checkbox id="lstOTYN" value="Y" ></ts-checkbox ></td>
                                                        <td   ></td>
                                                        <td   >Social Ins (Y/N)</td>
                                                        <td  align="left"><ts-checkbox id="chkSocial" value="N" ></ts-checkbox ></td>
                                                        <td   ></td>
                                                        <td   >Labour No</td>
                                                        <td  ><ts-textbox id="txtLabor_No"  text="" maxlen = "20" styles='width:100%' /></td>
                                                    </tr>
                                                    <tr>
                                                        <td   ></td>
                                                        <td   >Salary Net (Y/N)</td>
                                                        <td  align="left"><ts-checkbox id="lstNetSal_YN" value="N" ></ts-checkbox ></td>
                                                        <td   ></td>
                                                        <td   >Health Ins (Y/N)</td>
                                                        <td  align="left"><ts-checkbox id="chkHealth" value="N" ></ts-checkbox ></td>
                                                        <td   ></td>
                                                        <td   >Issued Books</td>
                                                        <td  ><ts-datebox id="dtLabor"  text="" maxlen = "10" styles='width:90%'  type="month" required="false" /></td>
                                                    </tr>
                                                    <tr >
                                                        <td   ></td>
                                                        <td  >Union (Y/N)</td>
                                                        <td  align="left" ><ts-checkbox id="lstUnion" value="N" ></ts-checkbox ></td>
                                                        <td  ></td>
                                                        <td   >Unemployee Ins (Y/N)</td>
                                                        <td  align="left" ><ts-checkbox id="chkUnEmp" value="N" ></ts-checkbox ></td>
                                                        <td  ></td>
                                                        <td   ></td>
                                                        <td   ></td>
                                                    </tr>
													<tr>
														<td colspan=9>
															<table id="tab_04" name="Salary-Allowance Information" cellpadding="2" cellspacing="1" style="width:100%;height:100%;" class="eco_line_t">
																<tr >
																	<td  width=1% ></td>
																	<td  width="12%">Probation Salary</td>
																	<td  width=15% ><ts-inputnumber id="txtProSal"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12%>Basic Salary</td>
																	<td  width=15% ><ts-inputnumber id="txtBasicSal"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12% >Ins Salary</td>
																	<td  width=15% ><ts-inputnumber id="txtInsSal"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																</tr>
																<tr >
																	<td  width=1% ></td>
																	<td  width=12%><ts-label  id="lblA1"   text="Allowance 1" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% >
																			<ts-inputnumber id="txtAllow1"  isRequired="false" showSpinner="false" ></ts-inputnumber>
																	</td>
																	<td  width=1% ></td>
																	<td  width=12%>
																		<ts-label  id="lblA2"   text="Allowance 1" styles='width:100%;font-weight: bold' />
																	</td>
																	<td  width=15% ><ts-inputnumber id="txtAllow2"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12% ><ts-label  id="lblA3"   text="Allowance 3" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow3"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																</tr>
																<tr >
																	<td  width=1% ></td>
																	<td  width=12%><ts-label  id="lblA4"   text="Allowance 4" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow4"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12%><ts-label  id="lblA5"   text="Allowance 5" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow5"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12% ><ts-label  id="lblA6"   text="Allowance6" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow6"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																</tr>
																<tr >
																	<td  width=1% ></td>
																	<td  width=12%><ts-label  id="lblA7"   text="Allowance 7" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow7"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12%><ts-label  id="lblA8"   text="Allowance 8" styles='width:100%;font-weight: bold' /></td>
																	<td  width=15% ><ts-inputnumber id="txtAllow8"  isRequired="false" showSpinner="false" ></ts-inputnumber></td>
																	<td  width=1% ></td>
																	<td  width=12% ></td>
																	<td  width=15% ></td>
																</tr>
															</table>
														</td>
													</tr>
                                                </table>
                                             </ts-tab>
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
</body>
<ts-textbox id="txtUserPK"  style="display: none"></ts-textbox>
<ts-textbox id="txtHRLevel"  style="display: none"></ts-textbox>
<ts-textbox id="txtFormObjID"   style="display: none"></ts-textbox>
<ts-textbox id="txtCompanyPK" style="display: none"></ts-textbox>
<ts-textbox id="txtEmployeePK" style="display: none"></ts-textbox>

<ts-textbox id="txtEmp_PK" style="display: none"></ts-textbox>
<ts-textbox id="txtPhoto_PK" style="display: none"></ts-textbox>
<ts-textbox id="txtFlag_View"  style="display: none"></ts-textbox>
<ts-textbox id="txt_sal_security"  style="display: none"></ts-textbox>
<ts-textbox id="txt_First_use"  style="display: none"></ts-textbox>
<ts-textbox id="txt_Employee_ByHand"  style="display: none"></ts-textbox>
</html>