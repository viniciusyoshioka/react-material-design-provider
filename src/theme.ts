import {
    Colors,
    Palette,
    Shape,
    State,
    Typography,
    darkColors,
    lightColors,
    palette,
    shape,
    state,
    typography,
} from "./material-design"


export type MaterialTheme = {
    palette: Palette
    shape: Shape
    state: State
    typography: Typography
    colors: Colors
}


export const MaterialLightTheme: MaterialTheme = {
    palette,
    shape,
    state,
    typography,
    colors: lightColors,
}

export const MaterialDarkTheme: MaterialTheme = {
    palette,
    shape,
    state,
    typography,
    colors: darkColors,
}
