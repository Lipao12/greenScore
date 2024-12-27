import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 16,
        paddingBottom: 16
    },
    title: {
        fontSize: 22,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },
    cardContainer:{
        flexDirection: "row",
        justifyContent:"flex-start",
        flexWrap: "wrap",
    }
})