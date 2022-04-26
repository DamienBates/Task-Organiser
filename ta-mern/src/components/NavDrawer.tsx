import { Home, Create, ListAlt } from "@mui/icons-material";
import { Box, ClickAwayListener, Drawer, ListItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomTheme from "../CustomTheme";

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
            }}>
                <ListItemComponent
                    to="/"
                    icon={<Home />}
                />
                <ListItemComponent
                    to="/CreateTask"
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
        <ClickAwayListener
            onClickAway={() => setClicked(false)}>
            <Link to={to}>
                <Box
                    onClick={() => setClicked(true)}
                    style={{
                        color: clicked === false ?
                            "#828282" : String(CustomTheme.palette.primary.main),
                        textDecoration: "none",
                        paddingBottom: "40px"
                    }}>
                    {icon}
                </Box>
            </Link>
        </ClickAwayListener>
    )
}

export default DrawerComponent;