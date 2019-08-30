import * as React from 'react';
import styled from '../../styles/Theme';

interface IDialogHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

class DialogHeaderBase extends React.Component<IDialogHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const DialogHeaderStyled = styled(DialogHeaderBase)`
  padding: 20px 20px 15px 20px;
  border-bottom: solid 1px ${p => p.theme.normalColor};
  font-size: 24px;
  font-weight: 500;
`

class DialogHeader extends React.Component<IDialogHeaderProps, {}> {
  public static displayName = "Dialog.Header";
  
  render() {
    let p = this.props;
    return (
      <DialogHeaderStyled {...p}/>
    )
  }  
}

export { DialogHeader };