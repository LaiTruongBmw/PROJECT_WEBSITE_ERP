<%@ Page Language="C#" AutoEventWireup="true" Inherits="TSERP.Core.Web.ClassicMenu" %>
<!DOCTYPE html>
<html lang="vi" style="height: 100%;">
<head>
    <title>Menu List</title>
    <link href="menu/classic/css/menu.css" rel="stylesheet" />
    <script src="menu/classic/js/utils.js"></script>
    <script src="menu/classic/js/menuKeyboard.js"></script>

    <script type="text/javascript"> 
    var SystemMenu = this;
    top.window.SystemRef = this;
    var baseDirection = "";

      function onLoadDo() {
        enableShortcuts('menu');
        setMenuElementFocus('firstElement');
		var test = "<%=Session["USER_PK"]%>";
      }     

        function BodyInit()
        {
           ////onLoadDo();
           //OnLoadMenu();
        }
        function OnDataReceive(p_oData)
        {
            var user_id     = "<%=Session["User_ID"]%>";
            if(p_oData.id == "dataGetDictionnary"){
                BindDictionaryToArray(event.array);
                var announce_yn = "<%=Session["ANNOUNCE_YN"] %>";
     
                if(announce_yn == "Y"){
                    System.Menu.NewWindow( "../form/ag/as/agas0020_index.aspx" , "News", "News", "News" );
                }
                else{
                   System.Menu.UpdateLanguageToForm();
                }
            }
    
        }
        function IsOpenWindow(from_user){
            if(System.S_ArrUserChat == null){
                System.S_ArrUserChat = new Array();
                return false;
            }
            for(var i=0;i<System.S_ArrUserChat.length;i++){
                if(System.S_ArrUserChat[i] == from_user){
                    return true;
                }
            }
            return false;
        }
        function BindDictionaryToArray(arr)
        {
            System.S_ArrDict = new Array();
    
            for(var i=0;i<arr.length;i++)
            {
               var tmp=new Array();
       
               tmp[tmp.length]=arr[i][0];//key
               tmp[tmp.length]=arr[i][1];//eng
               tmp[tmp.length]=arr[i][2];//user language
       
               System.S_ArrDict[System.S_ArrDict.length]=tmp;
            }
    
        }
        function OnLoadMenu()
        {
            System.S_UserID = "<%=Session["User_ID"] %>";
            System.S_UserName = "<%=Session["User_Name"] %>";
            //if language is ENG then no need to load dictionnary
            if(txtLang.text != "ENG"){
                dataGetDictionnary.Call("SELECT");
            }
            else{
                var announce_yn = "<%=Session["ANNOUNCE_YN"] %>";
                //alert(announce_yn)
                if(announce_yn == "Y"){
                    System.Menu.NewWindow( "../form/ag/as/agas0020_index.aspx" , "News", "News", "News" );
                }
                else{
                   System.Menu.UpdateLanguageToForm();
                }
            }
        }
function NewWindow( url, Title, lTitle, fTitle,  menu_cd,menu_id, menu_path )
{  
	 top.idTab.NewWindow(url, Title, lTitle, fTitle,  menu_cd,menu_id, menu_path);
}

</script>
</head>

<body>
    <!----------------------------------------------------------------------------------->
   <ts-data id="dataGetDictionnary"  onreceive="OnDataReceive(this)" > 
        <xml> 
            <dso id="1" type="array" parameter="0,1,2" function="sp_es_sel_dictionnary" > 
                <data-inputs bind="noneed" > 
                    <data-input bind="txtLang" ></data-input>
                </data-inputs> 
                <data-outputs bind="noneed"></data-outputs>
            </dso> 
        </xml> 
 </ts-data>
    <!----------------------------------------------------------------------------------->

    <table style="width:100%" border="0">
         <tr>
            <td valign="top">
                <div id="Menu_Client" style="overflow: auto;">
                    <table cellspacing="0" cellpadding="0" id="paramMenu" >
                       
                      <%=WriteMenu()%>
                    </table>
                </div>
            </td>
        </tr>
    </table>
    <!----------------------------------------------------------------------------------->
    
    <input type="hidden" id="txtLang"  value="<%= CurrentSession.LoginInfo.SessionLang%>" />
    <input type="hidden"  id="txtUserID"  value="<%=CurrentSession.LoginInfo.UserId%>" />
</body>
</html> 