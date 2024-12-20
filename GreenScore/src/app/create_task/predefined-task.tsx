import { Button } from "@/components/button";
import { predefinedTasks } from "@/infos/predefined-task";
import { useTasks } from "@/server/task-maneger";
import { colors } from "@/styles/colors";
import { Task } from "@/types/types";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PredefinedTasks() {
  const router = useRouter();
  const { createTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleAddTask = (task: Task) => {
    setSelectedTask(task);
    Alert.alert(
      "Tá dentro?",
      `Você quer mesmo adicionar "${task.name}" às suas tarefas? 🤔`,
      [
        {
          text: "Na real, não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Bora! 🚀",
          onPress: () => handleCreateTask(task),
        },
      ]
    );
  };
  const handleCreateTask = (task: Task) => {
    if (!task || !task.name) {
      Alert.alert("Erro", "Por favor, selecione uma tarefa válida.");
      return;
    }

    createTask(task);
    console.log("Tarefa adicionada:", task);
    router.replace("/home");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Button style={{ width: 40, height: 40 }} onPress={handleBack}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
      <Text style={styles.title}>Tarefas Pré-definidas</Text>
      <FlatList // mais interessante que utilzar o map????
        data={predefinedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.taskCard, { backgroundColor: item.color.light }]}
            onPress={() => handleAddTask(item)}
          >
            <item.icon size={24} color="white" />
            <Text style={styles.taskName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.gray[100], padding: 16 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskName: {
    marginLeft: 16,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
