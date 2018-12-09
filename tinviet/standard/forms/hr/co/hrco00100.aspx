<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
 <html>
 <head>
    <title>Get Employee</title>

 <script>
var flag=0; //chua co modify thong tin
var bAdd=false;

var init_from;
function BodyInit()
{ 	
	 dso_lst_sthrem00100_0.Call("SELECT");
}
function OnSearch()
{
    dso_grd_hrco00100_0.Call("SELECT");
	//debugger;
}


//--------------------------------------------------------------------------
function OnSelectRow()
{
    
    var aData =new Array();
    var j;
    j=0;
    
    for (var i=1;i<grdEmployee.rows;i++)
    {
        if (grdEmployee.GetGridData(i,0)=='-1')
        {   
           var aRow=new Array();
            aRow[0]=grdEmployee.GetGridData(i,1); //EMP_ID
            aRow[1]=grdEmployee.GetGridData(i,2); //FULL NAME
           // aRow[2]=grdEmployee.GetGridData(i,3); //position_name
          //  aRow[3]=grdEmployee.GetGridData(i,4); //THR_EMP_PK
          //  aRow[4]=grdEmployee.GetGridData(i,5); //ORG_PK
            aData[j]=aRow;
            j=j+1;

        }
        
    }
    
    window.returnValue = aData; 			
	this.close();
}
//---------------------------------------------------

function OnExit()
{
    EXITOnClick();
}
function EXITOnClick()
{
	window.returnValue = null; 
	window.close();
}
//------------------------------------------------------------------------------------
function OnDataReceive(obj)
{
 
       if(obj.id=="datEmployeePopup")
       {
            idRecord.text=grdEmployee.rows-1 ;
       }
	   else if(obj.id=="dso_lst_sthrem00100_0")
	   {
		dso_grd_hrco00100_0.Call("SELECT")
	   }
	   //-- ---------------------------------------------------------------sua lai cho nay`
	   if(obj.id=="dso_grd_hrco00100_0")
	   {
		var data1=obj.jsonData.Data.Table;
		var data2=obj.jsonData.Data.Table1;
        //console.log(data1);
        if(data1 !=null)
			{
				grdEmployee.SetColComboData("POS_TYPE", data1, "CODE", "CODE_NM");
				grdEmployee.SetColComboData("ORG_NM", data2, "GROUP_PK", "GROUP_NM");
			}
	   }
	  //------------------------------------------------------------------------------------
}   
function OnSelectClick(objGrid,event)
{
  
    var arr_data = new Array();
    var l_sel_row=event.row;
   
    if (grdEmployee.RowCount >= 1)
    {
	   //arr_data[0]= txtCode.text;
       arr_data[0] = grdEmployee.GetGridData(l_sel_row, 'EMP_ID'); 
	   arr_data[1] = grdEmployee.GetGridData(l_sel_row, 'FULL_NM'); 
	   //alert(arr_data[0]+arr_data[1]);
    }
   
	System.setDataParam(arr_data);
    System.ClosePopup(window);
}

function OnCheckAll()
{
    var tmp;
    if(chkSelectAll.GetData()=='T')
        tmp=-1;
    else
        tmp=0;
        
    var ctrl=grdEmployee.GetGridControl();
	if(ctrl.SelectedRows>0)
		for(var i=0;i<ctrl.SelectedRows;i++)
    		grdEmployee.SetGridText(ctrl.SelectedRow(i),0,tmp);
}
function OnSetGrid(obj_checkbox,obj_grd,obj_col)
{	
    var tmp;
    if( obj_checkbox.GetData()=='T')
		tmp=-1;
	else
		tmp=0;
    var ctrl = obj_grd.GetGridControl();
    
    if (ctrl.SelectedRows>0)
    {
	    for ( var i =  0 ; i < ctrl.SelectedRows ; i++ )
		    {
			    var row = ctrl.SelectedRow(i);
			    if ( row > 0 )
			    {		
				    obj_grd.SetGridText(row,obj_col,tmp);
			    }
		    }
	}
	else
	{
	    for ( var i =  1 ; i < ctrl.rows ; i++ )
				    obj_grd.SetGridText(i,obj_col,tmp);
	}
}
//------------------------
function OnGridCellDoubleClick(){
	if(event.row > 0 )
      {
            grdEmployee.SetGridText(event.row, G_SELECT, "-1");
            OnSelectRow();
      }

}
function OnCloseClick()
{
  
}
//----------------------------------
</script>
<body bottommargin="0" topmargin="0" leftmargin="0" rightmargin="0" >
<!-- MainTable -->

<ts-data id="dso_grd_hrco00100_0" onreceive="OnDataReceive(this)"> 
        <xml> 
            <dso  type="grid"  parameter="PK,ORG_NM,POS_TYPE,EMP_ID,FULL_NM,BIRTH_DT" 
                  function="st_hr_sel_grd_sthrco00100_0" 
				  procedure="">
                <data-inputs bind="grdEmployee">
					<data-input bind="lstOrg" ></data-input>
					<data-input bind="lstPos" ></data-input>
					<data-input bind="txtEmpID" ></data-input>
					<data-input bind="lstStatus" ></data-input>
                </data-inputs>
                <data-outputs  bind="grdEmployee"></data-outputs>
				
            </dso> 
        </xml> 
</ts-data> 
<ts-data id="dso_lst_sthrem00100_0" onreceive="OnDataReceive(this)">
    <xml>
        <dso type="list" parameter=""  function="st_hr_sel_lst_sthrco00100_0">
            <data-inputs>
                <data-input bind="txtCompanyPK" ></data-input>
            </data-inputs>
            <data-outputs>
            	<data-output bind="lstOrg"></data-output>
            	<data-output bind="lstPos"></data-output>
            	<data-output bind="lstStatus"></data-output>
            </data-outputs>
        </dso>
    </xml>
</ts-data>
<table style='margin-left:10px' align = top class="itable" cellspacing=0 cellpadding=0 border=1 style="width:100%;height:100%;" >
	<tr> 
	    <td  align = top >
		    <table align = top  width="100%" style="height:7%">
		        <tr>
			        <td align="Left">
				        <table   border="0" CELLSPACING="0" CELLPADDING="0" style="height:inherit" >
					        <tr>   
						        <td colspan="7" align="right"><font color="black"><b >Organization </b></td>
						        <td colspan="15">
								    <ts-list  id="lstOrg" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%'onchange="" />
						        </td>
						        <td colspan="7" align="right"><font color="black">
									Employee
						        </td>
						        <td colspan="15" > 
									<ts-textbox id="txtEmpID"  text="" 	maxlen = "10" styles='width:100%'  " csstype="mandatory" />
                                </td>
						        <td width="5%"  ><ts-button img="search" id="ibtnSearch" text="search" onclick="OnSearch()" imgtype="0">Search</ts-button> </td>
						        <td width="5%" ><ts-button img="close" text="Close"     id="ibtnClose" 	onclick="OnCloseClick()" imgtype="0"> Close </ts-button></td>
					        </tr>
							<tr>   
						        <td colspan="7" align="right">
						            <b>Position</b>
						        </td>
						        <td colspan="15">
									 <ts-list  id="lstPos" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%'onchange="" />
						        </td>
						        <td colspan="7" align="right"><font color="black">
						        Status
						        </td>
						        <td colspan="15">
									<ts-list  id="lstStatus" valuemember="CODE" displaymember="CODE_NM"  maxlen = "100" styles='width:100%'onchange="" />
						        </td>
						       
					        </tr>
					        
				        </table>
			        </td>
		        </tr>
		    </table>
	    </td> 		
	</tr>		   
	<tr style="width:100%;height:95%;border:0" valign=top> 
	    <td style="width:100%;height:95%;border:0" valign=top >
			    <ts-grid id="grdEmployee"  rowDblClick=OnSelectClick(sender,event) >
                                 <columns>
                                     <column text="PK"        datafield="PK"       columntype="textbox" width="100" hidden="true"></column>
                                     <column text="ORGANIZATION" datafield="ORG_NM" columntype="textbox" width="150"></column>
                                     <column text="POSITION"  datafield="POS_TYPE" columntype="textbox" width="150" ></column>
                                     <column text="EMP ID"    datafield="EMP_ID"   columntype="textbox" width="200"></column>
                                     <column text="FULL NAME" datafield="FULL_NM"  columntype="textbox" width="200"></column>
                                     <column text="BIRTH DT"  datafield="BIRTH_DT" columntype="textbox" width="200"></column>
                                 </columns>
				</ts-grid>
  	    </td>
    </tr>
</table>
</body>
<ts-textbox id="txtCode"  style="display:none" />
<ts-textbox id="txtCompanyPK" style="display: none"></ts-textbox>
</html>

				
