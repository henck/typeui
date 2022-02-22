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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
var AccordionBodyBase = /** @class */ (function (_super) {
    __extends(AccordionBodyBase, _super);
    function AccordionBodyBase(props) {
        var _this = _super.call(this, props) || this;
        // Expand this element.
        // This is done in two steps: 
        // - First, height is set to 0.
        // - Then, repeatedly, height is increased until it reaches scrollHeight.
        // - At the end, height is set to auto and overflow to visible. This is
        //   to allow the AccordionBody to adjust its size when content is added to
        //   it or removed from it.
        _this.expand = function () {
            if (_this.props.noanimate) {
                _this.bodyElement.style.height = "auto";
                _this.bodyElement.style.overflowY = "visible";
            }
            else {
                requestAnimationFrame(function () {
                    _this.bodyElement.style.height = "0px";
                    _this.expandMore();
                });
            }
        };
        _this.expandMore = function () {
            requestAnimationFrame(function () {
                _this.bodyElement.style.height = Math.min(_this.bodyElement.scrollHeight, _this.bodyElement.clientHeight + 30) + 'px';
                if (_this.bodyElement.clientHeight < _this.bodyElement.scrollHeight) {
                    _this.expandMore();
                }
                else {
                    _this.bodyElement.style.height = "auto";
                    _this.bodyElement.style.overflowY = "visible";
                }
            });
        };
        // Collapse this element.
        // This is done in two steps:
        // - First, height is set to scrollHeight.
        // - Then, repeatedly, height is descreased until it reaches 0.
        _this.collapse = function () {
            if (_this.props.noanimate) {
                _this.bodyElement.style.height = "0px";
                _this.bodyElement.style.overflowY = "hidden";
            }
            else {
                requestAnimationFrame(function () {
                    _this.bodyElement.style.height = _this.bodyElement.scrollHeight + "px";
                    _this.bodyElement.style.overflowY = "hidden";
                    _this.collapseMore();
                });
            }
        };
        _this.collapseMore = function () {
            requestAnimationFrame(function () {
                _this.bodyElement.style.height = Math.max(0, _this.bodyElement.clientHeight - 30) + 'px';
                if (_this.bodyElement.clientHeight > 0) {
                    _this.collapseMore();
                }
            });
        };
        _this.state = {
            open: props.active
        };
        return _this;
    }
    AccordionBodyBase.prototype.componentDidUpdate = function (prevProps) {
        // Only expand/collape when active prop changes:
        if (this.props.active == prevProps.active)
            return;
        if (this.props.active) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    AccordionBodyBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className, ref: function (el) { return _this.bodyElement = el; } },
            React.createElement("div", null, p.children)));
    };
    return AccordionBodyBase;
}(React.Component));
var AccordionBody = styled(AccordionBodyBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: ", ";\n  overflow-y: hidden;\n\n  &>div {\n    padding: 4px 0 8px 0;\n  }\n\n  ", "  \n"], ["\n  box-sizing: border-box;\n  height: ", ";\n  overflow-y: hidden;\n\n  &>div {\n    padding: 4px 0 8px 0;\n  }\n\n  ", "  \n"])), function (p) { return p.active ? 'auto' : 0; }, function (p) { return p.styled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &>div {\n      padding: 8px 10px 12px 10px; \n    }\n  "], ["\n    &>div {\n      padding: 8px 10px 12px 10px; \n    }\n  "]))); });
export { AccordionBody };
var templateObject_1, templateObject_2;
