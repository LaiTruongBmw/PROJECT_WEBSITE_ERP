var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());




window.onload = function () {
	if(window['ctx']){
		   System.ctx = window['ctx'];
	}
	tserp.ui.parser.parse(function(){
	   if(typeof window['BodyInit'] === 'function'){
		   window['BodyInit']();
	   }
	 //translate language by page self
	 System.TranslateLanguage(undefined,'ORG2' + top.window.SYSTEM_SESSION_LANG);
	 tserp.utils.Common.createCookie('sysLangVal',top.window.SYSTEM_SESSION_LANG,1);
   });
   
    //var _tab_test = new esys.contain.Tab('#tab_test');
    // _tab_test.pageActivated.addHandler(function () {
    //    alert('chon');
    // });
    // window['tab_test'] = _tab_test;
   /* var _btn_test = new esys.input.Button('#btn_test');
    var _data = new esys.Data('dat_PL_Unit');
    console.log(_data);
    window["dat_PL_Unit"] = _data;
    var _color = new esys.input.InputMask('#txtPLPK11');
    _color.valueChanged.addHandler(function (e) {
        alert('ddddd');
    });
    //var tmp = new esys.Data('');
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var txt_date = new esys.input.InputDate('#txt_date', {
        min: new Date(2014, 8, 1),
        format: 'M/d/yyyy'
    });
    //txt_date.onTextChanged(
    txt_date.required;
    var txt_text = new esys.input.TextBox('#txt_text');
    //alert(txt_text.GetData());
    // create collectionview, grid
    //var cvGettingStarted = new esys.collections.CollectionView(),
    var gsGrid = new esys.grid.FlexGrid('#gsGrid');
    //, {
    // itemsSource: cvGettingStarted
    //  });
    var columnsDefinition = [
        { header: 'id', binding: 'id' },
        { header: 'start', binding: 'start' },
        { header: 'end', binding: 'end' },
        { header: 'country', binding: 'country' },
        { header: 'product', binding: 'product' },
        { header: 'color', binding: 'color' },
        { header: 'amount', binding: 'amount' },
        { header: 'active', binding: 'active' }
    ];
    gsGrid.initialize({
        // isReadOnly: true,
        //autoGenerateColumns: false,
        columns: columnsDefinition
    });
    gsGrid.itemsSourceChanged.addHandler(function () { });*/
	//BodyInit();
};
//# sourceMappingURL=app.js.map