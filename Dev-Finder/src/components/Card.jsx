import React, { useDebugValue } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";

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
                        <IoLocationSharp />

                        {
                            (userData.location) ? 
                            (<p>{userData.location}</p>) :
                            (<p>Not available</p>)
                        }
                    </div>

                    <div>
                        <FaXTwitter />
                        
                            {
                                (userData.twitter_username) ? 
                                (
                                <a href={`https://twitter.com/${userData.twitter_username}`} target='_blank'>
                                    <p>@{userData.twitter_username}</p>
                                </a>
                                ) : 
                                (<p>Not available</p>)
                            }
                    </div>
                </div>

                <div>
                    <div>
                        <BsPersonVcard />

                        {
                            (userData.blog) ? 
                            (
                            <a href={userData.blog} target='_blank'>
                                <p>@{userData.name}</p>
                            </a>
                            ) : 
                            (<p>Not available</p>)
                        }
                    </div>

                    <div>
                        <GoOrganization />

                        {
                            (userData.company) ?
                            (<p>{userData.company}</p>) :
                            (<p>Not available</p>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
