import PageContainer from './components/PageContainer';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './homepage/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageContainer>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/history" />
            <Route path="/achivements" />
            <Route path="/motivation" />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;