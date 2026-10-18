import * as React from 'react';
import { IFormContext } from './FomContext';
interface ISimpleValidation {
    message: React.ReactNode;
}
interface IFloatValidation {
    separator?: string;
    message: React.ReactNode;
}
interface IValueValidation {
    value: number;
    message: React.ReactNode;
}
interface IBetweenValidation {
    min: number;
    max: number;
    message: React.ReactNode;
}
interface ILengthValidation {
    length: number;
    message: React.ReactNode;
}
interface IPatternValidation {
    pattern: string;
    message: React.ReactNode;
}
interface IProps {
    /** @ignore */
    className?: string;
    /**
     * Place label inline with field control.
     * @default false
     */
    inline?: boolean;
    /** Relative width of field. If not set, field will not flex to fill available width. */
    width?: number;
    /** Label to show by field. Can be JSX. */
    label?: React.ReactNode;
    /** Field name. Required.  */
    name: string;
    /** Field value. Required. */
    value: any;
    /**
     * Disabled is passed on to control.
     * @default false
     */
    disabled?: boolean;
    /** Hint to be shown when there is no error. Can be JSX. */
    hint?: React.ReactNode;
    /**
     * If true, error messages have more contrast (for dark backgrounds)
     * @default false
     */
    contrast?: boolean;
    /**
     * If true, display no asterisk for required fields.
     */
    noStar?: boolean;
    /**
     * If true, field has a boxed appearance. This places a border around the
     * field, which is clickable and moves focus to the contained control.
     */
    boxed?: boolean;
    /** Control to show in field. */
    control: React.ReactNode;
    /**
     * If true, a change to this field forces the whole form to update.
     * @default false
     */
    forceupdate?: boolean;
    /**
     * Required validation. Field must be filled lut.
     *
     * @example
     * <Field ... required={{message: "Required field"}}>
     */
    required?: ISimpleValidation;
    /**
     * Integer validation.
     *
     * @example
     * <Field ... isInt={{message: "Must be an integer value"}}>
     */
    isInt?: ISimpleValidation;
    /**
     * Float validation.
     *
     * @example
     * <Field ... isFloat={{message: "Must be a float value"}}>
     */
    isFloat?: IFloatValidation;
    /**
     * Minimum number value validation.
     *
     * @example
     * <Field ... min={{value:3, message: "Must be at least 3."}}>
     */
    min?: IValueValidation;
    /**
     * Maximum number value validation.
     *
     * @example
     * <Field ... max={{value:100, message: "Must be at most 100."}}>
     */
    max?: IValueValidation;
    /**
     * Between numbers valdation.
     *
     * @example
     * <Field ... between={{min:3, max:25, message: "Must be 3..25 inclusive"}}>
     */
    between?: IBetweenValidation;
    /**
     * String length range validation.
     *
     * @example
     * <Field ... lengthBetween={{min: 3, max: 25; message: "Must be 3..25 characters."}}>
     */
    lengthBetween?: IBetweenValidation;
    /**
     * String length minimum validation.
     *
     * @example
     * <Field ... minLength={{length: 3, message: "Must be at least 3 characters."}}>
     */
    minLength?: ILengthValidation;
    /**
     * String length maximum validation.
     *
     * @example
     * <Field ... maxLength={{length: 25, message: "Must be no more than 25 characters."}}>
     */
    maxLength?: ILengthValidation;
    /**
     * Pattern validation.
     *
     * @example
     * <Field ... pattern={{pattern: "a+", message: "Must have pattern a+"}}>
     */
    pattern?: IPatternValidation;
    /**
     * Negative pattern validation.
     *
     * @example
     * <Field ... noPattern={{pattern: "a+", message: "Must NOT have pattern a+"}}>
     */
    noPattern?: IPatternValidation;
    /**
     * Email validation.
     *
     * @example
     * <Field ... email={{message: "Must be a valid email address."}}>
     */
    email?: ISimpleValidation;
    /**
     * If set, this Field is rendered without any embellishments: no label,
     * no hint, no wrapper. This is useful for controls that must behave like
     * a Field (i.e. work with a Form to get their `value` and `onChange` set),
     * but mustn't look like one.
     */
    noWrapper?: boolean;
}
interface IState {
    pristine: boolean;
    validation: React.ReactNode;
    value: any;
}
declare class Field extends React.Component<IProps, IState> {
    static contextType: React.Context<IFormContext>;
    constructor(props: IProps);
    handleChange: (value: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    componentDidUpdate(prevProps: IProps, prevState: IState): void;
    getValidation(value: any): React.ReactNode;
    /**
     * Verify that field has a value.
     */
    validateRequired(value: any): boolean;
    /**
     * Verify that value is an integer number.
     */
    validateInt(value: any): boolean;
    validateFloat(value: any): boolean;
    /**
     * Verify that value has a minimum numerical value.
     */
    validateMin(value: any): boolean;
    /**
     * Verify that value has a maximum numerical value.
     */
    validateMax(value: any): boolean;
    /**
     * Verify that value falls in a numerical range (inclusive).
     */
    validateBetween(value: any): boolean;
    /**
     * Verify that value is a string of minimum length.
     */
    validateMinLength(value: any): boolean;
    /**
     * Verify that value is a string of maximum length.
     */
    validateMaxLength(value: any): boolean;
    /**
     * Verify that value is a string of length between minimum and maximum.
     */
    validateLengthBetween(value: any): boolean;
    /**
     * Verify that value satisfies a pattern.
     */
    validatePattern(value: any): boolean;
    /**
     * Verify that value does not satisfy a pattern.
     */
    validateNotPattern(value: any): boolean;
    /**
     * Verify that values is a valid email address.
     */
    validateEmail(value: any): boolean;
    getControl(hasError: boolean): React.DetailedReactHTMLElement<{
        name: string;
        onChange: (value: any) => void;
        value: any;
        checked: any;
        error: boolean;
        disabled: boolean;
    }, HTMLElement>;
    render(): React.JSX.Element;
}
export { Field };
