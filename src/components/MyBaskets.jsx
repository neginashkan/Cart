import MyBasket from "./MyBasket"
function MyBaskets() {
    const MyBasketsData = [
        [
            {
                productTitle: "ولورانت پوینت ترکیه (دیجیتال کد)",
                productImg: "",
                key: 0
            },
            {
                productTitle: "(مقدار) + (نام محصول) + (نوع محصول)",
                productImg: "",
                key: 1
            }
        ],
        [
            {
                productTitle: "Product Name Product Name",
                productImg: "/public/computer.png",
                key: 2
            },
            {
                productTitle: "(مقدار) + (نام محصول) + (نوع محصول)",
                productImg: "",
                key: 3
            }

        ],
        [
            {
                productTitle: "Product Name Product Name",
                productImg: "/public/computer.png",
                key: 2
            },
            {
                productTitle: "Product Name Product Name",
                productImg: "/public/computer.png",
                key: 2
            }


        ],
    ]
    const MyBaskets = MyBasketsData.map((basket, index) => <MyBasket myBasketData={basket} key={index}/>)
    return (
        <div className="MyBaskets-container">
            {MyBaskets}
        </div>
    )
}

export default MyBaskets
