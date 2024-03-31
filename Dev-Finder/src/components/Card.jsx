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
        <div className='flex flex-row bg-orange-300 md:relative w-[full]'>

            <div className='mx-auto'>
                <img 
                className="aspect-square rounded-full w-[240px] h-[240px] z-[25]"
                src={userData.avatar_url}
                />
            </div>

            <div className='details flex flex-col gap-y-3 p-4 max-w-[70%]'>
                <div className='flex flex-row justify-between '>
                    <div className='Name-div'>
                        <p className='text-2xl font-bold font-inter'>{userData.name}</p>
                        <a href={userData.html_url} target='_blank'
                        className='underline text-blue-600'>
                            <p>@{userData.login}</p>
                        </a>
                    </div>

                    <div className='font-inter font-medium'>
                        <p>Joined {formatDate(userData.created_at)}</p>
                    </div>
                </div>

                <div className='About-div'>
                    <p className='font-inter font-medium'>{userData.bio}</p>
                </div>

                <div className='Repo-div w-[80%] flex flex-row justify-around bg-gray-50'>
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

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                        <IoLocationSharp className='text-base font-medium'/>

                        {
                            (userData.location) ? 
                            (<p className='text-base font-medium'>{userData.location}</p>) :
                            (<p className='text-base font-medium'>Not available</p>)
                        }
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <FaXTwitter className='text-base font-medium'/>
                        
                            {
                                (userData.twitter_username) ? 
                                (
                                <a href={`https://twitter.com/${userData.twitter_username}`} target='_blank'>
                                    <p className='text-base font-medium'>@{userData.twitter_username}</p>
                                </a>
                                ) : 
                                (<p className='text-base font-medium'>Not available</p>)
                            }
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center space-x-2'>
                        <BsPersonVcard className='text-base font-medium'/>

                        {
                            (userData.blog) ? 
                            (
                            <a href={userData.blog} target='_blank'>
                                <p className='text-base font-medium'>@{userData.name}</p>
                            </a>
                            ) : 
                            (<p className='text-base font-medium'>Not available</p>)
                        }
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <GoOrganization className='text-base font-medium'/>

                        {
                            (userData.company) ?
                            (<p className='text-base font-medium'>{userData.company}</p>) :
                            (<p className='text-base font-medium'>Not available</p>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
