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
import { Icon } from '../Icon/Icon';
import { IconStyled } from '../Icon/Icon';
import { Hint } from '../Form/Hint';
var Label = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  font-weight: 500;\n  font-size: 80%;\n  margin-right: 1em;\n\n  /* Ordinarily, labels are displayed above the field control: */\n  display: block;\n"], ["\n  position: relative;\n  font-weight: 500;\n  font-size: 80%;\n  margin-right: 1em;\n\n  /* Ordinarily, labels are displayed above the field control: */\n  display: block;\n"])));
var Block = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n"], ["\n"])));
var LabelledValueBase = /** @class */ (function (_super) {
    __extends(LabelledValueBase, _super);
    function LabelledValueBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelledValueBase.prototype.render = function () {
        var p = this.props;
        // Does the label have content?
        var hasContent = React.Children.count(p.children) != 0;
        return (React.createElement("div", { className: p.className },
            React.createElement(Label, null, p.label),
            React.createElement(Block, { onClick: p.onClick },
                !hasContent ? '-' : p.children,
                "\u00A0",
                p.onClick && React.createElement(Icon, { name: "link" })),
            p.hint && React.createElement(Hint, null, p.hint)));
    };
    return LabelledValueBase;
}(React.Component));
var LabelledValueStyled = styled(LabelledValueBase)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-bottom: 8px;\n\n  /* If the label is a link, then give it a pointer cursor, and hover color. */\n  ", " {\n    position: relative;\n    ", "\n\n    ", "\n  } \n\n  ", " {\n    position: absolute;\n    right: 6px;\n    top: 2px;\n  }\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"], ["\n  padding-bottom: 8px;\n\n  /* If the label is a link, then give it a pointer cursor, and hover color. */\n  ", " {\n    position: relative;\n    ", "\n\n    ", "\n  } \n\n  ", " {\n    position: absolute;\n    right: 6px;\n    top: 2px;\n  }\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"
    /**
     * Displays a value with a label above it. A LabelledValue is just that: a label and
     * a value. It is used for view-only data. There is a very slight color change when the
     * mouse hovers over the value.
     *
     * @example
     * <LabelledValue label="My label">{value}</LabelledValue>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-labelledvalue--properties
     */
])), Block, function (p) { return !p.nobackground && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: #f0f0f0;\n      padding: 2px 8px;\n      border-radius: ", "px;\n    "], ["\n      background: #f0f0f0;\n      padding: 2px 8px;\n      border-radius: ", "px;\n    "])), p.theme.radius); }, function (p) { return p.onClick && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      cursor: pointer;\n      transition: background-color ", "s ease,\n                  color ", "s ease;\n      &:hover {\n        color: #fff;\n        svg {\n          fill: #fff;\n        }\n        background-color: ", ";\n      }      \n    "], ["\n      cursor: pointer;\n      transition: background-color ", "s ease,\n                  color ", "s ease;\n      &:hover {\n        color: #fff;\n        svg {\n          fill: #fff;\n        }\n        background-color: ", ";\n      }      \n    "])), function (p) { return p.theme.transition.duration * 2; }, function (p) { return p.theme.transition.duration * 2; }, p.theme.primaryColor); }, IconStyled, function (p) { return p.width && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["flex: ", ""], ["flex: ", ""])), p.width); });
/**
 * Displays a value with a label above it. A LabelledValue is just that: a label and
 * a value. It is used for view-only data. There is a very slight color change when the
 * mouse hovers over the value.
 *
 * @example
 * <LabelledValue label="My label">{value}</LabelledValue>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-labelledvalue--properties
 */
var LabelledValue = /** @class */ (function (_super) {
    __extends(LabelledValue, _super);
    function LabelledValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(LabelledValueStyled, __assign({}, _this.props)); };
        return _this;
    }
    return LabelledValue;
}(React.Component));
export { LabelledValue };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
