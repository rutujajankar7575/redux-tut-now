const Home = (props) => {
    console.log("Home",props);
    // console.log("state1",props.data);
    console.log("props.data type:", typeof props.data);

    return (
        <div>
        
            <h1>Home Component</h1>
            
            <div className="cart-wrapper">

                <div className='img-wrapper item'>
                    <img src="https://www.ztedevices.com/content/dam/zte-devices/global/products/smartphones/blade/zte-blade-a53/ZTE%20Blade%20A53-front.png"></img>
                </div>

                <div className="text-wrapper item">
                    <span> Samsung A50</span>
                    <span> $10000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button className="add"
                    onClick={()=>props.actionContainer({
                        Name:"Samsung A50",
                        Price:"$10000.00"
                    })}>
                            Add Item
                    </button>
                    {/* jari header container separate asel tari header.js madhil click event varil call honare function he home container madhe ch define hotatta */}
                    <button className="remove"
                    onClick={()=>props.removeToCardHabdler()}>
                        Remove Item
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Home;