import { theme } from './Theme';
import { css, createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components'

const base = css`
@import url(https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i&subset=latin);
body {
  font-family: Roboto, sans-serif;
  color: ${theme.fontColor};
  font-size: ${theme.fontSize}px;
  line-height: ${theme.fontLineHeight}px;
} 

p {
  margin: 0 0 4px 0;
}

b {
  font-weight: 500;
}

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
`

export const StyleBase = createGlobalStyle`
  ${base}
`