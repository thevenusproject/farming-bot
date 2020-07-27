import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
            <Typography variant="body2" align="left" color="textSecondary">
              Project Status: Plot preparation
            </Typography>
            <Typography variant="body2" align="left" gutterBottom>
              Location:{" "}
              <a
                href="https://goo.gl/maps/P5f2FcpkudDC6knSA"
                target="_blank"
              >
                TVP Visitor Center
              </a>{" "}
              - Venus, Florida, USA
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid xs={12} sm container>
              <Grid item xs={12} sm>
                <Typography variant="body2" align="left" color="textSecondary">
                  Live Camera #1 - Bird's eye view
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={process.env.REACT_APP_STREAM_URL}
                  className={classes.stream}
                  alt="stream"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs>
                <Typography gutterBottom align="left" variant="subtitle1">
                  Dashboard
                </Typography>
                <Typography variant="body2" align="left" gutterBottom color="textSecondary">
                  Status: Under Construction
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
    width: "100%",
  }
}));

export default App;
