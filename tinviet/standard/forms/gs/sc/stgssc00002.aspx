<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>CODE</title>
<script>
//test svn
var addFlag = 'F';
var codeadmin_yn;

//codeadmin_yn="Y";
function BodyInit()
{
    ibtnUpdate.SetEnable(false);
	ibtnAdd.SetEnable(false);
	ibtnDelete.SetEnable(false);
	ibtnUnDelete.SetEnable(false);
	
	if(codeadmin_yn == "Y")
	{
		icoMaster.SetEnable(false)
		//idData_Dsql_TCode_MST.Call('SELECT');
	}
	else
	{
		icoMaster.SetEnable(true)
		//idData_Dsql_TCode_MST_SYS.Call('SELECT');
	}
	codeadmin_yn =System.getSessionCodeAdminYn();
	txtInput_SYS.text=codeadmin_yn;
	datCodeGroupTree.Call("SELECT");	
}
//------------------------------------------------------
function checkItemLength()
{
    var ctrl 	= grdDTL.GetGridControl();
    var rownum 	= ctrl.Rows;

    if(rownum == 1)return false;

    var i;
    for(i=1; i<rownum; i++)
    {
	    if(grdDTL.GetGridData(i, 0) != "")
	    {
		    if(grdDTL.GetGridData(i, 2)==""  )
		    {
			    alert("Please enter ORD at row " + i + " ...");
			    return false;
		    }
		    if(grdDTL.GetGridData(i, 4)==""  )
		    {
			    alert("Please enter Code at row " + i + " ...");
			    return false;
		    }
		    else
		    {
			    if(grdDTL.GetGridData(i, 5)=="" )
			    {
				    alert("Please enter Code Name at row " + i + " ...");
				    return false;
			    }
		    }
		    if(grdDTL.GetGridData(i, 4).length > txtCODE_LEN.GetData())
		    {
			    alert("Please enter Code length at row " + i + " less or equal " + txtCODE_LEN.GetData() + " character ...");
			    return false;
		    }
    		
	    }
	    else
	    {
		    if(grdDTL.GetGridData(i, 4)!=""  )
		    {
			    if(grdDTL.GetGridData(i, 5)=="" )
			    {
				    alert("Please enter Code Name at row " + i + " ...");
				    return false;
			    }
			    if(grdDTL.GetGridData(i, 4).length > txtCODE_LEN.GetData())
			    {
				    alert("Please enter Code length at row " + i + " less or equal " + txtCODE_LEN.GetData() + " character ...");
				    return false;
			    }
			    if(grdDTL.GetGridData(i, 2)==""  )
			    {
				    alert("Please enter ORD at row " + i + " ...");
				    return false;
			    }
		    }
	    }
    }
    return true;
}
//------------------------------------------------------
function checkNumber()
{
	var ctrl 	= grdDTL.GetGridControl(); 
	var rownum 	= ctrl.Rows;
	
	if(rownum == 1)return false;
	
	var i;
	for(i=1; i<rownum; i++)
	{
	 	for(j=11; j <= 13; j++)
		{
			var ij_num 	= grdDTL.GetGridData(i, j);
			ij_num		= ij_num.toUpperCase();
			if (isNaN(ij_num))
			{
				alert("Please enter is number at col " + i + " and " + j);
				return false;
			}
			if (parseInt(ij_num) < -1)
			{
				alert("Please enter is number >= -1 at col " + i + " and " + j);
				return false;
			}
		}	
	}
	return true;
}
//------------------------------------------------------
function checkDupItems()
{
    var ctrl 	= grdDTL.GetGridControl();
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
  	    var i_code 	= grdDTL.GetGridData(i, 4);
	    i_code		= i_code.toUpperCase();
	    var j_code 	= grdDTL.GetGridData(j, 4);
	    j_code		= j_code.toUpperCase();
    	
	    if(j_code == i_code)
	    {
		    if(j_code == "" ){	}
		    else
		    {
			    alert("Code already in use, please re-enter at rows " + i + " and " + j);
			    return false;
		    }
	    }
      }	
    }
    return true;
}
//-----------------------------------------------------
function checkDupItem()
{
   var ctrl 	= grd3.GetGridControl();
   var rownum 	= ctrl.Rows;
   if(rownum == 1)
   		return true;
   var i;
   
   for(i=1; i<rownum; i++)
   {
      	var i_code 	= grd3.GetGridData(i, 4);
		i_code		= i_code.toUpperCase();
		
		var ctrl_1	= grdDTL.GetGridControl();
		var row_1 	= ctrl_1.Rows;
		var cnt = 0;
		for(j=1; j<row_1; j++)
		{
			var j_code 	= grdDTL.GetGridData(j, 4);
			j_code		= j_code.toUpperCase();
			
			if(grdDTL.GetGridData(j, 1) == grd3.GetGridData(i, 1))
			{
				if(j_code == i_code)
				{
					cnt = cnt + 1;
					if(cnt >=2 )
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
//------------------------------------------------------
function TabPopUp(fnameFile)
{
	var fpath =  "forms/st/gs/sc/" + fnameFile  ;
	System.OpenModal(  fpath , 800, 600 , "Select Absence Type", document, callBack);

	//var url = "/system/index.gw?openType=F&objId=steapustchea0006&rowIndex=" + rowIndex + "&p=abs_type&tab=" + currentType;

}
function callBack() {
			var param = System.getDataParam();
			if (param != null && param != "") {
			}
		}
//------------------------------------------------------
function treeItemOnclick()
{
    var obj = treMaster.GetSelectedItem();	
	txtInput_PK.value = obj.PK;
	datCode_MST_Value.Call("SELECT");
	datCode_DTL_lChkUnique.Call('SELECT');
	txtInput_USEYN.SetDataText("1");
	    datCode_dMSTs.Call("SELECT");
	    
}
//------------------------------------------------------
function OnRecv_Value()
{
    idData_Dsql_Code_DTL_Value.Call("SELECT"); 
}
//------------------------------------------------------
function AddOnClick()
{
    
    if(txtInput_PK.GetData() == "")
    {
		alert("Please select one group name")
	}
	else
	{
		if(txtInput_USEYN.GetData() == 0)
		{
			
			var control = grdDTL.GetGridControl();
			grdDTL.AddRow();
			var row = control.Rows  - 1;
			grdDTL.SetGridText( row , 1, txtInput_PK.GetData());
			preparedModify();
			
			
		}
		else
		{
			txtInput_USEYN.SetDataText("0");
			addFlag = "T";
			OnChange_Use();
		}
	}
}
function preparedModify()
{
	var ipos = 1 ;
	var jpos = 10;
	for (i=1; i<grdDTL.rows; i++)
	{
		if(grdDTL.GetRowStatus(ipos) != 64)
		{
		    
			grdDTL.SetGridText( ipos, 2, jpos  );
			jpos = jpos+10;
		}
		ipos ++;
	}	
	
}
//--------------------------------------------------------
//--------------------------------
function DeleteOnClick()
{
    if(confirm("Do you want to delete?"))
    {    
        grdDTL.DeleteRow();
        ibtnDelete.SetEnable(false);
		ibtnUnDelete.SetEnable(true);
    }
        
}
//--------------------------------------------------------
function UnDeleteOnClick()
{
    if(confirm("Do you want to undelete?"))
    {
        grdDTL.UnDeleteRow();
        ibtnDelete.SetEnable(true);
		ibtnUnDelete.SetEnable(false);
    }    
}

//-----------------------------------------------------------
function UpdateOnClick()
{
    if(checkItemLength() && checkDupItems() && checkDupItem() && checkNumber()   && checkORD())
	{
		datCode_DTLs.Call(); 
	}	
		
}
//------------------------------------------------------
function checkORD()
{
	var ctrl	= grdDTL.GetGridControl();
	var row 	= ctrl.Rows;
	var cnt = 0;
	if(ctrl.Row >1 )
	{
		for(i=1; i<row; i++)
		{
			var data = grdDTL.GetGridData(i, 2);
			if(isNaN(data))
			{
				alert("Please enter at col " + i + " and " + j + " is number");
				return false;
			}
			if (parseInt(data) < 0)
			{
				alert("Please enter at col " + i + " and " + j + " is number");
				return false;
			}
		}
	}
	return true;
}
//------------------------------------------------------
function checkData()
{
	var ctrl 	= grdDTL.GetGridControl();
	var rownum 	= ctrl.Row;
	var rownums 	= ctrl.Rows;
	if(rownum < 0){
		if(rownums > 1){}
	}
	else
	{
		if(codeadmin_yn == "Y")
		{
			if(txtDTL_TYPE.GetData() == 1) {
				ibtnUpdate.SetEnable(false);
				ibtnAdd.SetEnable(false);
				ibtnDelete.SetEnable(false);
				ibtnUnDelete.SetEnable(false);
			}
			else
			{
				ibtnUpdate.SetEnable(true);
				ibtnAdd.SetEnable(true);
				if(grdDTL.GetRowStatus(ctrl.Row) >= 64)
				{
					ibtnDelete.SetEnable(false);
					ibtnUnDelete.SetEnable(true);
				}
				else
				{
					ibtnDelete.SetEnable(true);
					ibtnUnDelete.SetEnable(false);
				}
			}
		}
		else
		{
			if((txtDTL_TYPE.GetData() == 1) || (txtSYS_YN.GetData() =="Y"))
			{
				ibtnUpdate.SetEnable(false);
				ibtnAdd.SetEnable(false);
				ibtnDelete.SetEnable(false);
				ibtnUnDelete.SetEnable(false);
			}
			else
			{	
				ibtnUpdate.SetEnable(true);
				ibtnAdd.SetEnable(true);
				if(grdDTL.GetRowStatus(ctrl.Row) >= 64)
				{
					ibtnDelete.SetEnable(false);
					ibtnUnDelete.SetEnable(true);
				}
				else
				{
					ibtnDelete.SetEnable(true);
					ibtnUnDelete.SetEnable(false);
				}
			}
		}
	}
}
function checkDefault()
{
    var ctrl	= grdDTL.GetGridControl();
	var row 	= ctrl.Rows;
	
	if(ctrl.Row >=1 && event.col == 3)
	{
		for(i=1; i<row; i++)
		{
			grdDTL.SetGridText( i , 3, "0");
		}
		grdDTL.SetGridText( ctrl.Row , 3, "-1");
	}
}
//--------------------------------
function Search()
{
    
	if(rdoDTL_KIND1.value == 1)
		txtnput_CODE_NM.SetDataText("");
	else
	{
		txtnput_CODE_NM.SetDataText(txtInput_CODE.GetData());
		txtInput_CODE.SetDataText("");
	}
	datCode_DTLs.Call("SELECT");
}
//--------------------------------
function OnChange_Use()
{
	datCode_DTLs.Call("SELECT");
}
//--------------------------------
function OnDataReceive(obj)
{
    if (obj.id=="datCode_MST_Value")
    {
        var ctrl 	= grdDTL.GetGridControl();
		grdDTL.columnHeaders.columns[11].header=txtREM_NUM1.GetData();
		grdDTL.columnHeaders.columns[12].header=txtREM_NUM2.GetData();
		grdDTL.columnHeaders.columns[13].header=txtREM_NUM3.GetData();
		grdDTL.columnHeaders.columns[14].header=txtREM_CHA1.GetData();
		grdDTL.columnHeaders.columns[15].header=txtREM_CHA2.GetData();
		grdDTL.columnHeaders.columns[16].header=txtREM_CHA3.GetData();   

    }   
    if (obj.id=="datCode_dMSTs")
    {
        
        var control = grddMST.GetGridControl();
	    var row = control.Row;
	    if(row > 1)
	    {
		    txtmCODE.SetDataText(grddMST.GetGridData(row, 1));
		    txtmREAMRK.SetDataText(grddMST.GetGridData(row, 4));
		    txtCODE_GRP.text 	= (grddMST.GetGridData(row, 5));
		    txtCODE_GRP_NM.text 	= (grddMST.GetGridData(row, 6));    		
		    txtPK.SetDataText(grddMST.GetGridData(row, 7));
	    }
	    else
	    {
		    txtmCODE.SetDataText(grddMST.GetGridData(0, 1));
		    txtmREAMRK.SetDataText(grddMST.GetGridData(0, 4));
		    txtCODE_GRP.text 	= (grddMST.GetGridData(0, 5));
		    txtCODE_GRP_NM.text 	= (grddMST.GetGridData(0, 6));    		
		    txtPK.SetDataText(grddMST.GetGridData(0, 7));
	    }
	    datCombo_Sub.Call("SELECT");
    }
    if (obj.id=="datCombo_Sub")
    {
     
		var data1=obj.jsonData.Data.Table;
		var flag;
		if(data1 !=null)
		{
			flag = 1;
		   // grdDTL.SetColEdit("GRP_CODE", flag);
			grdDTL.SetColComboData("GRP_CODE", data1, "CODE", "CODE_NM");
		}
		else{
			flag = 0;
		    grdDTL.SetColEdit("GRP_CODE", flag);
		}      
        
	   datCode_DTLs.Call("SELECT");
    }
    if (obj.id=="datCode_DTLs")
    {
        if(codeadmin_yn == "Y")
	    {
	        if(txtDTL_TYPE.GetData() == 1) {
			    ibtnUpdate.SetEnable(false);
			    ibtnAdd.SetEnable(false);
			    ibtnDelete.SetEnable(false);
			    ibtnUnDelete.SetEnable(false);
		    }
		    else
		    {
			    ibtnUpdate.SetEnable(true);
			    ibtnAdd.SetEnable(true);
			    ibtnDelete.SetEnable(true);
			    ibtnUnDelete.SetEnable(false);
		    }
	    }
	    else
	    {
		    if((txtDTL_TYPE.GetData() == 1) || (txtSYS_YN.GetData() =="Y"))
		    {
			    ibtnUpdate.SetEnable(false);
			    ibtnAdd.SetEnable(false);
			    ibtnDelete.SetEnable(false);
			    ibtnUnDelete.SetEnable(false);
    			
		    }
		    else
		    {
			    ibtnUpdate.SetEnable(true);
			    ibtnAdd.SetEnable(true);
			    ibtnDelete.SetEnable(true);
			    ibtnUnDelete.SetEnable(false);
		    }
	    }  
	    if(addFlag == "T")
	    {
		    grdDTL.AddRow();// Set Insert Status to true by call idGrid.StatusInsert()
		 
		    var row = grdDTL.RowCount-1;
		    grdDTL.SetGridText( row , 1, txtInput_PK.GetData());
		    addFlag = "F";
		    preparedModify();
	    } 
		grdDTL.autoSizeColumns();
    }
}
function OnDataError(oData)
{
  //alert(eval(oData).errmsg);
    if (eval(oData).errno == 20001)
    {
		alert("Database problem 1: "+ eval(oData).errmsg);
    }
    else if (eval(oData).errno == 20002)
    {
		alert("Database problem 2: "+ eval(oData).errmsg);
    }
	else if (eval(oData).errno > 0)
	{
		alert("Unexpected error: "+ eval(oData).errmsg);
	}	
	
}
</script>

<body>
    <!-------------------stgsfrstagam0002_s_01----------->

<ts-data id="datCodeGroupTree" onreceive="OnDataReceive(this)" > 
        <xml>
            <dso id="1" type="tree" function="sel_stgssc00002_01" > 
                <data-inputs > 
						<data-input bind="txtInput_SYS" /> 
            	</data-inputs>  
				<data-outputs bind="treMaster" ></data-outputs>
            </dso> 
        </xml> 
</ts-data>
    <!------------------------------>
    <ts-data id="datCode_MST_Value" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso id="1" parameter="-" type="control" function="SEL_STGSSC00002_02" > 
				<data-inouts>
                    <data-inout  bind="txtInput_PK" /> 
                    <data-inout bind="txtREM_NUM1" /> 
					<data-inout  bind="txtREM_NUM2" /> 
					<data-inout  bind="txtREM_NUM3" /> 
                    <data-inout  bind="txtREM_CHA1" /> 
					<data-inout bind="txtREM_CHA2" /> 
					<data-inout bind="txtREM_CHA3" /> 
					<data-inout bind="txtCODE_TYPE" /> 
					<data-inout  bind="txtCODE_LEN" /> 
					<data-inout bind="txtDTL_TYPE" /> 
					<data-inout bind="txtSYS_YN" /> 
				</data-inouts>
                
            </dso> 
        </xml> 
    </ts-data>
    <!------------------------------>
    <ts-data id="datCode_DTL_lChkUnique" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso id="1" type="grid" parameter="" function="SEL_STGSSC00002_03" > 
                <data-inputs bind="grd3"   > 
                    <data-input bind="txtInput_PK" /> 
                </data-inputs>
				<data-outputs bind="grd3" /> 
            </dso> 
        </xml> 
	</ts-data>

    <!------------------------------>
    <ts-data id="datCode_dMSTs" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso id="1" type="grid" function="SEL_STGSSC00002_04"> 
				<data-inputs bind="grddMST"   > 
					<data-input bind="txtInput_PK" /> 
                </data-inputs> 
				<data-outputs bind="grddMST" /> 
            </dso> 
        </xml> 
    </ts-data>
    <!------------------------------>
    <ts-data id="datCombo_Sub" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso type="array" function="PRO_STGSSC00002_01" > 
				<data-inputs>
                    <data-input bind="txtPK"  />
				</data-inputs>
				<data-outputs bind="1">
				</data-outputs>
            </dso> 
        </xml> 
    </ts-data>
    <!------------------------------>
    <ts-data id="datCode_DTLs" onreceive="OnDataReceive(this)" onerror="OnDataError(this)"> 
        <xml> 
            <dso id="1" type="grid" parameter="PK,TC_ABCODE_MST_PK,ORD,DEF_YN,CODE,CODE_NM,CODE_LNM,CODE_FNM,GRP_CODE,SYS_YN,USE_YN,NUM1,NUM2,NUM3,VAL1,VAL2,VAL3" function="SEL_STGSSC00002_06" procedure="UPD_STGSSC00002_06"> 
                <data-inputs bind="grdDTL"  > 
                    <data-input bind="txtInput_PK" /> 
                    <data-input bind="txtInput_CODE" /> 
					<data-input bind="txtnput_CODE_NM" /> 
                    <data-input bind="txtInput_USEYN" /> 
                    <data-input  bind="txtInput_SYS" /> 
				</data-inputs>
                <data-outputs bind="grdDTL" /> 
            </dso>             
        </xml> 
    </ts-data>
    <!-- MainTable -->
    <table style="width:100%;height: 100%" cellpadding="0" cellspacing="0" border="1">
        <tr  style="height: 1%">
            <td width="25%" align="center">
					<ts-button id="icoMaster" onclick="TabPopUp('stgssc00002_01.aspx')" value="Code Group Entry" img="new" imgtype="0"></ts-button>   				
            </td>
            <td width="10%">
					<ts-textbox id="txtmCODE" csstype="mandatory" text="" styles='width:98%' onenterkey="OnEnterTextBox()" ></ts-textbox>
				</td>
			<td width="23%" class="kk">
				<ts-textbox id="txtmREAMRK" csstype="mandatory" text="" styles='width:88%'
					onenterkey="OnEnterTextBox()"  ></ts-textbox>
			</td>
				<td width="5%">
					<font color="black"><b>Type</b></font></td>
				<td width="20%">
				<ts-radio id="rdoDTL_KIND1" value="1"> 
										<span value="1" > <font color="black" >Code </font></span>
										<span value="2" > <font color="black" >Code NM </font> </span>
				</ts-radio>
				</td>
				<td width="22%">
				<ts-textbox id="txtInput_CODE" csstype="filter" styles='width:95%' onenterkey="OnEnterTextBox1()"  ></ts-textbox></td>
				<td width="5%" align="right">
						<ts-button id="ibtnSearch" onclick="OnSearch()" value="Search" img="search" imgtype="0"></ts-button>  			
				<td>
        </tr>
        <tr style="height: 99%">
            <td style="width:25%;height: 100%" >
					<ts-classictreeview  id="treMaster" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="treeItemOnclick(sender,event)" >
					</ts-classictreeview>
            </td>
            <td style="vertical-align: top;height: 100%" colspan="6">
                <!-- Table2 contain detail grid -->
                <table id="RightBottomTB" style="width:100%; height:100%" align="top" border="1">
                    <tr style="height:10%">
                        <td width="100%">
                            <table width="100%" border="0">
                                <tr  style="width: 100%; height: 1%">
                                    <td width="10%">
                                        <ts-textbox id="txtCODE_GRP" styles='width:100%' ></ts-textbox>
                                    </td>
                                    <td width="33%">
                                        <ts-textbox id="txtCODE_GRP_NM" styles='width:100%' ></ts-textbox>
                                    </td>
                                    <td width="7%" align="right">
                                        <font color="black"><b>Type</b></font></td>
                                    <td width="8%">
                                        <ts-textbox id="txtCODE_TYPE" styles='width:100%' csstype="mandatory" ></ts-textbox>
                                    </td>
                                    <td width="6%" align="right">
                                        <font color="black"><b>Length</b></font></td>
                                    <td width="8%">
                                        <ts-textbox id="txtCODE_LEN" styles='width:100%' csstype="mandatory" ></ts-textbox>
                                    </td>
                                    <td width="6%" align="right">
                                        <font color="black"><b>Active</b></font></td>
                                    <td width="4%">
                                        <ts-checkbox id="txtInput_USEYN" value="1" defaultvalue="1|0" onchange="OnChange_Use()" ></ts-textbox>
                                    </td>
                                    <td width="4%"> 			
											<ts-icon id="ibtnAdd" name="plus" title="new" onclick="AddOnClick()"></ts-icon>
                                    </td>
                                    <td width="4%">
											<ts-icon id="ibtnDelete" name="trash" title="delete" onclick="DeleteOnClick()"></ts-icon>
                                    </td>
                                    <td width="4%">
											<ts-icon id="ibtnUnDelete" name="trash" title="undelete" onclick="UnDeleteOnClick()"></ts-icon>
                                    </td>
                                    <td width="4%">
											<ts-icon id="ibtnUpdate" name="save" title="save" onclick="UpdateOnClick()"></ts-icon>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr style="height:90%">
                        <td style="width:100%;height:100%">
								<ts-grid id="grdDTL" h sortable="true" editable="true" selectionmode="singlecell">
										<columns>
										   <column text="pk" datafield="PK" width="100" columntype="textbox" editable="true"></column>
										   <column text=TC_ABCODE_MST_PK" datafield="TC_ABCODE_MST_PK"  width="150" columntype="textbox" editable="true"></column>
										   <column text="ORD" datafield="ORD" width="150" columntype="textbox" editable="true"></column>
										   <column text="DEF YN" datafield="DEF_YN"  width="200" columntype="textbox" editable="true"></column>
										   <column text="CODE" datafield="CODE"  width="200" columntype="textbox" editable="true"></column>
										   <column text="NAME" datafield="CODE_NM"  width="200" columntype="textbox" editable="true"></column>
										   <column text="LName" datafield="CODE_LNM"  width="200" columntype="textbox" editable="true"></column>
										   <column text="FName" datafield="CODE_FNM"  width="200" columntype="textbox" editable="true"></column>
										   <column text="GRP CODE" datafield="GRP_CODE"  width="200" columntype="combobox" editable="true"></column>
										   <column text="System YN" datafield="SYS_YN"  width="250" columntype="checkbox" editable="true"></column>
										   <column text="Use YN" datafield="USE_YN"  width="250" columntype="checkbox" editable="true"></column>										  
										   <column text="Num1" datafield="NUM1"  width="250" columntype="textbox" editable="true"></column>
										   <column text="Num2" datafield="NUM2"  width="250" columntype="textbox" editable="true"></column>
										   <column text="Num3" datafield="NUM3"  width="250" columntype="textbox" editable="true"></column>
										   <column text="Value1" datafield="VAL1"  width="250" columntype="textbox" editable="true"></column>
										   <column text="Value2" datafield="VAL2"  width="250" columntype="textbox" editable="true"></column>
										   <column text="Value3" datafield="VAL3"  width="250" columntype="textbox" editable="true"></column>
									   </columns>
								   </ts-grid>
                        </td>
                    </tr>
                </table>
                <!-- End of Table2 -->
            </td>
        </tr>
    </table>
    <ts-textbox id="txtInput_PK" style="display: none"  ></ts-textbox>
    <!-- End of MainTable-->
    <ts-textbox id="txtREM_NUM1" style="display: None" ></ts-textbox>
    <ts-textbox id="txtREM_NUM2" style="display: None"  ></ts-textbox>
    <ts-textbox id="txtREM_NUM3" style="display: None"  ></ts-textbox>
    <ts-textbox id="txtREM_CHA1" style="display: None"  ></ts-textbox>
    <ts-textbox id="txtREM_CHA2" style="display: None"  ></ts-textbox>
    <ts-textbox id="txtREM_CHA3" style="display: None"  ></ts-textbox>
    <ts-textbox id="txtSYS_YN" style="display: None" ></ts-textbox>
    <ts-textbox id="txtDTL_TYPE" style="display: None"  ></ts-textbox>
	<ts-textbox id="txtnput_CODE_NM" style="display: None" ></ts-textbox>
	<ts-grid id="grddMST" style="display: None" sortable="true" editable="true" selectionmode="singlecell">
			<columns>
			   <column text="pk" datafield="PK" width="100" columntype="textbox" editable="true"></column>
			   <column text="ID" datafield="ID"  width="150" columntype="textbox" editable="true"></column>
			   <column text="Code Type" datafield="CODE_TYPE" width="150" columntype="textbox" editable="true"></column>
			   <column text="Code Len" datafield="CODE_LEN"  width="200" columntype="textbox" editable="true"></column>
			   <column text="REMARK" datafield="REMARK"  width="200" columntype="textbox" editable="true"></column>
			   <column text="CODE_GRP" datafield="CODE_GRP"  width="200" columntype="textbox" editable="true"></column>
			   <column text="CODE_GRP_NM" datafield="CODE_GRP_NM"  width="200" columntype="textbox" editable="true"></column>
			   <column text="CODE_GRP_PK" datafield="CODE_GRP_PK"  width="200" columntype="textbox" editable="true"></column>
		   </columns>
	   </ts-grid>
	   <ts-grid id="grd3" style="display: None" sortable="true"  editable="true" selectionmode="singlecell">
			<columns>
			   <column text="pk" datafield="PK" width="100" columntype="textbox" editable="true"></column>
			   <column text="TC_ABCODE_MST_PK" datafield="TC_ABCODE_MST_PK"  width="150" columntype="textbox" editable="true"></column>
			   <column text="P_PK" datafield="P_PK" width="150" columntype="textbox" editable="true"></column>
			   <column text="CODE" datafield="CODE"  width="200" columntype="textbox" editable="true"></column>
		   </columns>
	   </ts-grid>
    <ts-textbox id="txtPK" text="" style="display: None" ></ts-textbox>
    <ts-textbox id="txtData" text="" style="display: None" ></ts-textbox>
	<ts-textbox id="txtInput_SYS" text="" style="display: None"  ></ts-textbox>
	
</body>
</html>
