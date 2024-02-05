import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import Record from './Record';
import Plus from './Plus';
import Minus from './Minus';

const RecordsManager = () => {
    const [records, setRecords] = useState<ReactElement<typeof Record>[]>([]);

    const addRecord = () => {
        setRecords(prevRecords => [...prevRecords, <Record key={prevRecords.length} />]);
    };

    const removeRecord = () => {
        setRecords(prevRecords => {
            const newRecords = prevRecords.slice(0, -1);
            return newRecords;
        });
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
        }}>
            {records}
            <Box sx={{ display: 'flex', gap: 1 }}>
                    <Plus onAdd={addRecord} />
                    <Minus onRemove={removeRecord} />
            </Box>
        </Box>
    );
};

export default RecordsManager;