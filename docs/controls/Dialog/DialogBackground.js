var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from '../../styles/Theme';
var DialogBackgroundBase = function (props) {
    return React.createElement("div", { className: props.className });
};
var DialogBackground = styled(DialogBackgroundBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position:    fixed;\n  z-index:     2000;\n  left:        0;\n  top:         0;\n  right:       0;\n  bottom:      0;\n  background:#000;\n  opacity:     0.5;\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 0.5;\n    transition: opacity 0.3s ease;\n  }\n  &.fade-exit {\n    opacity: 0.5;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }  \n"], ["\n  position:    fixed;\n  z-index:     2000;\n  left:        0;\n  top:         0;\n  right:       0;\n  bottom:      0;\n  background:#000;\n  opacity:     0.5;\n\n  /* CSSTransition classes */\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 0.5;\n    transition: opacity 0.3s ease;\n  }\n  &.fade-exit {\n    opacity: 0.5;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }  \n"])));
DialogBackground.displayName = "DialogBackground";
export { DialogBackground };
var templateObject_1;
