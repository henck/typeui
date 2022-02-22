declare abstract class Validator {
    protected message: string;
    abstract isValid(value: any): boolean;
    getMessage: () => string;
}
/**
 * Verify that field has a value.
 */
declare class RequiredValidator extends Validator {
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value is an integer number.
 */
declare class IntegerValidator extends Validator {
    constructor(spec: string);
    isValid(value: any): boolean;
}
declare class FloatValidator extends Validator {
    private separator;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value has a minimum numerical value.
 */
declare class MinValidator extends Validator {
    private min;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value has a maximum numerical value.
 */
declare class MaxValidator extends Validator {
    private max;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value falls in a numerical range (inclusive).
 */
declare class BetweenValidator extends Validator {
    private min;
    private max;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value is a string of minimum length.
 */
declare class MinLengthValidator extends Validator {
    private len;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value is a string of maximum length.
 */
declare class MaxLengthValidator extends Validator {
    private len;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value is a string of maximum length.
 */
declare class LengthBetweenValidator extends Validator {
    private min;
    private max;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value satisfies a pattern.
 */
declare class PatternValidator extends Validator {
    private pattern;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that value does not satisfy a pattern.
 */
declare class NotPatternValidator extends Validator {
    private pattern;
    constructor(spec: string);
    isValid(value: any): boolean;
}
/**
 * Verify that values is a valid email address.
 */
declare class EmailValidator extends Validator {
    constructor(spec: string);
    isValid(value: any): boolean;
}
export { Validator, RequiredValidator, IntegerValidator, FloatValidator, MinValidator, MaxValidator, BetweenValidator, MinLengthValidator, MaxLengthValidator, LengthBetweenValidator, PatternValidator, NotPatternValidator, EmailValidator };
