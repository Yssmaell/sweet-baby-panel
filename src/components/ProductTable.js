import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductTable = () => {

    const[products, setProducts] = useState([]);

    async function fechdataProducts (){
        const respuesta = await fetch("http://localhost:3001/api/products/")
        respuesta.json().then(res => {
            setProducts(res.data.products);
        }).catch(error => console.log (error));
    }

    useEffect(()=> {
        fechdataProducts();
    },[])

    return(
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Products Table</h1>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price $</th>
                                        <th>Categories</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, index)=>{
                                        return <Product 
                                        name = {item.name}
                                        description= {item.description}
                                        price ={item.price_venta}
                                        categories={item.categ.name} 
                                        id= {item.id}
                                        stock={item.stock}
                                        key={index}
                                        />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductTable;