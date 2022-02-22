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
import * as React from 'react';
import styled from '../../../styles/Theme';
var WIDTH = 30;
var HEIGHT = 276;
var HueBoxBase = /** @class */ (function (_super) {
    __extends(HueBoxBase, _super);
    function HueBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseDown = function (e) {
            _this.props.onMouseDown({
                mouseY: e.nativeEvent.offsetY,
                offsetY: e.clientY - e.nativeEvent.offsetY,
                height: e.nativeEvent.target.clientHeight
            });
        };
        _this.canvasRef = React.createRef();
        return _this;
    }
    // Draw vertical hue bar.
    HueBoxBase.prototype.drawBar = function () {
        var ctx = this.canvasRef.current.getContext('2d');
        for (var i = 0; i < HEIGHT; i++) {
            var angle = i / HEIGHT * 360;
            ctx.fillStyle = "hsl(".concat(angle, ", 100%, 50%)");
            ctx.fillRect(0, i, WIDTH, 1);
        }
    };
    HueBoxBase.prototype.componentDidMount = function () {
        this.drawBar();
    };
    HueBoxBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onMouseDown: this.handleMouseDown },
            React.createElement("canvas", { ref: this.canvasRef, width: WIDTH, height: HEIGHT }),
            React.createElement("div", { style: { top: Math.floor(p.hue / 3.6) + '%' } })));
    };
    return HueBoxBase;
}(React.Component));
var HueBox = styled(HueBoxBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  margin-right: 20px;\n\n  canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: ", "px;\n  }\n  /* Hue cursor */\n  div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none; /* Cannot catch events */\n    &:after {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      left: -3px;\n      top: -4px;\n      width: ", "px;\n      height: 9px;\n      border: solid 3px #444;\n      border-radius: 3px;        \n    }\n  }\n"], ["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  margin-right: 20px;\n\n  canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: ", "px;\n  }\n  /* Hue cursor */\n  div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none; /* Cannot catch events */\n    &:after {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      left: -3px;\n      top: -4px;\n      width: ", "px;\n      height: 9px;\n      border: solid 3px #444;\n      border-radius: 3px;        \n    }\n  }\n"])), WIDTH, HEIGHT, function (p) { return p.theme.radius; }, WIDTH + 6);
export { HueBox };
var templateObject_1;
