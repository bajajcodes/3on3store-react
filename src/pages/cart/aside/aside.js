import { useCartContext } from "context";

function Aside() {
  const { cartState } = useCartContext();
  const { cart, getCartSummary } = cartState;
  const {
    totalOfProductsInCart,
    numberOfProductsInCart,
    discount,
    deliveryCharges,
    totalValueOfCart,
  } = getCartSummary(cart);
  return (
    <aside className="aside" id="aside">
      {cart.length !== 0 && (
        <nav className="aside-navbar" id="aside-navbar">
          <div className="card card-with-no-border card-w-100 card-w-100">
            <div className="card-body">
              <div className="card-heading card-heading-dflex">
                <h5 className="card-title card-title-m-0">Price Details</h5>
              </div>
            </div>
          </div>

          <div className="card card-with-no-border card-w-100 card-w-100">
            <div className="card-footer card-footer-dir-col">
              <div className="cart-items-category">
                <span>{`Price (${numberOfProductsInCart} items)`}</span>
                <span>{`₹${totalOfProductsInCart}`}</span>
              </div>
              {
                discount!==0 &&               
                <div className="cart-items-category">
                <span>Discount</span>
                <span className="txt-color-green">{`₹${discount}`}</span>
              </div>
              }

              <div className="cart-items-category">
                <span>Delivery Charges</span>
                <span>{`₹${deliveryCharges}`}</span>
              </div>
            </div>
          </div>

          <div className="card card-with-no-border card-w-100">
            <div className="card-body">
              <div className="card-heading card-heading-dflex">
                <h5 className="card-title card-title-m-0">Total Amount</h5>
                <h6 className="card-subtitle card-subtitle-m-0">{`₹${totalValueOfCart}`}</h6>
              </div>
            </div>
          </div>

          <div className="card card-with-no-border card-w-100">
            <div className="card-footer card-footer-dir-col">
                {
                  discount !== 0 &&
                  <div className="cart-items-category">
                  <span className="txt-color-green">
                    {`You will save ₹${discount} on this order`}
                  </span>
                </div>
                }
            </div>
          </div>

          <div className="card card-with-no-border card-w-100">
            <button className="btn btn-secondary">Checkout</button>
          </div>
        </nav>
      )}
    </aside>
  );
}

export { Aside };
