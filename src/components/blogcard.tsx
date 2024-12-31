import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card';
import Image from 'next/image';

interface BlogCardProps {
  post:
  {
    id: string,
    title: string,
    description: string,
    image: string
    date: string
  };
  isDarkBackground: boolean;
}

const Blogcard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <section>
      <Card className=' border-gray-300 border-2 border-solid rounded-lg  shadow-lg hover:shadow-xl transition-shadow duration-300'>

      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={300}
        className='w-full h-72 object-cover rounded-t-lg' />

      <CardTitle className='text-xl font-normal mt-4 text-center'>
        {post.title}
      </CardTitle>
      <br />

      <CardContent className='text-center'>
        <p>{post.description}</p>
      </CardContent>

      <div className='flex flex-col items-center mt-4'>
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published On:{new Date(post.date).toLocaleDateString()}
        </p>
        <a href={`/posts/${post.id}`}
        className={`w-full px-6 text-white bg-blue-700 rounded hover:bg-blue-500 ${isDarkBackground 
        ? 'bg-black hover:bg-red-500' 
        : 'bg-black  hover:bg-red-500' }`}>
          Read More
        </a>
      </div>
      </Card>
      </section>
  )
}

export default Blogcard