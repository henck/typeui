import * as React from 'react';
import styled, { css } from '../../styles/Theme';
import { lighten } from '../../helper/lighten';

interface IFieldWrapperProps {
  className?: string;
  children?: React.ReactNode;
  width?: number;
  boxed?: boolean;
  error?: boolean;
}
//
// FieldWrapper exists to draw a box around the field, which gets focus when
// the field has focus. When the FieldWrapper is clicked, the field is given
// focus and is clicked.
// 
const FieldWrapperBase = (props: IFieldWrapperProps) => {
  const wrapper = React.useRef<HTMLDivElement>(null);

  //
  // FieldWrapper sends clicks through to the underlying control.
  // 
  const handleClick = () => {
    // Only do this for boxed elements.
    if(!props.boxed) return;
    // Find a child element with class "clickable", and focus/click it.
    const clickableChild = wrapper.current.getElementsByClassName('clickable')[0];
    if(clickableChild instanceof HTMLElement) {
      clickableChild.click();
      clickableChild.focus();
    }
  }

  return (
    <div className={props.className} onClick={handleClick} ref={wrapper}>
      {props.children}
    </div>
  )
}

const FieldWrapper = styled(FieldWrapperBase)`
  // A bottom margin is only added when the field is not boxed.
  ${p => !p.boxed && css`margin-bottom: 8px;`}

  // Applies only to boxed fields.
  ${p => p.boxed && css`
    position: relative;
    padding-top: 16px;
    padding-bottom: 5px;
    border: solid 2px ${p.theme.normalColor};
    border-radius: ${p => p.theme.radius}px;
    background-color: ${p => p.theme.background};
    transition: background-color ${p.theme.transition.duration}s ease,
                border-color ${p.theme.transition.duration*3}s ease-in-out;
    &:focus-within {
      border-color: ${lighten(0.25, p.theme.primaryColor)};
    }
    /* Label */
    &>*:nth-child(1) {
      padding-left: 15px;
      padding-right: 14px;
      line-height: 12px;
      font-size: 12px;
      font-weight: 700;
      font-variant: all-small-caps;      
      opacity: ${p.error ? 0 : 1};
      color: #2C4253;

    }
    /* Hint/error */
    &>*:nth-child(3) {
      position: absolute;
      ${p.error && css`left: 12px;`}
      ${!p.error && css`right: 12px;`}
      top: 12px;
      line-height: 12px;
      font-size: 12px;
      font-weight: 700;
      font-variant: all-small-caps;
    }
  `}

  // Applies only to boxed fields.
  ${p => p.boxed && p.error && css`
    border-color: ${p.theme.errorColor.border};
    background: ${p.theme.errorColor.background};
    &:focus-within {
      border-color: ${p.theme.errorColor.border};
    }
  `}

  /* Fields may provide their width in relative units to other fields. */
  ${p => p.width && css `flex: ${p.width}`}
`;

export { FieldWrapper }
