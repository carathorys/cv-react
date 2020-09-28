import React from 'react';
import { AppBar, IconButton, ListItem, Tab, Tabs, Toolbar, Typography, withStyles } from '@material-ui/core';
import { HeaderProps } from './header.props';
import { Brightness3 as Dark, Brightness7 as Bright } from '@material-ui/icons';
import { HeaderStyles } from './header.styles';
import { HeaderState } from './header.state';

import BackgroundImage from 'gatsby-background-image'

const topTreshold = 65;

export class Header extends React.PureComponent<HeaderProps, HeaderState> {
  state = {
    scrolled: false,
    background: '',
    selectedTab: 0
  }

  constructor(props: HeaderProps) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.setState({ ...this.state, background: this.props.background.base64 ?? '' })
    fetch(this.props.background.src).then(x => x.blob()).then(x => {
      var fr = new FileReader();
      fr.readAsDataURL(x);
      fr.onloadend = () => {
        this.setState({ ...this.state, background: fr.result?.toString() ?? '' })
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = (evt: any) => {
    if (this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 1) <= topTreshold
      || !this.state.scrolled && (evt.target?.scrollingElement?.scrollTop ?? 0) > topTreshold)
      this.setState({ scrolled: evt.target.scrollingElement.scrollTop > topTreshold })
  }


  handleTabChange(_: any, value: any) {
    this.setState({ ...this.state, selectedTab: value });
  }

  render() {
    const { classes, toggleDarkMode, darkMode, title, background } = this.props;

    return <AppBar className={this.state.scrolled ? `${classes.root} ${classes.rootScrolled}` : classes.root}>
      <div className={`${classes.bg} background`} style={{ backgroundImage: `url(${this.state.background})` }}>
        <Toolbar className="toobar firstRow">
          <Typography variant="h6" className={classes.title}>{title}</Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>{!darkMode ? <Dark /> : <Bright />}</IconButton>
        </Toolbar>
        <Toolbar className="toobar secondRow">
          <Tabs value={this.state.selectedTab} onChange={this.handleTabChange.bind(this)}>
            <Tab value={0} label="My tab" />
            <Tab value={1} label="My tab" />
            <Tab value={2} label="My tab" />
            <Tab value={3} label="My tab" />
            <Tab value={4} label="My tab" />
            <Tab value={5} label="My tab" />
          </Tabs>
        </Toolbar>
      </div>
    </AppBar>;
  }
}


export const HeaderComponent = withStyles(HeaderStyles)(Header);