import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';

const Footer = () => {

  // Share function using the Web Share API
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).then(() => {
        alert('Thanks for sharing!');
        // TO DO: here send a flag or something to the Achivement page so the grayscale will be removed
      })
      .catch(console.error);
    } else {
      alert('Web share is not supported in this browser.');
    }
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: 'azure', width: "95vh", margin: 'auto', bottom: 0, }}>
      <Toolbar>
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
