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
    txtDate.text = "<%=Request.Params["date"]%>";

    var data=  <%=TSErpLib.SetListDataSQL("SELECT A.CODE, A.CODE_NM   FROM TCO_ABCODE A,TCO_ABCODEGRP B WHERE B.ID = 'COAB0140'   AND A.TCO_ABCODEGRP_PK = B.PK AND A.DEL_IF = 0 AND B.DEL_IF = 0")%>;
    lstHolidayType.setDataJson(data); 
    dtDate.SetEnable(0);
    dtDate.value=txtDate.text;
    dso_pro_hrti00202_0.Call();
   
    
}



function OnDataReceive(obj)
{
    
    
}








function OnSave()
{
   
        if(confirm("Do you want to update?"))
        {
            flag_update=1;
            dso_pro_hrti00202_1.Call();
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


<ts-data id="dso_pro_hrti00202_0" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="process" procedure="st_hr_pro_ctl_hrti00202_0" > 
			<data-inputs>
                <data-input bind="txtCompany_PK" ></data-input>
                <data-input bind="txtDate" ></data-input>
			</data-inputs>
            <data-outputs>
			    <data-output bind="txt_PK"></data-output>
                <data-output bind="lstHolidayType"></data-output>
                <data-output bind="txtHolidayComment"></data-output>
			</data-output>
        </dso> 
    </xml> 
</ts-data>

<ts-data id="dso_pro_hrti00202_1" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="process" procedure="st_hr_pro_ctl_hrti00202_1" > 
			<data-inputs>
                <data-input bind="txt_PK" ></data-input>
                <data-input bind="lstHolidayType" ></data-input>
                <data-input bind="txtHolidayComment" ></data-input>
			</data-inputs>
            <data-outputs>
			    <data-output bind="txtResult"></data-output>
			</data-output>
        </dso> 
    </xml> 
</ts-data>

<body>

    <table id="tblMain" cellpadding="0" cellspacing="0" border=0 style="width:100%;height:100%;">
                    <tr style="border:0;width:100%;height:20%" valign="top" >                        
                        <td colspan="20" width=20% align=right><font color=black>Calendar Date</font></td>
		                <td colspan="30" width=30%><ts-datebox id="dtDate" type=0  ></ts-datebox></td>
                        <td colspan="50" width=50% align=right>&nbsp;</td>
                    </tr>
                    <tr style="border:0;width:100%;height:20%" valign="top" >                        
                        <td colspan="20" style="border:0;width:20%" align="right" valign="middle">Holiday Type</td>
                        <td colspan="20" style="border:0;width:20%;color:#3399FF" align="left" valign="middle">
                             <ts-list id="lstHolidayType" style="width:100%" onchange="" displaymember="CODE_NM" valuemember="CODE" emptytext=" " emptyvalue="" emptytextpoint="first" >
                             </ts-list>
                         </td>
                        <td colspan="60" width=60% align=right>&nbsp;</td>
                    </tr>
                    <tr style="border:0;width:100%;height:20%" valign="top" >                        
                        <td colspan="20" style="border:0;width:20%" align="right" valign="middle">Desciption</td>
                        <td colspan="80" style="border:0;width:80%" align="left" valign="middle" >
                            <ts-textbox id="txtHolidayComment" style="width:95%" text="" ></ts-textbox>
                        </td>
                    </tr>
                <tr style="border:0;width:100%;height:20%" valign="top" >
                         <td colspan="10" width="10%" style="border:0;" align="right" >
                            &nbsp;
                        </td>                       
                         <td colspan="30" width="30%" style="border:0;" align="right" >
                            <ts-button img="save" id="btnSave"    alt="Save"  onclick="OnSave()" imgtype="0">Update</ts-button>
                        </td>
                        <td colspan="30" width="30%" style="border:0;" align="right" >
                            <ts-button img="close" id="btnReturn"    alt="Return main form"  onclick="onReturn()" imgtype="0">Return</ts-button>
                        </td>
                        <td colspan="30" width="30%" style="border:0;" align="right" >
                            &nbsp;
                        </td> 
                       
                 </tr> 
                <tr style="border:0;width:100%;height:20%" valign="top" >
                                               
                         
                        <td colspan="100" width="100%" style="border:0;" align="right" >
                            &nbsp;
                        </td> 
                       
                 </tr> 
    </table>

   
   
    
</body>
     <ts-textbox id="txtCompany_PK" style="display:none"></ts-textbox>
    <ts-textbox id="txt_PK" style="display:none"></ts-textbox>
    <ts-textbox id="txtDate" style="display:none"></ts-textbox>
    <ts-textbox id="txtResult" style="display:none"></ts-textbox>
    
</html>
