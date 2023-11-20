import ShoppingCartCost from "./ShoppingCartCost"
import MyBaskets from "./MyBaskets"
function Cart() {

    return (
        <div className="cart-container">
            <ShoppingCartCost profit={"999,999,999"} totalShopping={"999,999,999"} totalCost={"999,999,999"} key={0}/>
            <MyBaskets key={0}/>
        </div>
    )
}

export default Cart
