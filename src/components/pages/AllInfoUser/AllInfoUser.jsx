import { useContext ,useState} from "react";
import { usersContext } from "../../../contexts/user";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import   './UserInfo.css';


function AllInfoUser() {
  const { loggedInUser } = useContext(usersContext);
  const [expanded, setExpanded] = useState(false);
  console.log(loggedInUser)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="AllInfoUser">
      <h1>All Info User</h1>
      <Container component="main" maxWidth="xs">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {loggedInUser.profile.about}
            </Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography gutterBottom variant="h5" component="div">
                {loggedInUser.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loggedInUser.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loggedInUser.profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loggedInUser.profile.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loggedInUser.profile.dob}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {loggedInUser.profile.address}{" "}
              </Typography>
            </Collapse>
          </CardContent>

          <CardActions>
         
            <Button size="small">Edit</Button>
            <Button size="small" onClick={() => handleExpandClick()}> {expanded? "collapse": "expand"}</Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default AllInfoUser;
