import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Define a type for the props
interface PlusProps {
    onAdd: () => void; // Assuming no arguments for onAdd, adjust if needed
}

const Plus = ({ onAdd }: PlusProps) => {
    return (
        <IconButton
        color="success"
        onClick={onAdd}>
            <AddCircleIcon />
        </IconButton>
    );
};

export default Plus;