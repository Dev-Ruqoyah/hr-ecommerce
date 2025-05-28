import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Header/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
      
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
