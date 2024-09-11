import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({children}) => {

    const token=Cookies.get('token')

    const isLoggedin=token?true:false
  return isLoggedin?<Navigate to='/user_dashboard'/>:children
}

export default PrivateRoutes
