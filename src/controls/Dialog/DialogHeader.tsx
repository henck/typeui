import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogHeaderProps {
  /* @ignore */
  className?: string;
  /* @ignore */
  children?: React.ReactNode;
}

const DialogHeaderBase = (props: IDialogHeaderProps) => 
  <div className={props.className}>{props.children}</div>

const DialogHeaderStyled = styled(DialogHeaderBase)`
  padding:       20px 20px 15px 20px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  font-size:     24px;
  font-weight:   500;
`

const DialogHeader = (props: IDialogHeaderProps) => 
  <DialogHeaderStyled {...props}/>

DialogHeader.displayName = "Dialog.Header" ;

export { DialogHeader, IDialogHeaderProps };
