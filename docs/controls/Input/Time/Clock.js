import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../../styles/Theme';
import { darken } from '../../../helper/darken';
import { ClockNumber } from './ClockNumber';
import { Hand } from './Hand';
class ClockBase extends React.Component {
    constructor(props) {
        super(props);
        // Is mouse currently down?
        this.mouseDown = false;
        this.componentDidUpdate = (newProps) => {
            if (newProps.mode != this.props.mode)
                this.setState({ arrow_animation: true });
        };
        // Convert a mouse location to degrees on the clockface.
        this.eventToDeg = (e) => {
            let rect = this.faceElement.getBoundingClientRect();
            let x = (e.clientX - rect.left) - rect.width / 2;
            let y = -((e.clientY - rect.top) - rect.height / 2);
            let deg = -Math.atan2(y, x) * 180 / Math.PI + 180 - 90;
            if (deg < 0)
                deg += 360;
            return deg;
        };
        //
        // On mouseDown, then start dragging the clock hand. 
        // 
        this.handleMouseDown = () => {
            this.mouseDown = true;
            this.faceElement.classList.add('move');
            // Disable clock hand animation.
            this.setState({ arrow_animation: false });
        };
        //
        // On mouseUp, update clock.
        // 
        this.handleMouseUp = (e) => {
            if (!this.mouseDown)
                return;
            this.mouseDown = false;
            this.faceElement.classList.remove('move');
            this.props.onSelect(this.eventToDeg(e), true);
        };
        //
        // On mouseMove, update clock.
        // 
        this.handleMouseMove = (e) => {
            if (this.mouseDown)
                this.props.onSelect(this.eventToDeg(e), false);
        };
        this.render = () => {
            let p = this.props;
            return (_jsx("div", { className: p.className, children: _jsxs(ClockFace, { ref: (el) => this.faceElement = el, onMouseDown: this.handleMouseDown, children: [_jsx(Hand, { animation: this.state.arrow_animation, degrees: p.degrees }), p.mode == 'hour' && !p.is24h && [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v, index) => _jsx(ClockNumber, { active: p.degrees == (v * 30) % 360, value: v.toString(), degrees: v * 30 }, index)), p.mode == 'hour' && p.is24h && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v, index) => _jsx(ClockNumber, { active: p.degrees == (v * 30) % 360, value: (v * 2).toString(), degrees: v * 30 }, index)), p.mode != 'hour' && [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((v, index) => _jsx(ClockNumber, { active: p.degrees == (v * 6) % 360, value: v.toString().padStart(2, "0"), degrees: v * 6 }, index)), _jsx(Center, {})] }) }));
        };
        this.state = {
            arrow_animation: false
        };
    }
    // Listen for document-wide mousedown event when component mounts.
    componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleMouseMove);
    }
    // Clean up document-wide mousedown event when component unmounts.
    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    }
}
const ClockFace = styled.div `
  position:       relative;
  display:        inline-block;
  width:          100%;
  height:         0;   /* hack to keep clock face ratio 1:1 */
  padding-bottom: 100%;
  border-radius:  50%;
  box-shadow:     rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  border:         solid 1px ${p => p.theme.normalColor};
  background-color: ${p => p.theme.normalColor};
  cursor:         pointer;
  transition:     border-color ${p => p.theme.transition.duration}s ease,
                  background-color ${p => p.theme.transition.duration}s ease;
  &.move {
    border:       solid 1px ${p => p.theme.primaryColor};
    background-color: ${p => darken(0.05, p.theme.normalColor)};
    cursor:       move;
  }
`;
const Clock = styled(ClockBase) `
  position:       relative;
  margin:         0 auto;    /* center clock */
  max-width:      200px;     /* max clock size */
`;
const Center = styled.div `
  position:       absolute;
  left:           calc(50% - 3px);
  top:            calc(50% - 3px);
  width:          7px;
  height:         7px;
  border-radius:  50%;
  background:     ${p => p.theme.primaryColor};
`;
export { Clock };
