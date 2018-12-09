var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tserp;
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var DateBoxType;
        (function (DateBoxType) {
            DateBoxType[DateBoxType["Date"] = 0] = "Date";
            DateBoxType[DateBoxType["Month"] = 1] = "Month";
            DateBoxType[DateBoxType["Year"] = 2] = "Year";
        })(DateBoxType = input.DateBoxType || (input.DateBoxType = {}));
        var InputDate = (function (_super) {
            __extends(InputDate, _super);
            function InputDate(element, options) {
                var _this = _super.call(this, element) || this;
                if (_this._orgTag == 'INPUT') {
                    var value = _this._tbx.getAttribute('value');
                    if (value) {
                        _this.internalValue = tserp.Globalize.parseDate(value, 'yyyy-MM-dd');
                    }
                }
                _this.initialize(options);
                return _this;
            }
            Object.defineProperty(InputDate.prototype, "valueStr", {
                get: function () {
                    return tserp.Globalize.format(this._value, 'dd-MM-YYYY').replace('-', '').replace('-', '');
                },
                set: function (value) {
                    var s = tserp.utils.Common.AddDateDelimiter(value, "-");
                    var s2 = tserp.Globalize.parseDate(s, 'yyyy-MM-dd');
                    this.internalValue = s2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(InputDate.prototype, "internalValue", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    if (wijmo.DateTime.equals(this._value, value)) {
                        this._tbx.value = tserp.Globalize.format(value, this.format);
                    }
                    else {
                        value = wijmo.asDate(value, !this.isRequired);
                        if (value) {
                            if (this.min) {
                                var min = wijmo.DateTime.fromDateTime(this.min, value);
                                if (value < min) {
                                    value = min;
                                }
                            }
                            if (this.max) {
                                var max = wijmo.DateTime.fromDateTime(this.max, value);
                                if (value > max) {
                                    value = max;
                                }
                            }
                        }
                        this._value = value;
                        this._tbx.value = value ? tserp.Globalize.format(value, this.format) : '';
                        this.onValueChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return InputDate;
        }(wijmo.input.InputDate));
        input.InputDate = InputDate;
        var InputTime = (function (_super) {
            __extends(InputTime, _super);
            function InputTime() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return InputTime;
        }(wijmo.input.InputTime));
        input.InputTime = InputTime;
        var DateBox = (function (_super) {
            __extends(DateBox, _super);
            function DateBox(element, options) {
                var _this = _super.call(this, element) || this;
                _this._valueInternal = new Date();
                _this.maxlength = '10';
                _this.size = '10';
                _this._format = 'd';
                _this._isRequired = true;
                _this._showBtn = true;
                _this._type = DateBoxType.Date;
                _this.valueChanged = new wijmo.Event();
                _this.textChanged = new wijmo.Event();
                _this.isDroppedDownChanged = new wijmo.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-textbox ts-content', tpl, {
                    _tbx: 'input',
                    _btn: 'btn',
                    _btnPrev: 'btn-prev',
                    _btnNext: 'btn-next',
                    _dropDown: 'dropdown'
                }, 'input');
                _this._elRef = _this._tbx;
                _this._maskProvider = new wijmo._MaskProvider(_this._tbx);
                _this._createDropDown();
                _this._updateBtn();
                _this.hostElement.addEventListener('keydown', _this._handleKeyDown.bind(_this));
                _this._tbx.addEventListener('blur', _this._commitText.bind(_this));
                _this._btnNext.addEventListener('click', _this._nextValue.bind(_this));
                _this._btnPrev.addEventListener('click', _this._prevValue.bind(_this));
                var self = _this;
                _this.hostElement.addEventListener('focus', function () {
                    if (!self.isTouching) {
                        self._tbx.focus();
                    }
                });
                _this.hostElement.addEventListener('blur', function () {
                    setTimeout(function () {
                        if (!self.containsFocus()) {
                            self.isDroppedDown = false;
                        }
                    }, 100);
                }, true);
                _this._dropDown.addEventListener('blur', function () {
                    setTimeout(function () {
                        if (!self.containsFocus()) {
                            self.isDroppedDown = false;
                        }
                    }, 100);
                }, true);
                _this._tbx.addEventListener('input', function () {
                    self._setText(self.text, false);
                });
                _this._tbx.addEventListener('keyup', function (e) {
                    var tmp = self._tbx.value + '';
                    if (tmp != '') {
                        if (self.type == DateBoxType.Month) {
                            if (tmp.length == 2) {
                                self._tbx.value = tmp + '/';
                                self._tbx.selectionStart = tmp.length + 1;
                            }
                        }
                        else if (self.type == DateBoxType.Date) {
                            if (tmp.length == 2) {
                                self._tbx.value = tmp + '/';
                                self._tbx.selectionStart = tmp.length + 1;
                            }
                            else if (tmp.length == 5) {
                                self._tbx.value = tmp + '/';
                                self._tbx.selectionStart = tmp.length + 1;
                            }
                        }
                    }
                });
                _this._tbx.addEventListener('focus', function () {
                    setTimeout(function () {
                        if (document.activeElement == self._tbx) {
                            self.selectAll();
                        }
                    }, 0);
                });
                _this._btn.addEventListener('click', function (e) {
                    self.isDroppedDown = !self.isDroppedDown;
                    e.preventDefault();
                    e.stopPropagation();
                    if (self.isTouching && self.showDropDownButton) {
                        self._btn.focus();
                    }
                    else {
                        self._tbx.focus();
                    }
                });
                _this.initialize(options);
                _this._tbx.setAttribute('maxlength', _this.maxlength);
                _this._tbx.setAttribute('size', _this.size);
                if (_this._orgTag == 'INPUT') {
                    if (_this.type == DateBoxType.Date) {
                        var value = _this._tbx.getAttribute('value');
                        if (value) {
                            _this.valueInternal = wijmo.Globalize.parseDate(value, 'yyyy-MM-dd');
                        }
                    }
                }
                if (_this.isRequired == false) {
                    _this.valueInternal = null;
                }
                return _this;
            }
            DateBox.prototype.containsFocus = function () {
                return _super.prototype.containsFocus.call(this) || wijmo.contains(this._dropDown, document.activeElement);
            };
            Object.defineProperty(DateBox.prototype, "isDroppedDown", {
                get: function () {
                    return this._dropDown.style.display != 'none';
                },
                set: function (value) {
                    if (value != this.isDroppedDown) {
                        var dd = this._dropDown;
                        if (value) {
                            if (!dd.style.minWidth) {
                                dd.style.minWidth = this.hostElement.getBoundingClientRect().width + 'px';
                            }
                            dd.style.display = 'block';
                            this._updateDropDown();
                        }
                        else {
                            if (this.containsFocus()) {
                                if (this.isTouching && this.showDropDownButton) {
                                    this._btn.focus();
                                }
                                else {
                                    this._tbx.focus();
                                }
                            }
                            wijmo.hidePopup(dd);
                        }
                        this.onIsDroppedDownChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "showDropDownButton", {
                get: function () {
                    return this._showBtn;
                },
                set: function (value) {
                    this._showBtn = wijmo.asBoolean(value);
                    this._updateBtn();
                },
                enumerable: true,
                configurable: true
            });
            DateBox.prototype.selectAll = function () {
                if (this._elRef == this._tbx) {
                    this._tbx.setSelectionRange(0, this.text.length);
                }
            };
            Object.defineProperty(DateBox.prototype, "type", {
                get: function () {
                    return this._type;
                },
                set: function (value) {
                    this._type = value || DateBoxType.Date;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "value", {
                get: function () {
                    if (this.valueInternal) {
                        if (this.type == DateBoxType.Date) {
                            return moment(this.valueInternal).format('YYYYMMDD');
                        }
                        else if (this.type == DateBoxType.Month) {
                            return moment(this.valueInternal).format('YYYYMM');
                        }
                        else if (this.type == DateBoxType.Year) {
                            return moment(this.valueInternal).format('YYYY');
                        }
                        else {
                            return this.valueInternal.toString();
                        }
                    }
                    else {
                        return "";
                    }
                },
                set: function (value) {
                    if (value == "" && this.isRequired == false) {
                        this.valueInternal = null;
                    }
                    else {
                        if (value === null) { }
                        else {
                            var dt = new Date();
                            if (this.type == DateBoxType.Date) {
                                dt = moment(value, "YYYYMMDD").toDate();
                            }
                            else if (this.type == DateBoxType.Month) {
                                dt = moment(value, "YYYYMM").toDate();
                            }
                            else if (this.type == DateBoxType.Year) {
                                dt = moment(value, "YYYY").toDate();
                            }
                            if (dt != null) {
                                this.valueInternal = dt;
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "valueInternal", {
                get: function () {
                    return this._valueInternal;
                },
                set: function (value) {
                    if (wijmo.DateTime.equals(this._valueInternal, value)) {
                        this._tbx.value = wijmo.Globalize.format(value, this.format);
                    }
                    else {
                        value = wijmo.asDate(value, !this.isRequired);
                        if (value) {
                            if (this.min) {
                                var min = wijmo.DateTime.fromDateTime(this.min, value);
                                if (value < min) {
                                    value = min;
                                }
                            }
                            if (this.max) {
                                var max = wijmo.DateTime.fromDateTime(this.max, value);
                                if (value > max) {
                                    value = max;
                                }
                            }
                        }
                        this._valueInternal = value;
                        this._tbx.value = value ? wijmo.Globalize.format(value, this.format) : '';
                        this.onValueChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "text", {
                get: function () {
                    return this._tbx.value;
                },
                set: function (value) {
                    if (value != this.text) {
                        this._setText(value, true);
                        this._commitText();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "isRequired", {
                get: function () {
                    return this._isRequired;
                },
                set: function (value) {
                    this._isRequired = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "min", {
                get: function () {
                    return this._min;
                },
                set: function (value) {
                    this._min = wijmo.asDate(value, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "max", {
                get: function () {
                    return this._max;
                },
                set: function (value) {
                    this._max = wijmo.asDate(value, true);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "format", {
                get: function () {
                    return this._format;
                },
                set: function (value) {
                    if (this.type == DateBoxType.Date) {
                        if (value != this.format) {
                            this._format = wijmo.asString(value);
                            this._tbx.value = wijmo.Globalize.format(this.valueInternal, this.format);
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "mask", {
                get: function () {
                    return this._maskProvider.mask;
                },
                set: function (value) {
                    this._maskProvider.mask = wijmo.asString(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "calendar", {
                get: function () {
                    return this._calendar;
                },
                enumerable: true,
                configurable: true
            });
            DateBox.prototype.onValueChanged = function (e) {
                this.valueChanged.raise(this, e);
            };
            Object.defineProperty(DateBox.prototype, "inputElement", {
                get: function () {
                    return this._tbx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DateBox.prototype, "dropDown", {
                get: function () {
                    return this._dropDown;
                },
                enumerable: true,
                configurable: true
            });
            DateBox.prototype._setText = function (text, fullMatch) {
                if (text == null)
                    text = '';
                if (text != this._tbx.value) {
                    this._tbx.value = text;
                }
                if (text != this._oldText) {
                    this._oldText = text;
                    this.onTextChanged();
                }
            };
            DateBox.prototype._updateBtn = function () {
                this._btn.tabIndex = -1;
                this._btn.style.display = this._showBtn ? '' : 'none';
            };
            DateBox.prototype.refresh = function () {
                this.isDroppedDown = false;
                if (this._maskProvider) {
                    this._maskProvider.refresh();
                }
                if (this._calendar) {
                    this._calendar.refresh();
                }
                this._tbx.value = wijmo.Globalize.format(this.valueInternal, this.format);
            };
            DateBox.prototype.onTextChanged = function (e) {
                this.textChanged.raise(this, e);
            };
            DateBox.prototype.onIsDroppedDownChanged = function (e) {
                if (this.isDroppedDown) {
                    this._calendar.focus();
                }
                this.isDroppedDownChanged.raise(this, e);
            };
            DateBox.prototype._createDropDown = function () {
                var self = this;
                this._calendar = new wijmo.input.Calendar(this._dropDown);
                this._dropDown.tabIndex = -1;
                this._calendar.valueChanged.addHandler(function () {
                    self.valueInternal = wijmo.DateTime.fromDateTime(self._calendar.value, self.valueInternal);
                });
                var dtDown = self.valueInternal;
                this._dropDown.addEventListener('mousedown', function () {
                    dtDown = self.valueInternal;
                });
                this._dropDown.addEventListener('mouseup', function () {
                    var value = self._calendar.value;
                    if (value && !wijmo.DateTime.sameDate(dtDown, value)) {
                        self.isDroppedDown = false;
                    }
                });
            };
            DateBox.prototype._updateDropDown = function () {
                this._calendar.value = this.valueInternal;
                this._calendar.min = this.min;
                this._calendar.max = this.max;
                var cs = getComputedStyle(this.hostElement);
                this._dropDown.style.minWidth = parseFloat(cs.fontSize) * 18 + 'px';
                if (this.type == DateBoxType.Month) {
                    this._calendar.monthView = false;
                }
                this._calendar.refresh();
                if (this.isDroppedDown) {
                    wijmo.showPopup(this._dropDown, this.hostElement);
                }
            };
            DateBox.prototype._handleKeyDown = function (e) {
                switch (e.keyCode) {
                    case wijmo.Key.F4:
                        this.isDroppedDown = !this.isDroppedDown;
                        e.preventDefault();
                        break;
                    case wijmo.Key.Down:
                        if (!this.isDroppedDown && (e.ctrlKey || e.shiftKey)) {
                            this.isDroppedDown = true;
                            e.preventDefault();
                        }
                        break;
                    case wijmo.Key.Up:
                        if (this.isDroppedDown && (e.ctrlKey || e.shiftKey)) {
                            this.isDroppedDown = false;
                            e.preventDefault();
                        }
                        break;
                    case wijmo.Key.Enter:
                    case wijmo.Key.Escape:
                        if (this.isDroppedDown) {
                            this.isDroppedDown = false;
                            e.preventDefault();
                        }
                        if (e.keyCode == wijmo.Key.Enter) {
                            this._commitText();
                            e.preventDefault();
                        }
                        break;
                }
            };
            DateBox.prototype._prevValue = function () {
                this._ChangeStepValue(-1);
            };
            DateBox.prototype._nextValue = function () {
                this._ChangeStepValue(1);
            };
            DateBox.prototype._ChangeStepValue = function (direc) {
                var tmpVal = this.valueInternal;
                if (tmpVal) {
                    if (this.type == DateBoxType.Date) {
                        tmpVal = tserp.utils.Common.addDays(tmpVal, direc);
                    }
                    else if (this.type == DateBoxType.Month) {
                        tmpVal = tserp.utils.Common.addMonths(tmpVal, direc);
                    }
                    else if (this.type == DateBoxType.Year) {
                        tmpVal = tserp.utils.Common.addYears(tmpVal, direc);
                    }
                    this.valueInternal = tmpVal;
                }
            };
            DateBox.prototype._commitText = function () {
                var txt = this._tbx.value;
                if (!txt && !this.isRequired) {
                    this.valueInternal = null;
                }
                else {
                    var dt = wijmo.Globalize.parseDate(txt, this.format);
                    if (dt) {
                        this.valueInternal = wijmo.DateTime.fromDateTime(dt, this.valueInternal);
                    }
                    else {
                        this._tbx.value = wijmo.Globalize.format(this.valueInternal, this.format);
                    }
                }
            };
            DateBox.prototype._setDate = function (value, time) {
                return new Date(value.getFullYear(), value.getMonth(), value.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
            };
            DateBox.prototype.GetData = function () {
                return this.value;
            };
            DateBox.controlTemplate = '<div style="position:relative" class="ts-template">' +
                '<div class="ts-input">' +
                '<div class="ts-input-group ts-input-btn-visible">' +
                '<span class="ts-input-group-btn" tabindex="-1">' +
                '<button type="button" style="border-left-width: 0px;border-top-width: 0px;border-bottom-width: 0px;" ts-part="btn-prev" class="ts-btn ts-btn-default"><span class="ts-glyph-left"></span></button>' +
                '</span>' +
                '<input ts-part="input" type="text" class="ts-form-control" style="padding:4px 4px;" />' +
                '<span ts-part="btn" class="ts-input-group-btn" tabindex="-1" style="width: 20px;padding: 0px;">' +
                '<button class="ts-btn ts-btn-default" type="button" tabindex="-1" style="width: 20px;padding: 0px;">' +
                '<span class="fa fa-calendar"></span>' +
                '</button>' +
                '</span>' +
                '<span class="ts-input-group-btn" tabindex="-1">' +
                '<button type="button" style="border-right-width: 0px;border-top-width: 0px;border-bottom-width: 0px;" ts-part="btn-next" class="ts-btn ts-btn-default"><span class="ts-glyph-right"></span></button>' +
                '</span>' +
                '</div>' +
                '</div>' +
                '<div ts-part="dropdown" class="ts-content ts-dropdown-panel" ' +
                'style="display:none;position:absolute;z-index:100;width:auto">' +
                '</div>' +
                '</div>';
            return DateBox;
        }(tserp.Control));
        input.DateBox = DateBox;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var Textarea = (function (_super) {
            __extends(Textarea, _super);
            function Textarea(element, options) {
                var _this = _super.call(this, element) || this;
                _this._required = true;
                _this._editable = false;
                _this._composing = false;
                _this._deleting = false;
                _this._settingText = false;
                _this._jsonData = [];
                _this.valueChanged = new wijmo.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-input-group ts-content', tpl, {
                    _tar: 'textarea'
                }, 'textarea');
                var self = _this;
                if (_this._orgTag == 'DIV') {
                    var value = _this._tar.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                }
                _this.initialize(options);
                _this._tar.addEventListener('input', function () {
                    self.onValueChanged();
                });
                _this._tar.focus();
                return _this;
            }
            Object.defineProperty(Textarea.prototype, "TextAreaElement", {
                get: function () {
                    return this._tar;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "value", {
                get: function () {
                    return this._tar.value;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._tar.value = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "rows", {
                get: function () {
                    return this._tar.getAttribute('rows');
                },
                set: function (value) {
                    this._tar.setAttribute('rows', wijmo.asString(value));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "cols", {
                get: function () {
                    return this._tar.getAttribute('cols');
                },
                set: function (value) {
                    this._tar.setAttribute('cols', wijmo.asString(value));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "maxlength", {
                get: function () {
                    return this._tar.getAttribute('maxlength');
                },
                set: function (value) {
                    this._tar.setAttribute('maxlength', wijmo.asString(value));
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "disabled", {
                get: function () {
                    var _rs = false;
                    if (String(this._tar.getAttribute('disabled')).toLowerCase() == 'disabled') {
                        _rs = true;
                    }
                    return _rs;
                },
                set: function (value) {
                    var _rs = '';
                    if (value) {
                        _rs = 'disabled';
                        this._tar.setAttribute('disabled', wijmo.asString(_rs));
                    }
                    else {
                        this._tar.setAttribute('disabled', wijmo.asString(_rs));
                        this._tar.removeAttribute('disabled');
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Textarea.prototype, "readonly", {
                get: function () {
                    var _rs = false;
                    if (String(this._tar.getAttribute('readonly')).toLowerCase() == 'readonly') {
                        _rs = true;
                    }
                    return _rs;
                },
                set: function (value) {
                    var _rs = '';
                    if (value) {
                        _rs = 'readonly';
                        this._tar.setAttribute('readonly', wijmo.asString(_rs));
                    }
                    else {
                        this._tar.setAttribute('readonly', wijmo.asString(_rs));
                        this._tar.removeAttribute('readonly');
                    }
                },
                enumerable: true,
                configurable: true
            });
            Textarea.prototype.Clear = function () {
                this._tar.innerHTML = '';
            };
            Textarea.prototype.GetData = function () {
                return this.value;
            };
            Textarea.prototype.SetData = function (value) {
                this.value = value;
            };
            Textarea.prototype.SetDataText = function (value) {
                this.SetData(value);
            };
            Textarea.prototype.SetEnable = function (bEnable) {
                this.disabled = !bEnable;
            };
            Textarea.prototype.SetReadOnly = function (bReadOnly) {
                this.readonly = !bReadOnly;
            };
            Textarea.prototype.onValueChanged = function (e) {
                this.valueChanged.raise(this, e);
            };
            Textarea.controlTemplate = '<div class="ts-input">' +
                '<div class="ts-input-group">' +
                '<textarea ts-part="textarea" class="ts-form-control"></textarea>' +
                '</div>' +
                '</div>';
            return Textarea;
        }(wijmo.Control));
        input.Textarea = Textarea;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var Label = (function (_super) {
            __extends(Label, _super);
            function Label(element, options) {
                var _this = _super.call(this, element) || this;
                _this._required = true;
                _this._editable = false;
                _this._composing = false;
                _this._deleting = false;
                _this._settingText = false;
                _this._jsonData = [];
                _this._lbx = wijmo.getElement(element);
                if (_this._orgTag == 'LABEL') {
                }
                _this.initialize(options);
                return _this;
            }
            Object.defineProperty(Label.prototype, "inputElement", {
                get: function () {
                    return this._lbx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "value", {
                get: function () {
                    return this._lbx.innerHTML;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._lbx.innerHTML = wijmo.asString(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "style", {
                get: function () {
                    return this._lbx.style;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Label.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (text) {
                    this.value = text;
                },
                enumerable: true,
                configurable: true
            });
            Label.prototype.GetData = function () {
                return this.value;
            };
            Label.prototype.SetData = function (value) {
                this.value = value;
            };
            Label.controlTemplate = '' +
                '';
            return Label;
        }(wijmo.Control));
        input.Label = Label;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var Icon = (function (_super) {
            __extends(Icon, _super);
            function Icon(element, options) {
                var _this = _super.call(this, element) || this;
                _this._editable = false;
                _this._title = '';
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-icon-group ts-content', tpl, {
                    _icospan: 'icon-span',
                    _ico: 'icon'
                }, 'icon');
                var FA = "fa", size = _this._ico.getAttribute("size") ? FA + '-' + _this._ico.getAttribute("size") : "", spin = "" === _this._ico.getAttribute("spin") ? FA + "-spin" : "", name = _this._orgAtts.getNamedItem("name").value, rotate = _this._ico.getAttribute("rotate") ? FA + "-rotate-" + _this._ico.getAttribute("rotate") : "", flip = _this._ico.getAttribute("flip") ? FA + "-flip-" + _this._ico.getAttribute("flip") : "";
                var _css = _this._getCssString({
                    fa: FA,
                    name: name,
                    size: size,
                    spin: spin,
                    rotate: rotate,
                    flip: flip
                });
                _this._icospan.setAttribute('class', _css);
                if (_this._orgTag == 'BUTTON') {
                }
                _this.initialize(options);
                _this.title = _this._ico.getAttribute('title');
                return _this;
            }
            Icon.prototype._getCssString = function (model) {
                var html = '{{fa}} {{fa}}-{{name}} {{size}} {{spin}} {{rotate}} {{flip}}';
                model = model || {};
                for (var key in model) {
                    if (model.hasOwnProperty(key)) {
                        var value = model[key], regexp = new RegExp("{{" + key + "}}", "g");
                        html = html.replace(regexp, value);
                    }
                }
                return html;
            };
            Object.defineProperty(Icon.prototype, "disabled", {
                get: function () {
                    return this._editable;
                },
                set: function (value) {
                    this._editable = wijmo.asBoolean(value);
                    this._ico.disabled = this._editable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Icon.prototype, "title", {
                get: function () {
                    return this._ico.title || '';
                },
                set: function (value) {
                    this._title = value;
                    this._ico.title = this._title;
                },
                enumerable: true,
                configurable: true
            });
            Icon.prototype.SetEnable = function (value) {
                this.disabled = !value;
            };
            Object.defineProperty(Icon.prototype, "style", {
                get: function () {
                    return this.hostElement.style;
                },
                enumerable: true,
                configurable: true
            });
            Icon.controlTemplate = '<div class="ts-input">' +
                '<div class="ts-icon-group gw-icon">' +
                '<button ts-part="icon" type="submit" value="" class=""/>' +
                '<span ts-part="icon-span">' +
                '</span>' +
                '</button>' +
                '</div>' +
                '</div>';
            return Icon;
        }(tserp.Control));
        input.Icon = Icon;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        var TextBox = (function (_super) {
            __extends(TextBox, _super);
            function TextBox(element, options) {
                var _this = _super.call(this, element) || this;
                _this.keyPressedStr = null;
                _this.keyPressed = new tserp.Event();
                _this.valueChangedStr = null;
                _this.valueChanged = new tserp.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-textbox ts-content', tpl, {
                    _tbx: 'input'
                }, 'input');
                if (_this._orgTag == 'INPUT') {
                    _this._copyOriginalAttributes(_this._tbx);
                    var value = _this._tbx.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                }
                _this.initialize(options);
                var self = _this;
                _this.valueChangedStr = _this._tbx.getAttribute('valueChanged');
                if (_this.valueChangedStr) {
                    _this.valueChanged.addHandler(function (sender, e) {
                        var event = e;
                        eval(self.valueChangedStr);
                    });
                }
                _this.keyPressedStr = _this._tbx.getAttribute('keyPressed');
                if (_this.keyPressedStr) {
                    _this.keyPressed.addHandler(function (sender, e) {
                        var event = e;
                        eval(self.keyPressedStr);
                    });
                }
                _this._tbx.addEventListener('focus', function () {
                    self.selectAll();
                });
                _this._tbx.addEventListener('input', function () {
                    self.onValueChanged();
                });
                _this._tbx.addEventListener('keypress', function (event) {
                    self.onKeyPressed(event);
                });
                if (_this.hostElement) {
                    _this.hostElement.removeAttribute('tabIndex');
                    _this._tbx.removeAttribute('tabIndex');
                }
                return _this;
            }
            Object.defineProperty(TextBox.prototype, "inputElement", {
                get: function () {
                    return this._tbx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextBox.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextBox.prototype, "value", {
                get: function () {
                    return this._tbx.value;
                },
                set: function (value) {
                    this._tbx.value = value;
                    this.onValueChanged();
                },
                enumerable: true,
                configurable: true
            });
            TextBox.prototype.GetData = function () {
                return this._tbx.value;
            };
            TextBox.prototype.SetData = function (value) {
                this._tbx.value = value;
            };
            TextBox.prototype.SetDataText = function (value) {
                this.SetData(value);
            };
            TextBox.prototype.GetControl = function () {
                return this;
            };
            TextBox.prototype.focus = function () {
                this._tbx.focus();
            };
            Object.defineProperty(TextBox.prototype, "mask", {
                get: function () {
                    return this._maskProvider.mask;
                },
                set: function (value) {
                    this._maskProvider.mask = tserp.asString(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextBox.prototype, "promptChar", {
                get: function () {
                    return this._maskProvider.promptChar;
                },
                set: function (value) {
                    this._maskProvider.promptChar = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextBox.prototype, "placeholder", {
                get: function () {
                    return this._tbx.placeholder;
                },
                set: function (value) {
                    this._tbx.placeholder = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextBox.prototype, "maskFull", {
                get: function () {
                    return this._maskProvider.maskFull;
                },
                enumerable: true,
                configurable: true
            });
            TextBox.prototype.selectAll = function () {
                this._tbx.select();
            };
            TextBox.prototype.onKeyPressed = function (e) {
                this.keyPressed.raise(this, e);
            };
            TextBox.prototype.onValueChanged = function (e) {
                this.valueChanged.raise(this, e);
            };
            TextBox.prototype.refresh = function (fullUpdate) {
                this._maskProvider.refresh();
            };
            TextBox.controlTemplate = '<div class="ts-input">' +
                '<div class="ts-input-group">' +
                '<input ts-part="input" class="ts-form-control"/>' +
                '</div>' +
                '</div>';
            return TextBox;
        }(tserp.Control));
        input.TextBox = TextBox;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(element, options) {
                var _this = _super.call(this, element) || this;
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-content', tpl, {
                    _btn: 'button',
                    _btnIcon: 'icon',
                    _btnIcon0: 'icon0'
                }, 'button');
                if (_this._orgTag == 'BUTTON') {
                    _this._copyOriginalAttributes(_this._btn);
                    var value = _this._btn.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                    if (_this._btn.innerHTML == null) {
                        _this._btn.innerHTML = value;
                    }
                }
                _this.initialize(options);
                var self = _this;
                _this._btn.addEventListener('focus', function () {
                });
                _this._btn.addEventListener('click', function () {
                });
                if (_this.hostElement) {
                    _this.hostElement.style.verticalAlign = 'top';
                    _this.hostElement.style.border = ' none';
                }
                var _img = _this.hostElement.getAttribute('img');
                var _imgType = _this.hostElement.getAttribute('imgtype');
                if (_img) {
                    if (_imgType === '0') {
                        _this._btnIcon0.style.display = '';
                        _this._btnIcon0.src = tserp.System.ctx + 'system/images/button/' + _img + '.png';
                    }
                    else {
                        _this._btnIcon.style.display = '';
                        tserp.addClass(_this._btnIcon, _img);
                    }
                }
                else {
                    _this._btnIcon0.style.display = 'none';
                    _this._btnIcon.style.display = 'none';
                }
                if (_this.hostElement.getAttribute('value')) {
                    _this._btnIcon.innerHTML = '';
                    _this._btn.innerHTML = _this._btnIcon.outerHTML + _this._btnIcon0.outerHTML + _this.hostElement.getAttribute('value') || '';
                }
                if (_this.hostElement.hasAttributes()) {
                    var atts = _this.hostElement.attributes;
                    for (var i = 0; i < atts.length; i++) {
                        var name = atts[i].name;
                        if (name.toLowerCase().substr(0, 2) === 'on') {
                            _this._btn.setAttribute(name, atts[i].value);
                            _this.hostElement.removeAttribute(name);
                        }
                    }
                }
                return _this;
            }
            Object.defineProperty(Button.prototype, "hidden", {
                get: function () {
                    if (this.hostElement.style.display == 'none') {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                set: function (value) {
                    if (value == true) {
                        this.hide();
                    }
                    else {
                        this.show();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.hide = function () {
                this.hostElement.style.display = 'none';
            };
            Button.prototype.show = function () {
                this.hostElement.style.display = 'inline-block';
            };
            Object.defineProperty(Button.prototype, "disabled", {
                get: function () {
                    return this._btn.disabled;
                },
                set: function (value) {
                    this._btn.disabled = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "ButtonElement", {
                get: function () {
                    return this._btn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "value", {
                get: function () {
                    return this._btn.innerText;
                },
                set: function (value) {
                    if (value != this.value) {
                        this._btn.innerText = tserp.asString(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "title", {
                get: function () {
                    return this._btn.title;
                },
                set: function (value) {
                    this._btn.title = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.GetData = function () {
                return this.value;
            };
            Button.prototype.SetData = function (data) {
                if (tserp.isString(data)) {
                    this.value = data;
                }
                else {
                    this.value = data.text;
                }
            };
            Button.prototype.SetDataText = function (data) {
                this.value = data;
            };
            Button.prototype.SetEnable = function (bEnable) {
                this.isDisabled = !bEnable;
            };
            Button.controlTemplate = '' +
                '<div class="ts-btn-group">' +
                '<button ts-part="button" class="ts-form-control  ts-btn ts-btn-default" tabindex="0"><i style="display:none" ts-part="icon" class="ts-btn-icon"><i><img style="display:none" ts-part="icon0" width="16" class="ts-btn-icon"/></button>' +
                '</div>' +
                '';
            return Button;
        }(tserp.Control));
        input.Button = Button;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        var CheckBox = (function (_super) {
            __extends(CheckBox, _super);
            function CheckBox(element, options) {
                var _this = _super.call(this, element) || this;
                _this.valueChangedStr = null;
                _this.valueChanged = new tserp.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-checkbox ts-content', tpl, {
                    _chk: 'checkbox'
                }, 'input');
                if (_this._orgTag == 'INPUT') {
                    _this._copyOriginalAttributes(_this._chk);
                    var value = _this._chk.getAttribute('value');
                    if (value) {
                        _this.value = value;
                        if (value === 'Y') {
                            _this._chk.checked = true;
                        }
                    }
                    if (_this._chk.innerHTML == null) {
                        _this._chk.innerHTML = value;
                    }
                }
                _this.initialize(options);
                var self = _this;
                _this.valueChangedStr = _this._chk.getAttribute('valueChanged');
                if (_this.valueChangedStr) {
                    _this.valueChanged.addHandler(function (sender, e) {
                        var event = e;
                        eval(self.valueChangedStr);
                    });
                }
                _this._chk.addEventListener('focus', function () {
                });
                _this._chk.addEventListener('click', function () {
                    self.value = self.getValue();
                    self.onValueChanged();
                });
                return _this;
            }
            CheckBox.prototype.getValue = function () {
                return (this.CheckBoxElement.checked ? "Y" : "N");
            };
            Object.defineProperty(CheckBox.prototype, "CheckBoxElement", {
                get: function () {
                    return this._chk;
                },
                enumerable: true,
                configurable: true
            });
            CheckBox.prototype.onValueChanged = function (e) {
                this.valueChanged.raise(this, e);
            };
            Object.defineProperty(CheckBox.prototype, "value", {
                get: function () {
                    if (this._chk.checked == true) {
                        return 'Y';
                    }
                    else {
                        return 'N';
                    }
                },
                set: function (value) {
                    if (value != this.value) {
                        if (value == 'Y') {
                            this._chk.checked = true;
                        }
                        else {
                            this._chk.checked = false;
                        }
                        this.onValueChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CheckBox.prototype, "text", {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                },
                enumerable: true,
                configurable: true
            });
            CheckBox.prototype.GetData = function () {
                return this.value;
            };
            CheckBox.prototype.SetData = function (data) {
                this.value = data;
            };
            CheckBox.prototype.SetDataText = function (data) {
                this.value = data;
            };
            CheckBox.prototype.SetEnable = function (bEnable) {
                this.isDisabled = !bEnable;
            };
            CheckBox.controlTemplate = '<div class="ts-checkbox-group">' +
                '<span class="ts-checkbox">' +
                '<input ts-part="checkbox" class="ts-form-control" type="checkbox"/>' +
                '<i class="fa"></i>' +
                '</span>' +
                '</div>';
            return CheckBox;
        }(tserp.Control));
        input.CheckBox = CheckBox;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var Radio = (function (_super) {
            __extends(Radio, _super);
            function Radio(element, options) {
                var _this = _super.call(this, element) || this;
                _this._required = true;
                _this._editable = false;
                _this._composing = false;
                _this._deleting = false;
                _this._settingText = false;
                _this._jsonData = [];
                if (_this.hostElement.children.length == 0) {
                    throw new Error('VUI LONG DINH NGHIA RADIO DETAIL');
                }
                var _span = _this.hostElement.innerHTML;
                _this.hostElement.innerHTML = '';
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-radio-group ts-content', tpl, {
                    _div: 'content'
                }, 'div');
                _this._div.innerHTML = _span;
                var id = "C" + _this.hostElement.id;
                var cnt = 0;
                var self = _this;
                var list = _this._div.children;
                for (var i = 0; i < list.length; i++) {
                    if (list[i].nodeType == 1) {
                        if (list[i].tagName == "SPAN") {
                            var btn;
                            if (_this.value == list[i].getAttribute('value') || (_this.value == "" && cnt == 0)) {
                                btn = tserp.createElement("<input type='radio' id='" + id + "' value='" + list[i].getAttribute('value') + "' name='" + id + "' checked/>");
                                _this.value = list[i].getAttribute('value');
                            }
                            else {
                                btn = tserp.createElement("<input type='radio' id='" + id + "' value='" + list[i].getAttribute('value') + "' name='" + id + "'  />");
                            }
                            if (list[i].insertAdjacentElement) {
                                btn.addEventListener("click", function (event) {
                                    self.OnUpdate(self, event);
                                });
                                list[i].insertAdjacentElement("beforebegin", btn);
                            }
                            else {
                                list[i].insertAdjacentHTML("beforebegin", btn.outerHTML);
                            }
                            i++;
                            cnt++;
                        }
                    }
                }
                if (_this._orgTag == 'DIV') {
                    var value = _this.hostElement.getAttribute('value');
                    if (value) {
                        _this.value = value;
                    }
                }
                _this.initialize(options);
                return _this;
            }
            Radio.prototype.OnUpdate = function (sender, event) {
                sender.value = event.srcElement.value;
            };
            Radio.prototype.GetData = function () {
                return this.value;
            };
            Radio.prototype.SetData = function (data) {
                if (data)
                    this.value = data;
                else
                    this.value = "";
                this.CheckNodeValue();
            };
            Radio.prototype.CheckNodeValue = function () {
                var list = this._div.querySelectorAll('input[name="C' + this.hostElement.id + '"]');//.querySelectorAll("C" + this.hostElement.id);
                if (this.value == "") {
                    this.value = list[0].value;
                    list[0].checked = true;
                }
                else {
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].value == this.value)
                            list[i].checked = true;
                    }
                }
            };
            Object.defineProperty(Radio.prototype, "value", {
                get: function () {
                    return this.hostElement.getAttribute('value');
                },
                set: function (value) {
                    if (value != this.value) {
                        this.hostElement.setAttribute('value', value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Radio.controlTemplate = '<div class="ts-input">' +
                '<div ts-part="content" class="ts-radio-group">' +
                '</div>' +
                '</div>';
            return Radio;
        }(tserp.Control));
        input.Radio = Radio;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var List = (function (_super) {
            __extends(List, _super);
            function List(element, options) {
                var _this = _super.call(this, element) || this;
                _this._required = true;
                _this._editable = false;
                _this._composing = false;
                _this._deleting = false;
                _this._settingText = false;
                _this._jsonData = [];
                _this.selectedIndexChanged = new tserp.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-list ts-control ts-input-group ts-content', tpl, {
                    _lbx: 'list'
                }, 'list');
                if (_this._orgTag == 'SELECT') {
                    _this._copyOriginalAttributes(_this._lbx);
                }
                _this.initialize(options);
                return _this;
            }
            List.prototype.GetData = function () {
                return this.selectedValue;
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
            Object.defineProperty(List.prototype, "displaymember", {
                get: function () {
                    var tmp = this._lbx.getAttribute('displaymember');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "nm0";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "valuemember", {
                get: function () {
                    var tmp = this._lbx.getAttribute('valuemember');
                    if (tmp == null || tmp == undefined || tmp == "undefined" || tmp == '')
                        return "pk0";
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "emptyvalue", {
                get: function () {
                    var tmp = this._lbx.getAttribute('emptyvalue');
                    if (tmp == null || tmp == undefined || tmp == "undefined")
                        return undefined;
                    else
                        return tmp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "emptytext", {
                get: function () {
                    var tmp = this._lbx.getAttribute('emptytext');
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
                    var tmp = this._lbx.getAttribute('emptytextpoint');
                    if (tmp == null || tmp == undefined || tmp == "undefined")
                        return "first";
                    else {
                        return tmp;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "valueItem", {
                get: function () {
                    var selVal = this.selectedValue;
                    for (var i = 0; i < this._jsonData.length; i++) {
                        if (this._jsonData[i][this.valuemember] == selVal)
                            return this._jsonData[i];
                    }
                    return [];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "itemsSource", {
                get: function () {
                    return this._jsonData;
                },
                set: function (value) {
                    this.setDataJson(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "collectionView", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "displayMemberPath", {
                get: function () {
                    return null;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "isContentHtml", {
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "selectedIndex", {
                get: function () {
                    return this._lbx.selectedIndex;
                },
                set: function (value) {
                    if (value != this.selectedIndex) {
                        this._lbx.selectedIndex = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "selectedValue", {
                get: function () {
                    if (this._lbx.selectedIndex > -1) {
                        return this._lbx.options.item(this._lbx.selectedIndex).getAttribute('value');
                    }
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "value", {
                get: function () {
                    return this._lbx.value || '';
                },
                set: function (value) {
                    this._lbx.value = value;
                },
                enumerable: true,
                configurable: true
            });
            List.prototype.setEnable = function (bEnable) {
                this._lbx.disabled = !bEnable;
            };
            Object.defineProperty(List.prototype, "required", {
                get: function () {
                    return this._required;
                },
                set: function (value) {
                    this._required = tserp.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "isEditable", {
                get: function () {
                    return this._editable;
                },
                set: function (value) {
                    this._editable = tserp.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            List.prototype.onSelectedIndexChanged = function (e) {
                this._updateBtn();
                this.selectedIndexChanged.raise(this, e);
            };
            List.prototype.onIsDroppedDownChanged = function (e) {
            };
            List.prototype._updateBtn = function () {
            };
            List.prototype._createDropDown = function () {
            };
            List.prototype._setText = function (text, fullMatch) {
                if (this._composing)
                    return;
                if (this._settingText)
                    return;
                this._settingText = true;
                var index = this.selectedIndex, cv = this.collectionView, len = -1;
                if (text == null)
                    text = '';
                if (cv) {
                    cv.moveCurrentToPosition(index);
                }
                if (len > -1 && this.containsFocus() && !this.isTouching) {
                }
                this._deleting = false;
                this._settingText = false;
            };
            List.prototype._handleKeyDown = function (e) {
                if (e.keyCode == wijmo.Key.Back || e.keyCode == wijmo.Key.Delete) {
                    this._deleting = true;
                }
                var cv = this.collectionView;
                if (!cv || !cv.items) {
                    return;
                }
                var start = -1;
                switch (e.keyCode) {
                    case wijmo.Key.Up:
                        e.preventDefault();
                        break;
                    case wijmo.Key.Down:
                        e.preventDefault();
                        break;
                    case wijmo.Key.Escape:
                    case wijmo.Key.Enter:
                        break;
                    case wijmo.Key.Tab:
                        break;
                    case wijmo.Key.F4:
                        e.preventDefault();
                        break;
                }
            };
            List.controlTemplate = '<div class="ts-input">' +
                '<div class="ts-input-group">' +
                '<select ts-part="list" class="ts-form-control"></select>' +
                '</div>' +
                '</div>';
            return List;
        }(tserp.Control));
        input.List = List;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        var PopupTrigger;
        (function (PopupTrigger) {
            PopupTrigger[PopupTrigger["None"] = 0] = "None";
            PopupTrigger[PopupTrigger["Click"] = 1] = "Click";
            PopupTrigger[PopupTrigger["Blur"] = 2] = "Blur";
            PopupTrigger[PopupTrigger["ClickOrBlur"] = 3] = "ClickOrBlur";
        })(PopupTrigger = input.PopupTrigger || (input.PopupTrigger = {}));
        var Popup = (function (_super) {
            __extends(Popup, _super);
            function Popup() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Popup;
        }(wijmo.input.Popup));
        input.Popup = Popup;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var UploadInLine = (function (_super) {
            __extends(UploadInLine, _super);
            function UploadInLine(element, options) {
                var _this = _super.call(this, element) || this;
                _this._InternalForm = null;
                _this._value = '';
                _this._filenames = '';
                _this._table_name = 'TC_FSBINARY';
                _this._master_table = 'TC_FSBINARY';
                _this._master_pk = '-1';
                _this._uploadUrl = tserp.System.ctx + '/system/corefile' + tserp.System.UrlExt + "?value=" + _this.value + "&table_name=" + _this.table_name + "&master_pk=" + _this.master_pk;
                _this._fileInputName = 'gsffileToUpload';
                _this._accept = '';
                _this._autoUpload = false;
                _this.uploadCompleteStr = '';
                _this.uploadComplete = new tserp.Event();
                _this.uploadErrorStr = '';
                _this.uploadError = new tserp.Event();
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-upload-inline ts-content', tpl, {
                    _inputFile: 'input',
                    _BtnUpload: 'btn',
                    _panelFile: 'panelfile'
                }, 'input');
                var self = _this;
                _this._IniDefaultVal();
                _this._uploadUrl = tserp.System.ctx + '/system/corefile' + tserp.System.UrlExt + "?value=" + _this.value + "&table_name=" + _this.table_name + "&master_pk=" + _this.master_pk;
                _this._inputFile.addEventListener('change', function (event) {
                });
                _this._BtnUpload.addEventListener('click', function (event) {
                    if (self._inputFile.value == '') {
                        alert('Please select file');
                        self._inputFile.click();
                    }
                    else {
                        self.Upload();
                    }
                });
                return _this;
            }
            Object.defineProperty(UploadInLine.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UploadInLine.prototype, "master_pk", {
                get: function () {
                    return this._master_pk;
                },
                set: function (value) {
                    this._master_pk = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UploadInLine.prototype, "table_name", {
                get: function () {
                    return this._table_name;
                },
                set: function (value) {
                    this._table_name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UploadInLine.prototype, "master_table", {
                get: function () {
                    return this._master_table;
                },
                set: function (value) {
                    this._master_table = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(UploadInLine.prototype, "filenames", {
                get: function () {
                    return this._filenames;
                },
                set: function (value) {
                    this._filenames = value;
                },
                enumerable: true,
                configurable: true
            });
            UploadInLine.prototype._renderForm = function () {
            };
            UploadInLine.prototype._IniDefaultVal = function () {
                this._table_name = this.hostElement.getAttribute('table_name') || this._table_name;
                this._master_pk = this.hostElement.getAttribute('master_pk') || this._master_pk;
                this._master_table = this.hostElement.getAttribute('master_table') || this.master_table;
            };
            UploadInLine.prototype.onUploadComplete = function (e) {
                this.uploadComplete.raise(this, e);
            };
            UploadInLine.prototype.onUploadError = function (e) {
                this.uploadError.raise(this, e);
            };
            UploadInLine.prototype.Upload = function () {
                if (this._InternalForm == null)
                    this._InternalForm = document.createElement('form');
                this._InternalForm.enctype = 'multipart/form-data';
                this._InternalForm.method = 'POST';
                var formData = new FormData(this._InternalForm);
                formData.append(this._fileInputName, this._inputFile.files[0]);
                var boundary = tserp.Ajax.getBoundary();
                var self = this;
                var options = {
                    method: 'POST',
                    contentType: this._InternalForm.enctype + '; boundary=' + boundary,
                    postData: formData,
                    callbackerror: function () {
                        var evt = new tserp.EventArgs();
                        self.onUploadComplete(evt);
                    },
                    callback: function () {
                        var evt = new tserp.EventArgs();
                        self.onUploadError(evt);
                    }
                };
                tserp.Ajax.SendRequest2(this._uploadUrl, options);
            };
            UploadInLine.prototype.initListFile = function () {
                if (this.value != undefined && this.value != '' && this.value != "" && this.value != null) {
                    var lstvl = this.value.split(',');
                    var lstnm = this.filenames.split(',');
                    var html_file = '<div class="plftoggleFile" data-toggle="dropdown" style="position:absolute; padding-top:4px;padding-left:2px"><i style="font-size: 14pt;" class="fa fa-file fileupload-exists"> <span style="padding-right:10px;">' + lstvl.length + '</span></i></div>'
                        + '<ul class="dropdown-menu plftoggleFilelist" style="padding-bottom: 8px;position: absolute;width: 100%;margin-left: -8px;">';
                    for (var i = 0; i < lstvl.length; i++) {
                        html_file += '<li id="liFilePk_' + lstvl[i] + '" style="margin: 5 5 5 4;padding-top: 10;"> <a style="width: 90%;float: left;" href="javascript:void(0)" onclick="onGwDownLoadFile(' + lstvl[i] + ',\'' + '' + '\')">  <i class="fa fa-file fileupload-exists"></i>  <span class="fileupload-preview">' + lstnm[i] + '</span>  </a> <span style="width: 1%;float: left;height: 26px;padding-top: 3px;"> <a href="javascript:void(0);" onclick="onGwDeleteFile(' + lstvl[i] + ',\'' + '' + '\',\'' + '' + '\')">D</a></span></li>';
                    }
                    html_file += '</ul></div>';
                    this._panelFile.innerHTML = html_file;
                }
            };
            UploadInLine.controlTemplate = '<div style="position:relative" class="ts-template">' +
                '<div class="ts-input">' +
                '<div class="ts-input-group ts-input-btn-visible">' +
                '<input ts-part="input" type="file" class="ts-form-control" />' +
                '<span ts-part="btn" class="ts-input-group-btn" tabindex="-1">' +
                '<button class="ts-btn ts-btn-default" type="button" tabindex="-1">' +
                '<span class="ts-glyph-square"></span>' +
                '</button>' +
                '</span>' +
                '</div>' +
                '</div>' +
                '<div ts-part="panelfile" class="ts-content ts-panel" ' +
                'style="display:;position:absolute;border: 1px solid rgba(0, 0, 0, 0.2);border-top: indianred;border-radius: 0px 0px 4px 4px;left: -1;z-index: -1;">' +
                '<ul class="dropdown-menu plftoggleFilelist" style=""> <li>sss</li></ul>' +
                '</div>' +
                '<iframe style="display:none;"></iframe>' +
                '</div>';
            return UploadInLine;
        }(tserp.Control));
        input.UploadInLine = UploadInLine;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        'use strict';
        var ImageBox = (function (_super) {
            __extends(ImageBox, _super);
            function ImageBox(element, options, arg_ctx) {
                var _this = _super.call(this, element) || this;
                _this._oid = '0';
                _this._procedure = '';
                _this._master_pk = '-1';
                _this._table_name = 'TC_FSBINARY';
                _this._src_table_name = 'null';
                _this._closeForFirstFile = 'Y';
                _this.bModify = false;
                _this._noimage = 'data:image/gif;base64,R0lGODlhfQCgAMQAAPDw8PLy8vj4+PT09Pn5+ff39/39/f7+/vHx8fb29u7u7vz8/PX19fv7+/r6+vPz8////+/v7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAB9AKAAAAX/ICSOZGmeaKqubOu+cCzPdG3feK7vfO/zh1PwRywaj8ikUndoCBKDAAIQiQAQgUFC0BguRV5U+EtaCAaIqnrNriIGggV5/jKcqe28HgA30P8mCwUBeoWGEQEFcoB0BoOHkIWJfoxLBA+RmYUPBJVIBgl4mqNsAAmUnj4OmKStbQ8OqT0EhK62awGdsjkCore/AAK7N72/xmrBwzTFx83JyjAEvs3GALrQLA611NQBsdgqBqzc3A+oYkVjLgnk7REJ4CjS7uTW8SXi9O3mQknqKQX0uStwT8SCbQK7LYoXMGE7gvEMIHTYLMA5ZQIouhMGboDGdgPALZj2sdrCYRlL/5LjqMyjSm4hlR1I85Iagn+MGtQk1wDjTm4sZbH72QzeMJdERyloE1PWgYlJXQVQRjPqLQTKSFodBUDZVmNev97KKtZV12FVy2rCOgyq2kNTj74d1VToXE1Gd6W8CyloKp18IfUcNrPs0kw3oSFdczhwXb2BDfmVNXJr40gATsrNc1ntY5SR80zeJTE0rovKGpqOADHewdUBNGNTHbn1vXyR+RUUMY+vvd0jht7NCxwC7re6i4vQ9tab8hK9v/5+ToKZ1WfUS1gnij27dq0lu3uH7lZjrvEqVh3rDAkW+hWgtLLnzPXU+xaX6Je7dp+Fo/LHTNJfDIIAKJUiA9Jgx/8A4GXChwCoJSiDGWiM8kYcEvbQxBNRTFHFFVls0UWGJJZo4i44najiiiwS0QQBBTDQIQCi0IjFAAwUQMCILbZgBgMPNAgJAA8wgGGPJBhAQAIG3hJAAgREmOEBBDCQlkAIMEBAiug18EhNiQzWnwMMCKkRAAx8M54Di201gJrKkclXmsUtEEor8wlkimyECdAkNXmSEoAAXALSAAOrscGAmLL4mWgbg8oCyqOF2JdTm5SyMQCjZNCSKVz8LSHAlZ/mgcBoRhRgZqkf2nYEbaxC4ioRsMYq66u2tjLrDtvlihmqNxBAKp6ZIhAqDg38+VWgTnJqgwGY+kqXlDIIJ63/LcTVsNe1twDrQrLcGhOAsy8cgGi4xjBQaArbotvtDK+5Ky6fK1gr7y3ZZrPqvUPCycK5/Kb7ggMBU+NvCtEW3MpnJxD8C7PhHmwCwO5CTAoDKzSwr8KYkTtCrUpxvMauYCibq8WaBIATASKTc6wIFLcssAkGDCuzKwigxvLN1BxrL8/4mmAy0HCVsADR1JzULtK2BBUz065gPMI4UNvywAgHbFz1HkMAtvUtg+0cCcpA6wIy0WS3AdHTX48idcJspA10TEOLLHcVcdncdiRsmXk30GdpLbPcZ+39iwiGjwVB4rYgzngrjj8+SuSSZ0J55ZBcjrkhmm+uR+eetwF6GOhrjE56FYj/nbgIgn/d2VlIxi777DiEAAA7';
                var tpl = _this.getTemplate();
                _this.applyTemplate('ts-control ts-imagebox ts-content', tpl, {
                    _img: 'img'
                }, 'img');
                var self = _this;
                if (arg_ctx == null) {
                    arg_ctx = '';
                }
                _this._ctx = arg_ctx;
                if (options == null) {
                    options = {};
                }
                options.view = options.view || (_this._ctx + 'system/binary/ViewFile.aspx');
                options.post = options.post || (_this._ctx + 'system/binary/PostFile.aspx');
                options.height = options.height || 160;
                options.width = options.width || 125;
                if (options.closeForFirstFile) {
                    _this.closeForFirstFile = options.closeForFirstFile;
                }
                if (options.view) {
                    console.log(options);
                    _this.view = options.view;
                }
                if (options.post) {
                    _this.post = options.post;
                }
                if (options.height) {
                    _this.height = options.height;
                }
                if (options.width) {
                    _this.width = options.width;
                }
                if (options.src_table_name) {
                    _this.src_table_name = options.src_table_name;
                }
                if (options.table_name) {
                    _this.table_name = options.table_name;
                }
                if (options.master_pk) {
                    _this.master_pk = options.master_pk;
                }
                if (options.procedure) {
                    _this.procedure = options.procedure;
                }
                if (options.value) {
                    _this.oid = options.value;
                }
                _this._img.addEventListener('click', function (e) {
                    self._fnOnClick(self, e);
                }.bind(_this));
                if (_this.oid == "0")
                    _this._img.src = _this.noimage;
                return _this;
            }
            ImageBox.prototype._fnOnClick = function (obj, event) {
                var _obj = obj.hostElement;
                if (event.srcElement.tagName == "IMG" && (_obj.getAttribute('readonly') != "true" && _obj.getAttribute('readonly') != 'readonly' && _obj.getAttribute('disabled') != "true" && _obj.getAttribute('disabled') != 'disabled')) {
                    obj.ChangeImage();
                }
            };
            Object.defineProperty(ImageBox.prototype, "oid", {
                get: function () {
                    return this._oid;
                },
                set: function (val) {
                    this._oid = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "procedure", {
                get: function () {
                    return this._procedure;
                },
                set: function (val) {
                    this._procedure = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "master_pk", {
                get: function () {
                    return this._master_pk;
                },
                set: function (val) {
                    this._master_pk = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "table_name", {
                get: function () {
                    return this._table_name;
                },
                set: function (val) {
                    this._table_name = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "src_table_name", {
                get: function () {
                    return this._src_table_name;
                },
                set: function (val) {
                    this._src_table_name = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "noimage", {
                get: function () {
                    return this._noimage;
                },
                set: function (val) {
                    this._noimage = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "width", {
                get: function () {
                    return this._img.width;
                },
                set: function (val) {
                    this._img.width = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "height", {
                get: function () {
                    return this._img.height;
                },
                set: function (val) {
                    this._img.height = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "closeForFirstFile", {
                get: function () {
                    return this._closeForFirstFile;
                },
                set: function (val) {
                    this._closeForFirstFile = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "view", {
                get: function () {
                    return this._view;
                },
                set: function (val) {
                    this._view = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "post", {
                get: function () {
                    return this._post;
                },
                set: function (val) {
                    this._post = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ImageBox.prototype, "value", {
                get: function () {
                    return this.GetData();
                },
                set: function (val) {
                    this.SetData(val);
                },
                enumerable: true,
                configurable: true
            });
            ImageBox.prototype.setMasterPK = function (txt) { this.master_pk = txt; };
            ImageBox.prototype.getMasterPK = function () { return this.master_pk; };
            ImageBox.prototype.GetData = function () { return this.oid; };
            ImageBox.prototype.SetData = function (value) {
                this.bModify = false;
                if (value) {
                    this.SetDataText(value);
                }
                else {
                    this.SetDataText("");
                }
            };
            ImageBox.prototype.SetDataText = function (txt) {
                var d = new Date();
                if (txt.length == 0)
                    txt = "0";
                if (txt != "0")
                    this._img.src = this.view + "?img_pk=" + txt + "&table_name=" + this.table_name + "&random=" + d;
                else
                    this._img.src = this.noimage;
                this.oid = txt;
            };
            ImageBox.prototype.SetEnable = function (bEnable) {
                this._img.setAttribute('readonly', bEnable ? "false" : "true");
            };
            ImageBox.prototype.GetStatus = function () {
                return this._img.getAttribute('readonly');
            };
            ImageBox.prototype.ChangeImage = function () {
                this.bModify = true;
                this.UploadFile();
            };
            ImageBox.prototype.OnSelectFileCallBack = function () {
                var rst = tserp.System.getDataParam();
                if (rst != undefined) {
                    this.value = rst.file_pk;
                }
            };
            ImageBox.prototype.UploadFile = function () {
                if (this.bModify) {
                    var url = this.post + "?img_pk=" + this.oid + "&table_name=" + this.table_name + "&master_pk=" + this.master_pk + "&procedure=" + this.procedure + "&objctrl=" + this.id + "&closeForFirstFile=" + this.closeForFirstFile;
                    tserp.System.OpenModal(url, 415, 300, "Upload File", this, this.OnSelectFileCallBack.bind(this), {});
                }
            };
            ImageBox.controlTemplate = '<div style="position:relative" class="ts-control">' +
                '<img ts-part="img" />' +
                '</div>';
            return ImageBox;
        }(tserp.Control));
        input.ImageBox = ImageBox;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
(function (tserp) {
    var input;
    (function (input) {
        var TimeBox = (function (_super) {
            __extends(TimeBox, _super);
            function TimeBox(element, options) {
                return _super.call(this, element, options) || this;
            }
            TimeBox.prototype.GetData = function () {
                if (this._value == null) {
                    return "";
                }
                return wijmo.Globalize.format(this._value, this.format);
            };
            return TimeBox;
        }(wijmo.input.InputTime));
        input.TimeBox = TimeBox;
    })(input = tserp.input || (tserp.input = {}));
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.input.js.map