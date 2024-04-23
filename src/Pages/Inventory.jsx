function Menu({strains, viewStrain}){ 
    let render
    console.log(strains)
    strains == null ? 
    render = <p>loading...</p> : 
    render = <div>
        <table> 
            <tbody>
            <tr> 
                <td>strain</td>   
                <td>available</td> 

            </tr>
            {strains.map((strain) => (
                <tr key = {strain.strain}>
                    <td>
                        {strain.strain}
                    </td>
                    <td>
                        yes
                    </td>
                    <td onClick = {() => viewStrain(strain)}>view more</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    return(
        <div className = "page_content"> 
                    <br></br>
            <br></br>
            <h1>Menu</h1>
            {render}
            {/* <p>coming soon!</p> */}
            </div>
    )
}

export default Menu