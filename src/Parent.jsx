import React, {Component} from 'react'
import Navbar from './Navbar'
import "./App.css"
import initCanvas from './canvasElements/logo'

//modals 
import StrainModal from './Modals/StrainModal'

import LogoBar from './LogoBar'



class Parent extends Component{ 
    constructor(props){ 
        super(props) 
        this.fetchStrains = this.fetchStrains.bind(this)
        this.viewStrain = this.viewStrain.bind(this)
        this.onCloseStrain = this.onCloseStrain.bind(this)
        this.state = { 
            curPage: "home", 
            pageData: [{
                page_name: "HOME",
                page_title: "HOME"
            }, {
                page_name: "CONTACT", 
                page_title: "CONTACT"
            }, {
                page_name: "MENU",
                page_title: "MENU"
            }, {
                page_name: "FDA",
                page_title: "FDA"
            }],
            strains:null,
            loaded: true, 
            //strain modal state
            strainModalOpen: false, 
            curStrain: null
        }
    }

    fetchStrains(){ 
        fetch('https://server-t9dr.onrender.com/strains')
        .then((res) => { 
            if(!res.ok){ 
                console.error('issue fetching table')
                res.status(500)
            }

            return res.json()
        })
        .then((data) => { 
            this.setState({ 
                strains: data
            })
        })
    }
    viewStrain(strain){ 
        document.body.style.overflow = 'hidden'
        this.setState({ 
            strainModalOpen: true, 
            curStrain: strain
        })
    }
    onCloseStrain(){ 
        document.body.style.overflow = "auto"
        this.setState({ 
            strainModalOpen: false
        })
    }
    componentDidMount(){
        initCanvas()
        this.fetchStrains() 
    }
    render(){ 

        return(
            <div className = "main">
                <LogoBar />
                <canvas id = "solflowernm_logo" ></canvas>
                <div className = "parent"> 
                <p className = "entertainment">for educational purposes only</p>
                    <Navbar 
                        loadTable = {this.loadTable} 
                        strains = {this.state.strains} 
                        pages = {this.state.pageData} 
                        curPage = {this.props.curPage}
                        viewStrain = {this.viewStrain}
                        />
                    <StrainModal 
                        open = {this.state.strainModalOpen}
                        strain = {this.state.curStrain}
                        onClose = {this.onCloseStrain}
                    />
                </div>
                <footer>
                    <div className='page_content footer'> 
                    <br></br>
                    <p>SolFlowerFarm LLC</p>
                    <p>(505)-553-2557</p>
                    <p>solflower27@gmail.com</p>
                    <br></br>
                    </div>
                </footer>

            </div>
          
        )
    }
}

export default Parent