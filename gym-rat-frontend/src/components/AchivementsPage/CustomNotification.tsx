import React from 'react';
import { Snackbar, Alert, SnackbarCloseReason } from '@mui/material';

// Define a type for the props
interface CustomNotificationProps {
  open: boolean;
  // Update the handleClose type to match Snackbar's onClose prop requirements
  handleClose: (event: React.SyntheticEvent<any, Event> | Event, reason: SnackbarCloseReason) => void;
  message: string;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={() => handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomNotification;