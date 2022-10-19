import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';

export default function CardHome() {
  return (
    <Container>
    <Card sx={{ minWidth: 275 ,margin:"10px",marginBottom:"100px" ,display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      <CardContent>
   
        <Typography sx={{ fontSize: 50,textAlign:"center",display:"flex",justifyContent:"center"}} color="text.secondary" gutterBottom>
        Spice Of The Day
        </Typography>
      
       
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <CardMedia
     
        component="img"
        height="194"
        image="https://thumbs.dreamstime.com/b/berbere-spice-other-spices-market-ethiopia-94880245.jpg"
        alt="Paella dish"
      />
        <Button size="small">For More</Button>
      </CardActions>
      
    </Card>
    </Container>
  );
}