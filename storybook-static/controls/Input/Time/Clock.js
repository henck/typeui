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
import { darken } from '../../../helper/darken';
import styled from '../../../styles/Theme';
import { ClockNumber } from './ClockNumber';
import { Hand } from './Hand';
var ClockBase = /** @class */ (function (_super) {
    __extends(ClockBase, _super);
    function ClockBase(props) {
        var _this = _super.call(this, props) || this;
        // Is mouse currently down?
        _this.mouseDown = false;
        _this.componentDidUpdate = function (newProps) {
            if (newProps.mode != _this.props.mode)
                _this.setState({ arrow_animation: true });
        };
        // Convert a mouse location to degrees on the clockface.
        _this.eventToDeg = function (e) {
            var rect = _this.faceElement.getBoundingClientRect();
            var x = (e.clientX - rect.left) - rect.width / 2;
            var y = -((e.clientY - rect.top) - rect.height / 2);
            var deg = -Math.atan2(y, x) * 180 / Math.PI + 180 - 90;
            if (deg < 0)
                deg += 360;
            return deg;
        };
        //
        // On mouseDown, then start dragging the clock hand. 
        // 
        _this.handleMouseDown = function () {
            _this.mouseDown = true;
            _this.faceElement.classList.add('move');
            // Disable clock hand animation.
            _this.setState({ arrow_animation: false });
        };
        //
        // On mouseUp, update clock.
        // 
        _this.handleMouseUp = function (e) {
            if (!_this.mouseDown)
                return;
            _this.mouseDown = false;
            _this.faceElement.classList.remove('move');
            _this.props.onSelect(_this.eventToDeg(e), true);
        };
        //
        // On mouseMove, update clock.
        // 
        _this.handleMouseMove = function (e) {
            if (_this.mouseDown)
                _this.props.onSelect(_this.eventToDeg(e), false);
        };
        _this.render = function () {
            var p = _this.props;
            return (React.createElement("div", { className: p.className },
                React.createElement(ClockFace, { ref: function (el) { return _this.faceElement = el; }, onMouseDown: _this.handleMouseDown },
                    React.createElement(Hand, { animation: _this.state.arrow_animation, degrees: p.degrees }),
                    p.mode == 'hour' && !p.is24h && [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (v, index) {
                        return React.createElement(ClockNumber, { active: p.degrees == (v * 30) % 360, key: index, value: v.toString(), degrees: v * 30 });
                    }),
                    p.mode == 'hour' && p.is24h && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (v, index) {
                        return React.createElement(ClockNumber, { active: p.degrees == (v * 30) % 360, key: index, value: (v * 2).toString(), degrees: v * 30 });
                    }),
                    p.mode != 'hour' && [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(function (v, index) {
                        return React.createElement(ClockNumber, { active: p.degrees == (v * 6) % 360, key: index, value: v.toString().padStart(2, "0"), degrees: v * 6 });
                    }),
                    React.createElement(Center, null))));
        };
        _this.state = {
            arrow_animation: false
        };
        return _this;
    }
    // Listen for document-wide mousedown event when component mounts.
    ClockBase.prototype.componentDidMount = function () {
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleMouseMove);
    };
    // Clean up document-wide mousedown event when component unmounts.
    ClockBase.prototype.componentWillUnmount = function () {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    };
    return ClockBase;
}(React.Component));
var ClockFace = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position:       relative;\n  display:        inline-block;\n  width:          100%;\n  height:         0;   /* hack to keep clock face ratio 1:1 */\n  padding-bottom: 100%;\n  border-radius:  50%;\n  box-shadow:     rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  border:         solid 1px ", ";\n  background-color: ", ";\n  cursor:         pointer;\n  transition:     border-color ", "s ease,\n                  background-color ", "s ease;\n  &.move {\n    border:       solid 1px ", ";\n    background-color: ", ";\n    cursor:       move;\n  }\n"], ["\n  position:       relative;\n  display:        inline-block;\n  width:          100%;\n  height:         0;   /* hack to keep clock face ratio 1:1 */\n  padding-bottom: 100%;\n  border-radius:  50%;\n  box-shadow:     rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  border:         solid 1px ", ";\n  background-color: ", ";\n  cursor:         pointer;\n  transition:     border-color ", "s ease,\n                  background-color ", "s ease;\n  &.move {\n    border:       solid 1px ", ";\n    background-color: ", ";\n    cursor:       move;\n  }\n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.primaryColor; }, function (p) { return darken(0.05, p.theme.normalColor); });
var Clock = styled(ClockBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position:       relative;\n  margin:         0 auto;    /* center clock */\n  max-width:      200px;     /* max clock size */\n"], ["\n  position:       relative;\n  margin:         0 auto;    /* center clock */\n  max-width:      200px;     /* max clock size */\n"])));
var Center = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position:       absolute;\n  left:           calc(50% - 3px);\n  top:            calc(50% - 3px);\n  width:          7px;\n  height:         7px;\n  border-radius:  50%;\n  background:     ", ";\n"], ["\n  position:       absolute;\n  left:           calc(50% - 3px);\n  top:            calc(50% - 3px);\n  width:          7px;\n  height:         7px;\n  border-radius:  50%;\n  background:     ", ";\n"])), function (p) { return p.theme.primaryColor; });
export { Clock };
var templateObject_1, templateObject_2, templateObject_3;
