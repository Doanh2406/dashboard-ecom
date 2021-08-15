import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const data = {
  labels: [
    "SunDay",
    "MonDay",
    "ThusDay",
    "Wenesday",
    "namday",
    "Friday",
    "Satuday",
  ],
  datasets: [
    {
      label: "This week",
      data: [100, 180, 150, 200, 250, 300, 270],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "Last week",
      data: [90, 110, 75, 90, 100, 150, 200],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      yAxisID: "y-axis-1",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: 20,
    color: theme.palette.text.secondary,
    marginRight: 20,
  },
}));
function BarChart() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h4">Product order </Typography>
        <Bar data={data} />
      </Paper>
    </>
  );
}

export default BarChart;