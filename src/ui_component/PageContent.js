import "./pagecontent.css";
import fineGirl from "../esther.jpg"

const PageContent = ({students}) => {
    return(
        <div className="row content">
            <div className="col">
                <h1 className="text-center">PageContent</h1>
                <div className="row">
                    <div className="col-md-5">
                        <p>Image Located Inside Src folder</p>
                        <img src={fineGirl} className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <p>Image Located Inside Public folder</p>
                        <img src="/est.jpg" className="img-fluid" alt="an image of a very fine girl"/>
                    </div>
                </div>

                <div className="row">
                    {
                        students.map((student, index)=>{
                            return (
                                <div className="col-md-3 p-3 bg-primary">
                                    <ul>
                                        <li>{student}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                
                </div>
            </div>
        
    )
    
    }
    
    export default PageContent;