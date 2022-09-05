import { DefaultTheme } from 'styled-components';

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

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

const device = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktop})`,
};

const iconSizes = {
  s: '24px',
  m: '32px',
  l: '48px',
  crossSizes: {
    s: '12px',
    m: '18px',
    l: '20px',
  },
};

const toastHeights = {
  s: '35px',
  m: '50px',
  l: '70px',
};

const containerSizes = {
  xs: '150px',
  s: '250px',
  m: '300px',
  l: '400px',
};

const spaces = {
  s: '10px',
  l: '24px',
  xl: '32px',
  xxl: '50px',
};

const fontSizes = {
  s: '12px',
  m: '18px',
  l: '24px',
};

export const defaultTheme: DefaultTheme = {
  type,
  device,
  iconSizes,
  toastHeights,
  containerSizes,
  spaces,
  fontSizes,
};
