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
// Other controls
import { Hint } from './Hint';
import { Label } from './Label';
var UncontrolledBase = /** @class */ (function (_super) {
    __extends(UncontrolledBase, _super);
    function UncontrolledBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Get field's label element, if any.
    UncontrolledBase.prototype.getLabel = function () {
        if (this.props.label)
            return (React.createElement(Label, { inline: this.props.inline }, this.props.label));
        return null;
    };
    UncontrolledBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            this.getLabel(),
            p.children,
            React.createElement(Hint, null, this.props.hint)));
    };
    return UncontrolledBase;
}(React.Component));
var UncontrolledStyled = styled(UncontrolledBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-bottom: 8px;\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"], ["\n  padding-bottom: 8px;\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"])), function (p) { return p.width && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["flex: ", ""], ["flex: ", ""])), p.width); });
var Uncontrolled = /** @class */ (function (_super) {
    __extends(Uncontrolled, _super);
    function Uncontrolled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uncontrolled.prototype.render = function () {
        var p = this.props;
        return (React.createElement(UncontrolledStyled, __assign({}, p)));
    };
    return Uncontrolled;
}(React.Component));
export { Uncontrolled };
var templateObject_1, templateObject_2;
