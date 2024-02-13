import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';



    

export default function Loader() {
    return (
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={4}>
        
        <LinearProgress color="success" />
        {/* <LinearProgress color="inherit" /> */}
        <LinearProgress color="success" />
        {/* <LinearProgress color="inherit" /> */}
        <LinearProgress color="success" />
        <LinearProgress color="success" />
      </Stack>
    );
  }