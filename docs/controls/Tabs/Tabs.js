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
// Other controls
import { Pane } from './Pane';
import { Panes } from './Panes';
import { TabBar } from './TabBar';
var TabsBase = /** @class */ (function (_super) {
    __extends(TabsBase, _super);
    function TabsBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Initialize state. Default active tab is tab #0,
        // unless the active prop is passed.
        _this.state = {
            index: _this.props.active ? _this.props.active : 0
        };
        _this.tabClicked = function (idx) {
            _this.setState({ index: idx });
            if (_this.props.onTabChange) {
                _this.props.onTabChange(idx);
            }
        };
        return _this;
    }
    //
    // Clone all the panes, marking the active one.
    // All panes are rendered, because they may contain controls
    // that must be in the DOM. Inactive panes are invisible.
    //
    TabsBase.prototype.getPanes = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child, i) {
            if (child == null)
                return null;
            return React.cloneElement(child, {
                active: i === _this.state.index,
                nohiddenrender: _this.props.nohiddenrender
            });
        });
    };
    TabsBase.prototype.render = function () {
        var p = this.props;
        // - Render tabbar with tabs; state.index determines which one is active.
        //   TabBar is resonsible for rendering the tabs.
        // - Render body. The Tab children are responsible for rendering the body.
        //   Active tab gets props.active, tabs hide body as necessary.
        // Note that React refs are gathered for the active tab and the optional underliner element.
        // These are used for animation.
        return (React.createElement("div", { className: p.className },
            React.createElement(TabBar, { active: this.state.index, onTabClicked: this.tabClicked, underlined: p.underlined }, p.children),
            React.createElement(Panes, { underlined: p.underlined }, this.getPanes())));
    };
    return TabsBase;
}(React.PureComponent));
var TabsStyled = styled(TabsBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"
    /**
     * Collection of tabs.
     *
     * @example
     * <Tabs>
     *   <Tabs.Pane label="One">
     *     Content for first tab.
     *   </Tabs.Pane>
     *   <Tabs.Pane label="Two">
     *     Content for second tab.
     *   </Tabs.Pane>
     *   <Tabs.Pane label="Three">
     *     Content for third tab.
     *   </Tabs.Pane>
     * </Tabs>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-tabs--properties
     */
])));
/**
 * Collection of tabs.
 *
 * @example
 * <Tabs>
 *   <Tabs.Pane label="One">
 *     Content for first tab.
 *   </Tabs.Pane>
 *   <Tabs.Pane label="Two">
 *     Content for second tab.
 *   </Tabs.Pane>
 *   <Tabs.Pane label="Three">
 *     Content for third tab.
 *   </Tabs.Pane>
 * </Tabs>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-tabs--properties
 */
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(TabsStyled, __assign({}, _this.props)); };
        return _this;
    }
    /**
     * A single tab pane.
     *
     * The Pane label can contain arbitrary content.
     * To get the content to vertically align properly, a Flex.Quick can help.
     */
    Tabs.Pane = Pane;
    return Tabs;
}(React.PureComponent));
export { Tabs };
var templateObject_1;
