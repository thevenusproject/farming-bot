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
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper className={classes.paper}>
          <Grid xs={12} sm container>
            <Grid item xs={12}>
              <img
                src={process.env.REACT_APP_STREAM_URL}
                className={classes.stream}
                alt="stream"
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography gutterBottom align="left" variant="subtitle1">
                  Farming Bot Project • Bird's view
                </Typography>

                <Typography variant="body2" align="left" gutterBottom>
                  Location: <a href="https://goo.gl/maps/P5f2FcpkudDC6knSA" target="_blank">TVP Visitor Center</a> - Venus, Florida, USA
                </Typography>
                <Typography variant="body2" align="left" color="textSecondary">
                  Stage: Plot preparation
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
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
    height: 320,
    width: 640
  }
}));

export default App;
