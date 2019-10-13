import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    message: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.htmlFontSize * 1.3,
    },
  };
});

export const MovieListMessage = ({ value }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.message} color="textSecondary" variant="h6">
      {value}
    </Typography>
  );
};
