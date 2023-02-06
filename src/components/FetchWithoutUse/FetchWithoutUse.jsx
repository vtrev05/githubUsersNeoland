import React, { useState } from 'react'

const FetchWithoutUse = () => {
    //Estado para almacenar lo que escribimos en el input
    const [userName, setUsername] = useState('')

    //estado para determinar si tenemos un usuario ya elegido
    const [userChosen, setUserChosen] = useState(false)

    //estado para almacenar toda la info del usuario seleccionado
    const [user, setUser] = useState({})


    const getResponse = () => {
        fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((res) => {
            setUser({
                name: userName,
                alias: res.name,
                image: res.avatar_url,
                dateCreate: res.created_at,
                followers: res.followers,
                repos: res.public_repos
            })
            setUserChosen(true)
        })
       
    }
    


  return (
    <div>
        <input type="text" onChange={(e)=> setUsername(e.target.value)}/>
        <button onClick={getResponse}>Click para ver info</button>
        {userChosen ? (
            <div>
                <h1>{user.name}</h1>
                <h2>{user.alias}</h2>
                <img src={user.image} alt={user.name}/>
                <h3>{user.dateCreate}</h3>
                <h3>Followers: {user.followers}</h3>
                <h3>Public repos: {user.repos}</h3>
            </div>
        ): (
            ''
        )}
    </div>
  )
}

export default FetchWithoutUse