import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";var s,c,l,u;function d(){return(d=e((()=>{t(),a(),n(),s=o(),c=e=>(0,s.jsx)(`div`,{className:e.className,children:(0,s.jsx)(`span`,{children:e.children})}),l=i(c)`
  position: relative; // For internal <span> positioning.
  box-sizing: border-box;
  font-weight: 500;
  background-color: ${e=>e.theme.background};

  // A divider always clears content above it.
  clear: both;

  // Margin:
  // A fitted divider has no vertical margin. 
  // A section divider has double vertical margin.
  margin: 14px 0;
  ${e=>e.fitted&&r`margin: 0;`}
  ${e=>e.narrow&&r`margin: 7px 0;`}
  ${e=>e.section&&r`margin: 28px 0;`}

  // Border:
  // A hidden divider has no dividing line.
  border-top: solid 1px ${e=>e.hidden?`transparent`:e.theme.normalColor};

  // A <span> is used to center the <Divider>'s content vertically.
  & > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0 16px;
    background: inherit;
  }

  // Any elements contained in the <Divider> get their vertical margins removed 
  // to vertically center them properly.  An example would be a <Header> 
  // contained in the <Divider>.
  & span * {
    margin-top: 0;
    margin-bottom: 0;
  }
`,u=e=>(0,s.jsx)(l,{...e}),u.__docgenInfo={description:`A Divider is used to separate blocks of contents vertically. Dividers \r
can be invisible or contain a horizontal line. Dividers can also contain \r
content.\r
\r
@example\r
<Divider>OR</Divider>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-divider--properties`,methods:[],displayName:`Divider`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},fitted:{required:!1,tsType:{name:`boolean`},description:`A fitted Divider has no space above or below it. \r
@default false`},hidden:{required:!1,tsType:{name:`boolean`},description:`A hidden Divider divides content without a dividing line. \r
@default false`},section:{required:!1,tsType:{name:`boolean`},description:`A section Divider creates more margin between blocks of content. \r
@default false`},narrow:{required:!1,tsType:{name:`boolean`},description:`A narrow Divider creates less margin between blocks of content.\r
@default false`}}}})))()}export{d as n,u as t};