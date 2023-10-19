import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import ButtonAppBar from './ButtonAppBar';

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

const AddWarehouse = () => {

    const [warehouse, setWarehouse] = useState({
        name: "",
        location: ""
    });

    const { name, location } = warehouse;
    const [alertOpen, setAlertOpen] = useState(false);

    const onInputChange = (e) => {
        setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
    };

    const closeAlert = () => {
        setAlertOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (warehouse.name === '' || warehouse.location === '') {
            alert('Please fill in all required fields.');
            return; // Do not submit the form
        }
        else {
            setWarehouse({
                name: "",
                location: ""
            })
            try {
                const response = await axios.post('http://localhost:8080/api/warehouses', warehouse);
                console.log('Warehouse added successfully');
                setAlertOpen(true);

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
        <ButtonAppBar/>
            <Container maxWidth="sm" sx={{ border: "#000000 solid", mt: '20px', borderStyle: "none", borderRadius: "10px", height: "280px" }}>
                <div style={{ backgroundColor: "#ffbfc5", borderStyle: "none", borderRadius: "10px" }}>
                    <Typography variant="h4" align="center">
                        <b>ADD WAREHOUSE</b>
                    </Typography></div>
                <form onSubmit={handleSubmit}>

                    <TextField
                        fullWidth
                        label="Warehouse Name"
                        type="text"
                        margin="normal"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        InputLabelProps={{
                            style: labelStyles,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Location"
                        type="text"
                        margin="normal"
                        name="location"
                        value={location}
                        onChange={(e) => onInputChange(e)}
                        InputLabelProps={{
                            style: labelStyles,
                        }}
                    />
                    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                        <ColorButton variant="contained" type="submit"> <b>Add Warehouse</b></ColorButton>
                        <Link to="/dashboard">
                            <ColorButton2 variant="contained"><b> Cancel</b></ColorButton2></Link>
                    </Stack>
                </form>
            </Container>
            <Collapse in={alertOpen}>
                <Alert severity="success" onClose={closeAlert}>
                    <AlertTitle>Success</AlertTitle>
                    Warehouse added successfully!
                </Alert>
            </Collapse>
        </>
    );
};

export default AddWarehouse;
