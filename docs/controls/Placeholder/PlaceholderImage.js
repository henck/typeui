import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const PlaceholderImageBase = (props) => _jsx("div", { className: props.className });
const PlaceholderImageStyled = styled(PlaceholderImageBase) `
  ${p => p.rectangular && css `padding-bottom: 75%;`}
  ${p => !p.rectangular && css `padding-bottom: 100%;`}
  background: transparent;
`;
const PlaceholderImage = (props) => _jsx(PlaceholderImageStyled, { ...props });
export { PlaceholderImage };
