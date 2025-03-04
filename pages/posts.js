import { PostsContext } from '@/context/PostsContext';
import { useContext } from 'react';

export default function Posts() {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return (
    <div className='flex flex-col gap-8 max-w-xl p-8'>
      {posts.map((post) => (
        <div>
          <h1 className='font-bold'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
