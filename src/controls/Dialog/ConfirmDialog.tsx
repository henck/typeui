import * as React from 'react';
import styled from '../../styles/Theme';
import { Button } from '../../controls';
import { Dialog } from './Dialog';

interface IConfirmDialogProps {
  open?: boolean;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

class ConfirmDialog extends React.Component<IConfirmDialogProps, {}> {
  render() {
    let p = this.props;
    return (
      <Dialog open={p.open} onClose={p.onClose}>
        <Dialog.Header>Confirmation</Dialog.Header>
        <Dialog.Content>
          <p>{p.message}</p>
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


