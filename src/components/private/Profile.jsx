import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        document.title = "My Profile";
      }, []);
    return (
        <div>
            <h1>My profile</h1>
        </div>
    );
};

export default Profile;