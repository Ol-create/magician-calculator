import React from 'react';
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Calculator from '../components/Calculator';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CalculatorPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography mt={8}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <h2>Welcome to our Homepage</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting.
    </p></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Calculator /></Item>
        </Grid>
      </Grid>
      </Typography>
    </Box>
  );
}


