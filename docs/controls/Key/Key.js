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
var KeyBase = function (props) {
    return React.createElement("div", { className: props.className }, props.children);
};
var KeyStyled = styled(KeyBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border:        solid 1px #aaa;\n  border-radius: 4px;\n  padding:       2px 4px 2px 4px;\n  height:        10px;\n  line-height:   10px;\n  font-size:     10px;\n"], ["\n  border:        solid 1px #aaa;\n  border-radius: 4px;\n  padding:       2px 4px 2px 4px;\n  height:        10px;\n  line-height:   10px;\n  font-size:     10px;\n"
    /**
     * A `Key` displays a keyboard key. The children are the key description,
     * e.g. "CTRL" or "ALT".
     */
])));
/**
 * A `Key` displays a keyboard key. The children are the key description,
 * e.g. "CTRL" or "ALT".
 */
var Key = function (props) { return React.createElement(KeyStyled, __assign({}, props)); };
export { Key };
var templateObject_1;
