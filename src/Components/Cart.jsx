import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <ShoppingCartIcon className="cart" fontSize="large" />
      <div className="products"></div>
    </div>
  );
};

export default Cart;
