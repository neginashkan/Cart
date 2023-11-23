import ShoppingCartCost from "./ShoppingCartCost"
import MyBaskets from "./MyBaskets"
function Cart() {

    return (
        <div className="cart-container - flex w-full justify-center mt-[2em] bg-[#000] mb-[2em] [@media(max-width:900px)]:flex-col">
            <ShoppingCartCost profit={"999,999,999"} totalShopping={"999,999,999"} totalCost={"999,999,999"} key={0}/>
            <MyBaskets key={0}/>
        </div>
    )
}

export default Cart
