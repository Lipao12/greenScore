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
    color: Color,
    progress: number,
    icon: React.ComponentType<TablerIconProps>,
}