<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.DefaultPage" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>CODE</title>
<script>
function BodyInit()
{
   
}
function OnAddnew()
{
    grdCommCode.AddRow();    
}
function OnSearch()
{
    data_CommCode.Call("SELECT");
}
function OnDelete()
{
    if(confirm('Are you sure you want to delete ?'))
	{
        grdCommCode.DeleteRow();
        data_CommCode.Call();
    }
}
function OnSave()
{
    if(CheckData())
    {
        data_CommCode.Call();
     }
}
function CheckData()
{
    console.log(grdCommCode.rows);
    for(var i=1;i<grdCommCode.rows;i++)
          {
            if(grdCommCode.GetGridData(i,2) == "")
             {
                alert("Please input code at row " +i);
                
                return false;
             }
             if(grdCommCode.GetGridData(i,4) == "")
             {
                alert("Please input name at row "+i);
                return false;
             }  
          }
          return true;
}
function OnDataReceiveColor()
{
   
}
</script>
</head>
<body>
<!----------------------------------------------------------------------------------------------->
<ts-data id="data_CommCode"  onreceive="OnDataReceiveColor()" > 
    <xml> 
        <dso  type="grid"   parameter="ORD,PARENT_CODE,CODE,NAME,LNAME,FNAME,NUM1,NUM2,NUM3,VAL1,VAL2,VAL3,DESCR,USE_YN,SYS_YN,PK" function="lg_sel_stagco0010" procedure="ht_upd_agco0010"> 
            <data-inputs bind="grdCommCode">                   
                <data-input bind="txtCode_Name"  ></data-input>
            </data-inputs>
            <data-outputs bind="grdCommCode" />
        </dso> 
    </xml> 
</ts-data>
<!----------------------------------------------------------------------------------------------->
    <table style="width: 100%; height: 100%" cellpadding="0" cellspacing="0" border="0">
        <tr style="width: 100%; height: 5%">
            <td width="100%">
                <fieldset style="width: 100%; height: 100%">
                                            <table border="0" width="100%" id="table2">
                                                <tr>
                                                    <td width="13%">
                                                        Code/Name :</td>
                                                    <td width="22%">
                                                        <ts-textbox id="txtCode_Name" styles="width:100%" onkeyup="OnSearch()" />
                                                    </td>
                                                    <td width="1%"></td>
                                                    <td width="3%">
                                                     <ts-button id="btn_test2" onclick="OnSearch()" value="Search" img="search" imgtype="0"></ts-button>                                                                                            
                                                    </td>
                                                    <td width="3%">                                                        
                                                            <ts-icon id="btnNew" name="plus" title="new" onclick="OnAddnew()"></ts-icon>
                                                    </td>
                                                    <td width="3%">
                                                            <ts-icon id="btnDelete" name="trash" title="delete" onclick="OnDelete()"></ts-icon>
                                             
                                                    </td>
                                                    <td width="3%">
                                                            <ts-icon id="btnSave" name="save" title="save" onclick="OnSave()"></ts-icon>
                                                    </td>
                                                    <td width="35%"></td>
                                                </tr>
                                            </table>
                </fieldset>
                                   
            </td>
        </tr>
        <tr style="width: 100%; height: 95%">
            <td width="100%">
                <table align="top" cellspacing="0" cellpadding="0" border="0" style="width: 100%;
                    height: 100%;">
                    <tr valign="top">
                        <td width="100%">                            
                            <ts-grid id="grdCommCode" sortable="true" editable="true" selectionmode="singlecell">
                                <columns>
                                   <column text="Order" datafield="ORD" width="100" columntype="textbox" editable="true"></column>
                                   <column text="Parent Code" datafield="PARENT_CODE"  width="150" columntype="textbox" editable="true"></column>
                                   <column text="Code" datafield="CODE" width="150" columntype="textbox" editable="true"></column>
                                   <column text="Name" datafield="NAME"  width="200" columntype="textbox" editable="true"></column>
                                   <column text="LName" datafield="LNAME"  width="200" columntype="textbox" editable="true"></column>
                                   <column text="FName" datafield="FNAME"  width="200" columntype="textbox" editable="true"></column>
                                   <column text="Num1" datafield="NUM1"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Num2" datafield="NUM2"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Num3" datafield="NUM3"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Value1" datafield="VAL1"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Value2" datafield="VAL2"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Value3" datafield="VAL3"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Description" datafield="DESCR"  width="250" columntype="textbox" editable="true"></column>
                                   <column text="Use YN" datafield="USE_YN"  width="250" columntype="checkbox" editable="true"></column>
                                   <column text="System YN" datafield="SYS_YN"  width="250" columntype="checkbox" editable="true"></column>
                                   <column text="PK" datafield="PK" columntype="textbox"   hidden="true" width="0" editable="true"></column>
                               </columns>
                           </ts-grid>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <ts-textbox id="txt_pk" style="display:none"/>
</body>
</html>
