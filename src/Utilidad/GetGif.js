

   export  const GetGif = async( category )=> {
        const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=TOIr1uO0c5KOzbU2gQZWmLHK5lecw3wM`;
        
        const resp= await fetch(url);
        const {data}= await resp.json();

        const respuesta = data.map(img =>{ 
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
    
    return respuesta;       
    }