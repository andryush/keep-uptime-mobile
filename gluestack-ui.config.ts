import { createConfig, config as defaultConfig } from '@gluestack-ui/themed';

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary0: '#696cff',
      primary50: '#12011fff',
      primary100: '#fcfcff',
      primary200: '#d8d8ff',
      primary300: '#b3b5ff',
      primary400: '#8f91ff',
      primary500: '#696cff',
      primary600: '#5a5dfa',
      primary700: '#4b4ef5',
      primary800: '#3c3fee',
      primary900: '#2f32e6',
      primary950: '#2326dc',
    },
  },
});

export { config };

type ConfigType = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}
