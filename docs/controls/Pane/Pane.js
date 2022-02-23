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
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Other controls
import { Icon } from '../Icon/Icon';
import { IconPane } from './IconPane';
var PaneBase = /** @class */ (function (_super) {
    __extends(PaneBase, _super);
    function PaneBase(props) {
        var _this = _super.call(this, props) || this;
        // Handle document-wide mousedown event by sending a pane close event.
        _this.handleClickOutside = function (e) {
            var elem = e.target;
            if (_this.props.open && _this.paneElement && !_this.paneElement.contains(elem) && _this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.handleKeyDown = function (e) {
            if (e.key == 'Escape')
                _this.props.onClose();
        };
        return _this;
    }
    // Listen for document-wide mousedown/keydown events when component mounts.
    PaneBase.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    };
    // Clean up document-wide mousedown/keydown events event when component unmounts.
    PaneBase.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    };
    PaneBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className, ref: function (el) { return _this.paneElement = el; } },
            React.createElement(Iconholder, null,
                React.createElement(Icon, { size: "large", name: "times", onClick: p.onClose })),
            p.children));
    };
    return PaneBase;
}(React.Component));
var Iconholder = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"])));
var PaneStyled = styled(PaneBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 2000;\n  right: -", "px;\n  width: ", "px;\n  top: 0;\n  height: 100%;\n\n  /* Undo parent text alignment */\n  text-align: left;\n\n  /* Add padding if set in props */\n  padding: ", ";\n\n  background: #fff;\n  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);\n  transition: right ", "s ease;\n  ", "\n"], ["\n  position: fixed;\n  z-index: 2000;\n  right: -", "px;\n  width: ", "px;\n  top: 0;\n  height: 100%;\n\n  /* Undo parent text alignment */\n  text-align: left;\n\n  /* Add padding if set in props */\n  padding: ", ";\n\n  background: #fff;\n  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);\n  transition: right ", "s ease;\n  ", "\n"
    /**
     * A Pane slides in from the right side of the viewport when its open property is set
     * to true. An onClose event is triggered when the user clicks outside of the pane or
     * when the user clicks the close (cross) icon.
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-pane--properties
     */
])), function (p) { return p.width ? (p.width + 50) : 450; }, function (p) { return p.width ? p.width : 400; }, function (p) { return p.padded ? '16px' : '0'; }, function (p) { return p.theme.transition.duration * 4; }, function (p) { return p.open && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    right: 0;\n  "], ["\n    right: 0;\n  "]))); });
/**
 * A Pane slides in from the right side of the viewport when its open property is set
 * to true. An onClose event is triggered when the user clicks outside of the pane or
 * when the user clicks the close (cross) icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-pane--properties
 */
var Pane = /** @class */ (function (_super) {
    __extends(Pane, _super);
    function Pane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(PaneStyled, __assign({}, _this.props)); };
        return _this;
    }
    Pane.Icon = IconPane;
    return Pane;
}(React.Component));
export { Pane };
var templateObject_1, templateObject_2, templateObject_3;
