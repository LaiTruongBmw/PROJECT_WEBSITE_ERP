/**
 * 
 */
String.prototype.trim= String.prototype.trim || function(){
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
}

String.prototype.replaceAll = String.prototype.replaceAll || function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.replaceAll2 = function (token, newToken, ignoreCase) {
    var _token;
    var str = this + "";
    var i = -1;

    if (typeof token === "string") {

        if (ignoreCase) {

            _token = token.toLowerCase();

            while ((
                i = str.toLowerCase().indexOf(
                    _token, i >= 0 ? i + newToken.length : 0
                )) !== -1
            ) {
                str = str.substring(0, i) +
                    newToken +
                    str.substring(i + token.length);
            }

        } else {
            return this.split(token).join(newToken);
        }

    }
    return str;
};


JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof (v);
            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


function isRegistered(name) {
    if (window.CustomElements && window.CustomElements.registry)
        return name in window.CustomElements.registry;
    return undefined;
}

function booleanToString(bvalue) {
    switch (bvalue) {
        case "true": case "yes": case true: return 'Y';
        case "false": case "no": case false: case null: return 'N';
        default: return String(bvalue);
    }
}

function stringToBoolean(str) {
    switch (String(str).toLowerCase().trim()) {
        case "true": case "yes": case "1": case "T": case "y": return true;
        case "false": case "no": case "0": case "F": case "n": case null: case 'undefined': case undefined: return false;
        default: return Boolean(str);
    }
}

var parseBool = function (str) {
    // console.log(typeof str);
    // strict: JSON.parse(str)

    if (str == null)
        return false;

    if (typeof str === 'boolean') {
        if (str === true)
            return true;

        return false;
    }

    if (typeof str === 'string') {
        if (str == "")
            return false;

        str = str.replace(/^\s+|\s+$/g, '');
        if (str.toLowerCase() == 'true' || str.toLowerCase() == 'yes' || str.toLowerCase() == 't')
            return true;

        str = str.replace(/,/g, '.');
        str = str.replace(/^\s*\-\s*/g, '-');
    }

    // var isNum = string.match(/^[0-9]+$/) != null;
    // var isNum = /^\d+$/.test(str);
    if (!isNaN(str))
        return (parseFloat(str) != 0);

    return false;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}


//insertAdjacentHTML simply isn't a supported function. Add this to your script: 
//insertAdjacentHTML(), insertAdjacentText() and insertAdjacentElement () 
//for Netscape 6/Mozilla by Thor Larholm me@jscript.dk 
//Usage: include this code segment at the beginning of your document 
//before any other Javascript contents. 
/*
if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement)
{ 
	HTMLElement.prototype.insertAdjacentElement = function (where,parsedNode){ 
		switch (where){
		case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode,this)
			break;
			case 'afterBegin':
				this.insertBefore(parsedNode,this.firstChild);
				break;
			case 'beforeEnd':
					this.appendChild(parsedNode);
					break;
			case 'afterEnd':
				if (this.nextSibling)
					this.parentNode.insertBefore(parsedNode,this.nextSibling);
				else this.parentNode.appendChild(parsedNode);
				break;
				} 
	}

HTMLElement.prototype.insertAdjacentHTML = function 
(where,htmlStr) 
{ 
var r = this.ownerDocument.createRange(); 
r.setStartBefore(this); 
var parsedHTML = r.createContextualFragment(htmlStr); 
this.insertAdjacentElement(where,parsedHTML) 
} 


HTMLElement.prototype.insertAdjacentText = function 
(where,txtStr) 
{ 
var parsedText = document.createTextNode(txtStr) 
this.insertAdjacentElement(where,parsedText) 
} 
}*/

if(HTMLElement.prototype.insertAdjacentHTML == undefined) {
    HTMLElement.prototype.insertAdjacentElement = function(where, node) {
        switch (where) {
            case "beforeBegin":
                this.parentNode.insertBefore(node, this);break;
            case "afterBegin":
                this.insertBefore(node, this.firstChild);break;
            case "beforeEnd":
                this.appendChild(node);break;
            case "afterEnd":
                if (this.nextSibling)
                    this.parentNode.insertBefore(node, this.nextSibling);
                else
                    this.parentNode.appendChild(node);
                break;
        }
    }
    HTMLElement.prototype.insertAdjacentHTML = function(where, html) {
        var r = this.ownerDocument.createRange();
        r.setStartBefore(this);
        var parsedHTML = r.createContextualFragment(html);
        this.insertAdjacentElement(where, parsedHTML);
    }
    HTMLElement.prototype.insertAdjacentText = function(where, txt) {
        var parsedText = document.createTextNode(txt);
        this.insertAdjacentElement(where, parsedText);
    }
}



if (!String.prototype.trim) {
	  String.prototype.trim = function () {
	    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	  };
}