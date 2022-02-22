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
import styled from "../../styles/Theme";
var ButtonGroupBase = /** @class */ (function (_super) {
    __extends(ButtonGroupBase, _super);
    function ButtonGroupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroupBase.prototype.render = function () {
        // Build a list of properties to pass along to child buttons.
        var props = {};
        var p = this.props;
        props.grouped = true;
        if (this.props.size)
            props.size = p.size;
        if (this.props.color)
            props.color = p.color;
        if (this.props.compact)
            props.compact = p.compact;
        if (this.props.basic)
            props.basic = p.basic;
        if (this.props.icon)
            props.icon = p.icon;
        // Render all children, cloning them to add group props.
        return (React.createElement("div", { className: this.props.className }, React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, props);
        })));
    };
    return ButtonGroupBase;
}(React.Component));
var ButtonGroupStyled = styled(ButtonGroupBase)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center; \n  ", "\n  /* First button has partial rounding,\n   * depending on group orientation, and \n   * no connecting border. */\n  & div:first-child button {\n    ", "\n    ", "\n  }\n  /* Last button has partial rounding,\n   * depending on group orientation. */\n  & div:last-child button {\n    ", "\n    ", ";   \n  }\n  /* Buttons in the middle have no rounding at all, \n   * and no connecting border. */\n  & div:not(:first-child):not(:last-child) button {\n    border-radius: 0;\n    ", "    \n    ", "\n  }\n"], ["\n  display: inline-flex;\n  align-items: center; \n  ", "\n  /* First button has partial rounding,\n   * depending on group orientation, and \n   * no connecting border. */\n  & div:first-child button {\n    ", "\n    ", "\n  }\n  /* Last button has partial rounding,\n   * depending on group orientation. */\n  & div:last-child button {\n    ", "\n    ", ";   \n  }\n  /* Buttons in the middle have no rounding at all, \n   * and no connecting border. */\n  & div:not(:first-child):not(:last-child) button {\n    border-radius: 0;\n    ", "    \n    ", "\n  }\n"])), function (p) { return p.vertical && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    /* If group is vertical, then apply flex column layout. */\n    flex-direction: column;\n    align-items: stretch;\n  "], ["\n    /* If group is vertical, then apply flex column layout. */\n    flex-direction: column;\n    align-items: stretch;\n  "]))); }, function (p) { return !p.vertical && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-right: none;\n    "], ["\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-right: none;\n    "]))); }, function (p) { return p.vertical && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: none;\n    "], ["\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: none;\n    "]))); }, function (p) { return !p.vertical && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    "], ["\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    "]))); }, function (p) { return p.vertical && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    "], ["\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    "]))); }, function (p) { return !p.vertical && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      border-right: none;\n    "], ["\n      border-right: none;\n    "]))); }, function (p) { return p.vertical && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-bottom: none;\n    "], ["\n      border-bottom: none;\n    "]))); });
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ButtonGroupStyled, __assign({}, p)));
    };
    return ButtonGroup;
}(React.Component));
export { ButtonGroup };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
