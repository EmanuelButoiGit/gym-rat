import Welcome from './components/Welcome';
import PageContainer from './components/PageContainer';
import RecordsManager from './components/RecordsManager';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <PageContainer>
        <Navigation />
        <Welcome />
        <RecordsManager />
      </PageContainer>
    </>
  );
}

export default App;