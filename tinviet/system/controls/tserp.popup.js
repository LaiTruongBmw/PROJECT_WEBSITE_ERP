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
    var Popup = (function (_super) {
        __extends(Popup, _super);
        function Popup(element, options) {
            var _this = _super.call(this, element, options) || this;
            _this._title = '';
            _this._body = '';
            _this._buttons = '';
            _this._style = '';
            _this._color = '#000';
            _this._opacity = 0.4;
            _this._speed = 0.3;
            _this._modal = false;
            _this._maximized = false;
            _this._keyboard = true;
            _this._width = 500;
            _this._height = 300;
            _this._showClose = true;
            _this._showMax = false;
            _this._transition = null;
            _this._status = 'closed';
            _this.Opened = new tserp.Event();
            _this.Closed = new tserp.Event();
            _this.Maxed = new tserp.Event();
            _this.Mined = new tserp.Event();
            _this.Toggled = new tserp.Event();
            _this.Keydowned = new tserp.Event();
            tserp.addClass(_this.hostElement, 'w2ui-popup');
            _this.hostElement.style.display = 'none';
            var tpl = _this.getTemplate();
            _this.applyTemplate('ts-control ts-content', tpl, {
                _PopupTitle: 'popup-title',
                _PopupBody: 'popup-body',
                _PopupButtons: 'popup-button',
            }, 'div');
            if (options) {
                if (options.onOpen) {
                    _this.Opened.addHandler(options.onOpen);
                }
                if (options.onClose) {
                    _this.Closed.addHandler(options.onClose);
                }
                if (options.onMax) {
                    _this.Maxed.addHandler(options.onMax);
                }
                if (options.onMin) {
                    _this.Mined.addHandler(options.onMin);
                }
                if (options.onToggle) {
                    _this.Toggled.addHandler(options.onToggle);
                }
                if (options.onKeydown) {
                    _this.Keydowned.addHandler(options.onKeydown);
                }
            }
            return _this;
        }
        Object.defineProperty(Popup.prototype, "Title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Body", {
            get: function () {
                return this._body;
            },
            set: function (value) {
                this._body = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Buttons", {
            get: function () {
                return this._buttons;
            },
            set: function (value) {
                this._buttons = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Style", {
            get: function () {
                return this._style;
            },
            set: function (value) {
                this._style = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Opacity", {
            get: function () {
                return this._opacity;
            },
            set: function (value) {
                this._opacity = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Speed", {
            get: function () {
                return this._speed;
            },
            set: function (value) {
                this._speed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Modal", {
            get: function () {
                return this._modal;
            },
            set: function (value) {
                this._modal = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Maximized", {
            get: function () {
                return this._maximized;
            },
            set: function (value) {
                this._maximized = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Keyboard", {
            get: function () {
                return this._keyboard;
            },
            set: function (value) {
                this._keyboard = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "ShowClose", {
            get: function () {
                return this._showClose;
            },
            set: function (value) {
                this._showClose = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "ShowMax", {
            get: function () {
                return this._showMax;
            },
            set: function (value) {
                this._showMax = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Transition", {
            get: function () {
                return this._transition;
            },
            set: function (value) {
                this._transition = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "Status", {
            get: function () {
                return this._status;
            },
            set: function (value) {
                this._status = value;
            },
            enumerable: true,
            configurable: true
        });
        Popup.prototype.onOpened = function (e) {
            this.Opened.raise(this, e);
        };
        Popup.prototype.onClosed = function (e) {
            this.Closed.raise(this, e);
        };
        Popup.prototype.onMaxed = function (e) {
            this.Maxed.raise(this, e);
        };
        Popup.prototype.onMined = function (e) {
            this.Mined.raise(this, e);
        };
        Popup.prototype.onToggled = function (e) {
            this.Toggled.raise(this, e);
        };
        Popup.prototype.onKeydowned = function (e) {
            this.Keydowned.raise(this, e);
        };
        Popup.prototype.Open = function () {
            var self = this;
            if (this.Status === 'closed') {
                this.hostElement.style.display = '';
            }
            else {
                return;
            }
        };
        Popup.controlTemplate = '' +
            '<div ts-part="popup-title" class="w2ui-popup-title" style = "" > </div>' +
            '<div class="w2ui-box" style="">' +
            '    <div ts-part="popup-body" class="w2ui-popup-body">    </div>' +
            '</div>' +
            '<div  ts-part="popup-button" class="w2ui-popup-buttons" style=""></div>' +
            '<input class="w2ui-popup-hidden" style="position: absolute; top: -100px"/>';
        return Popup;
    }(tserp.Control));
    tserp.Popup = Popup;
})(tserp || (tserp = {}));
//# sourceMappingURL=tserp.popup.js.map