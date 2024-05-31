import "./styles.css";
import whats_logo from '../assets/whatsapp.png';
import face_logo from "../assets/facebook_Logo.png";
import ig_logo from "../assets/instagram.png";
import x_logo from "../assets/logo_x.png";
import yt_logo from "../assets/youtube_logo.png";


const FooterDes = () => {

    return (
        <footer>
 
        <section class="logos">
            <img src={whats_logo} alt="logo de Whatsapp"/>
              
            <img src={face_logo} alt="logo de Facebook"/>
            
            <img src={ig_logo} alt="logo de instagram" />
            
            <img src={x_logo} alt=" logo de x" /> 
            
            <img src={yt_logo} alt="logo de Youtube" /> 
        </section>
  
    
        <section class="menu">
          <a href="#">Mapa del Sitio</a>
          <a href="#" >Contacto</a>
          <a href="#">Noticias</a>
          <a href="#" >Politica de Provacidad</a>
        </section>

      
  
    </footer>
         
    ) 
    
}
export default FooterDes;