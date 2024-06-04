import Buttons from "../Components/Buttons"
import "./Recommended.css"

const Recommended = ({handleClick}) => {
  return (
   <>
   <div className="recommend">
  
    <h1>Recommended</h1>

    <div className="links-recomm">

     
      
      <Buttons className="btn-recomm" onClickHandler={handleClick} value="Nike" title="All Products"></Buttons>
      <Buttons  className="btn-recomm" onClickHandler={handleClick} value="Nike" title="Nike"></Buttons>
      <Buttons  className="btn-recomm" onClickHandler={handleClick} value="Adidas" title="Adidas"></Buttons>
      <Buttons  className="btn-recomm" onClickHandler={handleClick} value="Puma" title="Puma"></Buttons>
      <Buttons  className="btn-recomm" onClickHandler={handleClick} value="Vans" title="Vans"></Buttons>
    </div>


   </div>
     
   </>
  )
}

export default Recommended