import Color from "color"

import { Colors } from "./colors-type"
import { palette } from "./palette"
import { state } from "./state"


export const darkColors: Colors = {
    primary: palette.primary80,
    onPrimary: palette.primary20,
    primaryContainer: palette.primary30,
    onPrimaryContainer: palette.primary90,
    inversePrimary: palette.primary40,

    primaryFixed: palette.primary90,
    primaryFixedDim: palette.primary80,
    onPrimaryFixed: palette.primary10,
    onPrimaryFixedVariant: palette.primary30,

    secondary: palette.secondary80,
    onSecondary: palette.secondary20,
    secondaryContainer: palette.secondary30,
    onSecondaryContainer: palette.secondary90,

    secondaryFixed: palette.secondary90,
    secondaryFixedDim: palette.secondary80,
    onSecondaryFixed: palette.secondary10,
    onSecondaryFixedVariant: palette.secondary30,

    tertiary: palette.tertiary80,
    onTertiary: palette.tertiary20,
    tertiaryContainer: palette.tertiary30,
    onTertiaryContainer: palette.tertiary90,

    tertiaryFixed: palette.tertiary90,
    tertiaryFixedDim: palette.tertiary80,
    onTertiaryFixed: palette.tertiary10,
    onTertiaryFixedVariant: palette.tertiary30,

    error: palette.error80,
    onError: palette.error20,
    errorContainer: palette.error30,
    onErrorContainer: palette.error90,

    background: palette.neutral6,
    onBackground: palette.neutral90,

    surface: palette.neutral6,
    onSurface: palette.neutral90,
    surfaceVariant: palette.neutralVariant30,
    onSurfaceVariant: palette.neutralVariant80,
    inverseSurface: palette.neutral90,
    inverseOnSurface: palette.neutral20,
    surfaceTint: palette.primary80,
    surfaceTintColor: palette.primary80,

    surfaceDim: palette.neutral6,
    surfaceBright: palette.neutral24,
    surfaceContainerLowest: palette.neutral4,
    surfaceContainerLow: palette.neutral10,
    surfaceContainer: palette.neutral12,
    surfaceContainerHigh: palette.neutral17,
    surfaceContainerHighest: palette.neutral22,

    outline: palette.neutralVariant60,
    outlineVariant: palette.neutralVariant30,

    shadow: palette.neutral0,
    scrim: palette.neutral0,

    surfaceDisabled: Color(palette.neutral6)
        .alpha(state.disabled)
        .rgb()
        .toString(),

    elevation0: palette.neutral6,
    elevation1: palette.neutral10,
    elevation2: palette.neutral12,
    elevation3: palette.neutral17,
    elevation4: palette.neutral17,
    elevation5: palette.neutral22,
}
