/**
 *  Certain attributes are applicable to several controls. These are
 *  typed in this file.
 */
declare type Size = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
declare type HorizontalAlignment = 'left' | 'center' | 'right';
declare type VerticalAlignment = 'top' | 'center' | 'bottom';
declare type TDir = 'asc' | 'desc';
declare type Float = 'left' | 'right';
declare type HorizontalDirection = 'left' | 'right';
declare type VerticalDirection = 'top' | 'bottom';
declare type Direction = HorizontalDirection | VerticalDirection;
declare type ListStyleType = 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'upper-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha';
declare type ValidityReason = 'badInput' | 'customError' | 'patternMismatch' | 'rangeOverflow' | 'rangeUnderflow' | 'stepMismatch' | 'tooLong' | 'tooShort' | 'typeMismatch' | 'valueMissing';
declare type CheckboxType = 'check' | 'toggle' | 'slider' | 'circle';
export { Size, HorizontalAlignment, VerticalAlignment, Float, HorizontalDirection, VerticalDirection, Direction, ListStyleType, ValidityReason, CheckboxType, TDir };
