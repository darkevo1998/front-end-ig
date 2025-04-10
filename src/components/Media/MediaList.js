import React, { useState } from 'react';
import MediaItem from './MediaItem';
import { Box, Typography } from '@mui/material';

const MediaList = ({ media }) => {
  if (!media || media.length === 0) {
    return <Typography>No media found</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Your Instagram Media
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {media.map((item) => (
          <MediaItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default MediaList;