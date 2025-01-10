import { Navigate, useLocation } from "react-router-dom";
<<<<<<< HEAD

import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading }= useAuth(); 
=======
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = (children) => {
    const [user, loading] = useAuth(); 
>>>>>>> 4b8ba28dfb22ffe689901f6275e67a12dde15da7
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;