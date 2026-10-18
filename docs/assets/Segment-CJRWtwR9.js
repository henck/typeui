import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";import{n as s,t as c}from"./darken-Ccl44O0b.js";import{n as l,t as u}from"./alpha-BnoikBvh.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),a(),n(),s(),l(),d=o(),f=e=>(0,d.jsxs)(`div`,{className:e.className,children:[(0,d.jsx)(p,{children:e.children}),e.stacked&&(0,d.jsx)(m,{}),e.stacked&&e.tall&&(0,d.jsx)(h,{}),e.piled&&(0,d.jsx)(g,{}),e.piled&&(0,d.jsx)(_,{})]}),p=i.div``,m=i.div``,h=i.div``,g=i.div``,_=i.div``,v=i(f)`
  /* Segment's div must be wrapped in a parent div, which must set
   * a stacking context, in order for negative z-indices used
   * by 'stacked' and 'piled' to work.
   * http://www.independent-software.com/set-stacking-order-of-pseudo-elements-below-parent-element.html
   */
  position: relative;
  z-index: 0; // Needs to begin a stacking order. (not z-index: auto)

  /* Margin:
     Attached segments have no margin, except bottom-attached. */
  ${e=>(!e.attached||e.attached==`bottom`)&&r`margin-bottom: 1em;`}
  
  /* Floating */
  ${e=>e.float===`left`&&r`float:left;`}
  ${e=>e.float===`right`&&r`float:right;`}

  /* Compact */
  ${e=>e.compact&&r`display:table;`}

  ${p} {
    position: relative;
    background: ${e=>e.theme.background};
    padding: 14px;
    z-index: 3;

    /* Shadow: only unattached segments have a dropshadow. */
    ${e=>!e.attached&&r`box-shadow: ${e=>u(.5,c(.5,e.theme.normalColor))} 0px 1px 2px 0px;`}

    /* Attachment and border: */
    border-color: ${e=>e.theme.normalColor};
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;
    /* Not attached: normal border. */
    ${e=>!e.attached&&r`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-radius: ${e=>e.theme.radius}px;
    `}
    /* Middle attached: Only bottom border. */
    ${e=>e.attached&&e.attached!==`top`&&e.attached!==`bottom`&&r`
      border-bottom-width: 1px;
      border-radius: none;
    `}      
    /* Top attached: Top and bottom border. */
    ${e=>e.attached===`top`&&r`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-left-radius: ${e.theme.radius}px;
      border-top-right-radius: ${e.theme.radius}px;
    `}
    /* Botom attached: Only bottom border. */
    ${e=>e.attached===`bottom`&&r`
      border-bottom-width: 1px;
      border-bottom-left-radius: ${e.theme.radius}px;
      border-bottom-right-radius: ${e.theme.radius}px;
    `}

    /* A raised Segment gets an extra deep shadow. */
    ${e=>e.raised&&r`box-shadow: ${e=>u(.5,c(.5,e.theme.normalColor))} 0px 2px 10px 0px;`}

    /* Secondary, tertiary, custom color */
    ${e=>e.secondary&&r`background: ${c(.1,e.theme.background)};`}
    ${e=>e.tertiary&&r`background: ${c(.2,e.theme.background)};`}
    ${e=>e.color&&r`background: ${e.color};`}

    /* Padded */
    ${e=>e.padded&&e.padded!==`very`&&r`padding: 21px;`}
    ${e=>e.padded&&e.padded===`very`&&r`padding: 42px;`}
    ${e=>e.tight&&r`padding: 4px 14px;`}

    /* Disabled */
    ${e=>e.disabled&&r`opacity: 0.45;`}

    /* Text alignment */
    ${e=>e.align===`left`&&r`text-align:left;`}
    ${e=>e.align===`center`&&r`text-align:center;`}
    ${e=>e.align===`right`&&r`text-align:right;`}

    /* Clearfix */
    &:after {
      content: "";
      clear: both;
      display: table;    
    }
  }

  ${m}, ${h}, ${g}, ${_} {
    position: absolute;
    background: ${e=>e.theme.background};
    border: solid 1px ${e=>e.theme.normalColor};
    border-radius: ${e=>e.theme.radius}px;
    box-shadow: ${e=>u(.5,c(.5,e.theme.normalColor))} 0px 1px 2px 0px;
  }

  /* 
   * A stacked segment has a single page beneath it. 
   */  
  ${m} {
    left: 4px;
    top: 4px;
    right: -4px;
    bottom: -4px;
    z-index: 2;
  }

  /* 
   * A tall stacked segment has a two pages beneath it. 
   */  
  ${h} {
    left: 8px;
    top: 8px;
    right: -8px;
    bottom: -8px;
    z-index: 1;      
  }  

  /*
   * A piled segment has two rotated pages behind it.
   */
  ${g} {
    left: 5px;
    top: 0;
    right: -5px;
    bottom: 0;
    z-index: 2;
    transform: rotate(.4deg);    
  }
  ${_} {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    transform: rotate(.8deg);    
  }
`,y=e=>(0,d.jsx)(v,{...e}),y.__docgenInfo={description:`A Segment places a border around some content.\r
\r
@example\r
<Segment piled>Some content</Segment>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-segment--properties`,methods:[],displayName:`Segment`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},raised:{required:!1,tsType:{name:`boolean`},description:`Segment will have an extra-strong dropshadow if true. \r
@default false`},stacked:{required:!1,tsType:{name:`boolean`},description:`Segment will have a page lying below it if true. \r
@default false`},tall:{required:!1,tsType:{name:`boolean`},description:`(With stacked): Segment will have two pages lying below it if true. \r
@default false`},piled:{required:!1,tsType:{name:`boolean`},description:`Segment will have a disorganized pile of two pages lying below it if true. \r
@default false`},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:"Align content to `left`, `center` or `right`. By default `left`."},float:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Segment can float to the `left` or `right`."},secondary:{required:!1,tsType:{name:`boolean`},description:`Decrease segment's emphasis. \r
@default false`},tertiary:{required:!1,tsType:{name:`boolean`},description:`Seriously decrease segment's emphasis. \r
@default false`},color:{required:!1,tsType:{name:`string`},description:`Custom color`},padded:{required:!1,tsType:{name:`union`,raw:`'very' | boolean`,elements:[{name:`literal`,value:`'very'`},{name:`boolean`}]},description:"Increase segment padding (optionally `very`). \r\n@default false"},tight:{required:!1,tsType:{name:`boolean`},description:`Decrease segment padding. \r
@default false`},compact:{required:!1,tsType:{name:`boolean`},description:`Only take up as much space as necessary. \r
@default false`},disabled:{required:!1,tsType:{name:`boolean`},description:`A disabled segment is light in color.\r
@default false`},attached:{required:!1,tsType:{name:`union`,raw:`boolean | VerticalDirection`,elements:[{name:`boolean`},{name:`union`,raw:`'top' | 'bottom'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]}]},description:"Attached to `top`, `bottom` or nothing (both)."}}}})))()}export{b as n,y as t};