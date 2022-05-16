import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import Create from "@mui/icons-material/Create";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import CustomTheme from "../../../CustomTheme";

function DrawerComponent() {
    return (
        <Drawer
            anchor={"left"}
            variant="permanent"
            sx={{
                boxShadow: "20px #fff"
            }}
        >
            <ListItem style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                width: "45px"
            }}>
                <ListItemComponent
                    to="/"
                    icon={<Home />}
                />
                <ListItemComponent
                    to="/TaskList"
                    icon={<Create />}
                />
            </ListItem>
        </Drawer >
    )
};

interface ListItemProps {
    to: string,
    icon: JSX.Element,
}

function ListItemComponent({ to, icon }: ListItemProps) {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <Box mb="35px">
            <ClickAwayListener
                onClickAway={() => setClicked(false)}>
                <Link to={to}>
                    <Box
                        onClick={() => setClicked(true)}
                        style={{
                            color: clicked === false ?
                                "#828282" : String(CustomTheme.palette.primary.main),
                            textDecoration: "none",
                        }}>
                        {icon}
                    </Box>
                </Link>
            </ClickAwayListener>
        </Box>
    )
}

export default DrawerComponent;