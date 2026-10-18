import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const HeaderContentBase = (props) => _jsx("div", { className: props.className, children: props.children });
const HeaderContentStyled = styled(HeaderContentBase) `
  display: block;
  line-height: 1em;
`;
const HeaderContent = (props) => _jsx(HeaderContentStyled, { ...props });
export { HeaderContent };
