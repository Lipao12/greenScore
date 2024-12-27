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

export const updateHabitDoneToday = (habitId: number, doneToday: boolean): void => {
    const habits = getData<Task[]>('habits') || [];
    const habitIndex = habits.findIndex(habit => habit.id === habitId);
    if (habitIndex === -1) {
      console.warn(`Hábito com ID ${habitId} não encontrado.`);
      return;
    }
    habits[habitIndex] = { ...habits[habitIndex], doneToday };
    saveData('habits', habits);
  };

// Função para resetar progresso diário
export const resetDailyProgress = (): void => {
    const lastCheckDate = getData<string>('lastCheckDate');
    const currentDate = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
  
    if (lastCheckDate === currentDate) {
      // Já foi atualizado hoje, não precisa fazer nada
      return;
    }

    registerSuccessfulDay();
  
    // Atualiza todos os hábitos
    const habits = getData<Task[]>('habits') || [];
    const updatedHabits = habits.map(habit => ({
      ...habit,
      doneToday: false, // Reinicia doneToday para todos os hábitos
      progress: habit.isDaily ? 0 : habit.progress, // Reinicia progresso apenas se for diário
    }));
  
    // Salva os hábitos e atualiza a data da última verificação
    saveData('habits', updatedHabits);
    saveData('lastCheckDate', currentDate);
  };
  
  
  export const registerSuccessfulDay = (): void => {
    const habits = getData<Task[]>('habits') || [];
    
    // Verifica se todas as tarefas diárias foram concluídas
    const allDailyCompleted = habits.every(habit => habit.isDaily && habit.doneToday);
  
    if (allDailyCompleted) {
      const successfulDays = getData<string[]>('successfulDays') || [];
      const currentDate = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
  
      // Adiciona a data atual, evitando duplicatas
      if (!successfulDays.includes(currentDate)) {
        successfulDays.push(currentDate);
        saveData('successfulDays', successfulDays);
        console.log(`Dia ${currentDate} registrado como bem-sucedido!`);
      } else {
        console.log(`Dia ${currentDate} já registrado como bem-sucedido.`);
      }
    } else {
      console.log("Nem todas as tarefas diárias foram concluídas hoje.");
    }
  };

  export const getConsecutiveSuccessfulDaysCount = (): number => {
    const successfulDays = getData<string[]>('successfulDays') || [];
    
    if (successfulDays.length === 0) {
      return 0;
    }
  
    let consecutiveCount = 1;
    let previousDate = new Date(successfulDays[0]);
  
    for (let i = 1; i < successfulDays.length; i++) {
      const currentDate = new Date(successfulDays[i]);
      
      // Verifica se o dia atual é consecutivo
      if ((currentDate.getTime() - previousDate.getTime()) === (24 * 60 * 60 * 1000)) {
        consecutiveCount++;
      } else {
        break; // Não é consecutivo, encerra a contagem
      }
      
      previousDate = currentDate;
    }
  
    return consecutiveCount;
  };
  