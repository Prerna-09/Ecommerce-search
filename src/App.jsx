import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import Product from './Products/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import products from './db/data'
import Card from './Components/Card'

const App = () => {
  

 
  const[selectCategory, setselectCategory]= useState(null)
  const[query, setquery] = useState("")


   //.........input filter.............

  const handleInputChange = event =>{
    setquery(event.target.value)
  }
 
  const filterditems = products.filter((product)=>
   product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )


  // ............Radio filter.......

  const handleChange = (event) =>{
     setselectCategory(event.target.value)
  }



  //..............buttons filter.....

  const handleClick = (event) =>{
    setselectCategory(event.target.value)
 }


 function filteredData(products, selected, query){
   let filteredProducts = products

   // filering input items
   if(query){
     filteredProducts = filterditems
   }


   // selected filter
   if(selected){
     filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title})=>
      category===selected || color===selected || company ===selected || newPrice===selected ||title===selected)
   }
  

   return filteredProducts.map(({img, title, star, reviews,newPrice, prevPrice })=>(
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
   )

   )

 }

 const result = filteredData(products, selectCategory, query)



  return (
   <>
    <Sidebar  handleChange={handleChange}/>
     <Navigation  query={query}   handleInputChange={handleInputChange}/>
     <Recommended  handleClick={handleClick}/>
     <Product result={result}/>
   
   </>
  )
}

export default App
