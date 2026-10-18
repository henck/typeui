import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";import{n as l,r as u,t as d}from"./Icon-CbGLNh3A.js";import{t as f}from"./Button-eI6v9XeX.js";import{a as ee,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./CSSTransition-1uMjN8aP.js";import{t as b}from"./Button-gydMztyi.js";function x(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function S(e,t){var n=function(e){return t&&(0,D.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&D.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function C(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function w(e,t,n){return n[t]==null?e.props[t]:n[t]}function T(e,t){return S(e.children,function(n){return(0,D.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:w(n,`appear`,e),enter:w(n,`enter`,e),exit:w(n,`exit`,e)})})}function E(e,t,n){var r=S(e.children),i=C(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,D.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,D.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,D.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:w(o,`exit`,e),enter:w(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,D.cloneElement)(o,{in:!1}):c&&s&&(0,D.isValidElement)(l)&&(i[a]=(0,D.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:w(o,`exit`,e),enter:w(o,`enter`,e)}))}}),i}var D;function O(){return(O=t((()=>{D=r()})))()}var k,A,j,M;function N(){return(N=t((()=>{g(),k=e(r()),p(),O(),A=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},j={component:`div`,childFactory:function(e){return e}},M=function(e){ee(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(x(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?T(e,r):E(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=S(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=m({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=v(e,[`component`,`childFactory`]),i=this.state.contextValue,a=A(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?k.createElement(_.Provider,{value:i},a):k.createElement(_.Provider,{value:i},k.createElement(t,r,a))},t}(k.Component),M.propTypes={},M.defaultProps=j})))()}var P;function F(){return(F=t((()=>{P=class e{static{this.subscriber=null}static subscribe(t){e.subscriber=t}static toast(t,n){e.subscriber!=null&&e.subscriber.toast(t,n)}}})))()}var I,L,R,z,B;function V(){return(V=t((()=>{I=e(r()),i(),u(),L=c(),R=class extends I.Component{constructor(e){super(e),this.handleClick=()=>{this.props.onTimeout()},this.timerHandle=window.setTimeout(()=>{this.props.onTimeout()},this.props.duration?this.props.duration:8e3)}componentWillUnmount(){window.clearTimeout(this.timerHandle)}render(){let e=this.props;return(0,L.jsxs)(`div`,{className:e.className,ref:e.nodeRef,onClick:this.handleClick,children:[(0,L.jsx)(d,{name:`bullhorn`,color:`#fff`}),(0,L.jsx)(`div`,{children:e.message})]})}},z=o(R)`
  display: flex;
  align-items: flex-start;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: ${e=>e.theme.radius}px;
  margin-top: 8px;
  cursor: pointer;

  & > ${l} {
    margin-right: 10px;
  }

  /* CSSTransition classes */
  &.item-enter {
    opacity: 0;
    transform: translateX(-150%);
  }
  &.item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${e=>e.theme.transition.duration*3}s ease-in-out, 
                transform ${e=>e.theme.transition.duration*3}s ease-in-out;
  }
  &.item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.item-exit-active {
    opacity: 0;
    transform: translateX(-150%);
    transition: opacity ${e=>e.theme.transition.duration*3}s ease-in-out, 
                transform ${e=>e.theme.transition.duration*3}s ease-in-out;
  }  
`,B=class extends I.Component{constructor(...e){super(...e),this.render=()=>(0,L.jsx)(z,{...this.props})}},B.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`Toast`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},nodeRef:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`@ignore`},message:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},duration:{required:!1,tsType:{name:`number`},description:`Toast duration in ms. Default is 8000ms \r
@default 8000`},onTimeout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Timeout callback, called when the Toast self-closes.`}}}})))()}var H,U,W,G,K;function q(){return(q=t((()=>{H=e(r()),i(),s(),N(),h(),V(),F(),U=c(),W=class extends H.Component{constructor(e){super(e),this.nodeRefs={},this.getNodeRef=e=>this.nodeRefs[e]??=H.createRef(),this.handleTimeout=e=>{this.setState(t=>{let n=t.messages;return delete n[e],delete this.nodeRefs[e],{messages:n}})},P.subscribe(this),this.state={messages:{}}}toast(e,t){this.setState(n=>{let r=n.messages;for(;Object.keys(r).length>=this.props.maxToasts;){let e=Object.keys(r)[0];delete r[e],delete this.nodeRefs[e]}let i=new Date().getTime().toString();return r[i]={message:e,duration:t},{messages:r}})}render(){let e=this.props;return(0,U.jsx)(`div`,{className:e.className,children:(0,U.jsx)(M,{children:Object.keys(this.state.messages).map(e=>(0,U.jsx)(y,{nodeRef:this.getNodeRef(e),timeout:500,classNames:`item`,children:(0,U.jsx)(B,{nodeRef:this.getNodeRef(e),message:this.state.messages[e].message,duration:this.state.messages[e].duration,onTimeout:()=>this.handleTimeout(e)})},e))})})}},G=o(W)`
  position: absolute;
  z-index: 9999;
  /* 
   * Toasts are placed in the bottom-left corner, unless placement
   * is overridden. 
   */
  ${e=>e.horizontalAlign==`right`?a`right: ${e.horizontalOffset?e.horizontalOffset:20}px`:a`left: ${e.horizontalOffset?e.horizontalOffset:20}px`}
  ${e=>e.verticalAlign==`top`?a`top: ${e.verticalOffset?e.verticalOffset:20}px`:a`bottom: ${e.verticalOffset?e.verticalOffset:20}px`}
`,K=class extends H.Component{constructor(...e){super(...e),this.render=()=>(0,U.jsx)(G,{...this.props})}},K.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`ToastContainer`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},maxToasts:{required:!0,tsType:{name:`number`},description:`Maximum number of toasts on-screen at the same time.`},verticalAlign:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:`Vertical alignment: top or bottom (defaults to bottom).`},horizontalAlign:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Horizontal alignment: left or right (defaults to left).`},horizontalOffset:{required:!1,tsType:{name:`number`},description:`Offset from corner (defaults to 20 pixels).`},verticalOffset:{required:!1,tsType:{name:`number`},description:`Offset from corner (defaults to 20 pixels).`}}}})))()}var te=n({Properties:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),J,Y,X,Z,Q;function $(){return($=t((()=>{F(),q(),V(),b(),J=c(),Y=e=>(0,J.jsxs)(`div`,{children:[(0,J.jsx)(K,{maxToasts:3}),(0,J.jsx)(f,{onClick:()=>P.toast(`hello, world`),children:`Create Toast`})]}),X={title:`Controls/Toast`,component:B,argTypes:{className:{table:{disable:!0}}}},Z={render:Y.bind({}),name:`Properties`,args:{}},Q=[`Properties`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Properties',
  args: {}
}`,...Z.parameters?.docs?.source}}}})))()}export{B as a,q as i,te as n,V as o,$ as r,F as s,Z as t};