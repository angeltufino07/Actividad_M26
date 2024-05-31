
import axios from "axios";
import { useEffect,useState } from "react";

const useAxios = (url) =>{
       const [response, setResponse] =  useState(null);
       const [loading, setLoading] = useState(true);
       const [error, setErrror] = useState(null);

       useEffect(() => {
            const fetch = async () => {
                try {
                        const res = await axios.get(url);
                        setResponse(res.data);
                        console.log(res.data);

                        setLoading(false);
                    

                } catch (err) {
                   setErrror(err);
                    setLoading(false);

                }
       }
            fetch();

       },[url]);

       return {response, loading, error};

}

export default useAxios;
