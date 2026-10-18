import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{n as c,r as l,t as u}from"./Icon-CbGLNh3A.js";import{n as d,t as f}from"./Hint-BCJZ_IHC.js";var p,m,h,g,_,v,y;function b(){return(b=t((()=>{p=e(n()),r(),o(),l(),d(),m=s(),h=a.div`
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
`,g=a.div`
`,_=e=>{let t=p.Children.count(e.children)!=0;return(0,m.jsxs)(`div`,{className:e.className,children:[(0,m.jsx)(h,{children:e.label}),(0,m.jsxs)(g,{onClick:e.onClick,children:[t?e.children:`-`,`\xA0`,e.onClick&&(0,m.jsx)(u,{name:`link`})]}),e.hint&&(0,m.jsx)(f,{children:e.hint})]})},v=a(_)`
  padding-bottom: 8px;

  /* If the label is a link, then give it a pointer cursor, and hover color. */
  ${g} {
    position: relative;
    ${e=>!e.nobackground&&i`
      background: #f0f0f0;
      padding: 2px 8px;
      border-radius: ${e.theme.radius}px;
    `}

    ${e=>e.onClick&&i`
      cursor: pointer;
      transition: background-color ${e=>e.theme.transition.duration*2}s ease,
                  color ${e=>e.theme.transition.duration*2}s ease;
      &:hover {
        color: #fff;
        svg {
          fill: #fff;
        }
        background-color: ${e.theme.primaryColor};
      }      
    `}
  } 

  ${c} {
    position: absolute;
    right: 6px;
    top: 2px;
  }
  
  /* Fields may provide their width in relative units to other fields. */
  ${e=>e.width&&i`flex: ${e.width}`}
`,y=e=>(0,m.jsx)(v,{...e}),y.__docgenInfo={description:`Displays a value with a label above it. A LabelledValue is just that: a label and \r
a value. It is used for view-only data. There is a very slight color change when the \r
mouse hovers over the value.\r
\r
@example\r
<LabelledValue label="My label">{value}</LabelledValue>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-labelledvalue--properties`,methods:[],displayName:`LabelledValue`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},label:{required:!0,tsType:{name:`string`},description:`Label to show above value.`},width:{required:!1,tsType:{name:`number`},description:`Optional flex width.`},nobackground:{required:!1,tsType:{name:`boolean`},description:`If set, then the LabelledValue has no background color. \r
@default false`},hint:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional hint text. Can be JSX.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`If onClick is specified, then the label has a link appearance.`}}}})))()}export{b as n,y as t};