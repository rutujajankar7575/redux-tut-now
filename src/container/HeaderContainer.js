import { connect } from "react-redux"
import Header from "../components/Header"
import {removetocard} from "../Services/actions/actions"
const mapStateToProp = state =>({
    data:state.CardItem
})
const mapdispatchtoProp = dispatch =>({
   
       
})
export default connect(mapStateToProp,mapdispatchtoProp)(Header)
