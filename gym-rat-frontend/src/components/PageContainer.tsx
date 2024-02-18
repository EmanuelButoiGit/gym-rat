import { Container } from '@mui/material';
import Footer from './Footer';

const PageContainer = ( props: any ) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container component="main" 
        sx={{ flex: 1, 
            backgroundColor: "azure", 
            paddingY: 2, 
            minHeight: "100%", 
            width: "95vh", 
            overflow: "auto" }}>
        {props.children}
      </Container>
      <Footer />
    </div>
  );
};

export default PageContainer;
