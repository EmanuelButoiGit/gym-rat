import PageContainer from './components/PageContainer';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MotivationPage from './components/MotivationPage/MotivationPage';
import AchivementsPage from './components/AchivementsPage/AchivementsPage';
import { SnackbarProvider } from 'notistack';
import HistoryPage from './components/HistoryPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <SnackbarProvider> 
            <PageContainer>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/achivements" element={<AchivementsPage />} />
                <Route path="/motivation" element={<MotivationPage />} />
              </Routes>
            </PageContainer>
          </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;