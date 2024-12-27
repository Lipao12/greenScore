import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

export interface Color {
    soft: string,
    light: string,
    base: string,
    dark: string,
}

export interface Task {
    id: number,
    name: string,
    description: string,
    color: Color,
    progress: number,
    maxProgress: number,
    icon: React.ComponentType<TablerIconProps>,
    isDaily: boolean,
}
