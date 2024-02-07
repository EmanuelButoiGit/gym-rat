import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: 'azure' }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Gym Rat 🏋🏻+🐁
        </Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Workout History</Button>
          <Button color="inherit">Achivements</Button>
          <Button color="inherit">Motivation</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;