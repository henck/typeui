import * as React from 'react';
import { Field } from './Field';
import { Group } from './Group';
import { Uncontrolled } from './Uncontrolled';
import { IFormContext } from './FomContext';
interface IProps {
    children?: React.ReactNode;
    data: any;
    /** Called whenever form data changes. */
    onChange: (data: any, forceupdate: boolean) => void;
    /** Called whenever a field validates. Returns validation state for whole form. */
    onValidate: (valid: boolean) => void;
    /**
     * When a form is dirty, it shows all validation errors, even
     * on pristine fields.
     * @default false
     */
    dirty?: boolean;
}
interface IState {
    isValid?: boolean;
    providerValue: IFormContext;
}
/**
 * The Form element must be used to wrap all forms. All controls inside a form must
 * be wrapped in Form.Field elements.
 *
 * The data that must be shown in the form is provided through the data prop, which
 * should be an object.
 *
 * Form uses Context to set onChange and onValidate handlers on all Field elements inside
 * the form, whatever their nesting depth. When form data is changed, onChange is fired
 * with the new form content.
 *
 * The Field element keeps its own state so that updates to the form are reflected without
 * changing the form's data prop. This way, should a caller of Form choose to, they may
 * update the form data only when required (such as when setting the dirty flag), which
 * avoid rerendering all form elements on every interaction.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-form--properties
 */
declare class Form extends React.Component<IProps, IState> {
    /**
     * A Form.Field wraps a form control. It serves several purposes.
     *
     * First, the Field automatically adds name, onChange, value and error props
     * to the control it contains. The onChange prop is supplied by the Form content
     * so that the developer does not need to add it.
     *
     * Second, the Field performs validation when it is mounted, whenever its control's
     * value changes, and when it is unmounted. Validation results are send directly to
     * the parent Form (using Context, again).
     *
     * A Field may add any number of validation rules, e.g. required=. Each rule is a
     * prop. Rules include rquired, isInt, minLength etc. When a field is first mounted,
     * it is pristine. Even when its content is invalid, it will not show any validation
     * error. When the user edits the fields, it will no longer be pristine and any errors
     * will appear. The parent Form also provides a dirty prop to the Field. When the
     * Form is dirty, so are its fields, and any validation errors are shown, pristine or not.
     *
     * For dark backgrounds, fields may set their contrast prop to true to use lighter
     * error colors.
     */
    static Field: typeof Field;
    /** Groups several form fields. */
    static Group: typeof Group;
    /**
     * Components may wish to show a control wrapped in a field, without the overhead of
     * a Form, while still benefiting from Field formatting.
     *
     * The Uncontrolled element accepts a label and a hint, but no validation rules (and
     * thus shows no errors). It also does not provide an onChange handler to its control;
     * the calling code must do that. The field's control is also not provided as a prop,
     * but as a child.
     */
    static Uncontrolled: typeof Uncontrolled;
    private validations;
    constructor(props: IProps);
    componentDidUpdate(prevProps: IProps): void;
    handleChange: (name: string, value: any, forceupdate: boolean) => void;
    handleValidate: (name: string, valid: boolean) => void;
    render(): JSX.Element;
}
export { Form };
