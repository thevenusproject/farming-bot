import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
// import {Delete, ArrowLeft, ArrowRight, ArrowDownward, ArrowUpward, ArrowLeftSharp} from '@material-ui/icons';
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography gutterBottom align="left" variant="h2">
              Farming Bot Project
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="body2" align="left" gutterBottom>
              Location:{" "}
              <a href="https://goo.gl/maps/P5f2FcpkudDC6knSA" target="_blank">
                TVP Visitor Center
              </a>{" "}
              - Venus, Florida, USA
            </Typography>
            <Typography variant="body2" align="left" color="textSecondary">
              Project Status: Plot preparation
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid xs={12} sm container>
              <Grid item xs={12} sm>
                <Typography gutterBottom align="left" variant="subtitle1">
                  Live Camera #1
                </Typography>
                <Typography variant="body2" align="left" color="textSecondary">
                  Bird's eye view
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={process.env.REACT_APP_STREAM_URL}
                  className={classes.stream}
                  alt="stream"
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" align="left" variant="subtitle1">
                  Controls: ⚠️ Under construction ⚠️
                </Typography>
              </Grid>
              <Grid container direction="column" alignItems="center" xs={12}>
                <Grid container xs={2}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <IconButton disabled aria-label="up">
                      <ArrowUpward />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
                <Grid container xs={2}>
                  <Grid item xs={4}>
                    <IconButton disabled aria-label="left">
                      <ArrowBack />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <IconButton disabled aria-label="right">
                      <ArrowForward />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container xs={2}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <IconButton disabled aria-label="down">
                      <ArrowDownward />
                    </IconButton>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs>
                <Typography gutterBottom align="left" variant="subtitle1">
                  Dashboard: ⚠️ Under Construction ⚠️
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={"dashboard.png"}
                  className={classes.image}
                  alt="dashboard"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 700,
    margin: "auto"
  },
  stream: {
    margin: theme.spacing(2),
    height: 320,
    width: 640
  },
  image: {
    width: "100%"
  }
}));

export default App;
