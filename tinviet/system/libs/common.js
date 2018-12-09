

var CDelimiter = "|!";
var RDelimiter = "|@";


function AddEventToCtrl(obj, eventname, fnName){
	var _cellclick = fnName;
    
    if(_cellclick!= null && _cellclick != '' && _cellclick != undefined){
    	    var n = _cellclick.indexOf("(");
    	    var fn = _cellclick;
    	    if(n > -1){
    	    	var fn  = _cellclick.substr(0,n);
    	    }
    	    obj.on(eventname,window[fn]);
    }
}

function getFnNameFromString(str){
	var s = str                               // " fnname (a, b, c);"
    .substring(  
      0,           
      str.indexOf('(')
    );
	return s;
}

function getFnArgFromString (str) {
	  // Extract function string representation: hopefully we can count on it ?
	  var s = str;

	  // The cool thing is: this can only be a syntactically valid function declaration
	  s = s                               // "function name (a, b, c) { body }"
	    .substring(                       //                "a, b, c"
	      s.indexOf('(')+1,               // ----------------^
	      s.indexOf(')')                  //                 ------^
	    );

	  // Cleanup the string, ignore spaces and linefeeds, only identifiers matter
	  s = s.replace(/[\r\n\s]*/g, '');    // "a,b,c"

	  // Let's be ES6-ready: any argument can be followed by '= default value'
	  s = s                               // a,b="\"toto\"",c='hello',d=3342,e,f
	    .replace(/\\+['"]/g, '')          // a,b="toto",c='hello',d=3342,e,f
	    .replace(/=\s*(["']).*?\1/g, '')  // a,b,c,d=3342,e,f
	    .replace(/=.*?(,|$)/g, '')        // a,b,c,d,e,f
	    .replace(/^\'/, "")               // 'a
	    .replace(/^\"/, "")               //  "a
	    .replace(/\'$/, "")               //  a'
	    .replace(/\"$/, "");              //  a"
	  /*if(s.startsWith('\'')){
		  s = s.substr(1);
	  }
	  if(s.startsWith('"')){
		  s = s.substr(1);
	  }
	  if(s.endsWith('\'')){
		  s = s.substr(0, s.indexOf('\'')-1);
	  }
	  if(s.endsWith('"')){
		  s = s.substr(0, s.indexOf('"')-1);
	  }*/

	  return s.split(',');                // ["a", "b", "c"]
	};
 
function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
}
function getwidthfromDrawData(val) {
    if (val == undefined) {
        return 0;
    }
    if (val == '') {
        return 0;
    }
    return val;

}

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

function AddComma( s )
{
	var digit  = s.split( "." );
	var ret ="";
	var i;
	
	for ( i = 0; i< digit[0].length ; i++ )
	{
		
		if ((( digit[0].length - i) %3) == 0) 
			if ( ret.length > 0 && ret != "-" ) ret += ",";
		

		ret += digit[0].charAt(i) ;
		
		
	}	


	if ( digit.length > 1 )
	{
		ret += "." + digit[1]
	}
	
	return ret;
	
}

function HasSpecialChar(str) {
	// General Special Mark Check

	var 	special_list = new Array("~", "@", "#", "$", "&", "*", "<", ">", ",", "\\", "\"", "`" , "'" , "/" ,":" , "|" , "?");
	
	for (i = 0; i < str.length; i++) 
		for (j = 0; j < special_list.length+1; j++) 
			if (str.charAt(i) == special_list[j]) {
				alert("Cannot Write all of this special mark ~@#$&*<>,\\\"`'/:|? .");
				return true;
			}
	
	return false;
}


function ConvertHTMLReserved( str )
{
	
	var re ;
	var s = str;
	
	
	
	re = />/g; 
   	s = s.replace(re, "&gt;");    

	re = /</g; 
   	s = s.replace(re, "&lt;");    
   	
	return s;
}

function MD( sdate, edate )
{
	return '<input name="sdate" type="hidden" value="'+sdate+'"> <input name="edate" type="hidden" value="'+edate+'">'
}


function M( name , value )
{
  
   	var obj=document.createElement("<INPUT TYPE='HIDDEN' NAME='" + name + "' >");
	idfrm.appendChild(obj);
	obj.value = value;
}

function cnvdd_mm_yyyy_2_yyyy_mm_dd(val){
	if(val == "")
		return "";
	var s = String(val).replaceAll2('/','-').split("-");
	return s[2] + "-" + s[1] + "-" + s[0]; 

}

function cnvdd_mm_yyyy_2_yyyymmdd(val){
	if(val == "")
		return "";
	if(String(val).length == 10){
		var localTime  = moment(val,'DD-MM-YYYY').toDate();
	    localTime = moment(localTime).format('YYYYMMDD');
	  return localTime;
	}
	else{
	 var localTime  = moment.utc(val).toDate();
	    localTime = moment(localTime).format('YYYYMMDD');
	  return localTime;
	}
	//var s = String(val).replaceAll2('/','-').split("-");
	//return s[2]  + s[1]  + s[0]; 

}

function cnvyyyymmdd_2_dd_mm_yyyy(val){
	
	if(val == "")
		return "";
	if(val instanceof Date)
		return val;
	console.log(val);
	return val.substr(6,2) + "-" + val.substr(4,2) + "-" + val.substr(0,4); 

}

function ControlEventHandle( dsoid , type )
{
	if ( dsoid )
	{
		if ( type ==  -1 )
			CallDSO( dsoid );
		else
		if ( type < 3 ) 
			CallDSOSQL( dsoid , type );
		else
		{
			var grid = System.FindGrid( this, dsoid );	
			
			if (! grid )
			{
				grid = dsoid;				
			}
			
			
			if ( type == 3 )
				grid.DeleteRow();
			else
			if ( type == 4 )			
				grid.AddRow();
			else
			if ( type == 5 )			
				grid.UpRow();
			else
			if ( type == 6 )			
				grid.DownRow();
			
			
		}
		
		
	}	
}


function GetPosTop( obj )
{
	var top = this.screenTop;
	top += obj.offsetHeight;
	
	while ( obj.tagName != "BODY"  )
	{
		
		top += obj.offsetTop;
		obj = obj.offsetParent;
		
		
	}

	top -=obj.scrollTop;
	
	return top;
}

function GetPosLeft( obj )
{
	var left = this.screenLeft

	//left += obj.offsetWidth ;
	while ( obj.tagName != "BODY" )
	{
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}

	left -=obj.scrollLeft;
	return left;
}


function AddDateDelimiter( s )
{

	return s.substring( 0, 4 ) +"/"+ s.substring( 4, 6 ) +"/" +  s.substring( 6, 8  ) ;
}
	
function DelDateDelimiter( s )
{
		return s.substring( 0, 4 ) +  s.substring( 5, 7 )  + s.substring( 8, 10 ) ;
}


function DSOObject(  value )
{
    this.value = value;
    this.toString = DSOObjectValue;
    this.GetData = DSOObjectGetData;
    this.SetData = DSOObjectSetData;
    this.SetDataText = DSOObjectSetDataText;
}

function DSOObjectValue()
{
	return this.value;	
}

function DSOObjectGetData()
{
	return this.value;
}

function DSOObjectSetData( data )
{
	
	if ( data )
		this.value = data.text ;
	else
		this.value = "";
	
}

function DSOObjectSetDataText( txt )
{
	this.value = txt;	
}
function FindObjectPos( obj , posinfo )
{

	var pobj ;
	
	var x = 0  , y = 0 ;
	
	
	pobj = obj;
	
	while ( pobj )
	{
		x += pobj.offsetLeft;
		y += pobj.offsetTop;
		
		// alert( pobj.offsetLeft + "="+pobj.outerHTML );
		
		if ( pobj != obj && pobj.offsetParent && pobj.tagName != "TABLE")
		{
			// alert( pobj.clientLeft + ":" + pobj.clientTop + "/" + pobj.offsetLeft + "="+pobj.outerHTML);
			x += pobj.clientLeft;
			y += pobj.clientTop;
			
		}
		pobj = pobj.offsetParent;	
	}

	
	posinfo.x = x;
	posinfo.y = y;
	posinfo.width = obj.offsetWidth;
	posinfo.height = obj.offsetHeight;

	
}

function formatNumber ( value , format)
{
var bDigitCutMethod  = 0;	// 0 : Floor , 1 : Round , 2 : Ceil
var bConvertNumber = true ; 
var nFixedPoint = 0;
var nStart0 = 0;
var nSep = 3;
var nSepChar = "";	

var digitarea  = format ; 
	
	var otherarea = "";
		var i , j;
		
		i = digitarea.lastIndexOf( "0" );
		j = digitarea.lastIndexOf( "#" );
		
		if ( i < 0 && j < 0 ) 
		{
			alert( "["+ digitarea + "] Format Error" );
		}
		
		if ( j > i ) i = j;
		
		otherarea = digitarea.substring( i + 1 );
		digitarea = digitarea.substring( 0 , i+1 );
	
		for ( i = 0 ; i < otherarea.length ; i++ )
		{
			switch ( otherarea.charAt(i) )
			{
				case "C":
					bDigitCutMethod  = 2;

					break;
				case "F":
					bDigitCutMethod  = 0;
					break;
					
				case "R":
					bDigitCutMethod  = 1;
					break;
					
				case "T":
					bConvertNumber = true; 				
					break;
			}
		}	

		nStart0 = -1; 
		nFixedPoint = -1;
		nSep = -1;

		j = 0;
		
		for ( i = 0 ; i < digitarea.length; i ++ )
		{
			var ch = digitarea.charAt(i);
			
			if ( ch == "0"  ) nStart0 = j;
			
			if ( ch == "." ) nFixedPoint = j
			else
			if ( ch == "#" || ch == "0" ) 
				j++;
			else
			{
				nSep = j;
				nSepChar = ch;
			}
		}	

		if ( nFixedPoint >= 0 ) 
			nFixedPoint = j - nFixedPoint ;
		else
			nFixedPoint = 0;

		if ( nStart0 > -1 )
		{
			nStart0 = ( j - nStart0 ) - nFixedPoint -1;
			if ( nStart0 >= 0 ) nStart0 ++;
		}
		else
			nStart0 = 0;
		
		if ( nSep >=0 )
		{
		
			nSep = ( j - nSep ) - nFixedPoint ;
			
		}

	var i , j;
	
	var str="";
	var bPoint = false;
	
	for ( i = 0 ; i < value.length ; i++ )	
	{
		var ch = value.charAt(i);
		
		if (( ch >= "0" && ch <= "9" ) )
			str += ch;
		else
		if ( ch == "."  && !bPoint) 
		{
			str += ch; 
			bPoint = true;
		} else
		if (ch =="-" && str.length==0) 
		{
			str += ch; 
		}
	}

	var nm = new Number( str );

	if (isNaN (nm)  )
		nm = 0;
	
	if ( bConvertNumber ) 
	{
		nm = nm * Math.pow( 10 , nFixedPoint );
		
		switch ( bDigitCutMethod )
		{
			case 0 :
				nm = Math.floor( nm );
				break;
			case 1:
				nm = Math.round( nm );
				break;
			case 2:
				nm = Math.ceil( nm );
				break;
		}
		nm = nm / Math.pow( 10 , nFixedPoint );
	}
		
	return nm.toString();
}

function IsNumeric(sText)
{
   var ValidChars = "0123456789.";
   var Char;

   for (i = 0; i < sText.length; i++) 
   { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
      {
         return false;
      }
   }
   return true;
}

function Round(value, dec){
    return Math.round(value*Math.pow(10,dec))/Math.pow(10,dec);
}
function RemoveComma(value){
    text = new String(value);
    var bPoint = false;
    var str="";
    for ( i = 0 ; i < text.length ; i++ )	
	{
		var ch = text.charAt(i);
		
		if (( ch >= "0" && ch <= "9" ) )
			str += ch;
		else
		if ( ch == "."  && !bPoint) 
		{
			str += ch; bPoint = true;
		} else
		if (ch =="-" && str.length==0) 
		{
			str += ch; 
		}
	}
	return str;
}




function addListenerWithArgs(elem, evt, func, vars){
    var f = function(ff, vv){
            return (function (){
                ff(vv);
            });
    }(func, vars);

    if (elem.addEventListener) {                    // For all major browsers, except IE 8 and earlier
    	elem.addEventListener(evt, f);
	} else if (elem.attachEvent) {                  // For IE 8 and earlier versions
		elem.attachEvent("on" + evt , f);
	}
    elem.addEventListener(evt, f);

    return f;
}

function GetUserMessage(strObj){
	 if(strObj !=""){
		var vStart= strObj.indexOf(":"); 
		strObj = strObj.substring(vStart+1, strObj.length -1 );
		 vStart= strObj.indexOf(":"); 
	   var vEnd =  strObj.indexOf("ORA-"); 
	   if(vStart !='' && (0 <vEnd)){
		  return strObj.substring(0, vEnd );
	   }
	 }
	 
}