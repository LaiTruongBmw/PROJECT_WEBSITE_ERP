<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
 <html>
 <head>
    <title>Get Code</title>

 <script>
var flag=0; //chua co modify thong tin
var bAdd=false;

var init_from;
function BodyInit()
{
   txtCode.text = "<%=Request.Params["code"]%>";
   txtCode.SetEnable(false);
   OnSearch();
}

//--------------------------------
function OnSearch()
{
	dso_grd_hrco00500_0.Call("SELECT");
}

//------------------------------------------------------
function OnAddClick()
{
    if (txtCodeGrp_PK.text!="")
    {
        grdDetailCode.AddRow();
        var irow=grdDetailCode.rows-1;
        grdDetailCode.GetGridControl().TopRow=irow;
        grdDetailCode.SetGridText(irow,1,txtCodeGrp_PK.text);
        if (irow!=1)
            inum=Number(grdDetailCode.GetGridData(irow-1,2))+1;
        else
            inum=1;
        grdDetailCode.SetGridText(irow,2,inum);
	}
	else
	    alert((v_language =="ENG")?"Please search a code":"Bạn hãy nhập mã");
}
//---------------------------------------------------------------
function OnUpdateClick()
{
    if (confirm((v_language =="ENG")?"Do you want to save?":"Bạn chắc chắn lưu dữ liệu?"))
    {
        if (checkNumber() && checkDupItems(grdDetailCode,3,2) )
            flag=1;
            datDetailCode.Call();
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
			    alert((v_language =="ENG")?"Code already in use, please re-enter at row " + (i+1) + " and column " + obj_col_dis:"Mã đã được sử dụng, hãy nhập lại ở dòng " + (i+1) + ", cột " + obj_col_dis );
			    return false;
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
	
	if(rownum == 1)return false;
	
	var i;
	for(i=1; i<rownum; i++)
	{
	 	for(j=7; j <= 11; j++)
		{
			var ij_num 	= grdDetailCode.GetGridData(i, j);
			ij_num		= ij_num.toUpperCase();
			if (isNaN(ij_num))
			{
				alert((v_language =="ENG")?"Please enter is number at col " + (i) + " and row " + (j-1) : "Hãy nhập kiểu dữ liệu số ở cột " + (i) + " , dòng " + (j-1) );
				return false;
			}
			
		}	
	}
	for(i=1; i<rownum; i++)
	{
	 	var inum=grdDetailCode.GetGridData(i, 2);
	 	if (isNaN(inum) || Trim(inum)=="")
		{
			alert((v_language =="ENG")?"Please enter is number at col 1 " + " and row " + (i) : "Hãy nhập kiểu dữ liệu số ở cột 1 , dòng " + (i) );
			return false;
		}
		if (Number(inum)<0)
		{
		    alert((v_language =="ENG")?"Please enter is number at col 1 " + " and row " + (i) : "Hãy nhập kiểu dữ liệu số ở cột 1 , dòng " + (i));
			return false;
		}
		
	}
	return true;
}

//--------------------------------

function OnDataReceive(obj)
{
    
    if (obj.id=="datCodeGrp")
    {
       
       if (txtCodeGrp_PK.text=="")
            alert((v_language =="ENG")?"Can't find code group like this!Please input another.":"Không tìm thấy nhóm mã trên!Hãy nhập mã khác.");
       else
       {
            if (rdoKIND.value==1)
               txtCode.text=txtCode_CODEGRP.text;
            else
                txtCode.text=txtCode_CODEGRP_NM.text;
            datDetailCode.Call("SELECT");
            
       }
    }    
    else if (obj.id=="datDetailCode")
    {
        lblRecord.text=grdDetailCode.rows-1 + " record(s).";
        auto_resize_column(grdDetailCode,0,grdDetailCode.cols-1,0);
    }
   
}
//---------------------------------------------------
function auto_resize_column(obj,col1,col2,font_size)
{
    if(font_size!=0)
        obj.GetGridControl().FontSize =font_size;   
  obj.GetGridControl().AutoSize(col1,col2,false,0);  
}
//------------------------------------------------
function OnCloseClick()
{
   
	var obj=new Array();
    obj[0]=flag;
    obj[1]=0;
	window.returnValue = obj; 
	window.close();
}
//-----------------------------------------------------
function CheckButton(obj)
{
    var ctrl 	= grdDetailCode.GetGridControl();
    var rownum 	= ctrl.Row;
    var rownums 	= ctrl.Rows;
    if(rownum > 0 && rownums>1)
    {
    
        if(grdDetailCode.GetRowStatus(ctrl.Row) >= 64)
        {
                ibtnDelete.SetEnable(false);
                ibtnDelete1.SetEnable(true);
        }
        else
        {
                ibtnDelete.SetEnable(true);
                ibtnDelete1.SetEnable(false);
        }
    }
}
//-------------------------
function ExitOnClick()
{
   // alert("1");
	OnCloseClick()
}
//--------------------------
function OnSelectClick(objGrid,event)
{
  
    var arr_data = new Array();
    var l_sel_row=event.row;
   
    if (grdDetailCode.RowCount >= 1)
    {
	   arr_data[0]= txtCode.text;
       arr_data[1] = grdDetailCode.GetGridData(l_sel_row, 'CODE'); 
    }
   
	System.setDataParam(arr_data);
    System.ClosePopup(window);
}

 </script>
</head>
<ts-data id="dso_grd_hrco00500_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="PK,MASTER_PK,SEQ,CODE,CODE_NM,CODE_KNM,CODE_FNM,NUM1NN,NUM2NN,NUM3NN,NUM4NN,NUM5NN,NUM6NN,NUM7NN,NUM8NN,CHA1NM,CHA2NM,CHA3NM,CHA4NM,CHA5NM,CHA6NM,CHA7NM,CHA8NM,USE_YN,REMARK,COMPANY" 
                  function="ST_HR_SEL_GRD_HRCO00500_0" 
                  procedure="ST_HR_UPD_GRD_HRCO00500_0">
                <data-inputs bind="grdDetailCode">
                    <data-input bind="txtCode"></data-input>
                </data-inputs>
                <data-outputs  bind="grdDetailCode"></data-outputs>
            </dso> 
        </xml> 
</ts-data> 
<body bgcolor='#FFFFFF' style="overflow:hidden;">
<!---------------------------------------------------------->

<!-- MainTable -->
<table cellpadding="0" cellspacing="0" border="0" style="width:100%;height:100%">
	<tr style="width:100%;height:100%" cellpadding="0" cellspacing="0" valign="top">
	    <td>
	        <table border="0" cellpadding="0" cellspacing="0"  style="height:100%" width="100%">
                <tr style="width:100%;height:5%;border:0" valign="middle" cellpadding="0" cellspacing="0">
					<td colspan=100 width="100%">
						<table border="0" cellpadding="0" cellspacing="0"  style="height:100%" width="100%">
							<tr>
								<td style="width:10%;border:0;white-space:nowrap" align="center">
									Code 
								</td>						
								<td width="30%" valign="middle" style="border:0;padding-left:3px">
									<ts-textbox id="txtCode"  csstype="mandatory" style='width:95%' onenterkey ="OnSearch()" />
								</td>
								<td width="5%" align="center" style="border:0"><ts-label img="new" id="lblRecord"  style="font-weight:bold;color:red;font-size:12 "  text="0 record(s)"/></td>
								<td width="5%"  ><ts-button img="search" id="ibtnSearch" text="search" onclick="OnSearch()" imgtype="0">Search</ts-button> </td>
								<td width="5%"  ><ts-button img="new" text="Add New"      id="ibtnAdd" 	onclick="OnAddClick()" imgtype="0"> Insert </ts-button></td>					
								<td width="5%"  ><ts-button img="save" text="Save"        id="ibtnUpdate" 	onclick="OnUpdateClick()" imgtype="0"> Save </ts-button></td>
								<td width="5%" ><ts-button img="select" text="Select"     id="ibtnSelect" 	onclick="OnSelectClick()" imgtype="0"> Select </ts-button> </td>
								<td width="5%" ><ts-button img="close" text="Close"     id="ibtnClose" 	onclick="OnCloseClick()" imgtype="0"> Close </ts-button></td>
							</tr>
							
						</table>
					</td>
	            </tr>
            	<tr style="width:100%;height:95%;border:0" valign=top >
		            <td colspan=100 width="100%">
				        <ts-grid id="grdDetailCode"  rowDblClick=OnSelectClick(sender,event) >
                                 <columns>
                                     <column text="PK"         datafield="PK"         columntype="textbox" width="100" hidden="true"></column>
                                     <column text="Master PK"  datafield="MASTER_PK"  columntype="textbox" width="100" hidden="true"></column>
                                     <column text="SEQ"        datafield="SEQ"        columntype="textbox" width="50"></column>
                                     <column text="CODE"       datafield="CODE"       columntype="textbox" width="50"></column>
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

</body>
<ts-textbox id="txtCodeGrp_PK"  style="display:none" />
    <ts-textbox id="txtCode_CODEGRP"  style="display:none" />
    <ts-textbox id="txtCode_CODEGRP_NM"  style="display:none" />
    <ts-textbox id="txtCode_CODE" style="display:none"/>
    <ts-textbox id="txtCode_CODE_NM" style="display:none"/>
    <ts-textbox id="txtFlag" style="display:none"/>
	<ts-textbox id="txtControl" style="display:none"/>
</html>
