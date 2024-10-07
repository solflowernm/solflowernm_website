import {useEffect, useState, useRef} from 'react'; 
import './page_styles/Radio.css'; 
import Chat from '../utils/Chat'; 
import Listen from '../utils/Listen';
import VideoJSRetriever from '../utils/VideoJSRetriever'

import {io} from 'socket.io-client'; 

const Radio = () =>{ 
    const [isLive, setIsLive] = useState(true); 

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
          src: 'http://solflowernm.com:3001/stream',
          type: 'audio/mp3'
        }]
      };

      const handlePlayerReady = (player) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on('waiting', () => {
          videojs.log('player is waiting');
        });
    
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
      };

    useEffect(() => { 

    })
    return( 
        <div className="page_content"> 


        <div className='radio_container'> 
            </div> 
                {/* <Listen /> */}
                <VideoJSRetriever 
                    options={videoJsOptions} 
                    onReady={handlePlayerReady}/> 
                {/* <Chat />  */}
            </div> 

    )
}

export default Radio; 