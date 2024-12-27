import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.gray[300],
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingVertical: 16,
        paddingHorizontal: 16,
        gap: 14,
    },
    iconContainer: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 9
    },
    text: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray[200]
    },
    value: {
        fontSize: 30,
        fontFamily: fontFamily.bold,
        color: colors.gray[200]
    },
})