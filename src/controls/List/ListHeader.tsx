import * as React from 'react';
import styled from '../../styles/Theme';

interface IListHeaderProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const ListHeaderBase = (props: IListHeaderProps) =>
  <div className={props.className}>{props.children}</div>

/* Styling for list header. */
const ListHeaderStyled = styled(ListHeaderBase)`
  font-weight: 500;
  line-height: 1em;
  padding-top: 4px;
`;

const ListHeader = (props: IListHeaderProps) =><ListHeaderStyled {...props}/>

export { ListHeader, IListHeaderProps }
