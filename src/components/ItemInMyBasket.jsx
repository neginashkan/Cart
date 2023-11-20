function MyBasket(props) {

    return (
        <div className="MyBasket-containerr">
            <div className="prise-container mybasket" >
                <div className="toman-persian">تومان</div>
                <div className="profit-number cost">999,999,999</div>
            </div>
            <div className="number-of-product">- 1 +</div>
            <div className="product">
                <div className="product-name">{props.productTitle}</div>
                {props.productImg && <img src={props.productImg} alt="" className="product-img" />}
            </div>
        </div>
    )
}

export default MyBasket
