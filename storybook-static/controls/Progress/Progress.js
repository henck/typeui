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
import { darken } from '../../helper/darken';
var ProgressBase = /** @class */ (function (_super) {
    __extends(ProgressBase, _super);
    function ProgressBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }));
    };
    return ProgressBase;
}(React.Component));
var ProgressStyled = styled(ProgressBase).attrs(function (p) { return ({
    percentageStr: Math.round(p.value).toString() + '%'
}); })(templateObject_7 || (templateObject_7 = __makeTemplateObject([" \n  position: relative; \n  box-sizing: border-box;\n  width: 100%;\n  height: ", "px;\n  margin: 4px 0 4px 0;\n\n  ", "\n  ", "\n  \n  /* Raised adds a dropshadow. */\n  ", "\n\n  /* Not-rectangular adds rounding: */\n  ", "\n\n  &:before {\n    transition: width ", "s ease;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    width: ", ";\n    transition: width ", "s;\n    height: 100%;\n    background: ", ";\n    /* Not-rectangular adds rounding: */\n    ", "\n  }\n\n  ", "\n"], [" \n  position: relative; \n  box-sizing: border-box;\n  width: 100%;\n  height: ", "px;\n  margin: 4px 0 4px 0;\n\n  ", "\n  ", "\n  \n  /* Raised adds a dropshadow. */\n  ", "\n\n  /* Not-rectangular adds rounding: */\n  ", "\n\n  &:before {\n    transition: width ", "s ease;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    width: ", ";\n    transition: width ", "s;\n    height: 100%;\n    background: ", ";\n    /* Not-rectangular adds rounding: */\n    ", "\n  }\n\n  ", "\n"
    /**
     * The Progress component shows a progress bar, filled to a percentage equal to
     * value. The bar always stretches to fill all horizontal space available to it.
     *
     * @example
     * <Progress
     *   background
     *   value={50}/>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-progress--properties
     */
])), function (p) { return p.thickness ? p.thickness : 12; }, function (p) { return p.bordered && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["border: solid 1px ", ";"], ["border: solid 1px ", ";"])), function (p) { return darken(0.1, p.theme.normalColor); }); }, function (p) { return p.background && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["background: ", ";"], ["background: ", ";"])), function (p) { return p.theme.normalColor; }); }, function (p) { return p.raised && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["box-shadow: 1px 1px 2px ", ";"], ["box-shadow: 1px 1px 2px ", ";"])), function (p) { return p.theme.normalColor; }); }, function (p) { return !p.rectangular && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["border-radius: ", "px;"], ["border-radius: ", "px;"])), function (p) { return p.theme.radius + 2; }); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.value + '%'; }, function (p) { return p.theme.transition.duration * 2; }, function (p) { return p.color ? p.color : p.theme.primaryColor; }, function (p) { return !p.rectangular && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["border-radius: ", "px;"], ["border-radius: ", "px;"])), function (p) { return p.theme.radius; }); }, function (p) { return p.numbered && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &:after {\n      content: '", "';\n      position: absolute;\n      top: 50%;\n      right: 6px;\n      font-size: 8px;\n      line-height: 0;\n    }\n  "], ["\n    &:after {\n      content: '", "';\n      position: absolute;\n      top: 50%;\n      right: 6px;\n      font-size: 8px;\n      line-height: 0;\n    }\n  "])), p.percentageStr); });
/**
 * The Progress component shows a progress bar, filled to a percentage equal to
 * value. The bar always stretches to fill all horizontal space available to it.
 *
 * @example
 * <Progress
 *   background
 *   value={50}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-progress--properties
 */
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ProgressStyled, __assign({}, p)));
    };
    return Progress;
}(React.Component));
export { Progress };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
