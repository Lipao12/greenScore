import { Button } from "@/components/button";
import { ColorCard } from "@/components/create-task/color-select";
import { IconCard } from "@/components/create-task/icon-select";
import { saveHabit } from "@/server/storage";
import { useTasks } from "@/server/task-maneger";
import { colors } from "@/styles/colors";
import { Task } from "@/types/types";
import {
  IconAdjustmentsPlus,
  IconArrowLeft,
  IconBike,
  IconBulb,
  IconDroplet,
  IconTrash,
} from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const colors_: any = {
  blue: colors.blue,
  green: colors.green,
  yellow: colors.yellow,
  purple: colors.purple,
  orange: colors.orange,
  teal: colors.teal,
  pink: colors.pink,
  brown: colors.brown,
  cyan: colors.cyan,
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
  const { createTask } = useTasks();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [maxProgress, setMaxProgress] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue"); // Cor padrão
  const [selectedIcon, setSelectedIcon] = useState(""); // Ícone padrão
  const [isDaily, setIsDaily] = useState(false);
  const [dailyFrequency, setDailyFrequency] = useState(1);

  const handleBack = () => {
    router.back();
  };

  const handleSaveTask = () => {
    if (!taskName || selectedIcon === "" || selectedColor === "") {
      Alert.alert("Erro ao criar Task", "Faltando selecionar variáveis", [
        {
          text: "Voltar",
          style: "cancel",
        },
      ]);
      return;
    }
    const selectedIconComponent = icons.find(
      (icon) => icon.value === selectedIcon
    )?.IconComponent;
    if (!selectedIconComponent) {
      Alert.alert("Erro", "Ícone não encontrado");
      return;
    }

    const newTask: Task = {
      id: Date.now(), // Gera um ID único
      name: taskName,
      description: taskDescription,
      color: colors_[selectedColor], // Cor dinâmica
      progress: 0, // Inicialmente, o progresso é 0
      maxProgress: isDaily ? dailyFrequency : 41,
      icon: selectedIconComponent,
      isDaily: isDaily,
      doneToday: false,
    };

    createTask(newTask);
    saveHabit(newTask);
    setTaskName("");
    setSelectedColor("blue");
    setSelectedIcon("");

    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[100] }}>
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
            onPress={() => router.push("/create_task/predefined-task")}
            style={{
              width: "60%",
              height: 50,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Button.Icon icon={IconAdjustmentsPlus} />
            <Button.Title style={{ fontSize: 12 }}>
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

          {/* Input para a descrição da tarefa */}
          <Text style={{ fontSize: 18, marginBottom: 3 }}>Descrição</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={taskDescription}
            onChangeText={setTaskDescription}
          />

          {/* Definir se será feita todos os dias */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>
              Será todos os dias?
            </Text>
            <Switch
              value={isDaily}
              onValueChange={setIsDaily}
              trackColor={{ false: "#ddd", true: colors_[selectedColor].dark }}
              thumbColor={isDaily ? colors_[selectedColor].light : "#f4f3f4"}
            />
          </View>

          {/** Selecionar a frequência diária */}
          {isDaily && (
            <View
              style={{
                marginVertical: 20,
                alignItems: "stretch",
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Frequência Diária
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onPress={
                    () => setDailyFrequency((prev) => Math.max(prev - 1, 1)) // Evita valores negativos
                  }
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: colors.green.base,
                    marginRight: 10,
                  }}
                >
                  <Button.Title style={{ fontSize: 24, color: "#fff" }}>
                    -
                  </Button.Title>
                </Button>
                <TextInput
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    borderWidth: 2,
                    borderColor: colors.green.base,
                    borderRadius: 8,
                    paddingHorizontal: 15,
                    width: 100,
                    height: 50,
                    backgroundColor: "#fff",
                  }}
                  keyboardType="numeric"
                  value={String(dailyFrequency)}
                  onChangeText={
                    (text) => setDailyFrequency(Math.max(Number(text) || 1, 1)) // Evita valores negativos
                  }
                />
                <Button
                  onPress={() => setDailyFrequency((prev) => prev + 1)}
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: colors.green.base,
                    marginLeft: 10,
                  }}
                >
                  <Button.Title style={{ fontSize: 24, color: "#fff" }}>
                    +
                  </Button.Title>
                </Button>
              </View>
            </View>
          )}

          {/* Seleciona ICONE */}
          <Text style={{ fontSize: 18, marginBottom: 3 }}>Ícone</Text>
          <View style={{ gap: 10, marginBottom: 20 }}>
            {icons.map(({ label, value, IconComponent }) => (
              <IconCard
                key={value}
                style_button={selectedIcon === value}
                style={{
                  backgroundColor: colors_[selectedColor].light,
                  color: colors_[selectedColor].light,
                }}
                name={label}
                icon={IconComponent}
                onPress={() => setSelectedIcon(value)}
              />
            ))}
          </View>

          {/* Seleciona COR */}
          <Text style={{ fontSize: 18, marginBottom: 3 }}>Cor</Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 10,
                marginHorizontal: 15,
                marginBottom: 20,
                maxWidth: 300,
              }}
            >
              {Object.entries(colors_).map(([key, color]) => (
                <ColorCard
                  key={key}
                  style_button={{
                    backgroundColor: color.light,
                    borderColor: selectedColor === key ? "#000" : "transparent",
                  }}
                  onPress={() => setSelectedColor(key)}
                />
              ))}
            </View>
          </View>

          {/* Botão para salvar a tarefa */}
          <View style={{ marginTop: 22 }}>
            <Button onPress={handleSaveTask}>
              <Button.Title>Salvar Tarefa</Button.Title>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
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
