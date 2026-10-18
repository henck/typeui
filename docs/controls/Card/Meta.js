import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const MetaBase = (props) => _jsx("span", { className: props.className, children: props.children });
const MetaStyled = styled(MetaBase) `
  position: relative;
  display: block;
  padding: 0 14px 0 14px;
  font-size: 80%;
  color: ${p => p.theme.fontColor};
  &:last-child {
    padding-bottom: 12px;
  }  
`;
const Meta = (props) => _jsx(MetaStyled, { ...props });
export { Meta };
