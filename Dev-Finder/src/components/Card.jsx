import React, { useDebugValue } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";
import './Card.css';

function Card({userData,darkMode, setDarkMode}) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    return (
        <div className={`flex flex-row relative w-[full] rounded-3xl p-5 shadow-xl  ${darkMode ? 'bg-slate-900' : 'bg-gray-100'}`} id='card-main-div'>

            <div className='mx-auto w-[30%] flex justify-center mt-5 card-img-div'>
                <img 
                className="aspect-square absolute rounded-full w-[180px] h-[180px] transition-all ease-in-out delay-150 transform hover:shadow-2xl" 
                src={userData.avatar_url}
                />
            </div>

            <div className='flex flex-col gap-y-4 p-4 w-[70%] ' id='card-details-div'>
                <div className={`flex flex-row justify-between ${darkMode ? 'text-slate-300' : 'text-black'}`}
                id='name-info-div'>
                    <div className='Name-div'>
                        <p className={`text-2xl font-bold font-inter`}>{userData.name}</p>
                        <a href={userData.html_url} target='_blank'
                        className='underline text-blue-600'>
                            <p>@{userData.login}</p>
                        </a>
                    </div>

                    <div className='font-inter font-medium'>
                        <p>Joined {formatDate(userData.created_at)}</p>
                    </div>
                </div>

                <div className={`${darkMode ? 'text-slate-300' : 'text-black'} About-div`}>
                    <p className={`font-inter font-medium`}>{userData.bio}</p>
                </div>

                <div className={`w[100%] flex justify-center align-center' id='repo-top-div`}>

                    <div className={`${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white'} repo-div w-[80%] flex flex-row justify-around align-center bg-gray-50 p-3 rounded-xl shadow-md`} id='repo-info'>

                        <div className='text-center'>
                            <p className='font-poppins font-medium text-md'>Repos</p>
                            <p className='font-inter font-medium text-md'>{userData.public_repos}</p>
                        </div>

                        <div className='text-center'>
                            <p className='font-poppins font-medium text-md'>Followers</p>
                            <p className='font-inter font-medium text-md'>{userData.followers}</p>
                        </div>

                        <div className='text-center'>
                            <p className='font-poppins font-medium text-md'>Following</p>
                            <p className='font-inter font-medium text-md'>{userData.following}</p>
                        </div>
                    </div>
                </div>


                <div className={`other-top-div`}>
                    <div className={`${darkMode ? 'text-slate-300' : 'text-black'} flex flex-row justify-between`} id='other-div'>

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

                    <div className={`${darkMode ? 'text-slate-300' : 'text-black'} flex flex-row justify-between`}  id='other-div'>
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

        </div>
    )
}

export default Card
