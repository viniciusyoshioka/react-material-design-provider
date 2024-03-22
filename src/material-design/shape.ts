
export type ShapeKey = "none" | "extraSmall" | "small" | "medium"
  | "large" | "extraLarge" | "full"

export type Shape = {
  [key in ShapeKey]: number
}


export const shape: Shape = {
  none: 0,
  extraSmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 28,
  full: 1_000_000_000,
}
