import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Collapse, Box } from '@mui/material';
import CommentList from '../Comments/CommentList';
import axios from 'axios';

const MediaItem = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/instagram/media/${item.id}/comments`, { withCredentials: true });
      setComments(response.data.data || []);
    } catch (err) {
      console.error('Failed to fetch comments:', err);
    }
  };

  const handleToggleComments = () => {
    if (!showComments) {
      fetchComments();
    }
    setShowComments(!showComments);
  };

  return (
    <Card sx={{ mb: 2 }}>
      {item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM' ? (
        <CardMedia
          component="img"
          image={item.media_url}
          alt={item.caption || 'Instagram media'}
        />
      ) : (
        <video controls style={{ width: '100%' }}>
          <source src={item.media_url} type="video/mp4" />
        </video>
      )}
      
      <CardContent>
        {item.caption && (
          <Typography variant="body1" gutterBottom>
            {item.caption}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body2">
            Likes: {item.like_count}
          </Typography>
          <Typography variant="body2">
            Comments: {item.comments_count}
          </Typography>
        </Box>
        
        <Button 
          onClick={handleToggleComments}
          sx={{ mt: 1 }}
        >
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
        
        <Collapse in={showComments}>
          <CommentList 
            mediaId={item.id} 
            comments={comments} 
            onCommentAdded={() => fetchComments()} 
          />
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default MediaItem;