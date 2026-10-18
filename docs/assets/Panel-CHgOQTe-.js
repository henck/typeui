import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{l as r,n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";import{r as l,t as u}from"./Icon-CbGLNh3A.js";import{n as d,t as f}from"./CSSTransition-1uMjN8aP.js";var p,m,h,g;function _(){return(_=t((()=>{p=e(n()),s(),i(),m=c(),h=class extends p.Component{constructor(...e){super(...e),this.handleClick=e=>{e.stopPropagation()}}render(){let e=this.props;return(0,m.jsx)(`div`,{className:e.className,ref:e.nodeRef,onClick:this.handleClick,children:e.children})}},g=o(h)`
  /* Document position */
  position: absolute;
  z-index:  99;

  /* Undo text alignment set by parent element. */
  text-align: left;

  /* Undo cursor set by parent element. */
  cursor: default;

  /* Dimensions */
  min-width: 200px;
  ${e=>e.width&&a`width: ${e.width}px;`}
  ${e=>e.padded&&a`padding: 16px;`}
  margin:    1em 0;

  /* Horizontal positioning */
  ${e=>e.right&&a`left: 0;`}
  ${e=>!e.right&&a`right: 0;`}     

  ${e=>e.above&&a`bottom: 100%;`}
  ${e=>!e.above&&a`top: 100%;`}    

  /* Vertical positioning with transition. */
  ${e=>e.above&&!e.right&&a`transform-origin: right bottom;`} 
  ${e=>e.above&&e.right&&a`transform-origin: left bottom;`} 
  ${e=>!e.above&&!e.right&&a`transform-origin: right top;`} 
  ${e=>!e.above&&e.right&&a`transform-origin: left top;`} 
  transition: opacity ${e=>e.noanimation?0:e.theme.transition.duration*3}s ease-out, 
              top ${e=>e.noanimation?0:e.theme.transition.duration*3}s ease-out, 
              bottom ${e=>e.noanimation?0:e.theme.transition.duration*3}s ease-out, 
              transform ${e=>e.noanimation?0:e.theme.transition.duration*3}s ease-out;

  opacity: 0.01;
  transform: scaleX(0.01) scaleY(0.01);

  &.fade-enter {
    opacity: 0.01;
    transform: scaleX(0.01) scaleY(0.01);
    ${e=>e.above&&a`bottom: 0;`}
    ${e=>!e.above&&a`top: 0;`}
  }

  /* The enter-done class is key to the panel staying inflated;
     it would return to its original opacity/transform if this class
     weren't defined. */
  &.fade-enter.fade-enter-active, &.fade-enter-done {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    ${e=>e.above&&a`bottom: 100%;`}
    ${e=>!e.above&&a`top: 100%;`}
  }
  &.fade-exit {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    ${e=>e.above&&a`bottom: 100%;`}
    ${e=>!e.above&&a`top: 100%;`}
  }
  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transform: scaleX(0.01) scaleY(0.01);
    ${e=>e.above&&a`bottom: 0;`}
    ${e=>!e.above&&a`top: 0;`}
  }

  /* Colors */
  background: #fff;
  border: solid 1px ${e=>e.theme.normalColor};
  border-radius: ${e=>e.theme.radius}px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;

  /* Arrows */
  &:before {
    content: '';
    position: absolute;
    width: 0.6em;
    height: 0.6em;
    border-style: inherit;
    border-color: inherit;
    background: inherit;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    ${e=>!e.right&&a`right: calc(${e.offset}px - 0.6em);`}
    ${e=>e.right&&a`left: calc(${e.offset}px - 0.6em);`}
  }
  /* Pointing to top: */
  ${e=>!e.above&&a`
    &:before {
      top: -1px;
      border-width: 1px 0 0 1px;
    }
  `}
  /* Pointing to bottom: */
  ${e=>e.above&&a`
    &:before {
      margin-top: 1px;
      top: 100%;
      border-width: 0 1px 1px 0;
    }
  `}    
`})))()}var v,y,b;function x(){return(x=t((()=>{v=e(n()),_(),y=c(),b=class extends v.Component{constructor(e){if(super(e),this.above=!1,this.right=!1,this.offset=20,this.props.anchor){let e=this.props.anchor.parentElement.getBoundingClientRect();this.above=e.top>=window.innerHeight/2,this.right=e.left<window.innerWidth/2,this.offset=Math.round(e.width/2)}}componentDidMount(){this.props.anchor&&this.props.anchor.parentElement.querySelector(`input`)?.focus()}render(){let e=this.props;return(0,y.jsx)(g,{nodeRef:e.nodeRef,noanimation:this.props.noanimation,className:e.className,above:this.above,right:this.right,offset:this.offset,padded:e.padded,width:e.width,children:e.children})}},b.__docgenInfo={description:``,methods:[],displayName:`PanelContainer`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},nodeRef:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},anchor:{required:!0,tsType:{name:`HTMLDivElement`},description:`Anchor element to base positioning of body on.`},width:{required:!1,tsType:{name:`number`},description:`Does panel have a fixed width?`},padded:{required:!1,tsType:{name:`boolean`},description:`Does panel have internal padding?`},noanimation:{required:!1,tsType:{name:`boolean`},description:`If set, panel does not perform animation.`}}}})))()}var S,C,w,T,E;function D(){return(D=t((()=>{S=e(n()),i(),C=c(),w=class extends S.Component{constructor(...e){super(...e),this.render=()=>(0,C.jsx)(`div`,{className:this.props.className,children:this.props.children})}},T=o(w)`
  position: relative;
  padding: 14px;
  &:first-child {
    border-top-left-radius: ${e=>e.theme.radius}px;
    border-top-right-radius: ${e=>e.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${e=>e.theme.normalColor};
  }
`,E=class extends S.Component{constructor(...e){super(...e),this.render=()=>(0,C.jsx)(T,{...this.props})}},E.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Content`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n()),i(),k=c(),A=class extends O.Component{constructor(...e){super(...e),this.render=()=>(0,k.jsx)(`span`,{className:this.props.className,children:this.props.children})}},j=o(A)`
  position: relative;
  display: block;
  padding: 10px 14px 8px 14px;
  font-size: 16px;
  background: #f9f9f9;
  &:first-child {
    border-top-left-radius: ${e=>e.theme.radius}px;
    border-top-right-radius: ${e=>e.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${e=>e.theme.normalColor};
  }
`,M=class extends O.Component{constructor(...e){super(...e),this.render=()=>(0,k.jsx)(j,{...this.props})}},M.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Header`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var P;function F(){return(F=t((()=>{i(),P=o.div`
  position: relative;
  padding: 14px;
  background: #f9f9f9;
  border-bottom-left-radius: ${e=>e.theme.radius}px;
  border-bottom-right-radius: ${e=>e.theme.radius}px;  
`})))()}var I,L,R;function z(){return(z=t((()=>{I=e(n()),l(),U(),L=c(),R=class extends I.Component{constructor(e){super(e),this.handleOpenPanel=()=>{this.setState({open:!0})},this.handleClosePanel=()=>{this.setState({open:!1})},this.state={open:!1}}render(){let e=this.props,t=null;return typeof e.icon==`string`?t=(0,L.jsx)(u,{name:e.icon,onClick:this.handleOpenPanel}):e.icon!=null&&(t=(0,L.jsx)(u,{...e.icon,onClick:this.handleOpenPanel})),(0,L.jsxs)(L.Fragment,{children:[t,(0,L.jsx)(H,{open:this.state.open,width:e.width,padded:e.padded,onClose:this.handleClosePanel,children:e.children})]})}},R.__docgenInfo={description:``,methods:[{name:`handleOpenPanel`,docblock:null,modifiers:[],params:[],returns:null},{name:`handleClosePanel`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`IconPanel`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},icon:{required:!0,tsType:{name:`union`,raw:`IconType | IIconProps`,elements:[{name:`union`,raw:`'area-chart'\r
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
| 'zoom-plus'`,elements:[{name:`literal`,value:`'area-chart'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'at'`},{name:`literal`,value:`'bar-chart'`},{name:`literal`,value:`'bars'`},{name:`literal`,value:`'bullhorn'`},{name:`literal`,value:`'caret-down'`},{name:`literal`,value:`'caret-up'`},{name:`literal`,value:`'check'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'chevron-double'`},{name:`literal`,value:`'circle'`},{name:`literal`,value:`'circle-notch'`},{name:`literal`,value:`'cloud-upload'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'download'`},{name:`literal`,value:`'edit'`},{name:`literal`,value:`'envelope'`},{name:`literal`,value:`'exchange'`},{name:`literal`,value:`'eye'`},{name:`literal`,value:`'eye-slash'`},{name:`literal`,value:`'file-csv'`},{name:`literal`,value:`'file-download'`},{name:`literal`,value:`'file-excel'`},{name:`literal`,value:`'file-geojson'`},{name:`literal`,value:`'file-ods'`},{name:`literal`,value:`'filter'`},{name:`literal`,value:`'heart-beat'`},{name:`literal`,value:`'id-card'`},{name:`literal`,value:`'layers'`},{name:`literal`,value:`'line-chart'`},{name:`literal`,value:`'link'`},{name:`literal`,value:`'lock'`},{name:`literal`,value:`'minus'`},{name:`literal`,value:`'plus'`},{name:`literal`,value:`'save'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'table'`},{name:`literal`,value:`'th'`},{name:`literal`,value:`'times'`},{name:`literal`,value:`'tools'`},{name:`literal`,value:`'trash'`},{name:`literal`,value:`'unlock'`},{name:`literal`,value:`'zoom-extents'`},{name:`literal`,value:`'zoom-minus'`},{name:`literal`,value:`'zoom-plus'`}]},{name:`IIconProps`}]},description:`Panel icon props.`},padded:{required:!1,tsType:{name:`boolean`},description:`A padded pane adds padding to its content. \r
@default false`},width:{required:!1,tsType:{name:`number`},description:`Override default panel width of 200 pixels \r
@default 200`}}}})))()}var B,V,H;function U(){return(U=t((()=>{B=e(n()),d(),s(),x(),D(),N(),F(),z(),V=c(),H=class extends B.Component{static{this.Header=M}static{this.Content=E}static{this.Footer=P}static{this.Icon=R}constructor(e){super(e),this.containerRef=B.createRef(),this.handleClickOutside=e=>{let t=e.target;this.panelElement&&!this.panelElement.contains(t)&&this.props.open&&this.props.onClose&&setTimeout(()=>this.props.onClose(),100)},this.handleKeyDown=e=>{e.key==`Escape`&&this.props.onClose()},this.state={anchor:null}}componentDidMount(){this.setState({anchor:this.panelElement}),document.addEventListener(`mousedown`,this.handleClickOutside),document.addEventListener(`keydown`,this.handleKeyDown)}componentWillUnmount(){document.removeEventListener(`mousedown`,this.handleClickOutside),document.removeEventListener(`keydown`,this.handleKeyDown)}render(){let e=this.props;return(0,V.jsx)(`div`,{ref:e=>this.panelElement=e,children:(0,V.jsx)(r,{children:t=>(0,V.jsx)(f,{nodeRef:this.containerRef,in:e.open,timeout:t.transition.duration*1e3*3,appear:!0,unmountOnExit:!0,classNames:`fade`,children:(0,V.jsx)(b,{nodeRef:this.containerRef,anchor:this.state.anchor,noanimation:e.noanimation,padded:e.padded,width:e.width,children:e.children})})})})}},H.__docgenInfo={description:`Note that a panel determines its position from the position of its direct parent. 
The parent therefore must have position: relative.

@link https://henck.github.io/typeui/?path=/story/controls-panel--properties`,methods:[],displayName:`Panel`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:`Is the Panel currently open? 
@default false`},width:{required:!1,tsType:{name:`number`},description:`Default Panel has a width of 200px, but this can be overridden. 
@default 200`},padded:{required:!1,tsType:{name:`boolean`},description:`Does Panel have internal padding? There is no padding by default to allow content to fill the Panel completely. 
@default false`},noanimation:{required:!1,tsType:{name:`boolean`},description:`If set, Panel does not perform animation. 
@default false`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`This callback is called when the user closes the Panel. The caller is supposed to close the Panel.`}}}})))()}export{U as n,H as t};