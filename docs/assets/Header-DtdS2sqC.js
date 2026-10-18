import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{a as c,n as l,r as u}from"./Icon-CbGLNh3A.js";var d,f,p,m,h;function g(){return(g=t((()=>{d=e(n()),r(),f=s(),p=class extends d.Component{constructor(...e){super(...e),this.render=()=>(0,f.jsx)(`div`,{className:this.props.className,children:this.props.children})}},m=a(p)`
  font-weight: 500;
  font-size: 60%;
`,h=class extends d.Component{constructor(...e){super(...e),this.render=()=>(0,f.jsx)(m,{...this.props})}},h.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Subheader`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var _,v,y,b;function x(){return(x=t((()=>{n(),r(),_=s(),v=e=>(0,_.jsx)(`div`,{className:e.className,children:e.children}),y=a(v)`
  display: block;
  line-height: 1em;
`,b=e=>(0,_.jsx)(y,{...e}),b.__docgenInfo={description:``,methods:[],displayName:`HeaderContent`,props:{className:{required:!1,tsType:{name:`string`},description:`ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`ignore`}}}})))()}function S(e){return parseInt(e.substr(-1))}function C(e,t,n,r){let i=-(S(e)-1);return c(i,n,r)+(t?`em`:`rem`)}function w(e,t,n,r,i){let a=-(S(e)-1);return c(a,n,r)*i+(t?`em`:`rem`)}var T,E,D,O,k;function A(){return(A=t((()=>{T=e(n()),o(),r(),g(),x(),u(),E=s(),D=class extends T.Component{render(){return T.createElement(this.props.size,{className:this.props.className,onClick:this.props.onClick},this.props.children)}},O=a(D)`
  position: relative;
  /* Items inside header are center-aligned. */
  display: flex;
  align-items: center;

  /* font-family: 'Roboto Condensed', sans-serif; */
  font-size: ${e=>C(e.size,e.relative,e.theme.headerBase,e.theme.scaleRatio)};
  line-height: ${e=>w(e.size,e.relative,e.theme.headerBase,e.theme.scaleRatio,e.theme.heightRatio)};

  /* Text color */
  ${e=>e.disabled&&i`color: #888;`}
  ${e=>!e.disabled&&!e.color&&i`color: ${e.theme.fontColor};`}
  ${e=>!e.disabled&&e.color&&i`color: ${e.color};`};

  /* Dividing */
  ${e=>e.dividing&&i`border-bottom: solid 1px rgba(34, 36, 38, 0.15);`}

  /* Margin: only unattached headers get margin. */
  ${e=>!e.attached&&i`margin: 14px 0 14px 0;`}
  ${e=>e.attached&&i`margin: 0;`}

  /* Block */
  ${e=>e.block&&i`
    padding: 14px;
    border: solid 1px rgba(34, 36, 38, 0.15);
    background: #f0f0f0;
    border-radius: ${e.theme.radius}px;
  `}

  /* Attachment and border: */
  /* Attached headers get a border. */
  ${e=>e.attached&&i`
    padding: 14px;
    border-color: rgba(34, 36, 38, 0.15);
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;
    /* Middle attached: Only bottom border. */
    ${e.attached&&e.attached!==`top`&&e.attached!==`bottom`&&i`
      border-bottom-width: 1px;
      border-radius: none;
    `}      
    /* Top attached: Top and bottom border. */
    ${e.attached===`top`&&i`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-left-radius: ${e.theme.radius}px;
      border-top-right-radius: ${e.theme.radius}px;
    `}
    /* Botom attached: Only bottom border. */
    ${e.attached===`bottom`&&i`
      border-bottom-width: 1px;
      border-bottom-left-radius: ${e.theme.radius}px;
      border-bottom-right-radius: ${e.theme.radius}px;
    `}      
  `}

  /* Floating */
  ${e=>e.float===`left`&&i`float:left;`}
  ${e=>e.float===`right`&&i`float:right;`}      

  /* Add hand cursor for clickable headers. */
  ${e=>e.onClick&&i`cursor:pointer;`}

  /* Any items contained inside the header get a little 
     margin to offset them from the header text. */
  & > * {
    margin-right: 8px;
  }

  /* Content alignment. */
  ${e=>e.align===`left`&&i`justify-content:flex-start;`}
  ${e=>e.align===`center`&&i`justify-content:center;`}
  ${e=>e.align===`right`&&i`justify-content:flex-end;`}  

  /* Icon: icon emphasis */ 
  ${e=>e.icon&&i`
    flex-direction: column;
    justify-content: center;
    ${l} {
      font-size: 250%;
    }
  `}
`,k=e=>(0,E.jsx)(O,{...e}),k.Subheader=h,k.Content=b,k.__docgenInfo={description:`The <Header> component offers sizes h1..h6. The size ratio is determined using the\r
modularScale algorithm. Starting at 1rem (normal text), h6 is the next\r
scale up, h5 the scale after that and so on. The actual scale ratio can be defined in\r
the theme.\r
\r
By default header sizes are in 'rem', but by adding the 'relative' attribute they\r
will be in 'em' and header size will be relative to the header's container's \r
font-size.\r
\r
* 'size' is a mandatory attribute.\r
\r
@example\r
<Header size='h1'>Hello, world</Header>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-header--properties`,methods:[{name:`Content`,docblock:`Header.Content is used to group header content (allowing for Subheader).`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IHeaderContentProps`,alias:`IHeaderContentProps`}}],returns:null,description:`Header.Content is used to group header content (allowing for Subheader).`}],displayName:`Header`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Fired when header is clicked.`},size:{required:!0,tsType:{name:`union`,raw:`'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`}]},description:"Header size: one of `h1` through `h6`."},relative:{required:!1,tsType:{name:`boolean`},description:`By default, header sizes are absolute and use rem units. When \r
relative sizes are selected, 'em' units are used and the header size \r
is relative to the container's font-size. \r
@default false`},disabled:{required:!1,tsType:{name:`boolean`},description:`Have header show as inactive. \r
@default false`},float:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"A Header can float to the `left` or to the `right`."},block:{required:!1,tsType:{name:`boolean`},description:`Draw block around header \r
@default false`},attached:{required:!1,tsType:{name:`union`,raw:`boolean | VerticalDirection`,elements:[{name:`boolean`},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]},description:`Attached to 'top', 'bottom' or nothing (both).`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:"Align content to `left`, `center` or `right`. By default `left`."},color:{required:!1,tsType:{name:`string`},description:"Header color, e.g. `skyblue`."},dividing:{required:!1,tsType:{name:`boolean`},description:`A dividing header has a bottom border. \r
@default false`},icon:{required:!1,tsType:{name:`boolean`},description:`Emphasize icon in header \r
@default false`}}}})))()}export{A as n,k as t};