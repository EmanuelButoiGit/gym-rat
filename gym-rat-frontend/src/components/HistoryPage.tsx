import {Container, Typography, CardContent, Grid, Card, Chip} from '@mui/material';
import IRecord from './HomePage/IRecord';
import { useEffect, useState } from 'react';
import Header from './Header';

const HistoryPage = () => {
    const [records, setRecords] = useState<IRecord[]>([]);

    // Mock data to display when fetch fails or returns empty for the preview
    const mockRecords: IRecord[] = [
        { id: 0, exercise: 'Shadow boxing 🥊', weight: 5, reps: 100, date: '2024-01-01' },
        { id: 1, exercise: 'Shadow boxing 🥊', weight: 5, reps: 100, date: '2024-01-01' },
        { id: 2, exercise: 'Shadow boxing 🥊', weight: 5, reps: 100, date: '2024-01-01' },
        { id: 3, exercise: 'Bicep curls 💪', weight: 8, reps: 14, date: '2024-01-02' },
        { id: 4, exercise: 'Bicep curls 💪', weight: 10, reps: 12, date: '2024-01-02' },
        { id: 5, exercise: 'Bicep curls 💪', weight: 12.5, reps: 10, date: '2024-01-02' },
        { id: 6, exercise: 'Squats 🦵', weight: 50, reps: 13, date: '2024-01-03' },
        { id: 7, exercise: 'Squats 🦵', weight: 60, reps: 11, date: '2024-01-03' },
        { id: 8, exercise: 'Squats 🦵', weight: 60, reps: 10, date: '2024-01-03' },
    ];

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
                setRecords(mockRecords);
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

            <Header title = "Workout History 🏛️" subtitle = "See your last lifts and how you progressed!" />
            
            <Grid container spacing={3} sx={{ marginTop: '3vh' }}>
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
