import { fontFamily } from "@/styles/font-family";
import { colors } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"row",
        gap: 14,
        shadowColor: "#000",
        // Adicionando sombra para iOS:
        shadowOffset: {
            width: 0,
            height: 4, 
        },
        shadowOpacity: 0.2, 
        shadowRadius: 4.65, 
        // Adicionando elevação para Android:
        elevation: 6,
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[100]
    },
})