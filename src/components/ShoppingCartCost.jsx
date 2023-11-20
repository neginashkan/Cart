function ShoppingCartCost() {

    return (
        <div className="ShoppingCartCost-container">
            <div className="totalShopping calculate-style">
                <div className="prise-container" >
                    <div className="toman-persian">تومان</div>
                    <div className="totalShopping-number cost">999,999,999</div>
                </div>
                <p className="ShoppingCartCost-text">جمع کل سبد خرید</p>
            </div>
            <div className="profit-container calculate-style">
                <div className="prise-container" >
                    <div className="toman-persian">تومان</div>
                    <div className="profit-number cost">999,999,999</div>
                </div>
                <p className="ShoppingCartCost-text blue">سود شما از خرید</p>
            </div>
            <div className="totalCost prise-container">
                <div className="toman-persian">تومان</div>
                <div className="cost">999,999,999</div>
            </div>
            <div className="discount-container">
                <div className="discount-btn">
                    <button className="sign-btn">ثبت</button>
                    <input className="sign-input" type="text" name="" id="" />
                </div>
                <p className="ShoppingCartCost-text">کد تخفیف داری؟</p>
            </div>
            <button className="ShoppingCartCost-bule-button">انتخاب آدرس و پرداخت</button>
        </div>
    )
}

export default ShoppingCartCost
