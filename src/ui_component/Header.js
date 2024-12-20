const Header = (props) => {
    console.log(props); //props ia passed in the form of an object
return(
    <div className="row">
        <div className="col">
            <h1 className="text-center" style={{color:'white', backgroundColor:'green', minHeight: '20vh'}}>Header</h1>
            <p className="text-center"> {props.amt} </p>
            <p>Number Of Cart Elements: {props.cc} </p>
        </div>
    </div>
)

}

export default Header