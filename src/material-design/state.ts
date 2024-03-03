
export type StateKey = "disabled" | "hover" | "focus" | "press" | "drag"

export type State = {
    [key in StateKey]: number
}


export const state: State = {
    disabled: 0.38,
    hover: 0.08,
    focus: 0.12,
    press: 0.12,
    drag: 0.16,
}
