import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const AccessoriesCard = () => {
  return (
    <Link to="/add-accessories" style={{ textDecoration: 'none' }}>
    <Card>
    <CardMedia
        component="img"
        alt="accessories"
        height="240"
        image="/accessories.png"
      />
      <CardContent style={{backgroundColor:"#ffbfc5", textAlign:"center"}}>
        <Typography variant="h6"><b>ADD ACCESSORIES</b></Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default AccessoriesCard;