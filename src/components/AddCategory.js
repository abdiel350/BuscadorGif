import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategorias} ) => {

    const [inputValue, setinputValue] = useState('');

    const cambiar = (e) => {
        setinputValue(e.target.value);
    }

    const cambiando=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategorias( categorias=> [ inputValue, ...categorias]);
            setinputValue('');
        }
    }

    return (
       
        <form onSubmit={cambiando}> 
         <div className="campo">
            <input 
                type="text"
                value={inputValue}
                onChange={cambiar}
            />
            </div>
        </form>
    )
}
AddCategory.prototype={
    setCategorias:PropTypes.func.isRequired
}