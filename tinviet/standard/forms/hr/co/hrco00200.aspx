<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>GET ORGANIZATION</title>

<script type="text/javascript">
var init_from;
function BodyInit()
{
	
	BindingDataList();
}
function BindingDataList()
{
	
	dso_tre_hrco00200_0.Call("SELECT");
	
}
function BodyProcess(){

	
  	datDeptTree.Call("SELECT");
}

//-------------------------------------------
function OnSearch()
{
    
	datDeptTree.Call("SELECT");
}
//-------------------------------------------
function selectNode(sender,event)
{	
	txtOrgPk.value= sender.value;
	//txtParentPK1.value = sender.value + '';
	//idPName1.value=sender.selectedNodeText;
    //dso_ctl_gsau00600_0.Call('SELECT');
	//alert(txtOrgPk.value);
	var arr_data = new Array();
  
   
	arr_data[1] = txtOrgPk.value; 
   
	System.setDataParam(arr_data);
    System.ClosePopup(window);
}
//-------------------------------------------
function EXITOnClick()
{
	OnSelect();
}
/*------------------------------*/
function OnChange_com()
{
	datDeptTree.Call("SELECT");
}

//-------------------------------------------
function treeItemOnclick()
{
    OnSelect();
}
//-------------------------------------------
</script>
<body bgcolor='#FFFFFF' style="overflow:hidden;">

<ts-data id="dso_tre_hrco00200_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="tree" function="st_hr_sel_tre_hrco00200_0"   procedure="">
            	<data-inputs> 
            		<data-input bind="txtText" ></data-input>
            	</data-inputs>  
				<data-outputs bind="treDept" > </data-outputs>  
            </dso> 
        </xml> 
</ts-data> 
<!-------------------------------------------------------------------->
<table width="100%" height="100%"  cellpadding="0" cellspacing="0" border="0">
    <tr class="eco_bg" height="30px">
        <td align="center">
            <table cellpadding="3" cellspacing="2" width="100%" class="eco_line">
				<tr>
					<td colspan="2" align="right">
						<table cellpadding="3" cellspacing="2">
							<td ><ts-button id="btnSelect" img="select"  alt="Select" onclick="OnSelect()" imgtype="0"> Select </ts-button></td>
						</table>
					</td>
				</tr>
            </table>
        </td>
    </tr>
    <tr style="height:100%">
	    <td > 
	        <table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%" >
                <tr>
                    <td valign="top">
	                    <ts-classictreeview  id="treDept" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="selectNode(sender,event)" ></<ts-classictreeview>
		           </td>
		       </tr>
		    </table>
	    </td>
    </tr>	
    
</table>
<ts-textbox id="txtOrgPk" maxlen=100 styles='width:100%;display:none'   csstype=""/>
<ts-textbox id="txtUpperDeptPk" maxlen=100 styles='width:100%;display:none'   csstype=""/>
<ts-textbox id="txtCompanyPk" maxlen=100 styles='width:100%;display:none'   csstype=""/>
<ts-textbox id="txtCountDepId" maxlen=100 styles='width:100%;display:none'   csstype=""/>
<ts-textbox id="iduser_pk" styles="display:none"/>
<ts-textbox id="txtText" styles="display:none"/>
</body>
</html>
