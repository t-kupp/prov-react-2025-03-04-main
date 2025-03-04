import { createContext, useEffect, useState } from 'react';

export const PostsContext = createContext();

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);

      setPosts(data);
    }
    fetchData();
  }, []);

  return <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>;
}
