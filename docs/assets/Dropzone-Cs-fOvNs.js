import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";var c,l,u,d;function f(){return(f=t((()=>{c=e(n()),o(),r(),l=s(),u=class extends c.Component{constructor(...e){super(...e),this.handleClick=()=>{this.inputElement.click()},this.handleAddFile=e=>{let t=e.target.files,n=this.fileListToArray(t);this.props.onAddFiles(n)},this.handleDragOver=e=>{e.preventDefault(),this.props.onDragover()},this.handleDragLeave=e=>{this.props.onDragLeave()},this.handleDrop=e=>{e.preventDefault();let t=e.dataTransfer.files,n=this.fileListToArray(t);this.props.onAddFiles(n)}}fileListToArray(e){let t=[];for(var n=0;n<e.length;n++)t.push(e.item(n));return t}render(){let e=this.props;return(0,l.jsxs)(`div`,{className:e.className,onClick:this.handleClick,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,children:[(0,l.jsx)(`div`,{children:e.message?e.message:`Drop a file here to upload, or click to select.`}),(0,l.jsx)(`svg`,{children:(0,l.jsx)(`use`,{xlinkHref:`/spritemap.svg#cloud-upload`})}),(0,l.jsx)(`input`,{ref:e=>this.inputElement=e,type:`file`,multiple:!0,onChange:this.handleAddFile})]})}},d=a(u)`
  position: relative; /* For internal <span> positioning */
  border: dashed 2px #aaa;
  ${e=>e.hover&&i`border: solid 2px #fff;`}
  border-radius: ${e=>e.theme.radius}px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  ${e=>e.hover&&i`
    background: ${e.theme.primaryColor};
  `}

  div {
    margin-top: 8px;
    font-weight: 500;
    color: ${e=>e.hover?`#fff`:e.theme.fontColor};
  }

  svg {
    display: block;
    margin: 8px;
    width: 100%;
    height: 150px;
    fill: ${e=>e.hover?`#fff`:`#888`};
  }

  input {
    display: none;
  }
`})))()}var p,m,h;function g(){return(g=t((()=>{p=e(n()),f(),m=s(),h=e=>{let[t,n]=p.useState(!1);return(0,m.jsx)(d,{hover:t,message:e.message,onDragover:()=>{n(!0)},onDragLeave:()=>{n(!1)},onAddFiles:t=>{e.onAddFiles(t),n(!1)}})},h.__docgenInfo={description:`A \`Dropzone\` accepts files, either by dragging them into the zone or by clicking the\r
zone and selection files. Multiple files may be dragged or selected at the same\r
time. When files are selected, Dropzone fires \`onAddFiles\` with a \`Files[]\` argument.\r
\r
@example\r
<Dropzone\r
  onAddFiles={(files: File[]) => console.log("Files dropped", files)}\r
/>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-dropzone--properties`,methods:[],displayName:`Dropzone`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},onAddFiles:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`Callback to call when files are dropped in the Dropzone. Multiple files can be uploaded at\r
a time.`},message:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional translation override for Dropzone message.`}}}})))()}export{g as n,h as t};