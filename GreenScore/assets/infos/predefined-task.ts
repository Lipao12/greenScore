import { colors } from "@/styles/colors";
import { IconBike, IconBulb, IconDroplet, IconTrash } from "@tabler/icons-react-native";

export const predefinedTasks = [
  {
    id: 1,
    name: "Reduzir consumo de água",
    icon: IconDroplet,
    color: colors.blue,
    progress: 0,
  },
  {
    id: 2,
    name: "Usar bicicleta",
    icon: IconBike,
    color: colors.green,
    progress: 0,
  },
  {
    id: 3,
    name: "Reciclar resíduos",
    icon: IconTrash,
    color: colors.orange,
    progress: 0,
  },
  {
    id: 4,
    name: "Economizar energia",
    icon: IconBulb,
    color: colors.yellow,
    progress: 0,
  },
]; 