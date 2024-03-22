
export type TypographyVariant = "display" | "headline" | "title"
  | "body" | "label"

export type TypographySize = "large" | "medium" | "small"

export type TypographyWeight = "normal" | "bold" | "100" | "200" | "300"
  | "400" | "500" | "600" | "700" | "800" | "900"

export type TypographyStyle = {
  fontSize: number
  fontWeight: TypographyWeight
  lineHeight: number
  letterSpacing: number
}

export type Typography = {
  [variant in TypographyVariant]: {
    [size in TypographySize]: TypographyStyle
  }
}


export const typography: Typography = {
  display: {
    large: {
      fontSize: 57,
      fontWeight: "normal",
      lineHeight: 64,
      letterSpacing: 0,
    },
    medium: {
      fontSize: 45,
      fontWeight: "normal",
      lineHeight: 52,
      letterSpacing: 0,
    },
    small: {
      fontSize: 36,
      fontWeight: "normal",
      lineHeight: 44,
      letterSpacing: 0,
    },
  },
  headline: {
    large: {
      fontSize: 32,
      fontWeight: "normal",
      lineHeight: 40,
      letterSpacing: 0,
    },
    medium: {
      fontSize: 28,
      fontWeight: "normal",
      lineHeight: 36,
      letterSpacing: 0,
    },
    small: {
      fontSize: 24,
      fontWeight: "normal",
      lineHeight: 32,
      letterSpacing: 0,
    },
  },
  title: {
    large: {
      fontSize: 22,
      fontWeight: "normal",
      lineHeight: 28,
      letterSpacing: 0,
    },
    medium: {
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    small: {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
      letterSpacing: 0.1,
    },
  },
  body: {
    large: {
      fontSize: 16,
      fontWeight: "normal",
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    medium: {
      fontSize: 14,
      fontWeight: "normal",
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    small: {
      fontSize: 12,
      fontWeight: "normal",
      lineHeight: 16,
      letterSpacing: 0.4,
    },
  },
  label: {
    large: {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    medium: {
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    small: {
      fontSize: 11,
      fontWeight: "500",
      lineHeight: 16,
      letterSpacing: 0.5,
    },
  },
}
