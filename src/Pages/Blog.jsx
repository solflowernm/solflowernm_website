const Blog = ({blogContent}) => {
    let render
    if(blogContent){ 
        render = blogContent.map(element => { 
            switch(element.type){ 
                case "h1": 
                    return <h1>{element.content}</h1>
                case "h2": 
                    return <h2>{element.content}</h2>
                case "p": 
                    return <p>{element.content}</p>
                case "img": 
                    return <img src = {element.src} alt = {element.content}></img>
                case "br": 
                    return <br></br>
            }
        })
    }else{ 
        render = <p>loading...</p>
    }
    return(
        <div className="page_content"> 
            <h1>Our Farm</h1>
            {render}
        </div>
    )
}
export default Blog