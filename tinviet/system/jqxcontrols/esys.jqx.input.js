var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var esys;
(function (esys) {
    var jqxctrl;
    (function (jqxctrl) {
        var jqxBaseControl = (function () {
            function jqxBaseControl(selector) {
                this._disabled = false;
                this._id = '';
                this._height = '26px';
                this._rtl = false;
                this._theme = esys.System.getTheme() || 'energyblue';
                this._width = null;
                this._InitControl = true;
                this._template = null;
                this._Gb_Text_DefStyle = "border:1px solid #6B9EB8;";
                this._Gb_Text_GenStyle = "background-color:white;border:1px solid #6B9EB8; color: #000000;";
                this._Gb_Text_FltStyle = "background-color:#EBEBEB;border:1px solid #6B9EB8;color: #000000;";
                this._Gb_Text_ManStyle = "background-color:#FFFAAF;border:1px solid #6B9EB8;color: #000000;";
                this._InitControl = true;
                this.hostElement = esys.getElement(selector);
                this.id = this.hostElement.id;
            }
            Object.defineProperty(jqxBaseControl.prototype, "Gb_Text_DefStyle", {
                get: function () {
                    return this._Gb_Text_DefStyle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "Gb_Text_GenStyle", {
                get: function () {
                    return this._Gb_Text_GenStyle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "Gb_Text_FltStyle", {
                get: function () {
                    return this._Gb_Text_FltStyle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "Gb_Text_ManStyle", {
                get: function () {
                    return this._Gb_Text_ManStyle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "disabled", {
                get: function () {
                    return this._disabled;
                },
                set: function (value) {
                    this._disabled = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "height", {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "rtl", {
                get: function () {
                    return this._rtl;
                },
                set: function (value) {
                    this._rtl = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "theme", {
                get: function () {
                    return this._theme;
                },
                set: function (val) {
                    this._theme = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "template", {
                get: function () {
                    return this._template;
                },
                set: function (val) {
                    this._template = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "width", {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (val) {
                    this._value = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(jqxBaseControl.prototype, "id", {
                get: function () {
                    return this._id;
                },
                set: function (val) {
                    this._id = val;
                },
                enumerable: true,
                configurable: true
            });
            jqxBaseControl.prototype.SetEnable = function (v) {
                this.disabled = !v;
            };
            jqxBaseControl.prototype.setEnable = function (v) {
                this.disabled = !v;
            };
            jqxBaseControl.prototype.GetData = function () {
                this.value;
            };
            jqxBaseControl.prototype.SetData = function (v) {
                this.value = v;
            };
            jqxBaseControl.prototype._registerEvent = function (_ctrl, eventname, fnName) {
                var _eventfn = fnName;
                if (_eventfn != null && _eventfn != '' && _eventfn != undefined) {
                    var n = _eventfn.indexOf("(");
                    var fn = _eventfn;
                    if (n > -1) {
                        var fn = _eventfn.substr(0, n);
                    }
                    if (typeof window[fn] === 'function') {
                        $('#' + _ctrl).on(eventname, esys.utils.Common.getFnArgFromString(fnName), window[fn]);
                    }
                }
            };
            jqxBaseControl.prototype.ElementTranferInfo = function () {
            };
            jqxBaseControl.prototype._replateEvent = function (_crt, evantName) {
                if (_crt.getAttribute(evantName) != null) {
                    _crt.setAttribute(evantName.replace("on", ""), _crt.getAttribute(evantName));
                    _crt.removeAttribute(evantName);
                }
            };
            jqxBaseControl.prototype.writeProperty = function (key, event, base, desc) {
                if (desc)
                    event[key] = base[key];
                else
                    Object.defineProperty(event, key, {
                        writable: true,
                        enumerable: true,
                        value: base[key]
                    });
            };
            jqxBaseControl.prototype.inheritEvent = function (event, base) {
                var skipProps = {};
                for (var z in document.createEvent('CustomEvent'))
                    skipProps[z] = 1;
                var desc = Object.getOwnPropertyDescriptor(event, 'target');
                for (var z in base) {
                    if (!skipProps[z])
                        this.writeProperty(z, event, base, desc);
                }
                event.baseEvent = base;
            };
            jqxBaseControl.prototype.fireEvent = function (element, type, options) {
                var event = document.createEvent('CustomEvent');
                options = options || {};
                event.initCustomEvent(type, options.bubbles !== false, options.cancelable !== false, options.detail);
                if (options.baseEvent)
                    this.inheritEvent(event, options.baseEvent);
                element.dispatchEvent(event);
            };
            return jqxBaseControl;
        }());
        jqxctrl.jqxBaseControl = jqxBaseControl;
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(selector) {
                _super.call(this, selector);
                this._textImageRelation = 'imageBeforeText';
                this._textPosition = 'left';
                this._roundedCorners = 'all';
                this._imgPosition = 'left';
                this._imgHeight = 16;
                this._imgWidth = 16;
                this._imgSrc = null;
                this._img = null;
                var p = this.ElementTranferInfo();
                if (this.hostElement.getAttribute('onclick') != null) {
                    this.hostElement.setAttribute('click', this.hostElement.getAttribute('onclick'));
                    this.hostElement.removeAttribute('onclick');
                }
                this._jqxbtn = jqwidgets.createInstance(selector, 'jqxButton', p);
                this._InitControl = false;
                this._registerEvent(this.id, 'click', this.hostElement.getAttribute('click'));
            }
            Object.defineProperty(Button.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (txt) {
                    this.value = txt;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "disabled", {
                get: function () {
                    return this._disabled;
                },
                set: function (val) {
                    this._disabled = val;
                    if (this._InitControl == false) {
                        this._jqxbtn.disabled = this._disabled;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "height", {
                get: function () {
                    return this._height;
                },
                set: function (val) {
                    this._height = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'height': this._height });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "img", {
                get: function () {
                    return this._img;
                },
                set: function (val) {
                    this._img = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "imgSrc", {
                get: function () {
                    if (this.img != null) {
                        return esys.System.ctx + 'system/image/button/' + this.img + '.png';
                    }
                    else {
                        return this._imgSrc;
                    }
                },
                set: function (val) {
                    this._imgSrc = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'imgSrc': this._imgSrc });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "imgWidth", {
                get: function () {
                    return this._imgWidth;
                },
                set: function (val) {
                    this._imgWidth = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'imgWidth': this._imgWidth });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "imgHeight", {
                get: function () {
                    return this._imgHeight;
                },
                set: function (val) {
                    this._imgHeight = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'imgHeight': this._imgHeight });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "imgPosition", {
                get: function () {
                    return this._imgPosition;
                },
                set: function (val) {
                    this._imgPosition = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'imgPosition': this._imgPosition });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "roundedCorners", {
                get: function () {
                    return this._roundedCorners;
                },
                set: function (val) {
                    this._roundedCorners = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'roundedCorners': this._roundedCorners });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "textPosition", {
                get: function () {
                    return this._textPosition;
                },
                set: function (val) {
                    this._textPosition = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'textPosition': this._textPosition });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "textImageRelation", {
                get: function () {
                    return this._textImageRelation;
                },
                set: function (val) {
                    this._textImageRelation = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'textImageRelation': this._textImageRelation });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "width", {
                get: function () {
                    return this._width;
                },
                set: function (val) {
                    this._width = val;
                    if (this._InitControl == false) {
                        $('#' + this.id).jqxButton({ 'width': this._width });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (val) {
                    this._value = val;
                    if (this._InitControl == false) {
                        this._jqxbtn.value = this._value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.focus = function () {
                this._jqxbtn.focus();
            };
            Button.prototype.ElementTranferInfo = function () {
                this.value = this.hostElement.getAttribute('value') || '';
                this.height = this.hostElement.getAttribute('height') || this.height;
                this.width = this.hostElement.getAttribute('width') || this.width;
                this.imgWidth = esys.utils.Converter.ObjectToFloat(this.hostElement.getAttribute('imgWidth')) || this.imgWidth;
                this.imgHeight = esys.utils.Converter.ObjectToFloat(this.hostElement.getAttribute('imgHeight')) || this.imgHeight;
                this.imgPosition = this.hostElement.getAttribute('imgPosition') || this.imgPosition;
                this.textPosition = this.hostElement.getAttribute('textPosition') || this.textPosition;
                this.roundedCorners = this.hostElement.getAttribute('roundedCorners') || this.roundedCorners;
                this.textImageRelation = this.hostElement.getAttribute('textImageRelation') || this.textImageRelation;
                this.rtl = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('rtl')) || this.rtl;
                this.imgSrc = this.hostElement.getAttribute('imgSrc') || this.imgSrc;
                var p = {
                    value: this.value,
                    height: this.height,
                    width: this.width
                };
                if (this.imgSrc != null) {
                    p["imgSrc"] = this.imgSrc;
                    p["imgWidth"] = this.imgWidth;
                    p["imgHeight"] = this.imgHeight;
                    p["imgPosition"] = this.imgPosition;
                    p["textPosition"] = this.textPosition;
                    p["textImageRelation"] = this.textImageRelation;
                }
                p["rtl"] = this.rtl;
                p["theme"] = this.theme;
                p["template"] = this.template;
                p["width"] = this.width;
                p["value"] = this.value;
                p["roundedCorners"] = this.roundedCorners;
                return p;
            };
            return Button;
        }(jqxBaseControl));
        jqxctrl.Button = Button;
        var Input = (function (_super) {
            __extends(Input, _super);
            function Input(selector) {
                _super.call(this, selector);
                this._readonly = false;
                this._displayMember = "";
                this._renderer = null;
                this._source = null;
                var p = this.ElementTranferInfo();
                if (this.hostElement.getAttribute('onclick') != null) {
                    this.hostElement.setAttribute('click', this.hostElement.getAttribute('onclick'));
                    this.hostElement.removeAttribute('onclick');
                }
                if (this.hostElement.getAttribute('onchange') != null) {
                    this.hostElement.setAttribute('change', this.hostElement.getAttribute('onchange'));
                    this.hostElement.removeAttribute('onchange');
                }
                if (this.hostElement.getAttribute('onclose') != null) {
                    this.hostElement.setAttribute('close', this.hostElement.getAttribute('onclose'));
                    this.hostElement.removeAttribute('onclose');
                }
                if (this.hostElement.getAttribute('onselect') != null) {
                    this.hostElement.setAttribute('select', this.hostElement.getAttribute('onselect'));
                    this.hostElement.removeAttribute('onselect');
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                if (this.style) {
                    this.hostElement.innerHTML = "<input id='" + this.id + "_" + this._gwrandomId + "' type='text' style='" + this.style + "' />";
                }
                else {
                    this.hostElement.innerHTML = "<input id='" + this.id + "_" + this._gwrandomId + "' type='text' />";
                }
                if (this.name == null) {
                    this.name = this.id;
                }
                this._host = this.hostElement.childNodes[0];
                this._jqxtextbox = jqwidgets.createInstance(selector + "_" + this._gwrandomId, 'jqxInput', p);
                this._InitControl = false;
                this._registerEvent(this.id, 'click', this.hostElement.getAttribute('click'));
                this._registerEvent(this.id, 'change', this.hostElement.getAttribute('change'));
                this._registerEvent(this.id, 'close', this.hostElement.getAttribute('close'));
                this._registerEvent(this.id, 'select', this.hostElement.getAttribute('select'));
            }
            Object.defineProperty(Input.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (val) {
                    this.hostElement.setAttribute('name', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "style", {
                get: function () {
                    return this.hostElement.getAttribute('style');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "readonly", {
                get: function () {
                    return this._readonly;
                },
                set: function (value) {
                    this._readonly = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "value", {
                get: function () {
                    if (this._InitControl == false) {
                        this._value = $(this._host).jqxInput('val');
                    }
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                    if (this._InitControl == false) {
                        this._jqxtextbox.value = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "height", {
                get: function () {
                    if (this._InitControl == false) {
                        this._width = $(this._host).jqxInput('height');
                    }
                    return this._height;
                },
                set: function (val) {
                    this._height = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.height = this._height;
                        $(this._host).jqxInput('height', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "width", {
                get: function () {
                    if (this._InitControl == false) {
                        this._width = $(this._host).jqxInput('width');
                    }
                    return this._width;
                },
                set: function (val) {
                    this._width = val;
                    this.hostElement.setAttribute('width', val);
                    if (this._InitControl == false) {
                        this._jqxtextbox.width = this._width;
                        $(this._host).jqxInput('width', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "disabled", {
                get: function () {
                    if (this._InitControl == false) {
                        this._disabled = $(this._host).jqxInput('disabled');
                    }
                    return this._disabled;
                },
                set: function (val) {
                    this._disabled = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.disabled = this._disabled;
                        $(this._host).jqxInput('disabled', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "dropDownWidth", {
                get: function () {
                    if (this._InitControl == false) {
                        this._dropDownWidth = $(this._host).jqxInput('dropDownWidth');
                    }
                    return this._dropDownWidth;
                },
                set: function (val) {
                    this._dropDownWidth = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.dropDownWidth = this._dropDownWidth;
                        $(this._host).jqxInput('dropDownWidth', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "displayMember", {
                get: function () {
                    if (this._InitControl == false) {
                        this._displayMember = $(this._host).jqxInput('displayMember');
                    }
                    return this._displayMember;
                },
                set: function (val) {
                    this._displayMember = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.displayMember = this._displayMember;
                        $(this._host).jqxInput('displayMember', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "items", {
                get: function () {
                    if (this._InitControl == false) {
                        this._items = $(this._host).jqxInput('items');
                    }
                    return this._items;
                },
                set: function (val) {
                    this._items = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.items = this._items;
                        $(this._host).jqxInput('items', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "minLength", {
                get: function () {
                    if (this._InitControl == false) {
                        this._minLength = $(this._host).jqxInput('minLength');
                    }
                    return this._minLength;
                },
                set: function (val) {
                    this._minLength = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.minLength = this._minLength;
                        $(this._host).jqxInput('minLength', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "maxLength", {
                get: function () {
                    if (this._InitControl == false) {
                        this._maxLength = $(this._host).jqxInput('maxLength');
                    }
                    return this._maxLength;
                },
                set: function (val) {
                    this._maxLength = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.maxLength = this._maxLength;
                        $(this._host).jqxInput('maxLength', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "opened", {
                get: function () {
                    if (this._InitControl == false) {
                        this._opened = $(this._host).jqxInput('opened');
                    }
                    return this._opened;
                },
                set: function (val) {
                    this._opened = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.opened = this._opened;
                        $(this._host).jqxInput('opened', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "placeHolder", {
                get: function () {
                    if (this._InitControl == false) {
                        this._placeHolder = $(this._host).jqxInput('placeHolder');
                    }
                    return this._placeHolder;
                },
                set: function (val) {
                    this._placeHolder = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.placeHolder = this._placeHolder;
                        $(this._host).jqxInput('placeHolder', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "popupZIndex", {
                get: function () {
                    if (this._InitControl == false) {
                        this._popupZIndex = $(this._host).jqxInput('popupZIndex');
                    }
                    return this._popupZIndex;
                },
                set: function (val) {
                    this._popupZIndex = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.popupZIndex = this._popupZIndex;
                        $(this._host).jqxInput('popupZIndex', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "query", {
                get: function () {
                    if (this._InitControl == false) {
                        this._query = $(this._host).jqxInput('query');
                    }
                    return this._query;
                },
                set: function (val) {
                    this._query = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.query = this._query;
                        $(this._host).jqxInput('query', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "renderer", {
                get: function () {
                    return this._renderer;
                },
                set: function (val) {
                    this._renderer = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.renderer = this._renderer;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "source", {
                get: function () {
                    return this._source;
                },
                set: function (val) {
                    this._source = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.source = this._source;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "rtl", {
                get: function () {
                    return this._rtl;
                },
                set: function (val) {
                    this._rtl = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.rtl = this._rtl;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "searchMode", {
                get: function () {
                    return this._searchMode;
                },
                set: function (val) {
                    this._searchMode = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.searchMode = this._searchMode;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "theme", {
                get: function () {
                    if (this._InitControl == false) {
                        this._theme = $(this._host).jqxInput('theme');
                    }
                    return this._theme;
                },
                set: function (val) {
                    this._theme = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.theme = this._theme;
                        $(this._host).jqxInput('theme', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "valueMember", {
                get: function () {
                    if (this._InitControl == false) {
                        this._valueMember = $(this._host).jqxInput('valueMember');
                    }
                    return this._valueMember;
                },
                set: function (val) {
                    this._valueMember = val;
                    if (this._InitControl == false) {
                        this._jqxtextbox.valueMember = this._valueMember;
                        $(this._host).jqxInput('valueMember', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Input.prototype.Show = function () {
                $('#' + this.id).css({ 'display': '' });
            };
            Input.prototype.Hide = function () {
                $('#' + this.id).css({ 'display': 'none' });
            };
            Input.prototype.destroy = function () {
                this._jqxtextbox.destroy;
            };
            Input.prototype.focus = function () {
                this._jqxtextbox.focus;
                $(this._host).jqxInput('focus');
            };
            Input.prototype.selectAll = function () {
                this._jqxtextbox.selectAll;
                $(this._host).jqxInput('selectAll');
            };
            Input.prototype.clear = function (focus) {
                this.value = '';
                this.focus();
            };
            Input.prototype.getData = function () {
                return this.value;
            };
            Input.prototype.GetData = function () {
                return this.value;
            };
            
            Input.prototype.setData = function (val) {
                this.value = val;
            };
            Input.prototype.SetData = function (val) {
                this.value = val;
            };
            Input.prototype.ElementTranferInfo = function () {
                this.value = this.hostElement.getAttribute('value') || '';
                this.height = this.hostElement.getAttribute('height') || this.height;
                this.width = this.hostElement.getAttribute('width') || this.width;
                this.placeHolder = this.hostElement.getAttribute('placeHolder') || this.placeHolder;
                this.readonly = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('readonly')) || this.readonly;
                this.rtl = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('rtl') || this.rtl);
                var p = {
                    value: this.value,
                    height: this.height,
                    width: this.width,
                    rtl: this.rtl,
                    placeHolder: this.placeHolder
                };
                return p;
            };
            return Input;
        }(jqxBaseControl));
        jqxctrl.Input = Input;
        var List = (function (_super) {
            __extends(List, _super);
            function List(selector) {
                _super.call(this, selector);
                this._name = "";
                this._jsonData = [];
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                var style = this._Gb_Text_DefStyle;
                var _csstype = this.hostElement.getAttribute('csstype');
                if (_csstype) {
                    switch (_csstype.toLowerCase()) {
                        case "filter": {
                            style = this._Gb_Text_FltStyle;
                            break;
                        }
                        case "mandatory": {
                            style = this._Gb_Text_ManStyle;
                            break;
                        }
                        case "general": {
                            style = this._Gb_Text_GenStyle;
                            break;
                        }
                    }
                }
                var innerData = this.hostElement.innerHTML;
                this.hostElement.innerHTML = "<select  style=';font-size:9pt;width:100%;" + style + this.styles + "'  class='form-control search-select'></select><xml style='display:none'>" + innerData + "</xml>";
                this._InitControl = true;
                this._lbx = this.hostElement.childNodes[0];
            }
            Object.defineProperty(List.prototype, "_ctrlId", {
                get: function () {
                    return this.id + "_" + esys.System.getCurrentDate(new Date());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (val) {
                    this._name = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "type", {
                get: function () {
                    return this._lbx.type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "displaymember", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('displaymember');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "readonly", {
                get: function () {
                    return this._lbx.getAttribute('readonly');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "valuemember", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('valuemember');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "emptyvalue", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('emptyvalue');
                    if (tmp == null || tmp == undefined || tmp == "undefined")
                        return undefined;
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "emptytextpoint", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('emptytextpoint');
                    if (tmp == null || tmp == undefined || tmp == "undefined")
                        return "first";
                    else {
                        return tmp;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "emptytext", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('emptytext');
                    if (tmp == null || tmp == undefined || tmp == "undefined")
                        return undefined;
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "styles", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('styles');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "value", {
                get: function () {
                    return this._lbx.value;
                },
                set: function (val) {
                    this._lbx.value = val;
                    this.hostElement.setAttribute('value', val);
                },
                enumerable: true,
                configurable: true
            });
            List.prototype.GetText = function () {
                var obj = this._lbx;
                if (obj.options.selectedIndex >= 0) {
                    return obj.options.item(obj.options.selectedIndex).text;
                }
                else {
                    return "";
                }
            };
            List.prototype.focus = function () {
                var obj = this._lbx;
                if (obj != undefined) {
                    obj.focus();
                }
            };
            List.prototype.blur = function () {
                var obj = this._lbx;
                if (obj != undefined) {
                    obj.blur();
                }
            };
            List.prototype.getData = function () {
                var obj = this._lbx;
                if (obj != undefined) {
                    return obj.value;
                }
                else
                    return this.value;
            };
            List.prototype.GetData = function () {
                var obj = this._lbx;
                if (obj != undefined) {
                    return obj.value;
                }
                else
                    return this.value;
            };
            List.prototype.setData = function (value) {
                this.value = value;
            };
            List.prototype.SetData = function (value) {
                this.value = value;
            };
            List.prototype.clearData = function () {
                var obj = this._lbx;
                while (obj.options.length > 0) {
                    obj.options.remove(0);
                }
            };
            List.prototype.setDataText = function (txt) {
                var obj = this._lbx;
                var data = new String(txt);
                var arr = data.split("|");
                if (arr.length > 2 || arr[0] == "DATA") {
                    while (obj.options.length > 0) {
                        obj.options.remove(0);
                    }
                    for (var i = 1; i < arr.length; i += 2) {
                        var oOption = document.createElement("OPTION");
                        obj.options.add(oOption);
                        oOption.innerText = arr[i + 1];
                        oOption.value = arr[i];
                    }
                }
                else {
                    obj.value = arr[0];
                }
            };
            List.prototype._AddItemFirst = function (objCtrl) {
                var obj = this._lbx;
                if (this.emptytext != undefined) {
                    if (this.emptytextpoint == 'first') {
                        var oOption = document.createElement("OPTION");
                        oOption.innerText = this.emptytext;
                        if (this.emptyvalue == undefined) {
                            oOption.value = '';
                        }
                        else {
                            oOption.value = this.emptyvalue;
                        }
                        obj.options.add(oOption);
                    }
                }
            };
            List.prototype.SetDataJson = function (jsondata) {
                this.setDataJson(jsondata);
            };
            List.prototype.setDataJson = function (jsondata) {
                this._jsonData = jsondata;
                var obj = this._lbx;
                while (obj.options.length > 0) {
                    if (typeof obj.options.remove == 'function') {
                        obj.options.remove(0);
                    }
                    else {
                        obj.options.item(0).remove();
                    }
                }
                if (this.emptytext != undefined) {
                    if (this.emptytextpoint == 'first') {
                        var oOption = document.createElement("OPTION");
                        oOption.innerText = this.emptytext;
                        oOption.innerHTML = this.emptytext;
                        oOption.label = this.emptytext;
                        if (this.emptyvalue == undefined) {
                            oOption.value = '';
                        }
                        else {
                            oOption.value = this.emptyvalue;
                        }
                        obj.options.add(oOption);
                    }
                }
                for (var i = 0; i < jsondata.length; i++) {
                    var oOption = document.createElement("OPTION");
                    obj.options.add(oOption);
                    var tmpData = jsondata[i];
                    if (this.displaymember != "") {
                        oOption.innerText = tmpData[this.displaymember];
                        oOption.innerHTML = tmpData[this.displaymember];
                        oOption.label = tmpData[this.displaymember];
                    }
                    if (this.valuemember != "") {
                        oOption.value = tmpData[this.valuemember];
                    }
                }
                if (this.emptytext != undefined) {
                    if (this.emptytextpoint == 'last') {
                        var oOption = document.createElement("OPTION");
                        oOption.innerText = this.emptytext;
                        oOption.innerHTML = this.emptytext;
                        oOption.label = this.emptytext;
                        if (this.emptyvalue == undefined) {
                            oOption.value = '';
                        }
                        else {
                            oOption.value = this.emptyvalue;
                        }
                        obj.options.add(oOption);
                    }
                }
            };
            List.prototype.setEnable = function (bEnable) {
                this._lbx.disabled = !bEnable;
            };
            List.prototype.isReadonly = function () {
                this.hostElement.getAttribute('readonly');
            };
            return List;
        }(jqxBaseControl));
        jqxctrl.List = List;
        var Textbox = (function (_super) {
            __extends(Textbox, _super);
            function Textbox(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
                if (this.name == null) {
                    this.name = this.id;
                }
            }
            Object.defineProperty(Textbox.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute("name");
                },
                set: function (val) {
                    this.hostElement.setAttribute("name", val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "_ctrlId", {
                get: function () {
                    return this.id + "_" + this._gwrandomId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "csstype", {
                get: function () {
                    var _s = this._Gb_Text_DefStyle;
                    var _c = this.hostElement.getAttribute('csstype');
                    if (_c) {
                        switch (_c.toLowerCase()) {
                            case "filter": {
                                _s = this._Gb_Text_FltStyle;
                                break;
                            }
                            case "mandatory": {
                                _s = this._Gb_Text_ManStyle;
                                break;
                            }
                            case "general": {
                                _s = this._Gb_Text_GenStyle;
                                break;
                            }
                        }
                    }
                    return _s;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (val) {
                    this.value = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "value", {
                get: function () {
                    var obj = this._tbx;
                    if (obj != null) {
                        return obj.value;
                    }
                    else
                        this.value;
                },
                set: function (val) {
                    this.hostElement.setAttribute('value', val);
                    var obj = this._tbx;
                    if (obj != null) {
                        obj.value = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "type", {
                get: function () {
                    return this._tbx.type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "_readonly", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('readonly');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return null;
                    else
                        return tmp;
                },
                set: function (val) {
                    var el = this._tbx;
                    if (el != null) {
                        if (val == true) {
                            el.setAttribute('readonly', 'true');
                            el.setAttribute('readonly', 'readonly');
                        }
                        else {
                            el.setAttribute('readonly', 'false');
                            el.setAttribute('readonly', '');
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "_disabled", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('disabled');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return null;
                    else
                        return tmp;
                },
                set: function (val) {
                    var el = this._tbx;
                    if (el != null) {
                        if (val == true) {
                            el.setAttribute('disabled', 'true');
                            el.setAttribute('disabled', 'disabled');
                        }
                        else {
                            el.setAttribute('disabled', 'false');
                            el.setAttribute('disabled', '');
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "passwd", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('passwd');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "undefined";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "styles", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('styles');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "size", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('size');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "-1";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "maxlen", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('maxlen');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "-1";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textbox.prototype, "format", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('format');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return undefined;
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Textbox.prototype._render = function () {
                var style = this.csstype;
                if (this._readonly != null) {
                    if (this.passwd != "undefined") {
                        this.hostElement.innerHTML += "<input id='" + this._ctrlId + "' readonly='true' type = 'password' style=';font-size:9pt;width:100%;" + style + this.styles + "' ></input>";
                    }
                    else {
                        this.hostElement.innerHTML += "<input id='" + this._ctrlId + "' readonly='true' type = 'text' style=';font-size:9pt;width:100%;" + style + this.styles + "' ></input>";
                    }
                }
                else {
                    if (this.passwd != "undefined") {
                        this.hostElement.innerHTML += "<input id='" + this._ctrlId + "' type = 'password' style=';font-size:9pt;width:100%;" + style + this.styles + "' ></input>";
                    }
                    else {
                        this.hostElement.innerHTML += "<input id='" + this._ctrlId + "' type = 'text' style=';font-size:9pt;width:100%;" + style + this.styles + "' ></input>";
                    }
                }
                var objInput = this.hostElement;
                this.text = this._getvalue();
                this.hostElement.setAttribute('class', 'gw-textbox');
                this._tbx = this.hostElement.childNodes[0];
                var self = this;
            };
            Textbox.prototype._getvalue = function () {
                return this.hostElement.getAttribute('value') || '';
                ;
            };
            Textbox.prototype.focus = function () {
                this.hostElement.focus();
            };
            Textbox.prototype.blur = function () {
                this.hostElement.blur();
            };
            Textbox.prototype.selectAll = function () {
                this._tbx.select();
            };
            Textbox.prototype.getData = function () {
                return this.value;
            };
            Textbox.prototype.GetData = function () {
                return this.value;
            };
            Textbox.prototype.setData = function (val) {
                this.value = val;
            };
            Textbox.prototype.SetData = function (val) {
                this.value = val;
            };
            Textbox.prototype.getType = function () {
                return this.type;
            };
            Textbox.prototype.GetReadOnly = function () {
                return this._readonly;
            };
            Textbox.prototype.SetReadOnly = function (val) {
                this._readonly = val;
            };
            Textbox.prototype.GetDisabled = function () {
                return this._disabled;
            };
            Textbox.prototype.SetDisabled = function (val) {
                this._disabled = val;
            };
            Textbox.prototype.Show = function () {
                $(this).css({ 'display': '' });
            };
            Textbox.prototype.Hide = function () {
                $(this).css({ 'display': 'none' });
            };
            Textbox.prototype.SetCss = function (json) {
                $(this).css(json);
            };
            Textbox.prototype.removeAttr = function (attnm) {
                $(this).removeAttr(attnm);
                $(this._tbx).removeAttr(attnm);
            };
            Textbox.prototype.attr = function (attnm, attval) {
                $(this).attr(attnm, attval);
                $(this._tbx).attr(attnm, attval);
            };
            Textbox.prototype.addClass = function (classnm) {
                $(this).addClass(classnm);
                $(this._tbx).addClass(classnm);
            };
            Textbox.prototype.removeClass = function (classnm) {
                $(this).removeClass(classnm);
                $(this._tbx).removeClass(classnm);
            };
            return Textbox;
        }(jqxBaseControl));
        jqxctrl.Textbox = Textbox;
        var Label = (function (_super) {
            __extends(Label, _super);
            function Label(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                var _style = this.hostElement.getAttribute('data-style');
                var _stylers = '';
                if (_style != null && _style != undefined && _style != 'undefined' && _style != '') {
                    _stylers = _stylers + _style;
                }
                var _class = this.hostElement.getAttribute('data-class');
                var _classrs = 'gw-label';
                if (_class != null && _class != undefined && _class != 'undefined' && _class != '')
                    _classrs = _classrs + ' ' + _class;
                var contenttmp = this.hostElement.innerHTML;
                this.hostElement.innerHTML = "<label style='" + _stylers + "' class='" + _classrs + "' for='" + this.forid + "'>" + contenttmp + "</label>";
                if (this.name == null) {
                    this.name = this.id;
                }
                this._lbx = this.hostElement.childNodes[0];
            }
            Object.defineProperty(Label.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute("name");
                },
                set: function (val) {
                    this.hostElement.setAttribute("name", val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "ctrlId", {
                get: function () {
                    return "#" + this.id + "_" + this._gwrandomId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (val) {
                    this.value = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "forid", {
                get: function () {
                    return this.hostElement.getAttribute('for');
                },
                set: function (val) {
                    this.hostElement.setAttribute('for', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "value", {
                get: function () {
                    var _label = this._lbx;
                    if (_label) {
                        return _label.innerHTML;
                    }
                    else {
                        return "";
                    }
                },
                set: function (val) {
                    var _label = this._lbx;
                    if (_label) {
                        _label.innerHTML = val;
                        this.hostElement.setAttribute('value', val);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Label.prototype.GetData = function () {
                return this.text;
            };
            Label.prototype.SetData = function (val) {
                this.text = val;
            };
            Label.prototype.SetDataText = function (val) {
                this.text = val;
            };
            return Label;
        }(jqxBaseControl));
        jqxctrl.Label = Label;
        var Textarea = (function (_super) {
            __extends(Textarea, _super);
            function Textarea(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                var _style = this.hostElement.getAttribute('data-style');
                if (_style == null || _style == undefined || _style == 'undefined' || _style == '') {
                    _style = _style + ';border:1 solid #6b9eb8; border-width: 1 1 1 1 ; padding:4 5 4 5; margin:1 1 1 1 ; background-color:white; line-height:100% ; ';
                }
                var _class = this.hostElement.getAttribute('data-class');
                if (_class == null || _class == undefined || _class == 'undefined' || _class == '') {
                    _class = "";
                }
                var _currReadonly = this.hostElement.getAttribute('data-readonly');
                _currReadonly = this.getDefaultReadOnlyValue(_currReadonly);
                var content = this.hostElement.innerHTML;
                var v_attribute = "";
                if (this.disabled) {
                    v_attribute = v_attribute + " disabled ";
                }
                if (this.hostElement.getAttribute("readonly")) {
                    v_attribute = v_attribute + " readonly ";
                }
                if (this.placeholder) {
                    v_attribute = v_attribute + " placeholder=' " + this.placeholder + "'";
                }
                this.hostElement.innerHTML = "<textarea  class='" + _class + "' id='" + this.id + "_1' style='" + _style + "' rows='" + this.rows + "' cols='" + this.cols + "'" + v_attribute + ">" + content + "</textarea>";
                if (this.name == null) {
                    this.name = this.id;
                }
                this;
                this._tar = this.hostElement.childNodes[0];
            }
            Object.defineProperty(Textarea.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (val) {
                    this.hostElement.setAttribute('name', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "ctrlId", {
                get: function () {
                    return "#" + this.id + "_1";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "value", {
                get: function () {
                    return this._tar.value;
                },
                set: function (val) {
                    this._tar.value = val;
                    this.hostElement.setAttribute('value', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "rows", {
                get: function () {
                    return this.hostElement.getAttribute('data-rows');
                },
                set: function (val) {
                    this.hostElement.setAttribute('data-rows', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "cols", {
                get: function () {
                    return this.hostElement.getAttribute('data-cols');
                },
                set: function (val) {
                    this.hostElement.setAttribute('data-cols', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "disabled", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('disabled');
                    if (tmp == 'disabled' || tmp == 'true')
                        return true;
                    return false;
                },
                set: function (val) {
                    if (val == 'disabled' || val == 'true' || val == true) {
                        this._tar.setAttribute('disabled', '');
                        this._tar.setAttribute('disabled', val);
                        this._tar.classList.add('control-disabled');
                        this._tar.contentEditable = "true";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "readonly", {
                get: function () {
                    return this._tar.getAttribute('readonly');
                },
                set: function (val) {
                    this._tar.setAttribute('readonly', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "placeholder", {
                get: function () {
                    return this.hostElement.getAttribute('placeholder');
                },
                set: function (val) {
                    this._tar.setAttribute('placeholder', val);
                    this.hostElement.setAttribute('placeholder', val);
                },
                enumerable: true,
                configurable: true
            });
            Textarea.prototype.focus = function () {
                this._tar.focus();
            };
            Textarea.prototype.blur = function () {
                this._tar.blur();
            };
            Textarea.prototype.GetData = function () {
                return this._tar.value;
            };
            Textarea.prototype.SetData = function (val) {
                this._tar.value = val;
            };
            Textarea.prototype.SetDataText = function (val) {
                this._tar.value = val;
            };
            Textarea.prototype.SetEnable = function (bEnable) {
                this._tar.disabled = !bEnable;
            };
            Textarea.prototype.SetReadOnly = function (val) {
                this._tar.readOnly = val;
            };
            Textarea.prototype.getDefaultReadOnlyValue = function (arg_currValu) {
                if (arg_currValu == 'true' || arg_currValu == 'T' || arg_currValu == '1') {
                    return 'readonly';
                }
                return '';
            };
            return Textarea;
        }(jqxBaseControl));
        jqxctrl.Textarea = Textarea;
        var Checkbox = (function (_super) {
            __extends(Checkbox, _super);
            function Checkbox(selector) {
                _super.call(this, selector);
                this._MOD_YN = 'YN';
                this._MOD_TF = 'TF';
                this._MOD_01 = '01';
                this._animationShowDelay = 250;
                this._animationHideDelay = 300;
                this._boxSize = "13px";
                this._checked = false;
                this._enableContainerClick = true;
                this._hasThreeStates = false;
                this._locked = false;
                this._readonly = false;
                var p = this.ElementTranferInfo();
                var _textinnerHTML = this.hostElement.innerHTML;
                this.hostElement.innerHTML = "<div id='" + this._ctrlId.replace("#", '') + "' style=' float: left;' class='gw-checkbox-zoom'  >" + _textinnerHTML + "</div>";
                this._jqxcheckbox = jqwidgets.createInstance(selector + "_" + this._gwrandomId, 'jqxCheckBox', p);
                this._InitControl = false;
                this._registerEvent(this.id, 'change', this.hostElement.getAttribute('click'));
                this._registerEvent(this.id, 'checked', this.hostElement.getAttribute('checked'));
                this._registerEvent(this.id, 'change', this.hostElement.getAttribute('change'));
                this._registerEvent(this.id, 'indeterminate', this.hostElement.getAttribute('indeterminate'));
                this._registerEvent(this.id, 'unchecked', this.hostElement.getAttribute('unchecked'));
            }
            Checkbox.prototype.ElementTranferInfo = function () {
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this.value = this.hostElement.getAttribute('value') || '';
                this.height = this.hostElement.getAttribute('height') || this.height;
                this.width = this.hostElement.getAttribute('width') || this.width;
                this.readonly = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('readonly')) || this.readonly;
                this.rtl = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('rtl') || this.rtl);
                this.checked = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('checked') || this.checked);
                this.disabled = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('disabled') || this.disabled);
                this.animationShowDelay = Number(this.hostElement.getAttribute("disabled")) || this.animationShowDelay;
                this.animationHideDelay = Number(this.hostElement.getAttribute("animationHideDelay")) || this.animationHideDelay;
                this.boxSize = this.hostElement.getAttribute("boxSize") || this.boxSize;
                this.enableContainerClick = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute("enableContainerClick") || this.enableContainerClick);
                this.hasThreeStates = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute("hasThreeStates")) || this.hasThreeStates;
                this.locked = esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute("locked")) || this.locked;
                var p = {
                    theme: this.theme,
                    height: this.height,
                    width: this.width,
                    rtl: this.rtl,
                    checked: this.checked,
                    disabled: this.disabled,
                    animationShowDelay: this.animationHideDelay,
                    animationHideDelay: this.animationHideDelay,
                    boxSize: this.boxSize,
                    enableContainerClick: this.enableContainerClick,
                    hasThreeStates: this.hasThreeStates,
                    locked: this.locked
                };
                return p;
            };
            Checkbox.prototype._registerEvent = function (objid, eventname, fnName) {
                var _eventfn = fnName;
                if (_eventfn != null && _eventfn != '' && _eventfn != undefined) {
                    var n = _eventfn.indexOf("(");
                    var fn = _eventfn;
                    if (n > -1) {
                        var fn = _eventfn.substr(0, n);
                    }
                    this._removeEventHandler(this, 'click', window[fn]);
                    if (typeof window[fn] === 'function') {
                        $(objid).on(eventname, esys.utils.Common.getFnArgFromString(fnName), window[fn]);
                    }
                }
            };
            Checkbox.prototype._removeEventHandler = function (elem, eventType, handler) {
                if (elem.removeEventListener)
                    elem.removeEventListener(eventType, handler, false);
                if (elem.detachEvent)
                    elem.detachEvent('on' + eventType, handler);
            };
            Object.defineProperty(Checkbox.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute("name");
                },
                set: function (val) {
                    this.hostElement.setAttribute('name', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "value", {
                get: function () {
                    if (this._InitControl == false) {
                        this._value = this.val();
                    }
                    return this._value;
                },
                set: function (val) {
                    var r = false;
                    if (this.isMode() == this._MOD_YN) {
                        if (val == this.TValue) {
                            r = true;
                        }
                        else {
                            r = false;
                        }
                    }
                    else if (this.isMode() == this._MOD_TF) {
                        if (val == this.TValue) {
                            r = true;
                        }
                        else {
                            r = false;
                        }
                    }
                    else if (this.isMode() == this._MOD_01) {
                        if (val == this.TValue) {
                            r = true;
                        }
                        else {
                            r = false;
                        }
                    }
                    else
                        r = val;
                    this._value = r;
                    if (this._InitControl == false) {
                        $("#" + this.id).val('val', r);
                    }
                    this.hostElement.setAttribute('value', r);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "TValue", {
                get: function () {
                    var _defaultvalue = this.hostElement.getAttribute('data-defaultvalue');
                    if (typeof (_defaultvalue) != undefined && _defaultvalue != null) {
                        var arr = _defaultvalue.split("|");
                        return arr[0];
                    }
                    else {
                        if (this.isMode() == this._MOD_YN) {
                            return "Y";
                        }
                        else if (this.isMode() == this._MOD_TF) {
                            return "T";
                        }
                        else if (this.isMode() == this._MOD_01) {
                            return "-1";
                        }
                        else
                            return true;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "FValue", {
                get: function () {
                    var _defaultvalue = this.hostElement.getAttribute('data-defaultvalue');
                    if (typeof (_defaultvalue) != "undefined" && _defaultvalue != null) {
                        var arr = _defaultvalue.split("|");
                        return arr[1];
                    }
                    else {
                        if (this.isMode() == this._MOD_YN) {
                            return "N";
                        }
                        else if (this.isMode() == this._MOD_TF) {
                            return "F";
                        }
                        else if (this.isMode() == this._MOD_01) {
                            return "0";
                        }
                        else
                            return false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "readonly", {
                get: function () {
                    if (this._InitControl == false) {
                        this._readonly = $(this._ctrlId).jqxCheckBox('disabled');
                    }
                    return this._readonly;
                },
                set: function (val) {
                    this._readonly = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.disabled = val;
                        $(this._ctrlId).jqxCheckBox({ disabled: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "animationShowDelay", {
                get: function () {
                    if (this._InitControl == false) {
                        this._animationShowDelay = $(this._ctrlId).jqxCheckBox('animationShowDelay');
                    }
                    return this._animationShowDelay;
                },
                set: function (val) {
                    this._animationShowDelay = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.animationShowDelay = this._animationShowDelay;
                        $(this._ctrlId).jqxCheckBox({ animationShowDelay: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "animationHideDelay", {
                get: function () {
                    if (this._InitControl == false) {
                        this._animationShowDelay = $(this._ctrlId).jqxCheckBox('animationHideDelay');
                    }
                    return this._animationHideDelay;
                },
                set: function (val) {
                    this._animationHideDelay = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.animationHideDelay = this._animationHideDelay;
                        $(this._ctrlId).jqxCheckBox({ animationHideDelay: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "boxSize", {
                get: function () {
                    if (this._InitControl == false) {
                        this._boxSize = $(this._ctrlId).jqxCheckBox('boxSize');
                    }
                    return this._boxSize;
                },
                set: function (val) {
                    this._boxSize = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.boxSize = this._boxSize;
                        $(this._ctrlId).jqxCheckBox({ boxSize: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "checked", {
                get: function () {
                    if (this._InitControl == false) {
                        this._checked = $('#' + this.id).jqxCheckBox('checked');
                    }
                    return this._checked;
                },
                set: function (val) {
                    this._checked = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.checked = this._checked;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "disabled", {
                get: function () {
                    if (this._InitControl == false) {
                        this._disabled = $(this._ctrlId).jqxCheckBox('disabled');
                    }
                    return this._disabled;
                },
                set: function (val) {
                    this._disabled = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.disabled = this._disabled;
                        $(this._ctrlId).jqxCheckBox({ disabled: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "enableContainerClick", {
                get: function () {
                    if (this._InitControl == false) {
                        this._enableContainerClick = $(this._ctrlId).jqxCheckBox('enableContainerClick');
                    }
                    return this._enableContainerClick;
                },
                set: function (val) {
                    this._enableContainerClick = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.enableContainerClick = this._enableContainerClick;
                        $(this._ctrlId).jqxCheckBox({ enableContainerClick: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "groupName", {
                get: function () {
                    if (this._InitControl == false) {
                        this._groupName = $(this._ctrlId).jqxCheckBox('groupName');
                    }
                    return this._groupName;
                },
                set: function (val) {
                    this._groupName = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.groupName = this._groupName;
                        $(this._ctrlId).jqxCheckBox({ groupName: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "height", {
                get: function () {
                    if (this._InitControl == false) {
                        this._height = $(this._ctrlId).jqxCheckBox('height');
                    }
                    return this._height;
                },
                set: function (val) {
                    this._height = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.height = this._height;
                        $(this._ctrlId).jqxCheckBox({ height: "400px" });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "hasThreeStates", {
                get: function () {
                    if (this._InitControl == false) {
                        this._hasThreeStates = $(this._ctrlId).jqxCheckBox('hasThreeStates');
                    }
                    return this._hasThreeStates;
                },
                set: function (val) {
                    this._hasThreeStates = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.hasThreeStates = this._hasThreeStates;
                        $(this._ctrlId).jqxCheckBox({ hasThreeStates: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "locked", {
                get: function () {
                    if (this._InitControl == false) {
                        this._locked = $(this._ctrlId).jqxCheckBox('locked');
                    }
                    return this._locked;
                },
                set: function (val) {
                    this._locked = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.locked = this._locked;
                        $(this._ctrlId).jqxCheckBox({ locked: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "rtl", {
                get: function () {
                    if (this._InitControl == false) {
                        this._rtl = $(this._ctrlId).jqxCheckBox('rtl');
                    }
                    return this._rtl;
                },
                set: function (val) {
                    this._rtl = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.rtl = this._rtl;
                        $(this._ctrlId).jqxCheckBox({ rtl: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "width", {
                get: function () {
                    if (this._InitControl == false) {
                        this._width = $(this._ctrlId).jqxCheckBox('width');
                    }
                    return this._width;
                },
                set: function (val) {
                    this._width = val;
                    if (this._InitControl == false) {
                        this._jqxcheckbox.width = this._width;
                        $(this._ctrlId).jqxCheckBox({ width: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Checkbox.prototype, "_ctrlId", {
                get: function () {
                    return "#" + this.id + "_" + this._gwrandomId;
                },
                enumerable: true,
                configurable: true
            });
            Checkbox.prototype.isMode = function () {
                var _datamode = this.hostElement.getAttribute('data-mode') || this._MOD_YN;
                return _datamode;
            };
            Checkbox.prototype.setval = function (val) {
                return $(this._ctrlId).val('val', val);
            };
            Checkbox.prototype.getText = function () {
                var obj = this._jqxcheckbox;
                if (obj.options.selectedIndex >= 0) {
                    return obj.options.item(obj.options.selectedIndex).text;
                }
                else {
                    return "";
                }
            };
            Checkbox.prototype.check = function () {
                return this._jqxcheckbox.check();
            };
            Checkbox.prototype.disable = function () {
                return this._jqxcheckbox.disable();
            };
            Checkbox.prototype.destroy = function () {
                return this._jqxcheckbox.destroy();
            };
            Checkbox.prototype.enable = function () {
                return this._jqxcheckbox.enable();
            };
            Checkbox.prototype.getControl = function () {
                return this._jqxcheckbox;
            };
            Checkbox.prototype.focus = function () {
                return this._jqxcheckbox.focus();
            };
            Checkbox.prototype.indeterminate = function () {
                return this._jqxcheckbox.indeterminate();
            };
            Checkbox.prototype.render = function () {
                return this._jqxcheckbox.render();
            };
            Checkbox.prototype.toggle = function () {
                return this._jqxcheckbox.toggle();
            };
            Checkbox.prototype.uncheck = function () {
                return this._jqxcheckbox.uncheck();
            };
            Checkbox.prototype.val = function () {
                return $(this._ctrlId).val();
            };
            Checkbox.prototype.getData = function () {
                this.value;
            };
            Checkbox.prototype.setData = function (val) {
                this.value = val;
            };
            Checkbox.prototype.SetData = function (val) {
                this.value = val;
            };
            Checkbox.prototype.setEnable = function (bEnable) {
                var obj = this._jqxcheckbox;
                obj.disabled = !bEnable;
            };
            Checkbox.prototype.isReadonly = function () {
                this.hostElement.getAttribute('data-readonly');
            };
            return Checkbox;
        }(jqxBaseControl));
        jqxctrl.Checkbox = Checkbox;
        var Datebox = (function (_super) {
            __extends(Datebox, _super);
            function Datebox(selector) {
                _super.call(this, selector);
                this.currCtrl = null;
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                var _r = this._getDisabled();
                if (_r == true) {
                    this.setEnable(false);
                }
                this._render();
                if (this.bNullAccept) {
                    this.setDataText('');
                }
            }
            Datebox.prototype._render = function () {
                var _datastyle = this.hostElement.getAttribute('data-style');
                if (_datastyle == null || _datastyle == undefined)
                    _datastyle = "";
                var _datamode = this.hostElement.getAttribute('data-mode');
                var _bmodeTF = true;
                if (typeof (_datamode) != undefined)
                    _datamode = !(_datamode == '01');
                if (this.type == 0) {
                    this.hostElement.innerHTML = "<div id='" + this.id + "_1'></div>";
                    var self_1 = this;
                    var p = {
                        width: '115px',
                        height: '25px',
                        theme: 'energyblue'
                    };
                    this._jqxDateTimeInput = jqwidgets.createInstance("#" + this.id + "_1", 'jqxDateTimeInput', p);
                }
                else {
                    if (this.hostElement.getAttribute('onchange') != null) {
                        this.hostElement.setAttribute('change', this.hostElement.getAttribute('onchange'));
                        this.hostElement.removeAttribute('onchange');
                    }
                    if (this.type == 1) {
                        this.hostElement.innerHTML += '<div class="input-group input-append" style="' + _datastyle + ';     width: 135px;" ><span class="input-group-addon add-on"><i class="fa fa-chevron-circle-left"></i></span><input onchange="' + this.hostElement.getAttribute('change') + '" id="' + this.id + '_1" type="text" style="width:100%; height: 28px;" class="form-control "><span class="input-group-addon add-on"><i class="fa fa-chevron-circle-right"></i></span></div>';
                    }
                    else {
                        this.hostElement.innerHTML += '<div class="input-group input-append"><span class="input-group-addon add-on"><i class="fa fa-chevron-circle-left"></i></span><input onchange="' + this.hostElement.getAttribute('change') + '"  id="' + this.id + '_1" type="text" style="width:100%; height: 28px;" class="form-control "><span class="input-group-addon add-on"><i class="fa fa-chevron-circle-right"></i></span></div>';
                    }
                    this.currCtrl = this;
                    var self_2 = this;
                    this.hostElement.childNodes[0].children[0].addEventListener("click", function () {
                        if (self_2)
                            if (!self_2.disabled) {
                                self_2.Change(-1, self_2);
                            }
                    });
                    this.hostElement.childNodes[0].children[2].addEventListener("click", function () {
                        if (self_2)
                            if (!self_2.disabled)
                                self_2.Change(1, self_2);
                    });
                }
                if (this.name == null) {
                    this.name = this.id;
                }
                if (this.value == null || this.value == '')
                    this.setText(this.text);
            };
            Object.defineProperty(Datebox.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute("name");
                },
                set: function (val) {
                    this.hostElement.setAttribute("name", val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "value", {
                get: function () {
                    var value = '';
                    if (this.type == 0)
                        value = $(this.ctrlId).jqxDateTimeInput('val');
                    else
                        value = this.hostElement.childNodes[0].children[1].value;
                    if (value.length == 0)
                        return "";
                    var aValue = value.split('/');
                    if (this.lang == 1) {
                        if (this.type == 0)
                            value = aValue[2] + aValue[1] + aValue[0];
                        else if (this.type == 1)
                            value = aValue[1] + aValue[0];
                        else
                            value = aValue[0];
                    }
                    else {
                        if (this.type == 0)
                            value = aValue[0] + aValue[1] + aValue[2];
                        else if (this.type == 1)
                            value = aValue[0] + aValue[1];
                        else
                            value = aValue[0];
                    }
                    return value;
                },
                set: function (vValue) {
                    var s_date;
                    var aValue = String(vValue).split('/');
                    var value;
                    if (aValue.length > 1) {
                        if (this.type == 0)
                            value = aValue[0] + aValue[1] + aValue[2];
                        else if (this.type == 1)
                            value = aValue[0] + aValue[1];
                        else
                            value = aValue[0];
                        s_date = vValue;
                    }
                    else {
                        value = String(vValue);
                        if (this.type == 0)
                            s_date = value.substring(0, 4) + "/" + value.substring(4, 6) + "/" + value.substring(6, 8);
                        else if (this.type == 1)
                            s_date = value.substring(0, 4) + "/" + value.substring(4, 6);
                        else
                            s_date = value.substring(0, 4);
                    }
                    if (this) {
                        if (this.lang == 1) {
                            if (this.type == 0)
                                s_date = value.substring(6, 8) + "/" + value.substring(4, 6) + "/" + value.substring(0, 4);
                            else if (this.type == 1)
                                s_date = value.substring(4, 6) + "/" + value.substring(0, 4);
                            else
                                s_date = value.substring(0, 4);
                        }
                        this.setText(s_date);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "bNullAccept", {
                get: function () {
                    var _nullaccept = this.hostElement.getAttribute('data-nullaccept');
                    if (_nullaccept == 'true' || _nullaccept == 'T')
                        return true;
                    return false;
                },
                set: function (val) {
                    if (val == 'true' || val == 'T' || val == true) {
                        this.hostElement.setAttribute('data-nullaccept', 'true');
                        this.setDataText('');
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "type", {
                get: function () {
                    var _typers = 0;
                    var _type = this.hostElement.getAttribute('data-type');
                    if (_type == 'month')
                        _typers = 1;
                    if (_type == 'year')
                        _typers = 2;
                    return _typers;
                },
                set: function (val) {
                    var tmp = 0;
                    if (val == 0 || val == 1 || val == 2 || val == '0' || val == '1' || val == '2')
                        tmp = val;
                    this.hostElement.setAttribute('data-type', tmp);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "lang", {
                get: function () {
                    var _langrs = 1;
                    var _lang = this.hostElement.getAttribute('data-lang');
                    if (_lang != null && _lang == undefined && _lang != "")
                        _langrs = _lang;
                    else
                        _langrs = 1;
                    return _langrs;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "ctrlId", {
                get: function () {
                    if (this.type == 0)
                        return "#" + this.id + "_1";
                    else
                        return this.id + "_1";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "disabled", {
                get: function () {
                    return this._getDisabled();
                },
                set: function (v) {
                    this.setEnable(!v);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "readonly", {
                get: function () {
                    return this.hostElement.childNodes[0].getAttribute('readonly');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "dropDownHorizontalAlignment", {
                get: function () {
                    return this._getdropDownHorizontalAlignment();
                },
                set: function (val) {
                    this._setdropDownHorizontalAlignment(val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "dropDownVerticalAlignment", {
                get: function () {
                    return this._getdropDownVerticalAlignment();
                },
                set: function (val) {
                    this._setdropDownVerticalAlignment(val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Datebox.prototype, "text", {
                get: function () {
                    return this.hostElement.childNodes[0].children[1].value;
                },
                set: function (vValue) {
                    if (this.type == 0) {
                        $(this.ctrlId).jqxDateTimeInput('val', this.ValidDateValue(vValue, this));
                    }
                    else {
                        this.hostElement.childNodes[0].children[1].value = this.ValidDateValue(vValue, this);
                        var self_3 = this;
                        this.fireEvent(this.hostElement.childNodes[0].children[1], 'change', "");
                    }
                },
                enumerable: true,
                configurable: true
            });
            Datebox.prototype.setText = function (val) {
                this.text = val;
            };
            Datebox.prototype.ValidDateValue = function (vvalue, ctrl) {
                var today, s;
                if (ctrl.bNullAccept)
                    today = "";
                else
                    today = new Date();
                var testday;
                var t_yy, t_mm, t_dd;
                var sValue = vvalue;
                var aValue = sValue.split('/');
                if (ctrl.type == 0) {
                    if (aValue.length == 3) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        aValue[1]++;
                        aValue[1] -= 1;
                        aValue[2]++;
                        aValue[2] -= 1;
                        if (ctrl.lang != "1") {
                            testday = new Date(aValue[0], aValue[1] - 1, aValue[2]);
                            t_yy = aValue[0];
                            t_mm = aValue[1] - 1;
                            t_dd = aValue[2];
                        }
                        else {
                            testday = new Date(aValue[2], aValue[1] - 1, aValue[0]);
                            t_yy = aValue[2];
                            t_mm = aValue[1] - 1;
                            t_dd = aValue[0];
                        }
                        if (!((testday.getYear() % 100) != (t_yy % 100) || testday.getMonth() != t_mm || testday.getDate() != t_dd)) {
                            if (ctrl.lang != "1")
                                today = new Date(aValue[0], aValue[1] - 1, aValue[2]);
                            else
                                today = new Date(aValue[2], aValue[1] - 1, aValue[0]);
                        }
                    }
                }
                else if (ctrl.type == 1) {
                    if (aValue.length == 2) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        aValue[1]++;
                        aValue[1] -= 1;
                        if (ctrl.lang != "1") {
                            testday = new Date(aValue[0], aValue[1] - 1, 1);
                            t_yy = aValue[0];
                            t_mm = aValue[1] - 1;
                        }
                        else {
                            testday = new Date(aValue[1], aValue[0] - 1, 1);
                            t_yy = aValue[1];
                            t_mm = aValue[0] - 1;
                        }
                        if (!((testday.getYear() % 100) != (t_yy % 100) || testday.getMonth() != t_mm)) {
                            if (ctrl.lang != "1")
                                today = new Date(aValue[0], aValue[1] - 1, 1);
                            else
                                today = new Date(aValue[1], aValue[0] - 1, 1);
                        }
                    }
                }
                else {
                    if (aValue.length == 1) {
                        aValue[0]++;
                        aValue[0] -= 1;
                        if (!(isNaN(aValue[0])) && aValue[0] > 0)
                            today = new Date(aValue[0], 0, 1);
                    }
                }
                if (typeof (today) == "string")
                    return "";
                var y = "000" + (today.getFullYear());
                var m = "0" + (today.getMonth() + 1);
                var d = "0" + (today.getDate());
                if (ctrl.type == 0) {
                    if (ctrl.lang != "1")
                        s = y.substr(y.length - 4) + "/" + m.substr(m.length - 2) + "/" + d.substr(d.length - 2);
                    else
                        s = d.substr(d.length - 2) + "/" + m.substr(m.length - 2) + "/" + y.substr(y.length - 4);
                }
                else if (ctrl.type == 1)
                    if (ctrl.lang != "1")
                        s = y.substr(y.length - 4) + "/" + m.substr(m.length - 2);
                    else
                        s = m.substr(m.length - 2) + "/" + y.substr(y.length - 4);
                else
                    s = y.substr(y.length - 4);
                return s;
            };
            Datebox.prototype._getDisabled = function () {
                var _r = String(this.hostElement.getAttribute('disabled')).toLowerCase();
                if (_r == 'true') {
                    return true;
                }
                return false;
            };
            Datebox.prototype._getdropDownHorizontalAlignment = function () {
                var _dropDownHorizontalAlignment = this.hostElement.getAttribute('dropDownHorizontalAlignment') || 'left';
                return _dropDownHorizontalAlignment;
            };
            Datebox.prototype._setdropDownHorizontalAlignment = function (val) {
                this.hostElement.setAttribute('dropDownHorizontalAlignment', val || 'left');
                if (this.type == 0)
                    $(this).children("div").jqxDateTimeInput({ dropDownHorizontalAlignment: val || 'left' });
            };
            Datebox.prototype._getdropDownVerticalAlignment = function () {
                var _dropDownVerticalAlignment = this.hostElement.getAttribute('dropDownVerticalAlignment') || 'bottom';
                return _dropDownVerticalAlignment;
            };
            Datebox.prototype._setdropDownVerticalAlignment = function (val) {
                this.hostElement.setAttribute('dropDownVerticalAlignment', val || 'bottom');
                if (this.type == 0)
                    $(this).children("div").jqxDateTimeInput({ dropDownVerticalAlignment: val || 'bottom' });
            };
            Datebox.prototype.getText = function () {
                return this.text;
            };
            Datebox.prototype.getControl = function () {
                return this.hostElement.childNodes[0];
            };
            Datebox.prototype.focus = function () {
                this.hostElement.childNodes[0].children[1].focus();
            };
            Datebox.prototype.blur = function () {
                this.hostElement.childNodes[0].children[1].blur();
            };
            Datebox.prototype.GetData = function () {
                return this.value;
            };
            Datebox.prototype.setData = function (value) {
                this.value = value;
            };
            Datebox.prototype.SetData = function (value) {
                this.value = value;
            };
            Datebox.prototype.setDataText = function (txt) {
                if (txt.length > 0)
                    this.setText(this.AddDateDelimiter(txt, this));
                else
                    this.setText("");
            };
            Datebox.prototype.setEnable = function (bEnable) {
                if (this.type == 0) {
                    this.hostElement.setAttribute('disabled', !bEnable);
                    $(this).children("div").jqxDateTimeInput({ disabled: !bEnable });
                }
                else {
                    this.hostElement.setAttribute('disabled', !bEnable);
                    $(this).children().children().prop('disabled', !bEnable);
                }
            };
            Datebox.prototype.getType = function () {
                return this.type;
            };
            Datebox.prototype.isReadonly = function () {
                this.hostElement.getAttribute('data-readonly');
            };
            Datebox.prototype.AddDateDelimiter = function (s, ctrl) {
                if (ctrl.lang != 1) {
                    if (ctrl.type == 0)
                        return s.substring(0, 4) + "/" + s.substring(4, 6) + "/" + s.substring(6, 8);
                    else if (ctrl.type == 1)
                        return s.substring(0, 4) + "/" + s.substring(4, 6);
                    else
                        return s.substring(0, 4);
                }
                else {
                    if (ctrl.type == 0)
                        return s.substring(6, 8) + "/" + s.substring(4, 6) + "/" + s.substring(0, 4);
                    else if (ctrl.type == 1)
                        return s.substring(4, 6) + "/" + s.substring(0, 4);
                    else
                        return s.substring(0, 4);
                }
            };
            Datebox.prototype.Change = function (d, ctrl) {
                var today, s;
                var sValue = ctrl.text;
                var aValue = sValue.split('/');
                if (ctrl.type == 1) {
                    aValue[0]++;
                    aValue[0] -= 1;
                    aValue[1]++;
                    aValue[1] -= 1;
                    if (ctrl.lang != "1") {
                        aValue[1] += d;
                        today = new Date(aValue[0], aValue[1] - 1, 1);
                    }
                    else {
                        aValue[0] += d;
                        today = new Date(aValue[1], aValue[0] - 1, 1);
                    }
                }
                else {
                    aValue[0]++;
                    aValue[0] -= 1;
                    aValue[0] += d;
                    today = new Date(aValue[0], 0, 1);
                }
                var y = "000" + (today.getFullYear());
                var m = "0" + (today.getMonth() + 1);
                var d = "0" + (today.getDate());
                if (ctrl.type == 1) {
                    if (ctrl.lang != "1")
                        s = y.substr(y.length - 4) + "/" + m.substr(m.length - 2);
                    else
                        s = m.substr(m.length - 2) + "/" + y.substr(y.length - 4);
                }
                else
                    s = y.substr(y.length - 4);
                ctrl.setText(s);
                this.currCtrl = ctrl;
            };
            return Datebox;
        }(jqxBaseControl));
        jqxctrl.Datebox = Datebox;
        var Icon = (function (_super) {
            __extends(Icon, _super);
            function Icon(selector) {
                _super.call(this, selector);
                this._name = "";
                this.NAME = "gw-icon";
                this.FA = "fa";
                this.TEMPLATES = {
                    icon: [
                        '<span class="{{fa}} {{fa}}-{{name}} {{size}} {{spin}} {{rotate}} {{flip}}" ><input type="submit" value="" class="btn btn-default" ></input></span>'
                    ],
                    error: [
                        '<b>Icon name not specified.</b>'
                    ]
                };
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._render();
            }
            Object.defineProperty(Icon.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                    this._render();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Icon.prototype, "rotate", {
                get: function () {
                    return this.hostElement.getAttribute('rotate');
                },
                set: function (value) {
                    this.hostElement.setAttribute('rotate', value);
                    this._render();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Icon.prototype, "flip", {
                get: function () {
                    return this.hostElement.getAttribute('flip');
                },
                set: function (value) {
                    this.hostElement.setAttribute('flip', value);
                    this._render();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Icon.prototype, "disable", {
                set: function (val) {
                    $(this.hostElement).children('span').prop("disabled", true);
                    $(this.hostElement).children('span').unbind("click");
                    $(this.hostElement).unbind("click");
                    $(this.hostElement).children('span').css("cursor", "default");
                },
                enumerable: true,
                configurable: true
            });
            Icon.prototype._render = function () {
                var size = this.hostElement.getAttribute("size"), name = ("" + this.hostElement.getAttribute("name")).toLowerCase(), rotate = this.hostElement.getAttribute("rotate"), flip = this.hostElement.getAttribute("flip"), datatooltip = this.hostElement.getAttribute("data-tooltip"), datatooltipposition = this.hostElement.getAttribute("data-tooltip-position");
                if (!name) {
                    return this.hostElement.innerHTML = this._templateObj("error", "");
                }
                this.hostElement.setAttribute("title", datatooltip ? datatooltip : "");
                this.hostElement.removeAttribute("data-tooltip");
                this.hostElement.removeAttribute("data-tooltip-position");
                this.hostElement.innerHTML = this._templateObj("icon", {
                    fa: this.FA,
                    name: name,
                    size: size ? this.FA + "-" + size : "",
                    spin: "" === this.hostElement.getAttribute("spin") ? this.FA + "-spin" : "",
                    rotate: rotate ? this.FA + "-rotate-" + rotate : "",
                    flip: flip ? this.FA + "-flip-" + flip : ""
                });
            };
            Icon.prototype._templateObj = function (view, model) {
                var html = this.TEMPLATES[view] || [];
                model = model || {};
                html = html.join("");
                for (var key in model) {
                    if (model.hasOwnProperty(key)) {
                        var value = model[key], regexp = new RegExp("{{" + key + "}}", "g");
                        html = html.replace(regexp, value);
                    }
                }
                return html;
            };
            return Icon;
        }(jqxBaseControl));
        jqxctrl.Icon = Icon;
        var Radio = (function (_super) {
            __extends(Radio, _super);
            function Radio(selector) {
                _super.call(this, selector);
                this._name = "";
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                var _style = this.hostElement.getAttribute('data-style');
                if (_style == null || _style == undefined || _style == 'undefined' || _style == '') {
                    _style = _style + ';border:1 solid darkgray; border-width: 0 0 1 0 ; padding:4 5 4 5; height:20; margin:1 1 1 1 ; background-color:white; line-height:100%;  ';
                }
                var _class = this.hostElement.getAttribute('data-class');
                if (_class == null || _class == undefined || _class == 'undefined' || _class == '') {
                    _class = "";
                }
                var _currReadonly = this.hostElement.getAttribute('data-readonly');
                var content = this.hostElement.innerHTML;
                var list = this.hostElement.childNodes;
                var cnt = 0;
                var id = "C" + this.id;
                for (var i = 0; i < list.length; i++) {
                    if (list[i].nodeType == 1) {
                        if (list[i].tagName == "SPAN") {
                            var btn;
                            var lstValue = list[i].getAttribute('data-value') || list[i].getAttribute('value');
                            if (this.value == lstValue || (this.value == "" && cnt == 0)) {
                                btn = document.createElement('input');
                                btn.setAttribute('type', 'radio');
                                btn.setAttribute('data-value', lstValue);
                                btn.setAttribute('name', id);
                                btn.setAttribute('checked', '');
                                this.value = lstValue;
                            }
                            else {
                                btn = document.createElement('input');
                                btn.setAttribute('type', 'radio');
                                btn.setAttribute('data-value', lstValue);
                                btn.setAttribute('name', id);
                                btn.setAttribute('id', id);
                            }
                            list[i].insertAdjacentElement("beforeBegin", btn);
                            i++;
                            cnt++;
                            btn.addEventListener("click", this.OnUpdate);
                        }
                    }
                }
                if (this.name == null) {
                    this.name = this.id;
                }
            }
            Object.defineProperty(Radio.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.childNodes[0].input = value;
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Radio.prototype, "value", {
                get: function () {
                    return this.hostElement.getAttribute('data-value');
                },
                set: function (value) {
                    this.hostElement.setAttribute('data-value', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Radio.prototype, "disabled", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('disabled');
                    if (tmp == 'disabled' || tmp == 'true')
                        return true;
                    return false;
                },
                set: function (value) {
                    if (value == 'disabled' || value == 'true' || value == true) {
                        this.hostElement.childNodes[0].setAttribute('disabled', '');
                        this.hostElement.childNodes[0].setAttribute('disabled', value);
                        this.hostElement.childNodes[0].classList.add('control-disabled');
                        if (value) {
                            this.hostElement.contentEditable = "true";
                        }
                        else {
                            this.hostElement.contentEditable = "false";
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Radio.prototype, "readonly", {
                get: function () {
                    return this.hostElement.childNodes[0].getAttribute('data-readonly');
                },
                set: function (value) {
                    this.hostElement.childNodes[0].setAttribute('data-readonly', value);
                },
                enumerable: true,
                configurable: true
            });
            Radio.prototype.focus = function () {
                this.hostElement.childNodes[0].focus();
            };
            Radio.prototype.blur = function () {
                this.hostElement.childNodes[0].blur();
            };
            Radio.prototype.GetData = function () {
                return this.hostElement.childNodes[0].value;
            };
            Radio.prototype.SetData = function (value) {
                this.hostElement.childNodes[0].value = value;
            };
            Radio.prototype.SetDataText = function (txt) {
                this.hostElement.childNodes[0].value = txt;
            };
            Radio.prototype.SetEnable = function (bEnable) {
                this.disabled = !bEnable;
            };
            Radio.prototype.SetReadOnly = function (value) {
                this.readonly = value;
            };
            Radio.prototype.OnUpdate = function (event) {
                if (event.srcElement.parentNode) {
                    event.srcElement.parentNode.setAttribute('data-value', event.srcElement.getAttribute('data-value'));
                }
            };
            return Radio;
        }(jqxBaseControl));
        jqxctrl.Radio = Radio;
        var Tabs = (function (_super) {
            __extends(Tabs, _super);
            function Tabs(selector) {
                _super.call(this, selector);
                this._name = "";
                this._animationType = "fade";
                this._autoHeight = true;
                this._closeButtonSize = 16;
                this._collapsible = false;
                this._contentTransitionDuration = 450;
                this._enabledHover = true;
                this._enableScrollAnimation = true;
                this._keyboardNavigation = true;
                this._position = "top";
                this._reorder = false;
                this._scrollAnimationDuration = false;
                this._selectedItem = 0;
                this._selectionTracker = true;
                this._scrollable = true;
                this._scrollPosition = true;
                this._scrollStep = true;
                this._showCloseButtons = false;
                this._toggleMode = 'click';
                this._jsonData = [];
                var contenttmp = this.hostElement.innerHTML;
                var lsttabs = this._getTabList();
                var _titleContent = '';
                var _tabContent = '';
                for (var i = 0; i < lsttabs.length; i++) {
                    var tmp = this._getTabTitle(lsttabs[i]);
                    if (tmp != '<li></li>')
                        _titleContent += tmp;
                    _tabContent += this._getTabContent(lsttabs[i]);
                }
                $(this.hostElement).append('<ul>' + _titleContent + '</ul>');
                var p = this.ElementTranferInfo();
                this._jqxtabs = jqwidgets.createInstance(selector, 'jqxTabs', p);
                this._registerEvent(this.id, "add", this._getEventAttribute("add"));
                this._registerEvent(this.id, "created", this._getEventAttribute("created"));
                this._registerEvent(this.id, "collapsed", this._getEventAttribute("collapsed"));
                this._registerEvent(this.id, "dragStart", this._getEventAttribute("dragStart"));
                this._registerEvent(this.id, "dragEnd", this._getEventAttribute("dragEnd"));
                this._registerEvent(this.id, "expanded", this._getEventAttribute("expanded"));
                this._registerEvent(this.id, "removed", this._getEventAttribute("removed"));
                this._registerEvent(this.id, "selecting", this._getEventAttribute("selecting"));
                this._registerEvent(this.id, "selected", this._getEventAttribute("selected"));
                this._registerEvent(this.id, "tabclick", this._getEventAttribute("tabclick"));
                this._registerEvent(this.id, "unselecting", this._getEventAttribute("unselecting"));
                this._registerEvent(this.id, "unselected", this._getEventAttribute("unselected"));
            }
            Tabs.prototype.ElementTranferInfo = function () {
                this.value = this.hostElement.getAttribute('value') || '';
                this.height = this.hostElement.getAttribute('height') || this.height;
                this.width = this.hostElement.getAttribute('width') || this.width;
                this.position = this.hostElement.getAttribute('position') || this.position;
                this.animationType = this.hostElement.getAttribute('animationType') || this.animationType;
                this.selectionTracker = this.hostElement.getAttribute('selectionTracker') || this.selectionTracker;
                this.theme = this.hostElement.getAttribute('theme') || this.theme;
                var p = {
                    width: this.width,
                    height: this.height,
                    position: this.position,
                    animationType: this.animationType,
                    selectionTracker: this.selectionTracker,
                    theme: 'energyblue'
                };
                return p;
            };
            Object.defineProperty(Tabs.prototype, "animationType", {
                get: function () {
                    return this.hostElement.getAttribute('animationType') || 'none';
                },
                set: function (value) {
                    this.hostElement.setAttribute('animationType', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.animationType = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "autoHeight", {
                get: function () {
                    return esys.utils.Converter.ObjectToBoolean(this.hostElement.getAttribute('autoHeight')) || this._autoHeight;
                },
                set: function (value) {
                    this.hostElement.setAttribute('autoHeight', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.autoHeight = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "closeButtonSize", {
                get: function () {
                    return this.hostElement.getAttribute('closeButtonSize') || this._closeButtonSize;
                },
                set: function (value) {
                    this.hostElement.setAttribute('closeButtonSize', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.closeButtonSize = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "collapsible", {
                get: function () {
                    return this.hostElement.getAttribute('collapsible') || this._collapsible;
                },
                set: function (value) {
                    this.hostElement.setAttribute('collapsible', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.collapsible = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "contentTransitionDuration", {
                get: function () {
                    return this.hostElement.getAttribute('contentTransitionDuration') || this._contentTransitionDuration;
                },
                set: function (value) {
                    this.hostElement.setAttribute('contentTransitionDuration', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.contentTransitionDuration = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "disabled", {
                get: function () {
                    return this.hostElement.getAttribute('disabled') || this._disabled;
                },
                set: function (value) {
                    this._disabled = value;
                    this.hostElement.setAttribute('disabled', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.disabled = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "enabledHover", {
                get: function () {
                    return this.hostElement.getAttribute('enabledHover') || this._enabledHover;
                },
                set: function (value) {
                    this.hostElement.setAttribute('enabledHover', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.enabledHover = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "enableScrollAnimation", {
                get: function () {
                    return this.hostElement.getAttribute('enableScrollAnimation') || this._enableScrollAnimation;
                },
                set: function (value) {
                    this.hostElement.setAttribute('enableScrollAnimation', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.enableScrollAnimation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "height", {
                get: function () {
                    return this.hostElement.getAttribute('height') || '99.5%';
                },
                set: function (value) {
                    this.hostElement.setAttribute('height', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.height = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "initTabContent", {
                get: function () {
                    return this.hostElement.getAttribute('initTabContent');
                },
                set: function (value) {
                    this.hostElement.setAttribute('initTabContent', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.initTabContent = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "keyboardNavigation", {
                get: function () {
                    return this.hostElement.getAttribute('keyboardNavigation') || this._keyboardNavigation;
                },
                set: function (value) {
                    this.hostElement.setAttribute('keyboardNavigation', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.keyboardNavigation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "position", {
                get: function () {
                    return this.hostElement.getAttribute('position') || this._position;
                },
                set: function (value) {
                    this._value = value;
                    this.hostElement.setAttribute('position', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.position = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "reorder", {
                get: function () {
                    return this.hostElement.getAttribute('reorder') || this._reorder;
                },
                set: function (value) {
                    this._reorder = value;
                    this.hostElement.setAttribute('reorder', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.reorder = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "rtl", {
                get: function () {
                    return this.hostElement.getAttribute('rtl') || this._rtl;
                },
                set: function (value) {
                    this._rtl = value;
                    this.hostElement.setAttribute('rtl', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.rtl = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "scrollAnimationDuration", {
                get: function () {
                    return this.hostElement.getAttribute('scrollAnimationDuration') || this._scrollAnimationDuration;
                },
                set: function (value) {
                    this.hostElement.setAttribute('scrollAnimationDuration', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.scrollAnimationDuration = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "selectedItem", {
                get: function () {
                    return this.hostElement.getAttribute('selectedItem') || this._selectedItem;
                },
                set: function (value) {
                    this.hostElement.setAttribute('selectedItem', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.selectedItem = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "selectionTracker", {
                get: function () {
                    return this.hostElement.getAttribute('selectionTracker') || this._selectionTracker;
                },
                set: function (value) {
                    this.hostElement.setAttribute('selectionTracker', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.selectionTracker = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "scrollable", {
                get: function () {
                    return this.hostElement.getAttribute('scrollable') || this._scrollable;
                },
                set: function (value) {
                    this.hostElement.setAttribute('scrollable', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.scrollable = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "scrollPosition", {
                get: function () {
                    return this.hostElement.getAttribute('scrollPosition') || this.scrollPosition;
                },
                set: function (value) {
                    this.hostElement.setAttribute('scrollPosition', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.scrollPosition = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "scrollStep", {
                get: function () {
                    return this.hostElement.getAttribute('scrollStep') || this._scrollStep;
                },
                set: function (value) {
                    this.hostElement.setAttribute('scrollStep', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.scrollStep = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "showCloseButtons", {
                get: function () {
                    return this.hostElement.getAttribute('showCloseButtons') || this._showCloseButtons;
                },
                set: function (value) {
                    this.hostElement.setAttribute('showCloseButtons', value);
                    this._showCloseButtons = value;
                    if (this._InitControl == false) {
                        this._jqxtabs.showAllCloseButtons = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "toggleMode", {
                get: function () {
                    return this.hostElement.getAttribute('toggleMode') || this._toggleMode;
                },
                set: function (value) {
                    this.hostElement.setAttribute('toggleMode', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.toggleMode = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "theme", {
                get: function () {
                    return this.hostElement.getAttribute('theme') || this._theme;
                },
                set: function (value) {
                    this.hostElement.setAttribute('theme', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.theme = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tabs.prototype, "width", {
                get: function () {
                    return this.hostElement.getAttribute('width') || 'auto';
                },
                set: function (value) {
                    this.hostElement.setAttribute('width', value);
                    if (this._InitControl == false) {
                        this._jqxtabs.width = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Tabs.prototype._getTabList = function () {
                var lsttabs = this.hostElement.querySelectorAll("div");
                if (lsttabs.length == 0) {
                    return [];
                }
                return lsttabs;
            };
            Tabs.prototype._getTabTitle = function (tabContent) {
                var _title = tabContent.getAttribute('title') || '';
                if (_title == '') {
                }
                return '<li>' + _title + '<' + '/' + 'li>';
            };
            Tabs.prototype._getTabContent = function (tabContent) {
                var _Content = tabContent.innerHTML;
                if (_Content == '') {
                }
                return '<div>' + _Content + '<' + '/' + 'div>';
            };
            Tabs.prototype._getEventAttribute = function (val) {
                if (val == null || val == '' || val == undefined) {
                    return '';
                }
                else
                    return this.hostElement.getAttribute(val);
            };
            Tabs.prototype.addAt = function (index, title, content) {
                this._jqxtabs.addAt(index, title, content);
            };
            Tabs.prototype.addFirst = function (element) {
                this._jqxtabs.addFirst(element);
            };
            Tabs.prototype.addLast = function (element) {
                this._jqxtabs.addLast(element, '');
            };
            Tabs.prototype.collapse = function () {
                this._jqxtabs.collapse();
            };
            Tabs.prototype.disable = function () {
                this._jqxtabs.disable();
            };
            Tabs.prototype.disableAt = function (index) {
                this._jqxtabs.disableAt(index);
            };
            Tabs.prototype.ensureVisible = function (index) {
                this._jqxtabs.ensureVisible(index);
            };
            Tabs.prototype.enableAt = function (index) {
                this._jqxtabs.enableAt(index);
            };
            Tabs.prototype.expand = function () {
                this._jqxtabs.expand();
            };
            Tabs.prototype.enable = function () {
                this._jqxtabs.enable();
            };
            Tabs.prototype.focus = function () {
                this._jqxtabs.focus();
            };
            Tabs.prototype.getTitleAt = function (index) {
                return this._jqxtabs.getTitleAt(index);
            };
            Tabs.prototype.getContentAt = function (index) {
                return this._jqxtabs.getContentAt(index);
            };
            Tabs.prototype.hideCloseButtonAt = function (index) {
                this._jqxtabs.hideCloseButtonAt(index);
            };
            Tabs.prototype.hideAllCloseButtons = function () {
                this._jqxtabs.hideAllCloseButtons();
            };
            Tabs.prototype.length = function () {
                this._jqxtabs.length();
            };
            Tabs.prototype.removeAt = function (index) {
                this._jqxtabs.removeAt(index);
            };
            Tabs.prototype.removeFirst = function () {
                this._jqxtabs.removeFirst();
            };
            Tabs.prototype.removeLast = function () {
                this._jqxtabs.removeLast();
            };
            Tabs.prototype.select = function (index) {
                this._jqxtabs.select(index);
            };
            Tabs.prototype.setContentAt = function (index, element) {
                this._jqxtabs.setContentAt(index, element);
            };
            Tabs.prototype.setTitleAt = function (index, element) {
                this._jqxtabs.setTitleAt(index, element);
            };
            Tabs.prototype.showCloseButtonAt = function (index) {
                this._jqxtabs.showCloseButtonAt(index);
            };
            Tabs.prototype.showAllCloseButtons = function () {
                this._jqxtabs.showAllCloseButtons();
            };
            Tabs.prototype.getVal = function () {
                return $("#" + this.id).jqxTabs('val');
            };
            return Tabs;
        }(jqxBaseControl));
        jqxctrl.Tabs = Tabs;
        var Grid = (function (_super) {
            __extends(Grid, _super);
            function Grid(selector) {
                _super.call(this, selector);
                this.dropdown_columns_list = new Array();
                this._autoshowloadelement = false;
                this._autoheight = false;
                this._autorowheight = false;
                this._rowsheight = 28;
                this._selectedrowindexes = [];
                this._keyboardnavigation = true;
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render("#" + this.ctrlId);
            }
            Grid.prototype._render = function (selector) {
                var lstcolumn = this._getColumnTemplateHtml();
                if (lstcolumn.length < 1) {
                    return;
                }
                var lstcolumgroups = this.hostElement.querySelectorAll('columngroups');
                if (lstcolumgroups.length > 0) {
                    var lstcolumgroup = lstcolumgroups[0].querySelectorAll('columngroup');
                    if (lstcolumgroup.length < 1) {
                        alert('Vui long khai bao thong tin cot "columngroup"');
                        return;
                    }
                }
                var colRs = [];
                for (var i = 0; i < lstcolumn.length; i++) {
                    var col;
                    var tmp = this._getDatafield(lstcolumn[i]);
                    var _text = this._getText(lstcolumn[i]);
                    var _cellsalign = this._getCellsalign(lstcolumn[i]);
                    var _hidden = this._getHidden(lstcolumn[i]);
                    var _columntype = this._getColumntype(lstcolumn[i]);
                    var _cellsformat = this._getCellsformat(lstcolumn[i]);
                    var _sortable = this._getColSortable(lstcolumn[i]);
                    var _width = this._getcolwidth(lstcolumn[i]);
                    var _align = this._getAlign(lstcolumn[i]);
                    var _columngroup = this._getcolumngroup(lstcolumn[i]);
                    var _colpinned = this._getpinned(lstcolumn[i]);
                    var _coleditable = this._getcoleditable(lstcolumn[i]);
                    var _renderer = this._getcolrenderer(lstcolumn[i]);
                    var _cellsrenderer = this._getcolcellsrenderer(lstcolumn[i]);
                    var _cellclassname = this._getcolcellclassname(lstcolumn[i]);
                    var _cellbeginedit = this._getcolcellbeginedit(lstcolumn[i]);
                    var _aggregatesrenderer = this._getaggregatesrenderer(lstcolumn[i]);
                    if (this._isListColumnType(lstcolumn[i])) {
                        var self = this;
                        var _dropDownWidth = this._getdropDownWidth(lstcolumn[i]);
                        var _autoDropDownHeight = this._getautoDropDownHeight(lstcolumn[i]);
                        var _dropDownHeight = this._getdropDownHeight(lstcolumn[i]);
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        col["displayfield"] = tmp + '_Dis';
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsalign"] = _cellsalign;
                        col["sortable"] = _sortable;
                        col["hidden"] = _hidden;
                        col["cellsformat"] = _cellsformat;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["pinned"] = _colpinned;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        if (_cellbeginedit != null)
                            col["cellbeginedit"] = _cellbeginedit;
                        col["createeditor"] = function (row, value, editor) {
                            if (this.datafield != undefined)
                                editor.jqxDropDownList({
                                    autoDropDownHeight: _autoDropDownHeight,
                                    dropDownHeight: _dropDownHeight,
                                    dropDownWidth: _dropDownWidth,
                                    source: self._getdataAdapter(this.datafield),
                                    displayMember: self._getdataAdapterOption(this.datafield, 'D'),
                                    valueMember: self._getdataAdapterOption(this.datafield, 'V')
                                });
                        };
                    }
                    else if (_columntype.toLocaleLowerCase() == 'datetimeinput') {
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsalign"] = _cellsalign;
                        col["sortable"] = _sortable;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["cellsformat"] = _cellsformat;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        if (_cellbeginedit != null)
                            col["cellbeginedit"] = _cellbeginedit;
                        if (_aggregatesrenderer != null)
                            col["aggregatesrenderer"] = _aggregatesrenderer;
                    }
                    else if (_columntype.toLocaleLowerCase() == 'numberinput') {
                        col = { draggable: true };
                        col[""] =
                            col["text"] = _text;
                        col["datafield"] = tmp;
                        col["width"] = _width;
                        col["cellsalign"] = _cellsalign;
                        col["sortable"] = _sortable;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["cellsformat"] = _cellsformat;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        if (_coleditable != null)
                            col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_aggregatesrenderer != null)
                            col["aggregatesrenderer"] = _aggregatesrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        if (_cellbeginedit != null)
                            col["cellbeginedit"] = _cellbeginedit;
                        col["createeditor"] = function (row, cellvalue, editor) {
                            var editorParams = {
                                digits: 15
                            };
                            editor.jqxNumberInput(editorParams);
                        };
                    }
                    else if (_columntype.toLocaleUpperCase().indexOf('template_') == 0) {
                        var _colTypeTmp = _columntype.toLocaleLowerCase().replace("template_", "");
                        if (_colTypeTmp == 'maskedinput') {
                            col = { draggable: true };
                            col["text"] = _text;
                            col["datafield"] = tmp;
                            if (_width != null)
                                col["width"] = _width;
                            col["cellsalign"] = _cellsalign;
                            col["sortable"] = _sortable;
                            col["hidden"] = _hidden;
                            col["pinned"] = _colpinned;
                            col["cellsformat"] = _cellsformat;
                            col["columntype"] = "template";
                            col["columngroup"] = _columngroup;
                            col["align"] = _align;
                            col["editable"] = _coleditable;
                            col["cellsrenderer"] = function (row, columnfield, cellvalue, defaulthtml, columnproperties) {
                                if (cellvalue == this.stringOf(9, '0') || cellvalue == this.stringOf(7, '0') || cellvalue.substr(0, 9) == '000-00-00') {
                                    return '';
                                }
                                else {
                                    var parts = defaulthtml.split('>'), subparts = parts[1].split('<'), w = cellvalue;
                                    if (w.indexOf('-') == -1) {
                                        w = w.substr(0, 3) + '-' + w.substr(3, 2) + '-' + w.substr(5, 4);
                                    }
                                    return parts[0] + '>' + w + '<' + subparts[1] + '>';
                                }
                            };
                            col["createeditor"] = function (row, cellvalue, editor, cellText, width, height) {
                                var inputElement = $('<input/>').prependTo(editor);
                                inputElement.jqxMaskedInput({
                                    width: width,
                                    height: height,
                                    theme: 'energyblue',
                                    mask: '###-##-####',
                                    value: cellvalue
                                });
                            };
                            col["initeditor"] = function (row, cellvalue, editor, celltext, pressedkey) {
                                var inputField = editor.find('input');
                                if (pressedkey) {
                                    inputField.val(pressedkey);
                                }
                                else {
                                    inputField.val(cellvalue);
                                }
                                inputField.jqxMaskedInput('clear');
                                inputField.jqxMaskedInput('focus');
                            };
                            col["geteditorvalue"] = function (row, cellvalue, editor) {
                                return editor.find('input').val();
                            };
                        }
                        else {
                        }
                    }
                    else if (_columntype.toLocaleLowerCase() == 'checkbox') {
                        col = { draggable: true, type: 'bool' };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        col["width"] = _width;
                        col["sortable"] = _sortable;
                        col["cellsalign"] = _cellsalign;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_aggregatesrenderer != null)
                            col["aggregatesrenderer"] = _aggregatesrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        if (_cellbeginedit != null)
                            col["cellbeginedit"] = _cellbeginedit;
                    }
                    else {
                        col = { draggable: true };
                        col["text"] = _text;
                        col["datafield"] = tmp;
                        if (_width != null)
                            col["width"] = _width;
                        col["cellsformat"] = _cellsformat;
                        col["sortable"] = _sortable;
                        col["cellsalign"] = _cellsalign;
                        col["hidden"] = _hidden;
                        col["pinned"] = _colpinned;
                        col["columntype"] = _columntype;
                        col["columngroup"] = _columngroup;
                        col["align"] = _align;
                        col["editable"] = _coleditable;
                        if (_renderer != null)
                            col["renderer"] = _renderer;
                        if (_cellsrenderer != null)
                            col["cellsrenderer"] = _cellsrenderer;
                        if (_aggregatesrenderer != null)
                            col["aggregatesrenderer"] = _aggregatesrenderer;
                        if (_cellclassname != null)
                            col["cellclassname"] = _cellclassname;
                        if (_cellbeginedit != null) {
                            alert("sdf" + _cellbeginedit);
                            col["cellbeginedit"] = _cellbeginedit;
                        }
                    }
                    colRs.push(col);
                }
                var colGrs = [];
                if (lstcolumgroups.length > 0) {
                    for (var j = 0; j < lstcolumgroup.length; j++) {
                        var _text = this._getText(lstcolumgroup[j]);
                        var _name = this._getName(lstcolumgroup[j]);
                        var _align = this._getAlign(lstcolumgroup[j]);
                        var _parentgroup = this._parentgroup(lstcolumgroup[j]);
                        var grp = {
                            text: _text,
                            name: _name,
                            align: _align
                        };
                        if (_parentgroup != null) {
                            grp["parentgroup"] = _parentgroup;
                        }
                        colGrs.push(grp);
                    }
                }
                
                
                var heightParent = $(this.hostElement).parent().outerHeight(true);
                if (heightParent == 0) {
                    heightParent = '100%';
                }
                else {
                    heightParent = heightParent + 'px';
                }
           
              //  $(this.hostElement).height = heightParent;
                if (this._getheight() != null) {
                    heightParent = this._getheight();
                }
                else{
                	heightParent ="90%";
                }
                
          
                
                                    
                $(this.hostElement).children('div').remove();
                this.hostElement.innerHTML += "<div id='" + this.ctrlId + "'  ></div>";
                
               // esys.ui.parser.AdjustGridSize(this.ctrlId);
                if (this.hostElement.style.width == null || this.hostElement.style.width == '')
                    this.hostElement.style.width = "100%";
                this.hostElement.style.paddingRight = '2px';
                if (colGrs.length > 0) {
                    var options = {
                        theme:  "energyblue",
                        source: this._getEmptyAataAdapter(colRs),
                        pageable: false,
                        sortable: true,
                        columnsresize: true,
                        altrows: false,
                        autoheight: this.autoheight,
                        autorowheight: this.autorowheight,
                        editable: this._geteditable(),
                        width: this._getwidth(),
                        editmode: this._geteditmode(),
                        clipboard: this._getclipboard(),
                        selectionmode: this._getselectionmode(),
                        keyboardnavigation: this._getkeyboardnavigation(),
                        columnsheight: this._getcolumnsheight(),
                        disabled: this._getdisabled(),
                        height: heightParent,
                        rowsheight: this.rowsheight,
                        autoshowloadelement: this.autoshowloadelement,
                        columns: colRs,
                        columngroups: colGrs
                    };
                    this._jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
                }
                else {
                    var options = {
                        theme:  "energyblue",
                        source: this._getEmptyAataAdapter(colRs),
                        pageable: false,
                        sortable: true,
                        columnsresize: true,
                        altrows: false,
                        autoheight: this.autoheight,
                        autorowheight: this.autorowheight,
                        editable: this._geteditable(),
                        width: this._getwidth(),
                        editmode: this._geteditmode(),
                        selectionmode: this._getselectionmode(),
                        keyboardnavigation: this._getkeyboardnavigation(),
                        columnsheight: this._getcolumnsheight(),
                        height: heightParent,
                        rowsheight: this.rowsheight,
                        autoshowloadelement: this.autoshowloadelement,
                        columns: colRs
                    };
                    this._jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
                }
                
             //  alert(  "lll"+$("#"+this.ctrlId).height() );
                this._registerEvent(this.ctrlId, "bindingcomplete", this.hostElement.getAttribute("bindingcomplete"));
                this._registerEvent(this.ctrlId, "columnresized", this.hostElement.getAttribute("columnresized"));
                this._registerEvent(this.ctrlId, "columnreordered", this.hostElement.getAttribute("columnreordered"));
                this._registerEvent(this.ctrlId, "columnclick", this.hostElement.getAttribute("columnclick"));
                this._registerEvent(this.ctrlId, "cellclick", this.hostElement.getAttribute("cellclick"));
                this._registerEvent(this.ctrlId, "celldoubleclick", this.hostElement.getAttribute("celldoubleclick"));
                this._registerEvent(this.ctrlId, "cellselect", this.hostElement.getAttribute("cellselect"));
                this._registerEvent(this.ctrlId, "cellunselect", this.hostElement.getAttribute("cellunselect"));
                this._registerEvent(this.ctrlId, "cellvaluechanged", this.hostElement.getAttribute("cellvaluechanged"));
                this._registerEvent(this.ctrlId, "cellbeginedit", this.hostElement.getAttribute("cellbeginedit"));
                this._registerEvent(this.ctrlId, "cellendedit", this.hostElement.getAttribute("cellendedit"));
                this._registerEvent(this.ctrlId, "filter", this.hostElement.getAttribute("filter"));
                this._registerEvent(this.ctrlId, "groupschanged", this.hostElement.getAttribute("groupschanged"));
                this._registerEvent(this.ctrlId, "groupexpand", this.hostElement.getAttribute("groupexpand"));
                this._registerEvent(this.ctrlId, "groupcollapse", this.hostElement.getAttribute("groupcollapse"));
                this._registerEvent(this.ctrlId, "pagechanged", this.hostElement.getAttribute("pagechanged"));
                this._registerEvent(this.ctrlId, "pagesizechanged", this.hostElement.getAttribute("pagesizechanged"));
                this._registerEvent(this.ctrlId, "rowclick", this.hostElement.getAttribute("rowclick"));
                this._registerEvent(this.ctrlId, "rowdoubleclick", this.hostElement.getAttribute("rowdoubleclick"));
                this._registerEvent(this.ctrlId, "rowselect", this.hostElement.getAttribute("rowselect"));
                this._registerEvent(this.ctrlId, "rowunselect", this.hostElement.getAttribute("rowunselect"));
                this._registerEvent(this.ctrlId, "rowexpand", this.hostElement.getAttribute("rowexpand"));
                this._registerEvent(this.ctrlId, "rowcollapse", this.hostElement.getAttribute("rowcollapse"));
                this._registerEvent(this.ctrlId, "sort", this.hostElement.getAttribute("sort"));
            };
            Object.defineProperty(Grid.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "value", {
                get: function () {
                    return this.hostElement.childNodes[0].value;
                },
                set: function (value) {
                    this.showloadelement();
                    this.hostElement.childNodes[0].value = value;
                    this.hostElement.setAttribute('value', value);
                    console.log(value);
                    var bindJson = this.formatData(value);
                    this.clearselection();
                    this.setrawsource(bindJson);
                    this.hideloadelement();
                  
                     
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "type", {
                get: function () {
                    return this.hostElement.childNodes[0].type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "readonly", {
                get: function () {
                    return this.hostElement.childNodes[0].getAttribute('readonly');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "ctrlId", {
                get: function () {
                    return this.id + "_" + this._gwrandomId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "rowCount", {
                get: function () {
                    return this._jqxGrid.getboundrows().length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "selectedrowindexes", {
                get: function () {
                    return this._jqxGrid.selectedrowindexes;
                },
                set: function (val) {
                    this._jqxGrid.selectedrowindexes = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "autoshowloadelement", {
                get: function () {
                    if (this._InitControl == false) {
                        this._autoshowloadelement = this._jqxGrid.autoshowloadelement;
                    }
                    return this._autoshowloadelement;
                },
                set: function (val) {
                    this.hostElement.setAttribute('autoshowloadelement', val);
                    this._autoshowloadelement = val;
                    if (this._InitControl == false) {
                        $('#' + this.ctrlId).jqxGrid({ autoshowloadelement: val });
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "autoheight", {
                get: function () {
                    if (this._InitControl == false) {
                        this._autoheight = this._jqxGrid.autoheight;
                    }
                    return this._autoheight;
                },
                set: function (val) {
                    if (this._InitControl == false) {
                        this._jqxGrid.autoheight = val;
                    }
                    this._autoheight = val;
                    this.hostElement.setAttribute('autoheight', val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "autorowheight", {
                get: function () {
                    if (this._InitControl == false) {
                        this._autorowheight = this._jqxGrid.autorowheight;
                    }
                    return this._autorowheight;
                },
                set: function (val) {
                    this.hostElement.setAttribute('autorowheight', val);
                    if (this._InitControl == false) {
                        this._jqxGrid.autorowheight = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "rowsheight", {
                get: function () {
                    if (this._InitControl == false) {
                        this._rowsheight = this._jqxGrid.rowsheight;
                    }
                    return this._rowsheight;
                },
                set: function (val) {
                    this.hostElement.setAttribute('rowsheight', val);
                    this._rowsheight = val;
                    if (this._InitControl == false) {
                        this._jqxGrid.rowsheight = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "selectedrowindex", {
                get: function () {
                    return this._jqxGrid.selectedrowindex;
                },
                set: function (val) {
                    this._jqxGrid.selectedrowindex = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "sortable", {
                get: function () {
                    return this._jqxGrid.sortable;
                },
                set: function (val) {
                    this._jqxGrid.sortable = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "clipboard", {
                get: function () {
                    return this._jqxGrid.clipboard;
                },
                set: function (val) {
                    this._jqxGrid.clipboard = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "disabled", {
                get: function () {
                    return this._jqxGrid.disabled;
                },
                set: function (val) {
                    this._jqxGrid.disabled = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "editable", {
                get: function () {
                    return this._jqxGrid.editable;
                },
                set: function (val) {
                    this._jqxGrid.editable = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "keyboardnavigation", {
                get: function () {
                    return this._jqxGrid.keyboardnavigation;
                },
                set: function (val) {
                    this._jqxGrid.keyboardnavigation = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "width", {
                get: function () {
                    return this._jqxGrid.width;
                },
                set: function (val) {
                    this._jqxGrid.width = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Grid.prototype, "columnsheight", {
                get: function () {
                    return this._jqxGrid.columnsheight;
                },
                set: function (val) {
                    this._jqxGrid.columnsheight = val;
                },
                enumerable: true,
                configurable: true
            });
            Grid.prototype.GetData = function () {
                /*var tmp =  this.value;
                if(tmp.records){
                	return tmp.records;
                }else{
                	return tmp;
                }*/
            	return this.getDataSource();
            };
            Grid.prototype.SetData = function (value) {
            	console.log(value);
                this.value = value;
            };
            Grid.prototype.GetGridData = function (row, coldatafield) {
                if (this._jqxGrid) {
                    var column = this._jqxGrid.getcolumn(coldatafield);
                    if (column == null) {
                        var colList = [];
                        var _rs = this._jqxGrid.columns;
                        if (_rs.records != undefined) {
                            colList = _rs.records;
                        }
                        else {
                            colList = _rs;
                        }
                        for (var i = 0; i < colList.length; i++) {
                            if (colList[i].datafield == coldatafield) {
                                column = colList[i];
                                break;
                            }
                        }
                    }
                    if (column == null) {
                        throw new Error('Loi lay thong tin cot');
                    }
                    if (column.columntype == 'datetimeinput') {
                        var t = this._jqxGrid.getcellvalue(row, coldatafield);
                        return moment(t).format('YYYYMMDD');
                    }
                    else if (column.columntype == 'dropdownlist') {
                        return this._jqxGrid.getcellvalue(row, coldatafield);
                    }
                    else if (column.columntype == 'checkbox') {
                        return esys.utils.Converter.BooleanToString(this._jqxGrid.getcellvalue(row, coldatafield), 'N');
                    }
                    else
                        return this._jqxGrid.getcellvalue(row, coldatafield);
                }
            };
            Grid.prototype.SetGridData = function (row, coldatafield, value) {
                var column = this._jqxGrid.getcolumn(coldatafield);
                if (column.columntype == 'datetimeinput') {
                    this._jqxGrid.setcellvalue(row, coldatafield, moment(value, "YYYYMMDD")._d);
                }
                else if (column.columntype == 'dropdownlist') {
                    var l_dropdownlistsource = this.dropdown_columns_list;
                    var testVal = '';
                    if (l_dropdownlistsource != undefined)
                        for (var i = 0; i < l_dropdownlistsource.length; i++) {
                            if (l_dropdownlistsource[i].datafield == coldatafield) {
                                for (var j = 0; j < l_dropdownlistsource[i].jsondata.length; j++) {
                                    if (l_dropdownlistsource[i].jsondata[j][l_dropdownlistsource[i].valuemember] == value) {
                                        testVal = l_dropdownlistsource[i].jsondata[j][l_dropdownlistsource[i].displaymember];
                                    }
                                }
                            }
                        }
                    this._jqxGrid.setcellvalue(row, coldatafield, value);
                    this._jqxGrid.setcellvalue(row, coldatafield + '_Dis', testVal);
                }
                else if (column.columntype == 'checkbox') {
                    this._jqxGrid.setcellvalue(row, coldatafield, esys.utils.Converter.ObjectToBoolean(value));
                }
                else
                    this._jqxGrid.setcellvalue(row, coldatafield, value);
                this.setRowEdited(row);
            };
            Grid.prototype.SetGridText = function (row, coldatafield, value) {
                this.SetGridData(row, coldatafield, value);
            };
            Grid.prototype.GetGridControl = function () {
                return this._jqxGrid;
            };
            Grid.prototype.clear = function () {
                this._jqxGrid.clear();
            };
            Grid.prototype.ClearData = function () {
                this.clear();
            };
            Grid.prototype.AddRow = function () {
                var b = this._jqxGrid.addrow(null, {}, 'last');
                if (b) {
                    var rows = this._jqxGrid.getrows();
                    this._jqxGrid.selectrow(rows.length - 1);
                    this._jqxGrid.ensurerowvisible(rows.length - 1);
                }
                ;
            };
            Grid.prototype.AddRowAt = function (idx) {
                var b = this._jqxGrid.addrow(null, {}, idx);
                if (b) {
                    var rowId = this._jqxGrid.getrowid(idx);
                    this._jqxGrid.selectrow(Number(rowId));
                    this._jqxGrid.ensurerowvisible(Number(rowId));
                }
                ;
            };
            Grid.prototype.AddRowTop = function () {
                var b = this._jqxGrid.addrow(null, {}, 'top');
                if (b) {
                    this._jqxGrid.selectrow(0);
                    this._jqxGrid.ensurerowvisible(0);
                }
                ;
            };
            Grid.prototype.DeleteRow = function (remove) {
                if (remove === void 0) { remove = false; }
                if (remove == true) {
                    var selectedrowindexes = this._jqxGrid.selectedrowindexes;
                    for (var i = 0; i <= selectedrowindexes.length; i++) {
                        var rowscount = this._jqxGrid.getdatainformation().rowscount;
                        if (selectedrowindexes[i] >= 0 && this.selectedrowindexes[i] < rowscount) {
                            var id = this._jqxGrid.getrowid(selectedrowindexes[i]);
                            var commit = this._jqxGrid.deleterow(id);
                        }
                    }
                }
                else {
                    var selectedrowindexes = this._jqxGrid.selectedrowindexes;
                    for (var i = 0; i <= selectedrowindexes.length; i++) {
                        this.setRowDeleted(selectedrowindexes[i]);
                    }
                }
            };
            Grid.prototype.DeleteRowAt = function (row, keep) {
                if (keep === void 0) { keep = false; }
                if (keep == true) {
                    if (row >= 0 && row < this.rowCount) {
                        var id = this._jqxGrid.getrowid(row);
                        var commit = this._jqxGrid.deleterow(id);
                    }
                }
                else {
                    if (row >= 0 && row < this.rowCount) {
                        this.setRowDeleted(row);
                    }
                }
            };
            Grid.prototype.UnDeleteRow = function () {
                var selectedrowindexes = this._jqxGrid.selectedrowindexes;
                for (var i = 0; i < selectedrowindexes.length; i++) {
                    this.setRowNormal(selectedrowindexes[i]);
                }
            };
            Grid.prototype.UnDeleteRowAt = function (row) {
                if (row > 0 && row < this.rowCount) {
                    this.setRowNormal(row);
                }
            };
            Grid.prototype.DeleteAll = function () {
                var row, i;
                for (i = 0; i < this.rowCount; i++) {
                    this.setRowDeleted(row);
                }
            };
            Grid.prototype.SetRowBgColor = function (ridx, htmlcolor) {
            };
            Grid.prototype.setRowEdited = function (selrow) {
                if (selrow > -1) {
                    return this._jqxGrid.setRowEdited(selrow);
                }
            };
            Grid.prototype.setRowNormal = function (selrow) {
                if (selrow > -1) {
                    return this._jqxGrid.setRowNormal(selrow);
                }
            };
            Grid.prototype.setRowAdded = function (selrow) {
                if (selrow > -1) {
                    return this._jqxGrid.setRowAdded(selrow);
                }
            };
            Grid.prototype.setRowDeleted = function (selrow) {
                if (selrow > -1) {
                    return this._jqxGrid.setRowDeleted(selrow);
                }
            };
            Grid.prototype._getText = function (col) {
                return col.getAttribute("text");
                ;
            };
            Grid.prototype._getName = function (col) {
                return col.getAttribute("name");
            };
            Grid.prototype._isListColumnType = function (col) {
                var _columntype = col.getAttribute("columntype");
                if (_columntype == null || _columntype == undefined || _columntype == '')
                    return false;
                if (_columntype == 'combobox' || _columntype == 'dropdownlist') {
                    return true;
                }
                return false;
            };
            Grid.prototype._getDatafield = function (col) {
                var _datafield = col.getAttribute("datafield");
                if (_datafield == null || _datafield == undefined || _datafield == '') {
                    alert('vui long khai bao "datafield".' + col);
                    return;
                }
                return _datafield;
            };
            Grid.prototype._getCellsalign = function (col) {
                var _cellsalign = col.getAttribute("cellsalign");
                if (_cellsalign == null || _cellsalign == undefined || _cellsalign == '') {
                    _cellsalign = 'left';
                }
                return _cellsalign;
            };
            Grid.prototype._getHidden = function (col) {
                var _hidden = col.getAttribute("hidden");
                if (_hidden == null || _hidden == undefined || _hidden == '') {
                    _hidden = false;
                }
                return esys.utils.Converter.ObjectToBoolean(_hidden);
            };
            Grid.prototype._getColumntype = function (col) {
                var _columntype = col.getAttribute("columntype");
                if (_columntype == null || _columntype == undefined || _columntype == '') {
                    _columntype = 'textbox';
                }
                return _columntype;
            };
            Grid.prototype._getCellsformat = function (col) {
                var _cellsformat = col.getAttribute("cellsformat");
                if (col.getAttribute("columntype") == "datetimeinput") {
                    _cellsformat = col.getAttribute("cellsformat") || 'dd-MM-yyyy';
                }
                if (_cellsformat == null || _cellsformat == undefined || _cellsformat == '') {
                    _cellsformat = '';
                }
                return _cellsformat;
            };
            Grid.prototype._getCellsformat2 = function (datafield) {
                var lstcolumn = this._getColumnTemplateHtml();
                if (lstcolumn.length < 1) {
                    return null;
                }
                for (var i = 0; i < lstcolumn.length; i++) {
                    var tmp = this._getDatafield(lstcolumn[i]);
                    if (tmp == datafield) {
                        return this._getCellsformat(lstcolumn[i]);
                    }
                }
                return null;
            };
            Grid.prototype._getColSortable = function (col) {
                var _sortable = col.getAttribute("sortable");
                if (_sortable == null || _sortable == undefined || _sortable == '') {
                    _sortable = true;
                }
                return esys.utils.Converter.ObjectToBoolean(_sortable);
            };
            Grid.prototype._getcolwidth = function (col) {
                var _with = col.getAttribute("width");
                if (_with == undefined) {
                    return 0;
                }
                if (_with == '') {
                    return 0;
                }
                return _with;
            };
            Grid.prototype._getAlign = function (col) {
                var _align = col.getAttribute("align");
                if (_align == null || _align == undefined || _align == '') {
                    _align = 'center';
                }
                return _align;
            };
            Grid.prototype._parentgroup = function (col) {
                return col.getAttribute("parentgroup");
            };
            Grid.prototype._getcoleditable = function (col) {
                var _editable = col.getAttribute('editable') || true;
                return esys.utils.Converter.ObjectToBoolean(_editable);
            };
            Grid.prototype._getcolrenderer = function (col) {
                var _renderer = col.getAttribute('renderer');
                if (_renderer != null)
                    _renderer = window[_renderer];
                return _renderer;
            };
            Grid.prototype._getcolcellsrenderer = function (col) {
                var _cellsrenderer = col.getAttribute('cellsrenderer');
                if (_cellsrenderer != null)
                    _cellsrenderer = window[_cellsrenderer];
                return _cellsrenderer;
            };
            Grid.prototype._getaggregatesrenderer = function (col) {
                var _aggregatesrenderer = col.getAttribute('aggregatesrenderer');
                if (_aggregatesrenderer != null)
                    _aggregatesrenderer = window[_aggregatesrenderer];
                return _aggregatesrenderer;
            };
            Grid.prototype._getcolcellclassname = function (col) {
                var _cellclassname = col.getAttribute('cellclassname');
                if (_cellclassname != null)
                    _cellclassname = window[_cellclassname];
                return _cellclassname;
            };
            Grid.prototype._getcolcellbeginedit = function (col) {
                var _cellbeginedit = col.getAttribute('cellbeginedit');
                if (_cellbeginedit != null)
                    _cellbeginedit = window[_cellbeginedit];
                return _cellbeginedit;
            };
            Grid.prototype._getdropDownWidth = function (col) {
                return col.getAttribute('dropDownWidth') || 200;
                ;
            };
            Grid.prototype._getautoDropDownHeight = function (col) {
                return col.getAttribute('autoDropDownHeight') || false;
                ;
            };
            Grid.prototype._getdropDownHeight = function (col) {
                return col.getAttribute('dropDownHeight') || 200;
                ;
            };
            Grid.prototype._getdisabled = function () {
                return this.hostElement.getAttribute('disabled') || false;
            };
            Grid.prototype._getcolumngroup = function (col) {
                var _columngroup = col.getAttribute("columngroup");
                if (_columngroup == null || _columngroup == undefined || _columngroup == '') {
                    _columngroup = '';
                }
                return _columngroup;
            };
            Grid.prototype._getDropDownListData = function (col) {
                if (col == undefined || col == '' || col == null)
                    return [];
                var _columntype = col.getAttribute("columntype");
                if (_columntype == 'dropdownlist' || _columntype == 'combobox') {
                    var _columndropdownlistData = col.getAttribute("columndropdownlistData");
                    if (_columndropdownlistData != null && _columndropdownlistData != '' && _columndropdownlistData != undefined) {
                        return $.parseJSON(_columndropdownlistData);
                    }
                    return [];
                }
                return [];
            };
            Grid.prototype._getdataAdapter = function (coldatafield) {
                var columnlst = this._getColumnTemplateHtml();
                var col = this._getColumwithDataField(columnlst, coldatafield);
                if (col == null)
                    return undefined;
                var dropdown_columns_list_data = this._getDropDownListData(col);
                for (var i = 0; i < dropdown_columns_list_data.length; i++) {
                    if (dropdown_columns_list_data[i].datafield == coldatafield) {
                        var source = {
                            datatype: "json",
                            localdata: dropdown_columns_list_data[i].jsondata,
                            updaterow: function (rowid, rowdata, commit) {
                                commit(true);
                            },
                        };
                        var dataAdapter = new $.jqx.dataAdapter(source);
                        dataAdapter.dataBind();
                        return dataAdapter;
                    }
                }
            };
            Grid.prototype._getdataAdapterOption = function (coldatafield, typeVal) {
                var columnlst = this._getColumnTemplateHtml();
                var col = this._getColumwithDataField(columnlst, coldatafield);
                if (col == null)
                    return undefined;
                var dropdown_columns_list_data = this._getDropDownListData(col);
                for (var i = 0; i < dropdown_columns_list_data.length; i++) {
                    if (dropdown_columns_list_data[i].datafield == coldatafield) {
                        if (typeVal == 'D')
                            return dropdown_columns_list_data[i].displaymember;
                        else if (typeVal == 'V')
                            return dropdown_columns_list_data[i].valuemember;
                        else
                            return '';
                    }
                }
                return '';
            };
            Grid.prototype._setDropDownListData = function (col, djson) {
                if (col == undefined || col == '' || col == null)
                    return;
                else
                    col.setAttribute("columndropdownlistData", JSON.stringify(djson));
            };
            Grid.prototype._getColumnTemplateHtml = function () {
                var lstcolumns = this.hostElement.querySelectorAll('columns');
                if (lstcolumns.length == 0) {
                    alert('Vui Long Khai bao thong tin cot cua luoi');
                    return [];
                }
                if (lstcolumns.length > 1) {
                    alert('Trong mot luoi chi co mot tag "columns". Vui long kiem tra lai.');
                    return [];
                }
                var lstcolumn = lstcolumns[0].querySelectorAll('column');
                if (lstcolumn.length < 1) {
                    alert('Vui long khai bao thong tin cot "column"');
                    return [];
                }
                return lstcolumn;
            };
            Grid.prototype._getColumwithDataField = function (lstcolumn, coldatafield) {
                for (var i = 0; i < lstcolumn.length; i++) {
                    var tmp = this._getDatafield(lstcolumn[i]);
                    if (tmp == coldatafield) {
                        return lstcolumn[i];
                    }
                }
                return null;
            };
            Grid.prototype._getselectionmode = function () {
                return this.hostElement.getAttribute('selectionmode') || 'multiplerowsextended';
                ;
            };
            Grid.prototype._getclipboard = function () {
                return this.hostElement.getAttribute('clipboard') || false;
            };
            Grid.prototype._getsortable = function () {
                return this.hostElement.getAttribute('sortable') || false;
            };
            Grid.prototype._geteditable = function () {
                return this.hostElement.getAttribute('editable') || true;
            };
            Grid.prototype._getcolumnsheight = function () {
                return this.hostElement.getAttribute('columnsheight') || 25;
            };
            Grid.prototype._geteditmode = function () {
                return this.hostElement.getAttribute('editmode') || 'click';
            };
            Grid.prototype._getkeyboardnavigation = function () {
                return this.hostElement.getAttribute('keyboardnavigation') || this._keyboardnavigation;
                ;
            };
            Grid.prototype._getwidth = function () {
                return this.hostElement.getAttribute('width') || '100%';
                ;
            };
            Grid.prototype._getheight = function () {
                return this.hostElement.getAttribute('height');
            };
            Grid.prototype._getpinned = function (col) {
                return col.getAttribute("pinned") || false;
            };
            Grid.prototype._getFieldType = function (colList, datafield) {
                var rs = "string";
                for (var i = 0; i < colList.length; i++) {
                    if (colList[i].datafield == datafield) {
                        if (colList[i].columntype == 'datetimeinput')
                            return 'date';
                        if (colList[i].columntype == 'numberinput' || colList[i].columntype == 'number')
                            return 'number';
                        if (colList[i].columntype == 'checkbox')
                            return 'bool';
                    }
                }
                return rs;
            };
            Grid.prototype._getEmptyAataAdapter = function (colList) {
                var myDatafields = [];
                var field = {};
                for (var i = 0; i < colList.length; i++) {
                    field = {
                        name: colList[i].datafield,
                        type: this._getFieldType(colList, colList[i].datafield)
                    };
                    myDatafields[myDatafields.length] = field;
                }
                for (i = 0; i < colList.length; i++) {
                    if (colList[i].columntype == 'dropdownlist' || colList[i].columntype == 'combobox') {
                        field = {
                            name: colList[i].datafield + "_Dis",
                            type: "string"
                        };
                        myDatafields[myDatafields.length] = field;
                    }
                }
                field = {
                    name: "_gwStatus_",
                    type: "number"
                };
                myDatafields[myDatafields.length] = field;
                var gridSource = {
                    localdata: [],
                    datatype: "array",
                    datafields: myDatafields,
                    updaterow: function (rowid, rowdata, commit) {
                        commit(true);
                    },
                };
                var gridDataAdapter = new $.jqx.dataAdapter(gridSource);
                gridDataAdapter.dataBind();
                return gridDataAdapter;
            };
            Grid.prototype.focus = function () {
                this._jqxGrid.focus();
            };
            Grid.prototype.blur = function () {
                this.hostElement.childNodes[0].blur();
            };
            Grid.prototype.SetColComboData = function (datafield, jsondata, valuemember, displaymember) {
                var tmpData = [];
                tmpData.push({
                    datafield: datafield,
                    jsondata: jsondata,
                    displaymember: displaymember,
                    valuemember: valuemember
                });
                this.dropdown_columns_list.push({
                    datafield: datafield,
                    jsondata: jsondata,
                    displaymember: displaymember,
                    valuemember: valuemember
                });
                var _tempCol = this._getColumnTemplateHtml();
                for (var i = 0; i < _tempCol.length; i++) {
                    var tmp = this._getDatafield(_tempCol[i]);
                    if (tmp == datafield) {
                        this._setDropDownListData(_tempCol[i], tmpData);
                    }
                }
                $("#" + this.ctrlId).jqxGrid({ 'dropdownlistsource': this.dropdown_columns_list });
                this._render("#" + this.ctrlId);
            };
            Grid.prototype.isReadonly = function () {
                this.hostElement.getAttribute('data-readonly');
            };
            Grid.prototype.setrawsource = function (data) {
                $("#" + this.ctrlId).jqxGrid({ 'dropdownlistsource': this.dropdown_columns_list });
                $("#" + this.ctrlId).jqxGrid('setrawsource', data);
            };
            Grid.prototype.showloadelement = function () {
                this._jqxGrid.showloadelement();
            };
            Grid.prototype.hideloadelement = function () {
                this._jqxGrid.hideloadelement();
            };
            Grid.prototype.getRowCount = function () {
                return this.rowCount;
            };
            Grid.prototype.getDataSource = function () {
                var rowCaches = this._jqxGrid.getboundrows();
                ;
                var rows = ($.parseJSON(JSON.stringify(rowCaches)));
                var lstcolumn = this._getColumnTemplateHtml();
                for (var r = 0; r < rows.length; r++) {
                    for (var i = 0; i < lstcolumn.length; i++) {
                        var _columntype = this._getColumntype(lstcolumn[i]);
                        if (_columntype == 'datetimeinput') {
                            var tmp = this._getDatafield(lstcolumn[i]);
                            if (rows[r][tmp] != '' && rows[r][tmp] != null && rows[r][tmp] != undefined)
                                rows[r][tmp] = moment(rows[r][tmp]).format('YYYYMMDD');
                        }
                        if (_columntype == 'checkbox') {
                            var tmp = this._getDatafield(lstcolumn[i]);
                            if (String(rows[r][tmp]) != '' && String(rows[r][tmp]) != null && String(rows[r][tmp]) != undefined
                                && String(rows[r][tmp]) != 'null' && String(rows[r][tmp]) != 'undefined') {
                                rows[r][tmp] = esys.utils.Converter.ObjectToBoolean(rows[r][tmp]);
                            }
                        }
                    }
                }
                return rows;
            };
            Grid.prototype.formatData = function (valJson) {

            	console.log(typeof valJson);
                var rows = {};
                if (valJson != null ) {
                	if (valJson.records == null) {
                        rows.records = valJson;
                    }
                    else {
                        rows = valJson;
                    }

                    var lstcolumn = this._getColumnTemplateHtml();
                    for (var r = 0; r < rows.records.length; r++) {
                        for (var i = 0; i < lstcolumn.length; i++) {
                            var _columntype = this._getColumntype(lstcolumn[i]);
                            if (_columntype == 'datetimeinput') {
                                var tmp = this._getDatafield(lstcolumn[i]);
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = moment(rows.records[r][tmp])._d;
                            }
                            if (_columntype == 'checkbox') {
                                var tmp = this._getDatafield(lstcolumn[i]);
                                if (rows.records[r][tmp] != '' && rows.records[r][tmp] != null && rows.records[r][tmp] != undefined)
                                    rows.records[r][tmp] = esys.utils.Converter.ObjectToBoolean(rows.records[r][tmp]);
                            }
                        }
                    }
                }
                else {
                    rows = { records: {} };
                }
                return rows;
            };
            Grid.prototype.autoresizecolumns = function (dataField, val) {
                if (val == undefined || val == null || val == '')
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumns');
                else
                    this._jqxGrid.autoresizecolumns(val);
            };
            Grid.prototype.autoresizecolumn = function (dataField, val) {
                if (val == undefined || val == null || val == '')
                    $('#' + this.ctrlId).jqxGrid('autoresizecolumn', dataField);
                else
                    this._jqxGrid.autoresizecolumn(dataField, val);
            };
            Grid.prototype.beginupdate = function () {
                this._jqxGrid.beginupdate();
            };
            Grid.prototype.endupdate = function () {
                this._jqxGrid.endupdate();
            };
            Grid.prototype.getcolumnindex = function (dataField) {
                var index = this._jqxGrid.getcolumnindex(dataField);
                return index;
            };
            Grid.prototype.getcolumn = function (dataField) {
                var column = this._jqxGrid.getcolumn(dataField);
                return column;
            };
            Grid.prototype.getcolumnproperty = function (dataField, propertyName) {
                var value = this._jqxGrid.getcolumnproperty(dataField, propertyName);
                return value;
            };
            Grid.prototype.getrowid = function (rowBoundIndex) {
                return this._jqxGrid.getrowid(rowBoundIndex);
            };
            Grid.prototype.getrowdata = function (rowBoundIndex) {
                return this._jqxGrid.getrowdata(rowBoundIndex);
            };
            Grid.prototype.hidecolumn = function (dataField) {
                this._jqxGrid.hidecolumn(dataField);
            };
            Grid.prototype.showcolumn = function (dataField) {
                this._jqxGrid.showcolumn(dataField);
            };
            Grid.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
                this._jqxGrid.setcolumnproperty(dataField, propertyName, propertyValue);
            };
            Grid.prototype.settitletext = function (dataField, text) {
                this._jqxGrid.setcolumnproperty(dataField, 'text', text);
            };
            Grid.prototype.clearselection = function () {
                this._jqxGrid.clearselection();
            };
            Grid.prototype.getselectedrowindex = function () {
                return this._jqxGrid.getselectedrowindex();
            };
            Grid.prototype.getselectedcellfunction = function () {
                return this._jqxGrid.getselectedcell();
            };
            Grid.prototype.getselectedcells = function () {
                return this._jqxGrid.getselectedcells();
            };
            Grid.prototype.selectcell = function (rowBoundIndex, dataField) {
                this._jqxGrid.selectcell(rowBoundIndex, dataField);
            };
            Grid.prototype.selectallrows = function () {
                this._jqxGrid.selectallrows();
            };
            Grid.prototype.selectrow = function (rowBoundIndex) {
                this._jqxGrid.selectrow(rowBoundIndex);
            };
            Grid.prototype.unselectrow = function (rowBoundIndex) {
                this._jqxGrid.unselectrow(rowBoundIndex);
            };
            Grid.prototype.unselectcell = function (rowBoundIndex, dataField) {
                this._jqxGrid.unselectcell(rowBoundIndex, dataField);
            };
            Grid.prototype.stringOf = function (count, chr) {
                if (count < 1)
                    return '';
                var x = '';
                while (count > 1) {
                    if (count & 1)
                        x += chr;
                    count >>= 1;
                    chr += chr;
                }
                return x + chr;
            };
            return Grid;
        }(jqxBaseControl));
        jqxctrl.Grid = Grid;
        var Image = (function (_super) {
            __extends(Image, _super);
            function Image(selector) {
                _super.call(this, selector);
                this.bModify = false;
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
                if (this.name == null) {
                    this.name = this.id;
                }
            }
            Image.prototype._render = function () {
                this.hostElement.innerHTML = "<img border=1 id='" + this.id + '_' + this._gwrandomId + "' src='" + this.view + "&pk=" + this.oid + "&tableName=" + this.table_name + "' style='" + this.styles + "' width=" + this.width + " height=" + this.height + " />";
                this._img = this.hostElement.childNodes[0];
                if (this.oid == "0")
                    this._img.src = this.noimage;
                var _self = this;
                this.AddEventImage(this._img, 'click', function () {
                    _self.fnOnClick(_self);
                });
            };
            Object.defineProperty(Image.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (text) {
                    this.value = text;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "value", {
                get: function () {
                    return this.oid;
                },
                set: function (value) {
                    this.oid = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "disabled", {
                get: function () {
                    return this.hostElement.getAttribute('disabled') || false;
                },
                set: function (value) {
                    $(this).children('input').jqxInput('disabled', value);
                    this.hostElement.setAttribute('disabled', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "readonly", {
                get: function () {
                    return this.hostElement.getAttribute('readonly') || '';
                },
                set: function (value) {
                    this.hostElement.setAttribute('readonly', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "oid", {
                get: function () {
                    return this.hostElement.getAttribute('oid') || '0';
                },
                set: function (value) {
                    this.hostElement.setAttribute('oid', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "procedure", {
                get: function () {
                    return this.hostElement.getAttribute('procedure') || '';
                },
                set: function (value) {
                    this.hostElement.setAttribute('procedure', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "styles", {
                get: function () {
                    return this.hostElement.getAttribute('styles') || '';
                },
                set: function (value) {
                    this.hostElement.setAttribute('styles', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "master_pk", {
                get: function () {
                    return this.hostElement.getAttribute('master_pk') || '-1';
                },
                set: function (value) {
                    this.hostElement.setAttribute('master_pk', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "table_name", {
                get: function () {
                    return this.hostElement.getAttribute('table_name') || 'TCO_BPPHOTO';
                },
                set: function (value) {
                    this.hostElement.setAttribute('table_name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "src_table_name", {
                get: function () {
                    return this.hostElement.getAttribute('src_table_name') || 'null';
                },
                set: function (value) {
                    this.hostElement.setAttribute('src_table_name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "noimage", {
                get: function () {
                    var r = this.hostElement.getAttribute('noimage');
                    if (r == null) {
                        r = 'data:image/gif;base64,R0lGODlhfQCgAMQAAPDw8PLy8vj4+PT09Pn5+ff39/39/f7+/vHx8fb29u7u7vz8/PX19fv7+/r6+vPz8////+/v7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAB9AKAAAAX/ICSOZGmeaKqubOu+cCzPdG3feK7vfO/zh1PwRywaj8ikUndoCBKDAAIQiQAQgUFC0BguRV5U+EtaCAaIqnrNriIGggV5/jKcqe28HgA30P8mCwUBeoWGEQEFcoB0BoOHkIWJfoxLBA+RmYUPBJVIBgl4mqNsAAmUnj4OmKStbQ8OqT0EhK62awGdsjkCore/AAK7N72/xmrBwzTFx83JyjAEvs3GALrQLA611NQBsdgqBqzc3A+oYkVjLgnk7REJ4CjS7uTW8SXi9O3mQknqKQX0uStwT8SCbQK7LYoXMGE7gvEMIHTYLMA5ZQIouhMGboDGdgPALZj2sdrCYRlL/5LjqMyjSm4hlR1I85Iagn+MGtQk1wDjTm4sZbH72QzeMJdERyloE1PWgYlJXQVQRjPqLQTKSFodBUDZVmNev97KKtZV12FVy2rCOgyq2kNTj74d1VToXE1Gd6W8CyloKp18IfUcNrPs0kw3oSFdczhwXb2BDfmVNXJr40gATsrNc1ntY5SR80zeJTE0rovKGpqOADHewdUBNGNTHbn1vXyR+RUUMY+vvd0jht7NCxwC7re6i4vQ9tab8hK9v/5+ToKZ1WfUS1gnij27dq0lu3uH7lZjrvEqVh3rDAkW+hWgtLLnzPXU+xaX6Je7dp+Fo/LHTNJfDIIAKJUiA9Jgx/8A4GXChwCoJSiDGWiM8kYcEvbQxBNRTFHFFVls0UWGJJZo4i44najiiiwS0QQBBTDQIQCi0IjFAAwUQMCILbZgBgMPNAgJAA8wgGGPJBhAQAIG3hJAAgREmOEBBDCQlkAIMEBAiug18EhNiQzWnwMMCKkRAAx8M54Di201gJrKkclXmsUtEEor8wlkimyECdAkNXmSEoAAXALSAAOrscGAmLL4mWgbg8oCyqOF2JdTm5SyMQCjZNCSKVz8LSHAlZ/mgcBoRhRgZqkf2nYEbaxC4ioRsMYq66u2tjLrDtvlihmqNxBAKp6ZIhAqDg38+VWgTnJqgwGY+kqXlDIIJ63/LcTVsNe1twDrQrLcGhOAsy8cgGi4xjBQaArbotvtDK+5Ky6fK1gr7y3ZZrPqvUPCycK5/Kb7ggMBU+NvCtEW3MpnJxD8C7PhHmwCwO5CTAoDKzSwr8KYkTtCrUpxvMauYCibq8WaBIATASKTc6wIFLcssAkGDCuzKwigxvLN1BxrL8/4mmAy0HCVsADR1JzULtK2BBUz065gPMI4UNvywAgHbFz1HkMAtvUtg+0cCcpA6wIy0WS3AdHTX48idcJspA10TEOLLHcVcdncdiRsmXk30GdpLbPcZ+39iwiGjwVB4rYgzngrjj8+SuSSZ0J55ZBcjrkhmm+uR+eetwF6GOhrjE56FYj/nbgIgn/d2VlIxi777DiEAAA7';
                    }
                    else {
                        if (!r.startsWith('data:')) {
                            convertImgToBase64(r, function (base64Img) {
                                r = base64Img;
                            });
                        }
                    }
                    return r;
                },
                set: function (value) {
                    this.hostElement.setAttribute('noimage', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "width", {
                get: function () {
                    return this.hostElement.getAttribute('width') || 125;
                },
                set: function (value) {
                    this.hostElement.setAttribute('width', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "height", {
                get: function () {
                    return this.hostElement.getAttribute('height') || 160;
                },
                set: function (value) {
                    this.hostElement.setAttribute('height', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "post", {
                get: function () {
                    return this.hostElement.getAttribute('post') || '/system/index.gw?openType=SF&objId=st0000stdeab_fileupload';
                },
                set: function (value) {
                    this.hostElement.setAttribute('post', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "view", {
                get: function () {
                    return this.hostElement.getAttribute('view') || '/system/filemanager/view.gw';
                },
                set: function (value) {
                    this.hostElement.setAttribute('view', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "_ctrlId", {
                get: function () {
                    return "#" + this.id + "_" + this._gwrandomId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Image.prototype, "closeForFirstFile", {
                get: function () {
                    return this.hostElement.getAttribute('closeForFirstFile') || 'Y';
                },
                set: function (value) {
                    this.hostElement.setAttribute('closeForFirstFile', value);
                },
                enumerable: true,
                configurable: true
            });
            Image.prototype.fnOnClick = function (obj) {
                if (event.srcElement.tagName == "IMG" && obj.readonly != "true") {
                    obj.ChangeImage();
                }
            };
            Image.prototype.focus = function () {
                $(this.hostElement).children('input').jqxInput('focus');
            };
            Image.prototype.selectAll = function () {
                $(this.hostElement).children('input').jqxInput('selectAll');
            };
            Image.prototype.clear = function (focus) {
                this.value = '';
                this.focus();
            };
            Image.prototype.setMasterPK = function (txt) {
                this.master_pk = txt;
            };
            Image.prototype.getMasterPK = function () {
                return this.master_pk;
            };
            Image.prototype.GetData = function () {
                return this.oid;
            };
            Image.prototype.SetData = function (value) {
                this.bModify = false;
                if (value) {
                    this.SetDataText(value);
                }
                else {
                    this.SetDataText("");
                }
            };
            Image.prototype.SetDataText = function (txt) {
                var d = new Date();
                if (txt.length == 0)
                    txt = "0";
                if (txt != "0")
                    this._img.src = esys.System.ctx + this.view + "?pk=" + txt + "&tableName=" + this.table_name + "&random=" + d;
                else
                    this._img.src = this.noimage;
                this.oid = txt;
            };
            Image.prototype.SetEnable = function (bEnable) {
                this.readonly = bEnable ? "false" : "true";
            };
            Image.prototype.GetStatus = function () {
                return this.readonly;
            };
            Image.prototype.ChangeImage = function () {
                this.bModify = true;
                this.UploadFile();
            };
            Image.prototype.UploadFile = function () {
                if (this.bModify) {
                    var url = this.post + "&img_pk=" + this.oid + "&table_name=" + this.table_name + "&master_pk=" + this.master_pk + "&procedure=" + this.procedure + "&objctrl=" + this.id + "&closeForFirstFile=" + this.closeForFirstFile;
                    var rtnPK = esys.System.OpenModal(url, 600, 300, "Upload File", this, this.OnSelectFileCallBack, '');
                    if (rtnPK) {
                        if (IsNumeric(rtnPK)) {
                            this.oid = rtnPK;
                            this.SetDataText(element.oid);
                        }
                        else {
                            alert("Unexpected error:" + rtnPK);
                        }
                    }
                    else {
                    }
                }
            };
            Image.prototype.AddEventImage = function (obj, eventname, fnName) {
                if (typeof (fnName) === 'function') {
                    this.cb_addEventListener(obj, eventname, fnName);
                }
                else {
                    var _cellclick = fnName;
                    if (_cellclick != null && _cellclick != '' && _cellclick != undefined) {
                        var n = _cellclick.indexOf("(");
                        var fn = _cellclick;
                        if (n > -1) {
                            var fn = _cellclick.substr(0, n);
                        }
                        obj.on(eventname, window[fn]);
                    }
                }
            };
            Image.prototype.OnSelectFileCallBack = function () {
                var rst = esys.System.getDataParam();
                var ctrl = this.hostElement;
                if (ctrl != undefined) {
                    this.master_pk = rst.masterpk;
                    this.table_name = rst.tablename;
                    this.SetDataText(rst.pk);
                }
            };
            Image.prototype.cb_addEventListener = function (obj, evt, fnc) {
                if (obj.addEventListener) {
                    obj.addEventListener(evt, fnc, false);
                    return true;
                }
                else if (obj.attachEvent) {
                    return obj.attachEvent('on' + evt, fnc);
                }
                else {
                    evt = 'on' + evt;
                    if (typeof obj[evt] === 'function') {
                        fnc = (function (f1, f2) {
                            return function () {
                                f1.apply(this, arguments);
                                f2.apply(this, arguments);
                            };
                        })(obj[evt], fnc);
                    }
                    obj[evt] = fnc;
                    return true;
                }
            };
            return Image;
        }(jqxBaseControl));
        jqxctrl.Image = Image;
        var Link = (function (_super) {
            __extends(Link, _super);
            function Link(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._render();
                if (this.name == null) {
                    this.name = this.id;
                }
            }
            Link.prototype._render = function () {
                var _style = this.hostElement.getAttribute('data-style');
                var _stylers = 'font-weight:bold;font-size:9pt;width:100%;border:0px solid #6B9EB8;color: #000000;';
                if (_style != null && _style != undefined && _style != 'undefined' && _style != '') {
                    _stylers = _stylers + _style;
                }
                var _class = this.hostElement.getAttribute('data-class');
                var _classrs = 'gw-link';
                if (_class != null && _class != undefined && _class != 'undefined' && _class != '')
                    _classrs = _classrs + ' ' + _class;
                var contenttmp = this.hostElement.getAttribute('value');
                this.hostElement.innerHTML = '<a class="' + _classrs + '" title="' + this._gettitle() + '"  href="javascript:void(0);" style="text-decoration: none; color:#0000ff ;padding-right:10px;' + _stylers + '">' + contenttmp + '</a>';
                this._link = this.hostElement.childNodes[0];
                this._link.innerHTML = contenttmp;
            };
            Object.defineProperty(Link.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Link.prototype, "ctrlId", {
                get: function () {
                    return "#" + this.id + "_1";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Link.prototype, "text", {
                get: function () {
                    return this._link.innerHTML;
                },
                set: function (value) {
                    this._link.innerHTML = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Link.prototype, "value", {
                get: function () {
                    return this._link.innerHTML;
                },
                set: function (value) {
                    this._link.innerHTML = value;
                    this.hostElement.setAttribute('value', value);
                },
                enumerable: true,
                configurable: true
            });
            Link.prototype._gettitle = function () {
                return this.hostElement.getAttribute("title") || '';
            };
            Link.prototype.GetData = function () {
                return this.text;
            };
            Link.prototype.SetData = function (value) {
                this.text = value;
            };
            Link.prototype.SetDataText = function (value) {
                this.text = value;
            };
            return Link;
        }(jqxBaseControl));
        jqxctrl.Link = Link;
        var Maskedinput = (function (_super) {
            __extends(Maskedinput, _super);
            function Maskedinput(selector) {
                _super.call(this, selector);
                this._mask = '#####';
                this._promptChar = '_';
                this._readOnly = false;
                this._textAlign = 'left';
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
                this._InitControl = false;
            }
            Maskedinput.prototype._render = function () {
                this.hostElement.innerHTML = '<input id="' + this.id + '_' + this._gwrandomId + '" ></input>';
                var p = {
                    width: this.width,
                    height: this.height,
                    mask: this.mask,
                    promptChar: this.promptChar,
                    textAlign: this.textAlign,
                    theme: esys.System.getTheme(),
                    value: this.value
                };
                this._jqxInput = jqwidgets.createInstance(this.ctrlId, 'jqxMaskedInput', p);
                this.AddEventMaskedInput($(this.ctrlId), 'change', this._getEventChangeDeclare());
                this.AddEventMaskedInput($(this.ctrlId), 'valueChanged', this._getEventValueChangedDeclare());
                var self = this.hostElement;
                $(this.ctrlId).on('change', function (e) {
                    var userValue = e.target.value || '';
                    self.setAttribute('value', userValue);
                });
            };
            Object.defineProperty(Maskedinput.prototype, "name", {
                get: function () { return this.hostElement.getAttribute('name'); },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                    this._render();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "ctrlId", {
                get: function () { return "#" + this.id + "_" + this._gwrandomId; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "height", {
                get: function () {
                    return this.hostElement.getAttribute('height') || '25px';
                },
                set: function (val) {
                    this.hostElement.setAttribute('height', val);
                    this._jqxInput.height = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "width", {
                get: function () {
                    return this.hostElement.getAttribute('width');
                },
                set: function (val) {
                    this.hostElement.setAttribute('width', val);
                    this._jqxInput.width = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "mask", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.mask = this.hostElement.getAttribute('mask') || this._mask;
                    }
                    return this._jqxInput.mask;
                },
                set: function (val) {
                    this.hostElement.setAttribute('mask', val);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxMaskedInput('mask', val);
                        this._mask = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "disabled", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.disabled = this.hostElement.getAttribute('disabled') || this._disabled;
                    }
                    return this._jqxInput.disabled;
                },
                set: function (val) {
                    this.hostElement.setAttribute('disabled', val);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxMaskedInput('disabled', val);
                        this._height = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "promptChar", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.promptChar = this.hostElement.getAttribute('promptChar') || this._promptChar;
                    }
                    return this._jqxInput.promptChar;
                },
                set: function (val) {
                    this.hostElement.setAttribute('promptChar', val);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxMaskedInput('promptChar', val);
                        this._promptChar = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "readOnly", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.readOnly = this.hostElement.getAttribute('readOnly') || this._readOnly;
                    }
                    return this._jqxInput.readOnly;
                },
                set: function (val) {
                    this.hostElement.setAttribute('readOnly', val);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxMaskedInput('readOnly', val);
                        this._readOnly = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "textAlign", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.textAlign = this.hostElement.getAttribute('textAlign') || this._textAlign;
                    }
                    return this._jqxInput.textAlign;
                },
                set: function (val) {
                    this.hostElement.setAttribute('textAlign', val);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxMaskedInput('textAlign', val);
                        this._textAlign = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "value", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.hostElement.getAttribute('value');
                    }
                    return $(this.ctrlId).jqxMaskedInput('val');
                    ;
                },
                set: function (val) {
                    this.hostElement.setAttribute('value', val);
                    if (this._InitControl == false) {
                        this._jqxInput.val(val);
                        this._value = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Maskedinput.prototype, "text", {
                get: function () { return this.value; },
                set: function (val) { this.value = val; },
                enumerable: true,
                configurable: true
            });
            Maskedinput.prototype._getEventChangeDeclare = function () {
                var _change = this.hostElement.getAttribute('change') || '';
                return _change;
            };
            Maskedinput.prototype._getEventValueChangedDeclare = function () {
                var _valueChanged = this.hostElement.getAttribute('valueChanged') || '';
                return _valueChanged;
            };
            Maskedinput.prototype.clear = function () {
                this.value('');
                this._jqxInput.clear();
            };
            Maskedinput.prototype.focus = function () {
                this._jqxInput.focus();
            };
            Maskedinput.prototype.GetData = function () {
                return this.value;
            };
            Maskedinput.prototype.SetData = function (val) {
                this.value = val;
            };
            Maskedinput.prototype.SetDataText = function (val) {
                this.SetData(val);
            };
            Maskedinput.prototype.SetEnable = function (bEnable) {
                this.disabled = bEnable;
            };
            Maskedinput.prototype.GetControl = function () {
                return $(this.ctrlId);
            };
            Maskedinput.prototype.AddEventMaskedInput = function (obj, eventname, fnName) {
                var _eventfn = fnName;
                if (_eventfn != null && _eventfn != '' && _eventfn != undefined) {
                    var n = _eventfn.indexOf("(");
                    var fn = _eventfn;
                    if (n > -1) {
                        var fn = _eventfn.substr(0, n);
                    }
                    if (typeof fn == 'function') {
                        obj.on(eventname, window[fn]);
                    }
                }
            };
            return Maskedinput;
        }(jqxBaseControl));
        jqxctrl.Maskedinput = Maskedinput;
        var Numberinput = (function (_super) {
            __extends(Numberinput, _super);
            function Numberinput(selector) {
                _super.call(this, selector);
                this._allowNull = true;
                this._decimal = 0;
                this._decimalDigits = 2;
                this._decimalSeparator = '.';
                this._digits = 15;
                this._groupSeparator = ',';
                this._groupSize = 3;
                this._inputMode = 'advanced';
                this._min = -99999999999999;
                this._max = 99999999999999;
                this._negativeSymbol = '-';
                this._spinMode = 'advanced';
                this._spinButtons = false;
                this._spinButtonsWidth = 18;
                this._spinButtonsStep = 1;
                this._symbolPosition = 'left';
                this._textAlign = 'right';
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
                this._InitControl = false;
            }
            Numberinput.prototype._render = function () {
                this.hostElement.innerHTML = "<div id='" + this.id + "_" + this._gwrandomId + "'></div>";
                if (this.name == null) {
                    this.name = this.id;
                }
                var param = {};
                if (this.height != null)
                    param['height'] = this.height;
                param['readOnly'] = this.readOnly;
                param['inputMode'] = this.inputMode;
                param['digits'] = this.digits;
                param['max'] = this.max;
                param['min'] = this.min;
                this._jqxInput = jqwidgets.createInstance(this.ctrlId, 'jqxNumberInput', param);
                var defaultVal = this.hostElement.getAttribute('value');
                if (defaultVal != null)
                    this.value = defaultVal;
                this.AddEventNumberInput($(this.ctrlId).children('div'), 'change', this.hostElement.getAttribute('change'));
                this.AddEventNumberInput($(this.ctrlId).children('div'), 'textchanged', this.hostElement.getAttribute('textchanged'));
                this.AddEventNumberInput($(this.ctrlId).children('div'), 'valueChanged', this.hostElement.getAttribute('valueChanged'));
            };
            Object.defineProperty(Numberinput.prototype, "ctrlId", {
                get: function () { return "#" + this.id + "_" + this._gwrandomId; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "value", {
                get: function () {
                    var rtnVal = $(this.ctrlId).jqxNumberInput('val');
                    this.hostElement.setAttribute('value', rtnVal);
                    return rtnVal;
                },
                set: function (value) {
                    this._jqxInput.val(value);
                    this.hostElement.setAttribute('value', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "allowNull", {
                get: function () {
                    return this.hostElement.getAttribute('allowNull') || this._allowNull;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('allowNull', value);
                    this.hostElement.setAttribute('allowNull', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "decimal", {
                get: function () {
                    return this.hostElement.getAttribute('decimal') || this._decimal;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('decimal', value);
                    this.hostElement.setAttribute('decimal', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "disabled", {
                get: function () {
                    return this.hostElement.getAttribute('disabled') || this._disabled;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('disabled', value);
                    this.hostElement.setAttribute('disabled', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "decimalDigits", {
                get: function () {
                    return this.hostElement.getAttribute('decimalDigits') || this._decimalDigits;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('decimalDigits', value);
                    this.hostElement.setAttribute('decimalDigits', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "decimalSeparator", {
                get: function () {
                    return this.hostElement.getAttribute('decimalSeparator') || this._decimalSeparator;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('decimalSeparator', value);
                    this.hostElement.setAttribute('decimalSeparator', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "digits", {
                get: function () {
                    return this.hostElement.getAttribute('digits') || this._digits;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('digits', value);
                    this.hostElement.setAttribute('digits', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "groupSeparator", {
                get: function () {
                    return this.hostElement.getAttribute('groupSeparator') || this._groupSeparator;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('groupSeparator', value);
                    this.hostElement.setAttribute('groupSeparator', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "groupSize", {
                get: function () {
                    return this.hostElement.getAttribute('groupSize') || this._groupSize;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('groupSize', value);
                    this.hostElement.setAttribute('groupSize', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "height", {
                get: function () {
                    return this.hostElement.getAttribute('height') || '25px';
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('height', value);
                    this.hostElement.setAttribute('height', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "inputMode", {
                get: function () {
                    return this.hostElement.getAttribute('inputMode') || this._inputMode;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('inputMode', value);
                    this.hostElement.setAttribute('inputMode', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "min", {
                get: function () {
                    if (this._InitControl != false) {
                        return this.hostElement.getAttribute('min') || this._min;
                    }
                    return this._jqxInput.min;
                },
                set: function (value) {
                    this.hostElement.setAttribute('min', value);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxNumberInput('min', value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "max", {
                get: function () {
                    if (this._InitControl != false) {
                        return this.hostElement.getAttribute('max') || this._max;
                    }
                    return this._jqxInput.max;
                },
                set: function (value) {
                    this.hostElement.setAttribute('max', value);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxNumberInput('max', value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "negativeSymbol", {
                get: function () {
                    return this.hostElement.getAttribute('negativeSymbol') || this._negativeSymbol;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('negativeSymbol', value);
                    this.hostElement.setAttribute('negativeSymbol', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "placeHolder", {
                get: function () {
                    return this.hostElement.getAttribute('placeHolder') || '';
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('placeHolder', value);
                    this.hostElement.setAttribute('placeHolder', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "promptChar", {
                get: function () {
                    if (this._InitControl != false) {
                        return this.hostElement.getAttribute('promptChar') || '-';
                    }
                    return this._jqxInput.promptChar;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('promptChar', value);
                    this.hostElement.setAttribute('promptChar', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "rtl", {
                get: function () {
                    if (this._InitControl != false) {
                        return this.hostElement.getAttribute('rtl') || false;
                    }
                    return this._jqxInput.rtl;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('rtl', value);
                    this.hostElement.setAttribute('rtl', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "readOnly", {
                get: function () {
                    if (this._InitControl != false) {
                        return this.hostElement.getAttribute('readOnly') || false;
                    }
                    return this._jqxInput.readOnly;
                },
                set: function (value) {
                    this.hostElement.setAttribute('readOnly', value);
                    if (this._InitControl == false) {
                        $(this.ctrlId).jqxNumberInput('readOnly', value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "spinMode", {
                get: function () {
                    return this.hostElement.getAttribute('spinMode') || this._spinMode;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('spinMode', value);
                    this.hostElement.setAttribute('spinMode', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "spinButtons", {
                get: function () {
                    return this.hostElement.getAttribute('spinButtons') || this._spinButtons;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('spinButtons', value);
                    this.hostElement.setAttribute('spinButtons', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "spinButtonsWidth", {
                get: function () {
                    return this.hostElement.getAttribute('spinButtonsWidth') || this._spinButtonsWidth;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('spinButtonsWidth', value);
                    this.hostElement.setAttribute('spinButtonsWidth', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "spinButtonsStep", {
                get: function () {
                    return this.hostElement.getAttribute('spinButtonsStep') || this._spinButtonsStep;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('spinButtonsStep', value);
                    this.hostElement.setAttribute('spinButtonsStep', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "symbol", {
                get: function () {
                    return this.hostElement.getAttribute('symbol') || '';
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('symbol', value);
                    this.hostElement.setAttribute('symbol', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "symbolPosition", {
                get: function () {
                    return this.hostElement.getAttribute('symbolPosition') || this._symbolPosition;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('symbolPosition', value);
                    this.hostElement.setAttribute('symbolPosition', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "textAlign", {
                get: function () {
                    return this.hostElement.getAttribute('textAlign') || this._textAlign;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('textAlign', value);
                    this.hostElement.setAttribute('textAlign', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "template", {
                get: function () {
                    return this.hostElement.getAttribute('template') || 'default';
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('template', value);
                    this.hostElement.setAttribute('template', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "theme", {
                get: function () {
                    return this.hostElement.getAttribute('theme') || this._theme;
                },
                set: function (value) {
                    $(this.ctrlId).jqxNumberInput('theme', value);
                    this.hostElement.setAttribute('theme', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "width", {
                get: function () {
                    if (this._InitControl == true) {
                        return this.hostElement.getAttribute('width') || null;
                    }
                    return this._jqxInput.width;
                },
                set: function (value) {
                    if (this._InitControl == false) {
                        this._jqxInput.width = value;
                    }
                    this.hostElement.setAttribute('width', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numberinput.prototype, "validate", {
                get: function () {
                    return this.hostElement.getAttribute('validate');
                },
                set: function (value) {
                    this.hostElement.setAttribute('validate', value);
                },
                enumerable: true,
                configurable: true
            });
            Numberinput.prototype.focus = function () {
                $(this).children('div').jqxNumberInput('focus');
            };
            Numberinput.prototype.clear = function (focus) {
                $(this).children('div').jqxNumberInput('clear');
                this.focus();
            };
            Numberinput.prototype.getDecimal = function () {
                return this._jqxInput.getDecimal();
            };
            Numberinput.prototype.setDecimal = function (value) {
                return this._jqxInput.setDecimal(value);
            };
            Numberinput.prototype.GetData = function () {
                return this.value;
            };
            Numberinput.prototype.SetData = function (value) {
                this.value = value;
            };
            Numberinput.prototype.SetDataText = function (value) {
                this.SetData(value);
            };
            Numberinput.prototype.SetEnable = function (bval) {
                this.disabled = bval;
            };
            Numberinput.prototype.GetEnabled = function () {
                return this.disabled;
            };
            Numberinput.prototype.Validate = function () {
                if (this.validate == null) {
                    return true;
                }
                else if (this.validate == "1") {
                    if (this.value == "" || this.value == null) {
                        alert("Please input data for this textbox. \n\nBáº¡n pháº£i nháº­p dá»¯ liá»‡u cho textbox nÃ y.");
                        this.focus();
                        return false;
                    }
                }
                return false;
            };
            Numberinput.prototype.SetReadOnly = function (bval) {
                this.readOnly = bval;
            };
            Numberinput.prototype.AddEventNumberInput = function (obj, eventname, fnName) {
                var _cellclick = fnName;
                if (_cellclick != null && _cellclick != '' && _cellclick != undefined) {
                    var n = _cellclick.indexOf("(");
                    var fn = _cellclick;
                    if (n > -1) {
                        var fn = _cellclick.substr(0, n);
                    }
                    obj.on(eventname, window[fn]);
                }
            };
            return Numberinput;
        }(jqxBaseControl));
        jqxctrl.Numberinput = Numberinput;
        var panel = (function (_super) {
            __extends(panel, _super);
            function panel(selector) {
                _super.call(this, selector);
                var CTRL_NAME = 'gw-panel';
                if (isRegistered(CTRL_NAME) == undefined) {
                    if (this.id == null || this.id == '') {
                        alert(this.valueOf().toString() + ' is not [id] value');
                        return;
                    }
                    this._gwrandomId = esys.System.getCurrentDate(new Date());
                    this._render();
                }
            }
            panel.prototype._render = function () {
                var _internalId = this.id + "_" + this._gwrandomId;
                var content = this.hostElement.innerHTML;
                if (this.paneltype == 'div') {
                    this.hostElement.innerHTML = '<div id="' + _internalId + '">' + content + '</div>';
                    var objCtrl = this.hostElement.querySelectorAll("div")[0];
                    var param = {
                        height: 300,
                        theme: esys.System.getTheme()
                    };
                    this._jqxPanel = jqwidgets.createInstance(this.ctrlId, 'jqxPanel', param);
                }
                else {
                    this.hostElement.innerHTML = '<iframe id="jqxPanel" style="width: ' + this.width + ';height: ' + this.height + ';border: none;">' + content + '</iframe>';
                }
                this._initSrc();
            };
            Object.defineProperty(panel.prototype, "ctrlId", {
                get: function () { return "#" + this.id + "_" + this._gwrandomId; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "name", {
                get: function () {
                    return this.hostElement.getAttribute('name');
                },
                set: function (value) {
                    this.hostElement.setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "src", {
                get: function () {
                    return this.hostElement.getAttribute('src');
                },
                set: function (value) {
                    this.hostElement.setAttribute('src', value);
                    this._initSrc();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "value", {
                get: function () {
                    if (this.hostElement.toggled == 'true' || this.hostElement.toggled == true) {
                        return 'T';
                    }
                    else {
                        return 'F';
                    }
                },
                set: function (value) {
                    this._setAttribute('value', value);
                    if (value == 'T') {
                        this.hostElement.toggled = true;
                    }
                    else
                        this.hostElement.toggled = false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "text", {
                get: function () {
                    return this._getAttribute('text') || '';
                },
                set: function (value) {
                    var _objCtrl = this.hostElement.GetButtonControl();
                    _objCtrl[0].value = value;
                    this._setAttribute('text', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "paneltype", {
                get: function () {
                    return this._getAttribute('paneltype') || 'div';
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "widt", {
                get: function () {
                    return this._getAttribute('width') || '100%';
                },
                set: function (value) {
                    this._setAttribute('width', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(panel.prototype, "height", {
                get: function () {
                    return this._getAttribute('height') || '100%';
                },
                set: function (value) {
                    this._setAttribute('height', value);
                },
                enumerable: true,
                configurable: true
            });
            panel.prototype._initSrc = function () {
                if (this.paneltype == 'div') {
                    var objCtrl = this.hostElement.querySelectorAll("div")[0];
                    if (this.src != null && this.src != "") {
                        var divElement = objCtrl;
                        $(divElement).load(this.src);
                    }
                }
                else {
                    var objCtrl = this.hostElement.querySelectorAll("iframe")[0];
                    if (this.src != null && this.src != "") {
                        var divElement = objCtrl;
                        console.log(this.src);
                        $(divElement).attr('src', this.src);
                    }
                }
            };
            panel.prototype._setAttribute = function (attName, attValue) {
                this.hostElement.setAttribute(attName, attValue);
            };
            panel.prototype._getAttribute = function (attName) {
                return this.hostElement.getAttribute(attName);
            };
            panel.prototype.GetDocument = function () {
                var objCtrl = null;
                if (this.paneltype != 'div') {
                    objCtrl = this.hostElement.querySelectorAll("iframe")[0];
                    if (typeof objCtrl.contentWindow != 'undefined') {
                        return objCtrl.contentWindow;
                    }
                    else {
                        return objCtrl.window;
                    }
                }
            };
            panel.prototype.focus = function () {
                var _objCtrl = this.hostElement.GetButtonControl();
                _objCtrl.jqxToggleButton('focus');
            };
            panel.prototype._Callfn = function (fnName, args) {
                var args = new Array();
                for (var i = 1; i < args.length; i++)
                    args.push(args[i]);
                if (window[fnName] != undefined)
                    window[fnName].apply(this, args);
            };
            panel.prototype.GetData = function () {
                return this.value;
            };
            panel.prototype.SetData = function (data) {
                this.value = data;
            };
            return panel;
        }(jqxBaseControl));
        jqxctrl.panel = panel;
        var Togglebutton = (function (_super) {
            __extends(Togglebutton, _super);
            function Togglebutton(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
            }
            Togglebutton.prototype._render = function () {
                var _internalId = this.id + "_" + esys.System.getCurrentDate(new Date());
                this.hostElement.innerHTML = '<input class="gw-button" type="button" id="' + _internalId + '" value="' + this.text + '"></input>';
                var objCtrl = this._getInternalElement();
                var param = {
                    disabled: this.disabled,
                    height: this.height,
                    width: this.width,
                    theme: esys.System.getTheme(),
                    toggled: this.toggled
                };
                this._jqxTogglebutton = jqwidgets.createInstance(this.ctrlId, 'jqxToggleButton', param);
                this._registerEvent($(objCtrl), 'click', this._getAttribute('click'));
            };
            Object.defineProperty(Togglebutton.prototype, "ctrlId", {
                get: function () { return "#" + this.id + "_" + this._gwrandomId; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "name", {
                get: function () {
                    return this._getAttribute('name');
                },
                set: function (value) {
                    this._setAttribute('name', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "delay", {
                get: function () {
                    return this._getAttribute('delay') || 50;
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ delay: value });
                    this._setAttribute('delay', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "disabled", {
                get: function () {
                    return this._getAttribute('disabled') || false;
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ disabled: value });
                    this._setAttribute('disabled', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "height", {
                get: function () {
                    return this._getAttribute('height') || '26px';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ height: value });
                    this._setAttribute('height', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "imgSrc", {
                get: function () {
                    return this._getAttribute('imgSrc') || '';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ imgSrc: value });
                    this._setAttribute('imgSrc', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "imgWidth", {
                get: function () {
                    return this._getAttribute('imgWidth') || 16;
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ imgWidth: value });
                    this._setAttribute('imgWidth', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "imgHeight", {
                get: function () {
                    return this._getAttribute('imgHeight') || 16;
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ imgHeight: value });
                    this._setAttribute('imgHeight', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "imgPosition", {
                get: function () {
                    return this._getAttribute('imgPosition') || 'center';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ imgPosition: value });
                    this._setAttribute('imgPosition', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "roundedCorners", {
                get: function () {
                    return this._getAttribute('roundedCorners') || 'jqx-rc-all';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ roundedCorners: value });
                    this._setAttribute('roundedCorners', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "rtl", {
                get: function () {
                    return this._getAttribute('rtl') || false;
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ rtl: value });
                    this._setAttribute('rtl', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "textPosition", {
                get: function () {
                    return this._getAttribute('textPosition') || '';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ textPosition: value });
                    this._setAttribute('textPosition', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "textImageRelation", {
                get: function () {
                    return this._getAttribute('textImageRelation') || 'overlay';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ textImageRelation: value });
                    this._setAttribute('textImageRelation', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "theme", {
                get: function () {
                    return this._getAttribute('theme') || '';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ theme: value });
                    this._setAttribute('theme', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "template", {
                get: function () {
                    return this._getAttribute('template') || 'default';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ template: value });
                    this._setAttribute('template', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "toggled", {
                get: function () {
                    var _objCtrl = this.GetButtonControl();
                    var _toggled = _objCtrl.jqxToggleButton('toggled');
                    if (_toggled == null || _toggled == undefined || _toggled == 'undefined') {
                        this._setAttribute('toggled', false);
                        return false;
                    }
                    else {
                        this._setAttribute('toggled', _toggled);
                        return this._getAttribute('toggled') || true;
                    }
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ toggled: value });
                    this._setAttribute('toggled', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "width", {
                get: function () {
                    return this._getAttribute('width') || '100%';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl.jqxToggleButton({ width: value });
                    this._setAttribute('width', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "value", {
                get: function () {
                    if (this.toggled == 'true' || this.toggled == true) {
                        return 'T';
                    }
                    else {
                        return 'F';
                    }
                },
                set: function (value) {
                    this._setAttribute('value', value);
                    if (value == 'T') {
                        this.toggled = true;
                    }
                    else
                        this.toggled = false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Togglebutton.prototype, "text", {
                get: function () {
                    return this._getAttribute('text') || '';
                },
                set: function (value) {
                    var _objCtrl = this.GetButtonControl();
                    _objCtrl[0].value = value;
                    this._setAttribute('text', value);
                },
                enumerable: true,
                configurable: true
            });
            Togglebutton.prototype._getInternalElement = function () {
                return this.hostElement.querySelectorAll("input");
            };
            Togglebutton.prototype._setAttribute = function (attName, attValue) {
                this.hostElement.setAttribute(attName, attValue);
            };
            Togglebutton.prototype._getAttribute = function (attName) {
                return this.hostElement.getAttribute(attName);
            };
            Togglebutton.prototype.GetButtonControl = function () {
                var el = this._getInternalElement();
                return $(el);
            };
            Togglebutton.prototype.focus = function () {
                var _objCtrl = this.GetButtonControl();
                _objCtrl.jqxToggleButton('focus');
            };
            Togglebutton.prototype.check = function () {
                var _objCtrl = this.GetButtonControl();
                _objCtrl.jqxToggleButton('check');
            };
            Togglebutton.prototype.toggle = function () {
                var _objCtrl = this.GetButtonControl();
                _objCtrl.jqxToggleButton('toggle');
            };
            Togglebutton.prototype._Callfn = function (fnName, args) {
                var args = new Array();
                for (var i = 1; i < args.length; i++)
                    args.push(args[i]);
                if (window[fnName] != undefined)
                    window[fnName].apply(this, args);
            };
            Togglebutton.prototype.GetData = function () {
                return this.value;
            };
            Togglebutton.prototype.SetData = function (data) {
                this.value = data;
            };
            return Togglebutton;
        }(jqxBaseControl));
        jqxctrl.Togglebutton = Togglebutton;
        var Tree = (function (_super) {
            __extends(Tree, _super);
            function Tree(selector) {
                _super.call(this, selector);
                if (this.id == null || this.id == '') {
                    alert(this.valueOf().toString() + ' is not [id] value');
                    return;
                }
                this._gwrandomId = esys.System.getCurrentDate(new Date());
                this._render();
            }
            Tree.prototype._render = function () {
                var _internalId = this.id + "_" + this._gwrandomId;
                this.hostElement.innerHTML = " <div id='" + _internalId + "'  > </div>";
                var param = {
                    width: this.width,
                    height: this.height,
                    theme: 'energyblue'
                };
                this._jqxTree = jqwidgets.createInstance(this.ctrlId, 'jqxTree', param);
                this._registerEvent(_internalId, "bindingComplete", this._getEventAttribute("bindingComplete"));
                this._registerEvent(_internalId, "close", this._getEventAttribute("close"));
                this._registerEvent(_internalId, "checkChange", this._getEventAttribute("checkChange"));
                this._registerEvent(_internalId, "change", this._getEventAttribute("change"));
                this._registerEvent(_internalId, "open", this._getEventAttribute("open"));
                this._registerEvent(_internalId, "select", this._getEventAttribute("select"));
                this._registerEvent(_internalId, "unselect", this._getEventAttribute("unselect"));
            };
            Object.defineProperty(Tree.prototype, "ctrlId", {
                get: function () { return "#" + this.id + "_" + this._gwrandomId; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "value", {
                get: function () {
                    var tmp = this.getSelectedItem();
                    if (tmp == null)
                        return '';
                    return tmp.id;
                },
                set: function (val) {
                    this.selectItem(val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "animationShowDuration", {
                get: function () {
                    return this.hostElement.getAttribute('animationShowDuration') || '350';
                },
                set: function (value) {
                    this.hostElement.setAttribute('animationShowDuration', value);
                    $(this.ctrlId).jqxTabs({ animationShowDuration: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "animationHideDuration", {
                get: function () {
                    return this.hostElement.getAttribute('animationHideDuration') || 'fast';
                },
                set: function (value) {
                    this.hostElement.setAttribute('animationHideDuration', value);
                    $(this.ctrlId).jqxTabs({ animationHideDuration: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "allowDrag", {
                get: function () {
                    return this.hostElement.getAttribute('allowDrag') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('allowDrag', value);
                    $(this.ctrlId).jqxTabs({ allowDrag: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "allowDrop", {
                get: function () {
                    return this.hostElement.getAttribute('allowDrop') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('allowDrop', value);
                    $(this.ctrlId).jqxTabs({ allowDrop: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "dragStart", {
                get: function () {
                    return this.hostElement.getAttribute('checkboxes') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('checkboxes', value);
                    $(this.ctrlId).jqxTabs({ checkboxes: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "dragEnd", {
                get: function () {
                    return this.hostElement.getAttribute('dragEnd') || null;
                },
                set: function (value) {
                    this.hostElement.setAttribute('dragEnd', value);
                    $(this.ctrlId).jqxTabs({ dragEnd: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "disabled", {
                get: function () {
                    return this.hostElement.getAttribute('disabled') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('disabled', value);
                    $(this.ctrlId).jqxTabs({ disabled: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "easing", {
                get: function () {
                    return this.hostElement.getAttribute('easing') || 'easeinoutcirc';
                },
                set: function (value) {
                    this.hostElement.setAttribute('easing', value);
                    $(this.ctrlId).jqxTabs({ easing: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "enableHover", {
                get: function () {
                    return this.hostElement.getAttribute('enableHover') || 'true';
                },
                set: function (value) {
                    this.hostElement.setAttribute('enableHover', value);
                    $(this.ctrlId).jqxTabs({ enableHover: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "height", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('height') || '100%';
                    if (tmp.toString().indexOf("%", 0) > -1) {
                        var y = $(this).parent().height();
                        tmp = y;
                    }
                    return tmp;
                },
                set: function (value) {
                    this.hostElement.setAttribute('height', value);
                    $(this.ctrlId).jqxTabs({ height: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "hasThreeStates", {
                get: function () {
                    return this.hostElement.getAttribute('hasThreeStates') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('hasThreeStates', value);
                    $(this.ctrlId).jqxTabs({ hasThreeStates: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "incrementalSearch", {
                get: function () {
                    return this.hostElement.getAttribute('incrementalSearch') || 'true';
                },
                set: function (value) {
                    this.hostElement.setAttribute('incrementalSearch', value);
                    $(this.ctrlId).jqxTabs({ incrementalSearch: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "keyboardNavigation", {
                get: function () {
                    return this.hostElement.getAttribute('keyboardNavigation') || 'true';
                },
                set: function (value) {
                    this.hostElement.setAttribute('keyboardNavigation', value);
                    $(this.ctrlId).jqxTabs({ keyboardNavigation: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "rtl", {
                get: function () {
                    return this.hostElement.getAttribute('rtl') || false;
                },
                set: function (value) {
                    this.hostElement.setAttribute('rtl', value);
                    $(this.ctrlId).jqxTabs({ rtl: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "parentid", {
                get: function () {
                    return this.hostElement.getAttribute('parentid') || 'p_pk';
                },
                set: function (value) {
                    this.hostElement.setAttribute('parentid', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "itemid", {
                get: function () {
                    return this.hostElement.getAttribute('itemid') || 'pk';
                },
                set: function (value) {
                    this.hostElement.setAttribute('itemid', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "itemtext", {
                get: function () {
                    return this.hostElement.getAttribute('itemtext') || 'name';
                },
                set: function (value) {
                    this.hostElement.setAttribute('itemtext', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "source", {
                get: function () {
                    return this.hostElement.getAttribute('source') || null;
                },
                set: function (value) {
                    if (value == null || value == undefined || value == '') {
                        value = [];
                    }
                    this.hostElement.setAttribute('source', value);
                    var source = {};
                    if (value.records)
                        source =
                            {
                                datatype: "json",
                                localdata: value.records
                            };
                    else
                        source =
                            {
                                datatype: "json",
                                localdata: value
                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    dataAdapter.dataBind();
                    var records = dataAdapter.getRecordsHierarchy(this.itemid, this.parentid, 'items', [{ name: this.itemtext, map: 'label' }, { name: this.itemid, map: 'id' }]);
                    $(this.ctrlId).jqxTree({ source: records });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "toggleIndicatorSize", {
                get: function () {
                    return this.hostElement.getAttribute('toggleIndicatorSize') || '16';
                },
                set: function (value) {
                    this.hostElement.setAttribute('toggleIndicatorSize', value);
                    $(this.ctrlId).jqxTabs({ toggleIndicatorSize: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "toggleMode", {
                get: function () {
                    return this.hostElement.getAttribute('toggleMode') || 'dblclick';
                },
                set: function (value) {
                    this.hostElement.setAttribute('toggleMode', value);
                    $(this.ctrlId).jqxTabs({ toggleMode: value });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tree.prototype, "width", {
                get: function () {
                    var tmp = this.hostElement.getAttribute('width') || '100%';
                    if (tmp.toString().indexOf("%", 0) > -1) {
                        var x = $(this).parent().width();
                        tmp = x;
                    }
                    return tmp;
                },
                set: function (value) {
                    this.hostElement.setAttribute('width', value);
                    $(this.ctrlId).jqxTabs({ width: value });
                },
                enumerable: true,
                configurable: true
            });
            Tree.prototype._adjustSize = function () {
                if (this.hostElement.style.width == null || this.hostElement.style.width == '') {
                    var x = $(this).parent().width();
                    this.hostElement.querySelector("div").querySelector("div").style.width = x;
                }
                if (this.hostElement.style.height == null || this.hostElement.style.height == '') {
                    var y = $(this).parent().height();
                    this.hostElement.querySelector("div").querySelector("div").style.height = y + 'px';
                }
            };
            Tree.prototype._getEventAttribute = function (val) {
                if (val == null || val == '' || val == undefined) {
                    return '';
                }
                else
                    return this.hostElement.getAttribute(val);
            };
            Tree.prototype._getElementCtrl = function () {
                return $(this.ctrlId);
            };
            Tree.prototype.addBefore = function (item, id) {
                var el = this._getElementCtrl();
                el.jqxTree('addBefore', item, id);
            };
            Tree.prototype.addAfter = function (item, id) {
                var el = this._getElementCtrl();
                el.jqxTree('addAfter', item, id);
            };
            Tree.prototype.addTo = function (item, id) {
                var el = this._getElementCtrl();
                el.jqxTree('addTo', item, id);
            };
            Tree.prototype.clear = function () {
                var el = this._getElementCtrl();
                el.jqxTree('clear');
            };
            Tree.prototype.checkAll = function () {
                var el = this._getElementCtrl();
                el.jqxTree('checkAll');
            };
            Tree.prototype.checkItem = function (item, checked) {
                var el = this._getElementCtrl();
                el.jqxTree('checkItem', item, checked);
            };
            Tree.prototype.collapseAll = function () {
                var el = this._getElementCtrl();
                el.jqxTree('collapseAll');
            };
            Tree.prototype.collapseItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('collapseItem', item);
            };
            Tree.prototype.disableItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('disableItem', item);
            };
            Tree.prototype.ensureVisible = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('ensureVisible', item);
            };
            Tree.prototype.enableItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('enableItem', item);
            };
            Tree.prototype.expandAll = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('expandAll');
            };
            Tree.prototype.expandItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('expandItem', item);
            };
            Tree.prototype.focus = function () {
                var el = this._getElementCtrl();
                el.jqxTree('focus');
            };
            Tree.prototype.getCheckedItems = function () {
                var el = this._getElementCtrl();
                return el.jqxTree('getCheckedItems');
            };
            Tree.prototype.getUncheckedItems = function () {
                var el = this._getElementCtrl();
                return el.jqxTree('getUncheckedItems');
            };
            Tree.prototype.getItems = function () {
                var el = this._getElementCtrl();
                return el.jqxTree('getItems');
            };
            Tree.prototype.getItem = function (element) {
                var el = this._getElementCtrl();
                return el.jqxTree('getItem', element);
            };
            Tree.prototype.getSelectedItem = function () {
                var el = this._getElementCtrl();
                return el.jqxTree('getSelectedItem');
            };
            Tree.prototype.getPrevItem = function (element) {
                var el = this._getElementCtrl();
                return el.jqxTree('getPrevItem', element);
            };
            Tree.prototype.getNextItem = function (element) {
                var el = this._getElementCtrl();
                return el.jqxTree('getNextItem', element);
            };
            Tree.prototype.hitTest = function (left, top) {
                var el = this._getElementCtrl();
                el.jqxTree('hitTest', left, top);
            };
            Tree.prototype.removeItem = function (element) {
                var el = this._getElementCtrl();
                el.jqxTree('removeItem', element);
            };
            Tree.prototype.refresh = function () {
                var el = this._getElementCtrl();
                el.jqxTree('refresh');
            };
            Tree.prototype.selectItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('selectItem', item);
            };
            Tree.prototype.uncheckAll = function () {
                var el = this._getElementCtrl();
                el.jqxTree('uncheckAll');
            };
            Tree.prototype.uncheckItem = function (item) {
                var el = this._getElementCtrl();
                el.jqxTree('uncheckItem', item);
            };
            Tree.prototype.updateItem = function (item, newitem) {
                var el = this._getElementCtrl();
                el.jqxTree('updateItem', item, newitem);
            };
            Tree.prototype.SetData = function (jsondata) {
                this.source = jsondata;
            };
            return Tree;
        }(jqxBaseControl));
        jqxctrl.Tree = Tree;
    })(jqxctrl = esys.jqxctrl || (esys.jqxctrl = {}));
})(esys || (esys = {}));
//# sourceMappingURL=esys.jqx.input.js.map