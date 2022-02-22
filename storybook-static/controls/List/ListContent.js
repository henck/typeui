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
import styled from '../../styles/Theme';
import { css } from 'styled-components';
var ListContentBase = /** @class */ (function (_super) {
    __extends(ListContentBase, _super);
    function ListContentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListContentBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick }, p.children));
    };
    return ListContentBase;
}(React.Component));
/* Styling for list item. */
var ListContentStyled = styled(ListContentBase)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  /* The first List.Content will always occupy as much space as it can.\n   * Possible subsequent List.Content elements will shrink. \n   */\n  flex-grow: 0;\n  &:first-of-type {\n    flex-grow: 1;\n  }\n\n  /* Vertical alignment */\n  ", "\n  ", "\n\n  /* Clickable items get hand cursor. */\n  ", "\n\n  /* If there is another element before the content, then add some margin. */\n  &:not(:first-child) {\n    margin-left: 8px;\n  }  \n"], ["\n  /* The first List.Content will always occupy as much space as it can.\n   * Possible subsequent List.Content elements will shrink. \n   */\n  flex-grow: 0;\n  &:first-of-type {\n    flex-grow: 1;\n  }\n\n  /* Vertical alignment */\n  ", "\n  ", "\n\n  /* Clickable items get hand cursor. */\n  ", "\n\n  /* If there is another element before the content, then add some margin. */\n  &:not(:first-child) {\n    margin-left: 8px;\n  }  \n"])), function (p) { return p.align == 'center' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["align-self: center;"], ["align-self: center;"]))); }, function (p) { return p.align == 'bottom' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["align-self: flex-end;"], ["align-self: flex-end;"]))); }, function (p) { return p.onClick && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["cursor:pointer;"], ["cursor:pointer;"]))); });
var ListContent = /** @class */ (function (_super) {
    __extends(ListContent, _super);
    function ListContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListContent.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ListContentStyled, __assign({}, p)));
    };
    return ListContent;
}(React.Component));
export { ListContent };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
