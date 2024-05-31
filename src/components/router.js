import { Route, Routes } from "react-router-dom";

import FooterDes from "./footer/index";

export const RouterF = () =>{

return (
        <Routes>
            <Route path="/footer" element={<FooterDes/>}/>
        </Routes>

)
}
