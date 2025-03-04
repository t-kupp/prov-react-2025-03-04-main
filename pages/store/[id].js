import Link from 'next/link';

export async function getServerSideProps({ params }) {
  const response = await fetch('https://fakestoreapi.com/products/' + params.id);
  const item = await response.json();

  return { props: { item } };
}

export default function ItemPage({ item }) {
  return (
    <div className='p-8 max-w-4xl'>
      <Link className='border p-2 rounded hover:bg-slate-200' href={'/question6'}>
        ← Back
      </Link>
      <h1 className='font-bold mb-2 mt-8'>{item.title}</h1>
      <p className='mb-8'>{item.description}</p>
      <img src={item.image} alt='' />
    </div>
  );
}
