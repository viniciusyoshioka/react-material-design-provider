import { useMaterialTheme } from "react-material-design-provider"
import { View, ViewProps, ViewStyle } from "react-native"
import { FAB } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Card } from "./Card"


export interface ScreenProps extends ViewProps {
    toggleDarkTheme: () => void
}


export function Screen(props: ScreenProps) {


    const safeAreaInsets = useSafeAreaInsets()
    const { colors } = useMaterialTheme()


    const screenStyle: ViewStyle = {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    }


    return (
        <View {...props} style={[screenStyle, props.style]}>
            <Card />

            <FAB
                icon={"brightness-6"}
                onPress={props.toggleDarkTheme}
                style={{
                    position: "absolute",
                    right: safeAreaInsets.right + 16,
                    bottom: safeAreaInsets.bottom + 16,
                }}
            />
        </View>
    )
}
