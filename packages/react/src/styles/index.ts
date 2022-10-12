import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@girardi-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
  getCssText,
} = createStitches({
  theme: { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
