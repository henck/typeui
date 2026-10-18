import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { lighten } from '../../helper/lighten';
const Required = styled.span `
  /* Required fields put an asterisk on the label. */ 
  color: ${p => p.theme.errorColor.color};
`;
const LabelBase = (props) => _jsxs("label", { tabIndex: -1, className: props.className, children: [props.children, props.required && !props.noStar == true && _jsx(Required, { children: "*" })] });
const Label = styled(LabelBase) `
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;
  color: ${p => lighten(0.5, p.theme.fontColor)};
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
  /* ...but for inline fields, they are placed inline. */
  ${p => p.inline && css `
    display: inline;
  `}
`;
export { Label };
