import * as React from 'react';
import styled from '../../styles/Theme';

const Footer = styled.div`
  position: relative;
  padding: 14px;
  background: #f9f9f9;
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;  
`

export { Footer };
