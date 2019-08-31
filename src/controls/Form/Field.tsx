import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Hint } from './Hint';
import { Error } from './Error';
import { Label } from './Label';
import { FormContext, IFormContext } from './FomContext';

interface ISimpleValidation {
  message: string;
}

interface IFloatValidation {
  separator?: string;
  message: string;
}

interface IValueValidation {
  value: number;
  message: string;
}

interface IBetweenValidation {
  min: number;
  max: number;
  message: string;
}

interface ILengthValidation {
  length: number;
  message: string;
}

interface IPatternValidation {
  pattern: string;
  message: string;
}

interface IProps {
  className?: string;
  /** Place label inline with field control. */
  inline?: boolean;
  /** Relative width of field. If not set, field will not flex to fill available width. */
  width?: number;  
  /** Label to show by field. */
  label?: string;
  /** Field name. Required.  */
  name: string;
  /** Field value. Required. */
  value: any;
  /** Hint to be shown when there is no error. */
  hint?: React.ReactNode;
  /** If true, error messages have more contrast (for dark backgrounds) */
  contrast?: boolean;  
  /** Control to show in field */
  control: React.ReactNode;
  /**
   * If true, a change to this field forces the whole form to update.
   */
  forceupdate?: boolean;

  // Validation
  required?: ISimpleValidation;
  isInt?: ISimpleValidation;
  isFloat?: IFloatValidation;
  min?: IValueValidation;
  max?: IValueValidation;
  between?: IBetweenValidation;
  lengthBetween?: IBetweenValidation;
  minLength?: ILengthValidation;
  maxLength?: ILengthValidation;
  pattern?: IPatternValidation;
  noPattern?: IPatternValidation;
  email?: ISimpleValidation;
}

interface IState {
  pristine: boolean;
  validation: string;
  value: any;
}

class FieldBase extends React.Component<IProps, IState> {

  public static contextType = FormContext;

  // Static nodes (contents never change):
  private labelNode: React.ReactNode;
  private hintNode: React.ReactNode;

  constructor(props: IProps) {
    super(props);
    this.state = {
      pristine: true,
      // Perform validation immediately
      validation: this.getValidation(this.props.value),
      value: this.props.value
    };

    // Create static nodes:
    this.labelNode = this.getLabel();
    this.hintNode = this.getHint();
  }

  handleChange = (value: any) => {
    // Set state to NOT pristine (but only if still pristine).
    this.setState((prevState) => {
      if(prevState.pristine) {
        return { pristine: false };
      } else {
        return null;
      }
    });
    this.setState({ 
      value: value
    });
    (this.context as IFormContext).onChange(this.props.name, value, !!this.props.forceupdate);
  }

  // Send initial validation on to parent form
  componentDidMount() {
    (this.context as IFormContext).onValidate(this.props.name, this.state.validation == null);
  }

  // When field is unmounted, tell parent form that it is valid.
  // Otherwise invalid fields remain in the form's validation state.
  componentWillUnmount() {
    (this.context as IFormContext).onValidate(this.props.name, true);
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    if(nextProps.value != this.props.value) {
      // Value prop has changed.
      // Assign new value prop to state prop.
      this.setState({ value: nextProps.value });
      return true;
    }
    if(nextProps.control != this.props.control) return true;
    if(nextState.value != this.state.value) return true;
    if(nextState.validation != this.state.validation) return true;
    return false;
  }

  // Perform validation after field updates.
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // Do not perform validation if value did not change.
    if(prevState.value == this.state.value) return;
    // Perform validation on field.
    let validation = this.getValidation(this.state.value);
    // Only notify parent if validation has changed since last validation.
    if(this.state.validation !== validation) {
      this.setState({ validation: validation });
      (this.context as IFormContext).onValidate(this.props.name, validation == null);
    }
  }

  getValidation(value: any): string {
    if(this.props.required != null) {
      if(!this.validateRequired(value)) return this.props.required.message;
    }
    if(this.props.isInt != null) {
      if(!this.validateInt(value)) return this.props.isInt.message;
    }
    if(this.props.isFloat != null) {
      if(!this.validateFloat(value)) return this.props.isFloat.message;
    }    
    if(this.props.min != null) {
      if(!this.validateMin(value)) return this.props.min.message;
    }
    if(this.props.max != null) {
      if(!this.validateMax(value)) return this.props.max.message;
    }
    if(this.props.between != null) {
      if(!this.validateBetween(value)) return this.props.between.message;
    }
    if(this.props.minLength != null) {
      if(!this.validateMinLength(value)) return this.props.minLength.message;
    }
    if(this.props.maxLength != null) {
      if(!this.validateMaxLength(value)) return this.props.maxLength.message;
    }    
    if(this.props.between != null) {
      if(!this.validateLengthBetween(value)) return this.props.lengthBetween.message;
    }
    if(this.props.pattern != null) {
      if(!this.validatePattern(value)) return this.props.pattern.message;
    }
    if(this.props.noPattern != null) {
      if(!this.validateNotPattern(value)) return this.props.noPattern.message;
    } 
    if(this.props.email != null) {
      if(!this.validateEmail(value)) return this.props.email.message;
    }   
    return null;
  }

  /**
   * Verify that field has a value.
   */
  validateRequired(value: any): boolean {
    if(typeof value === 'boolean') return !!value;
    if(typeof value === 'string') return value.trim().length > 0;
    if(typeof value === 'number') return true;
    return !!value;        
  }

  /**
   * Verify that value is an integer number.
   */  
  validateInt(value: any): boolean {
    if(!value) return true;
    const regex = /^[-+]?[0-9]+$/;
    return regex.test(value);    
  }

  /*
   * Verify that value is a floating-point number. The default floating
   * point separator is '.' Optionally a different separator can be 
   * specified.
   */  
  validateFloat(value: any): boolean {
    if(!value) return true;
    let separator = !this.props.isFloat.separator ? '.' : this.props.isFloat.separator;
    const regex = new RegExp(`^[-+]?[0-9]+(\\${separator}[0-9]+)?$`);
    return regex.test(value);    
  }

  /**
   * Verify that value has a minimum numerical value.
   */
  validateMin(value: any): boolean {
    if(!value) return true;
    return parseInt(value) >= this.props.min.value;
  }  

  /**
   * Verify that value has a maximum numerical value.
   */
  validateMax(value: any): boolean {
    if(!value) return true;
    return parseInt(value) <= this.props.max.value;
  }   

  /**
   * Verify that value falls in a numerical range (inclusive).
   */  
  validateBetween(value: any): boolean {
    if(!value) return true;
    let num = parseInt(value);
    return num >= this.props.between.min && num <= this.props.between.max;
  }  

  /**
   * Verify that value is a string of minimum length.
   */  
  validateMinLength(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at least {min} chars long.
    return value.length >= this.props.minLength.length;
  }

  /**
   * Verify that value is a string of maximum length.
   */    
  validateMaxLength(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at most {max} chars long.
    return value.length <= this.props.maxLength.length;    
  }

  /**
   * Verify that value is a string of length between minimum and maximum.
   */    
  validateLengthBetween(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at least {min} chars longs and at most {max} chars long.
    return value.length >= this.props.between.min && value.length <= this.props.between.max;
  }

  /**
   * Verify that value satisfies a pattern.
   */  
  validatePattern(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;    
    const regex = new RegExp(this.props.pattern.pattern);
    return regex.test(value);    
  }

  /**
   * Verify that value does not satisfy a pattern.
   */
  validateNotPattern(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;    
    const regex = new RegExp(this.props.noPattern.pattern);
    return !regex.test(value);    
  }    

  /**
   * Verify that values is a valid email address.
   */  
  validateEmail(value: any): boolean {
    if(!value) return true;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());    
  }

  // Get field control
  getControl(hasError: boolean) {
    return React.cloneElement(this.props.control as any, {
      name: this.props.name,
      onChange: this.handleChange,
      value: this.state.value,
      checked: this.state.value,
      error: hasError
    });
  }

  // Get field's label element, if any.
  private getLabel = () => {
    if(this.props.label) 
      return (<Label inline={this.props.inline} required={!!this.props.required}>{this.props.label}</Label>);
    return null;
  }  

  private getHint = () => {
   return (<Hint>{this.props.hint}</Hint>)
  }

  render() {
    let p = this.props;
    let validation = this.state.validation;
    let dirty = (this.context as IFormContext).dirty;
    let hasError = (!this.state.pristine || dirty) && validation != null;

    return (
      <div className={p.className}>
        {this.labelNode}
        {this.getControl(hasError)}
        {hasError && <Error contrast={this.props.contrast}>{validation}</Error>}
        {!hasError && p.hint && this.hintNode}
      </div>
    );
  }
}

const FieldStyled = styled(FieldBase)`
  padding-bottom: 8px;
  
  /* Fields may provide their width in relative units to other fields. */
  ${p => p.width && css `flex: ${p.width}`}
`;

class Field extends React.Component<IProps, {}> {
  render() {
    let p = this.props;
    return (
      <FieldStyled {...p}/>
    )
  }  
}

export { Field };
