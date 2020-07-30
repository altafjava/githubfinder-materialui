import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const NoRecordFound = () => {
  return (
    <Grid item>
      <Grid container direction='column' alignItems='center' spacing={2}>
        <Grid item>
          <img src='assets/no-record-found.svg' alt='No Record Found' />
        </Grid>
        <Grid item>
          <Typography variant='h6'>No Record Found</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoRecordFound;
