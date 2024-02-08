import PageContainer from './components/PageContainer';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MotivationPage from './components/MotivationPage/MotivationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageContainer>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" />
            <Route path="/achivements" />
            <Route path="/motivation" element={<MotivationPage />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;