import { IconButton } from '@mui/material';

interface RandomizeProps {
    onRandomize: () => any;
}

const Randomize = ({ onRandomize }: RandomizeProps) => {
    return (
        <IconButton
        style={{ color: "gray" }}
        onClick={onRandomize}>
            🎲
        </IconButton>
    );
};

export default Randomize;