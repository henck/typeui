import * as React from 'react';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

interface IDialogFooterProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Optional alignment of items in the Dialog footer. Defaults to `end`. */
  align?: 'start' | 'end' | 'space-between';
}

const DialogFooterBase = (props: IDialogFooterProps) => 
  <div className={props.className}>{props.children}</div>

const DialogFooterStyled = styled(DialogFooterBase)`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.align ?? 'end'};
  padding: 20px 20px 20px 20px;
  border-top: solid 1px ${p => p.theme.normalColor};
  background: ${p => lighten(0.1, p.theme.normalColor)};
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;
`

class DialogFooter extends React.Component<IDialogFooterProps> {
  public static displayName = "Dialog.Footer";
  render = () => <DialogFooterStyled {...this.props}/>
}

export { DialogFooter };
