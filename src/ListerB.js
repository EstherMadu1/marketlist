import { useState } from "react"
import Header from "./lister_componentb/Header"
import AddItem from "./lister_componentb/AddItem"
import Content from "./lister_componentb/Content"
import Footer from "./lister_componentb/Footer"

const ListerB = () => {
  
  return (
    
    <div className="container">
      <h2>Lister B: Context api</h2>
      <Header />
      <AddItem />
      <Content />
      <Footer />
    </div>
  )
}

export default ListerB
