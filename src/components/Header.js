const Header = (props) => {
    return (
        <div className="add-to-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/79/79467.png"/>

            <span className="cart-count" >
                {props.data.length}
            </span>        
        </div>
    )
}
export default Header;