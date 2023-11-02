import { TurnedInNot } from '@mui/icons-material';
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

export const SideBar = ({drawerWidth = 240}: any) => {

    const { displayName } = useSelector((state: any) => state.auth);

  return (
    <Box
        component='nav'
        sx={{width: {
            sm: drawerWidth
        },
        flexShrink: {
            sm: 0
        }
    }}
    >
        <Drawer
            variant="permanent" // temporary
            open={true}
            sx={{
                display: {
                    xs: 'block'
                },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(t => ( 
                        <ListItem key={t} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={t} />
                                    <ListItemText secondary={'Lorem ipsum Lorem ipsum Lorem ipsum'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
