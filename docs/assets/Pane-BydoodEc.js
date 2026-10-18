import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";import{r as c,t as l}from"./Icon-CbGLNh3A.js";var u,d,f;function p(){return(p=t((()=>{u=e(n()),c(),b(),d=s(),f=class extends u.Component{constructor(e){super(e),this.handleOpenPane=()=>{this.setState({open:!0})},this.handleClosePane=()=>{this.setState({open:!1})},this.state={open:!1}}render(){let e=this.props;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{name:e.icon,onClick:this.handleOpenPane}),(0,d.jsx)(y,{open:this.state.open,width:e.width,padded:e.padded,onClose:this.handleClosePane,children:e.children})]})}},f.__docgenInfo={description:``,methods:[{name:`handleOpenPane`,docblock:null,modifiers:[],params:[],returns:null},{name:`handleClosePane`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`IconPane`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},icon:{required:!0,tsType:{name:`union`,raw:`'area-chart'\r
| 'arrow'\r
| 'at' \r
| 'bar-chart'\r
| 'bars' \r
| 'bullhorn'\r
| 'caret-down'\r
| 'caret-up'\r
| 'check'\r
| 'chevron'\r
| 'chevron-double'\r
| 'circle'\r
| 'circle-notch'\r
| 'cloud-upload'\r
| 'code'\r
| 'download'\r
| 'edit'\r
| 'envelope'\r
| 'exchange'\r
| 'eye'\r
| 'eye-slash'\r
| 'file-csv'\r
| 'file-download'\r
| 'file-excel'\r
| 'file-geojson'\r
| 'file-ods'\r
| 'filter'\r
| 'heart-beat'\r
| 'id-card'\r
| 'layers'\r
| 'line-chart'\r
| 'link'\r
| 'lock'\r
| 'minus'\r
| 'plus'\r
| 'save'\r
| 'search'\r
| 'table'\r
| 'th'\r
| 'times'\r
| 'tools'\r
| 'trash'\r
| 'unlock'\r
| 'zoom-extents'\r
| 'zoom-minus'\r
| 'zoom-plus'`,elements:[{name:`literal`,value:`'area-chart'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'at'`},{name:`literal`,value:`'bar-chart'`},{name:`literal`,value:`'bars'`},{name:`literal`,value:`'bullhorn'`},{name:`literal`,value:`'caret-down'`},{name:`literal`,value:`'caret-up'`},{name:`literal`,value:`'check'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'chevron-double'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'circle-notch'`},{name:`literal`,value:`'cloud-upload'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'download'`},{name:`literal`,value:`'edit'`},{name:`literal`,value:`'envelope'`},{name:`literal`,value:`'exchange'`},{name:`literal`,value:`'eye'`},{name:`literal`,value:`'eye-slash'`},{name:`literal`,value:`'file-csv'`},{name:`literal`,value:`'file-download'`},{name:`literal`,value:`'file-excel'`},{name:`literal`,value:`'file-geojson'`},{name:`literal`,value:`'file-ods'`},{name:`literal`,value:`'filter'`},{name:`literal`,value:`'heart-beat'`},{name:`literal`,value:`'id-card'`},{name:`literal`,value:`'layers'`},{name:`literal`,value:`'line-chart'`},{name:`literal`,value:`'link'`},{name:`literal`,value:`'lock'`},{name:`literal`,value:`'minus'`},{name:`literal`,value:`'plus'`},{name:`literal`,value:`'save'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'table'`},{name:`literal`,value:`'th'`},{name:`literal`,value:`'times'`},{name:`literal`,value:`'tools'`},{name:`literal`,value:`'trash'`},{name:`literal`,value:`'unlock'`},{name:`literal`,value:`'zoom-extents'`},{name:`literal`,value:`'zoom-minus'`},{name:`literal`,value:`'zoom-plus'`}]},description:`Pane activation icon.`},padded:{required:!1,tsType:{name:`boolean`},description:`A padded pane adds padding to its content. \r
@default false`},width:{required:!1,tsType:{name:`number`},description:`Override default pane width of 400 pixels. \r
@default 400`}}}})))()}var m,h,g,_,v,y;function b(){return(b=t((()=>{m=e(n()),o(),r(),c(),p(),h=s(),g=class extends m.Component{constructor(e){super(e),this.handleClickOutside=e=>{let t=e.target;this.props.open&&this.paneElement&&!this.paneElement.contains(t)&&this.props.onClose&&this.props.onClose()},this.handleKeyDown=e=>{e.key==`Escape`&&this.props.onClose()}}componentDidMount(){document.addEventListener(`mousedown`,this.handleClickOutside),document.addEventListener(`keydown`,this.handleKeyDown)}componentWillUnmount(){document.removeEventListener(`mousedown`,this.handleClickOutside),document.removeEventListener(`keydown`,this.handleKeyDown)}render(){let e=this.props;return(0,h.jsxs)(`div`,{className:e.className,ref:e=>this.paneElement=e,children:[(0,h.jsx)(_,{children:(0,h.jsx)(l,{size:`large`,name:`times`,onClick:e.onClose})}),e.children]})}},_=a.div`
  position: absolute;
  right: 10px;
  top: 10px;
`,v=a(g)`
  position: fixed;
  z-index: 2000;
  right: -${e=>e.width?e.width+50:450}px;
  width: ${e=>e.width?e.width:400}px;
  top: 0;
  height: 100%;

  /* Undo parent text alignment */
  text-align: left;

  /* Add padding if set in props */
  padding: ${e=>e.padded?`16px`:`0`};

  background: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
  transition: right ${e=>e.theme.transition.duration*4}s ease;
  ${e=>e.open&&i`
    right: 0;
  `}
`,y=e=>(0,h.jsx)(v,{...e}),y.Icon=f,y.__docgenInfo={description:`A Pane slides in from the right side of the viewport when its open property is set \r
to true. An onClose event is triggered when the user clicks outside of the pane or \r
when the user clicks the close (cross) icon.\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-pane--properties`,methods:[],displayName:`Pane`,props:{className:{required:!1,tsType:{name:`string`},description:`ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},open:{required:!0,tsType:{name:`boolean`},description:`Is the Pane currently open? \r
@default false`},padded:{required:!1,tsType:{name:`boolean`},description:`A padded Pane adds padding to its content. \r
@default false`},width:{required:!1,tsType:{name:`number`},description:`Override default Pane width of 400 pixels. \r
@default 400`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`This callback is called when the Pane requests to close.`}}}})))()}export{b as n,y as t};