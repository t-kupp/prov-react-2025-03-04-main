// 2. Shopping cart (3p)
// Visa innehållet i shoppingCart genom att rendera en komponent ShoppingItem
// för varje objekt i shoppingCart.
// ShoppingItem ska visa namnet och priset på varan. amount (antal) ska visas i ett
// input-fält. När man ändrar värdet i input-fältet ska shoppingCart uppdateras
// med det nya värdet.
// Under shoppinglistan ska det stå total price, med det totala priset för alla
// varor i shoppingCart.
//
// Display the contents of the shoppingCart by rendering a ShoppingItem component
// for each item in shoppingCart.
// ShoppingItem should display the name and price of the item. amount should appear in one
// input field. When changing the value in the input field, the shoppingCart must be updated
// with the new value.
// Below the shopping list it should say total price, with the total price for everyone
// items in shoppingCart.

import { useEffect, useState } from 'react';

const initialShoppingCart = [
  { name: 'Apple', price: 3, amount: 1, id: 1 },
  { name: 'Banana', price: 2, amount: 1, id: 2 },
  { name: 'Cherry', price: 3, amount: 1, id: 3 },
  { name: 'Durian', price: 4, amount: 1, id: 4 },
  { name: 'Eggplant', price: 5, amount: 1, id: 5 },
];

export default function Question2() {
  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    shoppingCart.map((item) => {
      total += item.price * item.amount;
    });
    setTotalAmount(total);
  }, [shoppingCart]);

  function handleChange(id, value) {
    const updatedShoppingCart = shoppingCart.map((item) => {
      return item.id == id ? { ...item, amount: parseInt(value) } : item;
    });
    setShoppingCart(updatedShoppingCart);
    console.log(updatedShoppingCart);
  }

  return (
    <div>
      <h1>Question 2</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item) => {
            return <ShoppingItem key={item.id} item={item} handleChange={handleChange} />;
          })}
        </tbody>
      </table>
      <p className='font-bold'>Total: {totalAmount}€</p>
    </div>
  );
}

function ShoppingItem({ item, handleChange }) {
  return (
    <tr className=''>
      <td className='p-1'>{item.name}</td>
      <td className='p-1'>{item.price}€</td>
      <td className='p-1'>
        <input
          className='w-12 border pl-1'
          type='number'
          defaultValue={item.amount}
          onChange={(e) => handleChange(item.id, e.target.value)}
        ></input>
      </td>
    </tr>
  );
}
