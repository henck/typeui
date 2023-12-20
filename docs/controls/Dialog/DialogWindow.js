var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from '../../styles/Theme';
var DialogWindowBase = function (props) {
    return React.createElement("div", { className: props.className, ref: props.windowRef }, props.children);
};
var DialogWindow = styled(DialogWindowBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 3000;\n  left: 50%;\n  top: 50%;\n  transform-origin: center center;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: ", "px;\n  background: #fff;\n  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);\n\n  /* Dialog window width:\n   * Narrower on small screen. */\n  width: ", "px;\n  @media (max-width: ", "px) {\n    width: ", "px;\n  }\n\n  /* CSSTransition classes: */\n  &.fade-enter {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-50%) scale(0.8);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: translateX(-50%) translateY(-50%);\n    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.17,.89,.35,1.67);\n  }\n  &.fade-exit {\n    opacity: 1;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-50%) scale(0.8);\n    transition: opacity 0.3s ease, transform 0.3s ease;\n  }\n"], ["\n  position: fixed;\n  z-index: 3000;\n  left: 50%;\n  top: 50%;\n  transform-origin: center center;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: ", "px;\n  background: #fff;\n  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);\n\n  /* Dialog window width:\n   * Narrower on small screen. */\n  width: ", "px;\n  @media (max-width: ", "px) {\n    width: ", "px;\n  }\n\n  /* CSSTransition classes: */\n  &.fade-enter {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-50%) scale(0.8);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: translateX(-50%) translateY(-50%);\n    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(.17,.89,.35,1.67);\n  }\n  &.fade-exit {\n    opacity: 1;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-50%) scale(0.8);\n    transition: opacity 0.3s ease, transform 0.3s ease;\n  }\n"])), function (p) { return p.theme.radius; }, function (p) { return p.width ? p.width : 600; }, function (p) { return p.theme.smallScreen; }, function (p) { return p.width ? (p.width > 400 ? 400 : p.width) : 400; });
DialogWindow.displayName = "DialogWindow";
export { DialogWindow };
var templateObject_1;
