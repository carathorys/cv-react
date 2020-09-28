import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CssBaseline, Drawer, Grid, Paper, ThemeProvider, useMediaQuery } from "@material-ui/core"

import { HeaderComponent } from "../header"

import { theme } from '../../theme'
import { LayoutStyles } from "./layout.theme"
import { cpuUsage } from "process"

export const LayoutComponent = (props: React.PropsWithChildren<any>) => {
  const { children } = props;
  const classes = LayoutStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
            }
        }
      }
    }    
  `)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  const uiTheme = React.useMemo(() => theme(darkMode), [darkMode])

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={uiTheme}>
      <CssBaseline />
      <HeaderComponent title={data.site.siteMetadata?.title || `Title`}
        darkMode={darkMode}
        toggleDarkMode={handleDarkModeChange}
        background={data.placeholderImage.childImageSharp.fluid}
      />
      <Grid container>
        <Grid item xl={1} xs={1} />
        <Grid item xl={10} xs={10}>
          <Paper className={classes.content} elevation={15}>
            <main>{children}</main>
          </Paper>
        </Grid>
        <Grid item xl={1} xs={1} />
      </Grid>
    </ThemeProvider>
  )
}
