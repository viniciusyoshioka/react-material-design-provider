import { useState } from "react"
import {
    MaterialDarkTheme,
    MaterialLightTheme,
    MaterialProvider,
} from "react-material-design-provider"

import { Screen } from "./Screen"


export function App() {


    const [isDark, setIsDark] = useState(false)


    return (
        <MaterialProvider theme={isDark ? MaterialDarkTheme : MaterialLightTheme}>
            <Screen />
        </MaterialProvider>
    )
}
