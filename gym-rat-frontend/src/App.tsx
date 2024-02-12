import PageContainer from './components/PageContainer';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MotivationPage from './components/MotivationPage/MotivationPage';
import AchivementsPage from './components/AchivementsPage/AchivementsPage';
import { GrayscaleProvider } from './components/AchivementsPage/GrayscaleContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <GrayscaleProvider> 
          <PageContainer>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/history" />
              <Route path="/achivements" element={<AchivementsPage />} />
              <Route path="/motivation" element={<MotivationPage />} />
            </Routes>
          </PageContainer>
        </GrayscaleProvider> 
      </BrowserRouter>
    </>
  );
}

export default App;