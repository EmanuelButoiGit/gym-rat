import { Container, Typography, Grid, Card, CardMedia, CardContent, LinearProgress } from '@mui/material';
import gunterImage from '../../images/gunter.jpg';
import goggingsImage from '../../images/goggings.jpg';
import twinsImage from '../../images/twins.jpg';
import zyzzImage from '../../images/zyzz.jpg';
import platzImage from '../../images/platz.jpg';
import mentzerImage from '../../images/mentzer.jpg';
import { useEffect, useState } from 'react';
import IAchievements from './IAchievemts';
import Header from '../Header';

const AchievementsPage = () => {

  const [achievements, setAchievements] = useState<IAchievements | null>(null);;

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/achievements');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <>
      <Container component="main">

        <Header title = "Trophy Room 🏆" subtitle = "Achieve with this app as much as possible - collect them all 🎖️!" />
        
        {achievements ? (
        <>
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={gunterImage}
                  alt="Smile Achievement"
                  style={{ filter: achievements.smile ? 'none' : 'grayscale(100%)' }}
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
                  style={{ filter: achievements.cardio ? 'none' : 'grayscale(100%)' }}
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
                  alt="Bro Achievement"
                  style={{ filter: achievements.bro ? 'none' : 'grayscale(100%)' }}
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

          
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={platzImage}
                  alt="Leg Achievement"
                  style={{ filter: achievements.leg ? 'none' : 'grayscale(100%)' }}
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
                  alt="Brah Achievement"
                  style={{ filter: achievements.brah ? 'none' : 'grayscale(100%)' }}
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
                  alt="Rest Achievement"
                  style={{ filter: achievements.rest ? 'none' : 'grayscale(100%)' }}
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
        </>
        ) : (
          // <Box textAlign="center" marginTop={8}>
          //   <Typography variant="h5" style={{ color: 'skyblue'}} gutterBottom>
          //     Loading achievements... 
          //   </Typography>
          //   <LinearProgress style={{ marginTop: '40px' }} />
          // </Box>

          // Add preview for the app (when backend is down)
          <>
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={gunterImage}
                  alt="Smile Achievement"
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
                  alt="Bro Achievement"
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

          
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={platzImage}
                  alt="Leg Achievement"
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
                  alt="Brah Achievement"
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
                  alt="Rest Achievement"
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
        </>

        )}
      </Container>
    </>
  );
};

export default AchievementsPage;
