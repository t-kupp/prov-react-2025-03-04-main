import PostsProvider from '@/context/PostsContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}
