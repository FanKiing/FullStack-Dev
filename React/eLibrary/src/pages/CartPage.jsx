import { useDispatch, useSelector } from "react-redux";
import { inc, dec, removeFromCart, clear } from "../features/cart/cartSlice";
import { cartTotal } from "../features/cart/cartSlice";

export default function CartPage() {
  const d = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const total = useSelector(cartTotal);

  if (!items.length)
    return <p className="container">Your cart is empty.</p>;

  return (
    <div className="container">
      <h2 className="mb-4">Your Cart</h2>

      <table className="table table-bordered">
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>${i.price}</td>
              <td>
                <button className="btn btn-sm btn-dark" onClick={() => d(dec(i.id))}>-</button>
                <span className="px-3">{i.quantity}</span>
                <button className="btn btn-sm btn-dark" onClick={() => d(inc(i.id))}>+</button>
              </td>
              <td>${i.price * i.quantity}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => d(removeFromCart(i.id))}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="btn btn-outline-danger mt-3" onClick={() => d(clear())}>
        Clear Cart
      </button>
    </div>
  );
}
