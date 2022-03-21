function Aside(){
    return(
        <aside className="aside" id="aside">

        <nav className="aside-navbar" id="aside-navbar">

            <div className="card card-with-no-border card-w-100 card-w-100">
<div className="card-body">
<div className="card-heading card-heading-dflex">
    <h5 className="card-title card-title-m-0" >
        Price Details   
    </h5>
</div>
</div>  
</div>

<div className="card card-with-no-border card-w-100 card-w-100">
<div className="card-footer card-footer-dir-col">
<div className="cart-items-category">
            <span>Price (2 items)</span>
            <span>₹4999</span>
  </div>
<div className="cart-items-category">
    <span>Discount</span>
    <span className="txt-color-green">₹1999</span>
  </div>

  <div className="cart-items-category">
    <span>Delivery Charges</span>
    <span>₹499</span>
  </div>
</div>
</div>

<div className="card card-with-no-border card-w-100">
<div className="card-body">
<div className="card-heading card-heading-dflex">
    <h5 className="card-title card-title-m-0" >
        Total Amount
    </h5>
    <h6 className="card-subtitle card-subtitle-m-0">₹3499</h6>
</div>
</div>

</div>

<div className="card card-with-no-border card-w-100">

<div className="card-footer card-footer-dir-col">

  <div className="cart-items-category">
        <span className="txt-color-green">You will save ₹1999 on this order</span>
  </div>
</div>
</div>

<div className="card card-with-no-border card-w-100">
<button className="btn btn-secondary">
Checkout
</button>
</div>  

</nav>

    </aside>
    )
}

export {Aside};