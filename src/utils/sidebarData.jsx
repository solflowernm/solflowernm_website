import Radio from '../Pages/Radio'; 
import Lot from '../Pages/Lot'; 
import Gallery from '../Pages/Lot'; 

const sidebarData = [ 

    {
        title: "Radio", 
        item: <Radio />, 
        endpoint: '/radio'

    }, {
        title: "Gallery", 
        item: <Gallery />, 
        endpoint: '/gallery'
    }, { 
        title: "Lot Number History", 
        item: <Lot />, 
        endpoint: '/lot'
    }
]

export default sidebarData; 