import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { Input } from '../../controls/Input';
import { Label, LabelStyled } from '../../controls/Label';
import { lighten } from '../../helper/lighten';
import { DMS } from '../../helper/DMS';
class DmsInputBase extends React.Component {
    constructor(props) {
        super(props);
        // If DMS was updated, then float value must be truncated.
        this.updateDMS = false;
        this.getSign = () => {
            return Math.sign(this.props.value) == -1 ? -1 : 1;
        };
        this.getDegrees = () => {
            let [d, m, s] = DMS.toDMS(this.props.value);
            return d;
        };
        this.getMinutes = () => {
            let [d, m, s] = DMS.toDMS(this.props.value);
            return m;
        };
        this.getSeconds = () => {
            let [d, m, s] = DMS.toDMS(this.props.value);
            return s;
        };
        this.toFloat = (d, m, s, sign) => {
            if (isNaN(d))
                d = 0;
            if (isNaN(m))
                m = 0;
            if (isNaN(s))
                s = 0;
            return DMS.toFloat(d, m, s) * sign;
        };
        // Convert degrees, minutes or seconds to int and force into a range.
        this.forceRange = (value, max) => {
            let v = parseInt(value);
            if (isNaN(v))
                v = 0;
            if (v > max)
                v = max;
            return v;
        };
        this.handleChangeDegrees = (value) => {
            this.updateDMS = true;
            this.props.onChange(this.toFloat(this.forceRange(value, 180), this.getMinutes(), this.getSeconds(), this.getSign()));
        };
        this.handleChangeMinutes = (value) => {
            this.updateDMS = true;
            this.props.onChange(this.toFloat(this.getDegrees(), this.forceRange(value, 59), this.getSeconds(), this.getSign()));
        };
        this.handleChangeSeconds = (value) => {
            this.updateDMS = true;
            this.props.onChange(this.toFloat(this.getDegrees(), this.getMinutes(), this.forceRange(value, 59), this.getSign()));
        };
        this.handleChangeSign = () => {
            this.updateDMS = true;
            this.props.onChange(this.toFloat(this.getDegrees(), this.getMinutes(), this.getSeconds(), this.getSign() == 1 ? -1 : 1));
        };
        this.handleChangeValue = (value) => {
            this.props.onChange(value);
        };
        this.getValue = () => {
            if (this.updateDMS) {
                this.updateDMS = false;
                return this.props.value.toFixed(6);
            }
            else {
                return this.props.value;
            }
        };
    }
    render() {
        let p = this.props;
        return (_jsxs("div", { className: p.className, children: [_jsx(DegreesHolder, { children: _jsx(Input, { type: "text", maxLength: 4, fluid: true, value: this.getDegrees(), transparent: true, error: p.error || (this.getDegrees() < -90 && p.isLatitude) || this.getDegrees() < -180 || (this.getDegrees() > 90 && p.isLatitude) || this.getDegrees() > 180, disabled: p.disabled, onChange: this.handleChangeDegrees }) }), _jsx(MinutesHolder, { children: _jsx(Input, { type: "text", maxLength: 2, fluid: true, value: this.getMinutes(), transparent: true, error: p.error || this.getMinutes() < 0 || this.getMinutes() > 59, disabled: p.disabled, onChange: this.handleChangeMinutes }) }), _jsx(SecondsHolder, { children: _jsx(Input, { type: "text", maxLength: 2, fluid: true, value: this.getSeconds(), transparent: true, error: p.error || this.getSeconds() < 0 || this.getSeconds() > 59, disabled: p.disabled, onChange: this.handleChangeSeconds, children: _jsx(Label, { attached: "right", onClick: this.handleChangeSign, children: _jsx("div", { style: { width: '10px', userSelect: 'none' }, children: this.getSign() == 1 ? (p.isLatitude ? 'N' : 'E') : (p.isLatitude ? 'S' : 'W') }) }) }) }), _jsx(FloatHolder, { children: _jsx(Input, { type: "text", fluid: true, value: this.getValue(), transparent: true, error: p.error, disabled: p.disabled, onChange: this.handleChangeValue }) })] }));
    }
}
const DegreesHolder = styled.div `
  display: inline-block;
  position: relative;
  width: 63px;
  &::before {
    position: absolute;
    top: 7px;
    right: 6px;
    z-index: 99;
    content: '\\ba';   // &ordm;
  }
`;
const MinutesHolder = styled.div `
  display: inline-block;
  position: relative;
  width: 46px;
  &::before {
    position: absolute;
    top: 7px;
    right: 8px;
    z-index: 99;
    content: '\\2032'; // &prime;
  }
`;
const SecondsHolder = styled.div `
  display: inline-block;
  position: relative;
  width: 80px;
  &::before {
    position: absolute;
    top: 7px;
    right: 40px;
    z-index: 99;
    content: '\\2033';   // &ordm;
  }
`;
const FloatHolder = styled.div `
  display: inline-block;
  width: 135px;
`;
const DmsInputStyled = styled(DmsInputBase) `
  display: inline-block;
  white-space: nowrap;
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  transition: border-color ${p => p.theme.transition.duration}s ease;
  &:focus-within { 
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};  
  }
  input {
    text-align: right;
  }
  /* Make sure Label doesn't have any border radius: */
  ${LabelStyled} {
    border-radius: 0;
  }
`;
class DmsInput extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(DmsInputStyled, { ...this.props });
    }
}
export { DmsInput };
