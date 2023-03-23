import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./assets/css/index.css";
import MainRoute from "./route/MainRoute";
import { useLocation } from "react-router-dom";
import Login from "./page/Login";


function App() {
  const location = useLocation();

  return (
    <div className="App text" style={{marginTop:"0px", minHeight:"100vh"}}>
      {
        location.pathname === "/login" || location.pathname === "/register" || location.pathname.includes("list-vlog/watch/")? 
          ( <MainRoute /> ) : 
       
          (  <div style={{position:"relative"}}> 
              <Header />
              <div style={{marginBottom:"90px"}}></div>
              <MainRoute />
              <Footer />
            </div>)
          
      }
    </div>
  );
}

export default App;
