import MyBasket from "./MyBasket"
function MyBaskets() {

    return (
        <div className="MyBaskets-container">
            <MyBasket productTitle={"Product Name Product Name"} productImg={"public/computer.png"} key={0}/>
            <MyBasket productTitle={"(مقدار) + (نام محصول) + (نوع محصول)"} key={0}/>
        </div>
    )
}

export default MyBaskets
