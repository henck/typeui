import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n,o as r,r as i,s as a}from"./Theme-DNNvCs1s.js";import{n as o}from"./iframe-BMOsmv_G.js";var s,c,l,u;function d(){return(d=e((()=>{t(),a(),n(),s=o(),c=e=>(0,s.jsx)(`table`,{className:e.className,children:e.children}),l=i(c)`
  width: 100%;
  border-collapse: separate;
  table-layout: fixed; /* Required for overflow-hidden to work in <td> */

  th, td {
    padding: 6px 8px 6px 8px;
    text-align: left;
  }  

  th {
    font-weight: 500;
    font-size: 12px;
    background: #f7f7f7;
  }

  /* Border */
  ${e=>!e.transparent&&r`
    border-bottom-left-radius: ${e=>e.theme.radius}px;
    border-bottom-right-radius: ${e=>e.theme.radius}px;
    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;

    th {
      border-top: solid 1px ${e=>e.theme.normalColor};  
      border-bottom: solid 1px ${e=>e.theme.normalColor};    
      &:first-child {
        border-top-left-radius: ${e=>e.theme.radius}px;
        border-left: solid 1px ${e=>e.theme.normalColor};
      }
      &:last-child {
        border-top-right-radius: ${e=>e.theme.radius}px;
        border-right: solid 1px ${e=>e.theme.normalColor};
      }      
    }

    /* Leftmost <td>'s have a left border */
    td:first-child {
      border-left: solid 1px ${e=>e.theme.normalColor};
    }

    /* Rightmost <td>'s have a right border */
    td:last-child {
      border-right: solid 1px ${e=>e.theme.normalColor};
    }  

    /* If there is no <thead>, then the first row has a border and rounded corners: */
    tbody:not(:nth-child(2)) tr:first-child {
      td {
        border-top: solid 1px ${e=>e.theme.normalColor};
      }
      td:first-child {
        border-top-left-radius: ${e=>e.theme.radius}px;
      }
      td:last-child {
        border-top-right-radius: ${e=>e.theme.radius}px;
      }
    }

    /* Add border and rounding to last row */
    tr:last-child {
      td {
        border-bottom: solid 1px ${e=>e.theme.normalColor};
      }
      td:first-child {
        border-bottom-left-radius: ${e=>e.theme.radius}px;
      }
      td:last-child {
        border-bottom-right-radius: ${e=>e.theme.radius}px;
      }
    }
  `}

  ${e=>e.striped&&r`
    tr:nth-child(2n) td {
      background-color: #f7f7f7;
    }
  `}
`,u=e=>(0,s.jsx)(l,{...e}),u.__docgenInfo={description:`A Table adds some standard styling to Table elements. Ordinary th and td elements are used \r
inside. You must use thead and tbody for the styling to work correctly.\r
\r
@example\r
<Table>\r
  <thead>...</thead>\r
  <tbody>...</tbody>\r
</Table>\r
\r
@link https://henck.github.io/typeui/?path=/story/controls-table--properties`,methods:[],displayName:`Table`,props:{className:{required:!1,tsType:{name:`string`},description:`@ignore`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`@ignore`},striped:{required:!1,tsType:{name:`boolean`},description:`If set, adds row striping. \r
@default false`},transparent:{required:!1,tsType:{name:`boolean`},description:`If set, removes table border. \r
@default false`}}}})))()}export{d as n,u as t};