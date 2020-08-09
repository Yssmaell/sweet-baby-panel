import React from 'react';
import {Link} from 'react-router-dom';

const Product = (props) => {
    const {name, description, price, categories, id, stock} = props
    return (
        <tr>
            <td>
                <Link to={`/products/${id}`}>{name}</Link>                
            </td>
            <td>{description}</td>
            <td>{price}</td>
            <td>
                <ul>
                    <li>{categories}</li>
                    {/* <li>Category 01</li>
                    <li>Category 02</li>
                    <li>Category 03</li> */}
                </ul>
            </td>
            <td>{stock}</td>
        </tr>
    )
}
export default Product;