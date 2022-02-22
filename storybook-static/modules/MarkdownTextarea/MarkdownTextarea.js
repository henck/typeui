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
import styled from '../../styles/Theme';
import { Textarea } from '../../controls/Textarea';
import { Segment } from '../../controls/Segment';
import { Tabs } from '../../controls/Tabs';
import { Markdown } from '../../formatters/Markdown';
var MarkdownTextarea = /** @class */ (function (_super) {
    __extends(MarkdownTextarea, _super);
    function MarkdownTextarea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabChange = function (index) {
            _this.setState({ tabIndex: index });
        };
        _this.state = {
            tabIndex: 0
        };
        return _this;
    }
    MarkdownTextarea.prototype.render = function () {
        var _a = this.props, className = _a.className, label_text = _a.label_text, label_preview = _a.label_preview, label_markdown = _a.label_markdown, textAreaProps = __rest(_a, ["className", "label_text", "label_preview", "label_markdown"]);
        return (React.createElement("div", { className: className },
            React.createElement(Segment, { tight: true, attached: "top" },
                React.createElement(Tabs, { underlined: true, onTabChange: this.handleTabChange },
                    React.createElement(Tabs.Pane, { label: label_text ? label_text : 'Text' }),
                    React.createElement(Tabs.Pane, { label: label_preview ? label_preview : 'Preview' })),
                React.createElement("div", { style: { position: 'relative' } },
                    React.createElement("div", { style: { overflow: 'hidden', width: this.state.tabIndex == 0 ? '100%' : '1px' } },
                        React.createElement(Textarea, __assign({ monospaced: true, fluid: true, transparent: true }, textAreaProps))),
                    this.state.tabIndex == 1 &&
                        React.createElement(Scrollable, { rows: this.props.rows },
                            React.createElement(Markdown, { source: textAreaProps.value })))),
            React.createElement(Segment, { tight: true, secondary: true, attached: "bottom" },
                React.createElement(Options, null,
                    React.createElement("a", { target: "_blank", href: "https://www.markdownguide.org/" }, "Markdown"),
                    " ",
                    label_markdown ? label_markdown : 'is supported'))));
    };
    return MarkdownTextarea;
}(React.Component));
var ScrollableBase = /** @class */ (function (_super) {
    __extends(ScrollableBase, _super);
    function ScrollableBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollableBase.prototype.render = function () {
        var p = this.props;
        return React.createElement("div", { className: p.className }, p.children);
    };
    return ScrollableBase;
}(React.Component));
var Scrollable = styled(ScrollableBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: none;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: none;\n"])));
var Options = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 9px;\n  a { \n    color: steelblue; \n    text-decoration: none;\n  }\n"], ["\n  font-size: 9px;\n  a { \n    color: steelblue; \n    text-decoration: none;\n  }\n"])));
export { MarkdownTextarea };
var templateObject_1, templateObject_2;
