import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { productdata } from "../../dataJson";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: 20,
    color: theme.palette.text.secondary,
    height: "400px",
    border: "none",
    borderColor: "transparent",
  },
}));

function LineChart({setOrders ,setSales, month }) {

  const [dataLineChart, setDataLineChart] = useState();


  async function fetchData() {

    const { data } = await Axios.post(`/api/renueve/dayOfMonth`, {
      dateCurrent: `2022/${month + 1}/01`,
    });
    
    setSales(data.reduce((acc,curr)=>acc+curr.totalValue,0))
    const dataDays = data.map(x=>parseInt(x._id.split('-')[2]))
    
    const days = function getDaysInMonth(month, year) {
      let date = new Date(year, month, 1);
      const today = new Date();
      let days = [];
      if (month > today.getMonth()) {
        return days;
      }
      while (date.getMonth() === month && date.getDate() <= today.getDate()) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };

    function getDataOrder() {
      const arrDay = days(parseInt(month), 2022).map((x) =>
      parseInt(x.toLocaleDateString("en-Us").split('/')[1]));
      const arrDataSale = [];
    
      let orders;
      let sale;
      for (let i = 0; i < arrDay.length; i++) {
        orders=0;
        
        sale=0;
        for(let j = 0; j<dataDays.length;j++){
          if(arrDay[i]==dataDays[j]){
            orders=j;
            sale+=data[j].totalValue
           
          }
        }
        arrDataSale.push(sale)
       
        
      }
     
      return arrDataSale;
    }
    const dataLine = {
      labels: await days(parseInt(month), 2022).map((x) =>
        x.toLocaleDateString("en-Us")
      ),
      datasets: [
        {
          label: "Sales",
          data: await getDataOrder(),
          fill: false,
          backgroundColor: "rgb(42,188,134)",
          borderColor: "rgb(42,188,134,0.2)",
          yAxisID: "y-axis-1",
        },
      ],
    };
    setDataLineChart(dataLine)
  }

  useEffect(() => {
    fetchData();
  
  }, [month]);
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Line data={dataLineChart} />

        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </Paper>
    </>
  );
}

export default LineChart;
