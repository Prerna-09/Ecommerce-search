import "./Navigation.css";
import { FaRegHeart,  FaRegUser  } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const Navigation = ({ query, handleInputChange }) => {
  return (
  <>
    <div className="nav">

      <input type="text" className="text"   onChange={handleInputChange}
          value={query}  placeholder="Enter your search shoes..."></input>


     <div className="icons">
     
      <FaRegHeart className="first"/>
      <FaCartPlus className="first"/>
      <FaRegUser  className="first"/>
      </div>

      
    </div>
  </>
  )
}

export default Navigation