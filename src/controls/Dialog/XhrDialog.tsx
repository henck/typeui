import * as React from 'react';
import styled from '../../styles/Theme';

// Other controls
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { List } from '../List/List';

interface IXhrDialogProps {
  /** 
   * Is the Dialog currently open? 
   * @default false
   */
  open?: boolean;
  /** 
   * Axios response object. 
   */
  error: any;
  /** 
   * Function to call when user selects the 'OK' option. 
   */
  onClose: () => void;
  /** 
   * Function to call when user selects the 'Retry' option. If not provided, retry option will not be available. 
   */
  onRetry?: () => void;
}

const Field = styled('span')`
  font-weight: 500;
`

const XhrDialog = (props: IXhrDialogProps) => {
  const getStatusHeader = () => {
    if(props.error.response) {
      switch(props.error.response.status) {
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
    } else if(props.error.request) {
      return props.error.message;
    } else {
      return "Internal error";
    }
  }

  const getStatusText = () => {
    if(props.error.response) {
      switch(props.error.response.status) {
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
    } else if(props.error.request) {
      return "There was a problem communicating with the server. Please try again later.";
    } else {
      return "There was a problem setting up the request to the server."
    }
  }

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <Dialog.Header>{props.error && getStatusHeader()}</Dialog.Header>
      <Dialog.Content>
        {props.error && <p>{getStatusText()}</p>}
        {props.error && props.error.response && props.error.response.status === 422 && props.error.response.data &&
          <>
            <Header size="h3">Details</Header>
            <List>
              {Object.keys(props.error.response.data).map((key) => 
                <List.Item key={key}>
                  <Field>{key}</Field>
                  <List>
                    {props.error.response.data[key].map((error:any, index:number) => 
                      <List.Item key={index}>{error}</List.Item>
                    )}
                  </List>
                </List.Item>
              )}
            </List>
          </>
        }
      </Dialog.Content>
      <Dialog.Footer>
        {props.onRetry && <Button primary onClick={props.onRetry}>Retry</Button>}
        <Button onClick={props.onClose}>OK</Button>
      </Dialog.Footer>
    </Dialog>
  );
}

export { XhrDialog, IXhrDialogProps };
