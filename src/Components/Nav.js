import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Virtual List
          </Typography>
          <Link to="/">
            <Button style={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link to="/about">
            <Button style={{ color: "#fff" }}>About</Button>
          </Link>
          <Link to="/virtualList">
            <Button style={{ color: "#fff" }}>List</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
