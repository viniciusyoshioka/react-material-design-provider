import { PropsWithChildren, createContext, useContext } from "react"

import { MaterialLightTheme, MaterialTheme } from "./theme"


const MaterialContext = createContext(MaterialLightTheme)


export interface MaterialProviderProps extends PropsWithChildren {
    theme: MaterialTheme
}

export function MaterialProvider(props: MaterialProviderProps) {
    return (
        <MaterialContext.Provider
            value={props.theme}
            children={props.children}
        />
    )
}


export function useMaterialTheme() {
    return useContext(MaterialContext)
}
