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
// Other controls
import { AccordionTab } from './AccordionTab';
var AccordionBase = /** @class */ (function (_super) {
    __extends(AccordionBase, _super);
    function AccordionBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (idx) {
            if (_this.props.multiple) {
                // Multiple tabs may be open.
                // If clicked tab not in indices, then add it.
                // Otherwise remove it.
                _this.setState(function (prev) {
                    return {
                        indices: prev.indices.indexOf(idx) != -1 ?
                            prev.indices.filter(function (a) { return a != idx; }) :
                            prev.indices.concat([idx])
                    };
                });
            }
            else {
                // Only one tab may be open.
                // Set indices to be just the clicked tab.
                _this.setState({
                    indices: [idx]
                });
            }
        };
        /**
         * Clone Tab children, passing them active, styled and align properties
         * and making them clickable.
         */
        _this.getTabs = function () {
            return React.Children.map(_this.props.children, function (child, i) {
                return React.cloneElement(child, {
                    active: _this.state.indices.indexOf(i) != -1,
                    styled: _this.props.styled,
                    align: _this.props.align,
                    noanimate: _this.props.noanimate,
                    onClick: function () { return _this.handleClick(i); }
                });
            });
        };
        // Take default active panels from props, or use [] is
        // no active panels were specified.
        _this.state = {
            indices: _this.props.active ? _this.props.active : []
        };
        return _this;
    }
    AccordionBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, this.getTabs()));
    };
    return AccordionBase;
}(React.Component));
var AccordionStyled = styled(AccordionBase)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: block;\n\n  /* Margin:\n     Attached accordions have no margin, except bottom-attached. */\n  ", "\n\n  /* Styled has borders. */\n  ", "\n"], ["\n  display: block;\n\n  /* Margin:\n     Attached accordions have no margin, except bottom-attached. */\n  ", "\n\n  /* Styled has borders. */\n  ", "\n"])), function (p) { return (!p.attached || p.attached == 'bottom') && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["margin-bottom: 1em;"], ["margin-bottom: 1em;"]))); }, function (p) { return p.styled && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    /* Shadow: only unattached segments have a dropshadow. */\n    ", "\n    /* A raised (and unattached) Accordion gets an extra deep shadow. */\n    ", "\n\n    /* Attachment and border: */\n    border-color: ", ";\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n\n    /* Not attached: normal border. */\n    ", "\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "  \n  "], ["\n    /* Shadow: only unattached segments have a dropshadow. */\n    ", "\n    /* A raised (and unattached) Accordion gets an extra deep shadow. */\n    ", "\n\n    /* Attachment and border: */\n    border-color: ", ";\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n\n    /* Not attached: normal border. */\n    ", "\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "  \n  "])), !p.attached && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"]))), p.raised && !p.attached && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"]))), p.theme.normalColor, !p.attached && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-radius: ", "px;\n    "], ["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-radius: ", "px;\n    "])), p.theme.radius), p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "], ["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "]))), p.attached === 'top' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "], ["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius), p.attached === 'bottom' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "], ["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius)); });
/**
 * An Accordion is used to group content in panes that can be expanded individually.
 * By default, an Accordion only allows one pane to be open at any time. A multiple
 * Accordion allows users to expand multiple panes.
 *
 * @example
 * <Accordion
 *   styled raised multiple
 *   <Accordion.Tab title="What is a dog?">
 *     <p>A dog is a type of domesticated animal.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="What kinds of dogs are there?">
 *     <p>There are many breeds of dogs.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="How do you acquire a dog?">
 *     <p>From pet shops, private owners, or shelters.</p>
 *   </Accordion.Tab>
 * </Accordion>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-accordion--properties
 */
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accordion.prototype.render = function () {
        var p = this.props;
        return (React.createElement(AccordionStyled, __assign({}, p)));
    };
    Accordion.displayName = "Accordion";
    /**
     * Each accordion tab is an instance of Accordion.Tab.
     *
     * @example
     * <Accordion.Tab title="What is a dog?">
     *   <p>A dog is a type of domesticated animal.</p>
     * </Accordion.Tab>
     */
    Accordion.Tab = AccordionTab;
    return Accordion;
}(React.Component));
export { Accordion, AccordionTab };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
