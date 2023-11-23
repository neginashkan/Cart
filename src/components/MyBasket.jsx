import ItemInMyBasket from "./ItemInMyBasket"
function MyBasket(props) {
    const ItemsInMyBasket = props.myBasketData.map((item, index) => <ItemInMyBasket productTitle={item.productTitle} productImg={item.productImg} key={index}/>)
    return (
        <div className="MyBasket-container">
            <div className="mybasket-heading">
                <p className="mybasket-label">سبد من</p>
                < img src="/public/icon.png" alt="" className="mybasket-img" />
            </div>
            <div className="ItemsInMyBasket">
                {ItemsInMyBasket}
            </div>
        </div>
    )
}

export default MyBasket
