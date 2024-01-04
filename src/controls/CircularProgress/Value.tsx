import * as React from 'react';
import styled, { css } from '../../styles/Theme';
import { alpha } from '../../helper/alpha';
import { darken } from '../../helper/darken';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * If set, text gets edge drop shadow. 
   * @default false
   */  
  raised?: boolean;
  /**
   * Font size factor compared to inherited font size. Defaults to 1. 
   * Use 2 to increase font size 2x.
   */
  fontFactor?: number;
}

const ValueBase = (props: IProps) => 
  <div className={props.className}>{props.children}</div>

/**
 * Numeric value to show in center of control.
 */  
const Value = styled(ValueBase)`
  position: absolute;
  font-weight: 500;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  // Font size defaults to 100% of inherited fonts size, but can be affected
  // by fontFactor, which multiplies it.
  font-size: ${p => (p.fontFactor ?? 1) * 100}%;
  // If raised, then font also gets a shadow.
  ${p => p.raised && css`text-shadow: 1px 1px 2px ${alpha(0.5, darken(0.5, p.theme.normalColor))};`}  
`

export { Value }
