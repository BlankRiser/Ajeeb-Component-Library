/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

const Typography = plugin(function ({ addUtilities }) {
  const typographyUtilities = {
    '.text-extra-small': {
      fontSize: '0.75rem', // 12px
      lineHeight: '150%',
    },
    '.text-small': {
      //
      fontSize: '0.875rem', // 12px
      lineHeight: '143%',
    },
    '.text-medium': {
      fontSize: '1rem', // 12px
      lineHeight: '150%',
    },
    '.text-large': {
      fontSize: '1.125rem', // 12px
      lineHeight: '156%',
    },
    '.text-extra-large': {
      fontSize: '1.25rem', // 12px
      lineHeight: '150%',
    },
    '.text-display-extra-small': {
      fontSize: '1.5rem', // 12px
      lineHeight: '133%',
    },
    '.text-display-small': {
      fontSize: '1.875rem', // 12px
      lineHeight: '127%',
    },
    '.text-display-medium': {
      fontSize: '2.25rem', // 12px
      lineHeight: '122%',
      letterSpacing: '-0.02em',
    },
    '.text-display-large': {
      fontSize: '3rem', // 12px
      lineHeight: '125%',
      letterSpacing: '-0.02em',
    },
    '.text-display-extra-large': {
      fontSize: '3.75rem', // 12px
      lineHeight: '120%',
      letterSpacing: '-0.02em',
    },
    '.text-display-2xl': {
      fontSize: '4.5rem', // 12px
      lineHeight: '125%',
      letterSpacing: '-0.02em',
    },
  };
  addUtilities(typographyUtilities, ['responsive', 'hover']);
});

module.exports = Typography;
