'use client';
import React from 'react'
import PostCard from '../components/PostCard'
import LoggedInUserCard from '../components/LoggedInUserCard'
const Page = () => {
    const userPosts = [
        {
          userImage: '/images/user1.jpg',
          userName: 'John Smith',
          userUniversity: 'Stanford University',
          postTime: '1 hour ago',
          content: 'Had a great time working on the latest project! Learned so much about React and Next.js.',
        },
        {
          userImage: '/images/user2.jpg',
          userName: 'Emily Johnson',
          userUniversity: 'Massachusetts Institute of Technology',
          postTime: '3 hours ago',
          content: 'Just finished my summer internship. It was an amazing experience, and I can’t wait to apply what I learned in my next role.',
        },
        {
          userImage: '/images/user3.jpg',
          userName: 'Michael Brown',
          userUniversity: 'University of California, Berkeley',
          postTime: '5 hours ago',
          content: 'Networking with industry professionals has been so valuable. It’s incredible how much you can learn just by asking questions.',
        },
      ];
      

  return (
    <div className='flex justify-center'>
        <div className='w-1/4 p-4'>
        <LoggedInUserCard userName='John Smith' userUniversity='Stanford University' userProfilePicture=''/>
        </div>
        <div className='w-3/4'>
        <div className='px-12 pt-4'>
    {userPosts.map((post, index) => (
        <PostCard key={index} {...post}/>
    ))}
    </div>
    </div>
    </div>
  )
}

export default Page
