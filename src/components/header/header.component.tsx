import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { HeaderProps } from './header.props';
import { Brightness3 as Dark, Brightness7 as Bright } from '@material-ui/icons';
import { HeaderStyles } from './header.styles';
import { HeaderState } from './header.state';

export class Header extends React.PureComponent<HeaderProps, HeaderState> {
    state = { scrolled: false }
    constructor(props: HeaderProps) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = (evt: any) => {
        if (this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 1) <= 0
            || !this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 0) > 0)
            this.setState({ scrolled: evt.target.scrollingElement.scrollTop > 0 })
    }

    render() {
        const { classes, toggleDarkMode, darkMode, title } = this.props;
        return <AppBar className={classes.root}>
            <Toolbar className={this.state.scrolled ? classes.toolbarScrolled : classes.toolbarTop}>
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                <IconButton color="inherit" onClick={toggleDarkMode}>{!darkMode ? <Dark /> : <Bright />}</IconButton>
            </Toolbar>
        </AppBar>;
    }
}


export const HeaderComponent = withStyles(HeaderStyles)(Header);