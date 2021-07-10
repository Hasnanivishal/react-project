import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const UnAuthorizedLink = ({ component: Component, ...rest }) => {
    const userInfo = useSelector((state) => state.user);

    return (
        <Route {...rest} 
         render= {
             () => {
                return userInfo == null ? <Component /> : <Redirect to="/home" />
             }
         } />
    );
}

export default UnAuthorizedLink;