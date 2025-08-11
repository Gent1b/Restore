import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

type Props ={
    onToggle: ()=>void;
    darkMode: boolean

}
export default function Navbar({onToggle,darkMode}: Props) {
  return (
    <AppBar position = "fixed">
        <Toolbar>
            <Typography variant='h6'>RE-STORE</Typography>
            <IconButton onClick={onToggle}>
                {darkMode ? <DarkMode/>:<LightMode sx={{color:'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
