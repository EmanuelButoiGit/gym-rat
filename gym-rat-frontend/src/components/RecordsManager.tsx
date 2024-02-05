import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import Record from './Record';
import Plus from './Plus';
import Minus from './Minus';
import Submit from './Submit';

const RecordsManager = () => {
    const [records, setRecords] = useState<ReactElement<typeof Record>[]>([]);

    const addRecordHandler = () => {
        setRecords(prevRecords => [...prevRecords, <Record key={prevRecords.length} />]);
    };

    const removeRecordHandler = () => {
        setRecords(prevRecords => {
            const newRecords = prevRecords.slice(0, -1);
            return newRecords;
        });
    };

    const sumbmitHandler = () => {
        console.log("send API request")
    }

    return (
        <Box sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }}>
            {records}
            <Box sx={{ display: 'flex', gap: 1 }}>
                    <Plus onAdd={addRecordHandler} />
                    <Minus onRemove={removeRecordHandler} />
                    <Submit onSubmit={sumbmitHandler} />
            </Box>
        </Box>
    );
};

export default RecordsManager;