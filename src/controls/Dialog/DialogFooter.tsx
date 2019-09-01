import * as React from 'react';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

interface IDialogFooterProps {
  className?: string;
  children?: React.ReactNode;
}

class DialogFooterBase extends React.Component<IDialogFooterProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    );
  }
}

const DialogFooterStyled = styled(DialogFooterBase)`
  padding: 20px 20px 20px 20px;
  border-top: solid 1px ${p => p.theme.normalColor};
  background: ${p => lighten(0.1, p.theme.normalColor)};
  text-align: right;
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;
`

class DialogFooter extends React.Component<IDialogFooterProps, {}> {
  public static displayName = "Dialog.Footer";
  
  render() {
    let p = this.props;
    return (
      <DialogFooterStyled {...p}/>
    )
  }  
}

export { DialogFooter };