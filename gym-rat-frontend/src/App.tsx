import {Container} from '@mui/material';
import HomePage from './HomePage';

function App() {
  return (
    <>
      <Container sx={{ backgroundColor: "azure", height: "100vh", width: "95vh" }}>
        <HomePage />
      </Container>
    </>
  );
}

export default App;