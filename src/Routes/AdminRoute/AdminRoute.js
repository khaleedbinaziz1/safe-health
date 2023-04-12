import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const [isAdmin,isAdminLoading] =useAdmin(user?.email);
  const location = useLocation ();
  if(loading || isAdminLoading){
    return <div className="h-[800px] flex justify-center items-center">
        <progress className="progress w-56 margin-auto"></progress>
    </div>
  }
  if(user && isAdmin){
    return children;
  }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

}

export default AdminRoute  