import { useState } from "react"

const AddItem = ({addNewProduct}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    //validation

    if (name === '' || price === ''){
      alert('All fields are required')
    }else{
      //Generate a random number to serve as  the id
      const id = Math.random(1, 10000000) + Date.now()
    // form an object with it and send it toa function that will insert into our state
    const item = {
      name:name, //the first name enters is the key expected by the state, value is what the user typed in the form 
      price:price,
      id:id
    }
    addNewProduct(item)
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='product name' className='form-control' value={name} onChange={(e) => {setName (e.target.value)}}/>
            <input type="number" placeholder='product price' className='form-control my-4' value={price} onChange={function(e){
              setPrice(e.target.value)
            }}/>

            <button className='btn btn-secondary my-2'>Add Item To List </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddItem
