import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import gunterImage from '../../images/gunter.jpg';
import goggingsImage from '../../images/goggings.jpg';
import twinsImage from '../../images/twins.jpg';
import zyzzImage from '../../images/zyzz.jpg';
import platzImage from '../../images/platz.jpg';
import mentzerImage from '../../images/mentzer.jpg';
import { useState } from 'react';

const AchievementsPage = () => {

    // State to manage the grayscale of the twinsImage
    const [isTwinsImageGrayscale, setIsTwinsImageGrayscale] = useState(true);

    // Handler for the share button click
    const handleShare = () => {
      // Remove the grayscale from the twinsImage
      setIsTwinsImageGrayscale(false);
  
      // Your existing share logic here
      // navigator.share(...) or any other implementation
    };

  return (
    <>
      <Container component="main">
        <Box textAlign="center" marginTop={8}>
          <Typography variant="h3" gutterBottom>
            Trophy Room 🏆
          </Typography>
          <Typography variant="h5" gutterBottom>
            Achieve with this app as much as possible - collect them all 🎖️!
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={gunterImage}
                alt="Smile Achievement"
                style={{ filter: 'grayscale(100%)' }}
              /> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Smile Achievement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    "SMILE is Not an Official Pose Günter! ☝️🤓"
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={goggingsImage}
                alt="Cardio Achievement"
                style={{ filter: 'grayscale(100%)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cardio King
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    "Who's gonna carry the boats and the logs?"
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={twinsImage}
                alt="Smile Achievement"
                style={{ filter: 'grayscale(100%)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bro Achievement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  "Share the Gym Rat app to your bro!" 🏋🏻 📢 🏋️‍♀️
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* ----------------------------------- */}

        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={platzImage}
                alt="Smile Achievement"
                style={{ filter: 'grayscale(100%)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Leg Achievement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    "Life is like doing a super heavy squat 😳!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={zyzzImage}
                alt="Smile Achievement"
                style={{ filter: 'grayscale(100%)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Brah Achievement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    "We're all gonna make it brah 🔱!" (Do 30 workouts) 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={mentzerImage}
                alt="Smile Achievement"
                style={{ filter: 'grayscale(100%)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Rest Achievement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    You have rested enough so the muscle can grow 🌱!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default AchievementsPage;
