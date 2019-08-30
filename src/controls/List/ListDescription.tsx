import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IListDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}

class ListDescription extends React.Component<IListDescriptionProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {p.children}
      </div>
    )
  }  
}

export { ListDescription };