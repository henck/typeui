import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,o as i,r as a,s as o}from"./Theme-DNNvCs1s.js";import{n as s}from"./iframe-BMOsmv_G.js";var c,l,u,d;function f(){return(f=t((()=>{n(),r(),c=s(),l=e=>(0,c.jsx)(`div`,{className:e.className,children:!e.nohiddenrender||e.active?e.children:null}),u=a(l)`
  position: relative;
  display: flex;
  flex-direction: column;
  display: ${e=>e.active?``:`none`};
  height: 100%;
`,d=e=>(0,c.jsx)(u,{...e}),d.__docgenInfo={description:``,methods:[],displayName:`Pane`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},label:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Tab label. Can be JSX.`},active:{required:!1,tsType:{name:`boolean`},description:`@ignore`},nohiddenrender:{required:!1,tsType:{name:`boolean`},description:`@ignore`}}}})))()}var p,m,h;function g(){return(g=t((()=>{n(),r(),o(),p=s(),m=e=>(0,p.jsx)(`div`,{className:e.className,children:e.children}),h=a(m)`
  height: 100%;
  flex: 1;
  
  border-bottom-left-radius: ${e=>e.theme.radius}px;
  border-bottom-right-radius: ${e=>e.theme.radius}px;

  /* Non-underlined panes have a border around them. */
  ${e=>!e.underlined&&i`
    padding: 14px;
    border: solid 1px rgba(35, 35, 35, 0.15);
    border-top: none;      
  `}
`})))()}var _,v,y;function b(){return(b=t((()=>{n(),r(),o(),_=s(),v=e=>(0,_.jsx)(`div`,{className:e.className,ref:e.setRef,onClick:e.onClick,children:e.children}),y=a(v)`
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0 20px;
  font-size: 0.875em;
  box-sizing: border-box;
  height: 40px;
  z-index: 1;
  cursor: pointer;
  opacity: 0.6;
  color: ${e=>e.theme.fontColor};
  transition: opacity 0.3s;

  /* User cannot select header text.
   * This prevents accidental selection when clicking the tab.
   */
  user-select: none;  

  ${e=>e.active&&i`
    opacity: 1.0;
    font-weight: 500;
    ${!e.underlined&&i`
      padding: 0 19px;
      border: solid 1px rgba(35, 35, 35, 0.15);
      border-bottom: solid 1px #ffffff;
      border-top-left-radius: ${e.theme.radius}px;
      border-top-right-radius: ${e.theme.radius}px;
    `}
  `}
`})))()}var x,S,C;function w(){return(w=t((()=>{n(),r(),x=s(),S=e=>(0,x.jsx)(`div`,{className:e.className,ref:e.setRef}),C=a(S)`
  position: absolute;
  left: 0;
  top: 38px;
  width: 0px;
  height: 0px;
  border-top: solid 2px ${e=>e.theme.primaryColor};
  box-sizing: border-box;
  transition: left ease .3s, width ease .3s;
`})))()}var T,E,D,O;function k(){return(k=t((()=>{T=e(n()),r(),b(),w(),E=s(),D=class extends T.Component{constructor(...e){super(...e),this.setTabRef=e=>{this.tabRef=e},this.setUnderlinerRef=e=>{this.underlinerRef=e},this.handleMouseDown=e=>{this.dragging=!0,this.mouseX=e.screenX,this.startX=this.sliderElement.offsetLeft},this.handleMouseMove=e=>{if(!this.dragging)return;let t=e.screenX-this.mouseX,n=this.startX+t;n>0&&(n=0);let r=this.sliderElement.offsetWidth-this.barElement.offsetWidth;n<-r&&(n=-r),this.sliderElement.style.left=`${n}px`},this.handleMouseUp=e=>{this.dragging=!1}}getTabs(){return T.Children.map(this.props.children,(e,t)=>{let n=t===this.props.active?this.setTabRef:null;return e==null?null:(0,E.jsx)(y,{setRef:n,active:t===this.props.active,underlined:this.props.underlined,onClick:this.props.onTabClicked.bind(this,t),children:e.props.label})})}componentDidMount(){document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`mouseup`,this.handleMouseUp),this.props.underlined&&this.moveUnderliner()}componentWillUnmount(){document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp)}componentDidUpdate(e){e.underlined&&this.moveUnderliner()}moveUnderliner(){if(!this.tabRef)return;let{offsetLeft:e,offsetWidth:t}=this.tabRef;this.underlinerRef&&(this.underlinerRef.style.left=`${e}px`,this.underlinerRef.style.width=`${t}px`)}render(){let e=this.props,t=e.underlined?(0,E.jsx)(C,{setRef:this.setUnderlinerRef}):null;return(0,E.jsx)(`div`,{className:e.className,ref:e=>this.barElement=e,children:(0,E.jsxs)(`div`,{ref:e=>this.sliderElement=e,onMouseDown:this.handleMouseDown,children:[this.getTabs(),t]})})}},O=a(D)`
  position: relative;
  display: block;
  height: 40px;
  min-height: 40px;
  overflow-x: hidden;

  &>div {
    position: absolute;
    left: 0;
    top: 0;
    width: auto !important;
    min-width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: block;
    border-bottom: solid 1px rgba(35, 35, 35, 0.15);
  }
`})))()}var A,j,M,N,P;function F(){return(F=t((()=>{A=e(n()),r(),f(),g(),k(),j=s(),M=class extends A.PureComponent{constructor(...e){super(...e),this.state={index:this.props.active?this.props.active:0},this.tabClicked=e=>{this.setState({index:e}),this.props.onTabChange&&this.props.onTabChange(e)}}getPanes(){return A.Children.map(this.props.children,(e,t)=>e==null?null:A.cloneElement(e,{active:t===this.state.index,nohiddenrender:this.props.nohiddenrender}))}render(){let e=this.props;return(0,j.jsxs)(`div`,{className:e.className,children:[(0,j.jsx)(O,{active:this.state.index,onTabClicked:this.tabClicked,underlined:e.underlined,children:e.children}),(0,j.jsx)(h,{underlined:e.underlined,children:this.getPanes()})]})}},N=a(M)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`,P=e=>(0,j.jsx)(N,{...e}),P.Pane=d,P.__docgenInfo={description:`Collection of tabs.\r
\r
@example\r
<Tabs>\r
  <Tabs.Pane label="One">\r
    Content for first tab.\r
  </Tabs.Pane>\r
  <Tabs.Pane label="Two">\r
    Content for second tab.\r
  </Tabs.Pane>\r
  <Tabs.Pane label="Three">\r
    Content for third tab.\r
  </Tabs.Pane>\r
</Tabs>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-tabs--properties`,methods:[{name:`Pane`,docblock:`A single tab pane. \r
\r
The Pane label can contain arbitrary content.\r
To get the content to vertically align properly, a Flex.Quick can help.`,modifiers:[`static`],params:[{name:`props`,optional:!1,type:{name:`IPaneProps`,alias:`IPaneProps`}}],returns:null,description:`A single tab pane. \r
\r
The Pane label can contain arbitrary content.\r
To get the content to vertically align properly, a Flex.Quick can help.`}],displayName:`Tabs`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},underlined:{required:!1,tsType:{name:`boolean`},description:`Underline the current tab (animated). \r
@default false`},nohiddenrender:{required:!1,tsType:{name:`boolean`},description:`If set, hidden panes are not rendered. \r
@default false`},active:{required:!1,tsType:{name:`number`},description:`Index of active tab by default (0-based)`},onTabChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(idx: number) => void`,signature:{arguments:[{type:{name:`number`},name:`idx`}],return:{name:`void`}}},description:`Method to call when active tab changes.`}}}})))()}export{F as n,P as t};