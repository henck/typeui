import * as React from 'react';

// Other controls
import { Field } from './Field';
import { Group } from './Group';
import { Uncontrolled } from './Uncontrolled';
import { FormContext, IFormContext } from './FomContext';

interface IProps {
  children?: React.ReactNode;
  /* Form data. */
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

  // We keep the FormContext provider's value in the state. If we
  // were to put it in the provider's value prop as a literal object,
  // it would be recreated on each render, and that would cause all
  // form fields to rerender on each change.
  // 
  // The provider's value is mostly static, but its dirty value can change.
  // This is handled by componentDidUpdate.
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
class Form extends React.Component<IProps, IState> {
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
  public static Field = Field;

  /** Groups several form fields. */
  public static Group = Group;

  /** 
   * Components may wish to show a control wrapped in a field, without the overhead of 
   * a Form, while still benefiting from Field formatting.
   * 
   * The Uncontrolled element accepts a label and a hint, but no validation rules (and 
   * thus shows no errors). It also does not provide an onChange handler to its control; 
   * the calling code must do that. The field's control is also not provided as a prop, 
   * but as a child. 
   */
  public static Uncontrolled = Uncontrolled;

  // Build a form-wide validation object, with 
  // an entry for each field.
  private validations: Map<string, boolean> = new Map<string, boolean>();

  // The constructor creates a value object for the
  // form context provider, and stores it in the local state.
  constructor(props: IProps) {
    super(props);
    this.state = {
      providerValue: {
        onChange: this.handleChange,
        onValidate: this.handleValidate,
        dirty: this.props.dirty
      }
    }
  }

  componentDidUpdate(prevProps: IProps) {
    // Check if dirty prop has changed. If it has,
    // update the context provider's dirty state to
    // match.
    if(prevProps.dirty != this.props.dirty) {
      this.setState({
        providerValue: {
          onChange: this.handleChange,
          onValidate: this.handleValidate,
          dirty: this.props.dirty
        }
      });
    }
  }

  handleChange = (name:string, value: any, forceupdate: boolean) => {
    // Break up field name into fields:
    // E.g. if name is "investigators[0].name"
    let fields = name.split('.');
    // .. fields will be: 
    // * field[0] = "investigators[0]"
    // * fields[1] = "name"

    // Start off at the main data object:
    let current = this.props.data;
    // Loop through fields:
    fields.forEach((field) => {
      // If field has brackets, then set current to 
      // object that the array index points to:
      let bracketIdx = field.indexOf('[');
      if(bracketIdx != -1) {
        let fieldName = field.substring(0, bracketIdx);
        let index = parseInt(field.substring(bracketIdx+1, field.length-1));
        current = current[fieldName][index];
      } 
      // If there are no brackets (which would be the 
      // case for the last field) then assign the new
      // value to current.
      else {
        current[field] = value;
      }
    });

    // Inform parent of data change:
    this.props.onChange(this.props.data, forceupdate);
  }

  handleValidate = (name: string, valid: boolean) => {
    this.validations.set(name, valid);
    let isValid = true;
    this.validations.forEach((x) => {
      isValid = isValid && x;
    });

    // Parent component is only notified if validation state changes,
    // in order to avoid an infinite loop of updates.
    if(isValid !== this.state.isValid) {
      this.setState({
        isValid: isValid
      })
      this.props.onValidate(isValid);          
    }
  }

  render() {
    return (
      <FormContext.Provider value={this.state.providerValue}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export { Form };