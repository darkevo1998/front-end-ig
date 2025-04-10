import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import UserProfile from '../components/Profile/UserProfile';
import MediaList from '../components/Media/MediaList';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, mediaRes] = await Promise.all([
          axios.get('/api/instagram/profile', { withCredentials: true }),
          axios.get('/api/instagram/media', { withCredentials: true })
        ]);
        
        setProfileData(profileRes.data);
        setMediaData(mediaRes.data.data);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserProfile 
        user={user} 
        profileData={profileData} 
        onLogout={logout} 
      />
      <MediaList media={mediaData} />
    </div>
  );
};

export default Dashboard;