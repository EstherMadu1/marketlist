import { createContext, useState, useEffect  } from "react"; //useState|useEffect|createContext()



const ListContext = createContext();

// a provider

const ListProvider = ({children}) =>{
    //set up the state 
    //set up all functions that the components need
    //create a function check inside localStorage and see if there is any marketList in the localstorage, it is not there, it will return empty array

    function fetchListFromLocalStorage(){
        const initialList = localStorage.getItem('marketList')
        const realList = initialList ? JSON.parse(initialList) : [];
        return realList
    }
    const[list, setList] = useState(fetchListFromLocalStorage());
    //set up all functions that the component used
    //useEffect will help us to update localstorage wwhenever a new list is created or deleted

    useEffect(function(){
        localStorage.setItem("marketList", JSON.stringify(list));
    }, [list])

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
  return(
    <ListContext.Provider value={{list, addNewProduct, deleteItem}}>
        {children}
    </ListContext.Provider>
  )
}

export {ListContext, ListProvider}
