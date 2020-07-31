import React from 'react';
// write your CatList component here
const CatList = props => {

    return (
        <div>
            {props.catPics.map(cat => <img key={cat.id} src={cat.url}/>)}
        </div>
    
    )
}

export default CatList