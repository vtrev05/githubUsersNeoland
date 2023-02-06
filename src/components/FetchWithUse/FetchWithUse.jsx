import React, { useEffect, useState } from 'react'

const FetchWithUse = () => {
    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=> {
        const getUserInfo = async () => {
            const userInfoRaw = await fetch(
                `https://api.github.com/users/${username}`);
            const userInfoRawToJson = await userInfoRaw.json()

            return{...userInfoRawToJson}
        }
        getUserInfo().then((user)=> setUserInfo([user]))
    }, [username])


  return (
    <div>
         <input value={username} onChange={(e) => setUsername(e.target.value)} />
        {userInfo.map((user)=> (
            <li key={user.id}>
                <h1>{user.username}</h1>
                <img src={user.avatar_url} alt={user.username}/>
                <h3>{user.created_at}</h3>
                <h3>Followers: {user.followers}</h3>
                <h3>Public repos: {user.public_repos}</h3>
            </li>
        ))}
    </div>
  )
}

export default FetchWithUse