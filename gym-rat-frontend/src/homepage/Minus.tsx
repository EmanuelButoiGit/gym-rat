import { IconButton } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface RemoveProps {
    onRemove: () => void;
}

const Minus = ({ onRemove }: RemoveProps) => {
    return (
        <IconButton
        color="error"
        onClick={onRemove}>
            <RemoveCircleIcon />
        </IconButton>
    );
};

export default Minus;