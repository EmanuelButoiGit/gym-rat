import React, { useState } from 'react';
import { Box } from '@mui/material';
import Record from './Record';
import Plus from './Plus';

const RecordsManager = () => {
    // Use 'any[]' to avoid type issues temporarily
    const [records, setRecords] = useState<any[]>([]);

    const addRecord = () => {
        setRecords(prevRecords => [...prevRecords, <Record key={prevRecords.length} />]);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
        }}>
        {records}
        <Plus onAdd={addRecord} />
        </Box>
    );
};

export default RecordsManager;