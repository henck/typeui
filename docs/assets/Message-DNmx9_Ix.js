import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./darken-Ccl44O0b.js";import{n as l,t as u}from"./lighten-BkId_tvD.js";import{n as d,r as f}from"./Icon-CbGLNh3A.js";var p,m,h,g;function _(){return(_=e((()=>{t(),n(),p=o(),m=e=>(0,p.jsx)(`div`,{className:e.className,children:e.children}),h=i(m)`
  font-weight: 500;
  font-size: 115%;
`,g=e=>(0,p.jsx)(h,{...e}),g.__docgenInfo={description:``,methods:[],displayName:`MessageHeader`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var v,y;function b(){return(b=e((()=>{t(),v=o(),y=e=>(0,v.jsx)(`div`,{className:e.className,children:e.children}),y.__docgenInfo={description:``,methods:[],displayName:`MessageContent`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var x,S,C,w;function T(){return(T=e((()=>{t(),n(),a(),u(),_(),b(),f(),s(),x=o(),S=e=>(0,x.jsx)(`div`,{className:e.className,children:e.children}),C=i(S).attrs(e=>({colorSet:e.type===`info`?e.theme.infoColor:e.type===`warning`?e.theme.warningColor:e.type===`success`?e.theme.successColor:e.type===`error`?e.theme.errorColor:e.color?{color:e.color,border:e.color,background:l(.45,e.color)}:{color:e.theme.fontColor,border:c(.2,e.theme.normalColor),background:e.theme.normalColor}}))`
  padding: 14px 21px;
  
  /* Margin:
     Attached message have only margin when 'top' or 'bottom' attached. */
  margin-top: ${e=>(!e.attached||e.attached===`top`)&&r`4px`};
  margin-bottom: ${e=>(!e.attached||e.attached===`bottom`)&&r`4px`};

  /* Attachment and border: */
  border-style: solid;
  border-left-width: 1px;
  border-right-width: 1px;
  /* Not attached: normal border. */
  ${e=>!e.attached&&r`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-radius: ${e=>e.theme.radius}px;
  `}
  /* Middle attached: Only bottom border. */
  ${e=>e.attached&&e.attached!==`top`&&e.attached!==`bottom`&&r`
    border-bottom-width: 1px;
    border-radius: none;
  `}      
  /* Top attached: Top and bottom border. */
  ${e=>e.attached===`top`&&r`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-left-radius: ${e.theme.radius}px;
    border-top-right-radius: ${e.theme.radius}px;
  `}
  /* Botom attached: Only bottom border. */
  ${e=>e.attached===`bottom`&&r`
    border-bottom-width: 1px;
    border-bottom-left-radius: ${e.theme.radius}px;
    border-bottom-right-radius: ${e.theme.radius}px;
  `}

  /* A hidden message isn't shown. */
  ${e=>e.hidden&&r`display:none;`}

  /* Not hidden: */
  ${e=>!e.hidden&&r`
    /* If "icon" is present, then apply flex formatting. */
    ${e.icon&&r`
      display: ${e.compact&&r`inline-flex`}${!e.compact&&r`flex`};
      ${d} {
        /* Icon color = border color */
        fill: ${e.colorSet.color};
        flex: 0;
        margin-right: 12px;
      }
    `}
    ${!e.icon&&r`
      display: ${e.compact&&r`inline-block`}${!e.compact&&r`block`};
    `}
  `}

  /* Colors */
  border-color: ${e=>e.colorSet.border};
  color: ${e=>e.colorSet.color};
  background: ${e=>e.colorSet.background};
  /* Attached messages can't be raised: */
  ${e=>e.raised&&!e.attached&&r`box-shadow: 0px 2px 5px 1px ${e.colorSet.border};`}

  /* Unattached, raised messages have more bottom padding to show the dropshadow. */
  ${e=>e.raised&&!e.attached&&r`
    margin-bottom: 12px;  
  `}

  /* Text alignment. */
  ${e=>e.align===`left`&&r`text-align:left;`}
  ${e=>e.align===`center`&&r`text-align:center;`}
  ${e=>e.align===`right`&&r`text-align:right;`}
`,w=e=>(0,x.jsx)(C,{...e}),w.Header=g,w.Content=y,w.__docgenInfo={description:`Displays an informational message block.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-message--properties`,methods:[{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IMessageHeaderProps`,alias:`IMessageHeaderProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IMessageContentProps`,alias:`IMessageContentProps`}}],returns:null}],displayName:`Message`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},icon:{required:!1,tsType:{name:`boolean`},description:"Setting `icon` will apply layout to the message to a allow a left-align icon. \r\n@default false"},hidden:{required:!1,tsType:{name:`boolean`},description:`A hidden message isn't shown. \r
@default false`},compact:{required:!1,tsType:{name:`boolean`},description:`A compact message only takes up as much space as its content requires. \r
@default false`},type:{required:!1,tsType:{name:`union`,raw:`'info' | 'warning' | 'success' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:"Message type: `info`, `warning`, `success` or `error`."},color:{required:!1,tsType:{name:`string`},description:`Message color. Color is used for border; background will be lighter.`},raised:{required:!1,tsType:{name:`boolean`},description:`A raised message has a dropshadow. \r
@default false`},attached:{required:!1,tsType:{name:`union`,raw:`boolean | VerticalDirection`,elements:[{name:`boolean`},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]},description:"Attached to `top`, `bottom` or nothing (both)."},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:"Align content to `left`, `center` or `right`. By default `left`."}}}})))()}export{T as n,w as t};