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
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Other controls
import { Ripple } from '../Ripple/Ripple';
var HeaderBase = /** @class */ (function (_super) {
    __extends(HeaderBase, _super);
    function HeaderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderBase.prototype.render = function () {
        var p = this.props;
        var svg = React.createElement("svg", null,
            React.createElement("use", { xlinkHref: "spritemap.svg#caret-down" }));
        return (React.createElement(Ripple, { type: 'div', className: p.className, onClick: p.onClick },
            p.align !== 'right' && svg,
            React.createElement("span", null, p.children),
            p.align === 'right' && svg));
    };
    return HeaderBase;
}(React.Component));
var Header = styled(HeaderBase)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n\n  /* Vertical gridlines */\n  ", "\n\n  /* On small screens, only the first Heading is shown. */\n  ", "\n\n  /* All cells are equal width. Todo? */\n  flex: ", ";\n  overflow-x: hidden;\n\n  padding: 16px 32px 16px 6px;\n  \n  &:last-child {\n    padding-right: 36px;\n  \n  }\n  ", "\n\n  /* Header content */\n  span {\n    /* Text alignment */\n    flex: 1;\n    text-align: left;\n    ", "\n\n    font-size: 12px;\n    font-weight: 500;\n\n    /* Text is truncated with an ellipsis. */\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;  \n  }  \n  \n  /* Ordering icon */\n\n  & > svg {\n    width: 0;\n    height: 0;   \n    transition: transform ", "s ease, \n                width ", "s ease, \n                height ", "s ease;\n    fill: ", ";\n    transform: rotate(180deg);\n  }\n  \n  &:hover {\n    ", "\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n\n  /* Vertical gridlines */\n  ", "\n\n  /* On small screens, only the first Heading is shown. */\n  ", "\n\n  /* All cells are equal width. Todo? */\n  flex: ", ";\n  overflow-x: hidden;\n\n  padding: 16px 32px 16px 6px;\n  \n  &:last-child {\n    padding-right: 36px;\n  \n  }\n  ", "\n\n  /* Header content */\n  span {\n    /* Text alignment */\n    flex: 1;\n    text-align: left;\n    ", "\n\n    font-size: 12px;\n    font-weight: 500;\n\n    /* Text is truncated with an ellipsis. */\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;  \n  }  \n  \n  /* Ordering icon */\n\n  & > svg {\n    width: 0;\n    height: 0;   \n    transition: transform ", "s ease, \n                width ", "s ease, \n                height ", "s ease;\n    fill: ", ";\n    transform: rotate(180deg);\n  }\n  \n  &:hover {\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (p) { return p.theme.background; }, function (p) { return p.grid && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:not(:first-child) {\n    border-left: solid 1px ", ";\n  }"], ["\n  &:not(:first-child) {\n    border-left: solid 1px ", ";\n  }"])), function (p) { return p.theme.normalColor; }); }, function (p) { return !p.force && css(templateObject_2 || (templateObject_2 = __makeTemplateObject([" \n    &:not(:first-child) {\n      @media (max-width: ", "px) {\n        display: none;\n      }\n    }    \n  "], [" \n    &:not(:first-child) {\n      @media (max-width: ", "px) {\n        display: none;\n      }\n    }    \n  "])), function (p) { return p.theme.smallScreen; }); }, function (p) { return p.weight ? p.weight : 1; }, function (p) { return p.orderable && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["cursor:pointer;"], ["cursor:pointer;"]))); }, function (p) { return p.align === 'right' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["text-align: right;"], ["text-align: right;"]))); }, function (p) { return p.theme.transition.duration * 2; }, function (p) { return p.theme.transition.duration * 2; }, function (p) { return p.theme.transition.duration * 2; }, function (p) { return p.theme.fontColor; }, function (p) { return p.orderable && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      & > svg {\n        width: 17px;\n        height: 17px;\n      }\n    "], ["\n      & > svg {\n        width: 17px;\n        height: 17px;\n      }\n    "]))); }, function (p) { return p.ordered && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    & > svg {\n      width: 17px;\n      height: 17px;\n    }\n  "], ["\n    & > svg {\n      width: 17px;\n      height: 17px;\n    }\n  "]))); }, function (p) { return ((p.ordered && p.dir === 'desc') || (!p.ordered && p.defaultDir === 'desc')) && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    & > svg {\n      transform: rotate(0deg);\n    }\n  "], ["\n    & > svg {\n      transform: rotate(0deg);\n    }\n  "]))); });
export { Header };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
