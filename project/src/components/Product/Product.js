import React from 'react';

const Product = (props) => {
    const {title,image, price}= props.product;
    const imageStyle = {height: '200px',width:'200px'}
    const productStyle = {border: '1px solid red', margin:'10px',padding:'10px'}
    const handleAddProduct = props.handleAddProduct;
    return (
        <div style= {productStyle}>
            <h4>This is a {title} </h4>
            <img style={imageStyle} src={image} alt=""/>
            <p>Price {price} </p>
            <button onClick={() => handleAddProduct(props.product)}>Add Product</button>
           
            
        </div>
    );
};

export default Product;