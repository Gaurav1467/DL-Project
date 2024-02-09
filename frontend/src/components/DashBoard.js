import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Profile from './Profile';
import Test from './Test';
import Performance from './Performance';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import Licence from './driving-license/Licence';
// import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: () => true,
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            
        },
    }),
);

const defaultTheme = createTheme();

export default function Dashboard() {
    const [open, setOpen] = useState(true);
    const [display, setDisplay] = useState("profile");
    

    const navigate = useNavigate();

    const handleSignOut = (e) => {
        navigate('/signin');
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <AppBar position="absolute" >
                    <Toolbar className='tool'
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Driving School
                        </Typography>
                        <Button variant='text' color='inherit' onClick={handleSignOut} >
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent">
                    <Divider sx={{
                        mt : 8
                    }} />
                    <Box sx={{
                        width : "250px"
                    }}>
                        <List component="nav"
                            sx={{
                                m : 0
                            }}
                        >
                            <Button sx={{
                                width: "100%",
                                height : "100%",
                                color: "#42b7ff"
                            }} onClick={()=>{setDisplay("profile")}} >
                                 <Box sx={{
                                    display : 'flex',
                                    alignItems : "center",
                                    justifyContent : "center",
                                    height : "10px",
                                    pb : 1,
                                    mt : 0,
                                    color : "#42b7ff"
                                }}>
                                <PersonRoundedIcon />
                                </Box>
                                Profile</Button>
                        </List>
                        <List component="nav"
                         sx={{
                            m : 0
                        }}
                        >
                            <Button sx={{
                                width: "100%",
                                height : "100%",
                                color: "#42b7ff"
                            }} onClick={()=>{setDisplay("test")}}>
                                <Box sx={{
                                    display : 'flex',
                                    alignItems : "center",
                                    justifyContent : "center",
                                    height : "10px",
                                    pb : 1,
                                    mt : 0,
                                    color : "#42b7ff"
                                }}>
                                <AssignmentTurnedInRoundedIcon/>
                                </Box>
                                Test</Button>

                        </List>
                        <List component="nav" 
                        sx={{
                            display : 'flex',
                            justifyContent : 'center'
                        }}
                        >
                            <Button sx={{
                                width: "100%",
                                height : "100%",
                                color: "#42b7ff"
                            }} onClick={()=>{setDisplay("perfprmance")}}>
                                <Box sx={{
                                    display : 'flex',
                                    alignItems : "center",
                                    justifyContent : "center",
                                    height : "10px",
                                    pb : 1,
                                    mt : 0,
                                    color: "#42b7ff"
                                }}>
                                <BarChartRoundedIcon />
                                </Box>
                                Performance</Button>
                            <Divider sx={{ my: 1 }} />

                        </List>
                        <List component="nav" 
                        sx={{
                            display : 'flex',
                            justifyContent : 'center'
                        }}
                        >
                            <Button sx={{
                                width: "100%",
                                height : "100%",
                                color: "#42b7ff"
                            }} onClick={()=>{setDisplay("DL")}}>
                                <Box sx={{
                                    display : 'flex',
                                    alignItems : "center",
                                    justifyContent : "center",
                                    height : "10px",
                                    pb : 1,
                                    mt : 0,
                                    color: "#42b7ff"
                                }}>
                                <DriveEtaIcon />
                                </Box>
                                Learner Licence</Button>
                            <Divider sx={{ my: 1 }} />

                        </List>
                    </Box> 
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        {display === 'profile' ? <Profile/>: display === "test" ?<Test/> : display === "DL" ? <Licence /> : <Performance/>}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}