import { BrowserRouter,Routes,Route } from "react-router-dom";
import Carousel1 from "./pages/Carousel1";
import Carousel2 from "./pages/Carousel2";
import Start from "./pages/Start";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start/>}/>
          <Route path="/carousel1" element={<Carousel1/>}/>
          <Route path="/carousel2" element={<Carousel2/>}/>
          <Route path="/modal" element={<ModalPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
