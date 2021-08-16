import React from 'react'
  import { Line } from "react-chartjs-2";
  import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {productdata} from '../../dataJson';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",       
      marginTop: 20,
      color: theme.palette.text.secondary,
    },
  }));
function LineChart() {
    const classes = useStyles();
    return (
        <>
         <Paper className={classes.paper}>
           
            <Line data={productdata} />

          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </Paper>
        </>
    )
}

export default LineChart