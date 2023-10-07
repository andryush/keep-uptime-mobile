import { createConfig, config as defaultConfig } from '@gluestack-ui/themed';

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary0: '#5e2ced',
      primary50: '#dbceff',
      primary100: '#c1aaff',
      primary200: '#a889fc',
      primary300: '#906af7',
      primary400: '#784df0',
      primary500: '#5e2ced',
      primary600: '#541fe4',
      primary700: '#4e20ce',
      primary800: '#4a23b5',
      primary900: '#45259e',
      primary950: '#402688',
    },
  },
});

export { config };

type ConfigType = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}
