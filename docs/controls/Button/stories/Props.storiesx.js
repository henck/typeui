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
import { Button } from '../../Button/Button';
import { Icon } from '../../Icon';
export default {
    title: 'Controls/ButtonOld',
    component: Button,
    argTypes: {
        // Hide classname arg
        className: {
            table: { disable: true }
        },
        // Hide grouped arg
        grouped: {
            table: { disable: true }
        }
    }
};
var Template = function (args) {
    return React.createElement(Button, __assign({}, args), "Button");
};
export var Props = Template.bind({});
export var Emphasis = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, __assign({ primary: true }, args), "Primary"),
    React.createElement(Button, __assign({ secondary: true }, args), "Secondary"))); };
Emphasis.parameters = { docs: { description: { story: "A button can be be formatted to show different levels of emphasis: `primary` and `secondary`."
        } } };
export var PositiveNegative = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, __assign({ positive: true }, args), "Positive"),
    React.createElement(Button, __assign({ negative: true }, args), "Negative"))); };
PositiveNegative.storyName = "Positive and Negative";
PositiveNegative.parameters = { docs: { description: { story: "A button can hint toward a `positive` or `negative` consequence."
        } } };
export var Circular = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, __assign({ circular: true }, args),
        React.createElement(Icon, { name: "circle" })),
    React.createElement(Button, __assign({ circular: true, color: "tan" }, args),
        React.createElement(Icon, { name: "unlock" })),
    React.createElement(Button, __assign({ basic: true, circular: true, icon: true }, args),
        React.createElement(Icon, { name: "bullhorn" })))); };
Circular.parameters = { docs: { description: { story: "A button can be `circular`. Note that this implies the icon attribute."
        } } };
export var Color = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { color: 'orange' }, "Orange"),
    React.createElement(Button, { color: "brown" }, "Brown"))); };
Color.parameters = { docs: { description: { story: "A button can have a different `color`."
        } } };
export var Size = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { size: 'mini' }, "Mini"),
    React.createElement(Button, { size: 'tiny' }, "Tiny"),
    React.createElement(Button, { size: 'small' }, "Small"),
    React.createElement(Button, { size: 'medium' }, "Medium"),
    React.createElement(Button, { size: 'large' }, "Large"),
    React.createElement(Button, { size: 'big' }, "Big"),
    React.createElement(Button, { size: 'huge' }, "Huge"),
    React.createElement(Button, { size: 'massive' }, "Massive"))); };
Size.parameters = { docs: { description: { story: "A button can have different sizes."
        } } };
export var Compact = function (args) { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { compact: true, size: 'mini' }, "Mini"),
    React.createElement(Button, { compact: true, size: 'tiny' }, "Tiny"),
    React.createElement(Button, { compact: true, size: 'small' }, "Small"),
    React.createElement(Button, { compact: true, size: 'medium' }, "Medium"),
    React.createElement(Button, { compact: true, size: 'large' }, "Large"),
    React.createElement(Button, { compact: true, size: 'big' }, "Big"),
    React.createElement(Button, { compact: true, size: 'huge' }, "Huge"),
    React.createElement(Button, { compact: true, size: 'massive' }, "Massive"))); };
Compact.parameters = { docs: { description: { story: "A `compact` button has less padding."
        } } };
