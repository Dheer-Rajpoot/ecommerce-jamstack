import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import headerStyles from "./headerStyles"

import search from "../../../images/search.svg"
import cart from "../../../images/cart.svg"
import account from "../../../images/account-header.svg"

export default function Header({ categories }) {
  const classes = headerStyles()
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        <Tabs
          value={0}
          classes={{ indicator: classes.colorIndicator, root: classes.tabs }}
        >
          {routes.map(route => (
            <Tab label={route.node.name} key={route.node.strapiId}></Tab>
          ))}
        </Tabs>
        <IconButton>
          <img src={search} alt="search"></img>
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart"></img>
        </IconButton>
        <IconButton>
          <img src={account} alt="account"></img>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
