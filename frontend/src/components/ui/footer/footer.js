import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import footerStyles from "./footerStyles"
import facebook from "../../../images/facebook.svg"
import twitter from "../../../images/twitter.svg"
import instagram from "../../../images/instagram.svg"

export default function Footer() {
  const classes = footerStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="space-between">
        {/* Footer Links */}
        <Grid item classes={{ root: classes.linkContainer }}>
          <Grid container>
            <Grid
              container
              item
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Contact Us</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  (555)555-5555
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  dheer@var-x.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Customer Service</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  My Account
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Information</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" classes={{ body1: classes.link }}>
                  Terms and Conditions
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Social Links */}
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <IconButton>
                <img src={facebook} alt="facebook"></img>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <img src={twitter} alt="twitter"></img>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <img src={instagram} alt="instagram"></img>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
