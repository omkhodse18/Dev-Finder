import React, { useDebugValue } from 'react'

function Card({userData}) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    return (
        <div>
            <>card</>
            <div className='img-div'>
                <img src={userData.avatar_url}/>
            </div>

            <div className='details'>
                <div>
                    <div className='Name-div'>
                        <p>{userData.name}</p>
                        <a href={userData.html_url} target='_blank'>
                            <p>@{userData.login}</p>
                        </a>
                    </div>

                    <div>
                        <p>Joined {formatDate(userData.created_at)}</p>
                    </div>
                </div>

                <div className='About-div'>
                    <p>{userData.bio}</p>
                </div>

                <div className='Repo-div'>
                    <div>
                        <p>Repos</p>
                        <p>{userData.public_repos}</p>
                    </div>

                    <div>
                        <p>Followers</p>
                        <p>{userData.followers}</p>
                    </div>

                    <div>
                        <p>Following</p>
                        <p>{userData.following}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Location</p>
                        <p>{userData.location}</p>
                    </div>

                    <div>
                        <p>Twitter</p>
                        <p>{userData.twitter}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
