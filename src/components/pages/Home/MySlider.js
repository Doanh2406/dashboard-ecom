import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function valuetext(value) {
  return `${value}`;
}
const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 200,
    label: '$200',
  },
  {
    value: 400,
    label: '$400',
  },  {
    value: 600,
    label: '$600',
  },
  {
    value: 800,
    label: '$800',
  },
  {
    value: 1000,
    label: '$100',
  },
];
export default function MySlider({value,setValue}) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
      setValue(newValue)
    
  };
  return (
    <div className={classes.root}>
      <Slider
        min={0}
        step={10}
        max={1000}
        scale={(x) => x }
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}

      />
    </div>
  );
}
