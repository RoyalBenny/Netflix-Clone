import "./App.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./WelcomePage/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import DetailPage from "./DetailPage/DetailPage";

function App() {
  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero/>} />
            <Route exact path="/detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
