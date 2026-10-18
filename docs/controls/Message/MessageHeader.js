import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const MessageHeaderBase = (props) => _jsx("div", { className: props.className, children: props.children });
const MessageHeaderStyled = styled(MessageHeaderBase) `
  font-weight: 500;
  font-size: 115%;
`;
const MessageHeader = (props) => _jsx(MessageHeaderStyled, { ...props });
export { MessageHeader };
