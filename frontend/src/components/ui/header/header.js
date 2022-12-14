import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import headerStyles from "./headerStyles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "gatsby"

import search from "../../../images/search.svg"
import cart from "../../../images/cart.svg"
import account from "../../../images/account-header.svg"
import menu from "../../../images/menu.svg"

export default function Header({ categories }) {
  const classes = headerStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const activeIndex = () => {
    const found = routes.findIndex(
      ({ node: { name, link } }) =>
        (link?.toLowerCase() || `/${name}`?.toLowerCase()) ===
        window.location.pathname.toLowerCase()
    )
    // Another way of doing it
    // const found = routes.indexOf(
    //   routes.filter(
    //     ({ node: { name, link } }) =>
    //       (link || `/${name.toLowerCase()}`) === window.location.pathname
    //   )[0]
    return found === -1 ? false : found
  }

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  const tabs = (
    <Tabs
      value={activeIndex()}
      classes={{ indicator: classes.colorIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          label={route.node.name}
          key={route.node.strapiId}
        ></Tab>
      ))}
    </Tabs>
  )
  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map((route, index) => (
          <ListItem
            selected={activeIndex() === index}
            component={Link}
            to={route.node.link || `/${route.node.name.toLowerCase()}`}
            divider
            button
            key={route.node.strapiId}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.node.name}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )
  const actions = [
    {
      icon: search,
      alt: "search",
      visible: true,
      onClick: () => console.log("search"),
    },
    { icon: cart, alt: "cart", visible: true, link: "/cart" },
    { icon: account, alt: "account", visible: !matchesMD, link: "/account" },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(
          action =>
            action.visible && (
              <IconButton
                key={action.alt}
                component={action.onClick ? undefined : Link}
                to={action.onClick ? undefined : action.link}
                onClick={action.onClick}
              >
                <img
                  className={classes.icon}
                  src={action.icon}
                  alt={action.alt}
                ></img>
              </IconButton>
            )
        )}
      </Toolbar>
    </AppBar>
  )
}
