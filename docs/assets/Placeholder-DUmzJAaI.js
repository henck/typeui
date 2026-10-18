import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{i as r,n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";var l,u,d,f;function p(){return(p=t((()=>{n(),i(),l=c(),u=e=>(0,l.jsx)(`div`,{className:e.className,children:e.children}),d=o(u)`
  position: relative;
  background: transparent;

  /* The padding on top of the paragraph is later overdrawn
  * by :before, to give the paragraph some whitespace
  * on top. 
  * (This does not happen for the first paragraph in a collection.) */
  &:not(:first-child) {
    padding-top: 18px;
    &:before {
      position: absolute;
      content: '';
      top: 0px;
      height: 18px;
      left: 0;
      right: 0;
      background: #fff;
    }
  }
`,f=e=>(0,l.jsx)(d,{...e}),f.__docgenInfo={description:``,methods:[],displayName:`PlaceholderParagraph`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`}}}})))()}var m,h,g,_;function v(){return(v=t((()=>{n(),i(),s(),m=c(),h=e=>(0,m.jsx)(`div`,{className:e.className}),g=o(h)`
  ${e=>e.rectangular&&a`padding-bottom: 75%;`}
  ${e=>!e.rectangular&&a`padding-bottom: 100%;`}
  background: transparent;
`,_=e=>(0,m.jsx)(g,{...e}),_.__docgenInfo={description:``,methods:[],displayName:`PlaceholderImage`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},rectangular:{required:!1,tsType:{name:`boolean`},description:`A rectangular image has a 4:3 ratio. \r
@default false`}}}})))()}var y,b,x,S;function C(){return(C=t((()=>{n(),i(),s(),y=c(),b=e=>(0,y.jsx)(`div`,{className:e.className,children:e.children}),x=o(b)`
  position: relative;
  background: transparent;
  border-top: solid 1px #fff;
  
  /* Separator between image and lines */
  ${e=>e.image&&a`
    margin-left: 54px;
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      left: -10px;
      top: -1px;
      bottom: 0;
      width: 10px;
      background: #fff;
    }
  `}

  /* White block under lines */
  padding-bottom: 12px;
  &:after {
    position: absolute;
    z-index: 1;
    content: '';
    left: 0;
    bottom: 0;
    height: 12px;
    right: 0;
    background: #fff;
  }
`,S=e=>(0,y.jsx)(x,{...e}),S.__docgenInfo={description:``,methods:[],displayName:`PlaceholderHeader`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},image:{required:!1,tsType:{name:`boolean`},description:`If true, header will contain a small image placeholder. \r
@default false`}}}})))()}var w,T,E,D,O,k,A;function j(){return(j=t((()=>{w=e(n()),i(),s(),T=c(),E=e=>(0,T.jsx)(`div`,{className:e.className}),D=12,O=7,k=o(E).attrs(e=>({lineSpacing:D,height:e.tall?9:O}))`
  /* The base line is white. It is the area above the see-through
     line. It serves as a reference point for :before and
     :after which draw the actual see-through line. */
  position: relative;
  background: #fff;

  /* Spacing between lines
     The white spacing block has zero height for the last line in
     a collection of lines. */
  height: 0px;
  &:not(:last-child) {  height: ${e=>e.lineSpacing}px; }

  /* Line height */
  margin-top: ${e=>e.height}px;

  /* :after draws a white area over the line, in order 
     to shorten the see-through line to the desired length. */
  &:after {
    content: '';
    position: absolute;
    ${e=>e.length===`full`&&a`left: 100%;`}
    ${e=>e.length===`long`&&a`left: 75%;`}
    ${e=>e.length===`medium`&&a`left: 50%;`}
    ${e=>e.length===`short`&&a`left: 25%;`}
    right: 0;
    top: -${e=>e.height}px;
    height: ${e=>e.height}px;
    background: #fff;
  }
`,A=e=>{let t=w.useRef((()=>{let t=[`short`,`medium`,`long`,`full`],n=t[Math.floor(Math.random()*t.length)];return e.length||n})());return(0,T.jsx)(k,{...e,length:t.current})},A.__docgenInfo={description:``,methods:[],displayName:`PlaceholderLine`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},length:{required:!1,tsType:{name:`union`,raw:`'full' | 'long' | 'medium' | 'short'`,elements:[{name:`literal`,value:`'full'`},{name:`literal`,value:`'long'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'short'`}]},description:`Length of line: 'full', 'long', 'medium' or 'short'. If not provided,\r
then the length will be randomized.`},tall:{required:!1,tsType:{name:`boolean`},description:`A tall line is a little higher than a normal line. \r
@default false`}}}})))()}var M,N,P,F,I;function L(){return(L=t((()=>{n(),i(),s(),p(),v(),C(),j(),M=c(),N=e=>(0,M.jsxs)(`div`,{className:e.className,children:[e.children,(0,M.jsx)(`div`,{})]}),P=r`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`,F=o(N)`
  position: relative;
  z-index: 0;
  overflow: hidden;

  /* Fluid */
  ${e=>!e.fluid&&a`max-width: 420px;`}

  /* Background animation. 
     This is done using an underlying absolute positioned div, which is transformed, 
     rather than using background-position animation. This way, the animation is 
     smoother and GPU-accelerated. */
  & > div:last-child {
    position: absolute;
    left: 0;
    top: 0;
    right: -150%;
    bottom: 0;
    z-index: -1;
    background-color: #fff;
    background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);
    animation: ${P} 1s linear infinite;                
  }
`,I=e=>(0,M.jsx)(F,{...e}),I.Paragraph=f,I.Image=_,I.Header=S,I.Line=A,I.__docgenInfo={description:`A Placeholder can contain a Placeholder.Header as well as Placeholder.Paragraph elements. \r
Any PlaceHolder.Line elements have random lengths by default, unless a length is specified. \r
The background animation is done using CSS transforms so that it can be smooth and \r
GPU-accelerated.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-placeholder--properties`,methods:[{name:`Paragraph`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IPlaceholderParagraphProps`,alias:`IPlaceholderParagraphProps`}}],returns:null},{name:`Image`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IPlaceholderImageProps`,alias:`IPlaceholderImageProps`}}],returns:null},{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IPlaceholderHeaderProps`,alias:`IPlaceholderHeaderProps`}}],returns:null},{name:`Line`,docblock:null,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IPlaceholderLineProps`,alias:`IPlaceholderLineProps`}}],returns:null}],displayName:`Placeholder`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},fluid:{required:!1,tsType:{name:`boolean`},description:`A fluid placeholder fills the width of its container. \r
@default false`}}}})))()}export{L as n,I as t};