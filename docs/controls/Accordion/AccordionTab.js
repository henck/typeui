import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Other controls
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';
const AccordionTabBase = (props) => _jsxs("div", { className: props.className, children: [_jsx(AccordionHeader, { styled: props.styled, align: props.align, active: props.active, onClick: props.onClick, children: props.title }), _jsx(AccordionBody, { styled: props.styled, active: props.active, noanimate: props.noanimate, children: props.children })] });
const AccordionTabStyled = styled(AccordionTabBase) `
  ${p => p.styled && css `
    &:not(:first-child) {
      ${AccordionHeader} {
        border-top: solid 1px ${p.theme.normalColor};
      }
    }
  `}
`;
const AccordionTab = (props) => {
    // A hidden tab renders nothing.
    if (props.hidden)
        return null;
    return _jsx(AccordionTabStyled, { ...props });
};
export { AccordionTab };
