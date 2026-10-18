import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,t as l}from"./lighten-BkId_tvD.js";var u,d,f;function p(){return(p=t((()=>{n(),o(),r(),l(),u=s(),d=e=>{let t=(0,u.jsx)(`svg`,{children:(0,u.jsx)(`use`,{xlinkHref:`/spritemap.svg#caret-down`})});return(0,u.jsxs)(`div`,{className:e.className,onClick:e.onClick,children:[(!e.align||e.align===`left`)&&t,(0,u.jsx)(`span`,{children:e.children}),e.align===`right`&&t]})},f=a(d)`
  display: flex;
  ${e=>e.align===`right`&&i`justify-content: space-between;`}
  align-items: center;
  cursor: pointer;
  transition: color ${e=>e.theme.transition.duration}s ease; 
  padding: 8px 0 8px 0;

  /* User cannot select header text.
   * This prevents accidental selection when clicking the header.
   */
  user-select: none;

  /*
   * A styled accordion header has padding and 
   * has a lighter text color when active. 
   */
  ${e=>e.styled&&i`
    padding: 8px 10px 8px 10px;
    ${!e.active&&i`
      color: ${c(.5,e.theme.fontColor)};
    `}
  `}

  /* Icon rotates when active, and changes fill color. */
  & > svg {
    width: 17px;
    height: 17px; 
    transform: ${e=>e.align&&e.align===`right`?`rotate(90deg)`:`rotate(-90deg)`};
    transition: fill ${e=>e.theme.transition.duration}s ease, 
                transform ${e=>e.theme.transition.duration}s ease;
    fill: ${e=>c(.5,e.theme.fontColor)};
  }
  ${e=>e.active&&i`
    & > svg {
      transform: rotate(0deg);
      fill: ${e=>e.theme.fontColor};
    }
  `}

  &:hover {
    color: ${e=>e.theme.fontColor};
    & > svg {
      fill: ${e=>e.theme.fontColor};
    }
  }

  /* Separate title slightly from icon. */
  & > span {
    padding-left: 2px;
  }
`})))()}var m,h,g,_;function v(){return(v=t((()=>{m=e(n()),o(),r(),h=s(),g=e=>{let t=m.useRef(null),n=()=>{t.current&&(e.noanimate?(t.current.style.overflowY=`visible`,t.current.style.height=`auto`):requestAnimationFrame(()=>{t.current&&(t.current.style.height=`0px`,r())}))},r=()=>{requestAnimationFrame(()=>{t.current&&(t.current.style.height=Math.min(t.current.scrollHeight,t.current.clientHeight+30)+`px`,t.current.clientHeight<t.current.scrollHeight?r():(t.current.style.height=`auto`,t.current.style.overflowY=`visible`))})},i=()=>{t.current&&(e.noanimate?(t.current.style.height=`0px`,t.current.style.overflowY=`hidden`):requestAnimationFrame(()=>{t.current&&(t.current.style.height=t.current.scrollHeight+`px`,t.current.style.overflowY=`hidden`,a())}))},a=()=>{requestAnimationFrame(()=>{t.current&&(t.current.style.height=Math.max(0,t.current.clientHeight-30)+`px`,t.current.clientHeight>0&&a())})};return m.useEffect(()=>{setTimeout(()=>{e.active?n():i()},10)},[e.active]),(0,h.jsx)(`div`,{className:e.className,ref:t,children:(0,h.jsx)(`div`,{children:e.children})})},_=a(g)`
  box-sizing: border-box;
  height: ${e=>e.active?`auto`:0};
  overflow-y: hidden;

  & > div {
    padding: 4px 0 8px 0;
  }

  ${e=>e.styled&&i`
    & > div {
      padding: 8px 10px 12px 10px; 
    }
  `}  
`})))()}var y,b,x,S;function C(){return(C=t((()=>{n(),o(),r(),p(),v(),y=s(),b=e=>(0,y.jsxs)(`div`,{className:e.className,children:[(0,y.jsx)(f,{styled:e.styled,align:e.align,active:e.active,onClick:e.onClick,children:e.title}),(0,y.jsx)(_,{styled:e.styled,active:e.active,noanimate:e.noanimate,children:e.children})]}),x=a(b)`
  ${e=>e.styled&&i`
    &:not(:first-child) {
      ${f} {
        border-top: solid 1px ${e.theme.normalColor};
      }
    }
  `}
`,S=e=>e.hidden?null:(0,y.jsx)(x,{...e}),S.__docgenInfo={description:``,methods:[],displayName:`AccordionTab`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Tab title. Can be JSX.`},hidden:{required:!1,tsType:{name:`boolean`},description:`If true, tab is hidden.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click event callback.`},styled:{required:!1,tsType:{name:`boolean`},description:`@ignore (Not public) A styled accordion adds basic formatting.`},active:{required:!1,tsType:{name:`boolean`},description:`@ignore (Not public) Is this tab currently active?`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"@ignore (Not public) Align caret icon to `left` or `right`. Defaults to `left`."},noanimate:{required:!1,tsType:{name:`boolean`},description:`@ignore (Not public) If set, there will be no sliding animations.`}}}})))()}var w,T,E,D,O;function k(){return(k=t((()=>{w=e(n()),o(),r(),C(),T=s(),E=e=>{let[t,n]=w.useState(e.active??[]),r=r=>{e.multiple?n(t.indexOf(r)==-1?t.concat([r]):t.filter(e=>e!=r)):n([r])};return(0,T.jsx)(`div`,{className:e.className,children:w.Children.map(e.children,(n,i)=>w.cloneElement(n,{active:t.indexOf(i)!=-1,styled:e.styled,align:e.align,noanimate:e.noanimate,onClick:()=>r(i)}))})},D=a(E)`
  display: block;

  /* Margin:
     Attached accordions have no margin, except bottom-attached. */
  ${e=>(!e.attached||e.attached==`bottom`)&&i`margin-bottom: 1em;`}

  /* Styled has borders. */
  ${e=>e.styled&&i`
    /* Shadow: only unattached segments have a dropshadow. */
    ${!e.attached&&i`box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;`}
    /* A raised (and unattached) Accordion gets an extra deep shadow. */
    ${e.raised&&!e.attached&&i`box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;`}

    /* Attachment and border: */
    border-color: ${e.theme.normalColor};
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;

    /* Not attached: normal border. */
    ${!e.attached&&i`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-radius: ${e.theme.radius}px;
    `}
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
`,O=e=>(0,T.jsx)(D,{...e}),O.Tab=S,O.__docgenInfo={description:`An Accordion is used to group content in panes that can be expanded individually. \r
By default, an Accordion only allows one pane to be open at any time. A multiple \r
Accordion allows users to expand multiple panes. \r
\r
@example\r
<Accordion \r
  styled raised multiple\r
  <Accordion.Tab title="What is a dog?">\r
    <p>A dog is a type of domesticated animal.</p>\r
  </Accordion.Tab>\r
  <Accordion.Tab title="What kinds of dogs are there?">\r
    <p>There are many breeds of dogs.</p>\r
  </Accordion.Tab>\r
  <Accordion.Tab title="How do you acquire a dog?">\r
    <p>From pet shops, private owners, or shelters.</p>\r
  </Accordion.Tab>\r
</Accordion> \r
\r
@link https://henck.github.io/typeui/?path=/story/controls-accordion--properties`,methods:[{name:`Tab`,docblock:`Each accordion tab is an instance of Accordion.Tab.\r
\r
@example\r
<Accordion.Tab title="What is a dog?">\r
  <p>A dog is a type of domesticated animal.</p>\r
</Accordion.Tab>`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IAccordionTabProps`,alias:`IAccordionTabProps`}}],returns:null,description:`Each accordion tab is an instance of Accordion.Tab.`}],displayName:`Accordion`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},active:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`Array of panel indices that are active (open) by default (0-based)`},styled:{required:!1,tsType:{name:`boolean`},description:`A styled accordion adds basic formatting. \r
@default false`},raised:{required:!1,tsType:{name:`boolean`},description:`Adds ab extra-strong dropshadow. Applies only to styled Accordions. \r
@default false`},multiple:{required:!1,tsType:{name:`boolean`},description:`If set, the accordion can have multiple panels open at the same time. \r
By default, an accordion only allows a single panel open at any time.\r
@default false`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Align caret icon to `left` or `right`. \r\n@default left"},noanimate:{required:!1,tsType:{name:`boolean`},description:`If set, there will be no sliding animations. \r
@default false`},attached:{required:!1,tsType:{name:`union`,raw:`boolean | VerticalDirection`,elements:[{name:`boolean`},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]},description:"Attached to `top`, `bottom` or nothing (both)."}}}})))()}export{k as n,O as t};