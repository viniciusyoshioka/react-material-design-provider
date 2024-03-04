# react-material-design-provider

Unofficial implementation of [Material Design 3](https://m3.material.io/)
for React.

This library does not implement components. The ideia is to implement
the design system of Material Design (typography, colors, palette, etc.)
and provide them to the application.

## Installation

```sh
npm install react-material-design-provider
# or
yarn add react-material-design-provider
```

## Usage

To use Material Design, wrap you app under
[`MaterialProvider`](#materialprovider) and pass your theme:

```tsx
import { MaterialLightTheme, MaterialProvider } from "react-material-design-provider"


export function App() {
    return (
        <MaterialProvider theme={MaterialLightTheme}>
            {/* ... */}
        </MaterialProvider>
    )
}
```

Then, to get the theme, call [`useMaterialTheme`](#usematerialtheme)
in your component:

```tsx
import { useMaterialTheme } from "react-material-design-provider"


export function Component() {
    
    
    const { colors } = useMaterialTheme()


    // ...
}
```

The library provides the default light and dark themes of Material Design.
If you wish a custom theme, create an object of type
[`MaterialTheme`](#materialtheme) and pass it to the provider's theme prop:

```ts
import { MaterialTheme } from "react-material-design-provider"


const customTheme: MaterialTheme = {
    palette: {
        // ...
    },
    shape: {
        // ...
    },
    state: {
        // ...
    },
    typography: {
        // ...
    },
    colors: {
        // ...
    },
}
```

## Docs for material provider

### MaterialProvider

The provider of Material Design. It receives the theme through `theme` prop. The theme is an object of type [`MaterialTheme`](#materialtheme).

### useMaterialTheme

```ts
function useMaterialTheme(): MaterialTheme
```

Hook to get current material theme. Returns an object of type
[`MaterialTheme`](#materialtheme).

### MaterialTheme

```ts
type MaterialTheme = {
    palette: Palette
    shape: Shape
    state: State
    typography: Typography
    colors: Colors
}
```

Type that represents a material theme. It contains the properties used
in Material Design. See:

- [`Palette`](#palette)
- [`Shape`](#shape)
- [`State`](#state)
- [`Typography`](#typography)
- [`Colors`](#colors)

### MaterialLightTheme

Default light theme of Material Design 3. Object of type
[`MaterialTheme`](#materialtheme).

### MaterialDarkTheme

Default dark theme of Material Design 3. Object of type
[`MaterialTheme`](#materialtheme).

## Docs for Material Design implementation

### Palette

The palette contains a few key colors and its tone variations. Those colors 
are referenced on other places.
See: [palette.ts](src/material-design/palette.ts).

The default palette key colors are:

| Color name    | Color code |
|---------------|------------|
primary         | <span style="background-color:#6750A4">#6750A4</span>
secondary       | <span style="background-color:#958DA5;color:black">#958DA5</span>
tertiary        | <span style="background-color:#B58392;color:black">#B58392</span>
error           | <span style="background-color:#E46962;color:black">#E46962</span>
neutral         | <span style="background-color:#938F96;color:black">#938F96</span>
neutral variant | <span style="background-color:#938F99;color:black">#938F99</span>

### Shape

Shape represents how much the surface border is rounded.
See: [shape.ts](src/material-design/shape.ts).

### State

State represents the layer opacity above the surface when the surface is
hovered, pressed, focused or dragged. If the surface is disabled, the state
represents the surface'a opacity. See: [state.ts](src/material-design/state.ts).

### Typography

The typography specifies the text properties for each variant and size.
See: [typography.ts](src/material-design/typography.ts).

### Colors

The colors tokens used in Material Design. Some tokens are added to
calculate the opacity or to improve usability (like the elevation tokens).
See: [colors-light.ts](src/material-design/colors-light.ts),
[colors-dark.ts](src/material-design/colors-dark.ts) and
[colors-type.ts](src/material-design/colors-type.ts).
