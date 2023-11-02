import { Box } from "@mui/system"
import { SideBar, NavBar } from "../components";
import { Toolbar } from '@mui/material';

const drawerWidth = 240;

export const JornalLayout = ({children}: {children: any}) => {
  return (
    <Box
    className="animate__animated animate_fadeIn animate__faster"
    sx={{display: 'flex'}}>

        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth} />

        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{flexGrow:1, p:3}}>

            {/* Toolbar */}

            <Toolbar />

            {children}
        </Box>
        
    </Box>
  )
}
