import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./shop/shop.component.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;
