import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <AppBar>
                    <Toolbar>
                        <Grid xs="auto" direction="row" justifyContent="space-between" container>
                            <Grid item><Typography>News Aggregator</Typography></Grid>
                            <Grid item><Button flex="2" color="primary" variant="contained">Login</Button></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </nav>
        </div>
    );
};

export default Navbar;