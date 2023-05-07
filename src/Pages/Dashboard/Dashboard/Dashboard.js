import React, { useContext } from 'react'
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email)
  const navigate = useNavigate();
  if(isAdmin) {

         navigate('/');
    
  
  }
  return (
    <div>
 <h1>hello</h1>
      </div>
  )
}

export default Dashboard