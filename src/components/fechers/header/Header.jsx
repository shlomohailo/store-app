import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../../contexts/user";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const drawerWidth = 240;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLogIn, setIsLogIn, setLoggedInUser } = useContext(usersContext);
  const navigate = useNavigate();
   const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const navItems = isLogIn
    ? ["Home", "About", "Contact", "AllInfoUser", "Tabs", "Table"]
    : ["Home", "SignIn"];
  const handleChange = () => {
    setIsLogIn(false);
    setLoggedInUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const onNavItemClick = (item) => {
    if ("/Home" == item) {
      return navigate("/", { replace: true });
    }
    return navigate(item, { replace: true });
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isLogIn}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={"Logout"}
          />
        </FormGroup>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => onNavItemClick(`/${item}`)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {isLogIn && (
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={true}
                        onChange={handleChange}
                        aria-label="login switch"
                      />
                    }
                    label={"Logout"}
                  />
                </FormGroup>
              )}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => onNavItemClick(`/${item}`)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Box component="main" sx={{ p: 1 }}> */}
        {/* <Toolbar /> */}
        {/* <Typography></Typography> */}
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
}
