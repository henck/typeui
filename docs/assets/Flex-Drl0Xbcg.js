import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";var c,l,u,d,f;function p(){return(p=t((()=>{c=e(n()),o(),r(),l=s(),u=e=>(0,l.jsx)(`div`,{className:e.className,children:c.Children.map(e.children,t=>t?c.cloneElement(t,{stackable:e.stackable,gutter:e.gutter}):null)}),d=a(u)`
  display: flex;
  flex-direction: row;
  padding: ${e=>e.compact?0:e.gutter*e.theme.gutter}em 0;
  &:first-of-type { padding-top: 0; }
  &:last-of-type { padding-bottom: 0; }    
  ${e=>e.stackable&&i`
    @media (max-width: ${e=>e.theme.smallScreen}px) {
      flex-direction: column;
    }  
  `}
  ${e=>e.divided&&i`
    &:not(:last-of-type) {
      border-bottom: solid 1px ${e=>e.theme.normalColor};
    }
  `}
`,f=e=>(0,l.jsx)(d,{...e}),f.__docgenInfo={description:``,methods:[],displayName:`Row`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},stackable:{required:!1,tsType:{name:`boolean`},description:`@ignore`},divided:{required:!1,tsType:{name:`boolean`},description:`@ignore`},compact:{required:!1,tsType:{name:`boolean`},description:`@ignore`},gutter:{required:!1,tsType:{name:`number`},description:`@ignore`}}}})))()}var m,h,g,_;function v(){return(v=t((()=>{n(),o(),r(),m=s(),h=e=>(0,m.jsx)(`div`,{className:e.className,children:e.children}),g=a(h)`
  ${e=>e.width&&i`flex: ${e.width};`}
  padding: 0 ${e=>e.gutter*e.theme.gutter}em;
  &:first-child { padding-left: 0; }
  &:last-child { padding-right: 0; }  
  ${e=>e.stackable&&i`
    @media (max-width: ${e=>e.theme.smallScreen}px) {
      padding: ${e.gutter*e.theme.gutter}em 0;
      &:first-child { padding-top: 0; }
      &:last-child { padding-bottom: 0; }        
    }
  `}
`,_=e=>(0,m.jsx)(g,{...e}),_.__docgenInfo={description:``,methods:[],displayName:`Column`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},width:{required:!1,tsType:{name:`number`},description:`Column relative weight, for cell growth. If not specified, cell doesn't flex.`},stackable:{required:!1,tsType:{name:`boolean`},description:`@ignore`},gutter:{required:!1,tsType:{name:`number`},description:`@ignore`}}}})))()}var y,b,x,S;function C(){return(C=t((()=>{n(),o(),r(),y=s(),b=e=>(0,y.jsx)(`span`,{className:e.className,children:e.children}),x=a(b)`
  position:       absolute;
  top:            50%;
  left:           50%;
  width:          auto;
  height:         50%;
  z-index:        1;
  transform:      translateX(-50%);
  line-height:    0;
  font-weight:    500;
  text-transform: uppercase;  
  text-align:     center;
  &:before, &:after {
    content:      '';
    position:     absolute;
    left:         50%;
    width:        0;
    height:       calc(100% - 1em);
    border-left:  solid 1px ${e=>e.theme.normalColor};
  }
  &:before { 
    bottom:       0;
  }
  &:after {
    top:          -100%;
  }
  ${e=>e.stackable&&i`
    @media (max-width: ${e=>e.theme.smallScreen}px) {
      width:        100%;
      height:       auto;
      &:before, &:after {
        left:       auto;
        top:        50%;
        width:      calc(50% - 2em);
        height:     0;
        border-top: solid 1px ${e=>e.theme.normalColor};
      }
      &:before {
        left:       0;
      }
      &:after {
        right:      0;
      }
    }  
  `}  
`,S=e=>(0,y.jsx)(x,{...e}),S.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},stackable:{required:!1,tsType:{name:`boolean`},description:`@ignore`}}}})))()}var w,T,E,D;function O(){return(O=t((()=>{n(),r(),o(),w=s(),T=e=>(0,w.jsx)(`div`,{className:e.className,children:e.children}),E=a(T)`
  display: flex;
  ${e=>e.gap&&i`
    gap: ${e.gap};
  `}
  align-items: ${e=>e.align||`center`};
  & > * {
    margin-right: 4px;
  }
`,D=e=>(0,w.jsx)(E,{...e}),D.__docgenInfo={description:``,methods:[],displayName:`Quick`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},align:{required:!1,tsType:{name:`union`,raw:`'top' | 'center' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'bottom'`}]},description:"Flex vertical alignment of \\`top\\`, \\`center\\` or \\`bottom\\`. By default, \r\n'center' is used. \r\n@default center"},gap:{required:!1,tsType:{name:`string`},description:`Optional flex gap (as a string, e.g. "8px").`}}}})))()}var k,A,j;function M(){return(M=t((()=>{k=e(n()),R(),A=s(),j=e=>{let t=k.Children.toArray(e.children);return(0,A.jsx)(L,{stackable:!0,compact:!0,children:t.map((n,r)=>r%e.count===0?t.slice(r,r+e.count):null).filter(e=>e).map((t,n)=>{for(;t.length<e.count;)t.push(null);return(0,A.jsx)(L.Row,{children:t.map((e,t)=>(0,A.jsx)(L.Column,{width:1,children:e},t))},n)})})},j.__docgenInfo={description:``,methods:[],displayName:`Columns`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},count:{required:!0,tsType:{name:`number`},description:`Number of columns to show.`}}}})))()}var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n()),r(),p(),v(),C(),O(),M(),P=s(),F=e=>{let t=1;return e.relaxed&&(t*=2),e.relaxed===`very`&&(t*=2),(0,P.jsx)(`div`,{className:e.className,children:N.Children.map(e.children,n=>n==null?null:N.cloneElement(n,{stackable:e.stackable,divided:e.divided,compact:e.compact,gutter:t}))})},I=a(F)`
  position: relative;
  display: flex;
  /* Flex is column-first, then row. */
  flex-direction: column;
`,L=e=>(0,P.jsx)(I,{...e}),L.Row=f,L.Column=_,L.Divider=S,L.Quick=D,L.Columns=j,L.__docgenInfo={description:`A Flex is used to create rows and columns that space equally.\r
\r
@example\r
<Flex>\r
  <Flex.Row>\r
    <Flex.Column>\r
      <Box color="goldenrod">One</Box>\r
    </Flex.Column>\r
    <Flex.Column>\r
      <Box>Two</Box>\r
    </Flex.Column>\r
  </Flex.Row>\r
  <Flex.Row>\r
    <Flex.Column>\r
      <Box color="skyblue">Three</Box>\r
    </Flex.Column>\r
    <Flex.Column>\r
      <Box color="LightSalmon">Four</Box>\r
    </Flex.Column>\r
  </Flex.Row>\r
</Flex>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-flex--properties`,methods:[{name:`Row`,docblock:`There can be multiple Flex.Row elements, but there is no vertical connection\r
between cells (this is not a grid).`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IRowProps`,alias:`IRowProps`}}],returns:null,description:`There can be multiple Flex.Row elements, but there is no vertical connection\r
between cells (this is not a grid).`},{name:`Column`,docblock:`The width attribute of Flex.Column can be used to give weight to a column.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IColumnProps`,alias:`IColumnProps`}}],returns:null,description:`The width attribute of Flex.Column can be used to give weight to a column.`},{name:`Divider`,docblock:`A Flex.Divider can be added between two columns. This only works for exactly \r
two columns. The divider automatically becomes horizontal when the screen is \r
narrow enough and the Flex is stackable. An optional text can be placed in the \r
divider element.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IDividerProps`,alias:`IDividerProps`}}],returns:null,description:`A Flex.Divider can be added between two columns. This only works for exactly \r
two columns. The divider automatically becomes horizontal when the screen is \r
narrow enough and the Flex is stackable. An optional text can be placed in the \r
divider element.`},{name:`Quick`,docblock:`A Flex.Quick is used to vertically-align content in a row, and putting small \r
spacing between items. Optionally, an align prop of center, top or bottom can \r
be provided. The default is center.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IQuickProps`,alias:`IQuickProps`}}],returns:null,description:`A Flex.Quick is used to vertically-align content in a row, and putting small \r
spacing between items. Optionally, an align prop of center, top or bottom can \r
be provided. The default is center.`},{name:`Columns`,docblock:`Flex.Columns takes an array of children and builds them into stackable \r
rows that contain exactly count items per row. The final row is filled up \r
with null-elements.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IColumnsProps`,alias:`IColumnsProps`}}],returns:null,description:`Flex.Columns takes an array of children and builds them into stackable \r
rows that contain exactly count items per row. The final row is filled up \r
with null-elements.`}],displayName:`Flex`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},stackable:{required:!1,tsType:{name:`boolean`},description:`A stackable flex stacks when screen gets small. \r
@default false`},divided:{required:!1,tsType:{name:`boolean`},description:`A divided Flex shows a *horizontal* dividing line between rows, in the gutter. \r
Use a \`<Divider/>\` for a vertical dividing line. \r
@default false`},compact:{required:!1,tsType:{name:`boolean`},description:`A compact Flex has no VERTICAL gutter. \r
@default false`},relaxed:{required:!1,tsType:{name:`union`,raw:`'very' | boolean`,elements:[{name:`literal`,value:`'very'`},{name:`boolean`}]},description:"A `relaxed` Flex has twice the gutter width, and a `very relaxed` Flex has 4 times gutter width. \r\n@default false"}}}})))()}export{R as n,L as t};