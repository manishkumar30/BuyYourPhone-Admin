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
import axios from 'axios';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import ButtonAppBar from './ButtonAppBar';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#ffbfc5",
    backgroundColor: "#000000",
    '&:hover': {
        color: "#000000",
        backgroundColor: "#ffbcf5",

    },
}));
const ColorButton2 = styled(Button)(({ theme }) => ({
    color: "#000000",
    backgroundColor: "#ffbfc5",
    '&:hover': {
        backgroundColor: "#ffbfc5",

    },
}));

const labelStyle = {
    color: '#000000', // Set the label text color to #ffbcf5
};

const AddAccessories = () => {
    
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [warehouseOptions, setWarehouseOptions] = useState([]);

    const product = {
        brand: selectedBrand,
        model: selectedModel,
        color: selectedColor,
        type: 'Accessories',
        image: '', 
        price, price,
        quantity: quantity, 
        warehouse: {
            id: selectedWarehouse,
        },
    };
    const [alertOpen, setAlertOpen] = useState(false);

    const closeAlert = () => {
        setAlertOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/warehouses') 
            .then((response) => {
                const locations = response.data.map((warehouse) => warehouse);
                setWarehouseOptions(locations);
            })
            .catch((error) => {
                console.error('Error fetching warehouse locations:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/products', product);
            console.log('Product added successfully');
            setAlertOpen(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
        <ButtonAppBar/>
       
        <Container maxWidth="sm" sx={{ bgcolor: '#ffbfc5', mt: '20px', borderStyle: "none", borderRadius: "10px" }}>
            <Typography variant="h4" align="center">
                <b>ADD ACCESSORIES</b>
            </Typography>
            <form onSubmit={handleSubmit}>
                
                <TextField
                    fullWidth
                    label="Brand"
                    type="text"
                    margin="normal"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />
                <TextField
                    fullWidth
                    label="Model"
                    type="text"
                    margin="normal"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />

                <TextField
                    fullWidth
                    label="Color"
                    type="text"
                    margin="normal"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />


                
                <FormControl fullWidth margin="normal">
                    <InputLabel style={labelStyle}>Warehouse</InputLabel>
                    <Select
                        value={selectedWarehouse}
                        autoWidth
                        label="Warehouse"
                        onChange={(e) => setSelectedWarehouse(e.target.value)}
                    >
                        <MenuItem value="">Select Warehouse</MenuItem>
                        {selectedBrand.length>0 && selectedModel.length>0 && warehouseOptions.map((warehouse) => (
                            <MenuItem key={warehouse.id} value={warehouse.id}>
                                {warehouse.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label="Price"
                    type="Number"
                    margin="normal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />
                <TextField
                    fullWidth
                    label="Quantity"
                    type="Number"
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />
                <Stack spacing={2} direction="row" justifyContent="center"
                    alignItems="center">
                    <ColorButton variant="contained" type="submit"> <b>Add Product</b></ColorButton>
                    <Link to="/dashboard"><ColorButton2 variant="contained"><b> Cancel</b></ColorButton2></Link>
                </Stack>
                <Collapse in={alertOpen}>
                    <Alert severity="success" onClose={closeAlert}>
                        <AlertTitle>Success</AlertTitle>
                        Product added successfully!
                    </Alert>
                </Collapse>
            </form>
        </Container>
        </>
    );
};

export default AddAccessories;
