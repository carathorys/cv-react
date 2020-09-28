import { WithStyles } from "@material-ui/core";
import { HeaderStyles } from "./header.styles";

export interface HeaderProps extends WithStyles<typeof HeaderStyles> {
    title: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}