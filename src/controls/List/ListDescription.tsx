import * as React from 'react';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const ListDescription = (props: IProps) =>
  <div className={props.className}>{props.children}</div>

export { ListDescription, IProps }
