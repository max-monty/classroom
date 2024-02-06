import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function GroupDisplay({ groups }) {
    return (
        <List>
            {groups.map((group, index) => (
                <ListItem key={index}>
                    <ListItemText primary={`Group ${index + 1}`} secondary={group.join(', ')} />
                </ListItem>
            ))}
        </List>
    );
}

export default GroupDisplay;