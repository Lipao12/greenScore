import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16, 
    backgroundColor: colors.gray[100], 
    borderRadius: 12, // Bordas arredondadas
    shadowColor: "#000", // Sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.gray[200],
    marginBottom: 16, // Distância entre cards
    minHeight: 100, // Altura mínima para uniformidade
    alignSelf: "stretch", // Expande para ocupar largura disponível
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
    maxWidth: "80%",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
    flexWrap: "wrap",
  },
});
