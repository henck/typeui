import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { StyleReset } from '../styles/StyleReset';
import { StyleBase } from '../styles/StyleBase';
import { theme }  from '../styles/Theme';

type TPropDefinitions = Array<{
  property: string, // The name of the prop
  propType: Object | string, // The prop type. TODO: info about what this object is...
  required: boolean, // True if the prop is required
  description: string, // The description of the prop
  defaultValue: any // The default value of the prop
}>;

/* Custom component for rendering prop tables. */
const TableComponent = ({ propDefinitions }:any ) => {
  const props = (propDefinitions as TPropDefinitions).map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td style={{padding: '2px 20px 2px 0', fontFamily: 'courier'}}>
            {property}
            {required ? <span style={{color:'red'}}>*</span> : null}
          </td>
          <td style={{padding: '2px 20px 2px 0', color: '#666'}}>{(propType as any).name}</td>
          <td style={{padding: '2px 20px 2px 0'}}>{defaultValue}</td>
          <td style={{padding: '2px 20px 2px 0'}}>{description}</td>
        </tr>
      );
    }
  );

  return (
    <table>
      <thead>
        <tr>
          <th style={{textTransform: 'uppercase', textAlign: 'left', fontWeight: 500, padding: '2px 20px 2px 0', fontSize: '90%'}}>name</th>
          <th style={{textTransform: 'uppercase', textAlign: 'left', fontWeight: 500, padding: '2px 20px 2px 0', fontSize: '90%'}}>type</th>
          <th style={{textTransform: 'uppercase', textAlign: 'left', fontWeight: 500, padding: '2px 20px 2px 0', fontSize: '90%'}}>default</th>
          <th style={{textTransform: 'uppercase', textAlign: 'left', fontWeight: 500, padding: '2px 20px 2px 0', fontSize: '90%'}}>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

const infoStyles = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      lineHeight: '1em'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
      margin: '0 0 0 0'
    }
  },
  infoBody: {
    backgroundColor: '#eee',
    lineHeight: '2',
    fontFamily: 'Roboto',
    margin: '20px 0',
    padding: '20px 40px',
  },
  infoContent: {
    fontFamily: 'Roboto',
  },
  infoStory: {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '20px 40px'
  },
  propTableHead: {
    fontWeight: 500
    //display: 'none'
  }
};

const withInfoSettings = {
  styles: infoStyles,
  inline: true, 
  source: false,
  TableComponent: TableComponent
};

const withStyledComponents = (story: any) => (
    <div>
      <StyleReset/>
      <StyleBase/>
      <ThemeProvider theme={theme}>
        {(story as any)()}
      </ThemeProvider>
    </div>
  );

export { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs };