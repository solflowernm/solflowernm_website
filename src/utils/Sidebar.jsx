import sidebarData from './sidebarData'; 
import {Link} from 'react-router-dom'; 


const Sidebar = ({sidebarActive, setPage}) => { 
    return(
        <div className={sidebarActive ? "sidebar active" : "sidebar"}> 
            {sidebarData.map(item => { 

                return(
                
                    <Link 
                    style = {{textDecoration: 'none'}}
                    key= {item.endpoint}
                    className='sidebar_content'
                    to={item.endpoint} 
                    onClick={() => setPage(item.endpoint)}>
                        {item.title}
                    </Link>
              
                )
            })}
        </div> 
    )
}

export default Sidebar;