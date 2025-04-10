import React from 'react';
import InstagramLogin from '../components/Auth/InstagramLogin';
import { Box, Typography, Container, Button } from '@mui/material';

const Login = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 3,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Login with Instagram
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <InstagramLogin />
        <Button
          variant="outlined"
          color="primary"
          sx={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: 3,
            borderColor: '#3f51b5',
            color: '#3f51b5',
            '&:hover': {
              backgroundColor: '#3f51b5',
              color: '#fff',
            },
          }}
          component="a"
          href="/"  // Adjust this if you have a specific redirect URL after login
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
