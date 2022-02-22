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
var WIDTH = 300;
var HEIGHT = 276;
var ColorBoxBase = /** @class */ (function (_super) {
    __extends(ColorBoxBase, _super);
    function ColorBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseDown = function (e) {
            _this.props.onMouseDown({
                mouseX: e.nativeEvent.offsetX,
                offsetX: e.clientX - e.nativeEvent.offsetX,
                width: e.nativeEvent.target.clientWidth,
                mouseY: e.nativeEvent.offsetY,
                offsetY: e.clientY - e.nativeEvent.offsetY,
                height: e.nativeEvent.target.clientHeight
            });
        };
        _this.canvasRef = React.createRef();
        return _this;
    }
    ColorBoxBase.prototype.drawColorBlock = function () {
        var ctx = this.canvasRef.current.getContext('2d');
        // Brightness, top to bottom.
        var gradB = ctx.createLinearGradient(0, 0, 0, HEIGHT);
        gradB.addColorStop(0, "white");
        gradB.addColorStop(1, "black");
        // Saturation, left to right.
        var gradC = ctx.createLinearGradient(0, 0, WIDTH, 0);
        gradC.addColorStop(0, "hsla(".concat(this.props.hue, ",100%,50%,0)"));
        gradC.addColorStop(1, "hsla(".concat(this.props.hue, ",100%,50%,1)"));
        ctx.fillStyle = gradB;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = gradC;
        ctx.globalCompositeOperation = "multiply";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.globalCompositeOperation = "source-over";
    };
    ColorBoxBase.prototype.componentDidMount = function () {
        this.drawColorBlock();
    };
    ColorBoxBase.prototype.componentDidUpdate = function () {
        this.drawColorBlock();
    };
    ColorBoxBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onMouseDown: this.handleMouseDown },
            React.createElement("canvas", { ref: this.canvasRef, width: 300, height: 276 }),
            React.createElement("div", { style: { left: Math.floor(p.saturation * 100) + '%', top: Math.floor((1 - p.brightness) * 100) + '%' } })));
    };
    return ColorBoxBase;
}(React.Component));
var ColorBox = styled(ColorBoxBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 300px;\n  @media (max-width: ", "px) {\n    width: 100px;\n  }  \n  height: ", "px;\n  margin-right: 20px;\n\n  canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: ", "px;\n  }\n\n  /* Sat cursor */\n  div {\n    display: block;\n    position: absolute;\n    pointer-events: none; /* Does not catch mouse events */\n    left: 0;\n    top: 0;\n    &:before {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      top: -7px;\n      left: -7px;\n      width: 15px;\n      height: 15px;\n      border: solid 3px #000;\n      border-radius: 50%;\n    }\n    &:after {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      top: -4px;\n      left: -4px;\n      width: 9px;\n      height: 9px;\n      border: solid 2px #fff;\n      border-radius: 50%;\n    }\n  }\n"], ["\n  position: relative;\n  width: 300px;\n  @media (max-width: ", "px) {\n    width: 100px;\n  }  \n  height: ", "px;\n  margin-right: 20px;\n\n  canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: ", "px;\n  }\n\n  /* Sat cursor */\n  div {\n    display: block;\n    position: absolute;\n    pointer-events: none; /* Does not catch mouse events */\n    left: 0;\n    top: 0;\n    &:before {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      top: -7px;\n      left: -7px;\n      width: 15px;\n      height: 15px;\n      border: solid 3px #000;\n      border-radius: 50%;\n    }\n    &:after {\n      position: absolute;\n      content: '';\n      box-sizing: border-box;\n      top: -4px;\n      left: -4px;\n      width: 9px;\n      height: 9px;\n      border: solid 2px #fff;\n      border-radius: 50%;\n    }\n  }\n"])), function (p) { return p.theme.smallScreen; }, HEIGHT, function (p) { return p.theme.radius; });
export { ColorBox };
var templateObject_1;
