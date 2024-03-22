import Color from "color"

import { Colors } from "./colors-type"
import { palette } from "./palette"
import { state } from "./state"


export const lightColors: Colors = {
  primary: palette.primary40,
  onPrimary: palette.primary100,
  primaryContainer: palette.primary90,
  onPrimaryContainer: palette.primary10,
  inversePrimary: palette.primary80,

  primaryFixed: palette.primary90,
  primaryFixedDim: palette.primary80,
  onPrimaryFixed: palette.primary10,
  onPrimaryFixedVariant: palette.primary30,

  secondary: palette.secondary40,
  onSecondary: palette.secondary100,
  secondaryContainer: palette.secondary90,
  onSecondaryContainer: palette.secondary10,

  secondaryFixed: palette.secondary90,
  secondaryFixedDim: palette.secondary80,
  onSecondaryFixed: palette.secondary10,
  onSecondaryFixedVariant: palette.secondary30,

  tertiary: palette.tertiary40,
  onTertiary: palette.tertiary100,
  tertiaryContainer: palette.tertiary90,
  onTertiaryContainer: palette.tertiary10,

  tertiaryFixed: palette.tertiary90,
  tertiaryFixedDim: palette.tertiary80,
  onTertiaryFixed: palette.tertiary10,
  onTertiaryFixedVariant: palette.tertiary30,

  error: palette.error40,
  onError: palette.error100,
  errorContainer: palette.error90,
  onErrorContainer: palette.error10,

  background: palette.neutral98,
  onBackground: palette.neutral10,

  surface: palette.neutral98,
  onSurface: palette.neutral10,
  surfaceVariant: palette.neutralVariant90,
  onSurfaceVariant: palette.neutralVariant30,
  inverseSurface: palette.neutral20,
  inverseOnSurface: palette.neutral95,
  surfaceTint: palette.primary40,
  surfaceTintColor: palette.primary40,

  surfaceDim: palette.neutral87,
  surfaceBright: palette.neutral98,
  surfaceContainerLowest: palette.neutral100,
  surfaceContainerLow: palette.neutral96,
  surfaceContainer: palette.neutral94,
  surfaceContainerHigh: palette.neutral92,
  surfaceContainerHighest: palette.neutral90,

  outline: palette.neutralVariant50,
  outlineVariant: palette.neutralVariant80,

  shadow: palette.neutral0,
  scrim: palette.neutral0,

  surfaceDisabled: Color(palette.neutral98)
    .alpha(state.disabled)
    .rgb()
    .toString(),

  elevation0: palette.neutral98,
  elevation1: palette.neutral96,
  elevation2: palette.neutral94,
  elevation3: palette.neutral92,
  elevation4: palette.neutral92,
  elevation5: palette.neutral90,
}
