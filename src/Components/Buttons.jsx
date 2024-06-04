import "../Recommended/Recommended.css"

const Buttons = ({onClickHandler, value, title}) => {
  return (
   <button className='button-recommended' onClick={onClickHandler} value={value} >{title}</button>
  )
}

export default Buttons