import React,{Fragment} from 'react';
//import React,{useState, useEffect, Fragment} from 'react';
import {GifGriditem} from './GifGriditem';

import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

   //const [images, setimages] = useState([]);

  const {data, loading} = useFetchGifs(category);  


    return (
        <Fragment>
            <h3 className="centrar">{category}:</h3>

            {loading && <p className="animate__animated animate__flash"> Cargando </p> }
           <div className="card-grid">
                {
                    data.map(img => (
                        <GifGriditem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> 
        </Fragment>
    )
}
