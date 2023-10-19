import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to="/add-product" style={{ textDecoration: 'none' }}>
    <Card>
    <CardMedia
        component="img"
        alt="productimage"
        height="240"
        image="/ProductImage.png"
      />
      <CardContent style={{backgroundColor:"#ffbfc5", textAlign:"center"}}>
        <Typography variant="h6"><b>ADD PRODUCT</b></Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ProductCard;
