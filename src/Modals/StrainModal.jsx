import React from 'react'
import sativa from '../images/labels/sativa.jpg'
import indica from '../images/labels/indica.jpg'
import hybrid from '../images/labels/hybrid.jpg'
import './Modal.css'
export default function StrainModal({open, strain, onClose}){ 
    
    if(!open){ 
        
        return null
    }else{ 
        let modal_class = 'modal page_content' + ' ' + strain.strain_type
        let label_image = null
        switch(strain.strain_type){ 
            case 'sativa': 
            label_image = sativa; 
            break; 
            case 'indica': 
            label_image = indica
            break; 
            case 'hybrid': 
            label_image = hybrid
            break; 
        }
        return(
            <>
            <div className = "modal-overlay"/>
            <div className={modal_class}> 
                <div className = "scrollable-modal"> 
                    
                    <button id = "close-modal" className = {strain.strain_type} onClick = {onClose}>x</button>
                    <h1>{strain.strain}</h1>
                    <img className='label_img' src = {label_image} />
                    <p>available (weight): {strain.weight}lbs</p>
                    <h2>about strain: </h2>
                    <p>{strain.about}</p>
                    <h2>effects:</h2>
                    <p>{strain.effects}</p>

                </div>
            </div>
            </>
        )
    }
}
