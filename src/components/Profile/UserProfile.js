import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const UserProfile = ({ user, profileData, onLogout }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <Avatar 
        src={user.profilePicture} 
        alt={user.username} 
        sx={{ width: 80, height: 80, mr: 3 }}
      />
      <Box>
        <Typography variant="h4">{user.username}</Typography>
        {profileData && (
          <>
            <Typography variant="body1">Account Type: {profileData.account_type}</Typography>
            <Typography variant="body1">Media Count: {profileData.media_count}</Typography>
          </>
        )}
        <Button 
          variant="outlined" 
          onClick={onLogout}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;