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
    elevation: Elevation
    palette: Palette
    shape: Shape
    state: State
    typography: Typography
    colors: Colors
}


export const MaterialLightTheme: MaterialTheme = {
    elevation,
    palette,
    shape,
    state,
    typography,
    colors: lightColors,
}

export const MaterialDarkTheme: MaterialTheme = {
    elevation,
    palette,
    shape,
    state,
    typography,
    colors: darkColors,
}
