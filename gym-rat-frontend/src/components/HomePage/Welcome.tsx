import {Box, Container, Typography} from '@mui/material';

const Welcome = () => {
    return (
        <Container component="main" style={{ flex: 1 }}>
            <Box textAlign="center" marginTop={8}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Gym Rat 🏋🏻+🐁
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Track your lifts and achieve your goals!
                </Typography>
            </Box>
        </Container> 
    );
};

export default Welcome;