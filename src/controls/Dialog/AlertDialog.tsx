import * as React from 'react';

// Other controls
import { Button } from '../Button/Button';
import { Dialog } from './Dialog';

interface IAlertDialogProps {
  children?: React.ReactNode;
  /** Is the Dialog currently open? */
  open?: boolean;
  /** Title to show in alert dialog. If not specified, "Alert" */
  title?: string;
  /** Function to call on close. */
  onClose: () => void;
}

class AlertDialog extends React.Component<IAlertDialogProps, {}> {
  render() {
    let p = this.props;
    return (
      <Dialog open={p.open} onClose={p.onClose}>
        <Dialog.Header>{p.title ? p.title : 'Alert'}</Dialog.Header>
        <Dialog.Content>
          {p.children}
        </Dialog.Content>
        <Dialog.Footer>
          <Button onClick={p.onClose}>OK</Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}

export { AlertDialog };
