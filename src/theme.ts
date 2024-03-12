import {
    Colors,
    Elevation,
    Palette,
    Shape,
    State,
    Typography,
    darkColors,
    elevation,
    lightColors,
    palette,
    shape,
    state,
    typography,
} from "./material-design"


export type MaterialTheme = {
    isDark: boolean
    elevation: Elevation
    palette: Palette
    shape: Shape
    state: State
    typography: Typography
    colors: Colors
}


export const MaterialLightTheme: MaterialTheme = {
    isDark: false,
    colors: lightColors,
    elevation,
    palette,
    shape,
    state,
    typography,
}

export const MaterialDarkTheme: MaterialTheme = {
    isDark: true,
    colors: darkColors,
    elevation,
    palette,
    shape,
    state,
    typography,
}
