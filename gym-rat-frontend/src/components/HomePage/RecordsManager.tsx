import { useState } from 'react';
import { Box } from '@mui/material';
import Record from './Record';
import Plus from './Plus';
import Minus from './Minus';
import Submit from './Submit';
import IRecord from './IRecord';

const RecordsManager = () => {
    const [records, setRecords] = useState<IRecord[]>([]);

    const addRecordHandler = () => {
        const newRecord: IRecord = {
            id: records.length > 0 ? records[records.length - 1].id + 1 : 0,
            exercise: '',
            weight: 0,
            reps: 0,
            date: ""
        };
        setRecords(prevRecords => [...prevRecords, newRecord]);
    };

    const removeRecordHandler = () => {
        setRecords(prevRecords => prevRecords.slice(0, -1));
    };

    const handleChange = (updatedRecord: IRecord) => {
        setRecords(prevRecords => prevRecords.map(record => record.id === updatedRecord.id ? updatedRecord : record));
    };

    const submitHandler = () => {
        const data = records;
        fetch('http://localhost:8080/api/workout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Box sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }}>
            {records.map((record) => (
                <Record key={record.id} record={record} onChange={handleChange} />
            ))}
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Plus onAdd={addRecordHandler} />
                <Minus onRemove={removeRecordHandler} />
                <Submit onSubmit={submitHandler} />
            </Box>
        </Box>
    );
};

export default RecordsManager;
