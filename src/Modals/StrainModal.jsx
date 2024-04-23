import React from 'react'
import './Modal.css'
export default function StrainModal({open, strain, onClose}){ 
    if(!open){ 
        return null
    }else{ 
        return(
            <>
            <div className = "modal-overlay" />
            <div className='modal page_content'> 
                <div className = "scrollable-modal"> 
                    
                <button id = "close-modal" onClick = {onClose}>x</button>
                <h1>{strain.strain}</h1>
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
