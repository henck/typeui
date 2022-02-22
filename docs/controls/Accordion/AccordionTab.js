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
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';
var AccordionTabBase = /** @class */ (function (_super) {
    __extends(AccordionTabBase, _super);
    function AccordionTabBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionTabBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(AccordionHeader, { styled: p.styled, align: p.align, active: p.active, onClick: this.props.onClick }, p.title),
            React.createElement(AccordionBody, { styled: p.styled, active: p.active, noanimate: p.noanimate }, p.children)));
    };
    return AccordionTabBase;
}(React.Component));
var AccordionTabStyled = styled(AccordionTabBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (p) { return p.styled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:not(:first-child) {\n      ", " {\n        border-top: solid 1px ", ";\n      }\n    }\n  "], ["\n    &:not(:first-child) {\n      ", " {\n        border-top: solid 1px ", ";\n      }\n    }\n  "])), AccordionHeader, p.theme.normalColor); });
var AccordionTab = /** @class */ (function (_super) {
    __extends(AccordionTab, _super);
    function AccordionTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionTab.prototype.render = function () {
        var p = this.props;
        return (p.hidden ? null : React.createElement(AccordionTabStyled, __assign({}, p)));
    };
    return AccordionTab;
}(React.Component));
export { AccordionTab };
var templateObject_1, templateObject_2;
