import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        marginHorizontal: 15,
        alignItems: "center",
        borderRadius: 47,
        
      },
      selectButton:{
        borderWidth: 1,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      iconContainer: {
        backgroundColor: colors.gray[100],
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 47,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        },
        text: {
          fontFamily: fontFamily.semiBold, 
          fontSize: 25
        },
})