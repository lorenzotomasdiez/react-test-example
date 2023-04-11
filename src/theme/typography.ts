

const FONT_PRIMARY = "Roboto, sans-serif"; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: "73px",
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
} as const;

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: `${sm}px`,
    },
    '@media (min-width:900px)': {
      fontSize: `${md}px`,
    },
    '@media (min-width:1200px)': {
      fontSize: `${lg}px`,
    },
  };
}



export default typography;
