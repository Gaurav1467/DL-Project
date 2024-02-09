import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

function Profile() {
    const navigate = useNavigate();
    
    const handleUpdate = (e)=> {
        navigate('/profiledetails');
    }
  return (
    <Container sx={{

        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <React.Fragment>
            <Typography sx={{
                mb : 1
            }} variant="h6" gutterBottom>
                Profile
            </Typography>
            <Box component="form" noValidate onSubmit={handleUpdate} sx={{ mt: 3 } }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={"Gaurav"}
                            color="success"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="fatherName"
                            name="fatherName"
                            label="Father name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="moblieNumber"
                            name="moblieNumber"
                            label="Moblie Number"
                            value={"65987953"}
                            fullWidth
                            variant="standard"
                            focused
                            disabled 
                            
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            value={"Address"}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                            focused
                            disabled 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                            focused
                            disabled 
                            
                        />
                    </Grid>
                </Grid>
                <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update Details
                    </Button>
            </Box>
        </React.Fragment>

    </Container>
  )
}

export default Profile