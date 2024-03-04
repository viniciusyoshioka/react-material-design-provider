import color from "color"
import { useMaterialTheme } from "react-material-design-provider"
import { Pressable, View, ViewStyle } from "react-native"
import { Text } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export interface CardProps {}


export function Card() {


    const { colors, shape, state } = useMaterialTheme()


    const rippleColor = color(colors.primary)
        .alpha(state.press)
        .rgb()
        .toString()

    const cardWrapper: ViewStyle = {
        borderRadius: shape.medium,
        overflow: "hidden",
    }

    const containerStyle: ViewStyle = {
        minWidth: 200,
        maxWidth: 250,
        minHeight: 100,
        padding: 16,
        gap: 8,
        borderRadius: shape.medium,
        backgroundColor: colors.surfaceContainerHighest,
    }

    const userContainerStyle: ViewStyle = {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
    }

    const titleContainerStyle: ViewStyle = {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    }

    const contentContainerStyle: ViewStyle = {
        gap: 4,
    }


    return (
        <View style={cardWrapper}>
            <Pressable
                style={containerStyle}
                android_ripple={{ color: rippleColor }}
            >
                <View style={userContainerStyle}>
                    <Icon
                        name={"account-circle-outline"}
                        size={40}
                        color={colors.onSurfaceVariant}
                    />

                    <View style={titleContainerStyle}>
                        <Text
                            variant={"titleSmall"}
                            style={{ color: colors.onSurface }}
                        >
                            Title
                        </Text>

                        <Text
                            variant={"titleSmall"}
                            style={{ color: colors.onSurfaceVariant }}
                        >
                            Subtitle
                        </Text>
                    </View>
                </View>

                <View style={contentContainerStyle}>
                    <Text
                        variant={"titleLarge"}
                        style={{ color: colors.onSurface }}
                    >
                        Another title
                    </Text>

                    <Text
                        variant={"bodyMedium"}
                        style={{ color: colors.onSurface }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia natus ad sint ut modi sequi quis deserunt animi
                        voluptatibus sed et tempora dicta, provident vitae
                        ratione vero, assumenda asperiores commodi.
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
