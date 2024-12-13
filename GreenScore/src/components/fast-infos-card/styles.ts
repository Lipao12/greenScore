import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.gray[100],
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.gray[200],
    width: "45%", 
    height: 200,
    marginHorizontal: 8,
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
    maxWidth: "80%",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
    flexWrap: "wrap",
  },
  info_text: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
    lineHeight: 18,
    flexWrap: "wrap", 
    textAlign: "justify", 
    marginVertical: 4,
    paddingHorizontal: 6
  },
});
