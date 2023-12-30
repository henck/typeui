import * as React from 'react';
import styled from '../../styles/Theme';

import { Input } from '../../controls/Input';
import { Label, LabelStyled } from '../../controls/Label';
import { lighten } from '../../helper/lighten';
import { DMS } from '../../helper/DMS';

interface IProps {
  /** @ignore */
  className?: string;  
  /** 
   * Latitude or longitude? 
   */
  isLatitude: boolean;
  /** 
   * Input name. 
   */
  name?: string;
  /** 
   * Input value. 
   */
  value?: any;
  /** 
   * Marks input as disabled. 
   * @default false
   */
  disabled?: boolean;
  /** 
   * An input can show an error state. 
   * @default false
   */
  error?: boolean;

  onChange?: (value: any) => void;
}

class DmsInputBase extends React.Component<IProps> {
  // If DMS was updated, then float value must be truncated.
  private updateDMS: boolean = false; 

  constructor(props: IProps) {
    super(props);
  }

  private getSign = () => {
    return Math.sign(this.props.value) == -1 ? -1 : 1;
  }

  private getDegrees = () => {
    let [d,m,s] = DMS.toDMS(this.props.value);
    return d;
  }

  private getMinutes = () => {
    let [d,m,s] = DMS.toDMS(this.props.value);
    return m;

  }

  private getSeconds = () => {
    let [d,m,s] = DMS.toDMS(this.props.value);
    return s;
  }

  private toFloat = (d: number, m: number, s: number, sign: number) => {
    if(isNaN(d)) d = 0;
    if(isNaN(m)) m = 0;
    if(isNaN(s)) s = 0;
    return DMS.toFloat(d, m, s) * sign;
  }

  // Convert degrees, minutes or seconds to int and force into a range.
  private forceRange = (value: any, max:number): number => {
    let v = parseInt(value);
    if(isNaN(v)) v = 0;
    if(v > max) v = max;
    return v;
  }

  handleChangeDegrees = (value: any) => {
    this.updateDMS = true;
    this.props.onChange(this.toFloat(this.forceRange(value, 180), this.getMinutes(), this.getSeconds(), this.getSign()));
  }

  handleChangeMinutes = (value: any) => {
    this.updateDMS = true;
    this.props.onChange(this.toFloat(this.getDegrees(), this.forceRange(value, 59), this.getSeconds(), this.getSign()));
  }
  
  handleChangeSeconds = (value: any) => {
    this.updateDMS = true;
    this.props.onChange(this.toFloat(this.getDegrees(), this.getMinutes(), this.forceRange(value, 59), this.getSign()));
  }  

  handleChangeSign = () => {
    this.updateDMS = true;
    this.props.onChange(this.toFloat(this.getDegrees(), this.getMinutes(), this.getSeconds(), this.getSign() == 1 ? -1 : 1));
  }

  handleChangeValue = (value: any) => {
    this.props.onChange(value);
  }

  getValue = () => {
    if(this.updateDMS) {
      this.updateDMS = false;
      return this.props.value.toFixed(6);
    } else {
      return this.props.value;
    }
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <DegreesHolder>
          <Input type="text" maxLength={4} fluid value={this.getDegrees()} transparent error={p.error || (this.getDegrees() < -90 && p.isLatitude) || this.getDegrees() < -180 || (this.getDegrees() > 90 && p.isLatitude) || this.getDegrees() > 180} disabled={p.disabled} onChange={this.handleChangeDegrees}/>
        </DegreesHolder>
        <MinutesHolder>
          <Input type="text" maxLength={2} fluid value={this.getMinutes()} transparent error={p.error || this.getMinutes() < 0 || this.getMinutes() > 59} disabled={p.disabled} onChange={this.handleChangeMinutes}/>
        </MinutesHolder>
        <SecondsHolder>
          <Input type="text" maxLength={2} fluid value={this.getSeconds()} transparent error={p.error || this.getSeconds() < 0 || this.getSeconds() > 59} disabled={p.disabled} onChange={this.handleChangeSeconds}>
            <Label attached="right" onClick={this.handleChangeSign}>
              <div style={{width: '10px', userSelect: 'none'}}>
                {this.getSign() == 1 ? (p.isLatitude ? 'N' : 'E') : (p.isLatitude ? 'S' : 'W')}
              </div>
            </Label>
          </Input>
        </SecondsHolder>
        <FloatHolder>
          <Input type="text" fluid value={this.getValue()} transparent error={p.error} disabled={p.disabled} onChange={this.handleChangeValue}/>
        </FloatHolder>
      </div>
    );
  }
}

const DegreesHolder = styled.div`
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
`

const MinutesHolder = styled.div`
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
`

const SecondsHolder = styled.div`
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
`

const FloatHolder = styled.div`
  display: inline-block;
  width: 135px;
`

const DmsInputStyled = styled(DmsInputBase)`
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
`

class DmsInput extends React.Component<IProps> {
  render = () => <DmsInputStyled {...this.props}/>
}

export { DmsInput }
