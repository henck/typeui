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
var MOUSE_COLOR = "#888";
var HIGHLIGHT_COLOR = "#00EDF0";
var MouseBase = function (props) {
    return (React.createElement("svg", { className: props.className, version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 585.2 939" },
        React.createElement("path", { d: "M282.9,921.4h19.3c144.7,0,262.4-117.7,262.4-262.4V500.3H20.5v158.7C20.5,803.6,138.2,921.4,282.9,921.4z" }),
        React.createElement("path", { className: "wheel", d: "M246.9,168.5v157.1c0,24.6,20,44.7,44.7,44.7h2c24.6,0,44.7-20,44.7-44.7V168.5c0-24.6-20-44.7-44.7-44.7h-2\tC267,123.8,246.9,143.8,246.9,168.5z" }),
        React.createElement("path", { className: "right", d: "M308.6,19.3v73.9c35.1,7,61.6,38,61.6,75.2v157.1c0,37.1-26.5,68.2-61.6,75.2v67.5h256.1V281.7 C564.6,139.1,450.4,22.7,308.6,19.3z" }),
        React.createElement("path", { className: "left", d: "M20.5,281.7v186.6h256.1v-67.5c-35.1-7-61.6-38-61.6-75.2V168.5c0-37.1,26.5-68.2,61.6-75.2V19.3 C134.8,22.7,20.5,139.1,20.5,281.7z" })));
};
var MouseStyled = styled(MouseBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width:  14px;\n  height: 20px;\n  fill:   ", ";\n  .left  { fill: ", "}\n  .right { fill: ", "}\n  .wheel { fill: ", "}\n"], ["\n  width:  14px;\n  height: 20px;\n  fill:   ", ";\n  .left  { fill: ", "}\n  .right { fill: ", "}\n  .wheel { fill: ", "}\n"
    /**
     * The `Mouse` displays a mouse icon. Its buttons and mouse wheel can be
     * highlighted.
     */
])), MOUSE_COLOR, function (p) { return p.left ? HIGHLIGHT_COLOR : MOUSE_COLOR; }, function (p) { return p.right ? HIGHLIGHT_COLOR : MOUSE_COLOR; }, function (p) { return p.wheel ? HIGHLIGHT_COLOR : MOUSE_COLOR; });
/**
 * The `Mouse` displays a mouse icon. Its buttons and mouse wheel can be
 * highlighted.
 */
var Mouse = function (props) { return React.createElement(MouseStyled, __assign({}, props)); };
export { Mouse };
var templateObject_1;
