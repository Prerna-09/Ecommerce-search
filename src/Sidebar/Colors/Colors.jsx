import Input from "../../Components/Input"
import "../Colors/Colors.css"

const Colors = ({handleChange}) => {
  return (
   <>


<div className='colors'>

<h3>Colors</h3>

<div>





<Input 
handleChange={handleChange}
value="black"
title="Black"
name="test1"
color="black"
/>

<Input 
handleChange={handleChange}
value="red"
title="Red"
name="test1"
color="red"
/>

<Input 
handleChange={handleChange}
value="green"
title="Green"
name="test1"
color="green"
/>

<Input 
handleChange={handleChange}
value="white"
title="White"
name="test1"
color="white"
/>

</div>


</div>
   </>
  )
}

export default Colors