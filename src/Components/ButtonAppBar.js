import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';



export default function ButtonAppBar() {
  const navigate=useNavigate();
  const handleClick=()=>{
  navigate('/');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#ffbfc5' }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000">
            <b>BUYYOURPHONE</b>
          </Typography>
          <Button onClick={handleClick} style={{ backgroundColor: '#000000', color: '#ffbfc5' }}><b>Logout</b></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}