import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogContentProps {
  className?: string;
  children?: React.ReactNode;
}

class DialogContentBase extends React.Component<IDialogContentProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const DialogContentStyled = styled(DialogContentBase)`
  position: relative;
  padding: 20px 20px 20px 20px;
  max-height: 70vh;
  overflow-y: auto;  
`

class DialogContent extends React.Component<IDialogContentProps, {}> {
  public static displayName = "Dialog.Content";
  
  render() {
    let p = this.props;
    return (
      <DialogContentStyled {...p}/>
    )
  }  
}

export { DialogContent };
