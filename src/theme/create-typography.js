import { neutral } from "./create-palette";

export const createTypography = () => {
  return {
    fontFamily: `'Montserrat', sans-serif`,
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: neutral[50]
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
      color: neutral[50]
    },
    button: {
      fontWeight: 600,
      color: neutral[50]
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
      color: neutral[50]
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: neutral[50]
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: neutral[50]
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
      color: neutral[50]
    },
    h1: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    h2: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    h3: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    h4: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    h5: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: neutral[50]
    },
    'h5-2': {
      fontFamily: `ClashDisplay-Semibold`,
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: neutral[50]
    },
    h6: {
      fontFamily: `ClashDisplay-Bold`,
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    'h6-2': {
      fontFamily: `ClashDisplay-Semibold`,
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.2,
      color: neutral[50]
    },
    time: {
      fontFamily: `'Unica One', cursive`,
      lineHeight: 1.5,
      fontWeight: 400,
      color: neutral[50]
    }
  };
};
