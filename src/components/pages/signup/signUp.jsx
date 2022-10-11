import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { usersContext } from "../../../contexts/user";
const theme = createTheme();

export default function SignUp() {
  const { users, setIsLogIn, setLoggedInUser, setUsers } =
    useContext(usersContext);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      bday: data.get("bday"),
      password: data.get("password"),
      passwordCurrent: data.get("passwordCurrent"),
    });

    const myObJtoPush = {
      email: data.get("email"),
      password: data.get("password"),
      profile: {
        name: data.get("firstName"),
        company: "Telequiet",
        dob: data.get("bday"),
        address: "tel-aviv",
        about:
        "Sint aliquip fugiat irure dolore ipsum mollit id ex amet elit esse excepteur. Tempor irure adipisicing anim cillum occaecat occaecat sunt aute aute nisi do ipsum culpa consectetur.",
      },
      username: `${data.get("firstName")} ${data.get("lastName")}`,
    
    };

    const tempUsers = users;
    tempUsers.push(myObJtoPush);
    setUsers(tempUsers);

    // const newUsers = users.push(myObJtoPush);

    if (myObJtoPush.password !== data.get("passwordCurrent")) {
      alert("password not current");
    } else {
      setIsLogIn(true);
      setLoggedInUser(myObJtoPush);
      navigate("/", { replace: true });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="bday"
                  label="Date of birth"
                  name="bday"
                  autoComplete="bday"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordCurrent"
                  label="Password"
                  type="password"
                  id="passwordCurrent"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
