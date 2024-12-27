import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { HeaderHome } from "@/components/header-home";
import { GoalsCard } from "@/components/my-goals/goals-card";
import { useTasks } from "@/server/task-maneger";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { IconBike } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, ScrollView, View } from "react-native";

export default function Goals() {
  const router = useRouter();
  const { tasks, deleteTask } = useTasks();

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
      {tasks.map((item) => {
        return (
          <GoalsCard
            key={item.id}
            title={item.name}
            subtitle={item.description}
            color={item.color}
            icon={item.icon}
            onDelete={() => {
              Alert.alert(
                "⚠️⚠️ Perigo",
                `Você clicou para deletar "${item.name}", está certo isso? 🤔`,
                [
                  {
                    text: "Na real, não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Pode deletar!",
                    onPress: () => {
                      try {
                        deleteTask(item.id);
                      } catch (err) {
                        console.log(err);
                      }
                    },
                  },
                ]
              );
            }}
          />
        );
      })}
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
            router.push("/create_task/create-task");
          }}
        >
          <Button.Title
            style={{ fontSize: 14, fontFamily: fontFamily.regular }}
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
        icon={IconBike}
        onDelete={() => {}}
      />
      <GoalsCard
        title="Use transporte público ou bicicleta 3 vezes por semana."
        subtitle="Ao término será economizado 30kg de CO₂"
        icon={IconBike}
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
