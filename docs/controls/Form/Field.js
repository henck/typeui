import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { Hint } from './Hint';
import { Error } from './Error';
import { Label } from './Label';
import { FormContext } from './FomContext';
import { FieldWrapper } from './FieldWrapper';
class Field extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (value) => {
            // Set state to NOT pristine (but only if still pristine).
            this.setState((prevState) => {
                if (prevState.pristine) {
                    return { pristine: false };
                }
                else {
                    return null;
                }
            });
            this.setState({
                value: value
            });
            this.context.onChange(this.props.name, value, !!this.props.forceupdate);
        };
        this.state = {
            pristine: true,
            // Perform validation immediately
            validation: this.getValidation(this.props.value),
            value: this.props.value
        };
    }
    // Send initial validation on to parent form
    componentDidMount() {
        this.context.onValidate(this.props.name, this.state.validation == null);
    }
    // When field is unmounted, tell parent form that it is valid.
    // Otherwise invalid fields remain in the form's validation state.
    componentWillUnmount() {
        this.context.onValidate(this.props.name, true);
    }
    shouldComponentUpdate(nextProps, nextState) {
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
    }
    // Perform validation after field updates.
    componentDidUpdate(prevProps, prevState) {
        // Do not perform validation if value did not change.
        if (prevState.value == this.state.value)
            return;
        // Perform validation on field.
        const validation = this.getValidation(this.state.value);
        // Only notify parent if validation has changed since last validation.
        if (this.state.validation !== validation) {
            this.setState({ validation: validation });
            this.context.onValidate(this.props.name, validation == null);
        }
    }
    getValidation(value) {
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
    }
    /**
     * Verify that field has a value.
     */
    validateRequired(value) {
        if (typeof value === 'boolean')
            return !!value;
        if (typeof value === 'string')
            return value.trim().length > 0;
        if (typeof value === 'number')
            return true;
        return !!value;
    }
    /**
     * Verify that value is an integer number.
     */
    validateInt(value) {
        if (!value)
            return true;
        const regex = /^[-+]?[0-9]+$/;
        return regex.test(value);
    }
    /*
     * Verify that value is a floating-point number. The default floating
     * point separator is '.' Optionally a different separator can be
     * specified.
     */
    validateFloat(value) {
        if (!value)
            return true;
        let separator = !this.props.isFloat.separator ? '.' : this.props.isFloat.separator;
        const regex = new RegExp(`^[-+]?[0-9]+(\\${separator}[0-9]+)?$`);
        return regex.test(value);
    }
    /**
     * Verify that value has a minimum numerical value.
     */
    validateMin(value) {
        if (!value)
            return true;
        return parseInt(value) >= this.props.min.value;
    }
    /**
     * Verify that value has a maximum numerical value.
     */
    validateMax(value) {
        if (!value)
            return true;
        return parseInt(value) <= this.props.max.value;
    }
    /**
     * Verify that value falls in a numerical range (inclusive).
     */
    validateBetween(value) {
        if (!value)
            return true;
        let num = parseInt(value);
        return num >= this.props.between.min && num <= this.props.between.max;
    }
    /**
     * Verify that value is a string of minimum length.
     */
    validateMinLength(value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars long.
        return value.length >= this.props.minLength.length;
    }
    /**
     * Verify that value is a string of maximum length.
     */
    validateMaxLength(value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at most {max} chars long.
        return value.length <= this.props.maxLength.length;
    }
    /**
     * Verify that value is a string of length between minimum and maximum.
     */
    validateLengthBetween(value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars longs and at most {max} chars long.
        return value.length >= this.props.between.min && value.length <= this.props.between.max;
    }
    /**
     * Verify that value satisfies a pattern.
     */
    validatePattern(value) {
        if (!value)
            return true;
        const regex = new RegExp(this.props.pattern.pattern);
        return regex.test(value);
    }
    /**
     * Verify that value does not satisfy a pattern.
     */
    validateNotPattern(value) {
        if (!value)
            return true;
        const regex = new RegExp(this.props.noPattern.pattern);
        return !regex.test(value);
    }
    /**
     * Verify that values is a valid email address.
     */
    validateEmail(value) {
        if (!value)
            return true;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(value).toLowerCase());
    }
    // Get field control
    getControl(hasError) {
        return React.cloneElement(this.props.control, {
            name: this.props.name,
            onChange: this.handleChange,
            value: this.state.value,
            checked: this.state.value,
            error: hasError,
            disabled: this.props.disabled
        });
    }
    render() {
        const p = this.props;
        const validation = this.state.validation;
        const dirty = this.context.dirty;
        const hasError = (!this.state.pristine || dirty) && validation != null;
        if (p.noWrapper) {
            return this.getControl(hasError);
        }
        return (_jsxs(FieldWrapper, { boxed: p.boxed, width: p.width, error: hasError, children: [this.props.label &&
                    _jsx(Label, { inline: this.props.inline, required: !!this.props.required, noStar: p.noStar, children: this.props.label }), this.getControl(hasError), hasError && validation && _jsx(Error, { contrast: this.props.contrast, children: validation }), !hasError && p.hint && _jsx(Hint, { children: this.props.hint })] }));
    }
}
Field.contextType = FormContext;
export { Field };
