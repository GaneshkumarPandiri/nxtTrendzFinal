// Write your code here

import './index.css'

const CartSummary = props => {
  const {cartList} = props

  const totalBillAmountList = cartList.map(item => {
    const {quantity, price} = item
    return quantity * price
  })
  let totalAmount = 0
  for (let i = 0; i < totalBillAmountList.length; i += 1) {
    totalAmount += totalBillAmountList[i]
  }
  return (
    <div className="cart-summary-card">
      <h1 className="price">
        Order Total: <span className="amount">Rs {totalAmount}/-</span>
      </h1>
      <p className="items">{cartList.length} Items in cart</p>
      <button type="button" className="checkout-button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
