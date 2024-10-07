import cannabis from './images/cannabis1.jpg'
function Home(){ 

    return(
        <div className = "page_content">


            <div className = "home_statements">

            </div>

            <br></br>
            <br></br>
            <div className = "wrapper">
                <img src = {cannabis} width = "400" className="home_img"></img>
                <div className = "inline-text-block">
                    <h1>Welcome</h1>
                    <p>Welcome to SolflowerFarm! We are a small farm located in 
                        the heart of Northern New Mexico. 
                    </p>

                    <h2>Our Story</h2>
                    <p>We have been farming cannabis in Northern New Mexico since 2022 and are interested in sustainable agricultural practices. 
                        We believe a healthy plant can only grow in healthy soil. 
                        </p>
                    <p>All of our cannabis plants are grown outdoors and without the use of pesticides. We make sure that our 
                        cannabis is just that, cannabis. 
                    </p>
                </div>
             
            </div>
        </div>
    )
}

export default Home 
