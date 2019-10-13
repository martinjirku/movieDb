import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { isEmptyInformation } from '../utils';

export const DetailedInformation = ({ title, value, forceRender = false }) => {
  if (!forceRender && isEmptyInformation(value)) return null;
  return (
    <Fragment>
      <Typography variant="subtitle2">{title}:</Typography>
      <Typography gutterBottom>{value}</Typography>
    </Fragment>
  );
};
