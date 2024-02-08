import {Box, Container, Typography} from '@mui/material';

const AchivementsPage = () => {
    return(
        <>
            <Container component="main" style={{ flex: 1 }}>
            <Box textAlign="center" marginTop={8}>
                <Typography variant="h3" gutterBottom>
                    Trophy room 🏆
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Achieve with this app as much as possible - collect them all 🎖️! 
                </Typography>
            </Box>
            </Container> 
        </>
    );
}

export default AchivementsPage;