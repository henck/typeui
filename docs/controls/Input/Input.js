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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { CSSTransition } from 'react-transition-group';
// Other controls
import { StandardInput } from './StandardInput';
import { InputBox as DateInputBox } from './Date/InputBox';
import { Selector as DateSelector } from './Date/Selector';
import { InputBox as TimeInputBox } from './Time/InputBox';
import { Selector as TimeSelector } from './Time/Selector';
import { InputBox as ColorInputBox } from './Color/InputBox';
import { Selector as ColorSelector } from './Color/Selector';
import { Clear } from './Clear';
import { Icon } from '../Icon/';
import { IconStyled } from '../Icon/Icon';
var InputInnerBase = /** @class */ (function (_super) {
    __extends(InputInnerBase, _super);
    function InputInnerBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            // Disabled input cannot be clicked.
            if (_this.props.disabled)
                return;
            // Is the input below the middle of the viewport?
            var below = _this.wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
            // Is the input to the right of the middle of the viewport?
            var right = _this.wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;
            _this.setState({
                upward: below,
                right: right,
                open: true
            });
        };
        //
        // Toggle selector.
        //
        _this.handleToggle = function () {
            // Disabled input cannot be clicked.
            if (_this.props.disabled)
                return;
            // Is the input below the middle of the viewport?
            var below = _this.wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
            // Is the input to the right of the middle of the viewport?
            var right = _this.wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;
            _this.setState({
                upward: below,
                right: right,
                open: !_this.state.open
            });
        };
        _this.handleKeyDown = function (e) {
            e.stopPropagation();
            if (e.key == 'Enter' || e.key == ' ') {
                _this.handleToggle();
            }
            if (e.key == 'Tab') {
                _this.setState({ open: false });
            }
        };
        //
        // If a value is selected, close the selector.
        //  
        _this.handleSelect = function (value) {
            // Close the selector.
            _this.setState({
                open: false
            });
            // If a value was selected, notify listener.
            if (value && _this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        //
        // Handle document-wide mousedown event by closing the Selector.
        // (This only happens if there actually is a Selector).
        //
        _this.handleClickOutside = function (e) {
            var elem = e.target;
            if (_this.wrapperRef.current && !_this.wrapperRef.current.contains(elem)) {
                _this.setState({
                    open: false
                });
            }
        };
        _this.handleClear = function () {
            if (_this.props.onChange) {
                _this.props.onChange(null);
            }
        };
        _this.wrapperRef = React.createRef();
        _this.state = {
            open: false,
            upward: false,
            right: false
        };
        return _this;
    }
    InputInnerBase.prototype.componentDidMount = function () {
        // Add document-wide event listener for mousedown.
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    InputInnerBase.prototype.componentWillUnmount = function () {
        // Remove document-wide event listener for mousedown.
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    // Speedup: only re-render input when value changes, or its error/disabled state.
    /*  shouldComponentUpdate(nextProps: IInputProps, nextState: IInputState) {
      const differentValue = this.props.value !== nextProps.value;
      const differentError = this.props.error !== nextProps.error;
      const differentDisabled = this.props.disabled !== nextProps.disabled;
      const differentOpen = this.state.open != nextState.open;
      return differentValue || differentError || differentDisabled || differentOpen;
    } */
    InputInnerBase.prototype.render = function () {
        var _a = this.props, className = _a.className, p = __rest(_a, ["className"]);
        var icon = null;
        // An icon can be passed either as an IconType...
        if (typeof p.icon === "string") {
            icon = (React.createElement(Icon, { name: p.icon }));
        }
        // ... or as IIconProps.
        else if (p.icon != null) {
            icon = (React.createElement(Icon, __assign({}, p.icon)));
        }
        return (React.createElement("div", { className: className, onClick: this.handleClick, ref: this.wrapperRef },
            p.type !== 'date' && p.type !== 'color' && p.type !== 'time' &&
                React.createElement(StandardInput, __assign({}, p)),
            p.type === 'date' &&
                React.createElement(React.Fragment, null,
                    React.createElement(DateInputBox, __assign({}, p, { defaultFormat: "dd-MM-yyyy", onKeyDown: this.handleKeyDown })),
                    React.createElement(CSSTransition, { in: this.state.open, timeout: 300, unmountOnExit: true, classNames: "fade" },
                        React.createElement(DateSelector, { value: p.value, upward: this.state.upward, right: this.state.right, onSelect: this.handleSelect, nofuture: p.nofuture }))),
            p.type === 'time' &&
                React.createElement(React.Fragment, null,
                    React.createElement(TimeInputBox, __assign({}, p, { defaultFormat: p.hasSeconds ? "HH:mm:ss" : "HH:mm", onKeyDown: this.handleKeyDown })),
                    React.createElement(CSSTransition, { in: this.state.open, timeout: 300, unmountOnExit: true, classNames: "fade" },
                        React.createElement(TimeSelector, { value: p.value, upward: this.state.upward, right: this.state.right, onSelect: this.handleSelect, hasSeconds: p.hasSeconds, is24h: p.is24h, clock: p.clock }))),
            p.type === 'color' &&
                React.createElement(React.Fragment, null,
                    React.createElement(ColorInputBox, __assign({}, p, { onKeyDown: this.handleKeyDown })),
                    React.createElement(CSSTransition, { in: this.state.open, timeout: 300, unmountOnExit: true, classNames: "fade" },
                        React.createElement(ColorSelector, { value: p.value, upward: this.state.upward, right: this.state.right, onSelect: this.handleSelect }))),
            icon,
            p.clearable && p.value !== null && React.createElement(Clear, { onClick: this.handleClear })));
    };
    return InputInnerBase;
}(React.PureComponent));
var InputInner = styled(InputInnerBase)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  ", "\n  ", "\n\n  /* Icon */\n  ", " {\n    position: absolute;\n    z-index: 15;\n    ", "\n    ", "\n    ", "\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    transition: opacity ", "s ease;\n    opacity: 0.5;\n  }\n  input:focus ~ ", " {\n    opacity: 1;\n  }    \n\n  /* If something is attached to the input, remove its border radius. */\n  &:not(:first-child) {\n    input, & > div {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  &:not(:last-child) {\n    input, & > div {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  ", "\n  ", "\n\n  /* Icon */\n  ", " {\n    position: absolute;\n    z-index: 15;\n    ", "\n    ", "\n    ", "\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    transition: opacity ", "s ease;\n    opacity: 0.5;\n  }\n  input:focus ~ ", " {\n    opacity: 1;\n  }    \n\n  /* If something is attached to the input, remove its border radius. */\n  &:not(:first-child) {\n    input, & > div {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  &:not(:last-child) {\n    input, & > div {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n"])), function (p) { return !p.fluid && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["width: 250px;"], ["width: 250px;"]))); }, function (p) { return p.fluid && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["width: 100%;"], ["width: 100%;"]))); }, IconStyled, function (p) { return !p.iconPosition && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["left: 18px;"], ["left: 18px;"]))); }, function (p) { return p.iconPosition && p.iconPosition === 'left' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["left: 18px;"], ["left: 18px;"]))); }, function (p) { return p.iconPosition && p.iconPosition === 'right' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["right: 6px;"], ["right: 6px;"]))); }, function (p) { return p.theme.transition.duration; }, IconStyled);
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBase.prototype.isAttachedTo = function (c, side) {
        var attached = c.props.attached;
        return attached === side || (!attached && side === 'left');
    };
    // Return an array of children that are Labels and attached to this
    // Input control.
    InputBase.prototype.getAttachables = function (side) {
        var _this = this;
        return React.Children.toArray(this.props.children)
            .filter(function (c) { return React.isValidElement(c) // Is this a React node?
            && c.props.isLabel // Is this a Label?
            && _this.isAttachedTo(c, side); } // Is it attached to this side?
        )
            .map(function (c, idx) {
            var attached = c.props.attached;
            if (!attached)
                attached = 'left'; // Attach to left side by default.
            return React.cloneElement(c, { key: idx, attached: attached });
        });
    };
    InputBase.prototype.getIconProps = function () {
        var props = null;
        React.Children.forEach(this.props.children, function (child) {
            if (React.isValidElement(child) && child.props.isIcon) {
                props = child.props;
            }
        });
        return props;
    };
    InputBase.prototype.render = function () {
        var _a = this.props, className = _a.className, otherProps = __rest(_a, ["className"]);
        // The InputInner class is a wrapper to allow for placement
        // of attached elements such as Labels, as well as passing
        // the "pristine" state down.
        return (React.createElement("div", { className: className },
            this.getAttachables('left'),
            React.createElement(InputInner, __assign({ icon: this.getIconProps() }, otherProps)),
            this.getAttachables('right')));
    };
    return InputBase;
}(React.Component));
var InputStyled = styled(InputBase)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  min-width:   40px;\n  ", "\n"], ["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  min-width:   40px;\n  ", "\n"
    /**
     * Replacement for standard HTML input.
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-input--properties
     */
])), function (p) { return p.fluid && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["width: 100%;"], ["width: 100%;"]))); });
/**
 * Replacement for standard HTML input.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-input--properties
 */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(InputStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Input;
}(React.Component));
export { Input };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
