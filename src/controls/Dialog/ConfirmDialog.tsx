import * as React from 'react';

// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';

interface IConfirmDialogProps {
  children?: React.ReactNode;
  /** Is the Dialog currently open? */
  open?: boolean;
  /** Title to show in confirmation dialog. If not specified, "Confirmation" */
  title?: string;
  /** Function to call on close (with a negative reply). */
  onClose: () => void;
  /** Function to call on close (with a positive reply). */
  onConfirm: () => void;
}

class ConfirmDialog extends React.Component<IConfirmDialogProps, {}> {
  render() {
    let p = this.props;
    return (
      <Dialog open={p.open} onClose={p.onClose}>
        <Dialog.Header>{p.title ? p.title : 'Confirmation'}</Dialog.Header>
        <Dialog.Content>
          {p.children}
        </Dialog.Content>
        <Dialog.Footer>
          <Button negative onClick={p.onConfirm}>Yes</Button>
          <Button onClick={p.onClose}>No</Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}

export { ConfirmDialog };
