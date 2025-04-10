import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Comment = ({ comment }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        {comment.username}
      </Typography>
      <Typography variant="body1">{comment.text}</Typography>
      <Typography variant="caption" color="text.secondary">
        {new Date(comment.timestamp).toLocaleString()}
      </Typography>
    </Paper>
  );
};

export default Comment;