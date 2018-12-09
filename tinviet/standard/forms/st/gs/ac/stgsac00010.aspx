<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Accounting Common Code</title>
    </head>
<script type="text/javascript">
var bSelect =false;
var bSearch =false;
var codeadmin_yn ='<%=GetSessionCodeAdminYn() %>';
var grdMasterCode_Temp=[];
function BodyInit()
{
    CheckRole();
	var data1 =  <%=TSErpLib.SetListDataSQL("select pk,PARTNER_NAME from tco_company where del_if = 0")%>;
    grdMasterCode.SetColComboData("TCO_COMPANY_PK", data1, "PK", "PARTNER_NAME");
	lstCompany.setDataJson(data1); 
    datMasterCode_Temp.Call('SELECT');
}
//----------------------------------
function CheckRole()
{
    if (codeadmin_yn!=="Y"){
        grdMasterCode.ColHidden('TCO_COMPANY_PK');
        grdMasterCode.SetColEdit('SYS_YN',false);
    }
}
//----------------------------------
function OnToggle(obj)
{
    if (obj==1) //master
    {
        if(imgMaster.status == "expand")
        {
            tblMaster.style.display="none";
            imgMaster.status = "collapse";
            imgMaster.src = "<%=ctx%>system/images/main/down_orange.gif";
            tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblDetail.style.height="95%";
            
        }
        else
        {
            tblMaster.style.display="";
            imgMaster.status = "expand";
            imgMaster.src = "<%=ctx%>system/images/main/up_orange.gif";
            tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblDetail.style.height="45%";
            tblMaster.style.height="50%";
            
        }
    }
    else //detail
    {
        if(imgDetail.status == "expand")
        {
            tblDetail.style.display="none";
            imgDetail.status = "collapse";
            imgDetail.src = "<%=ctx%>system/images/main/down_orange.gif";
            tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblMaster.style.height="95%";
            
            
        }
        else
        {
            tblDetail.style.display="";
            imgDetail.status = "expand";
            imgDetail.src = "<%=ctx%>system/images/main/up_orange.gif";
            tblMain.style.height="100%";
            tblUpper.style.height="5%";
            tblMaster.style.height="50%";
            tblDetail.style.height="45%";
            
        }
    }
}
//---------------------------------------------------------
function OnSearch()
{
    grdMasterCode.ClearData();
    grdDetailCode.ClearData();
    bSearch=true;
	txtMaster_PK.text ="";
	txt_CodeD.text ="";
	lblName.text ="";
	lblRecord_D.text ="0 record(s)";
	lblRecord_M.text ="0 record(s)";	
    datMasterCode.Call("SELECT");
    
}
//----------------------------------------------------------
function OnReport(obj)
{
    /*if (obj==1)
    {}
    else
    */
}
//-----------------------------------------------------------
function OnAddNew(obj)
{
    var inum;
    if (obj==2)
    {
        grdMasterCode.AddRow();
		inum = grdMasterCode.RowCount-1;
		grdMasterCode.SetGridText(inum,'TCO_COMPANY_PK',lstCompany.value);
        grdMasterCode.SetGridText(inum,'USE_YN','Y');
        grdMasterCode.SetGridText(inum,'SYS_YN','N');
    }
    else
    {
        if (txtMaster_PK.text!="")
        {   
            grdDetailCode.AddRow();
            var irow=grdDetailCode.RowCount-1;
            grdDetailCode.SetGridText(irow,1,txtMaster_PK.text);
            if (irow!=1)
                inum=Number(grdDetailCode.GetGridData(irow-1,'ORD'))+1;
            else
                inum=1;
            grdDetailCode.SetGridText(irow,'ORD',inum);
        }
        else
            alert("Please select a code master!");
    }
    
}
//---------------------------------------------------------------
function OnSave(obj)
{
    
        if (obj==2)
        {
            if (checkDupItems(grdMasterCode,2,2) && checkDupItem(grdMasterCode_Temp,grdMasterCode,2))
			{
			    for(i=1;i<grdMasterCode.rows;i++)
			   {
			        if (grdMasterCode.GetGridData(i,'TCO_COMPANY_PK')=="")
			        {
			            grdMasterCode.SetGridText(i,'TCO_COMPANY_PK',lstCompany.value);
			         }
			   } 
                datMasterCode.Call();
			}
        }
        else
        {   
            if (checkNumber() && checkDupItems(grdDetailCode,4,2) )
            {
                inum = 1;
                for(i=1;i<grdDetailCode.rows;i++)
               {
                    if(grdDetailCode.GetGridData(i,1)=="")
                    {
                            grdDetailCode.SetGridText(i,1,txtMaster_PK.text);
                            if (i!=1)
                                inum=Number(grdDetailCode.GetGridData(i-1,2))+1;
                            else
                                inum=1;
                            grdDetailCode.SetGridText(i, 2, inum);
                    }
               } 
                datDetailCode.Call();
              } 
        }
}
//---------------------------------------------------------------
function checkDupItems(obj_grid,obj_col,obj_col_dis)
{
    var ctrl 	= obj_grid.GetGridControl();
    var rownum 	= ctrl.Rows;
    if(rownum == 1)
    {
	    return false;
    }
    var i;
    for(i=1; i<rownum; i++)
    {
        
      for(j=i+1; j<rownum; j++)
      {
  	    var i_code 	= obj_grid.GetGridData(i, obj_col);
	    i_code		= i_code.toUpperCase();
	    var j_code 	= obj_grid.GetGridData(j, obj_col);
	    j_code		= j_code.toUpperCase();
    	
	    if(j_code == i_code)
	    {
		    if(j_code !="" )
		    {
			    alert("Code already in use, please re-enter at row " + (i+1) + " and column " + obj_col_dis );
			    return false;
		    }
	    }
      }	
    }
    return true;
}
//-----------------------------------------------------
function checkDupItem(obj_grd1,obj_grd2,obj_col)
{
   var ctrl 	= obj_grd2.GetGridControl();
   var rownum 	= ctrl.Rows;
   if(rownum == 1)
   		return true;
   var i;
   
   for(i=1; i<rownum; i++)
   {
      	var i_code 	= obj_grd2.GetGridData(i, obj_col);
		i_code		= i_code.toUpperCase();
		
		var ctrl_1	= obj_grd1.GetGridControl();
		var row_1 	= ctrl_1.Rows;
		var cnt = 0;
		 
		for(j=1; j<row_1; j++)
		{
		 	var j_code 	= obj_grd1.GetGridData(j, obj_col);
			j_code		= j_code.toUpperCase();
			
			if(obj_grd1.GetGridData(j, 0) != obj_grd2.GetGridData(i, 0))
			{
			    
				if(j_code == i_code)
				{
					cnt = cnt + 1;
					if(cnt >=1 )
					{
						alert("Code code already in use, please re-enter at rows " + i );
						return false;
					}
				}
			}
	 	}
	}
   	return true;
}
//---------------------------------------------------
function checkNumber()
{
	var ctrl 	= grdDetailCode.GetGridControl();
	var rownum 	= ctrl.Rows;
	
	if(rownum == 1)
	    return false;
	
	var i;
	for(i=1; i<rownum; i++)
	{
	 	for(j=8; j <= 12; j++)
		{
			var ij_num 	= grdDetailCode.GetGridData(i, j);
			ij_num		= ij_num.toUpperCase();
			if (isNaN(ij_num))
			{
				//alert("Please enter is number at col " + (j) + " and row " + (i) );
				//return false;
			}
			
		}	
	}
	for(i=1; i<rownum; i++)
	{
	 	var inum=grdDetailCode.GetGridData(i, 2);
	 	if (isNaN(inum) || Trim(inum)=="")
		{
			//alert("Please enter is number at col 1 " + " and row " + (i) );
			//return false;
		}
		if (Number(inum)<0)
		{
		    //alert("Please enter is number at col 1 " + " and row " + (i) );
			//return false;
		}
		
	}
	return true;
}
//---------------------------------------------------------------
function OnDelete(obj)
{
    if (confirm("Do you want to delete?"))
    {
        if (obj==2)
        {
            grdMasterCode.DeleteRow();
            ibtnDelete_M.SetEnable(false);
	        ibtnUnDelete_M.SetEnable(true);
			datMasterCode.Call();
        }    
        else
        {
            grdDetailCode.DeleteRow();
            ibtnDelete_D.SetEnable(false);
	        ibtnUnDelete_D.SetEnable(true);
			datDetailCode.Call();
        }
    }
    
}
//---------------------------------------------------------------
function OnUnDelete(obj)
{
    if (confirm("Do you want to undelete?"))
    {
        if (obj==2)
        {
            grdMasterCode.UnDeleteRow();
            ibtnDelete_M.SetEnable(true);
	        ibtnUnDelete_M.SetEnable(false);
        }    
        else
        {
            grdDetailCode.UnDeleteRow();
            ibtnDelete_D.SetEnable(true);
	        ibtnUnDelete_D.SetEnable(false);
	    }
        
    }
    
}
//-----------------------------------------------------------------
function OnDataReceive(obj)
{
    if (obj.id=="datMasterCode")
    {
        lblRecord_M.text=grdMasterCode.RowCount + " record(s).";
        //auto_resize_column(grdMasterCode,0,grdMasterCode.cols-1,0);
        
        if (grdMasterCode.RowCount > 0)
        {
            OnSetSysRole();
        }
        if ((bSelect==true) || (bSearch==true))
        {
            if (grdMasterCode.RowCount==1) //have one record
            {
                bSelect=false;
                bSearch=false;
                txtMaster_PK.text=grdMasterCode.GetGridData(0,'PK'); //get pk
                lblRecord_M.text=grdMasterCode.RowCount + " record(s).";
                lblName.text=grdMasterCode.GetGridData(0,'CODE_NM'); //get name 
                OnSetGrid(1);
                datDetailCode.Call("SELECT");  
            }
        }
    }
    else if (obj.id=="datDetailCode")
    {
        lblRecord_D.text=grdDetailCode.RowCount + " record(s).";
        //auto_resize_column(grdDetailCode,0,grdDetailCode.cols-1,0);
        
    }
    else if (obj.id=="datMasterCode_Temp")
    {
       datGetMasterCode.Call();
    }
    else if (obj.id=="datGetMasterCode")
    {
        lblMasterCode.text="   Max ID: " + lblMasterCode.text;
		datMasterCode.Call('SELECT');
    }
}
//-------------------------------------------------
function OnSetSysRole()
{
    for(var i=0;i<grdMasterCode.RowCount;i++)
    {
        //if (grdMasterCode.GetGridData(i,'SYS_YN')==='Y') //sys yn
            //grdMasterCode.SetCellBgColor(i,1,i,16,0xCCFFCC);
    }
    
}
//---------------------------------------------------
function OnSetGrid(obj)
{/*
    var t;
    t=grdMasterCode.GetGridData(obj,6)==""?"NUM1_NAME":grdMasterCode.GetGridData(obj,6);
    //grdDetailCode.rows[8].t);
    t=grdMasterCode.GetGridData(obj,7)==""?"NUM2_NAME":grdMasterCode.GetGridData(obj,7);
    grdDetailCode.SetGridText(0,9,t);
    t=grdMasterCode.GetGridData(obj,8)==""?"NUM3_NAME":grdMasterCode.GetGridData(obj,8);
    grdDetailCode.SetGridText(0,10,t);
    t=grdMasterCode.GetGridData(obj,9)==""?"NUM4_NAME":grdMasterCode.GetGridData(obj,9);
    grdDetailCode.SetGridText(0,11,t);
    t=grdMasterCode.GetGridData(obj,10)==""?"NUM5_NAME":grdMasterCode.GetGridData(obj,10);
    grdDetailCode.SetGridText(0,12,t);
    t=grdMasterCode.GetGridData(obj,11)==""?"CHAR1_NAME":grdMasterCode.GetGridData(obj,11);
    grdDetailCode.SetGridText(0,13,t);
    t=grdMasterCode.GetGridData(obj,12)==""?"CHAR2_NAME":grdMasterCode.GetGridData(obj,12);
    grdDetailCode.SetGridText(0,14,t);
    t=grdMasterCode.GetGridData(obj,13)==""?"CHAR3_NAME":grdMasterCode.GetGridData(obj,13);
    grdDetailCode.SetGridText(0,15,t);
    t=grdMasterCode.GetGridData(obj,14)==""?"CHAR4_NAME":grdMasterCode.GetGridData(obj,14);
    grdDetailCode.SetGridText(0,16,t);
    t=grdMasterCode.GetGridData(obj,15)==""?"CHAR5_NAME":grdMasterCode.GetGridData(obj,15);
    grdDetailCode.SetGridText(0,17,t);*/
}
//----------------------------------------------------
function ShowDetail(sender, event)
{
    if (grdMasterCode.isRowDeleted(event.row))
    {
        ibtnAdd_D.SetEnable(false);
        ibtnSave_D.SetEnable(false);
        ibtnDelete_D.SetEnable(false);
        ibtnUnDelete_D.SetEnable(false);
        grdDetailCode.ClearData();
        txtMaster_PK.text="";
    }
    var icol,irow,iflag;
    icol=grdMasterCode.col;
    irow=grdMasterCode.row;
    txtMaster_PK.text=grdMasterCode.GetGridData(event.row,'PK'); //get pk
    lblName.text=grdMasterCode.GetGridData(event.row,'CODE_NM'); //get name
    iflag=grdMasterCode.GetGridData(event.row,'SYS_YN'); //get sys yn
    if (iflag==0 || codeadmin_yn =="Y") 
        SetEditGrid(true);
    else
        SetEditGrid(false);
    OnSetGrid(event.row);
    datDetailCode.Call("SELECT");  
    
}
//-----------------------------------------------------
function SetEditGrid(bflag)
{
    grdDetailCode.SetColEdit(2,bflag);
    grdDetailCode.SetColEdit(4,bflag);
    for (var i=8;i<=19;i++)
    {
        grdDetailCode.SetColEdit(i,bflag);
    }
    ibtnAdd_D.SetEnable(bflag);
    ibtnSave_D.SetEnable(bflag);
    ibtnDelete_D.SetEnable(bflag);
}
//-----------------------------------------------------
function CheckButton(obj)
{
    
    if (obj.id=="grdMasterCode")
    {
        var ctrl 	= grdMasterCode.GetGridControl();
        var rownum 	= ctrl.Row;
        var rownums 	= ctrl.Rows;
        
        if(rownum > 0 && rownums>1)
        {
            if(grdMasterCode.GetRowStatus(rownum) >= 64)
            {
	                ibtnDelete_M.SetEnable(false);
	                ibtnUnDelete_M.SetEnable(true);
            }
            else
            {
	                ibtnDelete_M.SetEnable(true);
	                ibtnUnDelete_M.SetEnable(false);
            }
        }
    }
    else if (obj.id=="grdDetailCode")
    {
        var ctrl 	= grdDetailCode.GetGridControl();
        var rownum 	= ctrl.Row;
        var rownums 	= ctrl.Rows;
        if(rownum > 0 && rownums>1)
        {
	    
            if(grdDetailCode.GetRowStatus(rownum) >= 64)
            {
	                ibtnDelete_D.SetEnable(false);
	                ibtnUnDelete_D.SetEnable(true);
            }
            else
            {
	                ibtnDelete_D.SetEnable(true);
	                ibtnUnDelete_D.SetEnable(false);
            }
        }
		if (grdDetailCode.selrow >=1 && event.col == 3)
		{
		  
			for(i=1;i<grdDetailCode.rows;i++)
			{
				grdDetailCode.SetGridText( i , 3, "0");
			}
			grdDetailCode.SetGridText( grdDetailCode.selrow , 3, "-1");
		}
    }
}
//-------------------
function auto_resize_column(obj,col1,col2,font_size)
{
  if(font_size!=0)
        obj.GetGridControl().FontSize =font_size;   
  obj.GetGridControl().AutoSize(col1,col2,false,0);  
}

function onChangeCompany()
{
	bSelect =false;
	txtMaster_PK.text ="";
	lblName.text ="";
	lblRecord_D.text ="0 record(s)";
	lblRecord_M.text ="0 record(s)";
	grdMasterCode.ClearData();
    grdDetailCode.ClearData();
    bSearch=true;
	datMasterCode.Call("SELECT");
}
function OnDataError(obj)
{
	if (obj.id=="datMasterCode")
    {
		alert("Please delete all detail code first!");
		return;
	}
}
</script>
<body style="margin-top:0">
<!---------------------------------------------------------->
<ts-data id="datMasterCode_Temp" onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso type="grid" function="ac_SEL_60010050_ACNTCOMM_M" > 
            <data-inputs bind="grdMasterCode_Temp">
                <data-input bind="txtID_Temp" ></data-input>
                <data-input bind="txtName_Temp"></data-input>
                <data-input bind="lstCompany"></data-input>
            </data-inputs>
            <data-outputs bind="grdMasterCode_Temp" ></data-outputs>
        </dso> 
    </xml> 
</ts-data>

<!------------------data control--------------------------->
<ts-data id="datMasterCode" onreceive="OnDataReceive(this)" onerror="OnDataError(this)"> 
        <xml> 
            <dso  type="grid"  parameter="PK,ID,CODE_NM,USE_YN,REMARK,NUM1NN,NUM2NN,NUM3NN,NUM4NN,NUM5NN,CHA1NM,CHA2NM,CHA3NM,CHA4NM,CHA5NM,SYS_YN,TCO_COMPANY_PK" function="SEL_stgsac00010_01" procedure="UPD_stgsac00010_01"> 
                <data-inputs bind="grdMasterCode" >
                    <data-input bind="txtID" ></data-input>
                    <data-input bind="txtName" ></data-input>
					<data-input bind="lstCompany"></data-input>
                </data-inputs>
                <data-outputs  bind="grdMasterCode"></data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!------------------data control--------------------------->
<ts-data id="datGetMasterCode" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="process"  procedure="ac_PRO_60010050_COMMCODE_MT"> 
                <data-inputs>
                    <data-input  bind="lblMasterCode"></data-input>
					<data-input  bind="lstCompany" ></data-input>
                </data-inputs>
                <data-outputs>
                    <data-output bind="lblMasterCode"></data-output>
                </data-outputs>
            </dso> 
        </xml> 
</ts-data>
<!---------------------------------------------------------->
<ts-data id="datDetailCode" onreceive="OnDataReceive(this)" onerror="OnDataError(this)"> 
        <xml> 
            <dso  type="grid"  parameter="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19" function="SEL_stgsac00010_02" procedure="UPD_stgsac00010_02"> 
                <data-inputs bind="grdDetailCode" >
                    <data-input bind="txtMaster_PK" ></data-input>
                    <data-input bind="txt_CodeD" ></data-input>                    
                </data-inputs>
                <data-outputs  bind="grdDetailCode" ></data-outputs>
            </dso> 
        </xml> 
</ts-data>

<!------------------table--------------------------->
   <table width="100%" id="tblMain" cellpadding="0" cellspacing="0" border=1 style="width:100%;height:100%;">
        <tr style="width:100%;height:1px" valign="top">
            <td>
               <table width="100%"  id="tblUpper" style="height:5%" border=1 cellpadding="0" cellspacing="0">
                    <tr style="border:0;width:100%;height:100%" valign="" >
						<td width="10%" valign='center' align="right" >Company</td>
						<td width="20%" >
							<ts-list id="lstCompany" style="width:100%;display:;" onchange="onChangeCompany()" displaymember="PARTNER_NAME" valuemember="PK" ></ts-list>
                        </td>
                        <td width="10%" style="border:0;" align="right" valign="middle">ID
                        </td>
                        <td width="20%" style="border:0;" align="" valign="middle" >
                            <ts-textbox id="txtID" text="" onenterkey="OnSearch()"></ts-textbox>
                        </td>
                        <td width="10%" style="border:0;" align="right" valign="middle"> Name
                        </td>
                        <td  style="border:0;width:30%" align="" valign="middle">
                            <ts-textbox id="txtName" text="" onenterkey="OnSearch()"></ts-textbox>
                        </td>
                        <td width="" style="border:0;" align="right" >
                         <ts-button img="search" id="ibtnSearch"   alt="search"  onclick="OnSearch()" imgtype="0">Search</ts-button>
                        </td>
                        <td width="" style="border:0;" align="right" >
                         <ts-button img="excel" id="ibtnPrint"   alt="Detail printer"  style="display:none;" onclick="OnReport(1)" imgtype="0">Excel</ts-button>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
       <tr style="width:100%;height:50%" valign="top">
           <td style="width:100%;height:50%">
               <table width="100%" id="tblMaster" style="height:100%" border=1 cellpadding="0" cellspacing="0" >
                    <tr style="border:0;width:100%;height:1px" valign="middle" >
                        <td width="1%" style="border:0;" align="left" >
                                <img status="expand" id="imgMaster" src="<%=ctx %>system/images/main/up_orange.gif" style="cursor:pointer;" onclick="OnToggle(1)"  /> 
                            </td>
                        <td width="60%" style="border:0;" align="left" >
                            <ts-label img="new" id="lblMasterCode"  style="font-weight:bold;color:#FF3399;font-size:12"  text=""/>
                        </td>
                        <td width="20%" style="border:0;" align="right" >
                            <ts-label img="new" id="lblRecord_M"  style="font-weight:bold;color:red;font-size:12"  text="0 record(s)"></ts-label>
                        </td>
                        <td width="8%" style="border:0;" align="right" >
                            <ts-button img="new" id="ibtnAdd_M"   alt="Add"  onclick="OnAddNew(2)" imgtype="0">Add</ts-button>
                        </td>
                        <td width="3%" style="border:0;" align="right" >
                            <ts-button img="save" id="ibtnSave_M"    alt="Save"  onclick="OnSave(2)" imgtype="0">Save</ts-button>
                        </td>
                        <td width="3%" style="border:0;" align="right" >
                            <ts-button img="delete" id="ibtnDelete_M"    alt="Delete"  onclick="OnDelete(2)" imgtype="0">Delete</ts-button>
                        </td>
                        <td width="3%" style="border:0;" align="right" >
                            <ts-button img="undo" id="ibtnUnDelete_M"    alt="UnDelete"  onclick="OnUnDelete(2)" imgtype="0">Undelete</ts-button>
                        </td>
                        <td width="3%" style="border:0" align="right">
                            <ts-button img="excel" id="ibtnPrinter_M"    alt="Master Report" style="display:none;"  onclick="OnReport(2)" imgtype="0">Excel</ts-button>
                        </td>
                    </tr>
                    
                    <tr style="border:1px;width:100%;height:100%" valign="top">
                        <td colspan="8" style="width:100%;height:100%;"> 
                             <ts-grid id="grdMasterCode" frozenColumns="USE_YN" rowClick="ShowDetail(sender,event);">
                                 <columns>
                                     <column text="PK" datafield="PK" columntype="textbox" width="100" hidden="true"></column>
                                     <column text="ORD" datafield="ROWNUM" columntype="textbox" width="40"></column>
                                     <column text="ID" datafield="ID" columntype="textbox" width="80" cellsalign="center"></column>
                                     <column text="NAME" datafield="CODE_NM" columntype="textbox" width="300"></column>
                                     <column text="USE" datafield="USE_YN" columntype="checkbox" width="40" cellsalign="center"></column>
                                     <column text="REMARK" datafield="REMARK" columntype="textbox" width="200"></column>
                                     <column text="NUM 1 Name" datafield="NUM1NN" columntype="textbox" width="150"></column>
                                     <column text="NUM 2 Name" datafield="NUM2NN" columntype="textbox" width="150"></column>
                                     <column text="NUM 3 Name" datafield="NUM3NN" columntype="textbox" width="150"></column>
                                     <column text="NUM 4 Name" datafield="NUM4NN" columntype="textbox" width="150"></column>
                                     <column text="NUM 5 Name" datafield="NUM5NN" columntype="textbox" width="150"></column>
                                     <column text="CHA 1 Name" datafield="CHA1NM" columntype="textbox" width="150"></column>
                                     <column text="CHA 2 Name" datafield="CHA2NM" columntype="textbox" width="150"></column>
                                     <column text="CHA 3 Name" datafield="CHA3NM" columntype="textbox" width="150"></column>
                                     <column text="CHA 4 Name" datafield="CHA4NM" columntype="textbox" width="150"></column>
                                     <column text="CHA 5 Name" datafield="CHA5NM" columntype="textbox" width="150"></column>
                                     <column text="SYS" datafield="SYS_YN" columntype="checkbox" width="40" cellsalign="center"></column>
                                     <column text="COMPANY" datafield="TCO_COMPANY_PK" columntype="combobox" width="150"></column>
                                 </columns>
                             </ts-grid>
                         </td>
                    </tr>
               </table>
           </td>
       </tr>
       <tr style="width:100%;height:50%" valign="top">
           <td>
               <table width="100%" id="tblDetail" style="height:100%" border=1 cellpadding="0" cellspacing="0">
                    <tr style="border:0;width:100%;height:1px" valign="center" >
                        <td style="border:0;width:1%">
                            <img status="expand" id="imgDetail" src="<%=ctx %>system/images/main/up_orange.gif" style="cursor:pointer;" onclick="OnToggle(2)"  /> 
                        </td>
                         <td style="border:0;width:20%" align="center" valign="middle">
                             <b style="color:#3399FF">DETAIL INFO</b>
                        </td>
                        <td style="border:0;width:10%" align="right" valign="middle">
                            Code:
                        </td>
                        <td  style="border:0;width:10%" align="left" valign="middle">
                           <ts-textbox style="color:red;font-weight:bold"  id="txt_CodeD"   text=""></ts-textbox>
                        </td>
                        <td style="border:0;width:10%" align="right" valign="middle">
                            <b>Name:&nbsp;</b>
                        </td>
                        <td  style="border:0;width:20%" align="left" valign="middle">
                           <ts-label style="color:red;font-weight:bold; white-space:nowrap;" id="lblName"   text=""></ts-label>
                        </td>
                        <td width="10%" style="border:0;" align="right" >
                            <ts-label id="lblRecord_D"  style="font-weight:bold;color:red;font-size:12pt" text="0 record(s)"/>
                        </td>
                        <td width="11%" style="border:0;" align="right" >
                            <ts-button img="new" id="ibtnAdd_D"   alt="Add"  onclick="OnAddNew(3)" imgtype="0">Add</ts-button>
                        </td>
                         <td width="3%" style="border:0;" align="right" >
                             <ts-button img="save" id="ibtnSave_D"    alt="Save"  onclick="OnSave(3)" imgtype="0">Save</ts-button>
                        </td>
                        <td width="3%" style="border:0;" align="right" >
                            <ts-button img="delete" id="ibtnDelete_D"    alt="Delete"  onclick="OnDelete(3)" imgtype="0">Delete</ts-button>
                        </td>
                        <td width="3%" style="border:0;" align="right" >
                            <ts-button img="undo" id="ibtnUnDelete_D"    alt="UnDelete"  onclick="OnUnDelete(3)" imgtype="0">UnDelete</ts-button>
                        </td>                        
                    </tr>                    
                    <tr style="border:1;width:100%;height:100%" valign="top">
                        <td colspan="11" style="width:100%;height:100%;"> 
                             <ts-grid id="grdDetailCode" frozenColumns="CODE_LNM">
                                 <columns>
                                     <column text="ORD" datafield="ORD" columntype="textbox" width="40"></column>
                                     <column text="DEF" datafield="DEF_YN" columntype="checkbox" width="40" cellsalign="center"></column>
                                     <column text="CODE" datafield="CODE" columntype="textbox" width="80" cellsalign="center"></column>
                                     <column text="NAME" datafield="CODE_NM" columntype="textbox" width="250"></column>
                                     <column text="LNAME" datafield="CODE_LNM" columntype="textbox" width="250"></column>
                                     <column text="KNAME" datafield="CODE_FNM" columntype="textbox" width="250"></column>
                                     <column text="NUM 1 Name" datafield="NUM_1" columntype="textbox" width="150"></column>
                                     <column text="NUM 2 Name" datafield="NUM_2" columntype="textbox" width="150"></column>
                                     <column text="NUM 3 Name" datafield="NUM_3" columntype="textbox" width="150"></column>
                                     <column text="NUM 4 Name" datafield="NUM_4" columntype="textbox" width="150"></column>
                                     <column text="NUM 5 Name" datafield="NUM_5" columntype="textbox" width="150"></column>
                                     <column text="CHA 1 Name" datafield="CHA_1" columntype="textbox" width="150"></column>
                                     <column text="CHA 2 Name" datafield="CHA_2" columntype="textbox" width="150"></column>
                                     <column text="CHA 3 Name" datafield="CHA_3" columntype="textbox" width="150"></column>
                                     <column text="CHA 4 Name" datafield="CHA_4" columntype="textbox" width="150"></column>
                                     <column text="CHA 5 Name" datafield="CHA_5" columntype="textbox" width="150"></column>
                                     <column text="USE" datafield="USE_YN" columntype="checkbox" width="40" cellsalign="center"></column>
                                     <column text="REMARK" datafield="REMARK" columntype="textbox" width="150"></column>
                                 </columns>
                             </ts-grid>
                        </td>
                    </tr>
               </table>
           </td>
       </tr>
    </table> 
<ts-textbox id="txtMaster_PK" style="display:none" text="" ></ts-textbox>
<ts-textbox id="txtID_Temp" style="display:none" text="" ></ts-textbox>	
<ts-textbox id="txtName_Temp" style="display:none" text=""></ts-textbox>
<ts-textbox id="txtExistMaster" style="display:none" text=""></ts-textbox>
<ts-grid    id="grdMasterCode_Temp" style="display:none">
    <columns>
        <column text="PK" datafield="PK" columntype="textbox" width="100" hidden="true"></column>
        <column text="ORD" datafield="ROWNUM" columntype="textbox" width="100"></column>
        <column text="ID" datafield="ID" columntype="textbox" width="150"></column>
        <column text="NAME" datafield="CODE_NM" columntype="textbox" width="200"></column>
        <column text="USE" datafield="USE_YN" columntype="checkbox" width="90"></column>
        <column text="REMARK" datafield="REMARK" columntype="textbox" width="200"></column>
        <column text="NUM 1 Name" datafield="NUM1NN" columntype="textbox" width="150"></column>
        <column text="NUM 2 Name" datafield="NUM2NN" columntype="textbox" width="150"></column>
        <column text="NUM 3 Name" datafield="NUM3NN" columntype="textbox" width="150"></column>
        <column text="NUM 4 Name" datafield="NUM4NN" columntype="textbox" width="150"></column>
        <column text="NUM 5 Name" datafield="NUM5NN" columntype="textbox" width="150"></column>
        <column text="CHA 1 Name" datafield="CHA1NM" columntype="textbox" width="150"></column>
        <column text="CHA 2 Name" datafield="CHA2NM" columntype="textbox" width="150"></column>
        <column text="CHA 3 Name" datafield="CHA3NM" columntype="textbox" width="150"></column>
        <column text="CHA 4 Name" datafield="CHA4NM" columntype="textbox" width="150"></column>
        <column text="CHA 5 Name" datafield="CHA5NM" columntype="textbox" width="150"></column>
        <column text="SYS" datafield="SYS_YN" columntype="checkbox" width="70"></column>
        <column text="COMPANY" datafield="TCO_COMPANY_PK" columntype="combobox" width="150"></column>
    </columns>
</ts-grid>

 </body>
</html>