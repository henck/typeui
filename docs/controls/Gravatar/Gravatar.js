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
// Helpers
import { md5 } from '../../helper/md5';
// Other controls
import { Image } from '../Image/Image';
/**
 * A Gravatar shows a generated image based on an email address, as provided by the gravatar service.
 *
 * @example
 * <Gravatar email="john.smith@email.com"/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-gravatar--properties
 */
var Gravatar = /** @class */ (function (_super) {
    __extends(Gravatar, _super);
    function Gravatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gravatar.prototype.render = function () {
        var p = this.props;
        return (React.createElement(Image, { avatar: !p.size, size: p.size, bordered: true, circular: true, onClick: p.onClick, src: p.email
                ? "https://www.gravatar.com/avatar/".concat(md5(p.email.toLowerCase().trim()), "?d=mp&r=g")
                : "https://www.gravatar.com/avatar/?d=mp&r=g&f=y" }));
    };
    return Gravatar;
}(React.Component));
export { Gravatar };
