import { Navigate } from "react-router-dom";
import useApi from "../../ContextApi/useApi";
import PropTypes from "prop-types"
const PrivateRouter = ({children}) => {
    const {user, loader} = useApi()
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"}/>
};
PrivateRouter.propTypes ={
    children:PropTypes.node
}
export default PrivateRouter;