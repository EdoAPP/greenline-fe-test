import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Greenline POS
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
