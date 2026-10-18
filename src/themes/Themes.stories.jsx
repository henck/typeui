import { Template } from './Template';

export default {
  title: 'Theme/Themes',

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const StandardTheme = {
  render: Template.bind({}),
  name: 'Standard theme',
  args: {},
};

export const DarkTheme = {
  render: Template.bind({}),
  name: 'Dark theme',

  //'#305A7C'
  args: {
    divBackground: '#406A8C',
    background: '#406A8C',
    normalColor: '#aaaaaa',
    primaryColor: '#2185d0',
    secondaryColor: '#1b1c1d',
    positiveColor: '#21ba45',
    negativeColor: '#db2828',

    infoColor: {
      color: 'rgb(39, 111, 134)',
      background: 'rgb(248, 255, 255)',
      border: 'rgb(169, 213, 222)',
    },

    warningColor: {
      color: 'rgb(87, 58, 8)',
      background: 'rgb(255, 250, 243)',
      border: 'rgb(201, 186, 155)',
    },

    successColor: {
      color: 'rgb(44, 102, 45)',
      background: 'rgb(252, 255, 245)',
      border: 'rgb(163, 194, 147)',
    },

    errorColor: {
      color: '#ffffff',
      background: '#5c3030',
      border: '#c18787',
    },

    fontURL: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i&subset=latin',
    fontName: 'Roboto',
    fontSize: 16,
    fontColor: '#ffffff',
    fontLineHeight: 24,
    radius: 4,
    darken: 0.05,
  },
};

export const RectangularTheme = {
  render: Template.bind({}),
  name: 'Rectangular theme',

  args: {
    radius: 0,
  },
};
