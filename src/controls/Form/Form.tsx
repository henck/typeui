import * as React from 'react';
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

class Form extends React.Component<IProps, IState> {
  public static Field = Field;
  public static Group = Group;
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
    let p = this.props;
    return (
      <FormContext.Provider value={this.state.providerValue}>
        {p.children}
      </FormContext.Provider>
    );
  }
}

export { Form };