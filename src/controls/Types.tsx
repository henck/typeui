/**
 *  Certain attributes are applicable to several controls. These are
 *  typed in this file.
 */

type Size = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

type HorizontalAlignment = 'left' | 'center' | 'right';

type VerticalAlignment = 'top' | 'center' | 'bottom';

type TDir = 'asc' | 'desc';

type Float = 'left' | 'right';

type HorizontalDirection = 'left' | 'right';

type VerticalDirection = 'top' | 'bottom';

type Direction = HorizontalDirection | VerticalDirection;

type ListStyleType = 
   'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman'
 | 'upper-roman' | 'lower-greek' | 'upper-greek' | 'lower-latin' | 'upper-latin'
 | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha';

 type ValidityReason = 
    'badInput'
  | 'customError'
  | 'patternMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'typeMismatch'
  | 'valueMissing';
   
type CheckboxType = 'check' | 'toggle' | 'slider' | 'circle';

export { Size, HorizontalAlignment, VerticalAlignment, Float,  HorizontalDirection, VerticalDirection, Direction, ListStyleType, ValidityReason, CheckboxType, TDir };