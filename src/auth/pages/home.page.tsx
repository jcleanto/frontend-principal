import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ minHeight: '100vh', pt: '5rem' }}
    >
      <Box
        maxWidth='md'
        sx={{
          height: '15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
        }}
      >
        <Typography
          variant='h3'
          component='h3'
          sx={{ color: '#1f1e1e', fontWeight: 500 }}
        >
          Bem vindo, acesse o menu ao lado!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
