import React, {  useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const isAuth = useSelector(state=>state.auth.isAuthenticated);
    console.log(isAuth)
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth){
           navigate('/login')
        }
    },[isAuth,navigate])
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected;