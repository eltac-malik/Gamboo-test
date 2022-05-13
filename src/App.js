import './App.css';
import React,{useEffect} from 'react'
import Layout from './Pages/Layout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes, Route,Navigate,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const navigate = useNavigate();
  const data = useSelector(state => state.user.auth)
  
  useEffect(()=>
  {
    if (localStorage.getItem("currentData")!== null && data === true)
    {
    navigate("/layout")  
    }
    else if(localStorage.getItem("currentData")!== null && data === false)
    {
      navigate("/login")
    }
    else if(localStorage.getItem("currentData")== null && data === "")
    {
      navigate("/register")
    }
  },[])


  return (
    <div className="App">
        <Routes>
           <Route path="/" element={<Navigate replace to="/login"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
    </div>
  );
}

export default App;
