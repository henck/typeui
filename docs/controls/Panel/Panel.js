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
import { CSSTransition } from 'react-transition-group';
import { ThemeConsumer } from 'styled-components';
// Other controls
import { PanelContainer } from './PanelContainer';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';
import { IconPanel } from './IconPanel';
/**
 * Note that a panel determines its position from the position of its direct parent.
 * The parent therefore must have position: relative.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-panel--properties
 */
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        // Handle document-wide mousedown event by sending a panel close event.
        _this.handleClickOutside = function (e) {
            var elem = e.target;
            if (_this.panelElement && !_this.panelElement.contains(elem) && _this.props.open && _this.props.onClose) {
                // A short timeout prevents the panel reopening immediately when its
                // trigger element is clicked.
                setTimeout(function () { return _this.props.onClose(); }, 100);
            }
        };
        _this.handleKeyDown = function (e) {
            if (e.key == 'Escape')
                _this.props.onClose();
        };
        _this.state = {
            anchor: null
        };
        return _this;
    }
    // Listen for document-wide mousedown/keydown events when component mounts.
    Panel.prototype.componentDidMount = function () {
        this.setState({
            anchor: this.panelElement
        });
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    };
    // Clean up document-wide mousedown/keydown events when component unmounts.
    Panel.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    };
    Panel.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { ref: function (el) { return _this.panelElement = el; } },
            React.createElement(ThemeConsumer, null, function (theme) { return React.createElement(CSSTransition, { in: p.open, timeout: theme.transition.duration * 1000 * 3, appear: true, unmountOnExit: true, classNames: "fade" },
                React.createElement(PanelContainer, { noanimation: _this.props.noanimation, anchor: _this.state.anchor, padded: p.padded, width: p.width }, p.children)); })));
    };
    Panel.displayName = "Panel";
    Panel.Header = Header;
    Panel.Content = Content;
    Panel.Footer = Footer;
    /**
     * The Panel.Icon component is a shortcut to building a Panel that opens when an
     * Icon is clicked. Note that the Panel.Icon must still be placed inside a container
     * that is relatively positioned, and that the only way to close the panel is to click
     * outside it.
     *
     * An icon can be passed as an icon type, or as a collection of icon properties.
     */
    Panel.Icon = IconPanel;
    return Panel;
}(React.Component));
Panel.Header.displayName = "Panel.Header";
Panel.Content.displayName = "Panel.Content";
Panel.Footer.displayName = "Panel.Footer";
Panel.Icon.displayName = "Panel.Icon";
export { Panel };
