import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';

const WarehouseCard = () => {
  return (
    <Link to="/add-warehouse" style={{ textDecoration: 'none' }}>
    <Card>
    <CardMedia
        component="img"
        alt="warehouse image"
        height="240"
        image="/warehouseimage.png"
      />
      <CardContent style={{backgroundColor:"#ffbfc5", textAlign:"center"}}>
        <Typography variant="h6" ><b>ADD WAREHOUSE</b></Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default WarehouseCard;
