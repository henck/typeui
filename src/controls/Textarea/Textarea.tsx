import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

/**
 *  Textarea validates itself using the HTML validation API whenever
 *  its content changes. Listeners can use onValidate to obtain
 *  the resulting ValidityState.
 */

interface ITextareaProps {
  /** @ignore */
  className?: string;
  /** 
   * Textarea name. 
   */
  name?: string;
  /** 
   * Textarea value. 
   */
  value?: any;
  /** 
   * Placeholder to show when the Textarea is empty. 
   */
  placeholder?: string;  
  /** 
   * Mark Textarea as disabled. 
   * @default false
   */
  disabled?: boolean;
  /** 
   * Removes Textarea border. 
   * @default false
   */
  transparent?: boolean;
  /** 
   * Textarea takes up all available horizontal space. 
   * @default false
   */
  fluid?: boolean;
  /** 
   * Height in rows. 
   */
  rows?: number;
  /** 
   * Minimum height in pixels. 
   */
  minHeight?: number;
  /** 
   * Is the Textarea in an error state? 
   * @default false
   */
  error?: boolean;
  /** 
   * If set, Textarea will use a monospaced font. 
   * @default false
   */
  monospaced?: boolean;

  // Events
  /** 
   * Listeners are notified whenever the user interacts with the Textarea. 
   */
  onChange?: (value: any) => void;
}


class TextareaBase extends React.Component<ITextareaProps> {
  private handleChange = (e:any) => {
    if(this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    let p = this.props;

    return (
      <textarea className={this.props.className}
        name={p.name} 
        value={p.value == null ? '' : p.value}  
        placeholder={p.placeholder} 
        disabled={p.disabled}
        rows={p.rows}
        onChange={this.handleChange}/>
    )
  }
}

const TextareaStyled = styled(TextareaBase).attrs(p => ({
  borderColor:      p.theme.normalColor,
  highBorderColor:  lighten(0.25, p.theme.primaryColor),
}))`
  position: relative;
  display: inline-block;

  /* No resize grip */
  resize: none;

  /* Height */
  ${p => !p.minHeight && css`min-height: 80px;`}
  ${p => p.minHeight && css`min-height: ${p.minHeight}px;`}

  width:            250px;
  /* Font-size must be redefined or it will be bigger than container font size. */
  font-size:        100%;
  ${p => p.fluid && css`width: 100%;`}
  box-sizing:       border-box;
  z-index:          0;
  font-family:      ${p => p.theme.fontName}, sans-serif;
  font-size:        ${p => p.theme.fontSize}px;
  line-height:      17px;
  text-align:       left;
  color:            ${p => p.theme.fontColor};
  border:           solid 1px ${p => p.borderColor};
  border-radius:    ${p => p.theme.radius}px;
  outline:          0;
  background-color: ${p => p.theme.background};
  padding:          9.5px 14px;

  /* Monospaced font */
  ${p => p.monospaced && css`font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace;`}

  /* Define colors for placeholder text. */
  &::placeholder {
    color: ${p => lighten(0.6, p.theme.fontColor)};
    opacity: 1 !important; /* Firefox applies opacity */
  }

  /* Define colors for selected text. */
  &::selection {
    background-color: rgba(100,100,100,.4);
    color: ${p => p.theme.fontColor};
  }

  /* Define colors when input has focus. */
  transition: border-color ${p => p.theme.transition.duration}s ease;
  &:focus {
    border-color: ${p => p.highBorderColor};
    &::placeholder {
      color: ${p => lighten(0.4, p.theme.fontColor)};
    }
  }

  /* Make sure HTML5 validation does not show up. */
  &:valid {
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }

  /* Error */
  ${p => p.error && css`
    color: ${p.theme.errorColor.color};
    border-color: ${p.theme.errorColor.border};
    background: ${p.theme.errorColor.background};
    &::placeholder {
      color: ${p.theme.errorColor.color};
    }
    &:focus {
      border-color: ${p.theme.errorColor.border};
    }
    box-shadow: none;
  `}

  /* Disabled */
  ${p => p.disabled && css`
    opacity: 0.5;
  `}

  /* Transparent (borderless) */
  ${p => p.transparent && css`
    border-width: 0px;
  `}
`;

class Textarea extends React.Component<ITextareaProps> {
  render = () => <div className={this.props.className}><TextareaStyled {...this.props}></TextareaStyled></div>
}

export { Textarea, ITextareaProps };