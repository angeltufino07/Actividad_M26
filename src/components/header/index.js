import "./styles.css";
import ImgLogo from "../assets/logo_react.png";
import { Link } from "react-router-dom";

const Header = () => {

    return (
         <header>
            <img className="logo_react" src={ImgLogo} alt="logo de react"/>
             <h1 >REACT III</h1>
             <nav> 
                  <Link to="/">Home</Link>
                  <Link to="ID">ID</Link>
                  <Link to="Width">Width</Link>
             
             </nav>
         </header>

    ) 
}

export default Header;
