import { createStyles, fade, Theme } from "@material-ui/core";

export const HeaderStyles = (theme: Theme) => createStyles({
    root: {
        background: 'none'
    },
    toolbarScrolled: {
        background: fade(theme.palette.primary.main, 0.7),
        backdropFilter: 'blur(15px)',
        transition: '.1s'
    },
    toolbarTop: {
        background: theme.palette.primary.main,
        transition: ' .1s',
        backdropFilter: 'blur(0)',

    },
    title: {
        flexGrow: 1
    }
})