import React from 'react';

function ProductDetails(props) {
    console.log(props);
    const p = props.location;
    return (
        <div>
            <h1>{p.id}</h1>
            <h1>{p.title}</h1>
            <img src={p.image} alt="product" />
            <p>{p.desc}</p>
        </div>
    )
}

export default ProductDetails
