import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { StyleReset, StyleBase, Theme } from './styles';

import * as ReactMarkdown from 'react-markdown';

import { Table } from './controls/Table/Table'

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
          <td>
            <code>{property}</code>
            {required ? <span style={{color:'red'}}>*</span> : null}
          </td>
          <td style={{color: '#666'}}>{(propType as any).name}</td>
          <td>{defaultValue}</td>
          <td style={{lineHeight: '1.4em'}}><ReactMarkdown source={description}/></td>
        </tr>
      );
    }
  );

  return (
    <Table>
      <thead>
        <tr>
          <th style={{width:'15%'}}>Name</th>
          <th style={{width:'15%'}}>Type</th>
          <th style={{width:'15%'}}>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </Table>
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
      <ThemeProvider theme={Theme}>
        {(story as any)()}
      </ThemeProvider>
    </div>
  );

export { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs };