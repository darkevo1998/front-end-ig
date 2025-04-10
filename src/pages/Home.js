import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 2,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Welcome to Instagram Integration
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#555',
          marginBottom: 3,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Please{' '}
        <Link
          to="/login"
          style={{
            textDecoration: 'none',
            color: '#3f51b5',
            fontWeight: 'bold',
          }}
        >
          login
        </Link>{' '}
        to view your Instagram profile and media.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: 3,
        }}
        component={Link}
        to="/login"
      >
        Go to Login
      </Button>
    </Container>
  );
};

export default Home;
