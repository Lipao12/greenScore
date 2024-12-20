import { Task } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface TasksContextType {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
}

// Criar o contexto
export const TasksContext = createContext<TasksContextType | undefined>(
  undefined
);

// Provedor do contexto
export const GoalsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para criar uma nova meta
  const createTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Função para apagar uma meta
  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, id) => id !== taskId));
  };

  // Função para editar uma meta
  const editTask = (taskId: number, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, id) => (id === taskId ? updatedTask : task))
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks deve ser usado dentro de um TasksProvider");
  }
  return context;
};
