import React from 'react'
import ButtonAppBar from '../Components/ButtonAppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ProductCard from '../Components/ProductCard'
import WarehouseCard from '../Components/WarehouseCard';
import AccessoriesCard from '../Components/AccessoriesCard';



const LandingPage = () => {
  return (
    <div style={{overflow:"hidden"}}>
         <ButtonAppBar/> 
        <div>
        <Container sx={{m:"100px 250px"}} >
      <Grid container spacing={2}>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <AccessoriesCard/>
        </Grid>
        <Grid item>
          <WarehouseCard/>
        </Grid>
      </Grid>
    </Container>
    </div>
        {/* {<AddWarehouse/>
        <AddProduct/>} */}
    </div>
  )
}

export default LandingPage
