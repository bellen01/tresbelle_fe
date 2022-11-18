import React from 'react'
import { useParams } from 'react-router-dom';

function ProfilePage() {
    let { id } = useParams();
    return (
        // <div>Welcome {id}</div>
        <div>Welcome</div>
    )
}

export default ProfilePage