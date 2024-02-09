import React, { useState } from 'react';
import CustomNotification from './CustomNotification'; // Adjust the import path as needed

function App() {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleOpenNotification = () => {
    setNotificationOpen(true);
  };

  const handleCloseNotification = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenNotification}>Show Notification</button>
      <CustomNotification open={notificationOpen} handleClose={handleCloseNotification} message="This is a success message!" />
    </div>
  );
}

export default App;
