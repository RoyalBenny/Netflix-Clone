import "./App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./WelcomePage/Hero";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import DetailPage from "./DetailPage/DetailPage";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import SignIn from "./SignIn/SignIn";

function App() {

  const [login,setLogin] = useState(localStorage.getItem("isLoggedIn"))
  useEffect(()=>{
    
  },[login])
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/navbar/com" element={<Nav/>}/>
          <Route path="/Hero" element={<Hero/>} />
          <Route path='/login' element={<SignIn/>}/>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home/>} />
            {/* <ProtectedRoute
              index
              component={<Home/>}
            />
            <ProtectedRoute
              exact path="/detail/:id"
              component={<DetailPage/>}
            /> */}
            <Route exact path="/detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
