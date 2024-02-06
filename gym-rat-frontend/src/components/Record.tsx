import { Box, TextField, InputAdornment } from '@mui/material';

const Record = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 7.5,
            gap: 3
        }}>
            <TextField required 
                id="outlined-basic" 
                label="Exercise" 
                variant="outlined"
            />
            <TextField required 
                id="outlined-basic" 
                label="Weight" 
                variant="outlined" 
                InputProps={{startAdornment: <InputAdornment position="start">kg</InputAdornment>}}
            />
            <TextField 
                required id="outlined-basic" 
                label="Reps" 
                variant="outlined"  
            />
        </Box>
    );
};

export default Record;