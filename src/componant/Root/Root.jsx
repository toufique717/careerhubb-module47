import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navlink from "../Navlink/Navlink";

 

const Root = () => {
    return (
        <div>

            <Navlink></Navlink>
            <Outlet></Outlet>
            <Footer></Footer>
 
        </div>
    );
};

export default Root;