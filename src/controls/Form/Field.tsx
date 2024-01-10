import * as React from 'react';

// Other controls
import { Hint } from './Hint';
import { Error } from './Error';
import { Label } from './Label';
import { FormContext, IFormContext } from './FomContext';
import { FieldWrapper } from './FieldWrapper';

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
}

interface IState {
  pristine: boolean;
  validation: React.ReactNode;
  value: any;
}

class Field extends React.Component<IProps, IState> {

  public static contextType = FormContext;

  constructor(props: IProps) {
    super(props);
    this.state = {
      pristine: true,
      // Perform validation immediately
      validation: this.getValidation(this.props.value),
      value: this.props.value
    };
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
    if(nextProps.disabled != this.props.disabled) return true;
    if(nextState.value != this.state.value) return true;
    if(nextState.validation != this.state.validation) return true;
    return false;
  }

  // Perform validation after field updates.
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // Do not perform validation if value did not change.
    if(prevState.value == this.state.value) return;
    // Perform validation on field.
    const validation = this.getValidation(this.state.value);
    // Only notify parent if validation has changed since last validation.
    if(this.state.validation !== validation) {
      this.setState({ validation: validation });
      (this.context as IFormContext).onValidate(this.props.name, validation == null);
    }
  }

  getValidation(value: any): React.ReactNode {
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
    if(this.props.lengthBetween != null) {
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
    const regex = new RegExp(this.props.pattern.pattern);
    return regex.test(value);    
  }

  /**
   * Verify that value does not satisfy a pattern.
   */
  validateNotPattern(value: any): boolean {
    if(!value) return true;
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
      error: hasError,
      disabled: this.props.disabled
    });
  }

  render() {
    const p = this.props;
    const validation = this.state.validation;
    const dirty = (this.context as IFormContext).dirty;
    const hasError = (!this.state.pristine || dirty) && validation != null;

    return (
      <FieldWrapper boxed={p.boxed} width={p.width} error={hasError}>
        {this.props.label && 
          <Label inline={this.props.inline} required={!!this.props.required}>
            {this.props.label}
          </Label>}
        {this.getControl(hasError)}
        {hasError && validation && <Error contrast={this.props.contrast}>{validation}</Error>}
        {!hasError && p.hint && <Hint>{this.props.hint}</Hint>}
      </FieldWrapper>
    )
  }
}

export { Field }
