import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { HeaderHome } from "@/components/header-home";
import { GoalsCard } from "@/components/my-goals/goals-card";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { IconBike } from "@tabler/icons-react-native";
import { ScrollView, View } from "react-native";

export default function Goals() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 40,
        backgroundColor: colors.gray[100],
      }}
    >
      {/* Parte definida para as metas que foram escolhidas */}
      <HeaderHome
        title="Minhas Metas Pessoais"
        subtitle="Transforme pequenas ações diárias em grandes mudanças. Cada meta alcançada é um passo para hábitos mais sustentáveis, melhorando sua vida e o planeta. Seja protagonista da mudança!"
      />
      <GoalsCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Ao término será economizado 30kg de CO₂"
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
        onDelete={() => {}}
      />
      <GoalsCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Ao término será economizado 30kg de CO₂"
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
        onDelete={() => {}}
      />
      <View
        style={{
          marginBottom: 16,
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <Button
          style={{ width: "50%", height: 50 }}
          onPress={() => {
            //router.navigate("/home");
          }}
        >
          <Button.Title
            style={{ fontSize: 10, fontFamily: fontFamily.regular }}
          >
            + Adicionar Tarefa
          </Button.Title>
        </Button>
      </View>

      <Divider />

      {/* Sobre a SDG*/}
      <HeaderHome
        title="Objetivos de Desenvolvimento Sustentável"
        subtitle="Os Objetivos de Desenvolvimento Sustentável (SDGs) são uma agenda global para criar um futuro melhor. Eles abordam desafios como pobreza, desigualdade, mudanças climáticas e educação de qualidade, promovendo bem-estar e sustentabilidade para todos."
      />
      <GoalsCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Ao término será economizado 30kg de CO₂"
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
        onDelete={() => {}}
      />
      <GoalsCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Ao término será economizado 30kg de CO₂"
        icon={
          IconBike as React.ComponentType<{
            width?: number;
            height?: number;
            color?: string;
          }>
        }
        onDelete={() => {}}
      />
      <Button
        onPress={() => {
          //router.navigate("/home");
        }}
      >
        <Button.Title>Saiba Mais</Button.Title>
      </Button>
    </ScrollView>
  );
}
