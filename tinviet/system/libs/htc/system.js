var System = this;
ctx='';

function GetChildNodes(elem, nodeName) {
	var rs = [];
	if(nodeName){
		if (typeof elem.children === 'object') {
	        rs = elem.children;
	    } else if (typeof elem.childNodes === 'object') {
	    	for(var i = 0; i<elem.childNodes.length;i++ ){
	    		if(elem.childNodes[i].tagName == "SPAN"){
	    			rs[rs.length] = elem.childNodes[i];
	    		}
	    	}
	    }
	}else{
		if (typeof elem.children === 'object') {
	        rs = elem.children;
	    } else if (typeof elem.childNodes === 'object') {
	    	for(var i = 0; i<elem.childNodes.length;i++ ){
	    			rs[rs.length] = elem.childNodes[i];
	    	}
	    }
	}
    return rs;
}