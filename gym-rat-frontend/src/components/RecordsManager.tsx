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
            {records.map((record, index) => (
                // Render each record with a unique key
                <React.Fragment key={index}>{record}</React.Fragment>
            ))}
            <Plus onAdd={addRecord} />
        </Box>
    );
};

export default RecordsManager;