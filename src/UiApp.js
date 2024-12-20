import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./ui_component/Header";
import Navbar from "./ui_component/Navbar";
import PageContent from "./ui_component/PageContent";
import Footer from "./ui_component/Footer";
import Student from "./ui_component/Student"

import "./main.css";

const UiApp = () => {
  let amount = 2000;
  let cartCount = 2;
  let students = ["Sule", "Oyin", "Kamo", "Bimbo"];
//Every functional component muts return a jsx

let programmers = [
  {name: 'John', score:23},
  {name: 'Ola', score:33},
  {name: 'Yemi', score:45},
  {name: 'Sule', score:23},
  {name: 'Goke', score:15},
  {name: 'Yemisi', score:49}
]

//create my company I will loop through it and display it there
return(
  <div className="container">
    <Header  amt={amount} cc={cartCount}/>
    <Navbar xyz={amount} cartCount={cartCount} />
    <PageContent students={students} />
    <Student prog={programmers}/>
    <Footer />
  </div>
)
}

export default UiApp;