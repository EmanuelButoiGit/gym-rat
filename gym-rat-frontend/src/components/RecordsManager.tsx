import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import Record from './Record';
import Plus from './Plus';

const RecordsManager = () => {
    const [records, setRecords] = useState<ReactElement<typeof Record>[]>([]);

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