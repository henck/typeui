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
import { css } from 'styled-components';
// Other controls
import { Hint } from './Hint';
import { Error } from './Error';
import { Label } from './Label';
import { FormContext } from './FomContext';
var FieldBase = /** @class */ (function (_super) {
    __extends(FieldBase, _super);
    function FieldBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (value) {
            // Set state to NOT pristine (but only if still pristine).
            _this.setState(function (prevState) {
                if (prevState.pristine) {
                    return { pristine: false };
                }
                else {
                    return null;
                }
            });
            _this.setState({
                value: value
            });
            _this.context.onChange(_this.props.name, value, !!_this.props.forceupdate);
        };
        // Get field's label element, if any.
        _this.getLabel = function () {
            if (_this.props.label)
                return (React.createElement(Label, { inline: _this.props.inline, required: !!_this.props.required }, _this.props.label));
            return null;
        };
        _this.getHint = function () {
            return (React.createElement(Hint, null, _this.props.hint));
        };
        _this.state = {
            pristine: true,
            // Perform validation immediately
            validation: _this.getValidation(_this.props.value),
            value: _this.props.value
        };
        // Create static nodes:
        _this.labelNode = _this.getLabel();
        _this.hintNode = _this.getHint();
        return _this;
    }
    // Send initial validation on to parent form
    FieldBase.prototype.componentDidMount = function () {
        this.context.onValidate(this.props.name, this.state.validation == null);
    };
    // When field is unmounted, tell parent form that it is valid.
    // Otherwise invalid fields remain in the form's validation state.
    FieldBase.prototype.componentWillUnmount = function () {
        this.context.onValidate(this.props.name, true);
    };
    FieldBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextProps.value != this.props.value) {
            // Value prop has changed.
            // Assign new value prop to state prop.
            this.setState({ value: nextProps.value });
            return true;
        }
        if (nextProps.control != this.props.control)
            return true;
        if (nextProps.disabled != this.props.disabled)
            return true;
        if (nextState.value != this.state.value)
            return true;
        if (nextState.validation != this.state.validation)
            return true;
        return false;
    };
    // Perform validation after field updates.
    FieldBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // Do not perform validation if value did not change.
        if (prevState.value == this.state.value)
            return;
        // Perform validation on field.
        var validation = this.getValidation(this.state.value);
        // Only notify parent if validation has changed since last validation.
        if (this.state.validation !== validation) {
            this.setState({ validation: validation });
            this.context.onValidate(this.props.name, validation == null);
        }
    };
    FieldBase.prototype.getValidation = function (value) {
        if (this.props.required != null) {
            if (!this.validateRequired(value))
                return this.props.required.message;
        }
        if (this.props.isInt != null) {
            if (!this.validateInt(value))
                return this.props.isInt.message;
        }
        if (this.props.isFloat != null) {
            if (!this.validateFloat(value))
                return this.props.isFloat.message;
        }
        if (this.props.min != null) {
            if (!this.validateMin(value))
                return this.props.min.message;
        }
        if (this.props.max != null) {
            if (!this.validateMax(value))
                return this.props.max.message;
        }
        if (this.props.between != null) {
            if (!this.validateBetween(value))
                return this.props.between.message;
        }
        if (this.props.minLength != null) {
            if (!this.validateMinLength(value))
                return this.props.minLength.message;
        }
        if (this.props.maxLength != null) {
            if (!this.validateMaxLength(value))
                return this.props.maxLength.message;
        }
        if (this.props.lengthBetween != null) {
            if (!this.validateLengthBetween(value))
                return this.props.lengthBetween.message;
        }
        if (this.props.pattern != null) {
            if (!this.validatePattern(value))
                return this.props.pattern.message;
        }
        if (this.props.noPattern != null) {
            if (!this.validateNotPattern(value))
                return this.props.noPattern.message;
        }
        if (this.props.email != null) {
            if (!this.validateEmail(value))
                return this.props.email.message;
        }
        return null;
    };
    /**
     * Verify that field has a value.
     */
    FieldBase.prototype.validateRequired = function (value) {
        if (typeof value === 'boolean')
            return !!value;
        if (typeof value === 'string')
            return value.trim().length > 0;
        if (typeof value === 'number')
            return true;
        return !!value;
    };
    /**
     * Verify that value is an integer number.
     */
    FieldBase.prototype.validateInt = function (value) {
        if (!value)
            return true;
        var regex = /^[-+]?[0-9]+$/;
        return regex.test(value);
    };
    /*
     * Verify that value is a floating-point number. The default floating
     * point separator is '.' Optionally a different separator can be
     * specified.
     */
    FieldBase.prototype.validateFloat = function (value) {
        if (!value)
            return true;
        var separator = !this.props.isFloat.separator ? '.' : this.props.isFloat.separator;
        var regex = new RegExp("^[-+]?[0-9]+(\\".concat(separator, "[0-9]+)?$"));
        return regex.test(value);
    };
    /**
     * Verify that value has a minimum numerical value.
     */
    FieldBase.prototype.validateMin = function (value) {
        if (!value)
            return true;
        return parseInt(value) >= this.props.min.value;
    };
    /**
     * Verify that value has a maximum numerical value.
     */
    FieldBase.prototype.validateMax = function (value) {
        if (!value)
            return true;
        return parseInt(value) <= this.props.max.value;
    };
    /**
     * Verify that value falls in a numerical range (inclusive).
     */
    FieldBase.prototype.validateBetween = function (value) {
        if (!value)
            return true;
        var num = parseInt(value);
        return num >= this.props.between.min && num <= this.props.between.max;
    };
    /**
     * Verify that value is a string of minimum length.
     */
    FieldBase.prototype.validateMinLength = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars long.
        return value.length >= this.props.minLength.length;
    };
    /**
     * Verify that value is a string of maximum length.
     */
    FieldBase.prototype.validateMaxLength = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at most {max} chars long.
        return value.length <= this.props.maxLength.length;
    };
    /**
     * Verify that value is a string of length between minimum and maximum.
     */
    FieldBase.prototype.validateLengthBetween = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars longs and at most {max} chars long.
        return value.length >= this.props.between.min && value.length <= this.props.between.max;
    };
    /**
     * Verify that value satisfies a pattern.
     */
    FieldBase.prototype.validatePattern = function (value) {
        if (!value)
            return true;
        var regex = new RegExp(this.props.pattern.pattern);
        return regex.test(value);
    };
    /**
     * Verify that value does not satisfy a pattern.
     */
    FieldBase.prototype.validateNotPattern = function (value) {
        if (!value)
            return true;
        var regex = new RegExp(this.props.noPattern.pattern);
        return !regex.test(value);
    };
    /**
     * Verify that values is a valid email address.
     */
    FieldBase.prototype.validateEmail = function (value) {
        if (!value)
            return true;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(value).toLowerCase());
    };
    // Get field control
    FieldBase.prototype.getControl = function (hasError) {
        return React.cloneElement(this.props.control, {
            name: this.props.name,
            onChange: this.handleChange,
            value: this.state.value,
            checked: this.state.value,
            error: hasError,
            disabled: this.props.disabled
        });
    };
    FieldBase.prototype.render = function () {
        var p = this.props;
        var validation = this.state.validation;
        var dirty = this.context.dirty;
        var hasError = (!this.state.pristine || dirty) && validation != null;
        return (React.createElement("div", { className: p.className },
            this.labelNode,
            this.getControl(hasError),
            hasError && React.createElement(Error, { contrast: this.props.contrast }, validation),
            !hasError && p.hint && this.hintNode));
    };
    FieldBase.contextType = FormContext;
    return FieldBase;
}(React.Component));
var FieldStyled = styled(FieldBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-bottom: 8px;\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"], ["\n  padding-bottom: 8px;\n  \n  /* Fields may provide their width in relative units to other fields. */\n  ", "\n"])), function (p) { return p.width && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["flex: ", ""], ["flex: ", ""])), p.width); });
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var p = this.props;
        return (React.createElement(FieldStyled, __assign({}, p)));
    };
    return Field;
}(React.Component));
export { Field };
var templateObject_1, templateObject_2;
