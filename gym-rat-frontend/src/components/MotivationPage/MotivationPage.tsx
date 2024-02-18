import {Box, Typography} from '@mui/material';
import Randomize from './Randomize';
import { useState } from 'react';
import motivationalQuotes from './motivationalQuotes';
import Header from '../Header';

const MotivationPage = () => {
    const [message, setMessage] = useState('Click on the dice to get your motivation boost ⚡!');
    function randomizeHandler(){
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        const randomQuote = motivationalQuotes[randomIndex];
        setMessage(randomQuote);
    }
    return (
        <>
            <Header title = "Motivation 🎯" subtitle="Be always inspired!" />
            <Box sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
            }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                        <Randomize onRandomize={randomizeHandler} />
                </Box>
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                        margin: '10px 0',
                        padding: '10px',
                        backgroundColor: 'white',
                        fontStyle: 'italic',
                        color: 'black',
                        borderRadius: '5px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        maxWidth: '80%',
                        wordWrap: 'break-word',
                    }}
                >
                    "{message}"         
                </Typography>
            </Box>
        </> 
    );
};

export default MotivationPage;