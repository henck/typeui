import * as React from 'react';
import styled from '../../styles/Theme';

interface ILabelDetailProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const LabelDetailBase  = (props: ILabelDetailProps) =>
  <span className={props.className}>{props.children}</span>


const LabelDetailStyled = styled(LabelDetailBase)`
  opacity: 0.7;
  margin-left: 0.6em;
`

const LabelDetail = (props: ILabelDetailProps) => <LabelDetailStyled {...props}/>

export { LabelDetail, ILabelDetailProps }
