import Welcome from './components/Welcome';
import PageContainer from './components/PageContainer';
import RecordsManager from './components/RecordsManager';

function App() {
  return (
    <>
      <PageContainer>
        <Welcome />
        <RecordsManager />
      </PageContainer>
    </>
  );
}

export default App;