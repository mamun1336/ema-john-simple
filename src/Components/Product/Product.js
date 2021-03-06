import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);

    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className = 'productDetails'>
            <div className = 'imageSection'>
                <img src= {img} alt="" />
            </div>
            <div className = 'infoSection'>
                <h4><Link style = {{textDecoration: 'none'}} to= {"/product/"+key}>{name}</Link></h4>
                    <br />
                    <p><small>by: {seller}</small></p>
                    <br />
                    <p><small>${price}</small></p>
                    <br />
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <br />
                
                {props.showAddToCart && <button onClick = {() => props.addToCart(props.product)}><FontAwesomeIcon icon= {faShoppingCart}/> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;