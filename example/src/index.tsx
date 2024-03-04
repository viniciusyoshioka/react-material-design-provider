import { useState } from "react"
import {
    MaterialDarkTheme,
    MaterialLightTheme,
    MaterialProvider,
} from "react-material-design-provider"
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper"

import { Screen } from "./Screen"


export function App() {


    const [isDark, setIsDark] = useState(false)


    function toggleDarkTheme() {
        setIsDark(current => !current)
    }

    return (
        <MaterialProvider theme={isDark ? MaterialDarkTheme : MaterialLightTheme}>
            <PaperProvider theme={isDark ? MD3DarkTheme : MD3LightTheme}>
                <Screen toggleDarkTheme={toggleDarkTheme} />
            </PaperProvider>
        </MaterialProvider>
    )
}
