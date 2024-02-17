import {Box, Container, Typography, CardContent, Grid, Card, Chip} from '@mui/material';
import IRecord from './HomePage/IRecord';
import { useEffect, useState } from 'react';

const HistoryPage = () => {
    const [records, setRecords] = useState<IRecord[]>([]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/workout');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecords(data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
    
        fetchRecords();
    }, []);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Container component="main" maxWidth="md" sx={{ marginTop: 8 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" gutterBottom>
                    Workout History 🏛️
                </Typography>
                <Typography variant="h6" gutterBottom>
                    See your last lifts and how you progressed!
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {records.map(record => (
                    <Grid item xs={12} sm={6} md={4} key={record.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'mintcream' }}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {record.exercise}
                                </Typography>
                                <Typography variant="body1">
                                    Weight: <Chip label={`${record.weight} kg`} color="primary" />
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Reps: <Chip label={record.reps} color="secondary" />
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {formatDate(record.date)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HistoryPage;
