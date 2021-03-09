import React from 'react';
import GiphysIndexItem from './giphys_index_item';

function GiphysIndex(giphys){

    // console.log(giphys.giphys)
    return(
        <div>
            {giphys.giphys.map((img, idx) =>{
                return <GiphysIndexItem key={idx} img={img}/>
            })}
        </div>
    )
}

export default GiphysIndex;