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
import { css } from 'styled-components';
// Other controls
import { Column } from './Column';
import { DropdownInner } from './DropdownInner';
/*
 * DropdownBase puts a <div> around DropdownInner so that we
 * can add attachable components.
 */
var DropdownBase = /** @class */ (function (_super) {
    __extends(DropdownBase, _super);
    function DropdownBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getItems = function () {
            return React.Children.map(_this.props.children, function (child) {
                // Only Columns are passed to DropdownInner.
                if (child.type && child.type === Column)
                    return child;
            });
        };
        return _this;
    }
    DropdownBase.prototype.isAttachedTo = function (c, side) {
        var attached = c.props.attached;
        return attached === side || (!attached && side === 'left');
    };
    // Return an array of children that are Labels and attached to this
    // Input control.
    DropdownBase.prototype.getAttachables = function (side) {
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
    DropdownBase.prototype.render = function () {
        var _a = this.props, className = _a.className, p = __rest(_a, ["className"]);
        return (React.createElement("div", { className: className },
            this.getAttachables('left'),
            React.createElement(DropdownInner, __assign({}, p), this.getItems()),
            this.getAttachables('right')));
    };
    return DropdownBase;
}(React.Component));
var DropdownStyled = styled(DropdownBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  color:       ", ";\n  /* Dropdown has a minimum width. */\n  width: 250px;\n  /* A fluid Dropdown occupies full horizontal width. */\n  ", "  \n"], ["\n  position:    relative;\n  display:     inline-flex;\n  align-items: stretch;\n  color:       ", ";\n  /* Dropdown has a minimum width. */\n  width: 250px;\n  /* A fluid Dropdown occupies full horizontal width. */\n  ", "  \n"])), function (p) { return p.theme.fontColor; }, function (p) { return p.fluid && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["width: 100%;"], ["width: 100%;"]))); });
/* Dropdown is merely a wrapper that allows us to add static
 * members to Dropdown, which we cannot do for a Styled Component
 * (in TypeScript). */
/**
 * A Dropdown is a replacement for <select> (select). It opens upwards or downwards
 * depending on its position in the viewport. Its selection and dropdown items
 * are formatted using a formatting function. A Dropdown can also take a
 * search callback, which tells provides its subscriber with a search query
 * in order to provide the Dropdown with new items.
 *
 * @example
 * <Dropdown
 *   data={[{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}]}
 *   label={(item: any) => item.name}
 *   placeholder="Select one"
 * >
 *   <Dropdown.Column>{(item: any) => item.name}</Dropdown.Column>
 * </Dropdown>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dropdown--properties
 */
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(DropdownStyled, __assign({}, _this.props)); };
        return _this;
    }
    /**
     * A Dropdown.Column's child is an item formatter function. A column can optionally take
     * a weight and an alignment.
     */
    Dropdown.Column = Column;
    return Dropdown;
}(React.Component));
export { Dropdown };
var templateObject_1, templateObject_2;
