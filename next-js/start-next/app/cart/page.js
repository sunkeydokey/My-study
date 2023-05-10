const Cart = () => {
  const cart = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem product={cart[0]} />
      <CartItem product={cart[1]} />
    </div>
  );
};

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <p>{product}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default Cart;
