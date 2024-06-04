
import "../Sidebar/Category/Category.css"


const Input = ({handleChange, value, title, name, color}) => {
  return (
   <>
       <div className='category-labels'>
      <label className='sidebar-label'>
        <input  onChange={handleChange} type="radio" value={value} name={name}/>
        <span className='checkmark' style={{backgroundColor:color}}></span>
        {title}
      </label>
      </div>
   </>
  )
}

export default Input
