import { Box, Container, Typography } from '@mui/material';

const UnauthorizePage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          mt: '2rem',
          height: '15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h3'
          component='h3'
          sx={{ color: '#1f1e1e', fontWeight: 500 }}
        >
          Página não autorizada!
        </Typography>
      </Box>
    </Container>
  );
};

export default UnauthorizePage;
