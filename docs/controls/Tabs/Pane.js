import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
const PaneBase = (props) => {
    const shouldRender = () => {
        return !props.nohiddenrender || props.active;
    };
    // By default, all children are rendered (but hidden when
    // not active). With nohiddenrender enabled, only the active
    // tab is rendered.
    return (_jsx("div", { className: props.className, children: shouldRender() ? props.children : null }));
};
const PaneStyled = styled(PaneBase) `
  position: relative;
  display: flex;
  flex-direction: column;
  display: ${p => !p.active ? 'none' : ''};
  height: 100%;
`;
const Pane = (props) => _jsx(PaneStyled, { ...props });
export { Pane };
