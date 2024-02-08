import {Box, Container, Typography} from '@mui/material';
const MotivationPage = () => {
    return (
        <Container component="main" style={{ flex: 1 }}>
            <Box textAlign="center" marginTop={8}>
                <Typography variant="h3" gutterBottom>
                    Motivation 🎯
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Be always inspired!
                </Typography>
            </Box>
        </Container> 
    );
};

export default MotivationPage;