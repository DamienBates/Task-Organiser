import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

export const UseListItem = (props: { name: string; icon: any; link: string; }) => {
    const { name, icon, link } = props;

    return (
        <NavLink to={`/${link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <List>
                {[name].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </NavLink>
    )
}

export default UseListItem