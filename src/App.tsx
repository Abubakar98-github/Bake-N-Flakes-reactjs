 
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

// pages
import Blog from "./pages/Blog";
import Cakes from "./pages/Cakes";
import Cookies from "./pages/Cookies";
import Home from "./pages/Home";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
     <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
