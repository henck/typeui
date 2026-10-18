import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const PlaceholderParagraphBase = (props) => _jsx("div", { className: props.className, children: props.children });
const PlaceholderParagraphStyled = styled(PlaceholderParagraphBase) `
  position: relative;
  background: transparent;

  /* The padding on top of the paragraph is later overdrawn
  * by :before, to give the paragraph some whitespace
  * on top. 
  * (This does not happen for the first paragraph in a collection.) */
  &:not(:first-child) {
    padding-top: 18px;
    &:before {
      position: absolute;
      content: '';
      top: 0px;
      height: 18px;
      left: 0;
      right: 0;
      background: #fff;
    }
  }
`;
const PlaceholderParagraph = (props) => _jsx(PlaceholderParagraphStyled, { ...props });
export { PlaceholderParagraph };
