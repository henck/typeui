import * as React from 'react';
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
}
declare class Field extends React.Component<IProps, {}> {
    render: () => JSX.Element;
}
export { Field };
