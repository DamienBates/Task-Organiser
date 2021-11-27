import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

export const UseListItem = (props) => {
    const { name, icon, link } = props;

    return (
        <Link to={`/${link}`}>
            <List>
                {[name].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Link >
    )
}

export default UseListItem