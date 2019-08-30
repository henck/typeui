abstract class Validator {
  protected message: string;

  abstract isValid(value: any): boolean;

  public getMessage = ():string => {
    return this.message;
  }  
}

/**
 * Verify that field has a value.
 */
class RequiredValidator extends Validator {
  constructor(spec: string) {
    super();
    this.message = spec;
  }

  isValid(value: any): boolean {
    if(typeof value === 'boolean') return !!value;
    if(typeof value === 'string') return value.trim().length > 0;
    return false;
  }
}

/**
 * Verify that value is an integer number.
 */  
class IntegerValidator extends Validator {
  constructor(spec: string) {
    super();
    this.message = spec;
  }

  isValid(value: any): boolean {
    if(!value) return null;
    const regex = /^[-+]?[0-9]+$/;
    return regex.test(value);    
  }
}

/*
  * Verify that value is a floating-point number. The default floating
  * point separator is '.' Optionally a different separator can be 
  * specified.
  */  
class FloatValidator extends Validator {
  private separator: string;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    this.message = parts[parts.length-1];
    this.separator = '.';
    if(parts.length > 1) this.separator = parts[0];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    const regex = new RegExp(`^[-+]?[0-9]+(\\${this.separator}[0-9]+)?$`);
    return regex.test(value);    
  }
}

/**
 * Verify that value has a minimum numerical value.
 */
class MinValidator extends Validator {
  private min: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("MinValidator needs 2 arguments.");
    this.message = parts[1];
    (this.min as any) = parts[0];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    return parseInt(value) >= this.min;
  }
}

/**
 * Verify that value has a maximum numerical value.
 */
class MaxValidator extends Validator {
  private max: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("MaxValidator needs 2 arguments.");
    this.message = parts[1];
    (this.max as any) = parts[0];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    return parseInt(value) <= this.max;
  }
}

/**
 * Verify that value falls in a numerical range (inclusive).
 */  
class BetweenValidator extends Validator {
  private min: number;
  private max: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 3) console.error("BetweenValidator needs 3 arguments.");
    this.message = parts[2];
    (this.min as any) = parts[0];
    (this.max as any) = parts[1];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    let num = parseInt(value);
    return num >= this.min && num <= this.max;
  }
}

/**
 * Verify that value is a string of minimum length.
 */  
class MinLengthValidator extends Validator {
  private len: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("MinLengthValidator needs 2 arguments.");
    this.message = parts[1];
    (this.len as any) = parts[0];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at least {min} chars long.
    return value.length >= this.len;
  }
}

/**
 * Verify that value is a string of maximum length.
 */  
class MaxLengthValidator extends Validator {
  private len: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("MaxLengthValidator needs 2 arguments.");
    this.message = parts[1];
    (this.len as any) = parts[0];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at most {max} chars long.
    return value.length <= this.len;  
  }
}

/**
 * Verify that value is a string of maximum length.
 */  
class LengthBetweenValidator extends Validator {
  private min: number;
  private max: number;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 3) console.error("LengthBetweenValidator needs 3 arguments.");
    this.message = parts[2];
    (this.min as any) = parts[0];
    (this.max as any) = parts[1];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;
    // Valid if at least {min} chars longs and at most {max} chars long.
    return value.length >= this.min && value.length <= this.max;    
  }
}

/**
 * Verify that value satisfies a pattern.
 */  
class PatternValidator extends Validator {
  private pattern: string;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("PatternValidator needs 2 arguments.");
    this.pattern = parts[0];
    this.message = parts[1];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;    
    const regex = new RegExp(this.pattern);
    return regex.test(value);     
  }
}


/**
 * Verify that value does not satisfy a pattern.
 */
class NotPatternValidator extends Validator {
  private pattern: string;

  constructor(spec: string) {
    super();
    let parts = spec.split('|');
    if(parts.length != 2) console.error("NotPatternValidator needs 2 arguments.");
    this.pattern = parts[0];
    this.message = parts[1];
  }

  isValid(value: any): boolean {
    if(!value) return true;
    // Invalid if not a string.
    if(!(typeof value === "string")) return false;    
    const regex = new RegExp(this.pattern);
    return !regex.test(value);    
  }
}

/**
 * Verify that values is a valid email address.
 */
class EmailValidator extends Validator {
  constructor(spec: string) {
    super();
    this.message = spec;
  }

  isValid(value: any): boolean {
    if(!value) return true;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());    
  }
}

export {
  Validator,
  RequiredValidator,
  IntegerValidator,
  FloatValidator,
  MinValidator,
  MaxValidator,
  BetweenValidator,
  MinLengthValidator,
  MaxLengthValidator,
  LengthBetweenValidator,
  PatternValidator,
  NotPatternValidator,
  EmailValidator
}