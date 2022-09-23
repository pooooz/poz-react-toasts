import { DefaultTheme } from 'styled-components';

const whiteFilter =
  'invert(100%) sepia(0%) saturate(2%) hue-rotate(230deg)\n    brightness(108%) contrast(101%)';
const whiteColor = '#FFFFFF';
const blackFilter =
  'invert(0%) sepia(96%) saturate(0%) hue-rotate(40deg) brightness(98%) contrast(103%)';
const blackColor = '#000000';

const infoBackground = '#9A40D3';
const warningBackground = '#F4E048';
const errorBackground = '#E25837';
const successBackground = '#37E29A';

const type = {
  info: {
    background: infoBackground,
    iconColor: whiteFilter,
    color: whiteColor,
  },
  warning: {
    background: warningBackground,
    iconColor: blackFilter,
    color: blackColor,
  },
  error: {
    background: errorBackground,
    iconColor: whiteFilter,
    color: whiteColor,
  },
  success: {
    background: successBackground,
    iconColor: whiteFilter,
    color: whiteColor,
  },
};

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
};

const device = {
  mobileS: `(max-width: ${sizes.mobileS}px)`,
  mobileM: `(max-width: ${sizes.mobileM}px)`,
  mobileL: `(max-width: ${sizes.mobileL}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
  laptopL: `(max-width: ${sizes.laptopL}px)`,
  desktop: `(max-width: ${sizes.desktop}px)`,
  desktopL: `(max-width: ${sizes.desktop}px)`,
};

const iconSizes = {
  s: 24,
  m: 32,
  l: 48,
  crossSizes: {
    s: 12,
    m: 18,
    l: 20,
  },
};

const toastHeights = {
  s: 35,
  m: 50,
  l: 70,
};

const containerSizes = {
  xs: 150,
  s: 250,
  m: 300,
  l: 400,
};

const spaces = {
  s: 10,
  l: 24,
  xl: 32,
  xxl: 50,
};

const fontSizes = {
  s: 12,
  m: 18,
  l: 24,
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
