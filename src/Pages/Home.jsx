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
                    <p>We have been farming cannabis in Northern New Mexico since 2022, farming is a passion of our family, and we 
                        hope to deliver the best quality product to dispensaries in New Mexico.                      
                    </p>
                    <p>
                        
                    Cannabis is composed of over 120 components known as 
                    cannabinoids. While the specific effects of each 
                    cannabinoid are not fully understood, two well-known 
                    ones are cannabidiol (CBD) and tetrahydrocannabinol 
                    (THC).
                    </p>
                    <p>
                    Short-term effects of cannabis include relaxation, 
                    euphoria, heightened sensory perception, increased 
                    appetite, altered time perception, and creativity. 
                    Products with high CBD levels show fewer effects compared 
                    to those with more THC.
                    </p>
                    <p>
                        We advise anybody using our products to 
                        start out small, and work your way up to 
                        smoking or ingesting larger amounts. 
                        Cannabis may cause anxiety, 
                        delayed reaction time, increased heart rate, 
                        or paranoia. Please consume responsibly.
                    </p>

                    <h2>Our Story</h2>
                    <p>We have been farming in Northern New Mexico for a litle 
                        over a decade now, and have been interested in organic 
                        and sustainable farming practices. We believe that a
                        healthy plant can only grow from healthy soil, and we know that 
                        healthy soil cannot be maintained under artifical conditions.
                    </p>
                    <p>We are committed to grow a pesticide and herbicide free 
                        product and honoring our responsibility as cannabis grows 
                        to the cannabis consumers of New Mexico. We want our consumers to know that 
                        they are smoking a happy and healthy plant.
                    </p>
                    <p>When it comes to plants, we are </p>
                </div>
             
            </div>
        </div>
    )
}

export default Home 
