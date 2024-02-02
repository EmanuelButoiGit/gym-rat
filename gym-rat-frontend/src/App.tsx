import Welcome from './components/Welcome';
import Record from './components/Record';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <>
      <PageContainer>
        <Welcome />
        <Record />
      </PageContainer>
    </>
  );
}

export default App;