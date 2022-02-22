var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import * as React from 'react';
import styled from '../../styles/Theme';
import { keyframes, css } from 'styled-components';
// HeaderInner is used to get rid of the scrollbar in
// the Head. It is replaced with whitespace.
// https://stackoverflow.com/a/49278385/1266190
var HeadInner = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-right: -999px;\n  padding-right: 999px;\n  overflow-y: scroll;\n"], ["\n  display: flex;\n  margin-right: -999px;\n  padding-right: 999px;\n  overflow-y: scroll;\n"])));
var HeadBase = /** @class */ (function (_super) {
    __extends(HeadBase, _super);
    function HeadBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeadBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(HeadInner, null, p.children)));
    };
    HeadBase.displayName = "DataTable.Column";
    return HeadBase;
}(React.Component));
var moveLoader = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0%   { max-width: 0; }\n  50%  { max-width: 100%; }\n  100% { max-width: 0; }\n"], ["\n  0%   { max-width: 0; }\n  50%  { max-width: 100%; }\n  100% { max-width: 0; }\n"])));
var Head = styled(HeadBase)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 100%;\n  border-bottom: solid 1px ", ";\n\n  /* Prevent user text selection. */\n  user-select: none;\n\n  /* Show a loading animation when table data is loading. */\n  ", "\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 100%;\n  border-bottom: solid 1px ", ";\n\n  /* Prevent user text selection. */\n  user-select: none;\n\n  /* Show a loading animation when table data is loading. */\n  ", "\n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.loading && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &:after {\n      position: absolute;\n      z-index: 1;\n      content: '';\n      left: 0;\n      bottom: -1px;\n      width: 100%;\n      max-width: 0;\n      height: 2px;\n      background: ", ";\n      animation: ", " 5s linear;\n    }\n  "], ["\n    &:after {\n      position: absolute;\n      z-index: 1;\n      content: '';\n      left: 0;\n      bottom: -1px;\n      width: 100%;\n      max-width: 0;\n      height: 2px;\n      background: ", ";\n      animation: ", " 5s linear;\n    }\n  "])), function (p) { return p.theme.primaryColor; }, moveLoader); });
export { Head };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
