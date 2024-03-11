
export type ElevationKey = "level0" | "level1" | "level2" | "level3"
    | "level4" | "level5"

export type Elevation = {
    [key in ElevationKey]: number
}


export const elevation: Elevation = {
    level0: 0,
    level1: 1,
    level2: 3,
    level3: 6,
    level4: 8,
    level5: 12,
}
