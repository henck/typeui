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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { Segment } from './Segment';
import { InnerCircle } from './InnerCircle';
import { Dot } from './Dot';
var DEFAULT_RADIUS = 50;
var DEFAULT_THICKNESS = 8;
var CircularProgressBase = /** @class */ (function (_super) {
    __extends(CircularProgressBase, _super);
    function CircularProgressBase(props) {
        var _this = _super.call(this, props) || this;
        _this.animate = function () {
            // Animate by increasing state value, until prop value is reached.
            if (_this.state.value < _this.props.value) {
                _this.setState({ value: _this.state.value + _this.step });
            }
            else {
                // Clear animation timer at end of animation.
                clearInterval(_this.interval);
            }
        };
        _this.step = props.value / 40;
        _this.state = {
            value: props.animated ? 0 : Math.max(Math.min(100, props.value), 0)
        };
        return _this;
    }
    CircularProgressBase.prototype.componentDidMount = function () {
        // If circle is animated, start animation timer.
        if (this.props.animated) {
            this.interval = setInterval(this.animate, 10);
        }
    };
    CircularProgressBase.prototype.componentWillUnmount = function () {
        // Clear animation timer (if any).
        clearInterval(this.interval);
    };
    CircularProgressBase.prototype.render = function () {
        var p = this.props;
        var radius = p.radius ? p.radius : DEFAULT_RADIUS;
        var thickness = p.thickness ? p.thickness : DEFAULT_THICKNESS;
        var value = Math.max(Math.min(this.state.value, 100), 0);
        var degrees = 360 / 100 * value;
        var q1 = Math.min(degrees, 95);
        var q2 = Math.max(0, Math.min(degrees - 90, 95));
        var q3 = Math.max(0, Math.min(degrees - 180, 95));
        var q4 = Math.max(0, Math.min(degrees - 270, 95));
        // Dot calculations:
        var innerRadius = radius - thickness;
        var middleRadius = radius - thickness / 2;
        var rad = (360 / 100 * Math.min(100, Math.max(this.state.value, 0)) - 90) * Math.PI / 180;
        return (React.createElement("div", { className: p.className },
            React.createElement("div", null,
                React.createElement(Segment, { angleOffset: 0, angleBody: q1, color: p.color }),
                React.createElement(Segment, { angleOffset: 90, angleBody: q2, color: p.color }),
                React.createElement(Segment, { angleOffset: 180, angleBody: q3, color: p.color }),
                React.createElement(Segment, { angleOffset: 270, angleBody: q4, color: p.color }),
                React.createElement(InnerCircle, { radius: radius - thickness, raised: p.raised }),
                React.createElement(Value, null,
                    Math.round(value),
                    "%")),
            React.createElement("div", null),
            p.rounded && React.createElement(Dot, { color: p.color, left: radius, top: radius - middleRadius, thickness: thickness }),
            p.rounded && React.createElement(Dot, { color: p.color, left: radius + middleRadius * Math.cos(rad), top: radius + middleRadius * Math.sin(rad), thickness: thickness })));
    };
    return CircularProgressBase;
}(React.Component));
var CircularProgressStyled = styled(CircularProgressBase).attrs(function (p) { return ({
    outerRadius: p.radius ? p.radius : DEFAULT_RADIUS,
    innerRadius: (p.radius ? p.radius : DEFAULT_RADIUS) - (p.thickness ? p.thickness : DEFAULT_THICKNESS),
    middleRadius: (p.radius ? p.radius : DEFAULT_RADIUS) - (p.thickness ? p.thickness : DEFAULT_THICKNESS) / 2,
    actualThickness: p.thickness ? p.thickness : DEFAULT_THICKNESS,
    rad: (360 / 100 * Math.min(100, Math.max(p.value, 0)) - 90) * Math.PI / 180
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  ", "\n  /* main circle */\n  & > div:nth-child(1) {\n    position: relative;\n    width: ", "px;\n    height: ", "px;\n    background: ", ";\n    border-radius: 50%;\n    overflow: hidden;\n  }\n  /* underlying circle, 1px smaller than main circle, used to produce dropshadow */\n  & > div:nth-child(2) {\n    z-index: -1;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: ", "px;\n    height: ", "px;\n    transform: translateX(-50%) translateY(-50%);\n    background: transparent;\n    border-radius: 50%;\n    ", "\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  ", "\n  /* main circle */\n  & > div:nth-child(1) {\n    position: relative;\n    width: ", "px;\n    height: ", "px;\n    background: ", ";\n    border-radius: 50%;\n    overflow: hidden;\n  }\n  /* underlying circle, 1px smaller than main circle, used to produce dropshadow */\n  & > div:nth-child(2) {\n    z-index: -1;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: ", "px;\n    height: ", "px;\n    transform: translateX(-50%) translateY(-50%);\n    background: transparent;\n    border-radius: 50%;\n    ", "\n  }\n"
    /**
     * Numeric value to show in center of control.
     */
])), function (p) { return p.padded && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["margin: 10px;"], ["margin: 10px;"]))); }, function (p) { return p.outerRadius * 2; }, function (p) { return p.outerRadius * 2; }, function (p) { return p.background ? '#eee' : 'transparent'; }, function (p) { return p.outerRadius * 2 - 2; }, function (p) { return p.outerRadius * 2 - 2; }, function (p) { return p.raised && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 2px 2px;"], ["box-shadow: rgba(34, 36, 38, 0.15) 0px 0px 2px 2px;"]))); });
/**
 * Numeric value to show in center of control.
 */
var Value = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  font-size: 180%;\n  font-weight: 500;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"], ["\n  position: absolute;\n  font-size: 180%;\n  font-weight: 500;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"
    /**
     * A CircularProgress shows a circular progress meter that is optionally animated.
     *
     * @example
     * <CircularProgress animated color="hotpink" padded raised value={15}/>
     * <CircularProgress animated background padded raised value={90}/>
     * <CircularProgress animated background color="crimson" padded raised rounded value={48}/>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-circularprogress--properties
     */
])));
/**
 * A CircularProgress shows a circular progress meter that is optionally animated.
 *
 * @example
 * <CircularProgress animated color="hotpink" padded raised value={15}/>
 * <CircularProgress animated background padded raised value={90}/>
 * <CircularProgress animated background color="crimson" padded raised rounded value={48}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-circularprogress--properties
 */
var CircularProgress = /** @class */ (function (_super) {
    __extends(CircularProgress, _super);
    function CircularProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgress.prototype.render = function () {
        return (React.createElement(CircularProgressStyled, __assign({}, this.props)));
    };
    return CircularProgress;
}(React.Component));
export { CircularProgress };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
