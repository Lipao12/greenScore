import { Task } from '@/types/types';
import { MMKV } from 'react-native-mmkv';

// Inicializando o MMKV
export const storage = new MMKV();

// Funções utilitárias para salvar, buscar e deletar dados
export const saveData = (key: string, value: unknown): void => {
    const data = typeof value === 'object' && value !== null ? JSON.stringify(value) : value;
    storage.set(key, data as string);
  };

export const getData = <T>(key: string): T | null => {
  const data = storage.getString(key);
  if (!data) return null;
  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Erro ao parsear o dado para a chave ${key}:`, error);
    return data as T;
  }
};

export const deleteData = (key: string): void => {
  storage.delete(key);
};

// Funções específicas para hábitos
export const saveHabit = (habit: Task): void => {
  const habits = getData<Task[]>('habits') || [];
  if (habits.some(h => h.id === habit.id)) {
    console.warn(`Hábito com ID ${habit.id} já existe.`);
    return;
  }
  habits.push(habit);
  saveData('habits', habits);
};

export const getHabits = (): Task[] => {
  return getData<Task[]>('habits') || [];
};

export const updateHabitProgress = (habitId: number, progress: number): void => {
  const habits = getData<Task[]>('habits') || [];
  const habitIndex = habits.findIndex(habit => habit.id === habitId);
  if (habitIndex === -1) {
    console.warn(`Hábito com ID ${habitId} não encontrado.`);
    return;
  }
  habits[habitIndex] = { ...habits[habitIndex], progress };
  saveData('habits', habits);
};

