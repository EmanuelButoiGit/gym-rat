import React, { useState, useEffect } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import IRecord from './IRecord';

interface RecordProps {
    record: IRecord;
    onChange: (record: IRecord) => void;
}

const Record = ({ record: initialRecord, onChange }: RecordProps) => {
    const [record, setRecord] = useState<IRecord>(initialRecord);

    useEffect(() => {
        onChange(record);
    }, [onChange, record]);

    const handleFieldChange = (field: keyof Omit<IRecord, 'id'>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = field === 'exercise' ? event.target.value : parseInt(event.target.value) || 0;
        setRecord(prev => ({ ...prev, [field]: value }));
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            marginTop: '3vh' 
        }}>
            <TextField 
                required 
                label="Exercise" 
                variant="outlined"
                value={record.exercise}
                onChange={handleFieldChange('exercise')}
            />
            <TextField 
                required 
                label="Weight" 
                variant="outlined" 
                type="number"
                value={record.weight.toString()}
                onChange={handleFieldChange('weight')}
                InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>
                }}
            />
            <TextField 
                required 
                label="Reps" 
                variant="outlined"
                type="number"
                value={record.reps.toString()}
                onChange={handleFieldChange('reps')}
            />
        </Box>
    );
};

export default Record;
