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
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Header } from '../../controls/Header';
import { List } from '../../controls/List';
import { Image } from '../../controls/Image';
import { Table } from '../../controls/Table';
/*
 * The Markdown formatter takes a markdown string (source) and renders
 * HTML, with TypeUI components thrown in where necessary.
 */
var Markdown = /** @class */ (function (_super) {
    __extends(Markdown, _super);
    function Markdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In order to render <Header> components, we need to know the header level
     * provided by react-markdown and convert it to a Header size.
     */
    Markdown.prototype.headingRenderer = function (props) {
        switch (props.level) {
            case 2: return React.createElement(Header, { size: 'h2' }, props.children);
            case 3: return React.createElement(Header, { size: 'h3' }, props.children);
            case 4: return React.createElement(Header, { size: 'h4' }, props.children);
            case 5: return React.createElement(Header, { size: 'h5' }, props.children);
            case 6: return React.createElement(Header, { size: 'h6' }, props.children);
            default:
                return React.createElement(Header, { size: 'h1' }, props.children);
        }
    };
    /**
     * In order to render <List> components, we need to know if the list is
     * ordered or bulleted. react-markdown provides an ordered:boolean.
     */
    Markdown.prototype.listRenderer = function (props) {
        // Filter out any string children.
        var children = React.Children.toArray(props.children).filter(function (c) { return typeof c !== "string"; });
        return React.createElement(List, { ordered: props.ordered, bulleted: !props.ordered }, children);
    };
    Markdown.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm], components: {
                h1: this.headingRenderer,
                h2: this.headingRenderer,
                h3: this.headingRenderer,
                h4: this.headingRenderer,
                h5: this.headingRenderer,
                h6: this.headingRenderer,
                img: function (_a) {
                    var node = _a.node, props = __rest(_a, ["node"]);
                    return React.createElement(Image, __assign({ size: "medium" }, props), "Image resource not found.");
                },
                ul: this.listRenderer,
                li: function (_a) {
                    var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                    return React.createElement(List.Item, null, children);
                },
                table: function (_a) {
                    var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                    return React.createElement(Table, null, children);
                }
            } }, p.source));
    };
    return Markdown;
}(React.Component));
export { Markdown };
