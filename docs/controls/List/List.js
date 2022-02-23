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
import { ListItem } from './ListItem';
import { ListIcon } from './ListIcon';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import { ListDescription } from './ListDescription';
var ListBase = /** @class */ (function (_super) {
    __extends(ListBase, _super);
    function ListBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListBase.prototype.render = function () {
        var p = this.props;
        // Pass 'align', 'horizontal', 'divided', 'selection', 'relaxed', 'animated' properties 
        // to ListItem children.
        var children = React.Children.map(this.props.children, function (child) {
            if (child == null)
                return null;
            return React.cloneElement(child, {
                align: p.align,
                horizontal: p.horizontal,
                divided: p.divided,
                selection: p.selection,
                relaxed: p.relaxed,
                animated: p.animated
            });
        });
        return (React.createElement("ul", { className: p.className }, children));
    };
    return ListBase;
}(React.Component));
/* Styling for list container. */
var ListStyled = styled(ListBase)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  /* Lists are spaced at top and bottom; this affects sublists. */\n  /* margin-top: 4px;\n  margin-bottom: 4px; */\n\n  /* Make sure sublevels indent. */\n  ul {\n    margin-left: 1.5em;\n  }\n\n  /* If bulleted, add bullet disc and margin. */\n  /* If ordered, add order decimal and margin. */\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n\n  /* Lists are spaced at top and bottom; this affects sublists. */\n  /* margin-top: 4px;\n  margin-bottom: 4px; */\n\n  /* Make sure sublevels indent. */\n  ul {\n    margin-left: 1.5em;\n  }\n\n  /* If bulleted, add bullet disc and margin. */\n  /* If ordered, add order decimal and margin. */\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (p) { return !p.horizontal && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n  "], ["\n    display: block;\n  "]))); }, function (p) { return p.horizontal && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n  "], ["\n    display: flex;\n  "]))); }, function (p) { return (p.bulleted || p.ordered) && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    list-style-position: outside;\n    /* Horizontal lists get margin inside the <li> */\n    ", "\n    ", "\n  "], ["\n    list-style-position: outside;\n    /* Horizontal lists get margin inside the <li> */\n    ", "\n    ", "\n  "])), !p.horizontal && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["margin-left: 1em;"], ["margin-left: 1em;"]))), p.horizontal && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      li {\n        margin-left: 1.5em;\n      }\n    "], ["\n      li {\n        margin-left: 1.5em;\n      }\n    "])))); }, function (p) { return p.bulleted && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    list-style-type: disc;\n  "], ["\n    list-style-type: disc;\n  "]))); }, function (p) { return p.ordered && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    list-style-type: decimal;\n  "], ["\n    list-style-type: decimal;\n  "]))); }, function (p) { return (p.bulleted || p.ordered) && p.type && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    list-style-type: ", ";\n  "], ["\n    list-style-type: ", ";\n  "])), p.type); });
//
// Wrapper around ListStyled to turn it into a component again.
// This way, we can add static class members.
// 
/**
 * @link https://henck.github.io/typeui/?path=/story/controls-list--properties
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ListStyled, __assign({}, _this.props)); };
        return _this;
    }
    List.Item = ListItem;
    List.Icon = ListIcon;
    List.Content = ListContent;
    List.Header = ListHeader;
    List.Description = ListDescription;
    return List;
}(React.Component));
export { List };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
