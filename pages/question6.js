// 6. Jewelery store (3p)
// Visa en lista av smycken från apiet:
// https://fakestoreapi.com/products/category/jewelery
// I listan visas title och en liten bild för varje smycke.
// Bilden ska vara högst 300px bred.
// Om man klickar på ett smycke visas dess detaljsida.
// Där kan man se title, description och image (i orginal-storlek).
//
// Display a list of jewelry from the api:
// https://fakestoreapi.com/products/category/jewelry
// The list shows the title and a small image for each piece of jewelry.
// The image must be at most 300px wide.
// If you click on a piece of jewelry, its detail page is displayed.
// There you can see title, description and image (in original size).

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Question6() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await response.json();
      console.log(data);
      setStore(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Question 6</h1>
      <div className='flex flex-col gap-8 p-8 items-start'>
        {store.map((item) => (
          <Link key={item.id} href={'/store/' + item.id}>
            <div className='border rounded hover:outline outline-slate-300 max-w-xs p-4 flex'>
              <h1>{item.title}</h1>
              <img src={item.image} alt='' className='max-w-[100px]' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
