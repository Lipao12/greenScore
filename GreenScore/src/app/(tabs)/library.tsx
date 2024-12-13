import { LibraryCard } from "@/components/article-card";
import { HeaderHome } from "@/components/header-home";
import { colors } from "@/styles/colors";
import { Linking, ScrollView, ToastAndroid } from "react-native";

const articles = [
  {
    title: "Relatório de Desenvolvimento Sustentável 2024",
    subtitle: "Relatório anual sobre progresso nos ODS",
    url: "https://dashboards.sdgindex.org",
  },
  {
    title: "Sustainability at a Turning Point",
    subtitle: "Análise sobre mudanças climáticas e metas ODS",
    url: "https://earth.columbia.edu/articles/sustainability-turning-point",
  },
];

export default function Library() {
  const openUrl = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 40,
        backgroundColor: colors.gray[100],
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderHome title={"Livraria e Artigos"} />

      {articles.map((article, index) => (
        <LibraryCard
          key={index}
          title={article.title}
          subtitle={article.subtitle}
          onPress={() => openUrl(article.url)}
        />
      ))}
    </ScrollView>
  );
}
