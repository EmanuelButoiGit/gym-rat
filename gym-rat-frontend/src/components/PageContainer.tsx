import {Container} from '@mui/material';

const PageContainer = (props: any) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Container sx={{ backgroundColor: "azure", height: "100vh", width: "95vh" }}>
          {props.children}
        </Container>
      </div>
    );
  };

export default PageContainer;