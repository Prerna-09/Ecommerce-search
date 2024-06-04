import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Card = ({img, title, star, reviews,newPrice, prevPrice}) => {

  return (
   <>
      <div className='card'>
      <img  className="card-img " src={img}/>

      <div className='card-details'>
        <h3 className="card-title">{title}</h3>
        <section className='card-reviews'>
        {star}  {star}  {star}  {star}
        <span className="card-reviews">{reviews}</span>
        </section>
        <div className="last">
        <div className="card-price">
          <h3>{prevPrice}</h3>{newPrice}
        </div>

        <div className="card-shopping">
        <MdOutlineShoppingBag />
        </div>
        </div>
      </div>
      </div>


   </>
  )
}

export default Card