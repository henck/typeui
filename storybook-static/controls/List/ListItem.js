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
// Other controls
import { ImageStyled } from '../Image/Image';
import { List } from './List';
import { IconStyled } from '../Icon/Icon';
var ListItemBase = /** @class */ (function (_super) {
    __extends(ListItemBase, _super);
    function ListItemBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("li", { className: p.className, onClick: p.onClick },
            React.createElement("div", null, // Get non-list children. These live in a <div> 
            // so we can apply flex to them.
            React.Children.map(this.props.children, function (child) {
                if (child == null)
                    return;
                if (child.type && child.type === List)
                    return null;
                return child;
            })),
            // These live outside the <div> so flex is not applied
            // to them.
            React.Children.map(this.props.children, function (child) {
                if (child == null)
                    return;
                if (child.type && child.type === List)
                    return child;
            })));
    };
    return ListItemBase;
}(React.Component));
/* Styling for list item. */
var ListItemStyled = styled(ListItemBase)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  /* <li> must use display:list-item in order for bullets to show. */\n  display: list-item;\n\n  /* Clickable items */\n  ", "\n\n  /* Divided list items have a line between them. */\n  ", "\n  ", "  \n\n  /* A selection list shows a selection box on hover. */\n  ", "\n\n  ", "\n\n  /* An animated list item indents on hover. */\n  ", "\n\n  /* Transitions for selection and animated */\n  transition: padding 0.2s ease, background-color 0.2s ease;\n\n  /* <li> has an inner <div> show we can apply display:flex. The list item's \n   * children live in the <div>. */\n  & > div {\n    display: flex;\n    justify-content: start;\n\n    /* The first child of the ListItem (an icon, an image, etc. usually)\n     * must never shrink. */ \n    & > *:first-child {\n      flex-shrink: 0;\n    }\n\n    /* Relaxed */\n    ", "\n    ", "\n\n    /* Icon and content alignment. Defaults to 'top'. */\n    ", "\n    ", "\n    ", "\n  }\n"], ["\n  /* <li> must use display:list-item in order for bullets to show. */\n  display: list-item;\n\n  /* Clickable items */\n  ", "\n\n  /* Divided list items have a line between them. */\n  ", "\n  ", "  \n\n  /* A selection list shows a selection box on hover. */\n  ", "\n\n  ", "\n\n  /* An animated list item indents on hover. */\n  ", "\n\n  /* Transitions for selection and animated */\n  transition: padding 0.2s ease, background-color 0.2s ease;\n\n  /* <li> has an inner <div> show we can apply display:flex. The list item's \n   * children live in the <div>. */\n  & > div {\n    display: flex;\n    justify-content: start;\n\n    /* The first child of the ListItem (an icon, an image, etc. usually)\n     * must never shrink. */ \n    & > *:first-child {\n      flex-shrink: 0;\n    }\n\n    /* Relaxed */\n    ", "\n    ", "\n\n    /* Icon and content alignment. Defaults to 'top'. */\n    ", "\n    ", "\n    ", "\n  }\n"])), function (p) { return p.onClick && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["cursor:pointer;"], ["cursor:pointer;"]))); }, function (p) { return p.divided && !p.horizontal && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 2px 0;\n    border-bottom: solid 1px #dedede;\n    &:last-child {\n      border-bottom: none;\n    }\n  "], ["\n    padding: 2px 0;\n    border-bottom: solid 1px #dedede;\n    &:last-child {\n      border-bottom: none;\n    }\n  "]))); }, function (p) { return p.divided && p.horizontal && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 0 16px;\n    border-right: solid 1px #dedede;\n    &:first-child {\n      padding-left: 0;\n    }\n    &:last-child {\n      padding-right: 0;\n      border-right: none;\n    }\n  "], ["\n    padding: 0 16px;\n    border-right: solid 1px #dedede;\n    &:first-child {\n      padding-left: 0;\n    }\n    &:last-child {\n      padding-right: 0;\n      border-right: none;\n    }\n  "]))); }, function (p) { return p.selection && !p.active && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding: 4px 4px;\n    background-color: #fff;\n    ", "\n    &:hover {\n      background-color: #f7f7f7;\n    }\n  "], ["\n    padding: 4px 4px;\n    background-color: #fff;\n    ", "\n    &:hover {\n      background-color: #f7f7f7;\n    }\n  "])), !p.divided && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-radius: ", "px;\n    "], ["\n      border-radius: ", "px;\n    "])), p.theme.radius)); }, function (p) { return p.active && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding: 4px 4px;\n    ", "    \n    color: #fff;\n    background-color: ", ";\n  "], ["\n    padding: 4px 4px;\n    ", "    \n    color: #fff;\n    background-color: ", ";\n  "])), !p.divided && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      border-radius: ", "px;\n    "], ["\n      border-radius: ", "px;\n    "])), p.theme.radius), p.theme.primaryColor); }, function (p) { return p.animated && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    padding-right: 20px;\n    &:hover {\n      padding-left: 20px;\n    }\n  "], ["\n    padding-right: 20px;\n    &:hover {\n      padding-left: 20px;\n    }\n  "]))); }, function (p) { return p.relaxed && p.relaxed !== 'very' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["padding:6px;"], ["padding:6px;"]))); }, function (p) { return p.relaxed && p.relaxed === 'very' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["padding:12px;"], ["padding:12px;"]))); }, function (p) { return (!p.align || p.align === 'top') && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      align-items: flex-start;\n      /* Icons and images get a slight top margin, otherwise they're just not quite in line\n       * with the content when align=\"top\". */\n      ", " { margin-top: 4px; }      \n      ", " { margin-top: 4px; }      \n    "], ["\n      align-items: flex-start;\n      /* Icons and images get a slight top margin, otherwise they're just not quite in line\n       * with the content when align=\"top\". */\n      ", " { margin-top: 4px; }      \n      ", " { margin-top: 4px; }      \n    "])), IconStyled, ImageStyled); }, function (p) { return p.align === 'center' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["align-items: center;"], ["align-items: center;"]))); }, function (p) { return p.align === 'bottom' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["align-items: flex-end;"], ["align-items: flex-end;"]))); });
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ListItemStyled, __assign({}, p)));
    };
    return ListItem;
}(React.Component));
export { ListItem };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
