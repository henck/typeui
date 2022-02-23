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
import styled from '../../styles/Theme';
import { Tab } from './Tab';
import { Underliner } from './Underliner';
var TabBarBase = /** @class */ (function (_super) {
    __extends(TabBarBase, _super);
    function TabBarBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // A Tab child uses callback refs to set the ref to the 
        // current tab. When using callback refs, the ref is the 
        // actual DOM element (not a Ref).
        _this.setTabRef = function (ref) {
            _this.tabRef = ref;
        };
        // The underliner child uses callback refs to set the ref to the 
        // current tab. When using callback refs, the ref is the 
        // actual DOM element (not a Ref).  
        _this.setUnderlinerRef = function (ref) {
            _this.underlinerRef = ref;
        };
        _this.handleMouseDown = function (e) {
            _this.dragging = true;
            // We store the current mouse position on the screen,
            // as well as the current scroll position of the slider.
            _this.mouseX = e.screenX;
            _this.startX = _this.sliderElement.offsetLeft;
        };
        _this.handleMouseMove = function (event) {
            if (!_this.dragging)
                return;
            // Use the current mouse position to determine the
            // new scroll position of the slider.
            var dMouse = event.screenX - _this.mouseX;
            var x = _this.startX + dMouse; // x is always a negative offset.
            // Check scroll bounds:
            if (x > 0)
                x = 0;
            var width = _this.sliderElement.offsetWidth - _this.barElement.offsetWidth;
            if (x < -width)
                x = -width;
            // Apply new scroll position:
            _this.sliderElement.style.left = "".concat(x, "px");
        };
        _this.handleMouseUp = function (event) {
            _this.dragging = false;
        };
        return _this;
    }
    // 
    // For each Pane, create a Tab.
    // 
    TabBarBase.prototype.getTabs = function () {
        var _this = this;
        // Go through panes:
        return React.Children.map(this.props.children, function (child, i) {
            // Callback refs are used to get ref to current tab.
            var ref = i === _this.props.active ? _this.setTabRef : null;
            if (child == null)
                return null;
            return (React.createElement(Tab, { setRef: ref, active: i === _this.props.active, underlined: _this.props.underlined, onClick: _this.props.onTabClicked.bind(_this, i) }, child.props.label));
        });
    };
    TabBarBase.prototype.componentDidMount = function () {
        // Listen for document-wide mouseup/mousemove events when TabBar mounts.
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        // Use refs to tabs to move underliner to initial position.
        if (!this.props.underlined)
            return;
        this.moveUnderliner();
    };
    TabBarBase.prototype.componentWillUnmount = function () {
        // Clean up document-wide mouseup/mousemove events when Dropdown unmounts.
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
    TabBarBase.prototype.componentDidUpdate = function (prevProps) {
        // Use refs to tabs to move underliner to new position.
        if (!prevProps.underlined)
            return;
        this.moveUnderliner();
    };
    // Use refs to move underliner under active tab.
    TabBarBase.prototype.moveUnderliner = function () {
        if (!this.tabRef)
            return;
        var _a = this.tabRef, offsetLeft = _a.offsetLeft, offsetWidth = _a.offsetWidth;
        if (this.underlinerRef) {
            this.underlinerRef.style.left = "".concat(offsetLeft, "px");
            this.underlinerRef.style.width = "".concat(offsetWidth, "px");
        }
    };
    TabBarBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        // The underliner element only appears for underlined tabs.
        var underliner = p.underlined ? React.createElement(Underliner, { setRef: this.setUnderlinerRef }) : null;
        return (React.createElement("div", { className: p.className, ref: function (el) { return _this.barElement = el; } },
            React.createElement("div", { ref: function (el) { return _this.sliderElement = el; }, onMouseDown: this.handleMouseDown },
                this.getTabs(),
                underliner)));
    };
    return TabBarBase;
}(React.Component));
/* Style the tabs bar. Its bottom border is erased by
 * the active tab's bottom border. */
var TabBar = styled(TabBarBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  height: 40px;\n  min-height: 40px;\n  overflow-x: hidden;\n\n  &>div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: auto !important;\n    min-width: 100%;\n    height: 40px;\n    box-sizing: border-box;\n    display: block;\n    border-bottom: solid 1px rgba(35, 35, 35, 0.15);\n  }\n"], ["\n  position: relative;\n  display: block;\n  height: 40px;\n  min-height: 40px;\n  overflow-x: hidden;\n\n  &>div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: auto !important;\n    min-width: 100%;\n    height: 40px;\n    box-sizing: border-box;\n    display: block;\n    border-bottom: solid 1px rgba(35, 35, 35, 0.15);\n  }\n"])));
export { TabBar };
var templateObject_1;
