import React, {Component} from 'react'
import instagramLogo from './images/instagram.png'
import youtubeLogo from './images/youtube.png'

class LogoBar extends Component{ 
    
    render(){ 
        return(
            <div className = "socialBar">
                <div className='icons'>
                    <a 
                    href = "https://www.instagram.com/solflowernm/" 
                    target = "_blank">
                        <img src = {instagramLogo} id = "instagram_logo" className = "icons_individual" />
                    </a>
                    <a 
                    href = "https://www.youtube.com" 
                    target = "_blank">
                        <img 
                        src = {youtubeLogo} 
                        id = "youtube_logo" 
                        className = "icons_individual" />
                    </a>
                </div>
            </div>
        )
    }
}

export default LogoBar