import React from 'react';
import { Box, Typography } from '@mui/material';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentList = ({ mediaId, comments, onCommentAdded }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      
      {comments.length === 0 ? (
        <Typography>No comments yet</Typography>
      ) : (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
      
      <CommentForm 
        mediaId={mediaId} 
        onCommentAdded={onCommentAdded} 
      />
    </Box>
  );
};

export default CommentList;