import * as React from 'react';

// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';

interface IAlertDialogProps {
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Is the Dialog currently open? 
   * @default false
   */
  open?: boolean;
  /** 
   * Optional title to show in alert dialog. If not specified, this will be 
   * "Alert".
   * @default Alert
   */
  title?: string;
  /** 
   * Function to call when Dialog closes. 
   */
  onClose: () => void;
}

const AlertDialog = (props: IAlertDialogProps) =>
  <Dialog open={props.open} onClose={props.onClose}>
    <Dialog.Header>{props.title ?? 'Alert'}</Dialog.Header>
    <Dialog.Content>
      {props.children}
    </Dialog.Content>
    <Dialog.Footer>
      <Button onClick={props.onClose}>OK</Button>
    </Dialog.Footer>
  </Dialog>

export { AlertDialog, IAlertDialogProps };
