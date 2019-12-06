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
    backgroundColor: '#003300'
  },
  centeredLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  strikeThrough: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'line-through',
    color: '#00FF00'
  }
}));

const Todo = props => {
  const { algoQueHacer, groceryItem, toggleItem } = props;
  const classes = useStyles();

  const clickHandler = () => {
    toggleItem(groceryItem.id);
  };
  // for erasing block ===> display={(algoQueHacer.completed === true) ? "none" : "block"}
  //it goes in the Box element.

  return (
    <Box className={classes.box}  >
      <Typography variant="h5" className={(algoQueHacer.completed === true) ? classes.strikeThrough : classes.centeredLine}>
        {algoQueHacer.task}
      </Typography>
    </Box>
  );
};

export default Todo;
