import "./App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./WelcomePage/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailPage from "./DetailPage/DetailPage";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";

function App() {
  const login = localStorage.getItem("isLoggedIn")
  useEffect(()=>{
    
  },[login])
  return (
    <div className="app">
      {localStorage.getItem("isLoggedIn") === 'true' && < Nav />}
      <BrowserRouter>
        <Routes>
          <Route path="/Hero" element={<Hero/>} />
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
      <Footer />
    </div>
  );
}

export default App;
