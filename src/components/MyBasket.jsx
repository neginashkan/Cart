import ItemInMyBasket from "./ItemInMyBasket"
function MyBasket(props) {

    return (
        <div className="MyBasket-container">
            <div className="mybasket-heading">
                <p className="mybasket-label">سبد من</p>
                < img src="/public/icon.png" alt="" className="mybasket-img" />
            </div>
            <div className="ItemsInMyBasket">
                <ItemInMyBasket productTitle={props.productTitle} productImg={props.productImg}/>
                <ItemInMyBasket productTitle={props.productTitle} productImg={props.productImg}/>
            </div>
        </div>
    )
}

export default MyBasket
