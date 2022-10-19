import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <div className="Footer">
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            // width: "100%",
                     }}
        >
          <BottomNavigation>
            <IconButton
              href="https://github.com/shlomohailo"
              size="large"
              color="primary"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://he-il.facebook.com/"
              size="large"
              color="primary"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/shlomo-hailo-5868b1236/"
              color="primary"
              size="large"
            >
              <LinkedInIcon />
            </IconButton>
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Footer;
