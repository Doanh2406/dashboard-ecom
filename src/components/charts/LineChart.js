import React from 'react'
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {productdata} from '../../datajson';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      marginTop: 20,
      color: theme.palette.text.secondary,
      marginRight: 20,
    },
  }));
function LineChart() {
    const classes = useStyles();
    return (
        <>
         <Paper className={classes.paper}>
            <Typography variant="h4">Product Sales </Typography>

            <Line data={productdata} />
          </Paper>
        </>
    )
}

export default LineChart