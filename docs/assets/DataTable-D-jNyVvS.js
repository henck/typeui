import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{i as r,n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";import{n as ee,t as l}from"./Message-DNmx9_Ix.js";import{i as u,n as te,r as d,t as ne}from"./Button-eI6v9XeX.js";import{n as re,t as f}from"./Number-BA8_Kx7P.js";import{n as ie,t as ae}from"./CSSTransition-1uMjN8aP.js";var p,m,oe;function se(){return(se=t((()=>{i(),p=o.div`
  flex: 1;
  overflow-y: scroll;
`,m=o.div`
  position: relative;
  flex: 1;
`,oe=o.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;  
`})))()}var h,g;function _(){return(_=t((()=>{h=e(n()),g=class extends h.Component{},g.__docgenInfo={description:``,methods:[],displayName:`DataColumn`,props:{className:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item:any) => React.ReactNode`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:``},label:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Column label. Can be JSX.`},order:{required:!1,tsType:{name:`string`},description:`Optional order field. If present, this column can be ordered.`},dir:{required:!1,tsType:{name:`union`,raw:`'asc' | 'desc'`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`}]},description:"Default order direction, `asc` or `desc`. If not present, defaults to `asc`."},weight:{required:!1,tsType:{name:`number`},description:"Column weight. Defaults to `1`."},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Text alignment, `left` or `right`. Defaults to `left`."},force:{required:!1,tsType:{name:`boolean`},description:`If true, column always appears no matter the screen size.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: any) => void`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`void`}}},description:`This callback is called when an item is clicked.`},onDoubleClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: any) => void`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`void`}}},description:`This callback is called when an item is double-clicked.`}}}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{v=e(n()),i(),s(),y=c(),b=o.div`
  display: flex;
  margin-right: -999px;
  padding-right: 999px;
  overflow-y: scroll;
`,x=class extends v.Component{static{this.displayName=`DataTable.Column`}render(){let e=this.props;return(0,y.jsx)(`div`,{className:e.className,children:(0,y.jsx)(b,{children:e.children})})}},S=r`
  0%   { max-width: 0; }
  50%  { max-width: 100%; }
  100% { max-width: 0; }
`,C=o(x)`
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  border-bottom: solid 1px ${e=>e.theme.normalColor};

  /* Prevent user text selection. */
  user-select: none;

  /* Show a loading animation when table data is loading. */
  ${e=>e.loading&&a`
    &:after {
      position: absolute;
      z-index: 1;
      content: '';
      left: 0;
      bottom: -1px;
      width: 100%;
      max-width: 0;
      height: 2px;
      background: ${e=>e.theme.primaryColor};
      animation: ${S} 5s linear;
    }
  `}
`})))()}var T,E,D;function O(){return(O=t((()=>{n(),i(),s(),u(),T=c(),E=e=>{let t=(0,T.jsx)(`svg`,{children:(0,T.jsx)(`use`,{xlinkHref:`/spritemap.svg#caret-down`})});return(0,T.jsx)(d,{children:(0,T.jsxs)(`div`,{className:e.className,onClick:e.onClick,children:[e.align!==`right`&&t,(0,T.jsx)(`span`,{children:e.children}),e.align===`right`&&t]})})},D=o(E)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.background};
  box-sizing: border-box;

  /* Vertical gridlines */
  ${e=>e.grid&&a`
  &:not(:first-child) {
    border-left: solid 1px ${e=>e.theme.normalColor};
  }`}

  /* On small screens, only the first Heading is shown. */
  ${e=>!e.force&&a` 
    &:not(:first-child) {
      @media (max-width: ${e=>e.theme.smallScreen}px) {
        display: none;
      }
    }    
  `}

  /* All cells are equal width. Todo? */
  flex: ${e=>e.weight?e.weight:1};
  overflow-x: hidden;

  padding: 16px 32px 16px 6px;
  
  &:last-child {
    padding-right: 36px;
  
  }
  ${e=>e.orderable&&a`cursor:pointer;`}

  /* Header content */
  span {
    /* Text alignment */
    flex: 1;
    text-align: left;
    ${e=>e.align===`right`&&a`text-align: right;`}

    font-size: 12px;
    font-weight: 500;

    /* Text is truncated with an ellipsis. */
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;  
  }  
  
  /* Ordering icon */

  & > svg {
    width: 0;
    height: 0;   
    transition: transform ${e=>e.theme.transition.duration*2}s ease, 
                width ${e=>e.theme.transition.duration*2}s ease, 
                height ${e=>e.theme.transition.duration*2}s ease;
    fill: ${e=>e.theme.fontColor};
    transform: rotate(180deg);
  }
  
  &:hover {
    ${e=>e.orderable&&a`
      & > svg {
        width: 17px;
        height: 17px;
      }
    `}
  }

  ${e=>e.ordered&&a`
    & > svg {
      width: 17px;
      height: 17px;
    }
  `}

  ${e=>(e.ordered&&e.dir===`desc`||!e.ordered&&e.defaultDir===`desc`)&&a`
    & > svg {
      transform: rotate(0deg);
    }
  `}
`})))()}var k,A,j;function M(){return(M=t((()=>{n(),i(),s(),k=c(),A=e=>(0,k.jsx)(`div`,{className:e.className,onClick:e.onClick,onDoubleClick:e.onDoubleClick,children:e.item!==null&&e.children(e.item)}),j=o(A)`
  position: relative;
  
  box-sizing: border-box;
  font-size: 14px;

  /* On small screens, only the first column is shown. */
  ${e=>!e.force&&a`
    &:not(:first-child) {
      @media (max-width: ${e=>e.theme.smallScreen}px) {
        display: none;
      }
    }      
  `}
  
  /* All cells are equal width. Todo? */
  flex: ${e=>e.weight?e.weight:1};

  /* Text alignment */
  ${e=>e.align===`right`&&a`text-align: right;`}

  padding: 16px 6px;
  height: 56px;

  /* Vertical gridlines */
  ${e=>e.grid&&a`
  &:not(:first-child) {
    border-left: solid 1px ${e=>e.theme.normalColor};
  }`}
  
  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  /* Hide vertical overflow. */
  overflow-y: hidden;

  margin-right: 30px;
  &:not(:last-child) {
    margin-right: 26px;
  }
`})))()}function N(){return(N=t((()=>{re()})))()}var P,F,I;function L(){return(L=t((()=>{n(),i(),N(),P=c(),F=e=>(0,P.jsxs)(`div`,{className:e.className,ref:e.nodeRef,children:[(0,P.jsx)(`span`,{children:e.first}),`-`,(0,P.jsx)(`span`,{children:(0,P.jsx)(f,{value:Math.min(e.last,e.count),decimals:0})}),` of `,(0,P.jsx)(`span`,{children:(0,P.jsx)(f,{value:e.count,decimals:0})}),` `,e.count==1&&`record`,e.count!=1&&`records`]}),I=o(F)`
  position: absolute;
  right: 30px;
  bottom: 15px;
  cursor: default;
  border: solid 1px ${e=>e.theme.normalColor};
  border-radius: ${e=>e.theme.radius}px;
  background: ${e=>e.theme.background};
  padding: 3px 8px 3px 8px;
  font-size: 12px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  & > span {
    font-weight: 500;
  }
  opacity: 1;
  transform: scale(1);

  /* CSSTransition classes */
  &.fade-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  &.fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }    
`})))()}var R,z,B,V;function H(){return(H=t((()=>{n(),i(),R=c(),z=e=>(0,R.jsx)(`div`,{className:e.className,style:{height:e.heightInItems*B+`px`},children:e.children}),B=57,V=o(z)`
  position: relative;
  /* Draw repeating empty rows in background */
  background-size: 100% ${B}px;
  background-image: linear-gradient(to bottom, ${e=>e.theme.background} 56px, ${e=>e.theme.normalColor} 1px);
`})))()}function U(){return(U=t((()=>{u()})))()}var W,G,K,q;function J(){return(J=t((()=>{n(),i(),s(),U(),W=c(),G=e=>{let t=(0,W.jsx)(`div`,{className:e.className,style:{top:e.top+`px`},onClick:e.onClick,children:e.children});return e.onClick?(0,W.jsx)(d,{children:t}):t},K=o(G)`
  position: absolute;
  display: flex;
  width: 100%;
  background-color: ${e=>e.theme.background};
  &:not(:last-child) {
    border-bottom: solid 1px ${e=>e.theme.normalColor};
  }
  ${e=>e.onClick&&a`
    cursor: pointer;
    transition: background-color ${e=>e.theme.transition.duration}s ease;
    &:hover {
      background-color: #f9f9f9;
    }
  `}
`,q=e=>(0,W.jsx)(K,{...e}),q.__docgenInfo={description:``,methods:[],displayName:`Row`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},top:{required:!0,tsType:{name:`number`},description:`Row top offset in pixels.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Event is fired when row is clicked.`}}}})))()}var Y,X,Z,Q,ce,$;function le(){return(le=t((()=>{Y=e(n()),i(),se(),_(),w(),O(),M(),L(),H(),ee(),te(),ie(),J(),X=c(),Z=57,Q=class extends Y.Component{constructor(e){super(e),this.fetch=null,this.fetchData=(e,t)=>{let n=Math.floor(e/Z),r=Math.floor((e+t-1)/Z),i=!1;for(let e=n;e<=r;e++)this.props.data[e]||(i=!0);if(i&&this.props.onFetch){let e=Math.max(0,n-20),t=r+20;this.fetch=this.props.onFetch.bind(this,e,t-e+1),this.fetch()}this.setState({first:n+1,last:r+1})},this.handleScroll=()=>{window.clearTimeout(this.isScrolling),this.isScrolling=window.setTimeout(()=>{this.handleEndScroll()},66)},this.handleEndScroll=()=>{this.props.onScroll&&this.props.onScroll(this.bodyElement.scrollTop),this.fetchData(this.bodyElement.scrollTop,this.bodyElement.clientHeight)},this.counterRef=Y.createRef(),this.handleRetry=()=>{this.fetch&&this.fetch()},this.handleMouseMove=e=>{let t=this.getPosition(this.bodyElement).y+this.bodyElement.clientHeight+this.bodyElement.scrollTop-114;e.clientY>=t&&this.state.showCounter&&this.setState({showCounter:!1}),e.clientY<t&&!this.state.showCounter&&this.setState({showCounter:!0})},this.handleMouseLeave=()=>{this.state.showCounter||this.setState({showCounter:!0})},this.state={first:0,last:0,showCounter:!0}}componentDidMount(){let e=this.props.scrollTop?this.props.scrollTop:0,t=this.bodyElement.clientHeight;t==0&&(t=1425),this.fetchData(e,t)}componentDidUpdate(){this.props.scrollTop&&(this.bodyElement.scrollTop=this.props.scrollTop)}handleClick(e){this.props.onClick&&window.setTimeout(()=>this.props.onClick(e),300)}getHeaders(){return Y.Children.map(this.props.children,e=>{if(!e)return null;let t=!!e.props.order&&!!this.props.onOrder,n=e.props.order===this.props.order;return(0,X.jsx)(D,{grid:this.props.grid,align:e.props.align,force:e.props.force,weight:e.props.weight,orderable:t,ordered:n,dir:this.props.dir,defaultDir:e.props.dir,onClick:t?()=>this.props.onOrder(e.props.order,e.props.dir):null,children:e.props.label})})}getData(){if(this.state.first==0)return null;let e=Math.max(this.state.first-20,0),t=Math.min(this.state.last+20,this.props.data.length-1),n=[];for(let r=e;r<=t;r++){let e=this.props.data[r];e&&n.push((0,X.jsx)(q,{top:r*Z,onClick:this.props.onClick?()=>this.handleClick(e):null,children:Y.Children.map(this.props.children,t=>t?(0,X.jsx)(j,{item:e,grid:this.props.grid,align:t.props.align,force:t.props.force,weight:t.props.weight,onClick:t.props.onClick?()=>t.props.onClick(e):null,onDoubleClick:t.props.onDoubleClick?()=>t.props.onDoubleClick(e):null,children:t.props.children}):null)},r))}return n}getPosition(e){for(var t=0,n=0;e;){if(e.tagName==`BODY`){var r=e.scrollLeft||document.documentElement.scrollLeft,i=e.scrollTop||document.documentElement.scrollTop;t+=e.offsetLeft-r+e.clientLeft,n+=e.offsetTop-i+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}}render(){let e=this.props;return(0,X.jsx)(`div`,{className:e.className,children:(0,X.jsx)(m,{children:(0,X.jsxs)(oe,{children:[(0,X.jsx)(C,{loading:e.loading,children:this.getHeaders()}),(0,X.jsxs)(p,{ref:e=>this.bodyElement=e,onScroll:this.handleScroll,onMouseMove:e=>{this.handleMouseMove(e)},onMouseLeave:this.handleMouseLeave,children:[e.error&&(0,X.jsx)(`div`,{style:{padding:`25px`},children:(0,X.jsxs)(l,{type:`error`,children:[(0,X.jsx)(l.Header,{children:`Error`}),e.errorMessage&&e.errorMessage,!e.errorMessage&&`An error occurred loading data.`,e.onFetch&&(0,X.jsx)(`div`,{style:{textAlign:`right`},children:(0,X.jsx)(ne,{onClick:this.handleRetry,children:`Retry`})})]})}),!e.error&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(V,{heightInItems:e.data.length,children:this.getData()}),e.data.length==0&&!e.loading&&(0,X.jsx)(`div`,{style:{padding:`25px`},children:(0,X.jsxs)(l,{type:`warning`,children:[(0,X.jsx)(l.Header,{children:`No data`}),e.nodata&&e.nodata,!e.nodata&&`Either no data is available, or perhaps your filters are too restrictive.`]})})]})]}),(0,X.jsx)(ae,{nodeRef:this.counterRef,in:e.data.length>0&&this.state.showCounter,timeout:500,unmountOnExit:!0,classNames:`fade`,children:(0,X.jsx)(I,{nodeRef:this.counterRef,count:e.data.length,first:this.state.first,last:this.state.last})})]})})})}},ce=o(Q)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`,$=e=>(0,X.jsx)(ce,{...e}),$.Column=g,$.__docgenInfo={description:`@example
<DataTable 
  error={false} loading={false} scrollTop={0}
  onScroll={(scrollTop: number) => {}} 
  data={[
    { name: "John",   age: 24, sport: "Soccer"},
    { name: "Mary",   age: 18, sport: "Polo"},
    { name: "Bert",   age: 21, sport: "Basketball"}
  ]} 
  onFetch={(offset: number, count: number) => {}} 
  onOrder={(order: string, dir?: TDir) => {}} 
  order="name" dir="asc">

  <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
  <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
  <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>

</DataTable>

@link https://henck.github.io/typeui/?path=/story/controls-datatable--properties`,methods:[],displayName:`DataTable`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`any`}],raw:`any[]`},description:`Data for table. TableData.Column elements must provide function
to render item fields in each column.`},order:{required:!1,tsType:{name:`string`},description:"Current DataTable order field name, e.g. `name`."},dir:{required:!1,tsType:{name:`union`,raw:`'asc' | 'desc'`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`}]},description:"Current DataTable order direction (`asc` or `desc`)."},scrollTop:{required:!1,tsType:{name:`number`},description:`Optional vertical offset (in pixels) to scroll to after update. 
@default 0`},onScroll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scrollTop: number) => void`,signature:{arguments:[{type:{name:`number`},name:`scrollTop`}],return:{name:`void`}}},description:`Callback that receives scroll offset in pixels when a scroll operations ends.`},onFetch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(offset: number, count: number) => void`,signature:{arguments:[{type:{name:`number`},name:`offset`},{type:{name:`number`},name:`count`}],return:{name:`void`}}},description:`This callback is called when the table needs to fetch more items.`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item:any) => void`,signature:{arguments:[{type:{name:`any`},name:`item`}],return:{name:`void`}}},description:`This callback is called when an item is clicked.`},onOrder:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(order: string, dir?: TDir) => void`,signature:{arguments:[{type:{name:`string`},name:`order`},{type:{name:`union`,raw:`'asc' | 'desc'`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`}]},name:`dir`}],return:{name:`void`}}},description:`This callback is called when the table sets a new order.`},nodata:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Element to show when there is no data. The DataTable has a default "no data" message.`},loading:{required:!1,tsType:{name:`boolean`},description:`Currently loading? If true, an amination appears. 
@default false`},error:{required:!1,tsType:{name:`boolean`},description:`Show error state? This will offer a default error message,  and a "Retry" 
button if onFetch is set. 
@default false`},errorMessage:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`If set, this message replaces the default error message.`},grid:{required:!1,tsType:{name:`boolean`},description:`If set, DataTable shows vertical grid lines. 
@default false`}}}})))()}export{le as n,$ as t};