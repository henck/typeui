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
import { Content } from './Content';
import { Header } from './Header';
import { Meta } from './Meta';
import { lighten } from '../../helper/lighten';
var CardBase = /** @class */ (function (_super) {
    __extends(CardBase, _super);
    function CardBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick }, p.children));
    };
    return CardBase;
}(React.Component));
var CardStyled = styled(CardBase)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  flex: 1;\n  position: relative;\n  width: ", ";\n  margin-top: 5px;\n  margin-bottom: 10px;\n  margin-right: 16px;\n\n  text-align: left; /* Undo parent text-align */\n  overflow: hidden; /* Make child elements follow card's rounded corners */\n  \n  /* Colors */\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  ", "\n  ", "\n\n  ", "\n"], ["\n  display: inline-block;\n  flex: 1;\n  position: relative;\n  width: ", ";\n  margin-top: 5px;\n  margin-bottom: 10px;\n  margin-right: 16px;\n\n  text-align: left; /* Undo parent text-align */\n  overflow: hidden; /* Make child elements follow card's rounded corners */\n  \n  /* Colors */\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  ", "\n  ", "\n\n  ", "\n"
    /**
     * A Card groups information with an optional header and footer.
     *
     * @example
     * <Card fluid onClick={() => ...)}>
     *   <Card.Header>Card header</Card.Header>
     *   <Card.Meta>Meta content</Card.Meta>
     *   <Card.Content>
     *     Main content of the Card goes into a Card.Content element.
     *   </Card.Content>
     *   <Card.Content secondary>
     *     Secondary content has the secondary attribute set.
     *   </Card.Content>
     * </Card>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-card--properties
     */
])), function (p) { return p.fluid ? '100%' : '292px'; }, function (p) { return lighten(0.05, p.theme.background); }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return !p.raised && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"]))); }, function (p) { return p.raised && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"]))); }, function (p) { return p.onClick && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    cursor: pointer;\n    transition: margin ", "s ease,\n                box-shadow ", "s ease;\n    &:hover {\n      margin-top: 3px;\n      margin-bottom: 12px;\n      ", "\n      ", "\n    }\n  "], ["\n    cursor: pointer;\n    transition: margin ", "s ease,\n                box-shadow ", "s ease;\n    &:hover {\n      margin-top: 3px;\n      margin-bottom: 12px;\n      ", "\n      ", "\n    }\n  "])), p.theme.transition.duration, p.theme.transition.duration, !p.raised && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.3) 0px 2px 3px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.3) 0px 2px 3px 0px;"]))), p.raised && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.24) 0px 2px 4px 0px, rgba(34, 36, 38, 0.3) 0px 2px 10px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.24) 0px 2px 4px 0px, rgba(34, 36, 38, 0.3) 0px 2px 10px 0px;"])))); });
/**
 * A Card groups information with an optional header and footer.
 *
 * @example
 * <Card fluid onClick={() => ...)}>
 *   <Card.Header>Card header</Card.Header>
 *   <Card.Meta>Meta content</Card.Meta>
 *   <Card.Content>
 *     Main content of the Card goes into a Card.Content element.
 *   </Card.Content>
 *   <Card.Content secondary>
 *     Secondary content has the secondary attribute set.
 *   </Card.Content>
 * </Card>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-card--properties
 */
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement(CardStyled, __assign({}, this.props)));
    };
    Card.displayName = 'Card';
    /** A Card can have a Card.Header element. */
    Card.Header = Header;
    /** A Card can have a Card.Meta element. */
    Card.Meta = Meta;
    /** A Card can have any number of Card.Content elements inside it. */
    Card.Content = Content;
    return Card;
}(React.Component));
Card.Header.displayName = "Card.Header";
Card.Meta.displayName = "Card.Meta";
Card.Content.displayName = "Card.Content";
export { Card };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
