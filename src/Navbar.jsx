import React, {Component} from 'react'
import "./App.css"
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import FDA from './Pages/FDA'
import Home from './Pages/Home'
import Menu from './Pages/Inventory'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

class Navbar extends Component { 
    constructor(props){ 
        super(props)
        this.handleNavSelect = this.handleNavSelect.bind(this)
        this.state = { 
            curPage : this.props.pages[0].page_name,
            curTitle : this.props.pages[0].page_title,
            curContent : this.props.pages[0].page_content
        }
    }
    handleNavSelect(page){
        this.setState({ 
            curPage: page.page_name, 
            curTitle: page.page_title, 
            curContent: page.page_content
        })
    }
    setPage(page){ 
        this.setState({ 
            page: page
        })
        this.forceUpdate
    }
    render(){ 
        let navBar = <div className= "navigation_container" id = "nav_bar"> 

            {this.props.pages.map((page) => ( 
             
                <Link 
                style = {{textDecoration: 'none'}}
                key = {page.page_name}
                to = {`/${page.page_name.toLowerCase()}`} 
                className = "nav_buttons"
                onClick = {(page) => this.setPage(page.page_name)}
                >
                    {page.page_title}
                </Link>
            ))}
        </div>
        return(
            
        <div className = "below_canvas_div">
            <div className = "navigation_container" id = "nav_bar">
                <br></br>
                 {navBar}
                </div> 
                <Routes>
                    <Route exact path = "/" element = {<Home />} />
                    <Route path = "/home" element = {<Home />} />
                    <Route path = "/contact" element = {<Contact />} />
                    <Route path = "/menu" element = {<Menu 
                        strains = {this.props.strains}
                        viewStrain = {this.props.viewStrain}/>} />
                    <Route path = "/FDA" element = {<FDA />} />
                </Routes>
        </div>
        )
    }
}
export default Navbar