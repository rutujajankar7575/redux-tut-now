import {connect} from "react-redux"
import Home from '../components/Home';
import {addtocard,removetocard} from "../Services/actions/actions"


const mapStateToProp = state =>({
    //yethe reducer ch name (CardItem) lihaych mg as a array pass honar home component madhe
    // jar reducer ch name lihil nahi tr as a object janar home component madhe  mg lenth property use karat yenar nahi
data:state.CardItem
})

const mapdispatchtoProp = dispatch =>({
    actionContainer : data =>dispatch(addtocard(data)),
    removeToCardHabdler: data => dispatch(removetocard(data))
})
export default connect(mapStateToProp,mapdispatchtoProp)(Home)
// export default Home;