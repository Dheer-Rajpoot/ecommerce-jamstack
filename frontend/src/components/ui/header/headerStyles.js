import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  colorIndicator: {
    backgroundColor: "#fff",
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    height: "3rem",
    width: "3rem",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
  },
}))
