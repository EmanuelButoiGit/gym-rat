import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

const Footer = () => {
  const [emoticon, setEmoticon] = useState('😔');
  const { enqueueSnackbar } = useSnackbar();

  // Share function using the Web Share API
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).then(() => {
        fetch('http://localhost:8080/api/achievements/bro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
          enqueueSnackbar('You unlocked an achivement!', {
            variant: 'info',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
            autoHideDuration: 3000,
          });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      })
      .catch(console.error);
    } else {
      alert('Web share is not supported in this browser.');
    }
  };

  const handleSmile = () => {
    enqueueSnackbar('You unlocked an achivement!', {
      variant: 'info',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      autoHideDuration: 3000,
    });
    fetch('http://localhost:8080/api/achievements/smile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
          setEmoticon('😁');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: 'azure', width: "95vh", margin: 'auto', bottom: 0, }}>
      <Toolbar>
        <IconButton color="inherit" sx={{ marginBottom: '4px', fontSize: '16px' }} onClick={handleSmile}>
          {emoticon}
        </IconButton>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Butoi Emanuel-Sebastian
        </Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button color="inherit" component={Link} to="/privacy" sx={{ marginRight: 2, textDecoration: 'none' }}>
            Privacy Policy
          </Button>
          <Button color="inherit" component={Link} to="/terms" sx={{ marginRight: 2, textDecoration: 'none' }}>
            Terms of Use
          </Button>
          <IconButton color="inherit" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
