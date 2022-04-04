import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import Rooms from "./pages/Rooms/Rooms";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import {useState,useEffect} from "react"
import Info from "./pages/Info/Info";

function App() {
  const [isOpen,setIsopen] = useState(false)
  const toggle = () =>{
    setIsopen(!isOpen)
    console.log(isOpen)
  }
  useEffect(()=>{
    const hideMenu = () =>{
      if(window.innerWidth > 100 && isOpen){
        setIsopen(false)
      }
    };
    window.addEventListener("resize",hideMenu);
    return () =>{
      window.removeEventListener("resize",hideMenu)
    }
  })
  return (
    <div className="App">
    <Header toggle={toggle} />
    <DropdownMenu toggle={toggle} isOpen={isOpen} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/services/:1" element={<Info/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
