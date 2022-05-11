import React from 'react';
import { useCart } from 'react-use-cart';
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className='text-center'>Your Cart is empty</h1>;
  return (
    <section>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <h5>Cart ({totalUniqueItems})</h5>
          <table className='table table-hover m-0'>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <td>{item.title}</td>
                      <img src={item.img} alt='hhh' style={{ width: '20%' }} />
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className='btn-info ms-2'
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className='btn-info ms-1'
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <td>Quantity({item.quantity})</td>
                      <button
                        className='btn-danger ms-2'
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-0'>
          <p>total Item {totalItems}</p>
          <h1>tootal price: ${cartTotal}</h1>
        </div>
        <div className='col-auto'>
          <button className='btn-danger m-2' onClick={() => emptyCart()}>
            Clear
          </button>
          <button className='btn-info'>Buy</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
