import * as React from 'react';
import styled from '../../styles/Theme';
import { Button, Message, Header } from '../../controls';
import { Dialog } from './Dialog';
import { List } from '../List';

interface IErrorDialogProps {
  open?: boolean;
  error: any;
  onClose?: () => void;
  onRetry?: () => void;
}

const Field = styled('span')`
  font-weight: 500;
`

class XhrDialog extends React.Component<IErrorDialogProps, {}> {
  getStatusHeader() {
    if(this.props.error.response) {
      switch(this.props.error.response.status) {
        case 401: return "Unauthorized";
        case 403: return "Forbidden";
        case 404: return "Resource not found";
        case 405: return "Method not allowed";
        case 418: return "I'm a teapot";
        case 422: return "Validation problems";
        case 500: return "Internal server error";
        case 501: return "Not implemented";
        case 502: return "Bad gateway";
        default: return "Server error";
      }
    } else if(this.props.error.request) {
      return this.props.error.message;
    } else {
      return "Internal error";
    }
  }

  getStatusText() {
    if(this.props.error.response) {
      switch(this.props.error.response.status) {
        case 401: return "Your session is not authenticated.";
        case 403: return "You do not have sufficient permissions to execute this operation.";
        case 404: return "The request endpoint could not be found on the server.";
        case 405: return "The database API tried to execute an HTTP method that was disallowed by the server. This may be indicative of a missing route implementation on the server.";
        case 418: return "The server refuses the attempt to brew coffee with teapot.";
        case 422: return "The request could not be validated.";
        case 500: return "The server API encountered an error. This is indicative of a server implementation error.";
        case 501: return "The request method is not supported by the server and cannot be handled. This may be indicative of a missing route implementation on the server.";
        default: return "An error occurred on the server. Please try again later.";
      }
    } else if(this.props.error.request) {
      return "There was a problem communicating with the server. Please try again later.";
    } else {
      return "There was a problem setting up the request to the server."
    }
  }

  render() {
    let p = this.props;
    return (
      <Dialog open={p.open} onClose={p.onClose}>
        <Dialog.Header>{p.error && this.getStatusHeader()}</Dialog.Header>
        <Dialog.Content>
          {p.error && <p>{this.getStatusText()}</p>}
          {p.error && p.error.response && p.error.response.status === 422 && p.error.response.data &&
            <React.Fragment>
              <Header size="h3">Details</Header>
              <List>
                {Object.keys(p.error.response.data).map((key) => 
                  <List.Item key={key}>
                    <Field>{key}</Field>
                    <List>
                      {p.error.response.data[key].map((error:any, index:number) => 
                        <List.Item key={index}>{error}</List.Item>
                      )}
                    </List>
                  </List.Item>
                )}
              </List>
            </React.Fragment>
          }
        </Dialog.Content>
        <Dialog.Footer>
          {p.onRetry && <Button primary onClick={p.onRetry}>Retry</Button>}
          <Button onClick={p.onClose}>OK</Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}

export { XhrDialog };


