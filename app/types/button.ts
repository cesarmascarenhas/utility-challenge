import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native"

export type ButtonProps = {
    label: string
    color: string
    style?: StyleProp<ViewStyle>
    onPress?: Function
}