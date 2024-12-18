import { Button } from "@/components/button";
import { ColorCard } from "@/components/create-task/color-select";
import { IconCard } from "@/components/create-task/icon-select";
import { colors } from "@/styles/colors";
import {
  IconAdjustmentsPlus,
  IconArrowLeft,
  IconBike,
  IconBulb,
  IconDroplet,
  IconTrash,
} from "@tabler/icons-react-native"; // Importando ícones
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const colors_: any = {
  blue: colors.blue.light,
  green: colors.green.light,
  yellow: colors.yellow.light,
  purple: colors.purple.light,
  orange: colors.orange.light,
  teal: colors.teal.light,
  pink: colors.pink.light,
  brown: colors.brown.light,
  cyan: colors.cyan.light,
};

const icons = [
  { label: "Água", value: "water", IconComponent: IconDroplet },
  { label: "Transporte", value: "bike", IconComponent: IconBike },
  { label: "Resíduos", value: "school", IconComponent: IconTrash },
  { label: "Energia", value: "energy", IconComponent: IconBulb },
];

const { width } = Dimensions.get("window");

const CreateTaskPage = () => {
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue"); // Cor padrão
  const [selectedIcon, setSelectedIcon] = useState(""); // Ícone padrão
  const fontSize = width <= 365 ? 12 : 16;

  const handleBack = () => {
    router.back();
  };

  const handleSaveTask = () => {
    if (selectedIcon === "" || selectedColor === "") {
      Alert.alert("Erro ao criar Task", "Faltando selecionar variáveis", [
        {
          text: "Voltar",
          style: "cancel",
        },
      ]);
      return;
    }
    console.log("Tarefa salva:", taskName, selectedColor, selectedIcon);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={[
          styles.header,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <Button style={{ width: 40, height: 40 }} onPress={handleBack}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>

        {/** botao para tarefa pre definida */}
        <Button
          onPress={() => {}}
          style={{
            width: "60%",
            height: 50,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Button.Icon icon={IconAdjustmentsPlus} />
          <Button.Title style={{ fontSize }}>
            Adicionar tarefa Pré definida
          </Button.Title>
        </Button>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Criar Tarefa</Text>

        {/* Input para o nome da tarefa */}
        <Text style={{ fontSize: 18, marginBottom: 3 }}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={taskName}
          onChangeText={setTaskName}
        />

        {/* Seleciona ICONE */}
        <Text style={{ fontSize: 18, marginBottom: 3 }}>Ícone</Text>
        <View style={{ gap: 10, marginBottom: 20 }}>
          {icons.map(({ label, value, IconComponent }) => (
            <IconCard
              key={value}
              style_button={selectedIcon === value}
              style={{
                backgroundColor: colors_[selectedColor],
                color: colors_[selectedColor],
              }}
              name={label}
              icon={
                IconComponent as React.ComponentType<{
                  size?: number;
                }>
              }
              onPress={() => setSelectedIcon(value)}
            />
          ))}
        </View>

        {/* Seleciona COR */}
        <Text style={{ fontSize: 18, marginBottom: 3 }}>Cor</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 10,
            marginHorizontal: 15,
            marginBottom: 20,
          }}
        >
          {Object.entries(colors_).map(([key, color]) => (
            <ColorCard
              key={key}
              style_button={{
                backgroundColor: color,
                borderColor: selectedColor === key ? "#000" : "transparent",
              }}
              onPress={() => setSelectedColor(key)}
            />
          ))}
        </View>

        {/* Botão para salvar a tarefa */}
        <View style={{ marginTop: 22 }}>
          <Button onPress={handleSaveTask}>
            <Button.Title>Salvar Tarefa</Button.Title>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.gray[100],
  },
  header: {
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
  },
  iconOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconButton: {
    alignItems: "center",
  },
  selectedIconButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
});

export default CreateTaskPage;
