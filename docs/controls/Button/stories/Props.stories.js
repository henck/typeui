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
import { Button } from '../../Button';
export default {
    title: 'Controls/Button',
    component: Button
};
var Template = function (args) {
    return React.createElement(Button, __assign({}, args), "Button");
};
export var Primary = Template.bind({});
Primary.args = { primary: true };