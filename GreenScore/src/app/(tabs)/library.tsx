import { HeaderHome } from "@/components/header-home";
import { LibraryCard } from "@/components/library/article-card";
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
  {
    title: "A educação é o caminho para o futuro sustentável",
    subtitle:
      "Reflexões sobre a importância de incorporar a educação ambiental para promover um desenvolvimento sustentável",
    url: "https://www.scielo.br/j/cebape/a/hvbYDBH5vQFD6zfjC9zHc5g/?format=pdf",
  },
  {
    title: "Vida sustentável: reflexões necessárias",
    subtitle:
      "Análise do conceito de sustentabilidade com foco nas responsabilidades das instituições de ensino e sua relação com os Objetivos de Desenvolvimento Sustentável (ODS)",
    url: "https://periodicos.ufpel.edu.br/index.php/expressaextensao/article/view/26891",
  },
  {
    title: "ONU alerta sobre retrocessos nos ODS em meio às crises globais",
    subtitle:
      "Relatório aponta desafios para alcançar as metas da Agenda 2030 devido a crises climáticas, econômicas e sociais.",
    url: "https://repositorio.ufmg.br/bitstream/1843/30920/1/MONOGRAFIA%20BIANCA%20ENCADERNA%C3%87%C3%83O.pdf",
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
