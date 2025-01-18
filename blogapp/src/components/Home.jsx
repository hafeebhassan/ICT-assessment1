import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';


const Home = () => {
  const[data,setdata]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
    setdata(res.data);
  })
  return (
    <div>
      <br /><br /><br /><br />
      <Grid container spacing={5}alignItems={'center'}>
      {data.map((val)=>{
          return(
            <Grid item >
      
       <Card sx={{ maxWidth: 345, minWidth:345, maxHeight:200,minHeight:200}} style={{backgroundColor:"black",color:"white",borderRadius:"10px"}}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{fontFamily:'cursive'}}>
          {val.id}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white',opacity:"0.5" }}style={{fontFamily:'cursive'}}>
          {val.title}
        </Typography>
      </CardContent>
      <CardActions >
        
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Button  variant='contained'size="large"style={{backgroundColor:'grey',color:"white",fontFamily:'cursive'}}>Read Blog</Button><br/>
      </CardActions>
    </Card>
    </Grid>
    )
    })}</Grid>
    </div>
  )
}

export default Home