import React, { useState } from 'react';

import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    AppBar,
    Toolbar,
    InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffbfc5",
    backgroundColor: "#000000",
    '&:hover': {
        color: "#000000",
        backgroundColor: "#ffbfc5",

    },
}));
const ColorButton2 = styled(Button)(({ theme }) => ({
    color: "#000000",
    backgroundColor: "#ffbfc5",
    '&:hover': {
        backgroundColor: "#ffbfc5",

    },
}));

const labelStyles = {
    color: 'black', // Change this to the desired label color
};


const LoginPage = () => {
     
    const [formData, setFormData]=useState({
     adminEmail: "",
    adminPassword: ""
    })
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/dashboard");
    }

    const onInputChange = (e) => {
        setFormData({
          ...formData,
    
          [e.target.name]: e.target.value,
        });
        console.log(formData);
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        setFormData({ ...formData });
    
        try {
          const res = await axios.post(
            "http://localhost:8080/admin/login",
            formData
          );
          if (res.data.error === undefined) {
            navigate("/dashboard");
          } else {
            alert("Invalid Credentials");
          }
        } catch (e) {
          alert("Invalid Credentials");
        }
      };

  return (

    
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#ffbfc5' }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000">
            <b>BUYYOURPHONE</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Container maxWidth="sm" sx={{ mt:"80px", boxShadow:2, padding:"25px", borderRadius: 3}}>
        <div style={{ backgroundColor: "#ffbfc5", borderStyle: "none", borderRadius: "10px"}}>
            <Typography variant="h5" align="center">
                <b>ADMIN LOGIN</b>
            </Typography></div>
        <form onSubmit={onSubmit}>

            <TextField
                fullWidth
                label="Username"
                type="text"
                margin="normal"
                name="adminEmail"
                value={formData.adminEmail}
                onChange={(e) => onInputChange(e)}
                required
                InputLabelProps={{
                    style: labelStyles,
                }}
            />
            <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                name="adminPassword"
                value={formData.adminPassword}
                onChange={(e) => onInputChange(e)}
                required
                InputLabelProps={{
                    style: labelStyles,
                }}
            />
            <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
                <ColorButton type='submit' variant="contained" > <b>Login</b></ColorButton>
            </Stack>
        </form>
    </Container>
    </>

  )
}

export default LoginPage
