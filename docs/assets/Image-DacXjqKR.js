import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{i as r,n as i,o as a,r as o,s}from"./Theme-DNNvCs1s.js";import{n as c}from"./iframe-BMOsmv_G.js";var l,u,d,f;function p(){return(p=t((()=>{l=e(n()),i(),u=c(),d=class extends l.Component{constructor(e){super(e),this.onLoad=()=>{this.props.onLoad()},this.onError=()=>{this.props.onError()},this.imgRef=l.createRef()}componentDidMount(){this.imgRef.current.src=this.props.src,this.imgRef.current.addEventListener(`load`,this.onLoad,!0),this.imgRef.current.addEventListener(`error`,this.onError,!0)}componentWillUnmount(){this.imgRef.current.removeEventListener(`load`,this.onLoad,!0),this.imgRef.current.removeEventListener(`error`,this.onError,!0)}render(){let e=this.props;return(0,u.jsx)(`img`,{className:e.className,ref:this.imgRef,alt:e.alt,title:e.title})}},f=o(d)`
  display: ${e=>e.loaded?`block`:`none`};
  box-sizing: border-box;

  /* The <img> itself must fill the <span>. */
  width: 100%;
`})))()}var m,h,g,_,v;function y(){return(y=t((()=>{m=e(n()),i(),h=c(),g=class extends m.Component{render(){let e=this.props,t={};return e.size&&(t.size=e.size),e.bordered&&(t.bordered=e.bordered),e.rounded&&(t.rounded=e.rounded),e.circular&&(t.circular=e.circular),(0,h.jsx)(`div`,{className:e.className,children:m.Children.map(this.props.children,e=>m.cloneElement(e,t))})}},_=o(g)`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`,v=class extends m.Component{constructor(...e){super(...e),this.render=()=>(0,h.jsx)(_,{...this.props})}},v.__docgenInfo={description:``,methods:[{name:`render`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`ImageGroup`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:`Sets image size: mini, tiny, small, medium (default), large, big, huge or massive.`},bordered:{required:!1,tsType:{name:`boolean`},description:`Add border \r
@default false`},rounded:{required:!1,tsType:{name:`boolean`},description:`Round image corners \r
@default false`},circular:{required:!1,tsType:{name:`boolean`},description:`Cicular image (works only for square images) \r
@default false`}}}})))()}var b,x,S,C;function w(){return(w=t((()=>{n(),i(),s(),b=c(),x=e=>(0,b.jsxs)(`span`,{className:e.className,children:[e.error&&e.children,(0,b.jsx)(`span`,{})]}),S=r`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`,C=o(x)`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  ${e=>e.error&&a`background: #f0f0f0;`}

  /* Background animation. 
     This is done using an underlying absolute positioned div, which is transformed, 
     rather than using background-position animation. This way, the animation is 
     smoother and GPU-accelerated. */
  ${e=>!e.error&&a`
    & > span:last-child {
      position: absolute;
      left: 0;
      top: 0;
      right: -150%;
      bottom: 0;
      z-index: -1;
      background-color: #fff;
      background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);
      animation: ${S} 1s linear infinite;                
    }          
  `}

  /* Height 
   * Use 'auto' if no size given. If there is a size,
   * then the image is assumed to be square.
   */
  ${e=>e.size===`mini`&&a`height: 35px;`}
  ${e=>e.size===`tiny`&&a`height: 80px;`}
  ${e=>e.size===`small`&&a`height: 150px;`}
  ${e=>e.size===`medium`&&a`height: 300px;`}
  ${e=>e.size===`large`&&a`height: 450px;`}
  ${e=>e.size===`big`&&a`height: 600px;`}
  ${e=>e.size===`huge`&&a`height: 900px;`}
  ${e=>e.size===`massive`&&a`height: 1200px;`}
  ${e=>!e.size&&a`height: auto;`}
  ${e=>e.avatar&&a`height:28px;`}

  /* Take any children and position them in the middle
     of the ImageLoader. */
  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }  
`})))()}var T,E,D,O,k;function A(){return(A=t((()=>{T=e(n()),i(),s(),p(),y(),w(),E=c(),D=e=>{let[t,n]=T.useState(`loading`);return(0,E.jsxs)(`span`,{className:e.className,onClick:e.onClick,children:[t!=`loaded`&&(0,E.jsx)(C,{avatar:e.avatar,size:e.size,error:t==`error`,children:e.children}),t!=`error`&&(0,E.jsx)(f,{src:e.src,loaded:t==`loaded`,onLoad:()=>n(`loaded`),onError:()=>n(`error`),alt:e.alt,title:e.title})]})},O=o(D)`
  box-sizing: border-box;
  flex-shrink: 0;
  /* For ImgMessage overlay positioning: */
  position: relative;
  /* If unsized images fails to load, make sure <span> at 
     least has *some* height. */
  min-height: 24px; 

  /* Display. By default block, unless inline or avatar. */
  ${e=>!e.hidden&&(e.inline||e.spaced||e.avatar)&&a`
    display: inline-block;
  `}
  ${e=>!e.hidden&&!e.inline&&!e.spaced&&!e.avatar&&a`
    display: block;
  `}
  /* The entire image can be hidden. */
  ${e=>e.hidden&&a`display:none;`}

  /* Whatever the image size, it will never be wider than
   * the container space available. */
  max-width: 100%;
  line-height: 0px; /* Otherwise <span> will add extra padding. */
  
  /* By default, inline images are vertically aligned to middle. */ 
  ${e=>(!e.align||e.align===`center`)&&a`vertical-align: middle;`}
  ${e=>e.align===`top`&&a`vertical-align: top;`}
  ${e=>e.align===`bottom`&&a`vertical-align: bottom;`}

  /* Size */
  /* Use 'auto' if no size given. */
  ${e=>e.size===`mini`&&a`width: 35px;`}
  ${e=>e.size===`tiny`&&a`width: 80px;`}
  ${e=>e.size===`small`&&a`width: 150px;`}
  ${e=>e.size===`medium`&&a`width: 300px;`}
  ${e=>e.size===`large`&&a`width: 450px;`}
  ${e=>e.size===`big`&&a`width: 600px;`}
  ${e=>e.size===`huge`&&a`width: 900px;`}
  ${e=>e.size===`massive`&&a`width: 1200px;`}
  ${e=>!e.size&&a`width: auto;`}

  ${f}, ${C} {
    /* Bordered */
    ${e=>e.bordered&&a`border: solid 1px rgba(0, 0, 0, 0.1);`}
    /* Rounded */
    ${e=>e.rounded&&a`border-radius: ${e.theme.radius}px;`}
    /* Circular, Avatar */
    ${e=>(e.circular||e.avatar)&&a`border-radius: 50%;`}
  }

  /* Fluid */
  ${e=>e.fluid&&a`width:100%;`}

  /* Avatar */ 
  ${e=>e.avatar&&a`
    width: 28px;
  `}

  /* Centered */
  ${e=>e.centered&&a`
    margin-left:auto;
    margin-right:auto;    
  `}

  /* Spaced */ 
  ${e=>e.spaced&&a`margin-left: 6px; margin-right: 6px;`}
  ${e=>e.spaced===`left`&&a`margin-right: 0;`}
  ${e=>e.spaced===`right`&&a`margin-left: 0;`}

  /* Floating */
  ${e=>e.float===`left`&&a`float:left; margin-bottom: 13px; margin-right: 13px;`}
  ${e=>e.float===`right`&&a`float:right; margin-bottom: 13px; margin-left: 13px;`}      

  /* onClick */
  ${e=>e.onClick&&a`cursor:pointer;`}

  /* Disabled */
  ${e=>e.disabled&&a`filter: brightness(1.2);`}
`,k=e=>(0,E.jsx)(O,{...e}),k.Group=v,k.__docgenInfo={description:`Loads an image.\r
\r
An Image can have children. These are only shown when the image fails to load. \r
There should be one child potentially containing other children, otherwise they \r
will overlap.\r
\r
@example \r
<Image\r
 size="medium"\r
 src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist">\r
 <Label>\r
   <Icon name="code" />\r
   Loading error\r
 </Label>\r
</Image>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-image--properties`,methods:[],displayName:`Image`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},src:{required:!1,tsType:{name:`string`},description:`Image source URL.`},size:{required:!1,tsType:{name:`union`,raw:`'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'`,elements:[{name:`literal`,value:`'mini'`},{name:`literal`,value:`'tiny'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'big'`},{name:`literal`,value:`'huge'`},{name:`literal`,value:`'massive'`}]},description:"Sets image size: `mini`, `tiny`, `small`, `medium` (default), `large`, `big`, `huge` or `massive`."},bordered:{required:!1,tsType:{name:`boolean`},description:`Add border. \r
@default false`},rounded:{required:!1,tsType:{name:`boolean`},description:`Round image corners. \r
@default false`},circular:{required:!1,tsType:{name:`boolean`},description:`Cicular image (ellipical for non-square images). \r
@default false`},fluid:{required:!1,tsType:{name:`boolean`},description:`A fluid image takes up the width of its container. \r
@default false`},avatar:{required:!1,tsType:{name:`boolean`},description:`An avatar image appears inline and circular.  \r
@default false`},centered:{required:!1,tsType:{name:`boolean`},description:`Set as centered content block. \r
@default false`},inline:{required:!1,tsType:{name:`boolean`},description:`Make image inline. \r
@default false`},spaced:{required:!1,tsType:{name:`union`,raw:`boolean | Float`,elements:[{name:`boolean`},{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]}]},description:"Extra space between inline image and text, either both or `left` or `right`. Implies inline."},float:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"An image can float `left` or `right`."},alt:{required:!1,tsType:{name:`string`},description:`Alt text.`},title:{required:!1,tsType:{name:`string`},description:`Title text.`},hidden:{required:!1,tsType:{name:`boolean`},description:`Hide the image. \r
@default false`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disable the image. \r
@default false`},align:{required:!1,tsType:{name:`union`,raw:`'top' | 'center' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'bottom'`}]},description:"Vertical alignment `top`, `center` or `bottom` (by default `center`) \r\n@default center"},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`onClick events are passed through to the list item's HTML element`}}}})))()}export{O as n,A as r,k as t};