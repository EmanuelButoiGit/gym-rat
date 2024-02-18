import {Box, Container, Typography} from '@mui/material';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <Container component="main" style={{ flex: 1 }}>
            <Box textAlign="center" marginTop={8}>
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {subtitle}
                </Typography>
            </Box>
        </Container> 
    );
};

export default Header;