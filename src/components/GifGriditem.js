import React from 'react'

export const GifGriditem = ({url,title}) => {

    return (
      
        <div className="animate__animated animate__bounce">
          
            <div className="card">
                <img src={url} alt={title} />
                 <p>{title} </p>
            </div>
        </div>
        
    )
}


