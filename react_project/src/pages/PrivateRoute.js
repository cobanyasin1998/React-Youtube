import { Navigate } from "react-router-dom";
import { useAuth } from "../context/RouteContext";

export default function PrivateRoute({ children }) {
  
    const {user} = useAuth()
    if(!user){
        return <Navigate to="/auth/login" />
    }
  
    return children;
}
