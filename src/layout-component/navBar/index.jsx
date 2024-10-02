import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" variant="elevation">
        <Toolbar>
          <Typography className="title" variant="h6" component="div">
            ASSET
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
