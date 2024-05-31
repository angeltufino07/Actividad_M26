

import useAxios from "../components/axios/index";
import Characteristics from "./characteristics/index";
import Header from "./header";
import './styles.css';
import { RouterF } from "./router";


const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};
   /// agregar ciclo for para genera nombre delgato
const App = () =>{
        const {response,loading,error} = useAxios("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_5U0J67AazzezsNyskpdenXWLmoAmnTBWSUTSfMxJjGzmtuXVROVIv5PIiTra54W4", requestOptions);
    console.log();

    return (
         <> 

         <Header>

         </Header>
         <main className="specs">
        {
                    //SHORT CIRCUIT & AND OPERATOR
                    response !==null && !loading ?
                    response.map(comment => {
                            const {id,width,breeds,url}= comment;
                            return <Characteristics key={id} url={url} id={id} breeds={breeds[0].name} width={width}  />                        
                    }) : <p>loading....</p>          
                }
        </main> 
   <RouterF/>
        </>
    )
}       

export default App;

 
  


