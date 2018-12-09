<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>POP</title>
<script>
 var flag;
 function BodyInit()
 {
	flag="";
	txtuID.SetEnable(false);
	txtuREMARK.SetEnable(false);
	txtsubID.SetEnable(false);
	txtsubREMARK.SetEnable(false);
	txtInput_REMARK.hostElement.style.display = 'none'; 
	
	ibtnAdd.hostElement.style.display = 'none'; 
	ibtnReset.hostElement.style.display = '';
	ibtnDelete.hostElement.style.display = '';
	ibtnUpdate.hostElement.style.display = '';
	txtsubID.hostElement.style.display 	= 'none'; 
	txtsubREMARK.hostElement.style.display 	= 'none'; 
	
    datTCode_MST.Call("SELECT");
 }
 
 function treeItemOnclick()
 {
    flag="";
    ibtnAdd.hostElement.style.display = 'none'; 	
	ibtnDelete.hostElement.style.display = '';
	ibtnReset.hostElement.style.display = '';
	var obj = treMST.GetSelectedItem();	
	txtpPKSave.text = obj.P_PK;	
    txtInput1.SetDataText( obj.PK );
	txtPKSave.SetDataText( obj.PK );
	datCode_MST_POPUP.Call('SELECT');
 }
 //-----------------------------
function CheckCHKSearch()
{
    if (rdoCHKSearch.value==1) 
    {
        txtInput_REMARK.text="";
        txtInput_REMARK.hostElement.style.display = 'none'; 
        txtInput_ID.style.display = ''; 
    }
    else
    {
        txtInput_ID.text="";
        txtInput_REMARK.hostElement.style.display = ''; 
        txtInput_ID.hostElement.style.display = 'none'; 
    }    
      
}
//----------------------
function Search()
{
	datTCode_MST.Call("SELECT");
}
function checkKey() { 
	var c = String.fromCharCode (event.keyCode); 
	var x = c.toUpperCase().charCodeAt(0) ; 
	event.keyCode = x; 
	
}
 
 function ResetOnClick()
{
    
	if(txtuID.text=="")
	{
	    
		ibtnAdd.hostElement.style.display 			= '';
		ibtnReset.hostElement.style.display 		= 'none'; 
		ibtnDelete.hostElement.style.display	 	= 'none';
		ibtnUpdate.hostElement.style.display 		= 'none';
		ibtnReset_Sub.hostElement.style.display 	= 'none';
		txtsubREMARK.SetDataText( "" );
		txtsubID.SetDataText( "" );
		txtsubID.hostElement.style.display 		= 'none'; 
		txtsubREMARK.hostElement.style.display 	= 'none'; 
		chkUSE_IF.SetDataText( "0" );
		chkSYS_FLAG.SetDataText( "Y" );
		datCode_MST_POPUP.StatusInsert();
		txtP_PK.SetDataText(txtpPKSave.text);
		rdoDTL_KIND.SetDataText("1");
		
	}
	else
	{
	    
		ibtnAdd.hostElement.style.display 			= '';
		ibtnReset.hostElement.style.display 		= 'none'; 
		ibtnDelete.hostElement.style.display	 	= 'none';
		ibtnUpdate.hostElement.style.display 		= 'none';
		ibtnReset_Sub.hostElement.style.display 	= 'none';
		datCode_MST_POPUP.StatusInsert();
		chkUSE_IF.SetDataText( "0" );
		chkSYS_FLAG.SetDataText( "Y" );
		
		txtP_PK.SetDataText(txtpPKSave.text);
		txtsubREMARK.SetDataText( "" );
		txtsubID.SetDataText( "" );
		txtsubID.hostElement.style.display 		= 'none'; 
		txtsubREMARK.hostElement.style.display 	= 'none';
		Checkdtl(txtuID.text);
		
	}
	   
}
function Checkdtl(strid)
{
    var tmp= strid.substr(2,6);
	if(tmp  == "000000")
	    rdoDTL_KIND.SetDataText("1");
    else
    {
	    tmp = tmp.substr(2,4);
	    if(tmp == "0000")
		    rdoDTL_KIND.SetDataText("3");
	    else
		    rdoDTL_KIND.SetDataText("1");
    }
}
function Reset_SubOnClick()
{
	if(txtuID.text=="")
	{
	    
		ibtnAdd.hostElement.style.display 			= '';
		ibtnReset.hostElement.style.display 		= 'none'; 
		ibtnDelete.hostElement.style.display	 	= 'none';
		ibtnUpdate.hostElement.style.display 		= 'none';
		ibtnReset_Sub.hostElement.style.display 	= 'none';
		
		txtuID.SetDataText( txtID.text );
		txtuREMARK.SetDataText( txtREMARK.text );
		datCode_MST_POPUP.StatusInsert();
		chkUSE_IF.SetDataText( "0" );
		chkSYS_FLAG.SetDataText( "Y" );
		rdoDTL_KIND.SetDataText("1");
		txtsubREMARK.SetDataText( "" );
		txtsubID.SetDataText( "" );
		txtsubID.hostElement.style.display 		= 'none'; 
		txtsubREMARK.hostElement.style.display 	= 'none'; 
		txtP_PK.SetDataText(txtPKSave.text);
		alert("Please input information ... ");
		
		
	}
	else
	{
	    
		ibtnAdd.hostElement.style.display 			= '';
		ibtnReset.hostElement.style.display 		= 'none'; 
		ibtnDelete.hostElement.style.display	 	= 'none';
		ibtnUpdate.hostElement.style.display 		= 'none';
		ibtnReset_Sub.hostElement.style.display 	= 'none';
		
		txtuID.SetDataText( txtID.text );
		txtuREMARK.SetDataText( txtREMARK.text );
		datCode_MST_POPUP.StatusInsert();
		chkUSE_IF.SetDataText( "0" );
		chkSYS_FLAG.SetDataText( "Y" );
		txtP_PK.SetDataText(txtPKSave.text);
		txtsubREMARK.SetDataText( "" );
		txtsubID.SetDataText( "" );
		txtsubID.hostElement.style.display 		= 'none'; 
		txtsubREMARK.hostElement.style.display 	= 'none'; 
		
		Checkdtl(txtuID.text);
		alert("Please input information ... ");
	}
}
function OnChange_kind()
{   
    txtPK1.SetDataText(txtInput1.GetData());
	txtKIND.SetDataText(rdoDTL_KIND.GetData());
	
	if((rdoDTL_KIND.GetData() == 1) || (rdoDTL_KIND.GetData() == 3))
	{
		txtsubID.SetDataText("");
		txtsubID.hostElement.style.display 	= 'none'; 
		
		txtsubREMARK.SetDataText("");		
		txtsubREMARK.hostElement.style.display 	= 'none'; 
	}
	else
	{
		txtsubID.hostElement.style.display 	= ''; 
		txtsubREMARK.hostElement.style.display 	= ''; 
	}
}
//------------------------------------
function AddOnClick()
{
    if (confirm("Do you want to save?"))
    {
        
        txtInput_3ID.text	= txtID.text;
		datCode_MST_ChkUnique.Call("SELECT");
	    
    }
}
//-------------------------------------------
function DeleteOnClick() 
{
	datCode_MST_CheckParentCode.Call();

}
//-------------------------------------------
function OnChange_Use()
{
	if(chkUSE_IF.value == 1)	{
	}
	else
	{
		txtID.SetEnable(true);
		txtREMARK.SetEnable(true);
		rdoCODE_TYPE.SetEnable(true);
		lstCODE_LEN.SetEnable(true);
		chkSYS_FLAG.SetEnable(true);
		rdoDTL_KIND.SetEnable(true);
		txtREM_NUM1.SetEnable(true);
		txtREM_NUM2.SetEnable(true);
		txtREM_NUM3.SetEnable(true);
		txtREM_CHA1.SetEnable(true);
		txtREM_CHA2.SetEnable(true);
		txtREM_CHA3.SetEnable(true);
	}
}
//----------------------------------------
function ExitOnClick()
{	
	var chkYN;
	chkYN = chkOPTION.GetData();
	window.returnValue = chkYN; 
	this.close(); 	
}
//----------------------------------------

function UpdateOnClick()
{
    datchkDTLMST.Call();
}

function OnDataReceive(obj)
{
    if (obj.id=="datchkDTLMST")
    {
        if(txtnum.GetData() == 0)
	    {	
		    if(confirm("Do you want to save ?" ))
		    {
		        datCode_MST_POPUP.Call(); 
			    
    	    }
	    }
	    else
	    {
		    if(rdoDTL_KIND.GetData() == 1)
		    {
		        alert("Group code have any code so can not change upper ...");
		    }		
		    else
		    {
			    if(confirm("Do you want to save ?" ))
		        {
		            datCode_MST_POPUP.Call(); 
    			    
    	        }
		    }
	    }    
    }
    else if (obj.id=="datCode_uMST")
    {
        if((rdoDTL_KIND.GetData() == 1) || (rdoDTL_KIND.GetData() == 3))
	    {
		    txtsubID.SetDataText("");
		    txtsubREMARK.SetDataText("");
		    txtsubID.hostElement.style.display 	= 'none'; 
		    txtsubREMARK.hostElement.style.display 	= 'none';
		    
	    }
	    else
	    {
		    txtsubID.hostElement.style.display 	= ''; 
		    txtsubREMARK.hostElement.style.display 	= ''; 
		    txtSubSearch.hostElement.style.display = '';	
		    datCode_MST_SubCode.Call();
	    }
    }
    else if (obj.id=="datCode_MST_POPUP")
    {
        
        if (flag=="insert")
        {
            if (txtInput1.text!="")
            {
                alert("Save successfull!");
                flag=="";
                
            }
            else
                alert("Save unsuccessful! Please ask admin!");
        }
        	  
        txtPK1.SetDataText(txtInput1.GetData());
	    txtKIND.SetDataText(rdoDTL_KIND.GetData());
    	
        if ((rdoDTL_KIND.GetData() == 1) || (rdoDTL_KIND.GetData() == 2))
	    {
		    ibtnReset_Sub.hostElement.style.display = '';
		    ibtnReset.hostElement.style.display = '';
	    }
	    if (rdoDTL_KIND.GetData() == 3)
	    {
		    ibtnReset_Sub.hostElement.style.display = 'none';
		    ibtnReset.hostElement.style.display = '';
	    }
    	if (flag=="delete") 
        {
            flag="";
            datCode_MST_POPUP.StatusInsert();
            datTCode_MST.Call("SELECT");
		}
		else
		{	
		    
            datCode_uMST.Call();
        }
    }
    else if (obj.id=="datCode_MST_CheckParentCode")
    {
        
	    if(Number(txtRowCount2.text)==0)
	        datCode_DTL_CheckParentCode.Call();
	    else
	        alert("This code has child code. Delete child code first!");
	    
    }
    else if (obj.id=="datCode_DTL_CheckParentCode")
    {
        
        if(Number(txtRowCount2.text)==0)
	    {
		    if(confirm("Do you want to delete ?" ))
		    {
		        flag="delete";
			    datCode_MST_POPUP.StatusDelete();
			    //datCode_MST_POPUP.StatusUpdate();
			    datCode_MST_POPUP.Call(""); 
			    
		    }
	    }
	    else{
		    alert("Can't delete group because code had record");
	    }
    }
    else if (obj.id=="datCode_MST_ChkUnique")
    {
        chkOPTION.SetDataText("N");
	    
	    if(txtRowCount3.text > 0)
		    alert("Code group ID have existed, please input another ID!");
	    if(txtRowCount3.text == 0)
	    {
		    if(confirm("Do you want to save ?" ))
		    {
			    //datCode_MST_POPUP.StatusUpdate();
			    flag="insert";
    		    datCode_MST_POPUP.Call(""); 
		    }
	    }
    }
    
    
}
function Popup()
{
	txtPK1.SetDataText(txtInput1.GetData());
	txtKIND.SetDataText(rdoDTL_KIND.GetData());
	if((rdoDTL_KIND.GetData() == 1) || (rdoDTL_KIND.GetData() == 3))
	{
		txtsubID.SetDataText("");
		txtsubREMARK.SetDataText("");
		txtsubID.hostElement.style.display 	= 'none'; 
		txtsubREMARK.hostElement.style.display 	= 'none'; 
	}
	else
	{
		txtsubID.hostElement.style.display 	= ''; 
		txtsubREMARK.hostElement.style.display 	= ''; 
		
		var fnameFile = "agco0020_search_code.aspx";
		var fpath = System.RootURL + "/form/ag/co/" + fnameFile  + '?strID=' + txtsubID.GetData() ;
		var aValue  = System.OpenModal(  fpath , 500 , 550 , 'resizable:yes;status:yes');
		if ( aValue != null )  
		{
			if (aValue[0] == 'wcab001002')
			{
			    
				txtCODE_GRP.SetDataText(aValue[1]);
				txtsubID.SetDataText(aValue[2]);
				txtsubREMARK.SetDataText(aValue[3]);
			}
		}
	}
}
function OnEnterTextBox()
{
	
	txtInput_REMARK.SetDataText(txtInput_ID.GetData());
}
 </script>

<body>
<ts-data id="datTCode_MST" onreceive="OnDataReceive(this)" > 
	<xml>
		<dso id="1" type="tree" function="SEL_STGSSC00002_01_01" > 
			<data-inputs > 
					<data-input bind="txtInput_ID" /> 
					<data-input bind="txtInput_REMARK" /> 
			</data-inputs>  
			<data-outputs bind="treMST" ></data-outputs>
		</dso> 
	</xml> 
</ts-data>

<!------------------------------------------>
<ts-data id="datCode_MST_POPUP" onreceive="OnDataReceive(this)" > 
    <xml> 
        <dso id="2" type="control" parameter="-"  function="SEL_STGSSC00002_01_02" procedure="UPD_STGSSC00002_01_02">
			<data-inouts>
                <data-inout  bind="txtInput1"/>
                <data-inout  bind="txtID"/>
                <data-inout  bind="txtP_PK"/>
                <data-inout  bind="rdoCODE_TYPE" />
                <data-inout  bind="lstCODE_LEN" />
                <data-inout  bind="chkSYS_FLAG" />
                <data-inout  bind="rdoDTL_KIND" />
                <data-inout  bind="txtCODE_GRP" />
                <data-inout  bind="txtREM_NUM1" />
                <data-inout  bind="txtREM_NUM2" />
                <data-inout  bind="txtREM_NUM3" />
                <data-inout  bind="txtREM_CHA1" />
                <data-inout  bind="txtREM_CHA2" />
                <data-inout  bind="txtREM_CHA3" />                
                <data-inout  bind="txtREMARK"/>
                <data-inout  bind="chkUSE_IF" />                
			</data-inouts>
        </dso>
    </xml>
</ts-data>

<!------------------------------------------>
<ts-data id="datCode_MST_ChkUnique"   onreceive="OnDataReceive(this)" > 
        <xml> 
            <dso id="4" type="control" function="SEL_STGSSC00002_01_03"> 
				<data-inouts>
                    <data-inout bind="txtInput_3ID" /> 
					<data-inout bind="txtRowCount3" /> 
                </data-inouts>
            </dso> 
        </xml> 
    </ts-data> 
    
<!------------------------------------------>
<ts-data id="datCode_uMST" onreceive="OnDataReceive(this)" > 
    <xml> 
        <dso id="3" type="process" procedure="PRO_STGSSC00002_01_01" >
            <data-inputs>
                <data-input bind="txtP_PK" />            
            </data-inputs>
            <data-outputs>
                <data-output   bind="txtuID" />
                <data-output   bind="txtuREMARK" />                              
            </data-outputs>
        </dso>                    
    </xml>
</ts-data>
<!------------------------------------------>
<ts-data id="datCode_MST_SubCode" > 
    <xml> 
        <dso id="5" type="process"  procedure="PRO_STGSSC00002_01_02" > 
            <data-inputs>
                <data-input bind="txtCODE_GRP"/>   
            </data-inputs>
            <data-outputs>
                <data-output  bind="txtsubID"/>
                <data-output  bind="txtsubREMARK"/>
            </data-outputs>             
        </dso> 
    </xml> 
</ts-data>
<!------------------------------------------>
<ts-data id="datchkDTLMST"  onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso id="6" type="process"  procedure="PRO_STGSSC00002_01_03" > 
            <data-inputs>
                <data-input bind="txtInput1"/>                
            </data-inputs>
            <data-outputs>     
                <data-output  bind="txtnum"/>
            </data-outputs>
        </dso> 
    </xml> 
</ts-data>
<!------------------------------------->

<ts-data id="datCode_MST_CheckParentCode"  onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso id="7" type="process"  procedure="PRO_STGSSC00002_01_04" > 
            <data-inputs>
                <data-input bind="txtInput1"/>                
            </data-inputs>
            <data-outputs>     
                <data-output  bind="txtRowCount2"/>
            </data-outputs>
        </dso> 
    </xml> 
</ts-data>
<!---------------------------------->
<ts-data id="datCode_DTL_CheckParentCode"  onreceive="OnDataReceive(this)"> 
    <xml> 
        <dso id="8" type="process" user="comm"  procedure="PRO_STGSSC00002_01_05" > 
            <data-inputs>
                <data-input bind="txtInput1"/>                
            </data-inputs>
            <data-outputs>     
                <data-output  bind="txtRowCount2"/>
            </data-outputs>
        </dso> 
    </xml> 
</ts-data>
<!-- MainTable -->
<table  width="100%" cellpadding="0" cellspacing="0" border="1">
	<tr>
		<td width="35%">
						<!-- Table1 contain master buttons and text box -->
						<table id="LeftTopTB" height="20" width="100%">
							<tr>
								
								<td width="40%">
									<ts-radio id="rdoCHKSearch" value="1" onchange="CheckCHKSearch()"> 
										<span value="1" > <font color="black" >ID</font></span>
										<span value="2" > <font color="black" >Remark </font> </span>
									</ts-radio >
																		
								</td>
								<td width="30%">
												<ts-textbox id="txtInput_ID" 		maxlen = "7" 	styles='width:100%' onenterkey ="OnEnterTextBox()" csstype="filter"></ts-textbox>
												<ts-textbox id="txtInput_REMARK"		styles='width:100%' onenterkey ="OnEnterTextBox()" csstype="filter"></ts-textbox></td>
								<td width="30%">
									<ts-button id="txtSearch" onclick="Search()" value="Search" img="search" imgtype="0"></ts-button></td>
							
							</tr>
						</table>
						<!-- End of Table1--->
		</td>
		<td width="65%">
					<!-- Table2 contain detail buttons and text box -->
					<table id="RightTopTB" height="20">
						<tr>
							<td width="70%"><ts-checkbox id="chkOPTION"   	value="Y" defaultvalue="Y|N" />Option</td>
							<td width="5%">
							<ts-button id="ibtncancel" onclick="ExitOnClick()" value="Cancel" img="cancel" imgtype="0"></ts-button>
						     </td>
							<td width="5%">
									<ts-button id="ibtnReset" onclick="ResetOnClick()" value="New" img="new" imgtype="0"></ts-button></td>
							<td width="5%">
									<ts-button id="ibtnReset_Sub" onclick="Reset_SubOnClick()" value="New Sub" img="new_sub" imgtype="0"></ts-button></td>
							
							<td width="5%">
									<ts-button id="ibtnDelete" onclick="DeleteOnClick()" value="Delete" img="delete" imgtype="0"></ts-button></td>  
							<td width="5%">
									<ts-button id="ibtnUpdate" onclick="UpdateOnClick()" value="Save" img="save" imgtype="0"></ts-button></td>
							<td width="5%">
									<ts-button id="ibtnAdd" onclick="AddOnClick()" value="Save" img="save" imgtype="0"></ts-button></td>					
			
											
						</tr>							
						
					</table>
					<!-- End of Table2 -->					
		</td>
	</tr>
	<tr   >
	<!-- Tree view --> 
	<td width="35%" >		
		  <table align="top"  cellspacing=0 cellpadding=0  width="100%" height="470">		 
			<tr>
				<td height="100%"  >
					<!-- Master Grid Control here. Remember add this function oncellclick="RowClick()"--> 
					
					<ts-classictreeview  id="treMST" itemtext="TEXT"  style="width:100%; height:100%; " onClickNode="treeItemOnclick(sender,event)" >
					<ts-classictreeview>
				</td>	
			</tr>
		  </table>
	</td>	
	<td width="65%">
						<!-- Table2 contain detail grid -->
						<table id="RightBottomTB" width="100%" height="100%"  align="top" >
							
								
								 <!-- Detail Grid Control here --> 
								
										<!-- Grid Form --> 
    						
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>Upper &nbsp;</b> </font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																<td width="20%"><ts-textbox id="txtuID"  text="" styles='width:100%;color:blue' onkeypress="checkKey()"></ts-textbox>
																</td>
																<td width="80%"><ts-textbox id="txtuREMARK"  text="" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
																
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>ID &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																<td width="20%"><ts-textbox id="txtID"  text=""  	maxlen = "8" styles='width:100%' 	 csstype="mandatory" onkeypress="checkKey()"></ts-textbox> </td>
																<td width="80%"><ts-textbox id="txtREMARK"  text="" 	maxlen = "100" styles='width:100%'   csstype="mandatory" onkeypress="checkKey()"></ts-textbox></td>
																
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>Code Type &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%">
																		<ts-radio id="rdoCODE_TYPE" value="C" > 
																			<span value="N" > <font color="black" >NUMBER</font>&nbsp;&nbsp;&nbsp;</span>
																			<span value="C" > <font color="black" >CHAR</font>&nbsp;&nbsp;&nbsp; </span>
																		</ts-radio >
																	</td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>Code Length &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%">
																		<ts-list  id="lstCODE_LEN" value="" styles='width:50%' > 
																			<data> LIST|1|1|2|2|3|3|4|4|5|5|6|6|7|7|8|8|9|9|10|10</data> 	
																		</ts-list>
																	</td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>Sys Flag &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%">
																		<ts-checkbox id="chkSYS_FLAG"   value="Y" defaultvalue="Y|N" ></ts-textbox>
																	</td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>Detail Kind &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="50%">
																		<ts-radio id="rdoDTL_KIND" value="0" onchange="OnChange_kind()"> 
																			<span value="1" > <font color="black" >Upper</font>&nbsp;&nbsp;&nbsp;</span>
																			<span value="3" > <font color="black" >Code</font>&nbsp;&nbsp;&nbsp; </span>
																			<span value="2" > <font color="black" >Subcode</font>&nbsp;&nbsp;&nbsp; </span>
																		</ts-radio >
																	</td>
																
																	<td width="20%"><ts-textbox id="txtsubID" styles="width:100%;" onkeypress="checkKey()"/> </td>
																 	<td width="30%"><ts-textbox id="txtsubREMARK" styles="width:100%;" onkeypress="checkKey()"/> </td>
																	<td width="5%">
																			<ts-button id="txtSubSearch" onclick="Popup()" value="Search" img="search" imgtype="0"></ts-button>
																	</td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_NUM1 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_NUM1"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()" ></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_NUM2 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_NUM2"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_NUM3 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_NUM3"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_CHA1 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_CHA1"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_CHA2 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_CHA2"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>REM_CHA3 &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%"><ts-textbox id="txtREM_CHA3"  text="" maxlen = "100" styles='width:100%' onkeypress="checkKey()"></ts-textbox></td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
										</tr>
										
										<tr>
											<td width="100%">
												 <table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
												  <tr>
														<td width="25%" align="right"><font color="black" ><b>USE_IF &nbsp; </b></font></td>
														<td width="75%">
															<table  border="0" cellpadding="0" cellspacing="0" style="width:100%;" >
															  <tr>
																	<td width="100%">
																		<ts-checkbox id="chkUSE_IF"   value="0" defaultvalue="0|1" onchange="OnChange_Use()"></ts-textbox>
																	 </td>
															  </tr>
															</table>
														</td>
												  </tr>
												</table>
											</td>
									</tr>
						</table>
						<!-- End of Table2 -->		
		</td>
	</tr>	
</table>
<!-- End of MainTable-->
 
<ts-textbox id="txtInput1" 						style="Display:None" ></ts-textbox>

<ts-textbox id="txtPKSave" 			text="0"    style="Display:none" ></ts-textbox>
<ts-textbox id="txtP_PK"  			text="0"    style="Display:none" ></ts-textbox> 


<ts-textbox id="txtRowCount2"         text="" 	style="Display:None"></ts-textbox>




<!-- Grid Form --> 
<ts-textbox id="txtInput_3ID" style="Display:None" ></ts-textbox>
<ts-textbox id="txtRowCount3" style="Display:None"></ts-textbox>

 <ts-textbox id="txtCODE_GRP"  style="Display:None" ></ts-textbox>


<ts-textbox id="txtPK1"  	text="" style="Display:None" ></ts-textbox>   
<ts-textbox id="txtKIND"  	text="" style="Display:None"></ts-textbox>   

<!-- Grid Form --> 
<ts-textbox id="txtpPKSave"  text="" style="Display:none"></ts-textbox>
<ts-textbox id="txtnum" style="Display:none" ></ts-textbox>
 
 
 
</body>
</html>
