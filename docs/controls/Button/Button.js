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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { darken } from '../../helper/darken';
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';
// Other controls
import { ButtonOr } from './ButtonOr';
import { ButtonGroup } from './ButtonGroup';
import { Label } from '../Label/Label';
import { Ripple } from '../Ripple/Ripple';
import { IconStyled } from '../Icon/Icon';
//
// The InnerBase is the actual <button> element (created by a Ripple).
//
var ButtonInnerBase = /** @class */ (function (_super) {
    __extends(ButtonInnerBase, _super);
    function ButtonInnerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonInnerBase.prototype.render = function () {
        var p = this.props;
        return (p.noripple ?
            React.createElement("button", { className: p.className, disabled: p.disabled }, p.children)
            : React.createElement(Ripple, { type: "button", className: p.className, disabled: p.disabled }, p.children));
    };
    return ButtonInnerBase;
}(React.Component));
var ButtonInnerStyled = styled(ButtonInnerBase).attrs(function (p) { return ({
    fontSize: scaleSize(p.size, 1, p.theme.scale.button),
    /* Does the button have any color? */
    hasColor: p.primary || p.secondary || p.positive || p.negative || p.color,
    /* What is the button's color? */
    finalColor: function (p) {
        if (p.primary)
            return p.theme.primaryColor;
        if (p.secondary)
            return p.theme.secondaryColor;
        if (p.positive)
            return p.theme.positiveColor;
        if (p.negative)
            return p.theme.negativeColor;
        if (p.color)
            return p.color;
        return p.theme.normalColor;
    }
}); })(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  /* Display */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  /* Font */\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  font-size: 1em;\n  white-space: nowrap;\n\n  /* Padding */\n  padding: 0.6875em 1.2em;\n  /* A compact button has reduced padding. */\n  ", "\n  /* A circular/icon button has square padding. */\n  ", " /* circular implies icon */\n\n  /* Border */\n  border: none;\n  border-radius: ", "px;\n\n  /* Circular */\n  ", "\n\n  /* Transitions */\n  transition: opacity ", "s ease, \n              color ", "s ease, \n              border-color ", "s ease, \n              background-color ", "s ease, \n              box-shadow ", "s ease;\n  outline: none;\n\n  /* Cursor */\n  ", "\n  ", "\n\n  /* Size */\n  font-size: ", "em;\n\n  /* Colors, not basic: */\n  ", "\n\n  /* Colors, basic: */\n  ", "\n\n  /* Icon */\n  ", " {\n    /* Icons on basic, uncolored buttons are dark. */\n    ", "\n    /* Icons on basic, colored buttons have the button border color. */\n    ", "\n    /* Icons on uncolored normal buttons are dark. */\n    ", "\n    /* Icons on colored normal buttons have a lighter shade of the\n       background color. */    \n    ", "\n    opacity: 0.8;\n    /* Icon gets margin only for non-icon buttons: */\n    ", "\n  }\n\n  /* All hover effects go here. \n   * (but no hover for disabled buttons) */\n  ", "\n\n  /* Attachment:\n     If something is attached to the button, then remove its border radius. */\n  &:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  &:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }  \n"], ["\n  /* Display */\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  /* Font */\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n  font-size: 1em;\n  white-space: nowrap;\n\n  /* Padding */\n  padding: 0.6875em 1.2em;\n  /* A compact button has reduced padding. */\n  ", "\n  /* A circular/icon button has square padding. */\n  ", " /* circular implies icon */\n\n  /* Border */\n  border: none;\n  border-radius: ", "px;\n\n  /* Circular */\n  ", "\n\n  /* Transitions */\n  transition: opacity ", "s ease, \n              color ", "s ease, \n              border-color ", "s ease, \n              background-color ", "s ease, \n              box-shadow ", "s ease;\n  outline: none;\n\n  /* Cursor */\n  ", "\n  ", "\n\n  /* Size */\n  font-size: ", "em;\n\n  /* Colors, not basic: */\n  ", "\n\n  /* Colors, basic: */\n  ", "\n\n  /* Icon */\n  ", " {\n    /* Icons on basic, uncolored buttons are dark. */\n    ", "\n    /* Icons on basic, colored buttons have the button border color. */\n    ", "\n    /* Icons on uncolored normal buttons are dark. */\n    ", "\n    /* Icons on colored normal buttons have a lighter shade of the\n       background color. */    \n    ", "\n    opacity: 0.8;\n    /* Icon gets margin only for non-icon buttons: */\n    ", "\n  }\n\n  /* All hover effects go here. \n   * (but no hover for disabled buttons) */\n  ", "\n\n  /* Attachment:\n     If something is attached to the button, then remove its border radius. */\n  &:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  &:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }  \n"
    // ---------------------
    /*
     * ButtonBase puts a <div> around ButtonInner so that we
     * can add attachable components.
     */
])), function (p) { return p.compact && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["padding: 0.4em 1.0em;"], ["padding: 0.4em 1.0em;"]))); }, function (p) { return (p.icon || p.circular) && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding: 0.6875em;"], ["padding: 0.6875em;"]))); }, function (p) { return p.theme.radius; }, function (p) { return p.circular && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["border-radius: 50%;"], ["border-radius: 50%;"]))); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.disabled && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["cursor: auto;"], ["cursor: auto;"]))); }, function (p) { return !p.disabled && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["cursor: pointer;"], ["cursor: pointer;"]))); }, function (p) { return p.fontSize; }, function (p) { return !p.basic && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    background-color: ", "\n    ", "\n    ", "\n  "], ["\n    background-color: ", "\n    ", "\n    ", "\n  "])), p.finalColor, !p.hasColor && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["color: ", ";"], ["color: ", ";"])), lighten(0.2, p.theme.fontColor)), p.hasColor && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["color: ", "; font-weight: 500;"], ["color: ", "; font-weight: 500;"])), p.theme.altTextColor)); }, function (p) { return p.basic && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    border-style: solid;\n    border-width: 1px;\n    background-color: ", ";\n    /* Since border occupies 1px, adjust to padding to shrink: */\n    padding: calc(-1px + 0.6875em) calc(-1px + 1.2em);\n    ", "\n    ", "\n  "], ["\n    border-style: solid;\n    border-width: 1px;\n    background-color: ", ";\n    /* Since border occupies 1px, adjust to padding to shrink: */\n    padding: calc(-1px + 0.6875em) calc(-1px + 1.2em);\n    ", "\n    ", "\n  "])), p.theme.background, p.hasColor && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n      border-color: ", ";\n    "], ["\n      color: ", ";\n      border-color: ", ";\n    "])), lighten(0.2, p.finalColor(p)), lighten(0.2, p.finalColor(p))), !p.hasColor && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      color: ", "; \n      border-color: ", ";\n    "], ["\n      color: ", "; \n      border-color: ", ";\n    "])), lighten(0.5, p.theme.fontColor), lighten(0.8, p.theme.fontColor))); }, IconStyled, function (p) { return p.basic && p.finalColor(p) === p.theme.normalColor && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      fill: ", ";\n    "], ["\n      fill: ", ";\n    "])), darken(0.5, p.finalColor(p))); }, function (p) { return p.basic && p.finalColor(p) !== p.theme.normalColor && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      fill: ", ";\n    "], ["\n      fill: ", ";\n    "])), p.finalColor); }, function (p) { return !p.basic && p.finalColor(p) === p.theme.normalColor && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      fill: ", ";\n    "], ["\n      fill: ", ";\n    "])), darken(0.5, p.finalColor(p))); }, function (p) { return !p.basic && p.finalColor(p) !== p.theme.normalColor && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      fill: ", ";\n    "], ["\n      fill: ", ";\n    "])), lighten(0.4, p.finalColor(p))); }, function (p) { return !p.icon && !p.circular && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["margin-right:4px;"], ["margin-right:4px;"]))); }, function (p) { return !p.disabled && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    &:hover {\n      ", "\n      ", "\n      ", " {\n        opacity: 1.0;\n      }\n    }\n  "], ["\n    &:hover {\n      ", "\n      ", "\n      ", " {\n        opacity: 1.0;\n      }\n    }\n  "])), !p.basic && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ", ";\n      "])), darken(p.theme.darken, p.finalColor(p))), p.basic && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n        ", "\n        ", "      \n      "], ["\n        ", "\n        ", "      \n      "])), p.hasColor && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n          color: ", "; border-color: ", ";\n        "], ["\n          color: ", "; border-color: ", ";\n        "])), p.finalColor(p), p.finalColor(p)), !p.hasColor && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n          color: ", "; border-color: ", ";\n        "], ["\n          color: ", "; border-color: ", ";\n        "])), lighten(0.2, p.theme.fontColor), lighten(0.6, p.theme.fontColor))), IconStyled); });
// ---------------------
/*
 * ButtonBase puts a <div> around ButtonInner so that we
 * can add attachable components.
 */
var ButtonBase = /** @class */ (function (_super) {
    __extends(ButtonBase, _super);
    function ButtonBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getAttachables = function (side) {
            if (side === void 0) { side = "left"; }
            return React.Children.map(_this.props.children, function (child) {
                if (child && child.type && child.type === Label) {
                    // Does label have 'attached' attribute, and it is equal to the side argument?
                    if (child.props.attached && child.props.attached === side)
                        return child;
                    // No attached attribute, but side is left? Then add attached attribute.
                    if (!child.props.attached && side === 'left') {
                        return React.cloneElement(child, { attached: 'left' });
                    }
                }
            });
        };
        _this.getNonAttachables = function () {
            return React.Children.map(_this.props.children, function (child) {
                if (!child)
                    return;
                // Only non-labels are passed to ButtonInner.
                if (!child.type)
                    return child;
                if (child.type !== Label)
                    return child;
            });
        };
        return _this;
    }
    ButtonBase.prototype.render = function () {
        // We must pass all props down to ButtonInnerStyled,
        // EXCEPT className, or the parent's classes will 
        // be added to the child.
        var _a = this.props, className = _a.className, otherProps = __rest(_a, ["className"]);
        return (React.createElement("div", { className: className, onClick: otherProps.onClick },
            this.getAttachables('left'),
            React.createElement(ButtonInnerStyled, __assign({}, otherProps), this.getNonAttachables()),
            this.getAttachables('right')));
    };
    return ButtonBase;
}(React.Component));
var ButtonStyled = styled(ButtonBase)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  /* Floating */\n  ", "\n  ", "    \n  /* Fluid */\n  ", "  \n  /* Buttons in groups have no margin. */\n  ", "\n  /* A disabled button is 50% transparent. */\n  ", "\n  /* Clickable */\n  ", "\n"], ["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  /* Floating */\n  ", "\n  ", "    \n  /* Fluid */\n  ", "  \n  /* Buttons in groups have no margin. */\n  ", "\n  /* A disabled button is 50% transparent. */\n  ", "\n  /* Clickable */\n  ", "\n"])), function (p) { return p.float === 'left' && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["float:left;"], ["float:left;"]))); }, function (p) { return p.float === 'right' && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["float:right;"], ["float:right;"]))); }, function (p) { return p.fluid && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["width: 100%;"], ["width: 100%;"]))); }, function (p) { return !p.grouped && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["margin: 0 2px;"], ["margin: 0 2px;"]))); }, function (p) { return p.disabled && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["opacity: 0.5;"], ["opacity: 0.5;"]))); }, function (p) { return p.onClick && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["cursor: pointer;"], ["cursor: pointer;"]))); });
/**
 * A Button can be clicked and styled.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-button--properties
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ButtonStyled, __assign({}, p, { disabled: p.disabled })));
    };
    Button.displayName = "Button";
    /**
     * Button groups can contain conditionals using Button.Or.
     *
     * @example
     * <Button.Group>
     *   <Button>One</Button>
     *   <Button.Or/>
     *   <Button positive>Two</Button>
     * </Button.Group>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--group-attributes
     */
    Button.Or = ButtonOr;
    /**
     * Buttons can be grouped horizontally or vertically using Button.Group.
     *
     * @example
     * <Button.Group vertical>
     *  <Button>One</Button>
     *  <Button>Two</Button>
     *  <Button>Three</Button>
     * </Button.Group>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-button-groups--conditional
     */
    Button.Group = ButtonGroup;
    return Button;
}(React.Component));
// This breaks Storybook:
//(Button.Group as any).displayName = "Button.Group";
//(Button.Or as any).displayName = "Button.Or";
export { Button };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29;
