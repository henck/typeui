import { Theme } from './Theme'
import { css, createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components'

const base = css`
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto:400,400i,500,500i&subset=latin);
  
  body {
    font-family: Roboto, sans-serif;
    color: ${Theme.fontColor};
    font-size: ${Theme.fontSize}px;
    line-height: ${Theme.fontLineHeight}px;
  } 

  p {
    margin: 0 0 4px 0;
  }

  b, strong {
    font-weight: 500;
  }

  i, em {
    font-style: italic;
  }

  small, sub, sup { font-size: .83em; }
  sub             { vertical-align: sub; }
  sup             { vertical-align: super; }

  code {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace;
    background-color: #555;
    color: #fff;
    border-radius: 3px;
    padding: 0px 4px 1px 4px;
    transition: background-color 0.1s ease;
    &:hover {
      background-color: #666;
    }
  }

  pre {
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace;
    background-color: #555;
    color: #fff;
    border-radius: 3px;
    padding: 8px 16px;
    overflow-x: hidden;
  }
`;

const StyleBase = createGlobalStyle`
  ${base}
`;

export { StyleBase };
