import React from "react";
import { Paper, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    height: 50,
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 5,
    // backgroundColor: '#003300'
    backgroundImage: "linear-gradient(#1a46cd, #14e7d5, #1a46cd)"
  },
  centeredLine: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  strikeThrough: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "line-through",
    color: "#00FF00"
  }
}));

const Todo = props => {
  const { algoQueHacer, toggleTask } = props;
  const classes = useStyles();


  return (
    <Box className={classes.box} onClick={e => toggleTask(algoQueHacer.id)}>
      <Typography
        variant="h5"
        className={
          algoQueHacer.completed === true
            ? classes.strikeThrough
            : classes.centeredLine
        }

      >
        {algoQueHacer.task}
      </Typography>
    </Box>
  );
};

export default Todo;
