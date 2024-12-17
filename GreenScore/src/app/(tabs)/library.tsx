import { Divider } from "@/components/divider";
import { HeaderHome } from "@/components/header-home";
import { LibraryCard } from "@/components/library/article-card";
import { colors } from "@/styles/colors";
import { DancingFont, fontFamily } from "@/styles/font-family";
import { IconBulb } from "@tabler/icons-react-native";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Linking,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";

const articles = [
  {
    title: "Relatório de Desenvolvimento Sustentável 2024",
    subtitle: "Relatório anual sobre progresso nos ODS",
    article: false,
    url: "https://dashboards.sdgindex.org",
  },
  {
    title: "Sustainability at a Turning Point",
    subtitle: "Análise sobre mudanças climáticas e metas ODS",
    article: false,
    url: "https://earth.columbia.edu/articles/sustainability-turning-point",
  },
  {
    title: "A educação é o caminho para o futuro sustentável",
    subtitle:
      "Reflexões sobre a importância de incorporar a educação ambiental para promover um desenvolvimento sustentável",
    article: true,
    url: "https://www.scielo.br/j/cebape/a/hvbYDBH5vQFD6zfjC9zHc5g/?format=pdf",
  },
  {
    title: "Vida sustentável: reflexões necessárias",
    subtitle:
      "Análise do conceito de sustentabilidade com foco nas responsabilidades das instituições de ensino e sua relação com os Objetivos de Desenvolvimento Sustentável (ODS)",
    article: false,
    url: "https://periodicos.ufpel.edu.br/index.php/expressaextensao/article/view/26891",
  },
  {
    title: "ONU alerta sobre retrocessos nos ODS em meio às crises globais",
    subtitle:
      "Relatório aponta desafios para alcançar as metas da Agenda 2030 devido a crises climáticas, econômicas e sociais.",
    article: true,
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

  const materias = articles.filter((item) => !item.article);
  const artigos = articles.filter((item) => item.article);

  const opacityAnim = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1, // Opacidade máxima
          duration: 1000, // Tempo para "acender"
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.6,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

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
      {/** HEADER DA PÁGINA */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View style={{ opacity: opacityAnim }}>
          <IconBulb size={70} color={colors.yellow.light} />
        </Animated.View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontFamily: DancingFont.semibold,
            marginBottom: 10,
            color: colors.gray[600],
          }}
        >
          Plante hoje ideias que florescerão em um futuro sustentável
        </Text>
      </View>
      <HeaderHome title={"Biblioteca"} />

      <Text
        style={{
          fontSize: 15,
          fontFamily: fontFamily.regular,
          marginBottom: 20,
          color: colors.gray[600],
          paddingHorizontal: 10,
        }}
      >
        Cultivar uma mente sustentável é como plantar sementes: o cuidado diário
        cria raízes fortes e frutos duradouros.
      </Text>

      {/* Seção de Matérias */}
      {materias.length > 0 && (
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: fontFamily.semiBold,
                marginBottom: 10,
                color: colors.gray[600],
              }}
            >
              Matérias em Destaque
            </Text>
            <Divider style={{ marginLeft: 8, marginRight: 0, flexGrow: 1 }} />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 10,
            }}
            contentContainerStyle={{
              gap: 16,
            }}
          >
            {materias.map((materia, index) => (
              <LibraryCard
                key={index}
                title={materia.title}
                subtitle={materia.subtitle}
                onPress={() => openUrl(materia.url)}
              />
            ))}
          </ScrollView>
        </View>
      )}

      {/* Seção de Artigos */}
      {artigos.length > 0 && (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: fontFamily.semiBold,
                marginBottom: 10,
                color: colors.gray[600],
              }}
            >
              Artigos Selecionados
            </Text>
            <Divider style={{ marginLeft: 8, marginRight: 0, flexGrow: 1 }} />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 10,
            }}
            contentContainerStyle={{
              gap: 16,
            }}
          >
            {artigos.map((materia, index) => (
              <LibraryCard
                key={index}
                title={materia.title}
                subtitle={materia.subtitle}
                onPress={() => openUrl(materia.url)}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
}
