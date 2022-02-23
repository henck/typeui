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
var GroupBase = /** @class */ (function (_super) {
    __extends(GroupBase, _super);
    function GroupBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return GroupBase;
}(React.Component));
var GroupStyled = styled(GroupBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display:        flex;\n  flex-direction: row;\n  flex-wrap:      wrap;\n  align-items:    flex-start;\n\n  /* Insert a small margin between fields, and fix for wrapping\n  * using negative margins. */\n  margin: 0 -8px;\n  & > * { margin: 0 8px; }\n  /* For equal spacing, have each field occupy 100%. */\n  ", "\n"], ["\n  display:        flex;\n  flex-direction: row;\n  flex-wrap:      wrap;\n  align-items:    flex-start;\n\n  /* Insert a small margin between fields, and fix for wrapping\n  * using negative margins. */\n  margin: 0 -8px;\n  & > * { margin: 0 8px; }\n  /* For equal spacing, have each field occupy 100%. */\n  ", "\n"])), function (p) { return p.equal && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & > * {\n      width: 100%;\n    }\n  "], ["\n    & > * {\n      width: 100%;\n    }\n  "]))); });
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(GroupStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Group;
}(React.Component));
export { Group };
var templateObject_1, templateObject_2;
