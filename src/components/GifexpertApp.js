import React, { Fragment, useState } from 'react'
import {AddCategory} from '../components/AddCategory';

import {GifGrid} from '../components/GifGrid';


export const GifexpertApp = () => {
    const [categorias, setCategorias]= useState(['Mountain bike']);


    return (
        <Fragment>
        
            <h2 className="centrar">Busca tu Gif Favorito aqui, solo escribe y pulsa enter...</h2>
           
            <AddCategory setCategorias={setCategorias}/>
             <br/>   
       
             <ol>
                 {
                     categorias.map(category => (
                            <GifGrid
                            key={category}
                            category={category}
                            /> 
                     ))
                 }
             </ol>
        </Fragment>
    )
}

