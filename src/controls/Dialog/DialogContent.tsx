import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogContentProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Maximum height in percentage of screen height before a scrollbar is 
   * added. Defaults to 70.
   * @default 70
   */
  maxHeight?: number;
}

const DialogContentBase = (props: IDialogContentProps) =>
  <div className={props.className}>{props.children}</div>

const DialogContentStyled = styled(DialogContentBase)`
  position:   relative;
  padding:    20px 20px 20px 20px;
  max-height: ${p => p.maxHeight ?? 70}vh;
  overflow-y: auto;  
`

const DialogContent = (props: IDialogContentProps) =>
  <DialogContentStyled {...props}/>

DialogContent.displayName = "Dialog.Content";

export { DialogContent, IDialogContentProps };
