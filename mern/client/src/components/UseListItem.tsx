import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

export const UseListItem = (props: { name: string; icon: any; link: string; }) => {
    const { name, icon, link } = props;

    return (
        <Link to={`/${link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <List>
                {[name].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Link>
    )
}

export default UseListItem