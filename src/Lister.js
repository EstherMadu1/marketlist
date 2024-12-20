import { useState } from "react"
import Header from "./lister_component/Header"
import AddItem from "./lister_component/AddItem"
import Content from "./lister_component/Content"
import Footer from "./lister_component/Footer"

const Lister = () => {
  const initialList = [
    {name:"1l Greek Yoghurt Parfait", price:"25000", id:100},
    {name:"1phone 16", price:"25000000", id:200},
    {name:"Mac Laptop", price:"55000000", id:300},
    {name:"Plate of peppersoup", price:"10000", id:400}
  ]
  const[list, setList] = useState(initialList);
  //this function receives a product 
  function addNewProduct(product){
      setList([product,...list])  //this address the position product comes fist list comes second if i destructure list befor eproduct it will come first
  }

  //A function that accepts id of product to delete and then delete it
  function deleteItem(id){
    //Filter the current state and filter out product that has the id that was passed
    const filteredProduct = list.filter(function(li){
      return li.id !== id;
    })
    setList(filteredProduct)
  }
  return (
    <div className="container">
      <Header lists={list}/>
      <AddItem addNewProduct={addNewProduct}/>
      <Content lists={list} deleteItem={deleteItem} />
      <Footer />
    </div>
  )
}

export default Lister
