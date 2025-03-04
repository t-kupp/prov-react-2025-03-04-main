// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.
//
// Get posts from: https://jsonplaceholder.typicode.com/posts
// Save posts in context.
// Create a link to the /posts page and display the list of posts there.
// for each entry `title` and `body` should be displayed.

import Link from 'next/link';

export default function Question4() {
  return (
    <div>
      <h1 className='mb-2'>Question 4</h1>
      <Link className='border rounded p-2 hover:bg-slate-200' href={'/posts'}>
        Posts
      </Link>
    </div>
  );
}
