import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'

import type { MaterialTheme } from './theme.ts'
import { MaterialLightTheme } from './theme.ts'


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
