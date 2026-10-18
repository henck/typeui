import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./lighten-BkId_tvD.js";var l,u,d,f;function p(){return(p=e((()=>{t(),a(),n(),l=o(),u=e=>(0,l.jsx)(`div`,{className:e.className,children:e.children}),d=i(u)`
  position: relative;
  padding: 14px;

  ${e=>(!e.align||e.align==`left`)&&r`text-align: left;`}
  ${e=>e.align==`center`&&r`text-align: center;`}    
  ${e=>e.align==`right`&&r`text-align: right;`}      

  ${e=>e.secondary&&r`background: ${e.theme.normalColor};`}

  /* Multiple Card.Content elements are separated by a border. */
  &:not(:first-of-type) {
    border-top: solid 1px ${e=>e.theme.normalColor};
  }
`,f=e=>(0,l.jsx)(d,{...e}),f.__docgenInfo={description:``,methods:[],displayName:`Content`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:"Optional text alignment to `left`, `center` or `right` (default is `left`)."},secondary:{required:!1,tsType:{name:`boolean`},description:`Secondary card content has a dark background. \r
@default false`}}}})))()}var m,h,g,_;function v(){return(v=e((()=>{t(),a(),n(),m=o(),h=e=>(0,m.jsx)(`span`,{className:e.className,children:e.children}),g=i(h)`
  position: relative;
  display: block;
  padding: 14px 14px 0 14px;
  font-size: 20px;
  ${e=>(!e.align||e.align==`left`)&&r`text-align: left;`}
  ${e=>e.align==`center`&&r`text-align: center;`}    
  ${e=>e.align==`right`&&r`text-align: right;`}    
  &:last-child {
    padding-bottom: 12px;
  }
`,_=e=>(0,m.jsx)(g,{...e}),_.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:"Optional text alignment to `left`, `center` or `right` (default is `left`)."}}}})))()}var y,b,x,S;function C(){return(C=e((()=>{t(),n(),y=o(),b=e=>(0,y.jsx)(`span`,{className:e.className,children:e.children}),x=i(b)`
  position: relative;
  display: block;
  padding: 0 14px 0 14px;
  font-size: 80%;
  color: ${e=>e.theme.fontColor};
  &:last-child {
    padding-bottom: 12px;
  }  
`,S=e=>(0,y.jsx)(x,{...e}),S.__docgenInfo={description:``,methods:[],displayName:`Meta`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var w,T,E,D;function O(){return(O=e((()=>{t(),a(),n(),p(),v(),C(),c(),w=o(),T=e=>(0,w.jsx)(`div`,{className:e.className,onClick:e.onClick,children:e.children}),E=i(T)`
  display: inline-block;
  flex: 1;
  position: relative;
  width: ${e=>e.fluid?`100%`:`292px`};
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 16px;

  text-align: left; /* Undo parent text-align */
  overflow: hidden; /* Make child elements follow card's rounded corners */
  
  /* Colors */
  background: ${e=>s(.05,e.theme.background)};
  border: solid 1px ${e=>e.theme.normalColor};
  border-radius: ${e=>e.theme.radius}px;
  ${e=>!e.raised&&r`box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;`}
  ${e=>e.raised&&r`box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;`}

  ${e=>e.onClick&&r`
    cursor: pointer;
    transition: margin ${e.theme.transition.duration}s ease,
                box-shadow ${e.theme.transition.duration}s ease;
    &:hover {
      margin-top: 3px;
      margin-bottom: 12px;
      ${!e.raised&&r`box-shadow: rgba(34, 36, 38, 0.3) 0px 2px 3px 0px;`}
      ${e.raised&&r`box-shadow: rgba(34, 36, 38, 0.24) 0px 2px 4px 0px, rgba(34, 36, 38, 0.3) 0px 2px 10px 0px;`}
    }
  `}
`,D=e=>(0,w.jsx)(E,{...e}),D.Header=_,D.Meta=S,D.Content=f,D.__docgenInfo={description:`A Card groups information with an optional header and footer.\r
\r
@example\r
<Card fluid onClick={() => ...)}>\r
  <Card.Header>Card header</Card.Header>\r
  <Card.Meta>Meta content</Card.Meta>\r
  <Card.Content>\r
    Main content of the Card goes into a Card.Content element.\r
  </Card.Content>\r
  <Card.Content secondary>\r
    Secondary content has the secondary attribute set.\r
  </Card.Content>    \r
</Card>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-card--properties`,methods:[{name:`Header`,docblock:"A `Card` can have a `Card.Header` element.",modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`ICardHeaderProps`,alias:`ICardHeaderProps`}}],returns:null,description:"A `Card` can have a `Card.Header` element."},{name:`Meta`,docblock:"A `Card` can have a `Card.Meta` element.",modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`ICardMetaProps`,alias:`ICardMetaProps`}}],returns:null,description:"A `Card` can have a `Card.Meta` element."},{name:`Content`,docblock:"A `Card` can have any number of `Card.Content` elements inside it.",modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`ICardContentProps`,alias:`ICardContentProps`}}],returns:null,description:"A `Card` can have any number of `Card.Content` elements inside it."}],displayName:`Card`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},fluid:{required:!1,tsType:{name:`boolean`},description:"A `fluid` Card occupies all width available to it. \r\n@default false"},raised:{required:!1,tsType:{name:`boolean`},description:"A `raised` Card will have an extra-strong dropshadow. \r\n@default false"},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`A Card can be clickable. If an event handler is set, then the Card will \r
respond to mouse hover.`}}}})))()}export{O as n,D as t};