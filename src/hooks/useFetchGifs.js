import {useState,useEffect} from 'react';
import {GetGif} from '../Utilidad/GetGif';

export const useFetchGifs = (category) => {

    const[state, setState] = useState({
        data:[],
        loading:true
    });


   useEffect( () => {

       GetGif(category)
        .then( imgs => {

            setTimeout(() => {
               // console.log(imgs);
            setState({
                data: imgs,
                loading:false
            });

        },3000);

        })
        
    },[category])




    return state;
}
