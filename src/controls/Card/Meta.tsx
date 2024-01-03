import * as React from 'react';
import styled from '../../styles/Theme';

interface ICardMetaProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const MetaBase = (props: ICardMetaProps) =>
  <span className={props.className}>{props.children}</span>

const MetaStyled = styled(MetaBase)`
  position: relative;
  display: block;
  padding: 0 14px 0 14px;
  font-size: 80%;
  color: ${p => p.theme.fontColor};
  &:last-child {
    padding-bottom: 12px;
  }  
`

const Meta = (props: ICardMetaProps) => <MetaStyled {...props}></MetaStyled>

export { Meta, ICardMetaProps }
