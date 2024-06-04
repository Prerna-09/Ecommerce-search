import "./Sidebar.css"
import { MdShoppingCartCheckout } from "react-icons/md";
import logo from "../assets/logo.jpg"
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({handleChange}) => {
 // console.log(handleChange)
  return (
    <>

    <div className="sidebar">

        <div className="logo">

       <img src={logo} alt="logo"/>

        </div>
        <div className="sidebar-parts">

        <Category  handleChange={handleChange} />
        <Price    handleChange={handleChange}  />
        <Colors   handleChange={handleChange} />
        </div>

        
    </div>


    </>
  )
}

export default Sidebar