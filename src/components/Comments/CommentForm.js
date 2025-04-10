import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const CommentForm = ({ mediaId, onCommentAdded }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsSubmitting(true);
    try {
      await axios.post(
        `/api/instagram/media/${mediaId}/comments`,
        { message },
        { withCredentials: true }
      );
      setMessage('');
      onCommentAdded();
    } catch (err) {
      console.error('Failed to post comment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={2}
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add a comment..."
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting || !message.trim()}
        sx={{ mt: 1 }}
      >
        Post Comment
      </Button>
    </Box>
  );
};

export default CommentForm;