import Input from "../../Components/Input"
import  "../Category/Category.css"




const Category = ({handleChange}) => {
  return (
  <>
    <div className='category'>

       <label className="all">
        <input onChange={handleChange} type="radio" value="" name=""/>
        <span className='checkmark' ></span>All
      </label>


      <h3>Category</h3>

      <div>
     
      <Input 
      handleChange={handleChange}
      value="sneakers"
      title="Sneakers"
      name="test"
      ></Input>

      <Input 
      handleChange={handleChange}
      value="flats"
      title="Flats"
      name="test"
      ></Input>
      </div>


      <Input 
      handleChange={handleChange}
      value="sandals"
      title="Sandals"
      name="test"
      ></Input>

      <Input 
      handleChange={handleChange}
      value="heels"
      title="Heels"
      name="test"
      ></Input>
     
    
    </div>
  </>
  )
}

export default Category