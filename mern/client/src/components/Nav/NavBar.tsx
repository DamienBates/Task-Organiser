import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <AppBar>
          <Toolbar>
            <Grid direction="row" justify="space-between" container>
              <Grid item>
                <Typography variant="h6">News Aggregator</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </nav>
    </div>
  );
};

export default NavBar;
