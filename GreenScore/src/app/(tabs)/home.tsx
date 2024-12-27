import { HeaderHome } from "@/components/header-home";
import { InportantInfo } from "@/components/home_2/important_info";
import { ShowGoals } from "@/components/home_2/show_goals";
import { getHabits } from "@/server/storage";
import { colors } from "@/styles/colors";
import { Task } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  //const { tasks } = useTasks();
  const [tasks, setTasks] = useState<Task[]>();
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);
  const [nonDailyTasks, setNonDailyTasks] = useState<Task[]>([]);
  const [countDailyTask, setCountDailyTask] = useState({ done: 0, all: 0 });

  /*const dailyTasks = tasks.filter((task) => task.isDaily);
  const nonDailyTasks = tasks.filter((task) => !task.isDaily);
  const hasNoTasks = dailyTasks.length === 0 && nonDailyTasks.length === 0;

  const totalMaxProgress = dailyTasks.reduce(
    (sum, task) => sum + task.maxProgress,
    0
  );

  const [countDailyTask, setCountDailyTask] = useState({
    done: 0,
    all: totalMaxProgress,
  });*/

  /*useEffect(() => {
    const fetchTask = (): void => {
      const data = getHabits();
      setTasks(data);
    };
    // Filtra as tarefas para categorias
    const daily = tasks ? tasks.filter((task) => task.isDaily) : [];
    const nonDaily = tasks ? tasks.filter((task) => !task.isDaily) : [];

    // Calcula o progresso total das tarefas diárias
    const totalMaxProgress = daily
      ? daily.reduce((sum, task) => sum + task.maxProgress, 0)
      : 0;

    setDailyTasks(daily);
    setNonDailyTasks(nonDaily);
    setCountDailyTask({ done: 0, all: totalMaxProgress });
  }, [tasks]);*/

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getHabits(); // Certifique-se que getHabits retorna a Promise
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      setDailyTasks([]);
      setNonDailyTasks([]);
      setCountDailyTask({ done: 0, all: 0 });
      return;
    }

    const daily = tasks.filter((task) => task.isDaily);
    const nonDaily = tasks.filter((task) => !task.isDaily);

    const totalMaxProgress = daily.reduce(
      (sum, task) => sum + task.maxProgress,
      0
    );

    setDailyTasks(daily);
    setNonDailyTasks(nonDaily);
    setCountDailyTask({ done: 0, all: totalMaxProgress });

    console.log("Daily: ", daily);
    console.log("totalMaxProgress: ", totalMaxProgress);
    console.log("Tasks: ", tasks);

    //storage.clearAll();
  }, [tasks]);

  /*useEffect(() => {
    if (!tasks || tasks.length === 0) {
      setDailyTasks([]);
      setNonDailyTasks([]);
      setCountDailyTask({ done: 0, all: 0 });
      return;
    }

    // Filtra as tarefas para categorias
    const daily = tasks.filter((task) => task.isDaily);
    const nonDaily = tasks.filter((task) => !task.isDaily);

    // Calcula o progresso total das tarefas diárias
    const totalMaxProgress = daily.reduce(
      (sum, task) => sum + task.maxProgress,
      0
    );

    setDailyTasks(daily);
    setNonDailyTasks(nonDaily);
    setCountDailyTask({ done: 0, all: totalMaxProgress });
  }, [tasks]);*/

  const hasNoTasks = dailyTasks.length === 0 && nonDailyTasks.length === 0;
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[100] }}>
      <ScrollView
        contentContainerStyle={{
          //paddingHorizontal: 16,
          paddingBottom: 16,
          //paddingTop: 40,
          backgroundColor: colors.gray[100],
        }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderHome
          title={"Bem vindo de volta!"}
          subtitle={"Olá, Filipe Nunes"}
          styleContainer={{ backgroundColor: colors.project.secundary }}
          styleText={{ color: colors.gray[200] }}
        />
        <InportantInfo progress={countDailyTask} />
        <View style={{ paddingHorizontal: 16 }}>
          {dailyTasks.length > 0 && (
            <ShowGoals
              title={"CheckPoint Diários"}
              tasks={dailyTasks}
              setCountDailyTask={setCountDailyTask}
            />
          )}
          {nonDailyTasks.length > 0 && (
            <ShowGoals title={"Coisas para Resolver"} tasks={nonDailyTasks} />
          )}
          {hasNoTasks && (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Ionicons name="sad-outline" size={40} color={colors.gray[400]} />
              <Text
                style={{
                  color: colors.gray[400],
                  marginTop: 8,
                  textAlign: "center",
                }}
              >
                Parece que você ainda não tem tarefas. Vamos começar? 😊
              </Text>
            </View>
          )}
        </View>
        {/*<FootprintDashboard />*/}
        {/*<FastInfos />*/}
        {/*<MyGoalsComp />*/}
        {/*<DailyTips />*/}
      </ScrollView>
      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          router.push("/create_task/create-task");
        }}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    backgroundColor: colors.green.base,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
