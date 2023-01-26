import * as React from 'react';

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
   * Axios error object. 
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

const HttpStatusCodes : { [index: number]: { header: string, desc: string }} = {
  100: {
    header: "Continue",
    desc:   "This interim response indicates that the client should continue the request or ignore the response if the request is already finished."
  },
  101: {
    header: "Switching protocols",
    desc:   "This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to."
  },
  102: {
    header: "Processing",
    desc:   "This code indicates that the server has received and is processing the request, but no response is available yet."
  },
  103: {
    header: "Early hints",
    desc:   "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response."
  },
  200: {
    header: "OK",
    desc:   "Operation successful."
  },
  201: {
    header: "Created",
    desc:   "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests."
  },
  202: {
    header: "Accepted",
    desc:   "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing."
  },
  203: {
    header: "Non-authoritative information",
    desc:   "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status."
  },
  204: {
    header: "No content",
    desc:   "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones."
  },
  205: {
    header: "Reset content",
    desc:   "Tells the user agent to reset the document which sent this request."
  },
  206: {
    header: "Partial content",
    desc:   "This response code is used when the Range header is sent from the client to request only part of a resource."
  },
  207: {
    header: "Multi-status",
    desc:   "Conveys information about multiple resources, for situations where multiple status codes might be appropriate."
  },
  208: {
    header: "Already reported",
    desc:   "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection."
  },
  226: {
    header: "IM Used",
    desc:   "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
  },
  300: {
    header: "Multiple Choices",
    desc:   "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)"
  },  
  301: {
    header: "Moved Permanently",
    desc:   "The URL of the requested resource has been changed permanently. The new URL is given in the response."
  },  
  302: {
    header: "Found",
    desc:   "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests."
  },  
  303: {
    header: "See other",
    desc:   "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
  },  
  304: {
    header: "Not modified",
    desc:   "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
  },  
  305: {
    header: "Use proxy deprecated",
    desc:   "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy."
  },  
  306: {
    header: "Unused",
    desc:   "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification."
  },  
  307: {
    header: "Temporary redirect",
    desc:   "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request."
  },  
  308: {
    header: "Permanent redirect",
    desc:   "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request."
  },  
  400: { 
    header: "Bad request", 
    desc:   "The server cannot process your request due to validation errors. Please verify that any form fields are filled out correctly." 
  },
  401: { 
    header: "Unauthorized",
    desc:   "Your session is not authenticated."
  },
  402: {
    header: "Payment required",
    desc:   "(No description provided.)"
  },
  403: { 
    header: "Forbidden",
    desc:   "You do not have sufficient permissions to execute this operation."
  },
  404: { 
    header: "Resource not found",
    desc:   "The request resource could not be found on the server."
  }, 
  405: { 
    header: "Method not allowed",
    desc:   "The database API tried to execute an HTTP method that was disallowed by the server. This may be indicative of a missing route implementation on the server."
  }, 
  406: {
    header: "Not acceptable",
    desc:   "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
  },
  407: {
    header: "Proxy authentication required",
    desc:   "Your session is not authenticated.  Authentication is needed to be done by a proxy."
  },
  408: {
    header: "Request timeout",
    desc:   "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
  },
  409: {
    header: "Conflict",
    desc:   "This response is sent when a request conflicts with the current state of the server."
  },
  410: {
    header: "Gone",
    desc:   "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. APIs should not feel compelled to indicate resources that have been deleted with this status code."
  },
  411: {
    header: "Length required",
    desc:   "Server rejected the request because the Content-Length header field is not defined and the server requires it."
  },
  412: {
    header: "Precondition failed",
    desc:   "The client has indicated preconditions in its headers which the server does not meet."
  },
  413: {
    header: "Payload too large",
    desc:   "Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field."
  },
  414: {
    header: "URI too long",
    desc:   "The URI requested by the client is longer than the server is willing to interpret."
  },
  415: {
    header: "Unsupported media type",
    desc:   "The media format of the requested data is not supported by the server, so the server is rejecting the request."
  },
  416: {
    header: "Range not satisfiable",
    desc:   "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
  },
  417: {
    header: "Expectation failed",
    desc:   "This response code means the expectation indicated by the Expect request header field cannot be met by the server."
  },
  418: { 
    header: "I'm a teapot",
    desc:   "The server refuses the attempt to brew coffee with teapot."
  }, 
  421: {
    header: "Misdirected request",
    desc:   "The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI."
  },
  422: { 
    header: "Validation problems",
    desc:   "The request could not be validated."
  }, 
  423: {
    header: "Locked",
    desc:   "The resource that is being accessed is locked."
  },
  424: {
    header: "Failed dependency",
    desc:   "The request failed due to failure of a previous request."
  },
  425: {
    header: "Too early",
    desc:   "Indicates that the server is unwilling to risk processing a request that might be replayed."
  },
  426: {
    header: "Upgrade required",
    desc:   "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s)."
  },
  428: {
    header: "Precondition required",
    desc:   "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
  },
  429: {
    header: "Too many requests",
    desc:   "The user has sent too many requests in a given amount of time (rate limiting)."
  },
  431: {
    header: "Request header fields too large",
    desc:   "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields."
  },
  451: {
    header: "Unavailable for legal reasons",
    desc:   "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government."
  },
  500: { 
    header: "Internal server error",
    desc:   "The server API encountered an error. This is indicative of a server implementation error.",
  }, 
  501: { 
    header: "Not implemented",
    desc:   "The request method is not supported by the server and cannot be handled. This may be indicative of a missing route implementation on the server."
  }, 
  502: { 
    header: "Bad gateway",
    desc:   "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."
  },
  503: {
    header: "Service unavailable",
    desc:   "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached."
  },
  504: {
    header: "Gateway timeout",
    desc:   "This error response is given when the server is acting as a gateway and cannot get a response in time."
  },
  505: {
    header: "HTTP version not supported",
    desc:   "The HTTP version used in the request is not supported by the server."
  },
  506: {
    header: "Variant also negates",
    desc:   "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."
  },
  507: {
    header: "Insufficient storage",
    desc:   "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."
  },
  508: {
    header: "Loop detected",
    desc:   "The server detected an infinite loop while processing the request."
  },
  510: {
    header: "Not extended",
    desc:   "Further extensions to the request are required for the server to fulfill it."
  },
  511: {
    header: "Network authentication failed",
    desc:   "Indicates that the client needs to authenticate to gain network access."
  }
}

const XhrDialog = (props: IXhrDialogProps) => {
  const getStatusHeader = () => {
    if(props.error.response) {
      const status = HttpStatusCodes[props.error.response.status];
      return status ? status.header : "Server error";
    } else if(props.error.request) {
      return props.error.message;
    } else {
      return "Internal error";
    }
  }

  const getStatusText = () => {
    if(props.error.response) {
      const status = HttpStatusCodes[props.error.response.status];
      return status ? status.desc : "An error occurred on the server. Please try again later.";
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
                  <span style={{fontWeight: 500}}>{key}</span>
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
