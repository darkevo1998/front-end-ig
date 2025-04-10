import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const InstagramLogin = () => {
  const { loginWithInstagram } = useAuth();

  return (
    <Button
      variant="contained"
      onClick={loginWithInstagram}
      startIcon={<InstagramIcon />}
      sx={{
        backgroundColor: '#E1306C',
        '&:hover': {
          backgroundColor: '#C13584',
        },
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        fontWeight: 'bold',
        textTransform: 'none',
      }}
    >
      Login with Instagram
    </Button>
  );
};

export default InstagramLogin;