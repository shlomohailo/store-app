import "./card.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

function Cards({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const {
    price,
    color,
    condition,
    dateAdded,
    quantity,
    size,
    pic,
    description,
  } = data;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(price);

  return (
    <div style={{ margin: "3rem", padding: "5px", marginTop: "5px" ,marginBottom:"5PX"}}>
      <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 470 }}>
        <CardHeader title={quantity} subheader={dateAdded} />
        <CardMedia component="img" height="194" image={pic} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary" wrap>
            {description}
          </Typography>
          <Typography>  {price}</Typography>
        </CardContent>
        <CardActions disableSpacing sx={{}}>
          <IconButton>
            <Button size="small">
              <Link to="/PaymentForm">
                BUY 
                
              </Link>
            </Button>
            <Button size="small">
              <Link to="https://en.wikipedia.org/wiki/Berbere" >
                Learn More
              </Link>
            
            </Button>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
