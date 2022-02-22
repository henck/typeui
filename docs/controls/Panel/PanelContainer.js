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
import * as React from 'react';
// Other controls
import { PanelBody } from './PanelBody';
var PanelContainer = /** @class */ (function (_super) {
    __extends(PanelContainer, _super);
    function PanelContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.above = false; // Is body above parent?
        _this.right = false; // Is body right-aligned to parent?
        _this.offset = 20; // Offset of body arrow, in pixels.
        var parent = _this.props.anchor.parentElement;
        var rect = parent.getBoundingClientRect();
        _this.above = rect.top >= window.innerHeight / 2,
            _this.right = rect.left < window.innerWidth / 2;
        _this.offset = Math.round(rect.width / 2);
        return _this;
    }
    // After mounting, focus on the first <input> element in the panel,
    // if there is one.
    PanelContainer.prototype.componentDidMount = function () {
        var firstInput = this.props.anchor.parentElement.querySelector('input');
        if (firstInput != null)
            firstInput.focus();
    };
    PanelContainer.prototype.render = function () {
        var p = this.props;
        return (React.createElement(PanelBody, { noanimation: this.props.noanimation, className: p.className, above: this.above, right: this.right, offset: this.offset, padded: p.padded, width: p.width }, p.children));
    };
    return PanelContainer;
}(React.Component));
export { PanelContainer };
