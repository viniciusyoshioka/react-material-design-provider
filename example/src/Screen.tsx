import { useMaterialTheme } from "react-material-design-provider"
import { View, ViewProps, ViewStyle } from "react-native"


export interface ScreenProps extends ViewProps {}


export function Screen(props: ScreenProps) {


    const { colors } = useMaterialTheme()


    const screenStyle: ViewStyle = {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    }


    return (
        <View {...props} style={[screenStyle, props.style]}>
            {props.children}
        </View>
    )
}
