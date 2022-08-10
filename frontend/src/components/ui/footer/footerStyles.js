import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: "2rem",
  },
  link: {
    color: "#fff",
    fontSize: "1.25rem",
  },
  linkColumn: {
    width: "20rem",
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  //   "@global": {
  //     body: {
  //       margin: 0,
  //     },
  //     a: {
  //       textDecoration: "none",
  //     },
  //   },
}))
