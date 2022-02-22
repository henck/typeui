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
// Helpers
import { lighten } from '../../helper/lighten';
// Other controls
import { MessageHeader } from './MessageHeader';
import { MessageContent } from './MessageContent';
import { IconStyled } from '../Icon/Icon';
import { darken } from '../../helper/darken';
var MessageBase = /** @class */ (function (_super) {
    __extends(MessageBase, _super);
    function MessageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return MessageBase;
}(React.Component));
var MessageStyled = styled(MessageBase).attrs(function (p) { return ({
    colorSet: (p.type === 'info' ? p.theme.infoColor :
        (p.type === 'warning' ? p.theme.warningColor :
            (p.type === 'success' ? p.theme.successColor :
                (p.type === 'error' ? p.theme.errorColor :
                    (p.color ? { color: p.color, border: p.color, background: lighten(0.45, p.color) } :
                        { color: p.theme.fontColor, border: darken(0.2, p.theme.normalColor), background: p.theme.normalColor })))))
}); })(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  padding: 14px 21px;\n  \n  /* Margin:\n     Attached message have only margin when 'top' or 'bottom' attached. */\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  /* Attachment and border: */\n  border-style: solid;\n  border-left-width: 1px;\n  border-right-width: 1px;\n  /* Not attached: normal border. */\n  ", "\n  /* Middle attached: Only bottom border. */\n  ", "      \n  /* Top attached: Top and bottom border. */\n  ", "\n  /* Botom attached: Only bottom border. */\n  ", "\n\n  /* A hidden message isn't shown. */\n  ", "\n\n  /* Not hidden: */\n  ", "\n\n  /* Colors */\n  border-color: ", ";\n  color: ", ";\n  background: ", ";\n  /* Attached messages can't be raised: */\n  ", "\n\n  /* Unattached, raised messages have more bottom padding to show the dropshadow. */\n  ", "\n\n  /* Text alignment. */\n  ", "\n  ", "\n  ", "\n"], ["\n  padding: 14px 21px;\n  \n  /* Margin:\n     Attached message have only margin when 'top' or 'bottom' attached. */\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  /* Attachment and border: */\n  border-style: solid;\n  border-left-width: 1px;\n  border-right-width: 1px;\n  /* Not attached: normal border. */\n  ", "\n  /* Middle attached: Only bottom border. */\n  ", "      \n  /* Top attached: Top and bottom border. */\n  ", "\n  /* Botom attached: Only bottom border. */\n  ", "\n\n  /* A hidden message isn't shown. */\n  ", "\n\n  /* Not hidden: */\n  ", "\n\n  /* Colors */\n  border-color: ", ";\n  color: ", ";\n  background: ", ";\n  /* Attached messages can't be raised: */\n  ", "\n\n  /* Unattached, raised messages have more bottom padding to show the dropshadow. */\n  ", "\n\n  /* Text alignment. */\n  ", "\n  ", "\n  ", "\n"])), function (p) { return (!p.attached || p.attached === 'top') && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["4px"], ["4px"]))); }, function (p) { return (!p.attached || p.attached === 'bottom') && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["4px"], ["4px"]))); }, function (p) { return !p.attached && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-radius: ", "px;\n  "], ["\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-radius: ", "px;\n  "])), function (p) { return p.theme.radius; }); }, function (p) { return p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-bottom-width: 1px;\n    border-radius: none;\n  "], ["\n    border-bottom-width: 1px;\n    border-radius: none;\n  "]))); }, function (p) { return p.attached === 'top' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;\n  "], ["\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;\n  "])), p.theme.radius, p.theme.radius); }, function (p) { return p.attached === 'bottom' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    border-bottom-width: 1px;\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  "], ["\n    border-bottom-width: 1px;\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  "])), p.theme.radius, p.theme.radius); }, function (p) { return p.hidden && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["display:none;"], ["display:none;"]))); }, function (p) { return !p.hidden && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    /* If \"icon\" is present, then apply flex formatting. */\n    ", "\n    ", "\n  "], ["\n    /* If \"icon\" is present, then apply flex formatting. */\n    ", "\n    ", "\n  "])), p.icon && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      display: ", "", ";\n      ", " {\n        /* Icon color = border color */\n        fill: ", ";\n        flex: 0;\n        margin-right: 12px;\n      }\n    "], ["\n      display: ", "", ";\n      ", " {\n        /* Icon color = border color */\n        fill: ", ";\n        flex: 0;\n        margin-right: 12px;\n      }\n    "])), p.compact && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["inline-flex"], ["inline-flex"]))), !p.compact && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["flex"], ["flex"]))), IconStyled, p.colorSet.color), !p.icon && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      display: ", "", ";\n    "], ["\n      display: ", "", ";\n    "])), p.compact && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["inline-block"], ["inline-block"]))), !p.compact && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["block"], ["block"]))))); }, function (p) { return p.colorSet.border; }, function (p) { return p.colorSet.color; }, function (p) { return p.colorSet.background; }, function (p) { return p.raised && !p.attached && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["box-shadow: 0px 2px 5px 1px ", ";"], ["box-shadow: 0px 2px 5px 1px ", ";"])), p.colorSet.border); }, function (p) { return p.raised && !p.attached && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    margin-bottom: 12px;  \n  "], ["\n    margin-bottom: 12px;  \n  "]))); }, function (p) { return p.align === 'left' && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["text-align:left;"], ["text-align:left;"]))); }, function (p) { return p.align === 'center' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["text-align:center;"], ["text-align:center;"]))); }, function (p) { return p.align === 'right' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["text-align:right;"], ["text-align:right;"]))); });
/**
 * Displays an informational message block.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-message--properties
 */
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        var p = this.props;
        return (React.createElement(MessageStyled, __assign({}, p)));
    };
    Message.displayName = "Message";
    Message.Header = MessageHeader;
    Message.Content = MessageContent;
    return Message;
}(React.Component));
Message.Header.displayName = "Message.Header";
Message.Content.displayName = "Message.Content";
export { Message };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
