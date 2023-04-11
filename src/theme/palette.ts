import { alpha } from "@mui/material";

const PRIMARY = {
  lighter: '#E9F3F1',
  light: '#93C7BA',
  main: '#289175',
  dark: '#1C423A',
  darker: '#0F2822',
};
const SECONDARY = {
  lighter: '#FFF1ED',
  light: '#FFBDA7',
  main: '#FF7B4F',
  dark: '#cc623f',
  darker: '#3d1d13',
};
const INFO = {
  lighter: '#8FABD3',
  light: '#4C79B9',
  main: '#1F58A8',
  dark: '#194686',
  darker: '#133565',
};
const SUCCESS = {
  lighter: '#EAF6EE',
  light: '#95D0AC',
  main: '#2CA159',
  dark: '#238147',
  darker: '#1A6135',
};
const WARNING = {
  lighter: '#F6EFAC',
  light: '#f2e57c',
  main: '#ffc107',
  dark: '#d7c952',
  darker: '#a79c40',
};
const ERROR = {
  lighter: '#FFA7A7',
  light: '#FF8585',
  main: '#FF5151',
  dark: '#CC4141',
  darker: '#993131',
};

const GREEN = {
  0: '#FFFFFF',
  100: '#289175',
  200: '#20745e',
  300: '#1c6552',
  400: '#185746',
  500: '#14483a',
  600: '#103a2f',
  700: '#0c2b23',
  800: '#081d17',
  900: '#040e0c',
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
  main:    '#3D3D3D',
  light:   '#AAAAAA',
  lighter: '#EEEDED',
};


const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  green: GREEN,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;