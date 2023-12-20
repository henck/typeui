var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styled from '../../styles/Theme';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
// Other controls
import { Column } from './Column';
import { Cell } from './Cell';
import { Row } from './Row';
import { Body } from './Body';
import { Selector } from './Selector';
import { Selection } from './Selection';
var DropdownInnerBase = /** @class */ (function (_super) {
    __extends(DropdownInnerBase, _super);
    function DropdownInnerBase(props) {
        var _this = _super.call(this, props) || this;
        // Handle document-wide mousedown event by closing the Dropdown.
        _this.handleClickOutside = function (event) {
            var elem = event.target;
            if (_this.wrapperElement && !_this.wrapperElement.contains(elem)) {
                _this.close();
            }
        };
        // Close the dropdown.
        _this.close = function () {
            _this.setState({ open: false });
            // When the dropdown is closed, an onClose event may be fired.
            // It is fired 300ms after dropdown closure to give the close
            // animation a chance to run, before any changes are made
            // to the dropdown's contents.
            if (_this.props.onClose) {
                setTimeout(_this.props.onClose, 300);
            }
        };
        // The selector was clicked, open the Dropdown, or close
        // it if it was open.
        _this.handleSelectorClicked = function () {
            // Disabled input cannot be clicked.
            if (_this.props.disabled)
                return;
            if (_this.state.open) {
                _this.close();
            }
            else {
                _this.open();
            }
        };
        //
        // Given a single character, find the first data item that starts with
        // that character. If such an item is found, it is made the current selection.
        // 
        // Data items are compared by converting them to strings. If a data item is
        // an object, all its keys are converted to strings and compared.
        // 
        _this.selectItemByCharacter = function (c) {
            c = c.toLowerCase();
            // Go through all (non-null) data records:
            var idx = _this.props.data.filter(function (r) { return r != null; }).findIndex(function (row) {
                // Build a list of strings contained in the data row:
                var strings = [];
                // If data row is an object, convert all its keys to string.
                if (typeof row === 'object' && row != null) {
                    for (var p in row)
                        strings.push(row[p].toString());
                    // If data row is not an object, just convert its value to a string.
                }
                else {
                    strings.push(row.toString());
                }
                return strings.find(function (s) { return s.length > 0 && s.charAt(0).toLowerCase() == c; });
            });
            // Was a matching row found?
            if (idx != -1) {
                _this.handleClick(_this.props.data[idx]);
            }
        };
        _this.selectPreviousItem = function () {
            var prevIndex = _this.props.data.indexOf(_this.props.value) - 1;
            if (prevIndex < 0)
                prevIndex = 0;
            if (_this.props.data.length <= prevIndex)
                return;
            _this.handleClick(_this.props.data[prevIndex]);
        };
        _this.selectNextItem = function () {
            var nextIndex = _this.props.data.indexOf(_this.props.value) + 1;
            if (_this.props.data.length <= nextIndex)
                return;
            _this.handleClick(_this.props.data[nextIndex]);
        };
        //
        // A key was pressed while the selector had focus.
        // 
        _this.handleKeyDown = function (e) {
            if (document.activeElement != _this.wrapperElement)
                return;
            if (_this.props.disabled)
                return;
            var key = e.key;
            if (key == 'Escape' || key == 'Tab') {
                e.stopPropagation();
                if (!_this.state.open)
                    return;
                _this.close();
            }
            // Is space or enter pressed?
            if (key == ' ' || key == 'Enter') {
                e.stopPropagation();
                if (_this.state.open)
                    return;
                _this.open();
            }
            if (key == 'ArrowUp') {
                e.stopPropagation();
                _this.selectPreviousItem();
            }
            if (key == 'ArrowDown') {
                e.stopPropagation();
                _this.selectNextItem();
            }
            // Is a letter or a digit pressed?
            if (key.length == 1 && key.match(/[a-z0-9]/i)) {
                e.stopPropagation();
                _this.selectItemByCharacter(key);
            }
            // Any other key's propagation is not stopped (most importantly
            // the TAB key to navigate to the next control).
        };
        // An item was clicked. Close Dropdown and call onChange.
        _this.handleClick = function (item) {
            // Is this a multiple-selection dropdown?
            if (_this.props.multiple) {
                var array = _this.props.value;
                if (array == null)
                    array = [];
                // Compare the new item with the existing selection items
                // using deep comparision.
                var newItem_1 = JSON.stringify(item);
                if (array.find(function (x) { return JSON.stringify(x) == newItem_1; })) {
                    // Item already in selection. Just re-set the
                    // existing selection.
                    _this.setValue(array);
                }
                else {
                    // Item not in selection. Add it.
                    array.push(item);
                    _this.setValue(array);
                }
            }
            // Not a multiple-selection dropdown. Simply
            // set the selection to the new item.
            else {
                _this.setValue(item);
            }
        };
        // Remove item from selection.
        _this.handleDelete = function (item) {
            // Find item in value array:
            var array = _this.props.value;
            var toDelete = JSON.stringify(item);
            var index = array.findIndex(function (x) { return JSON.stringify(x) == toDelete; });
            // Remove item from selection:
            array.splice(index, 1);
            // Set new selection:
            _this.setValue(array);
        };
        _this.handleClear = function () {
            if (_this.props.multiple) {
                _this.setValue([]);
            }
            else {
                _this.setValue(null);
            }
        };
        // Search is debounced by 350ms:
        _this.doSearch = function (value) { return _this.props.onSearch(value); };
        _this.doSearchBebounced = AwesomeDebouncePromise(_this.doSearch, 350);
        _this.handleSearch = function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({
                    search: value
                });
                this.doSearchBebounced(value);
                return [2 /*return*/];
            });
        }); };
        _this.state = {
            open: false,
            upwards: false,
            search: null
        };
        return _this;
    }
    // A mousedown event listener is attached to the document. When the document
    // is clicked anywhere but this Dropdown, the Dropdown closes.
    DropdownInnerBase.prototype.componentDidMount = function () {
        // Listen for document-wide mousedown/keydown events when Dropdown mounts.
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    };
    DropdownInnerBase.prototype.componentWillUnmount = function () {
        // Clean up document-wide mousedown/keydown events when Dropdown unmounts.
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    };
    // Open the dropdown.
    DropdownInnerBase.prototype.open = function () {
        // Is the Dropdown below the middle of the viewport?
        var below = this.wrapperElement.getBoundingClientRect().top > window.innerHeight / 2;
        if (this.props.alwaysDown)
            below = false;
        this.setState({ open: true, upwards: below });
        // If reset on open is specified, then the search query is reset whenever the
        // dropdown opens or reopens.
        if (this.props.resetOnOpen)
            this.setState({ search: null });
        // If a search box is present, move focus to it:
        if (this.props.onSearch) {
            var input = this.wrapperElement.querySelector('input');
            input.focus();
            // In IE/Chrome, body content scrolls up a little when setting focus
            // to search input. Scroll it back to top.
            this.wrapperElement.children[1].scrollTop = 0;
        }
    };
    DropdownInnerBase.prototype.setValue = function (item) {
        this.close();
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    };
    // Determine children:
    DropdownInnerBase.prototype.getBodyChildren = function () {
        var _this = this;
        var count = 1;
        return this.props.data.map(function (row) {
            return (React.createElement(Row, { key: count++, upwards: _this.state.upwards, onClick: function () { return _this.handleClick(row); } }, React.Children.map(_this.props.children, function (child) {
                return React.createElement(Cell, { item: row, weight: child.props.weight, align: child.props.align }, child.props.children);
            })));
        });
    };
    DropdownInnerBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        // Determine label:
        // By default, we use the placeholder.
        var label = p.placeholder;
        var showPlaceholder = true;
        // Single-selection dropdowns:
        // If the Dropdown has a value, format it and use as label.
        if (!this.props.multiple) {
            if (p.value !== null) {
                label = p.label(p.value);
                showPlaceholder = false;
            }
        }
        // Multiple-selection dropdowns:
        if (this.props.multiple) {
            // Warn if value is not an array, and not null:
            if (!Array.isArray(p.value) && p.value !== null) {
                console.error("In a multiple-selection checkbox, value should be an array.");
            }
            // Is the value not the empty array, and not null?
            if (p.value != null && p.value.length > 0) {
                showPlaceholder = false;
                // Turn value elements into Selections.
                label = p.value.map(function (item, index) {
                    return React.createElement(Selection, { key: index, onClick: function () { return _this.handleDelete(item); } }, p.label(item));
                });
            }
        }
        var children = this.getBodyChildren();
        return (React.createElement("div", { tabIndex: 0, className: p.className, ref: function (el) { return _this.wrapperElement = el; } },
            React.createElement(Selector, { open: this.state.open, error: this.props.error, disabled: this.props.disabled, upwards: this.state.upwards, inline: p.inline, multiple: p.multiple, onClick: this.handleSelectorClicked, onClear: (p.clearable && !showPlaceholder) ? this.handleClear : null, placeholder: showPlaceholder }, label),
            React.createElement(Body, { open: this.state.open, upwards: this.state.upwards, inline: p.inline, error: p.error, maxItems: p.maxItems, onSearch: p.onSearch ? this.handleSearch : null, search: this.state.search }, children)));
    };
    DropdownInnerBase.Column = Column;
    return DropdownInnerBase;
}(React.Component));
var DropdownInnerStyled = styled(DropdownInnerBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  width: 100%;\n  outline: none;\n\n  /* If something is attached to the Dropdown, remove its border radius. */\n  &:not(:first-child) {\n    ", " {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  &:not(:last-child) {\n    ", " {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }  \n"], ["\n  display: block;\n  position: relative;\n  width: 100%;\n  outline: none;\n\n  /* If something is attached to the Dropdown, remove its border radius. */\n  &:not(:first-child) {\n    ", " {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  &:not(:last-child) {\n    ", " {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }  \n"])), Selector, Selector);
var DropdownInner = /** @class */ (function (_super) {
    __extends(DropdownInner, _super);
    function DropdownInner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(DropdownInnerStyled, __assign({}, _this.props)); };
        return _this;
    }
    return DropdownInner;
}(React.Component));
export { DropdownInner };
var templateObject_1;
