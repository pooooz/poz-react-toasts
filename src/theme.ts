import { DefaultTheme } from 'styled-components';

const whiteColor = '#FFFFFF';
const blackColor = '#000000';

const infoBackground = '#9A40D3';
const warningBackground = '#F4E048';
const errorBackground = '#E25837';
const successBackground = '#37E29A';

const type = {
  info: {
    background: infoBackground,
    color: whiteColor,
  },
  warning: {
    background: warningBackground,
    color: blackColor,
  },
  error: {
    background: errorBackground,
    color: whiteColor,
  },
  success: {
    background: successBackground,
    color: whiteColor,
  },
};

export const defaultTheme: DefaultTheme = {
  type,
};
