import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import {
  IconArrowLeft,
  IconBriefcase,
  IconHome,
  IconSchool,
} from "@tabler/icons-react-native"; // Importando ícones
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const colors_ = {
  green: colors.green.light,
  blue: colors.blue.light,
  yellow: colors.yellow.light,
  purple: colors.purple.light,
  orange: colors.orange.light,
};

const icons = [
  { label: "Casa", value: "home", IconComponent: IconHome },
  { label: "Trabalho", value: "briefcase", IconComponent: IconBriefcase },
  { label: "Escola", value: "school", IconComponent: IconSchool },
];

const CreateTaskPage = () => {
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue"); // Cor padrão
  const [selectedIcon, setSelectedIcon] = useState("home"); // Ícone padrão

  const handleBack = () => {
    router.back();
  };

  const handleSaveTask = () => {
    console.log("Tarefa salva:", taskName, selectedColor, selectedIcon);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Criar Tarefa</Text>

        {/* Input para o nome da tarefa */}
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da tarefa"
          value={taskName}
          onChangeText={setTaskName}
        />

        {/* Seletor de cor */}
        <Text style={styles.label}>Selecionar Cor:</Text>
        <View style={styles.colorOptions}>
          {Object.entries(colors_).map(([key, color]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.colorButton,
                {
                  backgroundColor: color,
                  borderColor: selectedColor === key ? "#000" : "transparent",
                },
              ]}
              onPress={() => setSelectedColor(key)}
            />
          ))}
        </View>

        {/* Seletor de ícone */}
        <Text style={styles.label}>Selecionar Ícone:</Text>
        <View style={styles.iconOptions}>
          {icons.map(({ label, value, IconComponent }) => (
            <TouchableOpacity
              key={value}
              style={[
                styles.iconButton,
                selectedIcon === value && styles.selectedIconButton,
              ]}
              onPress={() => setSelectedIcon(value)}
            >
              <IconComponent
                size={40}
                color={selectedIcon === value ? "#000" : "#aaa"}
              />
              <Text>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botão para salvar a tarefa */}
        <Button onPress={handleSaveTask}>
          <Button.Title>Salvar Tarefa</Button.Title>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
