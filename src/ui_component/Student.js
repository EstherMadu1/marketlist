const Student =({prog}) => {
    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prog.map(function(pr, index){
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pr.name}</td>
                                        <td>{pr.score}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student