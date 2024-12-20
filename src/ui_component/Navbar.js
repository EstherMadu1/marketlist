const Navbar = ({xyz, cartCount}) => {
    //Internal styling
    //instead of calling props as an arguement you can destructure it so you can get it on after the other
    const styleH1 = {
        color: 'green',
        backgroundColor: 'ghostwhite',
        padding: '20px',
        minHeight: "10vh"
    }
    return(
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={styleH1}>Navbar</h1>
                <p className="text-center">{xyz}</p>
                <p className="text-center">I am the nav ooo : {cartCount}</p>
            </div>
        </div>
        //Props are immutable they are not to be changed, children can only receive props they cannot update it 
    )
    
    }
    
    export default Navbar;