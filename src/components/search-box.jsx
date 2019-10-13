import React from 'react';
import { Paper, InputBase, IconButton, makeStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'contents',
  },
  container: {
    padding: theme.spacing(2),
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: '100%',
    maxWidth: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export const SearchBox = ({ value, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Paper className={classes.root}>
        <InputBase
          value={value}
          autoFocus
          className={classes.input}
          placeholder="Search Movie Database"
          onChange={onChange}
        ></InputBase>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};
