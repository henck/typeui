import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const KeyBase = (props) => _jsx("div", { className: props.className, children: props.children });
const KeyStyled = styled(KeyBase) `
  border:        solid 1px #aaa;
  border-radius: 4px;
  padding:       2px 4px 2px 4px;
  height:        10px;
  line-height:   10px;
  font-size:     10px;
`;
/**
 * A `Key` displays a keyboard key. The children are the key description,
 * e.g. "CTRL" or "ALT".
 */
const Key = (props) => _jsx(KeyStyled, { ...props });
export { Key };
