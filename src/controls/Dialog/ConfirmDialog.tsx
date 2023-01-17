import * as React from 'react';

// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';

interface IConfirmDialogProps {
  /* @ignore */
  children?: React.ReactNode;
  /** 
   * Is the Dialog currently open? 
   * @default false
   */
  open?: boolean;
  /**
   * Title to show in confirmation dialog. If not specified, "Confirmation" 
   * @default Confirmation
   */
  title?: string;
  /** 
   * Function to call on close (with a negative reply). 
   */
  onClose: () => void;
  /** 
   * Function to call on close (with a positive reply). 
   */
  onConfirm: () => void;
}

const  ConfirmDialog = (props: IConfirmDialogProps) => 
  <Dialog open={props.open} onClose={props.onClose}>
    <Dialog.Header>{props.title ?? 'Confirmation'}</Dialog.Header>
    <Dialog.Content>
      {props.children}
    </Dialog.Content>
    <Dialog.Footer>
      <Button negative onClick={props.onConfirm}>Yes</Button>
      <Button onClick={props.onClose}>No</Button>
    </Dialog.Footer>
  </Dialog>

export { ConfirmDialog, IConfirmDialogProps };
