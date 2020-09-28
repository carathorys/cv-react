import { createStyles, fade, Theme } from "@material-ui/core";
import { HeaderProps } from "./header.props";

export const HeaderStyles = (theme: Theme) => createStyles({
    root: {
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        }),
        backdropFilter: 'blur(15px)',
        boxShadow: theme.shadows[10],
        '& div': {
            transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.short
            })
        },
        background: 'none'
    },
    bg: {
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
    },
    rootScrolled: {
        boxShadow: theme.shadows[3],
        '& .firstRow': {
            minHeight: 20
        },
        '& .secondRow': {
            minHeight: 20
        },
        '& .background': {
            opacity: '0.7'
        }
    },
    title: {
        flexGrow: 1
    }
})