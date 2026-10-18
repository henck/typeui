import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { Number } from '../../formatters/Number';
/**
 * Counter works with DataTable to show a label containing
 * the total number of records, and the indices of the first to
 * last record currently being scrolled to.
 */
const CounterBase = (props) => _jsxs("div", { className: props.className, ref: props.nodeRef, children: [_jsx("span", { children: props.first }), "-", _jsx("span", { children: _jsx(Number, { value: Math.min(props.last, props.count), decimals: 0 }) }), " of ", _jsx("span", { children: _jsx(Number, { value: props.count, decimals: 0 }) }), " ", props.count == 1 && 'record', props.count != 1 && 'records'] });
const Counter = styled(CounterBase) `
  position: absolute;
  right: 30px;
  bottom: 15px;
  cursor: default;
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  background: ${p => p.theme.background};
  padding: 3px 8px 3px 8px;
  font-size: 12px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  & > span {
    font-weight: 500;
  }
  opacity: 1;
  transform: scale(1);

  /* CSSTransition classes */
  &.fade-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  &.fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }    
`;
export { Counter };
