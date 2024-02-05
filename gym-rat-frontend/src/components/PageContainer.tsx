import { Container } from '@mui/material';

const PageContainer = (props: any) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container sx={{ backgroundColor: "azure", minHeight: "100vh", width: "95vh", overflow: "auto" }}>
                {props.children}
            </Container>
        </div>
    );
};

export default PageContainer;