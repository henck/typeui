import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Helpers
import { lighten } from '../../helper/lighten';
// Other controls
import { MessageHeader } from './MessageHeader';
import { MessageContent } from './MessageContent';
import { IconStyled } from '../Icon/Icon';
import { darken } from '../../helper/darken';
const MessageBase = (props) => _jsx("div", { className: props.className, children: props.children });
const MessageStyled = styled(MessageBase).attrs(p => ({
    colorSet: (p.type === 'info' ? p.theme.infoColor :
        (p.type === 'warning' ? p.theme.warningColor :
            (p.type === 'success' ? p.theme.successColor :
                (p.type === 'error' ? p.theme.errorColor :
                    (p.color ? { color: p.color, border: p.color, background: lighten(0.45, p.color) } :
                        { color: p.theme.fontColor, border: darken(0.2, p.theme.normalColor), background: p.theme.normalColor })))))
})) `
  padding: 14px 21px;
  
  /* Margin:
     Attached message have only margin when 'top' or 'bottom' attached. */
  margin-top: ${p => (!p.attached || p.attached === 'top') && css `4px`};
  margin-bottom: ${p => (!p.attached || p.attached === 'bottom') && css `4px`};

  /* Attachment and border: */
  border-style: solid;
  border-left-width: 1px;
  border-right-width: 1px;
  /* Not attached: normal border. */
  ${p => !p.attached && css `
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-radius: ${p => p.theme.radius}px;
  `}
  /* Middle attached: Only bottom border. */
  ${p => p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css `
    border-bottom-width: 1px;
    border-radius: none;
  `}      
  /* Top attached: Top and bottom border. */
  ${p => p.attached === 'top' && css `
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-left-radius: ${p.theme.radius}px;
    border-top-right-radius: ${p.theme.radius}px;
  `}
  /* Botom attached: Only bottom border. */
  ${p => p.attached === 'bottom' && css `
    border-bottom-width: 1px;
    border-bottom-left-radius: ${p.theme.radius}px;
    border-bottom-right-radius: ${p.theme.radius}px;
  `}

  /* A hidden message isn't shown. */
  ${p => p.hidden && css `display:none;`}

  /* Not hidden: */
  ${p => !p.hidden && css `
    /* If "icon" is present, then apply flex formatting. */
    ${p.icon && css `
      display: ${p.compact && css `inline-flex`}${!p.compact && css `flex`};
      ${IconStyled} {
        /* Icon color = border color */
        fill: ${p.colorSet.color};
        flex: 0;
        margin-right: 12px;
      }
    `}
    ${!p.icon && css `
      display: ${p.compact && css `inline-block`}${!p.compact && css `block`};
    `}
  `}

  /* Colors */
  border-color: ${p => p.colorSet.border};
  color: ${p => p.colorSet.color};
  background: ${p => p.colorSet.background};
  /* Attached messages can't be raised: */
  ${p => p.raised && !p.attached && css `box-shadow: 0px 2px 5px 1px ${p.colorSet.border};`}

  /* Unattached, raised messages have more bottom padding to show the dropshadow. */
  ${p => p.raised && !p.attached && css `
    margin-bottom: 12px;  
  `}

  /* Text alignment. */
  ${p => p.align === 'left' && css `text-align:left;`}
  ${p => p.align === 'center' && css `text-align:center;`}
  ${p => p.align === 'right' && css `text-align:right;`}
`;
/**
 * Displays an informational message block.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-message--properties
 */
const Message = (props) => _jsx(MessageStyled, { ...props });
Message.Header = MessageHeader;
Message.Content = MessageContent;
export { Message };
