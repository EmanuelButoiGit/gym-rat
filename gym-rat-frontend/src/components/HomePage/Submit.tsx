import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface SubmitProps {
    onSubmit: () => void;
}

const Submit = ({ onSubmit }: SubmitProps) => {
    return (
        <IconButton
        style={{ color: "blue" }}
        onClick={onSubmit}>
            <SendIcon />
        </IconButton>
    );
};

export default Submit;