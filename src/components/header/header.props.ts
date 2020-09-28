import { WithStyles } from "@material-ui/core";
import { IFluidObject } from "gatsby-background-image";
import Img from "gatsby-image";
import { HeaderStyles } from "./header.styles";

export interface HeaderProps extends WithStyles<typeof HeaderStyles> {
    title: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
    background: IFluidObject;
}