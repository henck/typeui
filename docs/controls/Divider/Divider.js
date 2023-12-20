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
var DividerBase = function (props) {
    return React.createElement("div", { className: props.className },
        React.createElement("span", null, props.children));
};
var DividerStyled = styled(DividerBase)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative; /* For internal <span> positioning */\n  box-sizing: border-box;\n  font-weight: 500;\n\n  /* A divider always clears content above it. */\n  clear: both;\n\n  /* Margin:\n     A fitted divider has no vertical margin. \n     A section divider has double vertical margin.*/\n  margin: 14px 0;\n  ", "\n  ", "\n  ", "\n\n  /* Border:\n     A hidden divider has no dividing line. */\n  border-top: solid 1px ", ";\n\n  /* A <span> is used to center the <Divider>'s content\n     vertically. */\n  & > span {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    padding: 0 16px;\n    background: #fff;\n  }\n\n  /* Any elements contained in the <Divider> get their\n     vertical margins removed to vertically center \n     them properly.\n     An example would be a <Header> contained in te\n     <Divider>. */\n  & span * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"], ["\n  position: relative; /* For internal <span> positioning */\n  box-sizing: border-box;\n  font-weight: 500;\n\n  /* A divider always clears content above it. */\n  clear: both;\n\n  /* Margin:\n     A fitted divider has no vertical margin. \n     A section divider has double vertical margin.*/\n  margin: 14px 0;\n  ", "\n  ", "\n  ", "\n\n  /* Border:\n     A hidden divider has no dividing line. */\n  border-top: solid 1px ", ";\n\n  /* A <span> is used to center the <Divider>'s content\n     vertically. */\n  & > span {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    padding: 0 16px;\n    background: #fff;\n  }\n\n  /* Any elements contained in the <Divider> get their\n     vertical margins removed to vertically center \n     them properly.\n     An example would be a <Header> contained in te\n     <Divider>. */\n  & span * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"
    /**
     * A Divider is used to separate blocks of contents vertically. Dividers
     * can be invisible or contain a horizontal line. Dividers can also contain
     * content.
     *
     * @example
     * <Divider>OR</Divider>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-divider--properties
     */
])), function (p) { return p.fitted && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["margin: 0;"], ["margin: 0;"]))); }, function (p) { return p.narrow && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["margin: 7px 0;"], ["margin: 7px 0;"]))); }, function (p) { return p.section && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["margin: 28px 0;"], ["margin: 28px 0;"]))); }, function (p) { return p.hidden ? p.theme.background : p.theme.normalColor; });
/**
 * A Divider is used to separate blocks of contents vertically. Dividers
 * can be invisible or contain a horizontal line. Dividers can also contain
 * content.
 *
 * @example
 * <Divider>OR</Divider>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-divider--properties
 */
var Divider = function (props) { return React.createElement(DividerStyled, __assign({}, props)); };
export { Divider };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
